/**
 * Auth-event controller for the Book Library page.
 * Same-author events do not restart a load or drop an in-flight create.
 * Same-author Refresh during a create does not abort that POST or bump generation.
 * A lost create response, a lost upstream acknowledgement, or a successful response
 * followed by a failed owner lookup is an unknown outcome. It does not say the book
 * was saved or that the save failed. A pre-forward 503 is a definite failure.
 * A later list that omits the title does not make another create safe.
 * An unverified identity conceals the draft and its uncertain-save flag, and
 * restores both only for that same author. An owner change clears them.
 */

import {
  applyCreate,
  applyLoad,
  beginLoad,
  concealBooksForSignOut,
  failSignOut,
  initialLibraryState,
  noteMissingUncertainTitle,
  requestCreate,
  type LibraryState,
  type LoadOutcome,
} from "./book-library-state";
import { outcomeForCreateStatus } from "./book-create-document";

export type SignOutResult = { error: boolean };

export type LibrarySessionDeps = {
  fetchBooks: (signal: AbortSignal) => Promise<Response>;
  createBook: (title: string, ownerKey: string, signal: AbortSignal) => Promise<Response>;
  readOwner: () => Promise<string | null>;
  signOut: () => Promise<SignOutResult>;
  goToLogin: () => void;
};

export type LibrarySessionSnapshot = {
  model: LibraryState;
  draftTitle: string;
};

export type AuthListen = (notify: (event: string, nextOwner: string | null) => void) => () => void;

async function createFailureCode(response: Response): Promise<string | null> {
  try {
    const payload: unknown = await response.json();
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) return null;
    const error = (payload as { error?: unknown }).error;
    return typeof error === "string" ? error : null;
  } catch {
    return null;
  }
}

/**
 * After the first load, reload only when the authenticated author changes.
 * SIGNED_IN, TOKEN_REFRESHED, and USER_UPDATED for the same author do not.
 */
export function shouldReloadForAuthEvent(input: {
  event: string;
  currentOwner: string | null;
  nextOwner: string | null;
  hasLoaded: boolean;
}): boolean {
  if (!input.hasLoaded) return true;
  const sameAuthor = input.nextOwner === input.currentOwner;
  if (sameAuthor && (
    input.event === "INITIAL_SESSION" ||
    input.event === "SIGNED_IN" ||
    input.event === "TOKEN_REFRESHED" ||
    input.event === "USER_UPDATED"
  )) return false;
  return !sameAuthor;
}

export type LibrarySession = {
  snapshot: () => LibrarySessionSnapshot;
  subscribe: (listener: (snapshot: LibrarySessionSnapshot) => void) => () => void;
  setDraftTitle: (value: string) => void;
  onAuthEvent: (event: string, nextOwner: string | null) => Promise<void>;
  attachAuth: (listen: AuthListen) => () => void;
  refresh: () => Promise<void>;
  retryUncertainCreate: () => Promise<void>;
  submitCreate: () => Promise<void>;
  signOut: () => Promise<void>;
  failConfiguration: () => void;
  dispose: () => void;
};

export function createLibrarySession(deps: LibrarySessionDeps): LibrarySession {
  let model = initialLibraryState();
  let draftTitle = "";
  let owner: string | null = null;
  let createEvidence: { ownerKey: string; title: string; knownBookIds: Set<string> | null } | null = null;
  let concealedDraft: {
    ownerKey: string;
    title: string;
    createWasPending: boolean;
    createUncertain: boolean;
  } | null = null;
  let hasLoaded = false;
  let loadAbort: AbortController | null = null;
  let createAbort: AbortController | null = null;
  const listeners = new Set<(snapshot: LibrarySessionSnapshot) => void>();

  function snapshot(): LibrarySessionSnapshot {
    return { model, draftTitle };
  }

  function emit() {
    const next = snapshot();
    for (const listener of listeners) listener(next);
  }

  function subscribe(listener: (next: LibrarySessionSnapshot) => void) {
    listeners.add(listener);
    return () => { listeners.delete(listener); };
  }

  function setDraftTitle(value: string) {
    draftTitle = value;
    emit();
  }

  function startLoad(ownerKey: string | null): Promise<void> {
    const ownerChanged = ownerKey !== owner;
    if (ownerKey === null) {
      concealedDraft = null;
      createEvidence = null;
      draftTitle = "";
    }
    loadAbort?.abort();
    if (ownerChanged) createAbort?.abort();
    if (ownerChanged) {
      // Auth event payloads are hints, not independent identity verification.
      // Keep a matching concealed draft off-snapshot until runLoad verifies it.
      if (concealedDraft?.ownerKey !== ownerKey) {
        concealedDraft = null;
        createEvidence = null;
      }
      draftTitle = "";
    }
    const controller = new AbortController();
    loadAbort = controller;
    const generation = model.generation + 1;
    owner = ownerKey;
    hasLoaded = true;
    model = beginLoad(model, ownerKey, generation);
    emit();
    if (ownerKey === null) {
      model = applyLoad(model, generation, null, { kind: "unauthorized" });
      emit();
      return Promise.resolve();
    }
    return runLoad(ownerKey, generation, controller);
  }

  async function runLoad(ownerKey: string, generation: number, controller: AbortController) {
    // Resolve the HTTP outcome first, but do not publish any result until the
    // current author is verified. Failed GETs can also race an account switch.
    let outcome: LoadOutcome;
    try {
      const response = await deps.fetchBooks(controller.signal);
      if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
      if (response.status === 401) {
        outcome = { kind: "unauthorized" };
      } else if (!response.ok) {
        outcome = { kind: "error" };
      } else {
        try {
          outcome = { kind: "ok", books: await response.json() };
        } catch {
          outcome = { kind: "error" };
        }
      }
    } catch {
      outcome = { kind: "error" };
    }
    if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;

    let liveOwner: string | null;
    try {
      liveOwner = await deps.readOwner();
    } catch {
      if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
      concealForUnverifiedIdentity();
      return;
    }
    if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
    if (liveOwner !== ownerKey) {
      // A failed GET is not proof the original author is still signed in.
      // Transition before emitting any status or exposing the previous draft.
      await startLoad(liveOwner);
      return;
    }

    if (concealedDraft?.ownerKey === liveOwner) {
      draftTitle = concealedDraft.title;
      model = { ...model, createUncertain: concealedDraft.createWasPending || concealedDraft.createUncertain };
      concealedDraft = null;
    }
    const uncertain = model.createUncertain;
    const trimmed = draftTitle.trim();
    model = applyLoad(model, generation, ownerKey, outcome);
    if (outcome.kind === "ok" && uncertain && model.phase !== "error") {
      // Titles are not unique. Only a new row relative to a known pre-create
      // list is reconciliation evidence. An unavailable baseline stays unknown.
      const evidence = createEvidence;
      const knownBookIds = evidence?.knownBookIds;
      const visible = evidence?.ownerKey === ownerKey && evidence.title === trimmed &&
        knownBookIds != null && model.books.some((item) =>
          item.title === trimmed && !knownBookIds.has(item.id));
      if (visible) draftTitle = "";
      else model = noteMissingUncertainTitle(model);
    }
    emit();
  }

  function onAuthEvent(event: string, nextOwner: string | null): Promise<void> {
    if (!shouldReloadForAuthEvent({ event, currentOwner: owner, nextOwner, hasLoaded })) {
      return Promise.resolve();
    }
    return startLoad(nextOwner);
  }

  function attachAuth(listen: AuthListen) {
    return listen((event, nextOwner) => { void onAuthEvent(event, nextOwner); });
  }

  function concealForUnverifiedIdentity() {
    // Keep the title and its uncertain-save flag off the visible snapshot.
    // Aborting the request does not reverse a server write. This path does
    // not say the save failed and does not treat the author as signed out.
    if (owner !== null && (draftTitle !== "" || model.createPending || model.createUncertain)) {
      concealedDraft = {
        ownerKey: owner,
        title: draftTitle,
        createWasPending: model.createPending,
        createUncertain: model.createUncertain,
      };
    }
    loadAbort?.abort();
    createAbort?.abort();
    draftTitle = "";
    const generation = model.generation + 1;
    owner = null;
    hasLoaded = true;
    model = applyLoad(beginLoad(model, null, generation), generation, null, { kind: "error" });
    emit();
  }

  async function refresh() {
    let nextOwner: string | null;
    try {
      nextOwner = await deps.readOwner();
    } catch {
      concealForUnverifiedIdentity();
      return;
    }
    // A same-author refresh must not discard an in-flight create acknowledgement.
    // The POST is left running. Success still reloads this author afterwards.
    if (model.createPending && nextOwner === owner) return;
    await startLoad(nextOwner);
  }

  async function retryUncertainCreate() {
    if (!model.createUncertain || draftTitle.trim() === "") return;
    await submitCreate(true);
  }

  async function submitCreate(acknowledgeRisk = false) {
    const trimmed = draftTitle.trim();
    if (!trimmed) return;
    let ownerKey: string | null;
    try {
      ownerKey = await deps.readOwner();
    } catch {
      concealForUnverifiedIdentity();
      return;
    }
    if (ownerKey !== owner) {
      await startLoad(ownerKey);
      return;
    }
    if (acknowledgeRisk) {
      if (!model.createUncertain) return;
      model = { ...model, createUncertain: false };
    }
    const opened = requestCreate(model, ownerKey);
    if (!opened.ok && acknowledgeRisk) {
      model = { ...model, createUncertain: true };
      emit();
    }
    if (!opened.ok || !ownerKey) return;
    const generation = opened.state.createGeneration;
    if (generation === null) return;
    createEvidence = {
      ownerKey,
      title: trimmed,
      knownBookIds: model.phase === "empty" || model.phase === "populated"
        ? new Set(model.books.map(item => item.id)) : null,
    };
    model = opened.state;
    emit();
    const controller = new AbortController();
    createAbort?.abort();
    createAbort = controller;
    try {
      const response = await deps.createBook(trimmed, ownerKey, controller.signal);
      if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
      // Consume asynchronous error bodies before the final identity check.
      const transport = outcomeForCreateStatus(response.status,
        response.status === 503 ? await createFailureCode(response) : null);
      if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
      let liveOwner: string | null = null;
      let ownerLookupFailed = false;
      try {
        liveOwner = await deps.readOwner();
      } catch {
        ownerLookupFailed = true;
      }
      if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
      if (ownerLookupFailed) {
        // Neither a successful nor a failed HTTP response proves who is now
        // authenticated. Hide the private draft until identity is verified.
        // The pending POST is retained as uncertain for the original author.
        concealForUnverifiedIdentity();
        return;
      }
      if (!ownerLookupFailed && (liveOwner !== ownerKey || owner !== ownerKey)) {
        if (liveOwner !== ownerKey) await startLoad(liveOwner);
        return;
      }
      if (response.status === 401) {
        model = applyCreate(model, generation, ownerKey, "unauthorized");
        emit();
        return;
      }
      if (response.status === 409) {
        model = applyCreate(model, generation, ownerKey, "session_changed");
        emit();
        return;
      }
      if (transport !== null) {
        model = applyCreate(model, generation, ownerKey, transport === "error" ? "error" : "unknown");
        emit();
        return;
      }
      if (!response.ok) {
        model = applyCreate(model, generation, ownerKey, "error");
        emit();
        return;
      }
      draftTitle = "";
      model = applyCreate(model, generation, ownerKey, "ok");
      emit();
      await startLoad(ownerKey);
    } catch {
      if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
      // A rejected POST can race a silent account switch. Never publish its
      // uncertain-save status or preserve the draft for an unverified author.
      let liveOwner: string | null;
      try {
        liveOwner = await deps.readOwner();
      } catch {
        if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
        concealForUnverifiedIdentity();
        return;
      }
      if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
      if (liveOwner !== ownerKey) {
        await startLoad(liveOwner);
        return;
      }
      model = applyCreate(model, generation, ownerKey, "unknown");
      emit();
    }
  }

  async function signOut() {
    loadAbort?.abort();
    createAbort?.abort();
    model = concealBooksForSignOut(model);
    emit();
    let failed = false;
    try {
      const result = await deps.signOut();
      failed = result.error;
    } catch {
      failed = true;
    }
    if (failed) {
      model = failSignOut(model);
      emit();
      return;
    }
    await startLoad(null);
    deps.goToLogin();
  }

  function failConfiguration() {
    const generation = model.generation + 1;
    owner = null;
    hasLoaded = true;
    draftTitle = "";
    model = applyLoad(beginLoad(model, null, generation), generation, null, { kind: "error" });
    emit();
  }

  function dispose() {
    loadAbort?.abort();
    createAbort?.abort();
    hasLoaded = false;
  }

  return {
    snapshot,
    subscribe,
    setDraftTitle,
    onAuthEvent,
    attachAuth,
    refresh,
    retryUncertainCreate,
    submitCreate,
    signOut,
    failConfiguration,
    dispose,
  };
}

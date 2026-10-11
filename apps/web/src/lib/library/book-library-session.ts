/**
 * Auth-event controller for the Book Library page.
 * Same-author events do not restart a load or drop an in-flight create.
 * Same-author Refresh during a create does not abort that POST or bump generation.
 * A lost create response, or a successful response followed by a failed owner lookup,
 * is an unknown outcome. It does not say the book was saved or that the save failed.
 * An owner change clears the unsaved title and ignores the previous response.
 */

import {
  applyCreate,
  applyLoad,
  beginLoad,
  concealBooksForSignOut,
  failSignOut,
  initialLibraryState,
  requestCreate,
  type LibraryState,
} from "./book-library-state";

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
  submitCreate: () => Promise<void>;
  signOut: () => Promise<void>;
  failConfiguration: () => void;
  dispose: () => void;
};

export function createLibrarySession(deps: LibrarySessionDeps): LibrarySession {
  let model = initialLibraryState();
  let draftTitle = "";
  let owner: string | null = null;
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
    loadAbort?.abort();
    if (ownerChanged) createAbort?.abort();
    if (ownerChanged) draftTitle = "";
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
    try {
      const response = await deps.fetchBooks(controller.signal);
      if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
      if (response.status === 401) {
        model = applyLoad(model, generation, ownerKey, { kind: "unauthorized" });
        emit();
        return;
      }
      if (!response.ok) {
        model = applyLoad(model, generation, ownerKey, { kind: "error" });
        emit();
        return;
      }
      const payload: unknown = await response.json();
      const liveOwner = await deps.readOwner();
      if (controller.signal.aborted || model.generation !== generation || liveOwner !== ownerKey) return;
      const uncertain = model.createUncertain;
      model = applyLoad(model, generation, ownerKey, { kind: "ok", books: payload });
      if (uncertain && model.createUncertain === false) {
        const trimmed = draftTitle.trim();
        if (trimmed !== "" && model.books.some((item) => item.title === trimmed)) draftTitle = "";
      }
      emit();
    } catch {
      if (controller.signal.aborted || model.generation !== generation) return;
      model = applyLoad(model, generation, ownerKey, { kind: "error" });
      emit();
    }
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

  async function refresh() {
    let nextOwner: string | null;
    try {
      nextOwner = await deps.readOwner();
    } catch {
      // Identity could not be verified. Conceal the previous author's draft and
      // in-flight work; an aborted POST may still commit, so do not claim failure.
      loadAbort?.abort();
      createAbort?.abort();
      draftTitle = "";
      const generation = model.generation + 1;
      owner = null;
      hasLoaded = true;
      model = applyLoad(beginLoad(model, null, generation), generation, null, { kind: "error" });
      emit();
      return;
    }
    // A same-author refresh must not discard an in-flight create acknowledgement.
    // The POST is left running. Success still reloads this author afterwards.
    if (model.createPending && nextOwner === owner) return;
    await startLoad(nextOwner);
  }

  async function submitCreate() {
    const trimmed = draftTitle.trim();
    if (!trimmed) return;
    let ownerKey: string | null;
    try {
      ownerKey = await deps.readOwner();
    } catch {
      ownerKey = null;
    }
    if (ownerKey !== owner) {
      await startLoad(ownerKey);
      return;
    }
    const opened = requestCreate(model, ownerKey);
    if (!opened.ok || !ownerKey) return;
    const generation = opened.state.createGeneration;
    if (generation === null) return;
    model = opened.state;
    emit();
    const controller = new AbortController();
    createAbort?.abort();
    createAbort = controller;
    try {
      const response = await deps.createBook(trimmed, ownerKey, controller.signal);
      if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
      let liveOwner: string | null = null;
      let ownerLookupFailed = false;
      try {
        liveOwner = await deps.readOwner();
      } catch {
        ownerLookupFailed = true;
      }
      if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
      if (ownerLookupFailed && response.ok) {
        model = applyCreate(model, generation, ownerKey, "unknown");
        emit();
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
    submitCreate,
    signOut,
    failConfiguration,
    dispose,
  };
}

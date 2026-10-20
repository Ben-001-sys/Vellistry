/**
 * Account-scoped Book Library view model.
 * Late responses apply only when both the request generation and owner still match.
 * Book rows are omitted from every non-populated phase.
 */

export type BookSummary = {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
};

export type LibraryPhase = "loading" | "empty" | "populated" | "error" | "unauthorized";

export const LIBRARY_COPY = {
  loading: "Loading your books...",
  empty: "No books yet. Create your first book.",
  unauthorized: "Please sign in to see your books.",
  loadError: "Unable to load books. Try again.",
  createError: "Could not create this book. Your title remains in the field.",
  createUnknown: "The book creation result is unknown. Check your books before trying again.",
  createAbsent: "This book creation is not confirmed by the updated list. Creating it again may create a duplicate if the first request is still finishing.",
  sessionChanged: "Your session changed. This book creation request was rejected.",
  signingOut: "Signing out...",
  signOutError: "Sign-out did not complete. You may still be signed in. Try signing out again.",
} as const;

export type LibraryState = {
  phase: LibraryPhase;
  books: BookSummary[];
  status: string;
  ownerKey: string | null;
  generation: number;
  createPending: boolean;
  createOwnerKey: string | null;
  createGeneration: number | null;
  createUncertain: boolean;
};

export type LoadOutcome =
  | { kind: "ok"; books: unknown }
  | { kind: "unauthorized" }
  | { kind: "error" };

export type CreateOutcome = "ok" | "unauthorized" | "error" | "session_changed" | "unknown";

export type LibraryRegion = {
  phase: LibraryPhase;
  status: string;
  emptyCopy: string | null;
  books: BookSummary[];
  canCreate: boolean;
  showRefresh: boolean;
  showRetry: boolean;
  showRiskRetry: boolean;
  showSignIn: boolean;
};

export function initialLibraryState(): LibraryState {
  return {
    phase: "loading",
    books: [],
    status: LIBRARY_COPY.loading,
    ownerKey: null,
    generation: 0,
    createPending: false,
    createOwnerKey: null,
    createGeneration: null,
    createUncertain: false,
  };
}

export function normalizeBookList(value: unknown): BookSummary[] | null {
  if (!Array.isArray(value)) return null;
  const books: BookSummary[] = [];
  for (const item of value) {
    if (!item || typeof item !== "object" || Array.isArray(item)) return null;
    const row = item as Record<string, unknown>;
    if (typeof row.id !== "string" || typeof row.title !== "string") return null;
    if (typeof row.created_at !== "string" || typeof row.updated_at !== "string") return null;
    books.push({
      id: row.id,
      title: row.title,
      created_at: row.created_at,
      updated_at: row.updated_at,
    });
  }
  return books;
}

function clearedCreate(): Pick<LibraryState, "createPending" | "createOwnerKey" | "createGeneration"> {
  return { createPending: false, createOwnerKey: null, createGeneration: null };
}

/** Starts a load for one owner. A generation that is not newer is ignored. */
export function beginLoad(state: LibraryState, ownerKey: string | null, generation: number): LibraryState {
  if (!Number.isInteger(generation) || generation <= state.generation) return state;
  return {
    phase: "loading",
    books: [],
    status: LIBRARY_COPY.loading,
    ownerKey,
    generation,
    ...clearedCreate(),
    createUncertain: ownerKey === state.ownerKey && state.createUncertain,
  };
}

export function applyLoad(
  state: LibraryState,
  generation: number,
  ownerKey: string | null,
  outcome: LoadOutcome,
): LibraryState {
  if (generation !== state.generation || ownerKey !== state.ownerKey) return state;
  if (outcome.kind === "unauthorized") {
    return {
      ...state,
      phase: "unauthorized",
      books: [],
      status: LIBRARY_COPY.unauthorized,
      ...clearedCreate(),
    };
  }
  if (outcome.kind === "error") {
    return {
      ...state,
      phase: "error",
      books: [],
      status: LIBRARY_COPY.loadError,
      ...clearedCreate(),
    };
  }
  const books = normalizeBookList(outcome.books);
  if (!books) {
    return {
      ...state,
      phase: "error",
      books: [],
      status: LIBRARY_COPY.loadError,
      ...clearedCreate(),
    };
  }
  if (books.length === 0) {
    return {
      ...state,
      phase: "empty",
      books: [],
      status: LIBRARY_COPY.empty,
      ...clearedCreate(),
      createUncertain: false,
    };
  }
  return {
    ...state,
    phase: "populated",
    books,
    status: "",
    ...clearedCreate(),
    createUncertain: false,
  };
}

/** Clears visible titles while a sign-out attempt is in flight. The owner is unchanged. */
export function concealBooksForSignOut(state: LibraryState): LibraryState {
  return {
    ...state,
    phase: "loading",
    books: [],
    status: LIBRARY_COPY.signingOut,
    ...clearedCreate(),
    // Aborting the client request cannot cancel a POST already accepted by Nest.
    // If sign-out fails, retain the uncertainty lock for the same author.
    createUncertain: state.createUncertain || state.createPending,
  };
}

/** Keeps the list cleared and does not describe the author as signed out. */
export function failSignOut(state: LibraryState): LibraryState {
  return {
    ...state,
    phase: "error",
    books: [],
    status: LIBRARY_COPY.signOutError,
    ...clearedCreate(),
  };
}

export function requestCreate(
  state: LibraryState,
  ownerKey: string | null,
): { ok: true; state: LibraryState } | { ok: false; state: LibraryState } {
  if (state.createPending || state.createUncertain) return { ok: false, state };
  if (ownerKey === null || state.phase === "loading" || state.phase === "unauthorized") {
    return { ok: false, state };
  }
  if (ownerKey !== state.ownerKey) return { ok: false, state };
  return {
    ok: true,
    state: {
      ...state,
      createPending: true,
      createOwnerKey: ownerKey,
      createGeneration: state.generation,
      createUncertain: false,
    },
  };
}

export function applyCreate(
  state: LibraryState,
  generation: number,
  ownerKey: string | null,
  outcome: CreateOutcome,
): LibraryState {
  if (!state.createPending) return state;
  if (state.createGeneration !== generation || state.createOwnerKey !== ownerKey) return state;
  if (state.ownerKey !== ownerKey || state.generation !== generation) return state;
  if (outcome === "ok") {
    return { ...state, ...clearedCreate(), createUncertain: false };
  }
  if (outcome === "unknown") {
    return {
      ...state,
      status: LIBRARY_COPY.createUnknown,
      ...clearedCreate(),
      createUncertain: true,
    };
  }
  if (outcome === "unauthorized") {
    return {
      ...state,
      phase: "unauthorized",
      books: [],
      status: LIBRARY_COPY.unauthorized,
      ...clearedCreate(),
    };
  }
  if (outcome === "session_changed") {
    return {
      ...state,
      status: LIBRARY_COPY.sessionChanged,
      ...clearedCreate(),
    };
  }
  return {
    ...state,
    status: LIBRARY_COPY.createError,
    ...clearedCreate(),
  };
}

/** Keeps a missing title uncertain. A list that omits it does not prove the save finished. */
export function noteMissingUncertainTitle(state: LibraryState): LibraryState {
  return {
    ...state,
    createUncertain: true,
    status: LIBRARY_COPY.createAbsent,
  };
}

export function libraryRegion(state: LibraryState): LibraryRegion {
  const showBooks = state.phase === "populated";
  const showEmpty = state.phase === "empty";
  const statusIsEmpty = state.status === LIBRARY_COPY.empty;
  let status = state.status;
  if (statusIsEmpty && !showEmpty) status = "";
  return {
    phase: state.phase,
    status,
    emptyCopy: showEmpty && !statusIsEmpty ? LIBRARY_COPY.empty : null,
    books: showBooks ? state.books : [],
    canCreate:
      (state.phase === "empty" || state.phase === "populated" || state.phase === "error") &&
      state.ownerKey !== null &&
      !state.createPending &&
      !state.createUncertain,
    showRefresh: state.phase !== "loading" && !state.createPending,
    showRetry: (state.phase === "error" || state.phase === "unauthorized") && !state.createPending,
    showRiskRetry:
      state.createUncertain &&
      !state.createPending &&
      (state.phase === "empty" || state.phase === "populated"),
    showSignIn: state.phase === "unauthorized",
  };
}

export function regionShowsEmptySentence(region: LibraryRegion): boolean {
  return region.status === LIBRARY_COPY.empty || region.emptyCopy === LIBRARY_COPY.empty;
}

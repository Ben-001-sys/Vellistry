# Existing pinned test excerpts
Original file is available at main326f5e4c385644f864348d008c46c1aa54c7b616; selected harness and unknown-write test only.
import assert from "node:assert/strict";
import {test} from "node:test";
import {LIBRARY_COPY, libraryRegion} from "./book-library-state";
import {
  createLibrarySession,
  shouldReloadForAuthEvent,
  type LibrarySessionDeps,
} from "./book-library-session";
import {ownerFromGetUser} from "./owner-from-auth";

const AUTHOR_A = "author-a";
const AUTHOR_B = "author-b";

function book(id: string, title: string) {
  return {
    id,
    title,
    created_at: "2026-10-11T00:00:00.000Z",
    updated_at: "2026-10-11T00:00:00.000Z",
  };
}

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

type Harness = {
  session: ReturnType<typeof createLibrarySession>;
  signedInAs: string | null;
  navigatedTo: string | null;
  fetchCount: number;
  ownerReads: number;
  failOwnerReadOn: number | null;
  authErrorOn: number | null;
  booksForA: ReturnType<typeof book>[];
  signOutImpl: () => Promise<{ error: boolean }>;
  createBook: LibrarySessionDeps["createBook"];
};

function harness(overrides: Partial<LibrarySessionDeps> = {}): Harness {
  const state: Harness = {
    session: undefined as unknown as Harness["session"],
    signedInAs: AUTHOR_A,
    navigatedTo: null,
    fetchCount: 0,
    ownerReads: 0,
    failOwnerReadOn: null,
    authErrorOn: null,
    booksForA: [book("a-1", "Amber notebook")],
    signOutImpl: async () => ({ error: false }),
    createBook: async () => jsonResponse(201, book("created", "Created")),
  };
  const deps: LibrarySessionDeps = {
    fetchBooks: async () => {
      state.fetchCount += 1;
      if (state.signedInAs === AUTHOR_A) return jsonResponse(200, state.booksForA);
      if (state.signedInAs === AUTHOR_B) return jsonResponse(200, [book("b-1", "Blue notebook")]);
      return jsonResponse(401, { error: "unauthenticated" });
    },
    createBook: (title, ownerKey, signal) => state.createBook(title, ownerKey, signal),
    readOwner: async () => {
      state.ownerReads += 1;
      if (state.failOwnerReadOn === state.ownerReads) throw new Error("owner lookup failed");
      const user = state.signedInAs ? { id: state.signedInAs } : null;
      const error = state.authErrorOn === state.ownerReads
        ? { message: "AuthRetryableFetchError" }
        : null;
      return ownerFromGetUser({ data: { user }, error });
    },
    signOut: () => state.signOutImpl(),
    goToLogin: () => { state.navigatedTo = "/login"; },
    ...overrides,
  };
  state.session = createLibrarySession(deps);
  return state;
}

async function signIn(env: Harness, owner: string) {
  env.signedInAs = owner;
  await env.session.onAuthEvent(owner === AUTHOR_A ? "INITIAL_SESSION" : "SIGNED_IN", owner);
}

test("server errors after dispatch preserve unknown save outcomes", async () => {
  for (const status of [500, 502, 504]) {
    const env = harness();
    let creates = 0;
    env.createBook = async () => { creates += 1; return jsonResponse(status, {}); };
    await signIn(env, AUTHOR_A);
    env.session.setDraftTitle("Potentially committed book");
    await env.session.submitCreate();
    assert.equal(env.session.snapshot().model.createUncertain, true);
    assert.equal(libraryRegion(env.session.snapshot().model).status, LIBRARY_COPY.createUnknown);
    await env.session.submitCreate();
    assert.equal(creates, 1);
  }
});


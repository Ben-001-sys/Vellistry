import assert from "node:assert/strict";
import {test} from "node:test";
import {LIBRARY_COPY, libraryRegion} from "./book-library-state";
import {
  createLibrarySession,
  shouldReloadForAuthEvent,
  type LibrarySessionDeps,
} from "./book-library-session";

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
  signOutImpl: () => Promise<{ error: boolean }>;
  createBook: LibrarySessionDeps["createBook"];
};

function harness(overrides: Partial<LibrarySessionDeps> = {}): Harness {
  const state: Harness = {
    session: undefined as unknown as Harness["session"],
    signedInAs: AUTHOR_A,
    navigatedTo: null,
    fetchCount: 0,
    signOutImpl: async () => ({ error: false }),
    createBook: async () => jsonResponse(201, book("created", "Created")),
  };
  const deps: LibrarySessionDeps = {
    fetchBooks: async () => {
      state.fetchCount += 1;
      if (state.signedInAs === AUTHOR_A) return jsonResponse(200, [book("a-1", "Amber notebook")]);
      if (state.signedInAs === AUTHOR_B) return jsonResponse(200, [book("b-1", "Blue notebook")]);
      return jsonResponse(401, { error: "unauthenticated" });
    },
    createBook: (title, ownerKey, signal) => state.createBook(title, ownerKey, signal),
    readOwner: async () => state.signedInAs,
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

test("author A's unsaved title is cleared when author B signs in", async () => {
  const env = harness();
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("A private title");
  assert.equal(env.session.snapshot().draftTitle, "A private title");
  assert.deepEqual(libraryRegion(env.session.snapshot().model).books.map((item) => item.title), ["Amber notebook"]);

  env.signedInAs = AUTHOR_B;
  await env.session.onAuthEvent("SIGNED_IN", AUTHOR_B);

  const region = libraryRegion(env.session.snapshot().model);
  assert.equal(env.session.snapshot().draftTitle, "");
  assert.deepEqual(region.books.map((item) => item.title), ["Blue notebook"]);
  assert.equal(region.books.some((item) => item.title === "Amber notebook"), false);
  assert.equal(region.books.some((item) => item.title === "A private title"), false);
});

test("a same-author refresh keeps the unsaved title", async () => {
  const env = harness();
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("A private title");
  await env.session.refresh();
  assert.equal(env.session.snapshot().draftTitle, "A private title");
  assert.deepEqual(libraryRegion(env.session.snapshot().model).books.map((item) => item.title), ["Amber notebook"]);
});

function holdCreate(env: Harness) {
  let release: (response: Response) => void = () => undefined;
  let createSignal: AbortSignal | null = null;
  let markEntered: () => void = () => undefined;
  const entered = new Promise<void>((resolve) => { markEntered = resolve; });
  env.createBook = (_title, _owner, signal) => {
    createSignal = signal;
    markEntered();
    return new Promise((resolve) => { release = resolve; });
  };
  return {
    entered,
    release: (response: Response) => release(response),
    signal: () => createSignal,
  };
}

test("same-author SIGNED_IN does not drop an in-flight create outcome", async () => {
  const env = harness();
  const held = holdCreate(env);
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("Brand new notebook");
  const pending = env.session.submitCreate();
  await held.entered;
  await env.session.onAuthEvent("SIGNED_IN", AUTHOR_A);
  await env.session.onAuthEvent("TOKEN_REFRESHED", AUTHOR_A);
  await env.session.onAuthEvent("USER_UPDATED", AUTHOR_A);
  assert.equal(held.signal()?.aborted, false);
  assert.equal(env.session.snapshot().model.createPending, true);
  held.release(jsonResponse(201, book("a-2", "Brand new notebook")));
  await pending;
  assert.equal(env.session.snapshot().draftTitle, "");
  assert.equal(env.session.snapshot().model.createPending, false);
  assert.notEqual(env.session.snapshot().model.status, LIBRARY_COPY.createError);
  assert.equal(shouldReloadForAuthEvent({
    event: "SIGNED_IN",
    currentOwner: AUTHOR_A,
    nextOwner: AUTHOR_A,
    hasLoaded: true,
  }), false);
});

test("same-author Refresh during create keeps the successful acknowledgement", async () => {
  const env = harness();
  const held = holdCreate(env);
  let createCalls = 0;
  const started = env.createBook;
  env.createBook = (title, ownerKey, signal) => {
    createCalls += 1;
    return started(title, ownerKey, signal);
  };
  await signIn(env, AUTHOR_A);
  const fetchesAfterLoad = env.fetchCount;
  env.session.setDraftTitle("Brand new notebook");
  const pending = env.session.submitCreate();
  await held.entered;
  const generation = env.session.snapshot().model.generation;
  const whilePending = libraryRegion(env.session.snapshot().model);
  assert.equal(whilePending.canCreate, false);
  assert.equal(whilePending.showRefresh, false);
  assert.equal(whilePending.showRetry, false);

  await env.session.refresh();
  await env.session.submitCreate();

  assert.equal(createCalls, 1);
  assert.equal(env.fetchCount, fetchesAfterLoad);
  assert.equal(held.signal()?.aborted, false);
  assert.equal(env.session.snapshot().model.createPending, true);
  assert.equal(env.session.snapshot().model.generation, generation);
  assert.equal(env.session.snapshot().draftTitle, "Brand new notebook");

  held.release(jsonResponse(201, book("a-2", "Brand new notebook")));
  await pending;

  const after = env.session.snapshot();
  const region = libraryRegion(after.model);
  assert.equal(after.draftTitle, "");
  assert.equal(after.model.createPending, false);
  assert.notEqual(after.model.status, LIBRARY_COPY.createError);
  assert.equal(/saved/i.test(after.model.status), false);
  assert.equal(env.fetchCount, fetchesAfterLoad + 1);
  assert.deepEqual(region.books.map((item) => item.title), ["Amber notebook"]);
  assert.equal(region.books.some((item) => item.title === "Brand new notebook"), false);
  assert.equal(region.showRefresh, true);
});

test("an author change during create does not apply that create to the next author", async () => {
  const env = harness();
  const held = holdCreate(env);
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("A secret title");
  const pending = env.session.submitCreate();
  await held.entered;
  await env.session.refresh();
  assert.equal(held.signal()?.aborted, false);
  env.signedInAs = AUTHOR_B;
  await env.session.onAuthEvent("SIGNED_IN", AUTHOR_B);
  assert.equal(held.signal()?.aborted, true);
  assert.equal(env.session.snapshot().draftTitle, "");
  held.release(jsonResponse(201, book("a-2", "A secret title")));
  await pending;
  const titles = libraryRegion(env.session.snapshot().model).books.map((item) => item.title);
  assert.deepEqual(titles, ["Blue notebook"]);
});

test("a rejected sign-out stays on the page with the list cleared", async () => {
  const env = harness();
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("A private title");
  env.signOutImpl = async () => { throw new Error("sign-out rejected"); };
  await env.session.signOut();
  const region = libraryRegion(env.session.snapshot().model);
  assert.equal(env.navigatedTo, null);
  assert.deepEqual(region.books, []);
  assert.equal(region.status, LIBRARY_COPY.signOutError);
  assert.equal(region.showSignIn, false);
  assert.notEqual(region.status, LIBRARY_COPY.unauthorized);
  assert.equal(regionShowsEmpty(region.status), false);
  assert.equal(env.session.snapshot().draftTitle, "A private title");
});

test("a sign-out that returns an error does not redirect", async () => {
  const env = harness();
  await signIn(env, AUTHOR_A);
  env.signOutImpl = async () => ({ error: true });
  await env.session.signOut();
  assert.equal(env.navigatedTo, null);
  assert.equal(env.session.snapshot().model.status, LIBRARY_COPY.signOutError);
  assert.deepEqual(libraryRegion(env.session.snapshot().model).books, []);
});

test("a successful sign-out redirects only after Supabase accepts it", async () => {
  const env = harness();
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("A private title");
  let finished = false;
  env.signOutImpl = async () => {
    finished = true;
    return { error: false };
  };
  await env.session.signOut();
  assert.equal(finished, true);
  assert.equal(env.navigatedTo, "/login");
  assert.equal(env.session.snapshot().draftTitle, "");
  assert.deepEqual(libraryRegion(env.session.snapshot().model).books, []);
  assert.equal(env.session.snapshot().model.status, LIBRARY_COPY.unauthorized);
});

function regionShowsEmpty(status: string): boolean {
  return status === LIBRARY_COPY.empty;
}

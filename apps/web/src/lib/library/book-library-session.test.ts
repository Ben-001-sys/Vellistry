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

test("failed sign-out during an in-flight create keeps duplicate retry blocked", async () => {
  const env = harness();
  const held = holdCreate(env);
  let createCalls = 0;
  const originalCreate = env.createBook;
  env.createBook = (title, ownerKey, signal) => {
    createCalls += 1;
    return originalCreate(title, ownerKey, signal);
  };
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("Potential duplicate");
  const pending = env.session.submitCreate();
  await held.entered;
  assert.equal(env.session.snapshot().model.createPending, true);

  env.signOutImpl = async () => ({ error: true });
  await env.session.signOut();

  const failed = env.session.snapshot();
  assert.equal(env.navigatedTo, null);
  assert.equal(held.signal()?.aborted, true);
  assert.equal(failed.draftTitle, "Potential duplicate");
  assert.equal(failed.model.createPending, false);
  assert.equal(failed.model.createUncertain, true);
  assert.equal(libraryRegion(failed.model).status, LIBRARY_COPY.signOutError);
  assert.equal(libraryRegion(failed.model).canCreate, false);
  await env.session.submitCreate();
  assert.equal(createCalls, 1);

  // The server may still finish the aborted POST after a fresh GET.
  held.release(jsonResponse(201, book("late", "Potential duplicate")));
  await pending;
  await env.session.refresh();
  const missing = libraryRegion(env.session.snapshot().model);
  assert.equal(missing.canCreate, false);
  assert.equal(missing.showRiskRetry, true);
  assert.equal(env.session.snapshot().model.createUncertain, true);
  assert.equal(createCalls, 1);

  env.booksForA = [book("a-1", "Amber notebook"), book("late", "Potential duplicate")];
  await env.session.refresh();
  const reconciled = libraryRegion(env.session.snapshot().model);
  assert.equal(env.session.snapshot().draftTitle, "");
  assert.equal(env.session.snapshot().model.createUncertain, false);
  assert.equal(reconciled.showRiskRetry, false);
  assert.equal(createCalls, 1);
});

test("successful sign-out during an in-flight create clears its private retry state", async () => {
  const env = harness();
  const held = holdCreate(env);
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("Author A secret");
  const pending = env.session.submitCreate();
  await held.entered;

  await env.session.signOut();
  const signedOut = env.session.snapshot();
  assert.equal(held.signal()?.aborted, true);
  assert.equal(env.navigatedTo, "/login");
  assert.equal(signedOut.draftTitle, "");
  assert.equal(signedOut.model.createUncertain, false);
  assert.equal(libraryRegion(signedOut.model).canCreate, false);

  env.signedInAs = AUTHOR_B;
  await env.session.onAuthEvent("SIGNED_IN", AUTHOR_B);
  held.release(jsonResponse(201, book("late", "Author A secret")));
  await pending;
  const authorB = env.session.snapshot();
  assert.equal(authorB.draftTitle, "");
  assert.equal(authorB.model.createUncertain, false);
  assert.deepEqual(libraryRegion(authorB.model).books.map((item) => item.title), ["Blue notebook"]);
});

test("a successful create followed by a failed owner lookup stays unknown", async () => {
  const env = harness();
  let createCalls = 0;
  const started = env.createBook;
  env.createBook = (title, ownerKey, signal) => {
    createCalls += 1;
    return started(title, ownerKey, signal);
  };
  await signIn(env, AUTHOR_A);
  env.failOwnerReadOn = env.ownerReads + 2;
  env.session.setDraftTitle("Brand new notebook");
  await env.session.submitCreate();

  const pending = libraryRegion(env.session.snapshot().model);
  assert.equal(createCalls, 1);
  assert.equal(env.session.snapshot().draftTitle, "Brand new notebook");
  assert.equal(env.session.snapshot().model.createPending, false);
  assert.equal(env.session.snapshot().model.createUncertain, true);
  assert.equal(pending.status, LIBRARY_COPY.createUnknown);
  assert.notEqual(pending.status, LIBRARY_COPY.createError);
  assert.equal(/saved/i.test(pending.status), false);
  assert.equal(pending.canCreate, false);
  assert.equal(pending.showRefresh, true);
  assert.deepEqual(pending.books.map((item) => item.title), ["Amber notebook"]);
  await env.session.submitCreate();
  assert.equal(createCalls, 1);

  env.booksForA = [book("a-1", "Amber notebook"), book("a-2", "Brand new notebook")];
  await env.session.refresh();
  const after = libraryRegion(env.session.snapshot().model);
  assert.equal(env.session.snapshot().draftTitle, "");
  assert.equal(env.session.snapshot().model.createUncertain, false);
  assert.equal(after.canCreate, true);
  assert.equal(/saved/i.test(after.status), false);
  assert.deepEqual(after.books.map((item) => item.title), ["Amber notebook", "Brand new notebook"]);
});

test("a lost create response stays unknown until refresh", async () => {
  const env = harness();
  let createCalls = 0;
  env.createBook = () => {
    createCalls += 1;
    return Promise.reject(new Error("response lost"));
  };
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("Brand new notebook");
  await env.session.submitCreate();

  const pending = libraryRegion(env.session.snapshot().model);
  assert.equal(createCalls, 1);
  assert.equal(env.session.snapshot().draftTitle, "Brand new notebook");
  assert.equal(pending.status, LIBRARY_COPY.createUnknown);
  assert.notEqual(pending.status, LIBRARY_COPY.createError);
  assert.equal(/saved/i.test(pending.status), false);
  assert.equal(pending.canCreate, false);
  assert.equal(pending.showRefresh, true);
  assert.deepEqual(pending.books.map((item) => item.title), ["Amber notebook"]);
  await env.session.submitCreate();
  assert.equal(createCalls, 1);

  await env.session.refresh();
  const after = libraryRegion(env.session.snapshot().model);
  assert.equal(env.session.snapshot().draftTitle, "Brand new notebook");
  assert.equal(env.session.snapshot().model.createUncertain, true);
  assert.equal(after.canCreate, false);
  assert.equal(after.showRiskRetry, true);
  assert.equal(after.status, LIBRARY_COPY.createAbsent);
  assert.equal(/saved/i.test(after.status), false);
  assert.equal(createCalls, 1);
  assert.deepEqual(after.books.map((item) => item.title), ["Amber notebook"]);
});

test("a delayed server commit stays blocked after an empty refresh", async () => {
  const env = harness();
  let createCalls = 0;
  env.createBook = () => {
    createCalls += 1;
    return Promise.reject(new Error("response lost"));
  };
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("Brand new notebook");
  await env.session.submitCreate();
  env.booksForA = [];
  await env.session.refresh();
  const missing = libraryRegion(env.session.snapshot().model);
  assert.equal(createCalls, 1);
  assert.equal(missing.canCreate, false);
  assert.equal(env.session.snapshot().model.createUncertain, true);
  assert.equal(missing.showRiskRetry, true);
  assert.equal(/saved/i.test(missing.status), false);
  await env.session.submitCreate();
  assert.equal(createCalls, 1);

  env.booksForA = [book("a-2", "Brand new notebook")];
  await env.session.refresh();
  const landed = libraryRegion(env.session.snapshot().model);
  assert.equal(createCalls, 1);
  assert.equal(env.session.snapshot().draftTitle, "");
  assert.equal(env.session.snapshot().model.createUncertain, false);
  assert.equal(landed.canCreate, true);
  assert.equal(landed.showRiskRetry, false);
  assert.equal(/saved/i.test(landed.status), false);
  assert.deepEqual(landed.books.map((item) => item.title), ["Brand new notebook"]);
});

test("a transient refresh lookup hides the draft and restores it for the same author", async () => {
  const env = harness();
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("A private title");
  env.failOwnerReadOn = env.ownerReads + 1;
  await env.session.refresh();
  const hidden = libraryRegion(env.session.snapshot().model);
  assert.equal(env.session.snapshot().draftTitle, "");
  assert.deepEqual(hidden.books, []);
  assert.equal(hidden.status.includes("A private title"), false);
  env.failOwnerReadOn = null;
  await env.session.refresh();
  assert.equal(env.session.snapshot().draftTitle, "A private title");
  assert.deepEqual(libraryRegion(env.session.snapshot().model).books.map((item) => item.title), ["Amber notebook"]);
});

test("a transient refresh lookup does not reveal the draft to the next author", async () => {
  const env = harness();
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("A secret title");
  env.failOwnerReadOn = env.ownerReads + 1;
  await env.session.refresh();
  assert.equal(env.session.snapshot().draftTitle, "");
  env.failOwnerReadOn = null;
  env.signedInAs = AUTHOR_B;
  await env.session.onAuthEvent("SIGNED_IN", AUTHOR_B);
  const region = libraryRegion(env.session.snapshot().model);
  assert.equal(env.session.snapshot().draftTitle, "");
  assert.equal(region.books.some((item) => item.title === "A secret title"), false);
  assert.equal(region.status.includes("A secret title"), false);
  assert.deepEqual(region.books.map((item) => item.title), ["Blue notebook"]);
});

test("an explicit risk retry is required before another create", async () => {
  const env = harness();
  let createCalls = 0;
  env.createBook = () => {
    createCalls += 1;
    return Promise.reject(new Error("response lost"));
  };
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("Brand new notebook");
  await env.session.submitCreate();
  await env.session.refresh();
  await env.session.submitCreate();
  assert.equal(createCalls, 1);
  await env.session.retryUncertainCreate();
  assert.equal(createCalls, 2);
  assert.equal(/saved/i.test(env.session.snapshot().model.status), false);
});

test("an owner change after an unknown create does not reveal that title", async () => {
  const env = harness();
  env.createBook = () => Promise.reject(new Error("response lost"));
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("A secret title");
  await env.session.submitCreate();
  assert.equal(env.session.snapshot().model.status, LIBRARY_COPY.createUnknown);
  env.signedInAs = AUTHOR_B;
  await env.session.onAuthEvent("SIGNED_IN", AUTHOR_B);
  const region = libraryRegion(env.session.snapshot().model);
  assert.equal(env.session.snapshot().draftTitle, "");
  assert.equal(region.status === LIBRARY_COPY.createUnknown, false);
  assert.deepEqual(region.books.map((item) => item.title), ["Blue notebook"]);
});

test("an HTTP create error stays a definite failure", async () => {
  const env = harness();
  env.createBook = async () => jsonResponse(500, { error: "nope" });
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("Brand new notebook");
  await env.session.submitCreate();
  const region = libraryRegion(env.session.snapshot().model);
  assert.equal(region.status, LIBRARY_COPY.createError);
  assert.equal(env.session.snapshot().model.createUncertain, false);
  assert.equal(env.session.snapshot().draftTitle, "Brand new notebook");
  assert.equal(region.canCreate, true);
  assert.deepEqual(region.books.map((item) => item.title), ["Amber notebook"]);
});

test("a successful Nest write with a lost upstream acknowledgement stays unknown", async () => {
  const env = harness();
  let createCalls = 0;
  env.createBook = () => {
    createCalls += 1;
    return Promise.resolve(jsonResponse(503, { error: "acknowledgment_unknown" }));
  };
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("Brand new notebook");
  await env.session.submitCreate();

  const pending = libraryRegion(env.session.snapshot().model);
  assert.equal(createCalls, 1);
  assert.equal(env.session.snapshot().draftTitle, "Brand new notebook");
  assert.equal(env.session.snapshot().model.createUncertain, true);
  assert.equal(pending.status, LIBRARY_COPY.createUnknown);
  assert.notEqual(pending.status, LIBRARY_COPY.createError);
  assert.equal(/saved/i.test(pending.status), false);
  assert.equal(pending.canCreate, false);
  assert.deepEqual(pending.books.map((item) => item.title), ["Amber notebook"]);
  await env.session.submitCreate();
  assert.equal(createCalls, 1);

  await env.session.refresh();
  const after = libraryRegion(env.session.snapshot().model);
  assert.equal(env.session.snapshot().draftTitle, "Brand new notebook");
  assert.equal(env.session.snapshot().model.createUncertain, true);
  assert.equal(after.canCreate, false);
  assert.equal(after.showRiskRetry, true);
  assert.equal(after.status, LIBRARY_COPY.createAbsent);
  assert.equal(createCalls, 1);
});

test("a pre-forward 503 stays a definite save failure", async () => {
  for (const error of ["service_unavailable", "api_not_configured"]) {
    const env = harness();
    env.createBook = async () => jsonResponse(503, { error });
    await signIn(env, AUTHOR_A);
    env.session.setDraftTitle("Brand new notebook");
    await env.session.submitCreate();
    const region = libraryRegion(env.session.snapshot().model);
    assert.equal(region.status, LIBRARY_COPY.createError);
    assert.equal(env.session.snapshot().model.createUncertain, false);
    assert.equal(region.canCreate, true);
    assert.equal(env.session.snapshot().draftTitle, "Brand new notebook");
  }
});

test("an unreadable 503 acknowledgement stays unknown", async () => {
  const env = harness();
  env.createBook = async () => new Response("upstream closed", { status: 503 });
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("Brand new notebook");
  await env.session.submitCreate();
  const region = libraryRegion(env.session.snapshot().model);
  assert.equal(region.status, LIBRARY_COPY.createUnknown);
  assert.equal(env.session.snapshot().model.createUncertain, true);
  assert.equal(region.canCreate, false);
  assert.notEqual(region.status, LIBRARY_COPY.createError);
});

test("a create acknowledgement with an unreadable success body still reloads", async () => {
  const env = harness();
  env.createBook = async () => new Response(null, { status: 201 });
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("Brand new notebook");
  const fetchesBefore = env.fetchCount;
  await env.session.submitCreate();
  assert.equal(env.session.snapshot().draftTitle, "");
  assert.equal(env.session.snapshot().model.createUncertain, false);
  assert.equal(/saved/i.test(env.session.snapshot().model.status), false);
  assert.equal(env.fetchCount > fetchesBefore, true);
  assert.deepEqual(libraryRegion(env.session.snapshot().model).books.map((item) => item.title), ["Amber notebook"]);
});

test("a lost post and a failed identity lookup keep uncertainty for the same author", async () => {
  const env = harness();
  let createCalls = 0;
  env.createBook = () => {
    createCalls += 1;
    return Promise.reject(new Error("response lost"));
  };
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("Brand new notebook");
  await env.session.submitCreate();
  assert.equal(env.session.snapshot().model.createUncertain, true);

  env.authErrorOn = env.ownerReads + 1;
  await env.session.refresh();
  const hidden = libraryRegion(env.session.snapshot().model);
  assert.equal(env.session.snapshot().draftTitle, "");
  assert.equal(env.session.snapshot().model.createUncertain, false);
  assert.equal(hidden.phase, "error");
  assert.notEqual(hidden.status, LIBRARY_COPY.unauthorized);
  assert.notEqual(hidden.status, LIBRARY_COPY.createUnknown);
  assert.equal(hidden.showSignIn, false);
  assert.equal(hidden.status.includes("Brand new notebook"), false);
  assert.deepEqual(hidden.books, []);

  env.authErrorOn = null;
  await env.session.refresh();
  const restored = libraryRegion(env.session.snapshot().model);
  assert.equal(env.session.snapshot().draftTitle, "Brand new notebook");
  assert.equal(env.session.snapshot().model.createUncertain, true);
  assert.equal(restored.canCreate, false);
  assert.equal(restored.showRiskRetry, true);
  assert.equal(restored.status, LIBRARY_COPY.createAbsent);
  assert.equal(/saved/i.test(restored.status), false);
  await env.session.submitCreate();
  assert.equal(createCalls, 1);
  await env.session.retryUncertainCreate();
  assert.equal(createCalls, 2);
});

test("a concealed uncertain save stays hidden from the next author", async () => {
  const env = harness();
  env.createBook = () => Promise.reject(new Error("response lost"));
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("A secret title");
  await env.session.submitCreate();
  env.failOwnerReadOn = env.ownerReads + 1;
  await env.session.refresh();
  env.failOwnerReadOn = null;
  env.signedInAs = AUTHOR_B;
  await env.session.onAuthEvent("SIGNED_IN", AUTHOR_B);
  const region = libraryRegion(env.session.snapshot().model);
  assert.equal(env.session.snapshot().draftTitle, "");
  assert.equal(env.session.snapshot().model.createUncertain, false);
  assert.equal(region.status.includes("A secret title"), false);
  assert.notEqual(region.status, LIBRARY_COPY.createUnknown);
  assert.notEqual(region.status, LIBRARY_COPY.createAbsent);
  assert.equal(region.books.some((item) => item.title === "A secret title"), false);
  assert.deepEqual(region.books.map((item) => item.title), ["Blue notebook"]);
});

test("a returned Supabase auth error conceals the draft until the same author is verified", async () => {
  const env = harness();
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("A private title");
  env.authErrorOn = env.ownerReads + 1;
  await env.session.refresh();
  const hidden = libraryRegion(env.session.snapshot().model);
  assert.equal(env.session.snapshot().draftTitle, "");
  assert.equal(hidden.phase, "error");
  assert.notEqual(hidden.status, LIBRARY_COPY.unauthorized);
  assert.equal(hidden.showSignIn, false);
  assert.equal(hidden.status.includes("A private title"), false);
  assert.deepEqual(hidden.books, []);

  env.authErrorOn = null;
  await env.session.refresh();
  assert.equal(env.session.snapshot().draftTitle, "A private title");
  assert.equal(env.session.snapshot().model.createUncertain, false);
  assert.deepEqual(libraryRegion(env.session.snapshot().model).books.map((item) => item.title), ["Amber notebook"]);
});

test("a confirmed signed-out user clears the draft and asks for sign-in", async () => {
  const env = harness();
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("A private title");
  env.signedInAs = null;
  await env.session.refresh();
  const region = libraryRegion(env.session.snapshot().model);
  assert.equal(env.session.snapshot().draftTitle, "");
  assert.equal(region.status, LIBRARY_COPY.unauthorized);
  assert.equal(region.showSignIn, true);
  assert.deepEqual(region.books, []);
});

test("a create preflight auth error conceals an uncertain draft instead of signing out", async () => {
  const env = harness();
  let createCalls = 0;
  env.createBook = () => {
    createCalls += 1;
    return Promise.reject(new Error("response lost"));
  };
  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("Brand new notebook");
  await env.session.submitCreate();
  env.authErrorOn = env.ownerReads + 1;
  await env.session.submitCreate();
  assert.equal(createCalls, 1);
  const hidden = libraryRegion(env.session.snapshot().model);
  assert.equal(env.session.snapshot().draftTitle, "");
  assert.notEqual(hidden.status, LIBRARY_COPY.unauthorized);
  assert.equal(hidden.showSignIn, false);
  env.authErrorOn = null;
  await env.session.refresh();
  assert.equal(env.session.snapshot().draftTitle, "Brand new notebook");
  assert.equal(env.session.snapshot().model.createUncertain, true);
  assert.equal(libraryRegion(env.session.snapshot().model).canCreate, false);
});

function regionShowsEmpty(status: string): boolean {
  return status === LIBRARY_COPY.empty;
}

async function verifyOwnerTransitionDuringLoadWithoutAuthCallback(nextOwner: string | null) {
  let fetches = 0;
  let releaseFirstAuthor: (response: Response) => void = () => undefined;
  let signalHeldFetch: () => void = () => undefined;
  const heldFetchStarted = new Promise<void>((resolve) => { signalHeldFetch = resolve; });
  const heldResponse = new Promise<Response>((resolve) => { releaseFirstAuthor = resolve; });
  const env = harness({
    fetchBooks: async () => {
      fetches += 1;
      if (fetches === 1) return jsonResponse(200, [book("a-1", "Amber notebook")]);
      if (fetches === 2) {
        signalHeldFetch();
        return heldResponse;
      }
      return jsonResponse(200, [book("b-1", "Blue notebook")]);
    },
  });

  await signIn(env, AUTHOR_A);
  env.session.setDraftTitle("A private title");
  const seen: Array<{ owner: string | null; title: string; books: string[] }> = [];
  const unsubscribe = env.session.subscribe((snapshot) => {
    seen.push({
      owner: snapshot.model.ownerKey,
      title: snapshot.draftTitle,
      books: libraryRegion(snapshot.model).books.map((item) => item.title),
    });
  });
  const pending = env.session.refresh();
  await heldFetchStarted;

  // Change the verified identity without delivering onAuthStateChange.
  // The completed Author A GET must not leave Author A's draft on screen.
  env.signedInAs = nextOwner;
  releaseFirstAuthor(jsonResponse(200, [book("a-1", "Amber notebook")]));
  await pending;

  const current = env.session.snapshot();
  const region = libraryRegion(current.model);
  assert.equal(current.model.ownerKey, nextOwner);
  assert.equal(current.draftTitle, "");
  assert.equal(region.books.some((item) => item.title === "Amber notebook"), false);
  const firstTransition = seen.findIndex((item) => item.owner === nextOwner);
  assert.notEqual(firstTransition, -1);
  assert.equal(seen.slice(firstTransition).some((item) => item.title === "A private title"), false);
  assert.equal(seen.slice(firstTransition).some((item) => item.books.includes("Amber notebook")), false);
  unsubscribe();
  return { region, fetches };
}

test("a final load identity check switches from A to B without an auth callback", async () => {
  const { region, fetches } = await verifyOwnerTransitionDuringLoadWithoutAuthCallback(AUTHOR_B);
  assert.deepEqual(region.books.map((item) => item.title), ["Blue notebook"]);
  assert.equal(fetches, 3);
});

test("a final load identity check confirms sign-out without an auth callback", async () => {
  const { region, fetches } = await verifyOwnerTransitionDuringLoadWithoutAuthCallback(null);
  assert.deepEqual(region.books, []);
  assert.equal(region.status, LIBRARY_COPY.unauthorized);
  assert.equal(fetches, 2);
});

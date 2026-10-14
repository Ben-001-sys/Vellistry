import assert from "node:assert/strict";
import {test} from "node:test";
import {
  LIBRARY_COPY,
  applyCreate,
  applyLoad,
  beginLoad,
  initialLibraryState,
  libraryRegion,
  regionShowsEmptySentence,
  requestCreate,
  type BookSummary,
  type LibraryState,
} from "./book-library-state";
import { decideBookPost, forwardTransportFailure, outcomeForCreateStatus } from "./book-create-document";
import { ownerFromGetUser, verifiedBookAccess } from "./owner-from-auth";

const AUTHOR_A = "author-a";
const AUTHOR_B = "author-b";

test("BFF verifies the exact token it forwards rather than a separately read identity", async () => {
  const tokens: Array<string | undefined> = [];
  const access = await verifiedBookAccess({
    getSession: async () => ({ data: { session: { access_token: "synthetic-token-b" } }, error: null }),
    getUser: async token => {
      tokens.push(token);
      return { data: { user: { id: token === "synthetic-token-b" ? AUTHOR_B : AUTHOR_A } }, error: null };
    },
  });
  assert.deepEqual(tokens, ["synthetic-token-b"]);
  assert.deepEqual(access, { ownerKey: AUTHOR_B, accessToken: "synthetic-token-b" });
  const decision = decideBookPost({ sessionUserId: access!.ownerKey, expectedUserId: AUTHOR_A, rawBody: '{"title":"Private A"}' });
  assert.deepEqual(decision, { action: "reject", status: 409, error: "session_changed" });
});

test("BFF refuses missing, errored, or unverified access tokens", async () => {
  for (const failure of ["session-error", "no-session", "user-error", "no-user"]) {
    const access = await verifiedBookAccess({
      getSession: async () => ({
        data: { session: failure === "no-session" ? null : { access_token: "synthetic-token" } },
        error: failure === "session-error" ? new Error("unavailable") : null,
      }),
      getUser: async () => ({
        data: { user: failure === "no-user" ? null : { id: AUTHOR_A } },
        error: failure === "user-error" ? new Error("unverified") : null,
      }),
    });
    assert.equal(access, null);
  }
});

function book(title: string, id: string): BookSummary {
  return {
    id,
    title,
    created_at: "2026-10-11T00:00:00.000Z",
    updated_at: "2026-10-11T00:00:00.000Z",
  };
}

function loadOk(state: LibraryState, generation: number, owner: string, titles: BookSummary[]): LibraryState {
  return applyLoad(state, generation, owner, { kind: "ok", books: titles });
}

function exclusive(state: LibraryState): void {
  const region = libraryRegion(state);
  if (region.books.length > 0) {
    assert.equal(regionShowsEmptySentence(region), false);
    assert.equal(region.emptyCopy, null);
    assert.notEqual(region.status, LIBRARY_COPY.empty);
  }
  if (region.status === LIBRARY_COPY.empty) assert.equal(region.emptyCopy, null);
  if (region.phase !== "populated") assert.deepEqual(region.books, []);
}

test("a late response from author A does not repopulate author B", () => {
  let state = beginLoad(initialLibraryState(), AUTHOR_A, 1);
  state = loadOk(state, 1, AUTHOR_A, [book("Amber notebook", "a-1")]);
  state = beginLoad(state, AUTHOR_B, 2);
  assert.deepEqual(state.books, []);
  assert.equal(state.phase, "loading");
  state = applyLoad(state, 1, AUTHOR_A, { kind: "ok", books: [book("Amber notebook", "a-1")] });
  assert.equal(state.ownerKey, AUTHOR_B);
  assert.deepEqual(state.books, []);
  assert.equal(state.phase, "loading");
  state = loadOk(state, 2, AUTHOR_B, [book("Blue notebook", "b-1")]);
  const region = libraryRegion(state);
  assert.deepEqual(region.books.map((item) => item.title), ["Blue notebook"]);
  const staleBegin = beginLoad(state, AUTHOR_A, 2);
  assert.equal(staleBegin, state);
  exclusive(state);
});

test("a delayed author A fetch is ignored after author B is already shown", () => {
  let state = beginLoad(initialLibraryState(), AUTHOR_A, 1);
  state = beginLoad(state, AUTHOR_B, 2);
  state = loadOk(state, 2, AUTHOR_B, [book("Blue notebook", "b-1")]);
  state = applyLoad(state, 1, AUTHOR_A, {
    kind: "ok",
    books: [book("Amber notebook", "a-1"), book("Amber notes", "a-2")],
  });
  assert.deepEqual(libraryRegion(state).books.map((item) => item.title), ["Blue notebook"]);
  exclusive(state);
});

test("401 and load errors clear book rows and stay distinct from empty", () => {
  let state = beginLoad(initialLibraryState(), AUTHOR_A, 1);
  state = loadOk(state, 1, AUTHOR_A, [book("Amber notebook", "a-1")]);
  state = beginLoad(state, AUTHOR_A, 2);
  state = applyLoad(state, 2, AUTHOR_A, { kind: "unauthorized" });
  assert.equal(state.phase, "unauthorized");
  assert.deepEqual(libraryRegion(state).books, []);
  assert.equal(libraryRegion(state).status, LIBRARY_COPY.unauthorized);
  assert.equal(regionShowsEmptySentence(libraryRegion(state)), false);
  assert.equal(libraryRegion(state).showRetry, true);
  assert.equal(libraryRegion(state).showSignIn, true);

  state = beginLoad(state, AUTHOR_A, 3);
  state = loadOk(state, 3, AUTHOR_A, [book("Amber notebook", "a-1")]);
  state = beginLoad(state, AUTHOR_A, 4);
  state = applyLoad(state, 4, AUTHOR_A, { kind: "error" });
  assert.equal(state.phase, "error");
  assert.deepEqual(libraryRegion(state).books, []);
  assert.equal(state.status, LIBRARY_COPY.loadError);
  assert.equal(regionShowsEmptySentence(libraryRegion(state)), false);
  exclusive(state);
});

test("zero books show the empty call to action and nonzero books never do", () => {
  let empty = beginLoad(initialLibraryState(), AUTHOR_A, 1);
  empty = loadOk(empty, 1, AUTHOR_A, []);
  const emptyRegion = libraryRegion(empty);
  assert.equal(empty.phase, "empty");
  assert.equal(emptyRegion.status, LIBRARY_COPY.empty);
  assert.equal(emptyRegion.emptyCopy, null);
  assert.equal(regionShowsEmptySentence(emptyRegion), true);
  assert.equal(emptyRegion.canCreate, true);

  let populated = beginLoad(empty, AUTHOR_A, 2);
  populated = loadOk(populated, 2, AUTHOR_A, [book("Amber notebook", "a-1")]);
  const populatedRegion = libraryRegion(populated);
  assert.equal(populated.phase, "populated");
  assert.equal(regionShowsEmptySentence(populatedRegion), false);
  assert.equal(populatedRegion.books.length, 1);
  exclusive(populated);
});

test("refresh keeps the latest owner and a stale retry cannot restore the previous list", () => {
  let state = beginLoad(initialLibraryState(), AUTHOR_A, 1);
  state = loadOk(state, 1, AUTHOR_A, [book("Amber notebook", "a-1")]);
  state = beginLoad(state, AUTHOR_B, 2);
  state = applyLoad(state, 1, AUTHOR_A, { kind: "error" });
  assert.equal(state.phase, "loading");
  assert.equal(state.ownerKey, AUTHOR_B);
  state = applyLoad(state, 2, AUTHOR_B, { kind: "error" });
  assert.equal(state.phase, "error");
  assert.deepEqual(libraryRegion(state).books, []);
  state = beginLoad(state, AUTHOR_B, 3);
  state = loadOk(state, 3, AUTHOR_B, []);
  assert.equal(state.phase, "empty");
  state = applyLoad(state, 2, AUTHOR_B, { kind: "ok", books: [book("Amber notebook", "a-1")] });
  assert.equal(state.phase, "empty");
  assert.deepEqual(state.books, []);
});

test("a successful create acknowledgement does not insert a response book", () => {
  let state = beginLoad(initialLibraryState(), AUTHOR_A, 1);
  state = loadOk(state, 1, AUTHOR_A, [book("Amber notebook", "a-1")]);
  const opened = requestCreate(state, AUTHOR_A);
  assert.equal(opened.ok, true);
  state = applyCreate(opened.state, 1, AUTHOR_A, "ok");
  assert.deepEqual(state.books.map((item) => item.title), ["Amber notebook"]);
  assert.equal(state.createPending, false);
  exclusive(state);
});

test("book create failure keeps the current list and does not claim an empty library", () => {
  let state = beginLoad(initialLibraryState(), AUTHOR_A, 1);
  state = loadOk(state, 1, AUTHOR_A, [book("Amber notebook", "a-1")]);
  const opened = requestCreate(state, AUTHOR_A);
  assert.equal(opened.ok, true);
  state = applyCreate(opened.state, 1, AUTHOR_A, "error");
  const region = libraryRegion(state);
  assert.deepEqual(region.books.map((item) => item.title), ["Amber notebook"]);
  assert.equal(region.status, LIBRARY_COPY.createError);
  assert.equal(regionShowsEmptySentence(region), false);
  assert.equal(state.createPending, false);
  exclusive(state);
});

test("a stale or cross-account submission does not create into the visible library", () => {
  let state = beginLoad(initialLibraryState(), AUTHOR_A, 1);
  state = loadOk(state, 1, AUTHOR_A, [book("Amber notebook", "a-1")]);
  const opened = requestCreate(state, AUTHOR_A);
  assert.equal(opened.ok, true);
  state = beginLoad(opened.state, AUTHOR_B, 2);
  state = applyCreate(state, 1, AUTHOR_A, "ok");
  assert.equal(state.ownerKey, AUTHOR_B);
  assert.equal(state.phase, "loading");
  assert.deepEqual(state.books, []);

  state = loadOk(state, 2, AUTHOR_B, []);
  const wrongOwner = requestCreate(state, AUTHOR_A);
  assert.equal(wrongOwner.ok, false);
  assert.equal(wrongOwner.state.createPending, false);
  const signedOut = requestCreate(state, null);
  assert.equal(signedOut.ok, false);

  const pendingLoad = beginLoad(state, AUTHOR_B, 3);
  assert.equal(requestCreate(pendingLoad, AUTHOR_B).ok, false);
});

test("unauthorized create clears rows and a same-owner conflict adds no book", () => {
  let state = beginLoad(initialLibraryState(), AUTHOR_A, 1);
  state = loadOk(state, 1, AUTHOR_A, [book("Amber notebook", "a-1")]);
  const opened = requestCreate(state, AUTHOR_A);
  assert.equal(opened.ok, true);
  const shifted = applyCreate(opened.state, 1, AUTHOR_A, "session_changed");
  assert.equal(shifted.status, LIBRARY_COPY.sessionChanged);
  assert.deepEqual(libraryRegion(shifted).books.map((item) => item.title), ["Amber notebook"]);
  assert.equal(regionShowsEmptySentence(libraryRegion(shifted)), false);

  const denied = applyCreate(opened.state, 1, AUTHOR_A, "unauthorized");
  assert.equal(denied.phase, "unauthorized");
  assert.deepEqual(libraryRegion(denied).books, []);
  assert.equal(regionShowsEmptySentence(libraryRegion(denied)), false);
});

test("create while empty still shows the call to action after a save failure", () => {
  let state = beginLoad(initialLibraryState(), AUTHOR_A, 1);
  state = loadOk(state, 1, AUTHOR_A, []);
  const opened = requestCreate(state, AUTHOR_A);
  assert.equal(opened.ok, true);
  state = applyCreate(opened.state, 1, AUTHOR_A, "error");
  const region = libraryRegion(state);
  assert.equal(region.phase, "empty");
  assert.equal(region.emptyCopy, LIBRARY_COPY.empty);
  assert.equal(region.status, LIBRARY_COPY.createError);
  assert.equal(regionShowsEmptySentence(region), true);
  assert.deepEqual(region.books, []);
});

test("malformed book payloads clear the list instead of rendering private fields", () => {
  let state = beginLoad(initialLibraryState(), AUTHOR_A, 1);
  state = loadOk(state, 1, AUTHOR_A, [book("Amber notebook", "a-1")]);
  state = beginLoad(state, AUTHOR_A, 2);
  state = applyLoad(state, 2, AUTHOR_A, {
    kind: "ok",
    books: [{ id: "a-1", title: "Amber notebook", owner_id: AUTHOR_A, secret: "do-not-render" }],
  });
  assert.equal(state.phase, "error");
  assert.deepEqual(libraryRegion(state).books, []);
});

test("book create rejects a stale account and strips client owner_id", () => {
  const mismatch = decideBookPost({
    sessionUserId: AUTHOR_B,
    expectedUserId: AUTHOR_A,
    rawBody: JSON.stringify({ title: "Amber notebook", owner_id: AUTHOR_A }),
  });
  assert.equal(mismatch.action, "reject");
  if (mismatch.action !== "reject") return;
  assert.equal(mismatch.status, 409);
  assert.equal(mismatch.error, "session_changed");
  assert.equal("document" in mismatch, false);

  const signedOut = decideBookPost({
    sessionUserId: null,
    expectedUserId: AUTHOR_A,
    rawBody: JSON.stringify({ title: "Amber notebook", owner_id: AUTHOR_A }),
  });
  assert.deepEqual(signedOut, { action: "reject", status: 401, error: "unauthenticated" });

  const forwarded = decideBookPost({
    sessionUserId: AUTHOR_A,
    expectedUserId: AUTHOR_A,
    rawBody: JSON.stringify({ title: "  Amber notebook  ", owner_id: "ignored-owner" }),
  });
  assert.equal(forwarded.action, "forward");
  if (forwarded.action !== "forward") return;
  assert.deepEqual(JSON.parse(forwarded.document) as unknown, { title: "Amber notebook" });
});

test("a lost upstream acknowledgement is not a pre-forward failure", () => {
  assert.deepEqual(forwardTransportFailure(true), { status: 503, error: "acknowledgment_unknown" });
  assert.deepEqual(forwardTransportFailure(false), { status: 503, error: "service_unavailable" });
  assert.equal(outcomeForCreateStatus(503, "acknowledgment_unknown"), "unknown");
  assert.equal(outcomeForCreateStatus(503, null), "unknown");
  assert.equal(outcomeForCreateStatus(503, "service_unavailable"), "error");
  assert.equal(outcomeForCreateStatus(503, "api_not_configured"), "error");
  assert.equal(outcomeForCreateStatus(401, "unauthenticated"), null);
  assert.equal(outcomeForCreateStatus(409, "session_changed"), null);
  assert.equal(outcomeForCreateStatus(400, "invalid_document"), null);
  assert.equal(outcomeForCreateStatus(500, "nope"), "unknown");
});

test("a returned auth error is not a confirmed signed-out user", () => {
  assert.throws(
    () => ownerFromGetUser({ data: { user: null }, error: { message: "AuthRetryableFetchError" } }),
    /identity verification failed/,
  );
  assert.throws(
    () => ownerFromGetUser({
      data: { user: { id: AUTHOR_A } },
      error: { message: "AuthRetryableFetchError" },
    }),
    /identity verification failed/,
  );
  assert.equal(ownerFromGetUser({ data: { user: null }, error: null }), null);
  assert.equal(ownerFromGetUser({ data: { user: { id: AUTHOR_A } }, error: null }), AUTHOR_A);
});

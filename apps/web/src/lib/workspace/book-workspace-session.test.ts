import test from "node:test";
import assert from "node:assert/strict";
import {createWorkspaceSession} from "./book-workspace-session";
import {chapterTitle, parseCommand, parseDocument, type ReadResult, type WorkspaceCommand,
  type WorkspacePort, type WorkspaceRequest} from "./book-workspace-contract";
import {createSyntheticWorkspace} from "../../../../../tests/fixtures/book-workspace-synthetic";

function deferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (error: Error) => void;
  const promise = new Promise<T>((yes, no) => { resolve = yes; reject = no; });
  return {promise, resolve, reject};
}
async function until(check: () => boolean) {
  for (let i = 0; i < 50; i++) {
    if (check()) return;
    await new Promise<void>(resolve => setImmediate(resolve));
  }
  assert.fail("synthetic operation did not reach its controlled boundary");
}
function setup(portOverride?: (port: WorkspacePort) => WorkspacePort) {
  const adapter = createSyntheticWorkspace();
  let owner: string | null = "author-a";
  let identityFails = false;
  let ids = 0;
  const session = createWorkspaceSession({port: portOverride?.(adapter.port) ?? adapter.port,
    readOwner: async () => { if (identityFails) throw new Error("identity unavailable"); return owner; },
    operationId: () => `operation-${++ids}`});
  return {adapter, session, owner: (value: string | null) => { owner = value; },
    failIdentity: (value: boolean) => { identityFails = value; }};
}
const request = (command: WorkspaceCommand, extra: Partial<WorkspaceRequest> = {}): WorkspaceRequest => ({
  actor: "author-a", bookId: "book-a", operationId: "direct-operation", expectedVersion: 0, command, ...extra,
});

test("owned book opens with selected chapter and separately scoped notes", async () => {
  const {session} = setup(); await session.openBook("book-a");
  const s = session.snapshot(); assert.equal(s.phase, "ready");
  assert.equal(s.document?.bookTitle, "Lantern Garden"); assert.equal(s.selectedChapterId, "a-one");
  assert.notEqual(s.bookNoteDraft, s.chapterNoteDraft); assert.match(s.message, /not saved to a server/);
});
test("empty book is a valid ready result, never a read error", async () => {
  const {session} = setup(); await session.openBook("book-empty");
  assert.equal(session.snapshot().phase, "ready"); assert.deepEqual(session.snapshot().document?.chapters, []);
  assert.equal(session.snapshot().selectedChapterId, null);
});
test("signed-out and unverified identities expose no book, title or drafts", async () => {
  const f = setup(); await f.session.openBook("book-a"); f.session.setCreateTitle("Private draft");
  f.failIdentity(true); await f.session.refresh();
  assert.equal(f.session.snapshot().phase, "unverified"); assert.equal(f.session.snapshot().document, null);
  assert.equal(f.session.snapshot().createTitle, ""); assert.equal(f.session.snapshot().bookNoteDraft, "");
  f.failIdentity(false); f.owner(null); await f.session.refresh(); assert.equal(f.session.snapshot().phase, "denied");
});
test("cross-author and guessed book reads are denied without foreign data", async () => {
  const {session} = setup();
  for (const id of ["book-b", "guessed-book"]) {
    await session.openBook(id); assert.equal(session.snapshot().phase, "denied");
    assert.equal(session.snapshot().document, null); assert.doesNotMatch(JSON.stringify(session.snapshot()), /B-only|private book/);
  }
});
test("invalid identifiers and malformed documents fail closed", async () => {
  assert.equal(parseDocument({bookId: "book-a", chapters: []}, "book-a"), null);
  const f = setup(p => ({...p, read: async () => ({kind: "ok", document: {bookId: "book-b"}} as ReadResult)}));
  await f.session.openBook("book-a"); assert.equal(f.session.snapshot().phase, "error");
  await f.session.openBook(" bad "); assert.equal(f.session.snapshot().phase, "error");
});
test("duplicate chapter IDs and wrong nested book IDs are rejected on read", async () => {
  const a = createSyntheticWorkspace(); const data = (await a.port.read("author-a", "book-a"));
  assert.equal(data.kind, "ok"); if (data.kind !== "ok") return;
  assert.equal(parseDocument({...data.document, chapters: [data.document.chapters[0], data.document.chapters[0]]}, "book-a"), null);
  assert.equal(parseDocument({...data.document, chapters: [{...data.document.chapters[0], bookId: "book-b"}]}, "book-a"), null);
});
test("snapshot references are stable and nested document data is frozen", async () => {
  const {session} = setup(); await session.openBook("book-a"); const s = session.snapshot();
  assert.equal(session.snapshot(), s);
  assert.equal(Reflect.set(s.document!.chapters[0], "title", "tampered"), false);
  assert.equal(session.snapshot().document?.chapters[0].title, "Arrival");
});
test("same-title creates get distinct stable IDs and clear only the confirmed title", async () => {
  const {session} = setup(); await session.openBook("book-empty");
  for (let i = 0; i < 2; i++) { session.setCreateTitle("Same title"); await session.createChapter(); }
  const chapters = session.snapshot().document!.chapters;
  assert.equal(chapters.length, 2); assert.notEqual(chapters[0].id, chapters[1].id);
  assert.equal(chapters[0].title, chapters[1].title); assert.equal(session.snapshot().createTitle, "");
});
test("title and notes validators reject invalid values and forged ownership fields", () => {
  for (const title of ["", "  ", "x".repeat(181), 4]) assert.equal(chapterTitle(title), null);
  assert.equal(chapterTitle("  Heading  "), "Heading");
  assert.equal(parseCommand({kind: "create", title: "OK", owner_id: "author-b"}), null);
  assert.equal(parseCommand({kind: "notes", body: "x".repeat(10001)}), null);
  assert.equal(parseCommand({kind: "reorder", chapterIds: ["a-one", "a-one"]}), null);
});
test("rename retains stable ID, notes and accepted prose/revision markers", async () => {
  const {session, adapter} = setup(); await session.openBook("book-a"); const before = adapter.inspect("author-a", "book-a")!;
  await session.renameChapter("a-two", "  New bridge title  "); const after = adapter.inspect("author-a", "book-a")!;
  assert.equal(after.document.chapters[1].id, before.document.chapters[1].id);
  assert.equal(after.document.chapters[1].title, "New bridge title");
  assert.equal(after.document.chapters[1].notes, before.document.chapters[1].notes); assert.deepEqual(after.accepted, before.accepted);
});
test("reorder moves stable chapter records without moving notes or prose to another ID", async () => {
  const {session, adapter} = setup(); await session.openBook("book-a"); const before = adapter.inspect("author-a", "book-a")!;
  await session.reorder(["a-three", "a-one", "a-two"]); const after = adapter.inspect("author-a", "book-a")!;
  assert.deepEqual(after.document.chapters.map(c => c.id), ["a-three", "a-one", "a-two"]);
  for (const c of before.document.chapters) assert.deepEqual(after.document.chapters.find(x => x.id === c.id), c);
  assert.deepEqual(after.accepted, before.accepted); assert.equal(session.snapshot().selectedChapterId, "a-one");
});
for (const [name, command] of [
  ["foreign rename", {kind: "rename", chapterId: "b-one", title: "Forged"}],
  ["wrong-book rename", {kind: "rename", chapterId: "a-one", title: "Forged"}],
  ["foreign chapter notes", {kind: "notes", chapterId: "b-one", body: "Forged"}],
] as const) {
  test(`adapter independently denies ${name}`, async () => {
    const a = createSyntheticWorkspace(); const before = a.inspect("author-b", "book-b");
    const r = await a.port.mutate(request(command, name === "wrong-book rename" ? {bookId: "book-empty"} : {}));
    assert.equal(r.kind, "denied"); assert.deepEqual(a.inspect("author-b", "book-b"), before);
  });
}
test("forged owner and cross-author mutations cannot grant access", async () => {
  const a = createSyntheticWorkspace();
  assert.equal((await a.port.mutate(request({kind: "create", title: "No"}, {bookId: "book-b"}))).kind, "denied");
  assert.equal((await a.port.mutate({...request({kind: "create", title: "No"}), owner_id: "author-a"} as WorkspaceRequest)).kind, "invalid");
  assert.equal((await a.port.receipt("author-a", "book-b", "anything")).kind, "denied");
});
for (const ids of [["a-one", "a-two"], ["a-one", "a-one", "a-two"], ["a-one", "a-two", "b-one"]]) {
  test(`invalid reorder ${ids.join("/")} does not mutate any book`, async () => {
    const a = createSyntheticWorkspace(); const before = a.inspect("author-a", "book-a");
    assert.equal((await a.port.mutate(request({kind: "reorder", chapterIds: ids}))).kind, "invalid");
    assert.deepEqual(a.inspect("author-a", "book-a"), before);
  });
}
test("book/chapter notes remain separate and drafts survive chapter navigation", async () => {
  const {session, adapter} = setup(); await session.openBook("book-a");
  session.setNotes("Draft one", "a-one"); session.selectChapter("a-two");
  session.setNotes("Draft two", "a-two"); session.selectChapter("a-one"); assert.equal(session.snapshot().chapterNoteDraft, "Draft one");
  await session.applyNotes("a-one"); session.setNotes("Book draft"); await session.applyNotes();
  const b = adapter.inspect("author-a", "book-a")!;
  assert.equal(b.document.notes, "Book draft"); assert.equal(b.document.chapters[0].notes, "Draft one");
  assert.equal(b.accepted["a-one"].document, "Invented arrival prose");
});
test("typing newer notes during pending confirmation is not erased by its older acknowledgement", async () => {
  const {session, adapter} = setup(); await session.openBook("book-a"); session.setNotes("First notes");
  adapter.pauseNext(); const pending = session.applyNotes(); await until(() => adapter.calls() === 1);
  session.setNotes("Later typing"); adapter.release(); await pending;
  assert.equal(adapter.inspect("author-a", "book-a")!.document.notes, "First notes");
  assert.equal(session.snapshot().bookNoteDraft, "Later typing");
});
test("known version conflict never reorders or resends and retains drafts for explicit reload", async () => {
  const {session, adapter} = setup(); await session.openBook("book-a"); session.setNotes("Retain me");
  adapter.externalChange("author-a", "book-a"); await session.reorder(["a-three", "a-two", "a-one"]);
  assert.equal(session.snapshot().conflict, true); assert.equal(session.snapshot().bookNoteDraft, "Retain me");
  await session.createChapter(); assert.equal(adapter.calls(), 1);
  assert.deepEqual(adapter.inspect("author-a", "book-a")!.document.chapters.map(c => c.id), ["a-one", "a-two", "a-three"]);
  await session.refresh(); assert.equal(session.snapshot().conflict, false); assert.equal(session.snapshot().bookNoteDraft, "Retain me");
});
test("duplicate submission while identity checks/pending overlap sends one create", async () => {
  const {session, adapter} = setup(); await session.openBook("book-empty"); session.setCreateTitle("Once");
  adapter.pauseNext(); const one = session.createChapter(), two = session.createChapter();
  await until(() => adapter.calls() === 1); adapter.release(); await Promise.all([one, two]);
  assert.equal(adapter.calls(), 1); assert.equal(session.snapshot().document?.chapters.length, 1);
});
test("lost reply after commit stays unknown; ordinary retries and refresh never create duplicates", async () => {
  const {session, adapter} = setup(); await session.openBook("book-empty"); session.setCreateTitle("Maybe created");
  adapter.fault("lost-reply"); await session.createChapter(); assert.equal(session.snapshot().uncertain, true);
  await session.createChapter(); await session.refresh(); await session.createChapter(); assert.equal(adapter.calls(), 1);
  assert.equal(session.snapshot().uncertain, true); assert.equal(session.snapshot().createTitle, "Maybe created");
  await session.checkOutcome(); assert.equal(session.snapshot().uncertain, false);
  assert.equal(session.snapshot().document?.chapters.length, 1); assert.equal(session.snapshot().createTitle, "");
});
test("missing receipt cannot convert an unknown-before-commit result to definite failure or safe retry", async () => {
  const {session, adapter} = setup(); await session.openBook("book-empty"); session.setCreateTitle("Unknown");
  adapter.fault("unknown-before-commit"); await session.createChapter(); await session.checkOutcome();
  assert.equal(session.snapshot().uncertain, true); await session.createChapter(); assert.equal(adapter.calls(), 1);
  assert.equal(adapter.inspect("author-a", "book-empty")?.document.chapters.length, 0);
});
test("wrong receipt scope cannot unlock an uncertain create", async () => {
  const f = setup(p => ({...p, receipt: async () => ({kind: "confirmed", receipt: {operationId: "operation-1", bookId: "book-b", version: 1}})}));
  await f.session.openBook("book-empty"); f.session.setCreateTitle("Unknown"); f.adapter.fault("lost-reply");
  await f.session.createChapter(); await f.session.checkOutcome(); assert.equal(f.session.snapshot().uncertain, true);
});
test("idempotency replay returns its first receipt; changed payload with same operation ID rejects", async () => {
  const a = createSyntheticWorkspace(); const r = request({kind: "create", title: "Once"});
  const first = await a.port.mutate(r); assert.deepEqual(await a.port.mutate(r), first);
  assert.equal((await a.port.mutate({...r, command: {kind: "create", title: "Different"}})).kind, "invalid");
  assert.equal(a.inspect("author-a", "book-a")!.document.chapters.length, 4);
});
test("A→B→A hides private drafts and retains the old pending-write uncertainty lock", async () => {
  const f = setup(); await f.session.openBook("book-a"); f.session.setCreateTitle("A-only draft");
  f.adapter.pauseNext(); const pending = f.session.createChapter(); await until(() => f.adapter.calls() === 1);
  f.owner("author-b"); const opening = f.session.openBook("book-b"); assert.equal(f.session.snapshot().document, null); await opening;
  assert.equal(f.session.snapshot().createTitle, ""); assert.doesNotMatch(JSON.stringify(f.session.snapshot()), /A-only draft|Lantern Garden/);
  f.adapter.release(); await pending; assert.equal(f.session.snapshot().document?.bookId, "book-b");
  f.owner("author-a"); await f.session.openBook("book-a"); assert.equal(f.session.snapshot().uncertain, true);
  assert.equal(f.session.snapshot().createTitle, "A-only draft"); await f.session.createChapter(); assert.equal(f.adapter.calls(), 1);
  await f.session.checkOutcome(); assert.equal(f.session.snapshot().uncertain, false);
});
for (const failure of [false, true]) {
  test(`late ${failure ? "failed" : "successful"} read cannot publish after switching books`, async () => {
    const delayed = deferred<ReadResult>(); let real!: WorkspacePort;
    const f = setup(p => { real = p; return {...p, read: (actor, book) => book === "book-a" ? delayed.promise : p.read(actor, book)}; });
    const first = f.session.openBook("book-a"); await until(() => f.session.snapshot().phase === "loading");
    await f.session.openBook("book-empty");
    if (failure) delayed.reject(new Error("late failure")); else delayed.resolve(await real.read("author-a", "book-a"));
    await first; assert.equal(f.session.snapshot().document?.bookId, "book-empty"); assert.equal(f.session.snapshot().phase, "ready");
  });
}
test("post-read silent identity change conceals successful response before publication", async () => {
  let owner = "author-a"; const a = createSyntheticWorkspace();
  const s = createWorkspaceSession({readOwner: async () => owner, port: {...a.port,
    read: async (actor, id) => { const r = await a.port.read(actor, id); owner = "author-b"; return r; }}});
  await s.openBook("book-a"); assert.equal(s.snapshot().document, null); assert.equal(s.snapshot().phase, "unverified");
});
test("post-write failed verification conceals response and preserves uncertainty for the same owner", async () => {
  let failing = false; const a = createSyntheticWorkspace();
  const s = createWorkspaceSession({readOwner: async () => { if (failing) throw new Error("unverified"); return "author-a"; },
    port: {...a.port, mutate: async r => { const result = await a.port.mutate(r); failing = true; return result; }}});
  await s.openBook("book-a"); s.setCreateTitle("Private uncertain title"); await s.createChapter();
  assert.equal(s.snapshot().phase, "unverified"); assert.equal(s.snapshot().createTitle, "");
  failing = false; await s.refresh(); assert.equal(s.snapshot().uncertain, true); assert.equal(s.snapshot().createTitle, "Private uncertain title");
});
test("failed pre-write identity verification dispatches nothing", async () => {
  const f = setup(); await f.session.openBook("book-a"); f.session.setCreateTitle("No send"); f.failIdentity(true);
  await f.session.createChapter(); assert.equal(f.adapter.calls(), 0); assert.equal(f.session.snapshot().document, null);
});
test("dispose conceals state and ignores pending replies", async () => {
  const f = setup(); await f.session.openBook("book-a"); f.adapter.pauseNext(); f.session.setCreateTitle("Pending");
  const p = f.session.createChapter(); await until(() => f.adapter.calls() === 1); f.session.dispose(); f.adapter.release(); await p;
  assert.equal(f.session.snapshot().phase, "idle"); assert.equal(f.session.snapshot().document, null);
});

test("opaque chapter ID cannot collide with the book-notes draft slot", async () => {
  const a = createSyntheticWorkspace([{owner: "author-a", document: {bookId: "edge-book", bookTitle: "Edge book",
    version: 0, notes: "Book-only notes", chapters: [{id: "book", bookId: "edge-book", title: "Chapter", notes: "Chapter-only notes"}]}, accepted: {}}]);
  const s = createWorkspaceSession({readOwner: async () => "author-a", port: a.port});
  await s.openBook("edge-book"); assert.equal(s.snapshot().chapterNoteDraft, "Chapter-only notes");
  s.setNotes("Book edit"); s.setNotes("Chapter edit", "book");
  assert.equal(s.snapshot().bookNoteDraft, "Book edit"); assert.equal(s.snapshot().chapterNoteDraft, "Chapter edit");
});
test("denied receipt check hides the previously visible book without making retry safe", async () => {
  const f = setup(p => ({...p, receipt: async () => ({kind: "denied"})}));
  await f.session.openBook("book-a"); f.session.setCreateTitle("Uncertain"); f.adapter.fault("lost-reply");
  await f.session.createChapter(); await f.session.checkOutcome();
  assert.equal(f.session.snapshot().document, null); assert.equal(f.session.snapshot().phase, "denied");
  await f.session.openBook("book-a"); assert.equal(f.session.snapshot().uncertain, true);
});

test("confirmed change refresh retains the verified form while newer notes are being typed", async () => {
  const delayed = deferred<ReadResult>(); let reads = 0; let real!: WorkspacePort;
  const f = setup(p => { real = p; return {...p, read: (actor, book) => ++reads === 2 ? delayed.promise : p.read(actor, book)}; });
  await f.session.openBook("book-a"); f.session.setNotes("First notes");
  const pending = f.session.applyNotes(); await until(() => reads === 2);
  assert.equal(f.session.snapshot().phase, "ready"); assert.equal(f.session.snapshot().pending, true);
  f.session.setNotes("Newer notes during receipt refresh");
  delayed.resolve(await real.read("author-a", "book-a")); await pending;
  assert.equal(f.session.snapshot().bookNoteDraft, "Newer notes during receipt refresh");
});
test("rename drafts are chapter-scoped and never appear under a different author/book", async () => {
  const f = setup(); await f.session.openBook("book-a");
  f.session.setRenameTitle("A-only rename draft"); f.session.selectChapter("a-two");
  assert.equal(f.session.snapshot().renameTitle, "The bridge"); f.session.selectChapter("a-one");
  assert.equal(f.session.snapshot().renameTitle, "A-only rename draft");
  f.owner("author-b"); const p = f.session.openBook("book-b"); assert.equal(f.session.snapshot().renameTitle, ""); await p;
  assert.equal(f.session.snapshot().renameTitle, "B-only chapter");
});


test("acknowledged rename cannot be reseeded from the old document during delayed readback", async () => {
  const delayed = deferred<ReadResult>(); let reads = 0; let real!: WorkspacePort;
  const f = setup(p => { real = p; return {...p, read: (actor, book) => ++reads === 2 ? delayed.promise : p.read(actor, book)}; });
  await f.session.openBook("book-a"); f.session.setRenameTitle("New name");
  const pending = f.session.renameChapter("a-one", "New name"); await until(() => reads === 2);
  f.session.setNotes("Typed while rename readback is pending");
  f.session.selectChapter("a-two"); f.session.selectChapter("a-one");
  delayed.resolve(await real.read("author-a", "book-a")); await pending;
  assert.equal(f.session.snapshot().document?.chapters[0].title, "New name");
  assert.equal(f.session.snapshot().renameTitle, "New name");
});

test("confirmed receipt version rejects stale readback and later reloads across owner switches", async () => {
  let stale: ReadResult | null = null; let returnStale = false;
  const f = setup(p => ({...p, read: async (actor, book) => {
    const result = await p.read(actor, book);
    if (book === "book-empty") {
      if (!stale) stale = structuredClone(result);
      if (returnStale) return structuredClone(stale);
    }
    return result;
  }}));
  await f.session.openBook("book-empty"); returnStale = true; f.session.setCreateTitle("Created once");
  await f.session.createChapter(); assert.equal(f.session.snapshot().phase, "error");
  assert.equal(f.session.snapshot().document, null); await f.session.refresh();
  assert.equal(f.session.snapshot().phase, "error"); await f.session.createChapter(); assert.equal(f.adapter.calls(), 1);
  f.owner("author-b"); await f.session.openBook("book-b"); f.owner("author-a"); await f.session.openBook("book-empty");
  assert.equal(f.session.snapshot().phase, "error"); returnStale = false; await f.session.refresh();
  assert.equal(f.session.snapshot().phase, "ready"); assert.equal(f.session.snapshot().document?.chapters.length, 1);
  assert.equal(f.session.snapshot().document?.version, 1);
});

test("create at the readable chapter limit is rejected without changing version or accepted data", async () => {
  const chapters = Array.from({length: 1000}, (_, i) => ({id: `limit-${i}`, bookId: "book-a", title: `Chapter ${i}`, notes: ""}));
  const a = createSyntheticWorkspace([{owner: "author-a", document: {bookId: "book-a", bookTitle: "Boundary fixture", version: 0, notes: "", chapters}, accepted: {}}]);
  const before = a.inspect("author-a", "book-a");
  assert.equal((await a.port.mutate(request({kind: "create", title: "Over limit"}))).kind, "invalid");
  assert.deepEqual(a.inspect("author-a", "book-a"), before);
  assert.ok(parseDocument(a.inspect("author-a", "book-a")?.document, "book-a"));
  assert.equal((await a.port.receipt("author-a", "book-a", "direct-operation")).kind, "missing");
});


test("null chapter title from an adapter is rejected before any ready view is published", async () => {
  const f = setup(p => ({...p, read: async (actor, book) => {
    const r = await p.read(actor, book);
    return r.kind === "ok" ? {kind: "ok", document: {...r.document,
      chapters: r.document.chapters.map((c, i) => i === 0 ? {...c, title: null as unknown as string} : c)}} : r;
  }}));
  await f.session.openBook("book-a"); assert.equal(f.session.snapshot().phase, "error");
  assert.equal(f.session.snapshot().document, null); assert.equal(f.session.snapshot().renameTitle, "");
});

/** TEST ONLY: invented in-memory data. Never wire this adapter to a production route. */
import {parseCommand, validId, type MutationResult, type WorkspaceDocument,
  type WorkspacePort, type WorkspaceReceipt, type WorkspaceRequest} from "../../apps/web/src/lib/workspace/book-workspace-contract";

export type SyntheticBook = {owner: string; document: WorkspaceDocument;
  accepted: Record<string, {document: string; currentRevision: number}>};
export type SyntheticFault = "lost-reply" | "unknown-before-commit" | "reject" | "conflict";
export function createSyntheticWorkspace(seed?: readonly SyntheticBook[]) {
  const initial: SyntheticBook[] = seed ? structuredClone([...seed]) : [
    {owner: "author-a", document: {bookId: "book-a", bookTitle: "Lantern Garden", version: 0,
      notes: "Invented book A planning notes", chapters: [
        {id: "a-one", bookId: "book-a", title: "Arrival", notes: "Invented arrival note"},
        {id: "a-two", bookId: "book-a", title: "The bridge", notes: "Invented bridge note"},
        {id: "a-three", bookId: "book-a", title: "Return", notes: "Invented return note"}]},
      accepted: {"a-one": {document: "Invented arrival prose", currentRevision: 1},
        "a-two": {document: "Invented bridge prose", currentRevision: 2},
        "a-three": {document: "Invented return prose", currentRevision: 1}}},
    {owner: "author-a", document: {bookId: "book-empty", bookTitle: "New notebook", version: 0,
      notes: "", chapters: []}, accepted: {}},
    {owner: "author-b", document: {bookId: "book-b", bookTitle: "B's invented private book", version: 0,
      notes: "B-only invented notes", chapters: [{id: "b-one", bookId: "book-b", title: "B-only chapter", notes: "B-only chapter notes"}]},
      accepted: {"b-one": {document: "B-only invented prose", currentRevision: 1}}},
  ];
  const books = new Map(initial.map(b => [b.document.bookId, b]));
  const receipts = new Map<string, {signature: string; receipt: WorkspaceReceipt}>();
  let nextFault: SyntheticFault | null = null;
  let pause: Promise<void> | null = null;
  let release: (() => void) | null = null;
  let mutationCalls = 0;
  let created = 0;
  const key = (actor: string, book: string, operation: string) => JSON.stringify([actor, book, operation]);
  const owned = (actor: string, book: string) => {
    const b = books.get(book);
    return b?.owner === actor ? b : null;
  };
  const port: WorkspacePort = {
    async read(actor, bookId) {
      const b = owned(actor, bookId);
      return b ? {kind: "ok", document: structuredClone(b.document)} : {kind: "denied"};
    },
    async mutate(request: WorkspaceRequest): Promise<MutationResult> {
      mutationCalls++;
      const wait = pause;
      pause = null;
      const fault = nextFault;
      nextFault = null;
      if (wait) await wait;
      const {actor, bookId, operationId, expectedVersion} = request;
      const b = owned(actor, bookId);
      if (!b) return {kind: "denied"};
      if (!validId(operationId) || !Number.isSafeInteger(expectedVersion) || expectedVersion < 0 ||
          Object.keys(request).some(k => !["actor", "bookId", "operationId", "expectedVersion", "command"].includes(k))) return {kind: "invalid"};
      const command = parseCommand(request.command);
      if (!command) return {kind: "invalid"};
      const signature = JSON.stringify({expectedVersion, command});
      const previous = receipts.get(key(actor, bookId, operationId));
      if (previous) return previous.signature === signature
        ? {kind: "confirmed", receipt: structuredClone(previous.receipt)} : {kind: "invalid"};
      if (fault === "unknown-before-commit") return {kind: "unknown"};
      if (fault === "reject") return {kind: "invalid"};
      if (fault === "conflict" || expectedVersion !== b.document.version) return {kind: "conflict"};
      let chapters = [...b.document.chapters];
      let notes = b.document.notes;
      if (command.kind === "create") {
        let id: string;
        do { id = `synthetic-chapter-${++created}`; }
        while ([...books.values()].some(book => book.document.chapters.some(c => c.id === id)));
        chapters.push({id, bookId, title: command.title, notes: ""});
        b.accepted[id] = {document: "", currentRevision: 1};
      } else if (command.kind === "rename") {
        if (!chapters.some(c => c.id === command.chapterId)) return {kind: "denied"};
        chapters = chapters.map(c => c.id === command.chapterId ? {...c, title: command.title} : c);
      } else if (command.kind === "reorder") {
        if (command.chapterIds.length !== chapters.length || command.chapterIds.some(id => !chapters.some(c => c.id === id))) return {kind: "invalid"};
        chapters = command.chapterIds.map(id => chapters.find(c => c.id === id)!);
      } else if (command.chapterId === undefined) {
        notes = command.body;
      } else {
        if (!chapters.some(c => c.id === command.chapterId)) return {kind: "denied"};
        chapters = chapters.map(c => c.id === command.chapterId ? {...c, notes: command.body} : c);
      }
      b.document = {...b.document, chapters, notes, version: b.document.version + 1};
      const receipt = {operationId, bookId, version: b.document.version};
      receipts.set(key(actor, bookId, operationId), {signature, receipt});
      if (fault === "lost-reply") throw new Error("Synthetic reply deliberately dropped after local change");
      return {kind: "confirmed", receipt: structuredClone(receipt)};
    },
    async receipt(actor, bookId, operationId) {
      if (!owned(actor, bookId)) return {kind: "denied"};
      const result = receipts.get(key(actor, bookId, operationId));
      return result ? {kind: "confirmed", receipt: structuredClone(result.receipt)} : {kind: "missing"};
    },
  };
  return {port,
    fault: (value: SyntheticFault) => { nextFault = value; },
    pauseNext: () => {
      if (release) return;
      pause = new Promise<void>(resolve => { release = resolve; });
    },
    release: () => { release?.(); release = null; },
    inspect: (actor: string, book: string) => {
      const b = owned(actor, book);
      return b ? structuredClone(b) : null;
    },
    calls: () => mutationCalls,
    externalChange: (actor: string, book: string) => {
      const b = owned(actor, book);
      if (b) b.document = {...b.document, version: b.document.version + 1};
    },
  };
}

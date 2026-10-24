import {chapterTitle, matchingReceipt, parseCommand, parseDocument, validId, validNotes,
  type WorkspaceCommand, type WorkspaceDocument, type WorkspacePort, type WorkspaceRequest} from "./book-workspace-contract";

export type WorkspaceSnapshot = Readonly<{
  phase: "idle" | "checking" | "loading" | "ready" | "denied" | "error" | "unverified";
  document: WorkspaceDocument | null; selectedChapterId: string | null;
  createTitle: string; renameTitle: string; bookNoteDraft: string; chapterNoteDraft: string;
  pending: boolean; uncertain: boolean; conflict: boolean; message: string;
}>;
type Scope = {owner: string; bookId: string; generation: number; key: string};
type Cache = {createTitle: string; drafts: Map<string, string>; renames: Map<string, string>; selected: string | null;
  operation: WorkspaceRequest | null; uncertain: boolean; conflict: boolean};
export type WorkspaceSession = ReturnType<typeof createWorkspaceSession>;

function freeze<T>(value: T): T {
  if (value && typeof value === "object") {
    Object.values(value).forEach(v => { if (v && typeof v === "object") freeze(v); });
    Object.freeze(value);
  }
  return value;
}
const blank = (phase: WorkspaceSnapshot["phase"], message: string): WorkspaceSnapshot => ({
  phase, document: null, selectedChapterId: null, createTitle: "", renameTitle: "", bookNoteDraft: "", chapterNoteDraft: "",
  pending: false, uncertain: false, conflict: false, message,
});
const noteKey = (chapterId?: string) => chapterId === undefined ? "book" : JSON.stringify(["chapter", chapterId]);

export function createWorkspaceSession(deps: {
  /** Independently verified identity, following the existing Auth getUser semantics. */
  readOwner: () => Promise<string | null>;
  port: WorkspacePort;
  operationId?: () => string;
}) {
  let model = freeze(blank("idle", "Open a book to begin this local preview."));
  let generation = 0;
  let active: Scope | null = null;
  let wantedBook: string | null = null;
  let disposed = false;
  const caches = new Map<string, Cache>();
  const listeners = new Set<() => void>();
  const current = (scope: Scope) => !disposed && active === scope && generation === scope.generation;
  const cacheFor = (scope: Scope) => caches.get(scope.key)!;
  function emit(next: WorkspaceSnapshot) {
    model = freeze(next);
    listeners.forEach(listener => listener());
  }
  function leave() {
    if (active) {
      const cache = cacheFor(active);
      // Losing visibility/cancelling a client scope cannot undo a dispatched change.
      if (cache.operation) cache.uncertain = true;
    }
    generation++;
    active = null;
  }
  function conceal() {
    leave();
    emit(blank("unverified", "Your account could not be verified. Verify it before reopening this book."));
  }
  function publish(document: WorkspaceDocument, scope: Scope, message: string, pending = false) {
    if (!current(scope)) return;
    const cache = cacheFor(scope);
    if (!cache.selected || !document.chapters.some(c => c.id === cache.selected)) {
      cache.selected = document.chapters[0]?.id ?? null;
    }
    if (!cache.drafts.has("book")) cache.drafts.set("book", document.notes);
    document.chapters.forEach(c => {
      if (!cache.drafts.has(noteKey(c.id))) cache.drafts.set(noteKey(c.id), c.notes);
      if (!cache.renames.has(c.id)) cache.renames.set(c.id, c.title);
    });
    emit({phase: "ready", document, selectedChapterId: cache.selected,
      createTitle: cache.createTitle, renameTitle: cache.selected ? cache.renames.get(cache.selected)! : "",
      bookNoteDraft: cache.drafts.get("book")!,
      chapterNoteDraft: cache.selected ? cache.drafts.get(noteKey(cache.selected))! : "",
      pending, uncertain: cache.uncertain, conflict: cache.conflict, message});
  }
  async function verify(scope: Scope): Promise<boolean> {
    let owner: string | null;
    try { owner = await deps.readOwner(); }
    catch { if (current(scope)) conceal(); return false; }
    if (!current(scope)) return false;
    if (owner !== scope.owner) { conceal(); return false; }
    return true;
  }
  async function openBook(bookId: string) {
    if (disposed) return;
    leave();
    wantedBook = bookId;
    const token = generation;
    emit(blank("checking", "Checking your account for this local preview..."));
    if (!validId(bookId)) { emit(blank("error", "Choose a valid book.")); return; }
    let owner: string | null;
    try { owner = await deps.readOwner(); }
    catch { if (!disposed && token === generation) conceal(); return; }
    if (disposed || token !== generation) return;
    if (!owner || !validId(owner)) {
      emit(blank("denied", "Verify your account before opening this book.")); return;
    }
    const scope: Scope = {owner, bookId, generation, key: JSON.stringify([owner, bookId])};
    active = scope;
    if (!caches.has(scope.key)) caches.set(scope.key, {createTitle: "", drafts: new Map(), renames: new Map(),
      selected: null, operation: null, uncertain: false, conflict: false});
    emit(blank("loading", "Opening the local book..."));
    let result: Awaited<ReturnType<WorkspacePort["read"]>> | null = null;
    try { result = await deps.port.read(owner, bookId); } catch { /* read failure is not write evidence */ }
    if (!current(scope) || !(await verify(scope))) return;
    if (result?.kind === "denied") { emit(blank("denied", "This book is not available to your account.")); return; }
    const document = result?.kind === "ok" ? parseDocument(result.document, bookId) : null;
    if (!document) { emit(blank("error", "The local book could not be opened. Your notes have not been resent.")); return; }
    const cache = cacheFor(scope);
    cache.conflict = false;
    publish(document, scope, cache.uncertain
      ? "A local change is not confirmed. Check its result before making another change."
      : "Local preview ready. Changes are not saved to a server.");
  }
  function updateDraft(change: (cache: Cache) => void) {
    if (!active || model.phase !== "ready" || !model.document) return;
    const scope = active;
    change(cacheFor(scope));
    publish(model.document, scope, model.message, model.pending);
  }
  function selectChapter(id: string) {
    if (!model.document?.chapters.some(c => c.id === id)) return;
    updateDraft(c => { c.selected = id; });
  }
  function setCreateTitle(value: string) { updateDraft(c => { c.createTitle = value.slice(0, 180); }); }
  function setRenameTitle(value: string) {
    const id = model.selectedChapterId;
    if (id) updateDraft(c => { c.renames.set(id, value.slice(0, 180)); });
  }
  function setNotes(value: string, chapterId?: string) {
    if (!validNotes(value)) return;
    if (chapterId !== undefined && !model.document?.chapters.some(c => c.id === chapterId)) return;
    updateDraft(c => { c.drafts.set(noteKey(chapterId), value); });
  }
  async function apply(command: WorkspaceCommand) {
    const scope = active;
    if (!scope || model.phase !== "ready" || !model.document || model.pending) return false;
    const cache = cacheFor(scope);
    if (cache.operation || cache.uncertain || cache.conflict) return;
    const normalized = parseCommand(command);
    if (!normalized) { publish(model.document, scope, "Check the chapter title or notes before applying the change."); return; }
    // The identity lookup is asynchronous: recheck the lock after it, too.
    if (!(await verify(scope)) || cache.operation || cache.uncertain || cache.conflict || !model.document || model.pending) return false;
    const operationId = deps.operationId?.() ?? crypto.randomUUID();
    if (!validId(operationId)) { publish(model.document, scope, "The local change could not be prepared."); return; }
    const request: WorkspaceRequest = {actor: scope.owner, bookId: scope.bookId, operationId,
      expectedVersion: model.document.version, command: normalized};
    cache.operation = request;
    publish(model.document, scope, "Applying a change in this local test session...", true);
    let result: Awaited<ReturnType<WorkspacePort["mutate"]>> | null = null;
    try { result = await deps.port.mutate(request); } catch { /* a lost reply is unknown */ }
    if (!current(scope) || !(await verify(scope))) return;
    if (result?.kind === "confirmed" && matchingReceipt(result.receipt, request)) {
      confirmed(cache, request);
      return reloadConfirmed(scope);
    }
    if (result?.kind === "invalid" || result?.kind === "denied" || result?.kind === "conflict") {
      cache.operation = null;
      cache.conflict = result.kind === "conflict";
      if (result.kind === "denied") { leave(); emit(blank("denied", "This book is not available to your account.")); return; }
      publish(model.document!, scope, result.kind === "conflict"
        ? "The local book changed. Reload it and review your retained notes before trying again."
        : "The local change was rejected. Check its title, notes or chapter order.");
      return;
    }
    cache.uncertain = true;
    publish(model.document!, scope, "The local result is unknown. Check its result; the change will not be resent.");
  }
  function confirmed(cache: Cache, request: WorkspaceRequest) {
    cache.operation = null;
    cache.uncertain = false;
    cache.conflict = false;
    if (request.command.kind === "create" && chapterTitle(cache.createTitle) === request.command.title) {
      cache.createTitle = "";
    }
    if (request.command.kind === "rename" && chapterTitle(cache.renames.get(request.command.chapterId)) === request.command.title) {
      cache.renames.delete(request.command.chapterId);
    }
    // Retain drafts, including any typing newer than an acknowledged notes payload.
  }
  async function reloadConfirmed(scope: Scope): Promise<boolean> {
    // Keep verified same-scope controls mounted while a receipt's readback is
    // pending. Explicit scope changes still conceal immediately in openBook.
    let result: Awaited<ReturnType<WorkspacePort["read"]>> | null = null;
    try { result = await deps.port.read(scope.owner, scope.bookId); } catch { /* receipt remains confirmed */ }
    if (!current(scope) || !(await verify(scope))) return false;
    if (result?.kind === "denied") {
      leave(); emit(blank("denied", "This book is not available to your account.")); return false;
    }
    const document = result?.kind === "ok" ? parseDocument(result.document, scope.bookId) : null;
    if (!document) {
      emit(blank("error", "The requested local change was confirmed, but the book could not be refreshed. Reload the local book."));
      return false;
    }
    publish(document, scope, "The requested change was confirmed in this local test session only.");
    return true;
  }
  async function checkOutcome() {
    const scope = active;
    if (!scope || model.phase !== "ready" || model.pending) return;
    const cache = cacheFor(scope);
    const request = cache.operation;
    if (!cache.uncertain || !request || !(await verify(scope)) || model.pending) return;
    publish(model.document!, scope, "Checking the local result without resending the change...", true);
    let result: Awaited<ReturnType<WorkspacePort["receipt"]>> | null = null;
    try { result = await deps.port.receipt(scope.owner, scope.bookId, request.operationId); } catch { /* remain uncertain */ }
    if (!current(scope) || !(await verify(scope))) return;
    if (result?.kind === "denied") {
      // Revoked book access conceals the view but cannot prove a prior write failed.
      leave();
      emit(blank("denied", "This book is not available to your account."));
      return;
    }
    if (result?.kind === "confirmed" && matchingReceipt(result.receipt, request)) {
      confirmed(cache, request);
      await reloadConfirmed(scope);
    } else {
      publish(model.document!, scope, "The local result is still not confirmed. No change has been resent.");
    }
  }
  return {
    snapshot: () => model,
    subscribe: (listener: () => void) => { listeners.add(listener); return () => { listeners.delete(listener); }; },
    openBook, refresh: () => wantedBook ? openBook(wantedBook) : Promise.resolve(),
    selectChapter, setCreateTitle, setRenameTitle, setNotes, apply, checkOutcome,
    createChapter: () => apply({kind: "create", title: model.createTitle}),
    renameChapter: (id: string, title: string) => apply({kind: "rename", chapterId: id, title}),
    reorder: (ids: readonly string[]) => apply({kind: "reorder", chapterIds: ids}),
    applyNotes: (chapterId?: string) => {
      const body = chapterId === undefined ? model.bookNoteDraft
        : chapterId === model.selectedChapterId ? model.chapterNoteDraft : null;
      return body === null ? Promise.resolve() : apply({kind: "notes", chapterId, body});
    },
    dispose: () => { leave(); disposed = true; caches.clear(); emit(blank("idle", "Local preview closed.")); listeners.clear(); },
  };
}

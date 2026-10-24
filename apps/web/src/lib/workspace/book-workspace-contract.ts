/** Local organizer contract. This is not a chapter persistence or Auth implementation. */
export type WorkspaceChapter = Readonly<{id: string; bookId: string; title: string; notes: string}>;
export type WorkspaceDocument = Readonly<{
  bookId: string; bookTitle: string; version: number; notes: string;
  chapters: readonly WorkspaceChapter[];
}>;
export type WorkspaceCommand =
  | Readonly<{kind: "create"; title: string}>
  | Readonly<{kind: "rename"; chapterId: string; title: string}>
  | Readonly<{kind: "reorder"; chapterIds: readonly string[]}>
  | Readonly<{kind: "notes"; chapterId?: string; body: string}>;
export type WorkspaceReceipt = Readonly<{operationId: string; bookId: string; version: number}>;
export type WorkspaceRequest = Readonly<{
  actor: string; bookId: string; operationId: string; expectedVersion: number; command: WorkspaceCommand;
}>;
export type ReadResult = {kind: "ok"; document: WorkspaceDocument} | {kind: "denied" | "unavailable"};
export type MutationResult = {kind: "confirmed"; receipt: WorkspaceReceipt}
  | {kind: "denied" | "invalid" | "conflict" | "unknown"};
export type ReceiptResult = {kind: "confirmed"; receipt: WorkspaceReceipt} | {kind: "missing" | "denied"};
export type WorkspacePort = {
  read: (actor: string, bookId: string) => Promise<ReadResult>;
  mutate: (request: WorkspaceRequest) => Promise<MutationResult>;
  receipt: (actor: string, bookId: string, operationId: string) => Promise<ReceiptResult>;
};

export function validId(value: unknown): value is string {
  return typeof value === "string" && value.length > 0 && value.length <= 128 &&
    value.trim() === value && !/[\x00-\x1f\x7f]/.test(value);
}
export function chapterTitle(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const title = value.trim();
  return title.length > 0 && title.length <= 180 ? title : null;
}
export function validNotes(value: unknown): value is string {
  return typeof value === "string" && value.length <= 10000;
}
export function parseCommand(value: unknown): WorkspaceCommand | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const c = value as Record<string, unknown>;
  const keys = Object.keys(c);
  if (c.kind === "create" && keys.every(k => ["kind", "title"].includes(k))) {
    const title = chapterTitle(c.title);
    return title ? {kind: "create", title} : null;
  }
  if (c.kind === "rename" && keys.every(k => ["kind", "chapterId", "title"].includes(k))) {
    const title = chapterTitle(c.title);
    return title && validId(c.chapterId) ? {kind: "rename", chapterId: c.chapterId, title} : null;
  }
  if (c.kind === "notes" && keys.every(k => ["kind", "chapterId", "body"].includes(k))) {
    if (!validNotes(c.body) || (c.chapterId !== undefined && !validId(c.chapterId))) return null;
    return c.chapterId === undefined ? {kind: "notes", body: c.body}
      : {kind: "notes", chapterId: c.chapterId, body: c.body};
  }
  if (c.kind === "reorder" && keys.every(k => ["kind", "chapterIds"].includes(k)) &&
      Array.isArray(c.chapterIds) && c.chapterIds.length <= 1000 && c.chapterIds.every(validId) &&
      new Set(c.chapterIds).size === c.chapterIds.length) {
    return {kind: "reorder", chapterIds: [...c.chapterIds]};
  }
  return null;
}
export function parseDocument(value: unknown, bookId: string): WorkspaceDocument | null {
  if (!value || typeof value !== "object") return null;
  const d = value as Record<string, unknown>;
  if (d.bookId !== bookId || !validId(d.bookId) || typeof d.bookTitle !== "string" ||
      !d.bookTitle.trim() || d.bookTitle.length > 120 || !validNotes(d.notes) ||
      !Number.isSafeInteger(d.version) || (d.version as number) < 0 ||
      !Array.isArray(d.chapters) || d.chapters.length > 1000) return null;
  const chapters: WorkspaceChapter[] = [];
  for (const row of d.chapters) {
    if (!row || typeof row !== "object" || !validId(row.id) || row.bookId !== bookId ||
        chapterTitle(row.title) !== row.title || !validNotes(row.notes)) return null;
    chapters.push({id: row.id, bookId, title: row.title, notes: row.notes});
  }
  if (new Set(chapters.map(c => c.id)).size !== chapters.length) return null;
  return {bookId, bookTitle: d.bookTitle, version: d.version as number, notes: d.notes, chapters};
}
export function matchingReceipt(value: unknown, request: WorkspaceRequest): value is WorkspaceReceipt {
  if (!value || typeof value !== "object") return false;
  const r = value as Record<string, unknown>;
  return r.operationId === request.operationId && r.bookId === request.bookId &&
    Number.isSafeInteger(r.version) && (r.version as number) > request.expectedVersion;
}

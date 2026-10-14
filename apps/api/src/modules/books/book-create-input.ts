/** Reads a title and ignores every other client field, including owner_id. */
export function readBookTitle(body: unknown): string | null {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;
  const title = (body as Record<string, unknown>).title;
  if (typeof title !== "string") return null;
  const trimmed = title.trim();
  if (trimmed.length < 1 || trimmed.length > 120) return null;
  return trimmed;
}

/** Insert payload for an authenticated book. owner_id stays a database default. */
export function bookInsertPayload(title: string): { title: string } {
  return { title };
}

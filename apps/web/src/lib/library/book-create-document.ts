/** Header naming the user the browser believes is signed in. Never an owner override. */
export const EXPECTED_USER_HEADER = "x-vellistry-expected-user";

export type BookPostDecision =
  | { action: "reject"; status: 400 | 401 | 409; error: "invalid_document" | "unauthenticated" | "session_changed" }
  | { action: "forward"; document: string };

export function expectedUserMatchesSession(expected: string | null, sessionUserId: string): boolean {
  if (expected === null) return false;
  if (expected.length === 0 || expected.length > 128) return false;
  if (expected.trim() !== expected) return false;
  if (expected.includes("\r") || expected.includes("\n")) return false;
  return expected === sessionUserId;
}

export function bookCreateDocument(raw: string):
  | { ok: true; document: string }
  | { ok: false; error: "invalid_document" } {
  if (raw.length > 10000) return { ok: false, error: "invalid_document" };
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw) as unknown;
  } catch {
    return { ok: false, error: "invalid_document" };
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    return { ok: false, error: "invalid_document" };
  }
  const title = (parsed as Record<string, unknown>).title;
  if (typeof title !== "string") return { ok: false, error: "invalid_document" };
  const trimmed = title.trim();
  if (trimmed.length < 1 || trimmed.length > 120) return { ok: false, error: "invalid_document" };
  return { ok: true, document: JSON.stringify({ title: trimmed }) };
}

/**
 * Decide a book create before any upstream call.
 * A mismatched expected user rejects the write. The forwarded document contains title only.
 */
export function decideBookPost(input: {
  sessionUserId: string | null;
  expectedUserId: string | null;
  rawBody: string;
}): BookPostDecision {
  if (!input.sessionUserId) return { action: "reject", status: 401, error: "unauthenticated" };
  if (!expectedUserMatchesSession(input.expectedUserId, input.sessionUserId)) {
    return { action: "reject", status: 409, error: "session_changed" };
  }
  const parsed = bookCreateDocument(input.rawBody);
  if (!parsed.ok) return { action: "reject", status: 400, error: "invalid_document" };
  return { action: "forward", document: parsed.document };
}

/**
 * Supabase Auth getUser() reports failure on `{ error }`, not only by throwing.
 * A returned error is an unverified identity, including when a user object is also present.
 * A null user with no error is a confirmed signed-out session.
 */
export function ownerFromGetUser(result: {
  data: { user: { id: string } | null };
  error: unknown;
}): string | null {
  if (result.error != null) {
    throw new Error("identity verification failed");
  }
  const id = result.data.user?.id;
  if (typeof id !== "string" || id.length === 0) return null;
  return id;
}

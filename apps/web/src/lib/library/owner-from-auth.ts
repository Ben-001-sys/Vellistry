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

/** Bind BFF authorization to the exact access token sent to Nest. */
export async function verifiedBookAccess(auth: {
  getSession: () => Promise<{ data: { session: { access_token: string } | null }; error: unknown }>;
  getUser: (token: string) => Promise<{ data: { user: { id: string } | null }; error: unknown }>;
}): Promise<{ ownerKey: string; accessToken: string } | null> {
  const { data: { session }, error: sessionError } = await auth.getSession();
  if (sessionError != null || !session?.access_token) return null;
  const result = await auth.getUser(session.access_token);
  if (result.error != null) return null;
  const ownerKey = ownerFromGetUser(result);
  return ownerKey ? { ownerKey, accessToken: session.access_token } : null;
}

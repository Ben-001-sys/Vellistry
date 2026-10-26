/** Browser navigation only. This controller grants no backend permissions. */
type Reply = {data: unknown; error: unknown};
export interface MfaAuthPort {
  signInWithPassword(input: {email: string; password: string}): Promise<Reply>;
  signUp(input: {email: string; password: string}): Promise<Reply>;
  getSession(): Promise<Reply>;
  getUser(token: string): Promise<Reply>;
  signOut(input: {scope: "local"}): Promise<{error: unknown}>;
  mfa: {
    getAuthenticatorAssuranceLevel(token: string): Promise<Reply>;
    enroll(input: {factorType: "totp"; friendlyName: string}): Promise<Reply>;
    challenge(input: {factorId: string}): Promise<Reply>;
    verify(input: {factorId: string; challengeId: string; code: string}): Promise<Reply>;
  };
}
export type MfaSnapshot = Readonly<{
  phase: "signed-out" | "choice" | "challenge" | "enrollment" | "complete" | "blocked";
  pending: boolean;
  message: string;
  qr: string;
  secret: string;
}>;
type Binding = {token: string; owner: string};
type Factor = {id: string; factor_type: string; status: string};
const record = (x: unknown): Record<string, unknown> =>
  x !== null && typeof x === "object" && !Array.isArray(x) ? x as Record<string, unknown> : {};
function data(reply: Reply) { if (reply.error != null) throw new Error("unavailable"); return record(reply.data); }
const text = (x: unknown): x is string => typeof x === "string" && x.length > 0;
export const MFA_COPY = {
  unavailable: "We couldn't confirm your sign-in or authentication settings. Check your connection and sign in again.",
  changed: "Your session changed. Sign in again before continuing.",
  challenge: "Enter the six-digit code from your authenticator app to finish signing in.",
  choice: "You can set up an authenticator app for future sign-ins, or continue to your books.",
  incomplete: "Authenticator setup is incomplete or unavailable. Sign in again to check its status. No new setup has been started.",
  unknown: "We couldn't confirm whether authenticator setup started. Don't start another setup yet. Sign in again to check its status.",
  verification: "We couldn't confirm the code. Try a new code from your authenticator app, or sign in again to check your status.",
} as const;

export function createMfaFlow(auth: MfaAuthPort, goToBooks: () => void, now = Date.now) {
  let state: MfaSnapshot = Object.freeze({phase: "signed-out", pending: false, message: "", qr: "", secret: ""});
  let binding: Binding | null = null;
  let factorId: string | null = null;
  let epoch = 0;
  let disposed = false;
  let verifying = false;
  let signingOut = false;
  const uncertainOwners = new Set<string>();
  let knownSetup: {owner: string; factor: string} | null = null;
  const listeners = new Set<(s: MfaSnapshot) => void>();
  function publish(patch: Partial<MfaSnapshot>) {
    if (disposed) return;
    state = Object.freeze({...state, ...patch});
    for (const listener of listeners) listener(state);
  }
  function block(message: string) {
    factorId = null; binding = null;
    publish({phase: "blocked", qr: "", secret: "", message});
  }
  function alive(ticket: number) { if (disposed || ticket !== epoch) throw new Error("stale"); }
  async function session(ticket: number): Promise<Binding> {
    const s = record(data(await auth.getSession()).session); alive(ticket);
    const user = record(s.user);
    if (!text(s.access_token) || !text(user.id) || typeof s.expires_at !== "number" ||
        !Number.isFinite(s.expires_at) || s.expires_at * 1000 <= now()) throw new Error("session");
    return {token: s.access_token, owner: user.id};
  }
  async function same(expected: Binding, ticket: number) {
    const actual = await session(ticket);
    if (actual.owner !== expected.owner || actual.token !== expected.token) throw new Error("session changed");
  }
  async function inspect(expected: Binding, ticket: number, requiredFactor?: string) {
    const started = now();
    await same(expected, ticket);
    const user = record(data(await auth.getUser(expected.token)).user); alive(ticket);
    if (user.id !== expected.owner || user.is_anonymous === true || !Array.isArray(user.factors)) throw new Error("identity");
    const factors = user.factors.map((f: unknown) => {
      const r = record(f);
      if (!text(r.id) || !text(r.factor_type) || !["verified", "unverified"].includes(String(r.status))) throw new Error("factor");
      return r as Factor;
    });
    if (new Set(factors.map(f => f.id)).size !== factors.length) throw new Error("duplicate factor");
    const aal = data(await auth.mfa.getAuthenticatorAssuranceLevel(expected.token)); alive(ticket);
    await same(expected, ticket);
    if (now() < started || now() - started > 30000) throw new Error("stale observation");
    const verified = factors.filter(f => f.status === "verified");
    if (requiredFactor && !verified.some(f => f.id === requiredFactor)) throw new Error("missing verified factor");
    if (verified.some(f => f.factor_type !== "totp")) throw new Error("unsupported factor");
    if (!["aal1", "aal2"].includes(String(aal.currentLevel)) ||
        aal.nextLevel !== (verified.length ? "aal2" : "aal1") ||
        (!verified.length && aal.currentLevel !== "aal1")) throw new Error("contradictory assurance");
    binding = expected;
    if (!verified.length && uncertainOwners.has(expected.owner)) { block(MFA_COPY.unknown); return; }
    if (!verified.length && factors.length) {
      // After an uncertain code response, resume only this flow's known factor.
      // Never infer a setup key or resume an unrelated incomplete enrollment.
      if (knownSetup?.owner === expected.owner && factors.length === 1 && factors[0].id === knownSetup.factor &&
          factors[0].factor_type === "totp" && factors[0].status === "unverified") {
        factorId = knownSetup.factor;
        publish({phase: "enrollment", qr: "", secret: "",
          message: "Setup isn't confirmed yet. If you added this setup to your authenticator app, enter a new code to try again."});
        return;
      }
      block(MFA_COPY.incomplete); return;
    }
    factorId = verified[0]?.id ?? null;
    publish({phase: !verified.length ? "choice" : aal.currentLevel === "aal2" ? "complete" : "challenge",
      qr: "", secret: "", message: !verified.length ? MFA_COPY.choice : aal.currentLevel === "aal2" ? "Authenticator verification is complete for this sign-in." : MFA_COPY.challenge});
  }
  async function run(work: (ticket: number) => Promise<void>, failure = MFA_COPY.unavailable as string) {
    if (disposed || state.pending) return;
    const ticket = ++epoch;
    publish({pending: true, message: "Checking authentication…"});
    try { await work(ticket); }
    catch { if (!disposed && ticket === epoch) block(failure); }
    finally { if (!disposed && ticket === epoch) publish({pending: false}); }
  }
  return {
    snapshot: () => state,
    subscribe(listener: (s: MfaSnapshot) => void) { listeners.add(listener); return () => { listeners.delete(listener); }; },
    async signIn(email: string, password: string) {
      await run(async ticket => {
        binding = null; factorId = null; publish({phase: "signed-out", qr: "", secret: ""});
        const result = data(await auth.signInWithPassword({email, password})); alive(ticket);
        const user = record(result.user); const signedSession = record(result.session);
        const current = await session(ticket);
        if (user.id !== current.owner || signedSession.access_token !== current.token) throw new Error("partial sign-in");
        await inspect(current, ticket);
      });
    },
    async signUp(email: string, password: string) {
      await run(async ticket => {
        data(await auth.signUp({email, password})); alive(ticket);
        binding = null; factorId = null;
        // Signup can create a session. Never treat it as MFA completion or navigate.
        publish({phase: "signed-out", qr: "", secret: "", message: "Account requested. Check your email if confirmation is enabled, then sign in."});
      });
    },
    async check() { await run(async ticket => { await inspect(await session(ticket), ticket); }); },
    async continueToBooks() {
      if (state.phase !== "choice" && state.phase !== "complete") return;
      await run(async ticket => {
        if (!binding) throw new Error("missing identity");
        await inspect(binding, ticket);
        if (state.phase === "choice" || state.phase === "complete") goToBooks();
      });
    },
    async enroll() {
      if (state.phase !== "choice") return;
      await run(async ticket => {
        if (!binding) throw new Error("missing identity");
        const expected = binding;
        await inspect(expected, ticket);
        if (state.phase !== "choice") return;
        // A lost acknowledgement may have created a factor; empty rechecks do not prove absence.
        uncertainOwners.add(expected.owner);
        const enrolled = data(await auth.mfa.enroll({factorType: "totp", friendlyName: "Vellistry authenticator"})); alive(ticket);
        await same(expected, ticket);
        const totp = record(enrolled.totp);
        if (!text(enrolled.id) || enrolled.type !== "totp" || !text(totp.secret) || !/^[A-Z2-7]{16,128}$/.test(totp.secret) ||
            !text(totp.qr_code) || totp.qr_code.length > 200000 || !totp.qr_code.startsWith("data:image/svg+xml;utf-8,<svg") ||
            /<script|<foreignObject|\bon\w+\s*=|\b(?:href|src)\s*=|url\s*\(/i.test(totp.qr_code)) throw new Error("invalid enrollment");
        factorId = enrolled.id;
        knownSetup = {owner: expected.owner, factor: enrolled.id};
        uncertainOwners.delete(expected.owner);
        publish({phase: "enrollment", qr: "data:image/svg+xml," + encodeURIComponent(totp.qr_code.slice("data:image/svg+xml;utf-8,".length)),
          secret: totp.secret, message: "Scan this code with your authenticator app, then enter its six-digit code. Setup is not complete yet."});
      }, MFA_COPY.unknown);
    },
    async verify(code: string) {
      if (!["challenge", "enrollment"].includes(state.phase) || state.pending) return;
      if (!/^\d{6}$/.test(code)) { publish({message: "Enter a six-digit code from your authenticator app."}); return; }
      await run(async ticket => {
        if (!binding || !factorId) throw new Error("missing binding");
        const expected = binding; const factor = factorId;
        await same(expected, ticket);
        const challenge = data(await auth.mfa.challenge({factorId: factor})); alive(ticket);
        await same(expected, ticket);
        if (!text(challenge.id) || typeof challenge.expires_at !== "number" || !Number.isFinite(challenge.expires_at) || challenge.expires_at * 1000 <= now()) throw new Error("challenge");
        verifying = true;
        let verified: Record<string, unknown>;
        try { verified = data(await auth.mfa.verify({factorId: factor, challengeId: challenge.id, code})); }
        finally { verifying = false; }
        alive(ticket);
        const user = record(verified.user);
        const upgraded = await session(ticket);
        if (user.id !== expected.owner || upgraded.owner !== expected.owner || verified.access_token !== upgraded.token) throw new Error("partial verification");
        // Verify rotates the token. Recheck the server identity, factors, AAL and new session before continuing.
        await inspect(upgraded, ticket, factor);
        if (state.phase !== "complete") throw new Error("incomplete step-up");
        await same(upgraded, ticket);
        knownSetup = null;
      }, MFA_COPY.verification);
      // A failure discards setup secrets and requires rechecking; never blindly enroll again.
    },
    async signOut() {
      await run(async ticket => {
        signingOut = true;
        let result: {error: unknown};
        try { result = await auth.signOut({scope: "local"}); }
        finally { signingOut = false; }
        alive(ticket);
        if (result.error != null) throw new Error("sign-out");
        binding = null; factorId = null; knownSetup = null;
        publish({phase: "signed-out", qr: "", secret: "", message: "Signed out on this device."});
      }, "Couldn't complete sign-out. You may still be signed in. Try again.");
    },
    authChanged(event: string, owner: string | null, token: string | null) {
      if (signingOut && event === "SIGNED_OUT") return;
      if (event === "SIGNED_OUT" || (binding && (owner !== binding.owner || (!verifying && token !== binding.token)))) {
        ++epoch; block(MFA_COPY.changed); publish({pending: false});
      }
    },
    dispose() { disposed = true; ++epoch; binding = null; factorId = null; knownSetup = null; state = Object.freeze({...state, qr: "", secret: ""}); listeners.clear(); },
  };
}
export type MfaFlow = ReturnType<typeof createMfaFlow>;

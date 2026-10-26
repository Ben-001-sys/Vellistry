import assert from "node:assert/strict";
import {test} from "node:test";
import {createMfaFlow, MFA_COPY, type MfaAuthPort} from "./mfa-flow";

const ok = (data: unknown) => Promise.resolve({data, error: null});
const bad = () => Promise.resolve({data: null, error: {message: "PRIVATE_RAW_AUTH_ERROR"}});
const verified = {id: "synthetic-factor", factor_type: "totp", status: "verified"};
export function fixture() {
  const h = {owner: "synthetic-author", token: "synthetic-not-a-jwt", clock: 1000000, expires: 2000,
    factors: [] as unknown[], current: "aal1", next: "aal1", visits: 0, enrolls: 0, challenges: 0, verifies: 0,
    calls: [] as string[]};
  const user = () => ({id: h.owner, is_anonymous: false, factors: h.factors});
  const session = () => ({user: user(), access_token: h.token, expires_at: h.expires});
  const auth: MfaAuthPort = {
    signInWithPassword: () => ok({user: user(), session: session()}),
    signUp: () => ok({user: user(), session: null}),
    getSession: () => ok({session: session()}),
    getUser: token => {h.calls.push(token); return ok({user: user()});},
    signOut: async () => ({error: null}),
    mfa: {
      getAuthenticatorAssuranceLevel: token => {h.calls.push(token); return ok({currentLevel: h.current, nextLevel: h.next});},
      enroll: () => {h.enrolls++; return ok({id: verified.id, type: "totp", totp: {
        secret: "JBSWY3DPEHPK3PXP", qr_code: 'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg"></svg>',
      }});},
      challenge: () => {h.challenges++; return ok({id: "synthetic-challenge", expires_at: 1500});},
      verify: input => {h.verifies++; assert.equal(input.code, "123456"); h.token = "synthetic-upgraded";
        h.factors = [verified]; h.current = "aal2"; h.next = "aal2";
        return ok({...session(), user: user()});},
    },
  };
  const flow = createMfaFlow(auth, () => {h.visits++;}, () => h.clock);
  const enrolled = () => {h.factors = [verified]; h.next = "aal2";};
  return {h, auth, flow, enrolled};
}

test("unenrolled password sign-in offers optional setup and rechecks before library", async () => {
  const {h, flow} = fixture(); await flow.signIn("synthetic@example.invalid", "synthetic-password");
  assert.equal(flow.snapshot().phase, "choice"); assert.equal(h.visits, 0);
  await flow.continueToBooks(); assert.equal(h.visits, 1); assert.equal(h.enrolls, 0);
  assert(h.calls.every(token => token === h.token));
});
test("enrolled AAL1 cannot continue until challenge, verification and post-response checks", async () => {
  const {h, flow, enrolled} = fixture(); enrolled(); await flow.signIn("", "");
  assert.equal(flow.snapshot().phase, "challenge"); await flow.continueToBooks(); assert.equal(h.visits, 0);
  await flow.verify("123456"); assert.equal(flow.snapshot().phase, "complete");
  assert.equal(h.challenges, 1); assert.equal(h.verifies, 1); assert.equal(h.visits, 0);
  await flow.continueToBooks(); assert.equal(h.visits, 1);
});
test("existing enrolled AAL2 does not enroll or challenge again", async () => {
  const {h, flow, enrolled} = fixture(); enrolled(); h.current = "aal2";
  await flow.check(); assert.equal(flow.snapshot().phase, "complete");
  await flow.enroll(); assert.equal(h.enrolls, 0);
});
test("enrollment is explicit, stays incomplete until verified, and clears secret on success", async () => {
  const {h, flow} = fixture(); await flow.check(); assert.equal(h.enrolls, 0);
  await flow.enroll(); assert.equal(h.enrolls, 1); assert.equal(flow.snapshot().phase, "enrollment");
  assert(flow.snapshot().qr.startsWith("data:image/svg+xml,%3Csvg"));
  assert.equal(flow.snapshot().secret, "JBSWY3DPEHPK3PXP");
  await flow.continueToBooks(); assert.equal(h.visits, 0);
  await flow.verify("123456"); assert.equal(flow.snapshot().phase, "complete"); assert.equal(flow.snapshot().secret, "");
});
for (const [name, change] of Object.entries({
  "missing factors": (f: ReturnType<typeof fixture>) => {f.auth.getUser = () => ok({user: {id: f.h.owner}});},
  "malformed factor": (f: ReturnType<typeof fixture>) => {f.h.factors = [{}];},
  "duplicate factor": (f: ReturnType<typeof fixture>) => {f.h.factors = [verified, verified];},
  "unverified setup": (f: ReturnType<typeof fixture>) => {f.h.factors = [{...verified, status: "unverified"}];},
  "unsupported verified phone": (f: ReturnType<typeof fixture>) => {f.h.factors = [{...verified, factor_type: "phone"}]; f.h.next = "aal2";},
  "unsupported verified passkey": (f: ReturnType<typeof fixture>) => {f.h.factors = [{...verified, factor_type: "webauthn"}]; f.h.next = "aal2";},
  "contradictory AAL2 without factors": (f: ReturnType<typeof fixture>) => {f.h.current = "aal2";},
  "contradictory next AAL": (f: ReturnType<typeof fixture>) => {f.enrolled(); f.h.next = "aal1";},
  "unavailable AAL": (f: ReturnType<typeof fixture>) => {f.auth.mfa.getAuthenticatorAssuranceLevel = bad;},
  "unknown AAL": (f: ReturnType<typeof fixture>) => {f.h.current = "aal3";},
  "expired session": (f: ReturnType<typeof fixture>) => {f.h.expires = 999;},
  "nonfinite expiry": (f: ReturnType<typeof fixture>) => {f.h.expires = NaN;},
  "anonymous identity": (f: ReturnType<typeof fixture>) => {f.auth.getUser = () => ok({user: {id: f.h.owner, factors: [], is_anonymous: true}});},
  "mismatched user": (f: ReturnType<typeof fixture>) => {f.auth.getUser = () => ok({user: {id: "other", factors: []}});},
  "missing session": (f: ReturnType<typeof fixture>) => {f.auth.getSession = () => ok({session: null});},
})) test(`fail closed: ${name}`, async () => {
  const f = fixture(); change(f); await f.flow.check(); assert.equal(f.flow.snapshot().phase, "blocked");
  await f.flow.continueToBooks(); await f.flow.enroll(); assert.equal(f.h.visits, 0); assert.equal(f.h.enrolls, 0);
});
for (const operation of ["signInWithPassword", "getSession", "getUser"] as const) {
  test(`SDK failure is sanitized: ${operation}`, async () => {
    const f = fixture(); f.auth[operation] = bad; await f.flow.signIn("", "");
    assert.equal(f.flow.snapshot().phase, "blocked"); assert(!JSON.stringify(f.flow.snapshot()).includes("PRIVATE_RAW"));
  });
}
test("incomplete password response cannot navigate", async () => {
  const f = fixture(); f.auth.signInWithPassword = () => ok({user: {id: f.h.owner}, session: null});
  await f.flow.signIn("", ""); assert.equal(f.flow.snapshot().phase, "blocked");
});
test("pending operation cannot duplicate login or enrollment", async () => {
  const f = fixture(); let release!: () => void; let calls = 0;
  f.auth.signInWithPassword = async () => {calls++; await new Promise<void>(resolve => {release = resolve;}); return {data: null, error: true};};
  const first = f.flow.signIn("", ""); assert.equal(f.flow.snapshot().pending, true);
  await f.flow.signIn("", ""); await f.flow.enroll(); assert.equal(calls, 1); release(); await first;
});
test("identity switch during factor response blocks stale completion", async () => {
  const f = fixture(); f.auth.getUser = async () => {const user = {id: f.h.owner, factors: []}; f.h.owner = "other"; return {data: {user}, error: null};};
  await f.flow.check(); assert.equal(f.flow.snapshot().phase, "blocked"); assert.equal(f.h.visits, 0);
});
test("token switch during AAL response blocks stale completion", async () => {
  const f = fixture(); f.auth.mfa.getAuthenticatorAssuranceLevel = async () => {f.h.token = "other"; return {data: {currentLevel: "aal1", nextLevel: "aal1"}, error: null};};
  await f.flow.check(); assert.equal(f.flow.snapshot().phase, "blocked");
});
test("factor added before Continue requires step-up", async () => {
  const f = fixture(); await f.flow.check(); f.enrolled(); await f.flow.continueToBooks();
  assert.equal(f.flow.snapshot().phase, "challenge"); assert.equal(f.h.visits, 0);
});
test("unknown enrollment cannot be blindly retried", async () => {
  const f = fixture(); await f.flow.check(); f.auth.mfa.enroll = bad;
  await f.flow.enroll(); assert.equal(f.flow.snapshot().message, MFA_COPY.unknown);
  assert.equal(f.flow.snapshot().secret, ""); await f.flow.enroll(); assert.equal(f.h.enrolls, 0);
  await f.flow.check(); assert.equal(f.flow.snapshot().phase, "blocked");
  await f.flow.enroll(); assert.equal(f.h.enrolls, 0);
});
test("partial enrollment and unsafe QR are rejected without displaying secrets", async () => {
  for (const qr of ["https://unexpected.invalid/secret", 'data:image/svg+xml;utf-8,<svg onload="alert(1)"></svg>']) {
    const f = fixture(); await f.flow.check(); f.auth.mfa.enroll = () => ok({id: "factor", type: "totp", totp: {secret: "JBSWY3DPEHPK3PXP", qr_code: qr}});
    await f.flow.enroll(); assert.equal(f.flow.snapshot().phase, "blocked"); assert.equal(f.flow.snapshot().secret, "");
  }
});
test("code format is validated before challenge", async () => {
  const f = fixture(); f.enrolled(); await f.flow.check();
  for (const code of ["", "12345", "1234567", "abcdef", " 123456"]) await f.flow.verify(code);
  assert.equal(f.h.challenges, 0);
});
for (const failure of ["challenge", "verify", "expired challenge", "incomplete verification", "wrong factor", "wrong identity", "expiry during verification"]) {
  test(`verification fails closed: ${failure}`, async () => {
    const f = fixture(); f.enrolled(); await f.flow.check();
    if (failure === "challenge") f.auth.mfa.challenge = bad;
    if (failure === "verify") f.auth.mfa.verify = bad;
    if (failure === "expired challenge") f.auth.mfa.challenge = () => ok({id: "c", expires_at: NaN});
    const original = f.auth.mfa.verify;
    if (failure === "incomplete verification") f.auth.mfa.verify = () => ok({});
    if (failure === "wrong identity") f.auth.mfa.verify = async input => {const r = await original(input); f.h.owner = "other"; return r;};
    if (failure === "wrong factor") f.auth.mfa.verify = async input => {const r = await original(input); f.h.factors = [{...verified, id: "other"}]; return r;};
    if (failure === "expiry during verification") f.auth.mfa.verify = async input => {const r = await original(input); f.h.clock = 3000000; return r;};
    await f.flow.verify("123456"); assert.equal(f.flow.snapshot().phase, "blocked"); assert.equal(f.h.visits, 0);
    assert.equal(f.flow.snapshot().secret, "");
  });
}
test("auth change erases secret and invalidates late enrollment", async () => {
  const f = fixture(); await f.flow.check(); let release!: () => void;
  const original = f.auth.mfa.enroll;
  f.auth.mfa.enroll = async input => {await new Promise<void>(resolve => {release = resolve;}); return original(input);};
  const pending = f.flow.enroll(); await new Promise(resolve => setImmediate(resolve));
  f.flow.authChanged("SIGNED_OUT", null, null); release(); await pending;
  assert.equal(f.flow.snapshot().phase, "blocked"); assert.equal(f.flow.snapshot().secret, "");
});
test("dispose erases setup material and ignores stale responses", async () => {
  const f = fixture(); await f.flow.check(); await f.flow.enroll(); f.flow.dispose();
  assert.equal(f.flow.snapshot().secret, ""); assert.equal(f.flow.snapshot().qr, "");
  await f.flow.verify("123456"); assert.equal(f.h.verifies, 0);
});
test("local sign-out failure is not described as signed out", async () => {
  const f = fixture(); await f.flow.check(); f.auth.signOut = async () => ({error: true});
  await f.flow.signOut(); assert.match(f.flow.snapshot().message, /Couldn't complete sign-out/);
});
test("own SDK sign-out event completes correctly and erases setup", async () => {
  const f = fixture(); await f.flow.check(); await f.flow.enroll();
  f.auth.signOut = async input => {assert.equal(input.scope, "local"); f.flow.authChanged("SIGNED_OUT", null, null); return {error: null};};
  await f.flow.signOut(); assert.equal(f.flow.snapshot().phase, "signed-out"); assert.equal(f.flow.snapshot().secret, "");
});
test("signup stays at sign-in even if SDK supplies a session", async () => {
  const f = fixture(); await f.flow.signUp("", ""); assert.equal(f.h.visits, 0); assert.equal(f.flow.snapshot().phase, "signed-out");
});
test("failed setup code can resume only its known same-author unverified factor without reenrollment", async () => {
  const f = fixture(); await f.flow.check(); await f.flow.enroll();
  f.h.factors = [{...verified, status: "unverified"}];
  const verify = f.auth.mfa.verify; f.auth.mfa.verify = bad;
  await f.flow.verify("123456"); assert.equal(f.flow.snapshot().phase, "blocked");
  await f.flow.check(); assert.equal(f.flow.snapshot().phase, "enrollment");
  assert.equal(f.flow.snapshot().secret, ""); assert.equal(f.flow.snapshot().qr, "");
  f.auth.mfa.verify = verify; await f.flow.verify("123456");
  assert.equal(f.flow.snapshot().phase, "complete"); assert.equal(f.h.enrolls, 1);
});
test("stale or future observation cannot complete UI verification", async () => {
  for (const change of [31000, -1]) {
    const f = fixture(); f.auth.mfa.getAuthenticatorAssuranceLevel = async () => {
      f.h.clock += change; return {data: {currentLevel: "aal1", nextLevel: "aal1"}, error: null};
    };
    await f.flow.check(); assert.equal(f.flow.snapshot().phase, "blocked");
  }
});
test("concurrent authors use independent immutable snapshots and token bindings", async () => {
  const a = fixture(), b = fixture(); b.h.owner = "synthetic-b"; b.h.token = "synthetic-token-b"; b.enrolled();
  await Promise.all([a.flow.check(), b.flow.check()]); assert.equal(a.flow.snapshot().phase, "choice"); assert.equal(b.flow.snapshot().phase, "challenge");
  assert(Object.isFrozen(a.flow.snapshot())); assert(a.h.calls.every(t => t === a.h.token)); assert(b.h.calls.every(t => t === b.h.token));
});
test("uncertainty is scoped to the initiating author across account switches", async () => {
  const f = fixture(); await f.flow.check(); f.auth.mfa.enroll = bad;
  await f.flow.enroll(); await f.flow.signOut();
  f.h.owner = "synthetic-b"; f.h.token = "synthetic-token-b";
  await f.flow.signIn("", ""); assert.equal(f.flow.snapshot().phase, "choice");
  await f.flow.continueToBooks(); assert.equal(f.h.visits, 1);
});
test("another author's successful enrollment cannot clear earlier uncertain setup", async () => {
  const f = fixture(); const enroll = f.auth.mfa.enroll;
  await f.flow.check(); f.auth.mfa.enroll = bad; await f.flow.enroll(); await f.flow.signOut();
  f.h.owner = "synthetic-b"; f.h.token = "synthetic-token-b";
  await f.flow.signIn("", ""); f.auth.mfa.enroll = enroll; await f.flow.enroll();
  assert.equal(f.h.enrolls, 1);
  await f.flow.signOut(); f.h.owner = "synthetic-author"; f.h.token = "synthetic-not-a-jwt";
  await f.flow.signIn("", ""); assert.equal(f.flow.snapshot().phase, "blocked");
  assert.equal(f.flow.snapshot().message, MFA_COPY.unknown);
});

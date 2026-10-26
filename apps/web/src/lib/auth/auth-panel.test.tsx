import React from "react";
import assert from "node:assert/strict";
import {test} from "node:test";
import {renderToStaticMarkup} from "react-dom/server";
import {AuthPanel} from "../../components/auth/auth-panel";
import {createMfaFlow, type MfaAuthPort, type MfaSnapshot} from "./mfa-flow";

// A closed synthetic snapshot port for server-rendered component/state contracts.
// Browser keyboard/focus interaction is separately exercised, not inferred from markup.
function render(patch: Partial<MfaSnapshot>, enrollment = false) {
  const unavailable = async () => { throw new Error("Unexpected SDK call during offline render"); };
  const auth: MfaAuthPort = {getSession: unavailable, getUser: unavailable, signInWithPassword: unavailable,
    signUp: unavailable, signOut: unavailable, mfa: {enroll: unavailable, challenge: unavailable,
      verify: unavailable, getAuthenticatorAssuranceLevel: unavailable}};
  const flow = createMfaFlow(auth, () => {throw new Error("Unexpected navigation");});
  flow.snapshot = () => Object.freeze({phase: "signed-out", pending: false, message: "Synthetic state", qr: "", secret: "", ...patch});
  return renderToStaticMarkup(<AuthPanel flow={flow} enrollment={enrollment}/>);
}
test("login retains labeled email/password, sign-in, signup and home navigation", () => {
  const html = render({});
  for (const label of ["Email", "Password", "Sign in", "Create account", "Back to home"]) assert(html.includes(label));
  assert(html.includes('type="email"')); assert(html.includes('autoComplete="current-password"'));
});
test("enrolled challenge exposes a labeled native six-digit OTP form and no continue control", () => {
  const html = render({phase: "challenge"});
  assert(html.includes("Authenticator code")); assert(html.includes('autoComplete="one-time-code"'));
  assert(html.includes('inputMode="numeric"')); assert(html.includes('pattern="[0-9]{6}"'));
  assert(html.includes('aria-describedby="auth-code-help"')); assert(!html.includes("Continue to your books"));
  assert(!html.includes("Create account"));
});
test("pending challenge disables verification and announces progress", () => {
  const html = render({phase: "challenge", pending: true, message: "Checking authentication…"});
  assert(html.includes('aria-busy="true"')); assert(html.includes('role="status"'));
  assert(html.includes('aria-live="polite"')); assert.match(html, /<button[^>]*disabled=""[^>]*>Verify code/);
});
test("enrollment offers private QR image and manual setup without raw SVG insertion or continuation", () => {
  const html = render({phase: "enrollment", secret: "SYNTHETIC_ONLY", qr: "data:image/svg+xml,%3Csvg%3E%3C/svg%3E"}, true);
  assert(html.includes("Enter a setup key instead")); assert(html.includes("Keep this setup code private"));
  assert(html.includes('referrerPolicy="no-referrer"')); assert(html.includes('alt="Scan this setup code'));
  assert(!html.includes("<svg")); assert(!html.includes("Continue to your books"));
});
test("unknown/blocked enrollment hides credentials, setup material and continuation", () => {
  const html = render({phase: "blocked", message: "We couldn't confirm whether setup started."}, true);
  assert(html.includes("Check sign-in status")); assert(html.includes("Sign in again"));
  for (const forbidden of ["Continue to your books", "Set up authenticator app", "<img", 'type="password"']) assert(!html.includes(forbidden));
});
test("unenrolled choice offers explicit opt-in and existing library continuation", () => {
  const html = render({phase: "choice"});
  assert(html.includes("Set up authenticator app")); assert(html.includes("Continue to your books"));
  assert(!html.includes("<img")); assert(!html.includes("Verify code"));
});
test("completed UI does not expose setup secret, OTP or a new enrollment action", () => {
  const html = render({phase: "complete"});
  assert(html.includes("Continue to your books"));
  for (const forbidden of ["<img", "Enter a setup key", "Verify code", "Set up authenticator app"]) assert(!html.includes(forbidden));
});
test("status text is escaped rather than interpreted as HTML", () => {
  const html = render({phase: "blocked", message: '<script>synthetic</script>'});
  assert(!html.includes("<script>")); assert(html.includes("&lt;script&gt;"));
});

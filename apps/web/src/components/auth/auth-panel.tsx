"use client";
import React, {useEffect, useRef, useState, type FormEvent} from "react";
import Link from "next/link";
import {getBrowserSupabase} from "../../lib/supabase/browser";
import {createMfaFlow, type MfaFlow, type MfaSnapshot} from "../../lib/auth/mfa-flow";

/** The optional flow is injected only by offline tests; routes use the existing browser client. */
export function AuthPanel({enrollment = false, flow: supplied}: {enrollment?: boolean; flow?: MfaFlow}) {
  const [flow, setFlow] = useState<MfaFlow | null>(supplied ?? null);
  const [snapshot, setSnapshot] = useState<MfaSnapshot>(() => supplied?.snapshot() ??
    {phase: "signed-out", pending: true, message: "Preparing sign-in…", qr: "", secret: ""});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const codeInput = useRef<HTMLInputElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const lastPhase = useRef(snapshot.phase);
  useEffect(() => {
    let current: MfaFlow;
    let unsubscribeAuth = () => {};
    try {
      const auth = supplied ? null : getBrowserSupabase().auth;
      current = supplied ?? createMfaFlow(auth!, () => { window.location.assign("/books"); });
      setFlow(current);
      if (auth) {
        const {data: {subscription}} = auth.onAuthStateChange((event, session) => {
          // No asynchronous SDK calls inside the SDK's locked notification callback.
          current.authChanged(event, session?.user.id ?? null, session?.access_token ?? null);
        });
        unsubscribeAuth = () => subscription.unsubscribe();
      }
    } catch {
      setSnapshot({phase: "blocked", pending: false, qr: "", secret: "",
        message: "Sign-in is unavailable. Please try again later."});
      return;
    }
    setSnapshot(current.snapshot());
    const unsubscribe = current.subscribe(setSnapshot);
    if (enrollment) void current.check();
    return () => { unsubscribe(); unsubscribeAuth(); if (!supplied) current.dispose(); };
  }, [supplied, enrollment]);
  useEffect(() => {
    if (!snapshot.pending && snapshot.phase !== lastPhase.current) {
      setCode("");
      if (snapshot.phase === "challenge" || snapshot.phase === "enrollment") codeInput.current?.focus();
      else heading.current?.focus();
      lastPhase.current = snapshot.phase;
    }
  }, [snapshot.phase, snapshot.pending]);
  const busy = snapshot.pending || !flow;
  const needsCode = snapshot.phase === "challenge" || snapshot.phase === "enrollment";
  async function credentials(mode: "signin" | "signup") {
    if (busy || !flow || !email.trim() || password.length < 6) return;
    const captured = password; setPassword("");
    if (mode === "signin") await flow.signIn(email.trim(), captured);
    else await flow.signUp(email.trim(), captured);
  }
  const button = "rounded border px-4 py-2 disabled:opacity-50";
  return <main className="mx-auto max-w-md p-8 space-y-5" aria-busy={snapshot.pending}>
    <h1 ref={heading} tabIndex={-1} className="text-2xl font-semibold">
      {enrollment ? "Authenticator app" : "Sign in to Vellistry"}
    </h1>
    {(snapshot.phase === "signed-out" || snapshot.phase === "blocked") && !enrollment ?
      <form className="space-y-4" onSubmit={(event: FormEvent) => {event.preventDefault(); void credentials("signin");}}>
        <label className="block">Email
          <input className="mt-1 block w-full rounded border p-2" type="email" autoComplete="email" required
            value={email} disabled={busy} onChange={event => setEmail(event.target.value)}/>
        </label>
        <label className="block">Password
          <input className="mt-1 block w-full rounded border p-2" type="password" autoComplete="current-password" required minLength={6}
            value={password} disabled={busy} onChange={event => setPassword(event.target.value)}/>
        </label>
        <div className="flex gap-3">
          <button className={button} type="submit" disabled={busy}>Sign in</button>
          <button className={button} type="button" disabled={busy} onClick={() => { void credentials("signup"); }}>Create account</button>
        </div>
      </form> : null}
    <p role="status" aria-live="polite">{snapshot.message}</p>
    {snapshot.phase === "choice" ? <div className="space-y-3">
      <p>Add a second sign-in step with an authenticator app. Setup starts only when you choose it.</p>
      <button className={button} disabled={busy} onClick={() => { void flow?.enroll(); }}>Set up authenticator app</button>
    </div> : null}
    {snapshot.phase === "enrollment" && snapshot.secret ? <section aria-label="Authenticator setup" className="space-y-3">
      <p>Keep this setup code private. It is shown only during this setup.</p>
      {/* Data-image only, no raw SVG HTML, remote image, analytics or secret persistence. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={snapshot.qr} alt="Scan this setup code with your authenticator app" width={240} height={240} referrerPolicy="no-referrer"/>
      <details><summary>Enter a setup key instead</summary><p className="break-all select-all">{snapshot.secret}</p></details>
      <p>Leaving before confirmation may leave an incomplete setup. No authenticator is removed automatically.</p>
    </section> : null}
    {needsCode ? <form className="space-y-3" onSubmit={event => {
      event.preventDefault(); if (!busy) { const captured = code; setCode(""); void flow?.verify(captured); }
    }}>
      <label className="block">Authenticator code
        <input ref={codeInput} className="mt-1 block w-full rounded border p-2" type="text" inputMode="numeric"
          autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} minLength={6} required
          aria-describedby="auth-code-help" value={code} disabled={busy} onChange={event => setCode(event.target.value)}/>
      </label>
      <p id="auth-code-help">Enter the six-digit code currently shown in your authenticator app.</p>
      <button className={button} type="submit" disabled={busy}>Verify code</button>
    </form> : null}
    {snapshot.phase === "choice" || snapshot.phase === "complete" ?
      <button className={button} disabled={busy} onClick={() => { void flow?.continueToBooks(); }}>Continue to your books</button> : null}
    {snapshot.phase === "blocked" ? <>
      {flow ? <button className={button} disabled={busy} onClick={() => { void flow.check(); }}>Check sign-in status</button> : null}
      {enrollment ? <Link href="/login">Sign in again</Link> : null}
    </> : null}
    {flow ? <button className={button} disabled={busy} onClick={() => { setCode(""); setPassword(""); void flow.signOut(); }}>Sign out</button> : null}
    {!enrollment ? <Link className="block" href="/account/mfa">Authenticator app settings</Link> : <Link className="block" href="/login">Back to sign in</Link>}
    <Link className="block" href="/">Back to home</Link>
  </main>;
}

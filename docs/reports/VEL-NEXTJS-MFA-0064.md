---
id: VEL-REPORT-0064
title: Bounded Next.js authentication and MFA UI
status: proposed-for-review
created_at: 2026-10-26
owner: project_owner
---

# Task0064 — bounded Next.js authentication and MFA

## FACT

Baseline33812f87a896574f245d37793d8d7f74403a2aea. Owner authorization:
https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6427502671
Task0064 source/inputs committed before immutable CP0064, validated and committed
1fa7c1973ccf1a9f4bc5c5cf41d7ccf8eb7247f1 before operative feature changes.
Initial pack generation refused oversized LANGUAGE and total inputs; pre-dispatch
commits bound a Git-attributed excerpt and trimmed redundant already-read sources.
No pack existed at those corrections; dispatched pack is never rewritten.

Login reuses the existing browser client through an injected flow and shared
AuthPanel. Existing signup remains available, without automatic MFA completion.
Settings route `/account/mfa` checks sign-in but never enrolls on mount. Enrollment
requires an explicit action. Six-digit TOTP challenge/verify uses frozen SDK APIs.
Explicit getUser factor-array presence plus SDK AAL and before/after session
checks route UI only. Missing/malformed/unsupported/contradictory state blocks.
Enrolled AAL1 has no Continue control. Successful verification rechecks the same
author, rotated session, verified selected factor and AAL2. Continue rechecks again.
Unenrolled authors may explicitly enroll or continue to the existing library.

No raw Auth errors are rendered/logged. QR uses an encoded SVG data-image without
raw HTML or remote URL; setup key is transient, accessible only in setup, cleared
on success/failure/sign-out/auth change/disposal. Unknown enrollment blocks blind
retry even after an empty status recheck in the same flow. Incomplete existing
factors block new setup. There is no automatic factor deletion or reset. No new
telemetry, local secret storage, dependencies, CI, Auth service/guard or SQL changes.
Actual hosted authentication/enrollment was never executed.

## INTERPRETATION — security boundaries

This is browser interaction, not authoritative factor completeness, cryptographic
verification, active-session enforcement or a protected backend boundary. Existing
`/books` and `/api/books` behavior is intentionally unchanged. Direct URL/API access
can still reach the existing backend; this PR neither approves enrolled AAL1 backend
access nor resolves it. No manuscript-write privileges or production/pilot readiness.
SDK getAuthenticatorAssuranceLevel partly decodes local session data; using its
result in this UI does not prove backend authorization or verified JWT claims.

The browser SDK's existing cookie/session behavior remains. TOTP verification
may rotate the session through SDK internals; stale results are discarded and
identity/session changes block UI progress. Already-sent provider operations
cannot be undone by component disposal. Transient JavaScript memory is not a
secure erasure guarantee. Unknown setup across a full reload requires owner/user
status reconciliation; no durable idempotency contract or automatic cleanup is
claimed. Unsupported phone/passkey/recovery factors are blocked, not downgraded.

## PROPOSAL — copy and owner review

LANGUAGE.md remains proposed-owner-review. Existing Sign in, Create account,
Email, Password, Sign out and Back to home remain. New local wording proposed on
login/settings: Authenticator app, Set up authenticator app, Authenticator code,
Verify code, Check sign-in status, Continue to your books, private setup-key help,
pending and uncertain-result messages. They describe actual UI transitions, never
production security acceptance. Semantic/accessibility checks cover visible labels,
OTP autocomplete/numeric hints, disabled pending controls, status live region,
keyboard submission, focus and setup-material removal where actually exercised.

Official API reference: https://supabase.com/docs/guides/auth/auth-mfa/totp
Frozen auth-js2.117.3 source is compatibility authority. Public changelog read;
no project/Auth/JWKS endpoint was contacted. Upcoming public TLS-cipher deprecation
does not require a dependency/configuration change for this repository-only slice.

## Verification and delivery

Exact commands/exits/source commit and raw evidence are in EB0064 and evidence
folder. Final-head distinct source review, draft/ready CI and owner disposition
are appended to the PR ledger after the head exists, avoiding SHA self-reference.
New focused test command is `corepack pnpm test:auth-mfa`; existing CI is unchanged,
so automatic inclusion of this new suite is a future separately scoped decision.
No claim that existing CI automatically runs these new files.

R01-R08 remain NOT_RUN. N12/historical independent spawn EPERM remain BLOCKED.
All3 hosted fixture prerequisites UNKNOWN; G1-G4 unsatisfied. Six production
security decisions remain pending/conditional as recorded. Issue108 stays OPEN.
Owner separately decides PR merge and any live UI verification. No automatic merge.

A focused correction permits retrying the code only for a known same-author setup after explicit status recheck, without re-enrolling or redisplaying its secret. Its regression raises the final focused count to53. Final offline Edge rerun passes21assertions. Full governance was still running at this source/evidence cut; final actual outcome is appended to the PR ledger.

Distinct first review found cross-author uncertainty leakage; two negative regressions failed before correction and final55MFA tests pass afterward. ab75be7 scopes uncertainty by author and fixes terminal unavailable aria-busy. Final offline browser23assertions PASS with0external requests. Historical review/reproduction/failures retained; independent full tsx rerun remains spawn EPERM BLOCKED. Full local governance ongoing at the evidence cut, final actual CI/review recorded externally.

Full initial governance FAIL preserved (284current tests;280PASS/2FAIL/2ERROR). Current-state exceeded11000bytes; compacted to10874 while retaining exact original snapshot and historical test references. Other3failures were scratch pack/HEAD drift. Checkpoint regression now8PASS at321abb7; full unchanged detached-source rerun pending at this cut, actual result and CI appended externally. No validators/security tests weakened.

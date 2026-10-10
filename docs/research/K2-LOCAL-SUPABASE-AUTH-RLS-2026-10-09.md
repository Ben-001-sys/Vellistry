---
id: VEL-RSH-K2-AUTH-RLS-20261009-001
type: research-report
status: local-real-auth-and-rls-ci-passed
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.3.0
related_adrs:
  - ADR-0006
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
  - VEL-PRODUCT-CONSTRAINT-20261009-001
sources:
  - https://supabase.com/docs/guides/local-development/cli-workflows
  - https://supabase.com/docs/guides/database/postgres/row-level-security
  - https://supabase.com/docs/guides/auth/server-side/creating-a-client
  - https://supabase.com/docs/guides/auth/sessions
  - https://supabase.com/docs/guides/auth/signout
  - https://supabase.com/docs/guides/local-development/testing/overview
---

# K2 — Actual local Supabase Auth and author/book RLS security research

## Primary answer to the next research question

**Use real, locally hosted Supabase Auth and PostgreSQL RLS, not R18 synthetic cookies, to verify the first two-author authoring flow.** Keep Next.js as the author interface/BFF and NestJS as independently verifying API. No hosted organization, payment method or author manuscripts are required to run the test. This is **NOT an assertion K2 has passed** until a full Supabase Auth runtime, genuine account sign-in and actual PostgREST policies pass CI.

## Verified official-doc findings, 2026-10-09

1. [Supabase JWT verification](https://supabase.com/docs/reference/javascript/auth-getuser): `getUser(accessToken)` calls Auth and verifies the caller's user record. `getClaims` validates the JWT signature using JWKS for asymmetric signing (or Auth API fallback). Neither trusts an `x-user-id` request header.
2. [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security): `auth.uid()` identifies the user from a verified JWT in PostgREST context. PostgreSQL table **grants + RLS policies both apply**. Privileged `service_role` keys bypass ordinary RLS and must never be used in a browser or everyday author request.
3. [SSR cookie refresh](https://supabase.com/docs/guides/auth/server-side/creating-a-client): Next.js server components cannot persist refreshed cookies directly. Official SSR flow uses a Next Proxy to refresh and propagate cookies. Our first implementation branch only builds a browser/server client plus BFF; **no verified refresh proxy exists yet**.
4. [Supabase sign-out](https://supabase.com/docs/guides/auth/signout): sign-out invalidates affected refresh tokens, but previously issued access JWTs may remain accepted until their `exp`. **A passing `getUser` check is not a documented guarantee of instant session revocation.** If Vellistry requires immediate revocation for manuscript reads, add a separate active-`session_id` check, with narrow privilege and test it explicitly. Do not describe ordinary sign-out as instantly revoking an issued JWT.
5. [Supabase CLI](https://supabase.com/docs/guides/local-development/cli-workflows): local stack is for development only, has default credentials and no production hardening; must not be publicly exposed. `supabase db reset` erases the local development DB; never run it on a linked production project.
6. [Supabase testing](https://supabase.com/docs/guides/local-development/testing/overview): negative RLS tests should cover all roles and SELECT/INSERT/UPDATE/DELETE, plus app-level identity tests. Use real user access tokens rather than only emulated session GUCs for the HTTP path.

## Boundaries in existing PR #28

- **Already authored and build-verified:** Nest guard passes `accessToken` to Supabase Auth's `getUser`, Nest book requests use a **publishable-key client with user Bearer token**; the books owner_id uses a default `auth.uid()`; book/chapter/revision tables enable RLS, and direct accepted-chapter writes are deliberately denied pending a transactionally versioned RPC.
- **Not previously tested:** actual Auth signup/password login, expiry/revocation, session refresh proxy, two-account PostgREST RLS, test-only service-role fixtures and storage privacy.
- **Important boundary:** A test-only privileged fixture key may create synthetic chapter data and clean up test accounts; **this is not a pattern for production manuscript handlers**. The application must never silently call a service-role client when handling ordinary author reads or writes.

## New executable local integration research

File: `apps/api/tests/supabase-auth-rls.integration.mjs`. Runner: `.github/workflows/k2-supabase-auth-rls.yml`. The CI runner starts actual local Postgres, GoTrue/Auth, PostgREST and gateway. `supabase/config.toml` disables email confirmation **only in the disposable local development environment** so two test-only email/password users can sign in without a real email provider.

Expected checks (until observed, **NOT_RUN**):

1. Two real signups and password sign-ins yield distinct Supabase JWTs.
2. Nest's `GET /v1/books` accepts only valid, verified Supabase JWT.
3. Missing/malformed/signature-tampered JWTs receive 401.
4. Nest book creation applies `auth.uid()` owner to each request.
5. Both authors list only their books.
6. Forged `x-user-id` or submitted `owner_id` never substitutes identity.
7. PostgREST direct cross-author SELECT blocked.
8. Direct INSERT under other user's `owner_id` denied.
9. Cross-author UPDATE and own-book owner transfer denied.
10. `anon` reads and writes denied.
11. Privileged test fixture creates one synthetic chapter and immutable revision per book.
12. Client chapter reads scoped to their own novel.
13. Client revision reads scoped to their own novel.
14. Direct chapter UPDATE and revision INSERT denied until K3 RPC implementation.
15. Invalid book title lengths denied at Nest.
16. Cross-author DELETE blocked.
17. **Diagnostic only:** Call `signOut({scope:"local"})` then observe whether an already-issued JWT is accepted by Nest/PostgREST; do not assert instant denial when Supabase officially documents continued JWT validity.

### Acceptance boundary and release risk

- Passing 17 assertion/diagnostic groups on real Supabase is stronger than a mocked login or standalone pgTAP policy trial, **but still not full production security**. Next.js cookie refresh/CSRF, real session revocation policy, fine-grained file Storage RLS, long-duration edits, input integrity, rate limiting, origins, monitoring, backups and actual author browsers remain later gates.
- A test-only administrative key is handled only by the fixture script and ephemeral CI environment, never the Next client or Nest implementation module. CI logs and report artifacts must omit all tokens/passwords.
- No new paid service, remote project, production migration or public hosting is allowed.
- This research PR is stacked on draft PR #28; it does not merge, replace or silently approve #28.

## Initial actual execution — 2026-10-09 (failure is evidence)

The first real local-stack CI [run #37987539390](https://github.com/Ben-001-sys/Vellistry/actions/runs/37987539390), code commit `4fdac665c4e7d4e24592f65cff49fadbb48a9657`, successfully started disposable Supabase Auth/PostgREST/PostgreSQL, applied migrations and ran genuine NestJS against two password-authenticated test accounts.

**13 of 17 named assertion/diagnostic groups passed, then group K2-14 failed.** Authentication, forged tokens, book ownership and cross-author books, anon access, source chapter and revision *reads* all passed. At group K2-14, the script expected a direct authenticated chapter UPDATE to return a permission error. Instead the request returned no error. This is consistent with a default `authenticated` UPDATE grant remaining on a public table even though there was no matching UPDATE RLS policy. **The initial test checked the error only, not the unchanged row.** No evidence of an actual chapter mutation was demonstrated in that run, and the suite stopped before the remaining cases.

**Correction proposed and committed here:** a second explicit migration revokes all direct privileges on `chapters` and `chapter_revisions` for authenticated (and anon), then restores `authenticated` SELECT only. The test now checks both UPDATE denial **and** unchanged chapter content. The corrected schema must pass genuine two-user integration before declaring K2 complete. This protects against future accidental direct DML grants and makes permission-denied behavior unambiguous. A future transactionally reviewed chapter-write API must not weaken this policy by granting direct table edits.

## Corrected actual execution — VERIFIED 2026-10-09

**PASS:** [exact-head GitHub Actions run #37987927967](https://github.com/Ben-001-sys/Vellistry/actions/runs/37987927967), code commit `29a09d17b8f9e5c35d5a06089b456bfd19d1c375`, final outcome **SUCCESS**. The runner launched real local Supabase Auth, PostgreSQL and PostgREST, compiled and started NestJS, registered and signed in two authentic synthetic users, applied both migrations, and completed **all 17 named test groups / 0 failures**. The independent [implementation-build regression #37987927975](https://github.com/Ben-001-sys/Vellistry/actions/runs/37987927975) also passed. Test output contains no author credentials or private manuscripts; privileged service key was used in the test fixture only.

**Exactly what passed:**
- Genuine Auth signups/sign-ins, distinct valid JWTs and Nest validation;
- Missing, invalid and tampered JWT denial;
- Server author ownership, book list isolation, forged `x-user-id` / `owner_id` ignored or denied;
- Authenticated PostgREST cross-book SELECT/INSERT/UPDATE/DELETE denial and unauthenticated access denial;
- Authenticated chapter and immutable revision reads for own book, and zero foreign book leakage;
- **After explicitly revoking pre-existing default DML grants**, direct authenticated chapter UPDATE and chapter_revision INSERT returned errors; accepted chapter content remained unchanged;
- Invalid title refusal; test account cleanup in fixture code;
- Post-signout behavior **measured**, not asserted as immediate global revocation.

### Actual sign-out mismatch: a privacy/security design gate

The exact passing log records:

```text
OBSERVED K2 logout old JWT: Nest HTTP 401 direct Data API accepted true
```

This means **the same previously issued token was refused by Nest's `supabase.auth.getUser(jwt)` path after local sign-out, while the direct Supabase PostgREST request did not return an error** in this test. The test does *not* record how many rows the post-signout Data API returned, nor prove the token works beyond its expiration. It demonstrates inconsistent immediate-revocation behavior and prevents claiming that signing out instantly terminates access via all paths.

Supabase documents that access JWTs can remain valid until `exp` after sign-out; revoking refresh tokens does not retroactively alter an already-issued signed token. Vellistry's *future production* policy must explicitly choose and test its logout semantics. For stronger guarantees across all routes, consider **server-enforced session-id validity** with reviewed least-privilege database functions and controls, or removing sensitive manuscript tables from public Data API access while supplying a separately secured Nest data channel. Merely making the UI call Nest **does not block direct PostgREST** while tables remain exposed and grants permit access.

Do not implement a `security definer` bypass or move schemas in this research PR without independent threat modeling and verified negative tests.

### Status boundaries

**K2A—local real Supabase Auth, Nest identity, and per-author book/chapter/revision RLS: PASSED in draft stacked PR #29.**

**Still open:** Next.js Proxy cookie refresh and real browser session lifecycle; immediate sign-out expiry policy; session revocation across all data access paths; long-running auth expiry during writing; storage object RLS; rate limits/CSRF; privileged DB connection design; production hardening and key rotation. The completed test is evidence of one disposable local setup, not finished authentication for public authors.

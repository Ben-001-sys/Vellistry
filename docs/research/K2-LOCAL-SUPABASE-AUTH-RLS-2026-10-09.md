---
id: VEL-RSH-K2-AUTH-RLS-20261009-001
type: research-report
status: executable-integration-prepared-not-verified
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
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

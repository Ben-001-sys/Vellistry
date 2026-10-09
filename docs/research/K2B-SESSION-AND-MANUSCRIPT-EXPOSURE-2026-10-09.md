---
id: VEL-RES-K2B-SESSION-PROBE-20261009-001
type: security-research-report
status: real-local-session-probe-passed-decision-pending
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.2.0
sources:
  - "https://supabase.com/docs/guides/auth/signout"
  - "https://supabase.com/docs/guides/auth/sessions"
  - "https://supabase.com/docs/guides/auth/server-side/creating-a-client"
  - "https://supabase.com/docs/guides/auth/server-side/advanced-guide"
  - "https://supabase.com/docs/guides/api/securing-your-api"
  - "https://github.com/Ben-001-sys/Vellistry/pull/29"
related_research:
  - R15
  - R18
related_adrs:
  - ADR-0006
---

# R15 / K2B — Session lifecycle and manuscript exposure (research track)

## Evidence already established

[Real local Auth+RLS K2A](https://github.com/Ben-001-sys/Vellistry/pull/29) passed 17 groups of two-user account and database isolation tests. On signout of a local session, Nest rejected an old JWT with 401 but direct PostgREST gave no error. That earlier test **did not measure returned row content**, leaving the actual manuscript-exposure question unanswered.

## Verified external behavior from authoritative documentation

- Supabase **signOut** terminates the selected session's refresh tokens but existing access JWTs normally remain usable until \`exp\`. The default signout scope is global; \`local\` revokes only that session, preserving other devices.
- Every JWT includes \`session_id\` (distinct per Auth session). Supabase documents checking actual active \`auth.sessions\` rows when immediate post-signout invalidation is essential; however such checks add database dependencies and may require carefully audited security definer code.
- \`getClaims\` verifies JWT signature and expiry, **not session database presence**. \`getUser\` queries the Auth server for updated user status. These are not equivalent to universal, immediate database-level revocation.
- For Next.js 16, \`@supabase/ssr\` requires a **\`proxy.ts\` cookie-refresh layer** that writes updated cookies on both request and response. The existing scaffold does not yet include this; not claiming tested SSR behavior.
- Exposed Supabase Data API tables may be callable **directly** by any browser holding a signed JWT. Routing UI operations through Nest is not sufficient if PostgREST grants/RLS allow the same data. Privilege revocation + exposed-schema design, or explicit session-liveness constraints on direct APIs, require a security choice and separate tests.

## New actual-runtime probe

Script: \`apps/api/tests/k2b-session-exposure.integration.mjs\` runs only with loopback Supabase and Nest, two generated Alice sessions plus Bob, synthetic book rows and a test-only fixture key for cleanup. It captures exact row counts/readability and Nest HTTP results after **local and global signout**, attempts a revoked refresh, verifies the other Alice session stays valid after local logout, verifies Bob remains isolated, and compares \`getClaims\` and \`getUser\` for the same old JWT. **Do not record credentials or token material in artifacts.**

The test does not yet implement a \`proxy.ts\`, real browser account switching, cookie refresh race, offline drafts encryption/erasure, storage object policies, expiry injection or live account deletion; those are distinct research experiments still required before closing K2B.

## Security decision alternatives (NO option selected)

| Option | Expected behavior | Tradeoff / verification |
|---|---|---|
| **S1 — bounded JWT validity** | Explicitly disclose that signout clears local auth and revokes refresh tokens, but an issued access token may remain valid until a short expiration. | Simpler and fewer auth/database calls; verify permitted maximum JWT lifetime, bearer theft exposure, direct Data API and storage access, cache keys and browser signout. |
| **S2 — high-sensitivity session liveness** | Reject already-issued tokens for manuscript reads/writes if their \`session_id\` was revoked. | Harder due to RLS/PostgREST and worker access. Requires formally reviewed SQL privilege checks, data API behavior tests, performance and outage safety. Do not expose \`auth.sessions\` or a service-role key to clients. |
| **S3 — Nest-only manuscripts** | Move private author tables to a non-exposed schema and remove direct Data API author grants; Nest uses verified tokens and restricted DB access. | Stronger single-gateway control, higher API/SQL authorization burden; must deliberately implement scoped database queries and backups. Other Supabase services may remain separately exposed. |

S3 and S2 can be combined in a later approved design; neither is a no-cost automatic fix. Before implementing one, choose the desired post-logout security semantics for private unpublished manuscript data. A direct Data API read that still returns private rows post-signout is a valid test finding even if documented behavior explains it.

## Pair 01 gate

K2A identity/RLS: **PASSED** on disposable local runtime. K2B access-token expiry, direct data exposure, SSR refresh, and logout scope: **PARTIAL until all probes are actually observed**. This record must not be promoted to complete simply because a synthetic test or application build passes. No hosted Supabase project or actual author data required.

## Actual CI evidence — 2026-10-09

**Tested code:** `f9448df3e619614d9d6956247b985cf15313b187`. [Real local Supabase workflow #37993494329](https://github.com/Ben-001-sys/Vellistry/actions/runs/37993494329) completed **SUCCESS**. The existing K2A **17/17 groups** ran first, followed by **K2B 9/9 test/observation groups**, using two genuine Alice sessions, one Bob session, generated test accounts, actual NestJS, local Auth and real PostgREST/PostgreSQL. The [foundation build regression #37993494393](https://github.com/Ben-001-sys/Vellistry/actions/runs/37993494393) also succeeded.

**Exact critical log observation:**
```text
OBSERVED K2B local signout: old JWT PostgREST rows 1 Nest status 401 old access JWT reads own book true
```

This **proves** that the previously signed access JWT could read Alice's synthetic book after local signout through direct PostgREST, even while Nest `getUser` refused that JWT. This is **not** another-author leakage: Bob was correctly denied Alice's data. It is **same-user revoked-session residual bearer access**, significant for stolen or retained tokens and author expectations about logout. The revoked primary refresh token could not obtain a replacement; the separate Alice session continued working; Bob's valid session was unaffected by Alice signout; global signout revoked the then-current session's refresh token. Verification of actual JWT expiry and the contents returned after global logout beyond the logged local-signout probe remains for a subsequent targeted experiment; the test artifact records additional diagnostic booleans and row counts.

**Risk/decision status:** R15/K2B real session token exposure **CONFIRMED**, not remediated. Do **not** promise immediate manuscript access termination on logout while PostgREST exposes author tables with valid signed JWTs. The three previously documented S1/S2/S3 options require an owner decision, deeper SSR/storage/grant tests and an explicit security acceptance contract. Avoid emergency privilege changes that would break existing Nest author-scoped PostgREST operations without a reviewed substitute.

**Still NOT RUN:** Actual Next.js 16 SSR Proxy cookie refresh in a real browser, cookies/CSRF/response caching, file Storage RLS, full session expiry clock test, account switching on a shared device and local IndexedDB data erasure, account/data deletion and restore. Pair 01 cannot close on this run alone.

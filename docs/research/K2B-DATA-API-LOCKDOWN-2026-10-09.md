---
id: VEL-RES-K2B-DATA-API-LOCKDOWN-20261009-001
type: security-research-report
status: proposed-test-not-yet-executed
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "https://supabase.com/docs/guides/api/securing-your-api"
  - "https://supabase.com/docs/guides/database/postgres/row-level-security"
  - "https://supabase.com/changelog/45329-breaking-change-tables-not-exposed-to-data-and-graphql-api-automatically"
  - "docs/research/K2B-SESSION-AND-MANUSCRIPT-EXPOSURE-2026-10-09.md"
  - "https://github.com/Ben-001-sys/Vellistry/pull/32"
related_research:
  - R15
  - R18
related_adrs:
  - ADR-0006
---

# K2B — Real permission-boundary experiment: direct Data API vs current Nest transport

## Problem

A real K2B test demonstrated that a local-signed-out, previously issued JWT could **still retrieve one private book row directly from PostgREST**, while the existing Nest `getUser(jwt)` guard rejected that token with 401. The distinction is session revocation, not an observed cross-author RLS bypass. User expectations around confidential, unpublished manuscript logout make that gap material.

## Relevant Supabase documentation

- [Securing your Data API](https://supabase.com/docs/guides/api/securing-your-api): SQL `GRANT` determines whether a caller role can reach a table or function; RLS independently determines which rows can be read. A dedicated, non-exposed internal schema and explicitly granted API surface may reduce exposure. The Data API can be disabled for systems that never use it.
- [Changing default exposure rules, April–October 2026](https://supabase.com/changelog/45329-breaking-change-tables-not-exposed-to-data-and-graphql-api-automatically): new projects are moving toward explicit grants, while existing grants on already-exposed tables persist. **Do not assume a new Supabase default fixes existing Vellistry tables.**
- [Auth sessions](https://supabase.com/docs/guides/auth/sessions): signed JWTs have a `session_id` and can outlive revoked refresh tokens; verifying session existence is a separate check from validating a JWT signature.

## Experimental question

Can we remove **direct manuscript table** access for authenticated PostgREST callers while retaining (a) authentication, (b) current book-list operations, and (c) cross-author isolation? What breaks if we also revoke books privileges, given Nest's current author-scoped Supabase Data API queries?

## Disposable two-stage experiment (no production migration)

Test: `apps/api/tests/k2b-data-api-lockdown.integration.mjs`, after the preceding live K2A and K2B checks. The test script itself executes temporary SQL **only through a privileged local PostgreSQL CLI in the GitHub Actions runner**. Its maximum permitted Supabase/Auth and Nest URLs are loopback endpoints. All generated account and manuscript data are synthetic; the fixture admin key is used only in test scaffolding.

1. Before changes: create two real Supabase user sessions and two books; seed one synthetic chapter. Verify the author sees the chapter through direct PostgREST and Nest GET books succeeds.
2. Stage A: `REVOKE SELECT ON public.chapters, public.chapter_revisions FROM authenticated`. Assert direct PostgREST chapter/revision reads fail even with a valid JWT. Assert Nest GET books and user login still succeed. Cross-author books remain isolated.
3. Stage B, **run last**: `REVOKE SELECT,INSERT,UPDATE,DELETE ON public.books FROM authenticated`. Assert direct REST book reads fail, but **also assert that the existing Nest books handler now returns a backend error**, because it uses the same authenticated PostgREST role. Treat this as a **known incompatibility**, not a solution to ship.
4. Delete generated users and discard the entire local Supabase stack. No persistent schema or app code changes.

## Interpretation boundaries

- Stage A could restrict **chapter content** from direct Data API if Nest's eventual authorized manuscript API is redesigned to use a trusted, scoped database route rather than direct author PostgREST. It does not immediately protect the book title metadata nor make signed JWTs unusable at all other Supabase resources.
- Stage B proves that **blind revocation would break legitimate access** in today's foundation; it does not measure a production-quality backend-only SQL role.
- For a true Nest-only architecture, define dedicated server-only DB credentials with no `BYPASSRLS`, trusted user context, transaction-scoped grants/RLS or explicit audited parameterized ownership guards. Test for pool context leakage and JWT revocation. Never publish a service role key to the browser or turn unbounded service-role manuscript handlers into an implementation shortcut.
- A dedicated `api` schema, private data schema, pre-request session liveness and an audited server authorization layer are candidate patterns—not yet owner-selected controls. Worker roles, export and backup rights must also honor authorship.
- Long-lived client-side draft copies and local signout cleanup remain separate research gates.

## Evidence acceptance

- **PASS** if real Auth/PostgREST/Nest tests confirm the expected **denial plus normal working access** in Stage A and the explicitly expected **Nest breakage** in Stage B, with synthetic fixture cleanup and reproducible reports.
- **FAIL** on any unanticipated data leakage, errors before the privilege stages, unexpected mutation, or missing real test execution.
- **NOT TESTED** until CI completes; a workflow definition is not result evidence.

**Pair 01 security gate is still open after this experiment:** Next.js SSR cookie refresh, direct Storage policies, revocation across sensitive API paths, browser logout/account switch, local draft erasure and final session-lifetime choice remain mandatory decisions or tests.

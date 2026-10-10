---
id: VEL-RES-OPTIONB-WAVE03-K2B-20261010-001
type: privacy-session-storage-threat-research
status: bounded-source-audit-model-tests-await-ci
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 1.0.0
sources:
  - docs/research/PAIR-01-ACCELERATED-CLOSEOUT-BRIEF-2026-10-09.md
  - apps/api/src/modules/auth/supabase-auth.service.ts
  - apps/api/src/modules/books/books.service.ts
  - apps/web/src/app/books/page.tsx
  - apps/web/src/lib/supabase/server.ts
  - supabase/migrations/20261009000000_initial_author_books.sql
  - supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql
  - apps/api/tests/k2b-private-nest-gateway.integration.mjs
  - https://supabase.com/docs/guides/auth/signout
  - https://supabase.com/docs/guides/auth/server-side/advanced-guide
  - https://supabase.com/docs/guides/auth/server-side/creating-a-client
  - https://supabase.com/docs/guides/storage/security/access-control
  - https://supabase.com/docs/guides/storage/buckets/fundamentals
  - https://supabase.com/docs/guides/storage/security/ownership
  - https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
related_research: [R15, R18]
---

# Option B Wave 3, Track A — One-pass manuscript privacy, sessions, SSR, local drafts, Storage and deletion

**Evidence classification:** This is a **source-level audit of current application code**, direct reading of official Supabase/OWASP guidance, prior real disposable local-Supabase security experiment results, and NEW SYNTHETIC MODEL TESTS. It is not penetration testing, a production authorization guarantee, a new security gateway, a migration, a complete browser XSS test or a live user's deletion request. The owner requested one bounded research pass and advance to the next wave without repeated rounds.

## Threat boundary and trust-flow summary

1. Sign in -> Supabase browser SSR client -> cookie session; in the current scaffold the Books page is a client component, its GET/POST fetches target the local Next /api/books path; details of forwarding and SSR protection require reviewed route-level enforcement, not merely a valid cookie.
2. Next/Nest API -> bearer JWT -> actual Supabase Auth getUser(token) per protected Books route -> per-user Supabase client -> public.books with auth.uid()-based RLS. This currently protects **book list/create**, not a shipping chapter editor, export, Storage or Story Profile endpoint.
3. Research-only Nest/SQL gateway in PR #36 demonstrated transaction-scoped owner and session liveness against disposable auth.sessions, but has **not** been ported, privilege-audited or integrated into the production app. Prior logout research showed a revoked user's still-unexpired JWT could directly query their own book with PostgREST despite Nest rejecting the token in a local test. Never claim JWT signature validation = session revocation.
4. Private media may later use Supabase private buckets with storage.objects RLS and short-lived signed URLs; private buckets are not configured merely because the provider supports them. Once issued, a signed URL is a bearer link and may remain usable until expiry unless the underlying object or signing arrangement is invalidated; do not promise immediate logout revocation of previously issued links.
5. Browser-origin IndexedDB draft copies are best-effort and same-origin readable by executing scripts; namespace drafts by account/book/chapter/revision and explicitly decide recovery vs wipe after account switching. Never describe client-side owner filtering as a hard security boundary against XSS, shared devices or local physical access.
6. Delete action must distinguish immediate access denial/tombstone from confirmed purge in original database, revision logs, backups, Storage, offline local drafts, exports, caches, and external model-provider logs. A scheduled backup deletion is **not** proof of erasure.

## Current repository audit — fact versus required control

| Exposure / path | Direct source or first-party evidence | What is present today | Needed pre-design requirement / release control | Risk |
|---|---|---|---|---|
| Bearer access and Nest user verification | apps/api/src/modules/auth/supabase-auth.service.ts | getUser(token) before Books operations; publishable key and token-scoped client, not admin | For private manuscripts validate active auth session on EVERY sensitive request; no client-provided actor; short token and per-operation owner authorization | HIGH |
| Old JWT after logout | PR #32 experiment; Supabase signout docs | Refresh revoked; JWT may persist until exp; direct PostgREST book SELECT previously demonstrably accessible | Strict immediate revocation requires gateway session-row liveness and **revocation of direct DB read bypass** for the sensitive data, or explicitly weaker privacy promise | CRITICAL decision |
| Nest session liveness | apps/api/tests/k2b-private-nest-gateway.integration.mjs | Actual disposable Nest+DB transaction test; not current production module | Least-privilege DB role, session lookup, per-request tenant/author transaction scope, fail-closed tests and rollback | HIGH |
| Chapters and revisions | supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql | Direct chapter/revision DML revoked; author SELECT remains | Safe future chapter writes require authenticated CAS/journal with RLS and no service-role bypass | HIGH |
| Books bypass | initial books migration | Books SELECT/INSERT/UPDATE/DELETE grants to authenticated with owner RLS | Decide whether books metadata is private enough to prohibit direct access on revoked live-session JWT, too | HIGH |
| SSR identity and refresh | apps/web/src/lib/supabase/server.ts; official Supabase SSR docs | Server cookie helper exists; no apps/web/src/proxy.ts was found in inspected branch; Books is client component | Define Next16 Proxy and getClaims/getUser role, cookie refresh propagation and revalidate protected SSR responses; no shared cached manuscripts | HIGH |
| UI logout | apps/web/src/app/books/page.tsx | calls auth.signOut() then redirects without checking error; does not explicitly resolve local draft/cache state | Handle signOut error and race with in-flight saves, locally recovered drafts and multiple tabs; no false success indicator | MEDIUM/HIGH |
| Account switching | client Books state and separate R18 Dexie research | App book list state is client state and is not demonstrably scrubbed on token swap; R18 Dexie is separate fixture | Reset all author-scoped memory/query caches, IndexedDB keys, exports, service workers, broadcast logout/account change, test Alice->Bob without refresh | HIGH |
| Storage objects | Supabase Storage RLS docs | No complete live private author bucket policy/export contract verified for shipping code | Private-by-default bucket, operation-scoped storage.objects policies, authenticated proxy download, short signed URL TTL, access denial on cross-book path | HIGH |
| Signed URLs | Supabase private bucket docs | Provider permits signed URLs by design; none proved configured in app | Model URL as bearer secret, reduce TTL, no URL in analytics/referrers, no immediate logout-revocation claim | HIGH |
| Exports and restore | Pair03/06 portable data fixtures | Simulated ZIP and Postgres backup checks, not authenticated integrated route | Owner-scoped export, safe content-disposition and cache controls, no cross-author chapters/canon, migration and import reownership policy | HIGH |
| Draft secrecy | docs/research/spikes/r18-framework-slice/shared/drafts.mjs | Research-only account-keyed local drafts and recovery; not shipping guarantee | Explicit offline storage policy, persistent disk threat, device wipe/retain options, malicious JS limits | HIGH |
| Deletion and retention | Current Books controller has GET and POST only | No complete user-visible deletion/retention workflow checked; DB on-delete cascading only partial | Tombstone, purging DB/Storage, backup retention SLA and reappearance prevention, receipts & failure retry | HIGH |
| SSR/browser caches | OWASP Session Management Cheat Sheet | Existing Books fetch no-store; not a whole privacy proof | No-store all private HTTP and SSR responses; prevent Next prefetch and CDN personalization leak; clear sensitive browser state on logout | HIGH |
| By-design model transfer | Pair04 provider research | Optional AI consent/terms unresolved | Preview exact excerpt, canon, prompt, rules, recipient, training policy and key lifecycle before transfer; AI-off remains complete | HIGH |

## New reproducible fixture and what it cannot prove

[Python research model](experiments/wave03_security_boundary.py) and [18 assertions](experiments/test_wave03_security_boundary.py) check synthetic session revocation despite nominal JWT expiry, unaffected other-device login and other owner, bound draft namespacing, short-lived bearer URLs surviving logout until TTL, tombstone-based deletion before backups, and source-level presence/absence of current Book/Nest/SSR controls. **This is a simulated ideal boundary** and source-characterization regression, **NOT integration of active auth.sessions DB checks or a proof of safe client storage**.

**Important explicit vulnerability distinction:** It is not a demonstrated exploit in production to observe that a user-facing signOut call lacks error handling or a Next proxy is absent. It is a **release-critical gap/risk to test**. Conversely, the earlier actual local Supabase experiment did demonstrate residual direct PostgREST read from a still-valid JWT. The two evidence classes must not be conflated.

## One-pass pre-design security choices and recommended defaults

- **Recommended mandatory for author manuscript content:** Server-enforced owner and live-session gate via constrained Nest/DB transport for chapters, Story Profiles, approved fact/source excerpts, backups, exports and sensitive book metadata if immediate post-logout confidentiality is promised. Never expose service-role keys to clients or treat caller-supplied author strings as authentication.
- **Explicit privacy promise decision:** Either design for immediate session-revocation enforcement including blocking direct API grants, or honestly state that signed JWTs and issued export links can remain valid until expiry. No unqualified immediate logout guarantee.
- **Recommended Storage policy:** Private buckets; path/owner RLS plus server-mediated authenticated access; independent expiry of links; no long-lived public URL, and document link-expiration behavior.
- **Recommended draft policy:** Default to author-scoped unsynced recovery with a visible explicit choice to retain or delete local copies on logout, plus encryption/device/shared-computer disclosure where practicable. Clearing unsynced text without consent may destroy author work; preserving it after sign-out may expose it on shared devices. This is an owner tradeoff, not something the research fixture decides.
- **Recommended export/deletion policy:** Export is an authenticated personal-data operation; surface manifest of manuscript/revisions/approved and pending profiles/rules. Deletion requires per-store revocation/purge workflow and stated backup lag with no false instant-erasure claim.
- **Recommended verification:** Alice/Bob account switch same browser, old JWT after local/global logout direct-PostgREST versus restricted Nest, stale signed URL use, SSR caching and prefetch under Alice/Bob, offline local draft after logout, Storage path traversal/cross-book, per-user export plus malicious ZIP, staged delete/restore and log screening. Do these as production integration/release tests, NOT treated as completed by Wave 3 research.

## Verdict and Wave 4 transition

**Research outcome:** Current foundation protects book operations with a token verified against Supabase Auth and auth.uid() RLS; isolated K2B session-aware gateway passed earlier local tests, but a production-private manuscript path, Storage/export/draft/deletion/SSR integration is NOT RUN. The critical JWT residual-exposure fact remains. New local simulations do NOT close the production attack surface. Before designs, owner should decide immediate logout/session semantics and local draft retention; detailed implementation/security signoff remains a later, required gate.

Owner requested **one pass only**. Advance to **Wave 4 R08/R21 optional provider privacy/cost and R14/R21 license/legal operating analysis** after new research CI checkpoint, preserving unresolved security release tasks without repetitive Wave 3 conversation. No Figma/Lovable prototypes, new app feature code, remote manuscripts, paid resources or deployment authorized under Option B.

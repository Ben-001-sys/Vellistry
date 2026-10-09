---
id: VEL-PLAN-20261009-001
type: implementation-plan
status: owner-directed-in-progress
created_at: 2026-10-09
updated_at: 2026-10-09
owner: project_owner
author: project-research
version: 0.1.0
related_adrs:
  - ADR-0006
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
---

# Vellistry — Planning close and MVP implementation kickoff

## Owner instruction and cutoff

On Friday 2026-10-09 the owner agreed to **Next.js + NestJS + Supabase** and instructed that planning be **finished by 22:30 Africa/Accra**, with implementation beginning immediately thereafter. We do not need to wait until the cutoff if the initial gates are clear. This is a **planning cutoff / engineering start**, not a promise of an MVP or deployment by 22:30.

## Decisions settled for coding

- One existing Git repository, TypeScript and pnpm workspace.
- Web: Next.js 16, React 19, Tiptap 3, later Tailwind/shadcn.
- Protected API: NestJS 11 modules, no framework-level direct manuscript canon mutation outside explicit approved endpoints.
- Identity and database: Supabase Auth + PostgreSQL RLS with local CLI first. Use a single auth authority; do not ship deterministic synthetic session tokens used in R18 spikes.
- Editor chapter JSON and immutable revision history as accepted manuscript authority; best-effort Dexie draft recovery.
- No paid services, secrets, unpublished real manuscripts or hosted AI requirement.
- Memory: temporal, manually/author-approved canon plus current-revision full-text evidence, as proved in bounded R18 research. Not a free-form single-context AI chat log.

## Decisions postponed intentionally (not blockers for local app boot)

- Managed Supabase Free versus self-hosted production setup, deployment domain and resource budget.
- Graphile Worker versus Supabase Queues job runner.
- Actual local AI model/provider and performance gate; AI-off writing must work.
- Encryption/retention model for on-device drafts, production backups and operational runbooks.
- Exact semantic and long-novel AI memory improvements.
- Unresolved R01 authentic frozen rule pack variants.

## Strict kickoff order

| Milestone | Deliverable | Verification | Status |
|---|---|---|---|
| K0 — Plan and approval | ADR-0006, scope boundary, work breakdown, hard stop criteria | Owner agreement recorded and Git validator green | STARTED |
| K1 — Workspace boot | pnpm workspace, Next web, Nest API, env contract, CI | Each app builds; no secret required in CI | STARTED |
| K2 — Auth and isolation | Supabase local project, email/password sign-in, verified user through Nest, RLS books | Alice/Bob negative and positive tests; bearer forgery/expiry denied | NEXT |
| K3 — Core book/chapter workflow | Book create/list, chapter create/list, revision-safe save | Cross-book denied, stale revision 409, revision history intact | NEXT |
| K4 — Tiptap author workspace | Open/edit/save/chapter nav, dirty and conflict UI, Dexie safety copy | Real browser save/reload/recovery and two-tab test | NEXT |
| K5 — Manual Story Profiles | Character/thread cards, manual editing, approved historical state | Story-time and book-scope tests | LATER |
| K6 — AI-off and audit spine | Rule preview/canon proposal separation and selected optional AI adapter | Disabled rules excluded; no automatic author-approved canon change | LATER |
| K7 — Portability and pilot | TXT/DOCX, full project ZIP restore, author trials and operational backups | Roundtrip fidelity, restore and privacy release gates | LATER |

Do **not** start from paid model integration, elaborate UI screens, pgvector, deep graphs or microservices. Complete vertical flows with tests rather than building UI pages alone.

## First engineering vertical slice contract

1. Author signs in via local Supabase Auth.
2. Next.js session-aware proxy passes only that access token to NestJS.
3. Nest verifies token with the Supabase Auth service/JWKS; no trust in headers containing user IDs.
4. Nest uses the authenticated token and publishable/anon key for RLS-scoped Supabase queries. **No service-role key** in routine author requests.
5. Initial API: health (public), GET/POST /v1/books (protected) with author-owned title/ID and server-side input validation.
6. Database migration creates author-owned books, chapters and append-only revision history with explicit RLS policies. Chapters are not writable via unsafe direct mass updates.
7. Negative tests: missing/expired/wrong-audience token, foreign book access, untrusted user-id injection, bad input, no cross-book leakage. Record NOT_RUN until genuine Supabase local tests run.
8. Next milestone adds transactional revision-safe chapter mutations before permitting editor save.

## Operational safeguards

- Do not put any API/service-role secret, test manuscript, token, auth cookie or personal data in Git or CI logs.
- Local Supabase requires Docker; do not run a local stack on a public interface. No remote Supabase organization/project creation without user authorization and details.
- No production deployment or purchasing action in this kickoff.
- CI builds and schema syntax checks are **not** evidence of full auth/RLS behavior.
- Keep draft PRs open for owner merge decision. Prior PR #17 Next-only proposal is historical and should not be mistaken for this owner-selected architecture.
- Every substantive decision has provenance and a reversible change proposal; report file names and exact passing checks.

## Planning cut-off

By **22:30 Ghana time on 2026-10-09**, planning for the initial implementation is considered sufficiently scoped to code against this contract. Remaining uncertainties are explicit backlog/release gates, not reasons to restart a broad research round. Implementation may and should begin as soon as K0 and K1 are written and verified.

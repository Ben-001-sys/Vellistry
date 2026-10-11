---
id: VEL-PLAN-01-SCOPE-INVENTORY-20261011-001
title: PLAN-01 — accepted scope, feature horizon, actual baseline and reuse/build inventory
type: implementation-planning-evidence
status: working-draft-awaiting-owner-review
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.2.0
sources:
  - docs/plans/VEL-IMPLEMENTATION-MASTER-PLAN-2026-10-11.md
  - docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md
  - docs/requirements/MVP-FEATURE-HORIZON-MAP-2026-10-09.md
  - docs/features/FEATURE-INVENTORY.md
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
  - docs/plans/OPTION-B-WAVE05-MVP-FINAL-DECISION-2026-10-10.md
  - docs/decisions/ADR-0003-use-tiptap-3-prosemirror-for-manuscript-editor.md
  - docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md
  - docs/design/VEL-DES-001-002-UX-HANDOFF-2026-10-10.md
  - docs/design/VEL-DES-004-MAKE-LIVE-WALKTHROUGH-2026-10-11.md
  - docs/design/VEL-DES-LOVABLE-INITIAL-CODE-REVIEW-2026-10-11.md
---

# PLAN-01 — Requirements and feature inventory, first evidence pass

## 1. Scope of this audit

**Status: PLANNING ONLY.** The owner asked to review/merge PR #60 and **begin**; on 2026-10-11 PR #60 was merged (squash commit `7e5627b577f90bf2771d6cb2fe99235b84885c44`). We begin PLAN-01, not Cursor Desktop setup, application coding, feature migrations or author pilot. This document reconciles accepted product direction with GitHub code **statically inspected** on merged `main`; it is not a runnable integration report or an independent execution of tests.

**Source authority order:** accepted MVP scope and ADRs > dated owner decisions > approved constrained horizon map > proposed journey/engineering specs > Figma/Make/Lovable synthetic evidence. The recovered 396-feature catalog is an index of discussed features, not 396 separate feature tickets or new product authority.

**Inventory limitation:** GitHub API directory contents, selected exact source files and accepted feature-horizon mapping were checked. A **separate [149-ID per-row crosswalk](VEL-PLAN-01-149-FEATURE-TO-TEST-CROSSWALK-2026-10-11.md)** now individually maps every included/limited record, preserving ID/name/source-status. This is not a full file-by-file audit of the historical ~100KB descriptions, runnable per-feature test suite or real dependency execution; the crosswalk's new task and test mappings remain explicitly proposed.

## 2. Decisions that are already accepted

| Decision | Source status | PLAN-01 treatment |
|---|---|---|
| One author-first eight-area MVP, M1–M8 | Accepted 2026-10-09 product scope | Implement all eight narrow outcomes; do not silently reduce areas or add postponed products |
| Tiptap 3/ProseMirror for manual manuscript editing | Accepted ADR-0003 | Plan editor; Tiptap is not yet a dependency in actual web package |
| Next.js 16 + React 19 frontend; NestJS 11 API; Supabase Auth/PostgreSQL/RLS | Accepted ADR-0006 | Preserve existing repo and architecture; do not restart an empty app |
| Exactly two optional text actions, Continue at caret + Rewrite one contiguous within-paragraph selection | Owner Wave 5 selected MVP behavior | AI OFF; require consent, pending proposal, safe acceptance/Undo; no broad freeform automation |
| Initial pinned OpenRouter BYOK approach, **free OR paid author-owned key** | Wave 5 selected behavior; external route vetting outstanding | Planned future adapter, not a live connected, privacy-verified provider |
| Frozen Rules Studio mapping | 260 source records / intended 134 controls with 130 expanded primary defaults ON and four compact extras OFF; activation subject to source certification | Do **not** fabricate authentic rule bodies or declare activation completed |
| Original editable 16-frame Figma Design is master; Make/Lovable reference only | Owner design direction / merged design docs | Design is an implementation aid; unpolished UI not blocker to local feature progress |
| Begin with planning, then Cursor Desktop setup, then coding | Latest explicit owner direction, merged PR #60 | Earlier PR #59/Issue #58 kickoff is PAUSED; no Cursor dispatch now |

## 3. Feature-horizon reconciliation

The accepted `MVP-FEATURE-HORIZON-MAP` classifies **396 stable discussion IDs** (381 feature rows and 15 cross-cutting differentiators): **78 MVP**, **71 MVP-LIMITED** and **247 POST-MVP-UNSCHEDULED**. These counts were read from the approved index, **not independently re-counted in this audit**. `MVP-LIMITED` means a bounded subset of a named idea, not license to implement its entire description; `POST-MVP-UNSCHEDULED` means postponed, not cancelled. Source-status categories in original inventory (DIRECTED/OWNER-INTENT/CANDIDATE/TECH-SELECTED) are independent of release classification.

| Accepted area | Included minimum feature groups | Author journey(s) | Implementation family |
|---|---|---|---|
| M1 | Solo books/library, chapter create/reopen/rename/reorder, separate planning notes, word count | JRN-001 | IMP-001 and IMP-002 |
| M2 | Tiptap 3 manual paragraphs/headings/emphasis/lists/search/clipboard/shortcuts/undo/redo, focus mode, no AI key | JRN-001,002 | IMP-003a |
| M3 | Durable versioned save, true ACK, local draft/recovery, TXT/DOCX with loss disclosure, full project backup/restore and deletion | JRN-001,003,011 | IMP-003b, IMP-004 |
| M4 | Manual character/thread profiles, source-linked candidates, independent approve/edit/dismiss, story-time/retraction checks | JRN-004,005,009 | IMP-005 |
| M5 | Certified frozen guidance, browse/toggle/reset/personal book-scoped rules, effective prompt exclusion | JRN-006,007 | IMP-006 |
| M6 | Optional BYOK Continue / Rewrite only, consent/recipient/cost preview | JRN-007,008 | IMP-007 |
| M7 | Plain-text suggestion compare/Reject/Accept, stale guard, transactional CAS, Undo, separated author-approved canon | JRN-005,008,009,010 | IMP-008 |
| M8 | Account/book boundaries, data lifecycle/privacy, accessible keyboard/error states and reliable manuscript protection | JRN-001..011 (especially 011) | Cross-cutting all increments and VAL-001 |

**Not in first MVP:** full Cover Studio/AI cover generation, professional EPUB/print/PDF layout engine, team co-authoring, advanced cross-book graph/automatic POV firewall, large provider marketplace, platform-issued credits/subscriptions. The owner postponed these features; they have not been “removed” from broader future vision.

**Source gap:** the feature inventory reports a historical 20-section/42-requirement artifact is not fully independently archived. Do not treat inferred wording from that artifact as newly certified requirements.

## 4. Actual implementation baseline discovered on GitHub `main`

Paths listed below were directly checked via GitHub API file contents or directory listing, not asserted from stale planning docs.

| Area | Inspected source/asset | Verified existing baseline | Implementation status / gap |
|---|---|---|---|
| Workspace | `package.json`, `pnpm-workspace.yaml` | pnpm 10.18.0 root scripts `build`, `check`, web/API dev, local Supabase CLI; monorepo `apps/*` | Present. Runtime install/build on user's Windows machine NOT RUN |
| Frontend | `apps/web/package.json`, `src/app/` directory | Next 16, React 19, Tailwind 4, SSR Supabase; pages `/`, `/login`, `/books` | Scaffold present. **Tiptap not listed in web package**; no functional editor route discovered |
| Book UI | `apps/web/src/app/books/page.tsx` | Fetch book list/create, status string, sign-out button, rendered book cards | Present basic implementation. On 401/error, old `books` state is not explicitly cleared; no account-switch request cancellation—**source-level risk**, not independently exploited |
| Next auth/BFF | `apps/web/src/app/api/books/route.ts`, `/lib/supabase` | Server-side `getUser`, session token forward to Nest, no-store response; client/server Supabase clients | Existing auth transport; nested resources, session transitions and CSRF boundaries need separate review |
| Nest API | `apps/api/src/modules/`, `books.controller.ts`, `books.service.ts` | Auth guard and GET/POST /v1/books, 1–120-character title validation, author bearer for PostgREST | Basic book API present. No chapter-create, chapter-save, profile, rules, AI or export modules in inspected `src/modules` inventory |
| Nest Auth | `apps/api/src/modules/auth/supabase-auth.guard.ts`, `supabase-auth.service.ts` | Bearer extractor, `auth.getUser(token)`, token-forwarded non-service PostgREST client | Implemented path exists. This alone cannot prove post-logout JWT revocation/direct API restriction |
| Database | `supabase/migrations/20261009000000_initial_author_books.sql` | `books`, `chapters`, `chapter_revisions`, ownership via `auth.uid()`, select RLS/force RLS, owner-scoped book DML | Schema foundation present. Not a complete accepted revision-save or chapter-create implementation |
| DB hardening | `supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql` | `chapters` and `chapter_revisions` DML revoked from authenticated; SELECT remains | **Intentional read-only foundation:** chapter mutations and CAS require reviewed transactional RPC/migration later |
| Local configuration | `supabase/config.toml` | Dev-only Supabase local ports API 54321, DB 54322, Studio 54323; auth email confirmations false | Config committed; actual local Docker/runtime not started here |
| Tests | `tests/`, `apps/api/tests/`, `.github/workflows/` directory | Governance/agent/research tests, local Supabase security-integration scripts, K2 CI workflow including authenticated RLS/session diagnostics | Evidence assets exist. No general `apps/web/tests` directory observed. No local run of them in this audit |
| Workflow | `AGENTS.md`, `scripts/agent_workflow.py`, `docs/agent-workflow/` | Repo-owned task/ContextPack/ExecutionBundle process and Python tests | Reuse; no need for an external context database/orchestrator to begin |

**Critical separation:** GitHub CI and historical K2 integration reports may provide bounded past results. This inventory did **not** rerun the tests or validate production session behavior. The known direct-PostgREST access of a signed-out but still-unexpired JWT is an unresolved real-author/private-pilot risk; it must not be minimized by a client-side sign-out indicator.

## 5. Reuse versus new build versus investigate

### REUSE the committed foundations
- Workspace, Next/Nest basic apps and routing, browser/server Supabase client helpers, guarded book list/create API and initial RLS schema.
- Accepted ADR/requirements and source preserving documentation; existing ContextPack/ExecutionBundle scripts, research proofs and CI configuration.
- Original editable Figma as the living UI basis; no pixel-perfect redraw requirement.

### BUILD after separate coding authorization
- Stable book/chapter navigational workspace with nested authorization, chapter CRUD/reorder and notes.
- Real Tiptap 3 editor and transaction-safe revisions; cross-tab/local draft recovery and truthful save states.
- Source-linked manual Story Profiles and fact approval, Rules Studio effective context, TXT/DOCX and full project backup.
- Optional consented BYOK Continue/Rewrite and version-safe acceptance/rejection/compensating Undo.
- Accessibility/regression/security hardening, real-author and release procedures.

### INVESTIGATE / decide before high-risk slice
- Direct PostgREST session invalidation design and production access boundary (whether to restrict private data to validated server gateway); test against signed-out valid JWT.
- Transactional revision RPC shape, atomic idempotency, chapter create/order concurrency and schema upgrade/rollback strategy.
- Certified 260-source record / 134-control rules version mapping; source permissions/authenticity; precise per-request effective rule subset.
- Actual OpenRouter downstream models, policy, pricing, geographic/privacy conditions and consent; no real key now.
- DOCX supported features and loss classification; backup archive format, all required data classes, storage/restore/deletion retention.
- Accessibility/browser/IME/RTL test environments and actual author recruitment/consent criteria.
- Production location, hosting/proxy/backup/logging/legal decisions remain future-gated; not prerequisites to local no-private-data code.

## 6. Discrepancies and implementation blockers

| ID | Evidence | Impact | Next planning destination |
|---|---|---|---|
| P1-01 | Figma Library composited both empty/populated; actual `/books` uses conditional message only after successful fetch but error/401 leaves potentially stale state | Static concept must not dictate simultaneous states; account-switch UI risk | PLAN-03 UI state contract and IMP-001 negative test |
| P1-02 | SQL schema has chapter/current_revision/history **but no authenticated direct chapter writes by design** | Writing data model is not an implemented save service; new RPC needs review | PLAN-02 atomic save/API contract |
| P1-03 | No Tiptap dependency in actual `apps/web/package.json`, no editor page under present `app` inventory | Past isolated Tiptap experiments are not the integrated editor | PLAN-02/03 editor integration sequence |
| P1-04 | RLS authenticated book policies; signed-out unexpired token can reportedly still call direct PostgREST | Security threat for real manuscripts | PLAN-04 auth/session architecture and pilot blocker |
| P1-05 | 134 rule controls rely on original 260 source certification before full default activation | Cannot call 3-rule mock a certified catalog | PLAN-02 domain/source integrity + IMP-006 |
| P1-06 | Previous Cursor dispatch PR #59 still open but PAUSED after explicit planning reset | Risk of accidental unauthorized coding based on old instructions | PLAN-05 task governance and branch control |
| P1-07 | 396 inventoried concepts but only narrowly classified 149 MVP/MVP-LIMITED | Scope creep if catalog rows translated directly into engineering work | PLAN-01 scope matrix; PLAN-06 scope freeze |
| P1-08 | Historical real CI tests are not the same as current Windows local verified baseline or product acceptance | Need true evidence before planning completion/implementation claims | Future Cursor Desktop SETUP-04 baseline |

**No feature code or migrations were changed by PLAN-01.**

## 7. Completion checklist

- [x] Read accepted M1–M8 scope, constrained horizon map and two-action BYOK decision.
- [x] Preserve 78/71/247 classification and flag MVP-LIMITED boundary.
- [x] Map eight areas to eleven journeys and future `VEL-IMP` families at feature-group level.
- [x] Identify existing Next/Nest/Supabase scaffold and intended read-only accepted chapter schema.
- [x] Inspect actual GitHub top-level app directories, two migrations, auth/books paths, current tests and workflows.
- [x] Record primary discrepancies and reuse/build/investigate classifications.
- [x] **ID-level planning crosswalk created:** [all 149 included/limited original rows mapped once](VEL-PLAN-01-149-FEATURE-TO-TEST-CROSSWALK-2026-10-11.md) to proposed task ownership and unique test identities; no actual executable per-ID tests or new owner authority claimed.
- [ ] Owner review/acceptance of all six planning packages; source-to-task test mappings are proposals, not accepted executable cases.
- [x] Planning-level architecture/security/rules/portability/provider decisions are assigned to [PLAN-02](VEL-PLAN-02-ARCHITECTURE-DATA-CONTRACTS-2026-10-11.md), [PLAN-04](VEL-PLAN-04-TEST-SECURITY-RECOVERY-2026-10-11.md), and [PLAN-06](VEL-PLAN-06-MVP-PLANNING-REVIEW-CLOSEOUT-2026-10-11.md); risk decisions still require subsequent approvals before affected implementations/pilot.

**PLAN-01 closeout (planning only):** baseline and exact 149-ID crosswalk are prepared and source-reconciled. All implementation tasks/tests are still proposed and NOT_RUN. PLAN-02..06 plans were also prepared in the same documentation pass; owner PR review remains required before Cursor Desktop setup. No app code changes.

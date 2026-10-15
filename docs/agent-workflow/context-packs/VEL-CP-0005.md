---
id: VEL-CP-0005
title: 'Context for VEL-TASK-0005: Codex repository-only IMP-001B preflight verification'
type: context-pack
status: prepared
created_at: '2026-10-14'
version: 0.1.0
task_id: VEL-TASK-0005
base_commit: 237e41824012c1c1136eefcee6a5d11f5f974c77
task_blob_sha: c308e6ee6503a5e1be53ce5ba9ae6930b129939d
inputs:
- path: PROJECT-CONSTITUTION.md
  role: accepted-governance
  git_blob_sha: 61f79c4dcb47bd99291c16490e8c00692e2ab23b
  source_status: accepted
- path: SOURCE-OF-TRUTH.md
  role: accepted-source-authority
  git_blob_sha: b5ba9bc2ddcd198054d4cf5fb3b24f6c1b0056c4
  source_status: accepted
- path: docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md
  role: accepted-architecture
  git_blob_sha: d53724d08d065a9e354a95d5953068fd497b5cfb
  source_status: accepted
- path: docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md
  role: accepted-scope
  git_blob_sha: 7a25cf8ce88b3ddb221276c38203fc976cbeb3a9
  source_status: accepted
- path: docs/agent-workflow/inputs/VEL-TASK-0005-ISSUE-67.md
  role: owner-authorized-repository-only-task-snapshot
  git_blob_sha: 5fb47cde0be13647656a624e5c73acef25bed370
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0005-ADR-0008.md
  role: owner-selected-role-record-in-unmerged-PR-66
  git_blob_sha: 5221779bb12a2aae24c73653b9f1cf4126331474
  source_status: unrecorded
- path: scripts/hosted_supabase_preflight.mjs
  role: ChatGPT-authored-preflight-input
  git_blob_sha: b7f4d5a7a1529b4bb67fd84ac9512d9eb0c0caea
  source_status: unrecorded
- path: tests/hosted_supabase_preflight.test.mjs
  role: ChatGPT-authored-synthetic-tests-input
  git_blob_sha: 9be2a35b0ab7bac972b67ffffe39c80770fdc42d
  source_status: unrecorded
- path: docs/plans/VEL-IMP-001B-HOSTED-CLOUD-ACCEPTANCE-2026-10-14.md
  role: ChatGPT-authored-plan-input
  git_blob_sha: 3d17977aca69e5f16f7634ee08326e2a6fa93438
  source_status: partial-implementation-cloud-migration-blocked
- path: supabase/migrations/20261009000000_initial_author_books.sql
  role: read-only-migration-review-input
  git_blob_sha: 192a736d1a5d6ffc6f239c74ed61e7b8d2528b3b
  source_status: unrecorded
- path: supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql
  role: read-only-migration-review-input
  git_blob_sha: 0670a60f1c2e299e9771b9af1c677d97712174d9
  source_status: unrecorded
source_gaps:
- id: HOSTED
  limitation: No cloud state is independently queried in Phase A; prior healthy/empty
    observations are historical inputs only.
- id: ADR0008
  limitation: Owner-selected role is authorized by this task, but PR 66 remains unmerged
    and is not silently imported.
- id: CONTEXT
  limitation: CURRENT-STATE, IMP-001 report and PLAN-02/04 were read separately; the
    compact pack is not a cold-start or independent-agent test.
prepared_by: agent_workflow.py
---

# VEL-CP-0005 — Codex repository-only IMP-001B preflight verification

## Objective
Execute Issue 67 Phase A only: independently review the ChatGPT-authored PR 65, correct demonstrated preflight defects, run no-credential checks, and prepare a factual ExecutionBundle plus read-only migration/hosted acceptance review.

## Scope
**In:** scripts/hosted_supabase_preflight.mjs and targeted synthetic regressions; CI path triggers and repository-only test/build verification; Task, immutable ContextPack, ExecutionBundle, provenance and review evidence; Read-only review of exactly the two existing SQL migrations and future acceptance plan
**Out:** Cloud queries, migrations, Auth fixtures, data writes, secrets and deployment; Changing SQL schemas, dependencies, architecture or accepted owner decisions; Taking over PR 65 or modifying PR 66; merging any PR or starting IMP-002

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- HOSTED: No cloud state is independently queried in Phase A; prior healthy/empty observations are historical inputs only.
- ADR0008: Owner-selected role is authorized by this task, but PR 66 remains unmerged and is not silently imported.
- CONTEXT: CURRENT-STATE, IMP-001 report and PLAN-02/04 were read separately; the compact pack is not a cold-start or independent-agent test.

## Permissions and acceptance
**Allowed:** read, analyze, scoped-repository-code-and-test-corrections, no-secret-local-install-tests-builds, create-isolated-branch-and-draft-PR, prepare-read-only-migration-review
**Owner approval required:** Owner acceptance and merge of this PR, PR 65 or PR 66; Exact-project Phase B migrations and auditable history application; Disposable cloud Auth users and fixture creation/cleanup; Any secret use, cloud query/write, deployment, paid provider or private manuscript
**Acceptance criteria:**
- Original PR 65 commits/tests remain attributed to ChatGPT and originals remain untouched
- Absent env, project/key mismatch, local URL and secret diagnostics fail safely
- Effective runtime overrides cannot silently invalidate a passing file-only preflight
- Node 24 and PowerShell invocations are actually tested using synthetic temporary files
- Required locked install, preflight/library tests, check/build and workflow validation have real recorded exits
- No cloud operation, real credential, migration change, fixture, merge or deployment occurs

## Deliverables
- Provenance-preserving isolated Codex branch and draft PR
- Targeted regressions and bounded preflight fixes only where defects are reproduced
- Actual test/build outputs, exits, source SHA and exact-head CI evidence
- VEL-EB-0005 with FACT INTERPRETATION PROPOSAL and pending owner review
- Read-only migration security review and future hosted acceptance approval hold

## Pinned source snapshots
Git commit: `237e41824012c1c1136eefcee6a5d11f5f974c77`. Read source statuses independently from task intent.

### `PROJECT-CONSTITUTION.md` @ `61f79c4dcb47bd99291c16490e8c00692e2ab23b`

~~~~~~markdown
---
id: VEL-GOV-001
type: governance
status: accepted
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.1
evidence:
  - "User approval of the Git-plus-app knowledge approach, 2026-10-08; conversation reference pending archival."
related_adrs:
  - ADR-0001
  - ADR-0002
---

# Vellistry Project Constitution

1. **Preserve authorship and intent.** Support writers' decisions, distinctive voices, stylistic irregularities, and deliberate exceptions; avoid indiscriminate generic polishing.
2. **Preserve original sources.** Research summaries do not replace underlying documents; record provenance and distinguish direct quotations, supported findings, inference, and proposals.
3. **Separate evidence from decisions.** AI recommendations and research candidates never become authoritative simply by being recorded.
4. **Require traceability.** Requirements, ADRs, historical events, research records, and experiments receive stable IDs and linked sources or explicit evidence gaps.
5. **Require metadata for decisions and history.** Use YAML front matter, timestamps/date precision, lifecycle states, author/approval attribution, relationships, and supersession links.
6. **Maintain current state.** Update CURRENT-STATE.md whenever a task materially changes agreed progress, decisions, blockers, or next steps.
7. **Use controlled knowledge promotion.** Read authoritative context; submit proposed changes with evidence; verify and approve before marking accepted.
8. **Retain history.** Correct errors through traceable revisions or new corrective events; do not erase prior decisions or rewrite an event as though it never happened.
9. **Remain vendor-neutral.** Models, tools, and orchestrators should be replaceable where practical; document genuine constraints and trade-offs.
10. **Use least-privilege agent access.** Keep secrets out of Git, isolate sensitive/runtime author data, review consequential actions, and require human approval for high-impact changes.
11. **Keep systems proportionate.** Begin with Git/Markdown, lightweight templates, and repeatable manual research; add automated context assembly, durable workflows, and additional stores only if tests justify them.
12. **Version code and knowledge together where appropriate.** Application and its engineering knowledge belong in one repository, while user manuscripts and runtime personal information require separate application storage.

## Status hierarchy
Accepted and effective decisions take precedence over proposals. Superseding decisions must explicitly reference what they replace. Research notes are evidence, not approval.

## Solo-maintainer review policy
Vellistry currently has one human contributor: the project owner. The owner may review and merge their own pull requests after appropriate inspection and required automated checks. A separate human reviewer is **not** a standing requirement during this phase. AI-agent review may provide independent analysis but is advisory, not another human approval. For consequential architecture, security, or production changes, the owner's explicit approval remains required. Revisit the policy when collaborators join. See HIS-20261008-002.

## Change control
Propose amendments in version control with rationale and evidence. Material changes require owner approval, an updated changelog/history event, and a corresponding CURRENT-STATE update.
~~~~~~

### `SOURCE-OF-TRUTH.md` @ `b5ba9bc2ddcd198054d4cf5fb3b24f6c1b0056c4`

~~~~~~markdown
---
id: VEL-GOV-002
type: governance
status: accepted
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.2
related_adrs:
  - ADR-0001
  - ADR-0002
---

# Source of Truth and Knowledge Ownership

## Engineering authority
- **Git repository:** canonical engineering documents, code, accepted project decisions, research evidence references, specifications, and change history.
- **CURRENT-STATE.md:** compact, current working status; not a substitute for full evidence.
- **ADRs:** accepted or proposed technical and knowledge-governance decisions, with rationale, alternatives, approval and supersession lineage.
- **Source register:** where original research came from and where an immutable/retrievable copy can be found.
- **Feature inventory:** [docs/features/FEATURE-INVENTORY.md](docs/features/FEATURE-INVENTORY.md) is the reviewable index of discussed feature candidates and source/status links. **It is not an accepted product backlog, release plan, substitute for original source evidence, or approval of proposed features.**
- **Git history and pull requests:** revision provenance; do not substitute automatically for semantic record metadata.
- **ChatGPT and other agents:** analysis and proposal tools, not an independent source of architectural authority.

## Separate runtime authority
Future authors' manuscripts, story canon, application settings, credentials, and stored assets belong in purpose-selected runtime storage, not automatically in the Git engineering knowledge base. No runtime architecture has been selected.

## Five knowledge layers
1. Authoritative accepted project and implementation knowledge.
2. Current verified implementation/research state.
3. Historical rationale, experiments, rejected/superseded alternatives.
4. Temporary task-local agent context and unapproved hypotheses.
5. Evidence, provenance, authorship, validity, confidence, and traceability.

## Read → Propose → Review → Commit
1. Read the relevant accepted records and source citations.
2. Clearly label new assumptions, findings, recommendations, and uncertainties.
3. Review source fidelity and factual verification independently.
4. Promote material changes only after owner approval; update linked records and current state.
5. When superseding an ADR, preserve the older file and connect both sides of the lineage.

## PR review and sole owner authority
At present the project has a single human contributor. The owner performs self-review and makes the final merge/acceptance decision. A distinct human PR approval is not required. Automated CI and optional AI-agent reviews provide evidence and feedback; agents do not have approval authority. For significant changes, document the owner's review and decision in the PR or associated provenance record. GitHub does not count self-review as a separate approving reviewer; this workflow must not assume otherwise. If branch-protection settings require other human approvals, review the protection policy rather than fabricate reviewers. See HIS-20261008-002.

## Metadata and history
See [docs/governance/RECORD-SCHEMAS.md](docs/governance/RECORD-SCHEMAS.md). All ADR and historical-event records require YAML front matter and meaningful content.

## No silent conflation
The terms *verified evidence*, *accepted requirement*, *approved decision*, *implemented*, and *tested* are different. Never mark one as another without supporting evidence.
~~~~~~

### `docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md` @ `d53724d08d065a9e354a95d5953068fd497b5cfb`

~~~~~~markdown
---
id: ADR-0006
title: Implement Vellistry using Next.js web, NestJS API and Supabase foundation
type: architecture-decision
status: accepted
created_at: 2026-10-09
updated_at: 2026-10-09
decided_at: 2026-10-09
author: project-research
approved_by: project_owner
version: 1.0.0
sources:
  - "2026-10-09 Fiction Writing Project conversation: assistant proposed Next.js + NestJS + Supabase as preferred candidate; owner replied 'agreed', then directed completing planning by 10:30 and beginning implementation. Original conversation permalink pending."
  - "https://github.com/Ben-001-sys/Vellistry/pull/23 — shared Next/Nest manuscript contract, 30 passing API assertions and both frontend builds."
  - "https://github.com/Ben-001-sys/Vellistry/pull/25 — draft, eight passing Chromium editor and draft-recovery checks."
  - "https://github.com/Ben-001-sys/Vellistry/pull/22 — merged, PostgreSQL FTS vs vector benchmark."
  - "https://supabase.com/docs/guides/local-development"
  - "https://supabase.com/docs/guides/auth/jwts"
evidence:
  - "Owner's 'agreed' unambiguously answered the proposal to proceed with the Next.js + NestJS + Supabase preferred architecture, with validation still required."
  - "Owner then directed a 10:30 implementation-planning cutoff and beginning implementation."
  - "Evidence from the framework and story-memory experiments supports feasibility, not production security, reliability or superiority."
  - "Approval does not decide managed versus self-hosted Supabase production deployment, complete account security, job engine, AI model, or a paid service."
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
  - VEL-PRODUCT-CONSTRAINT-20261009-001
related_features: []
related_contracts: []
related_adrs:
  - ADR-0001
  - ADR-0003
  - ADR-0004
  - ADR-0005
supersedes: []
superseded_by: []
implementation_refs:
  - apps/web/
  - apps/api/
  - supabase/
  - docs/plans/MVP-ENGINEERING-IMPLEMENTATION-KICKOFF-2026-10-09.md
---

# ADR-0006 — Next.js + NestJS + Supabase implementation baseline

## Context and problem statement

Vellistry's eight MVP feature areas were approved before choosing the full application stack. R18's 23 synthetic JS memory checks, 12 PostgreSQL checks, 140k-word retrieval comparison, 30 Next/Nest HTTP checks and eight Chromium authoring/recovery tests established bounded feasibility. Those tests did **not** prove production readiness or a decisive framework performance advantage. The author now authorizes beginning development, with planning completed by 22:30 Ghana time on 2026-10-09.

## Decision

**Accept the following as the implementation baseline, not an irrevocable forever stack:** a TypeScript/pnpm workspace holding **Next.js 16 / React 19** for author-facing UI and **NestJS 11** for protected application API and domain modules. Keep the author writing experience on **Tiptap 3** with PostgreSQL-acknowledged chapter revisions and best-effort local Dexie recovery.

Use **Supabase Auth** as the only user sign-in authority; **Supabase PostgreSQL** as the durable relational store with per-author/book Row Level Security; and optional private Supabase Storage for authorized import/export files when that surface is implemented. **No Better Auth alongside Supabase Auth**.

Start with **Supabase CLI local development**, no production credentials and no paid service. Managed Supabase Free versus properly self-hosted production Supabase/PostgreSQL is still open. Do not make cloud deployment a condition for offline/no-paid development. The Nest API must validate Supabase access credentials before serving author data, use RLS-scoped non-service database calls, never accept client-supplied owner IDs as authority and never expose privileged keys to browsers. Next.js is frontend/BFF, not an unguarded duplicate backend.

For Story Memory, retain author-approved temporal canon events and PostgreSQL full-text retrieval as the initial memory system. pgvector/embeddings are **optional** after realistic fiction-quality evidence. Background execution is a separate worker boundary, with specific provider (Graphile Worker versus Supabase Queues) **undecided**. Generative AI remains optional, consented and provider-neutral; no paid model required or secretly selected.

## Alternatives considered

1. **Next.js alone + Supabase**: fewer deployables and valid tested authoring contracts; less explicit backend isolation as the Story Memory, review, and conversion engine expands.
2. **React/Vite + NestJS + Supabase**: valid and tested; a separate frontend/router pattern rather than the owner's chosen Next.js.
3. **Next.js + NestJS + independently managed PostgreSQL/Auth**: potentially leaner runtime; requires more authentication and infrastructure work than requested now.
4. **Microservices with Redis/vector SaaS**: adds overhead and unnecessary paid-service exposure for MVP.

## Rationale

NestJS module boundaries suit protected book/chapter operations, canon review and future AI orchestration, while Next.js supports an integrated author-facing web UI. Supabase provides local Auth and PostgreSQL development, private storage and RLS. Earlier tests proved basic manuscript semantics on both transports. No measured speed superiority is claimed.

## Consequences and trade-offs

- Two runtime applications (+ eventual worker) require separate builds, API contracts, origin/cookie trust design, and operational monitoring.
- Supabase Free hosted quotas/inactivity and manuscript backup risk mean production hosting must be explicitly reviewed before public use.
- Local Supabase development requires a Docker-compatible runtime and must never be exposed as a production service.
- RLS and verified JWT/user sessions must be tested across two actual users. Server secret/service keys must not bypass author isolation.
- Maintain one writing source of truth: accepted revisioned Tiptap JSON in PostgreSQL. IndexedDB is temporary recovery, not an authority on accepted content.
- User's no-paid-service mandate remains binding. Compute/storage and maintenance may still incur real costs.

## Evidence and verification limits

Approval is documented by the two owner messages in the source conversation, not an invented URL. The architecture approval is specific to **beginning MVP implementation**. It does not authorize production deployment, published auth/security claims, a paid service, real-manuscript test data, or merging unrelated draft PRs. PR #17 contains an **earlier proposed Next-only modular-monolith ADR-0005**; that unmerged proposal is not an accepted architecture. This ADR is a distinct owner-directed selection, not an undocumented rewrite of ADR-0005.

Official references: [Supabase local development](https://supabase.com/docs/guides/local-development), [Supabase JWT verification](https://supabase.com/docs/guides/auth/jwts) and [NestJS guards](https://docs.nestjs.com/guards).

## Implementation status

**Implementation authorized and initial scaffolding in progress, not production ready.** First testable slice: local auth token -> NestJS guard -> RLS-scoped book list/create -> Next.js user interface. Later: chapters, revisioned Tiptap editing, draft recovery, profiles, author approval and retrieval. See implementation kickoff plan. All integration test outcomes must be separately recorded and observed before being called complete.
~~~~~~

### `docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md` @ `7a25cf8ce88b3ddb221276c38203fc976cbeb3a9`

~~~~~~markdown
---
id: VEL-PRODUCT-SCOPE-20261009-001
title: Initial Vellistry MVP product-scope decision
type: product-scope-decision
status: accepted
created_at: 2026-10-09
updated_at: 2026-10-09
decided_at: 2026-10-09
owner: project_owner
approved_by: project_owner
author: project-research
version: 1.0.0
sources:
  - "Owner message on 2026-10-09 in Fiction Writing Project: 'I agree', immediately replying to the R04 Vellistry MVP recommendation, its eight feature areas, and the explicit request to defer full Cover Studio and professional publishing. Original conversation permalink not archived."
  - "docs/research/R04-SPECIFIC-MVP-RECOMMENDATION-2026-10-09.md"
  - "docs/features/FEATURE-INVENTORY.md on PR #9 (396 discussed entries)"
  - "docs/requirements/PRODUCT-DIRECTION-FROZEN-DEFAULT-GUIDANCE-2026-10-08.md"
  - "docs/requirements/PRODUCT-DIRECTION-LIVE-STORY-PROFILES-2026-10-08.md on PR #9"
evidence:
  - "The preceding assistant offered one recommended eight-area MVP and asked for explicit owner agreement with delaying full cover design and professional EPUB/print. The project owner replied: 'I agree'."
  - "Approval covers product scope and approved deferral, but does not assert implementation, technology selection beyond ADR-0003, resolved research gates, or product readiness."
related_research:
  - R01
  - R02
  - R04
  - R05
  - R06
  - R07
  - R08
  - R10
  - R11
  - R13
  - R15
  - R16
  - R19
  - R21
related_adrs:
  - ADR-0003
related_features:
  - VEL-FEAT-02-001
  - VEL-FEAT-04-001
  - VEL-FEAT-08-021
  - VEL-FEAT-08-022
  - VEL-FEAT-09-027
supersedes: []
superseded_by: []
implementation_refs: []
---

# Accepted product-scope decision — Vellistry's first MVP

## Approval, authority, and meaning

On **2026-10-09**, the project owner answered **“I agree”** to the specific [eight-area MVP recommendation](../research/R04-SPECIFIC-MVP-RECOMMENDATION-2026-10-09.md). The recommendation ended by asking for explicit approval of **postponing the complete Cover Studio and professional EPUB/print publishing** until after the first writing-focused release. This reply is **explicit approval of the proposed product scope and that trade-off**.

**This is an accepted product-target and sequencing decision, not an assertion that a release has been built, tested, launched, priced or scheduled.** The original approval remains in project conversation; a stable transcript URL has not been archived. The record must not invent one.

## Accepted first MVP — one author-centered product with eight areas

| Area | Approved product behavior and narrow first-release boundary |
|---|---|
| **M1 — Books and chapters** | Create, reopen, rename and organize books with a simple chapter list, chapter creation/reordering, simple planning notes and useful word counts. Solo author first; no shared-series management requirement. |
| **M2 — Professional non-AI manuscript editor** | Tiptap 3/ProseMirror foundation (already separately approved under ADR-0003), headings, paragraphs, emphasis, basic lists, selection/clipboard, search, keyboard shortcuts, undo/redo, chapter navigation and distraction-free writing. Works with AI disabled. |
| **M3 — Durable drafts and portability** | Account-protected manuscript storage, honest autosave state, recovery/revisions, export and deletion; basic TXT and ordinary DOCX interchange subject to genuine fidelity testing; portable backup of manuscript plus selected approved story profiles and active rule settings. Not a publishing/layout engine. |
| **M4 — Live Story Profiles** | Character and Storyline/Thread profiles visible near the manuscript; manual create/edit without AI; candidate source-linked profile changes detected from human-written or AI-generated/accepted scenes at review boundaries; author can inspect, change, accept or dismiss; no silent promotion of uncertain AI-generated information into canon. |
| **M5 — Simplified Rules Studio** | Genuine frozen historic fiction guidance remains unchanged and initially enabled **after a separately approved non-destructive R01 packaging decision**; domain-level browsing, rule enable/disable/restore, personal rules, simple workspace/book scope, artistic exceptions, preview of effective instructions and real exclusion of disabled creative instructions. |
| **M6 — Optional bounded AI** | Familiar **Continue Writing** and **Rewrite Selection** actions using one evaluated BYOK provider initially. Which provider/model, API terms, secrets design, costs and UI are future decisions. AI connection is not needed to write manually. |
| **M7 — Author approval and reversibility** | Show alternatives/diffs; author accepts, revises, rejects or undoes changes; stale suggestions cannot overwrite later writing. Generated proposals and candidate profile changes remain distinct from approved manuscript and canon. Keep a trace of relevant rules/context and the model used. |
| **M8 — Trust and comfortable use** | Private account/book isolation, secure secrets, permission/consent for external text transfer, backup/export/deletion, keyboard/accessibility fundamentals, reliable error/save states and a desktop-primary writing experience with appropriately responsive presentation. |

**Interpretation limit:** This approval is of *user-facing scope*. It is not carte blanche for every candidate row in each area; a linked feature-ID scope map specifies the narrow selected capabilities. Individual copy, toolbar design, data model and service boundaries still need prototype evidence.

## Approved release sequence

1. **A — Internal writing foundation:** book/chapter organization, usable editor, persistent/recoverable drafting, portable backup and manually editable visible profiles; assess non-AI writer value.
2. **B+ — Integrated writer-facing pilot:** source-verified simplified Rules Studio, controlled one-provider BYOK Continue and Rewrite, review/accept/undo of text proposals, and proposed live profile changes from author or accepted generated prose.
3. **Initial public MVP:** the coherent eight areas above **only after** real author usability, author-data protection, practical document portability, editor and model tests, accessibility and release-gate evidence. It is not ready for public release by virtue of this decision.

These are **three validation/delivery stages of one product**, not three different public editions. No calendar targets are approved.

## Specifically excluded from this MVP — preserved for later Vellistry work

- **Full native layered Cover Studio**, editable multiple cover directions, AI cover-generation/asset tools and full print-wrap layout. The owner stressed covers in the original vision. This decision **postpones, does not delete**, the feature.
- **Professional EPUB, print-ready PDF, publication page layout, detailed print profiles and book-production pipeline.** Basic DOCX/TXT manuscript interchange is retained as a different and narrower need.
- Deep knowledge/causality graphs, comprehensive cross-book timeline and automated POV firewall; keep manual/current live profiles and author approvals first.
- Broad AI provider routing, model comparisons, external assistant MCP/Canva integration, full-manuscript quality automation, complex collaboration and platform-billed AI credits/subscriptions.
- Any purchased editor-extension suite or product architecture beyond the selected Tiptap 3/ProseMirror foundation.

An **excluded-from-initial-MVP** item is **not canceled**: its eventual release order remains open to R02/R12/R13 research and later explicit owner decisions.

## Research, product-safety and implementation gates (still open)

- **R01:** Certify the authentic frozen guidance source and select a safe deployable packaging treatment for short/expanded AR disputes, without rewriting the source or fabricating authority.
- **R02:** Observe real authors and validate that these functions are useful, discoverable and migration-ready.
- **R05/R16:** Real-browser, long-writing keyboard, paste, focus, reading-comfort, IME and accessibility trials.
- **R06/R08:** Actual model request/response and quality checks, disabled-rule exclusion, a verified supported provider, user-consented text transfer, credential safety and cost caps.
- **R07:** Source-linked evolving character/storyline profile accuracy, overclaim/false positives, time boundaries, rejected AI draft isolation and retcons.
- **R11:** TXT/DOCX import/export fidelity, recoverability and no silent important formatting loss.
- **R14/R15:** Secure private manuscripts and backups, account isolation, data deletion and appropriate provider disclosure.
- **R19:** Reproducible acceptance tests with no observed silent loss of accepted manuscript or unapproved canon mutation.
- **R18/R21:** Architecture/cost research as prerequisites to full app-stack choices and any pricing/launch commitment.

The scope decision does not waive these release gates. If new evidence invalidates material requirements, bring the concern to the owner as a proposed scope revision rather than silently editing this accepted decision.

## Other decisions expressly not made

No Next.js/React/Vue application framework, database, persistence schema, storage platform, authentication implementation, job engine, hosting provider, actual LLM provider, commercial extension, EPUB/DOCX implementation library, pricing, release dates, paid subscription or finished UI design was approved.

## Feature mapping and evidence controls

- Source feature inventory is still in [draft PR #9](https://github.com/Ben-001-sys/Vellistry/pull/9) and retains historical feature IDs; don't rename or delete IDs while assigning scope.
- A companion **MVP feature-horizon map** classifies the exact included and explicitly deferred IDs. Any unclassified entry is not automatically approved for MVP.
- [R04 MVP recommendation](../research/R04-SPECIFIC-MVP-RECOMMENDATION-2026-10-09.md) remains **historical pre-approval research**, even though its proposal is now accepted. Don't erase its chronology or retrospectively label earlier experiments complete.
- [Approval history event](../history/2026-10-09-mvp-product-scope-approved.md) preserves the owner statement and boundary.

**Approval status: ACCEPTED. Implementation status: NOT IMPLEMENTED. Release status: NOT READY.**
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0005-ISSUE-67.md` @ `5fb47cde0be13647656a624e5c73acef25bed370`

~~~~~~markdown
# Issue 67 snapshot, retrieved 2026-10-14 UTC
Source: https://github.com/Ben-001-sys/Vellistry/issues/67 . Owner authorization is limited to Phase A; issue text is preserved below.
## Purpose / authorization boundary  **Owner direction (2026-10-14):** continue Vellistry implementation using **Codex** as the primary implementation agent, as recorded in owner-selected [ADR-0008 / draft PR #66](https://github.com/Ben-001-sys/Vellistry/pull/66). **This issue authorizes a bounded code review/correction/verification handoff to Codex; it does NOT authorize applying remote database migrations, creating cloud users/fixtures, using secret keys or real manuscripts, deployment, paid model calls, or merging PRs.**  **Task:** VEL-IMP-001B / proposed new task identity `VEL-TASK-0005` (verify unused before committing). This is **not IMP-002 chapters**, and is not a resumption of the paused [PR #59](https://github.com/Ben-001-sys/Vellistry/pull/59).  ## Pinned facts / entry state (re-verify, don't infer)  - Merged `main` as inspected: `4b3996ef7cda878e1af3d679454bd1bb873a79c2` (merged [PR #64](https://github.com/Ben-001-sys/Vellistry/pull/64): Library source, 66 focused tests). - [PR #65](https://github.com/Ben-001-sys/Vellistry/pull/65) is a **draft ChatGPT-authored** hosted-Supabase preflight proposal, branch `feat/vel-imp-001b-hosted-cloud-preflight`, inspected head `604e1ebfd0baab930ee4dc39aecf7289dc64188a`. It contains 10 changed files, 11 new synthetic tests, per-app `.env.example` templates, read-only Node preflight, CI wiring and hosted acceptance checklist. Its five PR workflows were verified green as of task writing. **It is not Codex-produced code**. - [PR #66](https://github.com/Ben-001-sys/Vellistry/pull/66) (ADR-0008) is a separate draft documentation PR; as inspected `main` does not yet contain ADR-0008. Initial CI jobs on #66 failed without exposed step summaries; failure cause not established. Do not assume it merged. - Supabase **Cloud** (not self-hosted) dev project `vellistry-dev`, ref `lflkcrnriitrbclangyr`, eu-west-2. Read-only checks found healthy project, **zero public app tables, zero applied migrations**. The two Git SQL migrations remain unapplied to cloud. - Current *source* and *tests*, not a chat recap, are the primary implementation evidence.  ## Codex task — Phase A: repository-only, allowed immediately  1. Check out the **actual** current Git state, preserve existing local work. Read in order: `PROJECT-CONSTITUTION.md`, `SOURCE-OF-TRUTH.md`, the latest `CURRENT-STATE.md` section, `AGENTS.md`, `docs/decisions/ADR-0006-...`, [ADR-0008 proposal in PR #66](https://github.com/Ben-001-sys/Vellistry/pull/66), accepted MVP scope, `docs/plans/VEL-PLAN-02-ARCHITECTURE-DATA-CONTRACTS-2026-10-11.md`, `docs/plans/VEL-PLAN-04-TEST-SECURITY-RECOVERY-2026-10-11.md`, IMP-001 [execution report](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/reports/VEL-IMP-001-LIBRARY-ISOLATION-2026-10-11.md), and current PR #65 diff/plan. If Codex Cloud cannot read private GitHub PR metadata, use a **locally fetched branch comparison** and source files; do not guess. 2. Independently review every changed file in PR #65 and its exact base/head; check that Node 24 `parseEnv` works, per-app env loading matches actual Next/Nest runtime, output never leaks credentials, project URL/key/loopback guard semantics are safe, CI executes the right tests, README/plan does not mislead, and no new migrations/dependencies were slipped in. Verify exact applicability on Windows PowerShell without overwriting ignored local env files. 3. Run **actual checks** in a safe local/CI checkout with no credentials: `corepack pnpm install --frozen-lockfile`, `corepack pnpm test:hosted-preflight`, `corepack pnpm test:library-isolation`, `corepack pnpm check`, `corepack pnpm build`, and `python scripts/agent_workflow.py validate` where available. Also check against new expected tests: absent env should fail safely, public key mismatch rejected, wrong project rejected, local URL rejected, leaked secret never printed. Record exit status; do not invent PASS. 4. Correct only **demonstrated** defects within preflight scope, preferably on the existing #65 PR branch **only when the owner explicitly authorizes Codex to take over that branch**. Otherwise prepare a separate branch based on fresh `main` and transparently identify reused/cherry-picked ChatGPT commits. Do not reattribute earlier commits/tests to Codex. 5. Prepare a **read-only security and migration review** for exactly these checked-in migrations, including privilege/RLS review, cloud-target identity, prerequisites, verification queries, auditable migration-history method, rollback limitations, and explicit migration-authorization hold point:    - `supabase/migrations/20261009000000_initial_author_books.sql`    - `supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql`    Do not run these or any DB writes to cloud. Do not run existing K2B scripts against cloud (some intentionally revoke grants and break APIs). 6. Document the exact next acceptance matrix for **future, separately authorized** cloud tests: two disposable Auth users; A creates, refreshes, reopens; B cannot see/read/create as A; forged `owner_id` denied; 401/error/account switching; direct PostgREST old signed-out JWT risk observed and honestly blocked; no private manuscript content or service keys in evidence.  ## Scope / explicit exclusions  **Allowed:** read, analyze, add targeted synthetic tests/fixes, document review findings, run safe repo tests and builds, create a draft PR or update an owner-authorized existing task branch, prepare proposed ContextPack/ExecutionBundle and migration plan.  **Not allowed:** any Supabase `apply_migration`, `execute_sql` writes, `db push`, `db reset --linked`, cloud Auth user creation/cleanup, remote fixture writes, live provider calls, schema changes, changing active owner decisions, merging PRs, deployment, or creating a 'production-ready' security claim. The historical logged-out-but-valid JWT / direct PostgREST risk remains a private pilot blocker.  **Branch isolation:** one Codex task, one isolated worktree/branch, pin input SHA. Do not collide with #65/#66 unless owner gives a concrete branch ownership decision. Check uncommitted local work first.  ## Evidence/exit conditions  - Report **FACT / INTERPRETATION / PROPOSAL** and exact Codex model/runner, base and head SHAs, changed paths, command outputs with exit codes, CI links on exact head, redacted sensitive evidence, negative test results with `PASS|FAIL|BLOCKED|NOT_RUN`, any unresolved blockers, and owner decision required. - If no correction is necessary, report **REVIEWED / NO CODE CHANGE REQUIRED**; do not fabricate commits for productivity. - A proposed ContextPack / ExecutionBundle must follow actual repo validation contracts and unique IDs (do not reuse historical VEL-TASK/VEL-CP/VEL-EB IDs). - Owner must explicitly review/merge #65 and #66; no assumed approvals. - Stop before Phase B. **Phase B (cloud migrations, synthetic users and real end-to-end book persistence)** needs separate exact-project scope and owner authorization.  ## Codex task launch instruction (copy into a Codex coding session)  > Work in Ben-001-sys/Vellistry as Codex, primary implementation agent. Execute the bounded **repository-only Phase A** of this GitHub issue. First verify current main, draft PR #65/#66 and governing sources; independently inspect #65 and its 11 synthetic tests. Make only evidence-driven, safe corrections; run all feasible no-secret checks with true exits; produce a factual ExecutionBundle and reviewed cloud migration plan. Preserve PR authorship, never touch hosted Supabase data, never merge/deploy/use secrets, and mark cloud acceptance BLOCKED pending separate owner approval. If you cannot access GitHub issue metadata, use the full text of this task supplied by the owner and compare fetched repository branches; state the limitation.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0005-ADR-0008.md` @ `5221779bb12a2aae24c73653b9f1cf4126331474`

~~~~~~markdown
# ADR-0008 source snapshot from unmerged PR 66
Source SHA: 808699879b69c912b779522fe063db9385925e56; source path: docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md . This snapshot preserves its owner-selected role; it does not merge PR 66 or modify accepted decisions.
---
id: ADR-0008
title: Use Codex as the primary implementation agent in Vellistry's governed agentic coding workflow
type: architecture-decision
status: accepted
created_at: 2026-10-14
updated_at: 2026-10-14
decided_at: 2026-10-14
author: project-research
approved_by: project_owner
version: 1.0.0
sources:
  - "Fiction Writing Project owner message, 2026-10-14: 'make it an adr we are using codex now'. Direct reply to the previously explained ChatGPT architect/coordinator, Cursor implementation, GitHub source-of-truth workflow. Original conversation permalink pending archival."
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  - docs/plans/VEL-PLAN-05-CURSOR-AGENT-WORKFLOW-2026-10-11.md
  - PROJECT-CONSTITUTION.md
  - SOURCE-OF-TRUTH.md
evidence:
  - "Owner explicitly selected Codex as the active coding agent and instructed that the change be formalized as an ADR on 2026-10-14."
  - "The earlier role assignment in PLAN-05 selected Cursor as the primary bounded coding agent; this ADR replaces only that default execution-tool assignment."
  - "Owner did not authorize the new agent to merge without review, deploy, apply cloud migrations, use secrets or paid services, handle real manuscripts, or bypass project approval gates."
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
  - VEL-PRODUCT-CONSTRAINT-20261009-001
related_features: []
related_contracts:
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  - docs/agent-workflow/README.md
related_adrs:
  - ADR-0001
  - ADR-0002
  - ADR-0006
supersedes: []
superseded_by: []
implementation_refs:
  - AGENTS.md
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  - docs/plans/VEL-PLAN-05-CURSOR-AGENT-WORKFLOW-2026-10-11.md
  - CURRENT-STATE.md
---

# ADR-0008 — Codex-primary governed agentic implementation

## Context and problem statement

Vellistry uses Git and Markdown as the canonical engineering knowledge/control plane. The accepted project constitution separates evidence, design decisions, implementation and owner approval. The planned workflow had ChatGPT prepare bounded tasks and ContextPacks while **Cursor Agent** performed implementation; its outputs were independently reviewed and reconciled through GitHub PRs and CI.

After PR #64 merged, direct GitHub editing by ChatGPT produced draft PR #65 for hosted Supabase preflight. The owner then reconfirmed that Vellistry follows an **agentic coding** workflow and explicitly said **"make it an adr we are using codex now"**. The agent responsible for normal implementation must therefore be updated without rewriting past Cursor execution history or implying any broader authorization.

This is a **development operating model decision**, not a product stack, deployment, licensing, security-gate or production-readiness decision.

## Decision

**Codex is Vellistry's default primary code implementation agent starting 2026-10-14**, for each newly authorized bounded coding task. Preserve the existing role-based control plane:

| Role | Responsibility | Authority boundary |
|---|---|---|
| **Project owner** | Select/approve scope, consequential changes, security posture, spending, database operations, PR acceptance/merge and release | Sole final decision maker; permitted to self-review under the constitution |
| **ChatGPT — architect/coordinator** | Read current repository evidence and accepted ADRs; define requirements, task IDs, ContextPacks, acceptance/negative tests, path allowlists and exclusions; assess Codex reports, diff and CI; advise owner | Does **not** make owner decisions, treat its assessment as independent human review, or act as the default feature-coding executor |
| **Codex — primary implementer** | On an explicitly scoped task, inspect pinned source, implement code/tests in an isolated Git branch/worktree, run valid checks, produce a factual ExecutionBundle and proposed PR | No self-authorization to change scope/ADRs, merge, deploy, perform cloud SQL/migrations/resets, incur paid costs, use real manuscripts or disclose secrets |
| **GitHub — source of truth and review ledger** | Host code, authoritative docs, versioned ADRs, task/ContextPack/ExecutionBundle artifacts, PRs, CI, decision history and current state | PR creation and green CI do **not** equal owner acceptance or deployment readiness |
| **Independent verifier (optional)** | Challenge the source diff, independently rerun tests and negative scenarios when possible | Advisory; the same agent's self-review is not an independent execution, and no second human is mandated |

**Default work loop:**

1. **Observe:** ChatGPT inspects the merged `main` SHA, current PRs, accepted requirements/ADRs and latest top of `CURRENT-STATE.md`; distinguish verified facts from older historical status.
2. **Authorize a specific slice:** The owner approves the bounded objective and sensitive actions. ChatGPT prepares a unique task/ContextPack with source SHA, intended changes, allowed/forbidden paths, behavioral acceptance checks, security and cost restrictions. A prepared packet does not grant approval on its own.
3. **Dispatch to Codex:** Codex executes in a dedicated branch/worktree against the designated SHA, without reusing old task/pack IDs or overwriting another agent's in-progress branch. Agent may use the existing repository tools/CI and must declare tool/model/runtime in its evidence.
4. **Report evidence:** Codex supplies an ExecutionBundle with base/head SHA, changed paths, actual commands and exit codes, unit/integration/browser results with real environment and fixture descriptions, `PASS|FAIL|BLOCKED|NOT_RUN`, original artifacts and `FACT|INTERPRETATION|PROPOSAL`.
5. **Review:** ChatGPT reviews the exact submitted code, contracts, tests, workflow behavior, known risks and evidence. The owner determines corrections, rejection or PR acceptance/merge. CI success alone cannot waive human acceptance/security/recovery testing.
6. **Reconcile:** After an approved merge, verify files on merged `main` and post-merge checks; update `CURRENT-STATE.md` and issue/task status, preserving past decisions and results. Proceed to a new slice only after its own authorization.

Codex is a **role assignment**, not a mandatory IDE or subscription. Cursor may continue as an editor, historical test environment or explicitly assigned alternate agent, but **Cursor Agent is no longer the default implementer**. Other agents may implement a task only when the owner explicitly reassigns that task; do not silently switch providers or claim that a ChatGPT-side GitHub change was executed by Codex.

**Existing work:** PR #64 remains a valid merged Cursor-era implementation and its recorded verification evidence does not change. Draft [PR #65](https://github.com/Ben-001-sys/Vellistry/pull/65) is a **ChatGPT-authored, not Codex-executed** implementation proposal; do not relabel its origin, auto-merge it or treat its tests as Codex evidence. It may be reviewed, adopted via a fresh bounded Codex handoff, revised or closed by the owner, with its actual provenance preserved.

**Security boundary:** The owner selected hosted **Supabase Cloud** project `vellistry-dev`, not a locally self-hosted Supabase installation. All hosted schema migrations, Auth fixture creation, remote resets, real manuscript use, deployment and paid provider calls remain subject to separate explicit task-level authorization and appropriate testing. In particular, the historical signed-out-but-still-valid JWT/direct PostgREST concern remains a private-pilot blocker until mitigated and verified.

## Alternatives considered

1. **Continue Cursor Agent as default:** keeps earlier environment but contradicts the latest explicit owner tool selection. Preserve Cursor-era history instead.
2. **Let ChatGPT directly commit all feature changes through GitHub:** convenient for small edits but bypasses the chosen Codex execution role and muddies agent provenance. ChatGPT may maintain planning/decision records, not silently act as the default code implementer.
3. **Allow unrestricted, interchangeable coding agents:** flexible but weakens permission isolation and reproducibility when task ownership changes implicitly.
4. **Codex primary under the existing governed task/PR loop (selected):** retains traceability, single-task ownership and verifiable outputs while honoring the updated owner direction.

## Rationale

The owner's instruction identifies Codex as the current implementation tool. Keeping architecture, execution, independent review and approval responsibilities separate avoids silently treating agent-produced code, CI results or a prior conversation as accepted authority. The Git-centred knowledge and task packet approach permits future tool changes without changing the Next/Nest/Supabase/Tiptap architecture.

No performance, reliability or cost superiority between Codex and Cursor is asserted. This choice is an **owner workflow preference and accountability decision**, not a benchmark result.

## Consequences and trade-offs

- Future default implementation prompts, agent handoff references and code-owner descriptions should name **Codex**. Older Cursor artifacts remain intact and labelled as historical; do not rewrite them as if Codex produced them.
- Codex needs a verified workspace/Git access method and clear approval/tool permission boundaries for each task. The specific Codex interface (web, desktop, CLI or connected agent) is **not established by this ADR**.
- ChatGPT should deliver **specification, acceptance tests, task packet, review and decision support**, rather than directly creating ordinary feature code/PRs without an explicit exception.
- Existing ContextPack/ExecutionBundle schemas and Git/CI controls remain in force until independently amended and validated; do not claim automatic Codex integration if the current workflow does not support it.
- The single-owner self-review policy remains effective. Independent agent review helps but cannot replace required owner approvals.
- Migration, production/deployment, private manuscript, provider-spending, security and release gates are unchanged. No new subscriptions or paid API use is approved.

## Evidence and verification limits

The owner's direct 2026-10-14 message is the decision source; the conversation permalink has not been archived. It approves **the default implementer change and ADR record**, not a particular Codex runtime, verified Codex GitHub connection, successful task handoff or a security-gate transition. This documentation PR itself is **not Codex implementation evidence**.

Record status is **accepted by the owner as a workflow decision**. Repository enforcement via docs and completed Codex task evidence are distinct, separately verifiable steps. A future switch of the default implementation agent should be recorded through a new dated owner decision/ADR, with links to this record and history preserved.

## Implementation status

**Decision owner-accepted; documentation alignment proposed in the associated PR. No Codex application-code task is claimed completed by this ADR.** Next action is to review the open IMP-001B PR #65, clarify Codex ownership for its continuation, and prepare a freshly pinned Codex handoff if the owner elects to proceed. Existing hosted Supabase migrations and two-author real acceptance remain separate, gated tasks.
~~~~~~

### `scripts/hosted_supabase_preflight.mjs` @ `b7f4d5a7a1529b4bb67fd84ac9512d9eb0c0caea`

~~~~~~markdown
#!/usr/bin/env node
/**
 * Vellistry hosted-development configuration preflight.
 *
 * Reads only ignored local env files; makes NO network calls or DB changes.
 * Does not print project keys, credentials, or file contents. Never use this
 * result as proof of a connected database, RLS, schema, or login.
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parseEnv } from "node:util";
import { pathToFileURL } from "node:url";

export const WEB_ENV = "apps/web/.env.local";
export const API_ENV = "apps/api/.env";
const VALID_REF = /^[a-z0-9]{20}$/;
const PUBLISHABLE = /^sb_publishable_[A-Za-z0-9_-]{8,}$/;

function correctCloudUrl(value, projectRef) {
  if (typeof value !== "string" || !VALID_REF.test(projectRef)) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:"
      && url.hostname === projectRef + ".supabase.co"
      && url.port === ""
      && url.pathname === "/"
      && url.search === ""
      && url.hash === ""
      && url.username === ""
      && url.password === "";
  } catch {
    return false;
  }
}

/** Pure, synthetic-testable evaluation. Error text deliberately excludes input values. */
export function validateHostedConfig({ web, api, expectedProjectRef }) {
  const errors = [];
  if (!VALID_REF.test(expectedProjectRef ?? "")) {
    errors.push("Expected Supabase project reference must be 20 lowercase letters/digits.");
    return { ok: false, errors };
  }

  if (!correctCloudUrl(web.NEXT_PUBLIC_SUPABASE_URL, expectedProjectRef)) {
    errors.push("Web Supabase URL must be the HTTPS API URL of the selected development project.");
  }
  if (!correctCloudUrl(api.SUPABASE_URL, expectedProjectRef)) {
    errors.push("API Supabase URL must match the selected HTTPS development project.");
  }
  const webKey = web.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  const apiKey = api.SUPABASE_PUBLISHABLE_KEY;
  if (typeof webKey !== "string" || !PUBLISHABLE.test(webKey)) {
    errors.push("Web must use a modern sb_publishable_ key, never a secret/service_role key.");
  }
  if (typeof apiKey !== "string" || !PUBLISHABLE.test(apiKey)) {
    errors.push("API must use a modern sb_publishable_ key, never a secret/service_role key.");
  }
  if (typeof webKey === "string" && typeof apiKey === "string" && webKey !== apiKey) {
    errors.push("Web and API must use the same publishable key.");
  }
  if (web.VELLISTRY_API_BASE_URL !== "http://127.0.0.1:4100") {
    errors.push("Web BFF must target the loopback Nest API at http://127.0.0.1:4100.");
  }
  if (api.API_HOST !== "127.0.0.1" || api.API_PORT !== "4100") {
    errors.push("Nest API must listen on 127.0.0.1:4100 during desktop development.");
  }
  return { ok: errors.length === 0, errors };
}

function readLocalEnv(root, name) {
  const path = resolve(root, name);
  if (!existsSync(path)) return { missing: true, values: {} };
  try {
    return { missing: false, values: parseEnv(readFileSync(path, "utf8")) };
  } catch {
    // Never reflect a parser exception that may contain confidential source text.
    return { missing: false, parseError: true, values: {} };
  }
}

/** Produces safe, non-secret stdout. Does not contact Supabase. */
export function checkLocalEnvironment(root, expectedProjectRef) {
  const web = readLocalEnv(root, WEB_ENV);
  const api = readLocalEnv(root, API_ENV);
  const errors = [];
  if (web.missing) errors.push("Missing " + WEB_ENV + " (copy its .env.example locally).");
  if (api.missing) errors.push("Missing " + API_ENV + " (copy its .env.example locally).");
  if (web.parseError) errors.push("Could not parse " + WEB_ENV + ".");
  if (api.parseError) errors.push("Could not parse " + API_ENV + ".");
  if (errors.length === 0) {
    errors.push(...validateHostedConfig({
      web: web.values,
      api: api.values,
      expectedProjectRef,
    }).errors);
  }
  return {
    ok: errors.length === 0,
    messages: errors.length === 0
      ? ["PASS: local Web/API cloud settings are internally consistent.",
         "NOT TESTED: cloud connectivity, database schema, RLS, Auth, or real book saves."]
      : ["BLOCKED: hosted development configuration needs attention.", ...errors],
  };
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const ref = process.argv[2];
  const result = checkLocalEnvironment(process.cwd(), ref);
  for (const message of result.messages) console.log(message);
  if (!result.ok) process.exitCode = 1;
}
~~~~~~

### `tests/hosted_supabase_preflight.test.mjs` @ `9be2a35b0ab7bac972b67ffffe39c80770fdc42d`

~~~~~~markdown
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { checkLocalEnvironment, validateHostedConfig } from "../scripts/hosted_supabase_preflight.mjs";

const ref = "lflkcrnriitrbclangyr";
const url = "https://" + ref + ".supabase.co";
const key = "sb_publishable_synthetic_only_0123456789";
const good = () => ({
  expectedProjectRef: ref,
  web: {
    NEXT_PUBLIC_SUPABASE_URL: url,
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: key,
    VELLISTRY_API_BASE_URL: "http://127.0.0.1:4100",
  },
  api: {
    SUPABASE_URL: url,
    SUPABASE_PUBLISHABLE_KEY: key,
    API_HOST: "127.0.0.1",
    API_PORT: "4100",
  },
});

test("accepts coherent hosted project URL, modern publishable key and loopback Nest", () => {
  assert.deepEqual(validateHostedConfig(good()), { ok: true, errors: [] });
});

test("rejects another cloud project, even if Web and API agree on that project", () => {
  const cfg = good();
  cfg.web.NEXT_PUBLIC_SUPABASE_URL = "https://differentproject123.supabase.co";
  cfg.api.SUPABASE_URL = cfg.web.NEXT_PUBLIC_SUPABASE_URL;
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects localhost Supabase URL; local containers are not the selected backend", () => {
  const cfg = good();
  cfg.web.NEXT_PUBLIC_SUPABASE_URL = "http://127.0.0.1:54321";
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects secret/service-role key in browser and backend publishable slot", () => {
  const cfg = good();
  cfg.web.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = "sb_secret_do_not_use_0123456789";
  cfg.api.SUPABASE_PUBLISHABLE_KEY = "sb_secret_do_not_use_0123456789";
  const result = validateHostedConfig(cfg);
  assert.equal(result.ok, false);
  assert.ok(result.errors.length >= 2);
  assert.equal(result.errors.join(" ").includes("do_not_use_0123456789"), false);
});

test("rejects legacy JWT key in the modern publishable-key slot", () => {
  const cfg = good();
  cfg.web.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiJ9.payload.signature";
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects mismatched Web/API project publishable keys", () => {
  const cfg = good();
  cfg.api.SUPABASE_PUBLISHABLE_KEY = "sb_publishable_different_synthetic_123456";
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects externally exposed API host and wrong BFF upstream", () => {
  const cfg = good();
  cfg.api.API_HOST = "0.0.0.0";
  cfg.web.VELLISTRY_API_BASE_URL = "https://api.example.test";
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects invalid or omitted expected project reference", () => {
  assert.equal(validateHostedConfig({ ...good(), expectedProjectRef: "" }).ok, false);
  assert.equal(validateHostedConfig({ ...good(), expectedProjectRef: "production" }).ok, false);
});

test("missing local files are reported without consulting environment or network", () => {
  const root = mkdtempSync(join(tmpdir(), "vellistry-hosted-env-"));
  try {
    const result = checkLocalEnvironment(root, ref);
    assert.equal(result.ok, false);
    assert.ok(result.messages.join(" ").includes("apps/web/.env.local"));
    assert.ok(result.messages.join(" ").includes("apps/api/.env"));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("reads ignored local files, never emits key values in success output", () => {
  const root = mkdtempSync(join(tmpdir(), "vellistry-hosted-env-"));
  try {
    mkdirSync(join(root, "apps/web"), { recursive: true });
    mkdirSync(join(root, "apps/api"), { recursive: true });
    writeFileSync(join(root, "apps/web/.env.local"),
      "NEXT_PUBLIC_SUPABASE_URL=" + url + "\n"
      + "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=" + key + "\n"
      + "VELLISTRY_API_BASE_URL=http://127.0.0.1:4100\n");
    writeFileSync(join(root, "apps/api/.env"),
      "SUPABASE_URL=" + url + "\n"
      + "SUPABASE_PUBLISHABLE_KEY=" + key + "\n"
      + "API_HOST=127.0.0.1\nAPI_PORT=4100\n");
    const result = checkLocalEnvironment(root, ref);
    assert.equal(result.ok, true);
    assert.equal(result.messages.join(" ").includes(key), false);
    assert.match(result.messages[1], /NOT TESTED/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("invalid local config never leaks the offending key in diagnostics", () => {
  const root = mkdtempSync(join(tmpdir(), "vellistry-hosted-env-"));
  const secret = "sb_secret_fake_private_123456789";
  try {
    mkdirSync(join(root, "apps/web"), { recursive: true });
    mkdirSync(join(root, "apps/api"), { recursive: true });
    writeFileSync(join(root, "apps/web/.env.local"),
      "NEXT_PUBLIC_SUPABASE_URL=" + url + "\n"
      + "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=" + secret + "\n"
      + "VELLISTRY_API_BASE_URL=http://127.0.0.1:4100\n");
    writeFileSync(join(root, "apps/api/.env"),
      "SUPABASE_URL=" + url + "\n"
      + "SUPABASE_PUBLISHABLE_KEY=" + key + "\n"
      + "API_HOST=127.0.0.1\nAPI_PORT=4100\n");
    const result = checkLocalEnvironment(root, ref);
    assert.equal(result.ok, false);
    assert.equal(result.messages.join(" ").includes(secret), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
~~~~~~

### `docs/plans/VEL-IMP-001B-HOSTED-CLOUD-ACCEPTANCE-2026-10-14.md` @ `3d17977aca69e5f16f7634ee08326e2a6fa93438`

~~~~~~markdown
---
id: VEL-IMP-001B-HOSTED-CLOUD-20261014
title: IMP-001B — hosted Supabase development integration and Library acceptance
type: implementation-and-verification-handoff
status: partial-implementation-cloud-migration-blocked
created_at: 2026-10-14
updated_at: 2026-10-14
owner: project_owner
version: 0.1.0
sources:
  - docs/plans/VEL-PLAN-01-149-FEATURE-TO-TEST-CROSSWALK-2026-10-11.md
  - docs/plans/VEL-PLAN-02-ARCHITECTURE-DATA-CONTRACTS-2026-10-11.md
  - docs/plans/VEL-PLAN-04-TEST-SECURITY-RECOVERY-2026-10-11.md
  - docs/reports/VEL-IMP-001-LIBRARY-ISOLATION-2026-10-11.md
  - supabase/migrations/20261009000000_initial_author_books.sql
  - supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql
---

# IMP-001B — hosted Supabase and real Library acceptance

**Authority and status (2026-10-14).** Owner instructed continuation after PR #64 merged to `main`. This narrowly permits implementation of safer configuration/preflight and preparation of acceptance evidence, **not automatic authorization to write/migrate/reset the connected Supabase Cloud project**, create cloud Auth users, deploy, run paid models or introduce private manuscripts. Cloud schema write actions must be reviewed and separately approved. The inherited MVP/Pilot release gates remain pending.

## Current verified facts

- Source-of-truth Git `main` at merge `4b3996ef7cda878e1af3d679454bd1bb873a79c2` (PR #64 merged 2026-10-14 22:10 UTC).
- PR #64 source head passed 66 focused mocked tests, typecheck/build; five PR workflows and five post-merge main workflows passed. This is source-/disposable-CI evidence, NOT hosted cloud acceptance.
- Owner's Supabase Cloud project `vellistry-dev` (`lflkcrnriitrbclangyr`, `eu-west-2`, PG 17) returned `ACTIVE_HEALTHY` with **zero public tables and zero migration-history entries** on connected read-only checks on 2026-10-14.
- Local Next app lives under `apps/web`; local Nest app under `apps/api`. Browser login/account flows require working Supabase Cloud Auth. Existing real data remains prohibited.
- Current Git branch for this checkpoint: `feat/vel-imp-001b-hosted-cloud-preflight` (do not work directly on `main`).

## Changes in this proposed code PR

1. Per-runtime ignored environment templates (`apps/web/.env.example` and `apps/api/.env.example`) replace the prior misleading localhost Supabase root example.
2. `scripts/hosted_supabase_preflight.mjs` parses **only local env files** (not `process.env` secrets), validates expected dev project/URL, **sb_publishable_** key type and equality and loopback-only Nest. It makes **no remote requests**, prints only static, redacted check results and expressly distinguishes local configuration from real connectivity/schema security.
3. `tests/hosted_supabase_preflight.test.mjs` exercises coherent configuration, production/wrong project, localhost URL, secret/service-role key rejection, legacy anon JWT rejection, mismatched public keys, exposed Nest/wrong BFF upstream, invalid project ref, missing files and diagnostic redaction. CI executes synthetic checks without real credentials.
4. Existing client error copy is now cloud-neutral. **No client authorization/RLS, table SQL, frontend feature, network transport or cloud schema changed.**

## Workstation setup (no database operations)

Do this in a **clean local checkout** of the eventual reviewed branch/merged `main`, preserving existing work first:

```powershell
git fetch origin
git status --short --branch
git log -1 --oneline origin/main
corepack pnpm --version
```

The repository pins `pnpm@10.18.0`. **Do not reset or discard changes** just to synchronize. On an authorized updated checkout:

```powershell
if (-not (Test-Path apps/web/.env.local)) { Copy-Item apps/web/.env.example apps/web/.env.local }
if (-not (Test-Path apps/api/.env)) { Copy-Item apps/api/.env.example apps/api/.env }
```

**Existing local .env files are preserved, not overwritten.** Use the **same verified Cloud dev project** `https://lflkcrnriitrbclangyr.supabase.co` and its actual **modern publishable key** in both ignored files. Edit only locally. Obtain the key from [Supabase Dashboard for vellistry-dev](https://supabase.com/dashboard/project/lflkcrnriitrbclangyr) → Connect / API keys. **Never paste raw key values, service-role keys, passwords, bearer tokens or manuscripts in chat, Cursor prompts, PRs or Git.** `NEXT_PUBLIC_*` is browser-visible, so only the publishable key is allowed. The preflight validates formatting, not a key's actual validity.

Run:

```powershell
corepack pnpm install --frozen-lockfile
corepack pnpm test:hosted-preflight
corepack pnpm check:hosted-env
corepack pnpm test:library-isolation
corepack pnpm check
corepack pnpm build
```

With the cloud schema *still empty*, database-backed Library requests must be recorded **BLOCKED**, not faked as PASS. If beginning local frontend/API processes, use separate terminals for `corepack pnpm dev:api` and `corepack pnpm dev:web`; no port binding beyond loopback. Local env variables should never be printed in transcripts.

## Existing migrations — requested review before remote application

The Git repository already contains exactly two intended foundation migration files, in order:

1. `supabase/migrations/20261009000000_initial_author_books.sql`: `public.books`, `public.chapters`, `public.chapter_revisions`, UUID FK ownership, `auth.uid()` owner default, owner isolation policies, force RLS, limited grants.
2. `supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql`: revoke direct chapter/revision DML from `anon` and `authenticated`, preserve read-only visibility subject to RLS.

**Security/code review required before apply:**

- Ensure `books.owner_id DEFAULT auth.uid()` and `WITH CHECK` prohibit client owner spoofing.
- Ensure `anon` has no data access to any authored table; authenticated `books` CRUD requires owner match; nested chapters/revisions SELECT require owning book. Inherited/default grants and exposed Data API settings must be inspected independently of row policies.
- Ensure direct `chapters` and `chapter_revisions` INSERT/UPDATE/DELETE remain revoked for authors. Do not enable chapters CRUD until the separately reviewed atomic save/RPC contract is designed and tested.
- Confirm `auth.users` reference, schema privileges, and the actual **migration history mechanism** before applying. Executing SQL manually in Dashboard would not by itself register the Git migration versions in Supabase migration history; keep deployment auditable/reproducible.
- **Do not** run `supabase db push`, `supabase db reset --linked`, any `supabase:reset` npm script, local K2B grant-revocation experiments, or create Auth fixtures against hosted project under this task.
- No public pilot: existing **signed-out but still-valid JWT direct PostgREST** access was observed in the prior disposable RLS investigation. A successful Nest guard does not secure a direct Data API route after logout. That issue requires independent owner-reviewed architecture/security mitigation.

**Hold point:** present exact reviewed migration list, target project reference, expected changes, rollback/backout limitations, and a clear approval request. Only the owner can authorize a Cloud database write. Because the cloud database is empty, its schema is not yet testable against the running app.

## Planned hosted-cloud acceptance test matrix (NOT RUN)

| Test | Expected evidence | Status |
|---|---|---|
| ENV-01 | Web/Nest .env key names, correct dev ref, matching publishable key, private backend; no secrets in logs | NOT RUN on owner's current workstation |
| DB-01 | Git migration history equals two reviewed versions; all three tables, constraints, grants and RLS present | BLOCKED pending cloud schema approval |
| AUTH-01 | Two new disposable Auth accounts can sign in through real browser | BLOCKED pending synthetic user authorization |
| LIB-01 / ACC-M1-01 | A creates book; refresh/reopen returns durable row owned by A | BLOCKED |
| LIB-02 / ACC-M8-01 | B sees none of A's books, cannot guess/read or write A's rows | BLOCKED |
| LIB-03 | Signing out hides rows, switching A→B never flashes A's titles | BLOCKED browser test |
| LIB-04 | Bad titles and forged `owner_id` denied; server assigns owner via auth | BLOCKED |
| SEC-01 | Reuse old JWT against direct Data API after logout and document exact scope; DO NOT mark private-pilot PASS until secure | BLOCKED |
| CRED-01 | Browser never receives `service_role`/`sb_secret_`; no raw keys or manuscript in evidence | NOT RUN |
| VAL-01 | Full `VEL-JRN-001` and `VEL-JRN-011` end-to-end | NOT RUN; IMP-001 alone cannot complete JRN-001 chapters |

**Exit:** merged and tested configuration guard; separately authorized cloud migrations with audited history and schema/RLS checks; real synthetic two-author app acceptance on exact code; security and future chapter save still appropriately gated. Until then, PR #64 merge only proves the bounded client/server implementation and synthetic/disposable tests.
~~~~~~

### `supabase/migrations/20261009000000_initial_author_books.sql` @ `192a736d1a5d6ffc6f239c74ed61e7b8d2528b3b`

~~~~~~markdown
-- Vellistry first implementation migration. Requires Supabase auth schema.
-- Intended for local Supabase CLI testing; not yet executed against live Auth/RLS.
-- No seed author IDs, tokens, real manuscripts or service keys in this file.
create extension if not exists pgcrypto;

create table public.books (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  title text not null check (char_length(btrim(title)) between 1 and 120),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index books_owner_created_idx on public.books(owner_id,created_at desc);

create table public.chapters (
  id uuid primary key default gen_random_uuid(),
  book_id uuid not null references public.books(id) on delete cascade,
  title text not null check(char_length(btrim(title)) between 1 and 180),
  position integer not null check(position>=0),
  current_revision integer not null default 1 check(current_revision>=1),
  accepted_document jsonb not null default '{"type":"doc","content":[{"type":"paragraph"}]}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(book_id,position),
  unique(book_id,id)
);
create index chapters_book_position_idx on public.chapters(book_id,position);

create table public.chapter_revisions (
  book_id uuid not null,
  chapter_id uuid not null,
  revision integer not null check(revision>=1),
  document jsonb not null,
  recorded_at timestamptz not null default now(),
  primary key(book_id,chapter_id,revision),
  foreign key(book_id,chapter_id) references public.chapters(book_id,id) on delete cascade
);

-- Deny unauthenticated and cross-author access on all three relations.
alter table public.books enable row level security;
alter table public.chapters enable row level security;
alter table public.chapter_revisions enable row level security;
alter table public.books force row level security;
alter table public.chapters force row level security;
alter table public.chapter_revisions force row level security;

create policy author_can_read_books on public.books for select to authenticated
  using (owner_id=(select auth.uid()));
create policy author_can_create_books on public.books for insert to authenticated
  with check (owner_id=(select auth.uid()));
create policy author_can_update_books on public.books for update to authenticated
  using (owner_id=(select auth.uid())) with check (owner_id=(select auth.uid()));
create policy author_can_delete_books on public.books for delete to authenticated
  using (owner_id=(select auth.uid()));

create policy author_can_read_chapters on public.chapters for select to authenticated
 using (exists(
  select 1 from public.books b where b.id=chapters.book_id and b.owner_id=(select auth.uid())
 ));
create policy author_can_read_revisions on public.chapter_revisions for select to authenticated
 using (exists(
  select 1 from public.books b where b.id=chapter_revisions.book_id and b.owner_id=(select auth.uid())
 ));

-- IMPORTANT: No direct chapter INSERT/UPDATE or revision INSERT policy is granted.
-- A later versioned, audited create/save RPC must append revisions transactionally.
-- Do not prematurely grant broad chapter writes.
revoke all on public.books,public.chapters,public.chapter_revisions from anon;
grant select,insert,update,delete on public.books to authenticated;
grant select on public.chapters,public.chapter_revisions to authenticated;
~~~~~~

### `supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql` @ `0670a60f1c2e299e9771b9af1c677d97712174d9`

~~~~~~markdown
-- K2 hardening: Supabase may have default table privileges granting DML on
-- new public tables. Absence of an UPDATE RLS policy must not be mistaken for
-- SQL-level revocation. Make chapter/revision tables read-only to author role
-- until the K3 audited transactional revision RPC is built.
-- Do not grant direct INSERT/UPDATE/DELETE on accepted manuscript content.
revoke all on table public.chapters, public.chapter_revisions from authenticated;
grant select on table public.chapters, public.chapter_revisions to authenticated;
revoke all on table public.chapters, public.chapter_revisions from anon;
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.

---
id: VEL-PLAN-IMPLEMENTATION-MASTER-20261011-001
title: Vellistry MVP — master implementation plan and planning-only reset
type: implementation-master-plan
status: proposed-owner-review-planning-only
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.3.0
source_refs:
  - PROJECT-CONSTITUTION.md
  - SOURCE-OF-TRUTH.md
  - docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
  - docs/plans/OPTION-B-WAVE05-MVP-FINAL-DECISION-2026-10-10.md
  - docs/decisions/ADR-0003-use-tiptap-3-prosemirror-for-manuscript-editor.md
  - docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md
  - docs/architecture/IMPLEMENTATION-BOUNDARIES-2026-10-10.md
  - docs/agent-workflow/IMPLEMENTATION-TASK-DEPENDENCIES.yaml
  - docs/design/VEL-DES-001-002-UX-HANDOFF-2026-10-10.md
---

# Vellistry MVP — implementation master plan

## Six-package planning completion index (2026-10-11; documents prepared, owner review pending)

**Owner requested all PLAN-01..06 work packages in one documentation pass.** They have been prepared and source-consistency audited on [PR #61](https://github.com/Ben-001-sys/Vellistry/pull/61), rather than waiting through six sequential coding prompts. This is **planning deliverable completion**, not owner approval of proposed endpoints/migrations/route-specific model choices or permission to start Cursor.

| Package | Finished planning artifact | Evidence boundary |
|---|---|---|
| PLAN-01 | [Baseline source inventory](VEL-PLAN-01-SCOPE-AND-BASELINE-INVENTORY-2026-10-11.md) and [full 149-feature/test crosswalk](VEL-PLAN-01-149-FEATURE-TO-TEST-CROSSWALK-2026-10-11.md) | Original stable IDs/horizons/status; unique proposed test IDs, all NOT_RUN |
| PLAN-02 | [Architecture, RLS and API/data contract options](VEL-PLAN-02-ARCHITECTURE-DATA-CONTRACTS-2026-10-11.md) | Accepted Next/Nest/Supabase/Tiptap stack; future schema/RPC decisions proposed |
| PLAN-03 | [Author routes, navigation and interaction states](VEL-PLAN-03-UX-NAVIGATION-STATES-2026-10-11.md) | 16 editable Figma static concepts + reported Make audit; no functional screen completion |
| PLAN-04 | [Security, durability, tests, backup and provider gates](VEL-PLAN-04-TEST-SECURITY-RECOVERY-2026-10-11.md) | Test-plan coverage only, not actual security certification |
| PLAN-05 | [Future Cursor Desktop and agent PR workflow](VEL-PLAN-05-CURSOR-AGENT-WORKFLOW-2026-10-11.md) | Cursor not opened/installed; no app code |
| PLAN-06 | [Review, dependency order and decision register](VEL-PLAN-06-MVP-PLANNING-REVIEW-CLOSEOUT-2026-10-11.md) | Source-consistency **self-review** and explicit pending owner decisions |

The [future desktop environment setup plan](VEL-CURSOR-DESKTOP-SETUP-PLAN-2026-10-11.md) remains separate and **not executed**. The old Cursor kickoff draft [PR #59](https://github.com/Ben-001-sys/Vellistry/pull/59) remains PAUSED. **After owner review of PR #61 and acceptance of these planning outputs**, proceed only to Windows/Cursor Git/tooling/local-environment preflight and a no-feature-change baseline; start a coding agent only on a subsequent explicitly scoped task. No real private manuscripts, paid model calls or unapproved deployments.

## 1. Planning reset, authority and boundaries

**Owner instruction dated 2026-10-11:** “we are restarting the implementation we are doing the plan for it from start to end no code yet; then after we move into starting cursor on desktop ... and all that needed stuff.”

**Interpretation:** Restart the *implementation execution process at planning*, not delete the repository, revoke the approved eight-area product scope, or replace the accepted technical foundation. **CURRENT PHASE: PLAN ONLY.** Do not start Cursor Agent, write product code, generate migrations, install/configure local tools, reset databases, connect real credentials, deploy, publish or merge implementation work while this plan is being completed. A distinct owner handoff will move from planning to Cursor desktop setup, and then a further bounded implementation authorization will start coding.

The previous **Issue #58 / draft PR #59** `VEL-IMP-001` Cursor kickoff is **paused/superseded as an execution instruction** by this newer request; retain it as a historical preparation artifact, do not execute it or merge it in place of the master plan. The implementation branch contains planning/task documents but no claimed new application code. No claim of a fully approved design or real-author testing.

**Source of truth:** The accepted eight-area scope is preserved verbatim in `docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md`; Wave 5 narrowed optional AI to exactly Continue/Rewrite and BYOK; the eleven journeys are *proposed test cases* and their exact labels/IDs should be retained. Decisions and original research remain in Git; this roadmap adds proposed execution order, not new product scope authority.

**Canonical design:** [Existing editable Figma Design](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U) (16 known editable static frames) is the UI reference. Figma Make's owner-reported live walkthrough and Lovable's independently source-inspected demonstration are secondary references. No need for finished, pixel-perfect UI before coding. The reported Figma Make cross-persona profile/fact leak and caret rejection and Lovable's distinct source-level selection/canon bugs are *negative test cases*, not safe implementation patterns.

## 2. MVP definition and out-of-scope contract

| Accepted area | Complete minimum product result | Do not silently expand into |
|---|---|---|
| **M1 — Books and chapters** | Own library; create/reopen/rename/organize books; create/rename/reorder/navigate chapters; separate planning notes and word counts | Multi-author collaboration, shared series platform |
| **M2 — Professional non-AI manuscript editor** | Tiptap 3 paragraphs/headings/bold/italic/basic lists, paste/selection, search, shortcuts, undo/redo and focus mode; works with no AI key | Word layout engine, collaborative editor, automated manuscript rewriting |
| **M3 — Durable drafts and portability** | Accepted revision receipts, autosave truth, local recovery, conflict reconciliation/history; TXT/ordinary DOCX import/export with warnings; whole-book portable backup+clean restore and deletion | Professional publication layout, flawless Word round-trip guarantee |
| **M4 — Live Story Profiles** | Manual characters/story threads; proposed fact updates with exact source, revision and story time; author edit/approve/dismiss, source-reversal/retcon handling | Automated universal timeline/causality intelligence, silent canon updates |
| **M5 — Simplified Rules Studio** | Source-certified unmodified guidance, browsable logical controls, enabled/inherited scope overrides, restore and author-created rules, task-relevant effective context filtering | Rewriting or inventing authentic frozen guidance; flooding prompt with all rules |
| **M6 — Optional bounded AI** | Continue at selected caret; Rewrite only one contiguous within-paragraph span; user-controlled OpenRouter BYOK free **or** paid key; consent/recipient/context/cost preview; AI OFF default | Autonomous novel creation, hidden model fallback, hosted Vellistry AI credits |
| **M7 — Explicit acceptance and reversibility** | Proposal diff and clear Accept/Reject, stale source guards, idempotent transactional commit, accepted revision + compensating Undo, independent canon approval | Auto-applying model text/facts, undo that erases later author edits |
| **M8 — Trust and comfortable use** | Account/book data isolation; consent/secret handling; keyboard/accessibility basics; private portable content; reliable error, recovery, deletion and backup behavior | Premature privacy/production certification or public release |

**Explicitly excluded initially:** full layered Cover Studio and AI cover generation; professional EPUB/print-ready PDF; complex collaboration; broad AI model/provider marketplace and platform billing; deep causal knowledge graph. Retain for post-MVP planning rather than implement opportunistically.

## 3. Confirmed starting assets vs not yet delivered

**Already in repository (inspect again during environment phase):**
- pnpm workspace, Next.js 16 / React 19 / Tailwind 4 frontend, NestJS 11 backend and Supabase Auth/Postgres/RLS local development foundation.
- Login/registration UI; basic `/books` Library; Next server-side `/api/books` forwarding; guarded Nest `GET/POST /v1/books`; initial books/chapters/revision schema base.
- Governance, accepted ADRs, source research, 11 journey test plan, draft implementation DAG, ContextPack/ExecutionBundle protocol, build/typecheck and some synthetic tests; original editable Figma screens.

**Not established as completed or production-ready:**
- Verified runtime account transitions across **all** private state and nested resources, including a signed-out token still valid to direct PostgREST.
- Create/reorder chapter flow with safe document revision mutation, actual Tiptap editor, save CAS/ack, local recovery, long-form browser behavior, full project clean restore.
- Live Story Profiles, provenance-aware candidates, authentic 134-rule catalog activation, actual BYOK model and vendor vetting, durable proposal history/Undo.
- Full real-user task test, private author trial, actual release operations. **Synthetic Make/Lovable results do not count as product PASS.**

**Do not redo** framework selection or research waves as though undecided; identify any unresolved *implementation details* explicitly and obtain owner decisions when required.

## 4. Planning phase — BEFORE opening Cursor Desktop

The entire following planning phase precedes installing/configuring development tools.

### PLAN-01 — Source/scope reconciliation
- Confirm M1–M8 and two narrowly bounded AI actions; map source-derived requirements to implementation features and eleven journey IDs.
- Inventory all existing code, tests, schemas, current PRs, research and accepted/pending ADRs **without writing code**.
- Distinguish accepted product decisions vs proposed implementation details; do not resurrect superseded “no design allowed” research-era constraints.

**Deliverable:** signed-off scope and explicit exclusions table; reuse-vs-build inventory.

### PLAN-02 — Architecture and data contract
- Keep selected Next.js frontend, NestJS API, Supabase Auth/PostgreSQL RLS, Tiptap JSON; choose bounded implementation contracts for book/chapter and nested ownership.
- Plan domain objects: author/session, book, chapter, planning note, accepted chapter revision, local recovery candidate, character, plot thread, canonical fact, candidate fact and evidence link, immutable rules source/alias, scoped rule override, AI request/consent, proposal, author decision, undo revision, export/backup manifest.
- Map data ownership: author → books → chapters/revisions/notes/profiles/facts/rules/proposals. Local recovery keys include account/book/chapter/revision. Define deletion cascading/retention, revision immutability, source retention and audit.
- Define API responsibility (client UX, Nest validation/proxy, Postgres atomic CAS/RLS, provider transfer); keep service-role credentials out of routine author paths.
- Freeze exact schemas/RPC names only **as separate reviewable specs/ADRs** before database-writing slices. Do not write migrations in planning.

**Deliverable:** domain model, API/RPC contract candidates, authorization matrix, architecture issues requiring signoff.

### PLAN-03 — UX/feature and navigation contract
- Use 16-frame original Figma master, Make observation and Lovable code evidence. Document routes/views: login, Library empty/populated, Book Workspace, Chapter Organizer, Manuscript, recovery/history, Story Workspace, fact review, Rules Studio, settings/BYOK, consent/proposal review, export/restore/delete.
- For each screen, define loading/empty/populated/error/unauthorized/cancel/conflict/keyboard behavior and data transition. Empty Library text must not coexist with a real populated book card **at runtime**.
- Define responsive priorities for desktop (primary), tablet and narrow mobile; defer noncritical visuals. Map privacy-critical/irreversible controls and dialog semantics.

**Deliverable:** screen/feature navigation matrix, state transitions and implementation-ready minimum design reference for each slice.

### PLAN-04 — Test/security/privacy/backup strategy
- Draft unit/component, Next/Nest API, **owner-selected isolated hosted Supabase development project** RLS, transactional DB, browser E2E, exploratory accessibility and author validation plan. Use only non-destructive synthetic data and never run old local reset fixtures on the linked cloud project. Bind tests to accepted journey IDs, negative cases and fixture provenance.
- Security threat model covers direct PostgREST bypass of Nest, stale signed-out JWT exposure, key/redaction, BFF cached state, chapter/Storage ID guessing, import/export leakage, cross-persona and cross-book state, stale AI suggestions, prompt/instruction transfer and service-role misuse.
- Define `PASS/FAIL/BLOCKED/NOT_RUN` evidence and “no false Saved/no silent manuscript loss/no unapproved canon/no cross-author data” zero-tolerance defects in bounded suites.
- Plan clean Auth+DB+Storage backup and restore, versioned archive format, retention and deletion behavior; define internal recovery objectives as *targets*, not proven service levels.
- Decide provider privacy/terms review and real-user consent prerequisites. No real manuscript or real provider key during planning.

**Deliverable:** test matrix, security risk register, environment boundaries, backup/restore protocol, pilot/release blocker list.

### PLAN-05 — Cursor workflow and PR contract
- One feature objective per Cursor Agent task, unique task/ContextPack ID, isolated branch/worktree, allowed paths/actions, denied actions, source provenance and acceptance checklist.
- Agent inspects existing source first, proposes minimal changes, runs actual tests, writes an unedited ExecutionBundle with FACT/INTERPRETATION/PROPOSAL, exact commands/results/head SHA.
- Model decides code, not governance. GitHub PR exact-head CI and owner review precede merges. No giant one-shot “implement MVP” Cursor prompt and no overlapping agent edits.
- Establish “pause when”: unknown source/copyright, proposed auth/security change, destructive DB command, real provider spend, real/private data exposure, out-of-scope feature request.

**Deliverable:** Cursor task template, PR checklist and review/merge standard.

### PLAN-06 — Full roadmap approval / desktop handoff
- Verify every M1–M8 and JRN-001..011 mapped to a delivery increment, dependencies and tests.
- Record unresolved owner decisions: author security/logout design, exact save RPC/retention, rules source packaging, DOCX support matrix, model route and consent, deployment/region and pilot/legal obligations.
- Decide what can stay provisional for local development, and what blocks a feature/pilot/release. Freeze *planning v1* while allowing controlled amendments.
- Only after owner accepts the plan, **schedule the separate desktop setup phase**. Do not interpret planning approval as code/release approval.

**Deliverable:** reviewed master plan with first permitted setup action, no coding.

## 5. Cursor Desktop and local environment phase — ONLY AFTER PLAN APPROVAL

This phase is an explicit follow-up activity, **not completed by creating this document**.

### SETUP-01 — Verify Windows environment and repositories
- On the user's Windows 11 desktop, check disk space, 64-bit Windows support, admin rights/organization restrictions and backup location.
- Verify Git for Windows, Cursor Desktop, Node.js 24, Corepack/repo-pinned pnpm 10.18.0 and Python 3 for existing agent scripts. **No Docker Desktop or WSL2 installation is required for the selected hosted Supabase Cloud backend**. Owner-observed versions: Git 2.55.0, Node 24.13.0, Python 3.10.10, Corepack 0.34.5 and global pnpm 11.5.2; choose the pinned pnpm per repo instead of changing the global version. C: has 13.9 GB free; monitor rather than declaring Docker disk usage mandatory.
- Set or confirm Git identity, credential/SSH auth and access to **personal** `Ben-001-sys/Vellistry` repo; use least privilege. Read organization-repo permissions independently if needed.
- Open the existing repository folder in Cursor, not a brand-new app; confirm branch/clean status and workspace trust.

### SETUP-02 — Cursor workspaces and agent controls
- Select relevant Cursor mode/model under the user's existing entitlement; no subscription changes without a decision.
- Read repo `AGENTS.md` and approved ContextPack/task files; pin useful project context with repo docs, not only chat memory.
- Set file-edit and terminal command confirmation boundaries; require approval for destructive commands, secret access, migrations and external network.
- Keep one branch/worktree for a single assigned task; avoid auto-running a huge agent instruction. Agree report format and checkpoint before allowing edits.

### SETUP-03 — Hosted Supabase Cloud project and environment isolation (owner direction)
- Use **Supabase Cloud within the owner's existing account**, not self-hosting or running Supabase CLI local containers. Select a **dedicated development project** if available; a Supabase account alone is not an API/project. Confirm project reference, whether it contains real user data and the actual schema/migration status before any write.
- Configure untracked local env files: Next reads `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`; Nest reads `SUPABASE_URL` + `SUPABASE_PUBLISHABLE_KEY`. Use the project's **HTTPS URL and publishable key**; the repo `.env.example` currently contains *local-only placeholders* and must not be used literally. No secret/service-role key in browser, Git/chat or routine author API.
- Next stays local at `127.0.0.1:3000`, Nest at `127.0.0.1:4100`; no requirement to bind local Supabase API 54321, DB 54322 or Studio 54323. Verify Auth redirect URLs, session flow and no-cache ownership.
- Do not run `supabase start`, `pnpm supabase:reset`, `supabase db reset --linked`, `supabase db push`, remote migration repair or existing local reset/security integration scripts on hosted cloud without separately reviewed project selection and explicit permission. Only create Alice/Bob synthetic test accounts in a confirmed disposable dev project under an approved task.

### SETUP-04 — Baseline run WITHOUT feature implementation
- Install locked dependencies; run `pnpm check`, `pnpm build` and safe non-mutating tests; boot **local web/API**, connecting to the verified HTTPS Supabase Cloud development project. Hosted schema/RLS may differ from checked-in migrations: inspect non-destructively and report `BLOCKED` rather than pushing changes to make a baseline pass.
- Record observed OS/Node/pnpm/Cursor versions, cloud project reference and scope, exact Git SHA, failing/passing baseline, local network/env blockers and logs scrubbed of secrets; Docker/WSL status is not a blocker.
- Confirm hosted development project data boundaries, backup/rollback options and explicit author approval before applying Git migration files; **no cloud reset or feature code change yet**.
- Report baseline and obtain the go-ahead for first Cursor coding slice.

**Exit:** reproducible local Next/Nest + owner's safely isolated hosted Supabase development project and exact baseline evidence. No Docker requirement. A real-manuscript pilot still requires a separate solution for the signed-out unexpired JWT/direct PostgREST risk.

## 6. Product implementation phases — start only AFTER the setup and scoped coding handoff

### IMP-001 — Authenticated Library and owner isolation (M1/M8)
**Build:** verify/refine Supabase sign-in and session, owned book list/create/rename/reopen; distinct loading/empty/populated/401/error/retry, clean persona transition; Nest protected RLS-mediated operations, title validation and accessible navigation. Minimize changes to working scaffold.

**Tests:** synthetic Alice/Bob books separate through UI, BFF, Nest and direct PostgREST; guessed IDs, forged owner_id, invalid token, stale fetch after A→B→A; empty/nonempty states mutually exclusive. **Exit:** scoped isolated Library with honest test evidence, not full JRN-001.

### IMP-002 — Book Workspace, chapters, notes and counts (M1)
**Build:** book/chapter navigation, create/rename/reorder/delete-confirm; stable chapter IDs independent of order; per-book/per-chapter planning notes, word counts; accessible keyboard reordering.

**Tests:** reorder without moving prose/notes; duplicate titles distinct; cross-author/cross-book nested access rejected. **Exit:** accessible chapter organizer with accepted scoped persistence and ownership.

### IMP-003a — Fully manual Tiptap 3 editor (M2)
**Build:** paragraphs/headings/bold/italic/basic lists, selected text/clipboard, Find, shortcuts and editor undo/redo; focus mode and sensible long-chapter performance; no AI key.

**Tests:** browser-native typing/selection/clipboard, 500+ fictional words, Unicode/IME/RTL, keyboard and screen-reader interactions at appropriate checkpoints. **Exit:** manual editing is usable, but no false claim of persistence before next phase.

### IMP-003b — Transactional revision save, autosave and recovery (M3/M8)
**Build:** authenticated checked ownership, Tiptap JSON validation, `expectedRevision` CAS, `idempotencyKey`, immutable accepted revision, acknowledged hash/server receipt, retry-safe API; visible unsaved/saving/saved/unknown/conflict states. Separate account/book/chapter-scoped local drafts, compare/reconcile/keep-both after lost ACK, two-tab conflict and history.

**Tests:** real DB atomicity, duplicate idempotency payload mismatch, dropped response after commit, stale tab, crash/reopen, chapter switching, failure/retry; never show Saved without acknowledged committed content. **Exit:** no known silent accepted manuscript loss, false receipt or unsafe overwrite in bounded tests.

### IMP-005a/005b — Story Profiles and canonical fact decisions (M4/M7)
**Build:** manual character/thread profiles first; independent candidate source quote + accepted chapter revision + story-time, edit/approve/dismiss; retcons/retraction and approved-fact source warning; rejected proposal facts cannot become approved canon.

**Tests:** source mismatches, time contamination, account/book switches, profile CRUD and undo/retracted prose. **Exit:** author-controlled provenance-aware canon, not silent AI fact injection.

### IMP-006 — Source-preserved Rules Studio (M5)
**Build:** certify authentic 260 source records and approved 134 controls (130 primary expanded ON, four compact extra OFF) before activation; browse/toggle/restore/book/global scope/author rules, precedence and effective-rule selector. Only relevant active rules enter provider context.

**Tests:** immutable source/hash parity, default/scope persistence, disabled rule absent from full outgoing context including caches, no cross-book rule leakage. **Exit:** verified catalog only if genuine source packaging approved; otherwise explicitly BLOCKED.

### IMP-004a/004b — Portability and deletion (M3/M8)
**004a after IMP-003b:** TXT and ordinary editable DOCX import/export with loss warnings; safe source preservation, supported mark/heading roundtrip.
**004b after Profiles + Rules:** versioned whole-book archive of accepted chapters, approved profiles, active rule settings and author-created rules with provenance; no BYOK secret; clean restore to authorized isolated test account; book/account export and deletion/retention confirmations.

**Tests:** corrupt/oversize archive, wrong-account import/export, clean DB+Storage restore if used, unsupported DOCX features explicitly warned, retention semantics. **Exit:** actual restorable backup, not a mock ZIP export.

### IMP-007 — Optional evaluated OpenRouter BYOK Continue/Rewrite (M6)
**Build:** first evaluated pinned route; free/paid user-owned key **in session memory only**, explicit consent showing excerpt/book context/effective rules/provider/cost before HTTPS request. Continue at valid collapsed caret; Rewrite one contiguous within-paragraph span; unaccepted plain-text proposals. AI OFF default.

**Tests:** Continue caret offset 0 and 4, no arbitrary append; reject -1/unknown/cross-paragraph selection; stale response; provider cancellation/401/429/timeout; secret redaction; no unintended text transmission or charge. **Exit:** provider integration contract verified, not exposed to real authors without IMP-008 safeguards.

### IMP-008 — Durable proposal review, Accept/Reject and Undo (M7)
**Build:** exact source/range/version/proposal provenance, side-by-side diff, Reject no mutation, Accept as revision-CAS committed accepted text, idempotent retry, stale auto-disable. Compensating *new* accepted revision for Undo after reload if latest; otherwise explicit conflict; source-derived canon remains separate and flagged on prose retraction.

**Tests:** reject byte-equivalence, double accept, concurrent human edit, wrong owner, stale offsets, revision conflict, Undo with later author edits, candidate canon independence. **Exit:** safe integrated two-action AI with review/Undo, no silent mutation.

## 7. Integrated hardening, private pilot and public release

### VAL-001 — Internal feature-complete candidate
- Demonstrate integrated JRN-001..011 against **actual application** on synthetic data. Record exact SHA, scenario, environment, evidence, PASS/FAIL/BLOCKED/NOT_RUN and unresolved known issues.
- Run real-browser long-writing + actual accessible keyboard/screen-reader/IME; run every save/recovery race; direct PostgREST/Nest/RLS tenant-isolation matrix; effective rule/consent scrutiny; versioned backup clean restore including Auth+DB+Storage if applicable.
- Validate provider/model rights/costs, key redaction and legal/privacy disclosures; no unauthorized manuscript traffic.
- **Exit:** M1–M8 integrated synthetic functionality and critical defects resolved. This is not consent to ingest private manuscripts.

### G_PRIVATE_PILOT — Protected real-author pilot approval
- Resolve/mitigate and retest signed-out unexpired JWT/direct PostgREST issue before real private author material. Review active session behavior, secured Storage objects/signed URLs, TLS, CSRF/CORS, region/provider terms, secrets, retention and deletion.
- Exercise encrypted clean backup/restore, migration rollback, incident response/support process, limited-access staging, meaningful monitoring with no private prose/key logs.
- Owner explicitly authorizes controlled private pilot using genuine author consent, then conduct observed writing tasks and refine issues. **No pilot is self-authorized by passing CI**.

### G_RELEASE — Initial public eight-area MVP
- All JRN-001..011 pass on agreed deployed exact release revision with verified portability, user/privacy/accessibility, backup/restore, rules/AI safety, provider/legal and operations. No known critical false save, accepted-prose loss, cross-owner leak or unreviewed canon.
- Controlled rollout, health monitoring, disable-AI feature flag, support/incident management, tested rollback/migrations, backup jobs and post-release smoke.
- Owner explicitly accepts public release. Cosmetic UI refinements may continue after release if not essential usability/accessibility/security issues.

## 8. Eleven-journey traceability (required across implementation)

| Journey | Slice(s) | Acceptance focus |
|---|---|---|
| **JRN-001** start book and move chapters without losing writing | IMP-001/002/003 | owned create/navigation, stable reorder, persisted edits |
| **JRN-002** manual write and format without AI | IMP-003 | formatting/search/IME, AI OFF |
| **JRN-003** close/reopen/recover/export | IMP-003/004 | true save, lost ACK, clean restore, TXT/DOCX |
| **JRN-004** manual character/thread | IMP-005a | create/edit/reopen profile |
| **JRN-005** inspect/approve/revise/dismiss fact | IMP-005b/008 | quote+story time, independent decision |
| **JRN-006** browse/disable/restore/add rules | IMP-006 | scope/immutable source/effective rule |
| **JRN-007** consent + Continue | IMP-006/007/008 | provider request preview, valid caret |
| **JRN-008** Rewrite/Reject/Accept/Undo | IMP-003/007/008 | within paragraph span, persisted Undo |
| **JRN-009** prose acceptance separate canon | IMP-005/008 | candidate pending and source-reversal |
| **JRN-010** editing during pending AI | IMP-003/007/008 | stale result blocked, human prose preserved |
| **JRN-011** privacy and data portability | IMP-001..VAL | Alice/Bob, export/delete/restore, JWT review |

## 9. Dependency and PR sequence

Foundation → IMP-001 → IMP-002 → IMP-003a → IMP-003b.
After IMP-003b: IMP-005a/b, IMP-006 and IMP-004a may be delivered separately/serially or in carefully isolated worktrees. Full IMP-004b waits on Profiles+Rules. IMP-007 needs persisted editor, Profiles, Rules and consent. IMP-008 follows and safety-gates user-visible AI. VAL-001 follows integrated 004/005/006/008. Private pilot and public release are separately approved downstream.

**One PR per bounded tested slice**, with optional small sub-PRs for architecture/migrations/security. Each PR has changed-files allowlist, API/schema contract, positive+negative tests, error/recovery test cases, exact-head CI, ExecutionBundle, owner-reviewed merge. No dates, monetary commitments or unsupported performance targets set.

## 10. Gate checklist — what must be decided when

| Gate | Evidence required | This planning reset grants |
|---|---|---|
| Planning signoff | complete M1–M8 map, 11 journeys, dependencies, test/security plan, Cursor desktop prerequisites | **Nothing automatically** |
| Desktop setup permission | reviewed plan and environment boundaries | **Not yet; next conversation phase** |
| Scoped code permission | selected task acceptance, accepted UX baseline, owner direction, safe local test env | **Not yet for new work** |
| G_DESIGN / G_CODE project-level state | explicit scoped recorded owner decisions with implementation-ready contract | Pending unless separately evidenced |
| G_PRIVATE_PILOT | proven secure real manuscript handling and clean restore | Pending |
| G_RELEASE | integrated tests, real-writer/accessibility, operations, legal/provider and owner signoff | Pending |

## 11. Master definition of done

**Implementation planning done:** this plan reviewed/accepted, key unknowns logged, dependencies/feature scope/test matrix fixed at a planning baseline, prior Cursor kickoff parked, and a first desktop setup checklist ready. No coding.

**Environment ready (later):** Cursor and requisite tools verified on actual desktop, cloned existing repo, safe local DB, green or explained baseline, no secret leakage. Then a single bounded coding task is authorized.

**MVP internally complete (later):** all M1–M8 functional on integrated synthetic app and JRN-001..011 evidenced; no known accepted-text loss, false save, cross-owner leak, unauthorized transfer or unapproved canon.

**Pilot/public ready (later):** protected runtime/security/backup/legal/author testing and explicit owner gates, not merely a green draft PR.

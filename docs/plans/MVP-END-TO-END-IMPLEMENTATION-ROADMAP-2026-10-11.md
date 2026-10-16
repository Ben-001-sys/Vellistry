---
id: VEL-PLAN-MVP-END-TO-END-20261011-001
title: Cursor implementation roadmap for complete Vellistry MVP
type: proposed-execution-roadmap
status: proposed-owner-review
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.1.0
sources:
  - docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
  - docs/plans/OPTION-B-WAVE05-MVP-FINAL-DECISION-2026-10-10.md
  - docs/architecture/IMPLEMENTATION-BOUNDARIES-2026-10-10.md
  - docs/agent-workflow/IMPLEMENTATION-TASK-DEPENDENCIES.yaml
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  - docs/specs/VEL-SPEC-001-CHAPTER-SAVE-CONTRACT.md
  - docs/design/VEL-DES-001-002-UX-HANDOFF-2026-10-10.md
---

# Vellistry — complete MVP implementation roadmap (Cursor)

## Status and operating rules

This is a **proposed engineering roadmap**, not an already completed build, blanket product-code gate decision, pilot approval or release schedule. On 2026-10-11 the owner directed **start implementing with Cursor** and clarified that the original editable Figma master need not be pixel-perfect. A single first bounded local implementation task (VEL-IMP-001 / VEL-TASK-0004) was prepared under issue #58 and draft PR #59. Later scopes remain subject to individual acceptance/authorization; G_PRIVATE_PILOT and G_RELEASE are still pending.

Canonical source hierarchy: accepted eight-area MVP scope; owner-selected narrow optional AI behavior; accepted stack ADRs; proposed eleven-journey acceptance plan; proposed dependencies and implementation boundaries; observed Figma Make walkthrough and Lovable source audit as **synthetic** UX references. No invented author study or production test PASS.

Stack: pnpm 10 workspace, Next.js 16/React 19/Tailwind 4, NestJS 11, local Supabase Auth/PostgreSQL/RLS, Tiptap 3 selected for the actual editor. Existing Next sign-in/Library and Nest guarded GET/POST books endpoints are present, plus schema foundations. Revision-safe chapter writing is not complete. The unexpired signed-out JWT/direct PostgREST access window is a known *development-stage* residual risk and private-pilot blocker.

The original Figma file remains the editable design master (16 known frames); no need to fix every static-layout detail before scoped coding. Figma Make's reported cross-persona state leak and valid collapsed-caret rejection, and Lovable's separate source-audited Continue/Rewrite/canon errors, are explicit negative design examples **not** implementation templates.

## Approved M1–M8 scope and explicit omissions

- **M1 Books/chapters:** create/reopen/rename/organize books, chapter CRUD/reorder, separate planning notes, useful word counts.
- **M2 Non-AI editor:** Tiptap 3 manuscript, headings, paragraphs, emphasis, basic lists, selection/clipboard, search, shortcuts, Undo/Redo, distraction-free AI-OFF writing.
- **M3 Durability/portability:** authenticated manuscript storage, truthful saved/unknown/conflict states, local recovery and accepted revisions, TXT and ordinary DOCX interoperability with loss notices, author-scoped full project backup/clean restore and documented deletion.
- **M4 Story Profiles:** manual characters and plot threads, source/revision/story-time-aware *candidate* facts from accepted text, separate approve/edit/dismiss, provenance and retcon handling.
- **M5 Rules:** certified immutable compact/expanded original writing guidance, 134 logical-control intended mapping of 130 expanded primary defaults ON and four compact extras OFF when source packaging is approved, toggle/restore/scope/author rules, effective-request preview; disabled instructions excluded.
- **M6 Optional AI:** Continue at valid insertion point and Rewrite exactly one contiguous selection inside one paragraph, evaluated first OpenRouter route, user-provided free OR paid BYOK key, AI OFF by default; no platform-paid AI.
- **M7 Author decisions:** visible original/proposal diff, Accept/Reject, explicit source/version checks, server-CAS idempotent revision acceptance and history-backed compensating Undo, separate canon decision.
- **M8 Trust:** per-owner account/book/chapter isolation, external-transfer consent, secrets and logs safety, portability/deletion policies, keyboard/accessibility, desktop-first responsive layout and truthful errors.

Explicitly defer full layered Cover Studio, professional EPUB/print-ready publishing and page layout, collaboration, complex causality/cross-book graphs, large provider marketplace, platform billing and autonomous AI writing. TXT/DOCX remains in scope but is **not** full publishing.

## Whole-project dependency map

Foundation (already built) → IMP-001 account/library → IMP-002 chapters/notes → IMP-003 manual editor + accepted revision CAS + recovery.

After IMP-003, IMP-004 (portability), IMP-005 (Story Profiles) and IMP-006 (Rules) can proceed in separate narrow branches with agreed shared interfaces. Full backup must not be called complete until profiles and rule preferences are included and clean-restored, even if TXT/DOCX base export was delivered earlier. IMP-007 optional AI depends on IMP-003, 005 and 006; IMP-008 persisted review/Undo depends on 007; do **not** expose real AI to users until its accepted/rejected/stale and undo safety is integrated. VAL-001 integrated tests depend on IMP-004/005/006/008. Private-pilot security approval and public-release approval remain separate.

Delivery split within existing IDs: IMP-003a manual editing, IMP-003b server save/recovery; IMP-004a TXT/DOCX, IMP-004b complete backup/deletion; IMP-005a manual profiles, IMP-005b source-backed candidates. These suffixes are **recommended sub-slices**, not new accepted DAG IDs.

## Standard Cursor workflow for every slice

1. Read AGENTS.md, PROJECT-CONSTITUTION.md, SOURCE-OF-TRUTH.md, newest top of CURRENT-STATE.md, accepted requirements/ADRs, pending decisions, previous accepted code and the task-specific approved scope.
2. Confirm Git origin, clean branch/worktree, latest fetched main, exact base SHA, open PRs, test baseline and no uncommitted unrelated work.
3. Create bounded unique task YAML and ContextPack, if tool and source constraints allow, with proposed inputs, allowlist, denylist and acceptance tests. Never overwrite another ContextPack ID. Owner approves consequential new scopes and high-impact migrations.
4. Assign Cursor Agent **one slice**, not the full roadmap. It must read existing Next/Nest/Supabase code, implement minimal changes, use synthetic local-only data, write positive/negative tests and record exact output. Never regenerate application from Figma/Lovable.
5. Run pnpm check, pnpm build, focused tests, disposable local Supabase integration tests where applicable and real browser automation/manual trials. Mark NOT_RUN honestly. Avoid DB reset without confirming disposable target and explicit operator authorization.
6. Save unedited test logs and an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL, exact changed paths, commands/exits, commit SHA, evidence limits and follow-up decisions.
7. Review security/ownership, changed files, exact-head CI, diff and test evidence. Owner reviews and merges PR. Update CURRENT-STATE.md after accepted integration; next task reads it anew.
8. Never confuse a green synthetic test, design mockup, code path, or assistant assertion with integrated production PASS. No paid keys/real manuscripts until approved.

## Stage 0 — reproducible development baseline

- Inspect root pnpm lock/scripts, Node24/pnpm10 versions, Next/Nest services, local Supabase auth/database config, migration inventory and existing integration tests.
- Run install, typecheck and build without changes to establish baseline. Boot local services with local-only environment variables and known disposable data. Never expose local Supabase publicly.
- Inspect actual schema/RLS before implementing nested chapter or save queries. Establish fixture users Alice and Bob only in disposable local DB with operator-approved local setup.
- Confirm existing API health, sign-in, book creation and error reporting. Document any prior CI errors rather than “fixing” unrelated areas silently.

**Exit:** exact baseline SHA, known environment setup, source inventory and reproducible build/test notes. No claim of complete auth safety.

## Stage 1 — VEL-IMP-001: owned Library and authenticated author identity (M1/M8)

Task: issue #58 / draft PR #59; first bounded Cursor handoff VEL-TASK-0004.

- Reuse existing Supabase Auth, Next login, authenticated Next book BFF and Nest guarded GET/POST books.
- Separate loading, 401/unauthenticated, real empty, populated, network failure/retry, create pending and create failure. Existing populated card and “No books yet” illustration in Figma are mutually exclusive at runtime.
- Guard against previous account's book state showing after sign-out/account switch; cancel or invalidate in-flight old-session responses, clear account-scoped UI data and cache correctly.
- Validate nonempty reasonable title, reject malformed body/forged owner_id; Nest never trusts submitted user ID, uses user bearer + RLS for operations. No service-role author path.
- Auth and title errors must not leak private data. Library and creation accessible by keyboard, no AI provider requirement.
- Tests: Alice book vs Bob book, guessed book IDs / direct BFF+Nest and PostgREST denial, expired/missing token, account switch A→B→A, stale fetch race, empty vs populated, creation failure, title validation.

**Exit:** real local account-owned book list/create verified with positive + negative tests and owner-reviewed PR. This is not yet chapter/editor completion.

## Stage 2 — VEL-IMP-002: chapters, order and planning notes (M1)

- After inspecting existing tables and RLS, specify and implement owner-book-scoped chapter create/list/get/rename/reorder and appropriate delete/confirm. Use stable chapter ID independent of sort order; prevent changing another author's book through guessed nested IDs.
- Implement opening a book into chapter navigator, default untitled chapter, keyboard reorder alternative to pointer-only drag, navigation, chapter-specific planning notes and useful word counts (honest about not-yet-saved text).
- Planning notes stay separate from accepted manuscript content. Reorder changes sort order only, not chapter identity, content or notes. Avoid silent destructive chapter navigation.
- Tests: create two same-name chapters; reorder three with retained identities; notes persist; cross-owner/book denial; invalid title/order/deletion states. No claim of revision-safe writing yet.

**Exit:** reliable authored book/chapter organization and relevant ACC-M1 scenarios.

## Stage 3 — VEL-IMP-003a: manual Tiptap editor with AI OFF (M2)

- Add supported Tiptap 3 extensions with exact editor JSON shape, paragraph/heading/emphasis/lists, selection/clipboard, keyboard shortcuts, visible Bold change, search, Undo/Redo and optional focus mode. Use original Figma master for general writing-first layout, chapter rail and unobtrusive Story context.
- Support long fictional writing and Unicode; test paste/marks, selection/focus, IME/composition and RTL where relevant. Do not conflate local ProseMirror history with durable server-revision Undo.
- Manual writing, chapter navigation and formatting must not require BYOK login, key, external calls or AI runtime.

**Exit:** browser-based, keyboard-usable 500+ invented words in supported formatting; search/selection/copy-paste/undo verified on actual editor. Persistence comes in next stage.

## Stage 4 — VEL-IMP-003b: chapter save, revision ledger and non-destructive recovery (M3/M8)

**Server:** define and review authenticated transactional save contract with actor/book/chapter/expected revision/idempotency key/validated Tiptap JSON, returning a durable accepted-revision receipt (revision, acknowledged hash and timestamp). Ensure DB atomic compare-and-swap: accepted source revision does not change on stale, wrong-owner or duplicate conflict. Same idempotency request retries after lost response without duplicate commit; different payload under same key is rejected. Migrations/RPC must be reviewed in their own PR.

**Client:** implement true state machine of unsaved→saving→acknowledged saved, offline/error, uncertain after lost ACK, proven conflict and recovery candidate; no “Saved” based merely on local state or fetch scheduling. Debounced autosave plus manual retry and navigation warnings must preserve text.

**Recovery:** keep local account/book/chapter/base-revision-scoped candidate (storage mechanism chosen through review); on reopening, compare local with accepted server revision. Keep local as draft, keep server, keep both, or reconcile explicitly. Never auto-overwrite and never show Bob's local drafts as Alice's.

**Tests:** SC-001..008, rapid edits + chapter switch, dropped ACK, power/disconnect simulation, server commit but reply lost, duplicate retry, invalid editor schema, stale two tabs, chapter collision, account switch, browser reload, actual acknowledged revision recovered. No silent accepted-text loss or false save success.

**Exit:** independently reviewed real local DB CAS receipt and browser recovery, not simulated status labels.

## Stage 5 — VEL-IMP-005: manually maintained Story Profiles then facts (M4/M7)

**Manual:** author creates/edits/reopens character and plot-thread profiles, statuses and notes; profiles scoped by owner/book, shown without mandatory AI.

**Candidates:** proposed facts from a scene at an accepted chapter revision have exact quoted provenance, story-time applicability, subject and change status. Separate unapproved candidate from author-maintained approved canon. Author may edit/approve/dismiss; accepted prose does NOT automatically approve fact. Candidate from rejected AI text cannot update canon.

**Revisions/time:** deleted/changed source/retcon invalidates or flags dependent facts; Undo of accepted AI prose retracts pending sourced fact, flags already approved source-reversed fact for review without silently deleting independent author decision. Earlier story-time queries must not expose later knowledge. Avoid conjectural fact assertions.

**Tests:** manual profile with AI OFF, two accounts/two books, exact quote and missing quote, story-time, edit/reject/approve, stale revision, retracted source, rejected AI candidate, retcon. JRN-004/005/009 coverage.

**Exit:** source-linked canon decisions with durable provenance and no auto promotion.

## Stage 6 — VEL-IMP-006: certified Rules Studio (M5)

- Before activating full defaults, settle owner-certified R01 source package: 260 compact/expanded authentic source records and non-destructive 134 logical alias mapping (130 expanded-primary default ON; four compact extras default OFF), with immutable source body and historical IDs. If packaging unresolved, label synthetic samples and hold genuine catalog completion.
- Build source ID/category browsing/search; persistent global/book enabled/disabled overrides, restore/inherit defaults, author-created rules, intentionally artistic exception, simple scope precedence and current effective-rule preview.
- Assemble only a task-relevant enabled subset when an AI action is explicitly requested. Never include disabled instructions through cached summaries or cross-book contexts; never dump the whole 130 rules automatically.
- Tests: source parity, default count, toggles/restore, two books/global scope, custom author rule, disabled exclusion from complete request, original source immutability and audit trail. JRN-006 coverage.

**Exit:** source-certified rules and effective context independently validated.

## Stage 7 — VEL-IMP-004: TXT/DOCX and complete book portability (M3/M8)

**Part 004a** may begin after Stage 4: implement TXT and supported ordinary DOCX import/export; explicit warnings about unsupported formatting, tables, comments, sections/footnotes, preserving source before lossy conversion. Build fixtures with headings, lists, emphasis, odd characters and paragraphs; actual roundtrip testing rather than conversion claims.

**Part 004b** finishes only after Stages 5/6: portable versioned project backup containing chapters/accepted content and metadata, approved Story Profiles, active rule settings and author-created rules as policy permits. No raw BYOK keys or unrelated book/account data in backup. Clean restore into isolated authorized disposable account must reconstruct supported state including storage objects if used, handle collisions, corrupt archives, wrong ownership and provenance mapping.

Implement confirmable book/account deletion, retention notices, locally pending drafts/candidates cleanup and documented relation to backups; do not promise deletion beyond tested policy.

**Tests:** supported TXT/DOCX roundtrip, unsupported features warning, bad archive, same-book collision, authorized clean restore, foreign-account denial, deletion/retention and no credentials embedded.

**Exit:** actual clean-restorable book archive plus honest import/export fidelity, not a downloadable mock button.

## Stage 8 — VEL-IMP-007: optional BYOK AI with only two actions (M6)

- Verify chosen OpenRouter downstream pinned models/routes for policy, availability, cost, region and manuscript handling before real-model enablement. No mandatory provider, no silent alternate provider or invented “free” guarantee.
- User supplies **free OR paid** OpenRouter key. Keep key only in session memory with masked UI, not LocalStorage, DB, log, analytics, URL or durable backup. Explicit user-invoked HTTPS transport through authenticated Nest proxy.
- Before each request preview exact selected excerpt + bounded approved book canon + effective rules, recipient/model and cost/limits. No cross-account/book context; no hidden full-book transfer. AI remains OFF default.
- Continue: capture a valid **collapsed caret** at current insertion point and source revision; propose plain text at that exact point (including offset 0 and offset 4), never append chapter end. Validate chapter/editor identity and stale source.
- Rewrite: capture one nonempty contiguous selection *within one paragraph*, exact source snapshot/range/revision; reject detached, unknown, empty, cross-block or stale range; propose only.
- On timeout, revoked key, 401, 429, cancellation or spending cap, preserve accepted text and allow manual writing.
- Tests: consent denied=no outbound text; full request-preview parity; key redaction, correct insertion point, span boundaries/marks, cross-book leakage, provider failures, rate limits and no uncontrolled retries.

**Exit:** only the two permitted AI requests and proposals work, with provider/privacy evidence; not yet author-facing release until Stage 9.

## Stage 9 — VEL-IMP-008: Accept/Reject, stale revision, durable Undo and provenance (M7)

- Create proposal lifecycle and source anchors: pending, proposed, stale, accepted, rejected, cancelled/error. The author reviews original vs alternative, applicable rules, model, cost/recipient/selection and chooses deliberately.
- Reject must leave accepted text/canon intact. Accept commits only intended chapter range via server-side version CAS and idempotency to an immutable new revision; stale/other-account/wrong source must never commit. Editing while request pending must disable stale acceptance without losing manual edits.
- Undo must be a **new compensating accepted revision after reload**, only when the prior accepted proposal is the latest; if later author edits exist, show reconciliation rather than erasing. Source-derived canon candidate must be reevaluated separately on source undo or retcon; no silent fact approval.
- Tests: reject byte-equivalence, double accept, exact-span rich formatting preservation, two-tab conflict, stale response, changed paragraph, wrong owner, lost-ACK acceptance retry, undo after reload, undo after later author edit, unapproved canon unchanged.

**Exit:** safe integrated author decisions, not in-memory-only simulation.

## Stage 10 — VEL-VAL-001: integrated MVP quality, accessibility and recoverability

- Run JRN-001..011 as actual integrated end-to-end tasks (see journey table below), mapping each to source acceptance IDs, commit, test data, browser and evidence.
- Security matrix: RLS direct PostgREST and Nest/Next nested endpoints, guessed book IDs, two-author/book isolation, account switch, sign-out JWT residual access, Storage policies/signed URLs, SSR/auth caching, key/log redaction, backup and export scope, CSRF/CORS and threat model.
- Author data reliability: fail network before/after server commit, unknown acknowledgment, local recovery, two tabs, full DB+Storage backup/clean restore, tested deletion and disaster runbook; record observed restore evidence instead of assuming proposed 24h RPO/48h RTO.
- Accessibility: real keyboard focus, editor label, screen readers/IME/RTL, 1440/900/390 responsive, paste/selection and large synthetic manuscript. Headless tests alone do not prove native assistive technology.
- UX: consenting author studies when environment permits; measure discoverability and failures rather than invent participants or numeric targets. Record issues and rerun on exact code head.
- Separate internal feature-complete status from permission to let real writers upload private manuscripts.

**Exit:** eleven journeys have truthful PASS/FAIL/BLOCKED/NOT_RUN logs, release blockers owned and retested; full feature scope exists on synthetic data.

## Stage 11 — private-pilot decision and protected operations (G_PRIVATE_PILOT)

- Select and document hosting/network/region, secrets storage, TLS/auth-cookie security, RLS+Storage isolation, CSRF/CORS, controlled logs, incident response, account/session/logout behavior and data deletion/retention.
- Resolve or explicitly owner-review and validate mitigation of the **signed-out unexpired JWT/direct PostgREST** risk for real private manuscripts; sign-out UI alone does not revoke valid JWT. Do not claim safety based on only Nest guard tests.
- Exercise encrypted/authorized Auth+DB+Storage clean backup and restore on production-like environment, migration rollback, provider route privacy/terms/cost, rights policy, access review and failure/AI-disable switch.
- Obtain **explicit G_PRIVATE_PILOT** owner decision before collecting real unpublished manuscripts; recruit/consent a small controlled real-writer pilot, measure journeys and correct blockers with retests.

**Exit:** pilot evidence and private author privacy/recovery obligations met, not an automatic public release.

## Stage 12 — first public MVP release decision (G_RELEASE)

- Verify all eight MVP areas and eleven actual integrated journeys, no known accepted-manuscript silent loss/false save/unapproved canon/unauthorized private text leak, real DOCX/backup limits, accessibility and author task evidence.
- Finish operations: production monitoring without logging private prose/keys, migrations/rollback, tested backup/restore, incident and support process, legal/provider/privacy notices, cost/hosting choices and AI kill switch.
- Obtain explicit **G_RELEASE**, then controlled rollout and exact deployed build smoke; monitor failures and keep cosmetic UI refinements on a subsequent backlog.

**Exit:** owner-approved initially public eight-area MVP, not merely working local demo.

## Journey-to-stage verification matrix

| Journey | Primary implementation | Evidence of integrated success |
|---|---|---|
| JRN-001 Start book and switch chapters without losing writing | 001+002+003 | two chapters, edit/reopen/reorder keep stable text and IDs |
| JRN-002 Write normally without AI | 003 | text formatting, clipboard/search/IME and Undo with no key |
| JRN-003 Recover/export manuscript | 003+004 | acknowledgment, lost ACK, compare, DOCX/TXT, clean project restore |
| JRN-004 Manually edit character/storyline | 005 | profile/thread create/edit/reopen with no AI |
| JRN-005 Approve/revise/dismiss profile proposal | 005+008 | valid quote/story time and source reversal |
| JRN-006 Configure rules | 006 | certified catalogue, enable/disable/add/restore, effective rule exclusion |
| JRN-007 Preview consent + Continue | 006+007+008 | selected caret, displayed transfer/cost, proposal and version-safe accept |
| JRN-008 Rewrite, reject, accept, undo | 003+007+008 | one-paragraph span and durable undo with no unrelated mutation |
| JRN-009 Separate prose and canon | 005+008 | accepted prose leaves fact unapproved, source retract safely |
| JRN-010 Edit during pending AI | 003+007+008 | stale response blocked while manual edit survives |
| JRN-011 Isolated accounts and portability | 001–VAL | Alice/Bob denied across all content/endpoints, scoped export/delete |

## Integration and operational test table

| Safety invariant | Focused/unit | Real local DB/API | Browser & private-pilot evidence |
|---|---|---|---|
| Account/book isolation | owner/ID validation | Nest + direct PostgREST + RLS two users | A→B→A cached data, guessed IDs, Storage |
| Save acknowledgment | state machine | transactional CAS/idempotent receipt | dropped ACK, two tabs, crash/reopen |
| Manual writing | Tiptap JSON/marks | revision save/reopen | keyboard, native IME, paste/search |
| Canon | quote/story time | owner+source revision checks | approve/retract/retcon/Undo |
| Rules | source parity/effective selector | persisted scopes | request preview and actual outgoing content |
| AI | caret/span/consent validators | secure authenticated proxy | pinned provider smoke, 401/429/cancel |
| Interchange/backup | format/manifest | clean authorized DB+Storage restore | DOCX/TXT warnings/deletion UX |
| Accessibility | semantic keyboard components | N/A | native screen reader/RTL/390/900/1440 |

Any check not actually executed is NOT_RUN; failing tests are not quietly excluded. No release stage may interpret synthetic Figma/Lovable smoke as product completion.

## Prioritized PR sequence, with owner-review exits

1. IMP-001 (Issue #58 / draft PR #59): verified authenticated Library; A/B ownership and UI account-switch tests.
2. IMP-002: stable chapter CRUD/reorder/notes, nested authorization tests.
3. IMP-003a: actual manual Tiptap editor/format/search/keyboard.
4. IMP-003b: server transactional accepted revision, autosave, loss-aware local recovery and history.
5. IMP-005a/005b: manual profiles, then source-backed candidate canon.
6. IMP-006: certified immutable source rules/author overrides/effective rule exclusion.
7. IMP-004a: TXT/DOCX interchange, loss warnings.
8. IMP-004b: complete owned book backup, clean restore, retention/deletion.
9. IMP-007+008: consented BYOK Continue/Rewrite + durable review/CAS/Undo; prefer controlled small PRs with integrated gated enablement.
10. VAL-001: eleven-journey hardening and full author-data/screen-reader/browser/recovery evidence.
11. PILOT then RELEASE: separate owner gates and tested environment.

IMP-004a and IMP-005/006 may be resequenced or worked in parallel only when schema/source contracts and ownership are stable. Keep separate branches and avoid merging incompatible concurrent modifications.

## Definition of complete

**Internal feature complete:** M1–M8 work on synthetic integrated app and eleven scenarios have reproducible evidence; no known silent loss/false saved/unreviewed canon/cross-owner leak in bounded suites. This is NOT permission to collect private manuscripts.

**Private-pilot ready:** real environment isolation and token issue reviewed/resolved/mitigated, clean restore, legal/provider/rights policy, actual writer consent and **G_PRIVATE_PILOT**.

**Public MVP ready:** owner-reviewed private pilot, complete eight areas, eleven accepted journeys on deployed exact revision, recovery/portability/accessibility/security/operations and **G_RELEASE**.

No release dates or unsupported numeric quality scores are implied. Visual polish may continue after functional slices; author-trust correctness may not be deferred past the relevant feature/pilot gate.

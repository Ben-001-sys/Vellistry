---
id: VEL-MVP-ACCEPTANCE-20261009-001
type: product-acceptance-plan
status: proposed-not-executed
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md — owner-approved eight-area product scope (PR #10)"
  - "docs/requirements/MVP-FEATURE-HORIZON-MAP-2026-10-09.md — 396-ID constrained mapping (PR #10)"
  - "docs/research/R04-FIRST-PILOT-AUTHOR-TRIAL-AND-ACCEPTANCE-PLAN-2026-10-08.md — original proposed author task study (PR #8)"
  - "docs/requirements/PRODUCT-DIRECTION-FROZEN-DEFAULT-GUIDANCE-2026-10-08.md"
  - "docs/requirements/PRODUCT-DIRECTION-LIVE-STORY-PROFILES-2026-10-08.md — owner request (PR #9)"
  - "https://github.com/Ben-001-sys/Vellistry/pull/7 — isolated seven-test Tiptap headless spike"
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
  - R15
  - R16
  - R19
related_adrs:
  - ADR-0003
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
---

# Vellistry MVP — author journeys and measurable acceptance plan v0.1

**Status: SPECIFICATION DRAFT, NOT IMPLEMENTED OR EXECUTED.** The eight-area product target is **owner-approved**, but the behavioral tests, exact thresholds and engineering sequences below are **analyst-proposed acceptance specifications** subject to owner review and real-author evidence. This document does **not** approve a backend, storage structure, authentication vendor, API provider, UI design, cover publishing engine, price or launch date.

## Scope and actors

- **Author**: single authenticated writer; must be able to write without AI, and may add their own AI key after informed consent.
- **System**: editor, manuscript save/recovery, rule selection, profile proposal handling and authorized AI request pipeline. Service boundaries are *not* set.
- **External AI provider**: optional future evaluated integration; no provider is selected or connected by this document.
- **Observer/tester**: verifies behavior with **synthetic fiction** and access-isolated test accounts; no unpublished manuscripts or real credentials in Git.
- **Owner**: approves changed product scope or high-impact trade-offs; individual test results and design proposals are not approval.

### Distinguish the authorities

1. **Accepted manuscript prose** can change through author editing and expressly accepted AI suggestions.
2. **Proposed AI prose** is provisional and must not be inserted as accepted manuscript text without a deliberate accept action.
3. **Candidate profile facts/state changes** can be extracted from accepted prose or proposed AI prose, but are not independently approved canon.
4. **Approved profile state** is author-maintained, source-linked and appropriate to its story time.
5. **Enabled creative guidance** is author-configured (frozen historical defaults, where source-pack provenance is certified, and author additions); disabled rules must be excluded from effective model instructions.

## Required end-to-end author journeys

| ID | Author journey | MVP areas | Inventory trace | Research gates |
|---|---|---|---|---|
| **VEL-JRN-001** | Start a book and move between chapters without losing writing | M1 M2 M3 M8 | 01-004, 01-006, 02-001, 02-015, 02-019 | R05 R15 R16 |
| **VEL-JRN-002** | Write and format normally with no model/account key configured | M2 M3 M8 | 02-001, 02-002, 02-013, 02-017, 02-021 | R05 R16 |
| **VEL-JRN-003** | Close, reopen, recover and export an author's manuscript | M3 M8 | 02-018, 02-019, 14-003, 14-015, 17-015 | R11 R15 R19 |
| **VEL-JRN-004** | Manually create and revise a visible character/storyline profile | M4 M8 | 08-021, 08-022, 08-023, 08-024, 08-025 | R07 R15 |
| **VEL-JRN-005** | After drafting, inspect and approve/revise/dismiss candidate profile changes | M2 M4 M7 | 08-026, 08-027, 09-025, 09-027, 09-030 | R07 R10 R19 |
| **VEL-JRN-006** | Browse, disable, restore and add an author creative rule | M5 M8 | 04-001..009; 04-011, 04-023 | R01 R06 |
| **VEL-JRN-007** | Connect an evaluated provider, preview context and request Continue | M5 M6 M7 M8 | 05-007, 06-001, 06-002, 11-001, 11-002 | R06 R08 R15 |
| **VEL-JRN-008** | Select prose, obtain a Rewrite suggestion, reject or accept it, and undo | M2 M5 M6 M7 | 05-008, 11-001..011 (bounded) | R05 R06 R08 R10 |
| **VEL-JRN-009** | Accept AI prose and review separate new profile candidates | M4 M6 M7 | 08-026, 09-026, 09-027, 09-029 | R07 R10 |
| **VEL-JRN-010** | Make edits while an AI request is pending, then handle stale suggestions safely | M2 M3 M7 | 11-011, 11-012; 02-017..019 | R05 R10 R19 |
| **VEL-JRN-011** | Verify two accounts/books remain isolated and author data can be retrieved/deleted | M3 M8 | 17-003, 17-004, 17-013..017 | R14 R15 R19 |

The source inventory names above are shorthand `VEL-FEAT-XX-NNN` references, **not evidence that entire ranges are approved as full features**. Apply `MVP-LIMITED` definitions from the accepted-scope map. Some journeys share a capability by design.

## Functional acceptance specifications (Given / When / Then)

Tests are **proposed for future automation/manual verification**. `MUST` below expresses a *candidate release contract*, not a tested claim. None is marked passed.

### M1 — Book/chapter organization

- **ACC-M1-01**: Given an authenticated author with no books, when they create a book and two chapters, then each item appears in that author's book navigation and can be reopened.
- **ACC-M1-02**: Given three differently titled chapters with saved content, when the author reorders them, then chapter order changes **without** moving prose to the wrong chapter or discarding an existing edit.
- **ACC-M1-03**: Given a note attached to a chapter, when the author navigates elsewhere and returns, then the note remains separate from accepted manuscript text.

### M2 — Editor operates fully without AI

- **ACC-M2-01**: Given no connected AI provider, when the author types 500+ invented words with paragraphs, headings, emphasis and basic lists, then the editor remains functional and does not display a forced model connection.
- **ACC-M2-02**: Given a formatted passage, when the author selects/copies/pastes, edits and uses undo/redo, then substantive text and supported semantic formatting remain intact.
- **ACC-M2-03**: Given a meaningful multi-chapter fixture, when the author searches for a phrase and uses keyboard navigation, then the intended result/selection is reachable without corrupting content.
- **ACC-M2-04**: Given real-browser tests across agreed target platforms, when users type, use IME/composition, move the caret and interact with screen-reader/keyboard controls, then significant focus, input loss and accessibility failures are documented and release-blocking defects resolved.

### M3 — Durable, portable author content

- **ACC-M3-01**: Given editing content and a visible save state, when a confirmed save completes and the document is reopened, then the editor restores all **supported** content and marks; false 'saved' indicators are release-blocking defects.
- **ACC-M3-02**: Given a simulated connection interruption during save, when service returns, then either the edits are recoverable or the app visibly identifies uncommitted edits and offers recovery; it must not silently acknowledge a write that was not durable.
- **ACC-M3-03**: Given a book with chapters, manually approved profiles and writing-rule settings, when a portable project backup is exported and restored into an authorized clean account/test environment, then the supported accepted state is reconstructed without cross-book leakage.
- **ACC-M3-04**: Given well-defined synthetic DOCX and TXT fixtures, when they are imported and exported, then text and **supported** formatting are preserved; unsupported features generate an accurate warning before destructive loss. Perfect Microsoft Word fidelity is *not* claimed.
- **ACC-M3-05**: Given a deleted book/account, when authorized deletion runs, then the removal/retention behavior matches the documented policy and export-backup obligations; no unexplained retention claims.

### M4 — Living profiles and approved story state

- **ACC-M4-01**: Given an AI-off session, when an author manually creates a character and a plot-thread profile, then both are visible next to/in the writing workspace and remain editable after reopen.
- **ACC-M4-02**: Given an accepted scene explicitly reporting a character injury, when the proposed chapter/scene analysis runs, then a **candidate** profile change appears with identifiable source passage; the current approved profile remains unchanged until review.
- **ACC-M4-03**: Given a suggested change, when the author edits, accepts or dismisses it, then only the approved value becomes current canon; dismissed changes do not affect subsequent generation context.
- **ACC-M4-04**: Given character state that changes at different scene dates, when a later scene requests a profile, then the displayed context respects the relevant story-time boundary (without claiming exhaustive chronology logic).
- **ACC-M4-05**: Given an edited/deleted source scene or deliberate retcon, when an old candidate's evidence becomes stale, then Vellistry requires reassessment and preserves traceable provenance rather than silently reasserting obsolete facts.
- **ACC-M4-06**: Given an unaccepted model-generated draft, when profile extraction is attempted, then **no canonical update** occurs regardless of apparent detail accuracy.

### M5 — Source-preserved author rules

- **ACC-M5-01 [R01-GATED]**: Given the *owner-certified unchanged frozen guidance pack*, when a new account's Rules Studio initializes, then the genuine default configuration is initially enabled and the displayed IDs/descriptions are source-traceable. If R01 is unresolved, test only conspicuously labelled simulated defaults and **do not claim genuine completion**.
- **ACC-M5-02**: Given a default rule, when an author disables and later restores it, then the visible active-state display and saved settings agree.
- **ACC-M5-03**: Given an author-created book-scoped rule, when the author previews one book's request then another unrelated book's request, then the rule appears **only where applicable**.
- **ACC-M5-04**: Given an intentionally disabled creative rule, when a new AI request is assembled, then that rule is absent from the **complete effective request**, including stale summaries and opaque prior-generation context; no hidden reintroduction.
- **ACC-M5-05**: Given deliberate artistic exceptions or conflicting instructions, when the author views the applied guidance, then the exception/scope is visible and the model's *obedience* is evaluated separately from deterministic instruction inclusion.

### M6 — Optional bounded Continue/Rewrite

- **ACC-M6-01 [R08-GATED]**: Given no AI connection, when the author creates, edits, saves and exports manuscript data, then no provider account is required.
- **ACC-M6-02 [R08-GATED]**: Given a valid explicitly user-authorized connection to the evaluated provider, when requesting Continue, then the displayed preview identifies selected context, rule applicability and external text transmission and author can control cost exposure.
- **ACC-M6-03**: Given selected prose and the same eligible provider, when requesting Rewrite, then the model's result is held as **unaccepted alternative text** rather than immediately replacing the selected passage.
- **ACC-M6-04**: Given a provider timeout, error, revoked key or spending cap, when AI cannot finish, then the editor remains responsive and existing accepted prose is unaffected; the error is visible.

### M7 — Explicit acceptance and stale-change safety

- **ACC-M7-01**: Given an AI proposal, when author selects Reject, then original prose and approved profiles are byte-equivalent after normalization of irrelevant metadata to their pre-proposal state.
- **ACC-M7-02**: Given author selects Accept on a current proposal, then only the intended document range changes in a single undoable operation, with unrelated text/formatting remaining intact.
- **ACC-M7-03**: Given the author revises the source passage or splits paragraphs while generation is pending, when a stale response arrives, then Vellistry must **not silently apply it** even if numeric offsets appear plausible.
- **ACC-M7-04**: Given the author accepts generated prose mentioning a new story fact, then that prose acceptance and its separately reviewed **canon/profile proposal** remain distinct decisions.
- **ACC-M7-05**: Given a later editorial inquiry, when viewing a generated revision, then provenance makes its provider/model, applicable writing-rule state, submitted source selection, and author decision reasonably inspectable subject to privacy retention controls.

### M8 — Trust, isolation and usability

- **ACC-M8-01**: Given Author A and Author B with separate books, when A attempts to access B's manuscript, approved profiles, exports or API-key state directly or through nested document endpoints, then unauthorized read/write is denied; tests cover guessed IDs and cross-account mutation.
- **ACC-M8-02**: Given manuscript text is about to be sent to an external AI provider, when the author has not permitted that provider/task transfer, then Vellistry does not send the manuscript.
- **ACC-M8-03**: Given secrets, logs, screenshots and backups, when an audit runs, then API credentials and private content are not exposed to unauthorized users or repository artifacts.
- **ACC-M8-04**: Given a keyboard-only writer, when navigating the primary editor, chapter list, profile panel, Rules Studio and accept/reject actions, then primary tasks can be completed without mouse-only controls.
- **ACC-M8-05**: Given degraded provider/network/storage states, when the application reports progress, then it does not falsely claim a successful write/generation/backup.

## Negative scenarios that must be explicitly covered

| Test ID | Failure injected | Minimum safe behavior |
|---|---|---|
| **NEG-01** | User makes two fast chapter edits and opens another chapter during pending save | Do not drop or overwrite either unsaved change; show true save/recovery state. |
| **NEG-02** | Model returns after the selected paragraph was restructured | Hold response for manual review; never apply at stale numeric offsets. |
| **NEG-03** | AI proposes a new character fact from a rejected alternative | Do not alter canon or effective future writing context. |
| **NEG-04** | Author disables a rule immediately before a new generation | Excluded instruction absent from current request, including caches. |
| **NEG-05** | Another book has a similarly named character or rule | Do not leak facts or settings across unrelated books/accounts. |
| **NEG-06** | Character already knows something only in a later scene | Earlier scene context must not be silently contaminated by later facts. |
| **NEG-07** | DOCX includes unsupported sections/tables/marks | Warn accurately, preserve original input, do not claim lossless conversion. |
| **NEG-08** | Service crashes after displaying 'Saved' | Recover committed data; treat false save acknowledgement as blocking defect. |
| **NEG-09** | API key is revoked or model rate-limited | No manuscript/canon mutation or uncontrolled retries/charges. |
| **NEG-10** | Person exports/deletes a book with pending profile suggestions | Preserve/export only intended data classes and follow retention/deletion policy. |

## Proposed evidence classification and release gates

- **Test results** must use `NOT_RUN`, `PASS`, `FAIL`, `BLOCKED` with exact build/ref, fixture, steps, artifacts, reviewer and observed effect; no simulated test is counted as production acceptance.
- **Zero known silent accepted-manuscript loss, false-save acknowledgement, unauthorized accepted revision, invisible source-rule activation, unauthorized manuscript leak or unreviewed canon promotion** in the defined bounded acceptance suite; investigate/retest every occurrence before a public release claim.
- **R02 usability criteria** (discoverability, time to complete tasks, panel burden, author confidence), **R05 real-browser latency**, **R07 extraction accuracy**, **R06 model quality**, **R11 DOCX fidelity** and **R08 cost** require observed baselines and explicit owner-set thresholds; do not invent passing numeric targets.
- **Release readiness** requires representative actual authors and secured environment; a passing mock or headless Tiptap test alone is insufficient.

## No unapproved commitments

These journeys encode the accepted **product outcomes**, not selected routes/components/database tables/jobs/schema/framework or paid vendor features. A future specification may revise candidate acceptance details after R02 research, but it cannot silently remove an accepted area or weaken core author protection. Public-release clearance and implementation architecture remain separately gated.

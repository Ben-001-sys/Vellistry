---
id: VEL-SPEC-001
title: Author-owned chapter draft and safe save — bounded behavioral contract
type: engineering-spec
status: proposed
created_at: 2026-10-09
updated_at: 2026-10-09
owner: project_owner
version: 0.1.0
mvp_areas:
  - M1
  - M2
  - M3
  - M8
source_refs:
  - path: docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md
    authority: accepted-product-scope
  - path: docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
    authority: proposed-acceptance-plan
feature_refs:
  - VEL-FEAT-01-004
  - VEL-FEAT-01-006
  - VEL-FEAT-02-001
  - VEL-FEAT-02-018
  - VEL-FEAT-02-019
journey_refs:
  - VEL-JRN-001
  - VEL-JRN-002
  - VEL-JRN-003
acceptance_refs:
  - ACC-M1-01
  - ACC-M2-01
  - ACC-M3-01
  - ACC-M3-02
criteria:
  - SC-001
  - SC-002
  - SC-003
  - SC-004
  - SC-005
  - SC-006
  - SC-007
  - SC-008
dependencies:
  - "Authenticated author boundaries and actual persistence architecture: not selected"
  - "Browser editor validation for real Tiptap 3 keyboard, IME, paste, accessibility: pending"
  - "Durable backup/restore and deletion policies: pending"
non_goals:
  - "Select Next.js, NestJS, Vite, database schema, auth vendor, or deployment platform"
  - "Release a production authoring system or accept real private manuscripts"
  - "Introduce a provider/model requirement or make AI necessary for writing"
approval_required:
  - "Owner approves engineering specification before binding implementation tasks"
  - "Owner approves any architecture/security or scope changes in their proper decision records"
---

# VEL-SPEC-001 — Chapter drafting, save state, recovery

**Status: PROPOSED SPECIFICATION, NOT IMPLEMENTED.** The owner approved the M1/M2/M3/M8 *product scope* through `VEL-PRODUCT-SCOPE-20261009-001`. The detailed scenarios here are engineering proposals derived from the source-listed journeys and acceptance-plan draft. They are **not** separately approved implementation details, established service architecture, or evidence of test execution.

## Problem and bounded author journey

An authenticated solo author can create a book and chapter, write and edit independently of any AI connection, leave and return, and determine whether their changes are saved or still pending. A visible success state may reflect **only an acknowledged durable save**. A connection interruption must not silently discard unsaved work or falsely indicate that it is stored.

This first slice concerns **supported manuscript blocks and marks** only. It does not promise general Microsoft Word compatibility, real-time collaboration, offline-first editing, publishing layout, or AI assistance.

## Inputs, outputs and invariants

- **Inputs:** a synthetic authenticated author, owned book and chapter, supported manuscript document, expected persisted revision, and actions such as type, save, navigate, reopen, interrupt, retry.
- **Observable outputs:** the chapter in navigation, rendered accepted content, explicit `unsaved` / `saving` / `saved` / `error` user-facing status, and a durable revision or intelligible conflict indicator.
- **Invariant A — ownership:** no cross-author or cross-book reads/writes to private chapter contents. A caller-supplied author ID cannot establish authorization.
- **Invariant B — accepted content:** saved manuscript content may change only through the authorized author's edits or explicitly accepted changes. No optional AI integration is required.
- **Invariant C — honest durability:** `saved` must not be shown for an unacknowledged or failed write.
- **Invariant D — stale write safety:** if a save is based on an obsolete persisted version, it must not silently overwrite newer accepted content.
- **Invariant E — user recoverability:** interruption must leave either verified durable content or a visible pending/recovery path; do not claim automatic offline persistence before it exists.
- **Invariant F — no architecture implied:** event sourcing, PostgreSQL, HTTP shape, frontend framework, editor UI components, or cloud vendor are not implied by these behavioral guarantees.

## Acceptance scenarios

### SC-001 — Author creates and reopens a chapter

**Given** an authenticated synthetic author without a book, **when** the author creates one book and two chapters, **then** both appear in that author's navigation and reopening either restores its own saved manuscript content.

Source: `ACC-M1-01` (proposed acceptance plan), within owner-approved M1.

### SC-002 — Writing works with no AI provider

**Given** an author with no configured AI provider or key, **when** the author edits a chapter using paragraphs, headings, emphasis and a basic list, **then** the editor permits writing and local editing functions without demanding an AI connection.

Source: `ACC-M2-01` (proposed acceptance plan), within owner-approved M2.

### SC-003 — Saved indication tracks acknowledged persistence

**Given** unsaved changes and a visible save indicator, **when** the persistence operation confirms the exact supported revision as stored and the author reopens the chapter, **then** supported text and marks are restored and `saved` is shown only after durable acknowledgment.

Source: `ACC-M3-01` (proposed acceptance plan), within owner-approved M3.

### SC-004 — Interrupted save does not produce false success

**Given** edited content and an interrupted or failed save, **when** the persistence operation cannot confirm durability, **then** the UI must not claim `saved`; it must identify outstanding changes/error or provide an actually tested recoverable copy.

Source: `ACC-M3-02` (proposed acceptance plan), within owner-approved M3.

### SC-005 — Stale revision cannot overwrite recent work

**Given** two synthetic editing clients for one owned chapter, with client B saving a newer revision first, **when** client A tries to save a stale revision, **then** newer persisted content is preserved and A receives an intelligible conflict/retry outcome rather than silent overwrite.

Source: author-data safety implication of approved M3/M8 and proposed M3 interruption/safety work. **This specific client-conflict flow is an analyst-proposed extension**, not an individually approved product feature.

### SC-006 — Cross-author access denied

**Given** synthetic authors A and B and A-owned chapter, **when** B attempts to read, modify or retrieve it using guessed identifiers or a forged author parameter, **then** no private chapter content is disclosed or changed.

Source: owner-approved M8 privacy/isolation boundary; independent implementation mechanism undecided.

### SC-007 — Chapter content does not leak across books

**Given** one author owning two books with similarly named chapters, **when** the author saves and reopens one chapter, **then** the other book/chapter's accepted content remains unchanged, and chapter selection does not reinterpret the target by title alone.

Source: owner-approved M1/M3/M8; negative isolation scenario proposed for engineering evidence.

### SC-008 — Draft evidence remains advisory

**Given** a development agent receives this spec plus the source documents, **when** it proposes storage routes, offline caching or an auth framework, **then** those are clearly labeled **PROPOSAL**, never rewritten as accepted platform decisions or working features without owner approval and tests.

Source: `PROJECT-CONSTITUTION.md` and `SOURCE-OF-TRUTH.md`; Stage 3/4 knowledge controls.

## Test strategy and required evidence

Use entirely **invented chapter prose and test accounts**. First test the above scenarios as a **technology-neutral contract** in a deterministic model; then repeat them against a selected implementation adapter, after the owner approves the architecture. A passing mock does not establish a secure or durable production implementation.

For each SC-ID, capture: fixture, exact action, expected result, observed result, negative variant where applicable, revision/ownership evidence, pass/fail/untested status, commit SHA and runnable test path. The current acceptance state for **all eight** scenarios is **NOT TESTED**.

## Agent handoff and scope protections

1. Prepare an immutable `VEL-CP-0002` using `VEL-TASK-0002` from the current approved MVP scope and this proposed spec; do **not** repurpose the old `VEL-CP-0001` historical editor audit.
2. If implementing a test model, use synthetic fixtures, no private manuscripts, no API key, no deployment, and keep framework choices open.
3. Report through an ExecutionBundle: **FACT** (actual files/results), **INTERPRETATION** (impact), **PROPOSAL** (changes requiring owner approval). Include unresolved negative tests.
4. Do not interpret Stage 3 Cursor's historical `VEL-REQ-002` as a veto of the accepted M1–M8 scope.

## Acceptance for this specification record

- The owner reviews the mapping to accepted product scope and understands that source acceptance checks remain **proposed**.
- All eight SC IDs trace to at least one accepted approved area or clearly named proposed extension.
- The validation script can reject missing source links, duplicate SC IDs and mismatched scenario sections.
- Nothing in this record claims the application has passed any product acceptance scenario.

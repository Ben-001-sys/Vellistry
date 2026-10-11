---
id: VEL-PLAN-01-149-CROSSWALK-20261011-001
title: PLAN-01 — all 149 included feature IDs mapped to slices and unique proposed tests
type: feature-level-implementation-crosswalk
status: source-reconciled-implementation-checks-proposed
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.2.0
sources:
  - docs/requirements/MVP-FEATURE-HORIZON-MAP-2026-10-09.md
  - docs/features/FEATURE-INVENTORY.md
  - docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
---

# PLAN-01: 149-ID source-to-slice and acceptance crosswalk

**Verification of source count:** the accepted horizon map contains **396 distinct IDs**; this document includes exactly **149 `MVP` or `MVP-LIMITED` records** (78 full + 71 limited), each once, and excludes 247 POST-MVP-UNSCHEDULED records from implementation assignments. Distribution: M1=8, M2=16, M3=12, M4=24, M5=23, M6=20, M7=16, M8=30.

**Columns grounded directly in accepted source:** feature ID, original catalog feature name, `MVP|MVP-LIMITED` status, M1–M8 assignment, original independent `DIRECTED|OWNER-INTENT|CANDIDATE|TECH-SELECTED` source-authority marker. **New and not separately owner-approved:** implementation task `IMP-...`, unique per-ID `T-VEL-...` test ID, assigned existing ACC-M acceptance reference and brief bounded assertion. `T-...` is a **planned test**, not an already authored executable test. The ACC-M references are proposed source acceptance cases, not tests already run. All result statuses are **NOT_RUN**.

**Important interpretation:** some original catalog names describe broad functionality; `MVP-LIMITED` includes only the explicit check and the accepted narrow area boundary. All **149 rows now contain a feature-specific proposed observable behavior**. The future Cursor task must still instantiate each test identity into executable Given/When/Then fixtures, positive and negative cases and run evidence; these descriptions are not executable tests. The accepted original feature catalog remains unchanged.

## All mapped IDs

| ID | Original feature name | Horizon | Area | Original source status | Primary future slice | Per-ID proposed test; inherited acceptance ref | Narrow observable requirement (new planning interpretation) | Status |
|---|---|---|---|---|---|---|---|---|
| `VEL-FEAT-01-002` | Multiple projects | MVP | M1 | OWNER-INTENT | `IMP-001` | `T-VEL-FEAT-01-002`; ACC-M1-01 | Author A creates two independent books; author B sees neither | NOT_RUN |
| `VEL-FEAT-01-004` | Book creation and management | MVP | M1 | OWNER-INTENT | `IMP-001` | `T-VEL-FEAT-01-004`; ACC-M1-01 | Create/reopen/rename book; owner identity unchanged | NOT_RUN |
| `VEL-FEAT-01-005` | Book structure | MVP-LIMITED | M1 | CANDIDATE | `IMP-002` | `T-VEL-FEAT-01-005`; ACC-M1-02 | Show simple book→chapter structure; no series graph | NOT_RUN |
| `VEL-FEAT-01-006` | Chapter and scene creation | MVP | M1 | CANDIDATE | `IMP-002` | `T-VEL-FEAT-01-006`; ACC-M1-02 | Create chapter with stable UUID and reopen correct content | NOT_RUN |
| `VEL-FEAT-01-008` | Chapter reorder | MVP-LIMITED | M1 | CANDIDATE | `IMP-002` | `T-VEL-FEAT-01-008`; ACC-M1-02 | Reorder three chapters; no manuscript or note follows old position | NOT_RUN |
| `VEL-FEAT-01-018` | Manuscript versus notes separation | MVP | M1 | CANDIDATE | `IMP-002` | `T-VEL-FEAT-01-018`; ACC-M1-03 | Planning note remains separate from accepted manuscript JSON | NOT_RUN |
| `VEL-FEAT-02-001` | Non-AI writing | MVP | M2 | DIRECTED | `IMP-003a` | `T-VEL-FEAT-02-001`; ACC-M2-01 | Author writes without API key or model/provider connection | NOT_RUN |
| `VEL-FEAT-02-002` | Rich-text editing | MVP-LIMITED | M2 | OWNER-INTENT | `IMP-003a` | `T-VEL-FEAT-02-002`; ACC-M2-02 | Create/edit styled paragraphs using supported semantic Tiptap nodes; serialize and reopen without text/mark loss | NOT_RUN |
| `VEL-FEAT-02-003` | Bold, italic and underline | MVP-LIMITED | M2 | CANDIDATE | `IMP-003a` | `T-VEL-FEAT-02-003`; ACC-M2-02 | Selected text visibly gains/removes supported bold/italic/underline marks | NOT_RUN |
| `VEL-FEAT-02-008` | Headings and style hierarchy | MVP-LIMITED | M2 | CANDIDATE | `IMP-003a` | `T-VEL-FEAT-02-008`; ACC-M2-02 | Apply supported Heading1–3 and body styles; reopen document with correct semantic heading hierarchy | NOT_RUN |
| `VEL-FEAT-02-010` | Lists | MVP-LIMITED | M2 | CANDIDATE | `IMP-003a` | `T-VEL-FEAT-02-010`; ACC-M2-02 | Insert ordered/bulleted list with multiple items; save/reopen preserves item sequence and structure | NOT_RUN |
| `VEL-FEAT-02-013` | Cut, copy, paste and selection | MVP | M2 | CANDIDATE | `IMP-003a` | `T-VEL-FEAT-02-013`; ACC-M2-02 | Select and cut/copy/paste mixed formatted prose; original and inserted supported marks remain correct | NOT_RUN |
| `VEL-FEAT-02-014` | Find and replace | MVP-LIMITED | M2 | CANDIDATE | `IMP-003a` | `T-VEL-FEAT-02-014`; ACC-M2-01 | Find authored text using keyboard; no selection corruption; broad replace deferred | NOT_RUN |
| `VEL-FEAT-02-015` | Heading and chapter navigation | MVP | M2 | CANDIDATE | `IMP-002+003a` | `T-VEL-FEAT-02-015`; ACC-M2-03 | Select a heading/chapter from rail or keyboard; correct stable chapter opens and unsaved text stays recoverable | NOT_RUN |
| `VEL-FEAT-02-016` | Keyboard shortcuts | MVP | M2 | CANDIDATE | `IMP-003a` | `T-VEL-FEAT-02-016`; ACC-M2-04 | Activate bold/italic, selection and undo keyboard shortcuts; no command disrupts editor focus/IME | NOT_RUN |
| `VEL-FEAT-02-017` | Undo and redo | MVP | M2 | CANDIDATE | `IMP-003a` | `T-VEL-FEAT-02-017`; ACC-M2-02 | Manual editor Undo/Redo preserves other chapters | NOT_RUN |
| `VEL-FEAT-02-018` | Autosave feedback | MVP | M2 | CANDIDATE | `IMP-003b` | `T-VEL-FEAT-02-018`; ACC-M3-01/02 | Saved appears only on committed revision receipt; unknown ACK is not Saved | NOT_RUN |
| `VEL-FEAT-02-019` | Save, reopen and recovery | MVP | M2 | CANDIDATE | `IMP-003b` | `T-VEL-FEAT-02-019`; ACC-M3-01/02 | Reload returns accepted text or visible recoverable local candidate | NOT_RUN |
| `VEL-FEAT-02-020` | Word and character counts | MVP | M2 | CANDIDATE | `IMP-003a` | `T-VEL-FEAT-02-020`; ACC-M2-01 | Adding/removing paragraph words recalculates counts; omit control markup and avoid counting notes as prose | NOT_RUN |
| `VEL-FEAT-02-021` | Distraction-free writing | MVP | M2 | CANDIDATE | `IMP-003a` | `T-VEL-FEAT-02-021`; ACC-M2-01 | Enter distraction-free mode then return; focus and authored text persist without changing revision | NOT_RUN |
| `VEL-FEAT-02-022` | Document revision history | MVP-LIMITED | M2 | CANDIDATE | `IMP-003b` | `T-VEL-FEAT-02-022`; ACC-M3-01/02 | History shows retained accepted revision; restore cannot silently erase newer edit | NOT_RUN |
| `VEL-FEAT-02-026` | Tiptap 3 / ProseMirror foundation | MVP | M2 | TECH-SELECTED | `IMP-003a` | `T-VEL-FEAT-02-026`; ACC-M2-02 | Tiptap v3 editor serializes/deserializes supported JSON without mark loss | NOT_RUN |
| `VEL-FEAT-03-001` | Idea capture | MVP-LIMITED | M1 | CANDIDATE | `IMP-002` | `T-VEL-FEAT-03-001`; ACC-M1-03 | Author captures a brief idea in book/chapter note and reopens it | NOT_RUN |
| `VEL-FEAT-03-006` | Chapter planning | MVP-LIMITED | M1 | CANDIDATE | `IMP-002` | `T-VEL-FEAT-03-006`; ACC-M1-03 | Create and edit chapter plan without changing accepted scene text | NOT_RUN |
| `VEL-FEAT-04-001` | Preserved fiction default source | MVP | M5 | DIRECTED | `IMP-006` | `T-VEL-FEAT-04-001`; ACC-M5-01 | Preserve hash and source ID of every certified frozen rule body | NOT_RUN |
| `VEL-FEAT-04-002` | Default guidance enabled initially | MVP | M5 | DIRECTED | `IMP-006` | `T-VEL-FEAT-04-002`; ACC-M5-01 | 130 primary aliases ON and four extras OFF only when source pack activated | NOT_RUN |
| `VEL-FEAT-04-003` | Inspect active defaults | MVP | M5 | DIRECTED | `IMP-006` | `T-VEL-FEAT-04-003`; ACC-M5-02 | Display only certified default aliases with source IDs, inherited ON/OFF state and version in Rule inspector | NOT_RUN |
| `VEL-FEAT-04-004` | Disable a default rule | MVP | M5 | DIRECTED | `IMP-006` | `T-VEL-FEAT-04-004`; ACC-M5-02 | Disable an inherited certified default for a book; effective preview omits it after reload | NOT_RUN |
| `VEL-FEAT-04-005` | Restore disabled defaults | MVP | M5 | DIRECTED | `IMP-006` | `T-VEL-FEAT-04-005`; ACC-M5-04 | Reset one overridden default to inherited active state; preview/persistence agree across reload | NOT_RUN |
| `VEL-FEAT-04-006` | Add personal writing rules | MVP | M5 | DIRECTED | `IMP-006` | `T-VEL-FEAT-04-006`; ACC-M5-03 | Create a book-scoped author rule with editable text; reopen it without mutating source guidance | NOT_RUN |
| `VEL-FEAT-04-007` | Enable or disable custom rules | MVP | M5 | DIRECTED | `IMP-006` | `T-VEL-FEAT-04-007`; ACC-M5-03 | Toggle an author-created rule ON/OFF; disabled text absent from subsequent generated request | NOT_RUN |
| `VEL-FEAT-04-008` | Book and workspace scoping | MVP | M5 | DIRECTED | `IMP-006` | `T-VEL-FEAT-04-008`; ACC-M5-03 | Workspace rule applies across owned books; book override changes only selected book and preserves sibling book | NOT_RUN |
| `VEL-FEAT-04-009` | Creative exceptions | MVP | M5 | DIRECTED | `IMP-006` | `T-VEL-FEAT-04-009`; ACC-M5-05 | Author marks a visible rule exception and sees changed effective rule context without deleting original | NOT_RUN |
| `VEL-FEAT-04-010` | No hidden disabled instruction | MVP | M5 | DIRECTED | `IMP-006+007` | `T-VEL-FEAT-04-010`; ACC-M5-04 | Disabled rules absent from full request and cached context | NOT_RUN |
| `VEL-FEAT-04-011` | AI-off authoring | MVP | M5 | DIRECTED | `IMP-006` | `T-VEL-FEAT-04-011`; ACC-M5-02 | Create/edit personal rules when no model key is attached and without any outbound model call | NOT_RUN |
| `VEL-FEAT-04-012` | Rule titles and descriptions | MVP | M5 | CANDIDATE | `IMP-006` | `T-VEL-FEAT-04-012`; ACC-M5-02 | Rule inspector shows source-traceable original title/description without synthesizing source prose | NOT_RUN |
| `VEL-FEAT-04-015` | Rule categories | MVP | M5 | CANDIDATE | `IMP-006` | `T-VEL-FEAT-04-015`; ACC-M5-02 | Filter certified rule list by each original domain/category; resulting rows retain immutable IDs | NOT_RUN |
| `VEL-FEAT-04-016` | Rule search and filters | MVP | M5 | CANDIDATE | `IMP-006` | `T-VEL-FEAT-04-016`; ACC-M5-02 | Search source IDs and titles, clear filter and restore full catalog without changing any toggle | NOT_RUN |
| `VEL-FEAT-04-017` | Duplicate and edit personal rules | MVP | M5 | CANDIDATE | `IMP-006` | `T-VEL-FEAT-04-017`; ACC-M5-03 | Duplicate personal rule into editable owned copy, then edit copy; original immutable/default unchanged | NOT_RUN |
| `VEL-FEAT-04-023` | Rule priority and exception handling | MVP-LIMITED | M5 | CANDIDATE | `IMP-006` | `T-VEL-FEAT-04-023`; ACC-M5-05 | Visible scope/exception precedence respected deterministically | NOT_RUN |
| `VEL-FEAT-04-024` | Effective-request preview | MVP | M5 | CANDIDATE | `IMP-006+007` | `T-VEL-FEAT-04-024`; ACC-M5-02 | Request preview matches actual enabled task-relevant guidance | NOT_RUN |
| `VEL-FEAT-04-025` | Contextual rule selection | MVP-LIMITED | M5 | CANDIDATE | `IMP-006+007` | `T-VEL-FEAT-04-025`; ACC-M5-04 | Only task-relevant subset selected, not blanket 130-page injection | NOT_RUN |
| `VEL-FEAT-05-006` | Continue from selection | MVP-LIMITED | M6 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-05-006`; ACC-M6-03 | Continue at collapsed caret offset 4, never at chapter end | NOT_RUN |
| `VEL-FEAT-05-008` | Rewrite selected prose | MVP-LIMITED | M6 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-05-008`; ACC-M6-03 | Rewrite only exact nonempty contiguous within-paragraph span | NOT_RUN |
| `VEL-FEAT-05-018` | Task-specific context | MVP-LIMITED | M6 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-05-018`; ACC-M6-02 | Actual sent excerpt/canon/rules match consent preview | NOT_RUN |
| `VEL-FEAT-05-019` | Genre and voice direction | MVP-LIMITED | M6 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-05-019`; ACC-M6-02 | Optional author genre/voice instruction appears in consented preview only for selected action/book | NOT_RUN |
| `VEL-FEAT-05-020` | Generation progress | MVP-LIMITED | M6 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-05-020`; ACC-M6-02 | Show in-progress/error without changing accepted prose | NOT_RUN |
| `VEL-FEAT-05-021` | Cancel or retry | MVP-LIMITED | M6 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-05-021`; ACC-M6-04 | Cancel pending Continue/Rewrite and retry only after explicit new request; accepted manuscript unchanged | NOT_RUN |
| `VEL-FEAT-05-022` | Explicit AI-off operation | MVP | M6 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-05-022`; ACC-M6-01 | Manual writing remains usable with AI OFF | NOT_RUN |
| `VEL-FEAT-06-001` | Supported AI connections | MVP-LIMITED | M6 | OWNER-INTENT | `IMP-007` | `T-VEL-FEAT-06-001`; ACC-M6-02 | Only verified/pinned OpenRouter downstream model options appear; invalid or unverified route unavailable | NOT_RUN |
| `VEL-FEAT-06-002` | User-provided API keys | MVP | M6 | OWNER-INTENT | `IMP-007` | `T-VEL-FEAT-06-002`; ACC-M6-02 | Key from author free-or-paid account is session-memory only | NOT_RUN |
| `VEL-FEAT-06-003` | Choose AI model | MVP-LIMITED | M6 | OWNER-INTENT | `IMP-007` | `T-VEL-FEAT-06-003`; ACC-M6-02 | Pinned actual downstream model ID selected, no hidden fallback | NOT_RUN |
| `VEL-FEAT-06-004` | Connection setup and testing | MVP | M6 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-06-004`; ACC-M6-02 | Connection test cannot send private story text without consent | NOT_RUN |
| `VEL-FEAT-06-005` | Credentials rotation and deletion | MVP | M6 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-06-005`; ACC-M6-02 | Key rotation/disconnection removes transient key without story loss | NOT_RUN |
| `VEL-FEAT-06-008` | Estimated token usage | MVP-LIMITED | M6 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-06-008`; ACC-M6-02 | Before consent display estimated tokens with uncertainty and recipient; never present estimate as billed result | NOT_RUN |
| `VEL-FEAT-06-009` | Recorded usage and cost | MVP-LIMITED | M6 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-06-009`; ACC-M6-04 | After response display provider-reported or clearly estimated usage/cost without logging manuscript text | NOT_RUN |
| `VEL-FEAT-06-013` | Request cancel and retry | MVP | M6 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-06-013`; ACC-M6-04 | Cancellation/retry does not cause automatic duplicate provider call | NOT_RUN |
| `VEL-FEAT-06-014` | Provider failures and rate limits | MVP | M6 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-06-014`; ACC-M6-04 | 401/429/timeout preserves accepted manuscript and useful error | NOT_RUN |
| `VEL-FEAT-06-015` | Per-author spending ceilings | MVP-LIMITED | M6 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-06-015`; ACC-M6-04 | A configured bounded request/spend cap rejects excess prospective calls without harming manual writing | NOT_RUN |
| `VEL-FEAT-06-016` | Expensive operation confirmation | MVP-LIMITED | M6 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-06-016`; ACC-M6-02 | When estimated operation exceeds cap/warning, require deliberate confirmation or refuse request before transfer | NOT_RUN |
| `VEL-FEAT-06-018` | Model version provenance | MVP | M6 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-06-018`; ACC-M6-02 | Suggestion records pinned route/model version without raw API key | NOT_RUN |
| `VEL-FEAT-06-019` | Disconnect without data loss | MVP | M6 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-06-019`; ACC-M6-02 | Disconnect key during editing; manual book/chapters/profiles/export still work without saved-key recovery | NOT_RUN |
| `VEL-FEAT-08-004` | Character identities | MVP | M4 | CANDIDATE | `IMP-005a` | `T-VEL-FEAT-08-004`; ACC-M4-01 | Create named character with book ID; edits/reopen stay in owned book and not foreign profiles | NOT_RUN |
| `VEL-FEAT-08-005` | Character psychology | MVP-LIMITED | M4 | CANDIDATE | `IMP-005a` | `T-VEL-FEAT-08-005`; ACC-M4-01 | Edit manual character motivation/goal and reopen; do not infer psychological state without author review | NOT_RUN |
| `VEL-FEAT-08-007` | Character relationships | MVP-LIMITED | M4 | CANDIDATE | `IMP-005a` | `T-VEL-FEAT-08-007`; ACC-M4-01 | Link characters with author-written relationship note; changing it leaves unrelated profiles intact | NOT_RUN |
| `VEL-FEAT-08-012` | Plot architecture | MVP-LIMITED | M4 | CANDIDATE | `IMP-005a` | `T-VEL-FEAT-08-012`; ACC-M4-01 | Create simple plot-thread/arc entries and progress status without requiring advanced causality graph | NOT_RUN |
| `VEL-FEAT-08-014` | Canon classification | MVP-LIMITED | M4 | CANDIDATE | `IMP-005b` | `T-VEL-FEAT-08-014`; ACC-M4-03 | Display candidate, author-approved, uncertain, disputed or retracted fact state distinctly | NOT_RUN |
| `VEL-FEAT-08-015` | Canon evidence links | MVP-LIMITED | M4 | CANDIDATE | `IMP-005b` | `T-VEL-FEAT-08-015`; ACC-M4-03 | Open source evidence with exact quote and accepted revision; missing quote blocks approval and flags review | NOT_RUN |
| `VEL-FEAT-08-020` | Retcon approval | MVP-LIMITED | M4 | CANDIDATE | `IMP-005b` | `T-VEL-FEAT-08-020`; ACC-M4-05 | Explicit author retcon flags impacted dependent fact evidence and asks for review; no silent canon rewrite | NOT_RUN |
| `VEL-FEAT-08-021` | Live character profiles | MVP | M4 | DIRECTED | `IMP-005a` | `T-VEL-FEAT-08-021`; ACC-M4-01 | Author creates/edits/reopens character profile with AI OFF | NOT_RUN |
| `VEL-FEAT-08-022` | Live storyline and arc profiles | MVP | M4 | DIRECTED | `IMP-005a` | `T-VEL-FEAT-08-022`; ACC-M4-01 | Create/reopen storyline or plot-thread profile | NOT_RUN |
| `VEL-FEAT-08-023` | Author-built profiles | MVP | M4 | DIRECTED | `IMP-005a` | `T-VEL-FEAT-08-023`; ACC-M4-01 | Manually create/edit profiles while AI OFF and reopen them without model-assisted extraction | NOT_RUN |
| `VEL-FEAT-08-024` | Profiles visible during writing | MVP | M4 | DIRECTED | `IMP-005a` | `T-VEL-FEAT-08-024`; ACC-M4-01 | Show book-owned profile near editor; never bleed A→B | NOT_RUN |
| `VEL-FEAT-08-025` | Profile history and change snapshots | MVP-LIMITED | M4 | CANDIDATE | `IMP-005a` | `T-VEL-FEAT-08-025`; ACC-M4-05 | Minimal profile history distinguishes earlier accepted state | NOT_RUN |
| `VEL-FEAT-08-026` | AI-assisted profile drafting | MVP-LIMITED | M4 | DIRECTED | `IMP-005b` | `T-VEL-FEAT-08-026`; ACC-M4-01 | Optional profile draft stays pending; no auto-approval | NOT_RUN |
| `VEL-FEAT-08-027` | Profile detail and source links | MVP-LIMITED | M4 | CANDIDATE | `IMP-005b` | `T-VEL-FEAT-08-027`; ACC-M4-03 | Inspect exact source quotation, chapter revision and scene-time | NOT_RUN |
| `VEL-FEAT-09-010` | Open plot threads | MVP-LIMITED | M4 | CANDIDATE | `IMP-005a` | `T-VEL-FEAT-09-010`; ACC-M4-01 | Track unresolved plot thread status; mark resolved with author action and retain history | NOT_RUN |
| `VEL-FEAT-09-014` | Character baseline/current-state distinction | MVP-LIMITED | M4 | CANDIDATE | `IMP-005a` | `T-VEL-FEAT-09-014`; ACC-M4-04 | Display character baseline separately from approved later story-time event; earlier scene excludes future state | NOT_RUN |
| `VEL-FEAT-09-021` | Canon proposal gate | MVP | M4 | CANDIDATE | `IMP-005b` | `T-VEL-FEAT-09-021`; ACC-M4-03 | Accepting generated prose does not approve canon | NOT_RUN |
| `VEL-FEAT-09-024` | Provenance for state changes | MVP-LIMITED | M4 | CANDIDATE | `IMP-005b` | `T-VEL-FEAT-09-024`; ACC-M4-03 | Fact change record shows exact source quote, chapter, accepted revision, story time and author decision | NOT_RUN |
| `VEL-FEAT-09-025` | Extract changes during human drafting | MVP-LIMITED | M4 | DIRECTED | `IMP-005b` | `T-VEL-FEAT-09-025`; ACC-M4-03 | Human-accepted scene yields pending fact with exact source | NOT_RUN |
| `VEL-FEAT-09-026` | Extract changes from AI-generated prose | MVP-LIMITED | M4 | DIRECTED | `IMP-005b+008` | `T-VEL-FEAT-09-026`; ACC-M4-06 | Accepted AI scene yields independent candidate, not approved fact | NOT_RUN |
| `VEL-FEAT-09-027` | Propose, approve and dismiss profile updates | MVP | M4 | DIRECTED | `IMP-005b` | `T-VEL-FEAT-09-027`; ACC-M4-03 | Author edits, approves or dismisses candidate with audited decision | NOT_RUN |
| `VEL-FEAT-09-028` | Revise profiles after manuscript edits | MVP-LIMITED | M4 | CANDIDATE | `IMP-005b` | `T-VEL-FEAT-09-028`; ACC-M4-05 | Retcon or Undo flags source-reversed facts rather than silently deleting | NOT_RUN |
| `VEL-FEAT-09-029` | Approved profile context for AI | MVP-LIMITED | M4 | CANDIDATE | `IMP-005b+007` | `T-VEL-FEAT-09-029`; ACC-M4-03 | Only author-approved story-time-applicable facts enter AI context | NOT_RUN |
| `VEL-FEAT-09-030` | Visible pending-change activity | MVP | M4 | DIRECTED | `IMP-005b` | `T-VEL-FEAT-09-030`; ACC-M4-01 | Pending changes remain visible in correct owner/book | NOT_RUN |
| `VEL-FEAT-10-001` | 13-domain guidance availability | MVP-LIMITED | M5 | CANDIDATE | `IMP-006` | `T-VEL-FEAT-10-001`; ACC-M5-01 | Certified original 13-domain catalog is browseable | NOT_RUN |
| `VEL-FEAT-10-002` | 130-lens guidance availability | MVP-LIMITED | M5 | CANDIDATE | `IMP-006` | `T-VEL-FEAT-10-002`; ACC-M5-01 | 130 expanded-primary aliases remain source-verifiable | NOT_RUN |
| `VEL-FEAT-10-003` | 40 constitutional principles | MVP-LIMITED | M5 | CANDIDATE | `IMP-006` | `T-VEL-FEAT-10-003`; ACC-M5-01 | Original constitutional-rule reference shows real provenance, not invented text | NOT_RUN |
| `VEL-FEAT-10-026` | Intentional exception handling | MVP-LIMITED | M5 | CANDIDATE | `IMP-006` | `T-VEL-FEAT-10-026`; ACC-M5-05 | A deliberate book-level exception overrides only applicable guidance and remains visible at request preview | NOT_RUN |
| `VEL-FEAT-11-001` | Select revision target | MVP | M7 | CANDIDATE | `IMP-008` | `T-VEL-FEAT-11-001`; ACC-M7-03 | Proposal anchored to valid owned chapter + exact revision/selection | NOT_RUN |
| `VEL-FEAT-11-002` | Alternative suggestion | MVP | M7 | CANDIDATE | `IMP-008` | `T-VEL-FEAT-11-002`; ACC-M7-02 | Return proposed alternative in separate pending record, never silently replace accepted passage | NOT_RUN |
| `VEL-FEAT-11-004` | Original-versus-suggestion comparison | MVP-LIMITED | M7 | CANDIDATE | `IMP-008` | `T-VEL-FEAT-11-004`; ACC-M7-02 | Show original source span and unaccepted suggestion simultaneously before author choice | NOT_RUN |
| `VEL-FEAT-11-005` | Inline or side-by-side diff | MVP-LIMITED | M7 | CANDIDATE | `IMP-008` | `T-VEL-FEAT-11-005`; ACC-M7-02 | Highlight changed characters/words inside single paragraph while preserving unchanged surrounding prose | NOT_RUN |
| `VEL-FEAT-11-006` | Accept or reject | MVP | M7 | DIRECTED | `IMP-008` | `T-VEL-FEAT-11-006`; ACC-M7-01 | Reject unchanged; Accept transactional exact-span CAS only | NOT_RUN |
| `VEL-FEAT-11-007` | Edit suggestion before accepting | MVP | M7 | CANDIDATE | `IMP-008` | `T-VEL-FEAT-11-007`; ACC-M7-02 | Editing proposed alternative does not touch accepted source until Accept | NOT_RUN |
| `VEL-FEAT-11-009` | Undo accepted proposal | MVP | M7 | CANDIDATE | `IMP-008` | `T-VEL-FEAT-11-009`; ACC-M7-02 | Undo creates compensating revision only when proposal remains latest | NOT_RUN |
| `VEL-FEAT-11-010` | Revision restore | MVP-LIMITED | M7 | CANDIDATE | `IMP-003b+008` | `T-VEL-FEAT-11-010`; ACC-M7-03 | Restore older accepted state non-destructively with conflict prompt | NOT_RUN |
| `VEL-FEAT-11-011` | Stale suggestion protection | MVP | M7 | CANDIDATE | `IMP-008` | `T-VEL-FEAT-11-011`; ACC-M7-03 | Stale proposal after human edit cannot be accepted | NOT_RUN |
| `VEL-FEAT-11-013` | Rich-text preservation | MVP-LIMITED | M7 | CANDIDATE | `IMP-008` | `T-VEL-FEAT-11-013`; ACC-M7-02 | Unrelated supported rich marks survive accepted AI span edit | NOT_RUN |
| `VEL-FEAT-11-014` | Suggestion provider provenance | MVP-LIMITED | M7 | CANDIDATE | `IMP-008` | `T-VEL-FEAT-11-014`; ACC-M7-05 | Proposal history identifies actual approved provider and downstream model route/version | NOT_RUN |
| `VEL-FEAT-11-015` | Suggestion rule/context provenance | MVP-LIMITED | M7 | CANDIDATE | `IMP-008` | `T-VEL-FEAT-11-015`; ACC-M7-05 | Proposal records effective rules/context version used, not hidden disabled rules or raw BYOK credential | NOT_RUN |
| `VEL-FEAT-11-016` | Suggestion base revision | MVP | M7 | CANDIDATE | `IMP-008` | `T-VEL-FEAT-11-016`; ACC-M7-03 | Server revalidates expected accepted revision on every Accept | NOT_RUN |
| `VEL-FEAT-11-017` | Choice history | MVP | M7 | CANDIDATE | `IMP-008` | `T-VEL-FEAT-11-017`; ACC-M7-05 | Author sees durable decision history after reload | NOT_RUN |
| `VEL-FEAT-11-019` | AI metadata export/deletion | MVP-LIMITED | M7 | CANDIDATE | `IMP-004b+008` | `T-VEL-FEAT-11-019`; ACC-M7-05 | Export/delete retained proposal metadata per policy; no raw key, foreign content or silent retained copy | NOT_RUN |
| `VEL-FEAT-13-019` | DOCX manuscript export | MVP-LIMITED | M3 | CANDIDATE | `IMP-004a` | `T-VEL-FEAT-13-019`; ACC-M3-04 | DOCX export preserves declared supported headings/marks; warns unsupported | NOT_RUN |
| `VEL-FEAT-13-021` | TXT/Markdown export | MVP-LIMITED | M3 | CANDIDATE | `IMP-004a` | `T-VEL-FEAT-13-021`; ACC-M3-04 | TXT/limited Markdown export warns that rich formatting may be lost | NOT_RUN |
| `VEL-FEAT-14-001` | Import existing manuscripts | MVP-LIMITED | M3 | OWNER-INTENT | `IMP-004a` | `T-VEL-FEAT-14-001`; ACC-M3-04 | Import supported manuscript DOCX/TXT into a new scoped draft; do not overwrite existing accepted chapters | NOT_RUN |
| `VEL-FEAT-14-002` | DOCX import | MVP-LIMITED | M3 | CANDIDATE | `IMP-004a` | `T-VEL-FEAT-14-002`; ACC-M3-04 | DOCX input converts supported semantic styles; original retained on error | NOT_RUN |
| `VEL-FEAT-14-003` | Plain text import | MVP | M3 | CANDIDATE | `IMP-004a` | `T-VEL-FEAT-14-003`; ACC-M3-04 | Parse plaintext fixture with Unicode/newlines to editable manuscript; no characters silently dropped | NOT_RUN |
| `VEL-FEAT-14-011` | Missing or corrupted data alerts | MVP | M3 | CANDIDATE | `IMP-003b+004` | `T-VEL-FEAT-14-011`; ACC-M3-02 | Corrupt/missing import/revision produces truthful alert; accepted source intact | NOT_RUN |
| `VEL-FEAT-14-013` | Formatting fidelity report | MVP-LIMITED | M3 | CANDIDATE | `IMP-004a` | `T-VEL-FEAT-14-013`; ACC-M3-04 | Report supported and unsupported DOCX styles with precise formatting-loss caveat before import/export commit | NOT_RUN |
| `VEL-FEAT-14-014` | Full-manuscript export | MVP | M3 | CANDIDATE | `IMP-004a` | `T-VEL-FEAT-14-014`; ACC-M3-04 | Export every accepted chapter in correct current order, not merely open chapter; omit foreign books | NOT_RUN |
| `VEL-FEAT-14-015` | Portable project archive | MVP-LIMITED | M3 | CANDIDATE | `IMP-004b` | `T-VEL-FEAT-14-015`; ACC-M3-03 | Versioned book archive clean-restores chapters, profiles and rule preferences | NOT_RUN |
| `VEL-FEAT-14-017` | Import-edit-export round trip | MVP-LIMITED | M3 | CANDIDATE | `IMP-004a` | `T-VEL-FEAT-14-017`; ACC-M3-04 | Fixture import→edit→export returns supported prose/format | NOT_RUN |
| `VEL-FEAT-14-018` | Backup and restoration | MVP-LIMITED | M3 | CANDIDATE | `IMP-004b` | `T-VEL-FEAT-14-018`; ACC-M3-03 | Clean restore of owned backup succeeds; no other user's data included | NOT_RUN |
| `VEL-FEAT-16-001` | Light and dark theme | MVP-LIMITED | M8 | CANDIDATE | `VAL-001` | `T-VEL-FEAT-16-001`; ACC-M8-04 | Switch between supported light/dark themes without hiding focus/errors or altering text | NOT_RUN |
| `VEL-FEAT-16-002` | Reading typography preferences | MVP-LIMITED | M8 | CANDIDATE | `VAL-001` | `T-VEL-FEAT-16-002`; ACC-M8-04 | Adjust bounded font size/line spacing then reopen editor; manuscript and selection semantics persist | NOT_RUN |
| `VEL-FEAT-16-003` | Content width | MVP-LIMITED | M8 | CANDIDATE | `IMP-003a` | `T-VEL-FEAT-16-003`; ACC-M8-04 | Adjust editor measure/content width without modifying source JSON or creating horizontal overflow | NOT_RUN |
| `VEL-FEAT-16-005` | Distraction-free mode | MVP | M8 | CANDIDATE | `IMP-003a` | `T-VEL-FEAT-16-005`; ACC-M8-03 | Use focus-mode toggle with keyboard; author text/focus preserved across return | NOT_RUN |
| `VEL-FEAT-16-006` | Keyboard-only accessibility | MVP | M8 | CANDIDATE | `VAL-001` | `T-VEL-FEAT-16-006`; ACC-M8-04 | Primary writing and rules/AI review flows pass keyboard-only test | NOT_RUN |
| `VEL-FEAT-16-007` | Screen reader semantics | MVP | M8 | CANDIDATE | `VAL-001` | `T-VEL-FEAT-16-007`; ACC-M8-04 | Screen reader identifies controls, state changes and errors | NOT_RUN |
| `VEL-FEAT-16-008` | Visible focus states | MVP | M8 | CANDIDATE | `VAL-001` | `T-VEL-FEAT-16-008`; ACC-M8-04 | Visible keyboard focus on Library, editor tools, chapter rail, rule toggles, consent and proposal decisions | NOT_RUN |
| `VEL-FEAT-16-009` | Responsive layouts | MVP-LIMITED | M8 | CANDIDATE | `VAL-001` | `T-VEL-FEAT-16-009`; ACC-M8-04 | At agreed desktop/tablet/narrow viewport widths core writer tasks remain reachable, not clipped by rail | NOT_RUN |
| `VEL-FEAT-16-010` | Desktop-focused writing | MVP | M8 | CANDIDATE | `IMP-003a` | `T-VEL-FEAT-16-010`; ACC-M8-04 | Desktop writer page presents chapter rail and readable manuscript column with no mandatory provider key | NOT_RUN |
| `VEL-FEAT-16-014` | Right-to-left and IME entry | MVP-LIMITED | M8 | CANDIDATE | `VAL-001` | `T-VEL-FEAT-16-014`; ACC-M8-03 | IME and RTL input remain intact through editor/recovery interactions | NOT_RUN |
| `VEL-FEAT-16-016` | Clear progress/error messages | MVP | M8 | CANDIDATE | `VAL-001` | `T-VEL-FEAT-16-016`; ACC-M8-05 | Differentiate loading/offline/unknown ACK/409/retry, and announce failures without false Saved | NOT_RUN |
| `VEL-FEAT-16-017` | Accessible AI review | MVP | M8 | CANDIDATE | `IMP-008` | `T-VEL-FEAT-16-017`; ACC-M8-03 | Keyboard and screen reader can inspect original/proposal and trigger Accept/Reject/Cancel without losing source | NOT_RUN |
| `VEL-FEAT-17-001` | Account sign-in | MVP | M8 | CANDIDATE | `IMP-001` | `T-VEL-FEAT-17-001`; ACC-M8-01 | Valid sign-in yields owned author session; sign-out UI clears state | NOT_RUN |
| `VEL-FEAT-17-002` | Account preferences | MVP-LIMITED | M8 | CANDIDATE | `IMP-001` | `T-VEL-FEAT-17-002`; ACC-M8-01 | Change minimal owned preference and reopen account; must not access other author's settings | NOT_RUN |
| `VEL-FEAT-17-003` | Workspace isolation | MVP | M8 | CANDIDATE | `IMP-001` | `T-VEL-FEAT-17-003`; ACC-M8-01 | A/B book and dependent entities remain isolated across account switch | NOT_RUN |
| `VEL-FEAT-17-004` | Manuscript confidentiality | MVP | M8 | CANDIDATE | `VAL-001` | `T-VEL-FEAT-17-004`; ACC-M8-01 | Direct Nest, PostgREST and Storage prohibit foreign manuscripts | NOT_RUN |
| `VEL-FEAT-17-005` | Project permissions | MVP-LIMITED | M8 | CANDIDATE | `IMP-001` | `T-VEL-FEAT-17-005`; ACC-M8-01 | Owner-only book/chapter authorization denies guessed foreign IDs; no collaboration roles implied | NOT_RUN |
| `VEL-FEAT-17-006` | Secret storage | MVP | M8 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-17-006`; ACC-M8-01 | Raw BYOK key absent from DB, localStorage, URL, analytics, logs | NOT_RUN |
| `VEL-FEAT-17-007` | Credential rotation | MVP | M8 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-17-007`; ACC-M8-01 | Rotate/disconnect in-memory BYOK key; no old key persisted in DB, localStorage or request history | NOT_RUN |
| `VEL-FEAT-17-008` | Encrypted transport | MVP | M8 | CANDIDATE | `VAL-001` | `T-VEL-FEAT-17-008`; ACC-M8-01 | Private author API/provider requests use verified HTTPS in protected environment; no mixed content | NOT_RUN |
| `VEL-FEAT-17-009` | Storage and backup protection | MVP | M8 | CANDIDATE | `IMP-004b` | `T-VEL-FEAT-17-009`; ACC-M8-01 | Backup and Storage objects are private and restorable by owner only | NOT_RUN |
| `VEL-FEAT-17-011` | Imported prompt-injection defense | MVP-LIMITED | M8 | CANDIDATE | `VAL-001` | `T-VEL-FEAT-17-011`; ACC-M8-03 | Imported story text cannot override application/security instructions | NOT_RUN |
| `VEL-FEAT-17-012` | Upload/rich-text sanitization | MVP | M8 | CANDIDATE | `IMP-004a` | `T-VEL-FEAT-17-012`; ACC-M8-01 | Sanitization rejects executable rich text and archive traversal | NOT_RUN |
| `VEL-FEAT-17-013` | Retention and deletion | MVP | M8 | CANDIDATE | `IMP-004b` | `T-VEL-FEAT-17-013`; ACC-M8-01 | Deletion result matches documented retention and backup lag | NOT_RUN |
| `VEL-FEAT-17-014` | Author-controlled export | MVP | M8 | CANDIDATE | `IMP-004b` | `T-VEL-FEAT-17-014`; ACC-M8-01 | Full-book export contains only authenticated author's data | NOT_RUN |
| `VEL-FEAT-17-015` | Revision and accidental-delete recovery | MVP | M8 | CANDIDATE | `IMP-003b` | `T-VEL-FEAT-17-015`; ACC-M8-05 | Accidental deletion/revision restored within declared retention | NOT_RUN |
| `VEL-FEAT-17-016` | Provider transmission disclosure | MVP | M8 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-17-016`; ACC-M8-02 | Provider/recipient and exact sent excerpt disclosed | NOT_RUN |
| `VEL-FEAT-17-017` | Explicit consent for AI processing | MVP | M8 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-17-017`; ACC-M8-02 | No external transmission before explicit AI consent | NOT_RUN |
| `VEL-FEAT-17-018` | Spending/rate abuse safeguards | MVP | M8 | CANDIDATE | `IMP-007` | `T-VEL-FEAT-17-018`; ACC-M8-02 | Proxy enforces bounded request/rate/cost limits, no hidden retries | NOT_RUN |
| `VEL-FEAT-17-019` | Audit without over-collecting prose | MVP-LIMITED | M8 | CANDIDATE | `VAL-001` | `T-VEL-FEAT-17-019`; ACC-M8-01 | Audit events omit private manuscript prose and raw keys | NOT_RUN |
| `VEL-DIFF-006` | Versioned AI Decisions | MVP-LIMITED | M7 | CANDIDATE | `IMP-008` | `T-VEL-DIFF-006`; ACC-M7-02 | Versioned AI decisions retain before/after provenance and retraction | NOT_RUN |
| `VEL-DIFF-007` | Portable Project Archive | MVP-LIMITED | M3 | CANDIDATE | `IMP-004b` | `T-VEL-DIFF-007`; ACC-M3-03 | Portable archive declares manifest, hashes, versions and excludes BYOK keys | NOT_RUN |
| `VEL-DIFF-012` | Contextual Provenance Inspector | MVP-LIMITED | M5 | CANDIDATE | `IMP-006` | `T-VEL-DIFF-012`; ACC-M5-04 | Inspect bounded provenance for rule and fact decisions | NOT_RUN |

## Traceability and implementation rules

1. Before implementing an `IMP-...` ticket, select all rows with that task and attach actual test code/fixture/run history to every `T-VEL-...` as applicable. The proposed per-row behavior must be translated into executable Given/When/Then assertions and relevant negative cases before code acceptance; area-level ACC-M tests and JRN IDs are independent end-to-end requirements.
2. `MVP-LIMITED` means **only** the bounded first-release behavior. Do not implement professional page-layout, published EPUB/print, Cover Studio, auto-canon, giant graph, collaboration or all provider billing services because a source feature title hints at them.
3. All test statuses remain NOT_RUN. No Figma screenshot, Lovable source path, Make walkthrough or green documentation CI may be marked as product PASS.
4. Owner approved 134-alias intended default policy (130 expanded ON, four compact extras OFF) after source review, but original source pack authenticity/production activation still needs actual verification. Protect private source material.
5. User-owned free-or-paid OpenRouter BYOK is the selected first integration direction but actual downstream provider/model privacy and cost must be rechecked before enabling.
6. Some features have several responsible stages; stage mapping is a *primary future ownership suggestion*, not a new approved DAG or self-executing agent task.
7. Cross-area mandatory negative evidence: two accounts/book data, direct PostgREST signed-out JWT, lost-ACK/CAS, exact-source story-time canon, disabled rule exclusion, AI consent/selection/stale, backup clean restore and accessible author decisions.

## Source-category tally

| Area | Included rows |
|---|---:|
| M1 | 8 |
| M2 | 16 |
| M3 | 12 |
| M4 | 24 |
| M5 | 23 |
| M6 | 20 |
| M7 | 16 |
| M8 | 30 |
| **All** | **149** |

**PLAN-01 exit:** the one-to-one mapping is complete at the planning level; implementation tasks must still translate proposed per-ID checks into executable Given/When/Then specifications and show real evidence. No code changes.

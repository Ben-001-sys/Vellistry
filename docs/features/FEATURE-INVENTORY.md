---
id: VEL-FEATURE-INVENTORY-001
type: feature-inventory
status: draft-awaiting-owner-review
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
author: project-research
version: 0.1.1
sources:
  - "SRC-001 — AI Writing App Blueprint.md"
  - "SRC-002 — Research AI Writing Problems.md"
  - "SRC-003 — Branch · Research AI Writing Problems.md (historical research/guidance source, not a certified deployable rule pack)"
  - "docs/research/R01-SRC001-USER-INTENT-EXTRACTION.md"
  - "docs/requirements/PRODUCT-DIRECTION-FROZEN-DEFAULT-GUIDANCE-2026-10-08.md"
  - "docs/requirements/REQUIREMENTS.md"
  - "PRE-DEVELOPMENT-RESEARCH-REGISTER.md"
  - "Fiction Writing App master Google Doc, Part VI §§28–38 and subsequent research Parts XIII–XVIII"
  - "https://github.com/Ben-001-sys/Vellistry/pull/6 — owner-selected editor ADR-0003, merge state independently checked"
  - "https://github.com/Ben-001-sys/Vellistry/pull/8 — R04 candidate first-release boundaries"
  - "Project owner message, 2026-10-08: continuous, visible character/storyline profiles during human writing and AI generation; original conversation permalink not archived"
  - "docs/requirements/PRODUCT-DIRECTION-LIVE-STORY-PROFILES-2026-10-08.md — exact new owner request, scope and authority distinctions"
related_research:
  - R01
  - R02
  - R03
  - R04
  - R05
  - R06
  - R07
  - R08
  - R09
  - R10
  - R11
  - R12
  - R13
  - R14
  - R15
  - R16
  - R17
  - R18
  - R19
  - R20
  - R21
  - R22
related_adrs:
  - ADR-0003
---

# Vellistry — Canonical Feature Inventory (candidate baseline v0.1)

**Status: COMPLETE TRANSCRIPTION/CONSOLIDATION OF THE CURRENT DISCUSSED FEATURE LIST, NOT AN APPROVED PRODUCT BACKLOG OR MVP.** This file is the **canonical inventory index for prioritization discussions once reviewed**, not the source of authority for historical user statements or frozen creative guidance. Original files, individual decisions and source texts retain precedence. This PR does not authorize implementation or approve new functionality.

## Inventory scope and counting

- **18 feature areas**, **381 individually tracked feature entries**, and **15 separately tracked cross-cutting differentiator concepts** (total **396 inventory rows**).
- Every entry has an ID, title, operational description, source/evidence family, status, research dependency and **UNASSIGNED** release priority.
- The feature list originated in the latest consolidated conversation inventory and was cross-checked against the source-backed R01 user-intent extraction, the master Google Doc's functional specification, the research register and the R04 options.
- **Counts are inventory-item counts, not implementation effort estimates or deduplicated user-story counts.** Some capabilities intentionally overlap (for example word count in editing and workflow metrics; Story Bible canon and continuity; cover export and publishing). Cross-cutting differentiators deliberately reference ordinary capabilities rather than proving distinct modules are needed.
- **No feature in this file has been assigned an MVP, pilot, public-release or later priority.** These values must be added through explicit owner scope review, supported by R02/R04 and further evidence.
- The **historical 20-section / 42-requirement research artifact** referenced from SRC-001 remains unavailable as independently verified input. Therefore this is a complete record of the **currently recovered/discussed list**, not a guarantee that no unique original requirement exists only in that unavailable artifact.

## Evidence and decision legend

- `DIRECTED` — owner explicitly specified behavior or product principle. **Does not automatically mean a particular UI, architecture, implementation or release date was approved.** Especially applies to the frozen fiction guidance and author control.
- `OWNER-INTENT` — original owner expressly requested a capability **or its investigation** (e.g. rich editing, covers, model choice, MCP, export), but the mechanics/launch sequencing remain undecided.
- `TECH-SELECTED` — the owner explicitly chose a technical foundation; this status does **not** approve every product feature associated with it, its paid extensions, or the wider architecture.
- `CANDIDATE` — proposed in the research synthesis, competitor scan or functional blueprint; **not author-approved as a commitment**. Covers individual implementation-level operations that go beyond the owner's high-level intent.
- `UNASSIGNED` — release priority intentionally blank: do **not** silently convert this into `MVP` or `LATER`.
- `BP §N` — section number of the **master Fiction Writing App Google Doc's synthesized blueprint, Part VI unless another part is stated**. It is a research synthesis, not raw owner speech. `INT-XX` is the precise owner-intent extraction in `R01-SRC001`; `DIR` is the separate 2026-10-08 owner-directed frozen-guidance record; `RXX` denotes corresponding questions/evidence in the 22-area research register.
- `ADR-0003` records **Tiptap 3 / ProseMirror as the selected editor foundation**. Technology approval does **not** approve every editor feature or Tiptap paid extension. At inventory creation, the ADR also appears in the separate decision PR #6; inspect the current GitHub merge state before claiming it is on `main`.
- `VEL-REQ-001..008` in the requirements seed are themselves `proposed`, not fully approved individual requirements. The sections cite related seeds for discoverability, not to elevate their status.

**Source hierarchy for review:** exact owner-authored statements and approved decisions → original retained sources → source-derived user-intent extraction → research/blueprint syntheses → analyst proposals. The original 13-domain/130-lens guidance remains **frozen without renaming, rewriting, renumbering or silent AR reconciliation**. This inventory **does not reproduce or certify the text of all 130 lenses**: those are distinct source-content records and require R01 archival/identity review.

## Catalog — one stable ID for each discussed capability

## 1. Writer Workspace & Project Management

**Area source:** INT-07, INT-09; BP §28; R04. **Research dependencies:** R02, R04, R05, R15. **Related draft requirement(s):** VEL-REQ-002. This section is a feature inventory, not a complete UI or data-model specification.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-FEAT-01-001` | Workspace management | Create, rename and organize distinct writing workspaces. | INT-07, INT-09; BP §28; R04 | OWNER-INTENT | R02, R04, R05, R15 | UNASSIGNED |
| `VEL-FEAT-01-002` | Multiple projects | Keep independent fiction projects with clear boundaries. | INT-07, INT-09; BP §28; R04 | OWNER-INTENT | R02, R04, R05, R15 | UNASSIGNED |
| `VEL-FEAT-01-003` | Series organization | Group related books without forcing standalone novels into a series. | INT-07, INT-09; BP §28; R04 | OWNER-INTENT | R02, R04, R05, R15 | UNASSIGNED |
| `VEL-FEAT-01-004` | Book creation and management | Create, rename, duplicate, archive and organize books. | INT-07, INT-09; BP §28; R04 | OWNER-INTENT | R02, R04, R05, R15 | UNASSIGNED |
| `VEL-FEAT-01-005` | Book structure | Represent parts, arcs, chapters, scenes and manuscript material. | INT-07, INT-09; BP §28; R04 | CANDIDATE | R02, R04, R05, R15 | UNASSIGNED |
| `VEL-FEAT-01-006` | Chapter and scene creation | Create, rename, duplicate and remove organized sections. | INT-07, INT-09; BP §28; R04 | CANDIDATE | R02, R04, R05, R15 | UNASSIGNED |
| `VEL-FEAT-01-007` | Chapter split and merge | Split or combine material while preserving text. | INT-07, INT-09; BP §28; R04 | CANDIDATE | R02, R04, R05, R15 | UNASSIGNED |
| `VEL-FEAT-01-008` | Chapter reorder | Move chapters and scenes, including drag-and-drop interaction. | INT-07, INT-09; BP §28; R04 | CANDIDATE | R02, R04, R05, R15 | UNASSIGNED |
| `VEL-FEAT-01-009` | Project dashboard | View active books and recent writing activity. | INT-07, INT-09; BP §28; R04 | CANDIDATE | R02, R04, R05, R15 | UNASSIGNED |
| `VEL-FEAT-01-010` | Writing status | Record planned, drafting, revising and completed stages. | INT-07, INT-09; BP §28; R04 | CANDIDATE | R02, R04, R05, R15 | UNASSIGNED |
| `VEL-FEAT-01-011` | Writing goals | Set daily or project word targets and track progress. | INT-07, INT-09; BP §28; R04 | CANDIDATE | R02, R04, R05, R15 | UNASSIGNED |
| `VEL-FEAT-01-012` | Project-level search | Search manuscript, chapter titles and project notes. | INT-07, INT-09; BP §28; R04 | CANDIDATE | R02, R04, R05, R15 | UNASSIGNED |
| `VEL-FEAT-01-013` | Cross-book search | Search eligible books without crossing unrelated project boundaries. | INT-07, INT-09; BP §28; R04 | CANDIDATE | R02, R04, R05, R15 | UNASSIGNED |
| `VEL-FEAT-01-014` | Reference asset library | Organize research images, notes, links and documents. | INT-07, INT-09; BP §28; R04 | CANDIDATE | R02, R04, R05, R15 | UNASSIGNED |
| `VEL-FEAT-01-015` | Cross-references | Link scenes, facts, notes and character records. | INT-07, INT-09; BP §28; R04 | CANDIDATE | R02, R04, R05, R15 | UNASSIGNED |
| `VEL-FEAT-01-016` | Project snapshots | Preserve named milestones and return to an earlier snapshot. | INT-07, INT-09; BP §28; R04 | CANDIDATE | R02, R04, R05, R15 | UNASSIGNED |
| `VEL-FEAT-01-017` | Alternate drafts | Keep exploratory versions separate from accepted text. | INT-07, INT-09; BP §28; R04 | CANDIDATE | R02, R04, R05, R15 | UNASSIGNED |
| `VEL-FEAT-01-018` | Manuscript versus notes separation | Clearly distinguish authored prose from research and discarded ideas. | INT-07, INT-09; BP §28; R04 | CANDIDATE | R02, R04, R05, R15 | UNASSIGNED |

## 2. Professional Manuscript Editor

**Area source:** INT-09–12, INT-28; BP §29; ADR-0003; R05. **Research dependencies:** R05, R11, R15, R16. **Related draft requirement(s):** VEL-REQ-002. This section is a feature inventory, not a complete UI or data-model specification.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-FEAT-02-001` | Non-AI writing | Draft and edit manuscripts with AI turned off. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | DIRECTED | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-002` | Rich-text editing | Support meaningful formatting comparable in kind to established word processors. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | OWNER-INTENT | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-003` | Bold, italic and underline | Format text emphasis without losing existing marks. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-004` | Typeface and font size controls | Configure text styles with useful defaults. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-005` | Paragraph alignment | Set left, center, right or justified alignment when required. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-006` | Paragraph indents | Control first-line and paragraph indentation. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-007` | Line and paragraph spacing | Change line height and spacing between paragraphs. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-008` | Headings and style hierarchy | Apply semantic document heading and block styles. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-009` | Quotations and block styles | Represent quotations and other meaningful manuscript blocks. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-010` | Lists | Support ordered and unordered lists when relevant. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-011` | Scene separators | Insert deliberate scene breaks and ornaments. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-012` | Page breaks | Represent intentional print/submission breaks without confusing them with chapters. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-013` | Cut, copy, paste and selection | Handle rich-text selections and clipboard behavior. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-014` | Find and replace | Locate and replace terms within eligible content. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-015` | Heading and chapter navigation | Jump through manuscript structure. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-016` | Keyboard shortcuts | Expose familiar editor commands. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-017` | Undo and redo | Revert or repeat editing operations. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-018` | Autosave feedback | Show save status and prevent misleading saved-state claims. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-019` | Save, reopen and recovery | Preserve meaningful manuscript content across sessions and interruptions. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-020` | Word and character counts | Show current chapter and manuscript statistics. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-021` | Distraction-free writing | Hide nonessential panels during composition. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-022` | Document revision history | Compare and restore earlier accepted versions. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-023` | Editor annotations | Attach notes, comments or highlights to relevant passages. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-024` | Tracked edits | Review proposed editing changes without silently mutating text. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-025` | Reading or proofing view | Present comfortable and accessible text for reading. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | CANDIDATE | R05, R11, R15, R16 | UNASSIGNED |
| `VEL-FEAT-02-026` | Tiptap 3 / ProseMirror foundation | Use the owner-selected editing technology, without assuming premium features are included. | INT-09–12, INT-28; BP §29; ADR-0003; R05 | TECH-SELECTED | R05, R11, R15, R16 | UNASSIGNED |

## 3. Story Planning & Outlining

**Area source:** INT-04, INT-07; BP §§28, 32, 34; R07. **Research dependencies:** R02, R04, R07, R08. **Related draft requirement(s):** VEL-REQ-005. This section is a feature inventory, not a complete UI or data-model specification.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-FEAT-03-001` | Idea capture | Keep premise fragments and unstructured story thoughts. | INT-04, INT-07; BP §§28, 32, 34; R07 | CANDIDATE | R02, R04, R07, R08 | UNASSIGNED |
| `VEL-FEAT-03-002` | Brainstorming board | Explore multiple story ideas and directions. | INT-04, INT-07; BP §§28, 32, 34; R07 | CANDIDATE | R02, R04, R07, R08 | UNASSIGNED |
| `VEL-FEAT-03-003` | Premise builder | Store concise and expanded premise statements. | INT-04, INT-07; BP §§28, 32, 34; R07 | CANDIDATE | R02, R04, R07, R08 | UNASSIGNED |
| `VEL-FEAT-03-004` | Central story question | Record the core narrative question or promise. | INT-04, INT-07; BP §§28, 32, 34; R07 | CANDIDATE | R02, R04, R07, R08 | UNASSIGNED |
| `VEL-FEAT-03-005` | Outline builder | Organize a story plan into parts, chapters and beats. | INT-04, INT-07; BP §§28, 32, 34; R07 | CANDIDATE | R02, R04, R07, R08 | UNASSIGNED |
| `VEL-FEAT-03-006` | Chapter planning | Record intended chapter goals and major events. | INT-04, INT-07; BP §§28, 32, 34; R07 | CANDIDATE | R02, R04, R07, R08 | UNASSIGNED |
| `VEL-FEAT-03-007` | Scene planning | Record objectives, obstacles, actors and outcomes. | INT-04, INT-07; BP §§28, 32, 34; R07 | CANDIDATE | R02, R04, R07, R08 | UNASSIGNED |
| `VEL-FEAT-03-008` | Scene cards | Arrange planned scenes visually. | INT-04, INT-07; BP §§28, 32, 34; R07 | CANDIDATE | R02, R04, R07, R08 | UNASSIGNED |
| `VEL-FEAT-03-009` | Plot board | See arcs, beats and major narrative developments. | INT-04, INT-07; BP §§28, 32, 34; R07 | CANDIDATE | R02, R04, R07, R08 | UNASSIGNED |
| `VEL-FEAT-03-010` | Character arc planning | Track planned transformations and decisions. | INT-04, INT-07; BP §§28, 32, 34; R07 | CANDIDATE | R02, R04, R07, R08 | UNASSIGNED |
| `VEL-FEAT-03-011` | Subplot planning | Track secondary storylines independently. | INT-04, INT-07; BP §§28, 32, 34; R07 | CANDIDATE | R02, R04, R07, R08 | UNASSIGNED |
| `VEL-FEAT-03-012` | Setup and payoff planning | Record promised revelations and expected outcomes. | INT-04, INT-07; BP §§28, 32, 34; R07 | CANDIDATE | R02, R04, R07, R08 | UNASSIGNED |
| `VEL-FEAT-03-013` | Scene and chapter summaries | Record contextual summaries separately from accepted prose. | INT-04, INT-07; BP §§28, 32, 34; R07 | CANDIDATE | R02, R04, R07, R08 | UNASSIGNED |
| `VEL-FEAT-03-014` | Plot Grid | Compare arcs, characters and themes across chapters. | INT-04, INT-07; BP §§28, 32, 34; R07 | CANDIDATE | R02, R04, R07, R08 | UNASSIGNED |
| `VEL-FEAT-03-015` | AI-assisted planning | Suggest outline possibilities without automatically accepting them. | INT-04, INT-07; BP §§28, 32, 34; R07 | CANDIDATE | R02, R04, R07, R08 | UNASSIGNED |
| `VEL-FEAT-03-016` | Alternate plot branches | Preserve competing ideas as possibilities rather than canon. | INT-04, INT-07; BP §§28, 32, 34; R07 | CANDIDATE | R02, R04, R07, R08 | UNASSIGNED |
| `VEL-FEAT-03-017` | Research and inspiration links | Associate references with the relevant plan. | INT-04, INT-07; BP §§28, 32, 34; R07 | CANDIDATE | R02, R04, R07, R08 | UNASSIGNED |

## 4. Visual Rules Studio

**Area source:** INT-05–06; DIR; BP §31; R01, R06. **Research dependencies:** R01, R02, R06, R08, R10. **Related draft requirement(s):** VEL-REQ-001, VEL-REQ-006. This section is a feature inventory, not a complete UI or data-model specification.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-FEAT-04-001` | Preserved fiction default source | Use the existing frozen fiction-quality guidance without unapproved rewriting. | INT-05–06; DIR; BP §31; R01, R06 | DIRECTED | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-002` | Default guidance enabled initially | Begin new author configurations with certified default guidance active. | INT-05–06; DIR; BP §31; R01, R06 | DIRECTED | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-003` | Inspect active defaults | Show which default rules apply to the current author/action. | INT-05–06; DIR; BP §31; R01, R06 | DIRECTED | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-004` | Disable a default rule | Exclude a selected default from the active configuration. | INT-05–06; DIR; BP §31; R01, R06 | DIRECTED | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-005` | Restore disabled defaults | Re-enable defaults without modifying the source archive. | INT-05–06; DIR; BP §31; R01, R06 | DIRECTED | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-006` | Add personal writing rules | Let authors create their own creative instructions. | INT-05–06; DIR; BP §31; R01, R06 | DIRECTED | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-007` | Enable or disable custom rules | Control whether added rules apply. | INT-05–06; DIR; BP §31; R01, R06 | DIRECTED | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-008` | Book and workspace scoping | Support the owner-directed concept of book-level and broad scopes; exact inheritance remains unresolved. | INT-05–06; DIR; BP §31; R01, R06 | DIRECTED | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-009` | Creative exceptions | Protect deliberate author choices instead of enforcing generic stylistic bans. | INT-05–06; DIR; BP §31; R01, R06 | DIRECTED | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-010` | No hidden disabled instruction | Ensure excluded creative rule text is not covertly included as active provider instructions. | INT-05–06; DIR; BP §31; R01, R06 | DIRECTED | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-011` | AI-off authoring | Rules controls must not prevent ordinary independent writing. | INT-05–06; DIR; BP §31; R01, R06 | DIRECTED | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-012` | Rule titles and descriptions | Name and explain the intent of each configured rule. | INT-05–06; DIR; BP §31; R01, R06 | CANDIDATE | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-013` | Rule examples and symptoms | Illustrate desired results and problematic patterns. | INT-05–06; DIR; BP §31; R01, R06 | CANDIDATE | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-014` | Rule outcomes and suggestions | Store preferred outcome and possible response to violations. | INT-05–06; DIR; BP §31; R01, R06 | CANDIDATE | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-015` | Rule categories | Organize guidance by craft domain and task. | INT-05–06; DIR; BP §31; R01, R06 | CANDIDATE | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-016` | Rule search and filters | Find rules and inspect only customized items. | INT-05–06; DIR; BP §31; R01, R06 | CANDIDATE | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-017` | Duplicate and edit personal rules | Reuse and revise author-written rules. | INT-05–06; DIR; BP §31; R01, R06 | CANDIDATE | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-018` | Rule profiles | Save reusable combinations of rules. | INT-05–06; DIR; BP §31; R01, R06 | CANDIDATE | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-019` | Bulk configuration | Enable/disable or apply multiple selected rules together. | INT-05–06; DIR; BP §31; R01, R06 | CANDIDATE | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-020` | Advanced scopes | Investigate series, part, chapter, scene and selected-passage applicability. | INT-05–06; DIR; BP §31; R01, R06 | CANDIDATE | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-021` | Scope inheritance view | Explain which parent rules apply at a writing location. | INT-05–06; DIR; BP §31; R01, R06 | CANDIDATE | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-022` | Rule conflict visibility | Display competing or contradictory guidance. | INT-05–06; DIR; BP §31; R01, R06 | CANDIDATE | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-023` | Rule priority and exception handling | Investigate intelligible precedence and deliberate overrides. | INT-05–06; DIR; BP §31; R01, R06 | CANDIDATE | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-024` | Effective-request preview | Show what active rules/context will reach a particular AI action. | INT-05–06; DIR; BP §31; R01, R06 | CANDIDATE | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-025` | Contextual rule selection | Retrieve relevant guidance rather than blindly sending every lens. | INT-05–06; DIR; BP §31; R01, R06 | CANDIDATE | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-026` | Rules version and change history | Track what changed and when. | INT-05–06; DIR; BP §31; R01, R06 | CANDIDATE | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-027` | Import and export rule settings | Port author-defined configurations. | INT-05–06; DIR; BP §31; R01, R06 | CANDIDATE | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-028` | Rule sample testing | Try a rule against example text. | INT-05–06; DIR; BP §31; R01, R06 | CANDIDATE | R01, R02, R06, R08, R10 | UNASSIGNED |
| `VEL-FEAT-04-029` | Compare model reactions | Contrast responses with different active configurations. | INT-05–06; DIR; BP §31; R01, R06 | CANDIDATE | R01, R02, R06, R08, R10 | UNASSIGNED |

## 5. AI Writing Studio

**Area source:** INT-03–04; BP §32; R03, R08, R10. **Research dependencies:** R04, R06, R07, R08, R10, R15. **Related draft requirement(s):** VEL-REQ-003, VEL-REQ-006. This section is a feature inventory, not a complete UI or data-model specification.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-FEAT-05-001` | Idea generation | Explore suggestions based on author-provided story directions. | INT-03–04; BP §32; R03, R08, R10 | OWNER-INTENT | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-002` | Brainstorm alternatives | Offer several possible story developments. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-003` | Outline suggestions | Suggest structure and planned beats for author review. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-004` | Scene planning assistance | Draft candidate scene objectives and beats. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-005` | Scene drafting | Produce a provisional scene from an approved prompt and context. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-006` | Continue from selection | Continue existing text without changing accepted paragraphs. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-007` | Expand passage | Develop a selected passage into a longer option. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-008` | Rewrite selected prose | Propose revisions limited to identified text. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-009` | Clarity or polish suggestions | Improve comprehensibility without erasing intentional voice. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-010` | Description assistance | Suggest setting, action or sensory detail. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-011` | Dialogue options | Explore character-appropriate exchanges. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-012` | Scene and chapter summaries | Produce candidate summaries for review. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-013` | Manuscript analysis | Investigate strengths, gaps and writing concerns. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-014` | Editorial feedback | Explain proposed improvements instead of automatically applying them. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-015` | Chat with my book | Ask context-bounded questions about manuscript and confirmed facts. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-016` | Multiple generation variants | Present more than one option for an action. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-017` | Variant comparison | Compare and select/reject proposed alternatives. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-018` | Task-specific context | Assemble distinct context for planning, drafting and auditing. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-019` | Genre and voice direction | Apply the author's preferences and relevant rules. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-020` | Generation progress | Show streaming or progress states where supported. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-021` | Cancel or retry | Stop or repeat a requested AI operation. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-05-022` | Explicit AI-off operation | Let users completely ignore AI and continue writing. | INT-03–04; BP §32; R03, R08, R10 | CANDIDATE | R04, R06, R07, R08, R10, R15 | UNASSIGNED |

## 6. AI Providers, Model Selection & BYOK

**Area source:** INT-03, INT-13, INT-17; BP §32; R08. **Research dependencies:** R08, R14, R15, R18, R21. **Related draft requirement(s):** VEL-REQ-003. This section is a feature inventory, not a complete UI or data-model specification.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-FEAT-06-001` | Supported AI connections | Investigate connecting supported model APIs. | INT-03, INT-13, INT-17; BP §32; R08 | OWNER-INTENT | R08, R14, R15, R18, R21 | UNASSIGNED |
| `VEL-FEAT-06-002` | User-provided API keys | Explore author-supplied credentials instead of assuming platform billing. | INT-03, INT-13, INT-17; BP §32; R08 | OWNER-INTENT | R08, R14, R15, R18, R21 | UNASSIGNED |
| `VEL-FEAT-06-003` | Choose AI model | Let a writer choose among supported available models. | INT-03, INT-13, INT-17; BP §32; R08 | OWNER-INTENT | R08, R14, R15, R18, R21 | UNASSIGNED |
| `VEL-FEAT-06-004` | Connection setup and testing | Validate configured provider connectivity. | INT-03, INT-13, INT-17; BP §32; R08 | CANDIDATE | R08, R14, R15, R18, R21 | UNASSIGNED |
| `VEL-FEAT-06-005` | Credentials rotation and deletion | Replace or revoke provider access. | INT-03, INT-13, INT-17; BP §32; R08 | CANDIDATE | R08, R14, R15, R18, R21 | UNASSIGNED |
| `VEL-FEAT-06-006` | Model capability information | Disclose meaningful feature and limit differences. | INT-03, INT-13, INT-17; BP §32; R08 | CANDIDATE | R08, R14, R15, R18, R21 | UNASSIGNED |
| `VEL-FEAT-06-007` | Model context allowance | Surface verified context restrictions. | INT-03, INT-13, INT-17; BP §32; R08 | CANDIDATE | R08, R14, R15, R18, R21 | UNASSIGNED |
| `VEL-FEAT-06-008` | Estimated token usage | Estimate request scale before submission. | INT-03, INT-13, INT-17; BP §32; R08 | CANDIDATE | R08, R14, R15, R18, R21 | UNASSIGNED |
| `VEL-FEAT-06-009` | Recorded usage and cost | Show measured model calls and expenses. | INT-03, INT-13, INT-17; BP §32; R08 | CANDIDATE | R08, R14, R15, R18, R21 | UNASSIGNED |
| `VEL-FEAT-06-010` | Model output comparison | Compare candidate responses across models. | INT-03, INT-13, INT-17; BP §32; R08 | CANDIDATE | R08, R14, R15, R18, R21 | UNASSIGNED |
| `VEL-FEAT-06-011` | Action-specific model choice | Use different supported models per task. | INT-03, INT-13, INT-17; BP §32; R08 | CANDIDATE | R08, R14, R15, R18, R21 | UNASSIGNED |
| `VEL-FEAT-06-012` | Streaming generation | Display incremental output where available. | INT-03, INT-13, INT-17; BP §32; R08 | CANDIDATE | R08, R14, R15, R18, R21 | UNASSIGNED |
| `VEL-FEAT-06-013` | Request cancel and retry | Handle controlled request interruption. | INT-03, INT-13, INT-17; BP §32; R08 | CANDIDATE | R08, R14, R15, R18, R21 | UNASSIGNED |
| `VEL-FEAT-06-014` | Provider failures and rate limits | Explain unavailable or throttled requests. | INT-03, INT-13, INT-17; BP §32; R08 | CANDIDATE | R08, R14, R15, R18, R21 | UNASSIGNED |
| `VEL-FEAT-06-015` | Per-author spending ceilings | Set cost warnings and usage caps. | INT-03, INT-13, INT-17; BP §32; R08 | CANDIDATE | R08, R14, R15, R18, R21 | UNASSIGNED |
| `VEL-FEAT-06-016` | Expensive operation confirmation | Ask for approval before large-cost tasks. | INT-03, INT-13, INT-17; BP §32; R08 | CANDIDATE | R08, R14, R15, R18, R21 | UNASSIGNED |
| `VEL-FEAT-06-017` | Provider fallback options | Study explicit opt-in alternative provider paths. | INT-03, INT-13, INT-17; BP §32; R08 | CANDIDATE | R08, R14, R15, R18, R21 | UNASSIGNED |
| `VEL-FEAT-06-018` | Model version provenance | Preserve provider/version used for a proposal. | INT-03, INT-13, INT-17; BP §32; R08 | CANDIDATE | R08, R14, R15, R18, R21 | UNASSIGNED |
| `VEL-FEAT-06-019` | Disconnect without data loss | Detach AI access without disabling independent writing. | INT-03, INT-13, INT-17; BP §32; R08 | CANDIDATE | R08, R14, R15, R18, R21 | UNASSIGNED |

## 7. MCP & External AI Assistant Integration

**Area source:** INT-14, INT-24; BP §33; R09. **Research dependencies:** R09, R14, R15, R18. **Related draft requirement(s):** VEL-REQ-004. This section is a feature inventory, not a complete UI or data-model specification.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-FEAT-07-001` | External MCP assistant access | Research compatible authorized assistant connection to Vellistry. | INT-14, INT-24; BP §33; R09 | OWNER-INTENT | R09, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-07-002` | Permissioned manuscript read tools | Offer strictly scoped text access to compatible clients. | INT-14, INT-24; BP §33; R09 | CANDIDATE | R09, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-07-003` | List project/book tools | Expose permitted project and book references. | INT-14, INT-24; BP §33; R09 | CANDIDATE | R09, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-07-004` | Scene and chapter retrieval | Provide selected content only when authorized. | INT-14, INT-24; BP §33; R09 | CANDIDATE | R09, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-07-005` | Story Bible search tool | Retrieve approved story references by permission. | INT-14, INT-24; BP §33; R09 | CANDIDATE | R09, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-07-006` | Character knowledge query | Return what a character knows as of a relevant scene. | INT-14, INT-24; BP §33; R09 | CANDIDATE | R09, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-07-007` | Timeline and thread query | Inspect selected continuity ledgers. | INT-14, INT-24; BP §33; R09 | CANDIDATE | R09, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-07-008` | External audit proposals | Allow approved clients to request an analysis. | INT-14, INT-24; BP §33; R09 | CANDIDATE | R09, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-07-009` | External suggested manuscript patch | Stage a candidate change without silent acceptance. | INT-14, INT-24; BP §33; R09 | CANDIDATE | R09, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-07-010` | External alternate draft | Return provisional text under author control. | INT-14, INT-24; BP §33; R09 | CANDIDATE | R09, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-07-011` | Canon proposal tool | Stage proposed fact changes for owner approval. | INT-14, INT-24; BP §33; R09 | CANDIDATE | R09, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-07-012` | Canva or design MCP interoperability | Investigate permitted external design assistance and terms. | INT-14, INT-24; BP §33; R09 | OWNER-INTENT | R09, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-07-013` | Connection authorization | Authenticate integrations with least privilege. | INT-14, INT-24; BP §33; R09 | CANDIDATE | R09, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-07-014` | Per-tool scope controls | Distinguish read/propose/write permissions. | INT-14, INT-24; BP §33; R09 | CANDIDATE | R09, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-07-015` | Access revoke and session expiration | Remove granted access when required. | INT-14, INT-24; BP §33; R09 | CANDIDATE | R09, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-07-016` | MCP activity trail | Attribute assistant-originated requests and approvals. | INT-14, INT-24; BP §33; R09 | CANDIDATE | R09, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-07-017` | Human approval before writes | Prevent unreviewed mutation of accepted manuscript and canon. | INT-14, INT-24; BP §33; R09 | CANDIDATE | R09, R14, R15, R18 | UNASSIGNED |

## 8. Story Bible & Worldbuilding

**Area source:** BP Part V §17 and Part VI §34; INT-07; R07. **Research dependencies:** R01, R02, R07, R11, R15. **Related draft requirement(s):** VEL-REQ-005. This section is a feature inventory, not a complete UI or data-model specification.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-FEAT-08-001` | Book profile | Record title, status, central premise and story question. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-002` | Genre and audience | Track genre, subgenre and intended readership. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-003` | Narrative identity | Record POV style, tense, distance, voice and structure. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-004` | Character identities | Store biographies, appearance and stable traits. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-005` | Character psychology | Record motivations, values, fears, beliefs and contradictions. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-006` | Character competencies | Track skills, limitations and knowledge baselines. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-007` | Character relationships | Organize loyalties, antagonisms and networks. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-008` | Locations and geography | Record sites and spatial relationships. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-009` | Cultures and institutions | Store society, institutions, history and customs. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-010` | Magic and technology systems | Capture world laws, mechanics and hard limitations. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-011` | Factions | Record groups, goals, alliances and conflicts. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-012` | Plot architecture | Store major arcs, subplots, mysteries and timing. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-013` | Themes and artistic identity | Capture motifs, voice preferences and chosen omissions. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-014` | Canon classification | Distinguish locked, approved, working, possible and obsolete information. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-015` | Canon evidence links | Link accepted facts to chapters or author decisions. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-016` | Genre-specific optional templates | Offer useful fields without forcing genre templates. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-017` | Cross-book story references | Reuse shared canon only among explicitly related books. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-018` | Imported Story Bible review | Preview and verify external notes before establishing authority. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-019` | Canon contradictions | Surface potential conflicts without silently deciding truth. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-020` | Retcon approval | Deliberately revise established facts and preserve prior versions. | BP Part V §17 and Part VI §34; INT-07; R07 | CANDIDATE | R01, R02, R07, R11, R15 | UNASSIGNED |
| `VEL-FEAT-08-021` | Live character profiles | Maintain evolving character profiles as the book develops rather than only static character cards. | Owner's live-profile request (2026-10-08); BP Part V §§17–20; R07 | DIRECTED | R02, R04, R07, R10, R15 | UNASSIGNED |
| `VEL-FEAT-08-022` | Live storyline and arc profiles | Maintain evolving records of main plots, subplots and chapter/scene developments. | Owner's live-profile request (2026-10-08); BP Part V §§17–20; R07 | DIRECTED | R02, R04, R07, R10, R15 | UNASSIGNED |
| `VEL-FEAT-08-023` | Author-built profiles | Let the writer create and revise character and storyline profiles manually without AI. | Owner's live-profile request (2026-10-08); BP Part V §§17–20; R07 | DIRECTED | R02, R04, R07, R10, R15 | UNASSIGNED |
| `VEL-FEAT-08-024` | Profiles visible during writing | Display relevant character and storyline profiles within or alongside the manuscript interface. | Owner's live-profile request (2026-10-08); BP Part V §§17–20; R07 | DIRECTED | R02, R04, R07, R10, R15 | UNASSIGNED |
| `VEL-FEAT-08-025` | Profile history and change snapshots | Show how traits, goals, relationships or storyline state differed across story time and manuscript revisions. | Owner's live-profile request (2026-10-08); BP Part V §§17–20; R07 | CANDIDATE | R02, R04, R07, R10, R15 | UNASSIGNED |
| `VEL-FEAT-08-026` | AI-assisted profile drafting | Offer proposed profile entries based on new prose while keeping author-approved records authoritative. | Owner's live-profile request (2026-10-08); BP Part V §§17–20; R07 | DIRECTED | R02, R04, R07, R10, R15 | UNASSIGNED |
| `VEL-FEAT-08-027` | Profile detail and source links | Link profile details to supporting passages, relevant story time and their approval status. | Owner's live-profile request (2026-10-08); BP Part V §§17–20; R07 | CANDIDATE | R02, R04, R07, R10, R15 | UNASSIGNED |

## 9. Continuity, Memory & Story-State Tracking

**Area source:** BP Part V §§18–20 and Part VI §34; R07. **Research dependencies:** R07, R10, R15, R18, R19. **Related draft requirement(s):** VEL-REQ-005. This section is a feature inventory, not a complete UI or data-model specification.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-FEAT-09-001` | Event timeline | Track story time, order, durations and deadlines. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-002` | Location state | Track where actors and relevant entities are. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-003` | Movement and geography | Validate travel, exits, entrances and location plausibility. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-004` | Object and resource state | Track ownership, possession, condition and inventory. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-005` | Physical condition | Track injuries, fatigue, limits and recovery. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-006` | Knowledge events | Record facts learned by whom, when and from which source. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-007` | Secret boundaries | Distinguish narrator knowledge from character knowledge. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-008` | Relationship changes | Track trust, obligations, status and turning points. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-009` | World-state changes | Track law, institutions, factions and social consequences. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-010` | Open plot threads | Track mysteries, conflicts and narrative promises. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-011` | Setup/payoff status | Track open, dormant and resolved obligations. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-012` | Scene entry and exit state | Preserve causal conditions before and after scenes. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-013` | Chapter state summary | Carry accepted changes to following chapters. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-014` | Character baseline/current-state distinction | Keep stable traits distinct from temporary pressures. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-015` | Chronological contradiction warnings | Identify plausible timing inconsistencies. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-016` | Spatial continuity warnings | Flag impossible positioning or movement. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-017` | Inventory continuity warnings | Flag missing/duplicated objects or ownership changes. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-018` | Injury continuity warnings | Identify improbable physical recovery or use. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-019` | Character knowledge firewall | Detect potential unsupported information disclosure. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-020` | Relationship-reset warnings | Flag abrupt unjustified social/psychological resets. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-021` | Canon proposal gate | Do not make an inferred AI fact authoritative automatically. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-022` | Retcon impact analysis | Show story state that an approved correction would affect. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-023` | Series continuity isolation | Allow common series canon without leaking unrelated books. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-024` | Provenance for state changes | Link each accepted state transition to supporting text or author approval. | BP Part V §§18–20 and Part VI §34; R07 | CANDIDATE | R07, R10, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-09-025` | Extract changes during human drafting | Detect candidate character, plot and world-state developments as a person writes new passages. | Owner's live-profile request (2026-10-08); BP Part V §§18–22; R07 | DIRECTED | R05, R06, R07, R10, R15, R19 | UNASSIGNED |
| `VEL-FEAT-09-026` | Extract changes from AI-generated prose | Detect candidate profile and storyline changes when a model generates a new passage. | Owner's live-profile request (2026-10-08); BP Part V §§18–22; R07 | DIRECTED | R05, R06, R07, R10, R15, R19 | UNASSIGNED |
| `VEL-FEAT-09-027` | Propose, approve and dismiss profile updates | Review detected changes before they alter approved canon; generated draft text alone is not authoritative. | Owner's live-profile request (2026-10-08); BP Part V §§18–22; R07 | DIRECTED | R05, R06, R07, R10, R15, R19 | UNASSIGNED |
| `VEL-FEAT-09-028` | Revise profiles after manuscript edits | Reassess previously inferred information when source passages are edited, rejected or deliberately retconned. | Owner's live-profile request (2026-10-08); BP Part V §§18–22; R07 | CANDIDATE | R05, R06, R07, R10, R15, R19 | UNASSIGNED |
| `VEL-FEAT-09-029` | Approved profile context for AI | Use relevant accepted character and storyline state when constructing future model context; exclude unapproved possibilities from canon. | Owner's live-profile request (2026-10-08); BP Part V §§18–22; R07 | CANDIDATE | R05, R06, R07, R10, R15, R19 | UNASSIGNED |
| `VEL-FEAT-09-030` | Visible pending-change activity | Show proposed, accepted, rejected and superseded profile updates clearly in the authoring UI. | Owner's live-profile request (2026-10-08); BP Part V §§18–22; R07 | DIRECTED | R05, R06, R07, R10, R15, R19 | UNASSIGNED |

## 10. Writing Quality, Editing Audits & Literary Intelligence

**Area source:** SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19. **Research dependencies:** R01, R06, R07, R08, R19. **Related draft requirement(s):** VEL-REQ-006. This section is a feature inventory, not a complete UI or data-model specification.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-FEAT-10-001` | 13-domain guidance availability | Preserve the source's thirteen craft domains without silent rewriting. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-002` | 130-lens guidance availability | Expose the historically identified lenses when canonical packaging is certified. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-003` | 40 constitutional principles | Keep the governing craft philosophy retrievable as source material. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-004` | Light prewriting check | Apply small-task, immediate-context preparation when requested. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-005` | Standard prewriting check | Evaluate normal scene prerequisites. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-006` | Deep prewriting check | Evaluate major chronology and long-range consequences. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-007` | Draft-time craft guidance | Offer relevant guidance without dictating fixed prose patterns. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-008` | Local post-draft audit | Review recent text proportionately. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-009` | Chapter-level craft review | Review progression and local errors in a chapter. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-010` | Cross-chapter pattern audit | Compare recurring constructions and scene behavior. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-011` | Whole-manuscript review | Investigate large-scale plot and narrative change. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-012` | Prose/rhythm pattern checks | Flag repetitive syntax and mechanical phrasing in context. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-013` | Repeated gesture checks | Detect density of generic repeated physical beats. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-014` | Description and sensory analysis | Assess selected image/detail relevance. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-015` | Dialogue analysis | Investigate conversational purpose and character distinctiveness. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-016` | Emotion and subtext review | Diagnose excessive explanation or unearned feeling. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-017` | Character motivation review | Check plausible agency and consequences. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-018` | POV and knowledge review | Check narrator/character information boundaries. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-019` | Scene purpose analysis | Distinguish dramatic functions, pressure and turn. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-020` | Pacing and escalation review | Diagnose stagnation, premature closure and tension monotony. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-021` | Plot causality review | Examine links between decisions and consequences. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-022` | Open promise/payoff audit | Check whether clues and obligations move or resolve. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-023` | Subplot independence review | Check secondary character and story movement. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-024` | Physical/world coherence audit | Check active world laws and embodied constraints. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-025` | Authorial voice preservation | Detect unrequested smoothing and genre-inappropriate flattening. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-026` | Intentional exception handling | Avoid automatically condemning legitimate repetition and stylistic choices. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |
| `VEL-FEAT-10-027` | Explainable edit suggestion | Show evidence and minimal, reversible proposed correction. | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 | CANDIDATE | R01, R06, R07, R08, R19 | UNASSIGNED |

## 11. AI Suggestions, Revision Control & Provenance

**Area source:** BP §35; R10. **Research dependencies:** R05, R06, R07, R08, R10, R15. **Related draft requirement(s):** VEL-REQ-002, VEL-REQ-006. This section is a feature inventory, not a complete UI or data-model specification.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-FEAT-11-001` | Select revision target | Let author choose passage and task before AI request. | BP §35; R10 | CANDIDATE | R05, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-11-002` | Alternative suggestion | Generate a candidate without replacing current accepted text. | BP §35; R10 | CANDIDATE | R05, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-11-003` | Parallel alternatives | Keep proposed versions separate rather than merging guesses. | BP §35; R10 | CANDIDATE | R05, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-11-004` | Original-versus-suggestion comparison | Show meaningful text or semantic changes. | BP §35; R10 | CANDIDATE | R05, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-11-005` | Inline or side-by-side diff | Visualize where a suggestion changes prose. | BP §35; R10 | CANDIDATE | R05, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-11-006` | Accept or reject | Author explicitly chooses whether a suggestion modifies manuscript. | BP §35; R10 | DIRECTED | R05, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-11-007` | Edit suggestion before accepting | Let author revise a proposed version manually. | BP §35; R10 | CANDIDATE | R05, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-11-008` | Save as possibility | Retain rejected/unselected ideas outside canon. | BP §35; R10 | CANDIDATE | R05, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-11-009` | Undo accepted proposal | Revert an applied change through editor history. | BP §35; R10 | CANDIDATE | R05, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-11-010` | Revision restore | Recover an earlier accepted writing state. | BP §35; R10 | CANDIDATE | R05, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-11-011` | Stale suggestion protection | Do not blindly overwrite later edits at outdated positions. | BP §35; R10 | CANDIDATE | R05, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-11-012` | Overlapping suggestions | Handle conflicting proposed modifications. | BP §35; R10 | CANDIDATE | R05, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-11-013` | Rich-text preservation | Retain unrelated formatting during targeted revisions. | BP §35; R10 | CANDIDATE | R05, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-11-014` | Suggestion provider provenance | Record model/provider identity and version when used. | BP §35; R10 | CANDIDATE | R05, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-11-015` | Suggestion rule/context provenance | Record effective creative rules and eligible story facts. | BP §35; R10 | CANDIDATE | R05, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-11-016` | Suggestion base revision | Link to the manuscript snapshot used to create it. | BP §35; R10 | CANDIDATE | R05, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-11-017` | Choice history | Record author accept/reject decisions without fabricating permission. | BP §35; R10 | CANDIDATE | R05, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-11-018` | Dependent story impact | Show canon, chapter or publication data affected by acceptance. | BP §35; R10 | CANDIDATE | R05, R06, R07, R08, R10, R15 | UNASSIGNED |
| `VEL-FEAT-11-019` | AI metadata export/deletion | Investigate author control of generated usage history. | BP §35; R10 | CANDIDATE | R05, R06, R07, R08, R10, R15 | UNASSIGNED |

## 12. Native Cover Design Studio

**Area source:** INT-20–25; BP §36; R13. **Research dependencies:** R02, R13, R14, R15, R18. **Related draft requirement(s):** VEL-REQ-007. This section is a feature inventory, not a complete UI or data-model specification.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-FEAT-12-001` | Cover project creation | Create separate book-cover design workspaces. | INT-20–25; BP §36; R13 | OWNER-INTENT | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-002` | Multiple cover directions | Present comparable alternatives instead of one result. | INT-20–25; BP §36; R13 | OWNER-INTENT | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-003` | Editable cover design | Maintain independent text/art layers rather than a flattened output. | INT-20–25; BP §36; R13 | OWNER-INTENT | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-004` | Artwork imports | Use author-supplied permitted image assets. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-005` | AI artwork concepts | Generate images or visual directions as optional ingredients. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-006` | Design templates | Offer licensed reference templates for layouts. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-007` | Variant duplication | Save alternative designs without destroying earlier versions. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-008` | Move, resize and rotate | Adjust design layers on a canvas. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-009` | Image crop and focal control | Change composition independently of generation. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-010` | Title/author typography | Edit book title, subtitle, author and series typography. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-011` | Type hierarchy and colors | Control font emphasis, palette and contrast. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-012` | Decorative layers | Place shapes, textures and independent graphic elements. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-013` | Front/spine/back layout | Edit the physical full-wrap design where needed. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-014` | Back-cover copy | Position marketing text and other back elements. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-015` | Barcode-safe area | Mark regions reserved for retail/printer needs. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-016` | Thumbnail previews | Check storefront-sized legibility. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-017` | Print previews | Check full-size wrap, spine and title legibility. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-018` | Ebook cover export | Export a validated front image. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-019` | Print wrap export | Export printer-specific geometry with bleed/resolution checks. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-020` | Editable source export | Preserve layered project material for future updates. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-021` | Artwork/font provenance | Track license and usage restrictions of each asset. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |
| `VEL-FEAT-12-022` | Optional generated-asset revision | Adjust a design direction without regenerating the entire composition. | INT-20–25; BP §36; R13 | CANDIDATE | R02, R13, R14, R15, R18 | UNASSIGNED |

## 13. Book Layout, Formatting & Publishing Studio

**Area source:** INT-16, INT-18–19, INT-26; BP §37; R11, R12. **Research dependencies:** R11, R12, R13, R14, R18, R19. **Related draft requirement(s):** VEL-REQ-007. This section is a feature inventory, not a complete UI or data-model specification.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-FEAT-13-001` | Book formatting workflow | Prepare written manuscripts for readable and publishable output. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | OWNER-INTENT | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-002` | Writing versus Page Layout View | Keep continuous editing distinct from fixed-page composition. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-003` | Book and chapter templates | Apply suitable semantic presentation styles. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-004` | Front and back matter | Organize title, copyright, introduction and end matter. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-005` | Chapter openings | Control first-page treatment per chapter. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-006` | Table of contents | Produce navigable book organization. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-007` | Page size and trim | Configure chosen output dimensions. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-008` | Margins and gutters | Support book-binding geometry. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-009` | Facing pages | Preview odd/even page configurations. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-010` | Page numbering | Generate correct page number placement. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-011` | Running heads/feet | Present book, chapter or author details appropriately. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-012` | Widow/orphan handling | Investigate professional typographic page control. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-013` | Embedded fonts | Validate fonts and license constraints in output files. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-014` | Image placement | Maintain required illustrations and print-ready images. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-015` | Publication metadata | Preserve title, author and relevant descriptive data. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-016` | EPUB 3 export | Produce and validate accessible reflowable ebooks. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-017` | Reader PDF export | Produce an ordinary fixed-layout proof. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-018` | Print-ready PDF export | Meet an explicitly selected printer's requirements. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-019` | DOCX manuscript export | Support editable manuscript transfer/submission. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-020` | HTML/web-serial export | Publish chapter-oriented browser-readable text. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-021` | TXT/Markdown export | Offer basic portable manuscript formats. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-022` | Ebook/print cover outputs | Produce suitable separate cover files. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-023` | Output profiles | Apply format- and distributor-specific configurations. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-024` | Preflight and preview | Identify potential layout, font, image or document failures. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-025` | Change impact on pagination | Recompute dependent page numbers and spine information. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |
| `VEL-FEAT-13-026` | Submission metadata exploration | Study ISBN, copyright and platform submission inputs. | INT-16, INT-18–19, INT-26; BP §37; R11, R12 | CANDIDATE | R11, R12, R13, R14, R18, R19 | UNASSIGNED |

## 14. Manuscript Import, Migration & Portability

**Area source:** INT-18, INT-28; BP §28; R11. **Research dependencies:** R05, R11, R14, R15, R19. **Related draft requirement(s):** VEL-REQ-008. This section is a feature inventory, not a complete UI or data-model specification.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-FEAT-14-001` | Import existing manuscripts | Bring eligible writing materials into the workspace. | INT-18, INT-28; BP §28; R11 | OWNER-INTENT | R05, R11, R14, R15, R19 | UNASSIGNED |
| `VEL-FEAT-14-002` | DOCX import | Parse Word documents with visible fidelity warnings. | INT-18, INT-28; BP §28; R11 | CANDIDATE | R05, R11, R14, R15, R19 | UNASSIGNED |
| `VEL-FEAT-14-003` | Plain text import | Load unformatted content without corruption. | INT-18, INT-28; BP §28; R11 | CANDIDATE | R05, R11, R14, R15, R19 | UNASSIGNED |
| `VEL-FEAT-14-004` | Markdown import | Preserve supported semantic formatting. | INT-18, INT-28; BP §28; R11 | CANDIDATE | R05, R11, R14, R15, R19 | UNASSIGNED |
| `VEL-FEAT-14-005` | HTML import | Import cleaned and permitted HTML content. | INT-18, INT-28; BP §28; R11 | CANDIDATE | R05, R11, R14, R15, R19 | UNASSIGNED |
| `VEL-FEAT-14-006` | Conditional EPUB import | Investigate legally appropriate conversion of existing ebooks. | INT-18, INT-28; BP §28; R11 | CANDIDATE | R05, R11, R14, R15, R19 | UNASSIGNED |
| `VEL-FEAT-14-007` | Book-structure detection | Infer chapters, sections and scene divisions. | INT-18, INT-28; BP §28; R11 | CANDIDATE | R05, R11, R14, R15, R19 | UNASSIGNED |
| `VEL-FEAT-14-008` | Import organization preview | Let author verify proposed structural mapping. | INT-18, INT-28; BP §28; R11 | CANDIDATE | R05, R11, R14, R15, R19 | UNASSIGNED |
| `VEL-FEAT-14-009` | Imported note and Story Bible review | Review source facts before declaring canon. | INT-18, INT-28; BP §28; R11 | CANDIDATE | R05, R11, R14, R15, R19 | UNASSIGNED |
| `VEL-FEAT-14-010` | Rule configuration import | Bring over author-created instruction sets. | INT-18, INT-28; BP §28; R11 | CANDIDATE | R05, R11, R14, R15, R19 | UNASSIGNED |
| `VEL-FEAT-14-011` | Missing or corrupted data alerts | Detect malformed, partial or undecodable source files. | INT-18, INT-28; BP §28; R11 | CANDIDATE | R05, R11, R14, R15, R19 | UNASSIGNED |
| `VEL-FEAT-14-012` | Conflicting content review | Surface duplicates and contradictions before acceptance. | INT-18, INT-28; BP §28; R11 | CANDIDATE | R05, R11, R14, R15, R19 | UNASSIGNED |
| `VEL-FEAT-14-013` | Formatting fidelity report | Disclose dropped/unsupported styles and annotations. | INT-18, INT-28; BP §28; R11 | CANDIDATE | R05, R11, R14, R15, R19 | UNASSIGNED |
| `VEL-FEAT-14-014` | Full-manuscript export | Retrieve complete authored text in viable formats. | INT-18, INT-28; BP §28; R11 | CANDIDATE | R05, R11, R14, R15, R19 | UNASSIGNED |
| `VEL-FEAT-14-015` | Portable project archive | Export manuscripts, rules, canon and assets together. | INT-18, INT-28; BP §28; R11 | CANDIDATE | R05, R11, R14, R15, R19 | UNASSIGNED |
| `VEL-FEAT-14-016` | Cross-version migration | Preserve data across future editor/project format changes. | INT-18, INT-28; BP §28; R11 | CANDIDATE | R05, R11, R14, R15, R19 | UNASSIGNED |
| `VEL-FEAT-14-017` | Import-edit-export round trip | Verify meaningful structure survives format exchange. | INT-18, INT-28; BP §28; R11 | CANDIDATE | R05, R11, R14, R15, R19 | UNASSIGNED |
| `VEL-FEAT-14-018` | Backup and restoration | Recover portable project copies without service lock-in. | INT-18, INT-28; BP §28; R11 | CANDIDATE | R05, R11, R14, R15, R19 | UNASSIGNED |

## 15. Collaboration & Editorial Review

**Area source:** BP §29; R17. **Research dependencies:** R02, R10, R15, R17, R18. **Related draft requirement(s):** VEL-REQ-002 (related). This section is a feature inventory, not a complete UI or data-model specification.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-FEAT-15-001` | Collaborator invites | Share eligible books or projects with a selected person. | BP §29; R17 | CANDIDATE | R02, R10, R15, R17, R18 | UNASSIGNED |
| `VEL-FEAT-15-002` | Editor manuscript access | Permit invited editors to review allowed content. | BP §29; R17 | CANDIDATE | R02, R10, R15, R17, R18 | UNASSIGNED |
| `VEL-FEAT-15-003` | Beta-reader sharing | Offer appropriately scoped reading and feedback. | BP §29; R17 | CANDIDATE | R02, R10, R15, R17, R18 | UNASSIGNED |
| `VEL-FEAT-15-004` | Inline comments | Attach discussion to selected manuscript passages. | BP §29; R17 | CANDIDATE | R02, R10, R15, R17, R18 | UNASSIGNED |
| `VEL-FEAT-15-005` | Suggested editorial changes | Let collaborators propose, not silently apply, revisions. | BP §29; R17 | CANDIDATE | R02, R10, R15, R17, R18 | UNASSIGNED |
| `VEL-FEAT-15-006` | Comment/revision attribution | Identify who made a suggestion or decision. | BP §29; R17 | CANDIDATE | R02, R10, R15, R17, R18 | UNASSIGNED |
| `VEL-FEAT-15-007` | Track accept/reject | Preserve author response to editorial suggestions. | BP §29; R17 | CANDIDATE | R02, R10, R15, R17, R18 | UNASSIGNED |
| `VEL-FEAT-15-008` | Reviewer comparison | Compare contributed revisions. | BP §29; R17 | CANDIDATE | R02, R10, R15, R17, R18 | UNASSIGNED |
| `VEL-FEAT-15-009` | Simultaneous editing | Investigate real-time collaborative writing. | BP §29; R17 | CANDIDATE | R02, R10, R15, R17, R18 | UNASSIGNED |
| `VEL-FEAT-15-010` | Conflict resolution | Handle concurrent text changes and accepted canon safely. | BP §29; R17 | CANDIDATE | R02, R10, R15, R17, R18 | UNASSIGNED |
| `VEL-FEAT-15-011` | Granular permission roles | Distinguish manuscript, canon, rules, design and export rights. | BP §29; R17 | CANDIDATE | R02, R10, R15, R17, R18 | UNASSIGNED |
| `VEL-FEAT-15-012` | Access revocation | Remove collaborator rights and assess owned material. | BP §29; R17 | CANDIDATE | R02, R10, R15, R17, R18 | UNASSIGNED |
| `VEL-FEAT-15-013` | External editorial handoff | Support export to outside reviewers or designers. | BP §29; R17 | CANDIDATE | R02, R10, R15, R17, R18 | UNASSIGNED |
| `VEL-FEAT-15-014` | Shared workspace ownership | Define billing/ownership and safe departure behavior. | BP §29; R17 | CANDIDATE | R02, R10, R15, R17, R18 | UNASSIGNED |

## 16. User Experience, Accessibility & Writing Comfort

**Area source:** INT-09–10; BP §29; R16. **Research dependencies:** R02, R05, R16, R19. **Related draft requirement(s):** VEL-REQ-002 (related). This section is a feature inventory, not a complete UI or data-model specification.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-FEAT-16-001` | Light and dark theme | Support comfortable visual themes. | INT-09–10; BP §29; R16 | CANDIDATE | R02, R05, R16, R19 | UNASSIGNED |
| `VEL-FEAT-16-002` | Reading typography preferences | Provide useful serif/sans and type size controls. | INT-09–10; BP §29; R16 | CANDIDATE | R02, R05, R16, R19 | UNASSIGNED |
| `VEL-FEAT-16-003` | Content width | Adjust readable line length for long sessions. | INT-09–10; BP §29; R16 | CANDIDATE | R02, R05, R16, R19 | UNASSIGNED |
| `VEL-FEAT-16-004` | Spacing and zoom | Let authors adapt line spacing and interface scale. | INT-09–10; BP §29; R16 | CANDIDATE | R02, R05, R16, R19 | UNASSIGNED |
| `VEL-FEAT-16-005` | Distraction-free mode | Prioritize the writing surface. | INT-09–10; BP §29; R16 | CANDIDATE | R02, R05, R16, R19 | UNASSIGNED |
| `VEL-FEAT-16-006` | Keyboard-only accessibility | Make core operations possible without a pointer. | INT-09–10; BP §29; R16 | CANDIDATE | R02, R05, R16, R19 | UNASSIGNED |
| `VEL-FEAT-16-007` | Screen reader semantics | Announce document content and editing controls. | INT-09–10; BP §29; R16 | CANDIDATE | R02, R05, R16, R19 | UNASSIGNED |
| `VEL-FEAT-16-008` | Visible focus states | Ensure keyboard position and controls remain perceivable. | INT-09–10; BP §29; R16 | CANDIDATE | R02, R05, R16, R19 | UNASSIGNED |
| `VEL-FEAT-16-009` | Responsive layouts | Support appropriate widths and display sizes. | INT-09–10; BP §29; R16 | CANDIDATE | R02, R05, R16, R19 | UNASSIGNED |
| `VEL-FEAT-16-010` | Desktop-focused writing | Preserve reliable desktop author workflows. | INT-09–10; BP §29; R16 | CANDIDATE | R02, R05, R16, R19 | UNASSIGNED |
| `VEL-FEAT-16-011` | Tablet authoring research | Validate viable writing with touch and keyboards. | INT-09–10; BP §29; R16 | CANDIDATE | R02, R05, R16, R19 | UNASSIGNED |
| `VEL-FEAT-16-012` | Mobile revision research | Determine which lightweight tasks work on phones. | INT-09–10; BP §29; R16 | CANDIDATE | R02, R05, R16, R19 | UNASSIGNED |
| `VEL-FEAT-16-013` | Multilingual text | Handle Unicode and author-language needs. | INT-09–10; BP §29; R16 | CANDIDATE | R02, R05, R16, R19 | UNASSIGNED |
| `VEL-FEAT-16-014` | Right-to-left and IME entry | Study composition and bidirectional script support. | INT-09–10; BP §29; R16 | CANDIDATE | R02, R05, R16, R19 | UNASSIGNED |
| `VEL-FEAT-16-015` | Offline or intermittent work | Preserve user changes when connectivity fails. | INT-09–10; BP §29; R16 | CANDIDATE | R02, R05, R16, R19 | UNASSIGNED |
| `VEL-FEAT-16-016` | Clear progress/error messages | Explain save, AI, import and export states. | INT-09–10; BP §29; R16 | CANDIDATE | R02, R05, R16, R19 | UNASSIGNED |
| `VEL-FEAT-16-017` | Accessible AI review | Make accept/reject and comparison flows navigable. | INT-09–10; BP §29; R16 | CANDIDATE | R02, R05, R16, R19 | UNASSIGNED |

## 17. Accounts, Privacy, Ownership & Security

**Area source:** INT-13–14; BP §§32–33; R14, R15. **Research dependencies:** R14, R15, R18, R19. **Related draft requirement(s):** VEL-REQ-003, VEL-REQ-004 (related). This section is a feature inventory, not a complete UI or data-model specification.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-FEAT-17-001` | Account sign-in | Authenticate authors before accessing hosted private work. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-17-002` | Account preferences | Manage user information and service settings. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-17-003` | Workspace isolation | Prevent unauthorized cross-user/project access. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-17-004` | Manuscript confidentiality | Protect unpublished prose and accompanying notes. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-17-005` | Project permissions | Define who may view/edit each resource. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-17-006` | Secret storage | Keep provider keys out of public logs and manuscripts. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-17-007` | Credential rotation | Revoke keys and tokens safely. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-17-008` | Encrypted transport | Protect data exchanged with authorized services. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-17-009` | Storage and backup protection | Apply suitable encryption/access controls. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-17-010` | External assistant authorization | Validate MCP/tool permissions before action. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-17-011` | Imported prompt-injection defense | Avoid treating manuscript or web text as privileged instructions. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-17-012` | Upload/rich-text sanitization | Prevent unsafe markup/files from harming the service. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-17-013` | Retention and deletion | Provide understood controls for stored private content. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-17-014` | Author-controlled export | Enable retrieval of owned manuscript data. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-17-015` | Revision and accidental-delete recovery | Limit loss from mistakes or incidents. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-17-016` | Provider transmission disclosure | Explain when user text reaches external models. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-17-017` | Explicit consent for AI processing | Respect author approvals and provider conditions. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-17-018` | Spending/rate abuse safeguards | Guard against unintended model charges and overload. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |
| `VEL-FEAT-17-019` | Audit without over-collecting prose | Log meaningful action metadata with privacy. | INT-13–14; BP §§32–33; R14, R15 | CANDIDATE | R14, R15, R18, R19 | UNASSIGNED |

## 18. Pricing, Usage & Commercial Operations

**Area source:** INT-17; BP §32; R21. **Research dependencies:** R14, R15, R20, R21. **Related draft requirement(s):** VEL-REQ-003 (related). This section is a feature inventory, not a complete UI or data-model specification.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-FEAT-18-001` | Free and paid plan research | Investigate access tiers and necessary benefits. | INT-17; BP §32; R21 | CANDIDATE | R14, R15, R20, R21 | UNASSIGNED |
| `VEL-FEAT-18-002` | Subscription billing | Explore paid recurring plans. | INT-17; BP §32; R21 | CANDIDATE | R14, R15, R20, R21 | UNASSIGNED |
| `VEL-FEAT-18-003` | Usage-priced AI | Explore usage-based generation charges. | INT-17; BP §32; R21 | CANDIDATE | R14, R15, R20, R21 | UNASSIGNED |
| `VEL-FEAT-18-004` | BYOK billing separation | Separate provider charges from app service charges. | INT-17; BP §32; R21 | CANDIDATE | R14, R15, R20, R21 | UNASSIGNED |
| `VEL-FEAT-18-005` | Hybrid payment model | Investigate combined subscriptions and author keys. | INT-17; BP §32; R21 | CANDIDATE | R14, R15, R20, R21 | UNASSIGNED |
| `VEL-FEAT-18-006` | Trial access | Offer bounded free/trial use when commercially chosen. | INT-17; BP §32; R21 | CANDIDATE | R14, R15, R20, R21 | UNASSIGNED |
| `VEL-FEAT-18-007` | Usage dashboard | Display relevant token and service consumption. | INT-17; BP §32; R21 | CANDIDATE | R14, R15, R20, R21 | UNASSIGNED |
| `VEL-FEAT-18-008` | Cost estimate before action | Predict likely charges with uncertainty disclosed. | INT-17; BP §32; R21 | CANDIDATE | R14, R15, R20, R21 | UNASSIGNED |
| `VEL-FEAT-18-009` | Confirmed cost history | Show actual charges and usage. | INT-17; BP §32; R21 | CANDIDATE | R14, R15, R20, R21 | UNASSIGNED |
| `VEL-FEAT-18-010` | Spending limits and alerts | Set caps or warnings for expensive operations. | INT-17; BP §32; R21 | CANDIDATE | R14, R15, R20, R21 | UNASSIGNED |
| `VEL-FEAT-18-011` | Plan resource constraints | Define storage/process allowances when needed. | INT-17; BP §32; R21 | CANDIDATE | R14, R15, R20, R21 | UNASSIGNED |
| `VEL-FEAT-18-012` | Payment/subscription management | Handle customer subscription actions. | INT-17; BP §32; R21 | CANDIDATE | R14, R15, R20, R21 | UNASSIGNED |
| `VEL-FEAT-18-013` | Billing records and receipts | Provide appropriate invoices/receipts. | INT-17; BP §32; R21 | CANDIDATE | R14, R15, R20, R21 | UNASSIGNED |
| `VEL-FEAT-18-014` | Collaborator billing options | Research shared-workspace commercial terms. | INT-17; BP §32; R21 | CANDIDATE | R14, R15, R20, R21 | UNASSIGNED |

## Cross-cutting differentiated features (candidate concepts, not automatic separate products)

These fifteen named opportunities also appear as facets of features above. Track them for research without requiring a separate subsystem, price or feature implementation. All are proposals, not owner-approved launch commitments.

| ID | Feature | Meaning | Evidence/source | Status | Research dependencies | Release priority |
|---|---|---|---|---|---|---|
| `VEL-DIFF-001` | Narrative Debt Tracker | Keep unresolved promises, mysteries, obligations and anticipated payoffs visible. | BP §38; R22 | CANDIDATE | R07, R22 | UNASSIGNED |
| `VEL-DIFF-002` | Character Knowledge Firewall | Flag POV-specific information leaks with source and time context. | BP §38; R22 | CANDIDATE | R07, R19, R22 | UNASSIGNED |
| `VEL-DIFF-003` | Scene-Function Analysis | Compare actual dramatic roles across different scenes rather than only recurring words. | BP §38; R22 | CANDIDATE | R07, R19, R22 | UNASSIGNED |
| `VEL-DIFF-004` | Authorial Voice Protection | Show when edits erase author-defined distinctive attention or style. | BP §38; R22 | CANDIDATE | R06, R10, R22 | UNASSIGNED |
| `VEL-DIFF-005` | Publication Change-Impact Analysis | Detect when revisions affect TOC, pagination or cover-wrap dimensions. | BP §38; R22 | CANDIDATE | R11, R12, R22 | UNASSIGNED |
| `VEL-DIFF-006` | Versioned AI Decisions | Expose provider, rules, manuscript revision, context and accepted choices. | BP §38; R22 | CANDIDATE | R08, R10, R15 | UNASSIGNED |
| `VEL-DIFF-007` | Portable Project Archive | Export the manuscript and its relevant rules/canon/assets in usable forms. | BP §38; R22 | CANDIDATE | R11, R15 | UNASSIGNED |
| `VEL-DIFF-008` | POV Knowledge Heatmap | Visualize what each character can know over story time. | BP §38; R22 | CANDIDATE | R07, R22 | UNASSIGNED |
| `VEL-DIFF-009` | Causality and Promise Graph | Represent relationships between decisions, consequences and narrative promises. | BP §38; R22 | CANDIDATE | R07, R22 | UNASSIGNED |
| `VEL-DIFF-010` | Scene Pressure View | Summarize evolving obstacles, stakes and tensions across neighboring scenes. | BP §38; R22 | CANDIDATE | R07, R22 | UNASSIGNED |
| `VEL-DIFF-011` | Cross-Series Canon | Share selected authoritative facts across books within one fictional series. | BP §38; R22 | CANDIDATE | R07, R15 | UNASSIGNED |
| `VEL-DIFF-012` | Contextual Provenance Inspector | Show why a fact, warning or instruction was included in an AI request. | BP §38; R22 | CANDIDATE | R06, R07, R10 | UNASSIGNED |
| `VEL-DIFF-013` | Alternate Chapter Branches | Hold competing narrative developments without turning them into accepted canon. | BP §38; R22 | CANDIDATE | R05, R10, R22 | UNASSIGNED |
| `VEL-DIFF-014` | Automated Preflight Audit | Run consented manuscript/consistency/publication checks before release. | BP §38; R22 | CANDIDATE | R07, R12, R19 | UNASSIGNED |
| `VEL-DIFF-015` | Individualized Guidance Profiles | Reuse author-style preferences with applicability and exceptions. | BP §38; R22 | CANDIDATE | R06, R22 | UNASSIGNED |

## Coverage summary

| Feature group | Feature rows | Status and traceability |
|---|---:|---|
| 01. Writer Workspace & Project Management | 18 | INT-07, INT-09; BP §28; R04 |
| 02. Professional Manuscript Editor | 26 | INT-09–12, INT-28; BP §29; ADR-0003; R05 |
| 03. Story Planning & Outlining | 17 | INT-04, INT-07; BP §§28, 32, 34; R07 |
| 04. Visual Rules Studio | 29 | INT-05–06; DIR; BP §31; R01, R06 |
| 05. AI Writing Studio | 22 | INT-03–04; BP §32; R03, R08, R10 |
| 06. AI Providers, Model Selection & BYOK | 19 | INT-03, INT-13, INT-17; BP §32; R08 |
| 07. MCP & External AI Assistant Integration | 17 | INT-14, INT-24; BP §33; R09 |
| 08. Story Bible & Worldbuilding | 27 | BP Part V §17 and Part VI §34; INT-07; R07 |
| 09. Continuity, Memory & Story-State Tracking | 30 | BP Part V §§18–20 and Part VI §34; R07 |
| 10. Writing Quality, Editing Audits & Literary Intelligence | 27 | SRC-002, SRC-003; BP Part V §§21–26; R01, R07, R19 |
| 11. AI Suggestions, Revision Control & Provenance | 19 | BP §35; R10 |
| 12. Native Cover Design Studio | 22 | INT-20–25; BP §36; R13 |
| 13. Book Layout, Formatting & Publishing Studio | 26 | INT-16, INT-18–19, INT-26; BP §37; R11, R12 |
| 14. Manuscript Import, Migration & Portability | 18 | INT-18, INT-28; BP §28; R11 |
| 15. Collaboration & Editorial Review | 14 | BP §29; R17 |
| 16. User Experience, Accessibility & Writing Comfort | 17 | INT-09–10; BP §29; R16 |
| 17. Accounts, Privacy, Ownership & Security | 19 | INT-13–14; BP §§32–33; R14, R15 |
| 18. Pricing, Usage & Commercial Operations | 14 | INT-17; BP §32; R21 |
| Cross-cutting differentiators | 15 | BP §38; R22 |
| **Total inventory entries** | **396** | 18 groups + 15 differentiators |

**Main-group status distribution:** 22 `DIRECTED`, 16 `OWNER-INTENT`, 1 `TECH-SELECTED`, 342 `CANDIDATE`. The 15 differentiated candidates are in addition to the main-group candidate total.

## User-requested live profile evolution — 2026-10-08

The owner added a distinct requirement to the inventory: **as either the writer or the AI produces passages, Vellistry should be able to build and evolve character, storyline and other relevant story profiles continuously and display them in the authoring UI.** The existing character baselines, relationships, plot records and state ledgers remain the underlying concepts; this enhancement defines *when and how they surface during writing* without selecting data architecture or prescribing permanent automated extraction.

A proposed interaction illustrates the request without presuming a final UI: when the writer describes a character injuring their left hand, Vellistry can present a pending update against that character profile, with the relevant source passage. If the author accepts the event into the manuscript and approves the profile update, the character's current state changes and becomes available to subsequent scene planning. If the text is merely an unaccepted AI alternative, the profile remains unchanged. The writer can open the profile panel, manually update an entry, and view its earlier states. Likewise, new plot revelations, resolved mysteries and relationship turning points can appear as proposed storyline updates.

**Source and authority boundary:** This is new **owner-requested product behavior**, not a feature found verbatim in the initial SRC-001 source. The author did not select a UI component, background analysis interval, LLM extraction model, storage schema, notification behavior, processing cost, release priority or autonomous canon mutation. **Continuous** means keeping track as the story evolves; whether extraction happens per passage, save, scene completion or explicitly requested analysis requires R02/R07 evaluation. Avoid sending private manuscript text to a model without an authorized provider and consent; allow manual profile maintenance with AI fully disabled. Do not silently treat AI-suggested new facts as accepted canon.

**Owner-request record:** [Live and visible evolving story profiles](../requirements/PRODUCT-DIRECTION-LIVE-STORY-PROFILES-2026-10-08.md).\n\n**Cross-reference IDs:** `VEL-FEAT-08-021..027` and `VEL-FEAT-09-025..030`; related original profile/state entries in `VEL-FEAT-08-004..020` and `VEL-FEAT-09-001..024`.

## Approval gates, not decisions made by this catalog

1. **Owner inventory fidelity review:** Confirm names/meaning of entries against the original source; propose corrections by ID, rather than silently dropping or normalizing concepts.
2. **Source provenance:** Recover or independently verify the missing blueprint artifact (20 sections / 42 requirements) before calling this source corpus exhaustive; finish frozen R01 rule-pack identity checks separately.
3. **R02 author validation:** Observe real authors, not only competitor marketing/community anecdotes. Determine whether source-led design needs align with useful everyday author workflows.
4. **R04 release classification:** Owner selects release horizon per ID only after considering required dependencies: internal milestone, first author pilot, first public release, later, or excluded with rationale. **Nothing in this file makes that choice.**
5. **Requirements promotion:** Convert selected entries into distinct approved `VEL-REQ` records with acceptance criteria, owner/date, permissions, data integrity and associated ADRs.
6. **Implementation authorization:** Record explicit decisions on services, storage, AI providers, publication pipelines, paywalled extensions and commerce separately. Do not infer them from the presence of an inventory row.
7. **History and corrections:** Keep stable IDs. Deprecated ideas should be marked, explained and linked to successors, not silently deleted. New discoveries receive new IDs.

## Current technical/validation notes

- The editor **foundation** is owner-selected as Tiptap 3 over ProseMirror; the R05 isolated headless smoke test demonstrated limited formatting, serialization and suggestion mechanics, **not** an implemented application or browser usability.
- R06 synthetic enable/disable tests established a *mock request-assembly contract*, **not** actual fidelity of the frozen default pack or model prose quality.
- Complete manuscript data recovery, security, permissions, Word/EPUB/print publishing, editable cover studio and live writer behavior are **not verified**.
- Neither the R04 recommendation (editor-first milestone → integrated controlled-AI pilot) nor any public MVP scope is approved by author merely because listed here.

## Canonical management instruction

For future feature planning, **add an ID-backed entry here first** or explicitly cross-reference an existing one. Preserve the original source link and original status. When a feature is explicitly approved, create or reference the actual owner-approved requirement/decision and only then update its status and release horizon. This feature catalog is an index and reconciliation surface; it must not override the original manuscript guidance, direct user intent, current accepted ADRs or actual implementation tests.

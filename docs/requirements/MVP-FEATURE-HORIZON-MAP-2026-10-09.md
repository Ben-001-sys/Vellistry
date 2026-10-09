---
id: VEL-MVP-FEATURE-HORIZON-20261009-001
type: feature-scope-map
status: accepted-scope-mapping
created_at: 2026-10-09
updated_at: 2026-10-09
owner: project_owner
approved_by: project_owner
version: 1.0.0
sources:
  - "docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md — accepted eight-area MVP, owner approval 2026-10-09"
  - "docs/features/FEATURE-INVENTORY.md in PR #9 — original catalog and stable IDs"
  - "docs/research/R04-SPECIFIC-MVP-RECOMMENDATION-2026-10-09.md — pre-approval scope proposal"
related_research:
  - R02
  - R04
  - R05
  - R06
  - R07
  - R08
  - R11
  - R15
  - R19
---

# Vellistry MVP feature-horizon mapping — approved scope, explicit interpretation

**Product scope owner-approved 2026-10-09. Implementation not started.** This file translates the approved eight user-facing capabilities to the **existing 396 distinct feature IDs** in PR #9, without renumbering, renaming, deleting or overwriting feature-source provenance.

## Classification meanings

- `MVP`: the named feature's **minimum user-facing function** belongs to the approved initial MVP, subject to normal testing, security and licensing.
- `MVP-LIMITED`: **only the portion required by the narrowly specified eight-area MVP** is included. This status is deliberately more constrained than the full candidate's title/description. See the area-specific boundaries below; do not silently ship advanced variants.
- `POST-MVP-UNSCHEDULED`: not required in initial MVP; retain for future research/prioritization. **Does not mean cancelled, promised later, or that every possible future feature has owner approval.** Full Cover Studio and professional EPUB/print are explicitly postponed by the owner.
- The **source status** column (`DIRECTED`, `OWNER-INTENT`, `CANDIDATE`, `TECH-SELECTED`) is independent of release priority and must not be changed just because scope was approved.
- This is a **product-scope classification**, not an engineering implementation, acceptance test result or approved UI/backend architecture.

## Minimum MVP boundaries by area

| Approved area | Scope boundary |
|---|---|
| M1 | Solo author's book, chapter list/reorder and simple notes, **not** multi-series graph, team dashboard or complete outline design. |
| M2 | Functional Tiptap 3 writing: common semantic marks/blocks, selections, undo, search, chapter navigation, counts and focus mode. **No** full Word-like page-layout, paid tracked changes or collaboration. |
| M3 | Durable save/restore with **basic TXT/DOCX manuscript exchange**, warnings for unsupported formatting, and portable basic book/profile/rule backup. **No** book typesetting or professional publishing layout. |
| M4 | **Characters and storylines** in a visible UI, manual profile editing and state history, pending AI/human-draft inferred changes with source, review and author approval. **No** real-time every-keystroke inference or full knowledge graphs. |
| M5 | **Authentic frozen defaults** initially enabled only after non-destructive R01 pack certification; browse, toggle, restore, custom rules, workspace/book applicability, exceptions and effective request preview. **No** speculative advanced hierarchy/presets/full craft audits. |
| M6 | **Continue** and **Rewrite selection** with one **as-yet unselected** evaluated BYOK provider and cost/consent controls; not blanket permission to add all AI writing features. |
| M7 | Proposal diff/accept/reject/edit/undo, stale edit guard, basic provenance. **No** advanced semantic multi-branch merge or comprehensive publishing impact. |
| M8 | Secure accounts/manuscript/key isolation, privacy and deletion/export, accessibility and transparent save/progress. **No** promise of a particular authentication, offline, mobile app or infrastructure design. |

## Counts and provenance

- **396 IDs** in the latest draft feature catalog: **381 main features and 15 cross-cutting ideas**.
- **149 included in MVP**, comprising `MVP` and `MVP-LIMITED` entries; **247** outside the initial MVP with later order unscheduled. These are **inventory counts, not implementation tickets or independent components**.
- Eight approved delivery areas: M1=8, M2=16, M3=12, M4=24, M5=23, M6=20, M7=16, M8=30. Some ideas duplicate functionality already counted; no separate implementation unit is implied.
- **Explicitly deferred product areas:** all Cover Studio items `VEL-FEAT-12-001..022`; professional EPUB, reader/print PDF and most page layout `VEL-FEAT-13-001..018` except the narrow basic DOCX/TXT interchanges at 13-019 and 13-021; all external MCP items `VEL-FEAT-07-001..017`; all collaboration items `VEL-FEAT-15-001..014`; and actual subscription billing features in R21 group. Post-MVP research remains required.
- This mapping is derived from an **owner-approved grouped product proposal** by the assistant, and has **not** been separately confirmed by the owner for each of the 396 individual IDs. Entries marked `MVP-LIMITED` need acceptance criteria and are subject to owner review. The owner approval should **not be misrepresented as a 396-checkbox sign-off**.

## ID-by-ID mapping

| Feature ID | Original catalog feature name | Release horizon | MVP area | Original source status |
|---|---|---|---|---|
| `VEL-FEAT-01-001` | Workspace management | `POST-MVP-UNSCHEDULED` | – | OWNER-INTENT |
| `VEL-FEAT-01-002` | Multiple projects | `MVP` | M1 | OWNER-INTENT |
| `VEL-FEAT-01-003` | Series organization | `POST-MVP-UNSCHEDULED` | – | OWNER-INTENT |
| `VEL-FEAT-01-004` | Book creation and management | `MVP` | M1 | OWNER-INTENT |
| `VEL-FEAT-01-005` | Book structure | `MVP-LIMITED` | M1 | CANDIDATE |
| `VEL-FEAT-01-006` | Chapter and scene creation | `MVP` | M1 | CANDIDATE |
| `VEL-FEAT-01-007` | Chapter split and merge | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-01-008` | Chapter reorder | `MVP-LIMITED` | M1 | CANDIDATE |
| `VEL-FEAT-01-009` | Project dashboard | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-01-010` | Writing status | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-01-011` | Writing goals | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-01-012` | Project-level search | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-01-013` | Cross-book search | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-01-014` | Reference asset library | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-01-015` | Cross-references | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-01-016` | Project snapshots | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-01-017` | Alternate drafts | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-01-018` | Manuscript versus notes separation | `MVP` | M1 | CANDIDATE |
| `VEL-FEAT-02-001` | Non-AI writing | `MVP` | M2 | DIRECTED |
| `VEL-FEAT-02-002` | Rich-text editing | `MVP-LIMITED` | M2 | OWNER-INTENT |
| `VEL-FEAT-02-003` | Bold, italic and underline | `MVP-LIMITED` | M2 | CANDIDATE |
| `VEL-FEAT-02-004` | Typeface and font size controls | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-02-005` | Paragraph alignment | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-02-006` | Paragraph indents | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-02-007` | Line and paragraph spacing | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-02-008` | Headings and style hierarchy | `MVP-LIMITED` | M2 | CANDIDATE |
| `VEL-FEAT-02-009` | Quotations and block styles | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-02-010` | Lists | `MVP-LIMITED` | M2 | CANDIDATE |
| `VEL-FEAT-02-011` | Scene separators | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-02-012` | Page breaks | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-02-013` | Cut, copy, paste and selection | `MVP` | M2 | CANDIDATE |
| `VEL-FEAT-02-014` | Find and replace | `MVP-LIMITED` | M2 | CANDIDATE |
| `VEL-FEAT-02-015` | Heading and chapter navigation | `MVP` | M2 | CANDIDATE |
| `VEL-FEAT-02-016` | Keyboard shortcuts | `MVP` | M2 | CANDIDATE |
| `VEL-FEAT-02-017` | Undo and redo | `MVP` | M2 | CANDIDATE |
| `VEL-FEAT-02-018` | Autosave feedback | `MVP` | M2 | CANDIDATE |
| `VEL-FEAT-02-019` | Save, reopen and recovery | `MVP` | M2 | CANDIDATE |
| `VEL-FEAT-02-020` | Word and character counts | `MVP` | M2 | CANDIDATE |
| `VEL-FEAT-02-021` | Distraction-free writing | `MVP` | M2 | CANDIDATE |
| `VEL-FEAT-02-022` | Document revision history | `MVP-LIMITED` | M2 | CANDIDATE |
| `VEL-FEAT-02-023` | Editor annotations | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-02-024` | Tracked edits | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-02-025` | Reading or proofing view | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-02-026` | Tiptap 3 / ProseMirror foundation | `MVP` | M2 | TECH-SELECTED |
| `VEL-FEAT-03-001` | Idea capture | `MVP-LIMITED` | M1 | CANDIDATE |
| `VEL-FEAT-03-002` | Brainstorming board | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-03-003` | Premise builder | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-03-004` | Central story question | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-03-005` | Outline builder | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-03-006` | Chapter planning | `MVP-LIMITED` | M1 | CANDIDATE |
| `VEL-FEAT-03-007` | Scene planning | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-03-008` | Scene cards | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-03-009` | Plot board | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-03-010` | Character arc planning | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-03-011` | Subplot planning | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-03-012` | Setup and payoff planning | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-03-013` | Scene and chapter summaries | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-03-014` | Plot Grid | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-03-015` | AI-assisted planning | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-03-016` | Alternate plot branches | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-03-017` | Research and inspiration links | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-04-001` | Preserved fiction default source | `MVP` | M5 | DIRECTED |
| `VEL-FEAT-04-002` | Default guidance enabled initially | `MVP` | M5 | DIRECTED |
| `VEL-FEAT-04-003` | Inspect active defaults | `MVP` | M5 | DIRECTED |
| `VEL-FEAT-04-004` | Disable a default rule | `MVP` | M5 | DIRECTED |
| `VEL-FEAT-04-005` | Restore disabled defaults | `MVP` | M5 | DIRECTED |
| `VEL-FEAT-04-006` | Add personal writing rules | `MVP` | M5 | DIRECTED |
| `VEL-FEAT-04-007` | Enable or disable custom rules | `MVP` | M5 | DIRECTED |
| `VEL-FEAT-04-008` | Book and workspace scoping | `MVP` | M5 | DIRECTED |
| `VEL-FEAT-04-009` | Creative exceptions | `MVP` | M5 | DIRECTED |
| `VEL-FEAT-04-010` | No hidden disabled instruction | `MVP` | M5 | DIRECTED |
| `VEL-FEAT-04-011` | AI-off authoring | `MVP` | M5 | DIRECTED |
| `VEL-FEAT-04-012` | Rule titles and descriptions | `MVP` | M5 | CANDIDATE |
| `VEL-FEAT-04-013` | Rule examples and symptoms | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-04-014` | Rule outcomes and suggestions | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-04-015` | Rule categories | `MVP` | M5 | CANDIDATE |
| `VEL-FEAT-04-016` | Rule search and filters | `MVP` | M5 | CANDIDATE |
| `VEL-FEAT-04-017` | Duplicate and edit personal rules | `MVP` | M5 | CANDIDATE |
| `VEL-FEAT-04-018` | Rule profiles | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-04-019` | Bulk configuration | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-04-020` | Advanced scopes | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-04-021` | Scope inheritance view | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-04-022` | Rule conflict visibility | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-04-023` | Rule priority and exception handling | `MVP-LIMITED` | M5 | CANDIDATE |
| `VEL-FEAT-04-024` | Effective-request preview | `MVP` | M5 | CANDIDATE |
| `VEL-FEAT-04-025` | Contextual rule selection | `MVP-LIMITED` | M5 | CANDIDATE |
| `VEL-FEAT-04-026` | Rules version and change history | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-04-027` | Import and export rule settings | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-04-028` | Rule sample testing | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-04-029` | Compare model reactions | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-05-001` | Idea generation | `POST-MVP-UNSCHEDULED` | – | OWNER-INTENT |
| `VEL-FEAT-05-002` | Brainstorm alternatives | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-05-003` | Outline suggestions | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-05-004` | Scene planning assistance | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-05-005` | Scene drafting | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-05-006` | Continue from selection | `MVP-LIMITED` | M6 | CANDIDATE |
| `VEL-FEAT-05-007` | Expand passage | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-05-008` | Rewrite selected prose | `MVP-LIMITED` | M6 | CANDIDATE |
| `VEL-FEAT-05-009` | Clarity or polish suggestions | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-05-010` | Description assistance | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-05-011` | Dialogue options | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-05-012` | Scene and chapter summaries | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-05-013` | Manuscript analysis | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-05-014` | Editorial feedback | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-05-015` | Chat with my book | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-05-016` | Multiple generation variants | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-05-017` | Variant comparison | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-05-018` | Task-specific context | `MVP-LIMITED` | M6 | CANDIDATE |
| `VEL-FEAT-05-019` | Genre and voice direction | `MVP-LIMITED` | M6 | CANDIDATE |
| `VEL-FEAT-05-020` | Generation progress | `MVP-LIMITED` | M6 | CANDIDATE |
| `VEL-FEAT-05-021` | Cancel or retry | `MVP-LIMITED` | M6 | CANDIDATE |
| `VEL-FEAT-05-022` | Explicit AI-off operation | `MVP` | M6 | CANDIDATE |
| `VEL-FEAT-06-001` | Supported AI connections | `MVP-LIMITED` | M6 | OWNER-INTENT |
| `VEL-FEAT-06-002` | User-provided API keys | `MVP` | M6 | OWNER-INTENT |
| `VEL-FEAT-06-003` | Choose AI model | `MVP-LIMITED` | M6 | OWNER-INTENT |
| `VEL-FEAT-06-004` | Connection setup and testing | `MVP` | M6 | CANDIDATE |
| `VEL-FEAT-06-005` | Credentials rotation and deletion | `MVP` | M6 | CANDIDATE |
| `VEL-FEAT-06-006` | Model capability information | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-06-007` | Model context allowance | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-06-008` | Estimated token usage | `MVP-LIMITED` | M6 | CANDIDATE |
| `VEL-FEAT-06-009` | Recorded usage and cost | `MVP-LIMITED` | M6 | CANDIDATE |
| `VEL-FEAT-06-010` | Model output comparison | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-06-011` | Action-specific model choice | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-06-012` | Streaming generation | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-06-013` | Request cancel and retry | `MVP` | M6 | CANDIDATE |
| `VEL-FEAT-06-014` | Provider failures and rate limits | `MVP` | M6 | CANDIDATE |
| `VEL-FEAT-06-015` | Per-author spending ceilings | `MVP-LIMITED` | M6 | CANDIDATE |
| `VEL-FEAT-06-016` | Expensive operation confirmation | `MVP-LIMITED` | M6 | CANDIDATE |
| `VEL-FEAT-06-017` | Provider fallback options | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-06-018` | Model version provenance | `MVP` | M6 | CANDIDATE |
| `VEL-FEAT-06-019` | Disconnect without data loss | `MVP` | M6 | CANDIDATE |
| `VEL-FEAT-07-001` | External MCP assistant access | `POST-MVP-UNSCHEDULED` | – | OWNER-INTENT |
| `VEL-FEAT-07-002` | Permissioned manuscript read tools | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-07-003` | List project/book tools | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-07-004` | Scene and chapter retrieval | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-07-005` | Story Bible search tool | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-07-006` | Character knowledge query | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-07-007` | Timeline and thread query | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-07-008` | External audit proposals | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-07-009` | External suggested manuscript patch | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-07-010` | External alternate draft | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-07-011` | Canon proposal tool | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-07-012` | Canva or design MCP interoperability | `POST-MVP-UNSCHEDULED` | – | OWNER-INTENT |
| `VEL-FEAT-07-013` | Connection authorization | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-07-014` | Per-tool scope controls | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-07-015` | Access revoke and session expiration | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-07-016` | MCP activity trail | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-07-017` | Human approval before writes | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-08-001` | Book profile | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-08-002` | Genre and audience | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-08-003` | Narrative identity | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-08-004` | Character identities | `MVP` | M4 | CANDIDATE |
| `VEL-FEAT-08-005` | Character psychology | `MVP-LIMITED` | M4 | CANDIDATE |
| `VEL-FEAT-08-006` | Character competencies | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-08-007` | Character relationships | `MVP-LIMITED` | M4 | CANDIDATE |
| `VEL-FEAT-08-008` | Locations and geography | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-08-009` | Cultures and institutions | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-08-010` | Magic and technology systems | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-08-011` | Factions | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-08-012` | Plot architecture | `MVP-LIMITED` | M4 | CANDIDATE |
| `VEL-FEAT-08-013` | Themes and artistic identity | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-08-014` | Canon classification | `MVP-LIMITED` | M4 | CANDIDATE |
| `VEL-FEAT-08-015` | Canon evidence links | `MVP-LIMITED` | M4 | CANDIDATE |
| `VEL-FEAT-08-016` | Genre-specific optional templates | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-08-017` | Cross-book story references | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-08-018` | Imported Story Bible review | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-08-019` | Canon contradictions | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-08-020` | Retcon approval | `MVP-LIMITED` | M4 | CANDIDATE |
| `VEL-FEAT-08-021` | Live character profiles | `MVP` | M4 | DIRECTED |
| `VEL-FEAT-08-022` | Live storyline and arc profiles | `MVP` | M4 | DIRECTED |
| `VEL-FEAT-08-023` | Author-built profiles | `MVP` | M4 | DIRECTED |
| `VEL-FEAT-08-024` | Profiles visible during writing | `MVP` | M4 | DIRECTED |
| `VEL-FEAT-08-025` | Profile history and change snapshots | `MVP-LIMITED` | M4 | CANDIDATE |
| `VEL-FEAT-08-026` | AI-assisted profile drafting | `MVP-LIMITED` | M4 | DIRECTED |
| `VEL-FEAT-08-027` | Profile detail and source links | `MVP-LIMITED` | M4 | CANDIDATE |
| `VEL-FEAT-09-001` | Event timeline | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-002` | Location state | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-003` | Movement and geography | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-004` | Object and resource state | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-005` | Physical condition | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-006` | Knowledge events | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-007` | Secret boundaries | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-008` | Relationship changes | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-009` | World-state changes | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-010` | Open plot threads | `MVP-LIMITED` | M4 | CANDIDATE |
| `VEL-FEAT-09-011` | Setup/payoff status | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-012` | Scene entry and exit state | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-013` | Chapter state summary | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-014` | Character baseline/current-state distinction | `MVP-LIMITED` | M4 | CANDIDATE |
| `VEL-FEAT-09-015` | Chronological contradiction warnings | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-016` | Spatial continuity warnings | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-017` | Inventory continuity warnings | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-018` | Injury continuity warnings | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-019` | Character knowledge firewall | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-020` | Relationship-reset warnings | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-021` | Canon proposal gate | `MVP` | M4 | CANDIDATE |
| `VEL-FEAT-09-022` | Retcon impact analysis | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-023` | Series continuity isolation | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-09-024` | Provenance for state changes | `MVP-LIMITED` | M4 | CANDIDATE |
| `VEL-FEAT-09-025` | Extract changes during human drafting | `MVP-LIMITED` | M4 | DIRECTED |
| `VEL-FEAT-09-026` | Extract changes from AI-generated prose | `MVP-LIMITED` | M4 | DIRECTED |
| `VEL-FEAT-09-027` | Propose, approve and dismiss profile updates | `MVP` | M4 | DIRECTED |
| `VEL-FEAT-09-028` | Revise profiles after manuscript edits | `MVP-LIMITED` | M4 | CANDIDATE |
| `VEL-FEAT-09-029` | Approved profile context for AI | `MVP-LIMITED` | M4 | CANDIDATE |
| `VEL-FEAT-09-030` | Visible pending-change activity | `MVP` | M4 | DIRECTED |
| `VEL-FEAT-10-001` | 13-domain guidance availability | `MVP-LIMITED` | M5 | CANDIDATE |
| `VEL-FEAT-10-002` | 130-lens guidance availability | `MVP-LIMITED` | M5 | CANDIDATE |
| `VEL-FEAT-10-003` | 40 constitutional principles | `MVP-LIMITED` | M5 | CANDIDATE |
| `VEL-FEAT-10-004` | Light prewriting check | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-005` | Standard prewriting check | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-006` | Deep prewriting check | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-007` | Draft-time craft guidance | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-008` | Local post-draft audit | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-009` | Chapter-level craft review | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-010` | Cross-chapter pattern audit | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-011` | Whole-manuscript review | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-012` | Prose/rhythm pattern checks | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-013` | Repeated gesture checks | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-014` | Description and sensory analysis | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-015` | Dialogue analysis | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-016` | Emotion and subtext review | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-017` | Character motivation review | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-018` | POV and knowledge review | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-019` | Scene purpose analysis | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-020` | Pacing and escalation review | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-021` | Plot causality review | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-022` | Open promise/payoff audit | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-023` | Subplot independence review | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-024` | Physical/world coherence audit | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-025` | Authorial voice preservation | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-10-026` | Intentional exception handling | `MVP-LIMITED` | M5 | CANDIDATE |
| `VEL-FEAT-10-027` | Explainable edit suggestion | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-11-001` | Select revision target | `MVP` | M7 | CANDIDATE |
| `VEL-FEAT-11-002` | Alternative suggestion | `MVP` | M7 | CANDIDATE |
| `VEL-FEAT-11-003` | Parallel alternatives | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-11-004` | Original-versus-suggestion comparison | `MVP-LIMITED` | M7 | CANDIDATE |
| `VEL-FEAT-11-005` | Inline or side-by-side diff | `MVP-LIMITED` | M7 | CANDIDATE |
| `VEL-FEAT-11-006` | Accept or reject | `MVP` | M7 | DIRECTED |
| `VEL-FEAT-11-007` | Edit suggestion before accepting | `MVP` | M7 | CANDIDATE |
| `VEL-FEAT-11-008` | Save as possibility | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-11-009` | Undo accepted proposal | `MVP` | M7 | CANDIDATE |
| `VEL-FEAT-11-010` | Revision restore | `MVP-LIMITED` | M7 | CANDIDATE |
| `VEL-FEAT-11-011` | Stale suggestion protection | `MVP` | M7 | CANDIDATE |
| `VEL-FEAT-11-012` | Overlapping suggestions | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-11-013` | Rich-text preservation | `MVP-LIMITED` | M7 | CANDIDATE |
| `VEL-FEAT-11-014` | Suggestion provider provenance | `MVP-LIMITED` | M7 | CANDIDATE |
| `VEL-FEAT-11-015` | Suggestion rule/context provenance | `MVP-LIMITED` | M7 | CANDIDATE |
| `VEL-FEAT-11-016` | Suggestion base revision | `MVP` | M7 | CANDIDATE |
| `VEL-FEAT-11-017` | Choice history | `MVP` | M7 | CANDIDATE |
| `VEL-FEAT-11-018` | Dependent story impact | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-11-019` | AI metadata export/deletion | `MVP-LIMITED` | M7 | CANDIDATE |
| `VEL-FEAT-12-001` | Cover project creation | `POST-MVP-UNSCHEDULED` | – | OWNER-INTENT |
| `VEL-FEAT-12-002` | Multiple cover directions | `POST-MVP-UNSCHEDULED` | – | OWNER-INTENT |
| `VEL-FEAT-12-003` | Editable cover design | `POST-MVP-UNSCHEDULED` | – | OWNER-INTENT |
| `VEL-FEAT-12-004` | Artwork imports | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-12-005` | AI artwork concepts | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-12-006` | Design templates | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-12-007` | Variant duplication | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-12-008` | Move, resize and rotate | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-12-009` | Image crop and focal control | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-12-010` | Title/author typography | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-12-011` | Type hierarchy and colors | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-12-012` | Decorative layers | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-12-013` | Front/spine/back layout | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-12-014` | Back-cover copy | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-12-015` | Barcode-safe area | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-12-016` | Thumbnail previews | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-12-017` | Print previews | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-12-018` | Ebook cover export | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-12-019` | Print wrap export | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-12-020` | Editable source export | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-12-021` | Artwork/font provenance | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-12-022` | Optional generated-asset revision | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-001` | Book formatting workflow | `POST-MVP-UNSCHEDULED` | – | OWNER-INTENT |
| `VEL-FEAT-13-002` | Writing versus Page Layout View | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-003` | Book and chapter templates | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-004` | Front and back matter | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-005` | Chapter openings | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-006` | Table of contents | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-007` | Page size and trim | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-008` | Margins and gutters | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-009` | Facing pages | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-010` | Page numbering | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-011` | Running heads/feet | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-012` | Widow/orphan handling | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-013` | Embedded fonts | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-014` | Image placement | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-015` | Publication metadata | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-016` | EPUB 3 export | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-017` | Reader PDF export | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-018` | Print-ready PDF export | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-019` | DOCX manuscript export | `MVP-LIMITED` | M3 | CANDIDATE |
| `VEL-FEAT-13-020` | HTML/web-serial export | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-021` | TXT/Markdown export | `MVP-LIMITED` | M3 | CANDIDATE |
| `VEL-FEAT-13-022` | Ebook/print cover outputs | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-023` | Output profiles | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-024` | Preflight and preview | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-025` | Change impact on pagination | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-13-026` | Submission metadata exploration | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-14-001` | Import existing manuscripts | `MVP-LIMITED` | M3 | OWNER-INTENT |
| `VEL-FEAT-14-002` | DOCX import | `MVP-LIMITED` | M3 | CANDIDATE |
| `VEL-FEAT-14-003` | Plain text import | `MVP` | M3 | CANDIDATE |
| `VEL-FEAT-14-004` | Markdown import | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-14-005` | HTML import | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-14-006` | Conditional EPUB import | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-14-007` | Book-structure detection | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-14-008` | Import organization preview | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-14-009` | Imported note and Story Bible review | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-14-010` | Rule configuration import | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-14-011` | Missing or corrupted data alerts | `MVP` | M3 | CANDIDATE |
| `VEL-FEAT-14-012` | Conflicting content review | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-14-013` | Formatting fidelity report | `MVP-LIMITED` | M3 | CANDIDATE |
| `VEL-FEAT-14-014` | Full-manuscript export | `MVP` | M3 | CANDIDATE |
| `VEL-FEAT-14-015` | Portable project archive | `MVP-LIMITED` | M3 | CANDIDATE |
| `VEL-FEAT-14-016` | Cross-version migration | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-14-017` | Import-edit-export round trip | `MVP-LIMITED` | M3 | CANDIDATE |
| `VEL-FEAT-14-018` | Backup and restoration | `MVP-LIMITED` | M3 | CANDIDATE |
| `VEL-FEAT-15-001` | Collaborator invites | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-15-002` | Editor manuscript access | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-15-003` | Beta-reader sharing | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-15-004` | Inline comments | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-15-005` | Suggested editorial changes | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-15-006` | Comment/revision attribution | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-15-007` | Track accept/reject | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-15-008` | Reviewer comparison | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-15-009` | Simultaneous editing | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-15-010` | Conflict resolution | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-15-011` | Granular permission roles | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-15-012` | Access revocation | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-15-013` | External editorial handoff | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-15-014` | Shared workspace ownership | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-16-001` | Light and dark theme | `MVP-LIMITED` | M8 | CANDIDATE |
| `VEL-FEAT-16-002` | Reading typography preferences | `MVP-LIMITED` | M8 | CANDIDATE |
| `VEL-FEAT-16-003` | Content width | `MVP-LIMITED` | M8 | CANDIDATE |
| `VEL-FEAT-16-004` | Spacing and zoom | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-16-005` | Distraction-free mode | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-16-006` | Keyboard-only accessibility | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-16-007` | Screen reader semantics | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-16-008` | Visible focus states | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-16-009` | Responsive layouts | `MVP-LIMITED` | M8 | CANDIDATE |
| `VEL-FEAT-16-010` | Desktop-focused writing | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-16-011` | Tablet authoring research | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-16-012` | Mobile revision research | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-16-013` | Multilingual text | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-16-014` | Right-to-left and IME entry | `MVP-LIMITED` | M8 | CANDIDATE |
| `VEL-FEAT-16-015` | Offline or intermittent work | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-16-016` | Clear progress/error messages | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-16-017` | Accessible AI review | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-17-001` | Account sign-in | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-17-002` | Account preferences | `MVP-LIMITED` | M8 | CANDIDATE |
| `VEL-FEAT-17-003` | Workspace isolation | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-17-004` | Manuscript confidentiality | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-17-005` | Project permissions | `MVP-LIMITED` | M8 | CANDIDATE |
| `VEL-FEAT-17-006` | Secret storage | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-17-007` | Credential rotation | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-17-008` | Encrypted transport | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-17-009` | Storage and backup protection | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-17-010` | External assistant authorization | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-17-011` | Imported prompt-injection defense | `MVP-LIMITED` | M8 | CANDIDATE |
| `VEL-FEAT-17-012` | Upload/rich-text sanitization | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-17-013` | Retention and deletion | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-17-014` | Author-controlled export | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-17-015` | Revision and accidental-delete recovery | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-17-016` | Provider transmission disclosure | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-17-017` | Explicit consent for AI processing | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-17-018` | Spending/rate abuse safeguards | `MVP` | M8 | CANDIDATE |
| `VEL-FEAT-17-019` | Audit without over-collecting prose | `MVP-LIMITED` | M8 | CANDIDATE |
| `VEL-FEAT-18-001` | Free and paid plan research | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-18-002` | Subscription billing | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-18-003` | Usage-priced AI | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-18-004` | BYOK billing separation | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-18-005` | Hybrid payment model | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-18-006` | Trial access | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-18-007` | Usage dashboard | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-18-008` | Cost estimate before action | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-18-009` | Confirmed cost history | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-18-010` | Spending limits and alerts | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-18-011` | Plan resource constraints | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-18-012` | Payment/subscription management | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-18-013` | Billing records and receipts | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-FEAT-18-014` | Collaborator billing options | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-DIFF-001` | Narrative Debt Tracker | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-DIFF-002` | Character Knowledge Firewall | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-DIFF-003` | Scene-Function Analysis | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-DIFF-004` | Authorial Voice Protection | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-DIFF-005` | Publication Change-Impact Analysis | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-DIFF-006` | Versioned AI Decisions | `MVP-LIMITED` | M7 | CANDIDATE |
| `VEL-DIFF-007` | Portable Project Archive | `MVP-LIMITED` | M3 | CANDIDATE |
| `VEL-DIFF-008` | POV Knowledge Heatmap | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-DIFF-009` | Causality and Promise Graph | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-DIFF-010` | Scene Pressure View | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-DIFF-011` | Cross-Series Canon | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-DIFF-012` | Contextual Provenance Inspector | `MVP-LIMITED` | M5 | CANDIDATE |
| `VEL-DIFF-013` | Alternate Chapter Branches | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-DIFF-014` | Automated Preflight Audit | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |
| `VEL-DIFF-015` | Individualized Guidance Profiles | `POST-MVP-UNSCHEDULED` | – | CANDIDATE |

## Follow-up and change control

1. Keep the original feature catalog and immutable IDs; once PR #9 is merged, reflect approved horizons in the catalog without losing status/source fields.
2. Translate included `MVP` and `MVP-LIMITED` IDs into **specific requirements and acceptance tests** for A internal editor foundation, B+ integrated pilot and publicly validated MVP.
3. Review limited titles and any disputed inclusion by ID before implementation. Escalate scope conflicts to the owner; never silently expand the MVP.
4. Validate the R01 frozen pack, author R02 workflows, real browser editor and document portability, provider security and cost, live profiles, recovery and accessibility before production.
5. Keep advanced covers and publishing tracked for the **next explicitly approved milestones** rather than quietly reclassifying them as deleted or as immediate work.

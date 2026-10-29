# Pinned relevant original excerpts

## Exact excerpt: LANGUAGE.md lines20-34
Source commit 1ff3e91d49ab85cd3cd3f012fdf062bdd7dadc8f; blob 1b8a700218c8f93bfb4ca7972b90c00d03c673c0. Original status/authorship retained; excerpt is not a new approval.

> **Adoption status:** Complete, implementation-ready **proposed language contract**, not an already approved owner decision. On explicit owner approval and repository integration, the `APPROVED_CONCEPT` terms below express already approved product meaning, and owner-approved `PROPOSED_LABEL` entries become the effective UI vocabulary. Before approval, do not retroactively relabel proposals as accepted or silently update application code. The file may guide reviews as a candidate immediately, but its presence alone does not change product scope, technical contracts, or owner authorization.

## 0. Quick reference for product designers, writers, and coding agents

1. **The author is in control.** Do not imply the application or AI independently authors, accepts, publishes, or establishes story truth.
2. **Use familiar writing words.** Prefer **book**, **chapter**, **manuscript**, **character**, **story thread**, and **writing rule** in general explanations; reserve **Story Profiles** and **Rules Studio** for the named Vellistry surfaces.
3. **Never collapse these boundaries:** manuscript / outline / notes; draft / saved revision; AI suggestion / accepted prose; suggested fact / approved story fact; AI prose acceptance / fact approval; local recovery / confirmed online save; exported document / full book backup.
4. **Actions name their effect:** **Create book**, **Add chapter**, **Continue writing**, **Rewrite selection**, **Accept suggestion**, **Reject suggestion**, **Approve fact**, **Dismiss suggestion**, **Download manuscript**, **Download book backup**, **Sign out**. Display-name choices identified as `PROPOSED_LABEL` need owner review before deployment.
5. **Status is evidence, not decoration.** Never display **Saved** without a server durability acknowledgement or **Saved on this device** without confirmed local persistence. A lost acknowledgement is **Save status unknown**, not necessarily **Save failed** or **Conflict**.
6. **AI is optional.** Never require an AI key for ordinary book writing, manual Story Profiles, rule editing, or supported export. Do not imply AI is free or that Vellistry pays provider bills.
7. **Current shipping boundary:** live implementation is login and a basic book library. Described chapter/editor/rules/AI UI is mainly approved product scope plus proposed UX, not verified deployed behavior.
8. **No silent renaming of technology:** labels here do not authorize changes to routes, SQL columns, RPCs, auth tokens, IDs, model/provider routing, source guidance files, or migration history.
9. **On an undefined or disputed term:** reuse a known semantic term where it fits exactly; otherwise add a proposed entry and request the owner's decision. Never invent another competing name.
10. **Check the exact affected screen and state** before using an example from this document. Example copy is a template conditioned on the specified behavior, never evidence that a feature works.


## Exact excerpt: LANGUAGE.md lines62-116
Source commit 1ff3e91d49ab85cd3cd3f012fdf062bdd7dadc8f; blob 1b8a700218c8f93bfb4ca7972b90c00d03c673c0. Original status/authorship retained; excerpt is not a new approval.

| `FUTURE_RESERVED` | Useful name for an explicitly deferred feature, not an MVP menu item | No enabled UI, marketing claim, or new scope without separate approval |
| `PENDING_DECISION` | Name or semantic mapping unresolved or dependent on unverified behavior | Do not enforce as final or show as enabled without review |
| `INTERNAL_ONLY` | Engineering/process name, not a suitable general UI label | May remain unchanged in code, data, logs and engineering docs |

Use `status` **per term** and, for high-impact changes, **per specific UI label**. A product concept's approval does not make every draft string official.

## 2. Product context and audiences

**Product:** Vellistry, an author-controlled fiction writing and editing application. The approved first release is a manual-first writing environment with optional scoped AI suggestions, editable character/story-thread profiles, configurable fiction guidance and durable/portable manuscript handling. Later opportunities include series-level structure, deep story intelligence, collaboration, covers and professional publication output; these are **not** initial MVP features.

**Primary role:** **Author** — a signed-in person who owns and edits their own books, rules and approved story information. In user-facing first-person/system copy prefer **you**, **your books**, **your manuscript** over repeatedly saying “the author.” The existing system has one relevant product role. There is no approved collaborator, editor, publisher, staff, moderator or administrator role model for the MVP. Do not invent corresponding role switchers or access claims.

**Intended writers:** novelists, serialized/web-fiction writers, and writers in many genres. Expect users who know ordinary concepts such as books, chapters, drafts and characters, not necessarily APIs, tokens, source revisions, database row-level security or model context-window mechanics. Some writers avoid AI deliberately; this is a supported experience, not an onboarding failure.

**Experience constraints:** desktop-first authoring with responsive consideration; keyboard, screen reader, IME and RTL behavior require actual testing. Product English is the current source language (`<html lang="en">` in `apps/web/src/app/layout.tsx`); no locale rollout or Ghana-only formatting has been approved. Treat region, spelling preferences and date/currency format as localization decisions, not identity-based assumptions.

## 3. Fundamental language principles

1. **Describe the author's task, not an implementation artifact.** “Review changes” rather than “Resolve CAS conflict”; “Your books” rather than “books table”.
2. **Give one concept one primary name.** Shorter contextual labels are permitted if they cannot change the concept: **Rules Studio** (navigation) → **Rules** (short tab inside that studio), never “Prompts” for the same object.
3. **Do not merge neighboring concepts.** Book vs series; chapter vs scene; notes vs manuscript; outline vs accepted prose; rule vs canon; suggestion vs revision; connection vs selected model; download vs backup.
4. **Use specific action verbs.** “Create book” rather than “Create” outside an obvious create-book form. “Approve fact” rather than “Accept” when the choice changes approved story information.
5. **Show provenance and degree of certainty.** A proposed fact is **Suggested fact**, not **Fact added**; a saved draft needs an actual receipt.
6. **Preserve creative agency and style.** Language should explain choices, not score an author's prose as objectively “good/bad” or claim to detect AI-written text.
7. **Do not blame authors.** State the problem and practical recovery action; never imply a session/token/storage failure is their fault.
8. **No false reassurance.** Never say *permanently saved*, *fully secure*, *guaranteed original*, *always private*, *completely offline*, *lossless DOCX*, *zero cost*, or *immediately revoked* without specific verified guarantees.
9. **Don't promise availability.** An approved/future feature is not an active control until implemented, tested and authorized for its environment.
10. **Write for accessible interaction.** A meaningful visible label and matching accessible name must work without relying only on color, icon, placeholder, tooltip or pointer location.
11. **Use progressively disclosed detail.** Short labels for ordinary actions; precise explanatory copy for revisions, consent, data loss and security boundaries.
12. **Preserve author-supplied wording.** Names of books, chapters, characters, titles, custom rules and manuscript prose are the author's data, not strings agents should normalize automatically.

## 4. Canonical vocabulary and concept boundaries

**Reading the table:** `Primary UI term` is current where `EXISTING_UI`, describes an accepted *concept* where `APPROVED_CONCEPT`, and is a recommended display word requiring owner adoption where `PROPOSED_LABEL`. Entries can carry more than one category. Do not infer that a not-yet-built object has a live screen.

### 4.1 Authoring, documents and manuscript structure

| Primary UI term | Meaning and correct scope | Contextual alternative | Avoid / do not confuse with | Basis / status |
|---|---|---|---|---|
| **Vellistry** | Working product name used in current UI/repo | None | Generic “AI writer” as sole product name | `EXISTING_UI`; brand/trademark clearance unresolved |
| **Your books** | Signed-in author's book collection, existing page heading `/books` | **Books** in compact navigation; **Book library** in help text | Projects or dashboard when no project/dashboard entity exists | `EXISTING_UI` |
| **Book** | Author-owned manuscript container; an independently organized work | Novel in explanatory prose if genre appropriate | Project, series, document, chapter | `APPROVED_CONCEPT` |
| **Book title** | Name of one book, currently required 1–120 characters | Title within its book form | New book title as permanent field label, document name | `APPROVED_CONCEPT`; `PROPOSED_LABEL` |
| **Chapter** | Ordered component of a book; chapter identity independent of display order | Chapter number in contextual metadata | Scene; each may later be separate | `APPROVED_CONCEPT`; chapter UI not implemented |
| **Chapter title** | Author's label for a chapter | Title inside clearly scoped chapter form | Heading style, book title | `PROPOSED_LABEL` |
| **Manuscript** | Accepted prose organized into chapters; the text intended as the book | **Writing** as an action/short workspace heading | Outline, planning note, generated alternative, published edition | `APPROVED_CONCEPT` |
| **Manuscript editor** | The place to write and format the book without AI | **Editor** when surrounding context is clear | AI Studio, chat, layout/print editor | `APPROVED_CONCEPT` |
| **Writing workspace** | Work area combining manuscript and adjacent author tools | **Book workspace** for book-level shell | “Document management console” | `PROPOSED_LABEL`; route/layout proposed |
| **Planning notes** | Non-manuscript notes supporting a chapter/book | **Notes** inside scoped view | Canon, scene prose, revisions | `APPROVED_CONCEPT`; exact nav `PROPOSED_LABEL` |
| **Outline** | Planned structure or future events; can differ from what has happened | Story plan, only explanatory | Current story facts, manuscript | `FUTURE_RESERVED` as dedicated MVP module; concept distinct |
| **Scene** | A bounded narrative event/passage inside a chapter | Scene summary as a planning record | Chapter; scene-level route/schema is not approved for MVP | `FUTURE_RESERVED` / `PENDING_DECISION` |
| **Series** | Grouping of books and shared narrative continuity | Book series | Book or workspace; not a present first-MVP object | `FUTURE_RESERVED` |
| **Word count** | Number of words using the implementation's defined counting behavior | `1,234 words` as displayed value | Estimated pages or reading time | `APPROVED_CONCEPT`; counting rules to test |
| **Focus mode** | Reduced-distraction manual writing view | Distraction-free writing in help | Full-screen alone, read-only preview | `APPROVED_CONCEPT`; exact UI `PROPOSED_LABEL` |
| **Revision** | Persisted accepted version of a chapter/manuscript | **Version** in simpler explanations, if clearly a saved snapshot | Unsaved browser draft; AI suggestion; backup | `APPROVED_CONCEPT` |

## Exact excerpt: docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md lines1-95
Source commit 1ff3e91d49ab85cd3cd3f012fdf062bdd7dadc8f; blob 7a25cf8ce88b3ddb221276c38203fc976cbeb3a9. Original status/authorship retained; excerpt is not a new approval.

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

## Exact excerpt: docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md lines45-94
Source commit 1ff3e91d49ab85cd3cd3f012fdf062bdd7dadc8f; blob b61aef6b9748382e1b173e52caf598178c389962. Original status/authorship retained; excerpt is not a new approval.

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

## Exact excerpt: apps/web/src/lib/workspace/book-workspace-session.ts lines1-35
Source commit 1ff3e91d49ab85cd3cd3f012fdf062bdd7dadc8f; blob 9264cceaea7341ed3eec7d642680025ba4c947b8. Original status/authorship retained; excerpt is not a new approval.

import {chapterTitle, matchingReceipt, parseCommand, parseDocument, validId, validNotes,
  type WorkspaceCommand, type WorkspaceDocument, type WorkspacePort, type WorkspaceRequest} from "./book-workspace-contract";

export type WorkspaceSnapshot = Readonly<{
  phase: "idle" | "checking" | "loading" | "ready" | "denied" | "error" | "unverified";
  document: WorkspaceDocument | null; selectedChapterId: string | null;
  createTitle: string; renameTitle: string; bookNoteDraft: string; chapterNoteDraft: string;
  pending: boolean; uncertain: boolean; conflict: boolean; message: string;
}>;
type Scope = {owner: string; bookId: string; generation: number; key: string};
type Cache = {createTitle: string; drafts: Map<string, string>; renames: Map<string, string>; selected: string | null;
  operation: WorkspaceRequest | null; uncertain: boolean; conflict: boolean; minimumVersion: number};
export type WorkspaceSession = ReturnType<typeof createWorkspaceSession>;

function freeze<T>(value: T): T {
  if (value && typeof value === "object") {
    Object.values(value).forEach(v => { if (v && typeof v === "object") freeze(v); });
    Object.freeze(value);
  }
  return value;
}
const blank = (phase: WorkspaceSnapshot["phase"], message: string): WorkspaceSnapshot => ({
  phase, document: null, selectedChapterId: null, createTitle: "", renameTitle: "", bookNoteDraft: "", chapterNoteDraft: "",
  pending: false, uncertain: false, conflict: false, message,
});
const noteKey = (chapterId?: string) => chapterId === undefined ? "book" : JSON.stringify(["chapter", chapterId]);

export function createWorkspaceSession(deps: {
  /** Independently verified identity, following the existing Auth getUser semantics. */
  readOwner: () => Promise<string | null>;
  port: WorkspacePort;
  operationId?: () => string;
}) {
  let model = freeze(blank("idle", "Open a book to begin this local preview."));
  let generation = 0;

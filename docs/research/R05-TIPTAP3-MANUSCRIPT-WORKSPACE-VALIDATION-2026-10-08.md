---
id: VEL-RES-R05-TIPTAP3-20261008-002
type: research-finding
status: draft
created_at: 2026-10-08
updated_at: 2026-10-08
author: project-research
version: 0.1.1
sources:
  - "Owner decision, 2026-10-08: Tiptap 3 / ProseMirror manuscript editor"
  - "ADR-0003 (pending merge in PR #6 at research time)"
  - "Official Tiptap 3 documentation, links listed below"
related_research:
  - R05
  - R10
  - R11
  - R16
related_adrs:
  - ADR-0003
related_experiments:
  - VEL-EXP-R05-001
---

# R05-B — Tiptap 3 manuscript-workspace feasibility and integration research

**Status: TECHNICAL SPIKE / PROPOSED MANUSCRIPT UX, NOT A SELECTED APPLICATION ARCHITECTURE.**  
**Date:** 2026-10-08.  
**Branch:** `research/r05-tiptap3-headless-spike-v0.1`.

## Why this research is now possible

On 2026-10-08, the project owner **chose Tiptap major version 3, which uses ProseMirror**, as the manuscript-editing foundation. [ADR-0003](https://github.com/Ben-001-sys/Vellistry/blob/docs/adr-0003-tiptap3-manuscript-editor/docs/decisions/ADR-0003-use-tiptap-3-prosemirror-for-manuscript-editor.md) records the chosen subsystem in draft PR #6. This does **not** settle the overall frontend, backend, database, model provider or publishing pipeline. The editor choice should be evaluated against real authoring requirements without silently extending its approved scope.

## Officially documented Tiptap 3 primitives and their limits

| Primitive | Vendor documentation / technical fact | Vellistry application question |
|---|---|---|
| Document tree, schema, nodes and marks | Tiptap/ProseMirror treats heading/paragraph/list blocks as nodes and inline bold/italic as marks. Unsupported pasted or imported markup can be stripped if unrecognized by the configured schema. [Schema](https://tiptap.dev/docs/editor/core-concepts/schema). | Which manuscript elements must survive import, save, edit, undo and export without data loss? |
| JSON persistence | The docs recommend `editor.getJSON()` for storage; it is easier to parse and evolve than saved HTML. [Persistence](https://tiptap.dev/docs/editor/core-concepts/persistence). | What is the **future** versioned save and recovery contract? No data store selected. |
| Selection ranges and commands | `insertContentAt({ from, to }, value)` replaces a given range, while selection/focus commands manage cursor ranges. [InsertContentAt](https://tiptap.dev/docs/editor/api/commands/content/insert-content-at). | How do suggestions remain safe if the author types after requesting AI help? |
| Undo/redo | Core Tiptap 3 `StarterKit` includes undo/redo. [Undo/redo](https://tiptap.dev/docs/editor/extensions/functionality/undo-redo), [configuration](https://tiptap.dev/docs/editor/getting-started/configure). | Are accepted AI edits undoable as ordinary user operations? |
| Lifecycle/events | `update`, `transaction`, `selectionUpdate`, `contentError` events can be observed. [Events](https://tiptap.dev/docs/editor/api/events). | How should saves, snapshots, selection tracking and failure warnings be surfaced? |
| Content validation | `enableContentCheck: true` activates schema compatibility checks, especially for JSON content. [Schema validation](https://tiptap.dev/docs/guides/invalid-schema). | Prevent silent loss of author formatting when loading stored or imported prose. |
| Word/character count | Open-source character count extension exposes per-document words and characters. [Character Count](https://tiptap.dev/docs/editor/extensions/functionality/character-count). | Counts by current chapter, manuscript and optionally highlighted selection. |
| Stable node IDs | `UniqueID` can attach identifiers to paragraphs/headings and handle split/merge scenarios, but its collaboration initialization has documented pitfalls. [UniqueID](https://tiptap.dev/docs/editor/extensions/functionality/uniqueid). | Node IDs might help scene navigation or feedback anchors; do not assume they alone solve arbitrary text-range anchoring. |
| Navigation | Table-of-Contents extension exposes heading anchors and positions. [ToC](https://tiptap.dev/docs/editor/extensions/functionality/table-of-contents). | Is manuscript navigation derived from headings, separate chapter records, or both? |
| Editing performance | Tiptap recommends isolating editor rendering from unrelated UI state and using selective subscriptions in React integrations. [Performance](https://tiptap.dev/docs/guides/performance). | No overall frontend framework was selected. Performance must be tested in the actual chosen app shell later. |

**Editorial/source boundary:** these claims are **published vendor API capabilities**, not proven end-user Vellistry behavior. Free/open-source status of the editor core does not include paid document conversion, premium AI tooling, page layout or professional publishing features. The [R05 comparison](https://github.com/Ben-001-sys/Vellistry/pull/4) remains prior research and must retain its original conclusions in chronological context.

## The desired author experience (UX research proposal, not approved screens)

A workable long-fiction writing session is best tested end-to-end, rather than as isolated formatting buttons:

1. **Open a book.** Author sees a manuscript navigation panel showing chapters and scenes, a prominent writing surface, and optional panels for notes and AI guidance. This is an illustrative arrangement, not a selected visual layout.
2. **Compose normally.** Typing, selections, common shortcuts, character/word count, heading navigation and undo work without any configured AI provider.
3. **Move between chapters.** The author can jump chapters while preserving edits and their cursor/scroll positions; data-loss and autosave failure messaging need research.
4. **Format prose deliberately.** Bold/italic, paragraphs, headings, quotations, scene breaks and manuscript metadata retain meaning and survive a serialize/restore cycle.
5. **Ask for a rewrite.** The author selects a passage and chooses a familiar action such as "Rewrite" or "Continue"; applicable enabled writing guidance is decided outside Tiptap and sent separately to the model through an as-yet-unselected integration.
6. **Review without disruption.** A suggested alternate can be viewed next to/over the selected passage with accept, reject or revise controls. Original text must not be silently overwritten; user choice is primary.
7. **Type while waiting.** If the author edits the underlying manuscript, the old suggestion must not overwrite later work just because its original numerical offsets still exist.
8. **Revisit chapters.** The book survives reload, damaged imports trigger visible errors rather than silent stripping, and the source of each accepted AI edit is distinguishable from ordinary writing.

### Three important candidate boundaries to investigate

**A — Manuscript structure.** Single Tiptap document with headings, one Tiptap document per chapter/scene, or a mixed document/editor split? No option chosen. A single large document might simplify full-manuscript selection but increase performance/collaboration complexity; separate editor documents could simplify navigation and saving but complicate across-chapter formatting or continuous reading.

**B — Editor as document engine, AI as proposed changes.** The Rules Studio determines which instructions are active; Tiptap handles editing and selection. A preliminary safety contract is `capture passage/version → generate alternative → compare current version/range → let author accept or reject → apply transaction → retain undo`. **This is a proposed functional flow, not a model orchestration architecture or final anchoring algorithm.**

**C — Editorial format versus publishing output.** Maintaining a good on-screen manuscript does not automatically create correct EPUB, Word or print interiors. Keep the publishing pipeline, pagination and file conversion choices open despite having chosen the editor.

## Actual isolated Tiptap 3 spike (CI is the source of measurements)

The branch contains a **self-contained Node + jsdom research harness** under [`docs/research/spikes/tiptap3-headless/`](spikes/tiptap3-headless/). It imports **real Tiptap 3 packages** and makes no network/model calls during tests. The only network needed is temporary npm package installation in GitHub Actions.

- `package.json`: isolated dependencies, major version 3 required; Node/jsdom is a testing environment, **not a commitment to Node as application backend or jsdom as browser runtime**.
- `spike.test.mjs`: seven smoke/experiment cases on synthetic public-domain-free invented sample text.
- [GitHub workflow](../../.github/workflows/r05-tiptap3-spike.yml): installs packages, prints exact resolved versions, and runs smoke tests for PR evidence.

| Test | Criterion | What it does not prove |
|---|---|---|
| R05-S01 | Create heading/paragraph/italic/bold document via real editor | Real writer UX or importer fidelity |
| R05-S02 | JSON serialize then recreate editor with matching formatting | Reliable database persistence or cross-version migrations |
| R05-S03 | Reject a simulated AI suggestion without changing original | Real model integration or collaborative editing |
| R05-S04 | Accept a selected passage replacement without disturbing unrelated bold prose | All selections or marks are preserved |
| R05-S05 | If the manuscript changes after suggestion capture, refuse stale replacement | True transaction-aware range mapping, merge/conflict UI |
| R05-S06 | Accepted suggestion appears in undo/redo history | Complete change tracking |
| R05-S07 | Load a 100k+ word synthetic chapter and record initialization/JSON serialization time in CI | Browser/desktop responsiveness, 100k-word editor production readiness or cross-chapter workflows |

**Guardrail:** The proposal uses a full-document JSON snapshot to detect staleness **only as a correctness demonstration**. That would be too conservative and potentially wasteful for production; future trials should compare ProseMirror transaction mapping, durable range references, and versioned suggestions. Do not adopt the snapshot algorithm as final without measured evidence.

### Execution evidence — actual packages, GitHub CI

- **First workflow attempt:** [run 37843277680](https://github.com/Ben-001-sys/Vellistry/actions/runs/37843277680), **6 passed / 1 failed**. The JSON-restore assertion compared plain-object versus null-prototype ProseMirror attribute objects with strict deep equality. Inspecting CI showed semantically identical JSON values, but different JavaScript attribute prototypes. This was an **overly strict test assertion**, not independently proven data loss.
- **Correction:** the round-trip test now compares `JSON.stringify(editor.getJSON())` values before and after restore; this is the appropriate serialized-value comparison for this particular claim, but does **not** validate schema migrations or all import/export situations.
- **Passing workflow:** [run 37843380823](https://github.com/Ben-001-sys/Vellistry/actions/runs/37843380823) on commit `2276d12f6729740308bbe038a4fbb8f8f465be2a`: **7 passed, 0 failed**. Dependency versions logged: `@tiptap/core@3.31.4`, `@tiptap/pm@3.31.4`, `@tiptap/starter-kit@3.31.4`, `jsdom@26.1.0`.
- **Synthetic long-input observation:** 893 paragraphs, **101,802 whitespace-delimited words**, ~**62.1 ms** editor initialization and **0.5 ms** `getJSON()` serialization in the CI/jsdom run. These specific figures are **environmental observations**, with no end-user performance guarantee or known variance. They measure neither keyboard events nor actual page layout and should not be advertised as editor performance for novels.
- **Evidence status:** these tests exercise real Tiptap libraries under simulated DOM; they do **not** validate complete book UI, browser caret behavior, persistence, provider-side writing, tracked changes, imports, commercial features, EPUB/PDF or the Rules Studio.

The local runtime cannot reach npm registry (`EAI_AGAIN`), so the evidence above comes from the quoted GitHub Actions logs. Pin exact dependency versions and test real browsers before an actual application implementation PR; `^3` in this research spike intentionally allowed the current major version.

## Acceptance and follow-up gates

1. **CI smoke:** real Tiptap 3 dependencies resolve and smoke tests pass on this branch. Record exact workflow and version output; if not, fix the research harness before asserting library behavior.
2. **Browser trial:** repeat editor initialization, selections, paste and UI workflows in Chromium/Firefox/Edge with a keyboard and IME tests; jsdom cannot validate browser caret/layout behavior.
3. **Large document:** compare long single-document and chapter-partitioned examples; record keyboard latency, memory usage, re-render counts and save time, not just initialization.
4. **Import/paste:** build mixed-format Word/Google Docs fixtures and inspect dropped formatting under `enableContentCheck`; decide required extensions before an implementation PR.
5. **AI suggestion safety:** test edits occurring while suggestions are pending, concurrent selection changes, marks, paragraph splits, accept/reject, undo, and exact editing range preservation.
6. **Source and publishing:** validate DOCX/EPUB/print pipeline separately; no paid Pages/Conversion product has been selected.
7. **Author validation:** demonstrate navigable chapter writing and non-AI-first experience to writers; observed results should inform prioritization.

## Open decisions — deliberately not resolved

- Single document vs chapter-scoped editor state; manuscript data storage, autosave/recovery, scene/canon linking.
- Exact basic mark/node set (scene breaks, footnotes, comments, indentation, lists, headings, images).
- UI visual design, frontend app framework, rendering patterns, collaborative editing and offline mode.
- AI provider, BYOK, MCP interactions, Rules Studio active context and prompt assembly.
- Paid licenses/extensions, cover studio, PDF/EPUB/DOCX and print interior pipeline.
- Whether an accepted AI rewrite should preserve selected styling, inherit it or present alternate formatting.

**Binding decision carried forward:** Tiptap 3/ProseMirror is selected as the manuscript editor. **Everything else above is research or a proposed test and requires evidence/owner approval before an implementation commitment.**

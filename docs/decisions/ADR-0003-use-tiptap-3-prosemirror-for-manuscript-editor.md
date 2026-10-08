---
id: ADR-0003
title: Use Tiptap 3 on ProseMirror as the manuscript editor foundation
type: architecture-decision
status: accepted
created_at: 2026-10-08
updated_at: 2026-10-08
decided_at: 2026-10-08
author: project-research
approved_by: project_owner
version: 1.0.0
sources:
  - "Fiction Writing Project owner confirmation on 2026-10-08: 'okay, we are using it', replying to the specific Tiptap 3 / ProseMirror recommendation; permalink pending archival"
  - "https://tiptap.dev/docs/editor/getting-started/overview"
  - "https://tiptap.dev/docs/editor/getting-started/install/react"
  - "https://github.com/Ben-001-sys/Vellistry/blob/research/r05-editor-license-capability-scan-v0.1/docs/research/R05-MANUSCRIPT-EDITOR-LICENSING-CAPABILITY-SCAN-2026-10-08.md (research branch; drafted before the owner selected the editor)"
evidence:
  - "Owner explicitly accepted Tiptap 3 built on ProseMirror as Vellistry's manuscript editor foundation in the 2026-10-08 Fiction Writing Project conversation."
  - "The preceding recommendation limited acceptance to the open-source editor core, excluding paid conversion/pagination features and all remaining application-stack decisions."
  - "Tiptap's official documentation identifies its headless editor as ProseMirror-based and its open-source editor as MIT-licensed."
  - "Primary original conversation URL not yet archived; record exact owner reply and the preceding technology referent without inventing a permalink."
related_requirements:
  - VEL-REQ-001
related_features: []
related_contracts: []
related_adrs: []
supersedes: []
superseded_by: []
implementation_refs: []
---

# ADR-0003 — Use Tiptap 3 / ProseMirror for Vellistry's manuscript editor

## Context and problem statement

Vellistry is intended to be a serious, author-focused long-form fiction editor that remains useful without AI. The author requested substantial word-processing interactions and full control of AI-generated or suggested changes, without rebuilding every basic editing primitive from scratch.

R05 investigated ProseMirror, Tiptap, Lexical, Slate, Plate, CKEditor 5 and TinyMCE 8, their core license positions and the separate complexities of book exports. R05's study was first written while the editor was **not yet chosen**; that chronology is preserved.

## Decision

**Adopt Tiptap major version 3 as the manuscript rich-text editor foundation, using ProseMirror underneath through Tiptap.** This was explicitly selected by the project owner on **2026-10-08**, after the recommendation: “Tiptap 3, built on ProseMirror.” The owner responded, “okay, we are using it.”

The intended editor foundation is the **open-source Tiptap 3 editor and its appropriately licensed dependencies**, not an automatic commitment to the paid Tiptap product suite.

This is a binding **technology choice for the manuscript editing subsystem**, but is **not a claim that an editor has been built, tested or deployed**.

### Explicitly outside this decision

- No selection of React, Next.js, Vue or any overall application frontend framework, despite Tiptap providing integration guides for several.
- No choice of backend, database, authentication, storage, cloud hosting or repository folder structure.
- No purchase or adoption of Tiptap Pro, Pages, Conversion, Tracked Changes, collaboration services or a vendor cloud account.
- No decision about EPUB, DOCX or print-PDF generators, cover design, professional typesetting or a publication pipeline.
- No selection of AI provider, model, API gateway, BYOK design, MCP topology or a rule-evaluation engine.
- No approval of any precise Tiptap 3 patch release or dependency pin until an implementation experiment establishes a supported combination.
- No rewriting, renumbering or selection between disputed versions of the frozen fiction-guidance source.

## Alternatives considered

- **Direct ProseMirror:** permissive and flexible, but more basic editor integration, commands and UI behavior must be assembled by Vellistry.
- **Lexical:** MIT-licensed extensible editor with a strong plugin/event model; considered but not chosen as the manuscript editor foundation.
- **Slate / Plate:** customizable editor approaches with permissive-core elements; considered but not chosen.
- **CKEditor 5:** extensive rich-document feature set but GPL/commercial and premium-service licensing require deeper commercial assessment.
- **TinyMCE 8:** familiar editor with commercial/self-hosted license considerations.
- **Build an editor from scratch:** adds difficult selection, IME, undo, paste, accessibility and rich-text correctness work unrelated to Vellistry's differentiating Rules Studio.

These research alternatives remain documented, not banned from use in other unrelated contexts.

## Rationale

- Tiptap 3 uses ProseMirror's structured editing mechanics without requiring the team to operate two independent editors.
- Headless, extension-based APIs support an independently designed novel-writing interface, chapter-aware operations and proposed AI selection/rewrite workflows.
- The documented open-source editor core uses MIT licensing; third-party extension and paid product licenses must be individually checked.
- The choice reuses mature editing primitives while preserving room to evaluate long-form performance, author-specific interface controls and manuscript import/export separately.

See the [official overview](https://tiptap.dev/docs/editor/getting-started/overview), [ProseMirror dependency description](https://tiptap.dev/docs/editor/getting-started/install/react) and independent [R05 research report](https://github.com/Ben-001-sys/Vellistry/blob/research/r05-editor-license-capability-scan-v0.1/docs/research/R05-MANUSCRIPT-EDITOR-LICENSING-CAPABILITY-SCAN-2026-10-08.md) on its separate draft research branch.

## Consequences and trade-offs

- Future editor feasibility prototypes should use **Tiptap 3 / ProseMirror** rather than re-open engine selection without a documented reason or superseding owner decision.
- The application will still need its own author-facing UI, chapter/scene structure, persistence boundary, accessibility testing, large-manuscript performance work, and safe accept/reject editing behavior for AI proposals.
- The editor's JSON/structured representation is **not** an approved application storage schema or full manuscript interchange specification.
- MIT licensing of the core does **not** imply that pagination, professional DOCX round trips, EPUB, print PDF, tracked changes or hosted conversion are free or bundled.
- Existing R05 comparison material is retained as pre-decision evidence and its tests remain useful as verification gates.
- If core performance or essential author workflows fail, record the evidence and propose an explicit change or superseding ADR; do not silently replace this accepted choice.

## Evidence and verification limits

**Owner approval:** In the Fiction Writing Project conversation on 2026-10-08, the assistant proposed “Tiptap 3, built on ProseMirror” as the manuscript editor, explicitly stating that it was only a recommendation until owner approval. The owner asked for an explanation and subsequently stated **“okay, we are using it.”** This is direct approval of the precisely identified editor choice. The original conversation permalink is **not yet available in the repository**; do not invent one or imply a GitHub approval comment was posted.

**Independent vendor documentation:** Tiptap's official [overview](https://tiptap.dev/docs/editor/getting-started/overview) describes a ProseMirror-based headless editor and MIT-licensed open-source packages, with paid offerings separate. The [Tiptap 3 update guide](https://tiptap.dev/docs/guides/upgrade-tiptap-v2) documents the major-version boundary and migration differences.

**Approval is not implementation:** No Tiptap integration or manuscript trial is claimed by this ADR. A future implementation PR and test results will be separate evidence.

## Implementation status

**Not implemented.** Next bounded engineering validation: prototype a Tiptap 3 manuscript editing session; test long chapters, paste/format preservation, selection anchoring for AI rewrites, author acceptance/rejection, undo, non-AI writing, and accessibility. Evaluate document conversion and pagination **as separate decisions**. Exact scope and experimental deployment remain to be planned and reviewed.

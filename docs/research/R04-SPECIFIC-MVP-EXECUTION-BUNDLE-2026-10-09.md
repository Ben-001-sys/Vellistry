---
id: VEL-EXE-R04-20261009-002
type: execution-bundle
status: proposed-research-complete
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "docs/research/R04-SPECIFIC-MVP-RECOMMENDATION-2026-10-09.md"
  - "docs/research/R01-SRC001-USER-INTENT-EXTRACTION.md"
  - "docs/requirements/PRODUCT-DIRECTION-FROZEN-DEFAULT-GUIDANCE-2026-10-08.md"
  - "docs/features/FEATURE-INVENTORY.md (PR #9)"
related_research:
  - R01
  - R02
  - R03
  - R04
  - R05
  - R06
  - R07
  - R08
  - R10
  - R11
  - R12
  - R13
  - R15
  - R19
  - R21
related_adrs:
  - ADR-0003
---

# ExecutionBundle — one specific Vellistry MVP recommendation

## Objective

Provide a concrete and falsifiable author-facing initial MVP definition instead of an open-ended feature wish list, while preserving original owner scope and the explicit live profile requirement.

## FACT — what research/input actually exists

- Source-extracted user intention covers serious independent book writing, author rules, AI model/provider research and very strong cover/publishing interests.
- Owner specifically froze the default guidance source as initially enabled and user-controllable, without authorizing a silent rewrite of the AR variants.
- Owner selected Tiptap 3/ProseMirror as manuscript-editor foundation, not a general tech stack.
- Owner subsequently requested profiles that evolve and remain visible during both human and AI generation.
- Existing R04 options treated A editor-only as an internal reliability milestone and B editor + controlled AI as a candidate integrated pilot; no MVP scope has been approved.
- R05 tested seven real Tiptap editing cases under jsdom; R06 tested 12 simulated rule-inclusion cases. Neither establishes production editor readiness or model quality.
- Official Novelcrafter documentation currently describes automatic Codex tracking, character progressions, prompt/model features; Sudowrite's official Story Bible documentation describes story context used to generate prose; Reedsy Studio provides core editor/publishing features. Those generic mechanisms are not unique Vellistry inventions.

## INTERPRETATION and one PROPOSAL

- A credible **first Vellistry MVP** would deliver one coherent author journey: manually write across chapters, safely save/recover/export, use visible character/storyline profiles, configure default and custom rules, optionally invoke Continue/Rewrite through a bounded BYOK provider, and approve/reject both manuscript revisions and profile updates.
- The eight connected MVP areas and suggested acceptance scenario are specified in [the recommendation](R04-SPECIFIC-MVP-RECOMMENDATION-2026-10-09.md).
- Live profiles are included early because they form a strong intersection of author use and optionally context-aware AI, **not** because automatic knowledge graphs have been validated.
- One provider and basic DOCX interchange are **analyst release-scope choices** to test, not owner-approved integration/publishing decisions.
- Covers remain a **strategically important later capability**; full layered native cover creation and professional print/EPUB production would overwhelm the first writing and truth-preservation validation slice.

## No changes to accepted scope or original sources

- **No approval** obtained for any MVP feature list, release horizon, pricing, timeline, hosting, complete application architecture, model provider, paid Tiptap services, cover generator, conversion engine, or R01 rule packaging.
- **No update** to all 396 canonical feature rows' `UNASSIGNED` release priority. That classification requires owner-approved scoping and source/evidence verification.
- **No external author interviews, real model trials, DOCX import/export validation or production deployment** conducted in this analysis.
- No claim that Vellistry is first to offer automatic tracking, Story Bible or custom prompts.

## Changed records and self-review

- Added proposed R04 MVP document and this evidence bundle on an isolated draft branch.
- Updated branch `CURRENT-STATE.md` with proposed release boundary and unresolved gates.
- Prepared draft PR for owner review without merge or implementation authorization.

**Approval gate:** The owner should review scope/deferrals, especially whether basic DOCX interchange is mandatory, whether one model provider suffices, the proposed live-profile review cadence, and deferring native Cover Studio/print-EPUB production. An explicit approval converts a proposal into product-scope decision; no chat prompt requesting a recommendation alone should be interpreted as acceptance.

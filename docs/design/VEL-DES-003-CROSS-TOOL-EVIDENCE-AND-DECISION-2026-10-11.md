---
id: VEL-DES-CROSS-TOOL-ADJUDICATION-20261011-001
title: Vellistry Figma Design, Figma Make and Lovable comparative evidence
type: proposed-design-evaluation
status: make-external-walkthrough-lovable-source-inspected
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.2.0
sources:
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
  - docs/design/VEL-DES-001-002-UX-HANDOFF-2026-10-10.md
  - docs/design/VEL-DES-002-JOURNEY-AND-STATE-MATRIX-2026-10-10.md
  - docs/design/VEL-DES-LOVABLE-INITIAL-CODE-REVIEW-2026-10-11.md
  - docs/design/VEL-DES-FIGMA-MAKE-ARTIFACT-REVIEW-2026-10-11.md
---

# Cross-tool design adjudication — evidence snapshot (NOT OWNER APPROVED)

## What is and is not verified

**Evidence baseline, 2026-10-11:**
- [Editable Figma Design](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U): six synthetic editable frames were created (A, B, four hybrid candidates). Earlier screenshots of A, B and a unified rewrite were inspected, but no connected functional prototype or all-screen responsive QA was demonstrated. Figma Starter MCP calls are now quota-limited.
- [Figma Make](https://www.figma.com/make/ayQhoFZLnAUn9212mxaYpw/Vellistry-Writing-App-Prototype?t=KzH4zPGS8uDWWE50-1): The owner subsequently supplied a detailed **live walkthrough against all eleven journeys** of the [published synthetic preview](https://repo-buzz-33870082.figma.site/). Those task outcomes are [documented](VEL-DES-004-MAKE-LIVE-WALKTHROUGH-2026-10-11.md) as **externally reported**, not independently repeated by the assistant. Original Make file/source and its exact generation revision remain uninspected.
- [Lovable synthetic UX Lab](https://lovable.dev/projects/ff8ff817-87a7-49d2-af25-a4e018cd0787): generation completed; source read at exact commit `e0a7fd3003c6a392742c0ac7e111073252c65fb3`. Source contains in-memory fixtures, reader/writer shell, model logic and illustrative rules; the **12 model tests + 1 route test are present**, but the generator's claimed pass/Playwright results were **not independently rerun**. Its cloud database was reported disabled, and its project unpublished. Workspace editor visibility is not owner-private.
- No genuine author interview, approved design, product save API test, security authorization test or real AI call has been undertaken through this stage.

**Evaluation labels**: `REVIEWER-REPORTED PARTIAL / BLOCKED / LOCAL GUARD` means an observed outcome supplied by the owner, not an assistant-reproduced result;  `STATIC PRESENT` (visual artifact exists), `SOURCE PRESENT` (interactive code visible), `SOURCE DEFECT` (observed mismatch), `NOT INSPECTED` (actual behavior unavailable), `NOT RUN` (no witnessed task success). A code path existing is not a verified user journey. Do **not** use `PASS` without observed execution evidence.

## Matrix against canonical eleven journeys

Source-of-truth titles follow `MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md`, not generated tool marketing descriptions.

| Journey | Figma Design (static) | Figma Make (owner-reported walkthrough) | Lovable (source only) | Evidence / next validation |
|---|---|---|---|---|
| **VEL-JRN-001** Start a book and move between chapters without losing writing | Chapter rail present | REPORTED PARTIAL: edits/chapter reorder retained; no create-book/chapter | SOURCE PRESENT | Simulate edits across two chapters, reordering, switching; content must remain correctly keyed |
| **VEL-JRN-002** Write and format normally with no model/account key | Manual editor present | REPORTED PARTIAL: AI-OFF typing; Bold ineffective, search missing | SOURCE PRESENT | Independently type, format, undo/redo and select with AI OFF; keyboard and IME still untested |
| **VEL-JRN-003** Close, reopen, recover and export a manuscript | Conflict frame present | REPORTED STATUS-ONLY: six labels; no compare/recovery/export | SOURCE PRESENT (simulation) | In-memory reload loses state, so actual close/reopen recovery/export fidelity is **not demonstrated** |
| **VEL-JRN-004** Manually revise character/storyline profiles | Profile context present | REPORTED PARTIAL: one profile note editable; creation missing | SOURCE PRESENT | Author notes and threads have edit handlers; actual author task NOT RUN |
| **VEL-JRN-005** Approve/revise/dismiss candidate profile changes | Canon-review frame present | REPORTED PARTIAL: fact approval; edit/dismiss/source/story-time missing | SOURCE DEFECT | Lovable initially accepts evidence solely on revision matching; exact quote does not match source |
| **VEL-JRN-006** Browse/disable/restore/add creative rule | Rule label/context only | REPORTED PARTIAL: disable rule excluded guidance; scope/add rule missing | SOURCE PRESENT (illustrative subset) | Five invented rule rows and overrides; not authoritative 134-control catalog, no complete added-rule coverage observed |
| **VEL-JRN-007** Connect provider, preview context, request Continue | AI-OFF note only | REPORTED BLOCKED: valid collapsed caret at offset 4 rejected | SOURCE DEFECT | Mock BYOK preview and proposal exist, but Continue appends rather than respecting insertion point |
| **VEL-JRN-008** Rewrite, reject/accept and undo | Rewrite review frame present | REPORTED LOCAL GUARD: exact rewrite, reject, cross-block block, undo | SOURCE DEFECT | Rewrite guard accepts unknown block indices; stored Range needs active-text/current-source validation |
| **VEL-JRN-009** Accept AI prose then review separate profile candidate | Separate prose/canon frames | REPORTED CORE SEPARATION: candidate stays pending; approved fact flagged after undo | SOURCE DEFECT | Separate candidate exists, but undo does not retract AI-prose-derived pending fact |
| **VEL-JRN-010** Edit during pending AI, then handle stale safely | Design only, no active pending interaction | REPORTED LOCAL GUARD: pending edit invalidated old proposal | SOURCE PRESENT + UNCERTAINTY | Version invalidation exists, but needs independent DOM/insertion/offset tests and stale response scenario |
| **VEL-JRN-011** Isolate accounts/books and retrieve/delete author data | No comprehensive account screen | REPORTED DEFECT: profile/fact state leaked across personas; portability inactive | SOURCE PRESENT (simulation) | Toy Writer A/B separate in-memory state; **not** real auth isolation, secure deletion, or sign-out JWT revocation |

**No end-to-end production journey is certified PASS.** Make's eleven reviewer-reported interactions include local guards that were demonstrated, two blocking defects and multiple missing interactions. They are not equivalent to integrated persistence, authentication, AI, export or user validation. Lovable's four source-audited defects remain uncorrected. Actual Make source and direct assistant replay remain unavailable.

**Cross-tool decision update:** Make's demonstrated stale-result, rewrite-span and separate-canon interactions are stronger observed *local* references than Lovable's corresponding four source-level defect paths. Conversely Make's account-state leakage and collapsed-caret rejection must **not** be copied. Preserve the original editable Figma Design as the master and create a small, scoped design-to-code contract without requiring whole-app polish. [Make observations](VEL-DES-004-MAKE-LIVE-WALKTHROUGH-2026-10-11.md).

## Design recommendation (PROVISIONAL, NOT A DECISION)

Use **writing-first manuscript canvas** as the reference direction for usability assessment, with **on-demand Story Workspace** from alternative B. Keep contextual facts unobtrusive and origin-labelled. This preserves the manual-first M1–M8 decision, but the writer preference for this hybrid **has not been tested**. Do not copy Lovable's flawed Continue/Rewrite or canon lifecycle implementation into editable Figma or the production app.

**Owner sequencing clarification (2026-10-11):** The comparisons are inputs to a *living* editable Figma design. Do not make finishing every screen, responsive variant or broad visual/usability evaluation a blanket prerequisite to beginning implementation. After a **bounded `G_DESIGN`** decision for an implementation-ready slice and a **separate `G_CODE`** decision, engineers may implement that slice and refine its UI from real tested interactions. The current comparison does not grant either approval; incomplete Make inspection is not itself a reason to fabricate results or forever hold unrelated manual-first work. Critical safety states must still have explicit specifications and be proven before pilot/release.

**P0 interaction correctness outranks cosmetic design selection:** manuscript not lost; save status not false; Continue caret honored; one-paragraph Rewrite selection safely pinned; stale proposal cannot overwrite; source-accurate canon and undo provenance. Because these are author-trust risks, design signoff requires representative independent interaction observations, not merely a generator's "all screens built" claim.

## Highest-value no-credit evaluation sequence

1. **Do not regenerate either tool.** Keep Lovable as a bounded inspected code artifact; use existing Figma Design visuals; run Make Preview manually on the supplied file. Make preview work should not invoke AI generation.
2. **P0 first (five synthetic scenarios):** two-chapter edit and AI OFF; lost save acknowledgment vs true conflict; Continue at middle caret; invalid/stale Rewrite; AI undo plus fact retraction/source quote. Record actual behavior in [Make review](VEL-DES-FIGMA-MAKE-ARTIFACT-REVIEW-2026-10-11.md). Do not declare PASS based on screenshots alone.
3. **Then P1:** Rules Studio effective rule exclusion, optional BYOK transfer preview, export/deletion warnings, mock Writer A/B switch, 1440/900/390 responsive, keyboard focus.
4. **No-credit artifacts:** human-readable observation log, sanitized screenshots or recording if authorized, actual Make project state, input/control descriptions. The user may share them through the conversation; the Make file must not be publicly published just for inspection.
5. **Batch correction plan:** first identify which generator gets each flow closest; present one consolidated behavior correction per platform **only after free credits actually permit**. Do not repeat expensive Build prompts.
6. **Consolidate into editable Figma Design** only when the evidence supports a decision and tool access is available. Preserve rejected alternatives and why.
7. **Owner gate:** review canonical design, genuine consenting writer studies, privacy/a11y/recovery evidence, and explicitly authorize G_DESIGN. G_CODE is a separate later approval.

## Owner review questions before canonicalization

- Can a non-AI writer reach first meaningful prose immediately, with story intelligence available when needed?
- Are **accepted prose**, **unaccepted AI proposal**, **author-approved fact**, and **candidate fact** visually and functionally distinct?
- Is an unknown save result shown as **unknown**, not success/failure?
- Does the evidence quote exactly support the proposed fact and story-time context?
- Are per-provider costs/recipient/context shown only for an opted-in request?
- Can all P0 actions be discovered at desktop, laptop and narrow widths without clipped selections/controls?

`G_DESIGN`, `G_CODE`, `G_PRIVATE_PILOT`, and `G_RELEASE` remain pending. This documentation may be merged after review without changing those gates.

---
id: VEL-DES-LOVABLE-REVIEW-20261011-001
title: Lovable UX Lab initial build review and defects
type: synthetic-prototype-code-review
status: inspected-not-accepted
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.1.0
---

# Lovable initial build — inspected source and outstanding defects

**Project:** https://lovable.dev/projects/ff8ff817-87a7-49d2-af25-a4e018cd0787
**Exact inspected commit:** `e0a7fd3003c6a392742c0ac7e111073252c65fb3`.
**Visibility:** workspace_edit; `restricted` requires paid Business/Enterprise, attempted setting returned 402. **Published:** false. **Lovable cloud DB:** disabled.
**Scope:** throwaway synthetic prototype. No evidence of real author testing, verified backend isolation, actual durable save, live provider inference or tested production security.

## Observed files / bounded findings

At exact commit, project contains `src/components/lab/Lab.tsx`, `ManuscriptEditor.tsx`, `RulesStudio.tsx`, `Panels.tsx`, `src/lib/lab/model.ts`, `src/test/lab-model.test.ts`, and `src/test/app-routing.test.tsx`. Source uses React state for Writer A/B fixture book, chapters and profiles. The optional key field permits the exact string `DEMO-KEY-ONLY` and rejects other values. Synthetic status banner, approved versus pending fact labels, separate in-memory mock server revisions, and an explicit signed-out JWT caveat are present.

The supplied repository contains **12 model tests plus 1 routing test**. Lovable reports all 13 and Playwright checks passed, but no independent rerun or full browser audit was performed in this review. The presence of a visible preview URL is not proof of public publication or of privacy; no actual interactive browser walkthrough has been recorded by the reviewer.

### High-priority defects requiring correction before serious writer testing

**UX-DEFECT-01 — Continue ignores caret position.** In `Lab.tsx`, `accept` appends `<p>ALTERNATIVE</p>` for Continue instead of inserting at explicitly chosen source-version-pinned cursor position. This violates proposed Continue insertion-point semantics. Require a captured selection/caret anchor within the active manuscript; show it at consent; insert fixed synthetic plain text only if source chapter/persona/book/version and anchor are still current. If no valid anchor, disable Accept and prompt selection. Regression tests: insertion middle, empty cursor, stale source and switched chapter.

**UX-DEFECT-02 — Rewrite selection permits unrecognized block indices.** `singleParagraphSelection(start,end,text)` in `model.ts` returns true when `start=end=-1` and text is nonempty. Capture uses `blocks.indexOf`, so unrecognized start/end can both be -1. Must require indices >=0, same paragraph, contiguous noncollapsed selection, nonempty text, and reject multiline/multiblock. Before using stored `Range`, confirm it is attached to current active editor and text still equals snapshotted selection; fail closed to stale without altering DOM. Regression tests: -1/-1, mixed nodes, selection moved, content edited while pending.

**UX-DEFECT-03 — AI undo leaves derived fact candidate.** Accept creates a new pending `ai-fact-...` from the generated prose. `undoAI` rewrites prior manuscript text but does not retract or invalidate that candidate. An author could later approve canon based solely on undone prose. On undo, mark linked candidate invalid/dismissed with a source-retracted reason and make Approve unavailable. If already approved, preserve the owner's explicit canon decision but surface a *source-reversal needs review* warning rather than silently deleting approved facts. Tests: accept → undo → candidate not approvable; manual approved facts unaffected; existing author-approved generated-source facts flagged for review.

**UX-DEFECT-04 — Profile evidence is not exact-current-source checked.** The initial fixture candidate explicitly references a quotation different from the seeded chapter's actual wording; the UI admits this in a note. The demo currently compares revision numbers rather than confirming evidence quote exists in current accepted content. Replace with genuine synthetic source anchor and exact quote, or make the initial candidate `source-unverified` with Approve disabled. Do not make mismatched evidence into canon. Test missing quote even when revision matches.

### Operational blockers

A corrective Lovable message was attempted but rejected before execution with **out-of-credits**. **No corrective code change occurred**. Do not represent a failed send as an applied patch. Figma Make has not yet been executed. The Figma MCP Starter call limit previously blocked further Figma edits.

## Review classification

- **Created and code inspected:** Lovable frontend lab at SHA above.
- **Claimed by generator, not independently verified:** 13 tests and Playwright verification, eleven journeys implemented.
- **Not run:** genuine consenting writer sessions, independent end-to-end workflow tests, native accessibility, production data safety, real model consent, DOCX, backup/restore.
- **Blocked:** further Lovable edits due to free-workspace credit exhaustion; owner-only visibility due to paid tier; current Figma MCP editing quota.
- **No owner design acceptance:** `G_DESIGN` pending; feature code `G_CODE` pending.

Next: fix four defects within this *isolated prototype*, rerun tests and human-visible journeys; conduct independent Figma Make experiment, then compare and consolidate into canonical editable Figma. Production architecture unchanged.

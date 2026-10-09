---
id: VEL-EXE-R05-TIPTAP3-20261008-001
type: execution-bundle
status: verified-isolated-spike
created_at: 2026-10-08
updated_at: 2026-10-08
author: project-research
version: 0.1.0
sources:
  - "docs/research/R05-TIPTAP3-MANUSCRIPT-WORKSPACE-VALIDATION-2026-10-08.md"
  - "https://github.com/Ben-001-sys/Vellistry/actions/runs/37843380823"
  - "Owner-approved Tiptap 3 editor choice (ADR-0003 on PR #6)"
related_adrs:
  - ADR-0003
related_research:
  - R05
  - R10
related_experiments:
  - VEL-EXP-R05-001
---

# ExecutionBundle — Isolated Tiptap 3 manuscript editing research

## Objective

Validate that the owner-selected Tiptap 3 / ProseMirror editor foundation can perform a few necessary **mechanical manuscript-editing operations**, independently of an app/frontend/backend architecture or AI provider.

## FACT — source and actual test evidence

- Vendor documentation supports structured JSON, schema/node/mark behavior, selection commands, transaction-based edits, `StarterKit` undo/redo and optional content validation.
- A stand-alone **Node 22 + jsdom 26.1.0** CI environment installed actual Tiptap `@tiptap/core@3.31.4`, `@tiptap/pm@3.31.4`, and `@tiptap/starter-kit@3.31.4`. These are **resolved experiment versions, not selected production pins**.
- The first [CI run](https://github.com/Ben-001-sys/Vellistry/actions/runs/37843277680) passed six tests and failed one prototype-sensitive JSON deep-equality assertion. A corrected test comparing serialized JSON values passed in [GitHub Actions run 37843380823](https://github.com/Ben-001-sys/Vellistry/actions/runs/37843380823), **7/7 tests**.
- Passing cases: heading/mark initialization, formatting-preserving JSON round trip, non-destructive reject, targeted accept preserving unrelated bold mark, stale proposal refusal after another edit, undo/redo integration, and synthetic 100k+ word loading/serialization.
- The large synthetic input comprised 893 paragraphs and **101,802** whitespace-token words; CI/jsdom observed editor creation **62.1ms** and JSON serialization **0.5ms**. These numbers are **not real-browser performance measurements** and are not indicative of latency while typing a full book.

## INTERPRETATION (limited)

- There is enough concrete package behavior to move from solely documentation-based feasibility into **real-browser author-workflow testing** using Tiptap 3.
- An author-reviewed AI rewrite can be represented as a separate proposal and applied through Tiptap editing commands; it remains necessary to preserve editor selections while intervening transactions happen.
- Tiptap's internal transaction/mark model is a promising fit but is not proof of full book production readiness.

## PROPOSAL (NOT APPROVED APP ARCHITECTURE)

- Conduct a browser-visible spike with the owner reviewing a small but realistic manuscript-writing workspace and keyboard interactions.
- Test chapter navigation as distinct flows, avoiding premature selection between whole-manuscript and chapter-scoped document storage.
- Track AI-generated suggestions as pending, reviewable changes; evaluate conflict-aware ProseMirror position mapping and original formatting retention.
- Preserve disabled fiction guidance and custom Rules Studio application outside the editor's core responsibilities, with a separate request-audit boundary.
- Test DOCX import/roundtrip, EPUB, print PDF and commercial licensing in R05/R12 separately.

## What was not accomplished

- No production Vellistry app, UI, auth, collaboration, persistence backend or model integration was implemented.
- No Chrome/Firefox/Edge typing, IME/composition, screen-reader, keyboard-focus, clipboard/Word paste or virtualized large-book performance test.
- No automatic selected-text formatting preservation in all cases.
- No human writer usability validation or real AI writing quality tests.
- No choice of app framework, manuscript storage model, publishing engine or subscription.

## Changes and verification

- [Study](R05-TIPTAP3-MANUSCRIPT-WORKSPACE-VALIDATION-2026-10-08.md).
- [Node/jsdom spike](spikes/tiptap3-headless/spike.test.mjs) and [isolated package manifest](spikes/tiptap3-headless/package.json).
- [GitHub Actions check](../../.github/workflows/r05-tiptap3-spike.yml); exact successful run https://github.com/Ben-001-sys/Vellistry/actions/runs/37843380823.
- `CURRENT-STATE.md` updated with test results and next gates.

## Reviewer disposition

**Experiment mechanically verified in a simulated DOM, but UX and implementation readiness remain unverified.** Suitable to merge as bounded R05 research after owner self-review. It should **not** be used as acceptance of a complete manuscript editor, backend architecture, or AI integration.

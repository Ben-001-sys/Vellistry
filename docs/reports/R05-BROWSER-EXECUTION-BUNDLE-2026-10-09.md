---
id: VEL-EB-R05-BROWSER-20261009-001
type: execution-bundle
status: experiment-verified-bounded
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "docs/research/R05-ACTUAL-BROWSER-TIPTAP-MANUSCRIPT-SPIKE-2026-10-09.md"
  - "https://github.com/Ben-001-sys/Vellistry/actions/runs/37903972056"
  - "https://github.com/Ben-001-sys/Vellistry/actions/runs/37904237109"
related_research:
  - R05
  - R10
  - R16
related_adrs:
  - ADR-0003
---

# R05 actual browser experiment — execution record

## Objective

Test real Tiptap 3 editing behavior in Chromium with a synthetic, disposable, two-chapter manuscript using genuine browser caret and keyboard events. Preserve technology choice without selecting a frontend framework or backend.

## FACT — artifacts and executed tests

- Created a Vite **testing-only bundler fixture** and seven `@playwright/test` browser scenarios, not a product frontend.
- First real-browser CI [run 37903972056](https://github.com/Ben-001-sys/Vellistry/actions/runs/37903972056) on `1958fa462b41acda60f802c76fba454cd4276ec3` had **5/7 passing**; two cases attempted typed insertion after an async editor focus command without reliable real caret focus.
- Corrected test helper to click the actual editable paragraph, press browser `ControlOrMeta+End`, and then insert keyboard text.
- Corrected real-browser CI [run 37904237109](https://github.com/Ben-001-sys/Vellistry/actions/runs/37904237109) on `b94ecec6e48c586318d07ff3018031e3d25a0674` **PASSED 7/7**.
- Test-installed versions: Tiptap core/starter-kit **3.31.4**, Playwright Test **1.64.0**, Vite **7.3.7**, Chrome for Testing **156.0.8078.4** (Chromium v1248) on Linux GitHub Actions. No dependency was adopted for production by these test runs.
- Scenario categories: actual browser typing, chapter in-memory switching, formatted targeted rewrite/undo/redo, stale proposal refusal, Tiptap JSON marks/heading, Unicode insertion, and synthetic large chapter with a successful tail edit.
- One **19,201-word synthetic chapter** (150 paragraphs) was rendered in CI. One observed `setContent` operation took **10.2ms** and browser action to insert text at the end **46ms**. These are one-run research observations only, not reproducible production latency distributions or 100k-word browser readiness.

## INTERPRETATION

- A real Chromium runtime can execute these bounded editor tasks successfully, strengthening the limited earlier 7/7 jsdom feasibility evidence.
- A focus/caret synchronization problem in the first test highlights the difference between headless DOM tests and actual browser interaction.
- The source-guard protocol is useful as a **safety demonstration** but overly conservative and not transaction-mapped; real editor design must handle asynchronous selection/range versions.

## NOT DONE or proven

- **No durable saving**: chapter content is held only in volatile browser memory. The page explicitly warns **NOT SAVED**.
- No account, authentication, database, AI provider, BYOK keys, real novelist manuscript, Word import/export, authorship guidance or Story Bible extraction.
- No Firefox/Edge, native IME event composition, screen reader study, clipboard Word paste, accessibility acceptance, 100k-word real-browser input, multi-device sync or real author task sessions.
- No realistic performance baseline, cloud infrastructure, editor architecture, subscription, storage/service decision or production code.
- The parent headless-spike PR #7 is separate and remains to be merged before this child PR #12.

## Deliverables / review

- [Browser experiment report](../research/R05-ACTUAL-BROWSER-TIPTAP-MANUSCRIPT-SPIKE-2026-10-09.md)
- `docs/research/spikes/tiptap3-browser/` — actual browser fixture/config/tests.
- [CI workflow](../../.github/workflows/r05-tiptap3-browser-spike.yml)
- [Passing run](https://github.com/Ben-001-sys/Vellistry/actions/runs/37904237109); [earlier failed run](https://github.com/Ben-001-sys/Vellistry/actions/runs/37903972056).
- Branch `CURRENT-STATE.md` updated for review.

**Disposition:** browser editing feasibility **partially verified**, production implementation and release testing **not ready**. Owner self-review needed before merging stacked PR #12.

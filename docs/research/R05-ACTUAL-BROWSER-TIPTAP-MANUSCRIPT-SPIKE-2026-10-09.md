---
id: VEL-RES-R05-20261009-003
type: browser-editor-experiment
status: tests-pending-ci
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "docs/research/spikes/tiptap3-browser/main.js"
  - "docs/research/spikes/tiptap3-browser/browser.spec.js"
  - ".github/workflows/r05-tiptap3-browser-spike.yml"
  - "https://github.com/Ben-001-sys/Vellistry/pull/7 (earlier 7/7 jsdom Tiptap 3 research)"
related_research:
  - R04
  - R05
  - R10
  - R16
related_adrs:
  - ADR-0003
---

# R05 — Actual-browser Tiptap chapter writing spike

**Status:** DRAFT EXECUTABLE BROWSER EXPERIMENT, NOT A VELLISTRY APPLICATION.

## Research question

Does the already owner-selected Tiptap 3 editor behave sensibly when physically instantiated in Chromium with a realistic contenteditable DOM — particularly chapter navigation, keyboard input, preserved marks, targeted alternatives, stale suggestion refusal and long prose?

Previous [PR #7](https://github.com/Ben-001-sys/Vellistry/pull/7) ran seven headless Node/jsdom tests with Tiptap 3. Those results are **not** browser typing/selection/performance evidence. This branch adds a **separate actual-browser experiment**, preserving the earlier tests.

## Experimental harness and caveats

- Minimal, disposable web page created with Vite **only to bundle packages for a test browser**. **This does not select Vite for the Vellistry production frontend.**
- Real Tiptap 3 using `@tiptap/core` and `@tiptap/starter-kit`; Playwright launches actual Chromium in Linux CI.
- Two invented, synthetic chapter fixtures, simple current-chapter picker, editor, undo/redo and bold button.
- Chapter switching and edits live **only in volatile JavaScript browser memory**. Page clearly says **NOT SAVED**, and reload loses edits. No auth, storage, autosave, AI, provider, Rules Studio, model key, real manuscript or private author data.
- A synthetic proposal mechanism uses a whole-document JSON fingerprint to reject stale replacements: deliberately **not** a recommended production algorithm. ProseMirror transaction mapping, versioned patches, mark boundaries, and asynchronous editor effects need further research.
- This test harness is not designed or claimed to be a functional MVP prototype; it isolates browser editing behavior.

## Seven proposed tests

| ID | Experiment | What it does not prove |
|---|---|---|
| BR-01 | Type words into actual Chromium contenteditable with no AI | Browser/OS cross-platform support; long editing sessions |
| BR-02 | Switch between 2 chapters and keep each chapter's in-memory edits isolated | Durable save/recovery or multi-device sync |
| BR-03 | Accept/reject a bounded synthetic text alternative, undo/redo and retain an unrelated italic mark | Real LLM integration, full mark/selection preservation |
| BR-04 | Type in actual Chromium while a proposal is pending and refuse a stale change | Fully transaction-mapped suggestions and collaboration |
| BR-05 | Examine structured Tiptap JSON after Chromium editor instantiation | DOCX import, complete schema migration |
| BR-06 | Insert non-Latin Unicode and accented text via browser keyboard insertion | Full IME composition, bidirectional text or accessibility |
| BR-07 | Load a multi-thousand-word synthetic chapter, render and edit at its tail | Real novel-scale 100k+ browser performance, realistic devices, statistical timing |

**Measurement policy:** Print real Chromium + Linux CI setup, actual fixture word count, setup/render duration and test-visible edit latency only as **single-run observations**. No hard performance thresholds or guarantees from a virtual CI runner; browser versions and package versions are printed in logs.

## Verification status

**Before workflow completion:** No BR-01..07 are marked passed. Once the exact-head GitHub Actions workflow finishes, record its success/failure, exact commit, package versions and errors honestly. If failures come from the harness rather than Tiptap, fix then rerun; retain original failed run for chronology. This GitHub test does **not** select a frontend framework.

## Next research after browser smoke

- Real paste from DOCX and rich HTML, unsupported-format warnings.
- Native IME composition, screen-reader navigation, keyboard accessibility and Chromium/Firefox/Edge parity.
- Compare whole-book versus chapter-scoped Tiptap documents with 50k–150k word input, memory/performance, save conflicts and undo boundaries.
- Transaction-mapped stale proposal positions, bold/italic/heading spans, paragraph splits and editor undo sequences.
- Explicit actual durable persistence and recovery tests after architecture approval; the current fixture has neither.
- Independent manual Live Story Profile panel usability with AI completely disabled.

**No public release gate or architecture question is closed solely by seven browser tests.**

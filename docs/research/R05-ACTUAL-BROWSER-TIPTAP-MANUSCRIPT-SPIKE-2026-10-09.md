---
id: VEL-RES-R05-20261009-003
type: browser-editor-experiment
status: seven-browser-tests-passed-bounded
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.1
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

## Verification evidence — actual GitHub Actions browser runs

**First run:** [workflow 37903972056](https://github.com/Ben-001-sys/Vellistry/actions/runs/37903972056) on commit `1958fa462b41acda60f802c76fba454cd4276ec3`, **5 passed / 2 failed**. The failures were browser-input fixture assertions: using a Tiptap focus command inside `page.evaluate()` allowed the JavaScript call to return before the physical editable caret was reliably active. Two tests then inserted no text. This is not evidence of a ProseMirror data-loss error, but it is an important **focus/caret race in the research harness**. The event remains recorded.

**Correction:** Test `typeAtEnd` clicks the **actual browser paragraph**, then uses the browser's `ControlOrMeta+End` and `keyboard.insertText` to establish a real editable selection before each insertion. The change is in commit `b94ecec6e48c586318d07ff3018031e3d25a0674`.

**Passing run:** [workflow 37904237109](https://github.com/Ben-001-sys/Vellistry/actions/runs/37904237109) on **exact commit `b94ecec6e48c586318d07ff3018031e3d25a0674`**, **7/7 tests passed (3.3 seconds)**. Resolved versions logged: `@tiptap/core@3.31.4`, `@tiptap/starter-kit@3.31.4`, `@playwright/test@1.64.0`, `vite@7.3.7`; Chrome-for-Testing artifact `156.0.8078.4` (Playwright Chromium v1248), Linux GitHub runner. These are **test versions** and do not select production dependencies.

**Synthetic long-chapter observation:** 150 paragraphs / **19,201 whitespace-separated words**, one `setContent` run **~10.2ms** and one end-text insertion **46ms** in CI. Values are only **one machine/run observation** (not measured percentile keyboard-to-paint, not sustained author typing, no RAM profile, not a 100k-word real-browser proof). Browser consistency, actual performance budgets and editor save strategy remain unverified.

| Browser scenario | Corrected CI result | Remaining caveat |
|---|---|---|
| BR-01 actual contenteditable insertion | PASS | Focus race in first test confirms focus must be explicitly addressed |
| BR-02 switch 2 in-memory chapters | PASS | Not durable storage; reload erases edits |
| BR-03 targeted edit and undo/redo/italic mark | PASS | Not real AI, no multi-range selection conflict |
| BR-04 refuse stale proposal after typing | PASS | Coarse whole-document guard, not production mapping |
| BR-05 actual browser JSON headings/marks | PASS | No DOCX/HTML paste or import |
| BR-06 Unicode insertion | PASS | Does **not** simulate actual IME composition |
| BR-07 19,201-word chapter and tail insertion | PASS | Single Chromium CI environment, no long-duration 100k-word test |

**R05 finding:** Tiptap 3 now has limited positive evidence from **actual Chromium**, not only jsdom. **No production author workspace, safe autosave, reliable recovery, security layer, cross-browser accessibility, real model or conversion stack has been implemented by this spike.**

## Next research after browser smoke

- Real paste from DOCX and rich HTML, unsupported-format warnings.
- Native IME composition, screen-reader navigation, keyboard accessibility and Chromium/Firefox/Edge parity.
- Compare whole-book versus chapter-scoped Tiptap documents with 50k–150k word input, memory/performance, save conflicts and undo boundaries.
- Transaction-mapped stale proposal positions, bold/italic/heading spans, paragraph splits and editor undo sequences.
- Explicit actual durable persistence and recovery tests after architecture approval; the current fixture has neither.
- Independent manual Live Story Profile panel usability with AI completely disabled.

**No public release gate or architecture question is closed solely by seven browser tests.**

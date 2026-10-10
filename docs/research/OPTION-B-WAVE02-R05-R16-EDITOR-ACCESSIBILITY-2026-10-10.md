---
id: VEL-RES-OPTIONB-WAVE02-R05R16-20261010-001
type: editor-accessibility-and-scale-research
status: bounded-test-defined-human-at-not-run
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 1.0.0
sources:
  - docs/research/PAIR-02-ACCELERATED-AUTHOR-EDITOR-EVIDENCE-2026-10-09.md
  - docs/research/spikes/r18-framework-slice/tests/browser.spec.mjs
  - https://www.w3.org/WAI/WCAG22/Understanding/keyboard
  - https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/
  - https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22
  - https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
  - https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event
  - https://tiptap.dev/docs/editor/getting-started/style-editor
related_research: [R05, R16, R18]
---

# Option B Wave 2 Track A — One-pass R05/R16 editor and accessibility evidence

**Status boundary:** This is a single source-grounded research and test pass using invented text. No new UX prototypes, design files, direct screen-reader operators, real OS language keyboards or human usability sessions are commissioned or claimed. The owner required no repeated research loops and progression to the next stage. Tests here run against the pre-existing disposable React/Tiptap browser research slice, **not the production Vellistry editor**.

## Verified historical evidence to reuse

- [PR #37](https://github.com/Ben-001-sys/Vellistry/pull/37) 12/12 synthetic Chromium keyboard/heading/mark/recovery checks and Next/Nest 17/17 HTTP document assertions on exact tested commit. Not an accessibility audit.
- [PR #25](https://github.com/Ben-001-sys/Vellistry/pull/25) browser interrupted save, Dexie local recovery, stale-tab conflict and cross-account read denial in narrow fixture. These mechanisms inform requirements; not live Supabase Auth proof.
- Historical Tiptap large synthetic 19,201-word tail-edit experiment existed in PR #12; it measured limited editor behavior, not end-to-end persisted large-book performance or 99th percentile user-perceived responsiveness.

## New executable Chromium checks — both adapters

Added four tests per independent frontend (Next.js and Vite/Nest) to existing [real Chromium browser fixture](spikes/r18-framework-slice/tests/browser.spec.mjs). The existing twelve tests remain.

1. **Unicode / bidi text persistence:** insert actual Arabic/Hebrew/Chinese/curly quotes using Chromium's text-input path, then save to PostgreSQL and reload. Validates codepoint preservation only, **not** correct physical RTL cursor movement, mixed-direction selection, spoken language, grapheme cluster manipulation or bidi paragraph styles.
2. **Synthetic composition:** dispatch compositionstart/end DOM events and type Unicode using Playwright insertText; ensure content is not lost after save/reload. **NOT a real Japanese/Chinese/Korean IME**: synthetic JavaScript CompositionEvents and keyboard.insertText cannot reproduce native OS candidate windows, key event ordering or speech-to-text.
3. **Long chapter:** create a 3,000-word generated passage (roughly 20k characters), save/reload, compare exact text and log elapsed milliseconds. No SLA inferred from a single hosted runner; a 30k/100k/300k-word full-book corpus and browser/OS/performance distributions remain unmeasured.
4. **Accessible-name negative audit:** explicitly inspect the current contenteditable's role/name and show absence of aria-label and role in the research fixture. This is an **observed missing-semantic affordance**, not a pass. Appropriate authoring label and grouping must be defined in the pre-design interaction requirements. Browser automated assertions alone do not measure what NVDA/JAWS/VoiceOver actually announce.

## Accessibility standard and input method research

| Topic | Primary guidance / requirement | Existing evidence and gap |
|---|---|---|
| Keyboard operation and no traps | [WCAG 2.2 SC 2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard); [ARIA Authoring keyboard conventions](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/) | Synthetic headings/marks, Tab/Enter Save pass; full menus, panels, dialogs, Undo and references have not been built/tested |
| Focus visible and location | [WCAG 2.4.7](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible) | Current contenteditable style/focus indicator and high-contrast/reflow under different themes not audited |
| Save and conflict announcements | [ARIA22 role=status](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22) | R18 fixture uses role=status / aria-live polite, automated DOM check passes; actual announcement frequency/timing, repetition and screen-reader speech remain NOT RUN |
| Editor accessible name | [ARIA APG accessible names](https://www.w3.org/WAI/ARIA/apg/practices/) | Current isolated fixture has neither aria-label nor explicit textbox role; provide a stable concise label tied to book/chapter and instructions without multiple conflicting region headings |
| IME correctness | [MDN compositionstart/end](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event), [keyboard isComposing/229 pitfalls](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event) | Synthetic CompositionEvent + Unicode text tests cover event plumbing only; must defer shortcuts while composing and manually test real Japanese kana/Chinese Pinyin/Korean Hangul input including cancellation |
| RTL and mixed script | Standard Unicode/Bidi + contenteditable behavior, browser/OS-specific caret movement | Codepoint save proves nothing about correct caret, selection, Undo or direction metadata. Require explicit paragraph dir/language policy and real native RTL/Hebrew/Arabic input tests |
| Editor architecture | [Tiptap headless/editor styling](https://tiptap.dev/docs/editor/getting-started/style-editor) | Core is unstyled/headless; product team owns semantic toolbar/shortcut discovery, accessible names, outline and focus management |
| Multiple chapters and large text | Prior 19,201-word spike and this 3,000-word persisted test | Require chapter-scoped rendering, measured cold-open/edit/undo/save under low-memory mobile/browser devices before performance promises |

## Pre-design interaction requirements to hand off

**Keyboard and semantics:** Clearly labeled main manuscript field, status announcements that differentiate local recovered/unsynced/committed/revision conflict, all controls reachable with Tab/Shift+Tab and logical focus restoration, visible focus ring, accessible formatting state, non-conflicting shortcuts and a command menu without pointer dependence.

**IME and RTL:** No shortcut interception mid-composition; no destructive rerender/selection jump while composing; retain exact user input Unicode in persisted editor state, display proper direction and separate language metadata. Do not claim Arabic/Hebrew UI support based on content persistence alone.

**Reliability and scale:** Editor should permit composing without network, and an accepted save must use authenticated compare-and-swap. Large manuscripts should be chunked into chapters, with predictable restoration and conflict review; access to other author's IndexedDB drafts must not cross account boundaries.

**Research conclusion:** Tiptap 3 is feasible for existing basic keyboard, Unicode, semantic marks and transactional-save fixture, but **not demonstrated accessible**; DOM missing-name issue requires a design requirement, not silent pass. Actual NVDA/JAWS/VoiceOver/IME device tests remain **NOT RUN** with the current available environment. Do not fabricate assistive-tech transcripts.

## Wave 2 disposition

Tests on PR's exact head determine whether automated coverage passed. Even when CI passes, status of entire R05/R16 is **BOUNDED RESEARCH COMPLETE / REAL HUMAN ASSISTIVE TECH NOT RUN**, with the new explicit missing-name finding recorded as a gap. Owner requested one-pass progression: move to Wave 3 research after this report without treating the missing real-device evidence as completed or opening prototypes/implementation.

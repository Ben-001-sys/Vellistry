---
id: VEL-RES-PAIR02-ACCEL-20261009-001
type: research-evidence-and-trial-protocol
status: active-research-not-validated
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "docs/plans/RESEARCH-PAIR-AND-PREIMPLEMENTATION-DESIGN-2026-10-09.md"
  - "docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md"
  - "docs/research/R03-AI-FICTION-APPS-COMPETITIVE-SCAN-2026-10-08.md"
  - "docs/reports/R18-BROWSER-WRITING-AND-DRAFT-RECOVERY-2026-10-09.md"
  - "https://github.com/Ben-001-sys/Vellistry/pull/7"
  - "https://github.com/Ben-001-sys/Vellistry/pull/12"
  - "https://github.com/Ben-001-sys/Vellistry/pull/25"
  - "https://reedsy.com/studio/"
  - "https://reedsy.com/studio/pricing/"
  - "https://www.novelcrafter.com/help/docs/prompts/prompt-types"
related_research:
  - R02
  - R03
  - R05
  - R16
related_adrs:
  - ADR-0003
---

# Pair 02 — Accelerated author journeys, competitors and editor accessibility

**Research only.** No production UI/architecture, paid plan, Figma design decision, final usability approval or new public MVP release claim. This pair has **exactly two active tracks**: A = R02/R03 author workflows + comparator evidence; B = R05/R16 practical writing/editing and accessibility.

## Process transition — owner direction, not retroactive completion of Pair 01

Owner message (Fiction Writing Project conversation, 2026-10-09; chat permalink not provided): **"this is ok for mvp lets deal with the rest of the pairs"**. Interpret narrowly as owner approval **to stop expanding Pair 01 research now and proceed to Pair 02**, accepting *temporary research sequencing deferral*. It is NOT explicit approval of the 134 operational guidance mappings, acceptance of a signed-out JWT disclosure policy, rollout of the experimental private Nest gateway, or a public release security waiver. The design-first sequencing and two-tracks-at-a-time ceiling stay in force.

**Carry-forward release blockers, neither marked PASS:**
- R01: owner still must approve exact 130/134 source mappings, default rules, any split controls; 260 original variants remain immutable. Do not export an allegedly certified Rule Pack or connect unapproved mappings to AI.
- R15/K2B: complete end-to-end restricted manuscript routes, Next SSR Proxy refresh, cookie/session/CSRF, Storage, stale signed links, backup, account-switch local drafts, retention/deletion. Partial synthetic/local Auth CI is evidence of *possibility*, not production acceptability.
- Existing PR #28 application scaffold is still on hold and PR #33/#34/#36 remain research or draft. Progressing to research Pair 02 does not authorize implementation or design gate bypass.

## Track A — R02/R03: jobs authors must complete

Source of **11 journey IDs and scope** is the accepted MVP's *proposed* user-journey document. The MVP's eight areas are accepted; these detailed usability task scripts are research proposals. Do not misstate source phrases as observed interview results.

| Journey | Specific unprompted study task | Evidence to capture | Risk / priority |
|---|---|---|---|
| VEL-JRN-001 | Create a book, add two chapters, move between them without losing text | Time to first prose; lost input; navigation errors | Critical writing foundation |
| VEL-JRN-002 | Write manually with AI off; format heading, emphasis, list, undo; return to text | Keyboard success, first-run confusion, no AI prerequisite | Critical |
| VEL-JRN-003 | Simulate lost connection, reopen and locate latest unsaved text; export a portable manuscript | Distinguish local draft from committed save; recovery and export accuracy | Critical safety |
| VEL-JRN-004 | Update a character and an unresolved storyline manually, without AI | Time/steps; can author see what changed? | Critical MVP differentiator |
| VEL-JRN-005 | Inspect one generated *candidate* profile change from accepted chapter text; accept/reject separately | Mistaken auto-canon changes; source evidence comprehension | Critical safety |
| VEL-JRN-006 | Find one inherited creative rule, disable it only for one book and inspect effective instructions | Scope comprehension; reset-to-inherited success | Critical author control |
| VEL-JRN-007 | Preview what a hypothetical Continue action would send and deny unwanted text transmission | Consent comprehension; cost/key expectation | High; provider gated |
| VEL-JRN-008 | Select a passage; see proposed rewrite; reject; then accept/undo a separate proposal | Does selection remain stable? Is original prose retained? | Critical reversibility |
| VEL-JRN-009 | Accept invented AI prose then reject the automatically suggested profile update | Distinct approval events clear? | High |
| VEL-JRN-010 | Keep typing while a hypothetical rewrite is pending; handle stale AI proposal | No overwrite, explicit conflict handling | Critical safety |
| VEL-JRN-011 | Switch between author A and B; try to access prior account work and retrieve/delete a backup | No cross-account text; privacy and deletion clarity | Critical trust |

**Participants required before user-validated claims:** At minimum recruit varied writers (e.g., AI-resistant novelist; AI-assisted serial fiction author; long-series/outlining writer; independent author editing/importing in Word/Docs) and report their *actual* background, task outcomes and reactions. Suggested composition is a recruitment proposal, **not a claim of interviews completed**. Avoid fabricated quotas or fictitious testimonials. Interview author pain without showing features first; then task-test two genuinely different design concepts once the project's separate Figma design gate starts. No real manuscript needs to leave the participant's device.

**Capture for every participant/task:** task version, facilitator prompt, device + assistive tech if voluntarily relevant, unassisted completion vs assistance, errors and workarounds, author-described costs, loss/lock-in worries, and whether proposed features would replace their current workflow. Quote only with consent. If no real participant evidence exists, status stays **NOT RUN**.

### Reused R03 comparator evidence (do not reinvent)

- [Existing R03 scan](R03-AI-FICTION-APPS-COMPETITIVE-SCAN-2026-10-08.md) covered nine vendors and selected community feedback; it is *vendor-docs + anecdotes*, no competitor accounts or validated author interview.
- [Novelcrafter's documented prompt types](https://www.novelcrafter.com/help/docs/prompts/prompt-types) include Beat Completion, Summarization, Text Replacement, Workshop Chat, and custom prompts. Hence **custom AI prompts are not a unique Vellistry invention**. The product hypothesis should be *accessible, versioned authentic guidance plus reviewable effective-context and manual writing*; empirical advantage remains unproved.
- [Reedsy Studio official introduction](https://reedsy.com/studio/) advertises chapter sidebar, manuscript editing, import, boards, online collaboration, and EPUB/print export; [Reedsy pricing](https://reedsy.com/studio/pricing/) says core writing is free and premium adds unlimited boards/history and other features. **Free core editing exists elsewhere**; Vellistry must compete on author control, trust, consistency and interoperability, not claim uniqueness in standard editing.
- Hands-on full feature parity (Google Docs, Word, Scrivener, Novelcrafter, Sudowrite, Reedsy) is still **NOT RUN**, and market willingness-to-pay or retention cannot be inferred from vendor pages.

**Proposed comparison protocol:** Give identical synthetic 3-chapter prose and fixed tasks (open book; adjust heading; navigate; annotate character; find rule; recover text; export). Record which functions are available on a *legally accessible zero-paid tier*; mark unavailable/untested honestly rather than purchasing plans. Clearly distinguish observed success from vendor claims.

### R02/R03 deliverables and status

- Eleven end-to-end journeys mapped to concrete task prompts: **PREPARED**, not validated.
- Existing nine-vendor scan + refreshed official primary-source evidence for Novelcrafter and Reedsy: **DOCUMENTED**, not hands-on verified.
- Structured observations from actual novelists / serial writers / accessibility testers: **NOT RUN**.
- Final distinctive value or willingness to pay: **HYPOTHESIS**, not proven.
- Output required for Figma: navigation/card-sorting evidence, friction ranking by observed frequency/severity, disclosure of AI-off and privacy expectations.

## Track B — R05/R16: verified Tiptap behavior and the remaining authoring gap

### Do not retest already proved narrow contracts

| Evidence | Exact provenance | What passed | What it does NOT prove |
|---|---|---|---|
| Tiptap jsdom | [PR #7](https://github.com/Ben-001-sys/Vellistry/pull/7), CI #37843380823 | 7/7 smoke tests for real Tiptap 3 JSON, marks, undo and conditional replacement | Real caret, editor keyboard/IME behavior, screen-reader use |
| Chromium editor | [PR #12](https://github.com/Ben-001-sys/Vellistry/pull/12), CI #37904237109 | 7/7 browser scenarios incl. real typing/navigation, 19,201-word synthetic tail edit | Production pagination, real novelist latency, accessibility/multilingual |
| Chromium recovery | [PR #25](https://github.com/Ben-001-sys/Vellistry/pull/25), CI #37983426534 | 8/8 actual Chrome browser recovery tests, 4 per Next and Vite: paste/typing/selection, failed PUT restored with Dexie, two-tab 409 conflict, synthetic account isolation | Real auth, true offline start, extended rich marks, power-loss data guarantee or native assistive tech |
| API saved-revision contracts | [PR #23](https://github.com/Ben-001-sys/Vellistry/pull/23), CI #37982170918 | Next and Nest 15/15 respective HTTP contract checks | Final Supabase runtime API, production sessions and all editor errors |

### New focused browser checks in this Pair 02 branch

The isolated R18 Playwright fixture adds the **same two cases** for Next.js and Vite/NestJS (four new test instances):
- Physical-keyboard semantics: convert a paragraph to a heading with the standard Tiptap shortcut, add a bold span, persist structured JSON through server revision save/reload.
- Semantic save status: status has live-region semantics and the Save button can be reached from the editor and activated using **keyboard only**; saved text survives reload.

Tests are in [browser.spec.mjs](../research/spikes/r18-framework-slice/tests/browser.spec.mjs), extending existing eight cases. **Record exact GitHub CI before claiming pass.** This is not a substitute for actual accessibility assessment.

### R05/R16 still open

1. Full marks/blocks/import preservation (underline, lists, special characters, paragraphs and large copied Word/DOCX text) with honest schema and formatter policies; don't silently strip unsupported formatting.
2. CJK/RTL/IME composition, spellcheck interactions, selection preservation and keyboard shortcuts across supported browsers/OS.
3. WCAG-guided automated inspection, physical keyboard only, focus order/visible focus, high zoom, contrast, screen-reader NVDA/VoiceOver tests **with actual assistive tech**; current synthetic browser tests do not prove these.
4. Real long-manuscript reading/typing/scrolling performance under target devices, mobile responsive behavior and multi-hour writing resilience.
5. Author trial + full manuscript style/Word/DOCX round trip remain dependent on Pair 03 and real participants.

### Pair 02 closure decision

This document and a passed Chromium test are sufficient to **prepare requirements for UI research**, not enough to call Pair 02 fully validated. If the owner later elects another bounded deferral, document which exact user validation/accessibility risks remain and keep them as design/public release gates; don't turn untested tasks into evidence. Dedicated editable Figma design still follows project research closeout.

**No paid services, externally shared manuscripts, production feature changes, or third research track introduced.**

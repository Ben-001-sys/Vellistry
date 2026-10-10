---
id: VEL-DES-DUAL-PROTOTYPE-20261010-001
title: Controlled synthetic prototype experiment — Figma Make and Lovable
type: proposed-design-experiment
status: prepared-not-run
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 0.1.0
sources:
  - docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
  - docs/history/2026-10-10-owner-delegated-mvp-design-entry.md
  - docs/design/VEL-DES-001-002-UX-HANDOFF-2026-10-10.md
  - docs/design/VEL-DES-002-JOURNEY-AND-STATE-MATRIX-2026-10-10.md
---

# Dual synthetic prototype experiment — PREPARED, NOT EXECUTED

## Owner direction and constraints

The owner explicitly said on 2026-10-10: "we will try figma make and lovable too." Treat both as **authorized synthetic UI/UX exploration paths** within the previously selected design-only scope; this is **not** an instruction to migrate production architecture, spend money, use real manuscripts, connect a database, push generated code into the Vellistry application or publish. Do not claim either prototype exists before its URL and inspected interactions are recorded.

**Source of truth**: GitHub's approved product scope, immutable writing guidance provenance and consent/security policy. The editable canonical Figma Design is the **design artifact** after review, *not* the source of accepted engineering requirements or a production database. Figma Make and Lovable are **disposable independent experiments**; neither may silently rewrite feature scope or `CURRENT-STATE.md` acceptance.

**Existing editable designs**: https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U
- Concept A (writing-first): https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=1-2
- Concept B (story-workspace-first): https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=1-3
- Unified manual editor: node 6:2; save conflict: 6:47; rewrite: 6:98; canon: 6:148.

**Reference instructions**:
- [Figma Make start](https://help.figma.com/hc/en-us/articles/31304485164695-Create-a-Figma-Make-file) and [sending/attaching designs](https://help.figma.com/hc/en-us/articles/41159751397783-AI-workflows-collection-Bonus-Turn-designs-into-prototypes-and-prototypes-into-designs).
- [Lovable ChatGPT integration](https://docs.lovable.dev/tips-tricks/chatgpt-app). Connecting the app is a user's action. For prototype work, prohibit publishing/syncing production repo by default.
- Figma Starter has limitations on Make features and may require public Community publication for a public web URL. **Do not publish to obtain a link or bypass an access limit**; use a privately shared editor/preview where permitted. No paid upgrade assumed.

## Experimental design: equivalent tasks, different generators

| Dimension | Figma Make | Lovable |
|---|---|---|
| Independent hypothesis | An existing editable design can become a faithful, usable interaction model | A clean written specification can generate simpler or better navigation/micro-interactions |
| Starting material | Original A/B Figma frames plus unified candidates; attach selected frame(s) | Same requirements, same invented fixtures; optional manually provided non-sensitive concept screenshots |
| Source prompt | [Figma Make brief](VEL-DES-PROMPT-FIGMA-MAKE-2026-10-10.md) | [Lovable brief](VEL-DES-PROMPT-LOVABLE-2026-10-10.md) |
| Functionality | Simulated frontend interactions and seeded variants; no real API | Frontend-only simulated interactions and seeded variants; no real API |
| Environment | Private prototype/editor preview, no public publish | Private draft/preview, no public publish |
| Output evidence | Make file URL, explicit interaction list, screenshots or review video if consented | Project URL, explicit interaction list, screenshots or review video if consented |
| Evaluation | Same 11 journeys and negative probes; identical reviewer rubric | Same 11 journeys and negative probes; identical reviewer rubric |

To reduce confounding, use the same story fixture, sequence, prompts and evaluation checklists. Record generator/date/settings and the actual human intervention required; do not cherry-pick only the best screens. Do **not** equate a clickable simulated state with real authenticated save durability, legal compliance, secure key handling, model quality, native accessibility or cross-account isolation.

## Shared invented fixture

Book: **The Glass Orchard**. Chapter 7: **The Borrowed Name**.
Author test account alias: **Writer A**; second disposable alias: **Writer B**.
Characters: **Mira Vale** (knows the orchard gate's lock was replaced, not who did it), **Rowan** (withholds an answer), **Elias** (missing for eleven days).
Open threads: **Where is Elias?**, **Who replaced the orchard lock?**
Selected paragraph for Rewrite: "Mira stopped at the gate, a little afraid, because someone had changed the lock."
Fictional proposal: "Mira stopped at the gate. The lock was new. She could see scratches on the brass."
Fact candidate: "The orchard lock has been replaced." Evidence: "Someone had replaced the lock." That sentence does **not** identify who changed it.
Synthetic chapter revisions: local base **11**, server accepted **12**. These numbers are UI examples, not backend receipts.
AI state: **OFF / no key** initially. Optional key entry must be a harmless dummy UX field that rejects real-looking credentials and never stores or transmits input.

No real unpublished stories, actual authentication tokens, personally identifying participant details, provider credentials, historical confidential source bodies, production API base URLs or datasets.

## Minimum interaction test suite before comparing

1. **Manual writing**: enter a sample paragraph, use toolbar controls, switch chapters and return without losing simulated local content.
2. **Save truth**: toggle `unsaved → saving → confirmed` in a clearly labelled simulation; do not call browser memory "server saved."
3. **Recovery**: inject offline / lost acknowledgment / version conflict and compare local to accepted server fixture without automatic overwrite.
4. **Profiles**: manually edit a character/thread then review a *separate* proposed source-linked fact.
5. **Rule scope**: disable one guideline and show that the generated *mock request preview* excludes it.
6. **Optional BYOK**: preview model/recipient/excerpt/effective rules and cost disclosure without calling any real provider.
7. **Continue**: produce a clearly fabricated, review-only suggestion without auto-applying.
8. **Rewrite**: compare one selected paragraph span, explicitly Reject or Accept in mock state, show source revision pin.
9. **Stale request**: edit source during a pending mock generation; the returned proposal must become ineligible for Accept.
10. **Canon independence**: after accepting fictional text, approve/dismiss a fact separately.
11. **Privacy/export**: display export warning, account-scope simulation, deletion confirmation and honest signed-out token limitation.

If a generator cannot complete all interactions within trial limits, mark individual cases `BLOCKED` or `NOT_RUN`, rather than replacing an interactive acceptance case with a screenshot.

## Comparison rubric and evidence worksheet

For **each platform** record the following row for each JRN-001..011:

`platform | prototype URL | generator run identifier/date | JRN ID | test build/version | steps | simulated/unimplemented components | outcome [NOT_RUN/PASS/FAIL/BLOCKED] | observation | screenshot/ref | severity | user testing evidence [none/consented] | reviewer`

**Provisional unweighted design criteria, not owner-approved numeric release thresholds:**
- Writing-without-AI discoverability and lack of interruptions.
- Story-context access versus distraction while composing.
- Correct understanding of source/accepted/proposed/approved-canon boundaries.
- Honest saved/offline/lost-ACK/conflict messaging.
- Explicit recipient/context/rule/cost consent and user-owned free-or-paid BYOK copy.
- Keyboard navigation, focus, readable type at narrow widths, accessible control names.
- Completeness of eleven prototype journeys and negative-state simulations.
- Ease of transfer back into **editable** Figma Design, maintainability, clarity of handoff.
- Scope discipline: no real services, payment, publication, keys or proprietary product coupling.

**Decision methodology**: compare separate tasks and measured observations, identify preferred screen/interaction patterns, combine only after a consistency and complexity review. The result may be a hybrid; **neither tool's visual polish nor generated TypeScript automatically wins**. Actual consented fiction writer usability studies are still required before `G_DESIGN`; a prototype comparison alone is not evidence of user approval.

## Execution order / current checkpoint

- [x] Original two Figma concepts and four unified candidate frames exist, with partial visual inspection.
- [x] Git design journey matrix and writer validation plan prepared on PR #55 (draft).
- [x] Reusable prompts and comparison protocol prepared for both generators (these documents).
- [ ] Open Figma Make separately and attach approved existing concept frames; create **private synthetic** interaction draft.
- [ ] Connect Lovable app explicitly, or use Lovable's own editor; create isolated **synthetic frontend-only** draft.
- [ ] Record real returned project links and checked interactions, or `NOT_RUN` / `BLOCKED`.
- [ ] Inspect responsive/focus behavior; choose patterns to carry into editable Figma.
- [ ] Validate with real, consenting fiction writers; revise and obtain owner `G_DESIGN`.
- [ ] Separately authorize `G_CODE` after design acceptance, never from a generator result.

No live prototype from Figma Make or Lovable has been created or reviewed by writing this document.

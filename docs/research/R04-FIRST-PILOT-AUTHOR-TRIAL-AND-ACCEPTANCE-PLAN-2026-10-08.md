---
id: VEL-EXP-R04-001
type: research-protocol
status: proposed-not-executed
created_at: 2026-10-08
updated_at: 2026-10-08
author: project-research
version: 0.1.0
sources:
  - "PRE-DEVELOPMENT-RESEARCH-REGISTER.md — R02.01–R02.07, R04.01–R04.08"
  - "docs/research/R04-FIRST-USABLE-RELEASE-SCOPE-OPTIONS-2026-10-08.md"
  - "docs/research/R01-SRC001-USER-INTENT-EXTRACTION.md"
  - "docs/requirements/PRODUCT-DIRECTION-FROZEN-DEFAULT-GUIDANCE-2026-10-08.md"
  - "https://github.com/Ben-001-sys/Vellistry/pull/7 — Tiptap 3 headless research, not a browser test"
related_research:
  - R02
  - R04
  - R05
  - R06
  - R07
  - R08
  - R10
  - R11
  - R13
  - R15
  - R16
  - R19
  - R21
related_experiments: []
related_decisions: []
---

# R04 — Writer-first pilot research and acceptance protocol (not executed)

**Status:** STUDY PLAN, not a passed usability test, an architecture contract, a feature commitment or an approved public-release MVP. Evaluate candidate **A (conventional editor)** and **B (editor + controlled AI)** from the related [scope options](R04-FIRST-USABLE-RELEASE-SCOPE-OPTIONS-2026-10-08.md). Keep the C complete book-studio vision visible for prioritization.

## 1. Research questions and hypotheses

| Testable question | Hypothesis (unverified) | Decision affected |
|---|---|---|
| Does an author find A useful without AI? | A solid chapter-writing/editor baseline matters more than an always-visible AI assistant. | Is authoring alone a credible pilot milestone? |
| Can authors discover and understand optional creative guidance? | A simple overview plus advanced per-rule controls beats configuring all 130 individually at onboarding. | Rules Studio onboarding and visibility. |
| Does B improve writing workflow, not merely output volume? | Controllable, reviewable suggestions help more than freeform generated chapters when author voice is the goal. | First AI action and placement. |
| When is story information trusted? | Writers want to see/approve story facts before AI treats them as canon. | Minimal story-context pilot boundary. |
| Do authors need DOCX or another format to participate? | Portable plain text might be enough for technical trials but not for serious novelist migration. | Export threshold / import trial. |
| Are covers and book formatting indispensable for first purchase? | Their high stated importance does not alone establish they must be bundled into the first writing pilot. | Product scope sequencing, not feature deletion. |
| Can an author regain trust after interrupted writing? | Transparent save status and recoverability matter before expensive AI additions. | MVP security and reliability gates. |

## 2. Participants and evidence ethics

**Recommended exploratory recruitment plan (not a claim that participants exist):**
- Start with **6–9 consenting authors** across at least three profiles: long-form novelists, serial/web-fiction writers, and independent author-publishers; include at least **two who prefer writing without AI**. These are proposed recruitment numbers, not statistically representative sampling.
- Capture genres, approximate manuscript lengths, devices, workflow, tools currently used, past import/export problems, AI attitudes and familiarity with prompting. Don't treat individuals as independent population-level statistics.
- Observe real task performance in a moderated 30–60 minute session where feasible; do not substitute a promotional survey for task completion.
- Use synthetic chapter material by default; personal unpublished manuscripts only with informed consent, defined retention, deletion, secured access, and no third-party model transmission without permission.
- Recruit beyond the project owner before claiming an external author need has been validated. The owner can perform preliminary tasks but does not replace target user evidence.

## 3. Practical task script (proposed)

| Task ID | User goal (do not prescribe clicks) | What observer records | Result class |
|---|---|---|---|
| P04-T01 | Start a new book and create two chapters with names | Number of prompts, navigation confusion, task completion | A — essential |
| P04-T02 | Draft/revise 400–600 words in a chapter with varied emphasis, heading and paragraph spacing | Editing friction, formatting loss, keyboard/accessibility barriers | A — essential |
| P04-T03 | Move between two chapters, return, undo/redo and save/reopen | Lost work, unintended changes, perceived save confidence | A — essential |
| P04-T04 | Export a copy and open it elsewhere; describe what must be retained | File validity, expected missing features, portability preference | A — essential |
| P04-T05 | Switch all optional AI features off and continue writing | Whether workflow remains usable without model/key | A — essential |
| P04-T06 | Locate one default quality rule, turn it off and later restore it | Whether author understands active vs disabled and scope | B — guided rules |
| P04-T07 | Create a book-specific custom rule for the author’s prose style | Input comprehension, preview understanding, cross-book isolation | B — custom rules |
| P04-T08 | Ask for a passage rewrite, preview instructions, and reject the first result | Ability to retain original voice and text, no unapproved edit | B — AI proposal |
| P04-T09 | Accept a later suggestion, then undo it and edit the same text before a delayed suggestion arrives | Selection safety, stale conflict handling, revert confidence | B — change safety |
| P04-T10 | Give the AI a character injury and a secret known only to another viewpoint | Canon and knowledge boundary, confusion, disclosure and accuracy | B — minimal canon |
| P04-T11 | Explore cover variants and finished-book format examples; decide what is necessary for a usable first release | Cover/editability/export priority evidence rather than leading feature endorsement | C sequencing |
| P04-T12 | Compare A vs B after using both; choose the workflow worth adopting and explain why | Preference, willingness to migrate, what caused value or distrust | Product choice |

Where no working integration exists, use **clearly labeled interactive mocks or simulations**; those results measure concept comprehension **not** model performance, saving durability or production reliability. Do not use a paper mock to claim an editor has passed a real workflow.

## 4. Candidate functional acceptance contract for a pilot (NOT numeric release approval)

**Manuscript integrity:**
- No successful task knowingly overwrites unapproved writer text; rejected suggestions do not modify the manuscript.
- Save/reopen retains supported structure, marks and substantive content; test recovery after a simulated interrupted save.
- The author can export their own writing to a plainly disclosed basic format. Whether DOCX must be included is a decision to establish from author interviews.
- Editing remains usable with AI disabled and does not require a provider credential.

**Tiptap-specific browser evidence:**
- Run in real browsers on representative hardware; validate chapter navigation, typing, selection, IME composition, paste, undo and focus/keyboard accessibility.
- Separate huge single-document scenarios from multiple chapters; record actual latency/re-render/memory observations, not only jsdom load times.
- Verify unsupported imported marks/styles trigger a visible fidelity report or refusal, rather than silently losing meaningful manuscript structure.
- Long input handling and word counts must be accurate enough for observed tasks, with edge-case fixtures documented.

**Rules and AI control (only if B is piloted):**
- Active/inactive defaults, author additions and applicability are visible to the author.
- Enabled/disabled state matches the **complete effective request**, not just the UI; no hidden old rule presets, caches or carried-over conversation content.
- Original frozen source and variants are preserved; if exact pack is not certified, **label simulated rules** and do not claim the real defaults were tested.
- One bounded AI action has explicit request/response, consent and cost/retention disclosure. Author controls accept/reject; stale suggestions cannot silently replace changed writing.
- AI quality, author preference and causality/POV accuracy need separate human tests; passing prompt inclusion is not proof of good fiction.
- Author-confirmed story facts are not silently rewritten based on output speculation.

**Privacy/trust:**
- No author manuscript accidentally crosses account/book boundaries in test fixture isolation.
- Any actual trial using identifiable/private user content requires secure environment, access review, deletion path, consent and disclosure of model provider data transmission.
- Commercial/public usage requires real authentication/authorization, backup/restore, export/deletion guarantees, and evaluated operational legal/financial duties; mocks or local saves are not sufficient.

## 5. Metrics and evidence, without inventing results

Each trial should capture:
- Participant profile and consent, selected candidate A/B, browser/device and whether the workflow was simulated or actually implemented.
- Task completion, assistance, time-on-task, failure/error descriptions, recovery path, formatting/data loss observations.
- Writer confidence (self-report), whether Rules Studio scope/preview was correctly explained in their own words, and whether deliberate stylistic choices were respected.
- Export format required to seriously adopt the product, role of cover editing/print production, potential migration concerns.
- User preference and *reason*, not merely which layout looks attractive; unexpected features, omitted expected basics and opportunity cost.
- For AI tasks, effective rules/context trace, model/version and cost where appropriate, original/suggested/accepted text state, human quality rubric and author preference.
- Adverse incidents (unapproved edit, lost data, mistaken canon, unseen rule, cross-book leakage), which trigger severity review rather than being averaged away.

**Illustrative candidate thresholds for later approval, not approved targets:**
- **Zero observed silent manuscript loss or unapproved overwrites** in pilot task executions; any such incident blocks claims of production safety pending investigation and re-test.
- **All deterministic rule-inclusion/exclusion assertions** should pass for the evaluated build; version/model adherence is judged separately.
- Set author-reported usefulness, task completion, acceptable latency, restoration confidence and conversion-fidelity thresholds **after pilot baselines and owner review**. No universal percentage is claimed from the current synthetic tests.

## 6. What can be tested now versus what must wait

**Can proceed with no app architecture decision:**
- Interview participants about real writing tasks and essential import/export/cover demands.
- Perform research-only real-browser Tiptap editing spike on synthetic material.
- Use isolated R06 simulated-rule request traces (clearly not the frozen production rule pack).
- Present click-through concept designs for A and B, record misunderstandings and preferences.
- Build a source-to-requirement coverage map, including unapproved feature boundaries and archive gaps.

**Must not be reported as accomplished yet:**
- Actual R02 target-author interviews, production editor reliability, writing-quality improvement by any model, authentic packaged guidance behavior, secure production BYOK, complete Story Bible/canon, professional DOCX/EPUB/PDF outputs, cover editing or a validated commercial MVP.
- Measured external market demand or statistically representative author priorities.
- Selected frontend stack, database, service topology, storage architecture, pricing, launch timeline or customer-data processing model.

## 7. Evidence-to-decision review process

1. Conduct bounded research sessions and capture facts in an immutable result record linked to **P04-Txx**.
2. Mark each observation as **OBSERVED**, **PARTICIPANT OPINION**, **VENDOR CLAIM**, **AUTHOR-DIRECTED REQUIREMENT** or **ANALYST PROPOSAL**.
3. Revisit [the three A/B/C scope options](R04-FIRST-USABLE-RELEASE-SCOPE-OPTIONS-2026-10-08.md) and name any scope changes with evidence and costs.
4. Obtain **explicit project-owner approval** of the initial pilot and separate public-release boundary; do not infer it from willingness to continue research.
5. Only then promote individual VEL-REQ records, accept prioritization, and authorize a bounded implementation plan/ADRs as appropriate.
6. Continue R01 (frozen rule source), R07 (canon/knowledge), R08 (provider and costs), R11/R12/R13 (import/publish/covers) and R15 (privacy) alongside scoped author trials.

**Status as of 2026-10-08: tasks designed, **none executed**, no external participants interviewed and no final pilot/public MVP approved.**

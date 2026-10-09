---
id: VEL-EXE-R04-20261008-001
type: execution-bundle
status: completed-research-draft
created_at: 2026-10-08
updated_at: 2026-10-08
author: project-research
version: 0.1.0
sources:
  - "docs/research/R04-FIRST-USABLE-RELEASE-SCOPE-OPTIONS-2026-10-08.md"
  - "docs/research/R04-FIRST-PILOT-AUTHOR-TRIAL-AND-ACCEPTANCE-PLAN-2026-10-08.md"
  - "docs/research/R01-SRC001-USER-INTENT-EXTRACTION.md"
  - "docs/requirements/PRODUCT-DIRECTION-FROZEN-DEFAULT-GUIDANCE-2026-10-08.md"
related_research:
  - R01
  - R02
  - R04
  - R05
  - R06
  - R07
  - R15
related_decisions: []
---

# R04 ExecutionBundle — first usable release scope research

## Objective

Compare evidence-grounded boundaries for Vellistry's first author-usable milestone, using original user intent, the explicitly frozen creative guidance, and the approved choice of Tiptap 3/ProseMirror, **without deciding product MVP on the owner's behalf**.

## Work performed

- Read the R04 research questions, the SRC-001 user-only intent extraction, initial proposed requirement seeds, the current frozen-default behavior, R03 competitor research and R05/R06 technical evidence.
- Created the [R04 A/B/C scope comparison](R04-FIRST-USABLE-RELEASE-SCOPE-OPTIONS-2026-10-08.md) with explicit long-term retention of covers, publishing, portability, Story Bible, BYOK and MCP goals.
- Created the [author trial and acceptance protocol](R04-FIRST-PILOT-AUTHOR-TRIAL-AND-ACCEPTANCE-PLAN-2026-10-08.md): 12 research tasks; proposed 6–9 participants; task metrics, privacy/trust precautions, failure criteria and decision gates.
- Refrained from selecting a web framework, database, storage architecture, model provider, paid Tiptap service, publishing engine, cover-editor technology, price or launch timeline.

## FACT

- User source prioritizes fiction/book writing, normal editor functionality, visual writing-rule controls, and serious research into covers, export and printing.
- The user explicitly froze the creative writing guidance as default-on but author-controllable, with intentional creative exceptions.
- The owner selected Tiptap 3 / ProseMirror as the manuscript editor foundation; the separate ADR decision PR exists.
- R05 headless Tiptap spike passed 7/7 simulated-DOM tests and R06 synthetic instruction assembly passed 12/12; neither verifies real author satisfaction, model quality, data durability or complete book production.
- R02 external author interviews and direct competing-product trials have not been executed in this R04 task.

## INTERPRETATION

- A writer-first editor is an important independent product-value test.
- An editor plus a simple, transparent Rules Studio and one familiar AI writing action offers a coherent differentiating *pilot hypothesis*.
- Shipping everything, including cover design, publishing production, model ecosystems and full canon, in one first release combines many unmeasured risks.

## PROPOSAL — NOT APPROVED

- Candidate **A** as internal editor-reliability milestone; candidate **B** as first integrated author pilot after source, privacy and provider gates; retain candidate **C** as wider book-studio vision.
- Validate initial release scope with participants and actual evidence of which export/cover/AI tasks they will use.
- Promote individual requirements only after owner review; no final public MVP scope or architecture accepted now.

## Verification and limitations

- The documents exist and have source/method/decision-status boundaries.
- No feature implementation, real-world writer trial, model generation, export compatibility or budget calculation performed.
- Proposed interview sample is exploratory, not statistically representative.
- Initial numbers and conditions are **study-plan suggestions, not measured findings or owner-approved launch thresholds**.
- Original source migration and disputed frozen-guidance AR variants remain outstanding.

## Reviewer disposition

**Research proposal ready for owner self-review**, not permission to build a production MVP or announce scope. The owner must explicitly decide A/B/C sequencing, the priority author segment, minimal portable output, and timing of cover/publishing features once evidence is considered.

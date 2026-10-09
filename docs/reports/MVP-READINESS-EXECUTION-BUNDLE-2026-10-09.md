---
id: VEL-EB-MVP-READINESS-20261009-001
type: execution-bundle
status: completed-documentation-draft
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md (PR #10)"
  - "docs/requirements/MVP-FEATURE-HORIZON-MAP-2026-10-09.md (PR #10)"
  - "docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md"
  - "docs/research/MVP-READINESS-GATES-AND-ARCHITECTURE-DECISION-QUESTIONS-2026-10-09.md"
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
  - VEL-MVP-ACCEPTANCE-20261009-001
related_research:
  - R01
  - R02
  - R04
  - R05
  - R06
  - R07
  - R08
  - R11
  - R15
  - R18
  - R19
related_adrs:
  - ADR-0003
---

# Vellistry MVP readiness — execution record

## Objective

Convert the **already owner-approved MVP product target** into a first reviewable **end-to-end author journey and release-acceptance contract**, a research dependency map and a measured architecture-question list. Avoid building unapproved systems or pretending tests/user studies have been performed.

## FACT — work actually performed

- Inspected accepted MVP scope decision, 396-ID scope mapping, seed requirements, original R01 user-intent extraction, prior R04 author-task protocol, source-frozen guidance requirement and R06 rule evaluation protocol.
- Created [MVP author journeys and acceptance](../requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md), which defines **11 end-to-end author journeys, 37 candidate functional acceptance scenarios and 10 deliberate negative/failure scenarios** linked to the M1–M8 scope groups.
- Created [MVP readiness and architecture questions](../research/MVP-READINESS-GATES-AND-ARCHITECTURE-DECISION-QUESTIONS-2026-10-09.md), which identifies **10 evidence gates** and **12 unresolved architecture decision questions**, with separate research slices and specific proposed first tickets.
- No approved MVP area was removed; Cover Studio and professional EPUB/print are still explicitly deferred, not cancelled.
- Worked on a **stacked documentation branch based on PR #10**, because the scope-decision documents are not yet merged to `main`. This branch should target `research/r04-specific-mvp-proposal-v0.1` in its own draft PR until #10 is merged. PR #9 feature catalog remains separate and must be reconciled at merge.
- Maintained distinction between source facts, recommended tests and acceptance decisions. No new architecture ADR was accepted.

## INTERPRETATION — why this is a useful next step

- The main challenge after scope acceptance is **integration correctness**: a serious writing editor, reliable saves, profile/canon proposals and optional AI must remain safe *together*, not just as independent widgets.
- Basic DOCX interchange and account-isolated story-data recovery should be investigated **before** selecting a backend, because poor interchange and broken recovery could invalidate author trust.
- The most technically distinctive MVP challenge is keeping accepted text, provisional AI text, candidate profile changes, approved canon and applied rules **strictly separate** as authors revise story time.
- Simulated-editor evidence and synthetic request-inclusion tests are valuable, but do not resolve the browser, model-response or security gates.

## PROPOSAL — research order and architecture evaluation

1. **R01 frozen-guidance archival/variant audit** and **R15 private-manuscript threat model** (source/consent foundations).
2. In parallel, a **real-browser Tiptap chapter editor research spike** and **AI-off manual live profile UI** using synthetic prose.
3. **R11 DOCX/TXT interoperability fixtures** and **R02 writer interview/task observations** as soon as safely practical.
4. After source + privacy/budget gates, run controlled **R06/R08 actual provider and writing-quality tests**, and validate **R07 profile proposal accuracy/retcon cases**.
5. Use the results to compare full architecture options and request owner approval of the actual app stack/storage/AI service ADRs. Do not infer a provider/database from earlier projects.
6. Assemble a fully reproducible **R19 acceptance suite** and move through A internal → B+ pilot → public MVP gates when independently supported.

## Tests, evidence and limitations

- **Documentation verification:** count and cross-reference the 11 `VEL-JRN` rows, 37 `ACC` cases, 10 `NEG` cases, 10 `G` gates and 12 `ARCH-Q` questions in their corresponding committed files. Check that none is marked passed.
- **No new runnable app tests performed.** Prior seven-pass Tiptap headless test and R06 12-pass synthetic test are **historical research evidence only**, not rerun by this work.
- **No human author interviews conducted by this task**, no real provider connected, no secrets handled, no private manuscript uploaded, no reliable app saving/portability demonstrated, no public deployment or app stack selected.
- The product scope is owner-approved, but **the candidate acceptance details are proposed for review**; some targets still require baseline studies and the owner's thresholds.
- R01 short/expanded AR conflict and original historical source gaps are not resolved by this pack.
- No production-facing time estimates are provided.

## Changes and handoff

- [End-to-end author journeys and acceptance](../requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md)
- [Research readiness and architecture decision questions](../research/MVP-READINESS-GATES-AND-ARCHITECTURE-DECISION-QUESTIONS-2026-10-09.md)
- `CURRENT-STATE.md` branch appendix describing the reviewed scope, readiness gates and next tasks.
- This execution bundle documenting facts, proposals, test status and limitations.

**Owner review request:** Confirm that these eleven journeys reasonably operationalize the approved eight MVP areas, identify any missing core writer scenarios, and accept/revise the proposed research order. Acceptance of these planning files must not be recorded as selecting an application stack or clearing a public release gate.

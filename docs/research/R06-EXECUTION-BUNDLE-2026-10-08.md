---
id: VEL-EXE-R06-20261008-001
type: execution-bundle
status: completed-research-draft
created_at: 2026-10-08
updated_at: 2026-10-08
author: project-research
version: 0.1.0
sources:
  - "docs/requirements/PRODUCT-DIRECTION-FROZEN-DEFAULT-GUIDANCE-2026-10-08.md"
  - "docs/research/R06-RULES-STUDIO-APPLICATION-RESEARCH-2026-10-08.md"
  - "docs/research/R06-RULE-APPLICATION-EVALUATION-PROTOCOL.md"
related_research:
  - R06
  - R08
  - R10
---

# R06 Research ExecutionBundle — Rules and generation

## Objective

Continue Vellistry's pre-development research after the governance baseline: evaluate how the frozen default fiction-guidance system and writer-defined rules *should be tested* against real model generation and established AI fiction-writing products.

## Work performed

- Checked accepted governance, product direction and existing Git research.
- Reviewed primary public documentation for Novelcrafter custom prompts and preview; Plotdrive contextual AI tools; NovelAI lore toggles; AI Dungeon context composition; OpenAI model/version semantics; and Gemini long-context/caching guidance.
- Authored [rule-application research](R06-RULES-STUDIO-APPLICATION-RESEARCH-2026-10-08.md) with findings, proposals, confidence limits and failure modes.
- Authored the [evaluation protocol](R06-RULE-APPLICATION-EVALUATION-PROTOCOL.md) containing 6 synthetic fiction cases and 18 proposed assertions. All generated prose fixtures are hypothetical.
- Preserved the owner's frozen-default direction and the unresolved R01 AR mapping. No original creative rules were rewritten.

## FACT (verified from documents, not by running apps)

- Existing competitors already expose multiple customization and prompt/context inspection patterns; the app cannot honestly claim the mere existence of custom prompts as novel.
- Long-context systems have explicit or implicit selection, truncation, cache and version-change concerns.
- Owner direction: default guidance remains author-controlled and enabled for new users; disabled rules must not be secretly included in effective instructions.

## INTERPRETATION (not measured)

- A comprehensible "effective instructions" view could improve trust and diagnose rule-context bugs.
- Literal, universal inclusion of the entire frozen guidance corpus in every request may impose cost and harmful stylistic overconstraint; selecting relevant guidance warrants a controlled comparison.
- Distinguishing instruction inclusion from creative writing quality is necessary to avoid deceptive compliance claims.

## PROPOSAL (not approved implementation)

- Explore a guidance overview, author-rule entry, action-context preview, restoration, scope isolation and explicit literary exceptions.
- Test prompt assembly separately from model adherence, before and after rule toggles.
- Evaluate output quality by blind author/human preference and error metrics on versioned synthetic stories.
- Test provider conversation state and cached context for stale disabled instructions.

## Test status

**No API model inference, UI prototype, provider trial, cost test, or end-user usability evaluation was executed.** No claims of measured fiction quality or rule adherence are made. The test plan is actionable but remains proposed.

## Modified artifacts

- `docs/research/R06-RULES-STUDIO-APPLICATION-RESEARCH-2026-10-08.md`
- `docs/research/R06-RULE-APPLICATION-EVALUATION-PROTOCOL.md`
- This ExecutionBundle.
- `CURRENT-STATE.md` updated separately to point to these records.

## Risks and blockers

- Exact installable frozen pack and AR identity collisions not resolved; run synthetic baseline first if necessary and label it so.
- Provider/test billing, data rights, model versions and independent human scoring not established.
- No technology, model, workflow orchestration or architecture approved.

## Reviewer disposition

**Draft research for owner review; not authorization to implement or merge.** Future work should record a new executed experiment/results document rather than convert this plan into evidence of outcomes.

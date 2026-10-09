---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.8
---

# Vellistry — Current State

## Phase
Research and discovery; engineering knowledge foundation initialization.

## Accepted direction
- Future application code and engineering knowledge will share one GitHub repository (ADR-0001).
- ADR and historical records require structured, traceable metadata (ADR-0002).
- Use Git/Markdown first, preserving separate runtime storage for future author data.
- Apply research governance and lightweight ContextPack/ExecutionBundle handoffs before building complex orchestration.

## Solo-maintainer collaboration policy (2026-10-08)
- The project owner is the only human contributor for now. Owner self-review and successful required checks are sufficient under the working PR process; no second human reviewer is expected or required.
- AI review may be requested as an independent diagnostic pass, but does not constitute a formal independent human approval.
- Material architecture/security/production actions still require deliberate owner sign-off. This clarification is recorded in HIS-20261008-002 and should be revisited if human collaborators join.

## Repository
Private repository: `Ben-001-sys/Vellistry`.
Knowledge-baseline PR #1 is closed; its governance and initial research documents are now present on `main`.
Current proposed research branch: `research/r06-rule-application-benchmark-v0.1`. A separate owner review/merge is required for this research batch.

## Available research sources
- AI Writing App Blueprint.md
- Research AI Writing Problems.md
- Branch · Research AI Writing Problems.md
- Getting Better With Agentic Coding - Copy.zip (nine-document archive)

These sources have been identified but **not yet fully migrated or individually verified**. See source and research inventories.

## Undecided
- Feature prioritization and MVP boundary.
- Detailed PRD and acceptance criteria.
- Editor framework and page-layout approach.
- AI provider integration, MCP capabilities, context architecture, story state model.
- Backend/database/framework/deployment technology.
- Runtime author-data privacy and security architecture.

## Next actions
1. Complete source snapshot and stable provenance links for existing research documents.
2. Extract individual requirements without losing details; distinguish evidence from suggestions.
3. Audit consistency across research and record ambiguities or conflicts.
4. Prepare a research-only Rules Studio/default-guidance fixture and perform measured rule-application evaluations with author-controlled exceptions, without altering frozen source.
5. Continue the professional editor technology/licensing trials as an independent research workstream; do not preselect a stack.

## Verification note
No application code, product architecture, or live research workflow has been validated by this documentation bootstrap. Do not imply otherwise.

## R01 source-audit progress (2026-10-08; draft evidence)
- First read-only source inventory and taxonomy audit recorded in [R01-SOURCE-AUDIT-2026-10-08.md](docs/research/R01-SOURCE-AUDIT-2026-10-08.md). The historical fiction-system ZIP and standalone 20-section research blueprint are not available in the inspected source set; earlier archival gap reports remain unverified.
- SHA-256 checks confirm duplicate blueprint uploads and byte-identical source Markdown inside the 3-file conversation-export ZIP; no original source files were changed.
- SRC-003 contains 13 domains, 130 unique guidance IDs, 40 numbered constitutional principles, expanded Domain 13 text, and an expanded Post-Draft Audit. The short index and expanded manuals have **13 title differences**, including all ten AR entries, requiring author-reviewed semantic reconciliation before canonical import.
- External claims, standalone archival completeness, and original user-requirement traceability remain open. This is research evidence, not an accepted fiction-system mapping or application architecture decision.
- A separate first-pass extraction of **28 user-authored product-intent statements** is recorded in [R01-SRC001-USER-INTENT-EXTRACTION.md](docs/research/R01-SRC001-USER-INTENT-EXTRACTION.md). These are source-derived candidates, not approved requirements. They preserve ambiguity in the original host naming and distinguish user requests from AI suggestions.
- R01-A semantic comparison completed as **draft research**, documented in [R01-AR-SEMANTIC-RECONCILIATION-2026-10-08.md](docs/research/R01-AR-SEMANTIC-RECONCILIATION-2026-10-08.md). Domain 13 pairs: 3 equivalent-core, 4 overlapping, 3 distinct (AR-04/06/09); PV-10 is also substantively different beyond title wording. Taxonomy authority and IDs remain **unapproved**; preserve both source variants. The earlier first-pass audit includes an explicit addendum clarifying PV-10.

## Owner clarification and market research — 2026-10-08
- **Owner-directed product behavior:** Freeze the existing fiction guidance as Vellistry's **default-enabled writing-quality pack** while giving users control to disable/remove rules from their active configurations, add custom rules, and determine what influences each relevant AI generation. Original-source content is unchanged; short/expanded AR definition collisions remain preserved as historical research, not silently reconciled. See [the product direction](docs/requirements/PRODUCT-DIRECTION-FROZEN-DEFAULT-GUIDANCE-2026-10-08.md). The exact packaged default release and tested model compliance remain open.
- **R03 first competitor scan completed as draft research:** Nine relevant AI-fiction or adjacent writing applications, six sampled consumer-feedback themes, and twelve relative-complexity feature candidates documented in [the R03 study](docs/research/R03-AI-FICTION-APPS-COMPETITIVE-SCAN-2026-10-08.md). No paid hands-on trials, representative interviews, pricing benchmark, product MVP approval, or application architecture decision have been made.
- **Next bounded research:** test effective-rule visibility and toggles against user instructions; define benchmark script for competitive onboarding/drafting and real memory failures; validate editor/export licensing and actual API/MCP integration support from dated sources.

## PR #1 merge-review remediation — 2026-10-08
- **Validator coverage fixed:** `scripts/check_knowledge_metadata.py` now enumerates every `.md` record under decision/history directories (excluding README), rejects unexpected names instead of silently skipping them, validates history date-to-ID correspondence, and fails closed if no records are found.
- **Regression proof:** `tests/test_knowledge_metadata.py` contains eight positive/negative tests. The workflow now runs these tests and watches changes to its test file; GitHub Actions [Knowledge metadata run #19](https://github.com/Ben-001-sys/Vellistry/actions/runs/37781479974) completed successfully on the updated code, with **8/8 tests passing and 3 ADR/history records validated**. This proves the current tested cases, not complete historical/semantic validity.
- **Approval provenance clarified:** `docs/governance/APPROVAL-PROVENANCE-2026-10-08.md` captures recoverable original user wording, its limits, and the reviewer-verification basis. ADR-0001/ADR-0002 and the historical record link to it. ADR-0001 no longer names `apps/` or `packages/` as a predetermined layout; the single-repository governance direction remains separate from application architecture.
- **Provenance limitation at the earlier review checkpoint (subsequently updated below):** the original decision conversation's immutable URL/full transcript was not archived, and the directly retrievable wording was a question rather than an affirmative statement. The newer, separate owner reconfirmation is cited below; this original-chat archival gap remains open even though present approval is now established.
- **PR status:** Still open/draft and unmerged; documentation baseline and research remain awaiting owner/reviewer merge decision. No application stack, model provider, package structure, database, deployment, or runtime architecture approved.

## Owner confirmation evidence and final-review gate — 2026-10-08
- **ADR-0001 owner approval verified:** `Ben-001-sys` explicitly reconfirmed repository co-location in [PR #1 comment 6068029790](https://github.com/Ben-001-sys/Vellistry/pull/1#issuecomment-6068029790). The accepted decision's owner approval is now directly retrievable and no longer requires owner reconfirmation. The original earlier conversation itself remains without a durable permalink; this separate historical provenance gap is not falsely marked solved.
- **Linked records:** [ADR-0001](docs/decisions/ADR-0001-co-locate-engineering-knowledge-with-application.md), [the provenance review](docs/governance/APPROVAL-PROVENANCE-2026-10-08.md), and the additive [HIS-20261008-003 event](docs/history/2026-10-08-adr-0001-owner-reconfirmation.md) document the evidence. The original HIS-20261008-001 is retained and cross-referenced rather than silently replaced.
- **Merge boundary:** Confirm green metadata CI and reviewer assessment on the resulting **exact PR head**. PR remains open/draft until the owner decides whether to mark ready and merge; this recorded approval is approval of ADR-0001, **not** authorization to merge the PR.

## PR #1 merge verified; R02 migration begun — 2026-10-08
- [PR #1](https://github.com/Ben-001-sys/Vellistry/pull/1) merged into `main` at 2026-10-08T20:15:48Z (merge SHA `4b58312652ec6f2b0c40cde984a672b2fc2eeea1`). Earlier pre-merge status entries above are historical snapshots, not the current PR state.
- The approved **solo-maintainer policy** remains in force: owner self-review and final merge, required CI, optional advisory AI review, and no second human required.
- New R02 branch `docs/research-migration-r02` contains [the first SRC-002 navigation index](docs/research/R02-SRC002-READER-PROBLEM-SOURCE-INDEX-2026-10-08.md) and [a phased archival and migration plan](docs/research/R02-RESEARCH-MIGRATION-PLAN-2026-10-08.md).
- R02 is **partial/draft**: original full research bytes still require stable archiving in Git or another immutable referenced location. The initial headings index is not a verified external fact-check, approved writing ruleset, or an architecture decision.
- Immediate next steps: archive original files with SHA-256 verification; reconcile source paths and update SRC-001–004 register; expand source-to-requirement references without changing frozen guidance or losing variants.

## R06 rule-application research — 2026-10-08
- Initial [Rules Studio application research](docs/research/R06-RULES-STUDIO-APPLICATION-RESEARCH-2026-10-08.md) checked primary vendor documentation for Novelcrafter, Plotdrive, NovelAI, AI Dungeon and provider instruction/context behavior. Findings about vendor features are documentation-grounded, not verified by running paid competitor accounts.
- The companion [evaluation protocol](docs/research/R06-RULE-APPLICATION-EVALUATION-PROTOCOL.md) defines **6 synthetic fiction cases and 18 proposed tests**, covering default-on, disable/re-enable, custom instructions, author exceptions, scope isolation, context omissions, stale caches, costs, version changes and quality scoring.
- A [research ExecutionBundle](docs/research/R06-EXECUTION-BUNDLE-2026-10-08.md) separates verified documentation, interpretation, proposals and non-executed tests.
- **Measured product results: NONE YET.** No model was called, no API credentials were used, no editor/UI prototype implemented and no confirmed improvement in generated fiction quality is claimed.
- The 13-domain frozen source remains unchanged; deployable default-pack packaging and AR conflicts remain explicitly unresolved pending author/source review.
- Research artifacts are proposed on `research/r06-rule-application-benchmark-v0.1`; owner self-review/merge required. This does not alter accepted product direction or settle application architecture.

## R06-002 executable synthetic experiment — 2026-10-08
- A non-production [synthetic request resolver and 12 tests](docs/research/experiments/r06_synthetic_request_simulator.py) were added to this draft research branch. Its three defaults are invented **SIMULATED GUIDANCE** and deliberately not the frozen 130-lens source.
- GitHub Actions [R06 synthetic research run #1](https://github.com/Ben-001-sys/Vellistry/actions/runs/37840086630) **passed all 12 tests**, checking enable/disable, custom rule inclusion, project isolation, restoration, canon separation, opaque prior-context rejection, action scoping and duplicate IDs.
- The [experiment record](docs/research/R06-002-SYNTHETIC-RULE-CONTRACT-RESULTS.md) preserves method and limits. **No AI-generated fiction, real model compliance, provider calls, actual implementation or quality improvement has been tested.**
- Next: controlled model tests only after test fixtures, source-pack status, appropriate author data and spending cap are selected; no architecture or provider chosen.

## Stage 3 context handoff review remediation — 2026-10-08
- [Stage 3 PR #5](https://github.com/Ben-001-sys/Vellistry/pull/5) remains **draft and unmerged** during owner review. [Original review #5462675990](https://github.com/Ben-001-sys/Vellistry/pull/5#pullrequestreview-5462675990) identified permission-contract tampering and a merge conflict with `main`.
- Pilot artifacts: `VEL-TASK-0001` (verification), `VEL-CP-0001` (pinned revision) and `VEL-EB-0001` (proposed for owner review). The pinned pack records the historical task Git blob, while its current task status may progress independently.
- Remediation in progress: validate the displayed ContextPack contract against its immutable task content (objective, in/out scope, allowed actions, approval requirements, acceptance criteria and deliverables). Add mutation/late-edit tests; require owner-linked evidence for bundle acceptance without equating schema validation with true account authorization.
- This state update **retains** the already merged R02 reader-research and R06 rules-evaluation records above. Earlier references to their draft branches describe historical work-in-progress checkpoints, not the current state of those merged PRs.
- Verify the agent-workflow and history metadata checks on the final conflict-resolved PR head before marking Stage 3 ready. An independent second-agent handoff test and original SRC-001 archive are still pending.
 
## R04 original scope-options research reconciled — 2026-10-09
- [R04 A/B/C scope alternatives](docs/research/R04-FIRST-USABLE-RELEASE-SCOPE-OPTIONS-2026-10-08.md), [12-task author study protocol](docs/research/R04-FIRST-PILOT-AUTHOR-TRIAL-AND-ACCEPTANCE-PLAN-2026-10-08.md) and [ExecutionBundle](docs/research/R04-SCOPE-RESEARCH-EXECUTION-BUNDLE-2026-10-08.md) preserve **historical provisional research as of 2026-10-08**. They were written before final MVP scope approval; the research questions are not retroactively marked fully validated and no external author trial was conducted.
- **Subsequent authoritative owner decision:** The owner later explicitly approved the eight-area MVP, including live Story Profiles and the deferral of complete Cover Studio/print-EPUB production. The decision and scope map are separately documented in draft [PR #10](https://github.com/Ben-001-sys/Vellistry/pull/10); an approved *product target* does not prove implemented functionality or completed research.
- **Owner-selected editor:** Tiptap 3 / ProseMirror (ADR-0003 on draft [PR #6](https://github.com/Ben-001-sys/Vellistry/pull/6)); this scope investigation does not select a backend, database, model/provider, full frontend framework or paid editor package.
- **Merged history:** Existing R02, merged R06 PR #3 and merged Stage 3 PR #5 sections from `main` are retained without overwriting; earlier draft-status notes remain historically dated.
- **Review status:** R04 research PR #8 remains draft/unmerged pending owner assessment of the original research and exact-head checks.

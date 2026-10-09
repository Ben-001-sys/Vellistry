---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.11
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

## R05 editor license research branch reconciled after formal PR #4 review — 2026-10-09
- [Original R05 comparative editor study](docs/research/R05-MANUSCRIPT-EDITOR-LICENSING-CAPABILITY-SCAN-2026-10-08.md) and [ExecutionBundle](docs/research/R05-EDITOR-RESEARCH-EXECUTION-BUNDLE-2026-10-08.md) remain **historical pre-selection research** across seven editor toolkits and 12 **proposed, unexecuted** evaluation cases. Their written research time precedes the owner's Tiptap selection and MVP approval; do not rewrite the original research retroactively.
- **Current R06 status:** [PR #3](https://github.com/Ben-001-sys/Vellistry/pull/3) has **MERGED** into `main`, including synthetic request-assembly evidence. The original R05 branch's statement that R06 remained open was outdated and has been superseded here. No claim of real AI fiction quality is implied.
- **Current Stage 3 status:** [agent handoff PR #5](https://github.com/Ben-001-sys/Vellistry/pull/5) also has **MERGED** into `main`. Existing earlier 'pending review' passages remain a historical audit trail; the merge status here is later and current at this checkpoint. Preserve all R02/R06/Stage 3 sections and evidence.
- **Owner-selected editor:** The owner selected **Tiptap 3 / ProseMirror** after the R05 study. The decision is on still-draft [ADR-0003 PR #6](https://github.com/Ben-001-sys/Vellistry/pull/6); it does not approve premium Tiptap Pages/Conversion or choose a separate framework, backend, database, AI provider or publishing engine.
- **Owner-approved product scope:** The eight-area MVP is recorded on draft [PR #10](https://github.com/Ben-001-sys/Vellistry/pull/10). This changes the *present* scope but not the facts or date of the pre-decision R05 source paper. Standalone comprehensive EPUB/print layout is intentionally post-MVP.
- **PR #4 review remediation:** This branch incorporates current `main` history and reconciles the old `CURRENT-STATE.md` overlap rather than copying the older state over merged R02/R06/Stage 3 sections. Verify exact-head metadata checks, mergeability and reviewer comments before any owner-authorized merge.

## R05 Tiptap 3 headless research reconciled after merged-main changes — 2026-10-09
- [R05 Tiptap 3 real-package research](docs/research/R05-TIPTAP3-MANUSCRIPT-WORKSPACE-VALIDATION-2026-10-08.md) and [ExecutionBundle](docs/research/R05-TIPTAP3-EXECUTION-BUNDLE-2026-10-08.md) record **7/7** passing isolated Node/jsdom tests, with exact passing run [37843380823](https://github.com/Ben-001-sys/Vellistry/actions/runs/37843380823). Tests cover limited editing mechanics, not real-browser UX, secure autosave, author privacy or a production app.
- **Further research** has separately progressed to seven limited passing actual Chromium tests on [PR #12](https://github.com/Ben-001-sys/Vellistry/pull/12), which is stacked on this branch. That does not change the historical claims of the earlier jsdom report.
- **Editor choice:** The owner selected Tiptap major version 3 / ProseMirror and the accepted decision remains recorded in draft [ADR-0003 PR #6](https://github.com/Ben-001-sys/Vellistry/pull/6). No other app framework, document store, provider or paid Tiptap package was selected by these tests.
- **Later scope approval:** The eight-area MVP target was approved separately after this original experiment ([PR #10](https://github.com/Ben-001-sys/Vellistry/pull/10)). Do not retrospectively treat the headless experiment as an accepted full MVP.
- **Merged history preserved:** Reconciliation retains the R02 study, merged R06 PR #3 and merged Stage 3 PR #5 from current `main`. Earlier pending-status entries remain historical, not current statements. This research PR remains open/unmerged until owner review and exact-head checks.

## R07 Live Story Profiles synthetic research — 2026-10-09
- [R07 source-grounded concept study](docs/research/R07-LIVE-STORY-PROFILES-CONCEPT-MODEL-2026-10-09.md) addresses owner-requested UI-visible **characters and storyline profiles** during human/AI writing, distinguishes accepted manuscript, outline intent, pending extracted suggestions, approved state and subjective/uncertain claims, and separates story-event versus discourse/revision order. Related functions already exist in Novelcrafter, NovelAI and Sudowrite; no novelty claims or production architecture were made.
- [R07 deterministic story-state experiment](docs/research/experiments/r07_story_state_contract.py) and [20 test cases](docs/research/experiments/test_r07_story_state_contract.py) are pure Python standard library using **invented scenes and hand-authored candidate changes**, no real extractor, private author data or provider. [GitHub Actions #37919046053](https://github.com/Ben-001-sys/Vellistry/actions/runs/37919046053) **PASSED 20/20** on exact code/workflow commit `248f0560f792eee79a45a141941dc80843ca95d3`, including stale evidence, subjective claims, flashbacks, approvals and book separation.
- [R07 ExecutionBundle](docs/reports/R07-LIVE-PROFILES-EXECUTION-BUNDLE-2026-10-09.md) defines FACT/INTERPRETATION/PROPOSAL and remaining research gates. **R07 remains partial**: actual model precision/recall, trustworthy extraction of beliefs vs objective events, author UI reviews, storage/backups, account security and long-form context accuracy have **not** been verified. The ten R07 research-register checkboxes remain open.
- This is branch-local **draft research**, not a new approved database, event-sourcing requirement, provider, Tiptap implementation, automatic per-keystroke LLM processing or wider MVP feature addition. Current `main` has not gained those new technologies; the latest separate MVP product decision is on draft PR #10.

## One specific author-facing MVP recommendation — 2026-10-09
- [R04 scoped MVP proposal](docs/research/R04-SPECIFIC-MVP-RECOMMENDATION-2026-10-09.md) recommends **one coherent first product**: normal Tiptap 3 chapter writing (AI optional); dependable saving, basic DOCX/TXT interchange and backup; a simple default-on Rules Studio after R01 source validation; Continue and Rewrite selected via one evaluated BYOK provider; explicit suggestion accept/reject/undo; **live UI-visible character and storyline profiles** with manual updates and author-approved AI-assisted change proposals; basic security/privacy/accessible workflows.
- This evolves existing **A → B** research into a more concrete **A internal editor milestone → B+ integrated author pilot with a small R07 live-profile slice → production-quality public MVP**. A, B+, and public release are delivery stages of the same proposed product, not three simultaneous public editions.
- Deliberately defer full layered Cover Studio, professional EPUB/print PDF/pagination, MCP/external tools, multi-provider routing, full graph continuity, collaboration and subscriptions **without dropping them from the full vision**.
- Required source/validation gates remain unresolved: original frozen guidance pack conflict (R01); external author workflows (R02); real-browser editor and DOCX fidelity (R05/R11); true model behavior/provider cost and privacy (R06/R08/R15); observed live profile extraction accuracy and false alarms (R07); production acceptance (R19).
- [ExecutionBundle](docs/research/R04-SPECIFIC-MVP-EXECUTION-BUNDLE-2026-10-09.md) remains the **pre-approval research record**. On 2026-10-09, the owner explicitly agreed to the eight-area MVP and deferral trade-off. The accepted scope is [VEL-PRODUCT-SCOPE-20261009-001](docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md), with [HIS-20261009-001](docs/history/2026-10-09-mvp-product-scope-approved.md) recording provenance and a [396-ID feature map](docs/requirements/MVP-FEATURE-HORIZON-MAP-2026-10-09.md) distinguishing bounded MVP features from post-MVP-unscheduled concepts. This approval selects **product scope, not app stack, provider, specific UI, readiness or launch date**. PR #9 must be updated to reflect approved horizons without changing source-authority statuses.
- **Next action:** verify PR #9 source-feature ID mapping, reconcile the scope and feature docs, then derive acceptance criteria and R01/R02/R05/R06/R07/R08/R11/R15/R19 validation plans. Research gates are still open; no production architecture authorization follows automatically.

## Owner approved initial Vellistry MVP scope — 2026-10-09
- **Accepted** eight-area Vellistry product target: author-first book/chapter writing, Tiptap 3 editor, durable saving and basic DOCX/TXT portability, author-visible manual and approved live character/storyline profiles, preserved default-on/toggleable Rules Studio (after source-pack certification), limited BYOK AI Continue/Rewrite, safe author accept/reject/undo, and privacy/accessibility baseline.
- Owner also **accepted delaying** the full native Cover Studio and professional EPUB/print-ready publication system until after the initial writing-focused MVP; these remain strategically important to Vellistry and are not canceled.
- Precise evidence: owner replied **“I agree”** to the preceding comprehensive recommendation on **2026-10-09**. Original transcript URL not archived; do not invent a GitHub approval comment. Decision: [MVP scope](docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md). History: [HIS-20261009-001](docs/history/2026-10-09-mvp-product-scope-approved.md).
- The [396-ID scope map](docs/requirements/MVP-FEATURE-HORIZON-MAP-2026-10-09.md) distinguishes **149 MVP/MVP-LIMITED entries** from **247 POST-MVP-UNSCHEDULED** ideas (including all Cover Studio, full print, MCP and collaboration items). These are catalog entries, not 149 independent development tickets. Detailed technical acceptance criteria remain to be written.
- **Approval ≠ implementation:** no author interview, app integration, authentic frozen-rule pack, live profile extractor, production persistence, verified provider or export engine is ready solely from this decision. The platform framework, database, API provider and release schedule remain undecided.
- Documentation PR remains separate from the actual owner in-chat approval; owner review/merge remains pending.

## MVP author journeys and implementation-readiness research — 2026-10-09
- The owner-approved product scope from [PR #10](https://github.com/Ben-001-sys/Vellistry/pull/10) remains **eight areas**; the 396 feature inventory and source statuses are preserved separately in [PR #9](https://github.com/Ben-001-sys/Vellistry/pull/9). The selected editor foundation is still Tiptap 3 / ProseMirror; no other app architecture decision has been approved.
- [MVP author journeys and acceptance v0.1](docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md) specifies **11 proposed end-to-end writing journeys, 37 proposed acceptance scenarios and 10 negative scenarios**; none is implemented or marked PASS.
- [Readiness gates and architecture questions](docs/research/MVP-READINESS-GATES-AND-ARCHITECTURE-DECISION-QUESTIONS-2026-10-09.md) inventories **10 open evidence gates** (R01/R02/R05/R06/R07/R08/R11/R14/R15/R18/R19) and **12 unresolved architecture questions**. Candidate research order: frozen guidance provenance and private-manuscript threat model; isolated Tiptap real-browser and manual profile tests; DOCX fixtures/author interviews; bounded model evaluations and explicit architectural ADRs.
- [MVP readiness ExecutionBundle](docs/reports/MVP-READINESS-EXECUTION-BUNDLE-2026-10-09.md) separates current evidence from proposals and tests not performed.
- **This is a stacked draft branch based on PR #10**, intended for review against `research/r04-specific-mvp-proposal-v0.1` until the parent is merged to `main`. Do not merge a child ahead of its parent or treat the child planning docs as owner-approved acceptance thresholds.
- **Next bounded work recommendation:** RDY-01 non-destructive frozen guidance source inventory and RDY-04 private manuscript trust model, in parallel with RDY-02 real-browser Tiptap testing. No actual author manuscripts, production credentials, new stack decisions or paid provider calls have been used in this planning work.

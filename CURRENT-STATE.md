---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-09
owner: project_owner
version: 0.1.21
---

# Vellistry — Current State

## Phase
**2026-10-09 current integration checkpoint (PR #28 remains unmerged):** The owner selected **Next.js + NestJS + Supabase** for the initial implementation baseline (ADR-0006 on this branch). A K1 application scaffold was built and typechecked, but **no product deployment or completed live Auth/RLS test is claimed by PR #28 itself**. Separate stacked research PR #29 ran 17/17 local synthetic Supabase authorization checks; PR #32 investigates revoked access tokens and session exposure. Neither stacked research branch is implicitly promoted or merged by this reconciliation.

**Later owner-directed process hold:** The two-at-a-time research and approved UI/UX-design-first sequence documented in merged [PR #30](https://github.com/Ben-001-sys/Vellistry/pull/30) takes precedence over the earlier 22:30 implementation kickoff. Keep this app scaffold in draft; **do not resume feature implementation, deploy, or merge it solely because its merge conflicts are resolved**. Finish necessary research, Figma Make/Lovable exploration, canonical Figma Design review, and explicit owner approval first.

### K0/K1 and security research boundary
- K0: an initial owner-selected implementation stack and research-aware roadmap were recorded; source authority and provenance remain bounded.
- K1: pnpm workspace, Next.js web shell, NestJS API, Supabase migration and compile/typecheck evidence exist on this draft branch.
- K2A: two-author local Supabase Auth/RLS research was exercised in separate stacked PR #29; it is not deployed here and does not establish production session safety.
- K2B: immediate signout/token revocation and direct Data API exposure are still under separate security investigation in stacked PR #32.
- K3 and beyond: chapter saves, end-user editor, Rules Studio and provider integrations remain gated under the newer research/design process.

### Earlier historical research baseline
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

## R01 and R15 source/trust research checkpoint — 2026-10-09
- [R01 original source integrity audit](docs/research/R01-SOURCE-INTEGRITY-AND-AR-VARIANT-AUDIT-2026-10-09.md) verified the three standalone directly uploaded Markdown files **exactly match** their three ZIP members; SHA-256 of SRC-003 matches the already recorded fingerprint. It found **130 compact and 130 expanded lens codes**, 13 domains × 10 each, with **13 nonmatching heading titles**: 10 AR plus DS-09/PV-05/PV-10. Preserve both forms; no AR or source contents were rewritten. **The default deployable pack remains uncertified and owner packaging decision is required.**
- [R15 private manuscript and BYOK threat model](docs/research/R15-MANUSCRIPT-PRIVACY-AND-BYOK-THREAT-MODEL-2026-10-09.md) maps owner-approved MVP assets to **17 candidate threats and negative verification scenarios** under OWASP ASVS 5.0, authorization and secrets guidance and OWASP LLM risk guidance. This is *paper research only*: no implemented auth, storage, encryption, AI key service, law compliance or penetration test.
- [R01/R15 ExecutionBundle](docs/reports/R01-R15-EVIDENCE-BUNDLE-2026-10-09.md) preserves exact verification scope and evidence gaps.
- **Next gates:** R01 owner reviews non-destructive packaging of code/title variants and archival location; R15 compares real application access policy, secrets/consent data flows, backup/deletion design after owner-approved architecture. Protect source/user data and do not infer a model, backend or paid service.
- These source/trust studies complement approved eight-area MVP scope in [PR #10](https://github.com/Ben-001-sys/Vellistry/pull/10) and preparation [PR #11](https://github.com/Ben-001-sys/Vellistry/pull/11); no release gate closed.

## Stage 3 — cold-start evidence synced after feature inventory (2026-10-09)
- [PR #15](https://github.com/Ben-001-sys/Vellistry/pull/15) is **open and ready for review, but unmerged**; it adds Level A ContextPack reproducibility evidence. It does not establish independent second-agent success.
- CI on earlier head `ff2ac4c6c9f29c8e6c6e75d1b5f8171df9a78a78`: [agent workflow run #37939723962](https://github.com/Ben-001-sys/Vellistry/actions/runs/37939723962) passed 15 existing tests plus 5 detached tests; [knowledge metadata run #37939723897](https://github.com/Ben-001-sys/Vellistry/actions/runs/37939723897) passed. Exact-head checks after this integration remain separately required.
- Detached recovery reads only an exported **historical** `VEL-CP-0001` to reconstruct its task boundaries; it cannot authenticate Git, verify original SRC-001, authorize operations, or replace the currently accepted MVP and editor decisions.
- [VEL-HO-0001](docs/agent-workflow/handoff-evaluations/VEL-HO-0001.md) records the bounded automated test and the explicit **Level B second-agent evaluation gap**. The rubric and result template are versioned for later real evaluation.
- This integration retains `main`'s merged R02, R06, R07, R01/R15 and feature-inventory knowledge. The most recent feature-inventory [PR #9](https://github.com/Ben-001-sys/Vellistry/pull/9) is merged; earlier status paragraphs elsewhere are historical snapshots.

## Stage 3 Level B clean-room dispatch preparation — 2026-10-09 (proposed)
- [Stage 3 PR #15](https://github.com/Ben-001-sys/Vellistry/pull/15) is **MERGED** as a Level A detached reconstruction implementation; earlier text saying it was unmerged is a historical snapshot superseded by this section.
- [Issue #18](https://github.com/Ben-001-sys/Vellistry/issues/18) is open, with no independent agent response when last checked. No Level B result or owner acceptance is claimed.
- Proposed new exporter `scripts/export_level_b_handoff.py` validates the historical ContextPack against the full Git repository before writing exactly two files (`VEL-CP-0001.md` and `PROMPT.md`) into a reproducible ZIP. An isolated fresh agent may receive only these contents.
- Proposed CI tests verify minimal contents, byte identity, reproducible packaging, and rejection of a tampered permission contract; an Actions artifact makes the packet available without manually assembling context.
- Original SRC-001 remains unavailable in the historical Git pack. The historical editor-audit task does **not** reopen the later owner-selected Tiptap 3/ProseMirror or accepted MVP decisions.
- Owner review/merge of the export workflow and actual isolated second-agent run are **distinct acceptance gates**; neither is completed by this entry.

## Stage 3 — first Cursor Level B response (2026-10-09; provisional)
- The owner supplied a response attributed to **Cursor**; exact submitted text and source fingerprint are preserved in [VEL-HO-0002](docs/agent-workflow/handoff-evaluations/VEL-HO-0002.md) and its [verbatim attachment](docs/agent-workflow/handoff-evaluations/raw/VEL-HO-0002-CURSOR-RESPONSE.md).
- Content assessment: **9/10 rubric criteria passed**, 0 failed, and **independence not assessed**. The owner supplied screenshots showing Cursor Agent **Grok 4.7**, effort **High**, context **256K**, plus a `level-b-test-packet` Explorer visibly containing only `PROMPT.md` and `VEL-CP-0001.md`, alongside the instruction `follow PROMPT.md guidelines`. This strengthens workspace-isolation evidence but is not proof that the agent chat was new or devoid of inherited context; full independence and owner acceptance remain unverified.
- This bounded result concerns historical ContextPack `VEL-CP-0001` only. Its pre-decision editor/MVP wording does **not** undo later approved choices.
- [Issue #18](https://github.com/Ben-001-sys/Vellistry/issues/18) remains open pending session-isolation evidence and owner disposition; Level B is not marked fully accepted.

## ADR-0003 Tiptap v3 owner decision branch reconciled — 2026-10-09
- **Owner decision:** Tiptap **major version 3 on ProseMirror** is the approved manuscript editing foundation, confirmed 2026-10-08 and recorded in [ADR-0003](docs/decisions/ADR-0003-use-tiptap-3-prosemirror-for-manuscript-editor.md) and [HIS-20261008-005](docs/history/2026-10-08-tiptap-3-editor-approved.md). The editor decision predates the later Next/Nest/Supabase implementation approval; formal ADR documentation remains pending this PR's merge.
- **Later research:** [PR #7](https://github.com/Ben-001-sys/Vellistry/pull/7) contains seven passing Tiptap 3 headless smoke tests. [PR #12](https://github.com/Ben-001-sys/Vellistry/pull/12) independently includes seven passing limited Chromium browser tests. Neither is a production editor, a storage architecture or a professional publishing converter.
- **Separate later decision:** no paid Tiptap Pages/Conversion; the Next.js + NestJS + Supabase implementation direction is separately owner-selected in draft PR #28, while AI provider and publishing platform remain undecided. [MVP scope PR #10](https://github.com/Ben-001-sys/Vellistry/pull/10) separately records the owner's accepted eight-area product target. Do not infer architecture from this ADR.
- **Integration:** This PR branch now preserves current merged `main` R02, R06 and Stage 3/PR #5 history. Earlier status paragraphs retain their original research chronology; later merged-state and present approval here are authoritative for current status.

## PR #6 conflict reconciliation and traceability correction — 2026-10-09
- This branch incorporates the newer merged `main` at `fb8e98bfc24cffce25a9a3df66353a7ff4857648`, including R01/R15 source/trust research and PR #9's accepted-scope feature inventory. Existing historical research sections and approved editor-choice record are preserved.
- Reviewer-requested linkage correction completed: both ADR-0003 and the Tiptap approval event reference `VEL-REQ-002` (**conventional manuscript editing**), rather than `VEL-REQ-001` (**scoped AI guidance**). Tiptap 3/ProseMirror remains selected but not implemented; no paid Tiptap extensions or unrelated technology approved.
- Historical decision identifier remains `HIS-20261008-005`. Formal owner merge review remains a separate action; this conflict resolution does not merge the PR.

## Stage 4 — chapter specification and agent task PR #26 reconciled (2026-10-09; proposed)
- [PR #26](https://github.com/Ben-001-sys/Vellistry/pull/26) proposes [VEL-SPEC-001](docs/specs/VEL-SPEC-001-CHAPTER-SAVE-CONTRACT.md): eight source-traced, framework-neutral create/edit/save/reopen scenarios scoped to the **accepted** M1/M2/M3/M8 product areas. The detailed acceptance contract remains **proposed and not product-tested**.
- [VEL-TASK-0002](docs/agent-workflow/tasks/VEL-TASK-0002.yaml) defines the task scope, missing G03/G08 evidence and owner approval boundaries. [Stage 4 workflow](docs/agent-workflow/STAGE4-SPEC-TO-TASK.md), traceability validator, negative tests and CI generate an immutable `VEL-CP-0002`; the associated ContextPack artifact is an agent input, not proof of a working editor or durable database.
- The previous PR #26 head passed its Stage 4 CI checks and produced [Agent workflow run #37985564366](https://github.com/Ben-001-sys/Vellistry/actions/runs/37985564366); the **reconciled head must receive its own CI pass** before merging.
- This branch retains **all newer merged main entries** including the accepted Tiptap 3/ProseMirror ADR and the already merged [Cursor evaluation PR #24](https://github.com/Ben-001-sys/Vellistry/pull/24); historic 9/10 handoff contents do not constitute a fully confirmed session-independence assessment.
- A Next.js + NestJS + Supabase direction is separately described as owner-selected in [PR #28](https://github.com/Ben-001-sys/Vellistry/pull/28); its branch's own review and merge are distinct from this synthetic task contract. Stage 4 neither selects nor reverses application architecture.
- Product acceptance tests, real-browser editing, production authorization/durability, separate agent ExecutionBundle and owner review of this specification remain pending. This conflict resolution **does not merge PR #26 or promote the specification to accepted**.

## Stage 4 — synthetic chapter contract execution (2026-10-09; PR #35 pending owner review)
- [PR #26](https://github.com/Ben-001-sys/Vellistry/pull/26) was verified **merged** before starting. Current task [Issue #27](https://github.com/Ben-001-sys/Vellistry/issues/27) remains open because a separate Cursor/Codex handoff/ExecutionBundle and real application validation have not been accepted.
- [PR #35](https://github.com/Ben-001-sys/Vellistry/pull/35) adds a **single-process Python in-memory research fixture**, 13 synthetic contract tests, a bounded CI workflow and an [execution-style report](docs/reports/STAGE4-SYNTHETIC-CHAPTER-EXECUTION-2026-10-09.md). Initial run [#38002511826](https://github.com/Ben-001-sys/Vellistry/actions/runs/38002511826) passed **13/13 tests** at initial PR head `24f81eb1ce57f36b886851e46e96d9fdba46b4a8`. Later heads require renewed CI.
- SC-001/003/004/005/006/007 have **passing synthetic behavior probes**; SC-002 covers a **formatted JSON proxy only**, not real editor interaction; SC-008 is an **untested owner/governance rule**. Actual product acceptance for all eight SCs remains **NOT TESTED**.
- The fixture does **not** authenticate real users, test production RLS, persist documents across restarts, prove database commit guarantees or provide a browser Tiptap editor. It does not select or override the owner's separate app-stack decisions.
- Remaining Stage 4 gates: owner reviews experimental scope, independent agent consumes current `VEL-CP-0002` and produces an evidence-bound actual ExecutionBundle, and then the agreed real-stack adapter/browser/security tests are executed with synthetic data.


## 2026-10-09 — Owner-directed Pair 02 / Pair 03 research extension

Owner asked: "continue pair 2 and 3". Pair 02 evidence remains on [draft PR #37](https://github.com/Ben-001-sys/Vellistry/pull/37); Pair 03 bounded synthetic studies are on [draft PR #38](https://github.com/Ben-001-sys/Vellistry/pull/38). This is NOT an authorization to open all later pairs or a claim that Pairs 01–03 met public launch readiness.

**Latest bounded research:** Pair 02 — R02/R03 original eleven author tasks and prior vendor evidence mapped; no actual novelist interviews or accessibility assistive-technology sessions. R05/R16 test harness expanded with Tiptap heading/bold keyboard format persistence; early CI showed 10/12 and a server JSON schema gap. Research-only schema/negative tests improved; exact-head Chromium pass must be checked. Pair 03 — R11 synthetic portable two-book ZIP/TXT restore, real Calibre DOCX→EPUB→DOCX experiment, and R07 temporal approval scenarios. Exact research CI #38004035995 passed 18 new tests plus 20 existing R07 tests; Calibre 7.6.0 preserved three synthetic chapter titles/sentences but **lost heading styles (3 input → 0 output)**.

**Unresolved release-critical gates:** R01 134-control proposal source/enablement owner review; actual Nest-only manuscript security integration, Next SSR and client copies; real author research, accessibility and supported rich-text edit/save; DOCX style fidelity and secure clean-project backup restore; R07 extraction accuracy and UI. Full Figma Make/Lovable alternatives and owner-approved canonical Figma design remain before product feature implementation. Synthetic fixtures are not shipping product paths.

## 2026-10-09 — Pair 02 research activation under bounded Pair 01 deferral

Owner instructed: "this is ok for mvp lets deal with the rest of the pairs" after source-variant mapping proposals and actual local session-liveness / restricted-gateway test evidence. Interpret as permission to **advance research sequencing**, not to approve the original 134 proposed rule controls or waive manuscript privacy/release security. See [Pair 02 evidence](docs/research/PAIR-02-ACCELERATED-AUTHOR-EDITOR-EVIDENCE-2026-10-09.md) and [remaining-pairs reuse ledger](docs/research/ACCELERATED-PAIRS-02-TO-06-EVIDENCE-REUSE-2026-10-09.md).

**Currently active research tracks (exactly two):**
- R02/R03: author workflows, competitor comparisons, real-writer study tasks; no user interviews yet verified.
- R05/R16: Tiptap/ProseMirror editor and accessibility; reuse previous real-browser evidence, add bounded browser keyboard/formatting/save-state checks, assistive-tech review remains open.

**Queued:** Pairs 03 (R11/R07), 04 (R08/R21 and R19), 05 (R06/R10), 06 (R14/R21 and R18). These are NOT newly active merely because a reuse ledger exists.

**Carry-forward blockers:** Final R01 source-backed rule mapping, authentic defaults; R15/K2B production-integrated secure manuscript access and SSR, storage, client draft isolation, deletion/retention. Research-only local CI findings do not imply production readiness. Existing Next/Nest/Supabase scaffold remains on hold; dedicated Figma/Lovable design and owner-reviewed UI signoff still precede production implementation.

**Evidence classification:** Pair 02 documentation and tests are a draft PR, not automatically accepted. Check exact-head workflow conclusions before treating new browser behavior as verified. Do not retrospectively rewrite older state, tests or decisions.

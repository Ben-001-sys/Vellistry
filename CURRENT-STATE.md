---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.3
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
Documentation bootstrap branch: `docs/research-knowledge-baseline-v0.1`.
The branch is work in progress until reviewed and merged. README.md has been created on main.

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
4. Run a trial editor-technology investigation using ContextPack → ExecutionBundle.
5. Review and merge the baseline branch only after metadata and provenance checks.

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

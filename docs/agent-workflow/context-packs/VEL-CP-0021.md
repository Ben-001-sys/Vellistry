---
id: VEL-CP-0021
title: 'Context for VEL-TASK-0021: Source-based obsolete PR supersession and live
  disposition evidence'
type: context-pack
status: prepared
created_at: '2026-10-19'
version: 0.1.0
task_id: VEL-TASK-0021
base_commit: a67e4e3bd4feaecad0f906ae1be778f6b8774ab8
task_blob_sha: 1d8b0668e58c7610cdfa9b2cab50da7a8e1defa3
inputs:
- path: PROJECT-CONSTITUTION.md
  role: scope-and-source-provenance
  git_blob_sha: 61f79c4dcb47bd99291c16490e8c00692e2ab23b
  source_status: accepted
- path: SOURCE-OF-TRUTH.md
  role: scope-and-source-provenance
  git_blob_sha: d5bec6f59108ac84715d77b65836f4499194c3f1
  source_status: accepted
- path: AGENTS.md
  role: scope-and-source-provenance
  git_blob_sha: 2feca4ec9ee0f11f5b6ac089c1d5c826d0e043ce
  source_status: active
- path: docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md
  role: scope-and-source-provenance
  git_blob_sha: 827268808a1394cb68d3fe7546c21cf4887f1211
  source_status: accepted
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: scope-and-source-provenance
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0021/OWNER-SCOPE.md
  role: scope-and-source-provenance
  git_blob_sha: 3fede84e3440fe91eb0efadc716f6906da990a23
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0021/pr59.json
  role: scope-and-source-provenance
  git_blob_sha: 52f1b01d3ca4f1f077fff441b257d084e0e0bad9
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0021/pr66.json
  role: scope-and-source-provenance
  git_blob_sha: 562d306c00ccabab4194d5007cced53e0e269f00
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0021/pr82.json
  role: scope-and-source-provenance
  git_blob_sha: b043fc241ad0186ead313d47406e19a3ca81e1bb
  source_status: unrecorded
source_gaps:
- id: AUTH
  limitation: Direct owner master/continuation grants bounded routine supersession,
    not merge authority; GitHub index not identity proof.
- id: ACCEPTANCE
  limitation: PR closure doesnot mark unmet hosted or independent-session issue criteria
    complete.
prepared_by: agent_workflow.py
---

# VEL-CP-0021 — Source-based obsolete PR supersession and live disposition evidence

## Objective
Compare unique PR59/66/82 scope with merged/reviewed successors, document all live dispositions and close only demonstrably obsolete candidates under direct standing owner authority.

## Scope
**In:** docs/reports/VEL-PR-HYGIENE-*; docs/reports/evidence/VEL-PR-HYGIENE/*; docs/agent-workflow/tasks/VEL-TASK-0021.yaml; docs/agent-workflow/context-packs/VEL-CP-0021.md; docs/agent-workflow/execution-bundles/VEL-EB-0021.md; docs/agent-workflow/inputs/VEL-TASK-0021/*; docs/agent-workflow/PR-COMPLIANCE.yaml
**Out:** App/SQL/CI/authority/env changes; Hosted/paid/private/admin/production/merge and original branch rewrites; PR65/68 closure before successor adoption or explicit remaining-content decision

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- AUTH: Direct owner master/continuation grants bounded routine supersession, not merge authority; GitHub index not identity proof.
- ACCEPTANCE: PR closure doesnot mark unmet hosted or independent-session issue criteria complete.

## Permissions and acceptance
**Allowed:** Read Git/GitHub PR andissue evidence, Commit sourceTask then generate validate commitCP, Write only bounded reports/evidence, run fullCI, draftPR and requestreview, After verification and distinct review, post truthful supersession comments and close only59/66/82 when uniquely approved scope demonstrably replaced
**Owner approval required:** All merges, significant unresolved unique original content, adoption/authority changes; Hosted/SQL/private/paid/production/admin or scopeexpansion
**Acceptance criteria:**
- All significant originalPR66 sections compared with main and preserved source archive
- PR59 unique paths compared with main Library implementation without reviving stale code
- PR82 history retained, replacementPR83 exact-head evidence linked
- No closure of activePR65/68 or unmet issues; no merge or policy authority change
- Exact-head source/evidence validation and independent review; record closure as supersession, not acceptance

## Deliverables
- Pre-editTask and immutable committedCP
- Exact source/unique-content comparison and owner-gate dispositions
- Factual EB/checks/fullCI/independent review before eligible closure
- Preserved PR/source authorship and unresolved issue acceptance

## Pinned source snapshots
Git commit: `a67e4e3bd4feaecad0f906ae1be778f6b8774ab8`. Read source statuses independently from task intent.

### `PROJECT-CONSTITUTION.md` @ `61f79c4dcb47bd99291c16490e8c00692e2ab23b`

~~~~~~markdown
---
id: VEL-GOV-001
type: governance
status: accepted
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.1
evidence:
  - "User approval of the Git-plus-app knowledge approach, 2026-10-08; conversation reference pending archival."
related_adrs:
  - ADR-0001
  - ADR-0002
---

# Vellistry Project Constitution

1. **Preserve authorship and intent.** Support writers' decisions, distinctive voices, stylistic irregularities, and deliberate exceptions; avoid indiscriminate generic polishing.
2. **Preserve original sources.** Research summaries do not replace underlying documents; record provenance and distinguish direct quotations, supported findings, inference, and proposals.
3. **Separate evidence from decisions.** AI recommendations and research candidates never become authoritative simply by being recorded.
4. **Require traceability.** Requirements, ADRs, historical events, research records, and experiments receive stable IDs and linked sources or explicit evidence gaps.
5. **Require metadata for decisions and history.** Use YAML front matter, timestamps/date precision, lifecycle states, author/approval attribution, relationships, and supersession links.
6. **Maintain current state.** Update CURRENT-STATE.md whenever a task materially changes agreed progress, decisions, blockers, or next steps.
7. **Use controlled knowledge promotion.** Read authoritative context; submit proposed changes with evidence; verify and approve before marking accepted.
8. **Retain history.** Correct errors through traceable revisions or new corrective events; do not erase prior decisions or rewrite an event as though it never happened.
9. **Remain vendor-neutral.** Models, tools, and orchestrators should be replaceable where practical; document genuine constraints and trade-offs.
10. **Use least-privilege agent access.** Keep secrets out of Git, isolate sensitive/runtime author data, review consequential actions, and require human approval for high-impact changes.
11. **Keep systems proportionate.** Begin with Git/Markdown, lightweight templates, and repeatable manual research; add automated context assembly, durable workflows, and additional stores only if tests justify them.
12. **Version code and knowledge together where appropriate.** Application and its engineering knowledge belong in one repository, while user manuscripts and runtime personal information require separate application storage.

## Status hierarchy
Accepted and effective decisions take precedence over proposals. Superseding decisions must explicitly reference what they replace. Research notes are evidence, not approval.

## Solo-maintainer review policy
Vellistry currently has one human contributor: the project owner. The owner may review and merge their own pull requests after appropriate inspection and required automated checks. A separate human reviewer is **not** a standing requirement during this phase. AI-agent review may provide independent analysis but is advisory, not another human approval. For consequential architecture, security, or production changes, the owner's explicit approval remains required. Revisit the policy when collaborators join. See HIS-20261008-002.

## Change control
Propose amendments in version control with rationale and evidence. Material changes require owner approval, an updated changelog/history event, and a corresponding CURRENT-STATE update.
~~~~~~

### `SOURCE-OF-TRUTH.md` @ `d5bec6f59108ac84715d77b65836f4499194c3f1`

~~~~~~markdown
---
id: VEL-GOV-002
type: governance
status: accepted
created_at: 2026-10-08
updated_at: 2026-10-16
owner: project_owner
version: 0.1.3
related_adrs:
  - ADR-0001
  - ADR-0002
---

# Source of Truth and Knowledge Ownership

## Engineering authority
- **Git repository:** canonical engineering documents, code, accepted project decisions, research evidence references, specifications, and change history.
- **CURRENT-STATE.md:** compact, current working status; not a substitute for full evidence.
- **ADRs:** accepted or proposed technical and knowledge-governance decisions, with rationale, alternatives, approval and supersession lineage.
- **Source register:** where original research came from and where an immutable/retrievable copy can be found.
- **Feature inventory:** [docs/features/FEATURE-INVENTORY.md](docs/features/FEATURE-INVENTORY.md) is the reviewable index of discussed feature candidates and source/status links. **It is not an accepted product backlog, release plan, substitute for original source evidence, or approval of proposed features.**
- **Git history and pull requests:** revision provenance; do not substitute automatically for semantic record metadata.
- **ChatGPT and other agents:** analysis and proposal tools, not an independent source of architectural authority.

## Separate runtime authority
Future authors' manuscripts, story canon, application settings, credentials, and stored assets belong in purpose-selected runtime storage, not automatically in the Git engineering knowledge base. The accepted Next.js/NestJS/Supabase baseline is recorded in ADR-0006; the owner subsequently selected Supabase Cloud for development. This is not production hosting or real-manuscript approval; no live database state is inferred from old records.

## Five knowledge layers
1. Authoritative accepted project and implementation knowledge.
2. Current verified implementation/research state.
3. Historical rationale, experiments, rejected/superseded alternatives.
4. Temporary task-local agent context and unapproved hypotheses.
5. Evidence, provenance, authorship, validity, confidence, and traceability.

## Read → Propose → Review → Commit
1. Read the relevant accepted records and source citations.
2. Clearly label new assumptions, findings, recommendations, and uncertainties.
3. Review source fidelity and factual verification independently.
4. Promote material changes only after owner approval; update linked records and current state.
5. When superseding an ADR, preserve the older file and connect both sides of the lineage.

## PR review and sole owner authority
At present the project has a single human contributor. The owner performs self-review and makes the final merge/acceptance decision. A distinct human PR approval is not required. Automated CI and optional AI-agent reviews provide evidence and feedback; agents do not have approval authority. For significant changes, document the owner's review and decision in the PR or associated provenance record. GitHub does not count self-review as a separate approving reviewer; this workflow must not assume otherwise. If branch-protection settings require other human approvals, review the protection policy rather than fabricate reviewers. See HIS-20261008-002.

## Metadata and history
See [docs/governance/RECORD-SCHEMAS.md](docs/governance/RECORD-SCHEMAS.md). All ADR and historical-event records require YAML front matter and meaningful content.

## No silent conflation
The terms *verified evidence*, *accepted requirement*, *approved decision*, *implemented*, and *tested* are different. Never mark one as another without supporting evidence.

## Current task authority and provenance

[AGENTS.md](AGENTS.md) and [ADR-0008](docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md)
express the owner-selected execution roles: ChatGPT coordinates and reviews;
Codex implements authorized bounded tasks; the owner alone approves consequential
scope, adoption and merge. Coordinator write access is not coding permission.
Lightweight triage/indexing/review does not grant authority to change effective
instructions or executable behavior. Any alternate implementer requires an
explicit owner task exception. Git commit author names do not prove runtime identity.

Use the compact [current checkpoint](CURRENT-STATE.md); its dated historical
archive is evidence, not active dispatch. Original source gaps remain gaps.
PR66's prior ChatGPT records are adopted with per-file source SHA attribution,
not relabeled Codex execution. This reconciliation proposes no semantic change
to accepted architecture or owner authority.
~~~~~~

### `AGENTS.md` @ `2feca4ec9ee0f11f5b6ac089c1d5c826d0e043ce`

~~~~~~markdown
---
id: VEL-AGENT-001
type: agent-instructions
status: active
created_at: 2026-10-08
updated_at: 2026-10-18
version: 0.1.7
---

# Instructions for Vellistry Research and Development Agents

## Read in order
1. PROJECT.md and PROJECT-CONSTITUTION.md.
2. SOURCE-OF-TRUTH.md and CURRENT-STATE.md.
3. Relevant accepted ADRs and requirements.
4. Task-specific ContextPack and original sources.
5. Related history, experiments, and execution reports if relevant.

## Product language and UX copy (LANGUAGE.md)

- Before any change to user-facing navigation, page names, buttons, forms, dialogs, status messages, errors, tooltips, accessibility labels, onboarding, AI consent or export wording, read root `LANGUAGE.md` alongside the relevant accepted product requirements and current implementation.
- Follow `LANGUAGE.md` for owner-approved product terminology. Reuse canonical names consistently while allowing explicitly documented contextual short labels; preserve distinct concepts such as manuscript vs notes, AI suggestion vs accepted revision, suggested fact vs approved canon, and local recovery vs confirmed save.
- Verify what the interface and backend actually do before using success, save, privacy, cost, cancellation, deletion or provider-availability claims. Do not expose internal transport codes as author-facing text or mark proposed/future features as implemented.
- If a needed term is absent, proposed, disputed or inconsistent with approved scope, record the current wording, candidate, affected surfaces and supporting evidence for owner review. Do not silently make a new canonical decision or rename unrelated concepts.
- `LANGUAGE.md` governs visible words, not database fields, API routes, internal identifiers, source archives, accepted ADRs, or integration contracts. Do not change those solely to match display labels.
- Include user-facing copy/state checks and relevant accessibility/negative tests in the task ExecutionBundle. Do not change the language contract or add automation enforcing it outside the owner-authorized Task → ContextPack → implementation → review workflow.

## Primary agentic implementation workflow (ADR-0008, owner-selected 2026-10-14)

**Codex is the default bounded code implementer.** ChatGPT is the architect/task coordinator and exact-head reviewer; GitHub is the source of truth; the owner approves consequential scope, cloud database operations, PR merge and release. Read [ADR-0008](docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md) and the latest `CURRENT-STATE.md` before preparing/accepting new code tasks. Older Cursor workflows are historical; Cursor may be an editor or explicitly reassigned agent, never silently the default.

Default sequence: **owner-approved task → ChatGPT ContextPack/spec/negative checks → Codex in isolated branch/worktree → actual tests + ExecutionBundle → ChatGPT source/CI review → owner merge decision → verify merged `main` and update state**. Record the actual executor; do not reattribute a ChatGPT-made PR to Codex or invent a successful Codex dispatch. Never let Codex self-approve remote migrations, secrets, real manuscripts, costs or deployment.

## Operational task handoff

Use [the merged operational workflow](docs/agent-workflow/README.md): unique owner-authorized Task → committed governing sources → generated, validated, committed immutable ContextPack **before implementation** → isolated work → actual tests and ExecutionBundle → ChatGPT independent source/CI review → owner decision → verify merged main. Never overwrite a dispatched pack; material scope changes require an authorized amendment/new pinned ID. Current examples include merged PR70 Task/CP/EB0006–0007; PR68's0005 remain a distinct draft.

**Qualifying implementation** includes application, tests, SQL, CI, executable tooling and changes to effective agent instructions/approval contracts. Codex implements these through the bounded handoff. Coordinator write access is not coding approval. Another executor requires an **explicit owner task exception**, identifying scope and executor; record provenance. Commit author strings do not authenticate runtime identity.

**Lightweight governance** means coordinator triage, source indexing, draft task preparation and review/evidence comments that do not implement executable changes, alter effective instructions or promote decisions. These remain attributed, source-linked and reviewable; task preparation is not dispatch or owner acceptance. This exception cannot be used to alter CI, tests, security, agent authority or accepted decisions.

No automatic PR-to-task enforcement is claimed as authenticated identity or owner approval; [Issue #73](https://github.com/Ben-001-sys/Vellistry/issues/73) now has a proposed [static compliance contract](docs/agent-workflow/PR-COMPLIANCE.md) under Task0010. Its base-anchored checks, provisional bootstrap and owner-protected review limits must be inspected before adoption. Read the current [operating model](docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md) for design/coding task exceptions versus private-pilot/release gates.

## Duties
- Report what is **FACT**, what is **INTERPRETATION**, and what is **PROPOSAL**.
- Preserve source framing and provenance; do not invent missing requirements or infer approvals.
- Respect accepted decisions; flag conflicts instead of silently resolving them.
- Use stable IDs and YAML metadata for ADRs, history events, research and reports where schemas apply.
- Keep original reasoning and options visible when an ADR becomes superseded.
- Produce ExecutionBundles with work completed, evidence, limitations, changed files, tests, and proposed knowledge updates.
- The project currently has **one human contributor**, the owner. Before consequential changes are merged, present evidence, risks, and a review checklist for the **owner's self-review and explicit approval**. Do not request a second human review as a hard requirement; optional AI review is advisory, not human approval. Do not modify accepted decisions silently.
- Never place API keys, passwords, manuscript personal data, or secrets in the repository.
- Avoid overengineering. Do not create code, services, or new architecture merely because an archived research document mentioned them.
- When revising user-authored creative material, prioritize writer intent and context over a mechanical set of anti-AI rules.

## Done means
A task is done only when its deliverables are present, evidence and metadata are supplied, verification status is accurately described, and CURRENT-STATE.md has been adjusted if project status changed.
~~~~~~

### `docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md` @ `827268808a1394cb68d3fe7546c21cf4887f1211`

~~~~~~markdown
---
id: ADR-0008
title: Use Codex as the primary implementation agent in Vellistry's governed agentic coding workflow
type: architecture-decision
status: accepted
created_at: 2026-10-14
updated_at: 2026-10-16
decided_at: 2026-10-14
author: project-research
approved_by: project_owner
version: 1.0.2
sources:
  - "Fiction Writing Project owner message, 2026-10-14: 'make it an adr we are using codex now'. Direct reply to the previously explained ChatGPT architect/coordinator, Cursor implementation, GitHub source-of-truth workflow. Original conversation permalink pending archival."
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  - docs/plans/VEL-PLAN-05-CURSOR-AGENT-WORKFLOW-2026-10-11.md
  - PROJECT-CONSTITUTION.md
  - SOURCE-OF-TRUTH.md
evidence:
  - "Owner explicitly selected Codex as the active coding agent and instructed that the change be formalized as an ADR on 2026-10-14."
  - "The earlier role assignment in PLAN-05 selected Cursor as the primary bounded coding agent; this ADR replaces only that default execution-tool assignment."
  - "Owner did not authorize the new agent to merge without review, deploy, apply cloud migrations, use secrets or paid services, handle real manuscripts, or bypass project approval gates."
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
  - VEL-PRODUCT-CONSTRAINT-20261009-001
related_features: []
related_contracts:
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  - docs/agent-workflow/README.md
related_adrs:
  - ADR-0001
  - ADR-0002
  - ADR-0006
supersedes: []
superseded_by: []
implementation_refs:
  - AGENTS.md
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  - docs/plans/VEL-PLAN-05-CURSOR-AGENT-WORKFLOW-2026-10-11.md
  - CURRENT-STATE.md
---

# ADR-0008 — Codex-primary governed agentic implementation

## Context and problem statement

Vellistry uses Git and Markdown as the canonical engineering knowledge/control plane. The accepted project constitution separates evidence, design decisions, implementation and owner approval. The planned workflow had ChatGPT prepare bounded tasks and ContextPacks while **Cursor Agent** performed implementation; its outputs were independently reviewed and reconciled through GitHub PRs and CI.

After PR #64 merged, direct GitHub editing by ChatGPT produced draft PR #65 for hosted Supabase preflight. The owner then reconfirmed that Vellistry follows an **agentic coding** workflow and explicitly said **"make it an adr we are using codex now"**. The agent responsible for normal implementation must therefore be updated without rewriting past Cursor execution history or implying any broader authorization.

This is a **development operating model decision**, not a product stack, deployment, licensing, security-gate or production-readiness decision.

## Decision

**Codex is Vellistry's default primary code implementation agent starting 2026-10-14**, for each newly authorized bounded coding task. Preserve the existing role-based control plane:

| Role | Responsibility | Authority boundary |
|---|---|---|
| **Project owner** | Select/approve scope, consequential changes, security posture, spending, database operations, PR acceptance/merge and release | Sole final decision maker; permitted to self-review under the constitution |
| **ChatGPT — architect/coordinator** | Read current repository evidence and accepted ADRs; define requirements, task IDs, ContextPacks, acceptance/negative tests, path allowlists and exclusions; assess Codex reports, diff and CI; advise owner | Does **not** make owner decisions, treat its assessment as independent human review, or act as the default feature-coding executor |
| **Codex — primary implementer** | On an explicitly scoped task, inspect pinned source, implement code/tests in an isolated Git branch/worktree, run valid checks, produce a factual ExecutionBundle and proposed PR | No self-authorization to change scope/ADRs, merge, deploy, perform cloud SQL/migrations/resets, incur paid costs, use real manuscripts or disclose secrets |
| **GitHub — source of truth and review ledger** | Host code, authoritative docs, versioned ADRs, task/ContextPack/ExecutionBundle artifacts, PRs, CI, decision history and current state | PR creation and green CI do **not** equal owner acceptance or deployment readiness |
| **Independent verifier (optional)** | Challenge the source diff, independently rerun tests and negative scenarios when possible | Advisory; the same agent's self-review is not an independent execution, and no second human is mandated |

**Default work loop:**

1. **Observe:** ChatGPT inspects the merged `main` SHA, current PRs, accepted requirements/ADRs and latest top of `CURRENT-STATE.md`; distinguish verified facts from older historical status.
2. **Authorize a specific slice:** The owner approves the bounded objective and sensitive actions. ChatGPT prepares a unique task/ContextPack with source SHA, intended changes, allowed/forbidden paths, behavioral acceptance checks, security and cost restrictions. A prepared packet does not grant approval on its own.
3. **Dispatch to Codex:** Codex executes in a dedicated branch/worktree against the designated SHA, without reusing old task/pack IDs or overwriting another agent's in-progress branch. Agent may use the existing repository tools/CI and must declare tool/model/runtime in its evidence.
4. **Report evidence:** Codex supplies an ExecutionBundle with base/head SHA, changed paths, actual commands and exit codes, unit/integration/browser results with real environment and fixture descriptions, `PASS|FAIL|BLOCKED|NOT_RUN`, original artifacts and `FACT|INTERPRETATION|PROPOSAL`.
5. **Review:** ChatGPT reviews the exact submitted code, contracts, tests, workflow behavior, known risks and evidence. The owner determines corrections, rejection or PR acceptance/merge. CI success alone cannot waive human acceptance/security/recovery testing.
6. **Reconcile:** After an approved merge, verify files on merged `main` and post-merge checks; update `CURRENT-STATE.md` and issue/task status, preserving past decisions and results. Proceed to a new slice only after its own authorization.

Codex is a **role assignment**, not a mandatory IDE or subscription. Cursor may continue as an editor, historical test environment or explicitly assigned alternate agent, but **Cursor Agent is no longer the default implementer**. Other agents may implement a task only when the owner explicitly reassigns that task; do not silently switch providers or claim that a ChatGPT-side GitHub change was executed by Codex.

**Existing work:** PR #64 remains a valid merged Cursor-era implementation and its recorded verification evidence does not change. Draft [PR #65](https://github.com/Ben-001-sys/Vellistry/pull/65) is a **ChatGPT-authored, not Codex-executed** implementation proposal; do not relabel its origin, auto-merge it or treat its tests as Codex evidence. It may be reviewed, adopted via a fresh bounded Codex handoff, revised or closed by the owner, with its actual provenance preserved.

**Security boundary:** The owner selected hosted **Supabase Cloud** project `vellistry-dev`, not a locally self-hosted Supabase installation. All hosted schema migrations, Auth fixture creation, remote resets, real manuscript use, deployment and paid provider calls remain subject to separate explicit task-level authorization and appropriate testing. In particular, the historical signed-out-but-still-valid JWT/direct PostgREST concern remains a private-pilot blocker until mitigated and verified.

## Alternatives considered

1. **Continue Cursor Agent as default:** keeps earlier environment but contradicts the latest explicit owner tool selection. Preserve Cursor-era history instead.
2. **Let ChatGPT directly commit all feature changes through GitHub:** convenient for small edits but bypasses the chosen Codex execution role and muddies agent provenance. ChatGPT may maintain planning/decision records, not silently act as the default code implementer.
3. **Allow unrestricted, interchangeable coding agents:** flexible but weakens permission isolation and reproducibility when task ownership changes implicitly.
4. **Codex primary under the existing governed task/PR loop (selected):** retains traceability, single-task ownership and verifiable outputs while honoring the updated owner direction.

## Rationale

The owner's instruction identifies Codex as the current implementation tool. Keeping architecture, execution, independent review and approval responsibilities separate avoids silently treating agent-produced code, CI results or a prior conversation as accepted authority. The Git-centred knowledge and task packet approach permits future tool changes without changing the Next/Nest/Supabase/Tiptap architecture.

No performance, reliability or cost superiority between Codex and Cursor is asserted. This choice is an **owner workflow preference and accountability decision**, not a benchmark result.

## Consequences and trade-offs

- Future default implementation prompts, agent handoff references and code-owner descriptions should name **Codex**. Older Cursor artifacts remain intact and labelled as historical; do not rewrite them as if Codex produced them.
- Codex needs a verified workspace/Git access method and clear approval/tool permission boundaries for each task. The specific Codex interface (web, desktop, CLI or connected agent) is **not established by this ADR**.
- ChatGPT should deliver **specification, acceptance tests, task packet, review and decision support**, rather than directly creating ordinary feature code/PRs without an explicit exception.
- Existing ContextPack/ExecutionBundle schemas and Git/CI controls remain in force until independently amended and validated; do not claim automatic Codex integration if the current workflow does not support it.
- The single-owner self-review policy remains effective. Independent agent review helps but cannot replace required owner approvals.
- Migration, production/deployment, private manuscript, provider-spending, security and release gates are unchanged. No new subscriptions or paid API use is approved.

## Evidence and verification limits

The owner's direct 2026-10-14 message is the decision source; the conversation permalink has not been archived. It approves **the default implementer change and ADR record**, not a particular Codex runtime, verified Codex GitHub connection, successful task handoff or a security-gate transition. This documentation PR itself is **not Codex implementation evidence**.

Record status is **accepted by the owner as a workflow decision**. Repository enforcement via docs and completed Codex task evidence are distinct, separately verifiable steps. A future switch of the default implementation agent should be recorded through a new dated owner decision/ADR, with links to this record and history preserved.

## Implementation status

### Integration clarification — 2026-10-16 (Codex, Issue #72)

Original ADR text and owner-history record are **ChatGPT-authored** in draft
[PR #66](https://github.com/Ben-001-sys/Vellistry/pull/66), source
`36da413fea67179ac8395af1cececd477fd193a2`. Codex adopted that record here,
preserving its author, owner decision, alternatives and rationale. This dated
clarification replaces only its stale implementation-status paragraph; the
[original seven-file source snapshot](../agent-workflow/inputs/VEL-TASK-0008/pr66/)
retains the previous wording, including historical runner-start failures.

The owner-selected role decision is accepted; adoption of this reconciliation
PR and disposition of PR66 remain owner-only decisions. PR66 is still draft and
unmerged. Direct current owner dispatch authorizes bounded Issue72, not new
product gates. The original approval conversation permalink remains missing;
secondary PR metadata does not prove human authorship of coordinator comments.

Codex Task/CP/EB0006 and amendment0007 are now integrated through merged PR70,
main `a8751190073f682caabdc2897d8f64bc59ac9ebb`.
[Ready CI38970082388](https://github.com/Ben-001-sys/Vellistry/actions/runs/38970082388)
and [post-merge main CI38970500477](https://github.com/Ben-001-sys/Vellistry/actions/runs/38970500477)
both succeeded. This establishes actual bounded execution, not an independent
cold start or automatic PR-to-task/identity enforcement (separate Issue73).
PR68 remains a separate draft with Task/CP/EB0005 on its own branch; its prior
zero-step CI failures do not describe current main. Its third privilege migration
is unapproved; hosted migrations and two-author acceptance remain NOT_RUN.
The signed-out-JWT direct-PostgREST risk and private-pilot/release gates remain.
See [CURRENT-STATE](../../CURRENT-STATE.md) for the checked active facts and
[operating model](../agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md) for bounded
task exceptions and lightweight-governance boundaries.
~~~~~~

### `docs/agent-workflow/PR-COMPLIANCE.md` @ `5f4845623aef3abb15fba7fbe8e78474902cca00`

~~~~~~markdown
# PR-to-task compliance v1 — proposed under Issue73

This is repository evidence validation, not authenticated LLM identity or owner
approval. The owner still decides adoption, exceptions, final acceptance and
merge. No branch-protection/admin change is made by this implementation.

## Required evidence for qualifying changes

All paths qualify except narrowly inert `.md/.txt/.rst` research/report triage
under `docs/research/` or `docs/reports/`. Unknown files, application/auth/SQL,
tests/tools/CI, root instructions, decisions, tasks, approval records and policy
always qualify. Add/delete/rename paths are inspected without rename elision.

A qualifying range must add one new Task ID absent from its change base, with
`compliance` metadata pinned into the existing ContextPack before implementation:

| Task field | Required meaning |
|---|---|
| change_base | Exact evaluated merge-base SHA, not an arbitrary old phase. Rebase/base drift requires an authorized fresh amendment/pack. |
| phase | Exact phase matched by manifest. PhaseA cannot silently authorize PhaseB. |
| executor | Codex by default; explicit alternate requires an owner-verifiable record already in reviewed base. |
| allow_paths | Explicit relative paths/globs, constrained independently from prohibited secret/SQL operations. |
| authorization | Linked repository issue/comment; source provenance; authorized status and expiry date. Superseded/expired/missing fails. Linked text is not human identity proof. |
| forbidden_actions | hosted, production, private-manuscripts, paid-services, admin, merge. A role exception cannot waive these. |

The existing task/pack/bundle schema is preserved. The compliance checker loads
`agent_workflow.py` from reviewed base to validate task/source blob SHAs and the
complete immutable rendered pack. Live task may advance lifecycle/updated date;
material permission, scope, phase or source changes require new task/pack, not
editing the dispatched artifact. Qualifying old PRs are not grandfathered: prepare
a new bounded task and retain externally authored origins.

## Manifest, code binding and self-reference

`docs/agent-workflow/PR-COMPLIANCE.yaml` selects the task, pack commit, source
commit, bundle, phase and executor. It declares each prior range commit by exact
SHA and original/adopted origin, plus an explicit `current_head` declaration
resolved by CI to the actual event HEAD. Adopted records retain original executor,
original commit, linked source and matching Git patch. Git author names are not
used to infer who ran an agent. Undeclared cherry-pick trailers or contradictions
fail; a coordinated false declaration still requires human/source investigation.

The pack must already exist in an ancestor commit before every operative edit.
The EB's implementation_source_commit equals the manifest source commit, and
all operative blobs at current HEAD must still match that source. A source
commit followed by report/manifest-only evidence avoids requiring a commit to
contain its own SHA. Report artifacts exclude executable/config extensions.
CI prints actual head/base/source; final run evidence is appended to the PR
ledger after the last commit exists. A later code change needs fresh tests and
new source evidence. Missing EB/head evidence, empty/failed/NOT_RUN/BLOCKED tests
or contradictory declared execution are non-passing.

Tests/executor entries are attestations with linked raw evidence, not a proof
that arbitrary commands actually ran. The independent reviewer checks artifacts
and actual CI runs. `owner_disposition: pending`, proposed-for-review bundle and
pending owner review are mandatory during implementation CI. Green review alone
cannot set accepted state. Owner acceptance is external to this pre-merge gate;
follow-up record promotion is reviewed separately, never forged by the agent.

## Owner-verifiable exceptions and SQL

A coordinator may index sources or prepare an inert research/report review
without implementation evidence. That exception cannot change effective agent
instructions, tasks, CI, tests, SQL or approval contracts.

For an alternate executor, the owner first records an explicit task-scoped
exception in reviewed main at `docs/agent-workflow/authorizations/VEL-TASK-NNNN.yaml`:
`task_id`, `status: owner-verified`, `approved_by: project_owner`,
`kind: executor-exception`, exact `executor`, and linked `evidence`.
Codex cannot create that record in its own implementation candidate and thereby
approve itself. The owner independently verifies the linked authorization and
adopts it through the existing review process. No protected setting is altered.

Any SQL path also requires a separate reviewed-base owner record with
`kind: migration-path-approval`, exact `paths` and linked `evidence`; explicit
allowlist alone does not suffice. This is permission to propose those files,
not to execute hosted migrations. The third PR68 migration remains unapproved.
Changing a scoped task or adding a record is not a grant of database execution,
private manuscripts, paid calls, production, admin changes or merge.

## CI placement, evaluated trust and bootstrap

The ONE automatic Vellistry CI retains all original app/security/recovery jobs,
25 manual historical workflows and draft-aware routing. Cheap static validation
runs in governance and independently at the final gate; governance emits a
required `compliance=pass` result. Missing/failing evidence cannot be hidden by
green security jobs. Draft governance may pass, but the stable gate deliberately
blocks until ready/full verification, as before. No privileged PR target event,
extra token, API scope, duplicate build, service or orchestrator is introduced.

The loader extracts evaluator and existing pack validator from PR event base,
not candidate Python imports. Candidate contents are treated as data. Push-main
uses before; a two-parent owner merge must have an unchanged implementation tree,
which is validated at its branch head and reported separately from the merge SHA; manual feature runs use fetched origin/main. Same-head manual main
is unchanged baseline, with required control-source/workflow presence checked.
No retroactive recertification of all historical merged tasks is attempted.

The initial base `f371448538dafa92faebbef9bcda2a36c6ca1fa9` lacks the evaluator.
Only that baseline with Task0010 and its exact committed pack permits candidate bootstrap, visibly PROVISIONAL and subject
to owner first-adoption review; existing pack verifier still comes from base.
Subsequent unknown/missing baseline evaluators fail. This initial task is not
blocked by a requirement to have already merged itself. Changing this bootstrap
or loader is a security-sensitive control change requiring independent review.

A PR can change its workflow/loader and tests. Required file presence, unconditional
step contracts, negative-test discovery, task scope and code binding detect
accidental/suspicious weakening when the checker runs; they do not make an
unprotected workflow malicious-contributor-proof. The owner must require the
stable check and protect/review control changes using available repository
settings. Read-only inspection on2026-10-17 returned HTTP404 `Branch not protected`
for classic main protection and an empty ruleset list. We do not change settings.
The owner must decide/configure actual required-check and protected-control review
before claiming repository-level merge prevention; plan eligibility was not queried. Manual fallback: owner verifies trusted-base checker/diff, immutable
pack and scope, actual exact-head CI, provenance and linked authorization before
any merge. STOP for owner decision if a future requirement needs privileged
scopes or protection changes. This is the explicit remaining enforcement limit.

## Acceptance / attack matrix

| Case | Expected result |
|---|---|
| Missing task/pack/EB, changed rendered pack/source pin | Fail |
| Wrong base, reused task, phase extension, retroactive allowlist | Fail; new authorized amendment |
| Unauthorized app/CI/SQL path; SQL without base approval | Fail |
| Missing/expired/superseded authorization; alternate without base exception | Fail |
| ChatGPT implementation mislabeled Codex; missing model/origin/head | Fail on detectable contradiction |
| Adopted ChatGPT commit with actual origin/patch retained | Pass structural evidence; authorship preserved |
| Failed/NOT_RUN/BLOCKED execution; review promoted to owner acceptance | Fail |
| Inert docs-only triage | Pass documented exemption; no owner acceptance inferred |
| Deleted/empty compliance test/checker, skipped check or missing gate output | Fail when trusted check executes |
| Candidate replaces evaluator | Base evaluator executes; workflow/loader bypass still requires protected review |
| Draft / ready / main / full | Same evidence rules; original draft/security semantics preserved |

Local fixtures are synthetic repository tests, not a malicious live PR, hosted
security acceptance or independent human approval. Actual final-head runs and
review limitations belong in VEL-EB-0010 and its linked evidence ledger.

## Review correction01 — final invocation and event coverage

The static contract now requires the actual final `python scripts/ci_policy.py gate`
step, exact complete `CI_NEEDS: ${{ toJSON(needs) }}` input and terminal position.
Mandatory steps cannot be skipped or softened by continue-on-error, custom shell,
working directory or injected execution defaults. Foundational governance must
execute, and expensive job guards retain their existing classification conditions.
All six PR activities and unfiltered push-main/manual coverage must remain;
removing a ready/synchronize event or adding event path/base filters fails.

The gate-policy implementation `scripts/ci_policy.py` still executes from the
candidate checkout. Structural invocation checks do not establish the semantics
of maliciously rewritten Python. Owner-protected independent source review is
explicitly required for that file, the evaluator, loader and calling workflow,
including first-adoption bootstrap. A future trusted gate-policy loader would
need a separately reviewed design; none is silently introduced by this correction.
No branch protection, actor authentication or cryptographic tamper-proof claim.

## Review correction02 — token permissions and regression runner

All jobs must inherit workflow-level `contents: read`; any job `permissions`
override is rejected, including read-only/empty mappings and OIDC write access.
Governance must contain exactly one `python scripts/ci_governance.py` regression
step. Its command is exact and unconditional: no conditional, continue-on-error,
alternate shell, working directory or injected environment is permitted. Duplicate
invocations, including under another name, fail. Actual workflow is unchanged.

The owner explicitly deferred branch protection for the sole-maintainer phase,
accepting the enforcement risk. Earlier protection observations above are history;
settings are not an additional rollout blocker for this bounded review. No claim
of enforced repository-level merge prevention follows. Owner source/CI self-review
and the final merge decision remain required; this task changes no settings.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0021/OWNER-SCOPE.md` @ `3fede84e3440fe91eb0efadc716f6906da990a23`

~~~~~~markdown
# PR-HYGIENE scope, 2026-10-19
Direct owner master mandate explicitly requests source-based supersession/closure for obsolete PR59/66 and all live PR dispositions. Latest continuation forbids unauthorized merges and assumed delegated merge authority; this task does not merge or adopt policy. Read-only compare source against current main; prepare exact disposition report and evidence, independently review and run full CI. Only then perform already owner-authorized routine supersession closure of59/66/82 if their unique approved content is demonstrably superseded; retain source/PR history and explain omissions. PR65/68 remain open because successor adoption is not merged. Do not close Issues18/58/63 merely because PRs superseded; inspect unmet acceptance and retain limitations. No settings, cloud, application/SQL/CI edits or accepted-decision changes. If exact source comparison leaves an unresolved significant unique approved item, do not close that PR; report owner decision pending. Original author provenance remains ChatGPT/ Cursor/Codex as documented, not inferred from author strings.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0021/pr59.json` @ `52f1b01d3ca4f1f077fff441b257d084e0e0bad9`

~~~~~~markdown
{"body":"## Cursor implementation kickoff — VEL-IMP-001\n\n**Owner requested implementation in Cursor** on 2026-10-11 after explicitly allowing noncritical Figma UI polishing to be deferred. This is a first **bounded local-development slice**, not global G_DESIGN/G_CODE state clearance for all MVP tasks.\n\n### Prepared handoff (code execution is NEXT, not claimed complete)\n- `docs/agent-workflow/tasks/VEL-TASK-0004.yaml`: explicit scope, denylist, evidence gaps, owner-directed bounded authorization, acceptance.\n- `docs/plans/VEL-IMP-001-CURSOR-KICKOFF-2026-10-11.md`: inspected existing web/api structure, exact pasteable Cursor Agent instructions, test plan, local bootstrap, report contract.\n- Tracking [Issue #58](https://github.com/Ben-001-sys/Vellistry/issues/58).\n\n### Implementation target\n- Preserve the existing Next16/Nest11/Supabase book flow; no project regeneration.\n- Correct Library status semantics and conditional empty/populated rendering, account transition state and delayed response leakage.\n- Test with two disposable local accounts against existing bearer and RLS protections.\n- `pnpm check`, `pnpm build`, focused tests; record real outputs in Cursor's ExecutionBundle.\n\n### Exclusions / approvals\nNo schema migration, chapter editor/revisions, BYOK AI, real manuscripts, production secrets, paid services, deployment, or public pilot. Residual signed-out unexpired JWT/direct PostgREST access remains documented and unremediated for actual private author data. Figma master [original file](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U); separately reviewed [PR #57](https://github.com/Ben-001-sys/Vellistry/pull/57) was unmerged at kickoff.\n\n**Do not merge this PR until Cursor actually implements the changes, produces test evidence and owner reviews the code.** Current branch contains the task/handoff documents only; runtime implementation has not yet been run.\n\n## Full implementation roadmap\nA full M1–M8 Cursor roadmap with Stage 0–12 work packages, VEL-IMP-001..008 sequence, eleven author journeys, per-feature acceptance checks, security, restore, author testing and separate private-pilot/release gates has been added at docs/plans/MVP-END-TO-END-IMPLEMENTATION-ROADMAP-2026-10-11.md. It is proposed, not blanket approval for later implementation slices. The current task remains only VEL-IMP-001.\n\n\n## PAUSED — newer owner instruction (2026-10-11)\nThe owner reset the implementation workflow to **planning only**: complete the full M1–M8 roadmap and review it before opening/configuring Cursor Desktop; **no application coding or Cursor Agent execution yet**. This prior kickoff is **not currently executable**. See [new planning-only PR #60](https://github.com/Ben-001-sys/Vellistry/pull/60), containing the master roadmap and future Cursor Desktop checklist. Preserve this branch as historical preparatory context; do not merge, run the old agent prompt, or infer G_CODE approval. A fresh bounded task will be selected after the new plan and desktop baseline are reviewed.\n","files":[{"path":"docs/agent-workflow/tasks/VEL-TASK-0004.yaml","additions":103,"deletions":0,"changeType":"ADDED"},{"path":"docs/plans/MVP-END-TO-END-IMPLEMENTATION-ROADMAP-2026-10-11.md","additions":253,"deletions":0,"changeType":"ADDED"},{"path":"docs/plans/VEL-IMP-001-CURSOR-KICKOFF-2026-10-11.md","additions":105,"deletions":0,"changeType":"ADDED"}],"headRefOid":"5c7c8fb5d14020b2ef7ac3e8705ca06d9918cb85","isDraft":true,"number":59,"state":"OPEN","title":"PAUSED — prior Cursor Library kickoff (superseded by planning reset)"}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0021/pr66.json` @ `562d306c00ccabab4194d5007cced53e0e269f00`

~~~~~~markdown
{"body":"## Owner decision — Codex as default agentic implementation agent\n\n**Explicit owner instruction, 2026-10-14:** “make it an adr / we are using codex now.”\n\n### Scope\n- **Accepted ADR-0008** records `ChatGPT architect/coordinator → owner-approved task/ContextPack → **Codex primary implementer** in isolated branch → actual ExecutionBundle/tests → ChatGPT review → owner decision/GitHub merge → post-merge verification`.\n- Preserves previous Cursor-era source/test history and retains Cursor only as an IDE or explicitly assigned alternate.\n- Adds dated owner decision history, ADR index, default Codex instruction to `AGENTS.md`, align role in operating model, add supersession banner to historical PLAN-05 and latest `CURRENT-STATE.md`.\n- Codex runtime/connection **not assumed or tested**; this PR makes no claim that Codex implemented the code.\n\n### Existing PRs\n- PR #64 is merged (`4b3996e`) and historical Cursor implementation evidence remains valid.\n- Draft PR #65 remains **ChatGPT-authored**, not Codex-executed; do not merge/relabel automatically. Its future continuation is subject to a new scoped Codex handoff and owner decision.\n\n### Retained safeguards\nNo runtime application code, migration files, lockfile, tests or workflows changed in this PR. No Supabase cloud writes, test users, database migrations/resets, paid services, real manuscripts, releases or broad implementation permission.\n\n### Owner review checklist\n- [ ] Confirm Codex primary / ChatGPT coordinator / GitHub authority / owner approval roles.\n- [ ] Check ADR metadata/history conformance and truthful approval evidence.\n- [ ] Verify PLAN-05 Cursor references are labelled historical rather than silently erased.\n- [ ] Inspect CI for metadata/agent workflow integrity.\n- [ ] Decide separately how to assign future PR #65 continuation to Codex.\n\n**Decision scope:** `status: accepted` in ADR-0008 is grounded in explicit owner tool-role selection. The PR itself remains subject to owner merge review.","files":[{"path":"AGENTS.md","additions":10,"deletions":4,"changeType":"MODIFIED"},{"path":"CURRENT-STATE.md","additions":11,"deletions":1,"changeType":"MODIFIED"},{"path":"docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md","additions":9,"deletions":5,"changeType":"MODIFIED"},{"path":"docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md","additions":109,"deletions":0,"changeType":"ADDED"},{"path":"docs/decisions/README.md","additions":1,"deletions":0,"changeType":"MODIFIED"},{"path":"docs/history/2026-10-14-owner-selects-codex-primary-implementation.md","additions":53,"deletions":0,"changeType":"ADDED"},{"path":"docs/plans/VEL-PLAN-05-CURSOR-AGENT-WORKFLOW-2026-10-11.md","additions":4,"deletions":2,"changeType":"MODIFIED"}],"headRefOid":"36da413fea67179ac8395af1cececd477fd193a2","isDraft":true,"number":66,"state":"OPEN","title":"docs(adr-0008): select Codex as Vellistry primary coding agent"}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0021/pr82.json` @ `b043fc241ad0186ead313d47406e19a3ca81e1bb`

~~~~~~markdown
{"body":"## Problem and result\r\nCurrent main still describes merged PR76/78 changes as pending. This bounded Task0017 reconciles active state and entrypoints, preserves prior state, archives the exact owner-provided mandate/checklist, and audits all44 original requirements without promoting incomplete work.\r\n\r\nTask: VEL-TASK-0017. Immutable ContextPack: VEL-CP-0017. ExecutionBundle: docs/agent-workflow/execution-bundles/VEL-EB-0017.md. Executor: Codex GPT-6 desktop; exact build unavailable. Original owner/source provenance retained.\r\n\r\n## Verification\r\n8 entrypoint tests; metadata, readiness, spec and handoff validation PASS locally;44 acceptance/source/archive byte assertions PASS. Exact-head full CI and distinct review follow this submission. Draft gate is deliberately blocked. No app/SQL/CI changes or hosted operations.\r\n\r\n## Boundaries\r\n14DONE/18PARTIAL/4BLOCKED/4IN_VERIFICATION/4NOT_STARTED are evidence-based audit statuses, not completed programme or owner checkbox approval. Current effective governance reserves merge to owner despite mandate conditional delegation. Original SRC001–004 research, hosted/JWT and cold-start/recovery gaps remain. No merge requested until exact-head checks and independent review.\r\n\r\nRefs #71. This does not close all44 remediation work.\r\n","files":[{"path":"AGENTS.md","additions":1,"deletions":1,"changeType":"MODIFIED"},{"path":"CURRENT-STATE.md","additions":88,"deletions":110,"changeType":"MODIFIED"},{"path":"README.md","additions":4,"deletions":1,"changeType":"MODIFIED"},{"path":"docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md","additions":2,"deletions":2,"changeType":"MODIFIED"},{"path":"docs/agent-workflow/PR-COMPLIANCE.yaml","additions":7,"deletions":37,"changeType":"MODIFIED"},{"path":"docs/agent-workflow/README.md","additions":1,"deletions":1,"changeType":"MODIFIED"},{"path":"docs/agent-workflow/context-packs/VEL-CP-0017.md","additions":957,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/execution-bundles/VEL-EB-0017.md","additions":86,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/ID-SCAN.txt","additions":17,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/MANDATE-PART-1.md","additions":132,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/MANDATE-PART-2.md","additions":234,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/MASTER-MANDATE.md","additions":366,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/ORIGINAL-CHECKLIST.md","additions":136,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/OWNER-DISPATCH.md","additions":4,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/check-0.txt","additions":13,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/check-1.txt","additions":1,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/check-2.txt","additions":2,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/check-3.txt","additions":1,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/check-4.txt","additions":1,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/checks.json","additions":42,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/issue18.json","additions":1,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/issue58.json","additions":1,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/issue63.json","additions":1,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/issue71.json","additions":1,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/issue74.json","additions":1,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/issue81.json","additions":1,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/issues.json","additions":1,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/main-ci.json","additions":1,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/pg17-run.json","additions":1,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/prs.json","additions":1,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/inputs/VEL-TASK-0017/source-integrity.txt","additions":1,"deletions":0,"changeType":"ADDED"},{"path":"docs/agent-workflow/tasks/VEL-TASK-0017.yaml","additions":92,"deletions":0,"changeType":"ADDED"},{"path":"docs/reports/CURRENT-STATE-ARCHIVE-2026-10-18.md","additions":124,"deletions":0,"changeType":"ADDED"},{"path":"docs/reports/VEL-MASTER-REMEDIATION-LEDGER.md","additions":502,"deletions":0,"changeType":"ADDED"}],"headRefOid":"bd4f440f42085fbddd960945c8b6e197b2d792a8","isDraft":true,"number":82,"state":"OPEN","title":"VEL-MASTER: reconcile current state and original44-item evidence ledger"}
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.

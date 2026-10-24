---
id: VEL-CP-0046
title: 'Context for VEL-TASK-0046: Prepare exact-target read-only hosted metadata
  query packet'
type: context-pack
status: prepared
created_at: '2026-10-24'
version: 0.1.0
task_id: VEL-TASK-0046
base_commit: 1a8cf8e50dc1809b8308a5f2436095df96350750
task_blob_sha: c91c5ac93a733e6ed4a220d5b0bc738109a85a68
inputs:
- path: PROJECT-CONSTITUTION.md
  role: governing-source
  git_blob_sha: 61f79c4dcb47bd99291c16490e8c00692e2ab23b
  source_status: accepted
- path: AGENTS.md
  role: governing-source
  git_blob_sha: 3058d51c0e15db54d6271ecbcffcfeb0aaf54e6f
  source_status: active
- path: docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md
  role: governing-source
  git_blob_sha: 08b9a563fb79ebb91f20d0f84e0d752c1bb6709d
  source_status: accepted
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: CURRENT-STATE.md
  role: governing-source
  git_blob_sha: d9cda18d00297fe7605a54843ba61ba11d7bcf4d
  source_status: active
- path: docs/agent-workflow/inputs/VEL-TASK-0046/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: 6a4b688f0ba65999a863cffa38e74d40f1f73666
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0046/TARGET.json
  role: governing-source
  git_blob_sha: 02b6c7e84cca055496b3a4828d84f9870ddbce54
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0046/CHANNEL-CONTRACT.md
  role: governing-source
  git_blob_sha: 163b643dd988965b4623193eb9555cdaaff16702
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0046/THIRD-MIGRATION-SOURCE.md
  role: governing-source
  git_blob_sha: f39fd08f71f8b2c83804723bf25ea8f03b7beade
  source_status: unrecorded
- path: supabase/migrations/20261009000000_initial_author_books.sql
  role: governing-source
  git_blob_sha: 192a736d1a5d6ffc6f239c74ed61e7b8d2528b3b
  source_status: unrecorded
- path: supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql
  role: governing-source
  git_blob_sha: 0670a60f1c2e299e9771b9af1c677d97712174d9
  source_status: unrecorded
- path: docs/reports/VEL-PR68-RECONCILIATION-0039-DECISION-PACKET.md
  role: governing-source
  git_blob_sha: 79ec346fe20dcf65c62db8f2e90140435b4e15ee
  source_status: unrecorded
source_gaps:
- id: CHANNEL
  limitation: Generic execute_sql has no documented enforced read-only role/limits;
    isolated channel unverified; do not probe.
- id: HOSTED_STATE
  limitation: Target reported by owner/coordinator; live schema/history/ACL/RLS/version/Data
    API runtime unknown.
prepared_by: agent_workflow.py
---

# VEL-CP-0046 — Prepare exact-target read-only hosted metadata query packet

## Objective
Submit exact bounded catalog queries, target/access/limits/negative cases and migration comparison for owner review; no hosted execution.

## Scope
**In:** CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0046.yaml; docs/agent-workflow/context-packs/VEL-CP-0046.md; docs/agent-workflow/execution-bundles/VEL-EB-0046.md; docs/agent-workflow/inputs/VEL-TASK-0046/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-HOSTED-METADATA-0046-QUERY-PACKET.md; docs/reports/evidence/VEL-HOSTED-METADATA-0046/*
**Out:** All hosted calls/queries, credentials/env/CLI login, migrations/SQL adoption, Auth/business rows, users and settings; Application, test, tooling, dependency, workflow or policy changes; IMP002, private data or merge

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- CHANNEL: Generic execute_sql has no documented enforced read-only role/limits; isolated channel unverified; do not probe.
- HOSTED_STATE: Target reported by owner/coordinator; live schema/history/ACL/RLS/version/Data API runtime unknown.

## Permissions and acceptance
**Allowed:** Read Git/GitHub owner sources/public docs and inspect tool metadata without Supabase calls, Commit Task/CP; prepare non-executed embedded query documentation and inert evidence, Existing validators/offline static checks and independent/owner submission
**Owner approval required:** Owner exact query/hash review and isolated read-only channel before catalog queries; Hosted, credentials, migration adoption/execution, users, settings, private data, features and merge
**Acceptance criteria:**
- Pin exact project/organization/region with honest source attribution
- Only bounded catalog reads proposed; no business/Auth data, bodies, passwords, config dumps or mutating functions
- Require channel proof and exact packet approval; never assume raw SQL connector safe
- No migration/feature/policy edits; negative cases stop; ordinary owner merge

## Deliverables
- Committed source Task then validated committed immutable CP before report edits
- Exact named catalog SELECT allowlist and SHA256 packet/query hashes, limits/sanitization/stops
- Pinned two-operative/third-proposed migration comparison without adoption
- Preparation-only EB and validation/review evidence; exact owner query review before execution

## Pinned source snapshots
Git commit: `1a8cf8e50dc1809b8308a5f2436095df96350750`. Read source statuses independently from task intent.

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

### `AGENTS.md` @ `3058d51c0e15db54d6271ecbcffcfeb0aaf54e6f`

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

Automatic PR-to-task compliance is implemented by the merged [static contract](docs/agent-workflow/PR-COMPLIANCE.md) from [Issue #73](https://github.com/Ben-001-sys/Vellistry/issues/73). It checks declared provenance and scope, not authenticated runtime identity or human approval. Preserve trusted-base evaluation and the mandatory security gates. See the [operating model](docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md) for bounded task exceptions.

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

## Current bounded remediation delegation

The [one-time owner delegation](docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml) temporarily permits Codex to integrate eligible repository-only remediation after distinct trusted review, actual ready CI, exact merged-tree and post-main verification. This is a recorded owner decision, not agent self-approval or a default-policy change. It expires at programme completion/formal closure; new MVP tasks and all hosted/security-sensitive actions remain separately gated. See the current ledger and CURRENT-STATE.md.

The temporary remediation delegation ends under its [recorded closure condition](docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019-CLOSURE.md). After the final merge/post-main attestation, ordinary owner-governed approval resumes; this exception grants no future feature authority.
~~~~~~

### `docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md` @ `08b9a563fb79ebb91f20d0f84e0d752c1bb6709d`

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

### Historical integration clarification — 2026-10-16 (Codex, Issue #72)

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

### Current implementation clarification — 2026-10-22

PR66 was superseded with its ChatGPT-authored decision, alternatives, rationale and owner-history preserved. PR65 and PR68 are closed through separately reviewed successors; PR102 preserves original browser wording and PR104 records every PR68 path and exact SQL references. Static compliance from Issue73 is merged, but is not runtime identity authentication. Third SQL definition remains planning-only and unadopted; hosted acceptance and signed-out JWT mitigation remain unverified. The [temporary owner delegation](../agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml) permits only this remediation programme's eligible reviewed repository integrations; it does not change the accepted default role decision. Current status and evidence live in [CURRENT-STATE](../../CURRENT-STATE.md).
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

### `CURRENT-STATE.md` @ `d9cda18d00297fe7605a54843ba61ba11d7bcf4d`

~~~~~~markdown
---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-23
owner: project_owner
version: 0.2.1
---

# Vellistry — current verified state

## Current development dispatch — 2026-10-23

FACT: main `be69e5b249f57253e726bfcca00f5e81c0c60623` integrates PR107;
[post-main39961186197](https://github.com/Ben-001-sys/Vellistry/actions/runs/39961186197)
passed. The [final Issue71 attestation](https://github.com/Ben-001-sys/Vellistry/issues/71#issuecomment-6366067398)
closed repository remediation with35DONE/5PARTIAL/4BLOCKED. The one-time delegation
is EXPIRED. Historical paragraphs below describe the earlier pre-integration cut,
not unfinished authority or permission to resume remediation.

Owner directly authorized [Issue108](https://github.com/Ben-001-sys/Vellistry/issues/108)
Phase A only: Task0045/CP0045 verifies the unchanged foundation locally with synthetic
data and prepares separately authorizable hosted and IMP-002 proposals.
[Phase A report](docs/reports/VEL-DEV-001-PHASE-A.md) records actual frozen installation,
23preflight/67Library tests, typechecks and build PASS. Review and owner acceptance
remain pending; no feature code, hosted connection or new merge authority follows.
The original broad G_DESIGN/G_CODE, private-pilot and release gates remain pending.

Next implementation proposal is the bounded local-only
[IMP-002 workspace handoff](docs/reports/VEL-IMP-002-HANDOFF-PROPOSAL.md), not dispatched.
Hosted access, local credential configuration, SQL adoption/execution and Auth fixtures
require the [separate target-specific packet](docs/reports/VEL-DEV-001-HOSTED-PROPOSAL.md).
Local synthetic preparation is GO within Task0045; hosted acceptance, private pilot
and production remain NO-GO. Ordinary owner merge governance applies.

## Historical pre-integration checkpoint (retained evidence)

FACT: checked main is `23fd8488df060e1591be70232abd70f4255e814d`, after PR #106.
[Post-main CI39868833625](https://github.com/Ben-001-sys/Vellistry/actions/runs/39868833625)
passed governance, application/security and PostgreSQL CAS/restore. Integrated SQL
privilege regression was SKIPPED because its proposed fixture is absent; no SQL
acceptance follows. Re-fetch main and open PRs before each new task; this is a dated
verified baseline, not a claim that a document can embed its own future commit.

Task0041/PR106 is integrated; original PR #83 was closed only after its successor’s
post-main PASS. Its [immutable CP0041](docs/agent-workflow/context-packs/VEL-CP-0041.md)
and historical evidence remain unchanged. PR #65, PR #68, PR #59, PR #66 and PR #82
are closed with source-preserving dispositions. Issues69/72/79 are closed for
repository delivery;18/63/67/74 retain external acceptance requirements.

Task0042 completed bounded420-pin recovery. Its clean restore found new Next16.4.0
security advisories, so [Task0043/CP0043](docs/agent-workflow/context-packs/VEL-CP-0043.md)
was pinned before the minimal16.4.1 dependency patch. Audit now reports zero findings;
23preflight/67Library tests, build/typecheck and patched offline restore passed.
The final [remediation report](docs/reports/VEL-REMEDIATION-COMPLETION-0042.md) and its
successor integration remain IN_VERIFICATION until actual final review, ready CI,
merge and post-main success. Candidate ledger:35DONE,5PARTIAL,4BLOCKED, never44DONE.

Use the [44-item ledger](docs/reports/VEL-MASTER-REMEDIATION-LEDGER.md),
[PR/source dispositions](docs/reports/VEL-CURRENT-TRUTH-0041-DISPOSITIONS.md) and
[149-ID observed evidence overlay](docs/reports/VEL-CURRENT-TRUTH-0041-FEATURES.md).
Earlier dated claims are retained in the [previous snapshot](docs/reports/CURRENT-STATE-ARCHIVE-2026-10-22.md),
not current dispatch instructions.

## Implementation and evidence

The Next.js/NestJS/Supabase foundation and author-isolated Book Library are merged.
Current regression coverage includes67 Library and23 preflight cases; synthetic
Auth/RLS/logout and PostgreSQL CAS/restore run in disposable CI environments.
These do not establish hosted persistence or complete the149 planned feature tests.
IMP-002, IMP-003A and IMP-003B are NOT_STARTED under this remediation mandate.
The accepted Tiptap3/ProseMirror direction does not mean a production editor exists.

[PR68 reconciliation](docs/reports/VEL-PR68-RECONCILIATION-0039.md) records all38
original paths and22 successful historical reruns at pinned sources. Original
zero-step infrastructure failures remain historical evidence. No billing repair
mechanism or savings is inferred. PR104 merged with post-main39661737567 SUCCESS.

[Source preservation](docs/reports/VEL-SOURCE-PRESERVATION-0038.md) retains the exact
original transport ZIP and SRC-001–SRC-003 hashes. SRC-004 remains missing; summaries
are not its original. [Source register](docs/research/SOURCE-REGISTER.md) is canonical.
[Level B evaluation](docs/agent-workflow/handoff-evaluations/VEL-HO-0004.md) has ten
technical PASS results and unset owner acceptance. Task0038 fresh code generation
is verified, but independent filesystem execution was blocked. Neither result
completes checklist item27's end-to-end implementation requirement.

## Effective authority and security holds

Default roles remain ChatGPT coordinator/reviewer, Codex implementer and owner
scope/acceptance authority under [ADR0008](docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md).
The [one-time owner delegation](docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml)
authorizes only this unfinished remediation's eligible repository integrations and
supersessions after distinct trusted review and actual CI. It does not authorize
future features or waive security gates, and ends at completion/formal closure.
Owner declined CodeRabbit: use existing trusted Codex review channels.

G_DESIGN and G_CODE remain pending broad gates; explicit bounded task exceptions
do not promote them. G_PRIVATE_PILOT and G_RELEASE remain unapproved. Branch
protection was explicitly deferred by the sole maintainer; no setting change or
technical prevention of a malicious authorized writer is claimed.

Hosted Supabase access (including read-only), CLI authentication, migration execution,
Auth users, real private manuscripts, production deployment and paid operations
remain separately controlled. Third SQL definition is planning-only, not adopted
into the operative migration tree. [Exact decision packet](docs/reports/VEL-PR68-RECONCILIATION-0039-DECISION-PACKET.md)
separates repository SQL adoption, target inventory, authentication/dry run, migration,
fixtures, signed-out JWT/direct Data API mitigation and release. Hosted acceptance is
BLOCKED/NOT_RUN. An unexpired signed-out JWT remains a private-pilot security blocker.

## Next permitted work and readiness

Finish only Task0044’s final exact-head review/integration/CI attestation. No new
feature implementation is dispatched. The [conditional closure record](docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019-CLOSURE.md)
ends the one-time delegation automatically after final post-main PASS and the exact
PR/Issue71 attestation. Thereafter ordinary owner-authorized Task/ContextPack,
review and merge governance applies; no further authority carries to features.

Continued local implementation: conditional GO after those final gates and a new
bounded owner-authorized task. Hosted acceptance: NO-GO pending separate permissions
and evidence. Private-author pilot: NO-GO. Production release: NO-GO.
Original SRC004, independent end-to-end execution, historical LevelB owner acceptance,
SQL adoption/hosted security and unavailable cost comparison remain explicit blockers.

## Retained product decision references

[Owner waves01–03 selections](docs/history/2026-10-10-owner-waves-01-03-recommendations-accepted.md),
[HIS-20261010-003 writer-owned free-or-paid BYOK clarification](docs/history/2026-10-10-owner-byok-free-or-paid-clarification.md)
and [bounded design-entry delegation](docs/history/2026-10-10-owner-delegated-mvp-design-entry.md)
retain their original scopes. They do not authorize paid calls, feature execution,
private manuscripts or deployment under this remediation mandate.

[Task0044/immutable CP0044](docs/agent-workflow/context-packs/VEL-CP-0044.md) selectively integrates the exact Task0042/0043 sources after a fresh current-main pack. Original source branch and historical packs remain preserved; no compliance rule is changed.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0046/OWNER-SCOPE.md` @ `6a4b688f0ba65999a863cffa38e74d40f1f73666`

~~~~~~markdown
# Owner scope

Source: https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6382899950; retrieved2026-10-24. Original chat permalink unavailable; current direct owner dispatch also authorizes preparation only.

## Owner confirmation — Supabase development target (24 October 2026)

**Owner instruction received in this ChatGPT conversation:** “I agree,” in response to confirming the historical project reference `lflkcrnriitrbclangyr` and proceeding toward the proposed *read-only* hosted-development metadata inspection. The original chat has no verifiable repository permalink. This is **not** a new feature/SQL/merge delegation and not approval of the separate IMP-002 proposal.

**Already performed, read-only target-identity lookup only:** Connected Supabase `get_project({id:"lflkcrnriitrbclangyr"})` returned project ref `lflkcrnriitrbclangyr`, display name `vellistry-dev`, organization ID `pulyacnozzggwfgqdgdl`, region `eu-west-2`, status `ACTIVE_HEALTHY`, created `2026-10-11T10:29:57.322725Z`. Source: first-party connected Supabase project metadata, checked 2026-10-24. The response is a target identification/health check, **not evidence that migrations, RLS, grants, Auth or the Next/Nest application are working**. No credentials, user records, table rows, migrations or SQL queries were retrieved or executed.

**Next permitted preparation:** draft a new unique, narrowly bounded Task and immutable Git-pinned ContextPack from current verified main (`d13deca2d6762d44f80035c6d89d2cb61d1ab1e8` at this checkpoint), pin exact target/region/organization, and prepare the **actual named, bounded SELECT/catalog query allowlist and sanitization requirements** described in the existing [A authorization proposal](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6382832722). Use only the previously authorized connected read-only metadata channel if its access level and response limits are appropriate.

**Important limit:** The prior A proposal requires **owner review of the exact query packet/hash and approved least-privilege channel before database catalog queries run**. Today's target confirmation is not a waiver of that requirement. A privileged generic SQL interface must not be assumed to be least-privilege. Stop if an isolated read-only observation channel cannot be established without elevated access. Do not enumerate other projects.

**Explicitly NOT authorized:** key or password retrieval, local env/CLI login/link, changes to Supabase settings, arbitrary SQL, table/Auth rows, DDL/DML, migration application, SQL-source adoption, synthetic user/fixture creation, token/JWT security probes, use of real manuscripts, IMP-002 feature implementation, private pilot, production or automatic merge.

Issue #108 remains open. The prior one-time remediation delegation remains expired. Continue with separately governed, scoped implementation steps.

This Task authorizes repository-only query preparation, review and evidence, not hosted calls or queries. No credentials, SQL execution/adoption, users, settings, private data, IMP002 or merge. Expired remediation delegation stays closed.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0046/TARGET.json` @ `02b6c7e84cca055496b3a4828d84f9870ddbce54`

~~~~~~markdown
{
  "project": "vellistry-dev",
  "reference": "lflkcrnriitrbclangyr",
  "organization": "pulyacnozzggwfgqdgdl",
  "region": "eu-west-2",
  "reported_status": "ACTIVE_HEALTHY",
  "source": "https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6382899950",
  "verification": "Owner/coordinator-reported get_project; not repeated by this task; no live DB evidence"
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0046/CHANNEL-CONTRACT.md` @ `163b643dd988965b4623193eb9555cdaaff16702`

~~~~~~markdown
# Observation channel; no calls made

Visible execute_sql tool accepts project_id and query only; generic raw SQL, with no documented read_only argument, execution-role restriction, timeout or byte/row cap. It is NOT APPROVED/NOT VERIFIED as least-privilege. Discovery of local tool documentation made no Supabase call. Do not probe it with Q01 or substitute broad list_tables/list_migrations/advisors/logs.

Future connected channel requires owner/connector evidence of exact-target enforcement, isolated non-superuser/non-bypass/no-write observation role, forced read-only execution and external query/result limits BEFORE any query. No credential/login/role/configuration changes are authorized to obtain this. If unavailable, STOP and use an owner-supplied sanitized export of approved queries. Current Task prepares only; exact packet/hash owner approval and channel proof are still required. Repo forbidden_actions remain intact.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0046/THIRD-MIGRATION-SOURCE.md` @ `f39fd08f71f8b2c83804723bf25ea8f03b7beade`

~~~~~~markdown
# Retained proposal, not adopted

PR68 source cbb379fa4a4eaa9f576f3abcce2c2258d22cc551 path supabase/migrations/20261015171325_restrict_book_privileges.sql
Git blob 230b1540bb5b8962fd2b797d4f8a467d3c035978
SHA256 c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81
Original source/provenance retained; definition planning-only.

```sql
-- IMP-001B: remove default table privileges that are not constrained by RLS.
-- Object-scoped: preserve owner/service roles and existing row policies.
revoke all privileges on table public.books from public, anon, authenticated;
grant select, insert, update, delete on table public.books to authenticated;
```
~~~~~~

### `supabase/migrations/20261009000000_initial_author_books.sql` @ `192a736d1a5d6ffc6f239c74ed61e7b8d2528b3b`

~~~~~~markdown
-- Vellistry first implementation migration. Requires Supabase auth schema.
-- Intended for local Supabase CLI testing; not yet executed against live Auth/RLS.
-- No seed author IDs, tokens, real manuscripts or service keys in this file.
create extension if not exists pgcrypto;

create table public.books (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  title text not null check (char_length(btrim(title)) between 1 and 120),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index books_owner_created_idx on public.books(owner_id,created_at desc);

create table public.chapters (
  id uuid primary key default gen_random_uuid(),
  book_id uuid not null references public.books(id) on delete cascade,
  title text not null check(char_length(btrim(title)) between 1 and 180),
  position integer not null check(position>=0),
  current_revision integer not null default 1 check(current_revision>=1),
  accepted_document jsonb not null default '{"type":"doc","content":[{"type":"paragraph"}]}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(book_id,position),
  unique(book_id,id)
);
create index chapters_book_position_idx on public.chapters(book_id,position);

create table public.chapter_revisions (
  book_id uuid not null,
  chapter_id uuid not null,
  revision integer not null check(revision>=1),
  document jsonb not null,
  recorded_at timestamptz not null default now(),
  primary key(book_id,chapter_id,revision),
  foreign key(book_id,chapter_id) references public.chapters(book_id,id) on delete cascade
);

-- Deny unauthenticated and cross-author access on all three relations.
alter table public.books enable row level security;
alter table public.chapters enable row level security;
alter table public.chapter_revisions enable row level security;
alter table public.books force row level security;
alter table public.chapters force row level security;
alter table public.chapter_revisions force row level security;

create policy author_can_read_books on public.books for select to authenticated
  using (owner_id=(select auth.uid()));
create policy author_can_create_books on public.books for insert to authenticated
  with check (owner_id=(select auth.uid()));
create policy author_can_update_books on public.books for update to authenticated
  using (owner_id=(select auth.uid())) with check (owner_id=(select auth.uid()));
create policy author_can_delete_books on public.books for delete to authenticated
  using (owner_id=(select auth.uid()));

create policy author_can_read_chapters on public.chapters for select to authenticated
 using (exists(
  select 1 from public.books b where b.id=chapters.book_id and b.owner_id=(select auth.uid())
 ));
create policy author_can_read_revisions on public.chapter_revisions for select to authenticated
 using (exists(
  select 1 from public.books b where b.id=chapter_revisions.book_id and b.owner_id=(select auth.uid())
 ));

-- IMPORTANT: No direct chapter INSERT/UPDATE or revision INSERT policy is granted.
-- A later versioned, audited create/save RPC must append revisions transactionally.
-- Do not prematurely grant broad chapter writes.
revoke all on public.books,public.chapters,public.chapter_revisions from anon;
grant select,insert,update,delete on public.books to authenticated;
grant select on public.chapters,public.chapter_revisions to authenticated;
~~~~~~

### `supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql` @ `0670a60f1c2e299e9771b9af1c677d97712174d9`

~~~~~~markdown
-- K2 hardening: Supabase may have default table privileges granting DML on
-- new public tables. Absence of an UPDATE RLS policy must not be mistaken for
-- SQL-level revocation. Make chapter/revision tables read-only to author role
-- until the K3 audited transactional revision RPC is built.
-- Do not grant direct INSERT/UPDATE/DELETE on accepted manuscript content.
revoke all on table public.chapters, public.chapter_revisions from authenticated;
grant select on table public.chapters, public.chapter_revisions to authenticated;
revoke all on table public.chapters, public.chapter_revisions from anon;
~~~~~~

### `docs/reports/VEL-PR68-RECONCILIATION-0039-DECISION-PACKET.md` @ `79ec346fe20dcf65c62db8f2e90140435b4e15ee`

~~~~~~markdown
# Reserved security-sensitive decisions — PR68 reconciliation

## FACT: authority and source
This packet requests no immediate action and records no new approval. The one-time repository remediation delegation excludes hosted Supabase access, including read-only inventory, CLI authentication, dry runs, migration execution and real/private manuscript use. The third migration definition is approved for planning only; that is not reviewed-base SQL-path authority. No such authority file is installed by Task0039.

Historical expected target is vellistry-dev. Its current identity, state, history and privileges have not been queried. The owner must explicitly confirm the intended project before any separately authorized connection. No credentials belong in the approval record or repository.

Exact source references, all at PR68 cbb379fa4a4eaa9f576f3abcce2c2258d22cc551:

| File | Git blob | SHA256 |
|---|---|---|
| supabase/migrations/20261009000000_initial_author_books.sql | 192a736d1a5d6ffc6f239c74ed61e7b8d2528b3b | 315e6a29f8072d4f556729784c07d4bf121666ef385b9cea4dfda36fded5ff74 |
| supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql | 0670a60f1c2e299e9771b9af1c677d97712174d9 | 6786561dcb325e14adbadec7b3bf879b8ab769841c86bf790dfbd2f19c222a65 |
| supabase/migrations/20261015171325_restrict_book_privileges.sql | 230b1540bb5b8962fd2b797d4f8a467d3c035978 | c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81 |
| tests/book_privileges_regression.sql | 5feac95772f93330b29150dbc135d766e7b0392e | bcba9b788151d27ee354f41aa658398f1ed0cbfe86cf0d97f7ae685cb0c54e6b |

The retained disposable PG17 proof is run39135149678 at098ab06a40a84eaba5880223f02e80fab3bf9e86, PostgreSQL17.11. BEFORE used explicitly injected broad grants and failed as expected; AFTER the unchanged proposal passed48ACL checks and supplemental RLS/forged-owner/forbidden-operation probes. Artifact ZIP SHA256d426612fbb1197e8e80b8b5a7cd8cfa97e24c2307af3fe786485cf0e416fbf62 and result SHA256fb1fefddde801315d661a6248d138473d0bb2ae9b525f2033c9b8c9d1f3f25cf are retained on main. These synthetic facts do not describe current hosted default grants.

## PROPOSAL: separate decisions, no automatic progression
1. **Repository SQL-source adoption:** owner reviews the exact third migration and fixture hashes and authorizes their exact paths through the existing reviewed-base mechanism. A new Task/immutable pack and distinct review/CI are required. This decision alone authorizes no hosted operation. Changed bytes need another review.
2. **Target and read-only inventory:** authorize the named development project and exact read-only observations: migration history/version ordering; books ownership and RLS/FORCE flags; table/sequence/schema/default privileges; PUBLIC,anon,authenticated and inherited memberships; privileged-role preservation; SECURITY DEFINER functions; Data API exposure and actual application transport. Record sanitized facts and detect drift before proposing execution. No unrelated schemas,Vault,seed/reset or role changes.
3. **CLI authentication and reviewed dry run:** separately authorize secure local authentication and target linking without recording credentials, followed by the exact three-version dry run. Stop for unknown history, conflicting versions, extra SQL or unexpected target. No push/reset follows merely because dry run succeeded.
4. **Migration execution:** authorize the exact target, source hashes, ordered versions and preconditions after review of the real inventory/dry-run evidence. Define a maintenance/rollback decision before execution: preserve schema/ACL/history evidence and an independently recoverable backup, stop on unexpected changes, and review any compensating privilege statement against the actual pre-state. Do not blindly restore excessive grants, drop tables, reset history or alter unrelated objects. Verification and rollback are distinct from deployment.
5. **Disposable hosted acceptance fixtures:** separately authorize exactly two synthetic Auth users and their owned test books, the minimum test credential access, permitted CRUD/RLS/forged ownership/TRUNCATE/REFERENCES/TRIGGER probes and explicit cleanup. Identify only owned fixture IDs; retain sanitized outcomes, not tokens,passwords or manuscripts. Prove cleanup rather than infer it from a script exit.
6. **Signed-out JWT and private-pilot boundary:** the grant correction does not revoke an already issued JWT. Existing disposable experiments demonstrate residual direct Data API access after logout. Before private-author data, choose and test a mitigation or explicitly approve a bounded residual-risk policy. A private gateway/session-check experiment is research evidence, not an implemented production transport or owner-approved security boundary. Private pilot stays NO-GO.
7. **Release/deployment:** production target, operations, monitoring, backup/recovery and release acceptance require separate owner authorization. Neither repository merge nor a development acceptance run opens G_RELEASE.

## INTERPRETATION and current disposition
Repository-only review and source preservation can finish while these external gates remain closed. Closing the obsolete PR68 integration branch as superseded does not approve its SQL or complete hosted Issue67/63 acceptance. Preserve its exact source branch and references for a future scoped decision. No current cloud state, migration execution, Auth fixture or private-pilot approval is inferred.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.

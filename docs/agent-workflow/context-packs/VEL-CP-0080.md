---
id: VEL-CP-0080
title: 'Context for VEL-TASK-0080: Record dated owner G1 synthetic fixture attestation
  addendum'
type: context-pack
status: prepared
created_at: '2026-11-13'
version: 0.1.0
task_id: VEL-TASK-0080
base_commit: 0003b26319d53fc2004af292e4bb2269894b3651
task_blob_sha: a93a9966e8448278b2dae752334fd385fd61b6f3
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
- path: docs/agent-workflow/inputs/VEL-TASK-0063/FIXTURE-STATUS.json
  role: governing-source
  git_blob_sha: 8d103b65708c4527b2d9751e9e5582cd9833480a
  source_status: unrecorded
- path: docs/reports/VEL-OWNER-PRINCIPAL-PROBE-PROTOCOL-0063.md
  role: governing-source
  git_blob_sha: 5eeda3b80818c0d5c0e0e2a0d2ba200fc0e74492
  source_status: proposed-for-review
- path: docs/reports/VEL-PRINCIPAL-SESSION-NEW-MAIN-0079.md
  role: governing-source
  git_blob_sha: 3c5995d9ee56299f26beace38e2b609b5f5397fc
  source_status: proposed-for-review
- path: docs/agent-workflow/inputs/VEL-TASK-0080/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: 9453695b61d88bcdf1eab086aac22ab3b08518f2
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0080/CONTRACT.md
  role: governing-source
  git_blob_sha: 93e2350d8be3b69822afe3c19b127eb1b34e1b24
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0080/SOURCE-REFERENCES.json
  role: governing-source
  git_blob_sha: c74b5768b2c9aef7c9efa317cdab275b2ca60faf
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0080/UNIQUENESS.json
  role: governing-source
  git_blob_sha: edc3bb2022288bff29d6fbdb321dafda051db960
  source_status: unrecorded
source_gaps:
- id: SELF-ATTESTATION-ONLY
  limitation: Owner identity and actual hosted fixture state are not independently
    verified; no private identifiers or credentials supplied.
- id: FORMAL-ACCEPTANCE-PENDING
  limitation: G1 confirmation answers satisfied by owner declaration; formal governance
    acceptance pending separate owner review. G2-G4 remainBLOCKED; hosted probe not
    authorized/executed.
- id: NO-PRODUCTION-ACCEPTANCE
  limitation: N12/runtimeBLOCKED; hosted cases/R01-R08/OR01-10NOT_RUN; legacySQLprivilegesSKIPPED;
    all production session/principal/gateway/hosted gates pending.
prepared_by: agent_workflow.py
---

# VEL-CP-0080 — Record dated owner G1 synthetic fixture attestation addendum

## Objective
Record13November owner YES declarations as self-attestation with formal acceptance pending, preserve historical UNKNOWN sources, and keep all hosted/security execution gated

## Scope
**In:** CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0080.yaml; docs/agent-workflow/context-packs/VEL-CP-0080.md; docs/agent-workflow/execution-bundles/VEL-EB-0080.md; docs/agent-workflow/inputs/VEL-TASK-0080/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-G1-OWNER-FIXTURE-ATTESTATION-0080.md; docs/agent-workflow/proposals/VEL-G1-FIXTURE-ATTESTATION-0080.json; docs/reports/evidence/VEL-TASK-0080/*
**Out:** Application/Auth/SQL/test/CI/dependency/evaluator/security policy modifications; Hosted/Auth/JWT/JWKS/credentials/private-account or manuscript access, executable probe/runner/sanitizer, deployment, merges, branch deletion and successor work

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- SELF-ATTESTATION-ONLY: Owner identity and actual hosted fixture state are not independently verified; no private identifiers or credentials supplied.
- FORMAL-ACCEPTANCE-PENDING: G1 confirmation answers satisfied by owner declaration; formal governance acceptance pending separate owner review. G2-G4 remainBLOCKED; hosted probe not authorized/executed.
- NO-PRODUCTION-ACCEPTANCE: N12/runtimeBLOCKED; hosted cases/R01-R08/OR01-10NOT_RUN; legacySQLprivilegesSKIPPED; all production session/principal/gateway/hosted gates pending.

## Permissions and acceptance
**Allowed:** Author approved documentation/governance paths only after committed validated immutable pack, Run source/schema/document assertions and existing approved offline/disposable CI fixtures without hosted access, Publish new Draft PR, obtain distinct review, promote after checks to Ready, verify full CI; no merge
**Owner approval required:** Any additional material permission, executable Auth tooling, code/test/CI/SQL/dependency/security change, hosted access, merge or successor task
**Acceptance criteria:**
- Exact13November YES/YES/YES declaration and non-independent provenance; formal acceptance pending; no hosted execution authority
- Historical26October UNKNOWN,3November reconciliation and Task79 sources unchanged; original protocol endpoints/schema/limits unchanged
- G2-G4BLOCKED, cases/R01-R08/OR01-10NOT_RUN, N12BLOCKED, legacySKIPPED; no security promotion
- No operative changes; standing current-state references and<11000byte limit preserved; source bindings/trusted-base compliance, exact-head review and fullReady CI PASS; owner merge pending

## Deliverables
- Dated human report and separate closed-schema owner self-attestation JSON; concise additive state checkpoint
- Historical source/hash preservation, full-render CP, EB, real assertions/regressions, distinct review and actual Draft/Ready CI; unmerged PR

## Pinned source snapshots
Git commit: `0003b26319d53fc2004af292e4bb2269894b3651`. Read source statuses independently from task intent.

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

### `docs/agent-workflow/inputs/VEL-TASK-0063/FIXTURE-STATUS.json` @ `8d103b65708c4527b2d9751e9e5582cd9833480a`

~~~~~~markdown
{
  "date": "2026-10-26",
  "source": "Owner direct response in current conversation, relayed in Issue108; no account inspection",
  "unenrolled_fixture_exists_and_owner_controlled": "UNKNOWN",
  "verified_totp_fixture_exists_and_owner_controlled": "UNKNOWN",
  "enrolled_fixture_aal1_aal2_obtainable": "UNKNOWN",
  "status": "FIXTURE_PREREQUISITE_BLOCKED",
  "hosted_probe_executed": false
}
~~~~~~

### `docs/reports/VEL-OWNER-PRINCIPAL-PROBE-PROTOCOL-0063.md` @ `5eeda3b80818c0d5c0e0e2a0d2ba200fc0e74492`

~~~~~~markdown
---
id: VEL-OWNER-PRINCIPAL-PROBE-PROTOCOL-0063
title: Gated owner-only synthetic Auth evidence protocol
type: implementation-report
status: proposed-for-review
created_at: 2026-10-26
owner: project_owner
version: 0.1.0
---

## Execution status and authorization
HOSTED_EXECUTION_BLOCKED. No hosted probe, authentication, token handling, factor inspection or JWKS request was performed by agents. No executable runner is supplied or tested in this documentation-only Task0063. This protocol is not an instruction to run copied console snippets or unreviewed tooling.

[Conditional owner authorization6411355004](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6411355004) relays direct human permission for preparation and a subsequent OWNER-EXECUTED probe after prerequisites/protocol review. [Owner fixture response6411406349](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6411406349): unenrolled synthetic author existence/control UNKNOWN; verified-TOTP synthetic author existence/control UNKNOWN; ability to obtain enrolled AAL1/AAL2 UNKNOWN, not confirmed26October2026. UNKNOWN is not absent or present. Account creation/enrollment changes and privileged/broad searches are excluded, so this task cannot repair that prerequisite itself.

Verified base17adbf96ae0a9187732ad3a7837ec0d2d9b62d03. Task0063 and exact owner/source snapshots were committed before validated committed immutableCP0063. Historical Task59-62/CPs/EBs/failures stay immutable. Existing52/12unit/32PG controls unchanged. Scope is protocol/evidence documentation only, no app/SDK/test/CI/dependency/SQL changes. Agent's standing forbidden hosted/merge actions remain; conditional owner permission is not agent access or production approval.

## Gates: all required before owner execution
G1 FIXTURE_PREREQUISITE_BLOCKED now: owner dated YES confirmation from already-held trustworthy fixture records for TWO existing owner-controlled synthetic accounts, one without verified MFA, one with existing verified TOTP and usable AAL1/AAL2. Do not include identifiers or authenticate blindly to discover whether they exist. No real author account or manuscript may substitute. If existing records cannot establish this, obtain separately scoped evidence permission; no creation, admin list or MFA enrollment permission is inferred.

G2 PRE_EXECUTION_REVIEW_PENDING: record exact reviewed protocol commit/hash, distinct source-review disposition, owner acknowledgement of endpoint/redaction/cleanup/stop rules, environment and SDK lock/version. If executable tooling is needed, a fresh execution/tooling Task and committed validated immutable pack must pin then-current fixture confirmation and exact runner/sanitizer sources before executable work. Current Task's pinned UNKNOWN input is historical and must not be rewritten to YES. Such a tooling Task may use the existing conditional authorization only within its exact bounds; material endpoint/operation expansion needs amended authority. No unknown or unreviewed runner may execute.

G3 OWNER_ENVIRONMENT_NOT_ATTESTED: owner alone operates private controlled process with frozen SDK2.117.3 and reviewed network guard/sanitizer. Credentials, public client key and tokens supplied privately in memory; no agent, chat, remote desktop, recorded terminal, shell arguments/history, saved .env, clipboard export, repository file, browser storage, SDK persistence or logs receive them. No service_role/secret/admin client. Disable session persistence/auto-refresh and debugging, HTTP tracing, crash dumps/telemetry that could capture payloads. If this cannot be assured, stop before login. No application client or real session reused.

G4 SANITIZER_AND_CLEANUP_NOT_VERIFIED: before any network work, offline no-network tests of the exact runner must prove closed output schema, nested/exception/URL/header redaction, deny-by-default endpoint guard, token capture and cleanup-local-scope behavior. Only synthetic strings in offline tests. Task0063 does not claim these executable tests exist or pass. Owner commits to reviewing the sanitized output before sharing. Local self-signout cleanup below must be included in the exact pre-execution review; if its narrow authority/implementation cannot be established, do not begin. Review is not satisfied merely by a green document check.

## Fixed trust boundary and endpoint allowlist
Only HTTPS origin https://lflkcrnriitrbclangyr.supabase.co, exact project reference lflkcrnriitrbclangyr. Normal TLS verification required; refuse redirects, user-supplied origins, proxies that record sensitive content, custom domain substitution or project mismatch. No arbitrary URL from issuer/kid/claims. Unknown request class fails BEFORE sending. The owner must approve this list as part of G2; this is not permission for an agent request.

E1 POST /auth/v1/token?grant_type=password — only two fixture logins, email/password in owner's private request body. No signup, recovery, OTP-email/SMS, OAuth, refresh_token or extra grant type. No login loops, brute-force or intentional invalid credential tests. A CAPTCHA/third-party redirect requirement is BLOCKED, not a new permitted origin.

E2 GET /auth/v1/user — exact captured case token for same-token user verification, plus bounded SDK-required fallback calls if any. Return data stays private; only matching/shape/factor aggregates may leave process. No /admin or listing, no other user/factor/session query.

E3 GET /auth/v1/.well-known/jwks.json — only if frozen SDK requires verification metadata. Public key response is private temporary SDK state: no raw JWK, modulus/coordinates, certificate, body or key material in reports/logs. No different origin/redirect or caller keys/JWKS/allowExpired override. Presence of a successful fetch is not proof the SDK used local crypto. No manual key retrieval or offline signature experiment.

E4 POST /auth/v1/factors/{existing_private_factor_id}/challenge and POST /auth/v1/factors/{same_existing_private_factor_id}/verify — solely existing TOTP-enrolled fixture step-up. Factor/challenge IDs and TOTP code stay private. No factor collection POST, enrollment, DELETE, recovery codes, SMS/phone challenge or unrecognized factor type. Choose only an existing owner-known verified TOTP; if not established, stop rather than enroll. Dynamic IDs must come from the privately verified own-fixture context, never untrusted external input, and must never appear in logs or exported URLs.

E5 CLEANUP ONLY: POST /auth/v1/logout?scope=local using ONLY each newly created probe session's own credential, via reviewed SDK signOut({scope:local}) or equivalent exact local-scope self-signout. Never default/global/others scope; no service/admin key or direct session-row access. This narrow cleanup is subject to exact G2 review before login; it is not key revocation, enrollment change, or a broad session-management test. If it is not covered/verified in the reviewed runner, block before execution. Logout success is cleanup evidence only, not proof old access JWTs become immediately unusable.

No SQL, PostgREST/storage/manuscript calls, /admin, broad user/session/factor lists, settings, key rotation, account creation or application routes. SDK initialization must not contact extra services. Request bounds proposed for review: at most2password logins,3case getUser calls,3case getClaims operations with bounded internal getUser/JWKS calls, one TOTP challenge and one verification,2local cleanup signouts;32total outbound requests maximum,15seconds/request and5minutes/run. No automatic refresh, application retries or cross-origin fallback. SDK internal retries count toward bounds; reaching a bound aborts measurement, then only reviewed cleanup is permitted. Limits are safety bounds, not a claim target timing is verified.

## Owner-only sequence after every gate is satisfied
S0 Confirm project, fixtures and runner/protocol version without identifiers in evidence. Prepare separate in-memory SDK state for each fixture; no disk or shared browser session. Do not export environment, request/response bodies, unfiltered SDK objects, stack traces, raw network logs or screenshots. Public client key/password/OTP are owner-only input, never arguments or stdout. New authentication necessarily creates owned Auth sessions; no settings/enrollment change is allowed.

S1 Case UNENROLLED_AAL1: owner signs into existing unenrolled fixture. Capture one immutable access token privately. As a REJECTION-ONLY preflight, a reviewed parser may inspect the bounded untrusted header in memory: anything other than expected current-key ES256, including HS256/missing/unknown, stops that sample BEFORE getUser/getClaims or manual crypto/fallback testing. This is sample routing, not authentication or production algorithm approval. Never seek an old token or alter/sign a JWT. An unexpected token leaves BLOCKED_UNEXPECTED_ALGORITHM; no legacy experiment continues.

S2 For the captured token, call getUser(token) and getClaims(token) explicitly, with no omitted-token/getSession/current-client-state substitute, no supplied verification options or key override. Snapshot arriving data, privately validate canonical user.id==verified claims.sub and claim session_id shape, evidence age/expiry after awaits. Do NOT claim getUser independently verified the session_id or writable session: that API returns user identity, not a protected transactional session witness. Keep conservative start timestamp/30000ms bound for observation correlation; this does not implement or accept PRINCIPAL.

S3 Inspect only allowed issuer/audience/role/anonymous/AAL/time and verified-header metadata, plus the private user response's factors-field presence/schema/verified-presence bucket. Compare against owner-known fixture ground truth without exporting identities. Missing/null/partial/unavailable/unknown statuses/schema remain UNKNOWN, not NONE. A complete-looking empty array is an observation only: authoritative completeness/visibility still needs a supported provider/API contract, which samples cannot prove. No extra factor/user/admin lookup to fill gaps.

S4 Case ENROLLED_AAL1: repeat login/capture/verification for existing enrolled fixture in its separate SDK state BEFORE challenge. If the provider refuses this state due to existing restriction, record BLOCKED/UNKNOWN with a fixed error class; do not disable15-minute restriction or repeat until it passes. AAL claim alone is not enrollment evidence.

S5 Case ENROLLED_AAL2: owner uses only existing verified TOTP challenge/verify endpoints E4, privately enters code, captures returned access token as a NEW immutable case token, then repeats S2-S3. It must not replace the token mid-case or relabel prior AAL1 observations as AAL2. No factor enrollment/deletion, refresh workaround, recovery bypass or key/settings changes. If the owner cannot obtain the required state, case BLOCKED rather than creating/enrolling a fixture.

S6 Derive only the closed sanitized record below. Minimum identity assurance may be AUTH_SERVER_BACKED only when fixed-server same-token user AND SDK claims verification succeeded. Claims path remains UNKNOWN unless separately reviewable observable evidence establishes it; header/key metadata and generic success do not prove local current-key cryptography. No production policy acceptance, eligibility or writable-session flag is produced. Unexpected role/service credentials, anonymous=true, mismatches, invalid/expired proof or extra endpoint aborts that case and stops further measurement; only reviewed cleanup follows. Do not deliberately generate these negative cases against hosted Auth.

S7 Perform reviewed E5 cleanup for newly created owned sessions, discard credentials/tokens/factors/OTP/raw responses from references, close isolated client/process and verify no files, storage, trace/HAR/clipboard/terminal capture were produced. Memory disposal/GC is not guaranteed cryptographic zeroization. SDK/public-JWKS memory may persist until process exit; never export it. If cleanup fails or cannot confirm affected session scope, report cleanup UNKNOWN/BLOCKED, stop; do not escalate to global signout or privileged session deletion. No log upload until owner manual redaction review passes.

## Closed sanitized output: no raw object copying
Only the listed keys and bounded values may be exported. All unknown keys/free text, nested raw payloads, unexpected string values, IDs, headers, URLs containing private path IDs and exception details must be dropped/rejected, never printed. Do not log a raw object then sanitize afterward. Emit only fixed-schema aggregate observations and fixed error categories. No token/user/session/factor hashes or fingerprints either.

Run fields: protocol_id=VEL-OWNER-PRINCIPAL-PROBE-0063; protocol_reviewed_commit (exact public Git SHA); run_date YYYY-MM-DD; project_ref=lflkcrnriitrbclangyr; fixtures_confirmed=YES/NO/UNKNOWN; execution=NOT_EXECUTED/BLOCKED/OBSERVED_WITH_LIMITATIONS; cleanup=NOT_STARTED/DONE/UNKNOWN/BLOCKED. A not-executed template is not findings.

Exactly3case labels: UNENROLLED_AAL1, ENROLLED_AAL1, ENROLLED_AAL2. Each may export ONLY:
- status NOT_RUN/OBSERVED/UNKNOWN/BLOCKED; error_class NONE/AUTH_DENIED/UNAVAILABLE/EXPIRED/MALFORMED/MISMATCH/UNEXPECTED_ALGORITHM/ENDPOINT_DENIED/LIMIT_REACHED/UNKNOWN (no raw messages).
- same_token_calls, auth_user_ok, sdk_claims_ok, user_subject_match, temporal_shape_valid, freshness_within_30000ms as TRUE/FALSE/UNKNOWN. No actual subject/session IDs. session_claim_shape UUID/MISSING/INVALID/UNKNOWN is not live-session verification.
- issuer_value is ONLY the fixed candidate https://lflkcrnriitrbclangyr.supabase.co/auth/v1 or UNEXPECTED_REDACTED/UNKNOWN; audience_value ONLY authenticated/UNEXPECTED_REDACTED/UNKNOWN; audience_shape STRING/SINGLETON_ARRAY/OTHER/UNKNOWN; role ONLY authenticated/anon/service_role/UNEXPECTED_REDACTED/UNKNOWN. Unexpected values require private owner review/new bounded evidence scope, not unrestricted echo.
- anonymous FALSE/TRUE/MISSING/INVALID/UNKNOWN; aal aal1/aal2/MISSING/INVALID/UNKNOWN; alg ES256/HS256/RS256/OTHER_REDACTED/MISSING/UNKNOWN (non-ES256 preflight stops, never verifies legacy); kid_present YES/NO/UNKNOWN; kid_matches_owner_confirmed_current YES/NO/UNKNOWN (no actual kid, key or JWKS output; absent owner evidence means UNKNOWN).
- observed_lifetime_seconds as safe integer1..86400 or OUT_OF_RANGE_REDACTED/UNKNOWN; optional_nbf ABSENT/VALID_PAST/FUTURE/INVALID/UNKNOWN. No exact expiry/issued timestamps. Observed exp-iat duration is NOT configured project JWT lifetime.
- factors_field ARRAY/MISSING/NULL/MALFORMED/UNAVAILABLE/UNKNOWN; factor_schema RECOGNIZED/UNRECOGNIZED/UNKNOWN; verified_factor_bucket ZERO/AT_LEAST_ONE/UNKNOWN; matches_owner_fixture_ground_truth YES/NO/UNKNOWN; factor_completeness NOT_ESTABLISHED (unless a separately reviewed authoritative API contract is supplied; no sample automatically upgrades it).
- assurance_minimum AUTH_SERVER_BACKED/NOT_ESTABLISHED; sdk_claim_path UNKNOWN (default; no path guessed from header/fetch); no PASS/ACCEPTED/PRODUCTION_READY or writable field.

No emails, usernames, user/session/factor/challenge IDs, raw JWT/token/password/OTP, API keys/secret/public-key material, signing secrets, connection strings, raw claims, arbitrary metadata or body/error/HTTP-header dumps may appear in repository/reports/logs. Owner manually reviews the closed record; if any forbidden data escaped, do not transmit it or ask an agent to inspect it; isolate privately, stop and report only the incident category/affected evidence-withheld flag under a separately reviewed response. Redaction is required even for synthetic accounts.

## Findings template and scope limits
Current sanitized findings: execution NOT_EXECUTED; fixtures_confirmed UNKNOWN; all3cases NOT_RUN; factor visibility/completeness UNKNOWN/NOT_ESTABLISHED; issuer/audience/role/AAL/verification path findings UNKNOWN; cleanup NOT_STARTED. These are statuses, not invented observations.

Approval of this documentation PR is NOT automatic execution readiness. Fixture confirmation, exact protocol and executable environment/runner/sanitizer review still required; owner alone executes conditionally authorized operations. Current UNKNOWN input/CP must be preserved; changed execution prerequisites belong in a fresh pinned execution record, not rewritten history. No agent-hosted credentials/JWT/JWKS or own-user inspection authorized. No automatic merge or production-gate approval.

R01-R08 remain NOT_RUN (implementation acceptance untouched). N12/session/write enforcement and historical independent spawn EPERM BLOCKED. All production decision gates remain pending as previously qualified; PRINCIPAL design conditional approval is not target verification. Existing research/regressions do not become hosted probe findings. Task59-62 histories preserved, Issue108 OPEN, remediation delegation EXPIRED. If prerequisites stay UNKNOWN, finish preparation honestly and keep hosted work BLOCKED.
~~~~~~

### `docs/reports/VEL-PRINCIPAL-SESSION-NEW-MAIN-0079.md` @ `3c5995d9ee56299f26beace38e2b609b5f5397fc`

~~~~~~markdown
---
id: VEL-PRINCIPAL-SESSION-NEW-MAIN-0079
title: PRINCIPAL and SESSION readiness adoption on verified main
type: implementation-report
status: proposed-for-review
created_at: 2026-11-13
owner: project_owner
version: 0.1.0
---

# Result and lineage

FACT: hosted execution remains **BLOCKED**. This packet adopts existing non-executable readiness conclusions; it supplies no new target observations, security acceptance, runner or sanitizer. Owner dispatched Task0079 through [the authorization relay](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6849146195). Base `c5f324e78d05f2f9afde91e6f58970de021fffb6` integrates PR138, with [post-main43397610863 SUCCESS](https://github.com/Ben-001-sys/Vellistry/actions/runs/43397610863).

The [new matrix](../agent-workflow/proposals/VEL-PRINCIPAL-SESSION-READINESS-0079.json) preserves every substantive original protocol, fixture, gate, PRINCIPAL, SESSION, owner-environment and OR01–OR10 row. Only packet identity/date/base/authorization and explicit adoption metadata differ. Its reconciliation date is **not** fresh owner fixture confirmation. Readiness metadata never expands the closed Task0063 observation export schema.

Original authorship/execution remains Task0077 Codex under its original authorization. [Exact source report](../agent-workflow/inputs/VEL-TASK-0079/SOURCE-REPORT.md), [exact source matrix](../agent-workflow/inputs/VEL-TASK-0079/SOURCE-MATRIX.json) and [all original path/blob/SHA256 references](../agent-workflow/inputs/VEL-TASK-0079/SOURCE-REFERENCES.json) are pinned governing inputs. Original head `34048b22473ae0b39dcfbefdedfc19b6f3c102e4`, source `809f6034b52a983d3273b42c7a042b1791a9cce3`, CP commit `f86ec72f309c290aa6669a7b4521ee4890201d5c`, tree `0594e860a2ff98b237ac36d0f6ec5d0dcdfc1b86` remain historical, not newly executed. PR137 stays OPEN Draft and unchanged. Task0077/CP0077/EB0077 are not overwritten or added as new current records.

No original commit is replayed: these renamed/reconciled artifacts cannot have the original Git patch identity. New commits therefore declare original Codex reconstruction, with explicit source attribution, rather than false `adopted` commit origins. The trusted evaluator's patch-identity requirements remain unchanged. Original-source snapshots are copied evidence, not newly created historical findings.

# Fixture and gate status

| Prerequisite | Status | Actual evidence |
|---|---|---|
| Existing owner-controlled unenrolled synthetic author | UNKNOWN | Last actual owner response 26 October 2026 |
| Existing owner-controlled verified-TOTP synthetic author | UNKNOWN | Same historical response |
| Ability to observe enrolled AAL1 and AAL2 | UNKNOWN | Same historical response |

No fresh owner confirmation is invented. Original 3November fixture reconciliation remains quoted unchanged in the matrix. Any NO/UNKNOWN keeps the probe blocked; no account creation, factor enrollment or inspection is inferred.

| Gate | Status | Missing evidence |
|---|---|---|
| G1 | BLOCKED | Three dated non-secret owner confirmations |
| G2 | BLOCKED | Exact future executable protocol/runner/sanitizer review and owner pre-execution approval |
| G3 | BLOCKED | Owner-controlled private, memory-only, non-recording environment attestation |
| G4 | BLOCKED | Actual default-deny guard/sanitizer/timeout/cleanup offline acceptance |

# PRINCIPAL and protocol boundaries

UNENROLLED_AAL1, ENROLLED_AAL1 and ENROLLED_AAL2 remain **NOT_RUN**, each readiness BLOCKED. Preserve canonical0063 exact fixed origin and E1–E5 methods/paths/query, 7 run fields, 27 closed case fields, 32 total requests including cleanup, 15seconds/request and 300seconds/run including cleanup. The new matrix retains the protocol's source hash, request limits, sanitation and stop conditions byte-for-byte as structured values.

Same immutable-token getUser/getClaims outcomes and subject agreement are separate from trusted claim policy, signature/path assurance and current writable-session authority. Factor visibility does not prove completeness: empty/missing collections never establish authoritative absence. Conditional MFA requires authoritative unenrolled state for AAL1 and AAL2 for enrolled authors; unknown enrollment cannot authorize access. No target issuer/audience/role/AAL/signing/fallback policy is inferred from mock values. Current/legacy-HS256 assurance remains unresolved; no JWT/JWKS fetch or legacy experiment occurs. The existing30000ms evidence freshness is distinct from JWT lifetime and session deadlines. Auth-server success alone never proves transaction-time authorization.

# SESSION and future tooling

All nine SESSION rows remain production BLOCKED and target NOT_RUN. Preserve JWT validity versus live session/user ownership, local/global signout semantics, previous-token behavior, authoritative row visibility, refresh/revocation races, expiry/inactivity/deadlines, missing/revoked/unavailable/mismatched sessions, direct PostgREST versus Nest gateway and the protected database transaction boundary.

Historical local K2A/K2B evidence at `f9448df3e619614d9d6956247b985cf15313b187` / run37993494329 observed an old bearer retaining one same-author synthetic book row through direct PostgREST after local signout while Nest returned401. This is a local residual-bearer observation, not cross-author leakage or hosted target acceptance. Disposable row locks/CAS/recovery do not prove production revocation or justify transferring fixture privileges.

OR01–OR10 remain **NOT_RUN**. No runner/sanitizer implemented: exact endpoint denial, hidden SDK traffic, same-token correlation, closed outputs, redaction canaries, time/path/factor uncertainty, bounded requests/time, owned LOCAL-only cleanup, no telemetry/persistence and fail-closed gate handling still require a separately authorized immutable tooling task. No live runner enters CI.

# New-main CI and evidence boundaries

PR138 repair stays byte-identical: Ubuntu24.04, postgres:16 service, `/usr/lib/postgresql/16/bin/` tools, client/server major16 verification and all12 original CAS/restore bodies/commands. Mandatory41Chromium cases and PostgreSQL17 persistence/manuscript/HTTP/restart/cleanup, application/security, classifier and final-gate policy are unchanged. Existing previously authorized disposable GitHub fixtures may execute; these are not hosted fixture confirmation.

Task0077 Ready42777271966 remains **FAILURE** (11 recovery PASS / 1 ERROR and final gate FAILURE). Original reviews, source bindings and failed attempts remain historical; new CI cannot relabel them. Task0078 supplied-source review did not independently execute runtime. Independent filesystem/runtime restrictions and historical spawn EPERM remain BLOCKED. Legacy integrated SQL privilege testing remains SKIPPED. R01–R08 remain NOT_RUN; N-12 BLOCKED.

Actual Task0079 source/pack/document checks, regressions, commands/exits and failures belong in EB0079 and new evidence. Exact completed-head review and Draft/Ready results are appended to the new PR ledger, avoiding circular SHA claims in committed content. Passing documentation/tests/CI cannot promote any security gate.

# Next owner decision

PROPOSAL: review this unmerged documentation adoption independently of PR137's eventual disposition. The smallest evidence action is only a dated non-secret YES/NO/UNKNOWN confirmation for each existing fixture from trustworthy owner records. No identifiers, screenshots or credentials. Any inspection/provisioning or future owner-only executable needs separate exact authorization and G1–G4 evidence. Production PRINCIPAL target assurance, SESSION, GATEWAY, PACKAGING, TRANSPORT, RECONCILIATION, hosted acceptance, private pilot and release remain gated. Issues108/131 OPEN; expired remediation delegation EXPIRED. No merge, hosted operation, production change or successor work authorized.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0080/OWNER-SCOPE.md` @ `9453695b61d88bcdf1eab086aac22ab3b08518f2`

~~~~~~markdown
Owner instruction relayed from the current conversation on **13 November 2026**, explicitly authorized for bounded repository-only Task0080 implementation, with no merge authority.

The project owner stated:

> For Vellistry's existing owner-controlled synthetic Auth prerequisites, my confirmations are:
>
> 1. Existing owner-controlled synthetic author without verified MFA enrollment: YES
> 2. Existing owner-controlled synthetic author with verified TOTP enrollment: YES
> 3. Ability to obtain AAL1 and AAL2 observations from the enrolled synthetic author: YES

This is **OWNER_SELF_ATTESTATION**. The relay is not independent authentication of owner identity or inspection of hosted fixture state. No identifiers, credentials, factor IDs, tokens or hosted query results were supplied. Historical UNKNOWN records (26October/3November) must remain unchanged. Record the new dated declaration in an addendum; G1 owner-confirmation answers are satisfied by attestation, while formal governance acceptance remains pending owner review. G2-G4BLOCKED; hosted probe neither authorized nor executed; observations/R01-R08/OR01-OR10NOT_RUN;N12/historical runtimeBLOCKED;legacySQLprivilegesSKIPPED; all production security decisions pending.

Authorized Task0080 paths only: CURRENT-STATE.md; new Task0080/CP0080/EB0080; task-specific inputs/report/JSON/evidence; per-PR compliance manifest. Commit inputs and validated immutable pack before operative edits. Preserve all earlier records and standing state references. Existing approved disposable offline/GitHub fixtures and unchanged required Draft/Ready full CI may run. Distinct final-head review and a new unmerged PR required. No application/Auth/SQL/CI/test/dependency/evaluator edits, no executable probe/runner/sanitizer, hosted operations, secrets/private accounts/manuscripts, deployment, branch deletion, merge or successor task. Issues108/131 stay OPEN; expired remediation delegation remains expired.

Approved main62be53c401b8c7405590c307559f921ec7d71a83, tree33c401e9b9f17e4d4a03879082bca2bf0492ae8e. PR139 integrated and verified; PR137 closed as superseded, not merged. This relay records the owner's scope and exact declaration, not Codex self-approval or formal acceptance of the new record.

Authorization evidence: https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6865763794
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0080/CONTRACT.md` @ `93e2350d8be3b69822afe3c19b127eb1b34e1b24`

~~~~~~markdown
# Task0080: additive owner G1 attestation

Record the exact dated13November2026 owner YES/YES/YES declaration. Evidence type OWNER_SELF_ATTESTATION, not independent owner identity or hosted account-state verification. G1 owner-confirmation requirements SATISFIED_BY_ATTESTATION; formal governance acceptance PENDING_OWNER_REVIEW. No G1 execution permission or production acceptance follows. G2/G3/G4 BLOCKED; hosted probe authorized=false,executed=false; all3PRINCIPAL observations/R01-R08/OR01-10NOT_RUN; N12 and historical independent runtime restrictions BLOCKED; legacy privilege acceptance SKIPPED. SESSION/gateway/packaging/transport/reconciliation/hosted/pilot/release pending.

Keep26October UNKNOWN fixture record,3November reconciliation and13November Task79 matrix/source unchanged. New dated report/JSON are an addendum with exact source hashes, never mutation of history. No private account data, identifiers, secrets or raw Auth evidence. Task63 E1-E5 methods/paths/query,3cases,7run keys/27closed case fields,32requests including internal+cleanup,15seconds/request,300seconds/run, frozenSDK and local cleanup unchanged. No executable probe, runner, sanitizer, network/Auth/SQL operation.

Update only the current leading state entry, retaining all standing historical sections/research references and<11000bytes. Record PR139/main62be53c/tree33c401/postmain43480503038 verified and PR137 superseded closed/unmerged. Task79 remains immutable historical source; G1 current attestation not retroactive approval. Exact allowlist frozen in Task. Commit inputs, full-render validated immutableCP before operative edits. New EB/per-commit manifest, actual document/source assertions and existing regressions/build/typecheck/fullDraftReadyCI with existing approved disposable fixtures. Distinct final-head source review; no merge or successor work. Preserve all actual failed/cancelled/skipped/blocked attempts; no independent-runtimePASS claim.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0080/SOURCE-REFERENCES.json` @ `c74b5768b2c9aef7c9efa317cdab275b2ca60faf`

~~~~~~markdown
{
  "base": "62be53c401b8c7405590c307559f921ec7d71a83",
  "tree": "33c401e9b9f17e4d4a03879082bca2bf0492ae8e",
  "record_date": "2026-11-13",
  "owner_relay": "https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6865763794",
  "prior_integration": "https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6861310422",
  "prior_closure": "https://github.com/Ben-001-sys/Vellistry/pull/137#issuecomment-6865222300",
  "sources": [
    {
      "path": "PROJECT-CONSTITUTION.md",
      "commit": "62be53c401b8c7405590c307559f921ec7d71a83",
      "blob": "61f79c4dcb47bd99291c16490e8c00692e2ab23b",
      "sha256": "ea17eba04dc5027dcca3e6f696260e3837248bbfb14bb3a2a87e7df1c479ec9e"
    },
    {
      "path": "AGENTS.md",
      "commit": "62be53c401b8c7405590c307559f921ec7d71a83",
      "blob": "3058d51c0e15db54d6271ecbcffcfeb0aaf54e6f",
      "sha256": "619a9989a8d7d4d50c087ecb903308c57119f295671480d3cb6e23b5cac0f2c8"
    },
    {
      "path": "CURRENT-STATE.md",
      "commit": "62be53c401b8c7405590c307559f921ec7d71a83",
      "blob": "f3b465b95b4731debd25e670bd5b54005a7f9a78",
      "sha256": "d47908c2dca01331497abda14be76b66044ef216f909d8f8fce48f9247bc68df"
    },
    {
      "path": "SOURCE-OF-TRUTH.md",
      "commit": "62be53c401b8c7405590c307559f921ec7d71a83",
      "blob": "50a3034f72727b141ae2c897b1c1424efcc332d5",
      "sha256": "530a26f2ccbcdbfa37614a79684ecbbf4788506af5936a0c25ad7d74efe5bacb"
    },
    {
      "path": "docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md",
      "commit": "62be53c401b8c7405590c307559f921ec7d71a83",
      "blob": "08b9a563fb79ebb91f20d0f84e0d752c1bb6709d",
      "sha256": "fdd3d879dbef08e2e8f37b84859e29cdfa8e98467cf295085245ed417c0b2b16"
    },
    {
      "path": "docs/agent-workflow/README.md",
      "commit": "62be53c401b8c7405590c307559f921ec7d71a83",
      "blob": "ac8ece613b6ca4bb977af4cedcf2bd6f7c16cbf3",
      "sha256": "3b31721a0403877534afcd8d4a5e95c8b43675ebd0ae325f6a9781561200652f"
    },
    {
      "path": "docs/agent-workflow/PR-COMPLIANCE.md",
      "commit": "62be53c401b8c7405590c307559f921ec7d71a83",
      "blob": "5f4845623aef3abb15fba7fbe8e78474902cca00",
      "sha256": "3ce6deae856b0d272b199bf8cc48ed2ad198f64293c05bb14715c013e3da0b1e"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0063/FIXTURE-STATUS.json",
      "commit": "62be53c401b8c7405590c307559f921ec7d71a83",
      "blob": "8d103b65708c4527b2d9751e9e5582cd9833480a",
      "sha256": "13d8d1bd035eab3c6bfccd3109206570e7f70ed3265fffd78ebb289ec1ddb18c"
    },
    {
      "path": "docs/reports/VEL-OWNER-PRINCIPAL-PROBE-PROTOCOL-0063.md",
      "commit": "62be53c401b8c7405590c307559f921ec7d71a83",
      "blob": "5eeda3b80818c0d5c0e0e2a0d2ba200fc0e74492",
      "sha256": "d8c4ef3d011476884c15f218dcdf538fb6198aefb63a3ac4b745eddfd92cfd67"
    },
    {
      "path": "docs/reports/VEL-PRINCIPAL-READINESS-0062.md",
      "commit": "62be53c401b8c7405590c307559f921ec7d71a83",
      "blob": "83c522e7c44326e2ed72185b98f8d0627f4b4fb8",
      "sha256": "77af1cf68858acd8b861fb783dfe4b6015ff32f95fe66aea5bee329f6f986cd1"
    },
    {
      "path": "docs/reports/VEL-PRINCIPAL-SESSION-NEW-MAIN-0079.md",
      "commit": "62be53c401b8c7405590c307559f921ec7d71a83",
      "blob": "3c5995d9ee56299f26beace38e2b609b5f5397fc",
      "sha256": "f195e1b8ec19557940461c6c8277ec084bfc4adc88cb967fd03b2a6f9043b189"
    },
    {
      "path": "docs/agent-workflow/proposals/VEL-PRINCIPAL-SESSION-READINESS-0079.json",
      "commit": "62be53c401b8c7405590c307559f921ec7d71a83",
      "blob": "041db848fe2551f0bf3d49e4ac69d20b3b4f731e",
      "sha256": "baa55212f5c543d35c37f2badb883df92b905da4e6fbcd5b26f4f119de4127cc"
    },
    {
      "path": "docs/agent-workflow/tasks/VEL-TASK-0079.yaml",
      "commit": "62be53c401b8c7405590c307559f921ec7d71a83",
      "blob": "6566e0e20b6799b1e89a2d25db7ddf5677d8d679",
      "sha256": "47cdacfc6e3728e2b28911065029988855ff6bcae29d25f59bfa62394aeadaf5"
    },
    {
      "path": "docs/agent-workflow/context-packs/VEL-CP-0079.md",
      "commit": "62be53c401b8c7405590c307559f921ec7d71a83",
      "blob": "c7980b6bf49feaf031795fc605327f0c26e0a171",
      "sha256": "0ba1af27fc3861e0e3eb3343df55aaf66a79eb7978ff24c7441a3b91d3407b83"
    },
    {
      "path": "docs/agent-workflow/execution-bundles/VEL-EB-0079.md",
      "commit": "62be53c401b8c7405590c307559f921ec7d71a83",
      "blob": "e5f5e718d3d3d116061dbc1cf4aa001e22ab80d8",
      "sha256": "542d0cc878ef972d5668cf1502a12639e8391816b38e00543896a995c131d04a"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0079/SOURCE-REFERENCES.json",
      "commit": "62be53c401b8c7405590c307559f921ec7d71a83",
      "blob": "a9065b237435e8b0482cf076a11a5dd51020f407",
      "sha256": "61886047a99c9df13f52231569a117187887763bcecc7dcdb9f6ac51376a61e7"
    },
    {
      "path": "docs/agent-workflow/tasks/VEL-TASK-0077.yaml",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "62a0ab35875c443a91916d5654f0b6cb3af13eb0",
      "sha256": "3a55708f4713071cc13018e75f631d0ccfec8e25bace9585ade7435324054203"
    },
    {
      "path": "docs/agent-workflow/context-packs/VEL-CP-0077.md",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "6ae5fb48c0aaa4d3c85a2492a62f7269b112e4a0",
      "sha256": "a0219052e2c93afce1a5cd766fb755666c9c9ad8a85fa481c796c4e8f84aaf9f"
    },
    {
      "path": "docs/agent-workflow/execution-bundles/VEL-EB-0077.md",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "72cfd80ce790086a449aaa53334c230fa9174a82",
      "sha256": "aa55c8709edbc7ddf7aff5762621e4d35f5d01930b5d0747965d4a93cc0fd9b7"
    }
  ],
  "authority_note": "Hashes authenticate repository bytes, not factual truth or owner identity. All prior statuses remain historical; current owner statement is separate self-attestation."
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0080/UNIQUENESS.json` @ `edc3bb2022288bff29d6fbdb321dafda051db960`

~~~~~~markdown
{
  "date": "2026-11-13",
  "worktrees_checked": 77,
  "worktree_artifact_hits": [],
  "all_ref_task_pack_bundle_history": "",
  "commit_subject_hits": "",
  "refs_count": 228,
  "main": "62be53c401b8c7405590c307559f921ec7d71a83"
}
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.

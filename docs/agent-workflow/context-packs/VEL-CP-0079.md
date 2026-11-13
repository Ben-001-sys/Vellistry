---
id: VEL-CP-0079
title: 'Context for VEL-TASK-0079: Adopt PRINCIPAL SESSION readiness on verified new
  main'
type: context-pack
status: prepared
created_at: '2026-11-13'
version: 0.1.0
task_id: VEL-TASK-0079
base_commit: 2b5931b51f64da76870b89ac4e711d960c427594
task_blob_sha: 6566e0e20b6799b1e89a2d25db7ddf5677d8d679
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
- path: docs/agent-workflow/inputs/VEL-TASK-0079/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: 7f6c39f0e5435611efd623f0c7fe9f7ee296a7ab
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0079/CONTRACT.md
  role: governing-source
  git_blob_sha: f4950d10f0975339ff28f3fbe1a17878be117281
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0079/SOURCE-REFERENCES.json
  role: governing-source
  git_blob_sha: a9065b237435e8b0482cf076a11a5dd51020f407
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0079/SOURCE-REPORT.md
  role: governing-source
  git_blob_sha: aa825ea7b3da1140f3fa8e394af7249c4e5b0bcd
  source_status: proposed-for-review
- path: docs/agent-workflow/inputs/VEL-TASK-0079/SOURCE-MATRIX.json
  role: governing-source
  git_blob_sha: 464faf9df721fcb05c7a275f6f4b72b04bc47ce2
  source_status: unrecorded
source_gaps:
- id: FIXTURES-UNKNOWN
  limitation: Three fixture conditions remain UNKNOWN; no fresh owner fixture confirmation
    or target evidence.
- id: SECURITY-BLOCKED
  limitation: G1-G4 N12 independent runtime restrictions BLOCKED; hosted cases R01-R08
    OR01-OR10 NOT_RUN; legacy privileges SKIPPED.
- id: SOURCE-ATTRIBUTION
  limitation: Renamed reconstruction is not a patch-identical original commit adoption.
    Preserve exact source blobs/author and old evidence; no invented original execution.
prepared_by: agent_workflow.py
---

# VEL-CP-0079 — Adopt PRINCIPAL SESSION readiness on verified new main

## Objective
Reconstruct separately named non-executable Task0077 readiness artifacts against PR138 main, preserving immutable historical sources and all security blockers

## Scope
**In:** CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0079.yaml; docs/agent-workflow/context-packs/VEL-CP-0079.md; docs/agent-workflow/execution-bundles/VEL-EB-0079.md; docs/agent-workflow/inputs/VEL-TASK-0079/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/agent-workflow/proposals/VEL-PRINCIPAL-SESSION-READINESS-0079.json; docs/reports/VEL-PRINCIPAL-SESSION-NEW-MAIN-0079.md; docs/reports/evidence/VEL-TASK-0079/*
**Out:** Application/Auth/SQL/test/CI/dependency/evaluator/loader/policy changes; Hosted/private accounts/credentials/JWT/JWKS/manuscripts, deployments, merges, PR137 edits or successor work

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- FIXTURES-UNKNOWN: Three fixture conditions remain UNKNOWN; no fresh owner fixture confirmation or target evidence.
- SECURITY-BLOCKED: G1-G4 N12 independent runtime restrictions BLOCKED; hosted cases R01-R08 OR01-OR10 NOT_RUN; legacy privileges SKIPPED.
- SOURCE-ATTRIBUTION: Renamed reconstruction is not a patch-identical original commit adoption. Preserve exact source blobs/author and old evidence; no invented original execution.

## Permissions and acceptance
**Allowed:** Author bounded docs/governance after committed validated CP, Run existing offline suites and existing disposable GitHub CI fixtures; source/hash/schema assertions, New Draft then Ready PR with independent review; no merges or original PR137 alteration
**Owner approval required:** Any code/test/CI/SQL/Auth/dependency/policy/security/hosted/tooling change, merge, PR137 disposition or successor work
**Acceptance criteria:**
- Original PR137/head Task77/CP77/EB77 and Task78 repair unchanged
- New matrix equal to original substantive protocol/security/session/runner conclusions; metadata changes explicitly attributed
- No operative changes; trusted-base compliance PASS; original FAIL/BLOCKED/NOT_RUN/SKIPPED preserved
- Actual required new-main Ready CI including recovery12 Chromium41 PG17 32+16+8 restart cleanup and final gate; distinct exact-head review; owner merge pending

## Deliverables
- New 0079 report/matrix, full original-source hash inventory and preserved historical snapshots
- Full-render CP, EB, source-bound manifest, actual regressions, distinct review, Draft/Ready CI and unmerged new PR

## Pinned source snapshots
Git commit: `2b5931b51f64da76870b89ac4e711d960c427594`. Read source statuses independently from task intent.

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

### `docs/agent-workflow/inputs/VEL-TASK-0079/OWNER-SCOPE.md` @ `7f6c39f0e5435611efd623f0c7fe9f7ee296a7ab`

~~~~~~markdown
Owner instruction relayed from this Codex conversation on 2026-11-13: **Approve and dispatch Task0079** (explicit answer to the proposed-dispatch question). This is a new bounded repository-only governance/documentation adoption of Task0077 against reviewed main `c5f324e78d05f2f9afde91e6f58970de021fffb6`. Verify Task0079 uniqueness; commit governing inputs and validated immutable pack before adoption; preserve original PR137/head34048b2, Task77/CP77/EB77, original failure42777271966, and Task78 repair. Create separately named non-executable readiness artifacts with exact source/blob provenance; never claim reconstructed content has identical adopted commit patch identity. New EB, distinct completed-head review, actual Draft/Ready full existing CI and new unmerged PR required. Existing disposable GitHub CI fixtures only are authorized. Keep PR137 Draft and unchanged; no merge or closure. All fixtures UNKNOWN; G1-G4/N12/runtime restrictions BLOCKED; hosted cases/R01-R08/OR01-10 NOT_RUN. No hosted Auth/Supabase/JWKS/SQL, secrets/private accounts, production policy, CI/evaluator/dependency/application change, deployment or successor work. Issues108/131 stay OPEN; expired remediation authority stays expired.

This relay records the owner dispatch; Codex is not independently approving permissions. See the linked source packet and historical prerequisite integration: https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6848773429

Authorization evidence: https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6849146195
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0079/CONTRACT.md` @ `f4950d10f0975339ff28f3fbe1a17878be117281`

~~~~~~markdown
# Task0079 bounded new-main adoption

FACT: dispatched by owner on 2026-11-13. Scope is non-executable documentation/governance only. Base c5f324e78d05f2f9afde91e6f58970de021fffb6 contains PR138 repair. Source snapshots SOURCE-REPORT.md and SOURCE-MATRIX.json are exact original PR137 bytes; references inventory all original paths. Never reinterpret original evidence as new execution.

Create separately named 0079 report/matrix plus evidence, preserving full original matrix semantics and protocol0063 hash, endpoints, closed export fields, request/time/sanitization/cleanup restrictions. Update reconciliation metadata only, retaining original record date and null owner confirmation. Any new CI evidence must be labelled by exact new source/head. Historical42777271966 remains FAIL and Draft remains advisory. All3fixturesUNKNOWN; G1-G4/N12/EPERM BLOCKED; hosted3cases/R01-R08/OR01-10 NOT_RUN; legacy privilege SKIPPED. No runtime/runner/sanitizer or production gate acceptance.

No whole commit is adopted: renamed artifacts have different patches. All new commits truthfully declare original Codex reconstruction with exact content/source attribution. Do not declare adopted origin unless original patch identity and ancestry requirements actually hold. Preserve old Task77/CP77/EB77/PR137 untouched; no untracked owner work touched. Per-commit manifest binds this task and source. No SQL/code/CI/dependency/protected policy/Auth change.

Required evidence: full-render CP validation, source/blob/semantic/document assertions, principal/MFA/Library/preflight/workspace/persistence units, build/typecheck, full governance, trusted-base evaluator, distinct final-head review and actual Draft/Ready full existing CI. Existing disposable runner-owned fixtures may run; no new hosted permission. Ready must prove12recovery/41Chromium/32PG17+16manuscript+8HTTP/restartcleanup and final gate. No merge/closure/successor authority. Issues108/131 OPEN.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0079/SOURCE-REFERENCES.json` @ `a9065b237435e8b0482cf076a11a5dd51020f407`

~~~~~~markdown
{
  "record_date": "2026-11-13",
  "base": "c5f324e78d05f2f9afde91e6f58970de021fffb6",
  "original_pr": 137,
  "original_head": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
  "original_tree": "0594e860a2ff98b237ac36d0f6ec5d0dcdfc1b86",
  "original_source": "809f6034b52a983d3273b42c7a042b1791a9cce3",
  "original_pack_commit": "f86ec72f309c290aa6669a7b4521ee4890201d5c",
  "original_failed_ready": 42777271966,
  "pr138_post_main": 43397610863,
  "sources": [
    {
      "path": "CURRENT-STATE.md",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "ea273732f31b749d20e43994d68eb85ecbcf9cc4",
      "sha256": "61c2ecdcbf2e73ad636f589d99e5b41ae6c49fd2e9b40330c16c25d08a2eb4cd"
    },
    {
      "path": "docs/agent-workflow/PR-COMPLIANCE.yaml",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "7433994c588dbb679582b88d68fc24503e3598f7",
      "sha256": "2bffcdb879ffe5426ad4d78d84201169a4beef03c29fdc147454ea1a938212d7"
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
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0077/CONTRACT.md",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "13249081981edcd00a85282213fc3a73387c7079",
      "sha256": "b01db546d4f52f929cff8d4f402922b713ffb78f81bfb98fc396002bdb7f42d9"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0077/OWNER-SCOPE.md",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "2ebee8bf37fcc69c2e063ef0b728e0c101d9c4de",
      "sha256": "07c86883a55d8ff282406a41c9eb7ffa2731397dc7e3afb5dd6906c1fb54d0bf"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0077/SOURCE-REFERENCES.json",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "a59ed5b55c0dfbb8772a79f954b13d16bd8f8f9f",
      "sha256": "70099d322f7e0eced0d55bb33b1ebad4a433af227ffea8375a83865b77b78fc4"
    },
    {
      "path": "docs/agent-workflow/proposals/VEL-PRINCIPAL-SESSION-READINESS-0077.json",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "464faf9df721fcb05c7a275f6f4b72b04bc47ce2",
      "sha256": "7bfda907f7a6601c4ff48acc3d687d523aeedda5d5a06365a7ec1519b4bd7e3e"
    },
    {
      "path": "docs/agent-workflow/tasks/VEL-TASK-0077.yaml",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "62a0ab35875c443a91916d5654f0b6cb3af13eb0",
      "sha256": "3a55708f4713071cc13018e75f631d0ccfec8e25bace9585ade7435324054203"
    },
    {
      "path": "docs/reports/VEL-PRINCIPAL-SESSION-EVIDENCE-READINESS-0077.md",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "aa825ea7b3da1140f3fa8e394af7249c4e5b0bcd",
      "sha256": "bffdbe637eb1945161120f207fc14f8f55d5cd12d9efed6febcd857c69e0d1de"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0077/CI-EXECUTION-CLARIFICATION.md",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "698bd94a00e3d7b4e63259a9ce8e9e7521374e25",
      "sha256": "7c6ecbe69afc593c51371d4586565818c4a9e61712baf4b9046fe3c68a35504a"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0077/build.txt",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "c8d285442b1df03807ec8004b15dcffb2a17331b",
      "sha256": "28f2c4fd7fad425289a85467af19af258a5514988cc6595f054aadc64f361ca5"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0077/check.txt",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "7d076e24c11e71e953a1949dfccdef698026ecb2",
      "sha256": "f8b4846a0dc61d439d422d9e1e7a846a1d65fb13ff7f8f8d0fb3b48a9fe7b278"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0077/document-assertions-source.txt",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "0047f5a83775d97f09d050be11f8586898232992",
      "sha256": "712ea9946101eb89cfa072b5e1728ec9f6e459decbaa2ad08ebce14deecb6a6f"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0077/document-assertions.json",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "9b69f545c535d3a361e434e98ded1a28967050d0",
      "sha256": "83f59bce27e30bdefbce10163fc291bf075114cf6396831f1b88c4ed82bc0961"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0077/fixture-status.json",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "fb0711704859d75ff6caad16826e37cc31cb7f7c",
      "sha256": "900c625a1c8fa0968dd2c70900bce47034f5f0661cfe3d51fd104324d80bff18"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0077/frozen.txt",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "dcf45c3fd7bcc9336cdaa027b12c55fac2544f40",
      "sha256": "9a7b27d9e034b65f2b246dde2e046183687c61fd36ba202bc20b6d2b1132749d"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0077/inherited-main-evidence.json",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "3c99ea1b125211316b141003519e093f1a6da614",
      "sha256": "b78d84b283b98d93ba1da785771263e94762f22f9c3790cbe075e9ca8982d921"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0077/library.txt",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "8b93413a76e0941d90add3ec65b02bd2ec8633ee",
      "sha256": "ccc75d4b36b05e3cad7ec6fcce84fbf0cbefe3f0d1fa80be106d350692ae54e6"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0077/metadata.txt",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "940063efd38b84b7a3e5cfb25516a95a215b732c",
      "sha256": "4423d0179232fe933d37cd2f42bc585e490f89273e3f9054d82879f81e4b06a5"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0077/mfa.txt",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "f5e2b6aa2af33ef80d516a2bdff50132505a5542",
      "sha256": "d1f9009548534263a7663381739c891805dab3e9bea52313ddf08d3df0676b0d"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0077/preflight.txt",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "6c78f0ff6b4ad53dc2c1a6bd52998c21f442a33d",
      "sha256": "dd2a6913e6d8d993c3e50167840228b6afacd52902db5f296faa4e7de190c124"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0077/principal.txt",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "450ef409d7901f688a127a2a1cc3559fe2447748",
      "sha256": "8205ee5c9d45f2fef5698d7d94c554ead441fdf548b57d8398bad73d7ad9913a"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0077/readiness.txt",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "e4080f22adfe2b711527a9c6187331802f24d4db",
      "sha256": "77a2897bb7f252e76ff34c9ea2686332d0fd6623eb4a8dfcef4fc4ef4ca5b6e2"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0077/summary.json",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "8c7c2bd8447f9e4f709a5ad245e4ac947ff2287c",
      "sha256": "2486a16463294791995abdf19c660aa4a00ac9692f38bb1cf9dafcf38768caf5"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0077/traceability.txt",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "77d029c339ddf26d849bc2fed09fcf59c7c96748",
      "sha256": "cc4bade326da114c0dcbc372071e1040f9d04129a29c864413316c7bf31218d8"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0077/units.txt",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "50e05627f62d72120f9231928e139bee63fbb0f2",
      "sha256": "b9b429fd3d41746b1419c44708b703161d0327e22267799542557c2cb86cb42b"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0077/workspace.txt",
      "commit": "34048b22473ae0b39dcfbefdedfc19b6f3c102e4",
      "blob": "525d6cb2362437152538b9ed9a03578f6a73e92e",
      "sha256": "0fc8ccc3e72a13f51e4dcd6d999b02de93689420fc7b62f4d97c7b0a816469e0"
    }
  ],
  "lineage": "New Codex reconstruction from explicitly attributed source blobs. No original commit replay/cherry-pick; no adopted-origin declaration because renamed/reconciled patch cannot equal original patch. Original snapshots are byte-exact task inputs, not new observations."
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0079/SOURCE-REPORT.md` @ `aa825ea7b3da1140f3fa8e394af7249c4e5b0bcd`

~~~~~~markdown
---
id: VEL-PRINCIPAL-SESSION-EVIDENCE-READINESS-0077
title: Offline PRINCIPAL and SESSION evidence readiness
type: implementation-report
status: proposed-for-review
created_at: 2026-11-03
owner: project_owner
version: 0.1.0
---

# Readiness result

FACT: **HOSTED_EXECUTION_BLOCKED**. This is a non-executable decision packet, not Auth findings, a live runner or security acceptance. Mainad5e723/PR136/post-main41534118617 verified. Task0077 sourcescc0bbf1 and full-render/source validated immutable CP0077f86ec72 precede these edits. Owner explicitly dispatched offline preparation; [relay](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6591664009) preserves its boundary. No credentials, private account/session/factor data, tokens, hosted request or implementation were obtained.

The [machine-readable matrix](../agent-workflow/proposals/VEL-PRINCIPAL-SESSION-READINESS-0077.json) is authoritative for the individual gate, observation and decision rows. It pins the unmodified0063 protocol SHA256/current Git source and original PR125 reviewed head; fixed origin, E1-E5 methods/paths/query,3case labels,7run fields/27case fields/closed values and32request/15second/5minute bounds are retained. Readiness metadata is NOT additional permitted export fields. It must never be sent as a fabricated sanitized observation. No SESSION or writable field is added to the0063 export schema.

# Fixture prerequisite record

FACT: new [record](evidence/VEL-TASK-0077/fixture-status.json), reconciled3November2026, reports **UNKNOWN / UNKNOWN / UNKNOWN**. Latest actual owner fixture response is26October2026; no new confirmation date or affirmative owner observation is invented. This date is reconciliation, not owner confirmation. Historical Task0063 record/pack remains byte-identical. A pending request asks only3YES/NO/UNKNOWN and date, no identifiers or private evidence.

F1: existing owner-controlled synthetic author without verified enrolled MFA — UNKNOWN.
F2: existing owner-controlled synthetic author with existing verified TOTP — UNKNOWN.
F3: ability to obtain enrolled author's AAL1 and AAL2 observations — UNKNOWN.

Any NO/UNKNOWN blocks hosted work. The smallest owner action is a dated non-secret confirmation from existing trustworthy records. If a fixture is missing or cannot be confirmed without inspection, the owner must separately decide the precise inspection/provisioning scope; this task does not create or enroll it.

# Four gates

G1 BLOCKED: all3fixture confirmations missing; no lookup or substitute real account.
G2 BLOCKED: historical protocol/source review and PR125 integration are verified documentation evidence, not review/approval of a current executable. Pin exact future protocol/runner/sanitizer/environment/SDK commits and distinct review; owner acknowledges endpoints, limits, stop/redaction/local cleanup. No current executable approval or fresh execution exists.
G3 BLOCKED: owner environment checklist is unconfirmed. Private isolated memory-only credentials/tokens and frozen client; no agent access, debug/log/trace/HAR/telemetry/history/clipboard/browser persistence or privileged key. Do not request proof through screenshots/secrets. No cryptographic zeroization guarantee.
G4 BLOCKED: no runner/sanitizer implementation or runtime tests. OR01-OR10 specify offline-only acceptance requirements; all NOT_RUN. Existing52principal tests are application synthetic identity tests, not sanitizer or network-guard acceptance. Green documents/CI cannot promote G4.

# PRINCIPAL case-specific readiness

UNENROLLED_AAL1 — BLOCKED, observation NOT_RUN: require confirmed unenrolled own fixture, same immutable explicit token user/claims results and matching subject, strict session shape/expiry/iat/optionalnbf/freshness; fixed candidate issuer/audience/role/anonymous/AAL observations only within closed output. An observed ZERO verified-factor bucket does not establish authoritative complete absence; preserve factors-field/schema/completeness and owner-ground-truth distinction.

ENROLLED_AAL1 — BLOCKED, observation NOT_RUN: require confirmed existing verified TOTP fixture before step-up. Record same-token outcomes, AAL1 and factor visibility/shape/verified-presence bucket. A provider denial under15minute restriction is BLOCKED/UNKNOWN, not permission to disable it, enroll another factor or retry until accepted. Never infer unenrolled state from missing/empty factors or AAL1.

ENROLLED_AAL2 — BLOCKED, observation NOT_RUN: require existing owned TOTP, one permitted challenge/verify and a new captured immutable case token after owner step-up. Same-token pair/subject/session/temporal checks and aggregate factor visibility apply separately; never replace or relabel the AAL1 case. No OTP/factor/challenge/session identity export.

All3cases separately require auth_user_ok/sdk_claims_ok/user_subject_match, exact captured-token correlation, expiry/freshness and fixed errors/unavailability. No target issuer/audience/role, actual signing algorithm/path or factor semantics is inferred from synthetic values. Conditional design allows AAL1 only with authoritative known no-verified-factor state and requires AAL2 for enrolled authors; unknown completeness cannot become NONE. SDK listFactors/getAuthenticatorAssuranceLevel empty defaults and decoded AAL are not that proof.

Minimum AUTH_SERVER_BACKED requires both fixed-server same-token user and SDK claims success; sdk_claim_path remains UNKNOWN unless separately established, not inferred from header/JWKS fetch. Current ECC P256 versus previous HS256 is owner-observed settings evidence only; no concrete production current/legacy assurance is accepted here.0063 rejects non-ES256 samples before verification, never experiments with legacy. Exp-iat is observed duration, not configured JWT lifetime;30000ms proof freshness is separate. Success is not writable-session authorization.

# SESSION authority and unresolved decisions

S01 JWT/session distinction: historical real-local K2A17/K2B9 evidence atf9448df3e619614d9d6956247b985cf15313b187/[37993494329](https://github.com/Ben-001-sys/Vellistry/actions/runs/37993494329) observed local signout oldJWT PostgREST rows1, Nest401 and same-user synthetic book readable. This is residual bearer access, not cross-author leakage, and not observed hosted behavior. Do not claim getUser always accepts or rejects every revoked token.

S02 linkage: synthetic principal pins and session-row tests show local contracts, not target row/user ownership or least-privilege grants. Current target schema/source visibility remains unverified; no auth.sessions query now.
S03 logout scopes: historical primary refresh revoked, other same-user session and unrelated author remained usable; global then-current refresh revoked. Not every global post-logout/private-data/expiry case was established.0063 permits only local cleanup, never a new global probe.
S04 API boundary: direct PostgREST may retain an allowed bearer path even if Nest denies; server-only UI routing is not enough. Existing direct manuscript DML restrictions do not prove immediate read revocation or gateway security.
S05 row authority: existing local active-session-row research and disposable synthetic locks are evidence only. Never transplant NOLOGIN/UPDATE(id) helper privileges or expose auth.sessions; target semantics/grants remain pending.
S06 races: Auth lookup before transaction hasTOCTOU. Refresh, revocation, MFA/enrollment and deadline changes can interleave. Owner must choose guarantee and linearization, session-then-book lock order, timeout/deadlock/rollback/retry and any mirrored-registry authority/recovery.
S07 deadlines: JWTexp, proof freshness, inactivity and max session lifetime are separate.3600seconds remains a recommendation, not target configuration.
S08 failures: missing/revoked/unavailable/foreign/expired sessions cannot acquire writable authority from valid identity; no service-role or unverifiable fallback.
S09 transaction: actual disposable CAS/revision/journal/rollback/restart tests do not approve production SESSION/GATEWAY/PACKAGING/TRANSPORT. Session/user/deadline/ownership and revocation guarantee must hold at the protected transaction boundary; N12 remains BLOCKED. Source evidence and precise next owner decision are separate for all9matrix rows.

# Offline runner and sanitizer readiness

OR01-OR10 in JSON specify future tests, all NOT_RUN: exact endpoint/method/query/redirect default denial; hidden SDK traffic and retry budgets; immutable same-token snapshots; closed scalar schema; nested/error/URL/header redaction canaries and no fingerprints; temporal/path/factor uncertainty; bounded timers and total32requests including cleanup; newly owned LOCAL-only cleanup; no disk/history/telemetry capture; no gate promotion or output sharing before owner review. Cleanup budget must fit the existing total request/time limits and be reviewed before login, not be extra authority after a limit is reached.

No live runner, endpoint guard, sanitizer or new synthetic policy layer is implemented. A future owner-only executable needs its own explicit scoped Task, immutable CP and exact reviewed sources, offline tests, G1-G4 evidence and access authorization before ANY network. This does not expand the conditional0063 endpoint scope or permit agents to operate Auth. Even sanitized samples cannot establish authoritative factor completeness without a separately reviewed provider contract.

# Verification and permissions

Actual existing offline suites/build/check and document/source assertions are recorded in EB0077. Repository-only changes preserve all application/Auth/SQL/CI/dependency/fixture code. Mainad5e723 full post-main41534118617 actual browser41/443governance/PG/security evidence may be reused only with byte-identity proof and its original source/date; it is not new Task0077 browser or hosted acceptance. No target account/Auth operation is performed by agents. The unchanged classifier conservatively selects full application/security for the matrix JSON. The owner separately clarified permission for ONLY existing disposable loopback CI users/sessions/SQL; see [execution clarification](evidence/VEL-TASK-0077/CI-EXECUTION-CLARIFICATION.md). No CI or path-scope change and no CP rewrite. Disposable CI fixtures do not satisfy targetG1 or establish hosted observations. Actual selected job outcomes must be reported, never assumed or skipped. Distinct exact-head source review and actual Draft/Ready results go in the PR ledger. Owner merge remains separate.

PRINCIPAL design conditionally approved; target trust/implementation pending. SESSION/GATEWAY/PACKAGING/RECONCILIATION/TRANSPORT remain OWNER_DECISION_PENDING. R01-R08 NOT_RUN; N12/historical EPERM BLOCKED; legacy privileges SKIPPED. No production gates promoted. Issues108/131 OPEN; remediation delegation EXPIRED.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0079/SOURCE-MATRIX.json` @ `464faf9df721fcb05c7a275f6f4b72b04bc47ce2`

~~~~~~markdown
{
  "id": "VEL-PRINCIPAL-SESSION-READINESS-0077",
  "kind": "NON_EXECUTABLE_READINESS_MATRIX_NOT_FINDINGS",
  "date": "2026-11-03",
  "source_commit": "ad5e723aa746f695da547a1feefd950801e324ab",
  "authorization": "https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6591664009",
  "protocol_reference": {
    "id": "VEL-OWNER-PRINCIPAL-PROBE-0063",
    "path": "docs/reports/VEL-OWNER-PRINCIPAL-PROBE-PROTOCOL-0063.md",
    "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
    "sha256": "d8c4ef3d011476884c15f218dcdf538fb6198aefb63a3ac4b745eddfd92cfd67",
    "byte_identical_to_PR125_reviewed_head": "7713c01c253fb892688c1b3b265e7e34f22ad79b",
    "target_origin": "https://lflkcrnriitrbclangyr.supabase.co",
    "project_ref": "lflkcrnriitrbclangyr",
    "endpoints": [
      {
        "id": "E1",
        "method": "POST",
        "path": "/auth/v1/token",
        "query": "grant_type=password",
        "limit": "2owner fixture logins maximum; no retries or other grants"
      },
      {
        "id": "E2",
        "method": "GET",
        "path": "/auth/v1/user",
        "query": "none",
        "limit": "3explicit case calls plus bounded SDK-required internal fallback calls, all counted"
      },
      {
        "id": "E3",
        "method": "GET",
        "path": "/auth/v1/.well-known/jwks.json",
        "query": "none",
        "limit": "SDK-required only; no manual key fetch, raw key export or path inference"
      },
      {
        "id": "E4",
        "method": "POST",
        "path": "/auth/v1/factors/{existing_private_factor_id}/challenge and /auth/v1/factors/{same_existing_private_factor_id}/verify",
        "query": "none",
        "limit": "1challenge+1verify, existing privately known verified own TOTP only"
      },
      {
        "id": "E5",
        "method": "POST",
        "path": "/auth/v1/logout",
        "query": "scope=local",
        "limit": "Cleanup only; at most2newly created probe sessions; no default/global/others scope"
      }
    ],
    "request_bounds": {
      "total_max_including_internal_calls_and_cleanup": 32,
      "per_request_seconds": 15,
      "run_seconds_including_cleanup": 300
    },
    "export_run_keys": [
      "protocol_id",
      "protocol_reviewed_commit",
      "run_date",
      "project_ref",
      "fixtures_confirmed",
      "execution",
      "cleanup"
    ],
    "export_case_fields": {
      "status": [
        "NOT_RUN",
        "OBSERVED",
        "UNKNOWN",
        "BLOCKED"
      ],
      "error_class": [
        "NONE",
        "AUTH_DENIED",
        "UNAVAILABLE",
        "EXPIRED",
        "MALFORMED",
        "MISMATCH",
        "UNEXPECTED_ALGORITHM",
        "ENDPOINT_DENIED",
        "LIMIT_REACHED",
        "UNKNOWN"
      ],
      "same_token_calls": [
        "TRUE",
        "FALSE",
        "UNKNOWN"
      ],
      "auth_user_ok": [
        "TRUE",
        "FALSE",
        "UNKNOWN"
      ],
      "sdk_claims_ok": [
        "TRUE",
        "FALSE",
        "UNKNOWN"
      ],
      "user_subject_match": [
        "TRUE",
        "FALSE",
        "UNKNOWN"
      ],
      "temporal_shape_valid": [
        "TRUE",
        "FALSE",
        "UNKNOWN"
      ],
      "freshness_within_30000ms": [
        "TRUE",
        "FALSE",
        "UNKNOWN"
      ],
      "session_claim_shape": [
        "UUID",
        "MISSING",
        "INVALID",
        "UNKNOWN"
      ],
      "issuer_value": [
        "https://lflkcrnriitrbclangyr.supabase.co/auth/v1",
        "UNEXPECTED_REDACTED",
        "UNKNOWN"
      ],
      "audience_value": [
        "authenticated",
        "UNEXPECTED_REDACTED",
        "UNKNOWN"
      ],
      "audience_shape": [
        "STRING",
        "SINGLETON_ARRAY",
        "OTHER",
        "UNKNOWN"
      ],
      "role": [
        "authenticated",
        "anon",
        "service_role",
        "UNEXPECTED_REDACTED",
        "UNKNOWN"
      ],
      "anonymous": [
        "FALSE",
        "TRUE",
        "MISSING",
        "INVALID",
        "UNKNOWN"
      ],
      "aal": [
        "aal1",
        "aal2",
        "MISSING",
        "INVALID",
        "UNKNOWN"
      ],
      "alg": [
        "ES256",
        "HS256",
        "RS256",
        "OTHER_REDACTED",
        "MISSING",
        "UNKNOWN"
      ],
      "kid_present": [
        "YES",
        "NO",
        "UNKNOWN"
      ],
      "kid_matches_owner_confirmed_current": [
        "YES",
        "NO",
        "UNKNOWN"
      ],
      "observed_lifetime_seconds": [
        "safe integer1..86400",
        "OUT_OF_RANGE_REDACTED",
        "UNKNOWN"
      ],
      "optional_nbf": [
        "ABSENT",
        "VALID_PAST",
        "FUTURE",
        "INVALID",
        "UNKNOWN"
      ],
      "factors_field": [
        "ARRAY",
        "MISSING",
        "NULL",
        "MALFORMED",
        "UNAVAILABLE",
        "UNKNOWN"
      ],
      "factor_schema": [
        "RECOGNIZED",
        "UNRECOGNIZED",
        "UNKNOWN"
      ],
      "verified_factor_bucket": [
        "ZERO",
        "AT_LEAST_ONE",
        "UNKNOWN"
      ],
      "matches_owner_fixture_ground_truth": [
        "YES",
        "NO",
        "UNKNOWN"
      ],
      "factor_completeness": [
        "NOT_ESTABLISHED"
      ],
      "assurance_minimum": [
        "AUTH_SERVER_BACKED",
        "NOT_ESTABLISHED"
      ],
      "sdk_claim_path": [
        "UNKNOWN"
      ]
    },
    "case_labels": [
      "UNENROLLED_AAL1",
      "ENROLLED_AAL1",
      "ENROLLED_AAL2"
    ],
    "schema_extension_authorized": false
  },
  "fixtures": {
    "record_date": "2026-11-03",
    "owner_confirmation_date": null,
    "source": "New owner confirmation requested; no response received. Historical owner response26October2026 is the latest known fixture evidence, not fresh confirmation.",
    "historical_source": "docs/agent-workflow/inputs/VEL-TASK-0063/FIXTURE-STATUS.json",
    "historical_source_commit": "ad5e723aa746f695da547a1feefd950801e324ab",
    "historical_confirmation_date": "2026-10-26",
    "unenrolled_fixture_exists_and_owner_controlled": "UNKNOWN",
    "verified_totp_fixture_exists_and_owner_controlled": "UNKNOWN",
    "enrolled_fixture_aal1_aal2_obtainable": "UNKNOWN",
    "hosted_probe": "BLOCKED",
    "new_observations": false
  },
  "gates": [
    {
      "id": "G1",
      "status": "BLOCKED",
      "evidence": "All3fixture conditions UNKNOWN; no new owner answer or hosted lookup",
      "required": "Owner gives3dated YES/NO/UNKNOWN from existing trustworthy non-secret records; no identifiers. All3YES needed. NO/UNKNOWN keeps probe blocked; absent fixture needs new separate owner decision, not creation/enrollment."
    },
    {
      "id": "G2",
      "status": "BLOCKED",
      "evidence": "Protocol document reviewed/integrated PR125; exact bytes match historical7713c01 and currentbase. This is not executable pre-execution approval.",
      "required": "Distinct exact protocol/runner/sanitizer commit+hash review; owner acknowledgement of fixed endpoints/limits/redaction/stop/local cleanup, frozen SDK and environment. No executable exists here."
    },
    {
      "id": "G3",
      "status": "BLOCKED",
      "evidence": "Owner-controlled isolated execution environment not attested",
      "required": "Owner attests private memory-only credentials/case tokens, no agent access/logging/history/clipboard/screenshots/persistence/telemetry/crash or network traces; no public application session, privileged key or global logout."
    },
    {
      "id": "G4",
      "status": "BLOCKED",
      "evidence": "No exact runner/endpoint guard/sanitizer/cleanup implementation; runner-specific offline tests NOT_RUN",
      "required": "Future separately pinned tooling task and all specified offline positives/negatives pass, reviewed owner-local signout cleanup and manual sanitized-output audit. Document review or existing principal units cannot substitute."
    }
  ],
  "principal_cases": [
    {
      "label": "UNENROLLED_AAL1",
      "readiness": "BLOCKED",
      "observation_status": "NOT_RUN",
      "fixture_required": "Existing owner-controlled unenrolled synthetic fixture",
      "expected_aal_not_observed": "aal1",
      "factor_bucket_not_observed": "ZERO observation only",
      "required_observations": [
        "same_token_calls",
        "auth_user_ok",
        "sdk_claims_ok",
        "user_subject_match",
        "session_claim_shape",
        "issuer_value",
        "audience_value",
        "audience_shape",
        "role",
        "anonymous",
        "aal",
        "temporal_shape_valid",
        "observed_lifetime_seconds",
        "optional_nbf",
        "freshness_within_30000ms",
        "factors_field",
        "factor_schema",
        "verified_factor_bucket",
        "matches_owner_fixture_ground_truth",
        "factor_completeness",
        "alg",
        "kid_present",
        "kid_matches_owner_confirmed_current",
        "assurance_minimum",
        "sdk_claim_path",
        "error_class"
      ],
      "non_inferences": [
        "No empty factors=>authoritative NONE",
        "No AAL=>factor enrollment proof",
        "No getUser/getClaims=>active writable session",
        "No header/fetch=>SDK cryptographic path",
        "No observed exp-iat=>configured lifetime",
        "No candidate issuer/audience/role=>approved production value"
      ],
      "stop": "Missing fixture, unsupported state, provider denial, mismatched/expired/unavailable evidence or unexpected algorithm/endpoint stops measurement; only previously reviewed scoped cleanup may follow. Never enroll, weaken15minute restriction or probe legacy."
    },
    {
      "label": "ENROLLED_AAL1",
      "readiness": "BLOCKED",
      "observation_status": "NOT_RUN",
      "fixture_required": "Existing owner-controlled verified-TOTP fixture before step-up",
      "expected_aal_not_observed": "aal1",
      "factor_bucket_not_observed": "AT_LEAST_ONE expected only from owner ground truth",
      "required_observations": [
        "same_token_calls",
        "auth_user_ok",
        "sdk_claims_ok",
        "user_subject_match",
        "session_claim_shape",
        "issuer_value",
        "audience_value",
        "audience_shape",
        "role",
        "anonymous",
        "aal",
        "temporal_shape_valid",
        "observed_lifetime_seconds",
        "optional_nbf",
        "freshness_within_30000ms",
        "factors_field",
        "factor_schema",
        "verified_factor_bucket",
        "matches_owner_fixture_ground_truth",
        "factor_completeness",
        "alg",
        "kid_present",
        "kid_matches_owner_confirmed_current",
        "assurance_minimum",
        "sdk_claim_path",
        "error_class"
      ],
      "non_inferences": [
        "No empty factors=>authoritative NONE",
        "No AAL=>factor enrollment proof",
        "No getUser/getClaims=>active writable session",
        "No header/fetch=>SDK cryptographic path",
        "No observed exp-iat=>configured lifetime",
        "No candidate issuer/audience/role=>approved production value"
      ],
      "stop": "Missing fixture, unsupported state, provider denial, mismatched/expired/unavailable evidence or unexpected algorithm/endpoint stops measurement; only previously reviewed scoped cleanup may follow. Never enroll, weaken15minute restriction or probe legacy."
    },
    {
      "label": "ENROLLED_AAL2",
      "readiness": "BLOCKED",
      "observation_status": "NOT_RUN",
      "fixture_required": "Same existing enrolled fixture after one owner-operated TOTP challenge/verify; new captured immutable case token",
      "expected_aal_not_observed": "aal2",
      "factor_bucket_not_observed": "AT_LEAST_ONE expected only from owner ground truth",
      "required_observations": [
        "same_token_calls",
        "auth_user_ok",
        "sdk_claims_ok",
        "user_subject_match",
        "session_claim_shape",
        "issuer_value",
        "audience_value",
        "audience_shape",
        "role",
        "anonymous",
        "aal",
        "temporal_shape_valid",
        "observed_lifetime_seconds",
        "optional_nbf",
        "freshness_within_30000ms",
        "factors_field",
        "factor_schema",
        "verified_factor_bucket",
        "matches_owner_fixture_ground_truth",
        "factor_completeness",
        "alg",
        "kid_present",
        "kid_matches_owner_confirmed_current",
        "assurance_minimum",
        "sdk_claim_path",
        "error_class"
      ],
      "non_inferences": [
        "No empty factors=>authoritative NONE",
        "No AAL=>factor enrollment proof",
        "No getUser/getClaims=>active writable session",
        "No header/fetch=>SDK cryptographic path",
        "No observed exp-iat=>configured lifetime",
        "No candidate issuer/audience/role=>approved production value"
      ],
      "stop": "Missing fixture, unsupported state, provider denial, mismatched/expired/unavailable evidence or unexpected algorithm/endpoint stops measurement; only previously reviewed scoped cleanup may follow. Never enroll, weaken15minute restriction or probe legacy."
    }
  ],
  "session": [
    {
      "id": "S01",
      "topic": "JWT validity versus session authority",
      "historical_or_synthetic_fact": "K2B historical oldJWT directPostgREST retained1synthetic own-book row after local signout while Nest401",
      "unresolved": "Cannot infer general target behavior or transaction-held session authority from either identity API",
      "separate_owner_action": "Owner chooses desired logout guarantee, not implemented here",
      "production_status": "BLOCKED",
      "target_observation": "NOT_RUN"
    },
    {
      "id": "S02",
      "topic": "Session/user ownership linkage",
      "historical_or_synthetic_fact": "Synthetic adapters bind author/session/expiry; disposable fixtures deny mismatches",
      "unresolved": "Target authoritative row schema, same-user linkage, effective privileges and caller visibility UNKNOWN",
      "separate_owner_action": "Separately authorized sanitized target metadata/access-channel evidence; no query here",
      "production_status": "BLOCKED",
      "target_observation": "NOT_RUN"
    },
    {
      "id": "S03",
      "topic": "Local and global signout",
      "historical_or_synthetic_fact": "Historical local signout revoked primary refresh; other synthetic same-user session and unrelated author remained usable. Global then-current refresh revoked",
      "unresolved": "No proof every previously issued token/global private-data route immediately denies; cleanup uses LOCAL only",
      "separate_owner_action": "Owner specifies session scope/guarantee before targeted separately authorized acceptance; global probe excluded from0063",
      "production_status": "BLOCKED",
      "target_observation": "NOT_RUN"
    },
    {
      "id": "S04",
      "topic": "Previously issued tokens/directPostgREST/Nest",
      "historical_or_synthetic_fact": "Historical exposure is retained same-user bearer access, not cross-author leakage; direct API and gateway differ",
      "unresolved": "Nest guard cannot close independently granted direct API path; existing manuscript DML restrictions are not read-revocation acceptance",
      "separate_owner_action": "Owner selects API exposure/gateway/RLS policy in separate security scope",
      "production_status": "BLOCKED",
      "target_observation": "NOT_RUN"
    },
    {
      "id": "S05",
      "topic": "Current session-row authority",
      "historical_or_synthetic_fact": "Existing local active-session-row research observes own row removal; disposable SQL fixture can serialize synthetic revocation",
      "unresolved": "Target auth.sessions existence/ownership/deadlines/role privileges and authoritative provider behavior not verified",
      "separate_owner_action": "Do not expose auth.sessions or transplant NOLOGIN/UPDATE(id) helper grants; require least-privilege review",
      "production_status": "BLOCKED",
      "target_observation": "NOT_RUN"
    },
    {
      "id": "S06",
      "topic": "Refresh/revocation races",
      "historical_or_synthetic_fact": "Disposable workspace sessions and locking tests are actual experiments; no real provider writable-session guarantee",
      "unresolved": "A pretransaction Auth call leavesTOCTOU; refresh/MFA/user/session changes may race expiry or logout",
      "separate_owner_action": "Owner defines linearization boundary/lock ordering/timeouts/rollback/retry and allowable concurrent revocation semantics",
      "production_status": "BLOCKED",
      "target_observation": "NOT_RUN"
    },
    {
      "id": "S07",
      "topic": "Expiry/inactivity/session deadlines",
      "historical_or_synthetic_fact": "Current proof freshness30000ms is tested; historical JWT expiry/inactivity target acceptance incomplete",
      "unresolved": "Tokenexp, evidence freshness, inactivity and maximum session lifetime are separate;3600s only recommendation",
      "separate_owner_action": "Owner supplies non-secret confirmed target/deadline policy under separate evidence scope",
      "production_status": "BLOCKED",
      "target_observation": "NOT_RUN"
    },
    {
      "id": "S08",
      "topic": "Missing/revoked/unavailable/mismatched sessions",
      "historical_or_synthetic_fact": "Synthetic tests fail closed on unverified/mismatched/expired principals",
      "unresolved": "Real provider outage/session absence is not proven by mocks; writable authority UNKNOWN must deny",
      "separate_owner_action": "Separate SESSION mechanism and failure contract; no service-role/offline fallback",
      "production_status": "BLOCKED",
      "target_observation": "NOT_RUN"
    },
    {
      "id": "S09",
      "topic": "Protected transaction boundary",
      "historical_or_synthetic_fact": "Disposable atomic CAS/journal/manuscript fixtures preserve author ownership, receipts and rollback",
      "unresolved": "Not production session enforcement or shipping gateway/role/migration packaging",
      "separate_owner_action": "N12 remains BLOCKED; actual separately authorized gateway/session race/recovery acceptance required",
      "production_status": "BLOCKED",
      "target_observation": "NOT_RUN"
    }
  ],
  "owner_environment_attestation": [
    {
      "condition": "Isolated owner-controlled environment, no agent/screen/credential access",
      "owner_confirmation": "UNKNOWN"
    },
    {
      "condition": "Existing fixtures only, no enrollment/account/settings changes",
      "owner_confirmation": "UNKNOWN"
    },
    {
      "condition": "Private in-memory inputs, frozen SDK2.117.3, no privileged credentials",
      "owner_confirmation": "UNKNOWN"
    },
    {
      "condition": "No persistence/auto-refresh/telemetry/history/clipboard/capture",
      "owner_confirmation": "UNKNOWN"
    },
    {
      "condition": "Reviewed default-deny transport, timers, total+cleanup budget",
      "owner_confirmation": "UNKNOWN"
    },
    {
      "condition": "Reviewed local-only new-owned-session cleanup and owner manual sanitized audit",
      "owner_confirmation": "UNKNOWN"
    }
  ],
  "future_runner_offline_requirements": [
    {
      "id": "OR01",
      "area": "Endpoint guard",
      "requirement": "Exact fixed HTTPSorigin and E1-E5 method/path/query; reject unknown origin/custom domain/port/userinfo/redirect/dot segments/encoded path/query duplicates/admin/list/PostgREST/storage/refresh/enroll/global logout before dispatch",
      "status": "NOT_RUN"
    },
    {
      "id": "OR02",
      "area": "Hidden SDK traffic",
      "requirement": "Inject transport only; initialization/retries/fallback counts bounded, no unapproved refresh/session/list endpoints; no real client or network in offline acceptance",
      "status": "NOT_RUN"
    },
    {
      "id": "OR03",
      "area": "Same-token snapshots",
      "requirement": "Immutable explicit case token to user/claims, canonical subject matching, out-of-order/concurrent responses; new AAL2 token starts new case, never switches prior case",
      "status": "NOT_RUN"
    },
    {
      "id": "OR04",
      "area": "Output schema",
      "requirement": "Exactly7run keys/3case labels/27case fields with listed closed scalar values; unknown/nested/free-text/accessor/inherited keys rejected, no raw object copy or implicit observed values",
      "status": "NOT_RUN"
    },
    {
      "id": "OR05",
      "area": "Forbidden material",
      "requirement": "Synthetic canaries in arbitrary SDK/user/factor/header/URL/error/stack/metadata nested paths cannot escape; no raw token/password/OTP/key/IDs/fingerprints/body, even from synthetic fixtures; fixed error categories",
      "status": "NOT_RUN"
    },
    {
      "id": "OR06",
      "area": "Temporal and assurance",
      "requirement": "Timeout/expiry/clock reversal/stale30000ms evidence denies; no claim that decoded header/fetch means crypto path; unknown path remains UNKNOWN; missing factors never inferred NONE",
      "status": "NOT_RUN"
    },
    {
      "id": "OR07",
      "area": "Budgets and stop",
      "requirement": "2logins/3user/3claims/1challenge/1verify/2local-cleanup,32total outbound including retries and cleanup;15s/request/5minrun; reserve cleanup budget within bounds, exact owner review required",
      "status": "NOT_RUN"
    },
    {
      "id": "OR08",
      "area": "Owned cleanup",
      "requirement": "Only newly created own probe sessions, local signout scope, idempotent disposal/timeout cleanup; never global/others/admin/escalated retry; failed/unconfirmable cleanup BLOCKED and no further measurement",
      "status": "NOT_RUN"
    },
    {
      "id": "OR09",
      "area": "No persistence/telemetry",
      "requirement": "No shell arguments/history/.env/clipboard/storage/HAR/trace/screenshots/log/crash/telemetry payload retention; process exit and reference disposal are not guaranteed cryptographic zeroization",
      "status": "NOT_RUN"
    },
    {
      "id": "OR10",
      "area": "No premature gating",
      "requirement": "AnyG1-G4unsatisfied,missing fixture/schema/sanitizer failure denies before network; NOT_RUN template not findings; no production writable/accepted flag; owner manual sanitized audit before sharing",
      "status": "NOT_RUN"
    }
  ],
  "production_decisions": {
    "PRINCIPAL": "DESIGN_APPROVED_CONDITIONAL; TARGET_TRUST_AND_IMPLEMENTATION_PENDING",
    "SESSION": "OWNER_DECISION_PENDING",
    "GATEWAY": "OWNER_DECISION_PENDING",
    "PACKAGING": "OWNER_DECISION_PENDING",
    "RECONCILIATION": "OWNER_DECISION_PENDING",
    "TRANSPORT": "OWNER_DECISION_PENDING"
  },
  "runtime_acceptance": {
    "R01": "NOT_RUN",
    "R02": "NOT_RUN",
    "R03": "NOT_RUN",
    "R04": "NOT_RUN",
    "R05": "NOT_RUN",
    "R06": "NOT_RUN",
    "R07": "NOT_RUN",
    "R08": "NOT_RUN",
    "N12": "BLOCKED",
    "historical_spawn_EPERM": "BLOCKED",
    "legacy_SQL_privileges": "SKIPPED"
  },
  "hosted_execution": "BLOCKED",
  "runner_implemented": false,
  "sanitizer_implemented": false,
  "new_target_observations": false,
  "merge_authority": false
}
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.

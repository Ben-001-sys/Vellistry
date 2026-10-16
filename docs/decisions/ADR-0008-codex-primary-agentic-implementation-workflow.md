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

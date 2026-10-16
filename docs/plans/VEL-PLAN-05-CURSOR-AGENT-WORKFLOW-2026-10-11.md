---
id: VEL-PLAN-05-CURSOR-WORKFLOW-20261011-001
title: PLAN-05 — Cursor Desktop, Git worktree, agent and PR operating contract
type: proposed-agentic-implementation-operating-plan
status: proposed-planning-only
created_at: 2026-10-11
updated_at: 2026-10-14
owner: project_owner
version: 0.2.1
sources:
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  - docs/agent-workflow/IMPLEMENTATION-TASK-DEPENDENCIES.yaml
  - docs/agent-workflow/README.md
  - docs/plans/VEL-CURSOR-DESKTOP-SETUP-PLAN-2026-10-11.md
  - docs/plans/VEL-IMPLEMENTATION-MASTER-PLAN-2026-10-11.md
  - AGENTS.md
  - PROJECT-CONSTITUTION.md
  - SOURCE-OF-TRUTH.md
---

# PLAN-05 — Cursor as primary bounded implementation agent

**CURRENT ROLE DECISION — SUPERSEDED FOR NEW TASK DISPATCH (2026-10-14).** The owner selected **Codex** as the default implementation agent in accepted [ADR-0008](../decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md). Retain the following Cursor-specific PLAN-05 text as its historical planning baseline, **not an instruction to route new code tasks to Cursor**. The unchanged authorization, git isolation, ContextPack/ExecutionBundle, exact-head review and security requirements still apply. The actual assigned executor must be recorded on each task.

**Status: planning document, NOT a Cursor execution.** User selected Cursor Desktop as implementation environment *after* the six planning work packages are reviewed. The older unmerged `feat/vel-imp-001-auth-library`, Issue #58, draft PR #59 are PAUSED prior kickoff, not a command to begin. We do not open Cursor, install tools, clone, run tests, invoke agents, change environment or incur charges during this stage. The earlier Stage 4 synthetic Cursor handoff proved a bounded ContextPack execution, not readiness for all product code.

## 1. Roles and authority

| Role | Responsibility | Explicit limits |
|---|---|---|
| Owner | approve scope, risk, account/production policy, task progression, PR merges, paid spend, private pilot/release | explicit decisions only; no invented prior signoff |
| ChatGPT coordinator | source audit, tasks, specs, exact-head PR/CI review, blockers and planning handoffs | suggestions/reviews not automatically owner-approved, not a coding executor unless separately assigned |
| Cursor Desktop + Cursor Agent | work locally in repo, inspect sources, bounded feature implementation, tests and factual execution report | cannot authorize own migration/secret use, deploy, paid inference, real author data or merge |
| GitHub | canonical accepted code/docs, PR review/CI, authority log `CURRENT-STATE.md` | passing CI not a human author test |
| Independent tester/reviewer | challenge actual code/test evidence, reproduce feasible negative scenarios | distinguish same-model criticism from genuinely independent rerun |

**Cost discipline:** use already available Cursor entitlement; no auto-upgrade or new agent subscription, no live paid OpenRouter model without separate explicit authorization, no need for Figma/Lovable generation credits to code. OpenAI/other plugins, if connected, cannot silently replace Cursor agent role.

## 2. Time-ordered environment walkthrough to be performed LATER

| Step | Planned verification/action | Required evidence before continuing |
|---|---|---|
| DESK-01 | Owner-verified Windows 11 Pro 64-bit, 15.7GB RAM, 13.9GB free C:, installed development tools; Cursor open state still unknown | use actual observed preflight, not historical workstation specs |
| DESK-02 | Existing personal GitHub access, folder/clone choice, Git credential or SSH configuration | can fetch personal `Ben-001-sys/Vellistry`, no token published |
| DESK-03 | Cursor Desktop version/privacy and terminal permission settings, project open at actual repo root | project visible, agent approvals scoped; plan/book files not hidden by wrong worktree |
| DESK-04 | Node 24.13 + Git 2.55 + Python 3.10 verified; use Corepack for repo-pinned `pnpm@10.18.0` rather than global pnpm 11.5; no Docker requirement for cloud DB | pinned package runner + working dependencies; no unnecessary upgrades |
| DESK-05 | owner-selected hosted Supabase Cloud development project; untracked env and HTTPS Supabase URL/publishable key; inspect hosted schema non-destructively | verify project identity and RLS; never copy secrets to Git/chat |
| DESK-06 | read-only git status/base main SHA, `pnpm check`, `pnpm build`, existing tests and local stack health | exact commands, exit codes and fail diagnoses; NO product modifications |
| DESK-07 | owner reviews actual no-code-change baseline and authorizes **one** coding slice | task with acceptance/negative tests, allowed paths, owner decision |
| DESK-08 | create isolated feature branch/worktree and pinned ContextPack; then Cursor Agent starts | exact base and task SHA; no conflation with old PR #59 |

**PowerShell command examples are illustrative for later setup, NOT executed now:**
```powershell
git status --short --branch
git fetch origin
node --version
corepack --version
pnpm --version
python --version
pnpm check
pnpm build
```
**Owner environment override (2026-10-11):** use **Supabase Cloud in the owner's existing account**, not local Supabase via Docker. Do not run `supabase start`, local-reset scripts, `supabase db reset --linked`, `db push`, or remote test seed/migrations without verified dedicated disposable project and separate authorization. A remote linked reset deletes cloud data. Review existing env example's local placeholders; actual code reads `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`. The old PR #59 task branch is **not** automatically the working base; use reviewed `main` after planning.

## 3. Standard task/branch/handoff protocol

1. **Preflight read**: `PROJECT-CONSTITUTION.md`, `SOURCE-OF-TRUTH.md`, top latest `CURRENT-STATE.md`, accepted relevant ADRs/scope, actual code and tests, new PLAN-01 feature-ID mapping, PLAN-02 proposed contracts, PLAN-03 states, PLAN-04 negative tests, latest merged exact `main`.
2. **Select slice**: one `VEL-IMP` task (e.g. Library, not complete MVP); include feature IDs, `ACC-M*`, proposed `T-VEL-*`, `JRN-*`, entry/exit, owner scope decision, dependencies, file allowlist/denylist and data/auth risks.
3. **Issue/task metadata**: owner creates/reviews GitHub issue and new unique task under `docs/agent-workflow/tasks/VEL-TASK-NNNN.yaml`. Do not recycle ContextPack/task ID or reuse stale approved scope. The existing command `python scripts/agent_workflow.py pack <task>.yaml` is a future option after task is committed, repo clean and underlying source files valid.
4. **Worktree isolation**: `feature/vel-imp-XXX-short-name` from fresh accepted main; one agent per task/branch; avoid cross-edit collisions. Do not stack unmerged prototypes/design docs or code on unrelated branches.
5. **Cursor execution boundary**: read-only code/contract inspection, short plan, minimal implementation; require human checkpoint for DB/schema migration, elevated privilege, deletion, secret access, paid/network access, business scope change, git rewrite, deploy, or PR merge.
6. **Run true checks**: targeted unit tests, deliberately isolated **hosted Supabase development-project** Nest/Next integration when authorized, `pnpm check`, `pnpm build`, browser tests and negative cases. Existing CI/local Supabase scripts may depend on Docker, clean reset and fixture assumptions; do not point destructive tests at hosted project. Design separate explicitly allowed hosted fixtures and mark `NOT_RUN` if unsafe/unavailable; no “all green” based on agent text alone.
7. **ExecutionBundle**: `docs/agent-workflow/execution-bundles/<unique>.md/json` per repo convention, with objective, start/end SHA, changed paths, exact commands/exits, tests, security failures, screenshots actually examined, FACT / INTERPRETATION / PROPOSAL, unsolved risks and no undocumented credentials.
8. **PR ready**: create draft PR early, owner reviews exact head, external review if possible, resolve actionable threads with observed evidence, leave intentional deferrals with explicit owner choice. Merging is *separate from* code writing or passing CI.
9. **Integration**: owner approves merge, check merged main, update `CURRENT-STATE.md` with accepted fact, begin next task from accepted main; do not paste ephemeral Cursor full reports in chat as canonical truth.

## 4. Cursor Agent assignment template (for future task only)

```text
VELLISTRY TASK [VEL-TASK-ID / VEL-IMP-ID] — APPROVED SCOPED IMPLEMENTATION ONLY

INPUT AUTHORITY:
Read AGENTS.md, PROJECT-CONSTITUTION.md, SOURCE-OF-TRUTH.md,
the latest top CURRENT-STATE.md, approved requirements/ADRs,
the assigned task, and pinned ContextPack. Do not treat
unmerged PRs or old chat summaries as accepted code.

PRECONDITIONS:
Check repo origin, exact main base SHA, clean branch/worktree and
no unrelated changes. If source differs, STOP and report.

SCOPE:
Implement ONLY [single feature slice and allowed paths].
Do NOT [outside-scope modules, secrets, real manuscripts, migrations
or paid inference unless separately approved]. Existing Figma is
a living UI reference, not generated app source.

EVIDENCE:
Run scoped tests and negative cases against synthetic author A/B;
run actual pnpm checks/builds; document NOT_RUN honestly.
Produce bounded ExecutionBundle with FACT/INTERPRETATION/PROPOSAL,
command outputs, file diff, exact head SHA, blockers and next suggestion.

DELIVERY:
Commit to assigned branch and prepare draft PR. Do not merge,
deploy, alter G_PRIVATE_PILOT/G_RELEASE or take owner approvals yourself.
```

This template is deliberately not a command to execute today; each task must add real acceptance specifics.

## 5. PR review checklist and merge policy

| Gate | Required for each future feature PR |
|---|---|
| Identity/scope | mapped M area, feature IDs and owner-scoped design/code permission |
| Diff | only allowed paths, no secret/leaked corpora or unrelated formatter churn |
| Tests | exact commands and exits, positive and negative auth/data scenarios, CI exact-head evidence |
| App behavior | browser evidence where UI affected, truthful empty/error/loading/saving states |
| Security | no `owner_id` trust, RLS/auth preserved, session/Storage/AI transfer bounds |
| Recovery | no data loss/false Saved, idempotency and rollback story for content mutations |
| Source facts | no unapproved canon/rule corpus/model claims, source provenance intact |
| Review | reviewer findings resolved or explicitly owner-deferred with safe implementation contract |
| Owner | owner records acceptance/merge separately; no agent self-release |
| State | after merge, update `CURRENT-STATE.md`, mark what is fact versus not run |

CI expected on merged branches remains test-scope-dependent. **Do not infer a universal root `pnpm test` exists**; use actual scripts. Do not require pixel perfection or six-plan rewrites for each small UI refinement.

## 6. Branch and task cadence (proposed)

```text
Accepted master planning
    → verified Cursor Desktop + local synthetic baseline
    → scoped IMP-001 approved task/branch/PR
    → IMP-002
    → IMP-003a manual Tiptap
    → IMP-003b atomic save/recovery
    ├─ IMP-005a/b Story Profiles
    ├─ IMP-006 certified Rules Studio
    └─ IMP-004a TXT/DOCX
          + profiles/rules → IMP-004b complete restore
    → IMP-007 two BYOK proposals
    → IMP-008 durable Accept/Reject/Undo
    → VAL-001 integrated 11 journeys
    → G_PRIVATE_PILOT
    → G_RELEASE
```

The existing `VEL-DAG-IMPLEMENTATION-001` remains **proposed**; this plan does not edit its pending G_DESIGN/G_CODE states, reactivate paused #59, or unilaterally change the approved MVP.

## 7. PLAN-05 exit

**Complete as a proposed governance/workflow plan:** agents and authority separated, desktop setup sequencing recorded, task/ContextPack/ExecutionBundle defined, PR acceptance checklist, command boundaries and safe no-paid-service operating mode in place.

**NOT completed:** actual Cursor installation/open verification, actual desktop privacy settings, Git checkout, hosted Supabase project selection/link and schema validation, branch creation for code, ContextPack execution, any app-code change or build/test. Docker/Supabase local-stack setup is **not required** for the owner-selected cloud workflow.

---
id: VEL-PLAN-CURSOR-DESKTOP-20261011-001
title: Cursor desktop and Vellistry local environment setup — future-phase checklist
type: developer-environment-readiness-plan
status: proposed-only-do-not-execute
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.1.0
sources:
  - docs/plans/VEL-IMPLEMENTATION-MASTER-PLAN-2026-10-11.md
  - README.md
  - AGENTS.md
  - package.json
  - pnpm-workspace.yaml
  - supabase/config.toml
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
---

# Cursor Desktop setup — PLAN ONLY (for the phase after master-plan acceptance)

**No installation, tool launch, terminal command, agent dispatch, API key entry, schema change or database reset is authorized by this checklist.** Its purpose is to prepare a safe *future walkthrough* after the owner has accepted the implementation master plan. Do not substitute this for a Cursor-executed task.

## Step A — Workstation preflight (expected Windows 11, verify when starting)

- Confirm OS architecture/version, storage available, available RAM, network reliability and whether WSL2/virtualization and Docker Desktop are supported. Determine rights to install programs and whether another Docker engine is already present.
- Verify whether Cursor Desktop, VS Code, Git, Node, pnpm, Python, Docker/WSL2 and a browser are already installed; record versions. Avoid duplicate installations, unnecessary upgrades or changing working tooling.
- Check repository location and any existing uncommitted project files. Plan to preserve existing work; no deletion/recloning unless needed and approved.

**Evidence:** environment inventory/checklist, no commands run during planning.

## Step B — Access and repositories

- Verify access to private personal `Ben-001-sys/Vellistry`; distinguish it from organization repositories and GitHub connector authorization.
- Choose Git HTTPS credential manager or existing SSH key, with least privilege and no tokens copied into chat or committed files.
- Fetch remote `main` and review current open PRs when execution is authorized. **Do not launch Cursor on prior `feat/vel-imp-001-auth-library` before the new plan's chosen kickoff.** The old draft PR #59 is paused.
- Confirm clean worktree, no sensitive local files staged, readable `AGENTS.md` and accepted source docs. Use separate worktree/branch per Cursor task; GitHub `main` remains protected by owner review.

**Evidence:** exact main SHA/branch/status and chosen local workspace path at later setup.

## Step C — Runtime and package manager

- Check Node.js **24** matching current repo prerequisites; Corepack availability and pinned pnpm **10.18.0** from root `package.json`. Respect `pnpm-lock.yaml`, not opportunistic dependency upgrades.
- Verify Python 3 and dependency availability for existing `scripts/agent_workflow.py` handoffs; follow repo README and scripts before installing anything.
- Verify Docker/WSL2 health for Supabase CLI. Confirm Docker Desktop licensing/commercial applicability before choosing that installation; if infeasible, record blocker and assess a reviewed alternate local setup.
- Verify Git credentials and a modern supported browser for app E2E testing, optional browser automation tools only after choosing test scope.

**Evidence:** versions and prerequisites without changing app code.

## Step D — Cursor Desktop project settings

- Open the actual checked-out Vellistry repository, not an empty new project, Lovable export or Figma generation.
- Review Cursor privacy/data-control settings, account/plan and project indexing behavior; do not buy a plan or switch costly models without approval. Inspect any automatically allowed terminal actions or agent approvals.
- Feed Cursor the repository-owned instructions (`AGENTS.md`, `CURRENT-STATE.md`, accepted task source, scoped ContextPack) with limited file edit permissions. Avoid dumping all research/chats into an agent; use the already-built Git source of truth.
- Configure one branch/worktree per agent; require human confirmation for file removal, migrations, destructive DB commands, credentials, external network, deployment, billing and merging. Model can inspect but may not approve itself.
- Establish report format: objective, input SHA, changed files, commands and exit statuses, unit/DB/browser tests, security checks, FACT/INTERPRETATION/PROPOSAL, remaining risks and proposed next task.

**Evidence:** Cursor settings screenshots/notes actually observed, do not invent GUI behavior or current model entitlements.

## Step E — Local environment files and network boundaries

- Inspect `.env.example`, actual `apps/web`/ `apps/api` env resolution and `supabase/config.toml`; decide only local, untracked env-file destinations, using disposable local publishable keys.
- Planned default ports based on repo: web `127.0.0.1:3000`, Nest `127.0.0.1:4100`, local Supabase API `127.0.0.1:54321`, Postgres `54322`, Studio `54323`—must verify at runtime, not blindly assume.
- Never paste live service-role, author BYOK, database passwords, tokens, or unarchived manuscript into chat/Git/agent instructions.
- Review any other local processes on ports, firewall exposure, Docker volumes and backup ownership before starting services.

**Evidence:** environment-key **names** and local URL/status only; no secrets.

## Step F — First no-feature-change baseline run (requires later permission)

In the actual desktop setup phase—not now—verify the current Git SHA, install from lockfile, run `pnpm check` / `pnpm build`, existing tests, and start Next/Nest/Supabase after confirming safe local ports and targeted environment. `pnpm supabase:reset` destroys local data and requires explicitly verified **disposable target + owner permission**. Provision Alice/Bob only after permitted local synthetic test setup. Record exact errors/exit codes and troubleshoot baseline *before* changing features.

**No new application code** until this baseline report is reviewed and the first implementation slice receives scoped go-ahead.

## Step G — Handoff from setup to Cursor Agent coding

- Verify planning master approved and this checklist performed with actual evidence.
- Choose first task from latest accepted master plan, not blindly from old PR #59; freeze accepted task scope and allowable paths.
- Commit task/ContextPack in isolated branch, do read-only repository inventory, then authorize bounded coding. Cursor reports actual implementation, not a proposal or screenshot pretending to be a working app.
- Confirm source/architecture decisions with explicit owner review, especially RLS/direct PostgREST signed-out token risk and no real manuscripts in development.
- Track every task to GitHub issue/PR and ExecutionBundle; merge only after owner review.

## Desktop preflight checklist (planning statuses only)

| Area | Planned verification | Status today |
|---|---|---|
| Owner-approved master implementation plan | scope, milestones, dependencies, tests | NOT APPROVED / PLAN DRAFT |
| Windows hardware and WSL2/Docker viability | OS, RAM, disk, virtualization | NOT CHECKED |
| Cursor Desktop installed, connected and privacy choices | actual GUI/settings | NOT CHECKED |
| Node 24, pinned pnpm 10, Python 3, Git | actual versions/paths | NOT CHECKED |
| Personal GitHub repository auth and clean main | actual Git access | NOT CHECKED |
| Local Supabase and untracked env files | safe Docker/ports/keys | NOT CONFIGURED |
| Existing code test/build baseline | actual exit codes | NOT RUN |
| First Cursor Agent task dispatched | exact accepted task/branch | NOT AUTHORIZED |

**Next action after plan signoff:** guided Cursor Desktop setup and local development preflight, **not yet feature implementation**.

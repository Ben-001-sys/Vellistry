---
id: VEL-PLAN-CURSOR-DESKTOP-20261011-001
title: Cursor Desktop with hosted Supabase Cloud development — owner-selected setup
type: developer-environment-readiness-plan
status: owner-cloud-direction-setup-preflight-active
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.2.0
sources:
  - docs/plans/VEL-IMPLEMENTATION-MASTER-PLAN-2026-10-11.md
  - README.md
  - AGENTS.md
  - package.json
  - pnpm-workspace.yaml
  - supabase/config.toml
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
---

# Cursor Desktop setup — hosted Supabase Cloud (owner-selected, preflight in progress)

**Owner began desktop preflight after the master planning PR was merged.** This checklist records setup verification, **not authorization for Cursor Agent implementation, schema modification, remote migrations, remote resets, provider spending or real author data**. The owner has now explicitly selected **Supabase Cloud via their own Supabase account** instead of running a local Supabase stack. The selected cloud *project*, environment and data-isolation state remain to be confirmed before connection.

## Step A — Workstation preflight (expected Windows 11, verify when starting)

- Observed Windows 11 Pro 64-bit, RAM 15.7 GB and free C: 13.9 GB from the owner's PowerShell preflight. Confirm another suitable drive if needed. **Docker/WSL2 is not required for the selected hosted Supabase connection**; only review if a separate future feature test genuinely needs containers.
- Owner-observed versions: Git 2.55.0.windows.3, Node 24.13.0, Corepack 0.34.5, pnpm **11.5.2** (repo pins 10.18.0), Python 3.10.10, Docker CLI 29.6.1. **Cursor Desktop installation/open state not yet confirmed.** Avoid duplicate installations or changing working tooling unnecessarily.
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
- **Do not set up local Supabase containers.** Use the owner's existing Supabase Cloud account, with a dedicated, disposable development **project** preferred; an account is not by itself a configured project. Docker/WSL2 may remain unchecked and is **not a blocker** to Next/Nest + hosted Supabase setup.
- Verify Git credentials and a modern supported browser for app E2E testing, optional browser automation tools only after choosing test scope.

**Evidence:** versions and prerequisites without changing app code.

## Step D — Cursor Desktop project settings

- Open the actual checked-out Vellistry repository, not an empty new project, Lovable export or Figma generation.
- Review Cursor privacy/data-control settings, account/plan and project indexing behavior; do not buy a plan or switch costly models without approval. Inspect any automatically allowed terminal actions or agent approvals.
- Feed Cursor the repository-owned instructions (`AGENTS.md`, `CURRENT-STATE.md`, accepted task source, scoped ContextPack) with limited file edit permissions. Avoid dumping all research/chats into an agent; use the already-built Git source of truth.
- Configure one branch/worktree per agent; require human confirmation for file removal, migrations, destructive DB commands, credentials, external network, deployment, billing and merging. Model can inspect but may not approve itself.
- Establish report format: objective, input SHA, changed files, commands and exit statuses, unit/DB/browser tests, security checks, FACT/INTERPRETATION/PROPOSAL, remaining risks and proposed next task.

**Evidence:** Cursor settings screenshots/notes actually observed, do not invent GUI behavior or current model entitlements.

## Step E — Hosted Supabase Cloud project selection and environment files

- **First:** open the owner's Supabase Dashboard and identify a **development-only project** in the account; if none exists, discuss creating one rather than connecting Vellistry to a production/manuscript database. Confirm project ID/reference, region, project purpose and whether any real records exist. Do not share database passwords or secret/service-role API keys in chat.
- Existing source reads `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in Next and `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY` in Nest. Configure *untracked local environment files* using the selected cloud project's URL and **publishable** key, not the old `http://127.0.0.1:54321` placeholders in the committed `.env.example`. Use local Next `127.0.0.1:3000` and Nest `127.0.0.1:4100`; hosted Supabase supplies its HTTPS domain, not local 54321/54322/54323 ports.
- Never paste live service-role, author BYOK, database passwords, tokens, or unarchived manuscript into chat/Git/agent instructions.
- Review local 3000/4100 conflicts, HTTPS reachability from Nest/Next, Supabase Auth redirect URLs for development and network connectivity. Do not expose Nest publicly or permit real-author data while the direct PostgREST/JWT risk is unresolved.

**Evidence:** cloud project reference/purpose, non-secret project URL, environment variable **names**, selected key type, local frontend/backend ports and screenshot/status evidence. Never paste API keys, tokens, DB passwords or manuscripts into chat/Git/agent instructions.

**Remote schema guard:** A cloud project may not yet contain Vellistry's existing Git migrations. Never assume its tables/RLS are already present or run migrations just to make a smoke test pass. Supabase CLI commands `db pull`, `db push`, `db dump` can target the linked cloud project; `db reset --linked` is destructive. Before any link or schema operation, verify account/project reference and get explicit task-level authorization. Keep migration files tracked in Git, not ad hoc production Dashboard edits.

## Step F — First no-feature-change baseline run (requires later permission)

During the owner-authorized desktop setup, verify current Git SHA, use the repo-pinned pnpm 10.18.0 with Corepack, install locked dependencies, run `pnpm check` and `pnpm build`, and boot **local Next and Nest only** after safe env configuration. Do **not** run `pnpm supabase:start`, `pnpm supabase:reset`, `supabase db reset --linked`, `supabase db push` or old tests that assume a disposable local database against hosted cloud. Read any test setup first: existing local-security scripts may intentionally reset data. Cloud database schema/history should be **inspected without mutations** until an explicitly reviewed and approved migration procedure. Create Alice/Bob only after confirming the cloud project is a disposable development target and the owner permits synthetic records. Record exact checks and outcomes; baseline application DB features may remain BLOCKED until the selected cloud project's schema is verified.

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
| Owner-approved master implementation plan | PR #60/#61 merged and owner began setup | ACCEPTED FOR SETUP; feature coding separate |
| Windows environment | Windows 11 Pro 64-bit, 15.7GB RAM, 13.9GB free C: | PARTIALLY VERIFIED; Docker/WSL not required for cloud DB |
| Cursor Desktop installed, connected and privacy choices | actual GUI/settings | NOT CHECKED |
| Node 24, pnpm 10.18 via Corepack, Python 3, Git | observed Node 24.13, Git 2.55, Python 3.10; global pnpm 11.5 | PINNED PNPM NOT YET SELECTED |
| Personal GitHub repository auth and clean main | actual Git access | NOT CHECKED |
| Supabase Cloud development project and env | choose isolated hosted project, cloud URL/publishable key, verify RLS/schema | PROJECT NOT YET CONFIRMED; NO KEYS SHARED |
| Existing code test/build baseline | actual exit codes | NOT RUN |
| First Cursor Agent task dispatched | exact accepted task/branch | NOT AUTHORIZED |

**Next action:** confirm **Cursor Desktop installed/open** and identify which **Supabase Cloud development project** the owner wishes to use. Then check Git checkout and pin pnpm via Corepack, configure safe untracked hosted-project env and perform no-feature-change baseline. No application coding yet.

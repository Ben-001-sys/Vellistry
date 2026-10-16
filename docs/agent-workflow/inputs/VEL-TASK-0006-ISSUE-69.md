# Issue #69 owner-authorized task snapshot

Source: https://github.com/Ben-001-sys/Vellistry/issues/69
Fetched 2026-10-16. This is source data; authority is the explicit owner dispatch.

## Owner-authorized Codex handoff — 2026-10-16

**Owner instruction:** implement the previously agreed substantial CI-usage-reduction plan under Vellistry's **agentic coding** architecture. Role boundary: **ChatGPT architect/coordinator and exact-head reviewer; Codex primary implementer; GitHub authoritative source; project owner approves merge, spending and high-impact decisions.** This issue does not constitute a Codex execution or confer merge authority.

**Source baseline:** merged `main` observed at `4b3996ef7cda878e1af3d679454bd1bb873a79c2`. Re-verify prior to work; don't silently overwrite changes. ADR-0008 Codex governance is owner-selected but remains draft in [PR #66](https://github.com/Ben-001-sys/Vellistry/pull/66). Supabase PRs [#65](https://github.com/Ben-001-sys/Vellistry/pull/65) and [#68](https://github.com/Ben-001-sys/Vellistry/pull/68) are separate and not to be edited or merged.

**Reserved task IDs (verify uniqueness on all active branches):** `VEL-TASK-0006`, `VEL-CP-0006`, `VEL-EB-0006`; don't reuse task 0005 from PR #68.

### Objective and targets
- Consolidate redundant GitHub Actions checks into **one primary automatic CI workflow** with applicable conditional jobs, a stable required final gate, and `workflow_dispatch` full-verification mode; retain one suitable post-merge main baseline.
- Reduce automatic workflow invocations **>=75%, targeting 90% where practical**, and significantly reduce *actual runner minutes* (aspirational ~60% reduction), **without weakening security, provenance or release gates**. Goals are NOT measured savings.
- Keep historical/spike workflow files/tests/evidence reproducible but normally **manual-only**, after proving unique coverage is preserved elsewhere when essential.
- Add PR concurrency cancellation for superseded commits, not post-merge main verification; avoid redundant pnpm install, duplicated build/test suites, and expensive browser/container jobs on unrelated docs-only PRs.
- Security/database/auth/author-isolation/RLS/SQL privilege, agent provenance and migration code must continue to trigger meaningful negative tests and required disposable integration when relevant, regardless of budget targets.

### Existing verified baseline
There are **25** workflow files on merged main. Six high-frequency core workflows: `combined-main-baseline.yml`, `implementation-foundation.yml`, `knowledge-metadata.yml`, `implementation-readiness.yml`, `agent-workflow.yml`, `k2-supabase-auth-rls.yml`. Recent sample of 300 run records: respectively 73, 50, 69, 69, 12 and 27 starts. Raw starts include blocked runs and are **not** billable usage minutes. Verify the latest source and actual billing metrics before claiming cost savings.
Existing relevant CI includes historical research jobs, synthetic Python governance/Stage-3/4 contracts, Next/Nest build, focused 66 Book Library tests, K2 disposable Supabase security, and SQL privilege regression proposed in draft PR #68.

### Canonical source and prep instructions
Read actual `PROJECT.md`, `PROJECT-CONSTITUTION.md`, `SOURCE-OF-TRUTH.md`, top of `CURRENT-STATE.md`, `AGENTS.md`, `docs/agent-workflow/README.md`, `docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md`, ADR-0006, the owner-selected ADR-0008 from PR #66, and relevant Task/ContextPack/ExecutionBundle templates and validator. Inventory **all** `.github/workflows/*.yml`, relevant scripts/tests, package.json, lockfile, application/Auth/SQL test coverage.
**Before CI code edits:** In an isolated Codex worktree/branch, create canonical `VEL-TASK-0006.yaml` reflecting this issue's permission envelope, source pins and negative cases; commit task and source references; run `python scripts/agent_workflow.py pack docs/agent-workflow/tasks/VEL-TASK-0006.yaml` to create immutable `VEL-CP-0006.md` from committed Git blobs and validate it. If pack generation or source pins fail, STOP and report BLOCKED, not fake hashes. Do not call the same-session work an independent cold start. Record executor identity/provenance.

### Implementation sequence
1. Audit each automatic trigger, job, duplicated test/build, branch filter, runner usage/time and required-check setting; **produce an explicit old-check -> new-check coverage matrix** before disabling anything.
2. Build primary `.github/workflows/ci.yml` with change classification, lightweight governance validation, single focused app check/build path, conditional mandatory security integration, and reliable required final status. Use least privilege, exact-head checkout, safe untrusted-PR handling and cache only non-secret dependencies.
3. Shift historical research/spike workflows to manual dispatch ONLY where non-regressive and archive intact. Avoid duplicate feature-branch push triggers; leave manual full suite and one integrated `push main`.
4. Test path, workflow-event and job-condition scenarios: docs only; ADR metadata; agent YAML/pack/bundle; frontend; backend author ownership; auth/session; SQL migrations, grants/RLS; lockfile; CI edits; draft->ready-for-review; main merge; manual full verification; failed required job. Required checks must never remain perpetually pending, appear falsely successful when required jobs are skipped, or silently bypass important security tests.
5. Stage changes in small rollbackable commits. Prove YAML validation and actual GitHub run behavior. Do not change billing, GitHub admin protection rules, cloud SQL/data or open Supabase PRs. Stop for owner if protected-branch check-name settings must change.
6. Write `VEL-EB-0006.md`: changed files, exact SHAs, real commands/exits, PASS/FAIL/BLOCKED/NOT_RUN, observed run counts AND billable runner minutes when available, coverage preservation, security limits, rollback, FACT/INTERPRETATION/PROPOSAL and references to CI runs.
7. Open a **draft PR** referencing this issue; do not merge. Hand back to ChatGPT for exact-head review, then owner for approval.

### Acceptance and forbidden actions
- Typical applicable PR invokes **one primary workflow**, conditional jobs only; docs-only doesn't execute full app builds.
- Security-sensitive Auth/RLS/migration changes cannot evade relevant tests; book isolation, unknown saves, migration privilege regression and handoff integrity remain checkable.
- A required final gate fails if applicable required jobs fail or could not run; nonapplicable jobs can skip without false failure.
- Full manual suite stays usable, logs and sources reproducible; historical evidence retained.
- Measured historical-vs-new usage comparison does not mistake GitHub blocked starts for billable time.
- **Forbidden:** changing accepted architecture/product decisions, merging PRs, hosted migrations/resets, real manuscripts or cloud data, secrets, deployment, billing/spending, paid provider calls, and unrelated product features.
- If the scope requires extra approval, STOP and report, do not self-authorize.

**Status:** Owner-authorized implementation *request* prepared by ChatGPT coordinator. Codex dispatch/execution, pinned ContextPack creation, code changes, tests and merge **have not yet occurred merely by opening this issue**.

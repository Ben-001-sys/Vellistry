---
id: VEL-SEC-001-ACTIONS-HANDOFF-001
title: Bounded GitHub-hosted PG17 test harness source map for Issue 74
type: task-input
status: proposed
created_at: 2026-10-18
updated_at: 2026-10-18
owner: project_owner
---
# Issue 74 — manual GitHub-hosted PostgreSQL 17 evidence handoff

## Authority and source state

- The owner asks to run disposable PostgreSQL 17 security tests in GitHub Actions rather than local Docker Desktop while **withholding** PR68 migration approval. The *coordinator-relayed*, owner-requested bounded continuation is recorded at https://github.com/Ben-001-sys/Vellistry/issues/74#issuecomment-6249776555 . This is a narrow **Codex executor** authorization for reviewable test harness work, not authenticated author proof or approval to execute/apply migrations on hosted Supabase.
- Primary task issue: https://github.com/Ben-001-sys/Vellistry/issues/74
- Owner source requests #71, #67; proposed unapproved draft PR: https://github.com/Ben-001-sys/Vellistry/pull/68
- Accepted baseline at handoff: main `021379856d07611752832b44bfe951d6ae36f0b2`; PR68 unmerged head `cbb379fa4a4eaa9f576f3abcce2c2258d22cc551`. Reverify SHA/branch before implementation.
- Prior Codex local PG17 run did **NOT RUN** before/after SQL; Docker desktop Linux daemon was unreachable, https://github.com/Ben-001-sys/Vellistry/issues/74#issuecomment-6243322555 . Neither SQL regression nor new PG17 GitHub-hosted test has PASS evidence.
- Historical `codex/vel-sec-001` branch has its own Task/CP/EB0012, conflicting with unrelated proposed PR77 Task/CP/EB0012 (distinct blobs). Do not amend or rename either already-committed CP0012, merge them together, or claim their histories were valid for this task. `VEL-TASK/CP/EB-0013` was checked absent on main, relevant PR77, prior security and PR68 branches, and prior governance branch on 2026-10-18; new task 0013 is reserved by this handoff.
- This handoff branch starts from **current merged main** and is **coordinator task preparation**. It is not a Codex execution, SQL test, approval, PR68 modification, compliance PASS, or merge.

## Original read-only PR68 test sources

All **exactly** at PR68 head `cbb379fa4a4eaa9f576f3abcce2c2258d22cc551`:

| Role | Path | Git blob | SHA256 from previous Codex source manifest |
| --- | --- | --- | --- |
| Accepted migration 1 | `supabase/migrations/20261009000000_initial_author_books.sql` | `192a736d1a5d6ffc6f239c74ed61e7b8d2528b3b` | `315e6a29f8072d4f556729784c07d4bf121666ef385b9cea4dfda36fded5ff74` |
| Accepted migration 2 | `supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql` | `0670a60f1c2e299e9771b9af1c677d97712174d9` | `6786561dcb325e14adbadec7b3bf879b8ab769841c86bf790dfbd2f19c222a65` |
| Unapproved proposed migration 3 | `supabase/migrations/20261015171325_restrict_book_privileges.sql` | `230b1540bb5b8962fd2b797d4f8a467d3c035978` | `c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81` |
| Test fixture | `tests/book_privileges_regression.sql` | `5feac95772f93330b29150dbc135d766e7b0392e` | `bcba9b788151d27ee354f41aa658398f1ed0cbfe86cf0d97f7ae685cb0c54e6b` |

The migration/fixture blobs are **read-only** and unmerged. Source pins must be verified on the runner before **any** psql invocation; fail closed on SHA drift. These tests are performed ONLY inside disposable PostgreSQL 17; they do not authorize actual Supabase migration/apply.

## Design and execution constraints

1. Confirm no suitable existing manual-only action workflow can already run this evidence. Merged `.github/workflows/ci.yml` has a conditional `privileges` job based on SQL source changes, using `postgres:17`. It is **not** an independent manual-only evidence runner for unmerged PR68 source and must remain unchanged. Existing 25 manual research workflows do not appear dedicated to this exact task; review before adding new.
2. Codex implements a *single* new manual-only `workflow_dispatch` action (suggest path `.github/workflows/vel-sec-001-pg17-manual.yml`) and minimally necessary non-SQL helper(s). No automatic triggers, duplicate CI, `pull_request_target`, secrets, elevated token scopes, or modification of the already merged six-job policy. Checkout with `persist-credentials: false`, `permissions: contents: read`, timeout and bounded logs.
3. Capture PostgreSQL **exact server version**, image digest, runner OS, source SHA/digest, command/exit status; use a fresh `postgres:17` service/container, no remote database URLs. Use two separate disposable databases or isolated clusters for before/after. Before must *fail on specifically expected books/TRUNCATE ACL*, not merely error. After must *PASS 48 ACL checks* and RLS tests.
4. Original fixture's negative assertions do not fully test actual denied `REFERENCES`/foreign-key DDL and `TRIGGER` DDL, nor owner positive UPDATE/DELETE. Add scoped probes for those, owner-author SELECT/INSERT/UPDATE/DELETE, foreign-author SELECT/INSERT/UPDATE/DELETE, forged owner, PUBLIC role inheritance and cleanup. Compare SQLSTATE/observed behavior, not just metadata. Keep probes outside SQL migration paths. Do not interpret synthetic default grants/injected PUBLIC TRUNCATE as exact reproduction of hosted Supabase grants.
5. Cleanup is mandatory. Check transaction rollback and absence of test schemas/roles/tables in disposable clusters, and runner lifecycle. Upload **sanitized** evidence as Actions artifact, with before expected-failure vs after success recorded distinctly.
6. Since GitHub `workflow_dispatch` workflows must exist on **default branch**, have Codex propose a draft PR for the manual harness and only request owner merge after CI/review. Owner then triggers the actual manual workflow on approved/pinned revision; only the actual run can prove PG17 PASS. No one should claim this test ran merely because a workflow YAML file exists.
7. Current PR-to-task compliance under merged PR76 requires a new anchored Task with `change_base`, `phase`, `executor: Codex`, precise `allow_paths`, real issue-comment authorization, immutable pre-edit CP, `PR-COMPLIANCE.yaml`, faithful per-commit executor/provenance, source/EB/test evidence. Task source snapshots must be committed and CP generated with actual `python scripts/agent_workflow.py pack` then validated **before implementation**.
8. Keep PR68 **DRAFT and unmerged**. Specifically, proposed migration 3 remains **NOT APPROVED**, regardless of a passing synthetic test, until separate owner authorization. No `supabase db push`, `db reset`, hosted-project writes, migration replay, credential use, owner settings, billing, private manuscripts or signed-out JWT risk dismissal.

## Status at handoff creation

- GitHub-hosted PostgreSQL17 actual run: **NOT_RUN**.
- Local Codex experiment: **BLOCKED/NOT_RUN**.
- PR68 proposed third migration owner approval: **WITHHELD**.
- No current branch workflow harness, helper, ExecutionBundle, manual Actions run or Codex dispatch is claimed by the coordinator merely by committing this preparation document.

---
id: VEL-REP-SEC-001-PG17
type: execution-report
status: proposed-for-review
created_at: 2026-10-17
updated_at: 2026-10-17
version: 0.1.0
---

# VEL-SEC-001 — blocked disposable PG17 evidence attempt

## FACT — scope, baseline and provenance

Direct owner dispatch in Codex authorizes local-only evidence under Issue74/handoff6243063362. Main reverified at `021379856d07611752832b44bfe951d6ae36f0b2`; post-merge run39075424325 SUCCESS is baseline evidence only, not this experiment. PR68 is OPEN/DRAFT at `cbb379fa4a4eaa9f576f3abcce2c2258d22cc551`, unchanged. Original checkout's uncommitted QA/current-state work is untouched.

Isolated worktree: `C:/Users/admin/.codex/worktrees/vel-sec-001/Vellistry`, branch `codex/vel-sec-001`. Current92refs inspected;0011 was already reserved elsewhere,0012 unused. Task/sources committed `1dfdfac668ddc8dd7a0a92f5365101895f0d1d29`; immutable CP0012 validated/committed `b2846d1da83ad71f8f980ccf5407c07b335b46a1` before SQL experiment/harness work. Task status alone advanced to blocked; scope/CP unchanged. No SQL was copied into this branch, no source SQL edited and no fixture executed. No PR68 commits were cherry-picked. Source attribution remains the recorded Git history, including prior ChatGPT PR65 material and subsequent Codex continuation; Git author identity alone is not runtime proof.

## FACT — exact source identities

All four artifacts are read-only sources from PR68 head above, not applied or adopted. Exact raw Git blob/byte hashes:

- `supabase/migrations/20261009000000_initial_author_books.sql`: blob `192a736d1a5d6ffc6f239c74ed61e7b8d2528b3b`, SHA256 `315e6a29f8072d4f556729784c07d4bf121666ef385b9cea4dfda36fded5ff74`, 3545bytes; last changing commit `917705cc95fd1ae3bf7a8cedbdd7604b9ff392ce`.
- `supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql`: blob `0670a60f1c2e299e9771b9af1c677d97712174d9`, SHA256 `6786561dcb325e14adbadec7b3bf879b8ab769841c86bf790dfbd2f19c222a65`, 608bytes; last changing commit `9cb86cfd3e52e45368e47c24fac735e3e0163c83`.
- `supabase/migrations/20261015171325_restrict_book_privileges.sql`: blob `230b1540bb5b8962fd2b797d4f8a467d3c035978`, SHA256 `c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81`, 307bytes; last changing commit `0f41a27a2de879f6d75c86c21b0d47d1d783f0c9`.
- `tests/book_privileges_regression.sql`: blob `5feac95772f93330b29150dbc135d766e7b0392e`, SHA256 `bcba9b788151d27ee354f41aa658398f1ed0cbfe86cf0d97f7ae685cb0c54e6b`, 3736bytes; last changing commit `0f41a27a2de879f6d75c86c21b0d47d1d783f0c9`.

PR68's proposed third migration and regression originated in recorded commit `0f41a27a2de879f6d75c86c21b0d47d1d783f0c9`. These references preserve provenance; they do not grant migration approval.

## FACT — runtime results, commands and exits

**Overall experiment: BLOCKED. PostgreSQL exact server version: NOT_RUN/unavailable. Before-fix SQL: NOT_RUN. After-fix SQL: NOT_RUN. ACL/behavioral negative-test count executed:0.** No PostgreSQL16 substitute or hosted instance was used.

- Initial `docker version`: client29.6.1; local desktop-linux pipe absent. Exact error in runtime-precheck.json. Its individual exit was not captured separately in the original multi-command probe; no invented exit0.
- `docker desktop start --detach`: exit0, reported Starting Docker Desktop. Acceptance of startup is not a responsive engine.
- Initial `docker desktop status`: exit1, Could not retrieve status. Subsequent broad `docker version/info` and bounded Python capture-output probes became unresponsive; execution sessions17032/36684 were interrupted, each exit1, with no SQL work.
- Reliable bounded diagnostic `docker desktop status`:15s TIMEOUT, no natural exit; only spawned CLI process tree12788 terminated using `taskkill /PID 12788 /T /F`, termination command exit0.
- `docker --context desktop-linux info --format '{{.ServerVersion}}'`:15s TIMEOUT, no natural exit; task-owned CLI tree29024 terminated, taskkill exit0.
- No psql/postgres/pg_ctl on PATH; `Test-Path 'C:/Program Files/PostgreSQL'` returned False. This is an installed-runtime check, not an exhaustive disk inventory.
- Cleanup attempt `docker desktop stop`:20s TIMEOUT; task-owned command tree7084 terminated, taskkill exit0. Docker Desktop restoration to its initially stopped state is **UNVERIFIED**. No force-kill of the shared daemon, WSL reset, installation or system setting change was attempted.

`runtime-checks.json`, runtime-precheck.json and cleanup.json record commands, timeouts, process IDs and exits. Associated raw diagnostic stdout files are empty because the CLI emitted no output; an empty diagnostic is not a successful test. No PG container, image pull, database, SQL throwaway directory or fixture data was created, so none required removal. Docker may remain starting/unresponsive; cleanup cannot be reported as fully verified.

## INTERPRETATION — source review, not execution proof

The original fixture explicitly simulates broad table defaults with ALTER DEFAULT PRIVILEGES granting all table rights to anon/authenticated. Core PostgreSQL table defaults alone do not grant PUBLIC table rights. Migration1 revokes anon rights and grants authenticated CRUD on books without revoking previously inherited extra rights there; migration2 tightens only chapters/revisions. The fixture additionally injects PUBLIC TRUNCATE on books to test inherited PUBLIC access. These assumptions model a dangerous grant state, not a fresh observation of hosted grants.

The unchanged proposed migration revokes books rights from PUBLIC/anon/authenticated, then grants authenticated SELECT/INSERT/UPDATE/DELETE. Static intent addresses the excess books grants while retaining book CRUD and existing RLS policies. This is **not a measured fix**. In the unchanged fixture, before-fix failure is expected first at anon/books/TRUNCATE after PUBLIC injection. That error was **not observed here**. After-fix PASS is **not established**.

The original fixture contains48 ACL comparisons across2roles x3tables x8privileges (including PG17 MAINTAIN), RLS/FORCE flags and owned INSERT/cross-author SELECT/UPDATE/DELETE/forged INSERT/TRUNCATE checks. It does not exercise owner UPDATE/DELETE or actual REFERENCES/TRIGGER DDL denials. Supplemental isolated behavior checks are still required to satisfy the full handoff; planned coverage is not test execution.

Current main BooksService (`apps/api/src/modules/books/books.service.ts`) uses forUser(token).from(books).select for list and insert(...).select(...).single for creation. The proposed authenticated SELECT/INSERT grants are consistent with those SQL permissions; UPDATE/DELETE remain granted. It does not revoke owner/service roles' explicit grants. This does not prove PostgREST schema exposure, role inheritance, JWT/auth.uid grants, Nest response behavior, service access, schema-cache handling or hosted compatibility. The real signed-out-but-unexpired-JWT issue remains separate.

## PROPOSAL — next execution and owner decision packet

1. Restore a responsive local Docker Linux engine with PG17 available. No privileged/system repair is attempted by this task. Resume within unchanged Task0012/CP0012 only if baseline/source/scope remain valid; reverify first.
2. Pull an official postgres17 image, pin observed digest, and capture server_version/version(). Start two uniquely named fresh containers with network none, tmpfs data and no host ports/mounts; only synthetic local roles, no secrets.
3. Copy all four exact source blobs only into throwaway storage, verify hashes. Run unchanged fixture on first empty instance with `psql -X -U postgres -v ON_ERROR_STOP=1 -v skip_hardening=true -f /case/tests/book_privileges_regression.sql`; record actual expected nonzero exit/error separately. On the second empty instance run without skip_hardening; record actual after result, not a combined all-PASS assertion.
4. Independently record full expected/observed ACLs before PUBLIC injection and after it, then after proposed correction. Add supplemental disposable checks for actual TRUNCATE/REFERENCES/TRIGGER denials, owner CRUD/default owner/INSERT RETURNING, cross-author and forged-owner CRUD, anonymous denial and retained owner/service behavior. Preserve original SQL; supplemental queries are separate experiment data. Capture all commands/input/output/exits and teardown/absence evidence.
5. ChatGPT reviews exact source and actual evidence. Owner separately decides whether the exact307byte proposed third migration is acceptable and separately authorizes any hosted acceptance operation. **Current recommendation: no migration approval inferred; runtime proof remains missing.**

No implementation PR is opened: this is a blocked evidence-only attempt, not a completed qualifying implementation with passing SQL tests. Source changes are unnecessary. Bounded task/pack/report are available on the evidence branch and Issue74; no implementation-compliance green or new CI run is claimed. CURRENT-STATE/main are not promoted; Issue74 receives this factual blocked checkpoint. PR68 remains untouched.

Official references: [PG17 privileges](https://www.postgresql.org/docs/17/ddl-priv.html), [PG17 row security](https://www.postgresql.org/docs/17/ddl-rowsecurity.html). Supabase changelog markdown fetch returned unsupported content type; no Supabase product/API change or hosted query was attempted.

## Review and remaining limitations

ChatGPT independent review pending; owner migration acceptance NOT_GRANTED; hosted acceptance NOT_RUN. No hosted connection/apply/reset, service token, private manuscript, billing/admin/branch-protection change, deployment, merge, application/SQL modification or unrelated PR edit. Local Docker startup was attempted; its final daemon state is unverified. All behavioral conclusions await real PG17 execution.


## FACT — artifact verification

`python -X utf8 scripts/agent_workflow.py validate`: exit0,9tasks/7ContextPacks/7ExecutionBundles validated. `python -X utf8 scripts/check_knowledge_metadata.py`: exit0,28records validated. Full raw commands/stdout/stderr/exits in artifact-validation.json. Preservation diff against0213798 across apps/supabase/tests/scripts/.github/CURRENT-STATE/operative manifest:exit0 (preservation.json). These are artifact checks, not database tests; no CI or application build claim. Final source refs rechecked unchanged before publishing. This evidence branch has no integration PR; it does not replace the main manifest or bypass implementation compliance.

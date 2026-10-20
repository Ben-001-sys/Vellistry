# VEL-DB-READINESS-001 — offline reconciliation, 2026-10-19

## FACT — checked sources and authority

Main `fca0d96fd071f1165e3e16658d821a3d36a20293`; PR68 `cbb379fa4a4eaa9f576f3abcce2c2258d22cc551`; ChatGPT PR65 `604e1ebfd0baab930ee4dc39aecf7289dc64188a`. PR68 remains Draft/unmerged and is not an integration branch. Task0019/CP0019 precede this report. This report implements Issue81 offline preparation only. No hosted connection, CLI authentication, migration application, Auth fixture or repository settings operation occurred.

Owner definition decision: [PR68 comment6251764080](https://github.com/Ben-001-sys/Vellistry/pull/68#issuecomment-6251764080). Exact third SQL definition only is approved for future planning. It is not a reviewed-base migration-path approval or merge permission. Current compliance requires a separate reviewed-base authorization for any adopted SQL path. That approval record must be owner-reviewed; this task cannot self-install it as authority.

## FACT — provenance and conflict matrix

This table covers all38 paths changed by PR68 relative to its own base. Comparing entire old PR tree to main also shows later main files absent; those absences are ancestry drift, not intentional deletions to adopt. Preserve current ci.yml, all25 archived manual workflows, named PG17 harness, compliance tooling, LANGUAGE and accepted governance.

| Source path | Origin check | Current-main relation | Disposition |
|---|---|---|---|
| `.env.example` | ChatGPT PR65 source unchanged in PR68 | different | SELECTIVE ADOPTION candidate in new bounded implementation task; preserve current CI/package additions |
| `.github/workflows/implementation-foundation.yml` | ChatGPT PR65 original; subsequently modified by Codex PR68 continuation | different | EXCLUDE stale workflow/state; preserve current main |
| `CURRENT-STATE.md` | ChatGPT PR65 original; subsequently modified by Codex PR68 continuation | different | EXCLUDE stale workflow/state; preserve current main |
| `README.md` | ChatGPT PR65 original; subsequently modified by Codex PR68 continuation | different | SELECTIVE DOCUMENTATION reconciliation only; never replace current README |
| `apps/api/.env.example` | ChatGPT PR65 source unchanged in PR68 | absent | SELECTIVE ADOPTION candidate in new bounded implementation task; preserve current CI/package additions |
| `apps/web/.env.example` | ChatGPT PR65 source unchanged in PR68 | absent | SELECTIVE ADOPTION candidate in new bounded implementation task; preserve current CI/package additions |
| `apps/web/src/lib/supabase/browser.ts` | ChatGPT PR65 source unchanged in PR68 | different | SELECTIVE ADOPTION candidate in new bounded implementation task; preserve current CI/package additions |
| `docs/agent-workflow/context-packs/VEL-CP-0005.md` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/agent-workflow/execution-bundles/VEL-EB-0005.md` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/agent-workflow/inputs/VEL-TASK-0005-ADR-0008.md` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/agent-workflow/inputs/VEL-TASK-0005-ISSUE-67.md` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/agent-workflow/tasks/VEL-TASK-0005.yaml` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/plans/VEL-IMP-001B-HOSTED-CLOUD-ACCEPTANCE-2026-10-14.md` | ChatGPT PR65 original; subsequently modified by Codex PR68 continuation | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/VEL-IMP-001B-PHASE-A-MIGRATION-REVIEW-2026-10-14.md` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/VEL-IMP-001B-PHASE-B-PRECHECK-2026-10-15.md` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/agent-workflow.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/build.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/check.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/ci-f29d65e-annotations.json` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/ci-f29d65e-foundation-jobs.json` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/ci-f29d65e-runs.json` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/f29d65e-verification.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/hosted-preflight.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/install.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/issue-67.json` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/library-isolation.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/missing-environment.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/phase-b-readonly-precheck-20261015.json` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/phase-b-source-0f41a27-ci-annotations.json` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/phase-b-source-0f41a27-verification.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/provenance.json` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/source-manifest.json` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/workflow-tests.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `package.json` | ChatGPT PR65 source unchanged in PR68 | different | SELECTIVE ADOPTION candidate in new bounded implementation task; preserve current CI/package additions |
| `scripts/hosted_supabase_preflight.mjs` | ChatGPT PR65 original; subsequently modified by Codex PR68 continuation | absent | SELECTIVE ADOPTION candidate in new bounded implementation task; preserve current CI/package additions |
| `supabase/migrations/20261015171325_restrict_book_privileges.sql` | New path in Codex PR68 continuation; no PR65 path | absent | RETAIN pinned proposal; separate reviewed-base SQL path/merge authorization required |
| `tests/book_privileges_regression.sql` | New path in Codex PR68 continuation; no PR65 path | absent | RETAIN pinned proposal; separate reviewed-base SQL path/merge authorization required |
| `tests/hosted_supabase_preflight.test.mjs` | ChatGPT PR65 original; subsequently modified by Codex PR68 continuation | absent | SELECTIVE ADOPTION candidate in new bounded implementation task; preserve current CI/package additions |

Exact per-file Git blob and SHA256: [source-map.json](evidence/VEL-DB-READINESS-001/source-map.json). Equality to PR65 proves retained bytes, not authenticated model identity. Changed inherited files must retain both ChatGPT origin and Codex correction provenance. Do not cherry-pick the entire old branch.

## FACT — retained actual disposable PG17 evidence

Run [39135149678](https://github.com/Ben-001-sys/Vellistry/actions/runs/39135149678), job117698049994, original artifact12139701246 (expires2026-11-01). Archive download SHA256 `d426612fbb1197e8e80b8b5a7cd8cfa97e24c2307af3fe786485cf0e416fbf62` matches GitHub metadata. Retained structured member SHA256 `fb1fefddde801315d661a6248d138473d0bb2ae9b525f2033c9b8c9d1f3f25cf`. [Exact synthetic result](evidence/VEL-DB-READINESS-001/pg17-result.json) contains52 actual command records, inputSQL where applicable, stdout/stderr/exits, source hashes and cleanup. No raw container environment/startup logs retained. Pattern screening and command/source inspection found no credential/connectionURI/real writing data. This is retention of an earlier execution, not a new database run.

Server: PostgreSQL 17.11 (Debian 17.11-1.pgdg13+2) on x86_64-pc-linux-gnu, compiled by gcc (Debian 14.2.0-19) 14.2.0, 64-bit. Runner LinuxX64 at `098ab06a40a84eaba5880223f02e80fab3bf9e86`; image digest `postgres@sha256:2d2b8998d31037bf721cfdf764d76ba74171b4fab3431b7f72c27c56ddbdf9e3`. No published ports.

| Stage | Actual result |
|---|---|
| BEFORE original migrations with explicitly injected broad grants | EXPECTED_FAILURE exit3; P0001: anon/books/TRUNCATE expected false. This models the privilege defect; it is not an observation of hosted default grants. |
| AFTER unchanged proposed third migration in separate database | PASS exit0;48 ACL assertion marker. |
| Supplemental actual operations | PASS: owner CRUD; TRUNCATE/REFERENCES/TRIGGER42501; cross-author SELECT/UPDATE/DELETE isolation; forged INSERT/UPDATE42501; inherited/PUBLIC and anon denials; RLS flags and privileged-role preservation. |
| Cleanup | Original fixture rollback PASS in both DBs; database removal PASS; owned runner/container files REMOVED; independent cleanup PASS. |

The artifact field migration_approval=NOT_GRANTED describes the experiment at execution time. Later definition-only approval does not rewrite that evidence. Hosted Supabase remains NOT_ACCESSED.

### Exact migration and fixture identities

| Path | Git blob | SHA256 |
|---|---|---|
| `supabase/migrations/20261009000000_initial_author_books.sql` | `192a736d1a5d6ffc6f239c74ed61e7b8d2528b3b` | `315e6a29f8072d4f556729784c07d4bf121666ef385b9cea4dfda36fded5ff74` |
| `supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql` | `0670a60f1c2e299e9771b9af1c677d97712174d9` | `6786561dcb325e14adbadec7b3bf879b8ab769841c86bf790dfbd2f19c222a65` |
| `supabase/migrations/20261015171325_restrict_book_privileges.sql` | `230b1540bb5b8962fd2b797d4f8a467d3c035978` | `c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81` |
| `tests/book_privileges_regression.sql` | `5feac95772f93330b29150dbc135d766e7b0392e` | `bcba9b788151d27ee354f41aa658398f1ed0cbfe86cf0d97f7ae685cb0c54e6b` |

The master mandate abbreviates the second migration blob incorrectly; the full verified blob above (`0670a60f1c2e299e9771b9af1c677d97712174d9`) is authoritative. No SQL bytes edited or integrated.

## INTERPRETATION — application and permission compatibility

Current BooksService uses verified user-token Supabase PostgREST SELECT and INSERT followed by SELECT RETURNING; authenticated SELECT/INSERT rights remain in the proposed grant correction. The correction grants authenticated UPDATE/DELETE as well, but current library service exposes only list/create. Owner_id comes from auth.uid default, not browser authority. Initial RLS owner policies and FORCE RLS remain unchanged. Chapters/revisions remain SELECT-only for authenticated pending protected transactional contracts.

The third file revokes direct books rights from PUBLIC/anon/authenticated, then grants authenticated CRUD. It does not change role memberships, schema USAGE/CREATE, default ACLs for future tables, existing triggers/constraints, privileged-role bypass, function EXECUTE or SECURITY DEFINER functions, Data API exposure settings, JWT/session revocation, or chapter/revision PUBLIC inheritance. Effective inherited grants and existing SECURITY DEFINER/search_path behavior need explicit hosted inspection before any apply. Synthetic service-role preservation is not proof of actual hosted service role semantics.

## PROPOSAL — exact separate owner decisions (all execution NOT_RUN)

Target for every future dev-only action: vellistry-dev, project ref `lflkcrnriitrbclangyr`, eu-west-2. Confirm target from owner-controlled UI before any connection; do not retrieve credentials through this task.

| Decision | Narrow requested action and stop conditions | Current status |
|---|---|---|
| A Repository integration | New current-main Task/CP for selected preflight code and tests; separate owner-reviewed base migration-path record for exact third SQL/fixture; review exact-head CI. Exclude stale CI/state. | OWNER_DECISION_PENDING for SQL adoption/merge; preflight implementation separately authorized by mandate but not implemented here. |
| B Read-only hosted inventory | Only catalog/migration-version/role-membership/default-ACL/schema/RLS/policy/trigger/constraint/function exposure metadata on named target; no user/manuscript rows, keys or mutations. Record least-privileged connection approach first. Stop for wrong target, unavailable auth or unexpected objects. | OWNER_DECISION_PENDING |
| C CLI authentication and dry-run | Owner supplies credentials securely outside logs; verify installed CLI help/version first, target link and migration history; preview exactly approved migration versions without include-all/roles/seed/reset/repair. Stop for any unrelated version or Vault operation. | OWNER_DECISION_PENDING |
| D Exact migration apply | Separate explicit authorization listing three filenames/hashes, reviewed preflight outcome, exact target and backout decision. Apply only missing approved versions; no reset/history repair. | OWNER_DECISION_PENDING |
| E Two synthetic Auth writers | Separate permission to create exactly two disposable fixtures, exercise owner/cross-owner/forged ownership and prohibited operations, then clean both Auth/data fixtures and verify absence. No real users. | OWNER_DECISION_PENDING |
| F JWT/private pilot | Disposable revocation mitigation proof plus explicit security boundary; test old unexpired bearer directly against Data API after sign-out. Third SQL is not mitigation. | BLOCKED |
| G Production | Independent release/security/recovery/legal acceptance and deployment authorization. | NOT_AUTHORIZED |

### Preflight procedure to review, not execute

1. Reverify main, exact approved source hashes and owner action-specific record. Confirm no extra migration files, no drift, original two applied-version history and third missing/present status; do not infer zero tables from old observations.
2. After B approval, inspect effective table privileges including PUBLIC, anon, authenticated, inherited memberships, owner/BYPASSRLS and service roles; inspect schema/default grants, RLS+FORCE flags, owner policies, references/triggers and exposed SECURITY DEFINER functions. Do not collect manuscripts or auth token values.
3. After C approval, use installed --help to discover valid version-specific commands. Local wrapper here is installed as2.120.0 but --version/--help exited1 before output because sandbox denied telemetry-file write; no confirmed CLI runtime version. Public docs describe db push --dry-run and exclude include-roles/include-seed. Issue81 mentions --skip-vault; current public db-push help does not document it. Do not invent or assume that flag. Resolve actual version/command support and prove Vault exclusion before dry-run; otherwise STOP.
4. Proposed command shape after explicit C approval only: `supabase db push --linked --dry-run` in a separately reviewed migration-only worktree. No credential literals, --db-url, --include-all, --include-roles, --include-seed, reset, repair or automatic --yes. Linking/authentication themselves require C authorization. This is a proposal, not a command executed here.
5. After separate D approval, require reviewed preview and owner go decision. Record version history, ACL/RLS/owner CRUD/forged/cross-author/DDL checks after apply, then E fixtures/cleanup if separately authorized. Failure stops acceptance; preserve evidence.
6. Backout is not blindly restoring broad grants. Stop author writes if necessary under separately authorized operational procedure; review exact previous ACL/history and choose a minimal forward correction. No destructive down/reset, fabricated migration-history repair or unapproved grant widening. Preserve schema/data backup evidence before any consequential apply.

Public reference checked2026-10-19: [CLI db push](https://supabase.com/docs/reference/cli/supabase-db-push), [API security](https://supabase.com/docs/guides/api/securing-your-api). Public changelog markdown fetch was unsupported by browsing tool; no claim of complete changelog verification. No Supabase project API was used.

## Verification and limitations

Task0019 validates retention/source consistency and existing governance; no new SQL/app implementation or hosted test. Retention assertions require exact digest/source/exit/cleanup markers and reject changed source hashes or relabeled BEFORE failure. Actual commands/exits appear in EB0019 and evidence files. Remaining original source gaps, owner merge boundary, global gates and language decisions are unchanged. Issue81 offline preparation can become review-ready; checklist07/08/09 cannot become DONE from this report.

## Independent review correction — 2026-10-19

Distinct Codex reviewer found P2: six changed inherited files were ambiguously classified. The matrix now identifies ChatGPT PR65 origin plus Codex PR68 modification for workflow, CURRENT-STATE, README, acceptance plan, preflight helper and tests. Unchanged PR65 paths and genuinely new PR68 paths are separate. Source map records PR65 blob/hash plus exact follow-up commit lists. Git author strings alone are not runtime authentication. Original PRs and historical packs remain untouched.

The exact original7,626-byte artifact ZIP is also retained after inspection confirmed its sole member is the synthetic result JSON: [pg17-artifact.zip](evidence/VEL-DB-READINESS-001/pg17-artifact.zip). Both archive and member hashes are reproducible. Retention13-check source transcript follows; no new database execution.

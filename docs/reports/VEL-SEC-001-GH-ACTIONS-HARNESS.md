---
id: VEL-REP-SEC-001-GH-ACTIONS-HARNESS
type: execution-report
status: proposed-for-review
created_at: 2026-10-18
updated_at: 2026-10-18
version: 0.1.0
---

# VEL-SEC-001 — owner-authorized manual PG17 harness

## FACT — authority, sources and history

Actual main/base `021379856d07611752832b44bfe951d6ae36f0b2`; source PR68 OPEN/DRAFT head `cbb379fa4a4eaa9f576f3abcce2c2258d22cc551`. Direct owner amendment authorizes ONLY the specifically named manual workflow inventory exception in tests/test_ci_policy.py, in addition to the prior harness/helper/tests/reports scope. The direct statement is pinned in OWNER-AMENDMENT.md. Review6249988374 is an advisory conditions index, not authenticated human approval; linked authorization metadata does not confer actor identity. No migration/protection/hosted approval.

Task0015/sources committed `9cb137fabae7f82491258eda918439c84c320db0`; generated validated immutable CP0015 committed `a68642b836f45ad89d0793e993acd3066f31e466` BEFORE implementation. All-ref artifact history scan showed0001–0014 used,0015 unused at reservation. Prior0012 security and PR77 lineages, coordinator0013 and blocked Task/CP/EB0014 remain untouched on their historical branches. collision.json is an attributed historical index copied from0014; it is not a current0015 dispatch. This implementation is a fresh main-based branch, not cherry-picked prior code. Original SQL/PR65/68 authorship is preserved; Codex implements only this new harness.

Operative implementation source `17087f3fe6246beb3237fd075c01b4be6448f945`. Final evidence commit SHA, draft PR and exact-head CI results are appended to the [canonical ledger](https://github.com/Ben-001-sys/Vellistry/issues/74#issuecomment-6250236013) after that commit exists. No self-referential Git SHA or unexecuted result is invented.

## FACT — bounded changes

- Add only `.github/workflows/vel-sec-001-pg17-manual.yml`, workflow_dispatch-only, no inputs/automatic events, contents:read, immutable checkout/upload action revisions, persist-credentials:false,15minute job timeout, one postgres:17 service with no host ports. Helper context service ID is passed at step level (job context is supported there).
- Extend ONLY the fixed inventory test in tests/test_ci_policy.py to one exact case-sensitive supplemental filename. All25 historical names/job dictionaries remain fixed. Full manual workflow dictionary equality rejects any extra keys/jobs/commands/guards/credentials, not a permissive continue. Also enumerate .yaml/alternate-case extensions so extra workflow files cannot evade the inventory.
- New stdlib helper scripts/pg17_book_privilege_evidence.py and19-test synthetic suite tests/test_pg17_action_harness.py. No application/SQL/dependency changes.

Automatic ci.yml/six jobs, scripts/ci_policy.py, scripts/pr_compliance.py, ci_governance.py, archived baseline, accepted instructions, applications and migration tree remain byte-identical to main (preservation.json). All existing historical workflow files remain untouched. Main CURRENT-STATE is not promoted by this unmerged proposal; actual current task facts live here/ledger pending owner integration.

## FACT — source data and execution design (not observed PG17 results)

Source commit is fixed `cbb379fa4a4eaa9f576f3abcce2c2258d22cc551`. Four regular Git files/blob IDs/SHA256 pins in helper and immutable sources.json must all match before SQL. Fetch URL/ref are fixed, not user inputs; SQL is copied only into runner/container temporary storage, never the repository migration tree. Third migration blob `230b1540bb5b8962fd2b797d4f8a467d3c035978`, SHA256 `c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81`, remains UNAPPROVED/test-only.

Only a manual GitHub-hosted runner in this repository is accepted. External Docker/libpq/database configuration is rejected. Docker inspect must prove the Actions-assigned64hex service ID is a healthy private postgres:17 instance, without published ports. Every SQL command uses docker exec into that service with explicit internal Unix socket/user/database arguments; no remote database target or secret is accepted. SELECT version()/server_version_num, image ID/RepoDigest, tool versions, runner OS/ref/run/job and all synthetic commands/input/output/exits are captured without dumping environment/credentials.

Two fresh databases: vel_sec_before and vel_sec_after. Unchanged original BEFORE fixture (skip_hardening) must exit3 with exact books/TRUNCATE P0001 diagnostic and no additional ERROR; any unrelated failure fails harness. Unchanged AFTER fixture must exit0 and emit its exact48-ACL PASS marker. Original roles/auth schema rollback checked after each. Supplemental independent transaction uses original bootstrap and unchanged three source files, then verifies48expected ACLs/RLS flags, actual42501 TRUNCATE/REFERENCES/TRIGGER denials with DDL prerequisites, owner SELECT/INSERT(default+RETURNING)/UPDATE/DELETE, cross-author SELECT/UPDATE/DELETE, forged-owner INSERT/UPDATE, anonymous denial, PUBLIC/inherited-role denial and retained synthetic privileged service rights. The helper cannot turn an unexpected failure into success.

Cleanup runs in finally and in a separate unconditional always step: only fixed task DBs are dropped, absent DB/schema/roles checked, runner/container owned temporary paths removed/verified. Failure/timeout cannot be softened. Runner-managed service teardown remains visible separately in Actions job logs; rollback/data cleanup is explicitly verified rather than inferred from runner expiration. The uploaded result.json stores original BEFORE/AFTER states separately, not all-PASS rhetoric. The new manual PG17 privilege experiment has not run; ordinary consolidated CI exercises its separate existing security/recovery fixtures.

## FACT — actual local verification

-19 harness tests PASS/exit0 at source `17087f3fe6246beb3237fd075c01b4be6448f945`;37 CI-policy tests PASS/exit0 at same source. Exact arguments, case names, duration and outputs: harness19-final.txt,policy37-final.txt,final-local-summary.json.
- Historical invariant negative control: original main test against current27-file inventory fails with actual exit1/KeyError; current amended full37-case policy suite passes. Raw output before-authorized-amendment.txt preserves expected failure. New tests reject automatic events, dispatch inputs, contents/id-token escalation, per-job overrides, secret/remote configuration, skipped/softened/replaced tests/cleanup, custom shell/directory/env, removed health/timeout/artifact, mutable action refs, extra/renamed/case/extension workflows and archived-job mutation. Source drift/missing fixture, wrong PG major/image/health/port, unrelated BEFORE failure, AFTER failure, timeout and cleanup failure also fail.
- Complete local compliance57 PASS/exit0,297.730s. Command began at bf88c914b1cd20a45ffbfce478d547e272aaca3d and completed at17087f3; checker, loader, task validator, compliance test and automatic CI blobs are unchanged between these checkpoints, with exact diff/command in compliance-command.json. This is labeled local checkpoint evidence; latest exact-head CI is required independently below, not inferred.
- All27 workflows pass actionlint1.7.12, verified Windows asset SHA256 `6e7241b51e6817ea6a047693d8e6fed13b31819c9a0dd6c5a726e1592d22f6e9`; raw command/exit0 in actionlint-local.txt. Consolidated CI retains its existing separately pinned Linux linter.
- Metadata28records, handoff9tasks/7committed packs/6bundles before this EB, readiness14nodes/4pending gates and spec8scenarios validate, exits0 (governance-validation.json). Handoff is revalidated after EB creation. These structural checks are not SQL or owner acceptance.

## INTERPRETATION — evidence limits and transport

This proposal resolves the authorized inventory block while retaining a fail-closed workflow contract and original enforcement. Tests are static/mocked disposable fixtures, not PG17 execution proof. The original SQL fixture deliberately emulates broad default grants and injects PUBLIC TRUNCATE; this is not an observation of real cloud grants. PostgreSQL version, SQL behavior, SQLSTATE outputs and cleanup from the new manual workflow remain NOT_RUN until it actually executes.

Current Nest BooksService lists via authenticated PostgREST SELECT and creates with INSERT plus SELECT/RETURNING. Proposed authenticated CRUD grants are consistent with those SQL rights, but this PG-only harness does not run PostgREST/Nest/Auth/JWT/hosted schema-cache acceptance. Synthetic privileged role is not the real Supabase service role. Signed-out-unexpired JWT/private-pilot hold, real grant inheritance and third-migration approval remain separate.

## PROPOSAL — independent review and owner sequence

1. ChatGPT reviews exact final diff, immutable Task/CP, negative tests and actual full/draft CI in the ledger. Owner alone decides harness merge; this PR stays Draft/unmerged.
2. Only after workflow exists on default branch, owner manually runs the new workflow on the reviewed ref, or separately delegates dispatch. GitHub requires this ordering; no dispatch attempt/workaround occurs here. Inspect result.json AND job outcomes/service teardown. Collect actual version/digest/source/SQL/cleanup evidence; any unexpected failure remains FAIL/INCONCLUSIVE.
3. Append real run/job links and structured before/after observations to Issue74. Independent review then owner separately decides whether the EXACT proposed third migration can advance to a newly scoped hosted-dev acceptance decision. Green harness tests or synthetic SQL do not approve it.

Official references: [manual dispatch](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow), [service containers](https://docs.github.com/en/actions/tutorials/use-containerized-services/create-postgresql-service-containers), [context availability](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts), [PG17 privileges](https://www.postgresql.org/docs/17/ddl-priv.html).

## Latest exact-head verification and holds

The ledger supplies actual final SHA/full/draft CI after commit. Manual PG17 NOT_RUN, BEFORE NOT_RUN, AFTER NOT_RUN; no invented server version/SQL PASS. Proposed third migration NOT_APPROVED; hosted Supabase UNCHANGED. No cloud credentials/real data, PR68/other PR edits, billing/settings/protection changes, deployment or merge. Owner-deferred protection risk and unmerged proposals remain separate.

---
id: VEL-RPT-REPO-RECOVERY-20261010-001
title: Recovery of missing merged research files from Vellistry main
type: repository-integrity-report
status: restoration-merged-and-research-ci-verified
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 0.1.1
source_prs: [29, 32, 34, 36, 39, 40, 41]
target_pr: 43
source_main_sha: b4c3f2748b2bfdd52f4a90a14ea4d620d902cee7
---

# Missing research artifacts despite GitHub PRs marked merged

## Trigger

During combined checkout verification on PR #43, `unittest` detected **zero** tests for `test_pair04_offline_provider.py`, despite merged PR #40 reporting 14/14 on its own earlier head. The file and its related research source were **absent** from the current `main` tree. An explicit path-by-path audit found additional missing #41 and K2 research files. A green historical PR check is not proof that a future main tree contains its artifacts.

**Historical note:** This report originally documented a proposed integration repair. The following sections preserve that diagnostic history. **Post-merge status is recorded in the outcome appendix below:** PR #43 is merged, original research files are on `main`, and the exact PR head CI passed. This is not production security certification.

## Evidence of recovery, original source commits

| PR | Original merged head | Confirmed missing paths on `main` | Repair in PR #43 |
|---|---|---|---|
| [#29](https://github.com/Ben-001-sys/Vellistry/pull/29) | `1d70739e3497cd4c529d19cf992b04d7bae2b22b` | K2 workflow (common), API test README, K2A integration suite, K2A research report, direct-DML-denial migration | Restore four missing unique paths; take shared workflow from newer #36 head |
| [#32](https://github.com/Ben-001-sys/Vellistry/pull/32) | `5c2a424b3da32fbf7dc08984dde1a043cf661481` | K2 workflow (common), two K2B integration suites, two research reports | Restore four missing unique paths; shared workflow from #36 |
| [#34](https://github.com/Ben-001-sys/Vellistry/pull/34) | Historical merged PR; descendant content also present in #36 | K2 workflow (common), active-session-row integration suite | Restore suite from latest #36 head |
| [#36](https://github.com/Ben-001-sys/Vellistry/pull/36) | `b01978d32dfd6ac95b927ca279378bff246979c2` | K2 workflow, restricted private Nest gateway test | Restore latest workflow/test source; CI-only temporary port safety patch |
| [#40](https://github.com/Ben-001-sys/Vellistry/pull/40) | `dda4b0a5593a86641a0cefce7d05b5930518c1be` | All four changed paths: workflow, research report, stub policy code, offline test | Copy exact GitHub-source file content (original blob IDs preserved in commit history) |
| [#41](https://github.com/Ben-001-sys/Vellistry/pull/41) | `603755d57355aec9111990f7d36e8029367525be` | All six changed paths: workflow, execution report, research report, simulated rule/test, Tiptap proposal tests | Copy exact GitHub-source file content (original blob IDs preserved in commit history) |

**Unique missing file count: 21** (11 K2 security paths + 10 Pair 04/05 paths). Recovered original files from the pinned PR heads; no invented security code or synthetic research assertions inserted. Independent alternatives [#39](https://github.com/Ben-001-sys/Vellistry/pull/39), Pair 02 [#37](https://github.com/Ben-001-sys/Vellistry/pull/37), Pair 03 [#38](https://github.com/Ben-001-sys/Vellistry/pull/38), Pair 06 [#42](https://github.com/Ben-001-sys/Vellistry/pull/42), R01 [#31](https://github.com/Ben-001-sys/Vellistry/pull/31) and #33 file presence was independently checked with no missing changed paths found.

## Existing-file drift additionally detected

- `apps/api/package.json` on `main` did not contain #36's research-only `pg` dev dependency required by the restricted gateway experiment. PR #43 preserves other dependencies and adds this dev dependency.
- `supabase/config.toml` on `main` was missing #29's disposable local Auth confirmation override. PR #43 restores **only** the explicitly development-only `[auth.email]` section. Do not deploy this setting to production.
- `CURRENT-STATE.md` reflects later accepted history and **must not** be overwritten with an old security research branch snapshot. The updated authoritative top checkpoint is a separate, additive, owner-reviewable reconciliation.

## CI execution and limitations

Initial combined tests identified the missing Pair 04 files (`NO TESTS RAN`), which triggered this recovery. Tests from Pair 04/05 ran successfully on a restored candidate checkout in separate workflows before the final repair. The restored K2 workflow initially failed to start its disposable Supabase database due to **host port 54322 already in use**, *before any authorization assertions ran*. PR #43 adds CI-only free-port selection and concurrency cancellation; its **latest-head rerun must pass separately** before calling K2 merged-checkout verified.

The combined workflow exercises Python provenance, source and chapter tests, app build/typecheck, and synthetic real PostgreSQL CAS/clean restore. It is **not** the full security release gate: Next.js SSR refresh, actual account-switch drafts, storage RLS, production private routes, legal clearance and public deploy remain untested/unapproved.

## Prevention

- `tests/test_research_design_gate.py` now checks actual existence of critical previously merged K2/Pair 04/05 source paths in the **checkout**, rather than trusting GitHub merged flags.
- `.github/workflows/combined-main-baseline.yml` runs integrated metadata, Python research and design-boundary tests plus app and DB contracts on new PRs and on `main`.
- Restore source code using original PR head content, not inferred behavior; never overwrite later authoritative `CURRENT-STATE.md` with historical branch state.
- Require an exact merged-main CI regression and expected-file presence check after large/rebased/stacked research merges.

## Review and acceptance

- [ ] PR #43 latest-head merged-checkout CI succeeds, including restored Pair 04/05.
- [ ] Restored K2 live local Supabase suite runs to completion with actual test results; record any failure honestly.
- [ ] Confirm no direct manuscript-path grants or production migration were applied.
- [ ] Owner reviews restoration, research-source integrity and process-variance note.
- [ ] PR #43 merged; only **then** describe all recovered files as present in `main`.

This report records **source presence and verification**, not a claim that the six pairs have all met their acceptance/release gates or the design phase is approved.

## Post-merge outcome — 2026-10-10

- **Restored and merged:** [PR #43](https://github.com/Ben-001-sys/Vellistry/pull/43) merged into `main` at `e7f1c82ced0a4e8b3196aaa7e5b874b41afc4523`. The 21 previously missing unique K2 and Pair 04/05 research files were directly checked on `main` after the merge.
- **Verified exact PR head:** `a20b6cd54aff4e80408a1fdd194a782709bf6134` passed seven GitHub Actions workflows: [combined three-job baseline](https://github.com/Ben-001-sys/Vellistry/actions/runs/38009740500), [real disposable Supabase K2](https://github.com/Ben-001-sys/Vellistry/actions/runs/38009740468), Pair 04, Pair 05, isolated editor, application foundation and knowledge metadata. No job failures were reported on those runs. A separate GitHub Actions execution on the resulting merge commit is **not** claimed.
- **Historical checklist interpretation:** The unchecked acceptance items above were written **before** merge. Combined checkouts and K2 CI were subsequently completed. No direct manuscript access to production was deployed. Formal owner review of restored source provenance and final design-entry authorization are not inferred from CI success or PR merge.
- **Result:** Source and research baseline are reconciled; product authorization, security hardening, R01 activation, real-user validation, backup operations and design entry remain separately gated.

---
id: VEL-PG16-RECOVERY-CI-0078
title: Compatible PostgreSQL16 recovery toolchain
type: implementation-report
status: proposed-for-review
created_at: 2026-11-10
owner: project_owner
version: 0.1.0
---

# Bounded repair

FACT: failedReady42777271966 had11PASS/1ERROR in unchanged12CAS/restore tests. Ubuntu26's postgresql-client18+ package and PostgreSQL16.15 service yielded unsupported SETtransaction_timeout during pg_restore. Task0078 owner authorization6762155945 permits only ci.yml/test_ci_policy.py plus new governance/evidence. Mainad5e723 unchanged; originalTask0077 remainsDraft and its failed run is not relabeled. Initial ContextPack size failure and corrected pre-dispatch preparation are preserved. Immutable CP0078 predates code.

The recovery job alone uses Ubuntu24.04, explicit postgresql-client-16, explicit binary PATH and unconditional actualbinary/server major checks. Existing16service and original12test command/body preserved. Allother jobs/triggers/permissions/security/browser/PG/governance/final gate unchanged. No app/Auth/SQL/dependency changes or hosted operations. Runtime guard prints non-secret versions only and fails missing/mismatched/unavailable evidence. Policy tests add5functions/53negative scenarios; all58tests PASS at committed sourcea81683b. Audit and validators PASS. Mock guard tests are not database execution; real client/server12test acceptance still requires actualGitHubCI.

INTERPRETATION: generic pg_wrapper selection must not defeat an explicit major install. No dump filtering/error ignoring/service upgrade or test relaxation is used. Public [Ubuntu24.04 client16](https://packages.ubuntu.com/noble/postgresql-client-16) availability supports the selection; actual fresh-runner proof, full mandatory checks and distinct completed-head review control review readiness.

PROPOSAL: separate owner merge decision after evidence/CI. PR137 needs later governed new-base reconciliation after approved integration, without rewriting its original pack. No automatic merge or successor implementation. R01-R08 NOT_RUN; N12/historical EPERM BLOCKED; legacyprivileges SKIPPED; all production gates pending. Final execution/review/CI ledger is appended externally when the exact head exists.

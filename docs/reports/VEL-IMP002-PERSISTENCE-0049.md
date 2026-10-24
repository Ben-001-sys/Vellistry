---
id: VEL-IMP002-PERSISTENCE-0049
title: Protected persistence contract preparation evidence
type: implementation-report
status: proposed-for-review
created_at: 2026-10-24
owner: project_owner
version: 0.1.0
---

# FACT: concrete repository deliverables

Task0049 and validated immutable CP0049 preceded deliverables. Base main
a9e7c48bc7198f6f23f7be5bb77ad54f1f27e2e4 integrates owner-approved PR111 with exact
reviewed/merged tree equality and post-main40111872132 SUCCESS. No old task/pack,
source authorship or remediation authority was rewritten.

The [contract](../contracts/VEL-IMP002-PERSISTENCE-CONTRACT.md) defines strict proposed
requests/snapshots/receipts, verified identity/ownership boundaries, private capability
requirements, separate notes, book-level version CAS, collision-safe two-pass ordering,
atomic blank initialization and terminal idempotency reconciliation. Its P01..P06
requirements map to27explicit future authorization/concurrency/recovery cases in the
[case packet](../contracts/VEL-IMP002-PERSISTENCE-CASES.json). Every runtime case is
NOT_RUN. The [bounded implementation handoff](../agent-workflow/proposals/VEL-IMP002-PERSISTENCE-HANDOFF.md)
names the smallest next package, concrete proposed paths and the exact decisions
needed before dispatch; no authorized implementation ID is invented.

Offline integrity validation PASS:1positive packet,12invalid mutations rejected,
2operative SQL source hashes match exact Git bytes. Metadata, implementation readiness
and traceability validation PASS, exit0. Source/command/results and complete invoked
checker text are in evidence/VEL-TASK-0049. This validates packet integrity, not SQL
syntax, database behavior, role security, runtime RLS or hosted acceptance. Existing
product research,41workspace/33browser tests and builds were not rerun for this
preparation-only diff; actual required CI is recorded separately at submitted head.

# INTERPRETATION

The existing two migrations prohibit direct author chapter/revision writes. A protected
capability and writable-session freshness policy are prerequisites, not permissions
created by this proposal. Existing Auth.getUser does not prove immediate JWT revocation.
The proposed minimal function-owner/private gateway would require independent SQL and
security review and exact SQL-path authorization in reviewed base. It is not an accepted
architecture amendment, implemented Auth control, new credential grant or hosted migration.

# PROPOSAL and limits

Owner reviews P01..P06, private gateway/session requirements and scoped local SQL paths
before the next unique implementation Task/CP. That future local package can proceed
without hosted inventory access, but must prove real disposable17 transaction/privilege
and recovery cases before connecting a production organizer. No application, SQL,
Auth, dependency, workflow/config, hosted, credential, private-manuscript or deployment
change occurred here. Broad gates and ordinary owner merge rules remain unchanged;
old remediation delegation remains EXPIRED. Issue108 stays open.

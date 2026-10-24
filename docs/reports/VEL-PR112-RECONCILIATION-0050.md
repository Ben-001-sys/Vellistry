---
id: VEL-PR112-RECONCILIATION-0050
title: PR112 current-main reconciliation and executable authorization preparation
type: implementation-report
status: proposed-for-review
created_at: 2026-10-24
owner: project_owner
version: 0.1.0
---

# FACT: integration and original source preservation

Owner-approved PR113 exact head1d4ecde22ac2fc5ebb1e6416a6d4eb2cedf3dfab merged as
667084ef30ac00a96b205eb2c52c83083db121e3; reviewed/merged tree
f25a00c603e107e95dc3a0776207e4e5b359074e matches. Post-main40126909449 SUCCESS.
Workspace tests are now inherited in application CI. Task47's earlier41unit/33browser
records remain local history, and independently blocked runtime rerun is not PASS.
SQL privilege fixture was SKIPPED, not accepted.

Original PR112 headb1c46df3942809b35f6cf4c650fe6c36f7cc60ab is preserved under
codex/archive-pr112-task0049-b1c46df and in its original local branch/worktree.
Task0050 source/validated immutable CP preceded adoption. The inventory lists16old
changed paths:15canonical source/evidence blobs are adopted exactly; the old active
PR manifest is archived verbatim as ORIGINAL49-PR-COMPLIANCE.yaml, while the active
selector now binds Task50. Original Task49/CP49/EB49 and original inputs/report/raw
checks are NOT rewritten. The contract, case packet and handoff keep their historical
base references. All27runtime case statuses remain NOT_RUN. New-main relationship
is established here rather than falsifying older observations or approvals.

The new Codex-authored assembly commit preserves source from the same original Codex
executor; it is not claimed to be an exact cherry-pick patch or new authorship of
Task49 content. Original commit IDs/blob hashes and archive ref remain inspectable.
Standing validators/manifest policy are unchanged, following the existing source-
adoption task pattern. Active Task50 provenance selects the new linear range based
on667084e, not a merge commit inside an old task or an edited dispatched pack.

# INTERPRETATION: why reconstruction is required

Main gained CI/current-state/provenance changes after Task49's old source cut. A
merge of main into the old implementation range violates the linear-range contract;
rewriting CP49 would erase provenance. Reconstructing on current main after a new
Task/CP preserves both old evidence and current controls. PR112's branch ref may be
replaced only with a lease expecting exact oldb1c46df, after candidate checks/review,
with the old head already archived. This ref update does not overwrite evidence;
stop if the remote changed. Final submitted-head CI is required after publishing.

# PROPOSAL: executable authorization packet

[Decision packet](../agent-workflow/proposals/VEL-IMP002-PERSISTENCE-EXECUTION-AUTHORIZATION.md)
and adjacent EXECUTION-PACKET.json specify four exact LOCAL SQL candidate paths,
eight local service/test paths, minimal private gateway/function owner, writable-
session lock/expiry proof, bounded transaction/journal/hash semantics and executable
disposable17 tests. No shipping migration filename, accepted role/security policy,
new executable Task ID or owner-verified SQL authorization record is fabricated.
The existing pg dependency is dev-only; no production promotion or new dependency.
All decisions remain OWNER_DECISION_PENDING; original27cases and4proposed extensions
are NOT_RUN. Synthetic session-row proofs do not establish actual provider logout
or JWT acceptance. Future implementation needs separate explicit scope and immutable
ContextPack, plus reviewed-base SQL-path approval before SQL files qualify.

# Verification and delivery boundaries

Actual offline blob/hash/case/status/packet checks and metadata/traceability/current-
state checks are recorded in EB0050 with commands/exits and exact revisions. Fresh
archive fetch proves original source pins remain reachable. Final whole handoff
validation, distinct completed-diff review and actual ready-state CI are recorded in
the external PR/Issue108 ledger after the exact submitted SHA exists. No completed
Task47 browser/research tests are rerun; inherited application/security checks remain
mandatory in CI. Pending/failed attempts are not relabelled passing.

No application, SQL, Auth, dependency, workflow/control, settings, hosted, credential,
liveJWT, private manuscript or deployment change. Ordinary owner PR112 merge remains
required; remediation delegation EXPIRED. Broad gates unchanged; Issue108 stays OPEN.

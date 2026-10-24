# Proposed next bounded implementation dispatch

Prepared under Task0049; NOT dispatched and no new implementation Task ID allocated.
This is the owner-review packet for implementing the version1 persistence contract,
not permission to modify SQL, Auth, hosted state or accepted manuscript data now.

Source contract: docs/contracts/VEL-IMP002-PERSISTENCE-CONTRACT.md (P01..P06).
Acceptance cases: adjacent VEL-IMP002-PERSISTENCE-CASES.json; every runtime case NOT_RUN.
Baseline: a9e7c48bc7198f6f23f7be5bb77ad54f1f27e2e4; recheck main at dispatch.

## Smallest implementation package after owner decisions

Implement one Nest workspace module with injected verified-principal and transaction
ports, strict request/result validation and the five organizer commands. Exercise it
against a disposable PostgreSQL17 transaction adapter with two invented authors,
not a production Next route. Reuse SupabaseAuthService/Guard and Task0047 controller
types; do not substitute a new authentication integration or synthetic persistence
in production. Separately connect the organizer only after persistence acceptance.

Proposed application paths: apps/api/src/modules/workspace/{workspace-contract.ts,
workspace.service.ts,workspace.controller.ts,workspace.module.ts,workspace-contract.spec.ts},
tests/workspace/persistence/ and the specific API module registration file established
by source inspection. Specify each concrete filename in the new Task, not this glob.
No dependencies are preapproved; inspect existing test/runtime drivers first.
New migration/function/role paths must be separately owner-approved and recorded
in reviewed base under the existing migration-path contract before a SQL PR qualifies.
Do not invent an approved migration filename or treat a markdown function proposal as SQL.

## Exact decisions before dispatch

1. Accept/revise P01's private execute-only server gateway, minimal function-owner
   role and writable-session freshness contract. Existing getUser is not proof of
   immediate logout revocation; an unaccepted session mechanism keeps routes closed.
2. Authorize the named local-only migration/function paths and disposable17 fixture
   setup. Preserve direct author chapter/revision revocations and public exposure limits.
3. Approve the request/receipt journal,1000chapter/safe-integer bounds and book-lifetime
   idempotency retention. No TTL/new-key replay exception is implied.

These decisions can authorize LOCAL implementation without any hosted access.
Credentials, hosted users, JWT experiments, migration execution and pilot/release
remain separate target-specific packets. Do not hold independent local code hostage
to the unexecuted metadata inventory, or bypass missing database/security decisions.

## Required implementation evidence

Allocate a unique authorized Task, commit exact source snapshots, generate/check/commit
its immutable CP before code. Implement all P01..P06 cases with real disposable DB
transactions and before/after negative evidence. Include concurrent clients, lost
acknowledgement/restart, forced rollback, cross-book/author/forged claims, unchanged
manuscript revisions and effective-role/EXECUTE tests. Run focused tests, existing
Library/workspace/preflight regressions, builds/types, governance, distinct exact-head
review and actual ready CI. EB must separate model tests, real disposable DB evidence
and hosted NOT_RUN. Submit for ordinary owner merge; no automatic merge or broad
G_DESIGN/G_CODE/private-pilot/release promotion.

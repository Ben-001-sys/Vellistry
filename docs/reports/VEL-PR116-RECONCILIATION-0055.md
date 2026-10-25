---
id: VEL-PR116-RECONCILIATION-0055
title: PR116 source-preserving current-main reconciliation and next local dispatch
type: implementation-report
status: proposed-for-review
created_at: 2026-10-25
owner: project_owner
version: 0.1.0
---

# FACT: new base and preserved history

Owner-approved PR117 exact head82176e809f45612c0d70aaf68c3f99e655033c2d merged as `fd85deb9a31af8663c85977df896e79b0e370eec`; both complete trees equal `6dce4b1aa7f91071909fc7eba25199a584442899` (git diff exit0). Post-main [40188047497](https://github.com/Ben-001-sys/Vellistry/actions/runs/40188047497) is checked separately; no passing conclusion inferred from a queued run. Mandatory12focused units and32 disposable PG17 cases, all existing application/security/recovery checks, draft routing, readonly token and single automatic workflow are inherited without change.

Original PR116 reviewed head `3ea34b518b4e5d6fac6b4051389dac51c2af9272` is preserved in the original worktree/branch and remote `codex/archive-pr116-task0054-3ea34b5`. Its distinct review and [ready40185842753](https://github.com/Ben-001-sys/Vellistry/actions/runs/40185842753) remain historical, not evidence for this new head. Task0055 and validated immutable CP0055 were committed before adoption.

The [inventory](../agent-workflow/inputs/VEL-TASK-0055/ORIGINAL54-INVENTORY.json) accounts for all12 original paths:10canonical Task54/CP54/EB54/owner-input/decision-packet/report/evidence blobs are preserved byte-identically. Original current-state and active manifest are archived verbatim in Task55 inputs. The active manifest selects Task55/current base; only current-state and this new reconciliation report explain later facts. No old pack, source hash, test result, pending choice or authorship is rewritten. Original source commit57222edaaf29d203cee3f69d0de7045e18ba6627 and all four old range commits remain reachable through the archive. Assembly under Task55 is a new Codex preservation operation of prior Codex source, not a falsely declared exact cherry-pick or new authorship of Task54 content.

# INTERPRETATION: why a new pinned task is necessary

The merged base now includes mandatory persistence CI/control changes. Merging main into the old range would violate linear-range provenance; editing CP54 would erase its historical snapshot. Following the Task50 precedent, a new current-main linear candidate and pack preserve both the original evidence and effective controls. PR116 ref replacement is permitted only after candidate validation/distinct review and confirmed remote archive, with a lease expecting exact old3ea34b5; stop on drift. This preserves original history rather than force-overwriting evidence. No branch protection or validator is modified.

# FACT: evidence boundaries

Task54's8 source hashes and all15 original query hashes remain unchanged. Target metadata is historical; current observations remain UNVERIFIED. PRINCIPAL, SESSION, GATEWAY, PACKAGING, RECONCILIATION and TRANSPORT all remain OWNER_DECISION_PENDING. The earlier local/CI32-case synthetic proof does not establish real Supabase logout, managed auth.sessions privileges or hosted RLS. Task52's independently blocked runtime remains BLOCKED. The legacy SQL privilege fixture skip is not acceptance. Task54's old-base references are intentionally retained as dated evidence; this report supplies the new-base relationship.

# PROPOSAL: smallest executable local principal-binding task

The [proposed dispatch](../agent-workflow/proposals/VEL-IMP002-PRINCIPAL-BINDING-HANDOFF-0055.json) is PROPOSED_NOT_AUTHORIZED; its next Task ID is unallocated. It proposes exactly `apps/api/src/modules/workspace/workspace-principal-adapter.ts` and `workspace-principal-adapter.spec.ts`, plus normal new workflow evidence. After separate owner scope approval, allocate/validate/commit a unique immutable pack before code.

Propose a provider factory with a request-immutable token and injected synthetic verification port/clock, returning the existing WorkspacePrincipalProvider contract. Bind the verified user and verified sub/session_id/expiry to the same token verification; deny disagreement, absent/malformed responses, stale/future/expired evidence and verifier errors. Parallel/out-of-order responses must never exchange identity. No mutable global actor, unverified claim decoding, caller-supplied author/session, token logging or real network/Auth API implementation. The injected port is a trusted test seam, not proof that arbitrary JSON authenticates a user; selecting a production getUser/getClaims binding remains reserved.

Ten concrete acceptance blocks cover valid immutable results, failure isolation, subject/session validity, time checks, concurrency, token switching, post-async checks, synthetic-only execution, no production registration and unchanged mandatory CI. This task can proceed locally with injected verified responses without waiting for hosted catalog access. It does not approve any of the six production security choices or establish active writable sessions. Real session grants/locks, shipping migration paths, credentials, production routes, hosted users/JWT probes and manuscript exposure remain excluded.

# Verification and owner review

Exact-source preservation, original pack validation,8source/15query hashes, pending decisions, unchanged control/SQL/Auth/dependency blobs and synthetic negative integrity tests are recorded with actual exits/source in EB55. Current metadata/readiness/traceability validations and actual final-head ready CI are required; unchanged prior application research is not rerun locally. The current mandatory CI performs12units/32PG plus all applicable security/recovery checks. Distinct completed-head source review is advisory; PR116 still needs a separate owner merge decision. No merge permission is inferred from this reconciliation. Issue108 OPEN, expired remediation delegation remains closed, broad implementation/private-pilot/production gates unchanged.

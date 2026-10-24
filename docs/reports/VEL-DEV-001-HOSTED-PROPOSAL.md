---
id: VEL-DEV-001-HOSTED-PROPOSAL
type: decision-packet
status: proposed
created_at: 2026-10-23
updated_at: 2026-10-23
owner: project_owner
version: 0.1.0
---

# Smallest separately authorizable hosted verification

## FACT
No hosted operation is authorized or performed. `vellistry-dev` is a historical display name, not verified target identity. Exact project reference, organization, region, endpoint, migration history and current privileges are UNKNOWN. Do not infer them from old source or inspect local credentials. Reuse the [existing exact SQL decision packet](VEL-PR68-RECONCILIATION-0039-DECISION-PACKET.md); do not duplicate or silently adopt its migration.

## PROPOSAL: first bounded step, not execution authorization
Owner must supply/confirm a non-secret exact project reference and intended development organization/region, and select a narrowly permitted access method. Before dispatch, pin that reference and an exact read-only query allowlist in a new Task/ContextPack. Until then this packet is not executable and no project discovery or CLI login is permitted.

Proposed first operation: read-only schema/security metadata inventory on that single development target. Prefer an owner-supplied sanitized export if it avoids granting agent access. If direct access is separately granted, use an owner-approved existing read-only channel; do not retrieve or export keys. Record target identity and server version, migration version/name history (not arbitrary stored SQL contents), table ownership/RLS/FORCE flags, policies and grants for books/chapters/chapter_revisions, relevant schema/sequence/default ACLs, PUBLIC/anon/authenticated effective memberships, exposed Data API schemas and SECURITY DEFINER function signatures/security configuration. No table rows, Auth users, Vault, credentials, manuscript content, function bodies with possible embedded secrets or unrelated schemas. No DDL/DML, test inserts, session sign-in, migrations, schema resets or settings changes. Stop on target mismatch, unavailable least-privilege access, unexpected sensitive output or drift; sanitize before retaining evidence.

Exit: exact target, sanitized metadata, commands/query hashes, exits and a drift comparison with the two operative migration sources and separately retained third proposal. This establishes inventory only, not authentication, RLS enforcement or permission to progress.

## Separate later decisions; no automatic progression

| Stage | Required approval and evidence |
|---|---|
| Repository SQL adoption | Exact third migration/fixture paths and hashes from PR68 `cbb379fa4a4eaa9f576f3abcce2c2258d22cc551`, reviewed-base SQL permission, new Task/CP and review/CI. Planning approval is insufficient. |
| Secure desktop connection | Exact target and authorized local config files, permitted credential handling, preserve existing values, no logging. CLI authentication/linking only if specifically needed and approved. |
| Dry run / migration plan | Reconcile actual history; pin ordered SQL hashes, stop on drift/extra versions; independently recoverable backup and reviewed compensating ACL plan. Do not blindly restore excessive privileges or reset history. |
| Migration execution | Separate exact-target apply authorization after source adoption, inventory/dry-run and recovery review; verify actual post-state and stop on unexpected change. No production target. |
| Hosted acceptance fixtures | Exactly two synthetic Auth authors and owned synthetic books; explicitly permit minimum token use and scoped cleanup. Verify own create/read/update/delete, cross-author and forged ownership denial, anonymous/expired/malformed tokens, direct Data API TRUNCATE/REFERENCES/TRIGGER and RLS. Dangerous privilege probes require a disposable approved target/transaction strategy, never arbitrary existing tables. Record fixture IDs safely and prove user/data cleanup. |
| Session security | Test browser switch/refresh/expiry/sign-out and retained unexpired JWT against both Nest and direct Data API. Choose and verify a mitigation or explicit bounded residual-risk policy; do not claim global sign-out revokes an access JWT immediately. Private manuscripts remain forbidden. |
| Hosted acceptance / pilot / release | Owner reviews actual results; each gate remains separate. Development evidence does not authorize private manuscripts, paid operations or production. |

## INTERPRETATION
Inventory is the smallest useful hosted step because no mutation can safely be selected against an unknown target/history. Local synthetic development can proceed under a separate bounded code authorization while hosted gates remain closed. No approval is requested for the entire staged sequence as one package.

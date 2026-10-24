---
id: VEL-IMP002-PERSISTENCE-EXECUTION-AUTHORIZATION
title: Proposed executable local persistence authorization
type: authorization-proposal
status: proposed
created_at: 2026-10-24
owner: project_owner
version: 0.1.0
---

# Exact decision packet — NOT AUTHORIZED FOR EXECUTION

Prepared under Task0050 after source reconciliation. Current base is
667084ef30ac00a96b205eb2c52c83083db121e3; Task0049's original contract and27cases
remain byte-identical to b1c46df3942809b35f6cf4c650fe6c36f7cc60ab. Their old base
is a historical source cut, not a claim that main has not advanced. All original
runtime cases remain NOT_RUN. The adjacent EXECUTION-PACKET.json supplies exact
candidate paths, command shapes and machine-readable approval boundaries.

This packet requests a FUTURE, uniquely identified, local-only implementation Task.
No Task ID, migration path approval, session policy, database role or executable
permission is granted here. Owner must explicitly accept/revise the decisions below,
then commit approved source and generate/validate an immutable ContextPack before code.

## Decision A — private gateway and session proof (proposed)

Reuse the existing Next.js/NestJS/Supabase identity boundary. Do not register a
production route or connect the organizer in the first executable slice. Implement
a Nest workspace service with an injected verified-principal provider and private
transaction port, exercised against disposable PostgreSQL17. Production connection,
runtime DB credentials and live Supabase session integration remain unavailable.

Proposed principal: `{authorId,sessionId,tokenExpiresAt,verifiedAt}` produced by a trusted server
boundary, never request headers/body or editable user_metadata. A future real adapter
must bind subject/session_id to the SAME access token verified by existing Auth.getUser
and validate the claims; decoding an unverified token is not identity verification.
Current SupabaseAuthService returns only user ID, so it does not yet supply this proof.
The initial slice uses injected synthetic verified principals, never live JWTs/users.

Proposed writable-session database check: while the operation transaction is open,
require a matching current session row for authorId/sessionId and hold a row lock
through commit. Candidate lock is FOR SHARE on the matching auth.sessions row;
a competing DELETE or non-key expiry UPDATE must serialize with it. After acquiring
the locks, require unexpired verified token time and the session's not_after deadline
(NULL means no additional session deadline). Reject future/stale verifiedAt values;
proposed maximum verification age30seconds and lock timeout5seconds. Fixture schema
uses these explicit fields; actual provider fields/semantics require separate proof.
Treat missing/mismatched/expired session as denied
and any inability to verify as unavailable/unknown after dispatch. Read authorization,
book ownership, chapter membership and receipt scope are independently rechecked.
Document linearization: a write that obtains the valid session lock may finish before
a competing revocation; no claim that an already-started write is cancelled retroactively.

The local stand-in tests can prove lock/transaction behavior, NOT that actual Supabase
logout always deletes that row or covers every revocation mode. Current getUser alone
is not immediate logout enforcement. Provider integration and any live JWT probe require
separate authorization and acceptance; production writes remain closed until then.

## Decision B — exact candidate SQL and capability (proposed)

Only these LOCAL test-candidate SQL paths are requested:

- tests/workspace/persistence/sql/00_fixture_auth.sql
- tests/workspace/persistence/sql/10_workspace_schema.sql
- tests/workspace/persistence/sql/20_workspace_roles.sql
- tests/workspace/persistence/sql/30_workspace_functions.sql

These are not timestamped shipping migrations. Leave supabase/migrations unchanged;
a later separately approved packaging Task must use the pinned Supabase CLI to create
an actual migration filename. The third PR68 SQL proposal is not adopted or executed.
Existing two operative migrations are fixed inputs; known legacy privilege findings
remain separately recorded rather than silently repaired by this workspace package.

Before any SQL PR, the owner must separately review/adopt the existing base-anchored
`migration-path-approval` record for the executable Task's exact four paths. This
proposal is not that record; do not write status owner-verified or an approver on the
owner's behalf. Baseline migrations, Auth code, CI and dependency declarations are
outside the initial candidate path set unless the owner explicitly adds them.

Proposed private schema `vellistry_workspace`, never Data API-exposed. Capabilities:

| Role | Proposed capability |
|---|---|
| anon/authenticated/PUBLIC | No new schema use, table writes or function EXECUTE; retain existing chapter/revision revocations |
| vellistry_workspace_gateway | NOLOGIN/NOBYPASSRLS, EXECUTE only on named private entrypoints; no direct table DML |
| vellistry_workspace_owner | NOLOGIN/NOBYPASSRLS function owner; SELECT scoped book/session/chapter data, INSERT canonical empty chapter/revision1, UPDATE chapter title/position/permitted metadata, DML only on private state/notes/journal |
| synthetic fixture login | Ephemeral disposable-only credential, membership only in gateway; no admin, service_role, BYPASSRLS or role-creation privileges |

Candidate entrypoints: read_workspace, apply_workspace_operation, lookup_workspace_operation.
Elevated execution is an explicitly unapproved security choice. If accepted, functions
must use fixed pg_catalog search_path and qualified relations, no dynamic SQL, explicit
PUBLIC/anon/authenticated EXECUTE revocation, restricted owner role and forced RLS on
private tables. Owner-role policies must enforce verified author/book scope, not rely
on authenticated policies applying to another role. Only the trusted gateway may install
transaction-scoped principal context. No client-visible principal setter or admin client.
Recheck role membership/default ACL/column privileges, including TRUNCATE/REFERENCES/TRIGGER.
Never grant UPDATE accepted_document/current_revision or UPDATE/DELETE revision history.
The initializer alone inserts the exact operative empty document and revision1 atomically.

No production LOGIN role or real credential provisioning is authorized. Fixture admin
is setup/teardown only; application tests must use the restricted synthetic login,
not an admin connection with SET ROLE as the sole privilege proof.

## Decision C — transaction and journal (proposed implementation detail)

Use the original P02..P05 wire/limits/invariants. One transaction locks the verified
session row then the owned book row, in that order everywhere. Never lock multiple books.
Reserve exact unique (verified_author,operationId) before effects; compare requested
book and canonical request hash on duplicate. Same request returns original terminal
receipt; changed book/payload/version rejects. A competing identical request waits
for commit/rollback, subject to bounded lock/statement timeouts; timeout is not proof
that another transaction failed. No externally committed in-progress journal row.

Proposed hash format: SHA256 over UTF8 JSON with fixed key order
`schemaVersion,bookId,expectedVersion,command`; command keys follow the original
discriminator field order, including chapterIds in supplied order. Reject unknown
keys before hashing; trim titles using the shared contract, preserve note text and
Unicode identity, and serialize validated safe integers canonically. Store a format
version so future serializers cannot reinterpret a pending identity. Do not store
note/manuscript text or tokens in receipts/logs.
The database must compute or independently verify the canonical digest; a caller-supplied
digest cannot authorize a different command. Require shared Node/PostgreSQL vectors
for Unicode, quotes/newlines, integer representations and reordered JSON object keys.

Within the same lock, compare workspace version. Reject inconsistent/gapped legacy
positions rather than repairing silently. For n<=1000 dense chapters, offset all
positions by n, then set final0..n-1. Both destination ranges are disjoint from their
occupied source ranges, preserving immediate uniqueness without negative ranks or
temporary deletes. Creation appends at n and inserts empty chapter/revision1 together.
Rename/reorder/notes leave existing manuscript/revision JSON and revision numbers intact.
Store book and chapter notes separately, not in accepted_document or nullable shared keys.
Effects/version increment/terminal receipt commit together; recorded rejection changes
no business version. Preserve owner+operation identity for book lifetime, no silent TTL.

Missing/malformed/mismatched receipt remains unknown. Do not resend with a new key.
After confirmed receipt, require a coherent owned readback at least its version before
unlocking writes. The current synthetic WorkspacePort lacks a terminal-rejection receipt
variant: the first slice tests the server contract only; a later separately reviewed
client adapter must handle that variant explicitly, never cast it to confirmed.

## Proposed executable acceptance and source envelope

At dispatch, resolve and record an approved PostgreSQL17 image digest/version and
existing pinned Node/pnpm/Python runtimes; no dependency upgrade. The API already has
pg8.16.3 as a devDependency, sufficient for a test-only PG adapter. Production dependency
promotion is NOT authorized. Bind container only to loopback on an ephemeral port;
reject non-loopback connection targets. Use invented IDs/text and temporary local
roles/passwords generated inside the test process, never print or commit them.

Candidate runner: `python tests/workspace/persistence/run_pg17.py --disposable --cases docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json`.
It must create its own uniquely identified container/database, apply the fixture Auth
schema, exact two operative migrations and four candidate SQL files, run every original
case plus session-lock, restricted-login and rollback/restart extensions, record exact
source/image/SQL hashes and version, then clean up only its owned resources. Capture
commands/exits, SQLSTATE and before/after rows without credentials or author text.
If local Docker/PG17 is unavailable, report BLOCKED; do not substitute hosted Supabase
or alter a manual/automatic workflow. A GitHub-hosted harness needs a separate bounded
authorization; existing CAS/restore PostgreSQL16 is not PG17 acceptance for this slice.

Require two concurrent restricted clients; barriers at session/book locks, first rank
pass, journal reservation, chapter/revision insert, notes write and commit acknowledgement.
Prove rollback at each point; one confirmed effect for duplicate create; restart and
independent restore preserve receipts/notes/order/revisions. Assert no foreign receipt
or existence leak, no direct author chapter/revision DML, no public elevated EXECUTE,
and no replay after missing acknowledgement. Check Unicode/byte/capacity/version bounds.
All27original runtime statuses remain NOT_RUN until genuine execution evidence exists.

Proposed non-SQL paths are enumerated in JSON, not a blanket module glob. No production
module registration, Next route, UI persistence wording or synthetic adapter substitution.
Future code must have its OWN explicit owner authorization, exact pinned Task/ContextPack,
actual tests/EB, independent review, ready CI and separate owner merge decision.

## Owner decision checklist (all pending)

1. Accept/revise private capability and transaction-scoped session-lock proposal; accept
   that stand-in tests do not establish provider logout/JWT security.
2. Authorize the exact local candidate paths, disposable17 resource/fixture envelope
   and restricted ephemeral test credential handling; adopt the SQL-path record in
   reviewed base before implementation.
3. Accept/revise wire/hash/retention/version/order/initialization semantics and negative
   acceptance extensions. Allocate the next unique executable Task only after approval.

No hosted access/credentials/users, live JWT probe, cloud migration, private manuscript,
paid API, production deployment, settings or broad gate promotion is requested by
this preparation. Ordinary owner merge applies; remediation delegation stays EXPIRED.

---
id: VEL-CONTRACT-IMP002-PERSISTENCE-001
title: Protected chapter and planning-note persistence contract
type: specification
status: proposed
created_at: 2026-10-24
owner: project_owner
version: 0.1.0
---

# Protected workspace persistence, version 1

PROPOSAL for owner/source review, prepared under Task0049. This is an implementation
contract, not an implemented API, approved migration, hosted observation or gate promotion.
Base: `a9e7c48bc7198f6f23f7be5bb77ad54f1f27e2e4` (PR111, post-main40111872132 PASS).

## FACT: existing boundary and reuse

ADR0006 selects Next.js, NestJS and Supabase. Next's existing books BFF verifies
the user, forwards an access token and expected-user guard, disables caching, and
distinguishes errors before dispatch from unknown outcomes after dispatch. Nest's
SupabaseAuthService independently calls Auth.getUser(token); it does not prove an
active session row. Reuse those boundaries, not another login system.

The two operative migrations create books, chapters and chapter_revisions. Chapters
have immediate UNIQUE(book_id,position), nonnegative integer positions, stable UUIDs,
accepted_document and current_revision. The second migration explicitly revokes
authenticated chapter/revision DML and grants SELECT only. Neither planning notes,
workspace versions nor operation receipts exist. No SQL source changes are made here.
The retained third migration proposal is not a persistence grant or hosted approval.

Task0047's controller/organizer is synthetic only. Its safe-integer versions and
author/book/operation guards are reuse constraints; its adapter is never a server.

## P01 — verified principal and protected transport

Proposed route: Next BFF -> existing Nest guard -> protected workspace service ->
private transactional database gateway. Never use a browser service-role client or
restore author-role chapter/revision writes. Reject body/query owner_id, actor,
accepted_document, revision, position and arbitrary SQL/function selectors.

Every read, mutation and receipt lookup independently verifies the current author;
every database operation rechecks books.owner_id and requested chapter.book_id.
HTTP headers and payload IDs are not identity authority. An expected-author header
is a mismatch detector only. Verify identity again before publishing async client
results. No foreign titles, notes, receipts or existence details appear on denial.

Writable-session freshness is a blocking contract dependency. Existing getUser
verification alone must not be labelled immediate logout revocation. A separately
reviewed server check must establish a current writable session and fail closed on
denial/unavailability. No JWT/session experiment or Auth change is performed here.
Until that check and the private gateway are accepted, production mutation routes
remain unavailable. Local fixtures may inject verified/denied/unavailable principals.

Recommended database capability for later review: a dedicated server-only role with
EXECUTE only on named private functions, no direct table DML and no browser access.
If elevated functions are necessary, their owner must be a narrowly privileged
NOLOGIN/NOBYPASSRLS role, never postgres/service_role; apply appropriate forced-RLS
policies, fixed pg_catalog search_path, qualified objects, no dynamic SQL, and explicit
revocation of PUBLIC/anon/authenticated EXECUTE and schema access. Ownership derives
from transaction-scoped identity installed only by the verified server, never a caller
owner argument. Inspect inherited/default grants as well as direct grants. These are
proposed SQL/security requirements requiring separate path approval, not granted powers.
Enable and force RLS on every new state/note/journal table. Explicit function-owner
policies must bind each row to the verified author through books; do not assume
authenticated-role policies automatically cover that owner. Grant only the columns
needed: no UPDATE of accepted_document/current_revision or UPDATE/DELETE of revision
history, and no TRUNCATE/REFERENCES/TRIGGER capability. Empty chapter/revision1 INSERT
is reachable only through the audited initializer. Audit inherited/PUBLIC privileges.

## P02 — wire contract and validation

Proposed endpoints, not implemented:

| Method/path | Request | Success |
|---|---|---|
| GET /v1/books/:bookId/workspace | no owner payload | owned WorkspaceDocument |
| POST /v1/books/:bookId/workspace/operations | OperationV1 below | terminal receipt |
| GET /v1/books/:bookId/workspace/operations/:operationId | no mutation | owned receipt or unknown |

OperationV1 is exactly `{schemaVersion:1, operationId:UUID, expectedVersion:number,
command:Command}`. Commands are discriminated, unknown fields rejected:
`{kind:create,title}`, `{kind:rename,chapterId,title}`,
`{kind:reorder,chapterIds:[UUID...]}`, `{kind:book-notes,body}` or
`{kind:chapter-notes,chapterId,body}`. IDs identify records, never order.
Titles use existing trim semantics and 1..180 UTF-16 units; notes are plain text,
0..10000 UTF-16 units. Reject nonstrings/null, invalid UTF-8/lone surrogates and NUL.
No Unicode normalization that rewrites writer intent. Server/function validation
must agree on whitespace and astral characters; PostgreSQL char_length alone is
not the same UTF-16 bound. Maximum request128KiB, maximum1000chapters per book.
Versions are integers0..9007199254740991; reject increment overflow before mutation.
Database constraints/functions must enforce equivalent bounds, not just UI forms.

WorkspaceDocument retains `{bookId,bookTitle,version,notes,chapters:[{id,bookId,title,notes}]}`.
No manuscript or revision document is returned by this organizer contract. Read in
one consistent database snapshot so order/notes/version cannot come from different
commits. A readback older than an observed/confirmed version is not a writable baseline.
The transport adapter maps book-notes/chapter-notes to Task0047's notes command;
that mapping requires tests and does not silently replace its synthetic adapter.

## P03 — storage and manuscript invariants

Proposed private relations: workspace_state(book_id PK, workspace_version),
book_planning_notes(book_id PK, body), chapter_planning_notes(book_id,chapter_id PK,body),
and workspace_operations(owner_id,operation_id PK,book_id,request_hash,outcome,version,
created_chapter_id,recorded_at). Chapter-note composite FK must match chapters(book_id,id).
Book FKs preserve ownership through books; no duplicate mutable child owner field.
Do not use a nullable chapter key to distinguish book notes. No accepted_document
or revision payload belongs in notes or receipt storage. Receipts store a versioned
canonical request digest, not note text, tokens or manuscript bodies. Private data
and receipts are not log payloads. Retain operation identities/results for the
book's lifetime; no silent TTL/retention expiry that enables replay duplication.

Rename/reorder/notes may change only their permitted metadata, planning-note rows,
workspace version and receipt. Existing accepted_document, current_revision and all
chapter_revisions remain byte/JSON-equivalent. Chapter creation is the sole initializer:
generate a stable UUID server-side, append at n, and atomically insert the canonical
empty Tiptap document/current_revision1 AND matching revision1. No caller manuscript
payload. The blank document is the operative migration's existing canonical default;
its exact representation must be pinned by the future implementation task. No delete,
save/editor, history rewrite, book transfer or manuscript revision append beyond this
empty initialization is in scope. Existing direct chapter/revision grants remain revoked.

## P04 — transaction, collision-safe order and concurrency

For every operation: start transaction; lock the owned books row FOR UPDATE; recheck
ownership/session scope; reserve the owner+operation identity; compare canonical
request hash/book ID on duplicate; then check expectedVersion while holding the lock.
All workspace writers use this same book lock. Never lock multiple books in one
operation. Current book deletion competes with that lock; a deleted/inaccessible book
returns neutral not-available and cannot be implicitly recreated by retry.

Reserve the journal identity before effects. A competing duplicate waits for the
first transaction's commit/rollback, then returns its terminal result if identical.
Same identity with different book/payload/version rejects without effects. The exact
unique key, not a hash collision, is authoritative. Lock/statement timeout or deadlock
after dispatch is unknown to the client until reconciliation; do not invent failure.

Reorder requires an exact unique permutation of all current same-book IDs, matching
the locked version. Validate dense old positions0..n-1 (n<=1000); inconsistent legacy
positions fail closed for a separately reviewed repair, not silent rewriting.
First move every position to position+n, then assign final0..n-1 by requested IDs,
inside the SAME transaction. Each destination range is disjoint from the occupied
range, so the existing immediate unique constraint cannot collide; no negative ranks,
temporary deletion or deferrable-constraint assumption. Ranges stay within1999.
Empty reorder is valid for an empty book. Preserve stable IDs, notes and revisions.

Create appends n under the same lock after checking n<1000. Rename/notes validate
chapter membership under that lock. A fresh valid operation, including a semantic
no-op, advances workspace_version exactly once. Stale expectedVersion produces a
terminal conflict with current version and no content/order/note change. Client reload
retains drafts for author review; never silently rebase/replay stale commands.

## P05 — receipts and unknown acknowledgement

Atomic commit includes effects, workspace version and terminal journal outcome.
Receipt is `{schemaVersion:1,operationId,bookId,outcome,version,createdChapterId?}`;
outcome is confirmed or rejected with bounded reason invalid/conflict. A confirmed
fresh operation reports expectedVersion+1; replay returns the ORIGINAL result/version,
not a second change. Recheck current authorization before returning any stored result.
Authorized validation/conflict rejections may commit a terminal journal record with
no business effects; they do not advance the version. Unauthorized requests reveal
no journal or foreign existence. Infrastructure failure rolls back the whole transaction.

Loss after dispatch, timeout, malformed/mismatched receipt, or missing receipt is
UNKNOWN, never definite failure. GET receipt performs no mutation. Return missing as
`{status:unknown}` (not a safe-retry signal); revoked access conceals data but does
not prove an earlier write failed. Keep the exact pending identity/intent scoped to
the original verified author/book across A->B->A. Block ordinary mutation/new-key retry.
Reconciliation may unlock only a matching authoritative terminal result. A receipt
confirmed while readback is stale/unavailable remains confirmed, but the workspace
stays unwritable until an authorized snapshot at least that version is obtained.
No automatic resubmission; any future resume action must retain the exact identity
and payload and be separately reviewed against retention guarantees.

## P06 — recovery, tests and release boundary

Executable acceptance cases are specified in VEL-IMP002-PERSISTENCE-CASES.json;
all database/runtime cases are NOT_RUN in Task0049. Future disposable PostgreSQL17
tests must run against the two operative migrations plus separately approved new
SQL, prove existing direct DML remains denied, and inspect effective grants/functions.
Inject failure after first rank pass, chapter insert, initial revision insert, notes
write, journal reservation and before commit: no partial effect/version/receipt.
Kill the client after commit: exactly one durable change, matching receipt and safe
readback; process restart preserves that result. Compare full before/after manuscript,
revision and note identities, not counts alone. Restore a disposable backup and
prove order/notes/versions/receipts retain their relationships. Never run these
experiments on hosted Supabase, real users or private manuscripts under this task.

Separate approval remains required for exact SQL paths/roles, writable-session policy,
new implementation scope and eventual hosted target/channel/migration acceptance.
No production Saved/privacy guarantee follows from source review or synthetic tests.

## Sources

- Pinned Task0049 SOURCE-EXCERPTS and the two operative migrations at the base above.
- Task0047 contract/controller tests and PLAN02 proposed ARCH-02/session constraints.
- [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security):
  public role membership is not row ownership; grants and RLS are separate controls.
- [Supabase sessions](https://supabase.com/docs/guides/auth/sessions): session controls
  and access-token lifetime require explicit security treatment.
- [PostgreSQL17 locking](https://www.postgresql.org/docs/17/explicit-locking.html):
  row locks serialize competing writers until transaction completion. Public docs
  are technical reference, not project authorization or observed hosted state.

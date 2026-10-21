# Reserved security-sensitive decisions — PR68 reconciliation

## FACT: authority and source
This packet requests no immediate action and records no new approval. The one-time repository remediation delegation excludes hosted Supabase access, including read-only inventory, CLI authentication, dry runs, migration execution and real/private manuscript use. The third migration definition is approved for planning only; that is not reviewed-base SQL-path authority. No such authority file is installed by Task0039.

Historical expected target is vellistry-dev. Its current identity, state, history and privileges have not been queried. The owner must explicitly confirm the intended project before any separately authorized connection. No credentials belong in the approval record or repository.

Exact source references, all at PR68 cbb379fa4a4eaa9f576f3abcce2c2258d22cc551:

| File | Git blob | SHA256 |
|---|---|---|
| supabase/migrations/20261009000000_initial_author_books.sql | 192a736d1a5d6ffc6f239c74ed61e7b8d2528b3b | 315e6a29f8072d4f556729784c07d4bf121666ef385b9cea4dfda36fded5ff74 |
| supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql | 0670a60f1c2e299e9771b9af1c677d97712174d9 | 6786561dcb325e14adbadec7b3bf879b8ab769841c86bf790dfbd2f19c222a65 |
| supabase/migrations/20261015171325_restrict_book_privileges.sql | 230b1540bb5b8962fd2b797d4f8a467d3c035978 | c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81 |
| tests/book_privileges_regression.sql | 5feac95772f93330b29150dbc135d766e7b0392e | bcba9b788151d27ee354f41aa658398f1ed0cbfe86cf0d97f7ae685cb0c54e6b |

The retained disposable PG17 proof is run39135149678 at098ab06a40a84eaba5880223f02e80fab3bf9e86, PostgreSQL17.11. BEFORE used explicitly injected broad grants and failed as expected; AFTER the unchanged proposal passed48ACL checks and supplemental RLS/forged-owner/forbidden-operation probes. Artifact ZIP SHA256d426612fbb1197e8e80b8b5a7cd8cfa97e24c2307af3fe786485cf0e416fbf62 and result SHA256fb1fefddde801315d661a6248d138473d0bb2ae9b525f2033c9b8c9d1f3f25cf are retained on main. These synthetic facts do not describe current hosted default grants.

## PROPOSAL: separate decisions, no automatic progression
1. **Repository SQL-source adoption:** owner reviews the exact third migration and fixture hashes and authorizes their exact paths through the existing reviewed-base mechanism. A new Task/immutable pack and distinct review/CI are required. This decision alone authorizes no hosted operation. Changed bytes need another review.
2. **Target and read-only inventory:** authorize the named development project and exact read-only observations: migration history/version ordering; books ownership and RLS/FORCE flags; table/sequence/schema/default privileges; PUBLIC,anon,authenticated and inherited memberships; privileged-role preservation; SECURITY DEFINER functions; Data API exposure and actual application transport. Record sanitized facts and detect drift before proposing execution. No unrelated schemas,Vault,seed/reset or role changes.
3. **CLI authentication and reviewed dry run:** separately authorize secure local authentication and target linking without recording credentials, followed by the exact three-version dry run. Stop for unknown history, conflicting versions, extra SQL or unexpected target. No push/reset follows merely because dry run succeeded.
4. **Migration execution:** authorize the exact target, source hashes, ordered versions and preconditions after review of the real inventory/dry-run evidence. Define a maintenance/rollback decision before execution: preserve schema/ACL/history evidence and an independently recoverable backup, stop on unexpected changes, and review any compensating privilege statement against the actual pre-state. Do not blindly restore excessive grants, drop tables, reset history or alter unrelated objects. Verification and rollback are distinct from deployment.
5. **Disposable hosted acceptance fixtures:** separately authorize exactly two synthetic Auth users and their owned test books, the minimum test credential access, permitted CRUD/RLS/forged ownership/TRUNCATE/REFERENCES/TRIGGER probes and explicit cleanup. Identify only owned fixture IDs; retain sanitized outcomes, not tokens,passwords or manuscripts. Prove cleanup rather than infer it from a script exit.
6. **Signed-out JWT and private-pilot boundary:** the grant correction does not revoke an already issued JWT. Existing disposable experiments demonstrate residual direct Data API access after logout. Before private-author data, choose and test a mitigation or explicitly approve a bounded residual-risk policy. A private gateway/session-check experiment is research evidence, not an implemented production transport or owner-approved security boundary. Private pilot stays NO-GO.
7. **Release/deployment:** production target, operations, monitoring, backup/recovery and release acceptance require separate owner authorization. Neither repository merge nor a development acceptance run opens G_RELEASE.

## INTERPRETATION and current disposition
Repository-only review and source preservation can finish while these external gates remain closed. Closing the obsolete PR68 integration branch as superseded does not approve its SQL or complete hosted Issue67/63 acceptance. Preserve its exact source branch and references for a future scoped decision. No current cloud state, migration execution, Auth fixture or private-pilot approval is inferred.

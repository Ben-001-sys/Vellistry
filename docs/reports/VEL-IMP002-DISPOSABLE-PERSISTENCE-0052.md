---
id: VEL-REPORT-IMP002-DISPOSABLE-PERSISTENCE-0052
title: Protected workspace persistence — disposable PostgreSQL experiment
type: execution-report
status: proposed-for-review
created_at: 2026-10-24
updated_at: 2026-10-25
owner: project_owner
---

# FACT — source, authority and integration

PR112 corrected the evidence requirement to **five** extensions without editing
Task0049's original contract, pack or evidence. Final reviewed head
`96428e5bacdc6c54b6619400a2babf402844cbf8` passed ready CI40132514762 and a fresh
trusted read-only review with no actionable defect. Merge
`0bb9ed3e5574a733af7a4e64369e52c286b091da` has the exact reviewed tree
`56b07d5ee36488112cea4b8d5da31b434459cb4f`.
[Post-main40132823005](https://github.com/Ben-001-sys/Vellistry/actions/runs/40132823005)
passed. Issue108 outcome6389575204 records this ordinary owner-authorized merge.

Standing compliance requires a reviewed-base SQL-path record. Task0051/CP0051
prepared that prerequisite separately in PR114. The owner explicitly approved its
conditional merge in this conversation. Exact head
`aa80cf8c8ba6073601c3f995fab5a0a600af8931` passed distinct review and ready40133422654;
merge `47de4306bc3fe963afc1aabbf3cebba217f3b24b` has the exact reviewed tree
`8d3e39084d1fde9aadbad20dcc9b1d2929752bf1`.
[Post-main40133719513](https://github.com/Ben-001-sys/Vellistry/actions/runs/40133719513)
passed. The integrated [Task0052 SQL-path record](../agent-workflow/authorizations/VEL-TASK-0052.yaml)
permits only the four LOCAL fixture files. These merges do not approve hosted or
shipping SQL. The skipped integrated SQL privilege CI job is not acceptance.

Task0052 pins the owner's six explicit experimental choices and the actual reviewed
base. Immutable CP0052 was committed as
`6967ea31b418caf75defaf57a56b1d78eabdb640` before executable code, with complete
historical task/source reconstruction and actual base-record validation. The per-PR manifest records the same canonical `pack_commit`.
Two source selections exceeded the standing90KB pack budget before any pack existed;
all preparation commits remain. Removing redundant full ADR/prose copies retained
the canonical protocol, all27cases, exact JSON packet, operative migrations and
explicit owner boundary (81080canonical bytes). No immutable pack was overwritten.

# FACT — implementation and boundaries

The new Nest `WorkspaceService` is **not registered in AppModule or a production
route**. An injected verified-principal provider and persistence port reuse the
existing architecture without adding authentication. Only synthetic principals are
implemented in this experiment. Pre/post-response identity checks conceal stale
read, write and receipt results. Pending writes are keyed by verified author/book;
unknown outcomes block ordinary new-key retry. A terminal receipt plus readback at
least its confirmed version is required before unlocking. This process-local service
is not a shipping browser draft/transport adapter or durable client pending store.

The test-only adapter uses the unchanged frozen API dev dependency pg8.23.1 and
parameterized queries. No dependency promotion or package/lockfile change occurred.
Only these new SQL files execute in the owned disposable database:

- `tests/workspace/persistence/sql/00_fixture_auth.sql`
- `tests/workspace/persistence/sql/10_workspace_schema.sql`
- `tests/workspace/persistence/sql/20_workspace_roles.sql`
- `tests/workspace/persistence/sql/30_workspace_functions.sql`

The exact two operative migrations are applied unchanged between the synthetic Auth
stand-in and workspace fixtures. The separately retained third migration is not
adopted. No Supabase project, hosted credentials, migration history or settings are
accessed. Synthetic fixture logins/passwords are generated inside the runner, omitted
from command arguments/reports and removed with the owned resources.

The private gateway has EXECUTE on three named entrypoints only. Function and lock
owners are NOLOGIN/NOBYPASSRLS; runtime logins cannot assume them or call the internal
helper. Forced/scoped RLS, fixed qualified objects/search paths and narrow column
privileges protect the tables. The helper's UPDATE(id) is a real confined DML
capability, experimentally approved solely to enable session/book row locks, not a
production grant. Direct DML, TRUNCATE, REFERENCES, TRIGGER, helper invocation,
owner-role assumption and private table/schema creation are denied from real
restricted connections. Global default function EXECUTE is revoked for fixture roles.

Every transaction locks the synthetic session FOR SHARE, then owned book FOR UPDATE,
and rechecks verification age, token/session expiry and ownership after acquiring
locks. Session DELETE and non-key expiry UPDATE serialize with that share lock. This
establishes only the stand-in's transaction behavior: **real Supabase logout/JWT
enforcement is not tested**. The private SQL login is a trusted server capability;
this experiment does not claim an attacker holding that credential cannot install
forged custom principal settings. No browser/header/body access to that capability
exists here, and no production gateway is opened.

Chapter creation atomically inserts a stable UUID, dense position, exact operative
blank document, current_revision1, revision1, version and receipt. Rename/reorder/
separate notes preserve existing manuscript/revision JSON. Reorder validates the
complete same-book permutation and dense prior order, offsets ranks by n and assigns
final ranks inside one transaction. CAS and the exact author+operation unique key
serialize conflicting/duplicate requests. PostgreSQL independently computes the
versioned canonical SHA256 digest; receipts omit note/manuscript text. Authorized
rejections are durable without advancing business version. No journal TTL permits
same-book replay duplication; book deletion ends that book's identity lifetime.

# FACT — actual verification

The [acceptance matrix](evidence/VEL-TASK-0052/acceptance-results.json) contains all
**27 original cases plus five extensions:32PASS**. Original Task0049 case bytes and
historical NOT_RUN statuses are unchanged; actual outcomes are separate evidence.
Current database-code source: `5f8e0254c8664dafeb6d74b05e1465d848d14281`. Current run ID:
`6cf33351aa624104ba28def20b034560`. Initial run3f1b78/3b557ec below is historical, not final-head evidence.

Actual engine: PostgreSQL17.11, x86_64-pc-linux-musl, Alpine GCC15.2.0.
Pinned image:
`postgres@sha256:eee6c6e1b0894fa4fe0075eb054af9fd1cf39a35321c2d4110626cfe506411fb`.
The runner rejects remote Docker endpoints/external bindings and strips inherited
database/secret environment variables. It binds127.0.0.1 on an ephemeral port,
checks ownership labels before deletion and verifies absence using successful
container/volume listings. The final runtime JSON records source/SQL/image hashes,
actual version, commands/exits, endpoint guard probes and successful cleanup.

Actual evidence includes:

- Both authors mutating their own books; foreign/missing books, cross-book chapters,
  forged fields, missing/expired/unverified sessions and foreign receipts denied.
- Real two-connection row-lock barriers, CAS conflict and concurrent identical create
  producing one chapter/revision/version; no title-based identity.
- Six rollback points: journal reservation, chapter insert, revision insert, first
  rank pass, notes write and before commit; complete row identities unchanged.
- A child process exiting79 after real COMMIT before delivering its receipt; lookup
  and coherent readback reconcile one effect. Corrupted acknowledgement remains
  unknown and cannot trigger an ordinary new-key duplicate.
- Actual55P03 lock timeout,40P01 deadlock and terminated backend before COMMIT;
  rollback/unknown classification with no surviving partial write.
- Fresh adapter process, real database restart, backup restored to a distinct owned
  disposable database and exact complete-row hashes/receipt replay surviving both.
- Actual astral-character UTF16 title/note boundaries, invalid UTF8 SQLSTATE22021,
  canonical Node/PostgreSQL digest vectors and altered-digest denial.
- Old-but-real snapshot injection confined to its verified author, minimum-version
  readback and account-switch/post-read/write/lookup identity checks. This is a
  controlled stale-transport test, not a real production replica acceptance test.

Frozen install passed on the committed pack source. On sourcec0f9634, all6new unit
tests,41workspace,67Library and23preflight tests, API/web builds and typechecks passed,
all exit0. Those application files/dependencies are identical at the later database
harness source; unchanged checks are reused honestly rather than reattributed.
Final selected-task/pack/bundle validation, distinct final-head review and actual
ready CI are reported in the PR ledger after the final SHA exists.

## Historical failed attempts and corrections

All runtime JSONs/case results are preserved; none is relabelled PASS:

| Run/source | Result | Demonstrated cause / correction |
|---|---|---|
|0ad219/9bb7857|21/32|Cache fixture reused A snapshot for B; restart did not rediscover ephemeral port and poisoned later connections. Fixed test scope and actual port discovery.|
|9fae72/a902e8f|29/32|TEMP-table FK cannot reference persistent table, so REFERENCES probe returned the wrong SQLSTATE. Replaced with isolated owned persistent probe tables.|
|8253a3/f1fdf80|28/32|New negative tests reproduced nonfinite expiry acceptance and global PUBLIC default EXECUTE; fixed both in local SQL.|
|752f58/c0f9634|32/32|First passing corrected SQL source; earlier Unicode coverage was weaker than final explicit-escape variants.|
|4e4167/8e35d3f|32/32|Added real process loss/deadlock/expiry-update variants.|
|c6cbe1/12ed5cf|32/32|Restored Unicode literals after Windows default-codepage rewrite; explicit escapes prove actual astral/UTF8 boundaries; hardened local/cleanup guards.|
|3f1b78/3b557ec|32/32|Final added post-write/lookup identity changes and malformed receipt variants.|

The six original new Node unit tests retained genuine astral literals throughout.
Earlier JavaScript harness edits used implicit Windows decoding and distorted some
Unicode literals; final source uses explicit UTF8 reads and Unicode escapes. Earlier
runtime passes are not substituted for final Unicode evidence.

The first local full-governance attempt ran278tests with1failure/2errors because HEAD
advanced fromc0f9634 while its generated exporter scratch pack still pinned that HEAD.
This is a concurrent verification setup failure, not a production regression. Its
raw output/exit1 is retained. Scratch packs are not committed. Frozen-HEAD affected
fixture rerun and full final-head CI must be inspected before acceptance; no pending
suite is labelled passing. A sandbox Corepack cache/network denial was resolved by
using the already installed frozen toolchain with the required execution permission.

# INTERPRETATION

The executed local capability supports the bounded server persistence experiment.
These results do not establish hosted schema compatibility, Data API exposure,
actual JWT/session revocation, a production gateway or durable browser draft
recovery. PostgreSQL17 acceptance is separate from the pre-existing CI recovery
fixture and its separately skipped privilege job. Local tests are not new automatic
CI coverage: no workflow was changed.

# PROPOSAL / remaining owner boundary

Review the exact implementation head and CI, then make a separate owner feature
merge decision. No automatic feature merge is authorized. Later work must separately
approve production packaging, real verified principal/session integration, secure
credentials/connection provisioning, protected routes/client adapter and hosted
metadata/migration/RLS/security acceptance. No broad gate, private pilot or production
release is promoted. Issue108 stays open; the remediation delegation remains expired.


# Bounded independent-review correction — 2026-10-25

A fresh trusted read-only review at08cbe453451844a774b7476bbe8eed181b43ce62
reported three P2 defects. Its original output/metadata is preserved in evidence.
New regressions at9fcb3a4 demonstrated6PASS/3FAIL before correction: delayed rejection
could delete a newer unknown operation lock; observed reads did not advance the
minimum version; some readiness/cleanup Docker subprocesses inherited a different
environment. Fixee47558 checks pending-object identity, advances authorized read
floors, and uses/pins the validated local environment for every subprocess. The
actual database rejection/readback cases now also exercise those races.

A mocked-only negative test then proved rejected local-context validation could
still reach cleanup daemon calls (9PASS/1FAIL at481df0b). The startup guard now makes
no daemon calls if validation fails. Its initial mock construction error is separately
preserved, not mistaken for that demonstrated failure. No remote daemon was contacted.

After the interrupted session Docker restarted with host time24–28ms ahead of the
VM. Stricter legitimate-operation42501 failures are retained in runse64428/9d9a32,
with measured clocks. Synthetic principals now explicitly represent verification
completed1second before dispatch; expired-token fixtures use a clear1second-old
expiry. Strict future/stale/session checks in service/SQL were NOT relaxed. This is
fixture timing, not an approved production clock-tolerance policy. A subsequent
32PASS run543c05 verified the corrections with conflicting unreachable-loopback
Docker settings. Run d7c24c was BLOCKED before any case because pg_isready observed
the official image's temporary init socket before shutdown. Readiness now waits for
the final127.0.0.1 TCP listener; its regression guard is included in the focused suite.

Final corrected acceptance:32PASS at the source/run in the current matrix, including
two real post-reconciliation races and identical owned cleanup with deliberately
conflicting local-only inherited Docker settings. Final focused tests:10PASS. Renewed
builds at ea83e7d and final typechecks pass; shipping application files/dependencies
are byte-identical to that build. The41workspace/67Library/23preflight source assets
are unchanged from their recorded successful run; final ready CI reruns applicable
checks. All before-fix failures and all BLOCKED attempts remain in raw evidence.
Final exact-head review/CI references will be in PR115's external ledger. No immutable
pack, original Task49 evidence, production routes/Auth/dependencies/CI or hosted
scope changed. Separate owner feature merge remains required.

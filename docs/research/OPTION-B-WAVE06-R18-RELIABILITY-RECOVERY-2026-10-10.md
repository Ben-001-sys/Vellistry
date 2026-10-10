---
id: VEL-RES-OPTIONB-WAVE06-R18-20261010-001
title: One-pass operational save, recovery, deletion and private pilot objectives
type: research-evidence-and-mvp-operating-policy
status: bounded-offline-tests-passed-live-recovery-not-run
created_at: 2026-10-10
updated_at: 2026-10-10
author: project-research
version: 1.0.0
sources:
  - docs/research/PAIR-06-LEGAL-OPS-RESTORE-2026-10-09.md
  - docs/research/experiments/test_pair06_postgres_operations.py
  - docs/research/experiments/pair06_postgres.sql
  - docs/research/experiments/pair03_portability.py
  - docs/research/experiments/test_pair03_portability.py
  - docs/research/spikes/r18-framework-slice/shared/persistence.mjs
  - docs/research/spikes/r18-framework-slice/shared/drafts.mjs
  - docs/research/experiments/wave06_recovery_contract.py
  - docs/research/experiments/test_wave06_recovery_contract.py
  - https://supabase.com/docs/guides/platform/backups
  - https://supabase.com/docs/guides/deployment/going-into-prod
  - https://supabase.com/docs/guides/storage/management/download-objects
  - https://supabase.com/docs/guides/database/postgres/row-level-security
related_research: [R18, R15, R11, R10]
---

# Option B Wave 6 R18 — one-pass operational reliability and recovery closeout

**Owner instruction:** Complete R18 and G10 once, choose a bounded MVP decision, and advance without repeated research questions. **No production application feature code, external secrets, actual users or managed operations were changed or deployed by this research.** Historical fixed-fixture successes, new simulated contracts and real production requirements are kept separate.

## Independent verified historical experiment — what exists

**[Pair 06 GitHub Actions #38006268912](https://github.com/Ben-001-sys/Vellistry/actions/runs/38006268912), exact code SHA `d26750aa6f695c2ebbce352cefb6c3c7979a3fe3`, succeeded 12/12 real disposable PostgreSQL 16 operations**. The tests did actually execute: authenticated-looking *fixture actor string*, atomic revision + append-only history, stale CAS rejection, owner/book mismatch by fixture values, a forced failure after update and before journal with transaction rollback, repeated idempotency key after a simulated lost response, denial of key reuse with different payload/actor, competing writes where one wins, recovery with another request, and `pg_dump -Fc` / `pg_restore` to a clean second PostgreSQL database with matching data checksum.

**Security and loss limitation:** That function accepts a **caller-provided `actor` string**, not a verified Supabase login; it is not secure as an exposed application endpoint. Its lost-ack test repeats a SQL call, **not** actual HTTP request loss. The restored schema covers invented chapter, revision and request rows, **not** all users, Storage objects, credentials, emails, audit logs, approved Story Profile events or encryption.

**Additional previously measured fixtures:** [Wave 2 browser 20/20](https://github.com/Ben-001-sys/Vellistry/actions/runs/38014264258) on corrected synthetic Tiptap research tested save/reload and 3,000-word Unicode chapters; Pair03 synthetic portable project ZIP test **10/10** supports chapter/revision/approved-versus-pending canon/rules within explicit bounded archive constraints. R18 browser Dexie copies are local temporary research state, **not** encrypted backup or cross-device access guarantee.

## NEW Wave 6 regression contract (research-only)

[New 20-case deterministic Python suite](experiments/test_wave06_recovery_contract.py) covers local unsynced status, rollback without false ACK, commit-and-lost-response retry, mismatched duplicate key, stale competing revisions, other-author denial as an explicit **simulation**, account-local draft partition, account switching and later return, delayed save ACK not discarding subsequently typed text, clean ACK clearing only the acknowledged draft, transient crash/recovery snapshot, DB + object backup inventory, checksum corruption, independent restore, deletion tombstone versus scheduled backup purge, and recovery target evidence. It has **no real PostgreSQL/network connection**; GitHub CI status must be added only after execution.

## Failure, response and acceptance matrix for actual MVP

| Scenario | Required user-visible and system behavior | Existing evidence | Production acceptance status |
|---|---|---|---|
| Save succeeds | Only the persisted revision-confirmed server result shows **Saved**; journal contains accepted document and revision | Prior real PostgreSQL transactional fixture PASS | Integrated Nest+Supabase session transaction **NOT RUN** |
| Browser offline / save queued | Keep local private unsynced draft, clearly show **Stored on this device / Not synced**; manual writing continues without AI | R18 Dexie synthetic browser experiments | Multi-browser disk eviction and actual device encryption **NOT RUN** |
| Failure before transaction commit | Rollback means accepted manuscript unchanged; local draft and Retry remain | Pair06 forced SQL exception PASS | Integrated failure injection **NOT RUN** |
| Commit occurs but HTTP response lost | Retry the **same idempotency key**; query receipt/current revision; never duplicate writing or display success without confirmation | Pair06 simulated acknowledgement loss, not real network | Real HTTP disconnect after commit **NOT RUN** |
| New typing occurs while old save pending | An old successful ACK **may not clear or replace newer local text** | New synthetic Python contract | Browser/IndexedDB and Nest integrated test **NOT RUN** |
| Competing tabs / stale revision | Reject stale CAS; preserve both drafts; show a recoverable comparison and explicit user choice, **no silent last-write-wins** | Pair06 concurrent PostgreSQL PASS (synthetic actor) | Real browser actor/session CAS **NOT RUN** |
| Other account/book | Return 403/404 without leaking manuscript or local draft; prevent direct PostgREST JWT bypass | Pair06 fake author name guard; Wave3 identified real JWT residual read gap | **RELEASE BLOCKER**, session+grant/RLS integration unverified |
| AI suggestion Accept/Undo | Must use same auth/CAS/idempotency/revision journal; undo creates a new compensating revision, never wipes later work | Wave5 18/18 state model privately run, NOT real server | Actual persisted undo and account switch **NOT RUN** |
| Backup/restore | Snapshot books, accepted revisions, rules and profile approval state **plus** encrypted Storage objects, Auth reintegration/config, keys separately; restore clean test environment and compare counts/hashes/permissions | Pair06 limited DB restore and Pair03 ZIP PASS; [Supabase backup facts](https://supabase.com/docs/guides/platform/backups) | **RELEASE BLOCKER**, complete restore and off-site encryption NOT RUN |
| Deletion | Deny access immediately, tombstone and queue DB/Storage/local/provider/backups purge; distinguish pending vs confirmed per location | New synthetic tombstone fixture | **RELEASE BLOCKER**, actual erasure/retention/legal policy NOT RUN |
| Provider failure or paid user-key limit | Never alter accepted prose/drafts, show error and retry choice; no Vellistry-paid fallback or automatic fee | Wave4 provider analysis, Pair04 offline preflight | Live user BYOK error-path NOT RUN |

## Fresh official-source verification

- [Supabase Database Backups](https://supabase.com/docs/guides/platform/backups): Free projects should arrange their own regular CLI dumps and **off-site backups**; managed daily backups are paid-tier features. Database backups **do not include file objects stored through the Storage API**; only Storage metadata is in the database. An encrypted SQL dump alone is not a complete author backup.
- [Storage download guide](https://supabase.com/docs/guides/storage/management/download-objects): objects require a separate export/inventory; credentials and object custody must be secured. Authentication credentials, notification configuration and local browser drafts are still separate recovery boundaries.
- [Production checklist](https://supabase.com/docs/guides/deployment/going-into-prod): project pause on Free, SMTP/deliverability, and PITR considerations; do not promise always-on availability or seconds-level disaster rollback on Free.
- [RLS guidance](https://supabase.com/docs/guides/database/postgres/row-level-security): explicit table grants and per-operation policies must be tested; no research-only `actor` function is a valid authorization boundary.

## Single decisive MVP recovery objectives — internal private pilot ONLY

**Selected pilot design targets:** **RPO 24 hours** (at most one day since the latest independently verified successful backup under a major infrastructure/data-store loss) and **RTO 48 hours** (restore a functioning private pilot within two days). These are chosen conservative **planning limits**, not claimed achieved or promised to public writers. **Fail-open is prohibited**: if encrypted offsite DB AND Storage/required config snapshots and a restore drill cannot meet these targets, do **not** invite authors to rely on the service; restrict the environment to disposable invented content.

**Why distinguish ordinary saves:** A chapter displaying **Saved** requires exact revision persistence and a durable server acknowledgement within a working database. It is **not** proof of zero data loss from regional disaster, admin deletion or ransomware. An offline draft is explicitly **not synced**. Never market the 24h RPO as zero-lost-writing promise.

**Implementation readiness checks for private pilot:** operator assigned; snapshot schedule that can meet 24h when successful (test observed age rather than mere cron existence); backups encrypted at rest and in transit; separate keys; independent offsite custody; Store metadata and object payload consistency; clean environment restore rehearsal meeting 48h; cross-account RLS and source chronology preserved; observed outcome documented. The exact commercial hosting plan and permanent retention still require the real operator to commit resources.

**Status and handoff:** This one-pass R18 technical research is COMPLETE as a bounded, source-grounded operational contract. Previous real PostgreSQL/ZIP evidence is not production recovery. The newly committed Python suite is research-only and must be reported against its exact CI head. Real incident drills, Auth/storage/key restoration, legal deletion requests and author workloads remain **NOT RUN** and block live release, but not **synthetic-only visual design**. G10 handles the final design-entry scope separately.

## Actual new Wave 6 CI result — 2026-10-10

Independent [Option B Wave 6 recovery workflow #38029701966](https://github.com/Ben-001-sys/Vellistry/actions/runs/38029701966) completed **SUCCESS**. Its exact offline fixture ran **20 of 20** new failure/retry/account/draft/delete/recovery tests **PASS**, and the unchanged Pair03 synthetic archive suite ran **10 of 10 PASS**. These run in Python without cloud credentials or real manuscript content. The evidence is not proof of real browser IndexedDB durability, external HTTP timing, real Supabase service identity, full Storage-object or Auth restore, offsite encrypted backup, deletion purge or an observed RPO/RTO.

**No launch metric is certified:** The 24h/48h values are conditional PRIVATE PILOT **targets only**. The new archive fixture checks that a proposed archive represents both DB-like and object-like data; it **does not itself encrypt or place an archive offsite**. Actual clean-room operator drills and signed-off security/retention remain release blockers.

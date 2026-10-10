---
id: VEL-RES-PAIR06-20261009-001
type: research-evidence-and-decision-register
status: bounded-research-not-legal-clearance
created_at: 2026-10-09
updated_at: 2026-10-09
related_research: [R14, R18, R21]
---

# Pair 06 — IP, privacy, economics and PostgreSQL fault/recovery

**Research only.** No production permissions, paid service, policy approval, deployment or legal compliance attestation. The owner's two-track research limit is respected: R14/R21, then R18 as Pair 06.

## R14/R21 — primary source findings and decisions

| Topic | Source-supported observation | Required action |
|---|---|---|
| Calibre | GPL-3 and numerous bundled component notices; https://github.com/kovidgoyal/calibre/blob/master/COPYRIGHT | Review actual binary/container distribution, required attribution and corresponding-source obligations. SaaS operation and distributing a derivative are different scenarios; counsel must assess the real packaging. |
| Next.js and NestJS | MIT licenses: https://github.com/vercel/next.js/blob/canary/license.md and https://github.com/nestjs/nest/blob/master/LICENSE | License and dependency lock audit plus notices |
| JSZip | Dual MIT/GPLv3: https://github.com/Stuk/jszip | Document selected option and preserve the notice |
| Tiptap | Chosen open core; paid extensions not assumed: https://github.com/ueberdosis/tiptap | Review exact version/extensions/transitive dependency SBOM |
| Ghana personal data | Official DPC organizational guidance: https://dpc.gov.gh/for-organisations/ and https://dpc.gov.gh/compliance/ | Assess whether Vellistry must register, its controller/processor roles, privacy notice, safeguards, cross-border transfers and other jurisdictions with qualified review |
| Writer rights | Accepted author-controlled product vision: docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md | Propose retaining writer copyright; permission only for necessary processing; define importing others' copyrighted text and AI-output ownership; not yet approved terms |
| Data disclosure | Pair04 provider policies vary by free model/tier | Separate opt-in for excerpt/canon/rules sharing, recipient, retention/training, BYOK key lifecycle; never infer confidential handling because API is free |
| Supabase free use | https://supabase.com/docs/guides/platform/billing-on-supabase — quota includes 500 MB DB/project, 1 GB storage, 5 GB uncached egress | Measured capacity and resource budget, inactivity pause risks, no assumption of 24/7 free production |
| Supabase backups | https://supabase.com/docs/guides/platform/backups — automatic daily managed backup for paid tiers, recommends CLI dumps and off-site backup on Free | Owner-run dump, independently encrypted off-site retention and tested clean restore; do not promise free PITR |
| Operations | https://supabase.com/docs/guides/deployment/going-into-prod — deployment checklist documents support/SMTP and Free reliability boundaries | Approve SMTP, monitoring, incident responsibilities, backup custody, RPO/RTO and staffing |

The 15-entry evidence/status registry is in [PAIR-06-LEGAL-OPERATING-RISK-REGISTER.json](PAIR-06-LEGAL-OPERATING-RISK-REGISTER.json), with eight schema/coverage assertions. **A test of the risk register does not constitute a legal audit.**

### Proposed zero-mandatory-paid operating outline, NOT approved or costed

Author writing must work without AI; optional local or eligible free API models require their own terms and measured quality. Self-managed Next/Nest and disposable/local Supabase are test paths, not free public hosting guarantees. Calibre can run in an isolated worker after distribution and untrusted-file audit, but Pair03 measured DOCX heading-style loss. Backup requires encrypted off-site copies and regular full restore drills; encryption, key custody, storage and personnel still incur obligations and costs.

**Owner decisions:** final privacy/manuscript terms, Ghana and other jurisdictional DPC compliance, license/SBOM obligations, AI recipient and retention, free-vs-self-host operating envelope, backup cadence/custody/retention and acceptable RPO/RTO. No invented numeric recovery promise.

## R18 — real PostgreSQL transaction and backup study

Reused: PR #23 Postgres HTTP revisions, PR #25 Dexie/browser unsynced recovery, PR #36 temporary Nest Auth/session gateway, Pair03 JSON ZIP tests and VEL-SPEC-001 chapter save contract. Each is limited research evidence, not a production integration.

New live fixture in [pair06_postgres.sql](experiments/pair06_postgres.sql) and [test_pair06_postgres_operations.py](experiments/test_pair06_postgres_operations.py). A disposable PostgreSQL 16 service tests:
- atomic accepted chapter revision and journal;
- stale compare-and-swap denial without lost updates;
- synthetic author/book mismatch rejection;
- forced exception AFTER modifying chapter but BEFORE journal insertion: full rollback;
- lost HTTP acknowledgment simulated as identical idempotent request retry;
- idempotency-key reuse with changed actor/payload rejected;
- competing concurrent save attempts with distinct keys: one winner;
- actual pg_dump custom-format backup restored to a **different clean PostgreSQL database**, then compared.

**Security warning:** The experimental stored function accepts a string 'actor' parameter. It is NOT authenticated, not an RLS/security boundary, and must NEVER be deployed as a public endpoint. Existing Nest/Supabase draft app code is unchanged. No realistic crash recovery RPO, large-scale pool stress, encrypted/offsite backup, actual Auth identities, remote storage, restore into complete Vellistry app, or real author manuscripts are tested.

### Remaining product/owner gates

| Dimension | Status | Required before public use |
|---|---|---|
| Licenses, IP and legal privacy | OPEN | Owner-reviewed policies and release-mode counsel/license check |
| No-mandatory-paid economics | OPEN | Measured resource/hosting limits, SMTP/backup and service expectations |
| Database CAS and restore | AWAIT CI | Actual Postgres synthetic test results, exact SHA |
| Real authenticated save | NOT RUN | Integrate restricted Nest + RLS, UI saved indicators, idempotency, crash/retry tests |
| Backup/RPO/RTO | NOT RUN | Encryption, isolated offsite restore, ownership, assets, deletion and owner recovery targets |
| Research-to-design gate | NOT AUTHORIZED YET | Review outstanding Pairs01–06 risks then approve Figma Make/Lovable exploration and canonical editable Figma Design |

This is a research closeout proposal, not approval to merge application features, buy paid products or start the design/implementation phase.


## Exact-head runtime evidence — 2026-10-09

**Tested code SHA:** d26750aa6f695c2ebbce352cefb6c3c7979a3fe3. [GitHub Actions #38006268912](https://github.com/Ben-001-sys/Vellistry/actions/runs/38006268912) completed **SUCCESS** in both independent jobs.

- **R14/R21 risk-register integrity: 8/8 passed.** Checks establish that evidence has concrete provenance, release clearance is not assumed, Ghana compliance/counsel decisions remain open, and no free managed-backup/RPO claim is invented. Not legal compliance or an SBOM audit.
- **R18 disposable PostgreSQL 16: 12/12 passed**, tested with actual SQL transactions and tool-driven dump/restore. Atomic revision/journal, stale conflict, wrong author and book fixture guards, explicit fault-after-update rollback, idempotency key retries and changed-payload denial, concurrent competing revisions, and a clean separate-database pg_dump/pg_restore data comparison passed.
- Postgres logs show expected injected SQL exceptions. These are successful negative tests, not unexpected CI failures.
- **Unverified:** application Auth/RLS, interrupted real HTTP acknowledgment, background jobs, browser offline/online, production outage, real RPO/RTO, encrypted remote backup custody, assets/Auth restoration and manuscript load/performance.

**Disposition:** Research experiment evidence produced; not production release authorization. PR #42 remains draft/unmerged. Owner decision is whether to accept bounded research with explicit live-integration/legal/user-study obligations carried to design/implementation, or require additional evidence before design. No automatic approval inferred.

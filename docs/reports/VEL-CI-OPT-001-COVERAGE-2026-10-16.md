---
id: VEL-RPT-CI-OPT-001-COVERAGE
title: Pre-edit CI coverage audit and proposed replacement map
type: ci-coverage-audit
status: proposed-for-owner-review
created_at: 2026-10-16
updated_at: 2026-10-16
version: 0.1.0
---

# Pre-edit coverage audit

FACT: merged main is 4b3996ef7cda878e1af3d679454bd1bb873a79c2 with 25 workflows.
Every original parsed workflow, trigger, job, command, service and Git blob is
retained in evidence/VEL-CI-OPT-001/workflow-baseline.json. This matrix is
committed and pinned BEFORE CI edits. No trigger has yet been disabled.

PROPOSAL: one primary automatic workflow, unfiltered PR events (including
ready_for_review), push main full baseline, and workflow_dispatch full current
verification. All 25 originals become manual-only without changing their jobs.
Current governance checks run once on every PR. App/security/recovery use a
conservative classifier; unknown executable/config paths, CI, lockfile, auth,
SQL and migrations select security integration. Ordinary prose-only docs skip
builds/containers. PR cancellation never groups separate main commits.

| Old workflow | Original jobs | Coverage after consolidation |
|---|---|---|
| agent-workflow.yml | validate-handoffs | governance: all root Python tests, pinned validator, exact-head check, Stage 4/5 packs and ZIP artifacts |
| combined-main-baseline.yml | knowledge-and-synthetic, app-build, postgres-synthetic-recovery | governance: all root Python + existing Pair03-06 offline tests; application: one frozen install/build/check; recovery: Pair06 real PostgreSQL CAS/restore |
| implementation-foundation.yml | build | application: single library-isolation suite and Nest/Next build/check |
| implementation-readiness.yml | preparation-guard | governance: readiness validator, all negative root tests, Stage5 pack artifact |
| k2-supabase-auth-rls.yml | real-supabase-security | application (security conditional steps): same five real Auth/RLS/session/lockdown/private-gateway probes, local ephemeral services and cleanup |
| knowledge-metadata.yml | metadata | governance: metadata validator and positive/negative tests |
| option-b-wave02-docx-fidelity.yml | docx-structural-and-portable-recovery, pandoc-independent-word-style-measurement | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| option-b-wave03-privacy-story-profiles.yml | scoped-security-threat-model, temporal-canon-extractor-errors | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| option-b-wave06-recovery.yml | offline-failure-and-recovery-matrix | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| pair03-r11-r07-research.yml | backup-text-and-temporal-profile, calibre-docx-fidelity | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike; duplicated offline tests stay in governance; Pair06 CAS/restore stays conditional in recovery |
| pair04-offline-provider-corpus.yml | no-network-research-contract | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike; duplicated offline tests stay in governance; Pair06 CAS/restore stays conditional in recovery |
| pair05-synthetic-rules-tiptap.yml | synthetic-scoped-guidance, tiptap-proposed-edits | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike; duplicated offline tests stay in governance; Pair06 CAS/restore stays conditional in recovery |
| pair06-legal-postgres-recovery.yml | license-privacy-evidence-index, postgres-cas-backup-restore | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike; duplicated offline tests stay in governance; Pair06 CAS/restore stays conditional in recovery |
| r01-manifest.yml | synthetic-parser | governance: root R01 tests |
| r01-review-packet.yml | review-packet-synthetic | governance: root R01 review/mapping tests |
| r05-tiptap3-spike.yml | editor-spike | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| r06-synthetic-research.yml | synthetic-contract | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| r07-story-state-contract.yml | story-state | governance: existing offline story-state tests |
| r18-browser-recovery.yml | browser-recovery | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| r18-framework-comparison.yml | authoring | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| r18-postgres-memory.yml | postgres-memory | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| r18-retrieval-benchmark.yml | lexical, semantic | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| r18-story-memory.yml | memory | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| stage4-independent-cursor-evidence.yml | independently-reproduce | governance: original artifact hashes + 17 archived tests; manual original Python-version matrix retained |
| stage4-synthetic-chapter-contract.yml | chapter-contract | governance: root chapter tests; archived workflow retains compileall on manual dispatch |

Historical browser/Tiptap/semantic-vector/DOCX/Pandoc/Calibre research remains
reproducible by explicit dispatch of the preserved workflow, not an automatic
shipping-app security gate. This does not promote spike evidence to product
acceptance. Full primary dispatch runs all current core governance, application,
Auth/RLS/session and PostgreSQL recovery checks; it does not run every archived
research benchmark. Those manual jobs retain their original separate controls.

PR #68 proposed book_privileges_regression.sql and hosted preflight are NOT on
this main. Do not cherry-pick its product/schema changes. Primary CI will run
those checks when their source lands; removal of an existing integration test
must fail closed. Their absence on current main is a cross-PR coverage gap,
not a claimed privilege regression PASS. The known excess books-default grant
and hosted acceptance hold remain owned by PR #68, untouched by this task.

FACT: classic main protection returns 404 "Branch not protected" and effective
branch rules return []. No check-name admin update is currently required or
performed. Proposed stable final name is "Vellistry CI gate"; owner alone may
configure protection later. Existing names are preserved in manual archives.

FACT: fresh latest-300 run sample and counts are retained separately. Read-only
billing usage API returned 404 and explicitly required additional user scope.
No scope refresh or billing change is authorized/attempted. Actual billable
minutes/cost reduction is unavailable, never inferred from run starts or
wall-clock spans (which include blocked/queued runs). Local routing projections
must be labeled structural estimates until real post-merge observations exist.

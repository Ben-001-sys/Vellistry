---
id: VEL-EB-0075
title: IMP003D native IndexedDB draft recovery
type: execution-bundle
status: proposed-for-review
created_at: '2026-11-02'
version: 0.1.0
task_id: VEL-TASK-0075
context_pack_id: VEL-CP-0075
base_commit: f46ca165d59f5ce4aeb9f5f159b3f7d204206907
agent:
  name: Codex
  model: Codex runtime model not independently reported
  runner: Windows isolated worktree
  role: primary bounded implementer
sources:
- docs/agent-workflow/inputs/VEL-TASK-0075/OWNER-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0075/CONTRACT.md
evidence:
- docs/reports/VEL-IMP003D-DURABLE-DRAFTS-0075.md
- docs/reports/evidence/VEL-TASK-0075/summary.json
review:
  status: pending
  approved_by: null
  evidence: null
implementation_source_commit: f4d337d655fd5e9bdf3b4fb152d63854bc68d5af
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - command: corepack.cmd pnpm check
    source_commit: f4d337d655fd5e9bdf3b4fb152d63854bc68d5af
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0075/completed-check.txt
  - command: corepack.cmd pnpm build
    source_commit: f4d337d655fd5e9bdf3b4fb152d63854bc68d5af
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0075/completed-build.txt
  - command: corepack.cmd pnpm test:workspace-contract
    source_commit: f4d337d655fd5e9bdf3b4fb152d63854bc68d5af
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0075/completed-workspace.txt
  - command: corepack.cmd pnpm test:library-isolation
    source_commit: f4d337d655fd5e9bdf3b4fb152d63854bc68d5af
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0075/completed-library.txt
  - command: corepack.cmd pnpm test:auth-mfa
    source_commit: f4d337d655fd5e9bdf3b4fb152d63854bc68d5af
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0075/completed-mfa.txt
  - command: corepack.cmd pnpm test:hosted-preflight
    source_commit: f4d337d655fd5e9bdf3b4fb152d63854bc68d5af
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0075/completed-preflight.txt
  - command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-principal-adapter.spec.ts
    source_commit: f4d337d655fd5e9bdf3b4fb152d63854bc68d5af
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0075/completed-principal.txt
  - command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts
    source_commit: f4d337d655fd5e9bdf3b4fb152d63854bc68d5af
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0075/completed-units.txt
  - command: node tests/editor/durable-draft-browser.mjs (existing Playwright module
      and Chrome executable injected through VEL_PLAYWRIGHT_PATH/VEL_CHROMIUM_PATH)
    source_commit: f4d337d655fd5e9bdf3b4fb152d63854bc68d5af
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0075/completed-browser.txt
---

# IMP003D completed implementation evidence

## Work performed
FACT: owner approved and dispatched IMP003D on2November2026 in this conversation; attributed relay https://github.com/Ben-001-sys/Vellistry/issues/131#issuecomment-6574506056 . Reviewed basee6242df9fc2fdb14817c2f6f58387e2844184664 integrates PR134, post-main41411204986 SUCCESS. Task0075 was unused. Committed sources348dbfa/f46ca16; targeted whole-render CP0075 validation PASS before immutable commit0c5c60732338570403564954ed060d00d9e2a9f6, before operative code. Final operative/tested sourcef4d337d655fd5e9bdf3b4fb152d63854bc68d5af. Earlier sources/evidence and owner changes preserved; Task0072 reservation and older Task/CP/EB unchanged.

Native asynchronous IndexedDB adapter: database version1, drafts store, record schema1; key [author,book,chapter,client]. Records validate exact Tiptap document, accepted revision baseline, original pending SaveOperation, monotonic sequence and timestamp. Read/write/discard success requires transaction.oncomplete. Atomic readwrite CAS rejects competing-tab updates. Explicit discard erases manuscript content while retaining a content-free sequence tombstone against stale-tab ABA resurrection. No automatic logout deletion or global retention policy.

Reuses existing recovery/composition/session/document contracts. The synchronous working copy is explicitly memory-only; IndexedDB is a separate async port. Immutable snapshots queue independently of later typing; every edit advances generation even while writes are blocked. Queue draining includes writes enqueued by async recovery. Discard is serialized and cannot clear newer memory. Absent/tombstoned records invalidate clean caches; dirty copies remain separate. Accepted reads are epoch/owner fenced before wrapper mutations. Revision mismatch conceals recovery and pauses writing, protecting accepted text and the sole old memory copy.

Recovery requires explicit author action. Fresh matching sequence permits persistence retry after transient failure. When storage remains unavailable, verified retained memory can still be recovered with persistence blocked and an accurate warning. A changed/discarded clean cache is not restored by that fallback. Pending operation IDs retain immutable target/payload; pending identity must be locally committed and rechecked before synthetic remote dispatch. Pending operations cannot be discarded. New typing survives prior ACKs. Local completion and remote revision acknowledgement remain distinct.

Unregistered preview uses the same Tiptap session/editor through EditorContent and existing formatting commands. Original memory-only ManuscriptEditor and callers stay unchanged. Copy distinguishes local pending/stored/recovery/failure from test-server revision/unknown states, with visible device-loss/shared-profile/no application encryption/no cross-device backup warning. No production route imports this preview.

## Actual verification
At committed sourcef4d337d: check/build,98workspace-editor (6new schema units),81Library,55MFA,23offlinepreflight,52principal,21persistence units PASS exit0. Exact commands/exits/source in completed-results.json and completed-* logs. Frozen pnpm10.18.0 install, unchanged lock/dependencies. Metadata/readiness/traceability and targeted immutable full-render pack validation PASS. Complete governance/security/recovery requires actual exact-head CI; interrupted local full governance is not called PASS.

Actual Chrome/Chromium156.0.8078.76 disposable persistent-profile loopback suite33PASS exit0. Real Tiptap keyboard edit, native write completion, actual page reload/explicit recovery exact Unicode/whitespace/bold JSON, repeated reload, same-profile second tab, author isolation, multi-tab CAS, discard/ABA, delayed local ACK/newer text, original unknown operation ID, native transaction.abort, malformed/oversized/incompatible records, revision mismatch, account/chapter switches, all11before/after negative cases. completed-browser-results.json records actual local execution, not an existing browser CI job. Native fixture binds127.0.0.1 ephemeral; page networking outside that origin denied. HTTP closed/zero sockets; profile removed and zero temporary profiles remain. Quota/unavailable/blocked faults are injected. Interrupted-write probe reloads during injected delay before native dispatch; no browser-process-kill/device restart/eviction/power-loss claim.

Local unchanged PG17 attempt at earlierb4782c0 exited1: Docker Desktop Linux daemon unavailable, no test container/volume created. local-pg-daemon-unavailable.json preserves this environment BLOCKED result, not database PASS or implementation regression. Existing mandatory GitHub-hosted disposable PG/HTTP/restart/CAS jobs must execute in ReadyCI. Synthetic remote transport is per-page memory; missing receipts after reload remain unknown and do not prove server durability.

## Review corrections and preserved history
Nine independent P2 findings and two related self-review defects were demonstrated/corrected. Raw review-source.txt,review-round2.txt,review-round3-preserved.txt,review-round4-preserved.txt and historical before/after outputs preserve exact findings. Group1: memory loss on rebind, pending identity before remote dispatch, contradictory copy (3FAIL/3PASS). Group2: discard/new-edit race, clean tombstone resurrection, stale-read wrapper mutation (3FAIL/3PASS). Group3: explicit retry, blocked edit generation, plus self-identified stale memory baseline overwrite (3FAIL/3PASS). Group4: unavailable-storage memory recovery (1FAIL/1PASS), plus clean observed-tombstone fallback (historicalFAIL/currentPASS). All11cases are part of current33PASS.

Preserve initial pack-source size rejection (LANGUAGE.md>35000bytes; exact blob reference/applicable requirements substituted before pack commit), interrupted all-history validation, initial TypeScript literal error, browser bundle resolution failure, sandbox corepack registry restriction, negative-harness cleanup race/timeout, premature async recovery assertion, interrupted local governance and Docker failure. Independent runtime spawnEPERM remains BLOCKED, never PASS. Evidence assembly then hit a Windows cp1252 UnicodeDecodeError; partial evidence commit0d724c1 is preserved and corrected in this UTF-8 evidence-only follow-up. It is not an implementation/test PASS or a reason to rewrite earlier source.

Draft41430365271,41431386378 and41433101082 remain FAILURE at their deliberate Draft gates despite governance PASS; superseded41432971719 CANCELLED. Any later runs retain their actual statuses in the PR ledger. Task0074 Draft41196908733 and all earlier failures unchanged. Legacy integrated SQL privilege SKIPPED, not SQL acceptance. R01-R08 NOT_RUN;N-12/historical independent spawnEPERM BLOCKED. Issues108/131 OPEN; remediation delegation EXPIRED.

## Interpretations and limitations
Native completion/reload prove recovery in the tested profile only. No application encryption, shared-profile protection, permanent retention, cross-device backup, browser/device restart durability, power/disk-failure safety, real Auth/session assurance or hosted acceptance. Caret/Undo persistence across reload is not claimed; records store document/operation evidence. Persistent failure keeps verified memory accessible through explicit recovery; closing without a completed transaction can still lose it. No silent replacement of another tab's durable copy.

## Proposals and external gates
No owner acceptance, merge, deployment or successor authority. Distinct completed-head source review and actual Draft/ReadyCI outcomes are recorded in PR135's exact-head evidence ledger after final head exists; pending owner-review metadata cannot grant approval. Production PRINCIPAL/SESSION/GATEWAY/TRANSPORT/PACKAGING/reconciliation, hosted acceptance and private pilot remain separately gated.

## Artifacts and scope
Task0075/immutable CP0075/EB0075,8operative paths, bounded report and complete inventory.json. Per-commit manifest declares all original executor/origins and pending owner disposition. Only new native adapter/controller/preview/tests, existing test entrypoint and leading current-state snapshot change. No SQL/migrations/grants/Auth/CI/workflow/policy/dependency/production-route change, hosted operations, credentials, real manuscripts, paid API, deployment or merge. Scratch packs/caches/profiles excluded. Earlier nonimmutable report snapshots retained in Git commits3a3060d,b950303,e93bd09; immutable records were not rewritten.

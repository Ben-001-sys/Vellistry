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
implementation_source_commit: 105b140d288a2ca1fb9fe105e3fd8106f44ab0b1
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - command: corepack.cmd pnpm check
    source_commit: 105b140d288a2ca1fb9fe105e3fd8106f44ab0b1
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0075/native-final-check.txt
  - command: corepack.cmd pnpm build
    source_commit: 105b140d288a2ca1fb9fe105e3fd8106f44ab0b1
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0075/native-final-build.txt
  - command: corepack.cmd pnpm test:workspace-contract
    source_commit: 105b140d288a2ca1fb9fe105e3fd8106f44ab0b1
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0075/native-final-workspace.txt
  - command: corepack.cmd pnpm test:library-isolation
    source_commit: 105b140d288a2ca1fb9fe105e3fd8106f44ab0b1
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0075/native-final-library.txt
  - command: corepack.cmd pnpm test:auth-mfa
    source_commit: 105b140d288a2ca1fb9fe105e3fd8106f44ab0b1
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0075/native-final-mfa.txt
  - command: corepack.cmd pnpm test:hosted-preflight
    source_commit: 105b140d288a2ca1fb9fe105e3fd8106f44ab0b1
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0075/native-final-preflight.txt
  - command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-principal-adapter.spec.ts
    source_commit: 105b140d288a2ca1fb9fe105e3fd8106f44ab0b1
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0075/native-final-principal.txt
  - command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts
    source_commit: 105b140d288a2ca1fb9fe105e3fd8106f44ab0b1
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0075/native-final-units.txt
  - command: node tests/editor/durable-draft-browser.mjs (existing Playwright module
      and Chrome executable injected through VEL_PLAYWRIGHT_PATH/VEL_CHROMIUM_PATH)
    source_commit: 105b140d288a2ca1fb9fe105e3fd8106f44ab0b1
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0075/native-final-browser.txt
---


# IMP003D local draft recovery evidence

## Work performed
FACT: owner dispatched this bounded task in this conversation on2November2026. Relay https://github.com/Ben-001-sys/Vellistry/issues/131#issuecomment-6574506056 . Verified main/basee6242df9fc2fdb14817c2f6f58387e2844184664 (PR134/post-main41411204986 PASS). Unique Task0075 sources348dbfa/f46ca16; CP0075 whole-render validation PASS before immutable commit0c5c60732338570403564954ed060d00d9e2a9f6, preceding all code. Current operative and executed source105b140d288a2ca1fb9fe105e3fd8106f44ab0b1. Task0072 reservation, older immutable evidence, owner checkout/environment files preserved.

Native asynchronous IndexedDB database version1/store drafts/record schema1. Scope key [author,book,chapter,client]; exact validated document, accepted baseline, original pending SaveOperation, monotonic sequence and timestamp. Write success only on transaction.oncomplete. Atomic readwrite CAS rejects competing tabs. Explicit discard erases content but retains a content-free sequence tombstone against stale-tab resurrection. No automatic logout deletion or global retention policy.

Existing recovery/composition/session/document contracts reused: their working copy is memory-only, durable storage a separate async port. Immutable snapshots queue separately from continued typing. Every edit advances generation even while persistence is blocked. Queue draining follows writes enqueued by recovery. Serialized discard retains newer edits; clean caches follow tombstones while dirty memory remains separate. Scope/owner/epoch checks conceal stale continuations. Baseline mismatch never restores stale text over accepted content and pauses editing until explicit resolution. Explicit recovery can retry healthy storage or recover only into memory with persistence blocked and a warning when storage stays unavailable. Changed clean copies cannot bypass an observed discard.

Unknown remote identity/payload remain original. Before remote invocation, pending identity must be locally committed and rechecked. Positive runtime proof of NEVER invoking the remote port enables only an explicit send of that same operation. Proof is removed before invocation and is not invented after rejection or reload. A separate lookup-only path validates the original receipt even when its manuscript is too stale to restore; local pending evidence is retired atomically without replacing newer accepted text. No fabricated receipts and no lookup-as-write. Accepted prose is unchanged during stale reconciliation; older recovery text remains available for explicit discard/review. Pending operations cannot be discarded while unresolved.

Unregistered synthetic preview renders the existing Tiptap session/editor via EditorContent/formatting commands, with accurate local versus test-server statuses. Original memory-only editor/callers unchanged. No production route imports this preview. Device loss/shared-profile/no application encryption/no cross-device backup warning present.

## Facts and evidence
All current commands executed at committed source105b140d288a2ca1fb9fe105e3fd8106f44ab0b1: check/build,101workspace-editor (9new schema/opening units),81Library,55MFA,23offlinepreflight,52principal,21persistence units PASS exit0. Exact commands/exits in native-final-results.json and native-final-* logs. Actual Chrome/156.0.8078.76 persistent-profile suite41PASS at the same source; native-final-browser-results.json binds execution SHA and bundle SHA256. Frozen pnpm10.18.0 install and lock/dependencies unchanged. Metadata/readiness/traceability, immutable whole-render pack and EB schema validations PASS. Final full governance/security/PG/recovery must still be independently observed in exact-head CI.

Native browser evidence includes actual keyboard Tiptap edit, numeric Unicode codepoint guard, exact original spaces, real IndexedDB completion, reload/explicit recovery exact JSON, repeated reload, same-profile second tab, author concealment, CAS, real transaction abort, injected quota/unavailability/blocked failures, corrupt/oversized/incompatible records, interrupted pre-dispatch persistence, delayed ACK/newer edits, account/chapter changes, all13historical browser regressions and4additional pending-protocol security cases. Two new cases inject a temporary open error/blocked event, then prove real native opening/write/reload succeeds in the SAME adapter before page recreation. Focused opening units show old6PASS/2FAIL and corrected9PASS, including rejection on close and late connection cleanup. Failed opening promises are reset by attempt identity; opening is bounded5seconds before any document write, and late connections are closed.

The41browser cases are actual local Chromium execution, not an added browser CI job. Fixture binds127.0.0.1 ephemeral and page networking outside its origin is denied. HTTP listener closed/zero sockets/profile removed/no temporary profiles. Injected quota/block conditions are not physical disk-exhaustion evidence. Interrupted persistence reloads during a synthetic delay before native dispatch, not a browser process/power-loss experiment.

Local unchanged PG17 attempt at earlierb4782c0 exited1 because Docker Desktop Linux daemon was unavailable; no test container/volume created. local-pg-daemon-unavailable.json is environment BLOCKED, not a database regression or PASS. Existing CI-owned PG/HTTP/restart/CAS remain required in ReadyCI. Synthetic remote transport is per-page memory; it does not establish durable server acceptance across reload.

## Interpretations
Native transaction completion/reload prove recovery in this profile only. No encryption, shared-profile protection, permanent retention, cross-device backup, disk/power safety or production Auth/session assurance. Caret/Undo persistence across reload not claimed. Uncommitted memory can be lost on close. No-dispatch proof is runtime-only; after reload unresolved operations remain conservative unknown until authoritative evidence. Receipt lookup never resubmits an uncertain operation under a new identity.

## Proposals
No owner acceptance, merge, deployment or successor permission inferred. Completed-head distinct source review and actual Draft/ReadyCI are exact-head PR135 ledger entries after final head exists. Production PRINCIPAL/SESSION/GATEWAY/TRANSPORT/PACKAGING/reconciliation, hosted acceptance and private pilot remain separately gated.

## Tests
Twelve independent P2 findings plus2related self-review defects have historical failing/current passing evidence:13browser regressions plus2focused opening-unit regressions. Four additional pending-protocol negative checks and2native reopening cases complete the41browser cases; the ninth unit checks pending-open disposal. Raw review/source/round2/round3/round4/round5 evidence and before/after logs retained. Preserve pack-size rejection, interrupted full historical validation/governance, initial type/bundle errors, negative harness cleanup/timeout and premature async assertion, local Docker failure, partial UTF8 evidence commit0d724c1 and missing EB-heading failure. CI41435511491 failed Head changed after source evidence;41435762887 failed missing Facts and evidence section. Both are genuine failures; controls unchanged, evidence repaired. Repeated Windows text decoding also inflated the browser fixture until size validation rejected it: unicode-fixture-rejected.json/pending-final-browser.txt preserve that FAIL. Earlier passes reflect their source's fixture text; intended Unicode acceptance is established only by the corrected escaped/codepoint-guarded final run. No historical outcome backfilled.

Draft41430365271,41431386378,41433101082 retain FAILURE at deliberate Draft gate despite governance PASS;41432971719 CANCELLED. Task0074 Draft41196908733 and all earlier failures unchanged. Every independent runtime spawnEPERM remains BLOCKED. Legacy SQL privilege SKIPPED, not SQL acceptance;R01-R08 NOT_RUN;N-12/historical EPERM BLOCKED. Issues108/131 OPEN, remediation delegation EXPIRED.

## Artifacts
Task0075/immutable CP0075/EB0075,8operative paths, bounded report, complete inventory.json, source/test hashes and all raw failures/results. Manifest declares each original commit and pending owner disposition. Scratch packets/caches/profile data excluded. Historical report snapshots remain in Git, including3a3060d,b950303,e93bd09,d2cd8ad; immutable records were not rewritten.

## Risks
Only synthetic identities/prose, no production editor/save registration. No SQL/migration/grant/Auth/CI-policy/workflow/dependency change, hosted operations, credentials, private manuscripts, paid calls or deployment. Local storage is unencrypted, evictable, user-deletable and accessible within the same browser profile. Unknown saves and concurrent-copy conflicts require explicit resolution, never silent overwrite.

## Reviewer disposition
Owner review pending. Actual completed-head distinct review and exact ReadyCI must be linked externally; implementation and green checks cannot grant merge or production acceptance.

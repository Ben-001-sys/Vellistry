---
id: VEL-REPORT-IMP003D-0075
type: implementation-report
status: proposed-for-review
created_at: 2026-11-02
owner: project_owner
---

# IMP003D local draft recovery evidence

## Work performed
FACT: owner dispatched this bounded task in this conversation on2November2026. Relay https://github.com/Ben-001-sys/Vellistry/issues/131#issuecomment-6574506056 . Verified main/basee6242df9fc2fdb14817c2f6f58387e2844184664 (PR134/post-main41411204986 PASS). Unique Task0075 sources348dbfa/f46ca16; CP0075 whole-render validation PASS before immutable commit0c5c60732338570403564954ed060d00d9e2a9f6, preceding all code. Current operative source77024b478fa0f8ce176adf98af1fe7a56eafd1b9; application code last changed377991d. Task0072 reservation, older immutable evidence, owner checkout/environment files preserved.

Native asynchronous IndexedDB database version1/store drafts/record schema1. Scope key [author,book,chapter,client]; exact validated document, accepted baseline, original pending SaveOperation, monotonic sequence and timestamp. Write success only on transaction.oncomplete. Atomic readwrite CAS rejects competing tabs. Explicit discard erases content but retains a content-free sequence tombstone against stale-tab resurrection. No automatic logout deletion or global retention policy.

Existing recovery/composition/session/document contracts reused: their working copy is memory-only, durable storage a separate async port. Immutable snapshots queue separately from continued typing. Every edit advances generation even while persistence is blocked. Queue draining follows writes enqueued by recovery. Serialized discard retains newer edits; clean caches follow tombstones while dirty memory remains separate. Scope/owner/epoch checks conceal stale continuations. Baseline mismatch never restores stale text over accepted content and pauses editing until explicit resolution. Explicit recovery can retry healthy storage or recover only into memory with persistence blocked and a warning when storage stays unavailable. Changed clean copies cannot bypass an observed discard.

Unknown remote identity/payload remain original. Before remote invocation, pending identity must be locally committed and rechecked. Positive runtime proof of NEVER invoking the remote port enables only an explicit send of that same operation. Proof is removed before invocation and is not invented after rejection or reload. A separate lookup-only path validates the original receipt even when its manuscript is too stale to restore; local pending evidence is retired atomically without replacing newer accepted text. No fabricated receipts and no lookup-as-write. Accepted prose is unchanged during stale reconciliation; older recovery text remains available for explicit discard/review. Pending operations cannot be discarded while unresolved.

Unregistered synthetic preview renders the existing Tiptap session/editor via EditorContent/formatting commands, with accurate local versus test-server statuses. Original memory-only editor/callers unchanged. No production route imports this preview. Device loss/shared-profile/no application encryption/no cross-device backup warning present.

## Facts and evidence
Application suites at committed377991dd59ea12f61a595edaa81ddf00eddffb0b: check/build,98workspace-editor (6new schema units),81Library,55MFA,23offlinepreflight,52principal,21persistence units PASS exit0, in pending-final-results.json and pending-final-* logs. Only browser test assertions changed afterward; these application/test sources and conditions remain byte-identical. Actual final browser39PASS at77024b4 in browser-accepted.txt/results.json; records exact Git execution SHA, Chrome/156.0.8078.76 and bundle SHA256. Frozen pnpm10.18.0 install, no dependency/lockfile changes. Metadata/readiness/traceability and targeted full-render pack validation PASS; full final-head governance/security/PG/recovery must actually run in CI.

Actual Chromium persistent-profile loopback tests: keyboard Tiptap edit, exact numeric codepoint guard for cafe-accent/Chinese/fox plus initial leading/trailing-space assertion, real completed IndexedDB write, reload/explicit recovery/exact JSON, repeated reload, new tab, author denial, CAS conflict, native abort, injected quota/unavailable/blocked faults, corrupt/oversized/schema mismatch, interruption before native dispatch, delayed ACK/new typing, account/chapter switches, discard/tombstone races, explicit memory-only recovery, original-ID retry only with no-dispatch proof, receipt-only stale reconciliation, malformed receipt rejection, no proof after call/reload and stale-author suppression. HTTP127.0.0.1 ephemeral, page requests outside fixture origin denied; profile removed/listener closed/zero sockets, no temporary profiles remain. No browser/device restart, eviction or power-loss durability claim. These39cases are local browser execution, not a new browser CI job.

Local unchanged PG17 attempt at earlierb4782c0 exit1: Docker Desktop Linux daemon unavailable, no test container/volume created. Environment BLOCKED record local-pg-daemon-unavailable.json is not a database PASS or implementation regression. Existing CI-owned PG/HTTP/restart/CAS jobs remain required. Synthetic remote is per-page memory; it does not prove durable server acceptance after reload.

## Interpretations
Native transaction completion/reload prove recovery in this profile only. No encryption, shared-profile protection, permanent retention, cross-device backup, disk/power safety or production Auth/session assurance. Caret/Undo persistence across reload not claimed. Uncommitted memory can be lost on close. No-dispatch proof is runtime-only; after reload unresolved operations remain conservative unknown until authoritative evidence. Receipt lookup never resubmits an uncertain operation under a new identity.

## Proposals
No owner acceptance, merge, deployment or successor permission inferred. Completed-head distinct source review and actual Draft/ReadyCI are exact-head PR135 ledger entries after final head exists. Production PRINCIPAL/SESSION/GATEWAY/TRANSPORT/PACKAGING/reconciliation, hosted acceptance and private pilot remain separately gated.

## Tests
Eleven independent P2 findings plus2related self-review defects have historical failing/current passing regressions (13cases), with4additional pending-protocol negative checks, all included in39. Raw review/source/round2/round3/round4/round5 evidence and before/after logs retained. Preserve pack-size rejection, interrupted full historical validation/governance, initial type/bundle errors, negative harness cleanup/timeout and premature async assertion, local Docker failure, partial UTF8 evidence commit0d724c1 and missing EB-heading failure. CI41435511491 failed Head changed after source evidence;41435762887 failed missing Facts and evidence section. Both are genuine failures; controls unchanged, evidence repaired. Repeated Windows text decoding also inflated the browser fixture until size validation rejected it: unicode-fixture-rejected.json/pending-final-browser.txt preserve that FAIL. Earlier passes reflect their source's fixture text; intended Unicode acceptance is established only by the corrected escaped/codepoint-guarded final run. No historical outcome backfilled.

Draft41430365271,41431386378,41433101082 retain FAILURE at deliberate Draft gate despite governance PASS;41432971719 CANCELLED. Task0074 Draft41196908733 and all earlier failures unchanged. Every independent runtime spawnEPERM remains BLOCKED. Legacy SQL privilege SKIPPED, not SQL acceptance;R01-R08 NOT_RUN;N-12/historical EPERM BLOCKED. Issues108/131 OPEN, remediation delegation EXPIRED.

## Artifacts
Task0075/immutable CP0075/EB0075,8operative paths, bounded report, complete inventory.json, source/test hashes and all raw failures/results. Manifest declares each original commit and pending owner disposition. Scratch packets/caches/profile data excluded. Historical report snapshots remain in Git, including3a3060d,b950303,e93bd09,d2cd8ad; immutable records were not rewritten.

## Risks
Only synthetic identities/prose, no production editor/save registration. No SQL/migration/grant/Auth/CI-policy/workflow/dependency change, hosted operations, credentials, private manuscripts, paid calls or deployment. Local storage is unencrypted, evictable, user-deletable and accessible within the same browser profile. Unknown saves and concurrent-copy conflicts require explicit resolution, never silent overwrite.

## Reviewer disposition
Owner review pending. Actual completed-head distinct review and exact ReadyCI must be linked externally; implementation and green checks cannot grant merge or production acceptance.

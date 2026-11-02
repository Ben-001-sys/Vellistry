---
id: VEL-REPORT-IMP003D-0075
type: implementation-report
status: proposed-for-review
created_at: 2026-11-02
owner: project_owner
---


## Current correction round — source a718424

FACT: the completed-head review of3a3060d found3additionalP2 races, preserved in review-round2.txt. Native Chromium negative regressions against source9bb43d6 produce3FAIL; corrected3PASS. Discard now shares the write queue, checks newer edits after asynchronous ACK, and preserves their memory entries. Clean cache entries are cleared on absent/tombstoned durable records; genuinely dirty memory remains separate. Transport reads capture and revalidate wrapper epoch/owner before any recovery-state mutation. No scope expansion, new Task/pack, SQL/CI/dependency/Auth change.

At committed operative sourcea718424f702ec69038fcf96f15ded2e0503ce2c4:28actualChromium cases,98workspace/editor,81Library,55MFA,23preflight,52principal,21persistenceunits,check/build all PASS exit0. See round2-* raw evidence, round2-results.json and round2-browser-results.json. Profile/HTTP cleanup verified. Earlier9bb43d6/25case evidence below remains historical. Draft CI41430365271 governance PASS; final gate FAILURE by Draft design; expensive jobs SKIPPED. Do not call Draft run success. Updated completed-head review and actual ReadyCI remain external gates.
# IMP003D execution evidence

## Work performed
FACT: owner dispatched IMP003D in this conversation; relay https://github.com/Ben-001-sys/Vellistry/issues/131#issuecomment-6574506056 . Task0075 unused in reviewed main; committed sources348dbfa/f46ca16; targeted whole-render CP validated and committed0c5c607 before codeb4782c0. Corrected operative source9bb43d6. Owner root checkout changes and all older evidence preserved. No Task0072 consumption.

Native IndexedDB database version1/store drafts, schema1 exact records scoped author/book/chapter/client with accepted baseline, validated exact document, original pending SaveOperation, monotonic sequence and timestamp. Completion resolves only transaction.oncomplete; readwrite CAS serializes competing tabs. Explicit discard removes prose/pending-free draft via a content-free version tombstone to prevent ABA/stale-tab resurrection. No automatic logout deletion or retention policy.

The existing recovery/composition/session/contracts are reused with an explicitly in-memory working copy and separate async durable port. Captured snapshots serialize through a queue; scope/epoch/owner checks conceal stale author/chapter completions. Failed persistence retains scope-bound memory across rebinds. Revision mismatch hides recovery without overwriting accepted text. Explicit recovery never writes an accepted server revision. Unknown remote identity retained; remote dispatch waits for matching pending identity to be durably recorded. Pending operations cannot be discarded. Newer typing survives prior ACKs. Conflicting tab persistence pauses with memory retained; no silent last-write-wins.

Unregistered test-only preview uses the same Tiptap session/editor through EditorContent and existing formatting commands, avoiding the older memory-only component's unconditional disclaimer. That original component and its existing callers are unchanged. Status distinguishes local storage/not-synced from test remote revision/unknown. Device loss/shared-profile/no application encryption/no cross-device backup notice present.

## Facts and evidence
Actual local Chrome156.0.8078.76 persistent-profile loopback suite25PASS: Tiptap keyboard edit/native transaction completion/reload/explicit recovery exactUnicode whitespace bold JSON; repeated reload; new same-profile tab; multi-tab CAS; author concealment; explicit discard; newer typing/pending ACK; original unknown ID; actual native transaction.abort; interrupted persistence; schema/corruption/oversize/revision mismatch; chapter/account delay; tombstone ABA. HTTP bound127.0.0.1 ephemeral; browser network denied outside fixture origin; profile removed, HTTP closed/zero sockets. Quota/unavailable/blocked failures are injected, not real disk exhaustion. No browser/device restart, eviction or power-loss durability claim.

At operative source9bb43d6: check/build98workspace-editor (6new schema units),81Library,55MFA,23offlinepreflight,52principal,21persistence units PASS exit0. Metadata/readiness/traceability and targeted immutable pack PASS. Frozen dependencies unchanged, pnpm10.18.0. Full local governance interrupted for review corrections, not PASS; exact-head full CI still required. Local PG attempt at earlierb4782c0 exited1 because Docker Desktop Linux daemon missing, no test resources created. Preserve runtime log as BLOCKED environment evidence, not database failure or success. Existing unchanged PG/HTTP/restart/CAS required in ReadyCI.

## Interpretations
Native completed transactions and actual reload prove this browser-profile recovery only. They do not establish permanent retention, disk/power-failure safety, encryption, protection from a shared profile, server persistence, live Auth, session revocation, hosted acceptance or production write privileges. Synthetic transport is per-page memory, so missing receipts after reload remain unknown; it is not a durable server. Independent runtime attempt spawnEPERM BLOCKED, never PASS.

## Proposals
Separate owner decision after completed-head review and actual ReadyCI. No merge or successor authority. Production PRINCIPAL/SESSION/GATEWAY/TRANSPORT/PACKAGING and hosted/private-pilot remain gated.

## Tests and historical failures
Raw logs/summary preserve initial oversized pack-source failure; interrupted all-history validation; initial TypeScript literal mismatch and browser module-resolution failure; sandbox corepack registry restriction; initial negative-harness cleanup race/timeout;3independent P2 findings and real historical3FAIL/current3PASS regressions. The source-review runtime was independently BLOCKED EPERM. No historical FAIL/SKIPPED/BLOCKED/NOT_RUN relabeled PASS. Earlier Task0074 Draft41196908733 remains FAILURE; legacy SQL privilege remains SKIPPED. R01â€“R08 NOT_RUN;N-12/historical EPERM BLOCKED. Full governance/security/PG ReadyCI is external exact-head evidence, not a fabricated local result.

## Artifacts
Task0075/immutable CP0075/EB0075,8operative paths, bounded report and raw command/browser/review/negative evidence. Per-commit manifest declares every original commit, pending owner disposition. Local scratch packets/caches are excluded.

## Risks
Native IndexedDB is unencrypted, profile-local, evictable and user-deletable. Explicit discard retains only concurrency tombstone metadata, not manuscript content. Persistent failures/conflicts retain current memory until explicit choice; memory still dies on closing the page if no transaction completed. No production route, SQL/Auth/grant/CI/dependency change, hosted operation, secrets, real manuscripts, deployment or merge. Issues108/131 OPEN; expired remediation delegation remains EXPIRED.

## Reviewer disposition
Owner acceptance pending. Distinct initial review found3P2 and correction evidence supplied; final completed-head review/ReadyCI to be linked externally after head exists.

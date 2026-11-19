---
id: VEL-AUTH-RUNNER-OFFLINE-TEST-MATRIX-0081
title: Proposed OR01 through OR10 offline test matrix
type: implementation-report
status: proposed-for-review
created_at: 2026-11-19
owner: project_owner
version: 0.1.0
---

# Proposed executable acceptance — all NOT_RUN

Specifications only. No OR test is executed or accepted here. Document checks are not G4 evidence. Future exact-source offline execution uses synthetic data with no network; absent/unreachable required coverage is BLOCKED, wrong behavior FAIL, never inferred PASS.

## OR01 — or01_default_deny_endpoint_guard

Execution: **NOT_RUN**. Components: B1, B4.

Original requirement: Exact fixed HTTPSorigin and E1-E5 method/path/query; reject unknown origin/custom domain/port/userinfo/redirect/dot segments/encoded path/query duplicates/admin/list/PostgREST/storage/refresh/enroll/global logout before dispatch.

Fixtures: Fake delegate counter0, canonical operation descriptors and private synthetic factor handles.

Expected: Only exact E1-E5 and phase-bound capability accepted; denial before delegate/DNS.

Negative variants:

- http/relative/custom/trailing-dot/IDNA/userinfo/explicit-port origins
- redirect including same-origin, encoded slash/dot/backslash/double-encoding
- duplicate/extra/encoded query, wrong grant/scope
- admin/PostgREST/storage/refresh/signup/enroll/delete/global/others logout
- wrong-fixture E4factor or different challenge/verify handle

Required evidence: Per-variant denial/category and delegate_calls=0; no raw private URL.

PASS: Future exact-source no-network execution covers every positive/negative variant with required counters/schema evidence and no forbidden dispatch/output.

FAIL/BLOCKED: Unauthorized dispatch/output, wrong acceptance, failed cleanup or missing/duplicate required variant/evidence is FAIL. Inability to execute/cover branch is BLOCKED, never PASS.

## OR02 — or02_frozen_sdk_cannot_escape_guard

Execution: **NOT_RUN**. Components: B3, B4.

Original requirement: Inject transport only; initialization/retries/fallback counts bounded, no unapproved refresh/session/list endpoints; no real client or network in offline acceptance.

Fixtures: Actual pinned2.117.3 factory, injected fakefetch, ambient-I/O deny tripwires, deterministic response queues.

Expected: No initialization traffic; every internal request/retry/fallback guarded and counted.

Negative variants:

- fetch omitted/replaced, constructor traffic or native I/O escape
- refresh/persistence/URL-session discovery enabled
- internal retry/fallback/JWKS sequence exhausting budget
- unapproved endpoint/redirect/alternate origin

Required evidence: SDK source/lock/call-site/branch coverage hashes and sanitized operation counters; mock-only sequences insufficient.

PASS: Future exact-source no-network execution covers every positive/negative variant with required counters/schema evidence and no forbidden dispatch/output.

FAIL/BLOCKED: Unauthorized dispatch/output, wrong acceptance, failed cleanup or missing/duplicate required variant/evidence is FAIL. Inability to execute/cover branch is BLOCKED, never PASS.

## OR03 — or03_immutable_same_token_cases

Execution: **NOT_RUN**. Components: B3, B5.

Original requirement: Immutable explicit case token to user/claims, canonical subject matching, out-of-order/concurrent responses; new AAL2 token starts new case, never switches prior case.

Fixtures: Two synthetic author contexts, token-label sentinels, epochs and deferred results.

Expected: Explicit user/claims use same immutable token; canonical matching subject; distinct new AAL2token.

Negative variants:

- omitted token/client cached-state substitution
- concurrent authors, out-of-order results, account switch
- mutated inputs/proofs after capture or await
- AAL2changes priorAAL1 or unexpected session binding

Required evidence: Case labels/matching booleans only; no tokens,subject/sessionIDs or hashes.

PASS: Future exact-source no-network execution covers every positive/negative variant with required counters/schema evidence and no forbidden dispatch/output.

FAIL/BLOCKED: Unauthorized dispatch/output, wrong acceptance, failed cleanup or missing/duplicate required variant/evidence is FAIL. Inability to execute/cover branch is BLOCKED, never PASS.

## OR04 — or04_closed_run_and_case_schema

Execution: **NOT_RUN**. Components: B6, B8.

Original requirement: Exactly7run keys/3case labels/27case fields with listed closed scalar values; unknown/nested/free-text/accessor/inherited keys rejected, no raw object copy or implicit observed values.

Fixtures: Exact7run keys,3case labels,27fields and canonical enum/range table.

Expected: Fresh own-data records match exact keys and scalar values before output.

Negative variants:

- missing/extra/duplicate keys/labels/fields
- unknown scalars, unsafe integer or nestedrawpayload
- accessor/inherited/prototype properties and hostile Proxy inspection failure
- new envelope/cases/writable/session/production flag

Required evidence: Schema variant counts/rejection booleans, never raw object dumps.

PASS: Future exact-source no-network execution covers every positive/negative variant with required counters/schema evidence and no forbidden dispatch/output.

FAIL/BLOCKED: Unauthorized dispatch/output, wrong acceptance, failed cleanup or missing/duplicate required variant/evidence is FAIL. Inability to execute/cover branch is BLOCKED, never PASS.

## OR05 — or05_forbidden_material_never_emitted

Execution: **NOT_RUN**. Components: B2, B3, B6, B8.

Original requirement: Synthetic canaries in arbitrary SDK/user/factor/header/URL/error/stack/metadata nested paths cannot escape; no raw token/password/OTP/key/IDs/fingerprints/body, even from synthetic fixtures; fixed error categories.

Fixtures: Deep synthetic canaries and output/exception/reporter capture spies.

Expected: No secret/private material escapes any channel, including failure formatting.

Negative variants:

- password/access-refresh token/OTP/email and user/session/factor/challenge data
- nested/cyclic SDKobjects/error/stack/metadata
- private URL/header/body/rawclaims/JWKS/keymaterial
- hash/fingerprint transform or log-then-redact

Required evidence: Leak boolean/fixedcategory only; no expected/actual canary values or raw traces.

PASS: Future exact-source no-network execution covers every positive/negative variant with required counters/schema evidence and no forbidden dispatch/output.

FAIL/BLOCKED: Unauthorized dispatch/output, wrong acceptance, failed cleanup or missing/duplicate required variant/evidence is FAIL. Inability to execute/cover branch is BLOCKED, never PASS.

## OR06 — or06_temporal_assurance_fail_closed

Execution: **NOT_RUN**. Components: B3, B5, B6.

Original requirement: Timeout/expiry/clock reversal/stale30000ms evidence denies; no claim that decoded header/fetch means crypto path; unknown path remains UNKNOWN; missing factors never inferred NONE.

Fixtures: Fake monotonic/wallclock, expiry, delayed/partial/injected verifier outcomes.

Expected: Revalidate after await; stale>30000ms, expiry/future/reversal/malformed proof denies.

Negative variants:

- request timeout or expiry during verification
- future/stale/reversedclock and invalid NumericDate
- nonES256routing stops; injected signature/keyfailure only, no realJWTcrypto
- empty/missing factors or header/JWKSfetch misread as completeness/crypto path

Required evidence: Fixed errorcategories; factor_completeness NOT_ESTABLISHED and sdk_claim_path UNKNOWN.

PASS: Future exact-source no-network execution covers every positive/negative variant with required counters/schema evidence and no forbidden dispatch/output.

FAIL/BLOCKED: Unauthorized dispatch/output, wrong acceptance, failed cleanup or missing/duplicate required variant/evidence is FAIL. Inability to execute/cover branch is BLOCKED, never PASS.

## OR07 — or07_operation_network_time_budgets

Execution: **NOT_RUN**. Components: B1, B4, B5, B7.

Original requirement: 2logins/3user/3claims/1challenge/1verify/2local-cleanup,32total outbound including retries and cleanup;15s/request/5minrun; reserve cleanup budget within bounds, exact owner review required.

Fixtures: Fake clock/delegate and atomic operation/network counters,2cleanup slots.

Expected: 2login/3explicituser/3claims/1challenge/1verify/2localcleanup maxima;32inclusive total,15srequest,300srun.

Negative variants:

- each cap N/N+1;localclaims0network still operationcount
- SDKinternals/retries/failures/timeouts debit requests
- 31stmeasurement denied with2reservedslots;33rdglobal denied
- measurement240s,request15s,run300s boundaries and counterrace
- unusedcleanup reserve neverdonated; no deadlineextension

Required evidence: Exact bounded operation/request/time evidence; no live timing assertion.

PASS: Future exact-source no-network execution covers every positive/negative variant with required counters/schema evidence and no forbidden dispatch/output.

FAIL/BLOCKED: Unauthorized dispatch/output, wrong acceptance, failed cleanup or missing/duplicate required variant/evidence is FAIL. Inability to execute/cover branch is BLOCKED, never PASS.

## OR08 — or08_owned_local_cleanup_only

Execution: **NOT_RUN**. Components: B1, B4, B5, B7.

Original requirement: Only newly created own probe sessions, local signout scope, idempotent disposal/timeout cleanup; never global/others/admin/escalated retry; failed/unconfirmable cleanup BLOCKED and no further measurement.

Fixtures: Synthetic ownership ledger,2new-session handles, delayed/interrupted cleanup.

Expected: Only proved new own sessions E5local once; duplicates locally idempotent; unknown cleanup withholds export.

Negative variants:

- pre-existing/app/foreign/unknown handle or substituted token
- default/global/others scope, admin/service credential
- duplicate retry after uncertainacknowledgment
- unknown logincommit/timeout/interruption/AAL2new session
- providerdenial or unconfirmed targeted scope

Required evidence: Aggregate cleanup and attemptedcount<=2; DONE never means JWTrevocation acceptance.

PASS: Future exact-source no-network execution covers every positive/negative variant with required counters/schema evidence and no forbidden dispatch/output.

FAIL/BLOCKED: Unauthorized dispatch/output, wrong acceptance, failed cleanup or missing/duplicate required variant/evidence is FAIL. Inability to execute/cover branch is BLOCKED, never PASS.

## OR09 — or09_no_persistence_or_telemetry

Execution: **NOT_RUN**. Components: B2, B3, B6, B7, B8.

Original requirement: No shell arguments/history/.env/clipboard/storage/HAR/trace/screenshots/log/crash/telemetry payload retention; process exit and reference disposal are not guaranteed cryptographic zeroization.

Fixtures: Synthetic inputproviders and spies forfile/env/argv/history/storage/telemetry/crash/debug hooks.

Expected: No private inputs/rawresponses persisted or logged; persistence/refresh off; dispose references/timers/listeners.

Negative variants:

- argv/history/.env/clipboard/screenshot/HAR/trace
- browser/session storage, auto-refresh or diskcache
- debug/telemetry/crash/reporter forwarding
- cleanup exception or process exit claimed cryptographiczeroization

Required evidence: Zero-callspycounts/disposal booleans only; no profiles/dumps/payloadcapture artifacts.

PASS: Future exact-source no-network execution covers every positive/negative variant with required counters/schema evidence and no forbidden dispatch/output.

FAIL/BLOCKED: Unauthorized dispatch/output, wrong acceptance, failed cleanup or missing/duplicate required variant/evidence is FAIL. Inability to execute/cover branch is BLOCKED, never PASS.

## OR10 — or10_no_premature_readiness_or_findings

Execution: **NOT_RUN**. Components: B1, B5, B6, B7, B8.

Original requirement: AnyG1-G4unsatisfied,missing fixture/schema/sanitizer failure denies before network; NOT_RUN template not findings; no production writable/accepted flag; owner manual sanitized audit before sharing.

Fixtures: Readiness combinations, sourcepins and missingG3/cleanup/schema/templates.

Expected: Missing G1-G4/source/cleanup/schema/manualrelease deniesnetwork/release; NOT_RUNnotfindings.

Negative variants:

- JSONpending substituted forexternalG1decision or attestation called independentproof
- missing/staleG2/G3/G4 orwrongSDK/sourcehash
- sanitizerfailure/unavailablecleanup/unexpectedstate
- documentPASS/mockresultcalledORacceptance orwritable/productionflag
- ownerreviewskipped/unapprovedserializer envelope

Required evidence: Before-network/release rejection and unchangedNOT_RUN; no production acceptance.

PASS: Future exact-source no-network execution covers every positive/negative variant with required counters/schema evidence and no forbidden dispatch/output.

FAIL/BLOCKED: Unauthorized dispatch/output, wrong acceptance, failed cleanup or missing/duplicate required variant/evidence is FAIL. Inability to execute/cover branch is BLOCKED, never PASS.

Future offline evidence is a synthetic test report, not a Task0063 observation export. Record test/source/counter/rejection results only; never raw canary/credential/private ID or HTTP traces. Writing this matrix does not execute OR01-OR10; G4 stays BLOCKED.

---
id: VEL-OWNER-AUTH-RUNNER-CONTRACT-0081
title: Offline owner Auth tooling implementation contract
type: implementation-report
status: proposed-for-review
created_at: 2026-11-19
owner: project_owner
version: 0.1.0
---

# Status and authority

FACT: Task0081 supplies design and implementation specifications only. [Owner dispatch](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-7005227966) permits no runner, sanitizer, SDK adapter, transport hook, CLI, OR execution or hosted work. Base e0468ed756d4910ddee71a822f36945f91d99704 integrates PR140; post-main44492467128 passed. [G1 declaration acceptance](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-7004764509) was recorded externally19November for the dated13November self-attestation only. No independent owner/hosted verification. Historical0080 pending field and earlier UNKNOWN records unchanged.

[Machine-readable design](../agent-workflow/proposals/VEL-AUTH-RUNNER-DESIGN-0081.json) contains exact canonical values, components and future tests. [Source pins](../agent-workflow/inputs/VEL-TASK-0081/SOURCE-REFERENCES.json) preserve authority/status. [OR matrix](VEL-AUTH-RUNNER-OFFLINE-TEST-MATRIX-0081.md) is a specification, not findings. [G2/G3 checklist](VEL-OWNER-AUTH-ENVIRONMENT-CHECKLIST-0081.md) remains unaccepted.

# Component interfaces and responsibilities

## B1 — Readiness gate

Decision owner: Own sole live-execution admission; reject incomplete G1-G4 before ANY network including SDK initialization.

Inputs: Source hashes, external G1 decision, exact G2approval, G3attestation and exact-source G4results; no secrets.

Outputs: Non-exportable capability bound to target/source/deadline/cleanup, or denial.

Errors and stop: Missing/stale/contradictory source or approval denies before dispatch; only fixed allowed error category.

Cleanup: No pre-login cleanup; invalidate capability on terminal stop. Trust: Owner controls reviewed code/environment; gate cannot independently authenticate owner or prove production policy.

## B2 — Private inputs

Decision owner: Bind two existing fixtures and enrolled verified TOTP; no discovery/enrollment/app-session reuse.

Inputs: Owner-only credential/public-client-key/factor/TOTP provider after readiness; synthetic provider offline.

Outputs: Ephemeral fixture-scoped private handles, never public raw strings.

Errors and stop: Cancelled/unavailable/mismatched context stops without echo.

Cleanup: Dispose references in finally, no file/history/clipboard; no cryptographic zeroization claim. Trust: Private owner process, no agent/remote desktop/recorded terminal access; trusted input code.

## B3 — Frozen SDK adapter

Decision owner: Explicit same-token getUser/getClaims; persistence/refresh/URL-session discovery disabled; no keys/JWKS/allowExpired override.

Inputs: Pinned2.117.3 factory, guarded fetch, private handles and immutable explicit token.

Outputs: Private user/claims snapshots and bounded errors; no raw public output.

Errors and stop: Initialization or hidden unapproved traffic/error/partial proof stops; no verifier downgrade or guessed path.

Cleanup: Separate in-memory client per fixture; dispose timers/subscriptions; retain proved owned cleanup handles only. Trust: Exact frozen-SDK transport call inventory and branch evidence required; mocked SDK sequences alone do not establish actual behavior.

## B4 — Default-deny transport

Decision owner: Own rawURL/method/query/phase/factor binding, redirect denial and every operation/request/time budget.

Inputs: Operation descriptor, SDK request and immutable run/case/cleanup capability.

Outputs: Private allowed response or pre-dispatch denial; bounded atomic counters.

Errors and stop: Noncanonical/unclassified request, missing permit, limit or deadline denies before DNS/socket/delegate.

Cleanup: Abort measurement and invalidate late epochs; only owned E5 within reserved original budget remains. Trust: Guarded delegate sole I/O path; offline process-level deny tripwires supplement injection; abort is not server rollback.

## B5 — Three-case state machine

Decision owner: Exactly three canonical cases, immutable token each; ES256 rejection-only header routing; subject/session/expiry/freshness rechecked after await.

Inputs: Private fixture/case handles and explicit-token evidence, monotonic clock.

Outputs: Derived case scalars and owned-session cleanup handles only.

Errors and stop: Unexpected role/anonymous/mismatch/expiry/algorithm/endpoint/provider restriction stops; no refresh/legacy workaround.

Cleanup: Finally retain known new sessions for cleanup; uncertain login cannot invent ownership; suppress stale callbacks. Trust: Empty factors never prove completeness; header/JWKS fetch never proves crypto path; identity is not writable-session authority.

## B6 — Closed sanitizer

Decision owner: Construct fresh whitelist aggregates before rendering; reject unknown/accessor/inherited/nested raw values.

Inputs: Bounded own-data evidence snapshots and canonical schema, not arbitrary executable objects.

Outputs: RunRecord exact7fields plus CaseRecordSet exact3labels/27fields.

Errors and stop: No raw object/error/stack/header/URL/canary diagnostic; sanitizer failure withholds findings.

Cleanup: Release raw references on all exits; no persistent diagnostic artifacts. Trust: Trusted SDK; parse network data as boundedJSON. Proxies/executable inputs unsupported; inspection can invoke Proxy traps, cannot claim arbitrary code neutralization.

## B7 — Owned-session cleanup

Decision owner: E5local only, once per owned handle; never global/others/admin/session-row/service-role.

Inputs: Ledger of at most2proved newly created probe sessions and their own credentials, reserved budget.

Outputs: Only cleanup NOT_STARTED/DONE/UNKNOWN/BLOCKED and disposal result.

Errors and stop: Missing/unknown ownership, timeout/provider failure or unconfirmed scope stops and withholds release.

Cleanup: Duplicate invocation locally idempotent; uncertain attempted request consumes slot; dispose all clients/timers; no JWT-revocation guarantee. Trust: AAL2 replacement credential must prove same enrolled session; unexpected new session never grants third logout.

## B8 — Owner output review

Decision owner: Owner inspection before sharing; no raw dump or automatic publication.

Inputs: Closed aggregate pair, confirmed cleanup and future exact approved render schema.

Outputs: Manual owner-approved release decision only; no upload/write/CLI.

Errors and stop: Missing approval/cleanup/serializer/sanitizer failure withholds release; NOT_RUN template not findings.

Cleanup: Raw handles disposed; post-run sanitized review cannot resume Auth or extend deadlines. Trust: Owner-private display; outer serialization is a proposed G2decision, not specified/approved by0063.

# Exact transport and budgets

Only HTTPS https://lflkcrnriitrbclangyr.supabase.co. E1 POST /auth/v1/token?grant_type=password; E2 GET /auth/v1/user; E3 GET /auth/v1/.well-known/jwks.json only if frozen SDK requires it; E4 POST /auth/v1/factors/{existing_private_factor_id}/challenge and /verify for the same owner-known verified TOTP factor; E5 POST /auth/v1/logout?scope=local CLEANUP ONLY. No other method/path/query or caller-supplied verifier/key/JWKS/allowExpired option. Normal TLS, no recording proxy.

Use canonical operation descriptors and validate raw URL before parser normalization: reject explicit ports (including noncanonical explicit443), userinfo, fragments, custom/unknown hosts, trailing dots/IDNA aliases, protocol-relative URLs, redirects including same-origin, encoded/double-encoded segments or query keys, dot segments, backslashes, extra/duplicate query pairs. No claim-derived URL. E1 has only grant_type=password; E5 only scope=local; E2/E3/E4 no query. E4 dynamic handle must be canonical, private and bound to the enrolled fixture/same factor; never export the ID or URL. No admin, PostgREST, storage, refresh, signup/recovery, enrollment/delete/global/others logout. Pin exact private body/header shapes against the frozen SDK during G2; no arbitrary metadata or raw logging.

At most2password logins,3explicit user calls,3claims operations,1TOTPchallenge,1verification,2local signouts. Count explicit operations even if claims verification is local. Atomic outbound debit BEFORE every delegated attempt, including SDK internals/retries/failures, maximum32. No application retry or automatic refresh. Guard injected before SDK initialization must cover every I/O path; future offline harness denies ambient/native network. Actual frozen2.117.3call-site/branch coverage required; mocked sequences cannot substitute, unavailable required coverage BLOCKED.

Proposed conservative allocation inside unchanged maxima:30measurement slots and2reserved cleanup slots; measurement cutoff240seconds;60seconds reserved for up to2x15second cleanup plus30seconds teardown margin. Every request max15seconds, absolute run max300seconds from admission, including input waits, sanitization and cleanup. Check remaining time before dispatch and after every await; do not admit work that cannot preserve the remaining cleanup reservation. Cleanup never extends original deadline/ceiling and unused reserve never becomes measurement allowance. Invalidate case epochs and abort outstanding measurements on stop; delayed completions cannot resume cases. A separate sanitized-only owner review after disposal cannot resume Auth or retain raw handles/extend the execution budget.

Timeout/abort is not proof that the server rolled back. Unknown login outcome without proved handle cannot create cleanup authority: stop, cleanup UNKNOWN/BLOCKED, no admin inspection. Local cleanup once per at-most2proved new session handles; repeated calls are local idempotency, not extra signouts. AAL2 must prove the same enrolled session before changing cleanup credential; unexpected new session cannot authorize a third logout. Provider denial or uncertain cleanup withholds export, with no global/service-role fallback. DONE is cleanup evidence, not immediate JWT invalidation.

# Case state and assurance

Live admission requires all G1-G4/source/environment evidence before any network, including initialization/JWKS. Future offline harness has fake transport and no live capability, never an environment-variable bypass. Separate in-memory client per fixture; explicit immutable token per case. UNENROLLED_AAL1 then ENROLLED_AAL1 then ENROLLED_AAL2; new AAL2token does not mutate/relabel AAL1. Non-ES256 header rejection is routing only, never authentication or legacy experimentation. Same-token canonical subject/session-shape/expiry and30000ms evidence freshness are rechecked after awaits. Restriction/outage/partial or malformed evidence stops, never refresh/enroll/retry-until-pass. Factor visibility/empty collections do not prove completeness. factor_completeness stays NOT_ESTABLISHED and sdk_claim_path UNKNOWN; identity success is not writable-session or protected transaction authority.

# Closed sanitizer and explicit packaging gap

Exact7run keys,3case labels,27case fields and scalar/error values are copied in designJSON. Fresh own-data whitelist aggregates only, BEFORE rendering. Unknown/extra/inherited/accessor-backed values and nested raw payloads deny; no raw stringify/log-then-redact or arbitrary Error/stack/header/body copies. Only bounded parsed network JSON enters untrusted projection. Executable objects/Proxies unsupported: even descriptor inspection can invoke a Proxy trap, so catch failures and deny without claiming arbitrary executable input is harmless. Trusted SDK/process isolation remain assumptions.

No passwords/access-refresh tokens/OTP/email/user-session-factor-challengeIDs/JWT-JWKS-keymaterial/rawclaims/headers/bodies/arbitrary errors/fingerprints or hashes of private identifiers may escape, even for synthetic accounts. Sanitizer failure emits no sensitive diagnostics or findings. Offline test reporters must never echo expected/actual canary values on assertion failures. Owner privately reviews closed output before sharing; no automatic upload.

**PROPOSAL, NOT APPROVAL:** Task0063 defines run and case fields but does not specify an outer wire envelope. Proposed in-memory interface is a pair: RunRecord(exact7keys), CaseRecordSet(exact3labels, each27fields). No new cases/session/writable field is added to RunRecord. Exact renderer/serialization packaging must be separately approved during future exact-source G2 review before live export. No live writer/CLI path is approved now. Offline components can test the two records without inventing an export envelope.

# Exact proposed future offline paths

PROPOSAL ONLY; a new explicitly authorized Task and immutable ContextPack must approve these before creation. Eight isolated modules plus one API-workspace offline spec. The test harness resolves the existing frozen SDK in its own workspace and injects its guarded factory; no second dependency or caller-controlled module path. No live bootstrap, actual private prompt or production route included.

- tools/owner-auth-probe/readiness.ts
- tools/owner-auth-probe/private-input.ts
- tools/owner-auth-probe/sdk-adapter.ts
- tools/owner-auth-probe/guarded-transport.ts
- tools/owner-auth-probe/case-state.ts
- tools/owner-auth-probe/sanitize-output.ts
- tools/owner-auth-probe/owned-cleanup.ts
- tools/owner-auth-probe/owner-review.ts
- apps/api/test/owner-auth-probe-offline.spec.ts

No executable file at these paths is created by Task0081. Actual OR01-OR10 execution, G2 exact executable review and G3 owner environment attestation remain required. G2-G4/N12/historical runtime BLOCKED; OR01-10/R01-08/three hosted cases NOT_RUN; legacy privileges SKIPPED. Production PRINCIPAL/SESSION/revocation/transaction/GATEWAY/TRANSPORT/PACKAGING/RECONCILIATION/hosted/pilot/release unresolved.

Verification here is source/document consistency and existing approved regressions/CI only. Initial pack newline-validation FAIL and rejected oversized shell command are historical; no immutable pack was rewritten. EB/PR ledger records actual commands, source pins, review limitations and CI. Issues108/131OPEN; remediationEXPIRED; no merge, hosted operation, deployment or successor work.

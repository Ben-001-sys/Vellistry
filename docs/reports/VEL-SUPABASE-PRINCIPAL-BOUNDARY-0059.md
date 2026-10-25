---
id: VEL-SUPABASE-PRINCIPAL-BOUNDARY-0059
title: Real Supabase principal verification boundary decision packet
type: implementation-report
status: proposed-for-review
created_at: 2026-10-25
owner: project_owner
version: 0.1.0
---

# FACT: source and current architecture

PR120 approved exact8faeae4be12d70bdd071bbf83a3465e71c682da6 merged as acf7f796014907cc08dfc25ccab5763caa002d1b; full tree688f7dd4c663675e1344bff6910c0b696d5bac22 matches, git diff exit0. Actual [post-main40204760911](https://github.com/Ben-001-sys/Vellistry/actions/runs/40204760911) SUCCESS, with actual36adapter/12unit/32PG, governance/security/recovery and final gate passed; exact-main PG artifact and owned cleanup verified. Legacy privilege fixture skip is not acceptance. Task58/CP58/EB58/failures/source-bound evidence preserved. Task59/validated immutable CP59 committed before packet edits. No Auth or application implementation in this task.

The [structured packet](../agent-workflow/proposals/VEL-SUPABASE-PRINCIPAL-BOUNDARY-0059.json) pins all source SHA256s. Frozen supabase-js/auth-js2.117.3 source excerpts/hash are in [SDK evidence](../agent-workflow/inputs/VEL-TASK-0059/SDK-BOUNDARY-SOURCES.md). Existing SupabaseAuthService.verify(token) calls configured publicClient().auth.getUser(token), rejects errors/missing user and returns only{id}. Guard extracts exact Bearer text, stores author{id} and accessToken. It does not expose verified session/expiry/policy evidence. AppModule registers only current Auth/books/health, not workspace. Existing bridge uses injected mocks, compares user.id/sub, UUID session, safe exp, conservative freshness and immutable provider binding. It drops extra claims/header metadata; production issuer/audience/policy checks cannot be bolted on after that projection without another verified evidence source.

Inspected getClaims explicitly validates expiry by default. It verifies an asymmetric signature using configured/fetched JWKs and WebCrypto when available; HS/missing key-id/no WebCrypto/no resolved key may use getUser(token) fallback. Caller key overrides and allowExpired exist in the SDK API; our production candidate must not expose them to request input. Cache/key fallback means getClaims is not guaranteed offline. The method body has no explicit issuer/audience/nbf validation. This is a narrow source observation, not an assertion about every server or every possible SDK helper. _getUser's explicit-token branch calls configured /user; it can process server SessionMissing errors. That SDK comment/error path does not prove the current target checks revoked sessions in every request or closes a write race.

# FACT and INTERPRETATION: three independent evidence axes

| Axis | Evidence needed | What it does not establish |
|---|---|---|
| Cryptographic/registered claims | Trusted signer/key plus correct integrity and explicit app policy | Current Auth-server user state or active session |
| Auth-server identity | Trusted configured server accepts exact bearer and returns matching user | Atomic session validity at a later database commit |
| Active-session/revocation | Authoritative matching session/user/deadlines, fail-closed race/transaction semantics | Signature integrity without verification, or permission to deploy grants |

Public [sessions](https://supabase.com/docs/guides/auth/sessions) and [signout](https://supabase.com/docs/guides/auth/signout) docs explain that session termination and access-token expiry differ, and expiry cleanup need not be immediate. [Signing-key docs](https://supabase.com/docs/guides/auth/signing-keys) describe cache/rotation effects. These are general provider statements, not observations of vellistry-dev. getUser may deny server-reported revocation, but success is not a transaction lock held until a future write. Cached JWT success must not override a denied/unproven session. Real target/version/configuration and revoked-session behavior remain UNVERIFIED.

# PROPOSAL: precise boundary requirements

## PV-01 — Token provenance

PROPOSAL: Use exact request-local bearer already extracted by existing guard, never mutable client session state, body identity, user_metadata or decoded-only JWT. Explicit token argument to both owner-configured verification operations; no omitted token/getSession fallback.

## PV-02 — Trusted verification channel

PROPOSAL: Future live client must reuse existing Auth service configuration/architecture and trusted project endpoint. No token-derived issuer/JWKS URL, client-supplied keys, service-role author path, allowExpired override, or caller verification bypass. No real client authorized here.

## PV-03 — Subject/session/expiry evidence

PROPOSAL: Require successful complete getUser user.id and verified getClaims sub/session_id/exp for same token. Normalize/compare user.id==sub; validate UUIDs, finite safe integral NumericDate conversion and expiry after async work. Current mock bridge only composes assertions, not signatures.

## PV-04 — Policy before projection

PROPOSAL: Explicit trusted issuer/audiences and acceptable token role/algorithm/anonymous/AAL/time policy are owner decisions. Validate required policy before bridge drops issuer/aud/nbf/header fields; no implicit defaults or policy derived from token. Reject missing policy, wrong project/audience/service credentials and malformed claims.

## PV-05 — Clock and scope

PROPOSAL: Preserve per-request immutable token/author/session/expiry binding, response-arrival snapshots and conservative start-time freshness. Recheck after awaits, expiry/stale/future proof, nbf/iat per explicitly approved policy; retain current30000ms bound without silently relaxing it.

## PV-06 — SDK path accountability

PROPOSAL: Record whether evidence used local asymmetric signature or Auth-server fallback. getClaims may perform network/key lookup; no assumed offline success. Signing mode/key rotation/cache trust remain unobserved. Successful method result alone does not prove application issuer/audience policy or session status.

## PV-07 — Independent session authority

PROPOSAL: Active/revoked state is separate: authoritative matching session+user, expiry/inactivity/not_after semantics and failure-closed policy require catalog/provider acceptance. SDK may surface server SessionMissing errors, but no target behavior is inferred and successful getUser is not atomic session/write authorization.

## PV-08 — Atomic protected write boundary

PROPOSAL: For future writes, session/revocation check must have reviewed race/linearization semantics with book ownership in same protected transaction (session then book lock candidate). No auth.sessions UPDATE/grant/helper deployment approved; registry alternative also needs owner review. Auth calls outside a DB transaction leave a TOCTOU gap.

## PV-09 — Error and privacy contract

PROPOSAL: Reject Auth errors, absent/partial/contradictory proof and disallowed policy. Distinguish invalid evidence from provider/configuration/timeouts internally; external response mapping is TRANSPORT decision. No sensitive token/claims/user/manuscript logs or cached foreign receipts. No fail-open offline fallback when required Auth verification unavailable.

## PV-10 — Reuse architecture and durable safety

PROPOSAL: Existing verify(token)->{id}, AuthGuard and Book routes remain unchanged. Future additive service method plus unregistered request-bound provider may reuse publicClient; no replacement Auth stack. Do not make current stateful WorkspaceService request-scoped and lose pending maps without a reviewed durable operation/outbox contract. Module/routes/writes remain separately gated.

# PROPOSAL: owner decision checklist

The following are proposals only; all six production decisions remain OWNER_DECISION_PENDING. No API flow, target issuer/audience, role/AAL policy, timeout, cache or session privilege has been accepted by this packet.

- P-API: Proposed reuse getUser(explicitToken)+getClaims(sameToken) for principal evidence, after policy checks. Alternative verified-claims-only cannot satisfy currently required Auth-server user check without new owner decision. Possible duplicate getUser fallback cost remains unverified. Owner action: Approve only a future local fixture protocol now if desired; real API/client wiring requires separate scope.
- P-TARGET: Trusted endpoint/issuer/audience, allowed signer/key origin and credential channel. Historical vellistry-dev reference is not validated issuer/key configuration. Owner action: Owner confirms exact expected values via separately authorized metadata/export; no production defaults.
- P-CLAIMS: Author-role/anonymous/AAL/nbf/iat/expiry/clock-skew requirements and malformed/unknown-value policy. Owner action: Owner selects actual production policy; proposed next tests use synthetic fixture values only.
- P-SESSION: Authoritative revoked-session semantics, lock/grant confinement, timing/races and source availability. Owner action: Separate SESSION/provider review and target-specific acceptance; no privileges approved here.
- P-ERRORS: Fail-closed errors vs unavailable, timeout/retry/cache/rotation policy and public error mapping. Owner action: Owner reviews with TRANSPORT/GATEWAY; no implementation now.
- P-LIFETIME: Request-isolated verification provider, client lifetime and preservation of process pending/durable reconciliation state. Owner action: Owner reviews future DI wiring and RECONCILIATION; no module registration now.

# PROPOSAL: smallest next local implementation

Authorize only a new unregistered workspace-principal-verification-policy.ts plus extension of existing mandatory workspace-principal-adapter.spec.ts. Preserve all36cases and append negative policy/composition tests. A pure helper checks injected already-verified mock evidence against explicit injected policy before bridge projection; tests wrap mock getClaims responses and compose existing bridge/provider. No getUser/getClaims real calls, SDK initialization, JWT signing/verification/JWKS fetching, existing Auth/guard/module/route changes, SQL/session authorization or dependency/CI edits. The existing mandatory command automatically executes appended cases.

Use synthetic.invalid issuer/synthetic-author audience fixtures solely for tests. Missing policy fails closed; never derive trusted issuer/JWKS target from a token or treat fixture values as production defaults. This is a testable policy contract, not a live verifier. Owner must approve this local scope/fixture behavior, then allocate new unique Task and commit/validate immutable ContextPack at current main before code. That approval would not approve real PRINCIPAL/SESSION/GATEWAY/PACKAGING/RECONCILIATION/TRANSPORT choices. Task ID is unallocated, status PROPOSED_NOT_AUTHORIZED.

A later real integration should reuse existing SupabaseAuthService configuration/verification architecture, with an owner-reviewed additive identity method/request provider if chosen. Preserve current verify()->{id}, guard and books ABI; do not install a competing Auth stack or use token-supplied endpoints. Actual issuer/audience/algorithm/anonymous/AAL and target/client access choices must first be reviewed. Production session checking/private gateway/durable reconciliation/transport/routes remain separately gated; no Auth calls outside a database transaction can themselves promise an atomic session/write boundary.

# Negative security acceptance catalogue

Every N01-N14 case is NOT_RUN_PROPOSED for a future authorized task. Offline document-integrity mutations below are distinct from executing these security cases. No real JWT is created, signed or verified.

- N-01: Absent/wrong trusted policy or token-derived issuer/JWKS target denies
- N-02: Wrong issuer/project, audience mismatch/malformed audience array denies
- N-03: Missing/malformed UUID subject/session or user.id!=sub denies
- N-04: Service-role/anonymous/AAL outside explicit fixture policy denies; metadata cannot elevate
- N-05: Expired/nonfinite/unsafe/coerced exp, future nbf/iat beyond explicit fixture tolerance denies
- N-06: Auth error/null/partial claims or user, thrown/rejected SDK method denies without fallback
- N-07: Both operations receive exact same token, no getSession/options/key override
- N-08: Concurrent authors, reversed completions, token switch and same-token subject/session changes deny or isolate
- N-09: Slow response/stale proof/clock rollback cannot refresh evidence age; preserve current freshness bound
- N-10: Invalid signature/key/algorithm/JWKS scenarios represented as injected failed-verification outcomes only; no real JWT generation or verification in next task
- N-11: An injected unexpired token-claims object (not an encoded/signed JWT) with a mocked revoked session must never be labelled writable merely because identity checks pass; session evidence stays UNKNOWN, no write route
- N-12: Pool/session ownership/TOCTOU/rollback/revocation races remain BLOCKED until separately authorized gateway/session integration tests; do not fake them with a passed identity unit
- N-13: No raw token/user/claim/private payload retained or logged, no real SDK/client/network init
- N-14: Existing36test bodies,12unit/32PG/security/recovery and Auth ABI remain intact

# Verification, limits and owner handoff

Source/hash/decision/packet integrity with synthetic negative mutations and metadata/readiness/traceability/pack checks are recorded in EB59. Actual applicable readyCI must still run36adapter/12unit/32PG/security/recovery/governance. No old research or runtime result is reused as new-head acceptance. All existing source/control blobs remain unchanged, and historical failures/blocked independent runtime stay historical. Distinct completed-head advisory review and separate owner merge required for this preparation PR.

Hosted catalog queries, credentials, real JWT/Auth experiments, migrations/grants/RLS, private manuscripts and deployment remain prohibited. General public docs or frozen SDK source do not promote hosted acceptance. No future task is authorized or implemented by this packet. Issue108 OPEN, expired remediation delegation remains closed; broad design/pilot/production gates unchanged.

---
id: VEL-REAL-AUTH-HANDOFF-0061
title: Real Auth identity boundary decision and bounded implementation handoff
type: implementation-report
status: proposed-for-review
created_at: 2026-10-25
owner: project_owner
version: 0.1.0
---

## FACT: integrated source and limits
Baseline main db3c7e92375c984f2730e720b1a23cadb5437934 is owner-approved PR122 integration. Complete tree dfaada375f02b06fe7f57f5aacedb81d6cafeeca equals reviewed head93914f3c8c049d19b5a40684a6510c613e62acfa. Post-main40220684442 must actually complete before final delivery; actual terminal result is recorded separately, never inferred. Task60/immutableCP60/EB60, initial failures and all historical NOT_RUN/BLOCKED evidence remain unchanged.

[Task0059 packet](../agent-workflow/proposals/VEL-SUPABASE-PRINCIPAL-BOUNDARY-0059.json) and [frozen SDK excerpts](../agent-workflow/inputs/VEL-TASK-0059/SDK-BOUNDARY-SOURCES.md) already establish supabase-js/auth-js2.117.3 behavior. No repeated SDK research or real request is needed for this preparation. [Task0060](VEL-SYNTHETIC-CLAIM-POLICY-0060.md) proves only fixture-policy composition:52mandatory tests (36old+16new),12units/32disposablePG plus retained controls. Its hardcoded synthetic issuer/audience/role, anonymous:false and denial of every AAL field are NOT production defaults or a production SDK-response validator. It deliberately rejects additional SDK response fields; do not wire it into real Auth.

Current SupabaseAuthService.publicClient() uses existing SUPABASE_URL/SUPABASE_PUBLISHABLE_KEY configuration names with persistSession:false/autoRefreshToken:false. No values were read. verify(token) calls getUser(explicitToken), denies missing/error user and returns only{id}. Guard extracts one Bearer token and stores author{id}/accessToken. Neither currently establishes a verified session/expiry/policy evidence contract for workspace writes. Existing Auth service/guard, Books ABI, provider/bridge, all app tests/CI/dependencies remain unchanged in Task0061.

## INTERPRETATION: three separate authorities
Cryptographic verification establishes signature/key trust plus explicitly checked claims. Frozen SDK getClaims may use asymmetric WebCrypto/JWK verification or Auth-server getUser fallback; cache/key lookup may perform network. Success is not explicit application issuer/audience/role policy in the inspected method body, and does not establish current writable session.

Auth-server identity means the configured trusted Auth server accepts the exact bearer and returns a matching user. getUser may report session-related errors; do not assert it always accepts revoked tokens or never consults sessions. Target behavior remains unobserved. A successful call is not a lock held through a later database commit.

Active writable-session enforcement requires authoritative session/user/deadline/revocation semantics, failure-closed availability and a reviewed race/linearization boundary with ownership in the protected transaction. No client signature result or two successful Auth calls independently provides that. N-12 remains BLOCKED. Identity can be valid while writable-session status is UNKNOWN; no write operation may infer permission from that state.

## PROPOSAL: smallest actionable owner decision
Review the PRINCIPAL identity contract and supply/confirm a non-secret trusted configuration policy before authorizing implementation. This document records NO decision as approved. All six production decisions remain OWNER_DECISION_PENDING.

1. TARGET: independently confirm allowed server endpoint, exact expected issuer and accepted audiences. Historical owner-confirmed vellistry-dev reference lflkcrnriitrbclangyr/organization pulyacnozzggwfgqdgdl/region eu-west-2 is an earlier metadata record, not current issuer/audience/signing-mode evidence. Never derive a trusted endpoint/JWKS target or allowlist from bearer claims, request headers, body or user metadata. Use an owner-supplied non-secret record or the separately approved sanitized catalog/export channel; no query/export is authorized here. Do not request secrets.
2. CLAIMS: explicitly choose permitted author token roles, anonymous-user handling, AAL requirements and missing/unknown-value handling; NumericDate exp/iat/nbf requirements, issuer/audience type rules and any bounded clock tolerance. Recommend deny service-role author identity and unapproved anonymous/AAL claims. No role/audience/AAL/clock values are approved by this recommendation, and Task0060 fixture settings must not supply defaults. Keep current30000ms proof freshness unless separately changed.
3. KEYS: confirm actual signing mode, permitted algorithms and trusted key origin/discovery/cache/rotation behavior for frozen SDK. Prefer a supported asymmetric verification path as a proposal, but do not change project signing settings or assume target already uses it. Decide whether a configured Auth-server fallback is permitted; if cryptographic verification is specifically required, a server fallback cannot be misreported as local signature verification. Never expose allowExpired, caller keys/JWKS overrides, token-selected algorithm/URL or a silent unverifiable fallback. Target-specific key/SDK/rotation evidence still required; no probes or JWKS fetch here.
4. PROTOCOL: recommend same immutable explicit token to getUser and getClaims on the same owner-configured client instance per verification attempt, with no getSession/omitted-token state or automatic refresh path. Both required outcomes must succeed; canonical user.id==claims.sub, valid session_id and safe expiration. Reject contradictory, partial or malformed evidence. Claims policy must run before projection drops issuer/aud/time/role/header evidence. Record chosen SDK verification path accurately, without inventing evidence the SDK does not expose; if path attribution cannot be established, it is UNKNOWN and cannot satisfy an assurance requirement for a particular path.
5. FAILURE: internally separate invalid/authentication-denied from configuration/provider-unavailable/timeouts without retaining token/claims/private payload. Recommend fail closed in both classes; do not retry an author request with service-role privileges. External HTTP mapping and timeout/retry policy remain TRANSPORT decisions. Existing verify()->{id} error/ABI behavior is not silently changed by the proposed additive method.

The immediate requested decision is approval of this explicit PRINCIPAL contract/policy envelope and a separate two-file local implementation scope below. It does not resolve SESSION/GATEWAY/PACKAGING/RECONCILIATION/TRANSPORT, authorize hosted access, or enable writes. Until the owner makes it, implementation is NOT_AUTHORIZED.

## PROPOSAL: bounded next implementation handoff, NOT_AUTHORIZED
Task ID unallocated; new unique Task plus committed validated immutable ContextPack at then-current main required. Exactly proposed application paths:

- apps/api/src/modules/auth/supabase-auth.service.ts
- apps/api/src/modules/workspace/workspace-principal-adapter.spec.ts

Recommend an additive verifyPrincipalEvidence(token, trustedPolicy) method on the EXISTING service, preserving verify(token), forUser(), publicClient() and current guard/Books behavior. No competing Auth integration, new synthetic bridge/provider, dependency or CI layer. Tests append to the existing mandatory principal spec, retain all52current bodies and substitute the existing service's publicClient boundary with SDK-shaped test doubles; no real client initialization or Auth call in the authorized test execution. A new method is not automatically invoked by existing protected routes. No module, guard or workspace route registration in this smallest slice.

After separately approved production policy/schema is pinned, method obtains same-token user/claims via the existing configured public client, performs strict explicit-policy and evidence validation, snapshots a minimal frozen server-private proof matching the existing provider port {token,userId,claims:{sub,session_id,exp},verifiedAt}. Proof token stays request-local and never goes to HTTP, logs, caches or receipts. Keep conservative start-time evidence age and post-await checks. Future request wiring can feed this proof into the existing immutable per-request provider; wiring is a separate authorization, not hidden in this two-file task. Do not silently make stateful WorkspaceService request-scoped and lose pending reconciliation maps.

Tests use injected existing-service publicClient doubles only. Proposed runtime security cases are NOT_RUN_PROPOSED in Task0061: no passing real-Auth experiment is claimed. New implementation must run these tests, existing52/12unit/32PG/regressions/build/check/governance and actual exact-head CI, obtain distinct review, then request separate owner merge.

- R01 explicit trusted policy required; no caller/token-derived endpoint or policy override, omitted-token/session fallback or service-role author path.
- R02 exact immutable token to both required SDK operations with no options override; out-of-order response snapshots, concurrent authors and account switching remain isolated.
- R03 invalid/expired/coerced/overflow expiry, wrong/missing issuer/audience/role/anonymous/AAL and malformed sub/session deny under owner-selected schema. Task0060 fixture defaults cannot accept a real target.
- R04 user/subject/session/expiry conflicts, partial/null/error responses, injected signature/key/algorithm failures and SDK throws deny; no trust in decoded-only claims, user_metadata, x-user-id or request body author.
- R05 provider outage/configuration failure differs internally from invalid evidence, fails closed; no raw error/token/claims leakage or elevated fallback. No real JWT creation/verification in tests; failure outcomes injected.
- R06 after awaits recheck expiry/freshness and clock regressions; preserve current30000ms and immutable provider author/session/expiry pinning, without laundering early observations.
- R07 existing verify()/guard/Books ABI and old52tests remain unchanged; no production calls during tests, no client initialization from the test seam; no network, credential or log payload.
- R08 valid identity proof contains no writable/session-active authority; SESSION_UNKNOWN cannot authorize workspace writes. This is not a real revoked-session acceptance test.

## PROPOSAL: evidence needed before selecting session/revocation mechanism
SESSION remains pending, N12 BLOCKED. Require exact-target catalog/export evidence for authoritative session schema, user linkage, effective grants/role inheritance/function privileges, API exposure and auth-provider version/configuration. The reviewed15-query Task0046 packet remains a separate access-channel/owner-approval gate; this task executes none of it. Static historical local fixtures do not establish live auth.sessions shape or allowed grants.

Require documented owner-selected logout scopes, token lifetime/refresh/session deadlines/inactivity/not_after semantics and real provider behavior. Later separately authorized target-specific tests must distinguish unexpired token after sign-out, revoked/missing/user-mismatched sessions, disabled/deleted users, refresh/logout races and outage/timeout behavior. Use disposable/synthetic sources first; no credentials/users/live JWT probe is authorized by this report.

For the proposed session-row lock experiment, prove which actor revokes/updates rows, compatible lock ordering and privilege confinement, timeout/deadlock/rollback/retry semantics and session-then-book transaction ordering. Task0052's disposable NOLOGIN helper/UPDATE(id) experiment is evidence only, not permission to grant access to Supabase auth.sessions. A mirrored registry alternative needs its own authoritative synchronization/revocation race/recovery proof; do not infer it is safer merely because it avoids one grant. Auth lookup before transaction leaves a TOCTOU gap; serializing revocation after a committed write is not equivalent to denying every request racing with logout. Owner must select the security guarantee and boundary explicitly.

GATEWAY must choose an enforceable private capability and author ownership boundary; PACKAGING must separately approve exact shipping SQL/role/function scope; RECONCILIATION must prove durable idempotency/journal/unknown-outcome handling across process/session changes; TRANSPORT must choose request registration/error mapping. None is decided or implemented here. No production workspace write route until their acceptance is supported. N12's real session/gateway race cases cannot be relabeled PASS using R08 or Task0060 identity tests.

## FACT: preparation verification and review boundary
Task0061/immutableCP0061 committed before handoff edits. Exact source pins and their normalized/canonical source hashes, absence of app/SQL/CI/dependency changes, preservation of Task60/CP60/EB60, explicit six-pending decisions, blocked N12/runtime and proposed-not-run R01-R08 are checked offline. Metadata/readiness/traceability/pack/bundle/compliance and distinct completed-head review/actual applicable CI are recorded in EB and external PR ledger with actual outcomes. No local app test/research rerun is required just for unchanged app blobs; inherited actual CI runs them independently.

Issue108 remains OPEN; expired remediation delegation stays closed; broad design/pilot/production gates unchanged. No hosted operations, credentials, real JWT/Auth experiment, SQL/grants/routes/private manuscripts or implementation performed. Successor preparation PR requires separate owner merge; its integration would still not authorize the next proposed code task.

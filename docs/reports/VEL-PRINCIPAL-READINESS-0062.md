---
id: VEL-PRINCIPAL-READINESS-0062
title: Conditional MVP PRINCIPAL implementation readiness
type: implementation-report
status: proposed-for-review
created_at: 2026-10-25
owner: project_owner
version: 0.1.0
---

## Scope, authority and source
FACT: base main88d8dbcb9e6ec21baf60deebb7004f7e2194b276, next unused Task0062. Unique Task/input8857c1f and validated immutableCP0062 commit4673ec992a1bc424db3438259868d090bd8c0509 precede this operative preparation. Existing [Task0061 handoff](VEL-REAL-AUTH-HANDOFF-0061.md), [frozen SDK evidence](../agent-workflow/inputs/VEL-TASK-0059/SDK-BOUNDARY-SOURCES.md), and [factor-source excerpt](../agent-workflow/inputs/VEL-TASK-0062/FACTOR-SOURCE.md) are read-only inputs.

[Owner authorization6404172728](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6404172728) is preserved exactly in [source snapshot](../agent-workflow/inputs/VEL-TASK-0062/OWNER-AUTHORIZATION.json), including its coordinator-relay provenance. It conditionally approves MVP DESIGN, not production trust completion, implementation or hosted execution. Dashboard observations are owner-reported in that record; original screenshots are not supplied here and were not independently inspected. Record dates are25October2026; no undocumented observation timestamp is invented. Public docs/frozen SDK explain capabilities only, not actual target behavior. No application code or effective standing controls changed.

## Decision matrix (atomic entries, with explicit evidence class)
M01 — APPROVED DESIGN: PRINCIPAL_DESIGN_APPROVED_CONDITIONAL. Fixed owner-configured vellistry-dev endpoint https://lflkcrnriitrbclangyr.supabase.co; no caller/token-derived endpoint/issuer/JWKS/role overrides. Owner authorization is design authority, not deployed-runtime verification.

M02 — VERIFIED TARGET (OWNER-OBSERVED SETTINGS ONLY): owner confirms project URL/metadata and reports Dashboard anonymous sign-ins OFF, TOTP ON, SMS OFF, low-AAL15-minute restriction ON, current ECC P-256 key, previous HS256 key and no custom Auth Hooks displayed. Source is owner observation relayed6404172728, not this agent's hosted inspection. This category verifies the reported setting evidence at its stated scope, never actual issued token, user enrollment or effective enforcement. No key material or user/session records accessed.

M03 — APPROVED DESIGN: reject anonymous/service-role author identities; optional TOTP enrollment, no SMS requirement; aal1 allowed for authors with no verified enrolled factor, aal2 required for enrolled authors before protected workspace access.15-minute restriction stays ON pending separate behavioral acceptance. Separately scope sensitive actions needing aal2; no new MFA enrollment/UI/route work authorized.

M04 — INFERRED/UNCONFIRMED: expected issuer candidate https://lflkcrnriitrbclangyr.supabase.co/auth/v1 and author audience/role candidate authenticated. Owner conditionally approves their intended design, but exact effective issuer/audience/role/claim issuance still needs trustworthy target confirmation before production enforcement. Fixed endpoint approval does not establish issuer equality; no custom Hooks displayed does not establish all issued claims or absence of every possible integration.

M05 — APPROVED DESIGN: prefer current ECC P-256/ES256 trust; permit correctly attributed AUTH_SERVER_BACKED fallback through fixed trusted service, never equate it with local signature assurance. Unknown required algorithm/path assurance fails closed. Previous HS256 needs explicit handling; no key revocation/rotation/settings changes approved.

M06 — INFERRED/UNCONFIRMED: actual JWT alg/kid/current-key selection, exact verification path, previous-key acceptance window/legacy-token behavior, JWKS discovery/rotation/cache behavior. Dashboard ECC P-256 suggests ES256; it is not verified issued-token/header/path evidence. A previous key entry is not proof that it is still accepted or revoked.

M07 — APPROVED DESIGN: same immutable explicit token for getUser(token) and getClaims(token), strict canonical user/subject/session matching; claim/policy checks before lossy projection; safe required exp/iat, validated optional nbf, expiry/future/coercion/contradiction and clock-regression denial, post-await checks,30,000ms proof freshness. Zero skew remains the stated proposed value in authorization, not an observed target clock guarantee; exact field/schema choices must be pinned for future implementation.

M08 — INFERRED/UNCONFIRMED:3,600-second access-token lifetime is a recommendation, NOT current configuration. Token lifetime, proof freshness and session inactivity/max-lifetime are three different quantities. Current AAL/session downgrade timing and15-minute behavior remain unverified; never use that window as permission to accept enrolled aal1 workspace access.

M09 — BLOCKED: authoritative same-author factor-state completeness/visibility/freshness/schema and enrollment-race semantics. AAL claim alone cannot distinguish unenrolled from enrolled-but-not-stepped-up. TOTP enabled for the project does not mean every author enrolled. No user/factor/session inspection authorized now.

M10 — BLOCKED: concrete PRINCIPAL target-trust/assurance and implementation gate until issuer/audience/effective claims, key/legacy/path policy and factor-state prerequisites are accepted. SESSION/N-12/GATEWAY/PACKAGING/RECONCILIATION/TRANSPORT remain separate pending controls. Identity proof is not current writable-session/ownership/grant or write authority. Historical independent spawn EPERM remains BLOCKED. No broad design/pilot/release gate promoted.

## Conditional MFA: enforceable predicate and evidence boundary
INTERPRETATION of approved design: for otherwise valid same-token identity, complete authoritative factor state NONE admits aal1; state ENROLLED requires aal2 (aal1 denies/needs step-up); valid aal2 meets the assurance floor for either known state but does not prove present enrollment or authorize writes. Unknown/malformed/unavailable/stale/incomplete state must not be collapsed to NONE. Conservative proposed handling is deny protected workspace eligibility until trustworthy evidence exists, even when an identity object can be assembled. Missing/unknown AAL must not silently default to aal1 in this application contract.

A candidate source is the matching Auth-server getUser(explicitToken) response's complete factors collection, IF a separately verified target/API contract establishes that it is authoritative and complete for that caller/token/AAL. Validate same canonical user.id/sub, own plain data, well-formed complete factor collection, supported type/status schema and freshness. Count verified enrollments, not pending/unverified setup records. Any verified factor must not be ignored merely because the app currently offers TOTP only; unknown types/statuses/schema cannot justify an aal1 allow. Return only a derived state needed for policy, no factor IDs/secrets/person data in proof, logs or fixtures exported as evidence. No raw factor data is retrieved in Task0062.

The frozen SDK _listFactors() uses getUser() without explicit token. The explicit-jwt _getAuthenticatorAssuranceLevel(jwt) path decodes AAL and calls getUser(jwt), but defaults absent user.factors to an empty array; its non-jwt path consults getSession/session.user. These convenience methods are not substitutes for the stricter request-local verified claims + complete factor-state contract. Do not trust decoded-only currentLevel, nextLevel, AMR, user_metadata, cached session state or a client-provided enrollment boolean. SDK fallback-to-empty is NOT evidence of no enrollment.

[Public MFA documentation](https://supabase.com/docs/guides/auth/auth-mfa) distinguishes session assurance and opt-in enforcement. It does not attest to this project's factor visibility or enrolled-author behavior. No verified target response/schema was supplied; factor evidence remains BLOCKED. If the existing same-token getUser response cannot establish complete state, a separately authorized factor-state source/access scope is required. Do not invent an admin client, extra SQL/grants or third app path inside the two-file future task.

Snapshot trusted policy/client/token and arriving evidence per request, preserve immutable author/session/expiry binding and existing post-async30-second bound. Revalidate temporal eligibility after async work. Concurrent enrollment/unenrollment or restriction changes can invalidate an earlier observation; freshness is not atomic enrollment/session enforcement. Require defined observation/decision timing, no cross-author cache, and separately scoped race/outage/visibility acceptance. No immediate global MFA-enrollment linearization guarantee is claimed; no database transaction/locking semantics are approved here. N12's session/write race tests remain BLOCKED, not replaced by factor-policy unit tests.

## JWT assurance and the previous key
APPROVED DESIGN requires both trusted Auth-server user evidence and successful trusted-claims verification for the exact same captured token. Reuse existing SupabaseAuthService configuration/public client and preserve existing verify(token)->{id}/guard/Books behavior. No current fixture policy may become production defaults: Task60 intentionally denies all AAL fields and extra SDK fields, so it cannot enforce this real conditional-MFA design unchanged.

Distinguish assurance axes: current-key local cryptographic verification proves signature integrity under an approved key/algorithm/origin and checked claims; fixed-server getUser acceptance supplies Auth-server identity evidence; neither proves an active writable session. getClaims success can use local asymmetric WebCrypto/JWK verification or Auth-server fallback in frozen SDK2.117.3. Header alg/kid or Dashboard current-key label alone does not reveal whether an actual call used cached crypto, key fetch or server fallback. Do not report CRYPTOGRAPHIC_CURRENT_KEY unless the required path/key evidence is established.

A permissible minimum label proposal is AUTH_SERVER_BACKED when mandatory fixed-server same-token user verification succeeds AND trusted SDK claims/policy succeed. This describes proven minimum identity assurance, not a claim that getClaims specifically executed fallback. Actual claims-verification path is UNKNOWN unless observable proof exists; UNKNOWN cannot satisfy a policy requiring a particular local path/current key. Owner permission for fallback does not waive algorithm/issuer/audience/legacy policy. Require explicit error classes internally: invalid/expired/mismatched vs configuration/provider unavailable; both fail closed, no elevated or silent offline fallback, no token/claims leakage. External HTTP mapping remains TRANSPORT pending.

Previous HS256 is not current ECC assurance and is not auto-approved merely because Auth server accepts it. Two future dispositions require explicit owner selection/evidence: deny legacy author tokens, or allow a bounded documented legacy compatibility rule only as AUTH_SERVER_BACKED with confirmed permitted algorithm/key-era/limits. No default legacy grace period selected. Do not read a shared signing secret, locally verify HS256, revoke keys, rotate settings or manufacture legacy tokens in this task. No manual downgrade from failed ES256 verification to HS acceptance, no caller keys/JWKS/allowExpired overrides. Built-in SDK fallback behavior must be evaluated against approved assurance before acceptance; if current-vs-legacy provenance cannot be distinguished sufficiently, fail closed for that requirement.

## Future two-path implementation handoff — NOT_AUTHORIZED
New unique implementation Task/committed validated immutable CP at then-current approved main required. EXACT candidate app paths (no edits now):
- apps/api/src/modules/auth/supabase-auth.service.ts
- apps/api/src/modules/workspace/workspace-principal-adapter.spec.ts

Add only an additive verifyPrincipalEvidence method in the existing service and mandatory spec extensions, preserving52existing cases and existing Auth/guard ABI. No new Auth stack/synthetic bridge, dependencies/CI, routes/modules or SQL. Inject the existing publicClient boundary in tests; no real client initialization/network/token experiments in the proposed unit execution. Do not call the new method automatically from existing guards/routes. It may supply a minimal immutable server-private proof to the existing provider only after policy/factor/assurance validation, keeping original request binding. No returned writable/session-active permission or raw factor records; token correlation stays server request-local, not HTTP/cache/receipt/logs.

Implementation cannot honestly meet the conditional design until concrete issuer/audience/effective claim schema, current/legacy/fallback assurance and authoritative factor-state contract are resolved. Do not implement a guessed policy, silently accept all aal1 users, globally require MFA contrary to optional enrollment, or close a gate with mocked evidence. If a prerequisite needs new access, app path, dependency, SQL or live verification, stop that branch of work and obtain a bounded new authorization/pack. No shipping Auth implementation is authorized by this preparation PR.

## R01-R08 future acceptance matrix — every status NOT_RUN
R01 — NOT_RUN: explicit pinned owner config/issuer/audience/role/anonymous/AAL/time/key policy; missing/caller/token-derived policy, service-role author identity, mutated policy or implicit SDK session defaults deny. No production value inferred from Dashboard labels alone.

R02 — NOT_RUN: same immutable token and captured trusted client/policy for required getUser/getClaims; reversed responses, policy/token switching, concurrent authors and response mutation cannot mix evidence. No getSession/refresh or request options/key overrides.

R03 — NOT_RUN: canonical user/sub/session equality; exact approved issuer/audience/author role; anonymous false; strict safe NumericDate exp/iat/optionalnbf, unsupported/expired/future/coerced/contradictory/clock-regression denial.3,600s recommendation must not be treated as target lifetime.

R04 — NOT_RUN: current-key/allowed alg/path evidence, tampering represented as injected failure only in unit tests; previous HS256 allowed only under separately accepted legacy rule and AUTH_SERVER_BACKED attribution. Unknown required path denies; no key-error/crypto-failure downgrade or unsupported assurance claim. Real key/legacy/JWT experiments require separate target-specific permission.

R05 — NOT_RUN: SDK errors/partial/malformed/null/unavailable factor and claims/user evidence deny; internal provider/configuration unavailability distinct from invalid credentials; no sensitive proof/log disclosure or privileged/offline fallback. Existing verify/guard error ABI not silently changed.

R06 — NOT_RUN: complete authoritative matching-user factor-state NONE+aal1 allow, ENROLLED+aal1 deny, ENROLLED+aal2 allow, knownNONE+validhigheraal2 satisfies floor only. Missing factors must not become empty/NONE; A complete validated collection containing only known pending/unverified factors has no verified enrollment and may yield NONE; this is not an empty-default shortcut. Unknown schema/status/type, stale/foreign/mutated evidence or incomplete visibility denies. No AAL-only, Dashboard-project-enable or cached-session enrollment inference. Include response-delay, enrollment/unenrollment observation and15-minute restriction boundaries as synthetic contract cases; actual target behavior stays separately unverified. Factor completeness/race prerequisite unresolved means implementation BLOCKED, not passed with fixtures.

R07 — NOT_RUN: retain30000ms (30000 boundary vs30001 denial), expiry after awaits, immutable binding, all52existing mandatory bodies/12unit/32PG/CI/security/recovery and Auth/guard/Books ABI; no real SDK client/network/JWT/JWKS/SQL/route in this future local test slice.

R08 — NOT_RUN: valid identity and MFA policy still yield no writable/session-active/grant authority. SESSION_UNKNOWN cannot authorize writes; separate N12 tests remain BLOCKED. Demonstrate minimal immutable response/no factor/private record retention, no production request wiring.

These are proposed test requirements, not execution evidence. Task62 document assertions do not execute R01-R08 or establish factor-state/real-token acceptance. If future tests cannot observe an assurance property, mark the actual case BLOCKED rather than fabricating PASS.

## Remaining decisions and permitted next action
PRINCIPAL_DESIGN_APPROVED_CONDITIONAL; PRINCIPAL_TARGET_TRUST_PENDING and IMPLEMENTATION_NOT_AUTHORIZED. Confirm effective issuer/audience/role/anonymous/AAL/time issuance; obtain authoritative factor schema/completeness/visibility and observation timing; settle previous-key disposition and observable path/algorithm assurance; verify configured JWT lifetime and restriction/rotation/cache behavior. The15-minute setting must stay ON; no change granted. Existing target settings are not themselves application policy or behavioral acceptance.

Only separately authorized non-secret evidence/target verification may resolve these gaps. No JWT/JWKS/key material, Auth/user/session inspection, hosted query, credential, settings operation or factor enrollment allowed here. No blanket approval to rerun/extend the Task0046 query packet. Owner observes/accepts missing evidence under exact future scope, then explicitly authorizes the implementation Task and later merge. No successor automatic merge.

SESSION/GATEWAY/PACKAGING/RECONCILIATION/TRANSPORT remain pending; N12 and independent spawn EPERM BLOCKED, R01-R08 NOT_RUN. Task59-61 source/history/failures retained, Issue108 OPEN, expired remediation delegation stays closed; broad design/pilot/release gates unchanged.

---
id: VEL-PRINCIPAL-SESSION-EVIDENCE-READINESS-0077
title: Offline PRINCIPAL and SESSION evidence readiness
type: implementation-report
status: proposed-for-review
created_at: 2026-11-03
owner: project_owner
version: 0.1.0
---

# Readiness result

FACT: **HOSTED_EXECUTION_BLOCKED**. This is a non-executable decision packet, not Auth findings, a live runner or security acceptance. Mainad5e723/PR136/post-main41534118617 verified. Task0077 sourcescc0bbf1 and full-render/source validated immutable CP0077f86ec72 precede these edits. Owner explicitly dispatched offline preparation; [relay](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6591664009) preserves its boundary. No credentials, private account/session/factor data, tokens, hosted request or implementation were obtained.

The [machine-readable matrix](../agent-workflow/proposals/VEL-PRINCIPAL-SESSION-READINESS-0077.json) is authoritative for the individual gate, observation and decision rows. It pins the unmodified0063 protocol SHA256/current Git source and original PR125 reviewed head; fixed origin, E1-E5 methods/paths/query,3case labels,7run fields/27case fields/closed values and32request/15second/5minute bounds are retained. Readiness metadata is NOT additional permitted export fields. It must never be sent as a fabricated sanitized observation. No SESSION or writable field is added to the0063 export schema.

# Fixture prerequisite record

FACT: new [record](evidence/VEL-TASK-0077/fixture-status.json), reconciled3November2026, reports **UNKNOWN / UNKNOWN / UNKNOWN**. Latest actual owner fixture response is26October2026; no new confirmation date or affirmative owner observation is invented. This date is reconciliation, not owner confirmation. Historical Task0063 record/pack remains byte-identical. A pending request asks only3YES/NO/UNKNOWN and date, no identifiers or private evidence.

F1: existing owner-controlled synthetic author without verified enrolled MFA — UNKNOWN.
F2: existing owner-controlled synthetic author with existing verified TOTP — UNKNOWN.
F3: ability to obtain enrolled author's AAL1 and AAL2 observations — UNKNOWN.

Any NO/UNKNOWN blocks hosted work. The smallest owner action is a dated non-secret confirmation from existing trustworthy records. If a fixture is missing or cannot be confirmed without inspection, the owner must separately decide the precise inspection/provisioning scope; this task does not create or enroll it.

# Four gates

G1 BLOCKED: all3fixture confirmations missing; no lookup or substitute real account.
G2 BLOCKED: historical protocol/source review and PR125 integration are verified documentation evidence, not review/approval of a current executable. Pin exact future protocol/runner/sanitizer/environment/SDK commits and distinct review; owner acknowledges endpoints, limits, stop/redaction/local cleanup. No current executable approval or fresh execution exists.
G3 BLOCKED: owner environment checklist is unconfirmed. Private isolated memory-only credentials/tokens and frozen client; no agent access, debug/log/trace/HAR/telemetry/history/clipboard/browser persistence or privileged key. Do not request proof through screenshots/secrets. No cryptographic zeroization guarantee.
G4 BLOCKED: no runner/sanitizer implementation or runtime tests. OR01-OR10 specify offline-only acceptance requirements; all NOT_RUN. Existing52principal tests are application synthetic identity tests, not sanitizer or network-guard acceptance. Green documents/CI cannot promote G4.

# PRINCIPAL case-specific readiness

UNENROLLED_AAL1 — BLOCKED, observation NOT_RUN: require confirmed unenrolled own fixture, same immutable explicit token user/claims results and matching subject, strict session shape/expiry/iat/optionalnbf/freshness; fixed candidate issuer/audience/role/anonymous/AAL observations only within closed output. An observed ZERO verified-factor bucket does not establish authoritative complete absence; preserve factors-field/schema/completeness and owner-ground-truth distinction.

ENROLLED_AAL1 — BLOCKED, observation NOT_RUN: require confirmed existing verified TOTP fixture before step-up. Record same-token outcomes, AAL1 and factor visibility/shape/verified-presence bucket. A provider denial under15minute restriction is BLOCKED/UNKNOWN, not permission to disable it, enroll another factor or retry until accepted. Never infer unenrolled state from missing/empty factors or AAL1.

ENROLLED_AAL2 — BLOCKED, observation NOT_RUN: require existing owned TOTP, one permitted challenge/verify and a new captured immutable case token after owner step-up. Same-token pair/subject/session/temporal checks and aggregate factor visibility apply separately; never replace or relabel the AAL1 case. No OTP/factor/challenge/session identity export.

All3cases separately require auth_user_ok/sdk_claims_ok/user_subject_match, exact captured-token correlation, expiry/freshness and fixed errors/unavailability. No target issuer/audience/role, actual signing algorithm/path or factor semantics is inferred from synthetic values. Conditional design allows AAL1 only with authoritative known no-verified-factor state and requires AAL2 for enrolled authors; unknown completeness cannot become NONE. SDK listFactors/getAuthenticatorAssuranceLevel empty defaults and decoded AAL are not that proof.

Minimum AUTH_SERVER_BACKED requires both fixed-server same-token user and SDK claims success; sdk_claim_path remains UNKNOWN unless separately established, not inferred from header/JWKS fetch. Current ECC P256 versus previous HS256 is owner-observed settings evidence only; no concrete production current/legacy assurance is accepted here.0063 rejects non-ES256 samples before verification, never experiments with legacy. Exp-iat is observed duration, not configured JWT lifetime;30000ms proof freshness is separate. Success is not writable-session authorization.

# SESSION authority and unresolved decisions

S01 JWT/session distinction: historical real-local K2A17/K2B9 evidence atf9448df3e619614d9d6956247b985cf15313b187/[37993494329](https://github.com/Ben-001-sys/Vellistry/actions/runs/37993494329) observed local signout oldJWT PostgREST rows1, Nest401 and same-user synthetic book readable. This is residual bearer access, not cross-author leakage, and not observed hosted behavior. Do not claim getUser always accepts or rejects every revoked token.

S02 linkage: synthetic principal pins and session-row tests show local contracts, not target row/user ownership or least-privilege grants. Current target schema/source visibility remains unverified; no auth.sessions query now.
S03 logout scopes: historical primary refresh revoked, other same-user session and unrelated author remained usable; global then-current refresh revoked. Not every global post-logout/private-data/expiry case was established.0063 permits only local cleanup, never a new global probe.
S04 API boundary: direct PostgREST may retain an allowed bearer path even if Nest denies; server-only UI routing is not enough. Existing direct manuscript DML restrictions do not prove immediate read revocation or gateway security.
S05 row authority: existing local active-session-row research and disposable synthetic locks are evidence only. Never transplant NOLOGIN/UPDATE(id) helper privileges or expose auth.sessions; target semantics/grants remain pending.
S06 races: Auth lookup before transaction hasTOCTOU. Refresh, revocation, MFA/enrollment and deadline changes can interleave. Owner must choose guarantee and linearization, session-then-book lock order, timeout/deadlock/rollback/retry and any mirrored-registry authority/recovery.
S07 deadlines: JWTexp, proof freshness, inactivity and max session lifetime are separate.3600seconds remains a recommendation, not target configuration.
S08 failures: missing/revoked/unavailable/foreign/expired sessions cannot acquire writable authority from valid identity; no service-role or unverifiable fallback.
S09 transaction: actual disposable CAS/revision/journal/rollback/restart tests do not approve production SESSION/GATEWAY/PACKAGING/TRANSPORT. Session/user/deadline/ownership and revocation guarantee must hold at the protected transaction boundary; N12 remains BLOCKED. Source evidence and precise next owner decision are separate for all9matrix rows.

# Offline runner and sanitizer readiness

OR01-OR10 in JSON specify future tests, all NOT_RUN: exact endpoint/method/query/redirect default denial; hidden SDK traffic and retry budgets; immutable same-token snapshots; closed scalar schema; nested/error/URL/header redaction canaries and no fingerprints; temporal/path/factor uncertainty; bounded timers and total32requests including cleanup; newly owned LOCAL-only cleanup; no disk/history/telemetry capture; no gate promotion or output sharing before owner review. Cleanup budget must fit the existing total request/time limits and be reviewed before login, not be extra authority after a limit is reached.

No live runner, endpoint guard, sanitizer or new synthetic policy layer is implemented. A future owner-only executable needs its own explicit scoped Task, immutable CP and exact reviewed sources, offline tests, G1-G4 evidence and access authorization before ANY network. This does not expand the conditional0063 endpoint scope or permit agents to operate Auth. Even sanitized samples cannot establish authoritative factor completeness without a separately reviewed provider contract.

# Verification and permissions

Actual existing offline suites/build/check and document/source assertions are recorded in EB0077. Repository-only changes preserve all application/Auth/SQL/CI/dependency/fixture code. Mainad5e723 full post-main41534118617 actual browser41/443governance/PG/security evidence may be reused only with byte-identity proof and its original source/date; it is not new Task0077 browser or hosted acceptance. No target account/Auth operation is performed by agents. The unchanged classifier conservatively selects full application/security for the matrix JSON. The owner separately clarified permission for ONLY existing disposable loopback CI users/sessions/SQL; see [execution clarification](evidence/VEL-TASK-0077/CI-EXECUTION-CLARIFICATION.md). No CI or path-scope change and no CP rewrite. Disposable CI fixtures do not satisfy targetG1 or establish hosted observations. Actual selected job outcomes must be reported, never assumed or skipped. Distinct exact-head source review and actual Draft/Ready results go in the PR ledger. Owner merge remains separate.

PRINCIPAL design conditionally approved; target trust/implementation pending. SESSION/GATEWAY/PACKAGING/RECONCILIATION/TRANSPORT remain OWNER_DECISION_PENDING. R01-R08 NOT_RUN; N12/historical EPERM BLOCKED; legacy privileges SKIPPED. No production gates promoted. Issues108/131 OPEN; remediation delegation EXPIRED.

---
id: VEL-SUPABASE-WORKSPACE-READINESS-0054
title: Protected workspace Supabase integration readiness and reserved decisions
type: report
status: proposed
created_at: 2026-10-25
owner: project_owner
---

# Integration readiness decision packet

FACT: Base main `c577cc5ecf5fb92fda63977bade60ce4cf2d45df` contains reviewed PR115. Its merged tree equals the approved head and [post-main40184254095](https://github.com/Ben-001-sys/Vellistry/actions/runs/40184254095) succeeded. Task0054/CP0054 was committed and validated before preparation. This task makes no application, Auth, SQL, dependency, CI or production-route change. The expired remediation delegation stays closed. Issue108 remains open.

FACT: The existing Next Books BFF verifies session identity and forwards an access token; Nest independently invokes `SupabaseAuthService.verify(token)` through `SupabaseAuthGuard`. That method returns only a verified user id from `getUser`, not the session id or active writable-session proof required by the new workspace principal contract. WorkspaceService and its principal/port remain unregistered. Task52's synthetic PG17.11 tests passed27original+5extensions; its12 focused unit tests and blocked independent runtime history are preserved. Task0053 is a separate CI coverage candidate, not yet integrated coverage.

The [machine-readable packet](../agent-workflow/proposals/VEL-SUPABASE-WORKSPACE-READINESS-0054.json) pins each relevant Git source and hash. Original Task49 proposed contract and Task50 packet retain historical decision statuses; Task52's owner decisions approved a disposable experiment, not shipping grants or hosted acceptance. This packet does not retroactively edit them.

## Historical target and access boundary

FACT: Owner-confirmed target: `vellistry-dev`, reference `lflkcrnriitrbclangyr`, organization `pulyacnozzggwfgqdgdl`, region `eu-west-2`. Earlier ACTIVE_HEALTHY is historical, not a new observation. The unchanged15-query [Task46 packet](VEL-HOSTED-METADATA-0046-QUERY-PACKET.md) has canonical Git SHA256 `dbae331cd58a7c5524d77fda8380233f19c25b3d0e8520a4b984bc3d58db4f08`. Its [query manifest](evidence/VEL-HOSTED-METADATA-0046/query-manifest.json) preserves all exact query hashes/limits. No query, credential retrieval, CLI authentication or export occurred here.

PROPOSAL: The next hosted-metadata action remains owner-supplied sanitized export or an explicitly approved target-specific read-only channel for those exact queries. Confirm target/reference/organization/region; bounded catalog-only role, transaction read-only/timeout/row limits and sanitized output. Stop on wrong target, missing authority, secret/data fields, unexpectedly broad results or required privilege escalation. Do not query manuscripts, mint users, inspect JWTs or change settings. Metadata inspection does not approve migration execution or behavioral acceptance; owner must separately authorize exact future synthetic fixtures/probes and cleanup.

## Security decisions requiring separate resolution

### PRINCIPAL — OWNER_DECISION_PENDING

PROPOSAL: Reuse existing server-side SupabaseAuthService/guard. Verify exact bearer token with existing Auth; derive subject/session_id/expiry from cryptographically verified claims bound to the same token. Never trust decoded-only claims, headers, user_metadata, a caller-selected session or body author. Request-isolated immutable principal, pre/post async verification.

Decision required: Select existing-SDK verified-claims binding and failure mapping after local tests; no Auth replacement or dependency change.

Acceptance: Wrong subject/session, expired/future/stale proof, mismatched token, malformed UUID, concurrent requests cannot cross-contaminate.

### SESSION — OWNER_DECISION_PENDING

PROPOSAL: A valid JWT/getUser alone does not establish an active writable session. Missing or unproven session must fail closed. Check matching session/user and expiry after lock acquisition, before book lock and operation commit.

Decision required: Owner/provider review is required before any real auth.sessions UPDATE(id) or locking grant. Evaluate managed-schema row-lock compatibility versus separately designed app-owned revocation registry; no option is approved here. Define inactivity/not_after semantics, clock policy, timeouts and revoke/commit linearization.

Acceptance: Local/global/others logout, password/user revocation, expired sessions and cleanup lag, revoke-before-lock and revoke-after-lock, provider outage, refresh/key rotation, pool reuse. Hosted synthetic users/JWT probes need separate target authorization.

### GATEWAY — OWNER_DECISION_PENDING

PROPOSAL: Private server-only SQL capability executes named entry points; no broad author-table writes, browser SQL credentials, service-role author path or public Data API RPC. NOLOGIN/NOBYPASSRLS function/lock owners remain experimental.

Decision required: Choose reviewed connection/pool/TLS/secret provisioning channel and exact role membership, scoped default ACL/ownership/search_path/RLS after metadata review. Never provision credentials now.

Acceptance: Deny direct DML/TRUNCATE/REFERENCES/TRIGGER, role escalation and helper calls; verify forced RLS and cross-author/book isolation through each entry point and reused connections.

### PACKAGING — OWNER_DECISION_PENDING

PROPOSAL: The four local SQL fixtures are not shipping migrations; preserve both operative migrations and separately retained third proposal.

Decision required: Shipping SQL paths UNALLOCATED. First review sanitized metadata via the existing15-query packet, then exact migration names/content and a separate reviewed-base owner SQL-path record before a new executable task. No third-migration deployment approval follows from this packet.

Acceptance: Exclude synthetic auth.users/auth.sessions definitions, fixture users/passwords, fixture_probe/test_fault hooks and fixture-wide default ACL modifications; atomic function ownership/revoke setup and rollback/upgrade from both operative migrations.

### RECONCILIATION — OWNER_DECISION_PENDING

PROPOSAL: Retain owner+book+operation idempotency identity, request hash, receipts and minimum-version owned readback. Unknown outcomes cannot become definite failures or new-key retries. Process-local pending state does not survive browser/server restart.

Decision required: Choose a durable per-author/book operation outbox with data-minimal metadata and explicit retention/privacy/encryption decision for any note payload; preserve book-lifetime server journal and rejection receipts. No unreviewed in-progress committed row or TTL.

Acceptance: Lost ACK after commit, unknown-not-found, same key/different hash, restart/restore, multi-instance concurrency, stale reads/receipts, account switch and cancellation do not duplicate or leak operations.

### TRANSPORT — OWNER_DECISION_PENDING

PROPOSAL: Preserve current Next BFF verified-token forwarding and Nest verification, no-store responses and identity isolation; workspace service remains unregistered.

Decision required: Future production controller/routes require separately scoped owner authorization after principal/session/gateway/reconciliation decisions. Define bounded body parsing, validation/errors/unknown acknowledgements, request-scoped provider and adapter lifetime. Do not register a route in this task.

Acceptance: Cross-book routes, forged ownership, pre/post identity switch, upstream partial body/timeouts, no-store caching, rate/body limits, keyboard/focus existing UI behavior and manuscript/revision invariance.

## Provider evidence and remaining unknowns

FACT: Public documentation was consulted without accessing the target. [Supabase sessions](https://supabase.com/docs/guides/auth/sessions) describes the signed session_id relationship and delayed expiry cleanup. [Signing out](https://supabase.com/docs/guides/auth/signout) states that revoked-session access tokens retain validity until expiry. [getClaims](https://supabase.com/docs/reference/javascript/auth-getclaims) verifies JWT claims and may use cached JWKS; this is not an active-session lock. The [Auth changelog](https://supabase.com/changelog?tags=auth) and [Auth server changelog](https://github.com/supabase/auth/blob/master/CHANGELOG.md) were reviewed on2026-10-25. Their current content does not establish the target's deployed version, signing mode, schema or role privileges. No SDK/server upgrade is proposed.

INTERPRETATION: Reusing existing Auth and binding the same verified token to an immutable principal is the smallest adapter direction. A trusted server SQL login can set principal context, so compromise of that capability is outside the SQL forged-context protection; it must never reach the browser or public RPC. Use transaction-local settings and rollback/commit cleanup, qualified functions and isolated pooling. Existing process-local pending maps cannot establish durable distributed reconciliation. Injecting synthetic principals proves none of the real provider boundary.

PROPOSAL: Review the managed-schema lock/grant choice before packaging; the local NOLOGIN lock role's UPDATE(id) is an experiment, not deployment approval. A row's existence alone is insufficient for time-box/inactivity enforcement; inspect actual semantics and define fail-closed expiry after lock. The fixture's one-second-old synthetic timestamp is test clock accommodation, not a production clock-skew policy. Reads, receipts and acknowledgements need the same reviewed authorization boundary, including after asynchronous responses.

## Smallest next local implementation dispatch

PROPOSAL ONLY: Authorize a new bounded task for a request-isolated principal-binding adapter and synthetic tests using injected, already-verified Auth responses under the frozen SDK. Proposed exact two files are in the JSON packet. Before code, the owner selects the verified-claims binding API and approves those paths; allocate a unique Task/immutable pack. No network, Auth replacement, runtime route registration, SQL or credentials. Test token/subject/session disagreement, expiry/freshness, malformed proof, provider errors and parallel request isolation. This can proceed independently of inventory, but cannot unlock writable sessions or production persistence.

Subsequent SQL packaging requires exact owner-reviewed paths in reviewed base and its own implementation authorization; hosted acceptance additionally requires target/channel/fixture/security authorization. Never copy local auth fixtures or global postgres default-privilege changes into Supabase migrations. Durable outbox, transport and managed-session choices are not silently approved by this packet.

## Review and readiness

Local source preparation: reviewable. Real hosted persistence: NO-GO pending actual catalog inventory, approved session/gateway/privilege choices, executable packaging/negative tests and target-specific acceptance. Private pilot and production: NO-GO. Broad G_DESIGN/G_CODE gates remain unchanged beyond prior exact slices.

Owner review checklist: confirm principal binding API; session expiry/revocation and lock strategy; capability provisioning/role/RLS exposure; migration exclusion/path record; durable reconciliation/privacy policy; transport scope and acceptance environments. No successor automatic merge. Task0053 and0054 share a verified base: merging either first requires rechecking and governed reconciliation of the other, preserving both immutable packs and history. This is a decision packet, not consent to deploy or a passing hosted test.

---
id: VEL-SDK-RESPONSE-BRIDGE-0058
title: Local mock SDK-response bridge composition evidence
type: implementation-report
status: proposed-for-review
created_at: 2026-10-25
owner: project_owner
version: 0.1.0
---

# FACT: bounded authority and source

Owner authorized exactly new workspace-supabase-response-bridge.ts and extension of existing mandatory workspace-principal-adapter.spec.ts, indexed at [Issue108](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6398753206). Reverified main55690e9b707bc1bb9af6cadd761a916d6e5a6a37 after PR119, post-main40199221516 SUCCESS. New Task0058 and validated immutable CP0058 committed before implementation. Frozen pnpm10.18.0 installation passes with unchanged lockfile/dependencies.

Read-only frozen SDK2.117.3 source snippets/hash and [public getUser](https://supabase.com/docs/reference/javascript/auth-getuser)/[getClaims](https://supabase.com/docs/reference/javascript/auth-getclaims) references are pinned in SDK-CONTRACT input. Public changelog HTML was inspected after Markdown content-type fetch rejection. No client/method invocation or target observation occurred during inspection. Public docs describe real methods; this experiment calls injected mock functions only and does not import/instantiate the SDK.

# FACT: implementation and preserved invariants

createWorkspaceSupabaseResponseBridge captures the injected getUser/getClaims methods and returns the existing SyntheticWorkspaceVerificationPort contract. Each call captures its own immutable token, supplies that exact token as the sole argument to both operations, and composes concurrent responses. There is no shared actor, cached proof, getSession/decoded fallback or options/JWKS override.

Both responses require own data fields, null error, complete user/claims objects, valid matching normalized user.id/claims.sub, valid session_id UUID and positive safe integral exp converted safely to milliseconds. Missing/inherited/accessor fields, errors including unexpected falsy non-null values, malformed/coerced/partial/contradictory responses or thrown/rejected dependencies fail closed with null. Only identity/session/expiry fields are retained; SDK metadata/header/signature/user attributes are neither trusted as ownership nor copied into proof.

Each response is snapshotted as it arrives before waiting for the other, preventing later mock mutation from changing observed identity. Proof/claims are frozen. Verification-start timestamp is retained conservatively and checked against time after both operations complete using the existing checkedPrincipal expiry/30000ms freshness rule. Delayed second responses cannot refresh earlier proof; expiry, stale/future/invalid/regressing clock outcomes deny. Existing factory's immutable author/session/expiry binding and post-async checks remain unchanged and are exercised through composition.

# FACT: actual acceptance evidence

All18original adapter tests are preserved apart from the added import, with18new SB01-SB18 composition cases appended;36total pass on the initial corrected candidate. Cases cover complete proof and exact token/options, invalid tokens/clients/errors/partials, subject/session/expiry contradictions, accessor/inheritance rejection, reversed responses and early snapshots, concurrent authors, thrown/rejected clients, expiry/staleness across await, clocks, token/client method replacement, repeated-call/session pinning and no fetch/getSession fallback. Existing mandatory CI selects this same spec, with no workflow changes.

Before-bridge missing-module failure is retained as test-first history. Initial36-case run had35PASS/1FAIL because the test helper default replaced explicit undefined with a valid mock; initial typecheck also rejected the intentional malformed-client cast. Corrected tests inject undefined explicitly and cast through unknown. Corrected36tests/typecheck PASS; no bridge relaxation was made. Raw failure/correction evidence remains, not relabeled production failures or passing checks. All final commands/source/exits/counts and any later corrections are in EB58/PR ledger. Applicable existing regressions, builds/typechecks/governance and real readyCI12unit/32PG/security/recovery remain required.

# INTERPRETATION: security and compatibility boundary

The injected methods are trusted synthetic seams. Passing the same string to both and composing their returned fields does not prove either method authenticated a JWT, contacted Supabase or checked an active session. A forged mock can invent internally consistent first identity data; no real token cryptography, issuer/audience/role policy, revocation or session-row check is implemented. Actual SDK transport/signing-mode behavior is unverified. The bridge is unregistered and cannot authorize real workspace writes; it is a local response-shape/composition experiment only.

# PROPOSAL: review and limitations

PR remains for distinct completed-head review, actual readyCI and separate owner merge; no automatic merge. No existing SupabaseAuthService/Guard, principal adapter implementation, module/controller/route, SQL/migration/grant/RLS, production gateway, dependency or CI changes. No credential access, real Auth/network calls, JWT signing/JWKS experiments, hosted probe, private manuscript persistence or deployment. All six production decisions PRINCIPAL/SESSION/GATEWAY/PACKAGING/RECONCILIATION/TRANSPORT remain OWNER_DECISION_PENDING and hosted observations UNVERIFIED. Historical independent runtime BLOCKED remains unchanged, not superseded by primary tests. Issue108 OPEN, remediation delegation EXPIRED, broad gates unchanged.

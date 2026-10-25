---
id: VEL-PRINCIPAL-BINDING-0056
title: Synthetic request-isolated principal binding implementation
type: implementation-report
status: proposed-for-review
created_at: 2026-10-25
owner: project_owner
version: 0.1.0
---

# FACT: authority and implementation

Owner approved the exact two-file slice after PR116 integration, indexed at [Issue108](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6397184398). Base main e2862c38d03e2bbb6fe4365c3c9074ee0c53e972 has reviewed-tree equality and [post-main40189902635](https://github.com/Ben-001-sys/Vellistry/actions/runs/40189902635) SUCCESS. Task0056 and validated immutable CP0056 were committed before code, and post-main success was verified before implementation. Original Task54/55 packs/reports and proposal remain historical and unchanged; the new owner grant approves only this synthetic local slice, not production security decisions.

Exactly two application files are added: workspace-principal-adapter.ts and its spec. Factory createWorkspacePrincipalProvider captures an immutable primitive token and the injected verifier method at construction. Each verify call requests fresh synthetic verification for that same token, checks time after await, snapshots only strict own data fields and uses existing uuid/checkedPrincipal contracts. No mutable global/request slot, cache, SDK/client call, service/module registration, database, request route, dependency or CI edit.

Synthetic proof schema is {token,userId,claims:{sub,session_id,exp},verifiedAt}. exp is positive safe integral seconds converted safely to milliseconds; verifiedAt/clock are nonnegative safe integral milliseconds. Empty/whitespace/control/oversized tokens, malformed/coerced data, extra/inherited/accessor/symbol fields, user/subject disagreement, invalid UUIDs, stale/future/expired evidence and dependency/clock errors deny with null. UUID case normalization reuses the existing contract. Existing30000ms freshness boundary and zero future tolerance are preserved. The provider also denies clock regression across await.

First valid completion pins normalized author/session/token expiry for this token. Subsequent and overlapping completions must agree; failures do not clear that binding. Refresh creates a new provider. Returned provider/principal are frozen scalar snapshots, so mutations of caller input or proof cannot change an established identity. No await separates the per-provider binding check and pin.

# FACT: PB01–PB10 acceptance evidence

- PB01: valid synthetic proof returns frozen existing principal shape; checkedPrincipal compatibility.
- PB02: missing/malformed token, rejected/throwing port, malformed proof and inherited/accessor data deny without a decoded-identity fallback.
- PB03: verified user/subject UUID equality and valid session UUID; a later session switch is rejected. The first trusted session assertion is not checked against a real session row.
- PB04: invalid/coerced/overflow/expired numeric claims, stale/future verification, invalid/regressing clocks deny; exact freshness boundary retained.
- PB05: two authors/providers complete out of order without exchanging identity; overlapping same-provider calls share only their request binding.
- PB06: caller token changes or port method replacement cannot redirect an existing provider; token mismatch and refreshed-token/new-provider behavior tested.
- PB07: expiry/freshness rechecked after async completion; changed identity/session/expiry rejected, failed proofs never clear binding, mutations do not alter returned data.
- PB08: injected synthetic results/clocks only; network-fallback mock observes zero calls. No JWT signing or credentials.
- PB09: source-scope verification establishes only the two authorized application additions, no existing Auth/service/module/route/SQL/dependency/CI changes.
- PB10: local regressions/build/typechecks/governance and inherited actual readyCI recorded in EB/PR ledger;12unit/32PG gates remain mandatory and unchanged. Distinct exact-head review and separate owner feature merge required.

The18 focused tests pass on the initial candidate. Before-adapter missing-module failure is retained as TDD history; pnpm's generic trailing executable error is not mistaken for a missing installed tsx (the trace shows the adapter module was absent). All final commands/exits/counts/source revisions, any corrections and actual CI appear in EB0056 and the final PR ledger; no pending check is relabeled passing.

# INTERPRETATION: trust boundary

The injected port is trusted to verify the token and supply same-token evidence. Echoed token correlation and subject/session validation do not authenticate arbitrary JSON, verify JWT signatures or prove live Supabase session revocation. A synthetically valid first response establishes this provider's binding; this adapter cannot independently know whether that response's session belongs to the token. Existing real Auth integration and managed-session decisions remain separate. No principal is used to write a real author database here.

# PROPOSAL: review disposition and remaining limits

All PRINCIPAL, SESSION, GATEWAY, PACKAGING, RECONCILIATION and TRANSPORT production decisions remain OWNER_DECISION_PENDING; hosted observations UNVERIFIED. No provider getUser/getClaims integration, session grants/locks, shipping migration, production route, private manuscript persistence, credential, hosted query/JWT probe or broad gate promotion. Old independent runtime BLOCKED is not PASS. Legacy privilege fixture skip is not acceptance.

The new spec is explicitly executed locally; current fixed-file CI does not select it, and no CI change is authorized. Actual existing readyCI still builds/typechecks this code and runs inherited12unit/32PG/security/recovery; do not imply automatic coverage of the new18 cases. An automatic-selection change would require separately scoped authorization. Feature merge remains owner-controlled; remediation delegation EXPIRED, Issue108 OPEN. No author-facing UI or language change.

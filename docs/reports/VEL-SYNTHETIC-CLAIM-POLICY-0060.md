---
id: VEL-SYNTHETIC-CLAIM-POLICY-0060
title: Pure synthetic principal claim-policy experiment
type: implementation-report
status: proposed-for-review
created_at: 2026-10-25
owner: project_owner
version: 0.1.0
---

## FACT: scope and source
PR121 merged as9b492262026287152af7fb0a5981efda1524d059 with exact reviewed-tree equality0feb8f9faf0a1011edbdb883535a4f5198916c8b. [Post-main40215639714](https://github.com/Ben-001-sys/Vellistry/actions/runs/40215639714) SUCCESS; synthetic PG artifact32PASS/source/cleanup verified. Task59/CP59/EB59 and historical NOT_RUN/BLOCKED evidence remain unchanged.

Owner scope [relay](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6400695011) is a record of direct owner chat, not fabricated human GitHub approval. Task0060 input commit854342a preceded committed validated immutable CP0060 a5aef56a9ee069080e9e3781e5c8b62125ffed19. Implementation source ad7919dbc99c36e4f0474956fdac2960f4145702 changes exactly approved helper/spec plus compact current-state. No Auth/guard/bridge/provider implementation changes.

Pure evaluateSyntheticPrincipalClaimPolicy takes injected already-verified mock response, explicit trusted synthetic policy and explicit current milliseconds. Only reviewed synthetic issuer https://synthetic.invalid/auth/v1, audience synthetic-author, role authenticated are permitted. They are NOT production defaults and there is no implicit policy. Missing/malformed policy denies. Policy validation precedes bridge projection; caller test wrapper snapshots evaluated claims on arrival. No SDK/client initialization or token verification.

Strict own-data fixture schema denies accessors/inheritance/symbols/unknown fields, malformed subject/session/expiry and role/anonymous/audience mismatches. Explicit is_anonymous:false required. No positive AAL was approved, so any aal field is unsupported and denies, including undefined; no AAL value is invented. Optional iat/nbf are safe nonnegative integral NumericDates, no future tolerance, <exp and ordered iat<=nbf. Other time fields deny. Returned response/data/claims/audience array are frozen snapshots. No author user object, token or mutable policy is retained. Extra SDK header/signature/private metadata are deliberately outside this minimal mock schema; this is not actual SDK compatibility acceptance.

Unchanged bridge/provider still capture exact request token, compare user.id/sub, pin author/session/expiry and verify post-async expiry/freshness. Current30000ms boundary retained (30000passes,30001denies), including delayed/reversed concurrent completions and clock rollback. No session evidence or write capability is returned.

## FACT: actual local acceptance
All52mandatory tests PASS (36old bodies unchanged,16new). Original cases preserve established token/proof binding; new cases compose helper through existing bridge/provider. Source-preservation assertions verify exact old36prefix, approved app paths, untouched Auth/SQL/CI/dependencies and Task59/CP59/EB59.

| Case | Actual local evidence | Result/limit |
|---|---|---|
| N01 | Explicit fixture positive; missing/malformed/wrong policy | PASS synthetic |
| N02 | Wrong issuer; malformed/mismatched/expanded audience | PASS synthetic |
| N03 | UUID/session errors; mismatched injected user/subject | PASS synthetic |
| N04 | Wrong role/anonymous; any unsupported AAL/metadata | PASS synthetic; no production AAL decision |
| N05 | Expiry/coercion/overflow/future/malformed/unsupported time | PASS synthetic |
| N06 | Null/partial/error results and client rejection | PASS synthetic |
| N07 | Both operations receive same captured token, no options | PASS synthetic |
| N08 | Concurrent/reversed author responses, immutable binding | PASS synthetic |
| N09 | Post-await expiry/clock rollback/30000ms freshness | PASS synthetic |
| N10 | Injected signature/key/algorithm error outcomes | PASS mocks ONLY; no cryptography |
| N11 | Returned identity has no activeSession/writable fields | PASS limited identity shape; revoked-session enforcement NOT VERIFIED |
| N12 | Authoritative session/gateway TOCTOU/rollback races | BLOCKED, not executed by this task |
| N13 | Snapshot/getter/privacy/no network/no logs assertions | PASS synthetic |
| N14 | Old36retained,12units/regressions/control preservation | Local PASS; actual final-head32PG/security/recovery CI recorded in PR ledger |

Frozen install pnpm10.18.0/lock unchanged PASS. At committed implementation source:52adapter/12unit/41workspace/67Library/23preflight, build/typecheck PASS, exits0; commands/durations/source SHA/raw logs in evidence/results.json. Full governance and actual final-head CI outcomes are recorded in EB and PR evidence ledger after they finish, not inferred from older results. No local Docker runtime is claimed from a mock test;32PG requires actual Actions artifact and cleanup evidence.

Historical failures retained: first sandbox attempt could not access Corepack cache/network, before-helper.txt exit1 (environment restriction). Permitted unchanged retry before-helper-permitted.txt exit1 genuinely missing helper module. Initial implementation adapter run51/52PASS: test default swallowed explicit undefined response; corrected by requiring response argument, helper unchanged. Initial check PASS. Failed candidate was uncommitted at CP head; no failed-tree SHA invented. Corrected52PASS then committed-source52PASS retained separately. Public changelog Markdown fetch unsupported-content-type; no SDK implementation/API change depends on it.

## INTERPRETATION
This helper evaluates already-trusted fixture assertions. Arbitrary JSON that matches the schema is not authenticated. Passing mocks prove neither JWT signature/key provenance nor live Auth-server identity nor active-session/revocation enforcement. The N11 test asserts absence of writable authority, not rejection of a real revoked token; N12 remains BLOCKED. Synthetic policy restrictions are intentionally not a production claim policy, configurable issuer/JWKS channel or live SDK adapter.

## PROPOSAL and review boundary
Obtain distinct completed-head trusted Codex source review and actual ready-state CI; present new implementation PR for separate owner merge, never merge automatically. All six production decisions PRINCIPAL/SESSION/GATEWAY/PACKAGING/RECONCILIATION/TRANSPORT remain OWNER_DECISION_PENDING. Historical independent spawn EPERM remains BLOCKED, old NOT_RUN evidence unchanged. No hosted queries/credentials or new real JWT/JWKS/Auth integration experiment, SQL/grants/session locks/routes/private manuscripts/deployment/CI/dependency change. Unchanged mandatory disposable CI includes existing local Supabase Auth/security regressions; those are separate inherited checks, not acceptance of this helper as real Auth. Issue108 OPEN; expired remediation delegation remains closed; broad gates unchanged.

Final local governance:423tests PASS (284current+139archived), runner exit0; metadata/readiness/traceability/pinned source/export checks PASS. Generated scratch packs/ZIPs/caches are not committed. Ready-state CI and32PG still require actual final-head run evidence.

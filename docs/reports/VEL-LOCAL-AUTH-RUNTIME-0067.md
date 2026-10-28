---
id: VEL-REPORT-LOCAL-AUTH-0067
title: Local MFA route and NestJS development injection repair
type: report
status: proposed
created_at: 2026-10-28
updated_at: 2026-10-28
owner: project_owner
---

## FACT — source and scope
Root checkout is feat/vel-imp-001-library-isolation at78f80bb33a27db362202b81d04db05919fd77a52 with pre-existing owner changes (CURRENT-STATE, next-env and untracked reports). It was not switched/reset/stashed or its env files inspected/copied. GitHub main reverified5e3aeec95a34c0a9564067632655a0549a824c9d. UniqueTask0067 source5ada2cd and immutableCP0067 commit4de1cda precede operative changes; full pins available in Git/manifest. Worktree .worktrees/vel-local-auth-runtime, branch codex/vel-local-auth-runtime.

## FACT — confirmed causes
MFA404: root route file absent; active Next process30676 resolved root node_modules Next16.4.0. Exact loopback GET/account/mfa returned404. Current main includes existing route/AuthPanel and pins16.4.1. No MFA UI code correction needed. Only verified stale Next27772/30676 and tsx336/26652 trees stopped; current worktree servers replace them at127.0.0.1:3000/4100. No credentials copied; Supabase configuration deliberately absent in these agent-launched processes.

Nest500: AuthModule already provides/exports AuthService/guard, AppModule imports it and registers BooksService/controller. All three constructors relied on design:paramtypes emitted by tsc but omitted by tsx/esbuild. Real Nest HTTP tests on unchanged implementation:14tests,5PASS/9FAIL, exit1; app.get guard/service/controller dependencies undefined. Same emitted JavaScript14PASS, exit0, but initial tsc command exit1 due a test-only structural cast type error; output was emitted despite that diagnostic. Corrected cast via unknown; subsequent compilation exits0. Do not present initial compilation as passing. Explicit @Inject concrete class tokens fix all three constructors in both runtimes, no new Auth integration or policy.

## FACT — correction and verification
Only guard, BooksService, BooksController constructor tokens changed. New auth-runtime.spec.ts uses actual Nest module/loopback HTTP and synthetic SDK objects; no remote Auth/Data API. Existing mandatory test:library-isolation includes14new cases (81total). Tests cover same registered dependencies, health, GET/POST401 for missing/malformed/forged identity, invalid verified evidence401, unavailable Auth503, correct synthetic same-token list/create, title-only insert and sanitized DB500. ServiceUnavailable/Unauthorized and unknown-write behavior retained.

Frozen pnpm10.18.0 installation exit0 (176reused,0downloaded; no lock/dependency changes). corepack pnpm check/build/test:auth-mfa/test:hosted-preflight all exit0;55MFA/23preflight. corepack pnpm test:library-isolation81PASS exit0. tsc -p apps/api/tsconfig.json --outDir apps/api/.runtime-test exit0; node --test apps/api/.runtime-test/modules/auth/auth-runtime.spec.js14PASS exit0. Test evidence records raw failures and successes, not hosted acceptance.

Actual main.ts runtime smoke: tsx watch and node dist/main.js on temporary4140/4141 each health200/books401/no-config synthetic bearer503, no TypeError; owned temporary process trees stopped. Live replacement health4100=200, Books4100=401; Next/account/mfa=200. Playwright actual DOM renders Authenticator app heading, unavailable-configuration message and sign-in/home links. No enrollment/sign-in executed. Frontend/api/books=503 because getServerSupabase cannot initialize without configuration; this is distinct from DI,401invalid identity, transport failure or missing hosted tables. Initial smoke expectation401 was wrong and corrected; raw Next HTML contains embedded not-found template even on200, so browser DOM is the relevant render evidence. No hosted schema/read/write/persistence success claimed.

## INTERPRETATION
Explicit tokens fix runtime wiring instead of disabling guard or masking undefined.verify. No tsx/dependency change needed. Root source/version mismatch fully explains missing route; current main route was already correct. Synthetic Books success proves controller/service transport and ownership payload behavior only. Missing hosted tables/settings and real sessions cannot be evaluated under this authorization.

## PROPOSAL and boundaries
Review final exact head and CI, then owner decides merge. No automatic merge. Owner can use the isolated current worktree for local development, configuring runtime privately under separately applicable permissions; launching pnpm dev from old root will reproduce stale route/version. No environment values retrieved or altered, no real token/browser session used. Current unconfigured servers show unavailable Auth safely. Hosted acceptance, backend MFA policy, PRINCIPAL/SESSION unresolved; R01-R08 NOT_RUN, N12/historical independent EPERM BLOCKED; Issue108OPEN, old delegationEXPIRED. Existing23offline browser assertions are historical, not newly rerun or made mandatory here. Governance/independent review/CI results are appended at exact head after evidence is committed.

---
id: VEL-DEV-001-PHASE-A
type: verification-report
status: proposed-for-review
created_at: 2026-10-23
updated_at: 2026-10-23
owner: project_owner
version: 0.1.0
---

# VEL-DEV-001 Phase A foundation verification

## FACT: authority and baseline
Owner directly authorized Issue #108 Phase A in this Codex conversation. Its earlier prepared-for-approval issue text predates that dispatch. Task0045 archives the bounded authorization; CP0045 pins its sources. The expired remediation delegation supplies no authority. Owner retains merge and all feature/hosted decisions.

Live main was fetched at `be69e5b249f57253e726bfcca00f5e81c0c60623`. PR107 and post-main [39961186197](https://github.com/Ben-001-sys/Vellistry/actions/runs/39961186197) are historical foundation evidence, not a new Phase A run. Root owner worktree and existing local configuration were preserved. A new isolated `codex/vel-dev-001-phase-a` worktree contains only tracked source plus generated dependencies/test outputs. No actual env file or credential was opened, printed, changed or copied. App credential/DOTENV/NODE_OPTIONS variables were excluded from child test environments; no local Supabase service or hosted target was contacted by these tests.

## FACT: actual local verification
See [machine-readable commands/exits](evidence/VEL-DEV-001/baseline-results.json) and adjacent complete logs. Windows, Node24.13.0, pinned pnpm10.18.0, Python3.10.10. Installed Next16.4.1, Nest11.2.7, Supabase JS2.117.3 and SSR0.7.0 are recorded alongside exact base/head Git blobs in [source identity](evidence/VEL-DEV-001/source-identity.json). Tested commit `c0c691fbc0a5d9ce7528f88cbc7aa7d5af57463d` differs from verified main only in the new task/owner scope; application, tests, package manifests and lockfile are identical.

| Command | Result | Meaning |
|---|---|---|
| corepack pnpm install --frozen-lockfile | PASS exit0 | Pinned dependency resolution; no upgrades |
| corepack pnpm test:hosted-preflight | PASS exit0;23/23 | Temporary synthetic config fixtures, no target connection |
| corepack pnpm test:library-isolation | PASS exit0;67/67 | State/session/create/owner contract regression; no live Auth/RLS |
| corepack pnpm check | PASS exit0 | Nest and Next TypeScript |
| corepack pnpm build | PASS exit0 | Nest compiler and Next16.4.1 production build |

Full governance passed415 tests (276current+139archived), metadata, readiness, traceability and pinned artifact validation; exit0. Exact commands and complete evidence are recorded in EB0045. No real-browser end-to-end, live disposable Auth/DB or hosted acceptance is inferred from unit tests or compilation. Existing CI security/recovery evidence remains bounded to its recorded source and fixtures. The integrated SQL privilege job was skipped historically; skip is not acceptance.

## FACT: existing connection and isolation trace
All source paths below refer to the verified main baseline; no application source changed.

1. `apps/web/src/app/login/page.tsx` calls the existing browser client's `signInWithPassword`/`signUp`. Browser client `apps/web/src/lib/supabase/browser.ts` uses `@supabase/ssr` and the two NEXT_PUBLIC Supabase settings. No second identity service is needed.
2. `apps/web/src/lib/supabase/server.ts` provides the cookie-aware server client. Cookie writes are attempted in route handlers; server-component restrictions are caught. Real expiry/refresh/cookie behavior needs integration/browser evidence.
3. `/books` wires Auth events, `getUser`, fetch and sign-out to `book-library-session.ts`. Auth events are hints; late GET/POST results require a post-response identity check. Generation/owner guards discard stale responses. Failed verification conceals titles/drafts; an account change clears old state. Sign-out failures do not claim successful logout.
4. Next `/api/books` obtains the session token, validates that exact token with `getUser(token)` through `verifiedBookAccess`, and forwards it to Nest. `getSession` alone is not authorization. POST additionally requires the expected-user header to match the verified owner; forwarding is title-only. Private responses use no-store. Pre-forward configuration failure is distinct from a post-forward unknown acknowledgement.
5. Nest `SupabaseAuthGuard` rejects missing/malformed bearer tokens; `SupabaseAuthService.verify` calls Auth `getUser(token)`. `forUser(token)` uses a publishable key plus the user's bearer token, without persisted sessions or service-role privilege. BooksController validates title; BooksService reads/creates via that scoped client. `owner_id` is DB `auth.uid()` default, never accepted from JSON.
6. Initial migration enables/FORCEs RLS on books/chapters/revisions. Book policies bind read/write to `auth.uid()`, including WITH CHECK for inserts/updates. Nested chapter/revision reads require an owned book. Second migration explicitly revokes author chapter/revision writes. Presence of these SQL files does not prove target installation or effective inherited/default ACLs.
7. Ambiguous create acknowledgement remains unknown, with ordinary create locked. Checking the list does not prove a missing title was never committed. Explicit risk retry warns of duplicates; no server idempotency guarantee is claimed. 401, session mismatch, stale/failed identity, malformed responses and sign-out failures have synthetic negative coverage in the67 cases.

## FACT: documented configuration contract
README is the canonical placeholder reference, not root legacy `.env.example`. After separate setup authorization only: Web uses `apps/web/.env.local` with NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY and VELLISTRY_API_BASE_URL; API uses `apps/api/.env` with SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, API_HOST and API_PORT. Both point to the same owner-confirmed HTTPS project. API transport defaults to loopback4100 and web3000. Nest `dotenv/config` runs with the app package working directory via existing pnpm scripts. Public keys are not service-role/secret keys and do not replace user authorization.

The offline preflight checks these files and known parser/override hazards; only its synthetic test runner was invoked. Actual `check:hosted-config`, CLI login/status/link and local configuration inspection were NOT_RUN. Configuration correctness, target availability, current Auth settings and application persistence remain unknown.

## INTERPRETATION: readiness and remaining blockers
The existing foundation is reusable for an owner-approved next local slice; it is not a verified hosted connection. Source-level protective controls plus67 synthetic cases are evidence, not proof of the complete browser/BFF/Nest/Data API boundary. Hosted migration history, grants/defaults, RLS, signed-out JWT exposure, two-author persistence and cleanup require separately authorized target-specific verification. The third SQL definition remains planning-only and unadopted. No chapter mutation or planning-note persistence API is currently implemented.

## PROPOSAL: next decisions
[Hosted packet](VEL-DEV-001-HOSTED-PROPOSAL.md) requests only a precisely bounded first metadata observation once the owner identifies the exact target. [IMP-002 handoff](VEL-IMP-002-HANDOFF-PROPOSAL.md) proposes one local-only Book Workspace slice with explicit non-persistence limits. Neither packet is a dispatch. Broad G_DESIGN/G_CODE, private pilot and release gates remain unchanged. Issue108 stays open. Phase A review/owner merge is separate from all later implementation approvals.

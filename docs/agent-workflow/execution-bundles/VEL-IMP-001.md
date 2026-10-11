---
id: VEL-IMP-001
title: Authenticated Book Library account isolation
type: execution-bundle
status: proposed-for-review
created_at: 2026-10-11
version: 0.1.0
task_id: VEL-IMP-001
context_pack_id: null
base_commit: 68c9ea5eb29c7bec558321d6b69a2604bd5128a2
agent:
  name: Cursor Grok 4.7
  model: Grok 4.7
  role: scoped-implementation
sources:
  - "GitHub issue 63, owner-authorized IMP-001 slice"
  - "main 68c9ea5eb29c7bec558321d6b69a2604bd5128a2"
evidence:
  - "Synthetic node:test run, pnpm check, and pnpm build. No hosted database connection and no remote schema write."
review:
  status: pending
  approved_by: null
  evidence: null
---

# VEL-IMP-001 — Book Library account isolation

Issue #63 is the authorization for this slice. No `VEL-TASK` file was created. `VEL-TASK-0004` was not recycled. No ContextPack was pinned. This bundle is proposed for owner review. It does not accept PLAN-01..06 and it does not approve a merge.

## Work performed

Inspected the existing `/books` page, Next.js BFF `/api/books`, and Nest `GET`/`POST /v1/books` on verified `main`. The page loaded once on mount. A 401 or thrown load error changed the status line and left the previous title list in place. Create forwarded a JSON body and then reloaded without an account generation.

The branch `feat/vel-imp-001-library-isolation` adds an account-scoped library view model. A newer load clears titles immediately. A response applies only when its generation and owner still match. Book create forwards `{ title }` only, and only when the browser's expected user matches the verified Supabase session user. Nest still inserts `{ title }` and ignores any client `owner_id`. Loading, empty, populated, unauthorized, and error regions are mutually exclusive in that view model.

Hosted Supabase project `vellistry-dev` (ref `lflkcrnriitrbclangyr`) was not queried. No SQL, migration, `db reset`, or `db push` was run. PR #59 and Issue #58 were not updated.

## Facts and evidence

- **FACT.** `git fetch origin main` resolved `origin/main` to `68c9ea5eb29c7bec558321d6b69a2604bd5128a2` (`pnpm lockfile`, 2026-10-11T12:51:00Z). That matches the onboarding SHA. The workspace snapshot before fetch was `b51e385a236cf47884048e35bf7fab71fccf8157`. The branch was created from `68c9ea5`, not from `b51e385` and not from `feat/vel-imp-001-auth-library`.
- **FACT.** First implementation commit: `58d8cd9d3df62b13ad406e686db2ef11f8c29c50`. The following commit on this branch fixes a missing `requestCreate` import found by typecheck and adds this report.
- **FACT.** Draft pull request: https://github.com/Ben-001-sys/Vellistry/pull/64 . It targets `main` and was not merged.
- **FACT.** Environment for the commands below: Node `v22.14.0`, Corepack pnpm `10.18.0`. `corepack pnpm install --frozen-lockfile` exited 0. The lockfile was already current. pnpm was not upgraded.
- **FACT.** `corepack pnpm test:library-isolation` exited 0: 14 tests, 14 pass, 0 fail. The tests use in-memory authors `author-a` and `author-b` and synthetic titles. They do not open a network connection.
- **FACT.** `corepack pnpm check` exited 2 on `58d8cd9` because `apps/web/src/app/books/page.tsx` called `requestCreate` without importing it. After that import was added, `corepack pnpm check` exited 0.
- **FACT.** `corepack pnpm build` exited 0 after the import fix (Nest `tsc` and Next.js 16.4.0). `apps/web/next-env.d.ts` and `pnpm-lock.yaml` hashes were unchanged by the build. Neither file is modified in this branch.
- **FACT.** `ACC-M1-01` live create/reopen, cloud RLS, and direct PostgREST behavior for a signed-out unexpired JWT were not executed. They stay **BLOCKED**. No service-role key was added to the frontend. This report contains no access token, password, or manuscript.

## Interpretations

- **INTERPRETATION.** The testable part of IMP-001 is the client partition, the BFF expected-user gate, and the Nest title-only insert. Those do not prove database RLS.
- **INTERPRETATION.** A same-account create failure keeps the current list so a populated library does not turn into the empty call to action. A 401 or failed load clears the list because those results are no longer known to belong on screen.
- **INTERPRETATION.** Full `VEL-JRN-001` and `VEL-JRN-011` are larger than this slice. The crosswalk rows named by Issue #63 stay `NOT_RUN` because rename, chapters, live two-account RLS, and export/delete were not run.

## Proposals

- **PROPOSAL.** Owner review of draft PR #64 before any merge. Do not treat this bundle as that approval.
- **PROPOSAL.** Live `ACC-M1-01` and cloud RLS remain a separate, explicitly authorized schema task. Do not apply the repo migrations to `vellistry-dev` as a side effect of this slice.
- **PROPOSAL.** Keep `VEL-TASK-0004` unused. A future workflow task, if the owner wants one, needs a new id chosen by the owner.

## Tests

| Command | Exit | Result |
|---|---|---|
| `corepack pnpm install --frozen-lockfile` | 0 | Lockfile already current. No dependency upgrade. |
| `corepack pnpm test:library-isolation` | 0 | 14 pass / 0 fail. No hosted database. |
| `corepack pnpm check` (on `58d8cd9`) | 2 | Missing `requestCreate` import. |
| `corepack pnpm check` (after the import fix) | 0 | Nest and Next typecheck passed. |
| `corepack pnpm build` (after the import fix) | 0 | Nest and Next production builds passed. |

Covered by the synthetic tests: author A then author B, a delayed A response after B is visible, 401 and load error clearing, empty versus populated copy, refresh ignoring a stale retry, create failure, stale or cross-account create, unauthorized create, and stripping `owner_id` from the create document and the Nest insert payload.

**BLOCKED.** Live book persistence, `ACC-M1-01` reopen with chapters, cloud RLS, and direct PostgREST checks. **NOT RUN.** Browser sign-in as two real accounts, rename, chapter CRUD, and the hosted project.

`/books` was not driven in a browser against Supabase. **FACT.** The production build's prerendered `apps/web/.next/server/app/books.html` contains `Loading your books...`, `Your books`, `Create`, and `Sign out`, and does not contain `No books yet`, `owner_id`, or a synthetic title. Account switching was verified on the view model, not in a logged-in browser session.

## Artifacts

- Branch: `feat/vel-imp-001-library-isolation`
- Pull request: https://github.com/Ben-001-sys/Vellistry/pull/64
- View model: `apps/web/src/lib/library/book-library-state.ts`
- Create gate: `apps/web/src/lib/library/book-create-document.ts`
- Tests: `apps/web/src/lib/library/book-library-state.test.ts`, `apps/api/src/modules/books/book-create-input.spec.ts`
- This report: `docs/agent-workflow/execution-bundles/VEL-IMP-001.md`

## Risks

- UI cache isolation does not close the signed-out, still-unexpired JWT direct PostgREST risk. That remains a private-pilot blocker.
- A create that passes the expected-user check is still stored only if the hosted schema exists. This slice cannot show a saved book there.
- The BFF still uses the existing `getUser` plus `getSession` token forwarding. That pattern was preserved, not redesigned.
- `G_DESIGN`, `G_CODE`, `G_PRIVATE_PILOT`, and `G_RELEASE` stay pending.

## Reviewer disposition

**Pending owner review.** This bundle is not an acceptance of the planning package, not a passing live RLS result, and not a merge.

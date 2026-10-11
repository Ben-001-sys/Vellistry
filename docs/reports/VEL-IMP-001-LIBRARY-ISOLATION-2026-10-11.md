---
id: VEL-RPT-IMP-001-20261011
title: VEL-IMP-001 Book Library account isolation
type: execution-report
status: proposed-for-review
created_at: 2026-10-11
updated_at: 2026-10-11
version: 0.2.0
task_id: null
context_pack_id: null
base_commit: 68c9ea5eb29c7bec558321d6b69a2604bd5128a2
reviewed_head: 092a29a738b7eb7dbabda80ad32dc33296b703b7
review:
  status: pending
  approved_by: null
  evidence: null
---

# VEL-IMP-001 — Book Library account isolation

This is the factual execution report for Issue #63. It is not a v0.1 ContextPack handoff. No `VEL-TASK` was created, and `VEL-TASK-0004` was not recycled. The report lives under `docs/reports/` so `scripts/agent_workflow.py` keeps validating only pinned `VEL-EB-####` bundles. The earlier hard-coded `VEL-IMP-001` validator bypass has been removed.

Draft pull request: https://github.com/Ben-001-sys/Vellistry/pull/64 . Not merged.

## Work performed

Reviewed head `092a29a738b7eb7dbabda80ad32dc33296b703b7` received four review corrections. The branch still starts from verified `main` `68c9ea5eb29c7bec558321d6b69a2604bd5128a2`.

1. The unsaved book-title field clears when the authenticated author changes, and stays when the same author refreshes.
2. A thrown or returned Supabase sign-out failure leaves the book list cleared, shows an error status, and does not redirect. A successful sign-out redirects to `/login` only after that call succeeds.
3. `SIGNED_IN`, `TOKEN_REFRESHED`, and `USER_UPDATED` for the same author do not restart the load or abort an in-flight create, so the create response can still be applied. An author change still aborts that create and does not show it for the next author.
4. `scripts/agent_workflow.py` and `tests/test_agent_workflow.py` match `main` again. This report replaced `docs/agent-workflow/execution-bundles/VEL-IMP-001.md`.

Hosted Supabase `vellistry-dev` was not queried or modified.

## Facts and evidence

- **FACT.** Review comment: https://github.com/Ben-001-sys/Vellistry/pull/64#pullrequestreview-5483472688 on `092a29a738b7eb7dbabda80ad32dc33296b703b7`. It is a comment review, not a merge approval.
- **FACT.** Title clearing is implemented in `apps/web/src/lib/library/book-library-session.ts` (`startLoad` clears `draftTitle` only when the owner changes) and bound by `apps/web/src/app/books/page.tsx`. Covered by `author A's unsaved title is cleared when author B signs in` and `a same-author refresh keeps the unsaved title` in `apps/web/src/lib/library/book-library-session.test.ts`.
- **FACT.** Sign-out handling is `LibrarySession.signOut` in the same session module. Covered by `a rejected sign-out stays on the page with the list cleared`, `a sign-out that returns an error does not redirect`, and `a successful sign-out redirects only after Supabase accepts it`.
- **FACT.** Same-author auth events are `shouldReloadForAuthEvent` and `onAuthEvent`. Covered by `same-author SIGNED_IN does not drop an in-flight create outcome` and `an author change during create does not apply that create to the next author`.
- **FACT.** `git diff origin/main -- scripts/agent_workflow.py tests/test_agent_workflow.py` is empty. `python3 scripts/agent_workflow.py validate` exited 0 and reported 1 ExecutionBundle (`VEL-EB-0001` only).
- **FACT.** Commands on this worktree, Node `v22.14.0`, Corepack pnpm `10.18.0`:
  - `corepack pnpm test:library-isolation` exited 0 (21 pass / 0 fail).
  - `corepack pnpm check` exited 0.
  - `corepack pnpm build` exited 0.
  - `python3 -m unittest tests/test_agent_workflow.py -v` exited 0 (15 tests).
- **FACT.** `pnpm-lock.yaml` and `apps/web/next-env.d.ts` hashes were unchanged. No dependency upgrade.
- **FACT.** Live `ACC-M1-01` persistence, cloud RLS, and direct PostgREST behavior for a signed-out unexpired JWT were not run. They stay **BLOCKED**. No browser session against Supabase was run. These tests drive the session controller with mocked auth and fetch.

## Interpretations

- **INTERPRETATION.** Applying the create response after a same-author auth event is the outcome tracking the review asked for. The BFF expected-user gate is unchanged.
- **INTERPRETATION.** A failed sign-out keeps the typed title because the author did not change. The book list stays hidden until a later refresh or a successful sign-out.
- **INTERPRETATION.** Moving this report out of `docs/agent-workflow/execution-bundles/` is the separately scoped reporting path from the review. It does not accept PLAN-01..06.

## Proposals

- **PROPOSAL.** Owner review of the updated draft. Do not merge from this report.
- **PROPOSAL.** Live schema, RLS, and `ACC-M1-01` remain a separate authorized task. Do not write to `vellistry-dev` for this slice.
- **PROPOSAL.** If a future task needs a pinned ContextPack, the owner chooses a new `VEL-TASK` id. Do not recycle `VEL-TASK-0004`.

## Tests

| Command | Exit | Result |
|---|---|---|
| `corepack pnpm test:library-isolation` | 0 | 21 pass / 0 fail. No hosted database. |
| `corepack pnpm check` | 0 | Nest and Next typecheck. |
| `corepack pnpm build` | 0 | Nest and Next production builds. |
| `python3 scripts/agent_workflow.py validate` | 0 | Pilot bundles only. |
| `python3 -m unittest tests/test_agent_workflow.py -v` | 0 | 15 tests. |

**BLOCKED.** Live book persistence, `ACC-M1-01`, cloud RLS, direct PostgREST signed-out JWT. **NOT RUN.** Logged-in browser session, chapter CRUD, rename.

## Artifacts

- Branch: `feat/vel-imp-001-library-isolation`
- Pull request: https://github.com/Ben-001-sys/Vellistry/pull/64
- Session controller: `apps/web/src/lib/library/book-library-session.ts`
- Session tests: `apps/web/src/lib/library/book-library-session.test.ts`
- This report: `docs/reports/VEL-IMP-001-LIBRARY-ISOLATION-2026-10-11.md`
- Removed: `docs/agent-workflow/execution-bundles/VEL-IMP-001.md`

## Risks

- UI isolation still does not close the signed-out, unexpired JWT direct PostgREST risk.
- The correction commit SHA is the branch head that contains this report revision. Exact-head CI is recorded after that commit is pushed; this file does not invent a SHA before the commit exists.
- `G_DESIGN`, `G_CODE`, `G_PRIVATE_PILOT`, and `G_RELEASE` stay pending.

## Reviewer disposition

**Pending owner review.** The four review findings are addressed in this revision. This report is not merge authorization and not a passing live RLS result.

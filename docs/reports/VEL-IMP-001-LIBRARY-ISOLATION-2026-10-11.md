---
id: VEL-RPT-IMP-001-20261011
title: VEL-IMP-001 Book Library account isolation
type: execution-report
status: proposed-for-review
created_at: 2026-10-11
updated_at: 2026-10-13
version: 0.6.2
task_id: null
context_pack_id: null
base_commit: 226f6072785b7271fd30f4979a76e41fca30e39c
reviewed_head: 6f98f033fff8333e66edf23cd3b12eadacc22ed6
review:
  status: pending
  approved_by: null
  evidence: null
---

# VEL-IMP-001 — Book Library account isolation

This is the factual execution report for Issue #63. It is not a v0.1 ContextPack handoff. No `VEL-TASK` was created, and `VEL-TASK-0004` was not recycled. The report lives under `docs/reports/` so `scripts/agent_workflow.py` keeps validating only pinned `VEL-EB-####` bundles. The earlier hard-coded `VEL-IMP-001` validator bypass has been removed.

Pull request: https://github.com/Ben-001-sys/Vellistry/pull/64 . Not merged. Review https://github.com/Ben-001-sys/Vellistry/pull/64#pullrequestreview-5483810728 at 15:16 UTC on 2026-10-11 examined `6f98f033fff8333e66edf23cd3b12eadacc22ed6` and observed GitHub `draft: false`. This revision does not request merge.

## Work performed

Reviewed head `6f98f033fff8333e66edf23cd3b12eadacc22ed6` is the owner's commit on top of merge `2113114b9644ff2090b8c723cbab2ce2d5ef01c3`. That merge brought `origin/main` `226f6072785b7271fd30f4979a76e41fca30e39c`. The earlier implementation base remains `68c9ea5eb29c7bec558321d6b69a2604bd5128a2`. Review `5483810728` required two further corrections, which landed in `60b187c3575cb794b1969ec389f937479df04ba0`. This revision continues from that commit and addresses three further findings. It does not open a new pull request.

1. The unsaved book-title field clears when the authenticated author changes, and stays when the same author refreshes.
2. A thrown or returned Supabase sign-out failure leaves the book list cleared, shows an error status, and does not redirect. A successful sign-out redirects to `/login` only after that call succeeds.
3. `SIGNED_IN`, `TOKEN_REFRESHED`, and `USER_UPDATED` for the same author do not restart the load or abort an in-flight create, so the create response can still be applied. An author change still aborts that create and does not show it for the next author.
4. `scripts/agent_workflow.py` and `tests/test_agent_workflow.py` match `main` again. This report replaced `docs/agent-workflow/execution-bundles/VEL-IMP-001.md`.
5. Same-author Refresh during an in-flight create does not abort that POST, bump the load generation, or clear `createPending`. Refresh and Try again are hidden while `createPending` is true. A successful create still clears the draft, does not insert the response book, does not show a Saved status, and then reloads that author's list. An owner change still aborts the create and conceals the previous author.
6. A successful create response followed by a failed owner lookup, and a lost create response, use `LIBRARY_COPY.createUnknown`. They do not use the definite save-failure copy and do not say the book was saved. `createUncertain` blocks another submit. Refresh reloads the same author. If that list contains the typed title, the draft is cleared. If it does not, the draft stays and Create stays disabled until the author chooses "Save again anyway". An owner change still clears the draft and does not show the previous author's books. An HTTP error response other than an ambiguous 503 remains a definite failure.
7. `CURRENT-STATE.md` keeps the IMP-001 section and the hosted Supabase Cloud sections from PR #62. Neither was dropped.
8. A lost create response followed by an empty or missing-title list stays `createUncertain`. Create stays disabled. The only second submit is the explicit "Save again anyway" action. A later list that contains the title clears the draft and does not say the book was saved. No schema change is involved.
9. A refresh whose author lookup throws hides the unsaved title and the book list. The title is restored only after the same author is verified again. A different author does not see it.
10. The books BFF distinguishes a failure before the Nest POST is sent from a failure after that send. `forwardTransportFailure(false)` is HTTP 503 `service_unavailable`. `forwardTransportFailure(true)` is HTTP 503 `acknowledgment_unknown`. Authentication (401), validation (400), and session mismatch (409) are unchanged. A known upstream status is returned even when the response body cannot be read, so HTTP 201 still follows the success reload path. The library session treats `acknowledgment_unknown`, and a 503 whose body cannot be read, as `createUnknown`. `service_unavailable` and `api_not_configured` stay definite save failures. An ambiguous 503 does not re-enable Create.
11. Concealing a draft stores `createUncertain` with the title. The visible snapshot does not show that title or the previous author's unknown-save status while identity is unverified. The same author gets the draft and `createUncertain` back. If the refreshed list omits the title, Create stays disabled and another POST requires "Save again anyway". A different author does not receive the concealed title or that save state. A thrown identity lookup during create preflight uses the same concealment and does not send another POST.
12. `ownerFromGetUser` throws when `auth.getUser()` returns an `error`, including when a user object is also present. The books page uses that result. The session then conceals private content. A null user with a null error remains a confirmed signed-out session and shows the sign-in status.

Hosted Supabase `vellistry-dev` was not queried or modified.

## Facts and evidence

- **FACT.** Review comment: https://github.com/Ben-001-sys/Vellistry/pull/64#pullrequestreview-5483810728 on `6f98f033fff8333e66edf23cd3b12eadacc22ed6`, submitted at 15:16 UTC on 2026-10-11. It is a comment review, not a merge approval. The earlier unknown-save review is https://github.com/Ben-001-sys/Vellistry/pull/64#pullrequestreview-5483656571. `origin/main` at the merge was `226f6072785b7271fd30f4979a76e41fca30e39c`.
- **FACT.** Title clearing is implemented in `apps/web/src/lib/library/book-library-session.ts` (`startLoad` clears `draftTitle` only when the owner changes) and bound by `apps/web/src/app/books/page.tsx`. Covered by `author A's unsaved title is cleared when author B signs in` and `a same-author refresh keeps the unsaved title` in `apps/web/src/lib/library/book-library-session.test.ts`.
- **FACT.** Sign-out handling is `LibrarySession.signOut` in the same session module. Covered by `a rejected sign-out stays on the page with the list cleared`, `a sign-out that returns an error does not redirect`, and `a successful sign-out redirects only after Supabase accepts it`.
- **FACT.** Same-author auth events are `shouldReloadForAuthEvent` and `onAuthEvent`. Covered by `same-author SIGNED_IN does not drop an in-flight create outcome` and `an author change during create does not apply that create to the next author`.
- **FACT.** Same-author Refresh during create is `LibrarySession.refresh` in `book-library-session.ts`. It returns without `startLoad` when `createPending` is true and `readOwner()` is still the current author. `libraryRegion` hides Refresh and Try again while `createPending` is true. `same-author Refresh during create keeps the successful acknowledgement` checks that the POST is not aborted, the generation stays put, a second submit does not start another POST, the draft clears only after HTTP 201, the status does not match `/saved/i`, the response book is not inserted, and one later list fetch runs. `an author change during create does not apply that create to the next author` now calls Refresh before the switch and still shows only the next author's titles.
- **FACT.** Unknown create outcomes are `applyCreate(..., "unknown")` and `createUncertain` in `book-library-state.ts`. A successful list that omits the typed title calls `noteMissingUncertainTitle` and does not re-enable Create. Covered by `a delayed server commit stays blocked after an empty refresh` and `an explicit risk retry is required before another create`.
- **FACT.** An unverified refresh stores the draft off the visible snapshot and restores it in `startLoad` only when the verified owner matches. Covered by `a transient refresh lookup hides the draft and restores it for the same author` and `a transient refresh lookup does not reveal the draft to the next author`.
- **FACT.** Post-forward BFF failures use `acknowledgment_unknown` from `forwardTransportFailure` in `apps/web/src/lib/library/book-create-document.ts`, called by `apps/web/src/app/api/books/route.ts` only after a POST has been accepted for forwarding. `outcomeForCreateStatus` maps that 503, and an unreadable 503, to `unknown`. It maps `service_unavailable` and `api_not_configured` to `error`. Covered by `a lost upstream acknowledgement is not a pre-forward failure`, `a successful Nest write with a lost upstream acknowledgement stays unknown`, `a pre-forward 503 stays a definite save failure`, `an unreadable 503 acknowledgement stays unknown`, and `a create acknowledgement with an unreadable success body still reloads`.
- **FACT.** `concealForUnverifiedIdentity` stores `createUncertain` beside the title. `startLoad` restores both only when the next verified owner matches. Covered by `a lost post and a failed identity lookup keep uncertainty for the same author`, `a concealed uncertain save stays hidden from the next author`, and `a create preflight auth error conceals an uncertain draft instead of signing out`.
- **FACT.** `apps/web/src/lib/library/owner-from-auth.ts` `ownerFromGetUser` throws on a returned `{ error }` and returns null only when `error` is null and the user is null. `apps/web/src/app/books/page.tsx` passes `auth.getUser()` through it. Covered by `a returned auth error is not a confirmed signed-out user`, `a returned Supabase auth error conceals the draft until the same author is verified`, and `a confirmed signed-out user clears the draft and asks for sign-in`.
- **FACT.** `CURRENT-STATE.md` on this branch contains both the IMP-001 section and the `vellistry-dev` project record (`lflkcrnriitrbclangyr`) from merged PR #62.
- **FACT.** `git diff origin/main -- scripts/agent_workflow.py tests/test_agent_workflow.py` is empty. `python3 scripts/agent_workflow.py validate` exited 0 and reported 1 ExecutionBundle (`VEL-EB-0001` only).
- **FACT.** Commands on this worktree, Node `v22.14.0`, Corepack pnpm `10.18.0`:
  - `corepack pnpm test:library-isolation` exited 0 (41 pass / 0 fail).
  - `corepack pnpm check` exited 0.
  - `corepack pnpm build` exited 0.
  - `python3 -m unittest tests/test_agent_workflow.py -v` exited 0 (15 tests).
- **FACT.** `pnpm-lock.yaml` and `apps/web/next-env.d.ts` hashes were unchanged. No dependency upgrade.
- **FACT.** Live `ACC-M1-01` persistence, cloud RLS, and direct PostgREST behavior for a signed-out unexpired JWT were not run. They stay **BLOCKED**. No browser session against Supabase was run. These tests drive the session controller with mocked auth and fetch.

## Interpretations

- **INTERPRETATION.** Applying the create response after a same-author auth event is the outcome tracking the review asked for. The BFF expected-user gate is unchanged.
- **INTERPRETATION.** Ignoring same-author Refresh while a create is pending is the guard from review `5483572590`. The successful create still reloads that author. Aborting the browser request is not treated as reversing a server write. No status text says the book was saved.
- **INTERPRETATION.** `createUnknown` is the distinct outcome from review `5483656571`. Review `5483810728` adds that a list without the title is not proof the first save finished. Keeping `createUncertain` until the title is visible, or until the author chooses "Save again anyway", is the no-schema guard. Clearing the draft when the title is later visible is reconciliation with the list, not a Saved confirmation.
- **INTERPRETATION.** Hiding the draft when refresh cannot verify the author, then restoring it only for that author, keeps the privacy concealment from `6f98f03` without deleting the title on a transient lookup failure. Keeping `createUncertain` on the concealed record, and off the visible snapshot, is how an unverified period neither leaks the previous author's save state nor makes another Create safe.
- **INTERPRETATION.** `acknowledgment_unknown` is the BFF's name for a Nest POST whose response was lost after the request was sent. The browser must not treat that as proof the book was not saved. A 503 that names a failure before `fetch` is proof the write was not started.
- **INTERPRETATION.** A failed sign-out keeps the typed title because the author did not change. The book list stays hidden until a later refresh or a successful sign-out.
- **INTERPRETATION.** Moving this report out of `docs/agent-workflow/execution-bundles/` is the separately scoped reporting path from the review. It does not accept PLAN-01..06.

## Proposals

- **PROPOSAL.** Owner review of the updated draft. Do not merge from this report.
- **PROPOSAL.** Live schema, RLS, and `ACC-M1-01` remain a separate authorized task. Do not write to `vellistry-dev` for this slice.
- **PROPOSAL.** If a future task needs a pinned ContextPack, the owner chooses a new `VEL-TASK` id. Do not recycle `VEL-TASK-0004`.

## Tests

| Command | Exit | Result |
|---|---|---|
| `corepack pnpm test:library-isolation` | 0 | 41 pass / 0 fail. No hosted database. |
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

**Pending owner review.** The two findings in review `5483810728` remain addressed. This revision also treats a lost Nest acknowledgement as an unknown save, keeps `createUncertain` with a concealed draft, and does not treat a returned Supabase Auth error as a confirmed sign-out. This report is not merge authorization and not a passing live RLS result.

## 2026-10-12 review-cycle correction (verification pending)

- **FACT — source change prepared:** `runLoad()` now transitions to the newly verified author when the final `readOwner()` result differs from the author whose GET completed. The old author's unsaved draft is cleared by `startLoad()` before the new author's list is displayed. A verified null identity transitions to the signed-out state. The existing generation/abort guard remains in place.
- **FACT — regression coverage added:** Two synthetic session tests simulate Author A's delayed GET followed by an A→B or A→signed-out identity result **without an authentication-change callback**. They assert the prior draft and books are not visible after transition.
- **NOT RUN at authoring time:** These new tests, typecheck, build, and exact-head CI. Earlier 41-test results belong to `3e9c5ad61a7d6f37b2e0f17a21de4a216cc30fc5`, not this correction. CI must be checked against the resulting commit before acceptance.
- **UNCHANGED:** Hosted Supabase `vellistry-dev`, migrations, production, approved decisions, and the pending owner review. PR #64 remains Draft and unmerged.

## 2026-10-12 failed sign-out/create race correction (verification pending)

- **FACT:** The 2026-10-12 review identified that aborting a pending book-create POST during sign-out cleared `createPending`. A failed sign-out could then re-enable ordinary Create even though the original server write might still commit. Commit `a1b6b12111932fd4b37dbf5da86ff53e596dc8fd` preserves `createUncertain` in `concealBooksForSignOut()` whenever `createPending` or prior `createUncertain` was true; `failSignOut()` preserves this lock. The author must reconcile via Refresh and explicitly acknowledge duplicate risk before a retry if the title remains absent.
- **FACT:** Added synthetic session tests `failed sign-out during an in-flight create keeps duplicate retry blocked` and `successful sign-out during an in-flight create clears its private retry state`. They cover a delayed server commit after a failed sign-out, a subsequent missing-title GET, eventual list reconciliation, and cross-author isolation on successful sign-out.
- **NOT_RUN locally:** The two new tests, the full focused `corepack pnpm test:library-isolation` suite, `corepack pnpm check`, and `corepack pnpm build` have not been executed in a local checkout by this reviewer. Do not treat older 41-test results as new-head evidence. GitHub CI must be checked on the final report-containing head.
- **UNCHANGED:** PR #64 remains Draft and unmerged; owner review is pending. Hosted `vellistry-dev` migrations, real manuscript data, production, direct PostgREST JWT revocation, cloud RLS, `ACC-M1-01`, paid providers, and all other implementation slices remain untouched or BLOCKED.

## 2026-10-13 failed-load author-verification correction (review pending)

- **FACT — source correction:** In `book-library-session.ts`, `runLoad()` now obtains the HTTP outcome without applying it until `deps.readOwner()` verifies the current identity. This covers 401, non-2xx, thrown/rejected fetch, JSON parsing failures, and successful responses. If the owner changed without an auth callback, `startLoad(liveOwner)` clears the prior author's draft and loads the new owner. If owner verification throws, `concealForUnverifiedIdentity()` hides private state and preserves same-author recovery. The success-only uncertain-save reconciliation remains unchanged.
- **FACT — tests added:** `401 book load transitions A to B without an auth callback`, `HTTP error book load transitions A to B without an auth callback`, `rejected book load transitions A to B without an auth callback`, `401 book load recognizes sign-out without an auth callback`, and `failed-load owner lookup error conceals and restores only the verified author's draft`. Tests use synthetic authors and mocked requests.
- **NOT_RUN:** Newly added focused tests, `corepack pnpm test:library-isolation`, `corepack pnpm check`, and `corepack pnpm build` have not been executed locally by this reviewer. Five green CI workflows on `4c24989e81c9373d54da61bf6057938d88ba656d` are prior-head evidence only. Inspect exact new-head CI before acceptance.
- **UNCHANGED:** PR #64 stays Draft and unmerged; owner acceptance is pending. No hosted Supabase mutation, real author data, production changes, paid providers, or governance gate promotion. The old PR #59 remains paused. Cloud RLS, `ACC-M1-01`, and direct PostgREST JWT sign-out remain BLOCKED.

---
id: VEL-RPT-IMP-001-20261011
title: VEL-IMP-001 Book Library account isolation
type: execution-report
status: proposed-for-review
created_at: 2026-10-11
updated_at: 2026-10-11
version: 0.5.0
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

Reviewed head `6f98f033fff8333e66edf23cd3b12eadacc22ed6` is the owner's commit on top of merge `2113114b9644ff2090b8c723cbab2ce2d5ef01c3`. That merge brought `origin/main` `226f6072785b7271fd30f4979a76e41fca30e39c`. The earlier implementation base remains `68c9ea5eb29c7bec558321d6b69a2604bd5128a2`. Review `5483810728` required two further corrections.

1. The unsaved book-title field clears when the authenticated author changes, and stays when the same author refreshes.
2. A thrown or returned Supabase sign-out failure leaves the book list cleared, shows an error status, and does not redirect. A successful sign-out redirects to `/login` only after that call succeeds.
3. `SIGNED_IN`, `TOKEN_REFRESHED`, and `USER_UPDATED` for the same author do not restart the load or abort an in-flight create, so the create response can still be applied. An author change still aborts that create and does not show it for the next author.
4. `scripts/agent_workflow.py` and `tests/test_agent_workflow.py` match `main` again. This report replaced `docs/agent-workflow/execution-bundles/VEL-IMP-001.md`.
5. Same-author Refresh during an in-flight create does not abort that POST, bump the load generation, or clear `createPending`. Refresh and Try again are hidden while `createPending` is true. A successful create still clears the draft, does not insert the response book, does not show a Saved status, and then reloads that author's list. An owner change still aborts the create and conceals the previous author.
6. A successful create response followed by a failed owner lookup, and a lost create response, use `LIBRARY_COPY.createUnknown`. They do not use the definite save-failure copy and do not say the book was saved. `createUncertain` blocks another submit. Refresh reloads the same author. If that list contains the typed title, the draft is cleared. If it does not, the draft stays and create is allowed again. An owner change still clears the draft and does not show the previous author's books. An HTTP error response remains a definite failure.
7. `CURRENT-STATE.md` keeps the IMP-001 section and the hosted Supabase Cloud sections from PR #62. Neither was dropped.
8. A lost create response followed by an empty or missing-title list stays `createUncertain`. Create stays disabled. The only second submit is the explicit "Save again anyway" action. A later list that contains the title clears the draft and does not say the book was saved. No schema change is involved.
9. A refresh whose author lookup throws hides the unsaved title and the book list. The title is restored only after the same author is verified again. A different author does not see it.

Hosted Supabase `vellistry-dev` was not queried or modified.

## Facts and evidence

- **FACT.** Review comment: https://github.com/Ben-001-sys/Vellistry/pull/64#pullrequestreview-5483810728 on `6f98f033fff8333e66edf23cd3b12eadacc22ed6`, submitted at 15:16 UTC on 2026-10-11. It is a comment review, not a merge approval. The earlier unknown-save review is https://github.com/Ben-001-sys/Vellistry/pull/64#pullrequestreview-5483656571. `origin/main` at the merge was `226f6072785b7271fd30f4979a76e41fca30e39c`.
- **FACT.** Title clearing is implemented in `apps/web/src/lib/library/book-library-session.ts` (`startLoad` clears `draftTitle` only when the owner changes) and bound by `apps/web/src/app/books/page.tsx`. Covered by `author A's unsaved title is cleared when author B signs in` and `a same-author refresh keeps the unsaved title` in `apps/web/src/lib/library/book-library-session.test.ts`.
- **FACT.** Sign-out handling is `LibrarySession.signOut` in the same session module. Covered by `a rejected sign-out stays on the page with the list cleared`, `a sign-out that returns an error does not redirect`, and `a successful sign-out redirects only after Supabase accepts it`.
- **FACT.** Same-author auth events are `shouldReloadForAuthEvent` and `onAuthEvent`. Covered by `same-author SIGNED_IN does not drop an in-flight create outcome` and `an author change during create does not apply that create to the next author`.
- **FACT.** Same-author Refresh during create is `LibrarySession.refresh` in `book-library-session.ts`. It returns without `startLoad` when `createPending` is true and `readOwner()` is still the current author. `libraryRegion` hides Refresh and Try again while `createPending` is true. `same-author Refresh during create keeps the successful acknowledgement` checks that the POST is not aborted, the generation stays put, a second submit does not start another POST, the draft clears only after HTTP 201, the status does not match `/saved/i`, the response book is not inserted, and one later list fetch runs. `an author change during create does not apply that create to the next author` now calls Refresh before the switch and still shows only the next author's titles.
- **FACT.** Unknown create outcomes are `applyCreate(..., "unknown")` and `createUncertain` in `book-library-state.ts`. A successful list that omits the typed title calls `noteMissingUncertainTitle` and does not re-enable Create. Covered by `a delayed server commit stays blocked after an empty refresh` and `an explicit risk retry is required before another create`.
- **FACT.** An unverified refresh stores the draft off the visible snapshot and restores it in `startLoad` only when the verified owner matches. Covered by `a transient refresh lookup hides the draft and restores it for the same author` and `a transient refresh lookup does not reveal the draft to the next author`.
- **FACT.** `CURRENT-STATE.md` on this branch contains both the IMP-001 section and the `vellistry-dev` project record (`lflkcrnriitrbclangyr`) from merged PR #62.
- **FACT.** `git diff origin/main -- scripts/agent_workflow.py tests/test_agent_workflow.py` is empty. `python3 scripts/agent_workflow.py validate` exited 0 and reported 1 ExecutionBundle (`VEL-EB-0001` only).
- **FACT.** Commands on this worktree, Node `v22.14.0`, Corepack pnpm `10.18.0`:
  - `corepack pnpm test:library-isolation` exited 0 (30 pass / 0 fail).
  - `corepack pnpm check` exited 0.
  - `corepack pnpm build` exited 0.
  - `python3 -m unittest tests/test_agent_workflow.py -v` exited 0 (15 tests).
- **FACT.** `pnpm-lock.yaml` and `apps/web/next-env.d.ts` hashes were unchanged. No dependency upgrade.
- **FACT.** Live `ACC-M1-01` persistence, cloud RLS, and direct PostgREST behavior for a signed-out unexpired JWT were not run. They stay **BLOCKED**. No browser session against Supabase was run. These tests drive the session controller with mocked auth and fetch.

## Interpretations

- **INTERPRETATION.** Applying the create response after a same-author auth event is the outcome tracking the review asked for. The BFF expected-user gate is unchanged.
- **INTERPRETATION.** Ignoring same-author Refresh while a create is pending is the guard from review `5483572590`. The successful create still reloads that author. Aborting the browser request is not treated as reversing a server write. No status text says the book was saved.
- **INTERPRETATION.** `createUnknown` is the distinct outcome from review `5483656571`. Review `5483810728` adds that a list without the title is not proof the first save finished. Keeping `createUncertain` until the title is visible, or until the author chooses "Save again anyway", is the no-schema guard. Clearing the draft when the title is later visible is reconciliation with the list, not a Saved confirmation.
- **INTERPRETATION.** Hiding the draft when refresh cannot verify the author, then restoring it only for that author, keeps the privacy concealment from `6f98f03` without deleting the title on a transient lookup failure.
- **INTERPRETATION.** A failed sign-out keeps the typed title because the author did not change. The book list stays hidden until a later refresh or a successful sign-out.
- **INTERPRETATION.** Moving this report out of `docs/agent-workflow/execution-bundles/` is the separately scoped reporting path from the review. It does not accept PLAN-01..06.

## Proposals

- **PROPOSAL.** Owner review of the updated draft. Do not merge from this report.
- **PROPOSAL.** Live schema, RLS, and `ACC-M1-01` remain a separate authorized task. Do not write to `vellistry-dev` for this slice.
- **PROPOSAL.** If a future task needs a pinned ContextPack, the owner chooses a new `VEL-TASK` id. Do not recycle `VEL-TASK-0004`.

## Tests

| Command | Exit | Result |
|---|---|---|
| `corepack pnpm test:library-isolation` | 0 | 30 pass / 0 fail. No hosted database. |
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

**Pending owner review.** The two findings in review `5483810728` are addressed in this revision: a missing-title refresh does not make another create safe, and a transient refresh lookup conceals then restores the draft only for the same author. This report is not merge authorization and not a passing live RLS result.

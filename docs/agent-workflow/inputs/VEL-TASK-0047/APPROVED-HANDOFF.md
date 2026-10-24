# Original bounded handoff; approved by later direct owner dispatch

Source https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6382833013
Its PROPOSED status is historical; only the direct owner Task0047 scope grants current bounded code permission.

## B — smallest local-only IMP-002 implementation dispatch, prepared for owner decision

**PROPOSED, NOT DISPATCHED; NO FEATURE CODE STARTED.** Prepared from merged main `d13deca2d6762d44f80035c6d89d2cb61d1ab1e8`, subject to successful post-main verification and rechecking main at dispatch. Existing [IMP-002 handoff](https://github.com/Ben-001-sys/Vellistry/blob/d13deca2d6762d44f80035c6d89d2cb61d1ab1e8/docs/reports/VEL-IMP-002-HANDOFF-PROPOSAL.md) is source context; acceptance below is a proposal requiring a bounded owner code authorization.

### Objective and deliverable
Implement a headless Book Workspace controller/state contract and reusable organizer component exercised only through explicit synthetic test fixtures. Owned-book opening; chapter list/create/rename/reorder; separate book/chapter planning notes; stable chapter IDs and accessible keyboard controls. No production route or implicit simulated persistence. All fixtures must be labelled synthetic/local/unconfirmed. Full IMP-002 durability and JRN001 completion remain deferred.

### Proposed exact path allowlist
- `apps/web/src/lib/workspace/book-workspace-contract.ts`
- `apps/web/src/lib/workspace/book-workspace-session.ts`
- `apps/web/src/lib/workspace/book-workspace-session.test.ts`
- `apps/web/src/components/workspace/book-workspace-organizer.tsx`
- `tests/fixtures/book-workspace-synthetic.ts` (test-only adapter)
- `tests/workspace/book-workspace-fixture-page.tsx` and `tests/workspace/book-workspace-browser-checks.md` (explicit synthetic fixture plus reproducible browser steps)
- `package.json`: only a focused `test:workspace-contract` script using existing tsx/node test tooling; no dependencies/version changes.
- A new unique Task/CP/EB and its owner-scope inputs, scoped workspace report/evidence and the existing per-PR manifest.

The eventual canonical task must enumerate these paths exactly and reserve its own unique ID. Do not create/overwrite a dispatched ContextPack or start an unpinned implementation.

**Fixed local browser harness proposal (no added dependency):** use a second owned disposable checkout of the task head containing tracked files only, no copied env files. Place the versioned synthetic fixture page at transient `apps/web/src/app/__workspace_fixture/page.tsx` **in that test checkout only**; never commit/expose that route in the PR or production. Start existing Next tooling with `corepack pnpm --filter @vellistry/web exec next dev --hostname 127.0.0.1 --port 3105`, render only invented controller/adapter data, and use the installed Playwright browser tool for `http://127.0.0.1:3105/__workspace_fixture` checks. Record browser version, actions/assertions, screenshot evidence without secrets, fixture/hash and exact checkout SHA; stop the owned process and verify the route is absent from the final Git diff. No Supabase client initialization, real session, hosted URL, CLI login or credentials in this harness. If the port/tool/runtime is unavailable, record BLOCKED; do not add packages, alter CI, inspect envs or substitute a hosted target. Temporary test checkout creation/file placement is an explicit allowed action of the proposed future Task, not an action executed by this preparation.

### Required sources and reuse
Accepted ADR0006 Next/Nest/Supabase foundation, ADR0008 execution roles, accepted M1 scope; PLAN02 data/contracts, PLAN03 organizer frame27:44/state behavior and PLAN04 security/recovery are proposed contracts, not SQL authorization. Read LANGUAGE.md and accepted terminology dispositions before visible copy. Preserve existing Supabase auth and Library isolation helpers/tests; do not introduce another login system, service-role client or database.

### Acceptance and negative matrix
1. Two synthetic authors with separate books; opening/loading/empty/populated/error/unauthorized states. Adapter independently checks actor, book ownership and chapter membership. Reject forged owner payload, guessed foreign IDs, foreign chapter under own book and own chapter under a different book without rendering private titles/notes.
2. Duplicate titles retain distinct stable IDs. Create/rename validate trimmed1–180-character titles. Reorder accepts only a complete same-book permutation; duplicate/omitted/foreign IDs and stale order versions reject. Three chapters preserve prose/note identity through reorder; accepted_document/current_revision never mutated.
3. Notes stay separate from manuscript/revisions and survive same-session navigation in the test adapter. No reload/server save claim. In-flight edits and failed/unknown mutations remain visible/recoverable; ordinary retry cannot duplicate an ambiguous create. Explicit risk/reconciliation decision required.
4. A→B→A/account and book changes conceal old data; discard stale success/error responses. Failed identity verification cannot publish results. Keyboard create/select/rename/move, focus retention and live announcements must be browser-checked against the real component with invented data; static markup/unit tests are not browser PASS.
5. No AI/key requirement, hosted connection, production fixture route, new cache leak or unlabelled fake save. Existing23preflight and67Library regressions remain protected.

Mapping: ACC-M1-01/02/03 and ACC-M8-01/04/05, partial JRN001/JRN011. All11 journeys remain tracked; editor/durable save/recovery (IMP003), profiles, rules, AI, delete-confirm and counts are outside this first slice, not silently removed from the full plan.

### Verification and owner workflow
After specific owner authorization: verify latest main/unique IDs; commit the canonical Task and exact source inputs; generate, validate and commit its immutable CP **before edits**; execute in a new isolated Codex worktree. Run existing frozen dependency/check/build baseline and new focused positive/negative/controller tests, actual synthetic browser checks, applicable governance/traceability and exact-head CI. Produce EB with precise PASS/FAIL/BLOCKED/NOT_RUN and source hashes; distinct review; owner decides merge. Existing broad G_DESIGN/G_CODE remain pending; a task exception covers only these paths/actions.

### Permission boundary
This packet requests local feature-code authorization only for the exact paths and harness above. It grants none now. Direct author chapter/revision DML remains revoked; no API, SQL/RLS/schema, dependency, CI, protected setting or accepted policy changes. A later protected persistence contract (including atomic reorder, notes storage and manuscript/revision invariants), reviewed SQL paths and disposable integration tests require separate approval. No hosted, credential, private-manuscript, paid, deployment or merge authority. The expired remediation delegation remains closed.

The next executable step is owner approval of this exact slice and its test-harness envelope, followed by a unique canonical Task/CP. No feature implementation is running.

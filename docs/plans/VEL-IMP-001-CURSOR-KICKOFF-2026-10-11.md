---
id: VEL-PLAN-CURSOR-IMP001-20261011-001
title: Cursor kickoff — account-isolated Vellistry Library (first implementation slice)
type: bounded-implementation-brief
status: owner-directed-cursor-handoff-ready
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.1.0
sources:
  - PROJECT-CONSTITUTION.md
  - SOURCE-OF-TRUTH.md
  - docs/agent-workflow/tasks/VEL-TASK-0004.yaml
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  - docs/agent-workflow/IMPLEMENTATION-TASK-DEPENDENCIES.yaml
  - docs/design/VEL-DES-001-002-UX-HANDOFF-2026-10-10.md
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
---

# Start implementation in Cursor — VEL-IMP-001, authenticated Library

## Owner mandate and exact bounded scope

The owner stated on 2026-10-11 **“lets get started on implementation / we are using cursor”**, after separately allowing the existing original editable Figma to remain imperfect and receive further fixes *during* implementation. This authorizes work **on the first scoped local development slice**, not automatic universal gate clearance, merge/deploy, actual private pilot, or permission to process unpublished manuscripts. The previously approved manual-first MVP and accepted framework stack stand.

This kickoff is an **engineering task handoff**; no Cursor task execution or terminal test is claimed yet. The only current implementation task is [VEL-TASK-0004](../agent-workflow/tasks/VEL-TASK-0004.yaml), covering `VEL-IMP-001`.

**Repo:** `Ben-001-sys/Vellistry`.
**Base:** GitHub `main` at branch creation. **Cursor implementation branch:** `feat/vel-imp-001-auth-library`.
**Parallel design-evidence PR:** [#57](https://github.com/Ben-001-sys/Vellistry/pull/57) (open when kickoff prepared). Never merge, overwrite or implicitly depend on its unmerged files. Latest external review can inform design choices, but this branch and the scoped task file are self-contained.
**Figma master:** https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U — Library `27:10` and Manuscript `15:558`. Static concept only. Accept the existing visual inconsistency as deferrable, **not** as correct runtime behavior.

## What is already in code (verified GitHub files on main)

- Next 16 + React 19: `apps/web/src/app/login/page.tsx`, `apps/web/src/app/books/page.tsx`, `apps/web/src/app/api/books/route.ts`, browser/server Supabase clients.
- Nest 11: `apps/api/src/modules/books/books.controller.ts` with guarded `GET/POST /v1/books` and title validation; `books.service.ts` passes author bearer token to scoped queries.
- Existing DB with author-owned books and revision tables; **do not add or reset migrations** for this first task.
- `pnpm@10.18.0`, Node 24, root scripts `pnpm check`, `pnpm build`, `pnpm dev:api`, `pnpm dev:web`, local CLI Supabase optional for disposable integration test.
- `apps/web/src/app/books/page.tsx` already uses `books.length` to display an empty message and its map for book cards. Do not blindly rewrite working code; instead establish tests, improve explicit states and verify account-switch behavior. Prior Figma contradiction is **not necessarily a code bug**.

## Slice acceptance contract — implement incrementally, not all eleven journeys

**Runtime UI must have mutually exclusive Library states:** authenticated zero books → only empty Library message and Create action; one or more books → only the current owner's cards and no empty message. Loading, 401, network error and empty-result are separate observable states. The synthetic Figma frame is not a literal conditional-rendering specification.

**Isolated account boundary:** A's library must never render in B's UI, including stale in-flight fetch completion, logout, tab/session switch or cached React state. Nest revalidates bearer user, PostgREST operates using author bearer and RLS, and the server never trusts caller-provided `owner_id`. Negative tests must verify auth errors and cross-author list/create denial. Do not overstate signed-out JWT revocation.

**Usability**: manual book creation needs no AI key; title validation and reasonable success/error feedback; keyboard and screen-reader labels and basic focus. Preserve basic navigation. Never claim a mocked book card equals a real persisted book; only display actual scoped data from the existing API.

**No changes to** Tiptap/revision writes, chapters mutation APIs, provider/BYOK, Rules Studio, profiles, export, Supabase migrations/role, deployment, auth provider, external secrets, real manuscripts or accepted product direction. These are later controlled slices.

## Cursor Agent instruction — paste in the same checked-out repository

### BEGIN CURSOR PROMPT

You are the assigned implementer for `VEL-TASK-0004 / VEL-IMP-001` in **Vellistry**. Work only in the current Git checkout on branch `feat/vel-imp-001-auth-library`. Use Cursor Agent to modify files and run local tests. Do not create a new app or start from a cloned Lovable/Make scaffold.

FIRST read: `AGENTS.md`, `PROJECT-CONSTITUTION.md`, `SOURCE-OF-TRUTH.md`, the TOP of `CURRENT-STATE.md`, `docs/agent-workflow/tasks/VEL-TASK-0004.yaml`, this plan file, and existing auth/books source. Check git status and branch before editing. Existing design PR #57 may not yet be merged; do not assume its pending files are in main. If branch or working tree differs from this handoff, STOP and report.

IMPLEMENT ONLY the first scoped vertical slice:
1. Audit current sign-in → authenticated library list/create → sign-out path. Keep the accepted Next16/Nest11/Supabase stack and existing routes.
2. Make Library states explicit and exclusive: loading, genuinely empty, populated, unauthenticated, API error, in-flight create. A nonempty list must never render “No books yet.” A 401 or failed request must never masquerade as an empty book collection. Give a safe Retry path. Style lightly using existing Tailwind and the original writing-first Figma design; do not chase pixel perfection.
3. Address the cross-persona **client-state** risk from the Figma Make review by preventing a previous account's books or delayed fetch response from displaying after account switch/sign-out. Prefer stable auth event handling plus cancellation / request-generation guard where appropriate; inspect actual existing code before deciding.
4. Preserve Nest guard and RLS-mediated book ownership; validate title and never accept user-supplied `owner_id`. Do not add a service-role client or a second auth layer. Prefer minimal, targeted changes to existing endpoints.
5. Add executable regression tests using repository conventions (inspect before introducing tooling). Cover empty/populated exclusivity, loading vs error vs unauthenticated, cancellation/stale response on account switch, valid/invalid title handling, and **two local disposable users Alice/Bob** attempting cross-account access. Integration tests may require disposable local Supabase; report NOT RUN if unavailable rather than asserting PASS.
6. Run the actual available checks (`pnpm check`, `pnpm build`, targeted test suite) and record exact commands/results. Only run a Supabase reset if you have independently verified it targets a disposable local database and have the operator's permission; never reset a real project.

SECURITY: Synthetic test text/accounts only. No real manuscripts, paid services, deployment, secrets in code/reports, service-role author queries, actual AI calls, new DB migrations, chapters mutations, Tiptap save logic or broad routing architecture changes. Do not claim immediate token revocation on sign-out: the unexpired-JWT/direct-PostgREST risk remains a private-pilot blocker.

OUTPUT:
- Implement code + tests on the assigned branch, small diff, no unrelated formatting churn.
- Add a **proposed** ExecutionBundle under `docs/agent-workflow/execution-bundles/` with FACT / INTERPRETATION / PROPOSAL, changed paths, test commands with actual exit codes, repro cases, remaining failures and exact head SHA; no fabricated successes.
- Report what remains for `VEL-IMP-002` chapters and `VEL-IMP-003` Tiptap + revision CAS, but do not implement them.
- Commit changes to your feature branch, push it, and leave PR unmerged for owner review. If Git push permissions are unavailable, report the exact local commit SHA and remaining commands.

Do not request a new Figma design or rewrite the prototype. START by inspecting the repository; then make focused code changes and tests now.

### END CURSOR PROMPT

## Operator quick start (Windows PowerShell or any shell)

```bash
git clone https://github.com/Ben-001-sys/Vellistry.git
cd Vellistry
git fetch origin
git switch --track origin/feat/vel-imp-001-auth-library
corepack enable
pnpm install
```

If the repository is already cloned, do **not** reclone: `git fetch origin` then switch to the feature branch with a clean working tree. If the local branch is present already, use `git switch feat/vel-imp-001-auth-library`. In Cursor, open the checked-out repository folder, select **Agent**, then paste only the content between the prompt markers above. Let Cursor inspect files first. The instructions are inside Git, so manual prompt re-copying is only a bootstrap.

**Local optional services:** `pnpm supabase:start` (requires Docker); `pnpm supabase:status` for synthetic local-only env, `pnpm dev:api`, `pnpm dev:web`. **Do not run** `pnpm supabase:reset` automatically; it destroys local data and must be explicitly permitted for a disposable stack.

## Handoff / test checkpoints for owner

1. At first Cursor checkpoint, show git branch, exact base SHA, task summary and allowed diff paths.
2. At code completion, verify account-owned books in Alice/Bob, stale fetch handling, tests, build and typecheck.
3. Review any security-relevant modifications especially Next proxy, Nest guard and RLS. No new JWT revocation claims or real manuscript pilot.
4. Review Cursor's ExecutionBundle and exact commit; update `CURRENT-STATE.md` on evidence, not the agent's optimistic narration.
5. Owner approves merge separately. Follow-on work only after first slice's acceptance evidence; do not call initial Library UI a completed editor.

**Scope of owner approval:** The current messages authorize starting a bounded local Cursor implementation, with the existing Figma screens adequate as provisional design for that slice. This does not approve all `VEL-IMP-001..008` tasks, `G_PRIVATE_PILOT`, `G_RELEASE`, or real author manuscript ingestion. Separate broad gate state in the previous DAG remains a historical proposal until reviewed; do not mutate it to universally approved.

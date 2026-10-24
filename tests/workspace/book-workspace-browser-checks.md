# Local-only workspace browser verification

This is a synthetic component harness, not a production route or hosted test.
Use a second owned checkout of the exact source under test. Never copy local env
files, credentials or ignored author data into it. Keep the implementation checkout
free of fixture routes. Use only the frozen existing dependencies.

Next treats underscore-prefixed app folders as private. The disposable checkout
therefore uses `apps/web/src/app/%5F_workspace_fixture/page.tsx` to serve the approved
URL `/__workspace_fixture`. This filesystem escape changes no production path.
The transient page contains only:

```tsx
export {default} from "../../../../../tests/workspace/book-workspace-fixture-page";
```

Run from that checkout with inherited Supabase/NEXT_PUBLIC/VELLISTRY/DOTENV/PG and
NODE_OPTIONS variables excluded and Next telemetry disabled:

```text
corepack pnpm install --frozen-lockfile
corepack pnpm --filter @vellistry/web exec next dev --hostname 127.0.0.1 --port 3105
```

Use the installed Playwright browser tool against
`http://127.0.0.1:3105/__workspace_fixture`. Do not add dependencies, connect a real
session, invoke Supabase CLI, initialize an Auth client or substitute a hosted URL.
Browser network interception during verification permits only this loopback origin.
If the approved tools/port cannot be used, record BLOCKED; do not widen permissions.

## Cases to execute against the real component

- Observe the synthetic/local-only banner and accurate ready, empty, denied,
  checking, unknown and conflict states. Full page reload resets fixture memory.
- Keyboard Tab/Enter: add chapter, rename, select and move a chapter. Confirm
  focus moves to its open control after create/move and does not steal a writer's
  caret when a pending acknowledgement arrives during notes typing.
- Duplicate chapter titles remain separately selectable with unique accessible
  names. Verify one aria-current chapter, labels, polite live status, disabled
  mutation controls and no horizontal overflow at the bounded390px viewport.
- Book/chapter notes and rename drafts retain their own associations across
  navigation/reorder. Applying one does not replace another. No Saved/device/server
  persistence claim appears; local receipt acknowledgement is explicitly scoped.
- Switch A→B→A, try a foreign book, signed-out and failed identity states. Old
  titles/notes/rename drafts must not render under another actor or unverified state.
- Lose an acknowledgement after local commit. Ordinary create is locked, refresh
  cannot unlock it, and Check local result reconciles a matching receipt without
  another mutation. Missing receipt stays unknown; do not infer definite failure.
- Change the fixture version elsewhere, then reorder: conflict, no overwrite and
  retained notes. Explicit reload permits review of retained drafts, not automatic
  replay. Pause an A mutation, switch to B, release, then return to A: no A result
  publishes into B; uncertainty remains until explicit receipt reconciliation.
- While notes application is paused, type newer text and move the caret. Release
  through the fixture control without changing focus; acknowledgement must retain
  the newer text, textarea focus and selection range.

Record browser/version, exact Git SHA and fixture hash, actions/assertions,
PASS/FAIL/BLOCKED, screenshot, console errors and limitations. Current run records
33 browser assertions in the report evidence. These are automated native-browser
keyboard/focus/semantic checks, not a human screen-reader or author-usability audit.

Stop only the owned service after proving its PID/port relationship. Verify port3105
is no longer listening. Remove only the known transient wrapper in the disposable
checkout after preserving evidence. Confirm no application route, Auth/API/SQL,
lockfile or workflow changes enter the feature PR. Generated Next files and other
scratch artifacts stay out of commits. The new focused unit suite is invoked with
`corepack pnpm test:workspace-contract`; existing CI is preserved and its current
workflow does not separately invoke that new script. Report local unit evidence
and existing CI results distinctly; do not claim an unexecuted CI test.

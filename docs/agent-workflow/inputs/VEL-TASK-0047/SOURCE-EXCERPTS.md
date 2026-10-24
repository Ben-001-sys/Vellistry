# Exact source excerpts, not new authority

Accepted ADRs remain accepted; LANGUAGE and PLAN03 whole documents remain proposed except existing accepted concepts/scoped dispositions. Read full sources as required by AGENTS.

## Source LANGUAGE.md
Git base18c770ff6fce7401f7529667a37d7fb523cc55d9; blob 1b8a700218c8f93bfb4ca7972b90c00d03c673c0; exact heading range ## 0. to before ## 1..

## 0. Quick reference for product designers, writers, and coding agents

1. **The author is in control.** Do not imply the application or AI independently authors, accepts, publishes, or establishes story truth.
2. **Use familiar writing words.** Prefer **book**, **chapter**, **manuscript**, **character**, **story thread**, and **writing rule** in general explanations; reserve **Story Profiles** and **Rules Studio** for the named Vellistry surfaces.
3. **Never collapse these boundaries:** manuscript / outline / notes; draft / saved revision; AI suggestion / accepted prose; suggested fact / approved story fact; AI prose acceptance / fact approval; local recovery / confirmed online save; exported document / full book backup.
4. **Actions name their effect:** **Create book**, **Add chapter**, **Continue writing**, **Rewrite selection**, **Accept suggestion**, **Reject suggestion**, **Approve fact**, **Dismiss suggestion**, **Download manuscript**, **Download book backup**, **Sign out**. Display-name choices identified as `PROPOSED_LABEL` need owner review before deployment.
5. **Status is evidence, not decoration.** Never display **Saved** without a server durability acknowledgement or **Saved on this device** without confirmed local persistence. A lost acknowledgement is **Save status unknown**, not necessarily **Save failed** or **Conflict**.
6. **AI is optional.** Never require an AI key for ordinary book writing, manual Story Profiles, rule editing, or supported export. Do not imply AI is free or that Vellistry pays provider bills.
7. **Current shipping boundary:** live implementation is login and a basic book library. Described chapter/editor/rules/AI UI is mainly approved product scope plus proposed UX, not verified deployed behavior.
8. **No silent renaming of technology:** labels here do not authorize changes to routes, SQL columns, RPCs, auth tokens, IDs, model/provider routing, source guidance files, or migration history.
9. **On an undefined or disputed term:** reuse a known semantic term where it fits exactly; otherwise add a proposed entry and request the owner's decision. Never invent another competing name.
10. **Check the exact affected screen and state** before using an example from this document. Example copy is a template conditioned on the specified behavior, never evidence that a feature works.



## Source LANGUAGE.md
Git base18c770ff6fce7401f7529667a37d7fb523cc55d9; blob 1b8a700218c8f93bfb4ca7972b90c00d03c673c0; exact heading range ### 4.1 to before ### 4.2.

### 4.1 Authoring, documents and manuscript structure

| Primary UI term | Meaning and correct scope | Contextual alternative | Avoid / do not confuse with | Basis / status |
|---|---|---|---|---|
| **Vellistry** | Working product name used in current UI/repo | None | Generic “AI writer” as sole product name | `EXISTING_UI`; brand/trademark clearance unresolved |
| **Your books** | Signed-in author's book collection, existing page heading `/books` | **Books** in compact navigation; **Book library** in help text | Projects or dashboard when no project/dashboard entity exists | `EXISTING_UI` |
| **Book** | Author-owned manuscript container; an independently organized work | Novel in explanatory prose if genre appropriate | Project, series, document, chapter | `APPROVED_CONCEPT` |
| **Book title** | Name of one book, currently required 1–120 characters | Title within its book form | New book title as permanent field label, document name | `APPROVED_CONCEPT`; `PROPOSED_LABEL` |
| **Chapter** | Ordered component of a book; chapter identity independent of display order | Chapter number in contextual metadata | Scene; each may later be separate | `APPROVED_CONCEPT`; chapter UI not implemented |
| **Chapter title** | Author's label for a chapter | Title inside clearly scoped chapter form | Heading style, book title | `PROPOSED_LABEL` |
| **Manuscript** | Accepted prose organized into chapters; the text intended as the book | **Writing** as an action/short workspace heading | Outline, planning note, generated alternative, published edition | `APPROVED_CONCEPT` |
| **Manuscript editor** | The place to write and format the book without AI | **Editor** when surrounding context is clear | AI Studio, chat, layout/print editor | `APPROVED_CONCEPT` |
| **Writing workspace** | Work area combining manuscript and adjacent author tools | **Book workspace** for book-level shell | “Document management console” | `PROPOSED_LABEL`; route/layout proposed |
| **Planning notes** | Non-manuscript notes supporting a chapter/book | **Notes** inside scoped view | Canon, scene prose, revisions | `APPROVED_CONCEPT`; exact nav `PROPOSED_LABEL` |
| **Outline** | Planned structure or future events; can differ from what has happened | Story plan, only explanatory | Current story facts, manuscript | `FUTURE_RESERVED` as dedicated MVP module; concept distinct |
| **Scene** | A bounded narrative event/passage inside a chapter | Scene summary as a planning record | Chapter; scene-level route/schema is not approved for MVP | `FUTURE_RESERVED` / `PENDING_DECISION` |
| **Series** | Grouping of books and shared narrative continuity | Book series | Book or workspace; not a present first-MVP object | `FUTURE_RESERVED` |
| **Word count** | Number of words using the implementation's defined counting behavior | `1,234 words` as displayed value | Estimated pages or reading time | `APPROVED_CONCEPT`; counting rules to test |
| **Focus mode** | Reduced-distraction manual writing view | Distraction-free writing in help | Full-screen alone, read-only preview | `APPROVED_CONCEPT`; exact UI `PROPOSED_LABEL` |
| **Revision** | Persisted accepted version of a chapter/manuscript | **Version** in simpler explanations, if clearly a saved snapshot | Unsaved browser draft; AI suggestion; backup | `APPROVED_CONCEPT` |
| **Revision history** | Author-visible record of saved accepted revisions, subject to implemented retention | **History** within manuscript only | Browser Undo stack; generated proposal list | `APPROVED_CONCEPT`; `PROPOSED_LABEL` |
| **Recovered draft** | Local/recoverable writing not automatically accepted as newest server revision | Local draft if provenance requires it | Restored accepted revision; approved story fact | `APPROVED_CONCEPT`; `PROPOSED_LABEL` |



## Source LANGUAGE.md
Git base18c770ff6fce7401f7529667a37d7fb523cc55d9; blob 1b8a700218c8f93bfb4ca7972b90c00d03c673c0; exact heading range ## 10. to before ## 11..

## 10. Workflow and status language

**Critical implementation rule:** The author-visible labels below describe semantics for an approved or proposed workflow. They are **not** a claim that the statuses are implemented in the manuscript UI. Show a label only if an actual state/receipt supports it. Internal enum names may remain unchanged.

### 10.1 Book Library — present application code

| Internal/evidenced state | Display phrase | Allowed when | Don't say |
|---|---|---|---|
| `loading` | **Loading your books…** | Verified current-author list request is pending | No books yet |
| `empty` | **No books yet. Create your first book.** | Authorized request returned zero rows and no unresolved create state | No matching books if filters cause empty |
| `populated` | **Your books** (page); book list | Authorized list has rows | Empty-state text |
| `unauthorized` | **Sign in to see your books.** | Current session is not authenticated | Your books were deleted |
| `error` | **Couldn't load your books. Try again.** | Failed authorized load; no false list | No books yet |
| `createPending` | **Creating book…** | Create request actually in progress | Saved |
| `createError` | **Couldn't create this book. The title is still here.** | Definite pre-forward or other confirmed failure and draft preserved | Book lost; retry definitely safe if uncertain |
| `createUnknown` / `acknowledgment_unknown` | **We couldn't confirm whether the book was created. Check your books before trying again.** | Server acknowledgement genuinely unknown | Create failed; Book created |
| `createAbsent` | **We still can't confirm this book was created. Creating it again could make a duplicate.** | Refreshed list didn't prove the write; risk persists | Definitely absent / safe to retry |
| `session_changed` | **Your session changed. This book wasn't saved to this account.** | Verified identity change, not a generic timeout | Account data exposed |
| `signingOut` | **Signing out…** | Sign-out started | Signed out |
| `signOutError` | **Couldn't complete sign-out. You may still be signed in. Try again.** | Sign-out failure observed | Signed out everywhere |

The current exact `LIBRARY_COPY` strings in `apps/web/src/lib/library/book-library-state.ts` use a combination of “save” and “create” language. Proposed revisions above are **not permission to bypass the existing unknown-ack safety logic**. Prefer *create* for book creation as long as the implementation still performs POST creation. The intentionally cautious uncertainty semantics must be preserved.

### 10.2 Chapter manuscript save and recovery — approved intent, proposed UI

| Underlying condition | Author-visible status | Necessary behavior |
|---|---|---|
| No local changes since last confirmed persisted revision | **Saved** or **Saved · revision [n]** | Actual acknowledged durable server revision |
| Locally changed, not yet acknowledged | **Unsaved changes** | Never imply durability |
| Save request pending | **Saving…** | Actual request pending; keep editor responsive |
| Connectivity unavailable | **Offline** | Add **Saved on this device for recovery** *only* if IndexedDB local persistence was confirmed; otherwise disclose not yet safely stored |
| Request outcome unknown; acknowledgement possibly lost | **Checking save status…** or **Save status unknown** | Reconcile before risk of duplicate write; not falsely a 409 conflict |
| Proven concurrent different revision | **A newer saved version exists. Review both versions.** | Non-destructive compare/reconcile |
| Local recovery record found | **Recovered draft available** | Compare and explicitly choose, not automatic server replacement |
| Save definitely failed | **Couldn't save your changes. Your draft is still available [only if verified].** | Specific recovery action and no false local guarantee |

Do not show **All changes saved** while local edits remain unacknowledged. Never use **Synced** unless actual cross-device state is proven. Status is per affected chapter/book, not one blanket label copied from a different record.

### 10.3 AI suggestion lifecycle — approved semantics, future interface

| Condition | Suggested label | Action / distinction |
|---|---|---|
| AI not configured | **AI not connected** | Manual writing remains available; connect only if desired |
| Request preview awaiting author approval | **Review what will be sent** | Show provider, model, selected text, applicable context, rules and costs/limitations |
| Request accepted and running | **Generating suggestion…** | Do not alter manuscript yet |
| Valid response awaiting review | **Suggestion ready to review** | **Accept suggestion** / **Reject suggestion** |
| Author rejects | **Suggestion rejected** | Original accepted manuscript unchanged |
| Server commits accepted proposal | **Suggestion accepted** | Only after actual acknowledged revision |
| Source changed after request | **This suggestion is out of date. Your writing has changed.** | Disable Accept; ask for new request |
| Explicit cancellation succeeded | **Suggestion cancelled** | Only when cancellation handling is known; do not guarantee provider never charged |
| Provider request failed | **Couldn't generate a suggestion. Your manuscript hasn't changed.** | Show safe retry only when accepted text unaffected |
| Undo accepted and committed | **Change undone** | New compensating revision confirmed; not arbitrary history erasure |

**Not synonyms:** AI suggestion **out of date** ≠ server manuscript **save conflict**. Provider **timeout** ≠ text generation **cancelled**. **Accepted** prose ≠ **approved** profile facts.

### 10.4 Story fact lifecycle — approved semantics, future interface

| State/condition | Suggested label | How to explain it |
|---|---|---|
| Extracted/proposed fact | **Suggested fact** / **Needs review** | Not part of approved story state |
| Author changes candidate before deciding | **Edited suggestion** | Still unapproved until explicit approval |
| Author approves fact | **Approved fact** | Explain source and story-time association |
| Author dismisses | **Dismissed suggestion** | Does not establish story canon |
| Source text edited, withdrawn or no longer matches | **Source changed — review required** | Don't silently invalidate previous human decision or keep approving stale candidate |
| Source passage missing/uncertain | **Source unavailable** / **Needs review** | Never invent a quote or story time |
| Belief/claim, not established truth | **Character belief** / **Unconfirmed claim** if deliberately modeled | Do not label objective fact |

Do not promise the system automatically detects all contradictions, preserves all point-of-view knowledge, or understands every retcon in MVP.

### 10.5 Rule and connection states

| Object | Display states | Requirements |
|---|---|---|
| Writing rule | **Enabled**, **Disabled**, **Inherited** (if actual scope engine supports), **Overridden** (if actual override exists) | State describes applicability, not literary merit |
| Default rule pack | **Not available** / **Awaiting verified guidance** if uncertified | Don't show source-mismatched sample rules as real defaults |
| AI connection | **Not connected**, **Connected** only if actually verifiable in live session; **Connection unavailable** where known | No guarantee of persistent credential storage or provider availability |
| Provider/model | **Available for this request** only after route checks; **Unavailable** if vetted route disabled | Avoid pricing/privacy promises without verification |



## Source docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md
Git base18c770ff6fce7401f7529667a37d7fb523cc55d9; blob d53724d08d065a9e354a95d5953068fd497b5cfb; exact heading range ## Decision to before ## Alternatives.

## Decision

**Accept the following as the implementation baseline, not an irrevocable forever stack:** a TypeScript/pnpm workspace holding **Next.js 16 / React 19** for author-facing UI and **NestJS 11** for protected application API and domain modules. Keep the author writing experience on **Tiptap 3** with PostgreSQL-acknowledged chapter revisions and best-effort local Dexie recovery.

Use **Supabase Auth** as the only user sign-in authority; **Supabase PostgreSQL** as the durable relational store with per-author/book Row Level Security; and optional private Supabase Storage for authorized import/export files when that surface is implemented. **No Better Auth alongside Supabase Auth**.

Start with **Supabase CLI local development**, no production credentials and no paid service. Managed Supabase Free versus properly self-hosted production Supabase/PostgreSQL is still open. Do not make cloud deployment a condition for offline/no-paid development. The Nest API must validate Supabase access credentials before serving author data, use RLS-scoped non-service database calls, never accept client-supplied owner IDs as authority and never expose privileged keys to browsers. Next.js is frontend/BFF, not an unguarded duplicate backend.

For Story Memory, retain author-approved temporal canon events and PostgreSQL full-text retrieval as the initial memory system. pgvector/embeddings are **optional** after realistic fiction-quality evidence. Background execution is a separate worker boundary, with specific provider (Graphile Worker versus Supabase Queues) **undecided**. Generative AI remains optional, consented and provider-neutral; no paid model required or secretly selected.



## Source docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md
Git base18c770ff6fce7401f7529667a37d7fb523cc55d9; blob 08b9a563fb79ebb91f20d0f84e0d752c1bb6709d; exact heading range ## Decision to before ## Alternatives.

## Decision

**Codex is Vellistry's default primary code implementation agent starting 2026-10-14**, for each newly authorized bounded coding task. Preserve the existing role-based control plane:

| Role | Responsibility | Authority boundary |
|---|---|---|
| **Project owner** | Select/approve scope, consequential changes, security posture, spending, database operations, PR acceptance/merge and release | Sole final decision maker; permitted to self-review under the constitution |
| **ChatGPT — architect/coordinator** | Read current repository evidence and accepted ADRs; define requirements, task IDs, ContextPacks, acceptance/negative tests, path allowlists and exclusions; assess Codex reports, diff and CI; advise owner | Does **not** make owner decisions, treat its assessment as independent human review, or act as the default feature-coding executor |
| **Codex — primary implementer** | On an explicitly scoped task, inspect pinned source, implement code/tests in an isolated Git branch/worktree, run valid checks, produce a factual ExecutionBundle and proposed PR | No self-authorization to change scope/ADRs, merge, deploy, perform cloud SQL/migrations/resets, incur paid costs, use real manuscripts or disclose secrets |
| **GitHub — source of truth and review ledger** | Host code, authoritative docs, versioned ADRs, task/ContextPack/ExecutionBundle artifacts, PRs, CI, decision history and current state | PR creation and green CI do **not** equal owner acceptance or deployment readiness |
| **Independent verifier (optional)** | Challenge the source diff, independently rerun tests and negative scenarios when possible | Advisory; the same agent's self-review is not an independent execution, and no second human is mandated |

**Default work loop:**

1. **Observe:** ChatGPT inspects the merged `main` SHA, current PRs, accepted requirements/ADRs and latest top of `CURRENT-STATE.md`; distinguish verified facts from older historical status.
2. **Authorize a specific slice:** The owner approves the bounded objective and sensitive actions. ChatGPT prepares a unique task/ContextPack with source SHA, intended changes, allowed/forbidden paths, behavioral acceptance checks, security and cost restrictions. A prepared packet does not grant approval on its own.
3. **Dispatch to Codex:** Codex executes in a dedicated branch/worktree against the designated SHA, without reusing old task/pack IDs or overwriting another agent's in-progress branch. Agent may use the existing repository tools/CI and must declare tool/model/runtime in its evidence.
4. **Report evidence:** Codex supplies an ExecutionBundle with base/head SHA, changed paths, actual commands and exit codes, unit/integration/browser results with real environment and fixture descriptions, `PASS|FAIL|BLOCKED|NOT_RUN`, original artifacts and `FACT|INTERPRETATION|PROPOSAL`.
5. **Review:** ChatGPT reviews the exact submitted code, contracts, tests, workflow behavior, known risks and evidence. The owner determines corrections, rejection or PR acceptance/merge. CI success alone cannot waive human acceptance/security/recovery testing.
6. **Reconcile:** After an approved merge, verify files on merged `main` and post-merge checks; update `CURRENT-STATE.md` and issue/task status, preserving past decisions and results. Proceed to a new slice only after its own authorization.

Codex is a **role assignment**, not a mandatory IDE or subscription. Cursor may continue as an editor, historical test environment or explicitly assigned alternate agent, but **Cursor Agent is no longer the default implementer**. Other agents may implement a task only when the owner explicitly reassigns that task; do not silently switch providers or claim that a ChatGPT-side GitHub change was executed by Codex.

**Existing work:** PR #64 remains a valid merged Cursor-era implementation and its recorded verification evidence does not change. Draft [PR #65](https://github.com/Ben-001-sys/Vellistry/pull/65) is a **ChatGPT-authored, not Codex-executed** implementation proposal; do not relabel its origin, auto-merge it or treat its tests as Codex evidence. It may be reviewed, adopted via a fresh bounded Codex handoff, revised or closed by the owner, with its actual provenance preserved.

**Security boundary:** The owner selected hosted **Supabase Cloud** project `vellistry-dev`, not a locally self-hosted Supabase installation. All hosted schema migrations, Auth fixture creation, remote resets, real manuscript use, deployment and paid provider calls remain subject to separate explicit task-level authorization and appropriate testing. In particular, the historical signed-out-but-still-valid JWT/direct PostgREST concern remains a private-pilot blocker until mitigated and verified.



## Source docs/plans/VEL-PLAN-03-UX-NAVIGATION-STATES-2026-10-11.md
Git base18c770ff6fce7401f7529667a37d7fb523cc55d9; blob 99d016a057617b71c0810bc04ea258449ab01cfb; exact heading range ## 1. to before ## 2..

## 1. Proposed navigation hierarchy

```text
Public/sign-in
  → Authenticated Library /books
    → Book workspace /books/:bookId (owner only)
      → Chapter manuscript /books/:bookId/chapters/:chapterId
         left: chapter rail / organizer
         middle: manual Tiptap editor
         right: Story Workspace inspector (optional drawer)
         toolbar: formatting, find, save status, history
      → Story Workspace /books/:bookId/story
      → Rules Studio /books/:bookId/rules
      → Export / backup / privacy for owned book
  → Author settings (account session, optional AI connection)
  → Contextual modals/drawers: unsaved navigation, save recovery,
      revision compare, fact review, AI consent, proposal review,
      export/delete confirmation
```

These paths are **candidates** except existing `/`, `/login`, `/books`, `/api/books`. Do not generate routes solely because pictured in Figma. Book ID/Chapter ID always scoped and access-checked; no sensitive content in URL query or preview caches.



## Source docs/plans/VEL-PLAN-03-UX-NAVIGATION-STATES-2026-10-11.md
Git base18c770ff6fce7401f7529667a37d7fb523cc55d9; blob 99d016a057617b71c0810bc04ea258449ab01cfb; exact heading range ### Library / account to before ### Editor / revision receipt.

### Library / account
`checking-session→loading→empty|populated|error|unauthenticated`. On auth identity change, clear or partition **all** account-scoped caches, pending requests and local context (books, chapters, profiles, facts, rules, proposals, recovery); late responses from A are ignored when B is current. On sign-out with unsynced draft, show an explicit retain/delete-on-device choice based on approved local-draft policy instead of silently destroying work.


## Exact acceptance/journey rows
Source docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md; blob b61aef6b9748382e1b173e52caf598178c389962; selected lines containing ACC-M1-, ACC-M8- or **VEL-JRN-.

| **VEL-JRN-001** | Start a book and move between chapters without losing writing | M1 M2 M3 M8 | 01-004, 01-006, 02-001, 02-015, 02-019 | R05 R15 R16 |
| **VEL-JRN-002** | Write and format normally with no model/account key configured | M2 M3 M8 | 02-001, 02-002, 02-013, 02-017, 02-021 | R05 R16 |
| **VEL-JRN-003** | Close, reopen, recover and export an author's manuscript | M3 M8 | 02-018, 02-019, 14-003, 14-015, 17-015 | R11 R15 R19 |
| **VEL-JRN-004** | Manually create and revise a visible character/storyline profile | M4 M8 | 08-021, 08-022, 08-023, 08-024, 08-025 | R07 R15 |
| **VEL-JRN-005** | After drafting, inspect and approve/revise/dismiss candidate profile changes | M2 M4 M7 | 08-026, 08-027, 09-025, 09-027, 09-030 | R07 R10 R19 |
| **VEL-JRN-006** | Browse, disable, restore and add an author creative rule | M5 M8 | 04-001..009; 04-011, 04-023 | R01 R06 |
| **VEL-JRN-007** | Connect an evaluated provider, preview context and request Continue | M5 M6 M7 M8 | 05-007, 06-001, 06-002, 11-001, 11-002 | R06 R08 R15 |
| **VEL-JRN-008** | Select prose, obtain a Rewrite suggestion, reject or accept it, and undo | M2 M5 M6 M7 | 05-008, 11-001..011 (bounded) | R05 R06 R08 R10 |
| **VEL-JRN-009** | Accept AI prose and review separate new profile candidates | M4 M6 M7 | 08-026, 09-026, 09-027, 09-029 | R07 R10 |
| **VEL-JRN-010** | Make edits while an AI request is pending, then handle stale suggestions safely | M2 M3 M7 | 11-011, 11-012; 02-017..019 | R05 R10 R19 |
| **VEL-JRN-011** | Verify two accounts/books remain isolated and author data can be retrieved/deleted | M3 M8 | 17-003, 17-004, 17-013..017 | R14 R15 R19 |
- **ACC-M1-01**: Given an authenticated author with no books, when they create a book and two chapters, then each item appears in that author's book navigation and can be reopened.
- **ACC-M1-02**: Given three differently titled chapters with saved content, when the author reorders them, then chapter order changes **without** moving prose to the wrong chapter or discarding an existing edit.
- **ACC-M1-03**: Given a note attached to a chapter, when the author navigates elsewhere and returns, then the note remains separate from accepted manuscript text.
- **ACC-M8-01**: Given Author A and Author B with separate books, when A attempts to access B's manuscript, approved profiles, exports or API-key state directly or through nested document endpoints, then unauthorized read/write is denied; tests cover guessed IDs and cross-account mutation.
- **ACC-M8-02**: Given manuscript text is about to be sent to an external AI provider, when the author has not permitted that provider/task transfer, then Vellistry does not send the manuscript.
- **ACC-M8-03**: Given secrets, logs, screenshots and backups, when an audit runs, then API credentials and private content are not exposed to unauthorized users or repository artifacts.
- **ACC-M8-04**: Given a keyboard-only writer, when navigating the primary editor, chapter list, profile panel, Rules Studio and accept/reject actions, then primary tasks can be completed without mouse-only controls.
- **ACC-M8-05**: Given degraded provider/network/storage states, when the application reports progress, then it does not falsely claim a successful write/generation/backup.

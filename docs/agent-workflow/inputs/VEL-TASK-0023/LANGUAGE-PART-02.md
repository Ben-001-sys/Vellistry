| Story Workspace subview | **Characters** | Characters | Approved concept, proposed UI location |
| Story Workspace subview | **Story threads** | Story threads | Name mapping pending between Storyline and Thread |
| Story Workspace subview | **Suggested facts** | Suggested facts | Proposed fact-review label |
| Inside a book | **Rules Studio** | Rules Studio | Approved feature name |
| Book menu | **Export and backup** | Export and backup | Proposed grouping; actions remain distinct |
| Global user menu | **Account settings** | Account settings | Proposed name |
| Account settings | **AI settings** | AI settings | Proposed name |

Candidate route designs in `docs/plans/VEL-PLAN-03-UX-NAVIGATION-STATES-2026-10-11.md` (`/books/:bookId`, `/books/:bookId/chapters/:chapterId`, `/books/:bookId/story`, `/books/:bookId/rules`) **are not live routes**. A label in this table is not authorization to create it.

### 6.3 Heading hierarchy and breadcrumbs

- Page title (H1) names the current area or current object: **Your books**, **Rules Studio**, **Chapter 4: The Crossing** if that is the author's chapter title. Avoid “Vellistry — Your books — Workspace — Editor” as H1.
- Breadcrumbs carry parent object names: `Your books / [Book title] / [Chapter title]`. Preserve authored capitalization and punctuation in proper names.
- Keep link labels meaningful out of context; use **Back to your books** when destination is the library, not generic **Back** in complex workflows.
- Sidebar labels are concise nouns; primary buttons are verbs plus objects. Tabs may shorten a term when surrounding title disambiguates it.
- A book name is user data and cannot be rewritten by a language migration. Ellipses may visually truncate, but accessible title must preserve full value.
- Use hierarchical headings independent of visual text size; don't skip headings merely for appearance.

## 7. Roles and entity naming

**Public application roles:** only **Author** is supported by owner-approved first-MVP scope. App copy normally speaks to authors as **you**. The internal database column `owner_id` is an authorization implementation detail and remains unchanged; it is not a reason to use “Owner” or “Tenant” on the book UI.

**Other concepts not currently product roles:** reader, beta reader, publisher, editor, collaborator, administrator. They occur in research or future plans; do not imply registration types, permission grants, invitations or shared ownership exist.

**Engineering actors:** `project_owner`, `Codex implementer`, `ChatGPT coordinator/reviewer`, `agent`, `reviewer` in Task/ContextPack/ExecutionBundle governance. These are development-process roles, not application account types and must not appear in author account selectors.

**Vellistry author vs fictional author:** when explaining platform actions say **author**; when describing a story's creator within prose say **writer** if useful; when referring to character viewpoint say **point-of-view character**. Do not confuse the logged-in author with a narrator or a character in the novel.

## 8. Action and command language

### 8.1 General verb contracts

| Verb | Use when | Never use when | Example |
|---|---|---|---|
| **Create** | Establish a new independent record/container | Attach an existing item or merely reveal UI | **Create book** |
| **Add** | Add a subordinate record or item in a current context | Create an entire new owned book from global nav without context | **Add chapter**, **Add character** |
| **Save** | Explicit persisted author change, with truthful acknowledgement | Generate, request, accept uncommitted AI output; imply auto-save completed | **Save changes** on explicit editable profile form |
| **Edit** | Enter a controlled editing mode | Accept/approve without editing | **Edit character** |
| **Rename** | Change the title/label only | Rewrite manuscript prose | **Rename chapter** |
| **Move / Reorder** | Change arrangement of existing objects | Change chapter identity | **Move chapter up**, **Reorder chapters** |
| **Enable / Disable** | Set participation of a rule/feature, reversibly | Delete a rule or approve a fact | **Disable rule** |
| **Restore** | Bring back previous saved state/default configuration | Enable a rule toggle alone (use Enable) | **Restore default rules**, **Restore from backup** |
| **Approve** | Make source-linked story fact authoritative | Accept proposed manuscript text | **Approve fact** |
| **Accept** | Commit a reviewed AI prose suggestion | Turn an uncertain fact into canon | **Accept suggestion** |
| **Reject** | Decline unaccepted AI prose alternative | Delete previously committed prose | **Reject suggestion** |
| **Dismiss** | Close/decline a candidate fact or non-destructive notice | Erase accepted state | **Dismiss suggested fact** |
| **Undo** | Reverse an eligible operation within explicitly supported revision semantics | Guaranteed reversal of arbitrary later edits | **Undo accepted change** |
| **Download** | Produce a file on the author's device | Publish/distribute a book | **Download manuscript** |
| **Export** | General workflow for preparing document in a chosen format | Full backup unless specifically selected | **Export manuscript** as screen heading |
| **Delete** | Permanent removal subject to documented policy | Hide, unlink, disable or discard an unaccepted alternative | **Delete book** |
| **Remove** | Detach an association without deleting underlying source | Permanent destruction or default source archive deletion | **Remove from [list]** only if non-destructive |
| **Cancel** | Stop uncommitted operation or close current dialog without change | Destroy draft edits unless disclosure is explicit | **Cancel** |
| **Discard changes** | Intentionally throw away unsaved local edits | Cancel navigation preserving edits | **Discard unsaved changes** |
| **Sign out** | End current app session in supported sense | Guarantee that every previously issued token immediately invalidates | **Sign out** |

### 8.2 Current and proposed controls

| Surface | Current code/UI | Recommended wording | Decision note |
|---|---|---|---|
| `/books` form label | `New book title` | **Book title** | `PROPOSED_LABEL`; simpler scoped field |
| `/books` create button | `Create` | **Create book** | `PROPOSED_LABEL`; names object; test width/accessibility |
| `/books` refresh | `Refresh` | **Refresh books** when outside clear table context | Keep **Refresh** if context unambiguous |
| `/books` retry | `Try again` | Keep when previous operation and object are unambiguous | Contextual allowance |
| `/books` uncertain retry | `Save again anyway` | **Create book again** only after explicit duplication warning and second confirmation; otherwise **Check your books** | `PENDING_DECISION`; cannot change action alone without safe workflow |
| Login signup | `Create account` | Keep | `EXISTING_UI` |
| Book content | No live chapter buttons | **Add chapter**, **Rename chapter**, **Move chapter** | `PROPOSED_LABEL`, must follow implementation |
| Editor AI | No live controls | **Continue writing**, **Rewrite selection** | Approved actions; exact labels `PROPOSED_LABEL` |
| AI prose review | No live controls | **Accept suggestion**, **Reject suggestion**, **Undo accepted change** | `PROPOSED_LABEL`; needs authenticated CAS semantics |
| Fact review | No live controls | **Approve fact**, **Edit suggestion**, **Dismiss suggestion** | `PROPOSED_LABEL`; don't use prose Accept/Reject indiscriminately |
| Rules | No live controls | **Add rule**, **Disable rule**, **Enable rule**, **Restore defaults** | Feature approved; exact labels proposed |
| Portability | No live controls | **Download manuscript**, **Download book backup**, **Restore from backup** | Distinguish formats and scope |
| Book destruction | No live control | **Delete book** | Require explicit consequence copy based on verified deletion policy |

### 8.3 Concurrency and destructive actions

- A destructive button names the entity: **Delete book**, not **Confirm**, **OK**, **Yes**, or **Proceed**.
- For data loss, show the target name and affected data classes, retention limitations and whether a backup is advisable/available; never invent a deletion guarantee.
- Navigating away with uncommitted edits requires **Keep editing** / **Leave without saving** only when those effects are accurate; offer recovery choice if the implementation supports it.
- Do not label a blind retry safe when a previous create could have succeeded. State duplicate risk *before* presenting an action that might create another record.
- Only use **Undo** after actual revision receipt and within applicable safety rules. If not reversible, say why and offer appropriate review/recovery, not a fake Undo.

## 9. Forms, search, tables and data presentation

### 9.1 Field and helper-text candidates

| Feature | Label | Helper / validation example | Status |
|---|---|---|---|
| Create book | **Book title** | **Enter a book title.** / **Use 120 characters or fewer.** | Title 1–120 existing; copy proposed |
| Login | **Email** | **Enter your email address.** for empty/invalid format | Existing field; copy proposed |
| Login | **Password** | **Enter your password.** | Existing field; do not reveal auth mechanics |
| Add chapter | **Chapter title** | **Enter a chapter title.** | Proposed UI; DB constraint 1–180 characters |
| Create character | **Character name** | **Enter a name for this character.** | Proposed UI |
| Character info | **Character details** | **Add what you know about this character.** | Proposed UI, freeform fields not finalized |
| Story thread | **Thread name** | **Name this plotline or ongoing thread.** | Proposed label pending naming decision |
| Custom rule | **Rule name** | **Give this rule a name you’ll recognize.** | Proposed UI |
| Custom rule | **Guidance** | **Describe what you want the writing to do.** | Proposed UI |
| Rule applicability | **Applies to** | **Choose where this rule should apply.** | Proposed UI; supported scopes must match backend |
| AI connection | **OpenRouter API key** | **Use your own key. AI is optional, and your provider may charge for requests.** | Selected provider; no live feature |
| AI selection | **Model** | **Choose an available model for this request.** | Proposed; route verification required |
| AI consent | **Text sent to AI** | Preview source passage and scoped context, not a vague privacy claim | Proposed; must mirror actual request |
| Export | **File format** | **DOCX** / **TXT**; warn about supported formatting | Proposed; do not offer unsupported EPUB/print PDF |

Field labels must remain visible. Placeholders are hints, never the only label. The exact UI validation copy must be based on enforced constraints; do not invent field maxima or hidden limits.

### 9.2 Search and filtering

- Use **Search your books** in library search if built; **Find in chapter** for editing search; **Find and replace** only when actual replacement is implemented.
- Use **Search rules**, **Filter by status**, **Filter by scope** inside Rules Studio if supported. Avoid generic unlabeled magnifying-glass controls.
- Results empty because of filters: **No matching books** / **No matching rules** and an action to **Clear filters**, not **No books yet**.
- **Clear search** removes the query; **Clear filters** resets active filters; **Reset defaults** changes stored rule configuration. Do not use one label for all three.
- For tables use **Book**, **Updated**, **Word count**; for fact review use **Character**, **Suggested change**, **Source**, **Status** only when those columns actually exist. Do not show internal `owner_id`, `current_revision`, `created_at` keys to authors.

### 9.3 Quantities and displayed metadata

- Use **1 word / 2 words** with correct pluralization, and locale-aware grouping (e.g. `1,234 words` in the source English example).
- A **word count** is not the same as reading time, print page count, token count, or an AI billing estimate.
- For dates/time, display a localized readable value with clear timezone where needed. Use ISO 8601 internally; do not impose Accra time or U.S. formats for all authors.
- For provider costs, distinguish **estimate**, **limit**, and **actual charged usage**. Show provider-reported currency and attribution; never imply a free model will always stay free.
- Do not use a fictional global quality/continuity score until a validated methodology and owner decision exist.

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

## 11. System communication patterns and approved example copy

> **Copy status:** Examples are `PROPOSED_LABEL` unless identical to existing UI. They are safe wording templates, **not feature implementation proof**. Every dynamic value must be derived from authorized, verified runtime data. Adapt where backend semantics differ, then review the terminology contract.

### 11.1 Message composition rules

Use **what happened → impact → next action** when helpful. Prefer a one-sentence message for routine results. Use a second sentence for the next step or meaningful consequence. Do not expose JWT, RLS, CAS, PostgREST, HTTP 409, JSONB, service-role, RPC, SQL or Supabase internals in ordinary author copy. Errors do not need apologies or jokes; don't blame the author or promise data recovery without evidence.

Successful mutations: speak only after a real confirmation. When an operation is still waiting, use present-participle status (*Saving…*), never completed tense (*Saved*). When ambiguous, explicitly say **we couldn't confirm**.

### 11.2 Specific scenarios

| Scenario | Preferred example | Avoid / reason |
|---|---|---|
| Empty book collection | **No books yet. Create your first book.** | “No data found.” — opaque |
| Book created, server-confirmed | **Book created.** | “Your manuscript is permanently safe.” — unsupported |
| Book creation uncertain | **We couldn't confirm whether the book was created. Check your books before trying again.** | “Book creation failed.” — may be false |
| Retry might duplicate | **Creating the book again could make a duplicate. Check your books first.** | “Save again anyway” without explanation |
| No results after search | **No matching books. Try another search or clear filters.** | “No books yet.” — wrong condition |
| Session missing | **Sign in to see your books.** | “Unauthorized 401.” |
| Session changed during create | **Your session changed. This book wasn't saved to this account.** | “Account not found.” |
| Sign-out failure | **Couldn't complete sign-out. You may still be signed in. Try again.** | “Signed out.” |
| Unsaved manuscript edits | **Unsaved changes** | “Saved” without receipt |
| Confirmed manuscript save | **Saved** / **Saved · revision 12** | “Saved to cloud” without known server/retention |
| Save acknowledgement unknown | **We couldn't confirm the last save. Check the saved version before retrying.** | “Network conflict”, “Saved”, “Save failed” |
| New server revision | **A newer saved version exists. Review both versions before deciding what to keep.** | “Merge error 409.” |
| Local draft found | **Recovered draft available. Compare it with the saved version.** | “Restored automatically.” |
| No optional AI key | **AI isn't connected. You can keep writing without it.** | “Complete setup to start writing.” |
| AI request transfer | **This request will send the selected text and the listed story context to [provider/model]. Review before continuing.** | “Your writing stays entirely on your device.” |
| Potential provider charges | **Your provider may charge for this request. The amount shown is an estimate, not a guarantee.** | “Free AI” |
| AI running | **Generating suggestion…** | “Writing your book…” — implies automatic authorship |
| AI output received | **Suggestion ready. Review it before accepting.** | “Chapter updated.” before author choice |
| AI source stale | **Your writing changed while this suggestion was being prepared. Request a new suggestion to avoid overwriting your edits.** | “Apply anyway.” |
| AI request fails | **Couldn't generate a suggestion. Your saved manuscript hasn't changed.** if verified | “Try again” without unaffected-data assurance |
| Fact extracted | **Suggested fact: [change]. Review the source before approving.** | “Canon updated.” |
| Fact approved | **Fact approved. It will be used as approved story information where relevant.** only if effective context confirmed | “AI knows the truth now.” |
| Fact source changed | **This fact's source passage has changed. Review it before using the fact in future suggestions.** | “Fact deleted.” automatically |
| Rule disabled | **Rule disabled. It won't be included as an active instruction in new requests where this rule applies.** when full request-filtering verified | “AI will never express this idea.” |
| Unsupported import feature | **This file contains formatting Vellistry can't preserve. Review the changes before importing. Your original file won't be changed.** if verified | “Imported perfectly.” |
| Download DOCX | **Your DOCX is ready to download. Some formatting may differ.** when actual file ready and warning applicable | “Print-ready book completed.” |
| Book backup available | **Book backup ready to download.** only after archive validated | “Protected forever.” |
| Restore staging | **Review the backup contents before restoring. Nothing has been replaced yet.** | “Your book has been restored.” before commit |
| Delete book confirmation | **Delete “[Book title]”?** Follow with precise impact and retention statement based on real behavior | Generic “Are you sure?” |
| Delete fails | **Couldn't delete this book. No deletion is confirmed. Try again or check your books.** | “Deleted” without receipt |

### 11.3 Confirmation dialogs

**Accept AI suggestion**: title **Accept this suggestion?** only if the review surface already shows exact original/proposed text; body should specify the intended span and current-revision check; primary **Accept suggestion**, secondary **Keep original** or **Cancel** as applicable. Don't introduce redundant confirmation if inline safe review already provides deliberate decision.

**Approve story fact**: title **Approve this story fact?**; body explains source passage, target character/thread and story time; primary **Approve fact**, secondary **Keep for review** or **Cancel** depending on actual persisted state. Prose must not be accepted by this action.

**Overwrite-risk recovery**: title **A newer saved version exists**; show local/server changes and available verified recovery actions such as **Keep both versions** and **Review differences**. Don't offer **Replace saved version** without an explicit approved conflict resolution protocol.

**Delete book**: title **Delete “[Book title]”?**; body enumerates manuscript/notes/approved profiles/rules/backup implications from actual retention policy. Primary **Delete book**, secondary **Cancel**. Do not claim permanently deleted from backups unless retention policy guarantees it.

**External AI consent**: title **Review what will be sent to AI**; show exact excerpt, relevant included book context/rules, provider, model, cost caveat, optional privacy/terms link. Primary **Send to AI** only if request action and provider are verified; secondary **Cancel**. Do not infer consent from an opaque checkbox or generic onboarding acceptance.

### 11.4 Notifications and empty states

- Use toast for low-risk confirmations with a lasting result that the page also reflects. Don't hide major recovery/data-loss outcomes in a disappearing toast.
- `role=status`/polite live region for ordinary progress; assertive alert only for important actionable interruptions. Verify keyboard focus and screen-reader behavior. Do not announce every keystroke/autosave tick.
- Empty states state **why** a collection is empty when known and suggest a relevant next action. Differentiate no items / no search match / no permission / unable to load.
- For first-time Story Profiles: **No characters yet. Add a character to keep track of their details as you write.** For story threads: **No story threads yet. Add one to track an ongoing plotline.** Both are proposed future examples.
- For Rules Studio: if source mapping is uncertified, do not falsely display “All 130 rules enabled.” Use truthful temporary unavailable/synthetic copy and prevent pretending verified source activation.
- Don't surface background work as completed until a verified result exists. If job progress can't be measured, **Preparing manuscript…**, not invented percent.

## 12. Voice, tone, writing conventions and accessibility

### 12.1 Vellistry voice

**Clear, composed, respectful of the creative process, quietly encouraging, never promotional during essential work.** The product should sound like a capable writing assistant and editor, not an autonomous novelist, an enterprise admin console, or an excitable AI chatbot.

| Situation | Tone | Example |
|---|---|---|
| Routine navigation | Neutral, concise | **Your books** |
| First use | Helpful and choice-oriented | **Create a book to begin. AI is optional.** |
| Creative guidance | Suggestive, non-prescriptive | **Consider whether this exchange adds something new.** |
| Continuity warning | Specific, evidence-led | **This scene says Mara knows the secret, but the approved profile places that discovery later. Review both sources.** |
| Save interruption | Precise, calm | **We couldn't confirm that the last save completed.** |
| Irreversible action | Serious, explicit | **Delete book** plus affected content explanation |
| AI consent | Transparent, non-coercive | **Review what will be sent to AI.** |

Do not write “Your novel is bad,” “Fix your AI slop,” “AI detected,” “Guaranteed human-sounding prose,” “Magically perfected,” or “The AI understands your entire world.” The researched fiction lenses support context-dependent diagnosis and legitimate artistic exceptions; no isolated style device proves AI authorship.

### 12.2 Grammar and microcopy conventions

- **Sentence case** for navigation, headings, actions, errors and field labels, except exact product names and user-created names.

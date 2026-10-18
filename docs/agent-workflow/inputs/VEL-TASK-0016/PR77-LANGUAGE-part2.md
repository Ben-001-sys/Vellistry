| **Rule exception** | Visible author preference that deliberately qualifies inherited guidance | **Exception** | Hidden override or generic algorithmic exemption | `APPROVED_CONCEPT` |
| **Enabled / Disabled** | Whether a specific rule is included in applicable effective guidance | On/Off in compact controls with accessible names | Approved/rejected fact; stored/deleted rule | `APPROVED_CONCEPT` |
| **Applied guidance** | Applicable enabled subset for the current writing request | **What the AI will receive** if preview shows complete outbound context | Proof the model obeyed the guidance | `PROPOSED_LABEL` |
| **AI assistance** | Optional model-assisted suggestions within writing workflow | **AI** in concise navigation where clarity survives | Mandatory authoring engine | `APPROVED_CONCEPT` |
| **AI connection** | Configured access route using an author's API credential | Connect AI in action copy | Model itself; permanently saved key | `PROPOSED_LABEL` for approved BYOK behavior |
| **AI provider** | External service handling model requests, initially selected OpenRouter route | Provider in advanced settings | Vellistry itself as model trainer | `APPROVED_CONCEPT` |
| **Model** | Selected downstream model available via authorized provider route | AI model when first introduced | Provider or API key | `APPROVED_CONCEPT` |
| **API key** | Author-supplied secret used to authorize optional AI requests | Your API key | Public account password; Vellistry paid credits | `APPROVED_CONCEPT`; technical term unavoidable at setup |
| **Continue writing** | AI proposes plain text at valid author-selected collapsed caret | **Continue** in an editor menu with known context | Add to chapter end; automatic writing | `APPROVED_CONCEPT`; display form `PROPOSED_LABEL` |
| **Rewrite selection** | AI proposes alternate text for one contiguous selected span within one paragraph | **Rewrite** when one span is already selected | Rewrite entire chapter/book; accepting immediately | `APPROVED_CONCEPT`; display form `PROPOSED_LABEL` |
| **AI suggestion** | Unaccepted model-proposed alternative, held separately from saved prose | **Suggestion** | Saved revision; direct accepted text; confirmed fact | `APPROVED_CONCEPT`; `PROPOSED_LABEL` |
| **Review suggestion** | Compare proposed prose against the source and choose a disposition | Review | Apply automatically | `PROPOSED_LABEL` |
| **Accept suggestion** | Author decision to commit reviewed AI prose, subject to revision validation | **Accept** inside unambiguous suggestion card | Approve fact; silently replace source | `APPROVED_CONCEPT`; display form `PROPOSED_LABEL` |
| **Reject suggestion** | Discard AI proposed prose without changing accepted document | **Reject** inside suggestion card | Delete manuscript; dismiss fact | `APPROVED_CONCEPT`; display form `PROPOSED_LABEL` |
| **Approve fact** | Separate author decision making a suggested story fact authoritative | **Approve** in clearly fact-only view | Accept AI prose | `APPROVED_CONCEPT`; display form `PROPOSED_LABEL` |
| **Dismiss suggestion** | Decline a candidate fact/change without establishing it | **Dismiss** in fact-review context | Delete already approved fact, reject prose | `PROPOSED_LABEL` |
| **Undo accepted change** | Compensating revision to reverse eligible last accepted proposal | **Undo** where affordance is clear | Delete arbitrary later edits | `APPROVED_CONCEPT`; `PROPOSED_LABEL` |
| **Outdated suggestion** | Proposal pinned to earlier text/selection and no longer safe to accept | **Needs a new suggestion** in recovery CTA | Save conflict, rule disabled | `PROPOSED_LABEL` |

### 4.4 Portability, privacy and account

| Primary UI term | Meaning and scope | Avoid / distinction | Basis / status |
|---|---|---|---|
| **Import manuscript** | Bring supported external text/documents into an author's book after fidelity checks | Never equate with clean full-backup restore | `APPROVED_CONCEPT`; `PROPOSED_LABEL` |
| **Download manuscript** | Export a book/chapter into supported ordinary file format (TXT/DOCX) | Not an independent full-application backup or publication master | `APPROVED_CONCEPT`; `PROPOSED_LABEL` |
| **File format** | The kind of downloaded/imported document (TXT/DOCX) | Publishing layout specification | `PROPOSED_LABEL` |
| **Download book backup** | Export versioned portable archive retaining selected book text, approved profiles and rule settings | Not “Export DOCX”; not proven cloud backup | `APPROVED_CONCEPT`; `PROPOSED_LABEL` |
| **Restore from backup** | Stage, inspect and explicitly approve recovery of archived state | Not import an arbitrary DOCX, not overwrite automatically | `APPROVED_CONCEPT`; `PROPOSED_LABEL` |
| **Delete book** | Permanently remove a book subject to actual retention/recovery policy | Remove from list, archive, unpublish | `APPROVED_CONCEPT`; `PROPOSED_LABEL` |
| **Sign in / Sign out** | Current authentication UI actions | Log in/log out variants except quotations | `EXISTING_UI` |
| **Create account** | Current sign-up action | Request access if registration actually produces account | `EXISTING_UI` |
| **Account settings** | Settings for signed-in user | Admin area, team permissions | `PROPOSED_LABEL`; route unimplemented |
| **AI settings** | Optional key/model connection settings | Mandatory onboarding/billing console | `PROPOSED_LABEL`; route unimplemented |
| **Privacy** | Explanations/controls for owned content and authorized data transfer | Claiming absolute secrecy or immediate token revocation | `APPROVED_CONCEPT` |
| **Publishing** | Future professional book composition/distribution-related functions | Ordinary DOCX export, first-MVP menu | `FUTURE_RESERVED` |
| **Cover Studio** | Future editable, layered cover-design capability | Current author-editor mode | `FUTURE_RESERVED`; broader vision preserved |
| **MCP integrations** | Future controlled external assistant interoperability | AI provider selection/connected key | `FUTURE_RESERVED` / `INTERNAL_ONLY` until explicitly enabled |

## 5. Feature and module naming policy

### 5.1 Accepted product areas vs visible navigation

`M1–M8` are planning/acceptance group IDs, **not** eight compulsory tabs. They do not require that the product literally display “Trust and usability” or “Approval and reversibility” in navigation.

| Scope ID | Domain name (approved meaning) | Candidate UI grouping | Live now? |
|---|---|---|---|
| M1 | Books and chapters | **Your books** → **Book workspace**, **Chapters** | Basic `/books` yes; chapter workspace no |
| M2 | Manual manuscript editing | **Manuscript** / **Write** | No integrated editor in `main` |
| M3 | Draft durability and portability | **Revision history**, **Export and backup** | No full editor revision/recovery UI |
| M4 | Live Story Profiles | **Story Workspace** → **Characters**, **Story threads**, **Suggested facts** | No |
| M5 | Simplified Rules Studio | **Rules Studio** | No |
| M6 | Optional bounded AI | Contextual **Continue writing**, **Rewrite selection**; **AI settings** | No |
| M7 | Review, approval, reversibility | **Review suggestion**, **Review facts**, **Undo** | No actual DB-safe flows |
| M8 | Privacy and comfortable use | **Account settings**, **Privacy**, contextual notices | Login/library only |

**Key guidance:** Don't introduce “AI Studio” or “Content Generator” as a large new MVP module without a scope/design decision. AI commands should be contextual to the editor; connection preferences belong in settings.

### 5.2 Feature name casing

Use **Rules Studio**, **Story Profiles**, **Story Workspace** and **Cover Studio** when referring to those proposed/branded Vellistry feature names; use sentence case for general feature labels (**Revision history**, **Account settings**, **Story threads**). Do not Title Case every UI action. `Rules Studio` is a name, not an instruction that all child headings be capitalized.

### 5.3 No duplication of workspace vocabulary

- **Book workspace** = the environment for one book (planning/design proposal).
- **Manuscript editor** = where accepted prose is written (accepted concept).
- **Story Workspace** = proposed supporting-story information view.
- **Rules Studio** = writing guidance configuration.
- **AI settings** = optional connection settings.

Do not name all five “Editor”, “Workspace”, “Studio”, or “Dashboard”. Avoid creating a separate **AI Studio** just to hold two contextual commands.

## 6. Navigation, pages, headings and breadcrumbs

### 6.1 Verified current routes (checked in `main`)

| Route | Existing visible title/copy | Recommendation and status |
|---|---|---|
| `/` | **Vellistry**, “Write and organize your fiction. AI is optional.”; sign-in and books links | **Keep** brand, plain product descriptor, manual-first promise (`EXISTING_UI`); foundation disclaimer appropriate to internal dev only |
| `/login` | **Sign in to Vellistry**, **Email**, **Password**, **Sign in**, **Create account**, **Back to home** | **Keep** names; improve ambiguous sign-up result and error handling when approved |
| `/books` | **Your books**, **New book title**, **Create**, **Home**, **Refresh**, **Try again**, **Save again anyway**, **Sign out** | Keep **Your books**, **Sign out**; propose **Book title**, **Create book** and explicit uncertain-create confirmation |
| `/api/books` | Server API, not page | Never expose as navigation or use transport error enum verbatim |

### 6.2 Proposed future author navigation — **not implemented routes**

| Placement | Recommended label | Page heading | Evidence/state |
|---|---|---|---|
| Primary collection | **Your books** | Your books | Existing UI |
| Inside a book | **Manuscript** | Author's chapter title, with **Manuscript** context | Proposed layout consistent with M2 |
| Inside a book | **Chapters** | Chapters | Approved chapter workflow; visible label proposed |
| Inside a book | **Story Workspace** | Story Workspace | Proposed design label, not a route approval |
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

---
id: VEL-LANG-001
title: Vellistry Product Language, Terminology, and UX Content Standard
type: product-language-standard
status: proposed-owner-review
version: 1.0.0-candidate
created_at: 2026-10-17
updated_at: 2026-10-17
owner: project_owner
repository: Ben-001-sys/Vellistry
baseline_main_sha: f371448538dafa92faebbef9bcda2a36c6ca1fa9
scope: user-facing product language; not programming-language rules
approval_required: true
related_adrs: [ADR-0003, ADR-0004, ADR-0006, ADR-0007, ADR-0008]
related_journeys: [VEL-JRN-001, VEL-JRN-002, VEL-JRN-003, VEL-JRN-004, VEL-JRN-005, VEL-JRN-006, VEL-JRN-007, VEL-JRN-008, VEL-JRN-009, VEL-JRN-010, VEL-JRN-011]
---

# LANGUAGE.md — Vellistry product language and terminology

> **Adoption status:** Complete, implementation-ready **proposed language contract**, not an already approved owner decision. On explicit owner approval and repository integration, the `APPROVED_CONCEPT` terms below express already approved product meaning, and owner-approved `PROPOSED_LABEL` entries become the effective UI vocabulary. Before approval, do not retroactively relabel proposals as accepted or silently update application code. The file may guide reviews as a candidate immediately, but its presence alone does not change product scope, technical contracts, or owner authorization.

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

## 1. Purpose, authority, and applicability

### 1.1 What this file governs

This standard covers visible navigation, feature and page names, menus, breadcrumbs, tab names, buttons, form fields, helper text, tooltips, search and filters, confirmation dialogs, errors, empty states, saving and AI progress, notices, accessibility names, onboarding, author-visible revision provenance, export and privacy language, and future localized content. It also defines the semantic boundaries agents must preserve when writing content.

It **does not** standardize TypeScript/Python style, rename internal API or database artifacts, choose visual styling, decide new backend behaviors, authorize subscriptions, certify third-party rights, or approve extra MVP features. UI wording must follow tested behavior and accessibility requirements.

### 1.2 Authority and precedence

Apply authority in this order:

1. Explicitly owner-approved product scope, owner decisions, `PROJECT-CONSTITUTION.md`, accepted ADRs and security/privacy boundaries.
2. Verified code, real integration results and actual enabled features for truthful behavioral claims. Code does not automatically overrule the approved product goal; discrepancies are recorded as implementation gaps.
3. Once approved: **this document** for visible words that do not conflict with levels 1–2; source-of-truth change control applies.
4. Dated user-journey and design specifications (`VEL-JRN-001..011`, PLAN-03, editable Figma master) where not superseded; they are not all accepted routes/copy.
5. Competitor terminology, style guides and analyst proposals as supporting research, not independent authority.

Consult `CURRENT-STATE.md` and live GitHub status before claiming something is integrated or complete. Do not treat a proposed Figma route, a synthetic demonstration, or a historical PR as a production capability. The exact repository snapshot used to prepare this candidate is `f371448` on 2026-10-16; re-audit when adopting.

### 1.3 Status codes for this vocabulary

| Code | Interpretation | Implementation rule |
|---|---|---|
| `EXISTING_UI` | Exact or near-exact string verified in `main` application code | Preserve unless independently reviewed; it may still need refinement |
| `APPROVED_CONCEPT` | The named behavior/concept is supported by owner-approved scope, ADR, or later decision | Preserve meaning; suggested exact title-case/display capitalization may still be proposed |
| `PROPOSED_LABEL` | Recommended visible wording informed by evidence | Candidate to adopt; **not** pre-approved merely because listed here |
| `FUTURE_RESERVED` | Useful name for an explicitly deferred feature, not an MVP menu item | No enabled UI, marketing claim, or new scope without separate approval |
| `PENDING_DECISION` | Name or semantic mapping unresolved or dependent on unverified behavior | Do not enforce as final or show as enabled without review |
| `INTERNAL_ONLY` | Engineering/process name, not a suitable general UI label | May remain unchanged in code, data, logs and engineering docs |

Use `status` **per term** and, for high-impact changes, **per specific UI label**. A product concept's approval does not make every draft string official.

## 2. Product context and audiences

**Product:** Vellistry, an author-controlled fiction writing and editing application. The approved first release is a manual-first writing environment with optional scoped AI suggestions, editable character/story-thread profiles, configurable fiction guidance and durable/portable manuscript handling. Later opportunities include series-level structure, deep story intelligence, collaboration, covers and professional publication output; these are **not** initial MVP features.

**Primary role:** **Author** — a signed-in person who owns and edits their own books, rules and approved story information. In user-facing first-person/system copy prefer **you**, **your books**, **your manuscript** over repeatedly saying “the author.” The existing system has one relevant product role. There is no approved collaborator, editor, publisher, staff, moderator or administrator role model for the MVP. Do not invent corresponding role switchers or access claims.

**Intended writers:** novelists, serialized/web-fiction writers, and writers in many genres. Expect users who know ordinary concepts such as books, chapters, drafts and characters, not necessarily APIs, tokens, source revisions, database row-level security or model context-window mechanics. Some writers avoid AI deliberately; this is a supported experience, not an onboarding failure.

**Experience constraints:** desktop-first authoring with responsive consideration; keyboard, screen reader, IME and RTL behavior require actual testing. Product English is the current source language (`<html lang="en">` in `apps/web/src/app/layout.tsx`); no locale rollout or Ghana-only formatting has been approved. Treat region, spelling preferences and date/currency format as localization decisions, not identity-based assumptions.

## 3. Fundamental language principles

1. **Describe the author's task, not an implementation artifact.** “Review changes” rather than “Resolve CAS conflict”; “Your books” rather than “books table”.
2. **Give one concept one primary name.** Shorter contextual labels are permitted if they cannot change the concept: **Rules Studio** (navigation) → **Rules** (short tab inside that studio), never “Prompts” for the same object.
3. **Do not merge neighboring concepts.** Book vs series; chapter vs scene; notes vs manuscript; outline vs accepted prose; rule vs canon; suggestion vs revision; connection vs selected model; download vs backup.
4. **Use specific action verbs.** “Create book” rather than “Create” outside an obvious create-book form. “Approve fact” rather than “Accept” when the choice changes approved story information.
5. **Show provenance and degree of certainty.** A proposed fact is **Suggested fact**, not **Fact added**; a saved draft needs an actual receipt.
6. **Preserve creative agency and style.** Language should explain choices, not score an author's prose as objectively “good/bad” or claim to detect AI-written text.
7. **Do not blame authors.** State the problem and practical recovery action; never imply a session/token/storage failure is their fault.
8. **No false reassurance.** Never say *permanently saved*, *fully secure*, *guaranteed original*, *always private*, *completely offline*, *lossless DOCX*, *zero cost*, or *immediately revoked* without specific verified guarantees.
9. **Don't promise availability.** An approved/future feature is not an active control until implemented, tested and authorized for its environment.
10. **Write for accessible interaction.** A meaningful visible label and matching accessible name must work without relying only on color, icon, placeholder, tooltip or pointer location.
11. **Use progressively disclosed detail.** Short labels for ordinary actions; precise explanatory copy for revisions, consent, data loss and security boundaries.
12. **Preserve author-supplied wording.** Names of books, chapters, characters, titles, custom rules and manuscript prose are the author's data, not strings agents should normalize automatically.

## 4. Canonical vocabulary and concept boundaries

**Reading the table:** `Primary UI term` is current where `EXISTING_UI`, describes an accepted *concept* where `APPROVED_CONCEPT`, and is a recommended display word requiring owner adoption where `PROPOSED_LABEL`. Entries can carry more than one category. Do not infer that a not-yet-built object has a live screen.

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

### 4.2 Story knowledge and author approval

| Primary UI term | Meaning and correct scope | Contextual alternative | Avoid / do not confuse with | Basis / status |
|---|---|---|---|---|
| **Story Profiles** | Named MVP capability for editable character/storyline information and approved evolving state | **Profiles** within Story Workspace | Story Bible as an automatic synonym for every profile | `APPROVED_CONCEPT` |
| **Story Workspace** | Proposed larger view housing profiles, threads and future supporting material | **Story** only if navigation context makes it clear | Treating a proposed view as an existing route | `PROPOSED_LABEL`; Figma/design terminology |
| **Character** | Person/being within a given book, with identity and changing state | Character profile when viewing its record | User account, role, actor, narrator | `APPROVED_CONCEPT` |
| **Character profile** | Author-maintained facts and evolving state for one character | Character in a clearly titled Characters view | Full accepted manuscript, AI character draft | `APPROVED_CONCEPT` |
| **Story thread** | Continuing plotline, obligation or subplot whose development may change | **Thread** in its own list | Chat thread, discussion thread; unrelated issue tracker | `PROPOSED_LABEL` based on approved Storyline/Thread concept |
| **Storyline** | Descriptive prose synonym for plot development | Story thread only when describing same supported record | Automatic alias for exact `thread` data record | `APPROVED_CONCEPT` semantically; nav mapping `PENDING_DECISION` |
| **Suggested fact** | Proposed new/changed character or story information awaiting review | **Suggested change** in a tightly scoped review panel | Approved fact, canon, verified truth | `PROPOSED_LABEL` for approved candidate workflow |
| **Approved fact** | Author-approved, appropriately sourced story information used for supported continuity context | **Story fact** when already known approved | Extracted claim, AI guess, character belief | `PROPOSED_LABEL` for approved state distinction |
| **Story canon** | Accepted set of relevant established fictional facts and world rules | **Canon** after explanation | Entire Story Bible; all text in manuscript; narrator's unreliable assertion | `APPROVED_CONCEPT`; use sparingly for general audience |
| **Source passage** | Exact passage/evidence associated with a proposed fact | **Source** if action context is obvious | AI-generated text that was rejected; undocumented claim | `PROPOSED_LABEL` |
| **Story time** | When something occurs in the fictional chronology | **When it happens** in help | Chapter order/publication order/time UI displays | `APPROVED_CONCEPT`; advanced chronology beyond MVP limited |
| **Character knowledge** | Information a character could plausibly know at a specified story point | **What [name] knows** in help | Reader knowledge, global source facts, narrator knowledge | `APPROVED_CONCEPT`; full automated POV firewall deferred |
| **Needs review** | A candidate/approved fact requires author attention because evidence changed or is uncertain | Review needed in compact list | Rejected, false, or automatically invalidated | `PROPOSED_LABEL`; proof/evidence-driven only |
| **Retcon** | Deliberate retrospective change to established fiction | **Change to earlier story events** at first encounter | Error, automatic correction | `APPROVED_CONCEPT`; explain term for new authors |
| **Story Bible** | Broad, established genre term for character/world/plot reference material | In explanatory content about the wider concept | Renaming Live Story Profiles or Story Workspace to it without approval | `FUTURE_RESERVED` / `PENDING_DECISION` as Vellistry feature name |

### 4.3 Rules, guidance and AI

| Primary UI term | Meaning and correct scope | Contextual alternative | Avoid / do not confuse with | Basis / status |
|---|---|---|---|---|
| **Rules Studio** | Named author-facing feature for default/custom guidance and scope controls | **Rules** in a tab within the feature | Prompt library, policy engine, AI Studio | `APPROVED_CONCEPT` |
| **Writing rule** | A configurable creative instruction/guideline | **Rule** when referring to a row | Canon fact; security policy; absolute literary prohibition | `APPROVED_CONCEPT`; `PROPOSED_LABEL` |
| **Default rule** | Historical guidance supplied by Vellistry via owner-approved certified source mapping | Included rule in help | Arbitrarily rewritten 130-lens content | `APPROVED_CONCEPT`; package/mapping unresolved |
| **Custom rule** | Guidance created by this author | Your rule | Mutated source default | `APPROVED_CONCEPT` |
| **Rule scope** | Where a rule applies, e.g. workspace/book in initial bounded plan | **Applies to** in field labels | Permission scope/API scope | `APPROVED_CONCEPT`; `PROPOSED_LABEL` |
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
- Use **you/your** to address authors; avoid “user”, “tenant”, “consumer” and “the end-user” in UI.
- Prefer active verbs, positive specific instructions and natural contractions where appropriate: **Couldn't save your changes.** Do not use jokes or decorative exclamation marks for errors.
- Buttons/short labels normally have **no terminal period**. Complete help/warning sentences end with periods. Use one ellipsis glyph `…` for ongoing status, e.g. **Saving…**, not three periods; this is a proposed UI polish, not a forced code migration.
- Sentence fragments are fine as statuses: **Unsaved changes**, **Review needed**. The grammar must not hide uncertainty.
- Display acronym expansions at first encounter if the writer must understand them: **API key** can be introduced as a provider access key; **DOCX** and **TXT** are recognizable filename formats with accessible descriptions. Keep **BYOK**, **CAS**, **JWT**, **RLS**, **JSON**, **MCP**, **RPC** out of ordinary screens unless the context is explicitly technical setup/help.
- Write interface instructions describing outcomes, not mechanics: **Choose a book and start writing** rather than **Invoke the chapter-write operation**.
- Avoid gender assumptions; use character names/pronouns supplied by the author. No forced gender labels, ethnicity or genre stereotypes. Never normalize character names in manuscript prose.
- Do not hardcode author locale, time zone or currency. Format with locale-aware libraries and verified provider-supplied values. Currency estimates must include unit and source.
- For time-relative information, provide an accessible exact timestamp when ambiguity matters; use **Updated [localized date/time]** only with actual data.
- Accessibility: all controls have visible labels or equivalent accessible names; error summaries point to affected fields, feedback is textual and not color-only, headings form a logical hierarchy, focus returns appropriately after dialogs, and live regions are measured rather than spammed.
- Icons need labels if their meaning is not determinable from context: **Show chapter list**, **Close Story Workspace**, **More book options**. Tooltip cannot replace accessible name.
- Avoid emoji as a substitute for essential status. Do not rely on icons to convey whether an action is approved, saved, disabled, stale or safe.

### 12.3 Language and localization boundaries

Current source copy is English and the app marks document language `en`. No translated catalog or chosen locale set was found in the reviewed main tree. Before adding localization, externalize content, preserve grammatical placeholders, respect plural rules and content expansion, design RTL/IME/keyboard tests, and get author-region research. Do not bake British or American spelling choices into database values or assume Ghanaian users all prefer one format. Keep literary wording flexible across cultures and genres.

## 13. Domain-specific language safeguards

### 13.1 Fiction truth is not ordinary factual truth

Authors may intentionally write unreliable narrators, false beliefs, deception, paradoxes, out-of-order reveals or revisions of earlier events. Calling a passage **incorrect** requires evidence and appropriate caveats. Prefer **Possible continuity issue**, **Check this detail**, **Character knowledge may differ here**, and link to the source. For small MVP, such automated audits may not yet exist; these are not enabled features by virtue of having proposed labels.

### 13.2 Rules are guidance, not censorship

The historical 13-domain fiction framework distinguishes reusable diagnostic lenses from rigid prohibitions. A writing rule's inclusion in a prompt is measurable; model obedience and literary merit are separate. A user disabling a particular rule changes active instructions, not the immutable original archive or the probability the model may use an overlapping literary idea. Do not promise impossible exclusion of all semantic overlaps.

**Critical R01 source identity:** ADR-0007 accepts preserving 260 compact/expanded source records with identity `(raw_source_sha256, variant, printed_code)`. Some apparent duplicate IDs, especially `AR-04` and `AR-09`, have different meanings. A printed `AR-04` alone is not a safe operational rule ID. The Wave 5 draft mentions 134 logical aliases, 130 enabled expanded defaults and 4 additional compact entries; ADR-0007 expressly says the deployable active mapping remains subject to explicit owner review/certification. **Do not manufacture a resolved label catalog** or claim complete default activation before verifying the actual approved mapping. Keep the frozen source unchanged.

### 13.3 AI ownership and request transparency

The user controls the original manuscript, model selection and what proposed changes they accept. Model connection does not transfer authorship automatically. Vellistry's MVP selects OpenRouter as first BYOK integration route, with a small verified model menu, session-only in-memory key custody under the approved plan, and explicit request transfer preview. Do not say a private key is never visible to the server during authorized inference: the approved server proxy may receive it transiently. Do not say an author must pay Vellistry to write manually; free/paid provider offerings and real cost are separate.

### 13.4 Revision acceptance and undo semantics

A valid suggestion may target only the current authorized chapter revision/selection. The accepted Wave 5 concept requires revision-safe, idempotent acceptance and compensated Undo. **Accepted suggestion** must mean persisted and acknowledged; **Undo** is not permission to erase later author edits. If the author edited while AI was responding, describe the suggestion as **out of date**, keep accepted prose unchanged, and request a new suggestion.

### 13.5 Format, print and backup vocabulary

`TXT` and ordinary `DOCX` are selected MVP interchange; fidelity warnings may be necessary. A Vellistry project backup is intended to preserve supported manuscript and story configuration, not plaintext API keys. EPUB, print-ready PDF and professional cover design are **deferred**, and must not appear as delivered buttons. **Book cover** is an asset; **Cover Studio** is the future editable design workflow, not an automatic image generation feature or ordinary manuscript export.

## 14. Correct usage and anti-patterns

| Do | Avoid | Why |
|---|---|---|
| **Your books** | All projects | Current actual collection contains books, not generalized project entities |
| **Book title** | New book title on a persistent form | Label stays correct after initial entry |
| **Create book** | Create / Submit | Describes object and effect |
| **Add chapter** | Add page | Chapter is a semantic narrative unit, not a print page |
| **Manuscript** | Story Bible for drafted prose | Keeps authored prose separate from reference data |
| **Planning notes** | Draft manuscript | Notes do not enter accepted prose automatically |
| **Story Profiles** | AI memory database | Author-facing concept vs implementation details |
| **Suggested fact** | Canon fact (before approval) | Authority requires author decision |
| **Approve fact** | Accept prose | Separate decision types |
| **Rules Studio** | System prompt editor | Correct author-facing feature and broader than raw prompt string |
| **Disable rule** | Remove rule (if source remains) | Disabling participation is reversible; archival source preserved |
| **Continue writing** | Auto-complete book | Only insertion-point proposal is in MVP |
| **Rewrite selection** | Rewrite chapter | One selected same-paragraph span only |
| **Review suggestion** | Applied successfully (before author action) | AI response is provisional |
| **Unsaved changes** | Saved (when pending) | Must reflect durability evidence |
| **Save status unknown** | Conflict / Save failed | A lost ACK is not proof of either |
| **Download manuscript** | Download complete backup | Single document export does not preserve all app state |
| **Download book backup** | Publish book | Recovery archive is not distribution output |
| **Sign out** | Delete session everywhere | Current security model cannot promise instant global token invalidation |
| **Possible continuity issue** | AI detected bad writing | Context, genre and author intent matter |

## 15. Agent instructions and integration rules

### 15.1 Mandatory pre-change checklist

For any task touching navigation, visible copy, UI states, status mapping, onboarding, accessibility text, dialogs, toasts, emails, files named for users or provider-consent wording:

1. Read `AGENTS.md`, `PROJECT-CONSTITUTION.md`, `SOURCE-OF-TRUTH.md`, current `CURRENT-STATE.md`, the affected accepted scope/spec/ADR, and this document's relevant sections.
2. Identify whether the feature is `EXISTING_UI`, approved but not implemented, proposed or deferred. Inspect actual component/source and API/error/DB state semantics **before** choosing words.
3. Reuse preferred terms precisely; determine whether this is the same concept, a contextual abbreviation or a distinct domain object.
4. Build a small copy mapping: surface/path, existing copy, proposed copy, semantic condition, expected action/result, accessibility name, associated test.
5. Flag unknown terminology or conflict as `PENDING_DECISION`; do not rewrite product names, owner decisions, immutable fiction-guidance records or technical schemas independently.
6. If wording implies a behavioral guarantee, identify the test/receipt/authorization evidence. If unverified, use qualified truthful wording or block the claim.
7. Implement only within an owner-authorized coding task and existing Codex ContextPack/ExecutionBundle workflow. **This document does not authorize implementation.**
8. Include copy and state coverage in tests and review evidence; update this record through separate owner-reviewed change control when adopting a new canonical term.

### 15.2 Do not change without explicit approval

- Approved M1–M8 scope, eleven journey IDs, the selected AI boundary and BYOK semantics.
- Product name/trademark claims, major module names such as **Rules Studio** and **Story Profiles**, or default source-language content that would alter authored rules.
- R01 compact/expanded frozen sources, their provenance IDs and owner mapping decisions.
- Internal SQL/table/column names (`owner_id`, `accepted_document`, `chapter_revisions`), API routes (`/v1/books`), typed enums/response codes (`acknowledgment_unknown`, `session_changed`), TypeScript symbols, provider names, contractual record IDs, or migration history **solely to align with UI labels**.
- Security, deletion, retention, cost, consent, export fidelity or save guarantees without appropriate verified implementation and owner approval.
- An unimplemented future feature's navigation/CTA as if it worked.

### 15.3 Enforcement and automated checks

Human review is primary for semantics; regex cannot decide whether **Accept** and **Approve** mean the same thing in a new context. Pragmatic checks, when separately authorized, can:

- inventory literals in `apps/web/src` (JSX text, attributes, `aria-label`, errors and constants) and compare against this vocabulary;
- flag known high-risk display phrases (`Saved` without receipt context; `Save failed` on unknown ACK; `Canon updated` before approval; `free AI` with no verified basis);
- test consent disclosure and actual transmitted context, including disabled rule exclusion;
- test exact sign-in/library/empty/error states, retry uncertainty and duplicate risk;
- test AI suggestion accept/reject/stale behavior and fact approval independence;
- test export/backup and destructive confirmation distinctions;
- run keyboard/screen-reader checks alongside visual copy checks.

Do not automatically replace all instances of “create”, “accept”, “version”, “story”, “rule” or “save”: many contextual uses are legitimate. A string-check suite cannot replace evidence of underlying authorization and data durability. Any new enforcement job must follow the project's CI/task governance and owner authorization.

### 15.4 Exact `AGENTS.md` insertion candidate

Originally proposed for insertion after `## Read in order` and before the operational workflow. **PR #77 now includes this snippet in `AGENTS.md` on its review branch; it is not yet merged into `main`.** This integration does not approve proposed product labels or alter existing owner/Codex authority.

```markdown
## Product language and UX copy (LANGUAGE.md)

- Before any change to user-facing navigation, page names, buttons, forms, dialogs, status messages, errors, tooltips, accessibility labels, onboarding, AI consent or export wording, read root `LANGUAGE.md` alongside the relevant accepted product requirements and current implementation.
- Follow `LANGUAGE.md` for owner-approved product terminology. Reuse canonical names consistently while allowing explicitly documented contextual short labels; preserve distinct concepts such as manuscript vs notes, AI suggestion vs accepted revision, suggested fact vs approved canon, and local recovery vs confirmed save.
- Verify what the interface and backend actually do before using success, save, privacy, cost, cancellation, deletion or provider-availability claims. Do not expose internal transport codes as author-facing text or mark proposed/future features as implemented.
- If a needed term is absent, proposed, disputed or inconsistent with approved scope, record the current wording, candidate, affected surfaces and supporting evidence for owner review. Do not silently make a new canonical decision or rename unrelated concepts.
- `LANGUAGE.md` governs visible words, not database fields, API routes, internal identifiers, source archives, accepted ADRs, or integration contracts. Do not change those solely to match display labels.
- Include user-facing copy/state checks and relevant accessibility/negative tests in the task ExecutionBundle. Do not change the language contract or add automation enforcing it outside the owner-authorized Task → ContextPack → implementation → review workflow.
```

## 16. Maintenance, approval and change control

### 16.1 Adoption

`LANGUAGE.md` currently has **proposed-owner-review** status. For it to become an effective source of truth: project owner reviews all `PENDING_DECISION` high-impact questions and accepts the vocabulary scope; implementation agent integrates document through an authorized task/PR as required by `AGENTS.md`; owner approves any updates to `AGENTS.md`; actual merged-main SHA and current state are reconciled. An unmerged local download or an AI-generated draft is not owner acceptance.

### 16.2 Introducing or revising a term

For each requested new/revised canonical term, capture:

| Field | Record |
|---|---|
| Term ID | Stable `VEL-LANG-TERM-###` or review ID, assigned during adoption |
| Concept and definition | Exact entity/action/state and its differences from adjacent terms |
| Proposed UI wording | Full, short and contextual labels; forbidden confusion |
| Classification | `EXISTING_UI`, `APPROVED_CONCEPT`, `PROPOSED_LABEL`, `PENDING_DECISION`, `FUTURE_RESERVED` |
| Affected surfaces | UI paths, components, errors, docs, tests, accessibility names |
| Evidence | Accepted scope/ADR, actual code, journeys, research and relevant source lines |
| Decision | Owner approval/rejection/date/PR/commit; not implicit |
| Transition | Where old label remains valid, replacement plan, old links/help compatibility |
| Validation | Manual task + automated/accessible copy checks and verified states |

Update terms through a reviewed versioned document change. Record superseded terms; do not simply erase historical source and variant identity. Maintain a small change log below as decisions occur.

### 16.3 Release and review checklist

- [ ] All enabled controls correspond to implemented behaviors; no phantom links.
- [ ] Same concepts have the same primary name; differences are intentionally contextual.
- [ ] Book / chapter / scene / notes / manuscript / series semantics preserved.
- [ ] AI suggestion acceptance and story-fact approval cannot be mistaken for each other.
- [ ] Local drafts, server save, unknown acknowledgement and true conflict have distinct messages.
- [ ] No unreviewed rule source collision or false default-pack completeness claim.
- [ ] No implied mandatory AI/provider spend or secret-persistence claim.
- [ ] Forms have explicit labels, useful validation and accessible error feedback.
- [ ] Deletion, export, backup, recovery and Undo explain actual effects and limits.
- [ ] Terms match visible routes and tested state transitions; pending/future items are not shipped as live.
- [ ] Any proposed canonical changes have owner decision and traceability.

### 16.4 Change log

| Date | Version | Change | Authority |
|---|---|---|---|
| 2026-10-17 | 1.0.0-candidate | Initial source-grounded language contract and copy audit for owner review | Analyst proposal; **not adopted** |

## 17. Audit of actual repository language

This audit is a research finding, not an instruction to change code immediately. Path-level observations are from default-branch source at `f371448`. Suggested replacements are `PROPOSED_LABEL` unless already present.

| Severity | Location | Current text / pattern | Proposed treatment | Evidence and confidence |
|---|---|---|---|---|
| **Critical** | `apps/web/src/app/books/page.tsx`, `book-library-state.ts` | **Save again anyway** after uncertain book create | Preserve unknown-ACK semantics; add **Check your books** first and a clear duplicate-risk confirmation before **Create book again** | High: exact current code; backend may have committed |
| **High** | `apps/web/src/lib/library/book-library-state.ts` | **Could not save this book** vs form **Create** and “save result unknown” | Prefer **create book** consistently for POST creation; keep distinct definite/unknown outcomes | High: exact current strings and backend POST |
| **High** | `apps/web/src/app/login/page.tsx` | **Account requested. Check your email if confirmation is enabled.** | After inspecting actual Supabase confirmation and response behavior, show precise **Check your email to confirm your account** *only if applicable*, or verified alternative. Avoid conditional configuration jargon | High: current string; actual deployment setting unknown |
| **High** | `apps/web/src/app/login/page.tsx` | Raw `error.message` from provider displayed | Map known auth failures to clear secure copy; protect sensitive error details; keep fallback helpful | High: current source; individual provider messages uninspected |
| **High** | `apps/web/src/app/api/books/route.ts` | API errors `unauthenticated`, `api_not_configured`, `invalid_document`, `acknowledgment_unknown`, `service_unavailable` | Keep internal error contracts; map to safe author messages in client, preserve exact semantics | High: code confirmed; not all errors leak directly today |
| **High** | Planned manuscript editor (not built) | Draft statuses include **Saved**, **Saving**, unknown ACK, conflict | Require distinct author copy and tests; do not say **Saved** before confirmed server revision | High: accepted save principles; planned UX only |
| **High** | Planned Story Profiles/AI review (not built) | “Accept”, “Approve”, “Canon”, “Fact” across design drafts | Label prose decision **Accept suggestion** vs fact decision **Approve fact**; distinguish source-linked candidate | High semantic evidence; proposed exact labels |
| **Medium** | `apps/web/src/app/books/page.tsx` | Form **New book title**, button **Create** | **Book title**, **Create book** | High: real UI text; copy recommendation contextual |
| **Medium** | `apps/web/src/lib/library/book-library-state.ts` | **Please sign in to see your books.** | **Sign in to see your books.** | High: exact string; concise style proposal |
| **Medium** | `apps/web/src/lib/library/book-library-state.ts` | **Unable to load books. Try again.** | **Couldn't load your books. Try again.** | High: exact string; style proposal, not functional defect |
| **Medium** | `apps/web/src/app/books/page.tsx` | **Home** from book library | **Back to home** or context-verified destination label; do not rename blindly | High: exact route/text; moderate UX effect |
| **Medium** | `apps/web/src/app/login/page.tsx` | Sign-in and account-creation controls share one password field with `autoComplete="current-password"` | Clarify any create-account vs sign-in guidance after checking actual auth implementation; separate UX states if approved | High: actual code; input-behavior issue adjacent to copy |
| **Medium** | Design: PLAN-03, DES-002 | **Story Workspace**, **Story Profiles**, **Story Bible**, **Storyline/Thread** | Keep profiles as approved capability; Story Workspace as proposed shell; resolve primary label for thread vs storyline with author feedback | High: terms observed, approval boundaries distinct |
| **Medium** | Wave 5 vs ADR-0007 | “134 logical aliases”, “130 expanded defaults ON” vs unresolved source mapping/certification | Never advertise fully active certified defaults until approval/reproducible mapping evidence | High: document discrepancy; pending validation |
| **Low** | `apps/web/src/lib/library/book-library-state.ts` | `Loading your books...`, `Signing out...` | Typography polish to **Loading your books…**, **Signing out…** | High: exact source; low impact |
| **Low** | `/` homepage | **This is the first implementation foundation, not a public release.** | Keep on development environment; remove/rewrite only under separate production-launch task | High: accurate internal environment disclaimer |
| **Positive** | `/books` and `/login` | **Your books**, **Sign in**, **Create account**, **Sign out** | Retain; familiar and unambiguous | High: exact source |
| **Positive** | `LIBRARY_COPY.createUnknown` and `.createAbsent` | Explicit uncertainty and duplicate risk | Preserve semantic caution through any shorter language | High: correctness-positive current code |
| **Positive** | `book-library-state.ts` phases | Loading / empty / populated / error / unauthorized separated | Maintain separate view states; don't show empty while loading/error | High: actual implementation |

**Severity meaning:** Critical = a misleading action or status could cause incorrect/destructive author decisions; High = major trust/semantic or task confusion; Medium = discoverability/clarity; Low = polish. Planned missing terminology isn't a live deployed defect. Some high findings describe an implementation requirement rather than a current author-visible failure.

## 18. Unresolved decisions — do not silently settle

| ID | Question and evidence | Recommended next decision | Approval condition |
|---|---|---|---|
| `LANG-P01` | **Is the working product name Vellistry fully cleared?** Current brand in UI and repo; earlier market/name review was provisional. | Retain Vellistry in existing build; do not claim registered mark. | Owner legal/trademark/domain check before commercial brand claim. |
| `LANG-P02` | **Which exact source-version mapping becomes installable default guidance?** ADR-0007 freezes compact+expanded variants, while Wave 5 specifies 134 logical aliases provisionally. | No public numeric “130/134 active” claim until certified mapping. | Owner approves versioned map and R01 validation. |
| `LANG-P03` | **Should story navigation be “Story Workspace”, “Story Profiles” or “Story Bible”?** Profile functionality accepted; design shell proposed; competitors commonly use Story Bible/Codex. | **Story Workspace** as shell and **Story Profiles** for relevant records; do not merge into Story Bible yet. | Owner UX naming decision plus real-author task tests. |
| `LANG-P04` | **Storyline vs story thread:** approved MVP says Characters + Storylines/Threads, drafts vary. | **Story threads** for recurring plotline records; allow storyline in help. | Author testing, schema/interaction clarification and owner sign-off. |
| `LANG-P05` | **Chapter vs scene as editing unit:** approved initial DB stores chapters; long-term vision includes scenes. | Keep **chapter** authoritative in current app. | Separate scoped scene model and design/owner approval. |
| `LANG-P06` | **“Create book” unknown-save retry:** current `Save again anyway` can create duplicate; guard semantics deliberate. | **Check your books** first; add warned **Create book again** confirmation if supported. | Reviewed UX flow, tests for unknown ACK and duplicate prevention. |
| `LANG-P07` | **Sign-up result:** current copy says confirmation email *if enabled*; hosted Auth setting unverified. | Use precise verified confirmation copy per configuration. | Hosted auth state and email confirmation test. |
| `LANG-P08` | **What should AI settings promise about connection persistence?** Wave 5 selected session-only key; runtime not built. | **Use your own API key**; disclose session-only behavior, possible provider cost, actual recipient. | Authorized implementation and route/privacy/cost tests. |
| `LANG-P09` | **How will “Undo” differ between editor keyboard undo and committed AI revision undo?** Revision transaction design selected; product UI not built. | **Undo** for immediate text edit; **Undo accepted change** for persisted reviewed AI edit if supported. | UI and transactional history implementation/approval. |
| `LANG-P10` | **Which save/recovery statuses are guaranteed?** Current book-create status is not chapter autosave; save CAS planned. | Keep explicit **Unsaved**, **Saving**, **Saved**, **Save status unknown**, **Conflict**, **Recovered draft** conditioned on evidence. | Browser/database/local-recovery acceptance tests. |
| `LANG-P11` | **What is included/retained on export, restore, deletion?** ADR-0004 defines target archive; no complete converter/restore verified. | Distinguish **Download manuscript** vs **Download book backup**. | Fidelity, restore, retention, privacy and consent evidence. |
| `LANG-P12` | **Locale, English variant and translation strategy?** Current `<html lang="en">`; no localization system selected. | Use clear source English and locale-aware formatting; defer dialect/translation default. | Audience research, accessibility/IME tests, owner decision. |
| `LANG-P13` | **What are the canonical account and nested-book settings screen labels/routes?** Current only `/`, `/login`, `/books`. | **Account settings**, **AI settings**, **Export and backup** as proposed labels. | Approved navigation design and actual routes. |
| `LANG-P14` | **Which model/provider route statuses and cost figures may be displayed?** OpenRouter first adapter chosen; live real-model acceptance not completed. | Unavailable when not verified; label monetary values as estimates with units. | Real provider route/privacy/usage tests and approval. |
| `LANG-P15` | **Whether the proposed LANGUAGE.md itself is effective:** no `LANGUAGE.md` on verified default branch. | Adopt after owner review; keep `status: proposed-owner-review` meanwhile. | Owner approval and scoped documented repo integration. |

## 19. Research and evidence references

### 19.1 First-party canonical and source-specific evidence

- [Vellistry repository](https://github.com/Ben-001-sys/Vellistry) — current application, tests, governance and research.
- [`PROJECT-CONSTITUTION.md`](https://github.com/Ben-001-sys/Vellistry/blob/main/PROJECT-CONSTITUTION.md) — author intent, provenance, ownership and source precedence.
- [`SOURCE-OF-TRUTH.md`](https://github.com/Ben-001-sys/Vellistry/blob/main/SOURCE-OF-TRUTH.md) — repo versus runtime data authority.
- [`AGENTS.md`](https://github.com/Ben-001-sys/Vellistry/blob/main/AGENTS.md) — implementation role boundaries and review process.
- [`CURRENT-STATE.md`](https://github.com/Ben-001-sys/Vellistry/blob/main/CURRENT-STATE.md) — dated status, not always real-time; confirm live branch/PR state.
- [Approved eight-area MVP](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md).
- [Eleven author journeys and acceptance candidates](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md).
- [PLAN-03 candidate navigation and screen states](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/plans/VEL-PLAN-03-UX-NAVIGATION-STATES-2026-10-11.md).
- [Figma Make reported walkthrough](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/design/VEL-DES-004-MAKE-LIVE-WALKTHROUGH-2026-10-11.md) — externally reported, not reexecuted as part of this audit.
- [Figma editable design reference](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U) — canonical design artifact cited by project; static frames do not prove functioning UI.
- [Current library UI](https://github.com/Ben-001-sys/Vellistry/blob/main/apps/web/src/app/books/page.tsx), [copy/state definitions](https://github.com/Ben-001-sys/Vellistry/blob/main/apps/web/src/lib/library/book-library-state.ts), [login UI](https://github.com/Ben-001-sys/Vellistry/blob/main/apps/web/src/app/login/page.tsx), [book BFF/API errors](https://github.com/Ben-001-sys/Vellistry/blob/main/apps/web/src/app/api/books/route.ts), [Nest controller](https://github.com/Ben-001-sys/Vellistry/blob/main/apps/api/src/modules/books/books.controller.ts).
- [ADR-0003 editor](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/decisions/ADR-0003-use-tiptap-3-prosemirror-for-manuscript-editor.md), [ADR-0004 import/backup](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/decisions/ADR-0004-free-calibre-document-conversion-and-portable-recovery.md), [ADR-0006 stack](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md), [ADR-0007 source integrity](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/decisions/ADR-0007-immutable-compact-expanded-guidance-sources.md), [ADR-0008 agent roles](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md).
- [Wave 5 bounded AI decision](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/plans/OPTION-B-WAVE05-MVP-FINAL-DECISION-2026-10-10.md).
- [AI Writing App Blueprint](https://docs.google.com/document/d/10Pbsw5w0jNpthSL3_cnuOw2WiiUrtTBqmPUgWyPm18k/edit) — consolidated source-grounded ideas and historical decisions, but not proof of app implementation. Original local Markdown source archives preserve details.

### 19.2 Competitor terminology researched (official documentation)

| Product/source | Observed patterns | Vellistry decision impact |
|---|---|---|
| [Novelcrafter Codex](https://www.novelcrafter.com/help/docs/codex/the-codex), [Codex types](https://www.novelcrafter.com/help/docs/codex/codex-types), [Write interface](https://www.novelcrafter.com/help/docs/write/the-write-interface) | Codex, Characters, Locations, Subplots, Write, scenes, chapters, manuscript | Familiar object labels; *Codex* is proprietary terminology, not mandatory here |
| [Novelcrafter prompt preview](https://www.novelcrafter.com/help/docs/prompts/prompt-preview), [prompt types](https://www.novelcrafter.com/help/docs/prompts/prompt-types) | Preview, custom prompts, text replacements, scene work | Transparent context preview is already a market precedent, not a claim of Vellistry uniqueness |
| [Sudowrite Story Bible](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/what-is-story-bible/jmWepHcQdJetNrE991fjJC), [Characters](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/characters/a7tdE1ZB8KvAwMD3Mopwpd) | Story Bible, Characters, Character cards, Generate, Rewrite, Outline | Keep simple writer actions while distinguishing generated suggestions and approved state |
| [Dabble manuscript/story separation](https://www.dabblewriter.com/docs/planning-story-notes/how-dabble-organizes-your-story), [Plot Grid](https://www.dabblewriter.com/docs/planning-story-notes/plot-grid-overview) | Manuscript vs Plots vs Characters/Notebook; plot lines vs plot points | Separate published prose, planning and reference content clearly |
| [Reedsy Studio](https://reedsy.com/studio/) | Plan, Draft, Edit, Format, tracked changes, Export, EPUB, print-ready PDF | Conventional phases are clear; don't imply deferred pro publishing exists in MVP |
| [Scrivener overview](https://www.literatureandlatte.com/scrivener/overview) | Manuscript organization, research, composition | Familiar writing tasks matter more than novel branding for every control |
| [NovelAI Lorebook documentation](https://docs.novelai.net/en/text/lorebook/) | Entries and context activation | Context terminology useful in advanced help, not general nav |

These are **documentation-level observations**, not full hands-on usability tests or endorsement of competitor wording. Competitor labels never override author-approved terminology.

### 19.3 UX/content and accessibility guidance

- [Microsoft Writing Style Guide](https://learn.microsoft.com/style-guide/) — clear, direct product writing; [formatting UI instructions](https://learn.microsoft.com/style-guide/procedures-instructions/formatting-text-in-instructions).
- [GOV.UK button guidance](https://design-system.service.gov.uk/components/button/) — verb/action labels, sentence case and explicit destructive actions.
- [GOV.UK error messages](https://design-system.service.gov.uk/components/error-message/) — describe problem and next step without technical jargon.
- [GOV.UK headings](https://design-system.service.gov.uk/styles/headings/) — sentence case and sensible hierarchy.
- [W3C WAI labels](https://www.w3.org/WAI/tutorials/forms/labels/) — explicit control naming.
- [W3C WAI form instructions](https://www.w3.org/WAI/tutorials/forms/instructions/) — placeholders do not substitute for visible labels.
- [WCAG 2.2 understanding error identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) — identify the affected field and problem in text.

### 19.4 Research limitations and confidence

- Direct repository read: **high confidence** for source-level current copy, routes, enums and governance at the stated SHA. This is **not** a live user browser test.
- Figma Make/secondary prototypes: **reported or source-audited historical design evidence**, not independent interactive reevaluation on 2026-10-17. Direct Figma MCP metadata requests for the canonical Design file on 2026-10-17 were blocked by the connected account's Starter-plan tool-call limit; no new screen content was independently retrieved. The repository's Figma handoff, node references and prior walkthrough report were used instead.
- Competitors: **current official docs** checked, not logged-in account walkthroughs; products can change and are not direct user-research validation.
- Actual author vocabulary preference: **not validated** through interviews or task-based naming experiments; `PROPOSED_LABEL` changes require that review where important.
- Runtime hosted Supabase configuration, chapter save, real BYOK costs and AI output: **not verified** by this terminology audit.
- Scope/approval remains governed by accepted project decisions; this candidate does not change the accepted product boundary or authorize code execution.

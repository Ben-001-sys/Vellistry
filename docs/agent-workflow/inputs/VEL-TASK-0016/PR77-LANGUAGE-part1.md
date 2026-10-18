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

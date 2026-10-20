# Task-scoped language excerpts

Exact selected sections from merged LANGUAGE.md at fca0d96; full canonical bytes are preserved in sequential LANGUAGE-PART01–04 snapshots. Selection omits other sections, not source authority.

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



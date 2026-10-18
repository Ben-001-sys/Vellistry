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

# Bounded language source excerpt

Full source remains LANGUAGE.md at main33812f87a896574f245d37793d8d7f74403a2aea, blob 1b8a700218c8f93bfb4ca7972b90c00d03c673c0. Its full69KB exceeds the ContextPack per-source35KB limit. This excerpt preserves scope/status and applicable copy safeguards, not a new language decision.

---
id: VEL-LANG-001
title: Vellistry Product Language, Terminology, and UX Content Standard
type: product-language-standard
status: proposed-owner-review
version: 1.0.2-candidate
created_at: 2026-10-17
updated_at: 2026-10-20
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


---
id: VEL-RES-R04-20261009-002
type: product-scope-research
status: proposed-awaiting-owner-approval
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "docs/features/FEATURE-INVENTORY.md on docs/complete-feature-inventory-v0.1 (PR #9; 396 records including owner-requested live story profiles)"
  - "docs/requirements/PRODUCT-DIRECTION-FROZEN-DEFAULT-GUIDANCE-2026-10-08.md"
  - "docs/requirements/PRODUCT-DIRECTION-LIVE-STORY-PROFILES-2026-10-08.md on PR #9"
  - "docs/research/R04-FIRST-USABLE-RELEASE-SCOPE-OPTIONS-2026-10-08.md on PR #8"
  - "docs/research/R04-FIRST-PILOT-AUTHOR-TRIAL-AND-ACCEPTANCE-PLAN-2026-10-08.md on PR #8"
  - "docs/research/R01-SRC001-USER-INTENT-EXTRACTION.md"
  - "https://www.novelcrafter.com/features"
  - "https://www.novelcrafter.com/features/codex"
  - "https://feedback.sudowrite.com/help/articles/1671191-what-is-story-bible"
  - "https://reedsy.com/studio/"
related_research:
  - R01
  - R02
  - R03
  - R04
  - R05
  - R06
  - R07
  - R08
  - R10
  - R11
  - R12
  - R13
  - R14
  - R15
  - R16
  - R18
  - R19
  - R21
related_adrs:
  - ADR-0003
---

# R04 — One concrete Vellistry MVP proposal (2026-10-09)

**Decision state: PROPOSED ONLY; owner approval is required to adopt this scope.** This is a product-release *hypothesis* derived from the now 396-entry feature catalog and source-approved directions, not a tech-stack selection, roadmap commitment, completed implementation or public availability statement. The GitHub inventory itself retains **UNASSIGNED** release priorities until explicit owner approval and per-feature classification.

## Positioning and primary audience

**Working proposition:** *Vellistry — the author-controlled intelligent writing workspace*. Start as a single-author, desktop-primary browser application for novelists and serialized-fiction writers. A person should be able to draft a real book without any AI service, yet optionally generate or revise text using editable writing guidance and review **visible living story profiles**. Target the primary workflow of **one author, one or more standalone books, multi-chapter novels**, and progression over time; full series collaboration is later.

**What a successful author can accomplish:** Create a book; write substantial chapters; define characters, storylines and current facts; see and manually edit their profiles; optionally request AI-assisted suggestions and profile updates; control which frozen/default and custom writing rules apply; approve/reject all changes; close/reopen safely; export an editable copy and a portable safety backup. This workflow is the proposed minimum coherent value proposition.

**Competitive reality (official sites checked 2026-10-09):** Novelcrafter already advertises automatic Codex tracking/mentions, character progressions, prompt preview, model connections and AI text replacement; Sudowrite's Story Bible already informs writing; Reedsy Studio has writer-focused editing and EPUB/PDF export. Therefore **do not claim profile tracking, rules or book editing are uniquely invented**. Test differentiation in the integration of author-approved story state, visible effective rules and ordinary writing ergonomics, not a misleading feature novelty claim.

## Proposed MVP deliverables — eight connected capabilities

| MVP area | Concrete author-facing functions (scope within the area) | Inventory ID examples | Intent/evidence boundary |
|---|---|---|---|
| **M1 Book organization** | Single-account author; create/open/rename at least one book; chapter list, create/reorder/open chapters; simple book overview, scene or chapter notes; no multi-series graph needed | VEL-FEAT-01-002, 01-004..006, 01-008; 03-001, 03-006 | Author book-writing intent; exact UI proposed |
| **M2 Serious editor** | Tiptap 3/ProseMirror; normal typing with AI off, meaningful paragraphs/headings, bold/italic, basic lists, undo/redo, find, selection, keyboard support, chapter word counts, focus view | 02-001..003, 02-008, 02-013..017, 02-019 | Editor foundation owner-selected; advanced functionality needs real-browser validation |
| **M3 Reliable drafts and portability** | Save indicator, automatic save, reopen and restore recent prior versions, basic account access, delete/export data. Import **TXT and common DOCX content**; export **TXT and straightforward styled DOCX** plus a **machine-readable book backup** covering text and approved profiles/rules; disclose unsupported formatting rather than silently stripping it | 02-018..021; 14-001..003, 14-011..018; 17-001..004, 17-013..015 | Inclusion of basic DOCX is an explicit *analyst MVP proposal* to reduce writer switching friction, not an existing approval or claim of tested fidelity |
| **M4 Live Story Profiles (minimum meaningful slice)** | Visible side panel/tabs for **Characters** and **Storylines/Threads**, with simple current details and manually editable history; add/edit profiles without AI; retain source chapter/story-time reference; **suggest** candidate profile changes after scene/chapter save or accepted AI text, with optional manually initiated analysis; writer edits/accepts/rejects proposed changes. Only approved updates inform later AI requests | 08-004, 08-012, 08-014..015, 08-021..027; 09-010, 09-014, 09-021, 09-024..030 | Direct owner-requested feature. It is *continuous over story development*, not a commitment to per-keystroke calls, invisible recording or automatic truth promotion |
| **M5 Practical Rules Studio** | Preserve **certified** unchanged owner-frozen default guidance (13 domains/130 identified lenses; R01 packaging must first be resolved without modifying source); default-on active configuration; readable domain grouping and search; enable/disable/restore defaults; create/disable custom writing rules; book-vs-workspace scope; applicable-rules preview; explicit creative exception and exclusion behavior | 04-001..010, 04-011, 04-014; 04-020, 04-023; 10-001..003 | Author-directed default behavior; no claim the AR conflict has been solved or all lenses should be pasted into every model call |
| **M6 Optional limited AI writing** | **Continue** at the current cursor/end and **Rewrite selection** as two familiar actions sharing one controlled proposal workflow. Connect **one evaluated provider by BYOK** for the earliest release (provider TBD after R08); if several model variants are eligible, expose only verified supported choices. Show purpose, relevant applied rules/story facts and a cost estimate or cap | 05-006..008, 05-016..018, 06-001..003, 06-008..015 | One verified provider instead of falsely promising universal multi-provider support; selecting the provider is a separate decision |
| **M7 Author review and safe application** | AI suggestions **never** replace text immediately; accept, reject or edit alternative; undo accepted changes; reject or rebase stale proposals safely; record source text, provider/model and effective rules for the request; distinguish an AI-suggested event from approved manuscript/canon | 11-001..002, 11-004..007, 11-009..010, 11-011, 11-014..017 | Tests in jsdom only support a narrow proof of mechanics; browser/editor state and author consent need robust evidence |
| **M8 Baseline security and writing comfort** | Hosted user authentication, account/book isolation, secure API key handling, consent before external AI transfers, delete/export controls, recoverable data, straightforward privacy policy/terms, accessible keyboard controls and responsive reading/writing layout (desktop priority; mobile reading/review when feasible) | 17-001..019; 16-001..009, 16-015..017 | Production release blockers, not optional stretch goals |

**Scope clarification:** The listed IDs are **examples of source correspondence**, not a claim every capability encompassed by a contiguous ID range has been selected. Some subfeatures are deliberately narrowed above. The feature catalog remains unchanged pending approval.

### Specific live-profile interaction contract

- **Human text:** A writer types that Mara breaks her wrist. The manuscript is preserved normally; at the configured scene-save/review boundary (or when invoked manually), Vellistry may propose a character-state update, citing the source passage.
- **AI-generated text:** A rewrite/continuation proposing Mara's broken wrist remains a *candidate*. Before author acceptance it cannot modify established character state. When the author accepts the passage, a **separate proposed profile update** appears for review.
- **Author control:** A writer can edit/approve/dismiss the proposed update, set the correct story-time context, inspect relevant previous state and manually change profile records even with AI disabled.
- **Future context:** Only previously approved, temporally applicable facts and enabled writing guidance are supplied to later AI tasks.
- **Not in this MVP:** Fully automatic extraction at every keystroke, exhaustive knowledge graphs, whole-series causal inference, unsupervised canon updates or purported near-perfect contradiction detection.

### Rules Studio applicability contract

- Preserve the frozen source text and user-approved creative exceptions; don't silently choose between disputed AR variants. **Certified deployable defaults are an R01 release blocker.**
- Disabling a rule must remove that rule as an active instruction from a new request; don't use opaque stale conversation or hidden retained prompts containing it.
- Provide **default domain summaries** and optional detail rather than requiring an author to configure 130 separate checkboxes before writing. Default guidance remains enabled initially.
- The system should visibly show applicable rules and source-approved facts for the selected action; **instruction inclusion does not prove good prose or perfect model obedience**.

## Not included in initial MVP (not deleted from vision)

| Deferred capability | Reason / next research |
|---|---|
| Native layered Cover Studio, image generation and print-wrap composition | Original owner stressed covers; it remains a **deliberate post-MVP priority**, subject to R13 rights/quality/editor research, not an abandoned ambition |
| EPUB, polished reader PDF, production print PDF, full page typesetting and distributor profiles | Requires separate professional layout, font, pagination and validation R11/R12; basic DOCX manuscript exchange is *not* a publishing engine |
| Full graph-based Story Bible, auto-verified continuity/POV firewall, extensive timeline/relationship causality engine | R07 false positives, state authority, author workload and temporal accuracy still unvalidated; ship small **approved** live profiles first |
| Advanced rules profiles, passage-level precedence, exhaustive full-manuscript audits and every proposed writing tool | Keep a simple accurate rules system, two AI actions and manual editorial control; R06/R10/R19 research continues |
| Multiple API providers and robust routing/fallback, external assistant MCP server/client and Canva integration | R08/R09/permissions/service terms and cost; one verified BYOK provider at launch, expandable later |
| Collaboration/co-writing, shared workspaces, deep version branching, complex annotations and paid premium editor extensions | R17 needs author demand and security/fidelity testing |
| Subscriptions, platform AI credits and marketplace payments | Prefer small invite-only/private pilot first; business model research R21 before charging users |
| Full-cover visuals in onboarding | Allow optional static book thumbnail / image upload only if cheap and validated; this must **not** be marketed as a Cover Studio |

**Trade-off:** The initial release will **not** yet be an all-in-one book-production competitor to Reedsy, because it omits professional EPUB/print export. That should be explicit in marketing. No publication quality or AI writing excellence guarantees without tests.

## Proposed surface — one complete writing flow (not an approved UI design)

A straightforward authoring screen can have:
- **Left rail:** Books → Chapters and simple plan/notes.
- **Center:** Full-screen-capable Tiptap manuscript editor, save state, word count, find and selection toolbar.
- **Right panel, collapsible:** Live Character/Storyline Profiles; pending changes requiring review; optional Rules Studio preview.
- **Contextual AI actions:** Continue and Rewrite; clear rules/context preview, proposal comparison, accept/reject/undo.
- **Header/book menu:** Export/backup, privacy and provider connection; no required API configuration to start writing.

This is an interaction hypothesis to user-test, not fixed visual requirements.

## Build/research gates before calling it an MVP

1. **R01 provenance gate:** Pin the genuine frozen default pack without modifying source; resolve the packaging authority issue with explicit owner review.
2. **R02 author evidence:** Run representative author task sessions, including non-AI writers and DOCX migrants; validate expected baseline functionality and tolerance for proposal review load.
3. **R05 editor trial:** Test actual Chromium/Firefox/Edge with realistic chapters, large manuscripts, formatting, keyboard/IME, paste, undo, save conflicts and recovery—not just Tiptap jsdom CI.
4. **R06/R08 AI:** Verify one provider's contracts, data policies, BYOK key safety, budget limits and controlled model response quality. Test disabled-rule exclusion in actual requests and assess voice/canon preservation with human judgment.
5. **R07 live profiles:** Test manual updates, auto-detected candidate changes from human+AI text, multiple characters, uncertain data, retcons, temporal state, wrong extractions and passage provenance. **Zero silent canon changes** in bounded tests.
6. **R11 import/export:** Validate real DOCX/TXT round trips and user-visible fidelity limits. Cross-check backup and recovery.
7. **R14/R15/R16 security/accessibility:** Protect unpublished prose, prevent cross-account leakage, handle deletion/export, safeguard credentials, provide keyboard access and audit recovery.
8. **R19 acceptance:** Set and verify regression gates; **no confirmed silent data loss or unauthorized accepted text/canon changes** in defined trials, with reproducible test results and documented exceptions.

**Illustrative acceptance scenario:** A first-time author creates a book with three chapters, writes and saves meaningful prose without AI; manually builds a character profile, accepts a proposed profile update after a scene; disables a default writing rule; uses a connected provider to rewrite a selected paragraph; rejects one proposal and accepts/undoes another; verifies an unrelated book remains isolated; reloads/recovers and exports a usable DOCX/TXT copy. Run this with multiple writers and failures injected before claiming viability.

## Proposed sequence, without scope creep

**Engineering milestone A:** usable book/chapter editor, durable save/restore/export, manual profiles (AI-off), basic security.  
**Integrated pilot B+:** certified simplified Rules Studio, one evaluated BYOK provider, Continue + Rewrite suggestion review, **author-approved live profile extraction**, request context preview and secure AI flows.  
**Public MVP:** above + real-world author validation, full data safety, model/source/license compliance, DOCX fidelity and release gates. No public release solely because a prototype runs.

**Release dates, price, hosting, frontend framework, backend, database and service topology remain unselected.** Only the previously owner-approved Tiptap 3 editor foundation is binding.

## Owner decision sought

Approve or revise this **one integrated MVP definition**, rather than choosing between vague bundles. If approved, record the explicit scope decision, promote ID-backed selected features into requirements, assign *individual* release priorities with rationales (without changing original owner intents or archiving discarded options), update CURRENT-STATE and begin detailed architecture comparisons. Until then, all 396 catalog release priorities stay UNASSIGNED.

**This document is a proposed product plan based on current recovered sources and official competitor documentation, not a substitute for missing historical artifacts, external user interviews or observed product performance.**

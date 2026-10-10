---
id: VEL-RES-OPTIONB-WAVE06-G10-20261010-001
title: Final six-wave research synthesis, MVP acceptance matrix and design-entry recommendation
type: six-wave-research-closeout-and-gate
status: bounded-research-complete-design-decision-recorded
created_at: 2026-10-10
updated_at: 2026-10-10
author: project-research
version: 1.0.0
sources:
  - docs/plans/OPTION-B-PREDESIGN-RESEARCH-CLOSEOUT-2026-10-10.md
  - docs/plans/OPTION-B-WAVE05-MVP-FINAL-DECISION-2026-10-10.md
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
  - docs/research/MVP-READINESS-GATES-AND-ARCHITECTURE-DECISION-QUESTIONS-2026-10-09.md
  - docs/research/OPTION-B-WAVE06-R18-RELIABILITY-RECOVERY-2026-10-10.md
  - docs/history/2026-10-10-owner-option-b-predesign-selected.md
  - docs/history/2026-10-10-owner-waves-01-03-recommendations-accepted.md
  - docs/history/2026-10-10-owner-byok-free-or-paid-clarification.md
related_research: [R01, R02, R03, R05, R06, R07, R08, R10, R11, R14, R15, R16, R18, R19, R21]
---

# G10 — final research-to-design closeout: MVP evidence versus authority

## New owner instruction and bounded resolution

On **2026-10-10**, the owner asked to finish **both Wave 6 tracks once**, **continue to the next stage** and **choose the final decision within the response** because this is **only an MVP**. This explicitly delegates the *scope/next-stage recommendation choice* after the six-wave dossier, instead of requiring another research question. The delegated decision is recorded transparently in the separate dated owner-delegation event; it is **not** represented as a verbatim quote 'I approve Figma' that the owner did not write.

**Final choice: ACCEPT BOUNDED DESIGN ENTRY, not product implementation.** This is the narrow synthetic-only concept-design Option A that had previously been withheld by Option B pending six-wave research. The newer owner's instruction to choose and advance **supersedes the old hold only for concept design**, not the prohibition on app feature implementation, paid operations, private manuscript uploads or release.

## Consolidated six-wave evidence with limitations

| Wave | Delivered specific evidence | Honest terminal research status |
|---|---|---|
| **1 — authors and source guidance** | 12 public firsthand author signals, ten official comparator scans, 11 journeys mapped; 260 immutable compact/expanded source records, 134 proposed identities (130 expanded-primary, four independent AR compact). Subsequent owner approval of 134-policy defaults | **SECONDARY RESEARCH + SOURCE REVIEW COMPLETE**; real recruited participants NOT RUN, no activated rules |
| **2 — editor and format** | Corrected Chromium **20/20**, multilingual text, 3k-word persistence; limited direct DOCX 12/12 and archive 10/10; Pandoc heading/marks but one empty paragraph lost, Calibre 3 Heading styles -> 0 | **BOUNDED TECHNICAL PASS WITH LOSSES**; native screen reader/IME, arbitrary Word file, real full backup NOT RUN |
| **3 — private manuscript and temporal canon** | Auth/SSR/Storage direct source audit; logged-out JWT residual access risk; session/share-link/draft/deletion simulations; 24 labeled extracted snippets with 6 TP, 10 FP, 4 TN, 4 FN; temporal source/author approval models | **BOUNDED MODEL + RISK INVENTORY COMPLETE**; production session isolation, real LLM accuracy and author review UI NOT RUN |
| **4 — BYOK, terms, legal and operations** | Official provider terms/privacy, local/free/paid cost; owner clarification that writer's API key may be free OR paid; Ghana Act 843 and conditional EU territory, licenses, offsite backup responsibility | **SOURCE REVIEW COMPLETE**; model account terms, actual legal entity/registration/contract, SBOM and operator plan NOT VERIFIED |
| **5 — fiction AI and reversible edits** | Synthetic quality 12/12 test protocol but naïve grader missed viewpoint shift; local reversible state-machine 18/18; previous headless Tiptap 10/10; selected narrow two-action OpenRouter BYOK MVP | **BOUNDED CONTRACT + MVP POLICY SELECTED**; actual external model output/blinded author scoring and real backend CAS NOT RUN |
| **6 — save reliability/recovery** | Prior **real disposable PostgreSQL 12/12** with one-winner concurrency, rollback and separate DB restore; previous local ZIP 10/10; new **20 case synthetic** failure/late ACK/cross-account/account-switch/deletion and DB+objects archive contract added; chosen private pilot 24h RPO / 48h RTO targets | **ONE-PASS SOURCE/CHECKPOINT COMPLETE; NEW CI MUST BE VERIFIED**; integrated Auth/Storage, encrypted offsite restore and timed drill NOT RUN; numeric targets NOT SLA |

## G01–G10 readiness gates — do not conflate research and software release

| Gate | MVP research/design disposition | Implementation/public release obligation |
|---|---|---|
| G01 immutable guidance | Owner-approved future 134-rule identity/default policy; original 260 preserved | Load exact permitted source/hash version; author overrides, per-operation effective context, no disabled-rule leak |
| G02 writer discovery | Public first-person sources researched; **no new Vellistry interviews** | Recruit consenting real fiction writers in design phase and observe unassisted journeys before design signoff |
| G03 editor/browser | Chromium 20/20 bounded test plus known accessible-name gap | Actual Tiptap editor accessibility, native IME/RTL/screen-reader, large-book performance, keyboard tests |
| G04 temporally honest profiles | Story-time and independent canon approval research; false-positive baseline | Authenticated source-linked accepted revision, timeline and staleness handling, author fact approval UI |
| G05 rule/model effectiveness | Scope assembly synthetic tests; **real provider literary performance NOT RUN** | Real lawful pinned BYOK model smoke, author/rule-off adherence eval and disclosure of limitations |
| G06 provider/consent/BYOK | Owner says user-owned keys free OR paid; one OpenRouter curated route family chosen for MVP | Key masking/ephemeral handling, per-endpoint privacy review, no secret in logs, failure/cost disclosures |
| G07 portability | Controlled DOCX semantics and ZIP tests, known Pandoc/Calibre losses | Supported feature/loss warnings, ownership-preserving archive, export/restore complete author state, safe imports |
| G08 privacy/legal | Threat model and Ghana/global legal risk review | Block direct JWT bypass, enforce live session/owner/RLS, Storage/export/delete, DPC/counsel determination, full encrypted restore |
| G09 application architecture | Accepted Next16/Nest11/Supabase/Tiptap, real PG CAS fixture, local browser recovery research | Restrained security transaction+CAS+inference proxy; verify concurrency, idempotency, device/account switches and operator responsibility |
| G10 full acceptance | All 11 end-to-end tasks specified, six wave evidence linked, final small MVP choice | **No complete live integrated 11-journey run**; separate design validation then system and public release acceptance |

## Accepted product specification for the narrow MVP

Retain the owner's accepted **eight product areas**, with **only two optional AI text operations**: Continue at selected chapter insertion point and Rewrite **one contiguous span in one paragraph**. Both return review-only plain-text proposals. User explicitly accepts/rejects; accepted changes require authenticated Nest/Postgres revision CAS and idempotent receipt, with undo implemented as a new persisted revision. No automatic Story Profile promotion, silent chapter overwrite, multi-paragraph AI wholesale replacement, team realtime collaboration or proprietary model quality guarantee. User selects among pinned reviewed OpenRouter model routes and inserts their **own paid OR free BYOK key**, session-only storage for MVP, optional AI OFF. Source library retains 130 expanded-primary enabled catalog defaults plus four independent compact extras OFF, with only relevant author-enabled rules actually transmitted.

## Design entry authorization — scope of the owner's delegated choice

**SELECTED:** Begin **two clearly distinct synthetic-only UI/UX explorations** (the existing design-first governance favors Figma Make/Lovable for contrasting directions), then consolidate the canonical, **editable Figma Design**. **No actual Figma files or screenshots are created by this research.**

- **Direction A — Writing-first:** quiet manuscript center, chapters/sidebar, visible offline/save/conflict/recovery and contextual Story Profiles; model action on explicit selection. Test no-key writing and restoration as the primary path.
- **Direction B — Story-workspace-first:** character/thread board and temporal story map alongside a chapter editor; rule scopes and separate canon suggestions prominent. Test whether switching context can preserve chapter focus.
- **Synthetic-only content:** invented books, characters, test accounts and model output; no real private manuscript, actual API key, original source-text corpus, paid design account or external production Supabase connection in design-generation services.
- **Minimum validation after prototypes:** Recruit consenting actual novelists across manual-first, serial and world-building workflows; observe representative tasks from all 11 journey IDs (including keyboard and privacy/account controls), record success/error/confusion and collect accessibility concerns; compare directions using evidence. **No simulated interviews, ratings or hallucinated findings.**
- **Design signoff:** Owner chooses final design based on editable Figma layers, explicit error/conflict/storage statuses and genuine author data; a mock 'Save successful' label is a visual requirement, not a backend claim.
- **Implementation permission:** **NOT GRANTED** by this design entry. No new Next/Nest/Supabase features, real model requests, paid services or deployment; implementation gate requires owner review of design and an implementation plan addressing required test/security/backup/legal gaps.

## Research closure versus readiness and backlog

**Research waves 1–6 close once** as six bounded evidence packages. No further broad 'repeat research wave' is requested. **Design-entry READY under explicit bounded synthetic conditions; implementation NOT APPROVED; private author beta NOT APPROVED; public launch NOT APPROVED.** Open PR branches are stacked and documents are not necessarily on main: reconcile/merge the governance/documentation stack in correct order before using it as canonical repo source of truth.

**Nonwaivable before a real-user pilot:** private Auth/session/RLS gate including direct PostgREST bypass; scoped Storage and account switch; real persisted CAS and undo, offline recover, actual DB+Storage/Auth/secrets offsite restore; privacy/consent and lawful processor terms; counsel/DPC applicability/retention; a reviewed model route and safe key handling. User discovery belongs in the newly authorized design validation phase, not invented research completion. Keep realistic RPO 24h/RTO 48h as **unverified private pilot targets only**.

**Next stage selected without another owner research loop:** bounded **UI/UX concept and real-author validation**, following the existing design-first project workflow. This is **not** an automatic coding/deployment transition.

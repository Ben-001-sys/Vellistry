# Exact selected accepted decision excerpts

Source mainfca0d96. Metadata and decision/record body excerpts below remain source data; source identities in SOURCE-REFS.json; omitted sections do not grant authority.

## Source: docs/decisions/ADR-0003-use-tiptap-3-prosemirror-for-manuscript-editor.md

---
id: ADR-0003
title: Use Tiptap 3 on ProseMirror as the manuscript editor foundation
type: architecture-decision
status: accepted
created_at: 2026-10-08
updated_at: 2026-10-08
decided_at: 2026-10-08
author: project-research
approved_by: project_owner
version: 1.0.0
sources:
  - "Fiction Writing Project owner confirmation on 2026-10-08: 'okay, we are using it', replying to the specific Tiptap 3 / ProseMirror recommendation; permalink pending archival"
  - "https://tiptap.dev/docs/editor/getting-started/overview"
  - "https://tiptap.dev/docs/editor/getting-started/install/react"
  - "https://github.com/Ben-001-sys/Vellistry/blob/research/r05-editor-license-capability-scan-v0.1/docs/research/R05-MANUSCRIPT-EDITOR-LICENSING-CAPABILITY-SCAN-2026-10-08.md (research branch; drafted before the owner selected the editor)"
evidence:
  - "Owner explicitly accepted Tiptap 3 built on ProseMirror as Vellistry's manuscript editor foundation in the 2026-10-08 Fiction Writing Project conversation."
  - "The preceding recommendation limited acceptance to the open-source editor core, excluding paid conversion/pagination features and all remaining application-stack decisions."
  - "Tiptap's official documentation identifies its headless editor as ProseMirror-based and its open-source editor as MIT-licensed."
  - "Primary original conversation URL not yet archived; record exact owner reply and the preceding technology referent without inventing a permalink."
related_requirements:
  - VEL-REQ-002
related_features: []
related_contracts: []
related_adrs: []
supersedes: []
superseded_by: []
implementation_refs: []
---

## Decision

**Adopt Tiptap major version 3 as the manuscript rich-text editor foundation, using ProseMirror underneath through Tiptap.** This was explicitly selected by the project owner on **2026-10-08**, after the recommendation: “Tiptap 3, built on ProseMirror.” The owner responded, “okay, we are using it.”

The intended editor foundation is the **open-source Tiptap 3 editor and its appropriately licensed dependencies**, not an automatic commitment to the paid Tiptap product suite.

This is a binding **technology choice for the manuscript editing subsystem**, but is **not a claim that an editor has been built, tested or deployed**.

### Explicitly outside this decision

- No selection of React, Next.js, Vue or any overall application frontend framework, despite Tiptap providing integration guides for several.
- No choice of backend, database, authentication, storage, cloud hosting or repository folder structure.
- No purchase or adoption of Tiptap Pro, Pages, Conversion, Tracked Changes, collaboration services or a vendor cloud account.
- No decision about EPUB, DOCX or print-PDF generators, cover design, professional typesetting or a publication pipeline.
- No selection of AI provider, model, API gateway, BYOK design, MCP topology or a rule-evaluation engine.
- No approval of any precise Tiptap 3 patch release or dependency pin until an implementation experiment establishes a supported combination.
- No rewriting, renumbering or selection between disputed versions of the frozen fiction-guidance source.


## Source: docs/decisions/ADR-0004-free-calibre-document-conversion-and-portable-recovery.md

---
id: ADR-0004
title: Use free Calibre conversion with Tiptap manuscripts and independent portable backups
type: architecture-decision
status: accepted
created_at: 2026-10-09
updated_at: 2026-10-09
decided_at: 2026-10-09
author: project-research
approved_by: project_owner
version: 1.0.0
sources:
  - "Fiction Writing Project owner directive 2026-10-09: 'in this project right now and mvp we are not going to using any paying service'"
  - "Fiction Writing Project owner directive 2026-10-09 following Z-Library/Calibre research: 'lets make a definitive decision here'; no explicit named-Calibre quotation, original conversation permalink pending"
  - "docs/requirements/PRODUCT-CONSTRAINT-NO-PAID-SERVICES-2026-10-09.md"
  - "docs/research/R11-ZERO-PAID-OPEN-SOURCE-FORMAT-STACK-2026-10-09.md"
  - "https://manual.calibre-ebook.com/conversion.html"
  - "https://manual.calibre-ebook.com/generated/en/ebook-convert.html"
  - "https://manual.calibre-ebook.com/faq.html"
  - "https://github.com/kovidgoyal/calibre/blob/master/COPYRIGHT"
  - "https://tiptap.dev/docs/editor/core-concepts/persistence"
  - "https://github.com/Stuk/jszip"
  - "https://github.com/w3c/epubcheck"
evidence:
  - "Owner ruled out paying services for the project/MVP, requested free/open-source DOCX/TXT and possible EPUB/other formats and manuscript recovery."
  - "After an explanation of Calibre's no-license-fee modular conversion pipeline and suggested architecture, the owner asked for a definitive decision; this is delegated decision-making within that referent, not a false claim the owner literally said 'I approve Calibre'."
  - "Calibre official documentation confirms ebook-convert CLI, conversion pipeline, and DOCX/EPUB/TXT plus other format handling; upstream COPYRIGHT states GPL-3."
  - "Tiptap official documentation recommends JSON persistence; JSZip provides archive packaging and EPUBCheck provides EPUB conformance checking."
related_requirements:
  - VEL-PRODUCT-CONSTRAINT-20261009-001
  - VEL-PRODUCT-SCOPE-20261009-001
related_features:
  - VEL-FEAT-14-001
related_contracts: []
related_adrs:
  - ADR-0003
supersedes: []
superseded_by: []
implementation_refs: []
---

## Decision

**D1 — Primary free rich-document conversion engine: use the open-source Calibre `ebook-convert` command-line engine, as a separately invoked, resource-bounded converter, for rich-file imports/exports.** Do not embed Calibre into the browser editor or make it the author-data source of truth. The integration boundary should be a small, format-aware adapter with structured output, loss warnings and failure handling; a specific backend/container/queue/hosting product is **not** selected here.

**D2 — Native manuscript format: keep accepted, chapter-associated Tiptap 3/ProseMirror JSON as Vellistry's *editable manuscript serialization and author-facing interchange baseline*.** Convert external files to/from a restricted, schema-validated XHTML/HTML mapping and Tiptap nodes/marks. The editor's chapter JSON is authoritative for authored prose over generated files; the exact durable database/storage engine, synchronization and revision persistence implementation remain separate architecture decisions. Never silently replace accepted content after a partial conversion.

**D3 — TXT direct path: read/write UTF-8 text with explicit BOM and CRLF/LF rules without launching Calibre.** TXT inherently loses rich formatting; disclose this, never invent unapproved chapter structure, and preserve explicit text/paragraph boundaries.

**D4 — Native full-project backup and recovery: choose a versioned manifest + JSON files in a ZIP archive, packaged with the open-source JSZip library (MIT license option).** Snapshot accepted chapter manuscripts, immutable book/chapter IDs and ordering, approved Character/Storyline profiles (including source/story-time state), enabled/disabled author rules and custom rules, schema/version/checksums, and any explicitly authorized assets. Exclude plaintext API keys, access tokens, unapproved AI proposals and sensitive hidden prompts by default. A portable ZIP is a *recovery/export contract*, not a substitute for live durable autosave or version history. Restore into a safe staged preview with identity/authorization checks, integrity validation and explicit author approval.

**D5 — Optional ebook format and validation: select EPUBCheck as the open-source EPUB validation tool whenever EPUB output is experimentally produced or later publicly supported.** Calibre can handle EPUB and many other formats, but broad-format UI promises are **not part of initial MVP acceptance**. Professional EPUB/print remains deferred unless a separate owner-approved scope decision changes that.

**D6 — Keep converter dependencies lean: do not require Tiptap Pro Conversion, any paid SaaS, Mammoth.js, docx.js, Pandoc or LibreOffice in the MVP production path by default.** Keep those free/open-source components as *benchmarks and fallback candidates only* if the selected Calibre route fails a documented essential requirement. In that case record a bounded supplementary decision rather than silently introducing a second production pipeline.

### Explicit contract and scope exclusions

- This does **not** adopt a backend framework, database, infrastructure provider, frontend application framework, authentication library, streaming/job engine, model provider or paid extension.
- Calibre uses GPLv3 and has separately licensed bundled components. Use as an isolated external executable with its copyright notices and relevant obligations; **deployment/distribution/license compliance requires a recorded legal/technical check**. Do not claim that process separation automatically cures every potential copyleft concern. No GPLv3 fee or paid converter subscription is assumed.
- No DRM circumvention, copyrighted third-party library scraping, arbitrary PDF-to-editable-DOCX fidelity or pixel-perfect Word/EPUB guarantees are selected.
- Conversion jobs must not silently send private manuscripts to third parties. Permission-bound local/self-hosted execution is the intended **data-processing boundary**, but its actual deployment is undecided.
- No covert replacement of approved manuscript text, character canon or rules on import, export, restore or failed/retried background jobs.


## Source: docs/decisions/ADR-0007-immutable-compact-expanded-guidance-sources.md

---
id: ADR-0007
title: Preserve compact and expanded fiction guidance as immutable distinct source records
type: architecture-decision
status: accepted
created_at: 2026-10-09
updated_at: 2026-10-09
decided_at: 2026-10-09
author: project-research
approved_by: project_owner
version: 1.0.0
sources:
  - "Fiction Writing Project conversation, 2026-10-09: immediately after P1 was proposed as 'preserve both original versions ... without silently merging, deleting, or replacing either' and 'distinct source identities ... review which version becomes active for each conflicting ID', owner replied 'yes'. Original conversation permalink pending."
  - "docs/research/R01-PAIR-01-OWNER-RULE-PACK-2026-10-09.md"
  - "docs/research/R01-SOURCE-INTEGRITY-AND-AR-VARIANT-AUDIT-2026-10-09.md"
evidence:
  - "The original uploaded fiction guidance was structurally audited as 13 domains, 130 distinct lens codes and 260 total compact/expanded headings."
  - "Thirteen titles diverge, including materially different AR-04 and AR-09 subjects; simple ID or title deduplication would conflate separate original instructions."
  - "The owner's affirmative 'yes' explicitly approves P1's non-destructive preservation policy, not a choice of active default mapping."
related_requirements:
  - VEL-REQ-001
  - VEL-PRODUCT-SCOPE-20261009-001
related_features: []
related_contracts: []
related_adrs: []
supersedes: []
superseded_by: []
implementation_refs:
  - scripts/r01_manifest.py
  - tests/test_r01_manifest.py
---

## Decision

**P1 is accepted as the preservation and source-identity policy.**

1. Preserve the **compact** and **expanded** source records as separate, immutable, faithfully quoted provenance entries for **every** lens code, including the 117 with case-insensitively matching titles; never assume matching titles imply identical full bodies.
2. Identify each entry by **(raw_source_sha256, variant, printed_code)**, with `variant` explicitly `compact` or `expanded`. The shared printed code alone is **not** a storage, rule-toggle, audit, or AI context identity.
3. Retain the exact original wording, source file fingerprint and line/location. Subsequent interpretations, commentary, canonical display names and author-custom rules must be **separate, versioned derivatives**, never in-place edits of the frozen source.
4. If a future Rules Studio exposes an active/default rule, it must refer to an **explicit, owner-approved versioned mapping** to the frozen original. Enabled/disabled state and per-book overrides are separate author configuration, not mutations of original rules. Effective AI instruction snapshots must identify precisely which approved source variants were used.
5. Conflicting compact and expanded meanings—including AR-04 and AR-09—are **not** automatically reconciled, prioritized, combined or re-coded. Until reviewed, both remain preserved and unresolved.

This decision is a **data-preservation policy**, not approval of the actual 130 active default mappings or certification that the deployable Rules Studio source package is complete.


## Source: docs/plans/OPTION-B-WAVE05-MVP-FINAL-DECISION-2026-10-10.md

---
id: VEL-DECISION-WAVE05-MVP-20261010-001
title: Final MVP scope choice — two optional BYOK AI actions and revision-safe author control
type: owner-directed-product-scope-decision
status: selected-for-mvp-design-specification-not-implemented
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 1.0.0
sources:
  - "Owner 2026-10-10 message: complete both Wave 5 tracks in one response, move on and choose final MVP decision"
  - docs/history/2026-10-10-owner-byok-free-or-paid-clarification.md
  - docs/history/2026-10-10-owner-waves-01-03-recommendations-accepted.md
  - docs/research/OPTION-B-WAVE05-R19-R06-AI-QUALITY-AND-RULES-2026-10-10.md
  - docs/research/OPTION-B-WAVE05-R10-REVERSIBLE-AUTHOR-EDIT-2026-10-10.md
related_research: [R06, R10, R19, R21]
---

## Decision authority and scope

The owner requested: **'these are only going to be done once, no back and forth again do all the research you will need in one response and that is we continue to the next stage and land on a final decision in one response, choose this is just an MVP for now.'** The following is the assistant's **single scoped MVP selection under that delegation**, rather than an invented prior owner endorsement of a specific provider, a design-entry approval or production sign-off.

**Selected MVP behavior:** Vellistry is **manual-first and author-controlled**, with precisely **two optional AI text actions**: **Continue** a chapter at an insertion point and **Rewrite** one contiguous selected span. The user must explicitly generate and explicitly **Accept** or **Reject** a visible suggestion; if no AI key is connected, writing, Story Profiles, rules, chapter save and export remain available. Generated Story Profile facts are never accepted automatically.

### Binding product behavior chosen for MVP

| Dimension | Chosen MVP decision | Out of scope or condition |
|---|---|---|
| Provider and model menu | First adapter: **OpenRouter**, exposing a small curated/pinned list of supported actual downstream models/providers; architecture leaves room for other direct providers later | No mandatory default model, automatic router fallback or promise every model exists in every country; real provider policy check required before enabled route |
| Billing/key | **User BYOK**, credentials may be **free OR paid**; user pays own provider's bill | Vellistry pays no API charges, no free-only ban, no integrated platform subscription/billing |
| Key custody | **Session-only in-memory masked API key**; HTTPS transport to Nest inference proxy on user-initiated action; never store raw key in database, LocalStorage or analytics in MVP | Author must reenter after reload/session end; do not misrepresent server/proxy as unable to view plaintext key on each authorized inference request |
| Consent and request | Exact chosen excerpt and approved book-specific context, selected effective rules, provider/model, costs/limits/recipient disclosed before author-invoked generation | No silent entire-book upload, hidden cross-book context, unreviewed external fallback |
| Rules | Owner-approved **134 logical aliases**, 130 expanded catalog defaults ON, four compact extras OFF; only **task-relevant enabled subset** reaches request | Never inject 130 full expanded pages on every request; author overrides win and remain visible |
| AI outputs | **Plain-text review-only**; original-vs-proposal diff, errors/cancel leave accepted manuscript untouched | No HTML execution, auto-overwrite, autonomous novel writing, model edit tools or high-confidence quality claims |
| Revision acceptance | **Server-transactional chapter CAS** on actor/book/chapter/revision/document/selection; idempotent acceptance; immutable before/after snapshots | Reject stale, wrong-owner, incomplete-stream and repeated conflicting decisions; no silent rebase |
| Undo | History-backed **compensating new revision** after reload, only if accepted proposal is still latest; else require explicit conflict recovery | Do not let undo erase later author edits; no unlimited arbitrary inverse transforms |
| Rich text boundaries | Tiptap 3 manual editor; AI **Rewrite one contiguous text span within one paragraph**; Continue inserts at an author-selected point | Multi-block rich-mark AI transforms, automatic chapter restructure and collaborative editing deferred |
| Canon | Story Profiles manual-first; optional AI suggestions require distinct source-linked factual approval | Accepting prose never updates canon by itself |
| Scope of quality | No invented quality scores. Output is labeled a draft suggestion; route-level synthetic smoke before enabled real-model release | External real model and human scores **NOT RUN**, cannot promise voice preservation/hallucination-free result |


## Source: docs/history/2026-10-10-owner-byok-free-or-paid-clarification.md

---
id: HIS-20261010-003
title: Owner clarifies user-funded BYOK access across free and paid AI models
type: historical-event
status: recorded
occurred_on: 2026-10-10
recorded_on: 2026-10-10
time_precision: day
created_at: 2026-10-10
updated_at: 2026-10-10
author: project-research
actor: project_owner
version: 1.0.0
sources:
  - "Fiction Writing Project conversation, 2026-10-10: owner explicitly clarifies Vellistry supplies selectable AI model options and a place for users to enter their own API key, without restricting those keys to free or paid tiers. No conversation permalink archived."
  - "docs/research/OPTION-B-WAVE04-R08-R21-PROVIDER-PRIVACY-COST-2026-10-10.md"
  - "docs/requirements/PRODUCT-CONSTRAINT-NO-PAID-SERVICES-2026-10-09.md"
evidence:
  - "Exact owner wording: And also remember we are providing the AI models, we are providing a place where they place the AI API key so we don't care whether the API key they was a paid or free"
  - "User-owned BYOK free or paid eligibility is independent from Vellistry's no-mandatory-paid-services requirement for core AI-off functionality."
related_adrs: []
related_requirements:
  - VEL-PRODUCT-CONSTRAINT-20261009-001
related_events:
  - HIS-20261010-001
  - HIS-20261010-002
corrects: []
corrected_by: []
commit_refs: []
---

# Owner clarification — curated model choices and user-supplied API keys

## Owner's instruction

> And also remember we are providing the AI models, we are providing a place where they place the AI API key so we don't care whether the API key they was a paid or free

**Interpreted product requirement:** Vellistry presents supported AI model/provider choices and an API-key entry/configuration interface. Each writer supplies a credential for the chosen provider, using either the provider's **free** or **paid** plan. Vellistry does not reject a working key based on whether it is attached to free or paid billing. The user—not Vellistry's operator—is responsible for the account/provider's usage charges and contract, unless a separate future commercial agreement explicitly changes that relationship.

**This means Vellistry supplies selectable integration options, not that it owns the underlying model, guarantees free model access, or hosts every model.** Model compatibility, availability, context limit, region, rate limits and terms are independent of key price tier. The same model can have different limits or processing policies by account/plan.

## Requirements that this clarification changes

- The earlier research preference for only free cloud APIs or a local Ollama-first path is **not a product exclusion**. Local inference can remain an option, but supported paid provider models are equally eligible for the model menu where integrations are technically and legally appropriate.
- The earlier research phrase 'zero spending cap' or 'do not allow a fee-bearing provider' applies to **Vellistry spending its own funds without authorization**, not a ban on the user's separately billed provider key. Do not automatically impose a zero-dollar limit on all user-owned AI requests.
- Model/provider picker and BYOK entry must be linked: show connection status and model availability, allow replacing/removing a key, and handle invalid/expired credentials, 401/403, 429, network failure and unsupported model without modifying a manuscript.
- API keys are secrets. Protect credentials in a reviewed storage/transport design, mask in interface, never expose in logs, Git, analytics or other users' sessions, and provide disconnect/revoke guidance. Do not assume that BYOK prevents provider or Vellistry processing of selected text.
- Privacy notices/consent, manuscript-context preview, explicit author-initiated AI calls, user control of generated prose and Story Profile canon, and no hidden fallback remain required **regardless of whether the user's API key is paid or free**. Pricing notices can clarify that provider billing is external, but Vellistry should not require a specific free-tier plan.

## Boundaries unchanged

- **No mandatory paid service for the core application:** Writers may create books, write manually, save/export and manage their own story notes without any AI API credential. This constraint does not mean that a writer cannot voluntarily use a paid API with their own account.
- No Vellistry-funded credits, paid service purchase, universal provider selection, actual credential handling implementation, production inference, legal/privacy certification or product deployment is authorized by the owner's clarification.
- The original Option B research-before-prototype gate remains. This decision updates the **research/product requirements and Wave 5 evaluation scope only**. It does not authorize new Figma, Lovable, production coding or deployment.

**Current status:** Accepted owner product clarification, recorded as source-traced history; feature unimplemented. Future Wave 5 model evaluation should cover supported free AND paid user-supplied credentials where lawfully available, with honest BLOCKED status if credentials cannot be provided without violating current project constraints.



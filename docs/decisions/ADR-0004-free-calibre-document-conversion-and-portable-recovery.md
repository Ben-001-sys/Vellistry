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

# ADR-0004 — Free rich-format conversion, native manuscripts and portable recovery

## Context and problem statement

Vellistry has an owner-approved writing-first MVP in which a serious Tiptap 3 fiction editor must support **basic editable DOCX and UTF-8 TXT exchange**, durable save/restore and independently portable complete project backup. EPUB and other wide-format conversion are valuable research opportunities, but **professional EPUB/publishing/print is deferred from the first MVP**. The owner expressly forbids paid services for the current project and MVP. The preceding R11 research compared Tiptap Pro, Mammoth.js, docx.js, Pandoc, LibreOffice, Calibre and archive tooling. The owner then asked for a definitive selection after a Calibre-oriented explanation.

The decision must avoid both paid conversion services and the false implication that a DOCX, TXT or EPUB file can recreate a book's approved story canon, rules and revision history.

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

## Alternatives considered

1. **Mammoth + docx.js as primary JS-only pipeline:** permissive licenses, convenient editor adjacency and limited DOCX scope; requires custom bidirectional node/style mapping and separate toolchains for EPUB/FB2/AZW3. Useful fallback, not the selected primary converter.
2. **Pandoc as primary universal converter:** excellent semantic DOCX/EPUB/Markdown/ODT handling, GPL-2.0-or-later; narrower ebook format catalog than Calibre. Valid comparison candidate but no second default production engine.
3. **LibreOffice headless as primary:** free DOCX/ODT/PDF conversions, relatively heavy multi-process office machinery and separate isolation needs; useful independent compatibility verifier.
4. **Paid Tiptap DOCX/Conversion:** expressly rejected under current owner no-paid-services rule (and Tiptap DOCX import requires cloud processing).
5. **Calibre-only for all content, including in-session state and backups:** rejected: ebook formats lack Vellistry-specific approved canon, active rules, versioned accepted revisions and safe recovery.
6. **TXT-only / JSON-only:** insufficient for owner-approved editable DOCX interchange.

## Rationale

- Calibre officially exposes one no-subscription, cross-format `ebook-convert` engine and a modular **input plugin -> intermediate XHTML -> transforms -> output plugin** pipeline; it supports DOCX, EPUB, TXT and many other formats. This matches the owner's interest in a wide-format, Z-Library-like conversion experience **without claiming that Z-Library itself uses Calibre**.
- Only one rich-format conversion runtime is initially required, avoiding competing word-processing conversion stacks.
- Tiptap's recommended JSON persistence is better suited to faithful editor state, while versioned ZIP backup is needed for **whole-book recovery** and can be independently inspected.
- A direct TXT path is deterministic and avoids Calibre's potentially surprising TXT chapter/format heuristics.
- Offline/self-hosted processing can avoid document upload to third-party conversion SaaS, but author manuscript trust still depends on later security and operations controls.

## Consequences and trade-offs

- **Selected software does not cost licensing/subscription fees** for the intended free use, but compute, hosting, maintenance and developer effort still cost resources.
- Calibre is a sizeable dependency with GPLv3 obligations; any deployed converter must run behind resource/security controls and pass a license/redistribution assessment.
- No converter is lossless for every Word style, footnote, tracked edit, complex table, image, PDF or malformed EPUB. Author-visible loss reports and restore/cancel behavior are required; original text must not silently disappear.
- Authors should see separate controls for `Import document`, `Export manuscript` and `Download complete Vellistry backup`. The last option must be independently restorable.
- Optional EPUB, FB2, ODT, AZW3 and similar formats may be investigated now, but no new public MVP promise or paid infrastructure follows from their presence in Calibre.
- If tests show that Calibre cannot satisfy ordinary MVP DOCX fidelity, document evidence and propose an explicit **narrow fallback** (e.g. Mammoth/docx.js) rather than reinterpreting this accepted decision as a tested success.

## Evidence and verification limits

**Primary factual sources checked 2026-10-09:**
- Calibre modular pipeline https://manual.calibre-ebook.com/conversion.html
- Calibre CLI https://manual.calibre-ebook.com/generated/en/ebook-convert.html
- Calibre conversion format matrix, PDF limitations https://manual.calibre-ebook.com/faq.html
- Calibre license https://github.com/kovidgoyal/calibre/blob/master/COPYRIGHT
- Tiptap JSON persistence https://tiptap.dev/docs/editor/core-concepts/persistence
- JSZip dual MIT/GPL license and ZIP capability https://github.com/Stuk/jszip
- EPUBCheck BSD3 and format conformance https://github.com/w3c/epubcheck

**Approval provenance:** The owner previously imposed a strict zero-paid-service requirement and on 2026-10-09 asked **“lets make a definitive decision here”** directly after the Calibre-focused comparison. The assistant has exercised that requested decision by selecting Calibre as the primary format engine. **The owner did not provide the literal sentence “I approve Calibre”; do not fabricate one.** The primary chat permalink is not yet recorded. Owner GitHub PR self-review/merge remains separate from this in-chat technology selection.

**Unverified, not to misstate as done:** No converter or secure job runner is implemented, DOCX round trip is not tested, Calibre binary version is not pinned, ZIP backup/restore is not executed, EPUBCheck has not been run on Vellistry-generated EPUB, license/redistribution is not fully cleared, and author data security and real-user ergonomics are not demonstrated. R11 research tickets/acceptance gates remain open.

### Falsifiable first experiments and release gates

1. Pin a current compatible Calibre binary and record actual GPL distribution and dependency obligations, engine options, checksums and isolation boundary.
2. Run original synthetic 3-chapter DOCX -> Calibre XHTML/OEB -> safe Tiptap JSON -> HTML -> Calibre DOCX -> independent editor reopen -> Calibre reimport. Diff Unicode text, chapter identity, semantic headings/marks and notes. **Zero silent substantive text loss** is required; unsupported formatting must produce visible warnings.
3. Run native TXT UTF-8 BOM/CRLF/Unicode round-trip and deliberate bad-encoding rejection; no phantom chapters or text rewrite.
4. Build a disposable 2-book ZIP containing versions/approved profiles/rules, perform restore into an isolated clean environment, verify checksums, book separation, no leaking credentials and no unapproved canon promotion.
5. Run hostile/corrupt/large ZIP/OOXML/EPUB test cases with hard decompression/file-size/time/memory/network and path-traversal limits; a failure must not mutate an existing project.
6. As **optional post-MVP** evidence, generate EPUB from synthetic chapters with Calibre, validate with EPUBCheck and an independent reader, and separately test EPUB import fidelity.
7. Record observed performance, formatting-loss matrix, privacy outcome and author usability; decide numerical baselines from measurements, not assumptions.

**Go/no-go:** Selection of this free technology stack is **ACCEPTED**; implementation, deployed service, fidelity and release readiness are **NOT VERIFIED**. The strict no-paid-services rule remains binding. No development beyond safe research is authorized by this ADR alone.

## Implementation status

**Not implemented; accepted design direction.** The next engineering activity is a bounded, synthetic, zero-paid-service R11 experiment, not a public converter launch. The exact executable/package pins, service topology and persistence engine require their own implementation record and security checks.

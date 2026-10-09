---
id: VEL-RES-R11-20261009-002
type: research-finding
status: research-documented-proposed-tests-not-run
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "docs/requirements/PRODUCT-CONSTRAINT-NO-PAID-SERVICES-2026-10-09.md"
  - "docs/research/R11-MANUSCRIPT-PORTABILITY-CONVERTER-OPTIONS-2026-10-09.md"
  - "docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md on PR #10"
  - "https://github.com/mwilliamson/mammoth.js"
  - "https://github.com/mwilliamson/mammoth.js/blob/master/NEWS"
  - "https://github.com/dolanmiu/docx/blob/master/LICENSE"
  - "https://github.com/Stuk/jszip"
  - "https://pandoc.org/MANUAL.html"
  - "https://github.com/jgm/pandoc/blob/main/COPYRIGHT"
  - "https://www.libreoffice.org/licenses/"
  - "https://help.libreoffice.org/latest/en-US/text/shared/01/01070002.html"
  - "https://github.com/w3c/epubcheck"
  - "https://tiptap.dev/docs/editor/api/utilities/html"
  - "https://github.com/aerkalov/ebooklib"
related_research:
  - R05
  - R08
  - R11
  - R14
  - R15
  - R16
  - R19
related_adrs:
  - ADR-0003
related_requirements:
  - VEL-PRODUCT-CONSTRAINT-20261009-001
  - VEL-PRODUCT-SCOPE-20261009-001
---

# R11 — Zero-paid-service open-source DOCX, TXT, EPUB and recoverable project research

**Researched 2026-10-09.** This note supersedes the paid-vendor comparison as a **candidate-selection constraint**, while retaining the older comparison as historic research. Findings below rely on primary project documentation/licenses; **no format round-trip, package security test or restore experiment has been executed** in this work. No converter, implementation framework or runtime architecture is accepted.

## 1. In-scope product and extended research

The already-approved M3 MVP covers safe ordinary DOCX and TXT document exchange plus a **complete recoverable book backup** (manuscript, chapters, approved Character/Storyline profiles, active author rules). The owner's additional request allows researching EPUB, HTML, Markdown, ODT and other open formats. **Professional EPUB layout and print distribution remain post-MVP**. Never portray optional EPUB experimentation as an automatic change to M3.

**Hard exclusion:** no paid product/license dependency, Tiptap Pro DOCX extension, metered cloud conversion endpoint or vendor trial whose continued function requires subscription. Open-source licensing is acceptable only after exact installed versions/dependencies are checked. Runtime hosting/compute still has real operating cost.

## 2. Checked free software: fit, exact license and limitations

| Candidate and verified source | Inputs / outputs | License | Fit and caveats |
|---|---|---|---|
| **Mammoth.js** — https://github.com/mwilliamson/mammoth.js | Reads DOCX -> *semantic HTML* or raw text; no DOCX writer | BSD-2-Clause | Good for prose, headings, italics, bold, lists, links, images and some notes. Not Word-layout fidelity; output HTML is **not sanitized**, comments may need explicit mapping, and DOCX documents may use unsupported styles. Upstream NEWS documents a DoS fix in 1.12.3; use pinned current patched release with timeout/isolation. |
| **docx.js** — https://github.com/dolanmiu/docx and LICENSE | JS/TS constructs and exports editable DOCX; **not** generic DOCX importer | MIT | Good browser/JS-centric output; requires explicit Tiptap JSON -> supported Word nodes/marks mapping and fidelity warnings. |
| **Pandoc** — https://pandoc.org/MANUAL.html and COPYRIGHT | Bidirectional DOCX, EPUB, HTML, Markdown and ODT (see exact format matrix at runtime); produces structured output via AST | GPL-2.0-or-later | Strong general **self-hosted executable** contender with no paid conversion endpoint. Less expressive intermediate format loses layout/complex styles; not directly an in-browser JS import plugin; use independently sandboxed worker and account for GPL obligations. |
| **LibreOffice** — https://www.libreoffice.org/licenses/ and official Writer export guide | Opens/writes DOCX/ODT/TXT/HTML; EPUB export; other file filters; CLI `soffice --convert-to` | Primarily MPL-2.0, bundled third-party licenses | Good optional compatibility/reference engine or self-hosted isolated converter. Large runtime and concurrency/security operational cost; does **not** alone recover Vellistry project state. EPUB **export** confirmed, but do not assume symmetrical EPUB editing/import without tests. |
| **JSZip** — https://github.com/Stuk/jszip | Read/write ZIP archive with arbitrary JSON/text/files | Dual MIT or GPLv3, MIT permissible | Good structured project export/restore container, **not** autosave/version history or sync by itself. Validate ZIP entry paths, quotas, checksum and schema before restore. |
| **EPUBCheck** — https://github.com/w3c/epubcheck | EPUB 2/3 validation, no conversion | BSD-3-Clause | Independent, free conformance gate, not a PDF/EPUB writer, and passing validation does not prove good book typography. |
| **Tiptap 3 Editor Core** — https://github.com/ueberdosis/tiptap and HTML utilities | Editor JSON <-> HTML with an explicit extension schema | MIT editor core | Already selected as editor engine; serialization does not guarantee DOCX/EPUB fidelity. `generateHTML`/`generateJSON` support only configured schema. |
| **EbookLib** — https://github.com/aerkalov/ebooklib | Python EPUB read/write | AGPL-3.0-or-later | Technically capable but **not preferred** for an otherwise proprietary hosted MVP without a deliberate AGPL network-copyleft/compliance review. No paid fee does not mean license obligations disappear. |
| **Calibre / ebook-convert** — https://github.com/kovidgoyal/calibre | Wide e-book conversion ecosystem incl. EPUB and DOCX | GPLv3, heterogeneous bundled components | Useful **optional independent local test tool**, but heavier than required for the core app and entails GPL/container-maintenance review. |

**License nuance:** GPL/AGPL software can be free of charge while still having source-distribution or network-use obligations. Do not assume invoking a standalone command makes every licensing question disappear; inspect actual deployment/distribution and consult legal review when needed. Conversely, MIT/BSD/MPL still require notices and version/dependency checking.

## 3. Proposed format matrix (CAPABILITY SOURCE != VELLISTRY-TESTED)

| Format | Free import candidates | Free export candidates | Proposed MVP status |
|---|---|---|---|
| **DOCX** | Mammoth -> sanitized semantic HTML -> Tiptap schema; alternatively isolated Pandoc or LibreOffice | docx.js explicit mapper; alternatively Pandoc or LibreOffice | **Required** basic editable prose exchange; round-trip **NOT_RUN** |
| **TXT UTF-8** | Built-in UTF-8 decoder with BOM/CRLF policy; detect/refuse unsupported encodings | Built-in text encode/download plus explicit chapter separators | **Required**; implement and test first |
| **Project backup (.zip)** | JSZip validation + manifest parsing + migrations | JSZip with schema-versioned manifest, chapters, profiles, rules | **Required** for recoverability; schema **PROPOSED**, not approved |
| **HTML** | Sanitization + Tiptap HTML/JSON schema conversion; optional Pandoc | Tiptap HTML renderer or Pandoc | Optional interchange; sanitize/script safety |
| **Markdown (.md)** | Pandoc Markdown reader (or audited parser) | Pandoc Markdown output / audited renderer | Useful optional text-first portability; syntax/format loss possible |
| **EPUB 2/3 (DRM-free)** | Pandoc EPUB reader with unpack/source safety (Calibre as validation comparator) | Pandoc EPUB 3 writer; LibreOffice Writer EPUB export | **Research option/post-MVP publishing**, not assumed M3 requirement |
| **ODT** | Pandoc / LibreOffice document readers | Pandoc ODT / LibreOffice Writer | Optional cross-editor migration |
| **RTF / older DOC** | Consider separate isolated LibreOffice import filters only after demand | LibreOffice-compatible simple document export | Optional; dangerous legacy parser surface demands caution |
| **PDF** | **No promise of editable manuscript import** | LibreOffice can create a reading PDF; Pandoc with suitable engine | **Not print-ready PDF production** and not a recovery archive |

**EPUB content rights:** Do not import DRM-protected or third-party copyrighted content without rights. No DRM bypass is proposed. EPUB is an archive of XHTML/assets; chapter/spine/navigation and encoding fidelity must be measured. EPUBCheck validates format correctness, not textual semantic fidelity.

## 4. Two architecture-neutral routes to evaluate

### Route A — JavaScript-first, limited MVP
```
DOCX -> pinned Mammoth -> semantic HTML -> strict sanitization
     -> configured Tiptap 3 schema validation -> preview + loss report
     -> user confirms import -> accepted manuscript chapter revisions

Tiptap JSON chapters -> explicit supported-node mapping -> docx.js -> DOCX
                     -> Unicode/plain text serialization -> TXT

Accepted project snapshot -> versioned manifest + chapter JSON
                         + approved character/storyline profiles
                         + active author rules (excluding keys)
                         -> hash and ZIP via JSZip -> author backup
```
Benefits: no conversion service, no subscription, works in a JS stack; potentially browser-side but that must be validated. Costs: custom conversion adapters, Word fidelity coverage, parser/sanitizer maintenance, security and backup design. **This is a leading synthetic experiment, not an implementation selection.**

### Route B — Self-hosted multi-format conversion worker
```
DOCX / HTML / Markdown / EPUB / ODT -> bounded Pandoc worker
                                     -> normalized semantic representation
                                     -> schema validation / Tiptap 3
                                     -> explicit warnings and author review

Validated manuscript HTML/Markdown -> bounded Pandoc
                                   -> DOCX / EPUB 3 / ODT / HTML

Optional reference: LibreOffice independently opens DOCX outputs,
exports comparison EPUB, or exercises legacy format conversion.
EPUBCheck validates any resulting EPUB.
```
Benefits: much wider format reach from one **free** utility. Costs: nontrivial GPL/license assessment, binary deployment footprint, risk from hostile documents, no guarantee of Word layout fidelity. **Do not run uploaded files through a privileged long-lived office process.**

### Recommendation to trial, not yet adopt
Use **Route A** for essential DOCX/TXT + JSON/ZIP backup mechanics, because it most directly integrates with the selected Tiptap editor and can avoid extra conversion-service infrastructure. Evaluate **Route B/Pandoc** in parallel for EPUB/ODT/Markdown and as an independent DOCX quality comparator. Consider LibreOffice primarily for compatibility verification or fallback when its resource/worker risks are justified. Do not select EPUB/print publishing features ahead of owner-approved scope.

## 5. Recovery is a separate product feature, not an output-format checkbox

**Proposed portable manifest** (not a selected database/storage schema):
```text
book.vellistry.zip
  manifest.json            # schema version, book identity, created time, file checksums
  books/<book-id>/index.json
  books/<book-id>/chapters/<chapter-id>.json  # accepted Tiptap manuscript
  books/<book-id>/revisions/...               # recovery points if included by contract
  books/<book-id>/profiles/characters.json    # approved state only by default
  books/<book-id>/profiles/storylines.json
  books/<book-id>/rules/active-config.json     # author settings and custom rules
  assets/...                                   # only exported safe, referenced assets
```
Treat that layout as an **illustrative portability spec**. In particular, the archive alone does not provide automatic save during a writing session.

Require: schema-versioned serialization, consistent snapshot across chapters/profiles/rules, immutable chapter/book identifiers, checksums, bounded archive extraction, optional encryption design subject to user UX, explicit restore preview, no silent replacement of another book, and independent restore from a clean account/device. Exclude BYOK plaintext keys, access tokens, unsupported hidden prompts and unapproved AI proposals by default. Recovery features also need durable save acknowledgments, retry, checkpoints and corruption tests that the selected storage architecture must later support.

**Always test**: archive -> offline/local fixture -> complete rehydrate -> text/format/profile/rules comparison. A DOCX can carry manuscript prose but cannot prove story-profile and rule-state recovery.

## 6. Security and fidelity acceptance gates

- Only synthetic or expressly licensed test files until import and consent boundaries are reviewed. ZIP/OOXML/EPUB are untrusted archives; enforce size and decompressed-size limits, file entry quotas, path traversal denial and time/memory limits.
- Mammoth emits unsanitized HTML. Sanitize **before** DOM insertion or editor import, and validate against the actual enabled Tiptap node/mark set; never assume a rich-text schema automatically removes all threats.
- For isolated converter/office processes: no network access unless explicitly essential, dedicated temporary directory/low privileges, no other users' files, resource caps, cancellation timeout and secure cleanup.
- For conversion warnings: record unknown styles/marks, footnotes, comments, inline images, links, tracked revisions, unexpected chapter boundaries and unrecognized EPUB sections; do not report false success. Preserve/import original source only under a separately accepted privacy/data-retention policy.
- For EPUB: generate non-DRM synthetic text and metadata; validate EPUBCheck and at least one independent reader; EPUBCheck PASS is not sufficient for correct text/TOC/reading order.
- For backup: never overwrite accepted manuscript or canon on a failed/partial import, simulated crash or archive corruption. Require explicit author approval before adopting restored state.
- **No test outcomes yet:** Source-supported capabilities are not measured Vellistry capabilities. No license lockfile audit, system benchmark, paid subscription, provider/model test, genuine author study, E2E ZIP restore or acceptance threshold has been passed by this research.

## 7. First executable experiments — all NOT_RUN

| ID | Exact bounded research task | Proposed pass/fail evidence |
|---|---|---|
| ZR11-01 | UTF-8 TXT with BOM, CRLF, Unicode scene separators, 3 chapters | Codepoint preservation, explicit normalize/warning ledger |
| ZR11-02 | DOCX with Heading 1/2, dialogue, italics/bold and scene break -> Mammoth -> Tiptap | Before/after paragraphs, marks, warning codes and independent text compare |
| ZR11-03 | Tiptap synthetic chapter JSON -> docx.js -> read back with Mammoth | Text, heading/mark and paragraph diffs; test at least two authorship formats |
| ZR11-04 | Same DOCX through isolated Pandoc -> Tiptap and back to DOCX | Exact binary version/license, visible semantic/fidelity differences |
| ZR11-05 | Multi-chapter HTML/Markdown -> Pandoc EPUB3 -> EPUBCheck -> Pandoc reimport | EPUB validation, spine/TOC/paragraph identity, loss report |
| ZR11-06 | Word/LibreOffice-produced DOCX output opened and edited in both applications | Independent editability and supported-style findings |
| ZR11-07 | Mixed-mode book backup with approved/unapproved profile proposals, 2 books and book-scoped rule exclusions | ZIP integrity, safe restore, identity isolation, no secret leakage/no unapproved canon |
| ZR11-08 | Corrupt/oversized archives, interrupted import/export, unsupported schema and duplicate IDs | Bounded rejection, intact original manuscript, explicit error/reporting |

**Status all rows:** `NOT_RUN`. Promotion to a converter selection or release claim requires exact dependency/license pins, repeatable outputs, source/target hashes, security review and explicit owner signoff. Owner-approved M3 remains in force; optional EPUB is not automatically part of the initial MVP.

## 8. Related R08 constraint requiring separate decision

Owner has said **no paid services for the MVP**. The existing M6 scope language includes optional BYOK model access. If a selected LLM API charges usage fees, that conflicts with the newer constraint; R08 must separately compare truly free model execution/options and reconcile the requirement rather than assuming an API key is free. This R11 document does not choose a model or modify the M6 accepted scope.

## 9. Primary source URLs checked 2026-10-09

- Mammoth capabilities, BSD-2-Clause, unsanitized HTML: https://github.com/mwilliamson/mammoth.js/blob/master/README.md and https://github.com/mwilliamson/mammoth.js/blob/master/NEWS
- docx.js writer API and MIT license: https://github.com/dolanmiu/docx and https://github.com/dolanmiu/docx/blob/master/LICENSE
- Tiptap core MIT and HTML conversion: https://github.com/ueberdosis/tiptap and https://tiptap.dev/docs/editor/api/utilities/html
- Pandoc supported input/output formats, loss limits, GPL: https://pandoc.org/MANUAL.html and https://github.com/jgm/pandoc/blob/main/COPYRIGHT
- LibreOffice official license, filters, EPUB export limitations: https://www.libreoffice.org/licenses/ and https://help.libreoffice.org/latest/en-US/text/shared/01/01070002.html and https://books.libreoffice.org/en/WG248/WG24807-PrintingPublishing.html
- JSZip archive API/dual license: https://github.com/Stuk/jszip
- EPUBCheck conformance and BSD-3-Clause: https://github.com/w3c/epubcheck
- EbookLib AGPL distinction: https://github.com/aerkalov/ebooklib
- Calibre ebook-convert GPLv3: https://github.com/kovidgoyal/calibre/blob/master/src/calibre/ebooks/conversion/cli.py

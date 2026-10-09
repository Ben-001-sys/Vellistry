---
id: VEL-RES-R11-20261009-001
type: research-finding
status: draft-documentation-evidence-tests-not-run
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "PRE-DEVELOPMENT-RESEARCH-REGISTER.md — R11.01–R11.08"
  - "docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md on PR #10 — accepted M3 product scope"
  - "docs/research/MVP-READINESS-GATES-AND-ARCHITECTURE-DECISION-QUESTIONS-2026-10-09.md on PR #10 — G07/RDY-05"
  - "https://tiptap.dev/docs/editor/core-concepts/persistence"
  - "https://tiptap.dev/docs/editor/core-concepts/schema"
  - "https://tiptap.dev/docs/conversion/import/docx/editor-extension"
  - "https://tiptap.dev/docs/conversion/export/docx/editor-extension"
  - "https://github.com/mwilliamson/mammoth.js"
  - "https://github.com/mwilliamson/mammoth.js/blob/master/LICENSE"
  - "https://github.com/mwilliamson/mammoth.js/blob/master/NEWS"
  - "https://docx.js.org/api/modules/index.html"
  - "https://github.com/dolanmiu/docx/blob/master/package.json"
  - "https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html"
related_research:
  - R05
  - R10
  - R11
  - R14
  - R15
  - R16
  - R19
related_adrs:
  - ADR-0003
---


> **CURRENT OWNER CONSTRAINT (2026-10-09): NO PAID SERVICES FOR THIS PROJECT/MVP.** The earlier paid Tiptap conversion route below is retained as historical comparative research but is **EXCLUDED**, not a trial candidate or recommendation. For the binding research constraint and zero-paid-service tool comparison, use [the owner direction](../requirements/PRODUCT-CONSTRAINT-NO-PAID-SERVICES-2026-10-09.md) and [the updated R11 open-source research](R11-ZERO-PAID-OPEN-SOURCE-FORMAT-STACK-2026-10-09.md). No paid service trials are authorized by the older text.

# R11 — Manuscript portability: DOCX/TXT options, fidelity boundaries and proposed synthetic trials

**As of 2026-10-09. Classification: source-checked feasibility research, NOT implementation, import/export benchmark, procurement or conversion-library selection.**

## 1. Product boundary and decision to inform

The owner-approved eight-area writing-first MVP includes **M3: basic TXT and ordinary DOCX manuscript interchange**, durable recovery and an **independently portable author-project backup** containing accepted manuscript text, approved Character/Storyline profiles and user rule settings. It explicitly **does not** promise Word page-layout fidelity, tracked-changes round-trip, professional EPUB, print-ready PDF or full book production. Acceptance of the *product need* does not select a conversion vendor, price plan, runtime, storage engine, application framework or document schema.

The central G07/RDY-05 question is: *Can a writer safely bring in a typical prose manuscript, edit it in Tiptap 3, export editable text, and independently restore their book/profile/rule state without silent material loss?* Test the round trip, not merely whether a valid DOCX file is produced.

## 2. Facts verified from primary documentation

**F1 — Tiptap content.** Tiptap documents JSON as its preferred persistence representation (also supports HTML); Tiptap's extension schema admits only configured nodes/marks, so unrecognized incoming content or marks can be stripped. This is a fidelity risk to detect, not proof of full DOCX parity.
- https://tiptap.dev/docs/editor/core-concepts/persistence
- https://tiptap.dev/docs/editor/core-concepts/schema

**F2 — Tiptap paid DOCX import.** The current `@tiptap-pro/extension-import-docx` is available through its gated/private registry and requires a subscribed/trial entitlement. The editor-side extension **sends the file to Tiptap's conversion service**; it is not an offline parser. Default region is EU, with US region documented. Its callbacks expose warnings; its output is filtered through the active editor schema. Tiptap's REST import also requires a subscription. Uploading a private novel to a third party requires deliberate privacy/consent review before any trial using real prose.
- https://tiptap.dev/docs/conversion/import/docx/editor-extension
- https://tiptap.dev/docs/conversion/import/docx/rest-api

**F3 — Tiptap paid DOCX export.** `@tiptap-pro/extension-export-docx` is also an entitlement-gated product, but Tiptap documents that its editor extension can generate DOCX **locally in browser or on the application's server**, with no conversion-service call for ordinary DOCX export. A separately offered REST route runs on Tiptap Cloud. Vendor documentation explicitly rejects byte-for-byte/pixel-perfect Word round-trip guarantees.
- https://tiptap.dev/docs/conversion/export/docx/editor-extension
- https://tiptap.dev/docs/conversion/export/docx/rest-api

**F4 — Mammoth DOCX reader candidate.** Mammoth converts Word `.docx` to *semantic HTML*, supports headings, paragraphs, lists, emphasis, links, footnotes/endnotes, images and comments with documented caveats, and deliberately ignores much layout styling. Comments are ignored by default; underline and empty paragraphs also need explicit configuration if important. It **does not sanitize untrusted resulting HTML**. Its source license includes BSD-style attribution/disclaimer conditions; exact packaged version/dependency licenses still need a lockfile audit. Mammoth is **not** a Tiptap import extension and requires HTML-to-schema handling.
- https://github.com/mwilliamson/mammoth.js
- https://github.com/mwilliamson/mammoth.js/blob/master/LICENSE

**F5 — Recent Mammoth security lesson.** The upstream NEWS for **1.12.3** records a fix for pathological style-map regex backtracking that permitted a malicious DOCX to cause denial of service in an older release. The maintainer still recommends processing untrusted DOCX in an isolated worker/thread with a timeout. `1.13.0` is shown in the subsequently inspected upstream package manifest, **not an approved Vellistry version**. Never run an old unpinned converter on users' documents; perform dependency and advisory rechecks before trials.
- https://github.com/mwilliamson/mammoth.js/blob/master/NEWS
- https://github.com/mwilliamson/mammoth.js/blob/master/package.json
- https://github.com/mwilliamson/mammoth.js/issues/487

**F6 — docx.js writer candidate.** `docx` has a declarative JavaScript API to *create* OOXML DOCX documents and export `Buffer`/`Blob` using `Packer`. Its upstream package manifest declares **MIT**. It is **not itself an importer nor a lossless adapter from arbitrary Tiptap JSON**. A Vellistry trial would need an explicit supported-node mapper, style policy and warnings for omissions.
- https://docx.js.org/api/modules/index.html
- https://docx.js.org/api/classes/index.Packer.html
- https://github.com/dolanmiu/docx/blob/master/package.json

**F7 — hostile file handling.** OWASP recommends extension allowlisting *plus* content-type/signature/content checks, authorization, safe names, size/decompression limits and sandboxed processing where appropriate. Word files can carry compressed archive hazards, parser exploits and active content. Do not trust the input MIME header; never render untrusted DOCX-derived HTML without sanitization and schema validation.
- https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html

## 3. Candidate approaches (comparative hypotheses, not selections)

| Approach | Input | Output | Commercial/privacy dependency | Principal risk / test |
|---|---|---|---|---|
| **A — Tiptap Pro conversion** | DOCX via subscribed conversion cloud, returned JSON | DOCX via local subscribed extension or cloud REST | Paid/private registry; import sends private manuscript to external service | Entitlement and region/terms/retention review, representative import/export fidelity, unsupported-node warnings |
| **B — Open-source semantic adapters** | Mammoth DOCX -> sanitized semantic HTML -> schema-validated Tiptap JSON | Explicit supported Tiptap JSON -> docx.js OOXML | No Tiptap conversion subscription presumed; check complete dependency licenses | App-owned mapping burden, missing comments/styles/page elements, malformed uploads, security, time cost |
| **C — TXT-first escape hatch** | Strictly decoded TXT with explicit encoding/line-break handling | TXT chapters with disclosed formatting loss | Minimal converter dependency | **Not sufficient alone** to satisfy approved basic DOCX interchange; serves as safe fallback and baseline control |

**Interpretation:** A minimizes custom converter development but adds cost/third-party data-processing exposure on import. B gives more processing control *if appropriately deployed*, yet code, sanitization and security-testing obligations are substantial. C is essential for independent escape/recovery but cannot replace A/B. Do not assume Tiptap Pro import is local because its React/editor integration runs locally; do not assume docx.js handles import because it emits DOCX.

**No selection:** Require license/pricing/retention/region verification, comparative fixture results and explicit owner review. Do not infer use of Node, Next.js, a particular database or a proprietary conversion API.

## 4. Proposed MVP fidelity contract — for author review

Distinguish **guaranteed**, **warn-and-review**, **not supported**, and **rejected input**. These are *proposed* targets pending experiment results.

- **Critical, proposed guarantee:** Accepted chapter prose order and substantive characters survive round trip, including punctuation, quotation marks, Unicode names and dialogue paragraph boundaries; no silent deletion or chapter misassignment. Export/reimport of normal prose must be editable by common word processors.
- **Core formatting, proposed guarantee:** Real headings vs visually bold paragraphs, intentional emphasis, basic lists, scene breaks, paragraph separation and ordinary links where configured in the editor. Record counts and compare actual Tiptap node/mark output after save/reload.
- **Warn-and-review:** Footnotes, endnotes, comments, tracked changes, text boxes, tables, images, specialized Word style names, precise tabs/indentation, page/section boundaries and page headers/footers. If dropped/flattened/not rendered, show actionable *pre-import and pre-export* warnings; retaining the original file as a separately accessible source may reduce irreversible loss.
- **Not promised:** Pixel-identical Word typography/pagination, track-changes preservation, advanced layout, fully faithful academic/illustrated manuscripts, EPUB or print PDF. Do not market a submission-quality formatter.
- **Rejected/quarantined:** Corrupt/encrypted/unparseable inputs, unsupported embedded executable content, malicious or oversized archives, excessive compression ratios and unsupported encodings. Never present an import as successful when its document was truncated.
- **TXT contract:** Define accepted encodings (at minimum UTF-8, including BOM handling test), CRLF/LF normalization, newline/blank paragraph rules and clear loss of rich formatting. Other encodings need explicit detection, choice or refusal—not replacement-character corruption.

## 5. Proposed synthetic fixture corpus and scoring

All fixtures must be newly authored or expressly licensed synthetic text. **Status for every fixture: NOT_RUN.** Do not use client manuscripts, purchased fiction, API keys or original frozen guidance content.

| ID | Fixture | Expected assertion / failure observation |
|---|---|---|
| R11-F01 | UTF-8 TXT, Windows CRLF, blank scene break | Import paragraph boundary and Unicode text; export/re-import semantic text |
| R11-F02 | UTF-8 BOM, curly quotations, accented names, em dash | No replacement characters or reordering |
| R11-F03 | Unknown/UTF-16 TXT | Explicit supported decoding or actionable rejection; no silent mojibake |
| R11-F04 | 8-chapter DOCX using named Heading 1/2 styles | Preserve heading hierarchy; chapter segmentation must require review, not guess silently |
| R11-F05 | DOCX ordinary prose: 3 chapters, bold/italic, italics on partial words | Core marks survive import/export/reopen |
| R11-F06 | DOCX 100+ dialogue paragraphs, intentional empty separator | Retain line/paragraph semantics and detect skipped empty paragraphs |
| R11-F07 | DOCX lists, links, horizontal breaks and unusual punctuation | Retain supported semantics; warn on flattened elements |
| R11-F08 | DOCX custom styles, indentation, text boxes and page breaks | Surface unsupported/flattened style and page-layout differences |
| R11-F09 | DOCX footnotes/endnotes, comments, tracked additions/deletions | Explicit import decision and warning; no accidental accepting edits as canon |
| R11-F10 | DOCX embedded image and alt text | Asset policy, safe decode, file-size limits and visible omission/error |
| R11-F11 | DOCX created via Word and LibreOffice | Record editor/version, inspect schema and exported editability; no assumed parity |
| R11-F12 | Corrupted DOCX, misleading extension/MIME, hostile ZIP member paths | Rejection without writing outside quarantine or mutating book |
| R11-F13 | Small highly-compressed archive and malformed/embedded style map | Bounded extraction/time/memory and clear error; test safe fixture limits, not a real exploit corpus |
| R11-F14 | Tiptap JSON: two books with overlapping chapter titles and profile names | Export/import backup keeps identity and isolation, order and approved profile state |
| R11-F15 | Restored project with unknown future schema field, user rules, pending rejected AI proposal | Schema version handling; preserve or warn, never silently promote pending canon |
| R11-F16 | Repeated import/export interrupted by cancellation/network loss | Original accepted manuscript retained; idempotent import and honest completion status |

**Measurement ledger (proposed, no invented results):**
- Semantic text comparison: exact Unicode code points except explicitly disclosed newline normalization; detect every lost/replaced substantive character.
- Structural comparison: book/chapter identity and order, block count/type, headings, paragraphs, marks/links and named scenes before vs after.
- Provenance: originating file/hash, converter package/version, warning codes, input/output schema versions, export timestamp and user review acknowledgment.
- Robustness: parse time, peak memory, file/decompressed sizes, hangs, cancellation, malformed/unknown-node behavior and cross-book integrity.
- Compatibility: open exported DOCX in at least two real word processors; re-import it and compare again. Browser export/download success alone is insufficient.
- User outcome: task completion and understanding of loss warnings; recruit consented authors later rather than fabricate a usability result.

**Proposed pass gate for common-prose MVP:** zero silently lost substantive text, zero unexpected book/chapter assignment, zero unapproved manuscript/profile mutation; supported formatting meets agreed fixture expectations; all unsupported important content is visibly reported before destructive adoption. Numeric speed/size/round-trip percentages are **TBD after baselines**, not fabricated thresholds.

## 6. Portable project backup: a separate contract from DOCX

DOCX is an *editable manuscript exchange file*, **not a complete Vellistry project backup**.

An architecture-neutral backup proposal is a versioned, documented manifest (JSON) with immutable book/chapter IDs and ordering, complete **approved manuscript revisions**, approved Character/Storyline profiles with source/story-time references, author-created writing rules and active enable/disable/scope settings, and attachments/asset hashes when applicable. Include a schema version, file checksums and creation/export timestamps. Define how to reference but **not overwrite** the frozen owner guidance default pack; preserve ambiguous/unapproved default-pack variants as a separately gated source problem (R01).

Do not include BYOK plaintext secrets, raw authentication tokens, private platform internals or hidden AI response payloads by default. Treat rejected/unapproved AI text and suggested profile changes as separate *optional author-explicit export policy*, never approved canon. Validate complete restore in a disposable account/book while ensuring the preexisting target cannot be overwritten silently. Backups need privacy, retention and deletion rules before production use.

## 7. Safe evaluation protocol

1. **Pin provenance:** Record chosen tool/package exact versions, legal terms, region, source links and checked date. Obtain actual Tiptap Pro trial entitlement *only if owner approves cost and document-transfer terms*.
2. **Build synthetic corpus:** F01–F16, with expected content, independent character/structure checks and hash snapshots before running any converter.
3. **TXT baseline:** Run text-only reversible import/export first; deliberately test mixed line endings, encoding and interrupted download.
4. **Open-source candidate:** Run pinned post-fix Mammoth in a resource-bounded process. Disable `externalFileAccess` and embedded style maps unless proven necessary; sanitize its HTML before rendering; run Tiptap schema validation; generate DOCX via an explicit docx.js node/mark adapter. No default sanitization or implicit lossless mapping exists.
5. **Vendor candidate:** With a sanctioned trial account and synthetic content only, document Tiptap import request destination/region, warnings, premium extension package/license, export whether local vs hosted, and output differences.
6. **Compare:** DOCX import -> schema validation -> simulated edit -> save/reload -> DOCX/TXT export -> open in external editor -> reimport; report failures including lost Word comments/formatting and time/memory.
7. **Backup:** Simulate an author book with two chapters, manual/approved story profiles and custom rules; export/restore to clean storage and diff identities/settings; do not use real user data.
8. **Gate:** Only after repeated passing controlled tests, independent security review and author understanding of losses should the owner consider choosing a paid or open-source converter and stating public fidelity guarantees.

## 8. Open questions / explicit non-results

- **NOT_RUN:** No actual DOCX/TXT conversion, real Tiptap schema round trip, Word/LibreOffice inspection, backup restore, security fuzzing or author testing was performed in this research batch.
- **UNDECIDED:** Conversion provider; Mammoth/docx.js adoption; hosting vs browser processing; chapter vs whole-book internal document model; file size and time limits; retained original uploads; disaster-recovery design.
- **UNVERIFIED:** Tiptap Pro present-day purchase quote/legal DPA and retention policy in the Vellistry context; current exact dependency lockfile advisories; real-world library compatibility with every core fixture.
- **NEEDS OWNER REVIEW:** Whether footnotes/comments must be preserved in the *first* import path or a conspicuous warning + original-file retention is sufficient; acceptable Word-style loss; preferred maximum file size; third-party import consent.
- **SOURCE CONTINUITY:** R11 is **partial research**. All R11.01–R11.08 remain open. No source rules, accepted scope or ADR is changed.

**Provisional recommendation for the next bounded experiment:** Implement *synthetic F01–F06 and F12–F14* as an isolated, disposable converter comparison; favor an independently readable backup contract irrespective of which DOCX adapter eventually wins. Never advertise universal lossless DOCX conversion.

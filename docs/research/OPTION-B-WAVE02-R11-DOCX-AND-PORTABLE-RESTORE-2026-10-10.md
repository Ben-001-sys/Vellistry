---
id: VEL-RES-OPTIONB-WAVE02-R11-20261010-001
type: document-fidelity-portable-restore-research
status: bounded-tests-passed-with-measured-format-loss
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 1.0.0
sources:
  - docs/research/PAIR-03-ACCELERATED-PORTABILITY-PROFILES-2026-10-09.md
  - docs/research/experiments/pair03_calibre_probe.py
  - docs/research/experiments/pair03_portability.py
  - https://python-docx.readthedocs.io/en/latest/user/quickstart.html
  - https://python-docx.readthedocs.io/en/latest/user/styles-understanding.html
  - https://pandoc.org/MANUAL.html
related_research: [R11, R18]
related_adrs: [ADR-0004]
---

# Option B Wave 2 Track B — One-pass free DOCX style fidelity and backup study

**Original measured defect:** Pair 03 Calibre 7.6.0 DOCX to EPUB to DOCX kept three original titles and sentences as text, but **0 Heading-style paragraphs survived versus 3 in the input**. Calibre remains a possible publication converter under ADR-0004, not evidence of editable Word structural fidelity.

## Free candidate routes: source, evidence and uncertainty

| Route | Source/experimental method | Fit | Limitation |
|---|---|---|---|
| Direct Word semantic DOCX using free python-docx | [Word run formatting](https://python-docx.readthedocs.io/en/latest/user/quickstart.html); [Word paragraph styles](https://python-docx.readthedocs.io/en/latest/user/styles-understanding.html) | Real Heading 1–3 styles, bold/italic/strike runs, Unicode, empty paragraph | Only a strict Tiptap JSON research subset. Not arbitrary OOXML, comments, numbered lists, RTL metadata or backend integration |
| Pandoc DOCX to Markdown to DOCX | [Official Pandoc manual](https://pandoc.org/MANUAL.html) supports Word reader/writer and optional original style preservation | Independent executable free heading/mark comparison | Markdown intermediate may lose styles, page layout, blank paragraphs and metadata |
| Calibre DOCX to EPUB to DOCX | [Previous Pair03 measured study](PAIR-03-ACCELERATED-PORTABILITY-PROFILES-2026-10-09.md) | Candidate for publication EPUB | **Failed structural Heading preservation: 3 original, 0 returned** |
| Project portable ZIP | Pair03 10-case archive tests and Pair06 Postgres restore | Preserve revision, author, enabled rules, approved vs pending profile facts with manifest | No encryption/offsite/auth/actual application full restore proof |

**Proposed R11 technical direction for later owner review:** Keep editable Word DOCX conversion and book-publication EPUB export as **different workflows**. A strict supported-document-subset converter should preserve actual Word heading and inline style semantics, and report or reject unsupported elements rather than silently discarding them. Calibre can remain EPUB-oriented under the existing accepted ADR-0004, with Pandoc as a converter candidate. This recommendation does not change the approved Next.js/NestJS stack or introduce a Python backend.

## New repeatable experiments

1. [Strict semantic Word bridge](experiments/pair_wave02_docx_semantics.py): validates limited Tiptap JSON headings 1–3, paragraphs, Unicode, bold/italic/strike and exports/reimports actual DOCX. Unsupported nodes, marks, paragraphs and nonsemantic objects are rejected.
2. [Twelve DOCX/ZIP checks](experiments/test_pair_wave02_docx.py): word-heading structure, run mark preservation, Arabic/Chinese/curly punctuation text, empty blocks, unchanged source, bad/unsupported content handling, two-book rich manuscript archive with distinct authors, revisions and profile approval statuses.
3. [Independent free Pandoc probe](experiments/pair_wave02_pandoc_probe.py): actually runs DOCX to Markdown to DOCX, reopens output with python-docx, and prints measured heading styles, bold/italic/struck texts and paragraph count; failed headings or bold/italic must be recorded as a measured regression.
4. [Existing Pair03 archive checks](experiments/test_pair03_portability.py) execute unchanged alongside the new tests.

## Claim boundaries and remaining product requirements

| Property | Direct semantic bridge | Pandoc | Calibre intermediary |
|---|---|---|---|
| Actual Heading style metadata | Runnable DOCX test | Independent converter test | **Known FAIL 3 -> 0** |
| Bold/italic/strike | Runnable DOCX test | Measured separately | Not previously proved |
| Unicode strings | Runnable DOCX test | Small fixture only | Previous primarily English text only |
| Arbitrary external DOCX | **NOT CERTIFIED** | **NOT CERTIFIED** | **NOT CERTIFIED** |
| Comments, changes, tables, images, footnotes, lists, RTL layout | **NOT CERTIFIED** | **NOT CERTIFIED** | **NOT CERTIFIED** |
| Full application import/restore with Supabase Auth, Storage and offsite encrypted backups | **NOT RUN** | **NOT RUN** | **NOT RUN** |

The research bridge is not a complete OOXML parser or sanitizer and cannot promise not to lose all unsupported features without a deeper package inspection. Foreign document input must use an explicit loss disclosure/acceptance flow or reject until analyzed. Word formatting semantic tags are not equivalent to page-layout fidelity. Real Word and LibreOffice independent visual rendering on more complex files remains **NOT RUN**. No proprietary or copyrighted author text used.

**One-pass disposition:** Passing CI establishes only this controlled format approach. An owner decision on supported Word fidelity/loss policy and future production integration remains needed. The user's one-pass sequencing advances **Wave 3 R15/K2B security dataflows and R07 canon/extraction** after test evidence, retaining gaps rather than declaring them PASS. No design/prototype or production feature development is authorized under Option B.

## Verified Wave 2 conversion and backup results — 2026-10-10

Original tested research code commit: 49eb1813da5f83f5ab571f7dbb59aa79b8eec776.

- [R11 Wave 2 GitHub Actions #38014068186](https://github.com/Ben-001-sys/Vellistry/actions/runs/38014068186) SUCCESS in both jobs. Direct semantic DOCX 12/12 PASS, existing ZIP/TXT 10/10 PASS; actual Word Heading 1 and 2, bold/italic/strike text, multilingual text, empty paragraph blocks and two-book revision/approval/rule status maintained within the *supported test subset*.
- **Pandoc 3.1.3:** Heading 1 and 2 preserved, along with bold/italic/strike and all nonempty text. **STRUCTURAL LOSS:** 5 original paragraphs became 4; the sole empty paragraph disappeared in DOCX -> Markdown -> DOCX. This is a measured limitation, not a universal fidelity pass.
- **Calibre 7.6.0 prior test:** 3 original Heading styles became 0 after DOCX -> EPUB -> DOCX. It remains unsuitable as a guaranteed editable Word round-trip converter on current evidence.
- **NOT RUN:** independent Microsoft Word/LibreOffice visual rendering, custom styles/lists/footnotes/comments/track changes/media, unknown imported file variants, hostile OOXML sandboxing, actual Tiptap editor integration, Auth/Storage/offsite encrypted archive recovery.

**Bounded result:** PASS for explicit supported semantic subset and previous local ZIP tests. FAIL for Pandoc blank-paragraph retention and Calibre Heading style preservation. UNKNOWN/NOT RUN for arbitrary Word document fidelity and complete operational author-data recovery. Move to Wave 3 research without new iterative Wave 2 loops, while keeping owner loss-policy and engineering integration decisions open.

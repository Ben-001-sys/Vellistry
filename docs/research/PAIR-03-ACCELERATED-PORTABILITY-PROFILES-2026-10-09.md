---
id: VEL-RES-PAIR03-ACCEL-20261009-001
type: research-evidence-and-acceptance
status: tests-pending
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "docs/plans/RESEARCH-PAIR-AND-PREIMPLEMENTATION-DESIGN-2026-10-09.md"
  - "docs/decisions/ADR-0004-free-calibre-document-conversion-and-portable-recovery.md"
  - "docs/research/R07-LIVE-STORY-PROFILES-CONCEPT-MODEL-2026-10-09.md"
related_research: [R07, R11]
related_adrs: [ADR-0004]
---

# Pair 03 — Research-only portability and evolving Story Profiles

**Scope:** The owner requested continued Pair 02 and Pair 03 research. This is a synthetic research branch, not a shipping data or authoring implementation. Pair 02's remaining real writer interviews, assistive-tech assessment and full rich-text validation are separate; moving here does not mark them passed.

## Track A — R11, free Calibre, TXT and portable backups

Selected existing direction: Calibre ebook-convert, UTF-8 TXT and an independent archive strategy are recorded in [ADR-0004](../decisions/ADR-0004-free-calibre-document-conversion-and-portable-recovery.md). Selection did not establish actual fidelity or secure integration.

Research code and falsifiable acceptance:
1. [Offline backup/TXT fixture](experiments/pair03_portability.py) serializes a synthetic two-book archive with revisioned Tiptap JSON, distinct authors, explicitly accepted vs pending noncanonical profile facts and author-disabled rules. ZIP membership, hash manifest, path traversal, duplicate entries and byte limits are validated before returning a restored snapshot. A production identity/transaction policy is NOT supplied.
2. [Ten portability contract tests](experiments/test_pair03_portability.py) cover two-book restoration, disabled rules, pending facts, corruption, zip-slip, changed hashes, duplicate filenames, bound checks, UTF-8 BOM/CRLF and invalid encodings.
3. [Real Calibre conversion fixture](experiments/pair03_calibre_probe.py) creates three synthetic DOCX chapters with Heading 1 and bold/italic spans, runs Calibre DOCX to EPUB to DOCX using installed open-source binaries, reopens with python-docx and checks chapter headings and source sentences. Logs converter version, byte sizes, warning presence, and whether heading style counts match. This does not prove lossless rich formatting or valid Tiptap import/export.

Required future integration work: independent Word/LibreOffice rendering; bidirectional formatting/notes/footnotes; multilingual source material; hostile OOXML limits; clean-database backup restore; account ownership and secrets; version migrations; explicit disclosure of import-loss risks. Do not confuse EPUB-as-intermediate in a synthetic DOCX study with a committed EPUB publisher.

## Track B — R07, temporal and author-controlled Story Profiles

Reused existing [20 passing synthetic R07 tests](experiments/test_r07_story_state_contract.py), [CI #37919046053](https://github.com/Ben-001-sys/Vellistry/actions/runs/37919046053). These show deterministic proof of selective approval, stale-source handling and story-time lookup, not extraction accuracy or usable UI.

New [eight multiscene tests](experiments/test_pair03_story_profiles.py) connect flashback chronology, late knowledge, manual thread progression, unaccepted AI prose, source edits invalidating formerly approved evidence, subjective claims, two books with identical character names, and deliberately unknown story time. All extracted or proposed facts remain *hand authored by the test*; no model extraction claims.

Missing: measurable natural-language candidate extraction accuracy on labeled synthetic fiction, actual database transactions, Tiptap source-reference compatibility, UI review affordances, real author tests, and security/account isolation against actual Supabase.

## Explicit verification gates

| Check | Required result | Status at authoring |
|---|---|---|
| R11 ZIP and TXT | Ten offline cases pass without text/canon leak or corruption | NOT VERIFIED |
| R11 DOCX via Calibre | Real executable conversion and sentence fidelity measured with exact version | NOT VERIFIED |
| R07 temporal and proposals | Eight new scenario tests plus original 20 regression tests pass | NOT VERIFIED |
| Production restore/editor | Full author account and accepted rich document format restore | NOT RUN |
| AI extraction quality | Labeled precision/recall plus failure abstention and author correction effort | NOT RUN |
| Real-author trial | Actual observed acceptance, clarity and accessibility | NOT RUN |

Evidence from [Pair 03 CI](../../.github/workflows/pair03-r11-r07-research.yml) must be inspected at exact tested commit, and any failed acceptance must be called FAIL. A passing unit test means only the narrow synthetic invariant passed. No paid services, real manuscripts, production migration, final owner architecture selection, merge or deployment are authorized.

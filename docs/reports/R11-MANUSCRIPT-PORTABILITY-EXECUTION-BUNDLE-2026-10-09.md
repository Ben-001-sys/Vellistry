---
id: VEL-EXE-R11-20261009-001
type: execution-bundle
status: research-evidence-only-experiments-not-run
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "docs/research/R11-MANUSCRIPT-PORTABILITY-CONVERTER-OPTIONS-2026-10-09.md"
  - "PRE-DEVELOPMENT-RESEARCH-REGISTER.md — R11.01–R11.08"
  - "docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md on PR #10"
related_research:
  - R05
  - R11
  - R15
  - R19
related_adrs:
  - ADR-0003
---

# ExecutionBundle — R11 basic DOCX/TXT portability and independent author-backup study

## Task boundary
Investigate feasible conversion pathways and define repeatable synthetic fidelity/security/restore experiments for the owner-approved eight-area MVP. No production implementation, chosen converter, provider contract, real-author content, private credential, approved schema or scope change is permitted.

## FACT — provenance-checked external sources
- Tiptap recommends JSON persistence and operates on explicit editor schema.
- DOCX **import** via Tiptap's subscription extension invokes the Tiptap conversion service; DOCX **export** from the subscription editor extension can run locally, whereas its REST export is a cloud option.
- Mammoth produces semantic HTML, **not sanitized HTML**, and may discard styling/comments by default. Upstream changelog documents an older denial-of-service vulnerability fixed in 1.12.3, with sandbox/time-limit advice still applicable.
- docx.js declares MIT and can emit DOCX in browser/Node, but needs an application-specific Tiptap JSON adapter.
- OWASP requires layered uploaded-file validation and resource bounds.
- Primary URLs and exact capability distinctions are in the paired R11 research report.

## INTERPRETATION — provisional engineering risks
- Commercial Tiptap conversion reduces custom adapter effort but requires a real subscription/terms assessment and external private-text processing analysis on **import**.
- Open-source local conversion may reduce third-party disclosure, *conditional on deployment decisions*, but trades against adapter implementation burden, format loss and parser attack surface.
- DOCX alone is not a project recovery format because character/storyline profiles and rules configuration must also survive.

## PROPOSAL — requested follow-up work and evidence
1. Produce F01–F16 original synthetic fixture inputs and gold-standard text/structure annotations.
2. Run pinned TXT control and independent DOCX round-trip trials with a locally bounded importer + exporter; record exact packages and infrastructure used.
3. If owner permits a paid trial, run the same fixtures through Tiptap subscribed conversion and capture third-party transfer/region/warning behavior.
4. Verify the schema-loss warning path and future-version backup restoration, with cross-book isolation and unapproved-canon invariants.
5. Capture Word/LibreOffice human-inspection findings and decide which documented losses are tolerable for **basic manuscript exchange**, not professional book composition.
6. Present option scores and new risks for a **separate owner-reviewed converter/backup ADR**, rather than adopting a tool by default.

## Verification matrix
| Research gate | Status this batch | Evidence |
|---|---|---|
| Vendor primary documentation and licenses | DOCUMENTATION_CHECKED | R11 study §2 with dated source URLs |
| Alternative approach comparison | PROPOSED | R11 study §3 |
| Source-safe fixture descriptions | DESIGNED_NOT_RUN | R11 study §5, F01–F16 |
| DOCX/TXT data-fidelity benchmark | NOT_RUN | Needs disposable implementation and fixtures |
| Word/LibreOffice visual/editability inspection | NOT_RUN | Needs actual converted outputs |
| ZIP/parser exploit isolation and timeout test | NOT_RUN | OWASP and Mammoth security review, no unsafe samples run |
| Independent project backup/restore | NOT_RUN | Proposed manifest §6, not an accepted schema |
| Real author trial and acceptance | NOT_RUN | Requires consent-safe recruitment and trial |
| Converter/architecture/paid plan decision | NOT_APPROVED | Explicit owner decision still needed |

## Review safeguards
- Product scope M3 remains accepted from owner assent; PR #10 has its own review/merge state.
- ADR-0003's Tiptap 3 foundation remains selected; conversion path is not part of that decision.
- Research register **R11.01–R11.08 remain unchecked**, all acceptance thresholds marked provisional.
- The 13-domain/130-lens frozen guidance and R01 variant conflicts are untouched.
- No files on main, CURRENT-STATE.md, PR #10's acceptance documents or source archives are edited by this draft.
- Correct the main-level research register/current state *on owner-reviewed promotion*, avoiding overlapping in-flight PR merges.

## Outcome
**SOURCE REVIEW COMPLETE FOR THIS BOUNDED QUESTION; EXPERIMENTS NOT RUN; DECISION NOT MADE.** Owner review may authorize the next synthetic fixture and converter spike, but this document itself grants no budget, paid entitlements, data-transfer consent or production access.

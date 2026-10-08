---
id: VEL-EXE-FEATURE-INVENTORY-20261008-001
type: execution-bundle
status: completed-documentation-draft
created_at: 2026-10-08
updated_at: 2026-10-08
author: project-research
version: 0.1.0
sources:
  - "docs/features/FEATURE-INVENTORY.md"
  - "docs/research/R01-SRC001-USER-INTENT-EXTRACTION.md"
  - "docs/requirements/PRODUCT-DIRECTION-FROZEN-DEFAULT-GUIDANCE-2026-10-08.md"
  - "PRE-DEVELOPMENT-RESEARCH-REGISTER.md"
  - "Fiction Writing App master Google Doc, Part VI and Part XIX"
related_research:
  - R01
  - R02
  - R04
related_adrs:
  - ADR-0003
---

# Feature Inventory ExecutionBundle — documentation and verification

## Objective

Create one durable, reviewable, ID-backed index for the complete **currently retrieved and discussed** Vellistry feature set before selecting release priorities. Preserve the boundary between owner-directed behavior, owner investigation interests, research proposals, and selected technology.

## Work performed (FACT)

- Wrote [FEATURE-INVENTORY.md](FEATURE-INVENTORY.md) with 18 feature areas, 368 individual capabilities and 15 cross-cutting differentiator concepts (383 rows total).
- Assigned stable `VEL-FEAT-XX-NNN` IDs to features and `VEL-DIFF-NNN` IDs to differentiator proposals.
- Captured a practical scope sentence, source reference family, approval classification, research dependencies, and `UNASSIGNED` priority in each row.
- Used `DIRECTED`, `OWNER-INTENT`, `CANDIDATE`, and `TECH-SELECTED` to keep the selected Tiptap 3 editing foundation distinct from unapproved feature mechanics.
- Updated [CURRENT-STATE.md](../../CURRENT-STATE.md) and [SOURCE-OF-TRUTH.md](../../SOURCE-OF-TRUTH.md) on the feature-inventory branch.
- Added **Part XIX** to the connected *FIction writing App* Google Doc with the catalog totals, all eighteen category counts, 15 named differentiators, source/approval status distinctions and a link to GitHub PR #9.
- Opened [draft PR #9](https://github.com/Ben-001-sys/Vellistry/pull/9) for explicit owner self-review; no merge attempted.

## Verified structure (re-read from GitHub and Google Docs)

- **383 feature IDs in 383 data rows, all unique**.
- **18 numbered main feature sections**.
- **368 primary feature records + 15 differentiator records**.
- **Every row ends with `UNASSIGNED` release priority**, with no MVP/public milestone silently chosen.
- Status counts across all 383 rows: `DIRECTED` 13, `OWNER-INTENT` 16, `TECH-SELECTED` 1, `CANDIDATE` 353.
- `CURRENT-STATE.md` and `SOURCE-OF-TRUTH.md` both link to the inventory.
- Google Doc read-back confirmed Part XIX sections 86–89, the complete count and the GitHub link.

These are structural/document checks through the connected repositories and document editor, **not** proof that every proposition is market-validated, functionally tested, approved or implementable.

## Interpretation

A complete cross-referenceable feature index reduces the risk of losing long-term author-directed cover, publishing, manuscript, AI-control and continuity ambitions during later MVP discussions. Some rows deliberately overlap because the initial conversation listed the same conceptual capability in multiple subsystems. IDs are tracking identifiers, not a prescribed service architecture.

## Limitations and open corrections

- The older, separately referenced approximately 20-section / 42-requirement source document has **not** been independently recovered. The inventory is exhaustive for the **currently recovered/discussed source set**, not unknown source material.
- R01 AR short/expanded fiction-guidance discrepancies are not resolved; no frozen 130-lens creative content was changed or canonically repackaged.
- Several entries originate in the synthesized blueprint or research rather than direct owner words; `CANDIDATE` status remains intentionally nonbinding. Owner should review contested statuses before acceptance.
- No release horizon, pricing, implementation design, stack, import/export engine, cover editor, AI provider or public MVP has been selected by this documentation task.
- No model/API test, user interview, author-task benchmark, secure manuscript processing or product usability evaluation was executed.

## Owner review and next action

1. Check each category and any disputed source/status/feature wording using its stable ID.
2. Submit corrections or additions without silently renumbering past records.
3. Merge the candidate inventory only after owner review, whereupon it becomes the canonical **feature index**, not an approved backlog.
4. Return to R04 and assign per-feature release horizons only after explicit owner scoping and relevant source/author evidence.
5. Promote chosen implementation requirements as distinct approved records; do not infer approval from an index entry alone.

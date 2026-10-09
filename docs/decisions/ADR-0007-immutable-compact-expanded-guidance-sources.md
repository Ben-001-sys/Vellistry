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

# ADR-0007 — P1: immutable compact/expanded fiction-guidance sources

## Context and problem statement

Vellistry's 13-domain/130-lens frozen fiction-guidance material contains one compact and one expanded presentation per printed code. In the available original, 13 headings differ between presentations, and some share a printed ID while referring to substantially different writing concepts. An unsafe merge could silently rewrite what the author originally approved or misapply instructions in a future Rules Studio or AI request.

## Decision

**P1 is accepted as the preservation and source-identity policy.**

1. Preserve the **compact** and **expanded** source records as separate, immutable, faithfully quoted provenance entries for **every** lens code, including the 117 with case-insensitively matching titles; never assume matching titles imply identical full bodies.
2. Identify each entry by **(raw_source_sha256, variant, printed_code)**, with `variant` explicitly `compact` or `expanded`. The shared printed code alone is **not** a storage, rule-toggle, audit, or AI context identity.
3. Retain the exact original wording, source file fingerprint and line/location. Subsequent interpretations, commentary, canonical display names and author-custom rules must be **separate, versioned derivatives**, never in-place edits of the frozen source.
4. If a future Rules Studio exposes an active/default rule, it must refer to an **explicit, owner-approved versioned mapping** to the frozen original. Enabled/disabled state and per-book overrides are separate author configuration, not mutations of original rules. Effective AI instruction snapshots must identify precisely which approved source variants were used.
5. Conflicting compact and expanded meanings—including AR-04 and AR-09—are **not** automatically reconciled, prioritized, combined or re-coded. Until reviewed, both remain preserved and unresolved.

This decision is a **data-preservation policy**, not approval of the actual 130 active default mappings or certification that the deployable Rules Studio source package is complete.

## Alternatives considered

- **P2 compact wins**: rejected as automatic policy; risks omitting expanded meaning.
- **P3 expanded wins**: rejected as automatic policy; risks changing compact meaning under an unchanged ID.
- **P4 invent a replacement taxonomy**: not selected; possible only as a separate explicitly authorized author-origin change.
- **P1 archive both and require owner mappings**: accepted.

## Rationale

P1 is lossless with respect to the original variant distinction, reversible when mappings change, and makes semantic conflicts visible. It supports provenance-preserving source audits, user controls and eventual Rules Studio instruction traceability.

## Consequences and trade-offs

- The inventory carries **260 source-variant records** for **130 printed lens codes**.
- Future user-facing defaults require an additional explicit mapping/version layer and owner decisions; the 13 divergent titles are not silently corrected.
- Existing original files remain private source evidence, not implicitly authorized for uploading into hosted design generators or model providers.
- Migration, backup, and reproducibility checks must preserve the raw SHA/variant/code identity, not just the printed code.
- This research decision does not itself create product tables or modify any app implementation.

## Evidence and verification limits

Owner's direct reply `yes` followed a question expressly asking to approve P1. No evidence supports a different inference such as selecting compact as primary, selecting expanded as primary, deploying a default pack, or certifying missing historical source artifacts. The evidence and audit are recorded in the R01 Pair 01 report. The source file's 13 different *titles* are not necessarily the only semantic differences across the longer original text.

## Implementation status

**Policy approved; source audit parser exists; canonical mapping and actual product integration are NOT DONE.** No released rule pack, editor instructions, AI provider mapping or public UI inherits authority from this decision alone. A later owner-reviewed mapping decision plus frozen-pack tests are required before closing R01's deployable-default certification.

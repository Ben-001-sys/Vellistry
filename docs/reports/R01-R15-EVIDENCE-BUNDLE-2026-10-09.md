---
id: VEL-EB-R01-R15-20261009-001
type: execution-bundle
status: completed-research-partial-gates-open
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "docs/research/R01-SOURCE-INTEGRITY-AND-AR-VARIANT-AUDIT-2026-10-09.md"
  - "docs/research/R15-MANUSCRIPT-PRIVACY-AND-BYOK-THREAT-MODEL-2026-10-09.md"
  - "Local uploaded original AI Writing App Blueprint.md / Research AI Writing Problems.md / Branch · Research AI Writing Problems.md"
  - "chatgpt-exported-chats-md-3.zip uploaded with source files"
  - "OWASP ASVS 5.0, Authorization Cheat Sheet, Secrets Management Cheat Sheet, 2025 LLM Top 10"
related_research:
  - R01
  - R04
  - R08
  - R15
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
  - VEL-REQ-001
  - VEL-REQ-006
---

# R01/R15 research — evidence and unresolved gates

## FACT — actually checked

- Located the directly uploaded Markdown source files and its ZIP export; calculated complete raw-file SHA-256 for SRC-001, SRC-002, SRC-003 and the ZIP.
- **All 3 standalone source files exactly equal their ZIP members byte-for-byte**. SHA-256 for SRC-003 matched the previously recorded research-register fingerprint.
- Parsed compact and expanded lens headings directly from SRC-003, taking into account that expanded NI uses `##` whereas other expanded domains use `#`.
- Verified **130 compact codes and 130 expanded codes** spanning **13 domains × 10 lenses** in both forms, with matching code sets.
- Found **13 differing titles** across code-matched compact/expanded entries: **10 AR**, one DS-09 and two PV-05/PV-10. Recorded all AR pairs and source line labels; original file bytes were not edited.
- Consulted OWASP ASVS v5, OWASP authorization/secrets guidance and 2025 LLM risks, then mapped the user-facing approved Vellistry MVP's assets to **17 candidate security abuse cases**.
- No actual deployed application, authentication service, source archive commit, model call, externally consented author manuscript or backend was involved.

## INTERPRETATION (not owner-approved canon or architecture)

- The uploaded SRC-003 is identifiable and structurally complete for the 130-by-130 heading set, but its **two title/version forms are not yet a coherent operational default pack**.
- A minimal source-aware rule identifier should distinguish file hash/variant/code until the project owner resolves how to display/apply mismatched titles; this is a proposed contract, not a decision to select either.
- Manuscript trust risk concentrates around account/book authorization, durable saving, source-of-truth separation between prose/suggestions/canon, safe BYOK secret handling and informed transfers to model providers.
- Enforce security at actual data/resource boundaries; a hidden button or a random UUID is not proof of authorization.

## PROPOSAL — next decisions

1. Owner reviews precise title/body discrepancy evidence, and chooses a non-destructive R01 packaging plan; preserve short and expanded versions and archived original bytes.
2. Review whether the author permits storing complete source export in a private repo/immutable archival location; the present task preserved hashes/manifest but **did not** upload full historical source to GitHub.
3. After backend alternatives are researched, carry out a formal R15 data flow/credential storage/authorization decision and actual SEC-01..17 abuse tests before inviting private authors.
4. Validate true provider terms, prompt retention, secret lifecycle, backup duration, deletion and model transmission disclosures before claims about privacy.
5. Do not mark the default pack certified, security compliant, the initial MVP built, or publicly releasable on these two reports.

## Verification limitations

- Local parsing/checks can be reproduced from the **same original files**; source files were not copied into repo by this task, so no isolated GitHub Actions job can certify source bytes without access to those copies.
- Source title mismatch does **not by itself** prove semantic incompatibility. Body-level comparisons remain open; a full archived 20-section/42-requirement source remains unrecovered.
- Security checks are **paper threat analysis grounded in vendor-neutral guidance**, not penetration tests or verified implementation.
- Technology stack, encryption/key-vault vendor, BYOK model, service topology and regulations were **not** chosen.
- No exact model/AI generation, real author validation, browser editor or document export results are claimed by this R01/R15 research branch.

## Deliverables

- [R01 source identity and variant audit](../research/R01-SOURCE-INTEGRITY-AND-AR-VARIANT-AUDIT-2026-10-09.md)
- [R15 manuscript/BYOK threat model](../research/R15-MANUSCRIPT-PRIVACY-AND-BYOK-THREAT-MODEL-2026-10-09.md)
- Branch-only CURRENT-STATE checkpoint and owner-review draft PR.

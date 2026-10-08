---
id: VEL-RES-R02-PLAN-001
title: Research migration plan and checkpoints
type: research-plan
status: draft
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.0
sources:
  - SRC-001
  - SRC-002
  - SRC-003
  - SRC-004
related_adrs:
  - ADR-0001
  - ADR-0002
---

# R02 — Original Research Migration Plan

## Objective
Bring existing Vellistry research into its Git-based engineering knowledge without losing original content, source attribution, historical variants, or unapproved ideas.

## Invariants
- Preserve original files byte-for-byte; validate SHA-256 before and after archiving.
- Track each source under its existing SRC identity and avoid duplicating transport/archive copies as new findings.
- Preserve SRC-003's short-versus-expanded 13-domain definition differences; the user's frozen default guidance remains unmodified.
- Distinguish direct owner intent, assistant recommendations, external evidence, derived requirements, and approved decisions.
- Do not silently turn source content into approved application architecture.
- Use additive, metadata-rich history for any consequential changes.

## Work packages

| ID | Work | Deliverable | Acceptance evidence |
|---|---|---|---|
| R02.01 | Preserve available originals | Stable source archive paths or immutable artifact links for SRC-001–004 | Byte-for-byte hash verification and register update |
| R02.02 | Index and classify source passages | Per-source navigation maps and content manifests | Anchors checked against immutable originals |
| R02.03 | Normalize *references*, not source content | Linked research evidence map with clearly separated paraphrase/interpretation | Duplicate/variant log and review |
| R02.04 | Requirements traceability | Candidate requirements linked to exact originating user statements | Owner-intent versus AI-idea labeling, no silent approval |
| R02.05 | Freeze packaging evaluation | Non-destructive study of SRC-003's historical variants and user toggle semantics | Explicit unresolved conflicts retained |
| R02.06 | Test one agent handoff | Task-specific ContextPack and ExecutionBundle | Another agent can reproduce relevant context and limitations |

## SRC-001 through SRC-004 provenance
- Source hashes and filenames: [SOURCE-REGISTER.md](SOURCE-REGISTER.md).
- First-pass original-byte audit and known gaps: [R01-SOURCE-AUDIT-2026-10-08.md](R01-SOURCE-AUDIT-2026-10-08.md).
- Detailed user voice extraction from SRC-001: [R01-SRC001-USER-INTENT-EXTRACTION.md](R01-SRC001-USER-INTENT-EXTRACTION.md).
- SRC-003 short/expanded AR and PV-10 issues: [R01-AR-SEMANTIC-RECONCILIATION-2026-10-08.md](R01-AR-SEMANTIC-RECONCILIATION-2026-10-08.md).
- Reader-problem source navigation from SRC-002: [R02-SRC002-READER-PROBLEM-SOURCE-INDEX-2026-10-08.md](R02-SRC002-READER-PROBLEM-SOURCE-INDEX-2026-10-08.md).

## Status and next action
An initial SRC-002 navigation index exists. Source archives remain outside Git and require an appropriate upload mechanism, provenance links and integrity checks; **do not claim source migration complete**. Next, preserve exact originals before promoting cross-source indexing into authoritative references.

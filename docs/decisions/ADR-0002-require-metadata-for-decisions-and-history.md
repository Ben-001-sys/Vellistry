---
id: ADR-0002
title: Require structured metadata for ADRs and historical records
type: architecture-decision
status: accepted
created_at: 2026-10-08
updated_at: 2026-10-08
decided_at: 2026-10-08
author: project_owner
approved_by: project_owner
version: 1.0.0
sources:
  - "Vellistry planning conversation, 2026-10-08; permalink pending archival"
  - "Getting Better With Agentic Coding - Copy.zip"
evidence:
  - "Owner explicitly required ADR and history metadata on 2026-10-08."
  - "Recovered user messages: 'remember, the adr, history are suppose to have meta data' and 'okay I agree'; reviewed in docs/governance/APPROVAL-PROVENANCE-2026-10-08.md"
related_requirements: []
related_features: []
related_contracts: []
related_adrs:
  - ADR-0001
supersedes: []
superseded_by: []
implementation_refs:
  - docs/governance/RECORD-SCHEMAS.md
  - docs/history/
---

# ADR-0002 — Structured metadata and decision lineage

## Context and problem statement
Bare Markdown notes do not consistently encode authority, dates, ownership, evidence, relationships, and supersession. Those omissions harm research audits, future context assembly, and cross-agent reliability.

## Decision
Require structured YAML front matter for every ADR and historical event. Enforce the schemas in `docs/governance/RECORD-SCHEMAS.md`, including stable IDs, dates, status, author/authority, sources, evidence, related records, and supersession or correction relationships.

## Alternatives considered
- Unstructured prose and Git history only: easy to write but difficult to query reliably.
- A standalone database of decisions: greater query capabilities but unnecessary during initial research.
- Structured YAML front matter in Git: portable, reviewable, human-readable, and machine-readable.

## Rationale
The source agentic-coding research explicitly calls for ID, status, evidence, dates, approval, and supersession fields in ADRs, plus temporal and provenance-rich historical knowledge.

## Consequences and trade-offs
- Slightly more writing overhead for each record.
- Better traceability, later validation, and vendor-neutral context extraction.
- Missing data must be represented honestly, not replaced with fabricated metadata.
- Corrections and supersession must preserve history.

## Evidence and verification limits
The project-context review recovered the owner's explicit 2026-10-08 statement that ADR and history records should have metadata, followed by agreement. The [approval-provenance record](../governance/APPROVAL-PROVENANCE-2026-10-08.md) preserves the recovered wording, timestamps, review basis and outstanding primary-conversation permalink. This supports the direction, but does **not** imply that the owner approved every individual schema field.

## Implementation status
**In progress:** Markdown schemas, initial records and a GitHub Actions metadata check exist. The PR now contains expanded file-discovery validation and negative regression tests, but their final-commit CI outcome and required branch protection must be verified separately. Passing checks do not establish complete semantic provenance.

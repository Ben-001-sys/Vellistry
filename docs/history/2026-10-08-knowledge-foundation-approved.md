---
id: HIS-20261008-001
title: Repository knowledge co-location and metadata policy approved
type: historical-event
status: recorded
occurred_on: 2026-10-08
recorded_on: 2026-10-08
time_precision: day
created_at: 2026-10-08
updated_at: 2026-10-08
author: project_owner
actor: project_owner
version: 1.0.0
sources:
  - "Vellistry planning conversation, 2026-10-08; permalink pending archival"
evidence:
  - "Owner agreement to co-locate project knowledge and application source."
  - "Owner instruction that ADRs and history must contain metadata."
related_adrs:
  - ADR-0001
  - ADR-0002
related_requirements: []
related_events: []
corrects: []
corrected_by: []
commit_refs: []
---

# Historical event — Knowledge foundation approved

## Event
On 2026-10-08, the project owner approved keeping Vellistry's engineering knowledge base in the same GitHub repository as the application source. The owner also explicitly required metadata for architectural decisions and historical records.

## Prior state and resulting state
Previously this arrangement was a recommendation. After approval, co-location and record metadata became accepted project-governance decisions.

## Evidence and provenance
The approval appears in the project planning conversation. A durable permalink or archived transcript identifier has not yet been committed; this limitation is recorded deliberately.

## Interpretation
The project should bootstrap a Git/Markdown knowledge layer before relying on autonomous multi-agent workflows. This interpretation does not establish that the entire knowledge migration or software implementation is complete.

## Follow-up
- Verify schema completeness and link record identifiers.
- Record original source archive references.
- Review the documentation branch before merge.

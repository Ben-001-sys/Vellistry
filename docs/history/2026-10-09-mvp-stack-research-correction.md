---
id: HIS-20261009-004
title: Correct premature Vellistry full-stack approval claim
type: historical-event
status: recorded
occurred_on: 2026-10-09
recorded_on: 2026-10-09
time_precision: day
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
actor: project-research
version: 1.0.0
sources:
  - "Owner's 2026-10-09 question on whether stack choice was properly researched and how AI memory would work; permalink pending"
evidence:
  - "The earlier ADR-0005 was marked accepted without dedicated fiction-memory research or explicit owner approval of its named libraries."
  - "The owner challenged the research basis; the ADR was changed to proposed, with accepted date and approver cleared."
related_adrs:
  - ADR-0005
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
related_events:
  - HIS-20261009-003
corrects:
  - HIS-20261009-003
corrected_by: []
commit_refs: []
---

# Stack decision correction — research before acceptance

## Event
On 2026-10-09 the owner asked if the chosen application stack had first been researched adequately for a fiction-writing product, and how AI memory would work. The initial accepted label on ADR-0005 was overconfident. It was changed to **proposed**, without inventing named-stack owner approval, alongside new R18 memory research.

## Prior state and resulting state
Before: a preferred stack had been presented as accepted despite missing comparative memory evidence. After: it is a proposed design awaiting owner confirmation, benchmark and memory behavior tests.

## Evidence and provenance
The owner's question and the revised ADR/PR are the evidence. Original conversation URL unarchived. No claim the owner explicitly rejected individual tools.

## Interpretation
The preferred Postgres/Next/worker proposal may still be sound, but memory truth, story time, source citations, privacy and revisions must be modeled and tested before stack lock-in.

## Follow-up or correction links
Read the R18 memory study and run the specified synthetic memory/editor prototypes before an owner-approved ADR promotion.

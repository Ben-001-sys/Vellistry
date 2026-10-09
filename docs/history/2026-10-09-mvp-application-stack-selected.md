---
id: HIS-20261009-003
title: Owner requested an initial Vellistry MVP application-stack decision
type: historical-event
status: recorded
occurred_on: 2026-10-09
recorded_on: 2026-10-09
time_precision: day
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
actor: project_owner
version: 1.0.0
sources:
  - "Fiction Writing Project user message 2026-10-09: 'before continue lets decide on our stack we are going to be using'; original permalink pending"
  - "Owner's accepted MVP and no-paid-services direction documented on PRs #10 and #16"
evidence:
  - "Owner requested a definite full application-stack selection after the editor, MVP scope and free conversion direction were established."
  - "Assistant chose the Next.js/PostgreSQL modular monolith documented in ADR-0005; owner did not enumerate or separately confirm those libraries in their literal request."
related_adrs:
  - ADR-0005
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
  - VEL-PRODUCT-CONSTRAINT-20261009-001
related_events: []
corrects: []
corrected_by: []
commit_refs: []
---

# Historical event — Vellistry MVP stack selected

## Event
On 2026-10-09 the owner instructed: **'before continue lets decide on our stack we are going to be using'**. In direct response, the assistant selected the TypeScript, Next.js/React, PostgreSQL/Drizzle, Better Auth, Graphile Worker, Tiptap 3, Calibre/JSON+ZIP, Dexie, optional local Ollama and Docker Compose architecture recorded in [ADR-0005](../decisions/ADR-0005-vellistry-typescript-modular-monolith-mvp.md).

## Prior state and resulting state
Before the event, R18 preserved several viable architecture alternatives and did not select a backend, database, auth engine or deployment model. Afterwards, one implementation baseline was chosen for investigation and implementation planning. **It was not built or end-to-end tested in this event.**

## Evidence and provenance
The quoted owner message is the exact request, but it is **not a verbatim individual-library approval**; the technical selection was made by the assistant under the delegated decision request. Original conversation permalink pending; no GitHub owner comment, invented timing or benchmark is claimed.

## Interpretation
This establishes a binding initial technology direction, not a production acceptance or license/security sign-off. The owner may supersede it explicitly if validation finds material problems.

## Follow-up or correction links
Review the exact-head PR and metadata CI; run the R18 compatibility/durability/security gates and preserve their observed evidence before claiming readiness.

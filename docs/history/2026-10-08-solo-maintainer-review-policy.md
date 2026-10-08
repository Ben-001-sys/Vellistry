---
id: HIS-20261008-002
title: Solo-maintainer pull request review policy clarified
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
  - "Vellistry project conversation on 2026-10-08; permalink pending archival"
evidence:
  - "Owner explicitly stated they are the only person working on Vellistry for now and clarified PR reviewing accordingly."
related_adrs:
  - ADR-0001
related_requirements: []
related_events:
  - HIS-20261008-001
corrects: []
corrected_by: []
commit_refs: []
---

# Historical event — Solo-maintainer review policy

## Event
On 2026-10-08 the project owner clarified that Vellistry currently has one human contributor. A second human reviewer must not be treated as a required PR approval gate during this solo-maintainer phase.

## Prior state and resulting state
Before this clarification, repository instructions referred to human review without specifying how a solo maintainer satisfies it. The working policy now explicitly permits the owner to inspect their own changes, consider optional AI reviews, confirm required automated checks, and merge their own pull requests.

## Evidence and provenance
The owner made the clarification in the current Vellistry planning conversation. An immutable conversation permalink is not yet recorded. This record does not claim that independent human review occurred.

## Interpretation
AI-assisted review is advisory; it cannot be represented as approval by a separate human. GitHub may prevent an author from issuing a formal approving review on their own pull request; owner self-review is documented through a checklist or comment and the merge action, subject to repository branch protections.

## Follow-up or correction links
Reconsider review protection when additional human contributors join; preserve this event and record policy changes separately.

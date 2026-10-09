---
id: HIS-20261009-004
title: Owner directs research in pairs and UI design before implementation
type: historical-event
status: recorded
occurred_on: 2026-10-09
recorded_on: 2026-10-09
time_precision: day
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
actor: project_owner
version: 0.1.0
sources:
  - "Fiction Writing Project conversation 2026-10-09: 'we are going to be doing the research in two at a time we have to finishes the neccessary reseaches before we begin and also before we beginnwe are going to have design UI usign figma make, lovable, etc'. Stable permalink pending."
evidence:
  - "Owner explicitly changed delivery sequence to two concurrent research streams, finish necessary research, then perform UI design via Figma Make/Lovable and related tools before implementation."
  - "This later direction supersedes the prior same-day mandate to go straight from 22:30 planning into feature coding, without retracting the Next/Nest/Supabase stack choice."
related_adrs:
  - ADR-0006
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
related_events:
  - HIS-20261009-003
corrects: []
corrected_by: []
commit_refs: []
---

# 2026-10-09 — Research-first two-track delivery and design-first workflow

## Event

The owner directed Vellistry to run research **two at a time**, close the necessary research before starting product implementation, and complete a separate UI/UX design stage with Figma Make, Lovable and related tools before engineering uses the designs.

## Prior and resulting state

Previously, the owner accepted Next.js + NestJS + Supabase and requested planning finish by 22:30 Ghana time with implementation following. Draft PR #28 already contained compile-verified application scaffolding, and stacked PR #29 held genuine local Supabase two-author isolation research.

The **latest instruction overrides timing**: retain prior code as an experimental foundation, do not expand or promote features while required research/design gates remain open, run two research workstreams at a time, then design/validate the full MVP flows, and finally resume feature development.

## Evidence boundaries

The instruction does not authorize spending on design tools, publishing a public prototype, uploading authors' manuscripts into design tools, discarding prior code, reversing the agreed technical stack, or declaring every R01–R22 exploratory item mandatory.

The plan is `docs/plans/RESEARCH-PAIR-AND-PREIMPLEMENTATION-DESIGN-2026-10-09.md`. The conversation is primary authority; no permanent chat URL was supplied.

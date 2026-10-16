---
id: HIS-20261014-001
title: Owner selects Codex as Vellistry's primary agentic code implementer
type: historical-event
status: recorded
occurred_on: 2026-10-14
recorded_on: 2026-10-14
time_precision: day
created_at: 2026-10-14
updated_at: 2026-10-14
author: project-research
actor: project_owner
version: 1.0.0
sources:
  - "Fiction Writing Project conversation, 2026-10-14: owner asked 'make it an adr we are using codex now', following a clarification that Vellistry uses agentic coding. Conversation permalink pending archival."
  - docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md
evidence:
  - "Owner explicitly requested an ADR and identified Codex as the current coding agent."
  - "The previous role workflow named Cursor as the primary bounded implementation agent."
  - "This instruction did not grant unrelated feature, migration, remote data, deployment or spending authorization."
related_adrs:
  - ADR-0008
related_requirements: []
related_events: []
corrects: []
corrected_by: []
commit_refs: []
---

# Owner selects Codex as primary implementation agent

## Event

On 2026-10-14, while discussing continuation of Vellistry's agentic coding implementation, the owner directed:

> make it an adr
> we are using codex now

This selected **Codex** as the default implementation agent in the existing agentic workflow. ChatGPT remains architect/coordinator and evidence reviewer; GitHub remains the canonical source of truth; the owner retains final change, cost, database and release authority.

## Prior state and resulting state

The earlier PLAN-05 workflow identified Cursor Desktop/Agent as the primary implementation path, and Cursor-era work had produced a merged IMP-001 Book Library (PR #64). Draft PR #65 for Supabase Cloud preflight was subsequently authored through ChatGPT-side GitHub changes rather than by Codex. The decision does not invalidate either artifact or rewrite their authorship.

The new default for **future scoped implementation work** is Codex operating through unique task/ContextPack, isolated branch/worktree, reproducible tests and ExecutionBundle, followed by ChatGPT source/CI review and owner merge decision. Cursor may still be used as an editor or an explicitly assigned alternate.

## Scope and limits

This is a workflow change, not new blanket feature authorization. No evidence is asserted for live Codex tool access, a successful Codex dispatch, new migrations, hosted Supabase fixture creation, deployment, private manuscripts or paid model calls.

## Record lineage

See [ADR-0008](../decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md). Historical Cursor plans and previous test evidence remain unchanged and correctly attributed.

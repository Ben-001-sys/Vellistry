---
id: ADR-0001
title: Co-locate engineering knowledge and application source
type: architecture-decision
status: accepted
created_at: 2026-10-08
updated_at: 2026-10-08
decided_at: 2026-10-08
author: project_owner
approved_by: project_owner
version: 1.0.1
sources:
  - "Vellistry planning conversation, 2026-10-08; permalink pending archival"
  - "Getting Better With Agentic Coding - Copy.zip"
  - "https://github.com/Ben-001-sys/Vellistry/pull/1#issuecomment-6068029790"
evidence:
  - "Owner explicitly agreed to keep Vellistry's engineering knowledge base in the same GitHub repository as its future application on 2026-10-08."
  - "Secondary review: docs/governance/APPROVAL-PROVENANCE-2026-10-08.md (earlier conversation reviewed separately; original historical transcript remains unarchived)"
  - "Primary confirmation: owner Ben-001-sys directly approved ADR-0001 in GitHub PR #1 comment 6068029790 on 2026-10-08"
  - "Historical follow-up: docs/history/2026-10-08-adr-0001-owner-reconfirmation.md"
related_requirements: []
related_features: []
related_contracts: []
related_adrs:
  - ADR-0002
supersedes: []
superseded_by: []
implementation_refs:
  - README.md
  - docs/
---

# ADR-0001 — Co-locate engineering knowledge and application source

## Context and problem statement
Vellistry has substantial research inside conversations and uploaded materials. Without a durable project-owned record, coding/research agents would need to reconstruct previous choices from incomplete chat context.

## Decision
Use a single GitHub repository for Vellistry's application source code and its engineering knowledge base. This decision does **not** mandate an application folder layout, monorepo package split, source tree, or deployment structure; those choices remain open for research and later owner approval.

This is a repository ownership decision, **not** a selection of the application implementation stack.

## Alternatives considered
- Separate code and knowledge repositories: may offer independent permissions but complicates cross-version tracing.
- Chat-only knowledge: easy initially but fragile and vendor-dependent.
- External-only knowledge platform: optional as a reading layer, but not a substitute for the Git-based authority at present.

## Rationale
Co-location supports traceability across implementation, decisions, requirements, tests, and agents without creating a second source of engineering truth.

## Consequences and trade-offs
- Documentation and code can be reviewed in the same PR.
- Repository access must be controlled; secrets and author runtime data must stay outside Git.
- Large archives/binaries may live in appropriate storage with immutable references.
- The documentation tree can evolve as research and app needs become clearer.

## Evidence and verification limits
**Explicit owner reconfirmation is now directly evidenced.** On 2026-10-08 the repository owner `Ben-001-sys` explicitly approved this decision in [GitHub PR #1 comment 6068029790](https://github.com/Ben-001-sys/Vellistry/pull/1#issuecomment-6068029790), limiting it to a shared repository for engineering knowledge and future app code. This current approval is a primary, independently retrievable GitHub record; see [the new historical event](../history/2026-10-08-adr-0001-owner-reconfirmation.md).

**Historical limitation remains:** The earlier planning conversation had only a recoverable owner *question* and an assistant confirmation, not a verified permalink to an explicit earlier approval. [The evidence review](../governance/APPROVAL-PROVENANCE-2026-10-08.md) preserves that distinction. The new GitHub confirmation does **not** reconstruct or authenticate the missing original transcript. The decision does **not** approve an application framework, database, directory tree, deployment or model provider.

## Implementation status
**In progress:** README.md initialized on main; supporting documentation is being drafted on a dedicated branch. No application code is selected or implemented.

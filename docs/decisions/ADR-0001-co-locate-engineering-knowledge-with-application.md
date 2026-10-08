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
version: 1.0.0
sources:
  - "Vellistry planning conversation, 2026-10-08; permalink pending archival"
  - "Getting Better With Agentic Coding - Copy.zip"
evidence:
  - "Owner explicitly agreed to keep Vellistry's engineering knowledge base in the same GitHub repository as its future application on 2026-10-08."
  - "Secondary review: docs/governance/APPROVAL-PROVENANCE-2026-10-08.md (recovered conversational wording; original approval exchange still requires primary verification)"
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
The earlier conversation recorded this as an owner-accepted co-location decision. A targeted follow-up review recovered the user's 2026-10-08T11:00:03Z confirming **question** and the assistant's response, but not the full explicit acceptance exchange. [The approval-provenance review](../governance/APPROVAL-PROVENANCE-2026-10-08.md) documents exactly what is corroborated, what remains unverified, and the reviewer basis for retaining the prior status pending a primary transcript link or owner reconfirmation. **Do not mistake the retrieved question alone for definitive approval proof.**

## Implementation status
**In progress:** README.md initialized on main; supporting documentation is being drafted on a dedicated branch. No application code is selected or implemented.

---
id: ADR-0006
title: Implement Vellistry using Next.js web, NestJS API and Supabase foundation
type: architecture-decision
status: accepted
created_at: 2026-10-09
updated_at: 2026-10-09
decided_at: 2026-10-09
author: project-research
approved_by: project_owner
version: 1.0.0
sources:
  - "2026-10-09 Fiction Writing Project conversation: assistant proposed Next.js + NestJS + Supabase as preferred candidate; owner replied 'agreed', then directed completing planning by 10:30 and beginning implementation. Original conversation permalink pending."
  - "https://github.com/Ben-001-sys/Vellistry/pull/23 — shared Next/Nest manuscript contract, 30 passing API assertions and both frontend builds."
  - "https://github.com/Ben-001-sys/Vellistry/pull/25 — draft, eight passing Chromium editor and draft-recovery checks."
  - "https://github.com/Ben-001-sys/Vellistry/pull/22 — merged, PostgreSQL FTS vs vector benchmark."
  - "https://supabase.com/docs/guides/local-development"
  - "https://supabase.com/docs/guides/auth/jwts"
evidence:
  - "Owner's 'agreed' unambiguously answered the proposal to proceed with the Next.js + NestJS + Supabase preferred architecture, with validation still required."
  - "Owner then directed a 10:30 implementation-planning cutoff and beginning implementation."
  - "Evidence from the framework and story-memory experiments supports feasibility, not production security, reliability or superiority."
  - "Approval does not decide managed versus self-hosted Supabase production deployment, complete account security, job engine, AI model, or a paid service."
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
  - VEL-PRODUCT-CONSTRAINT-20261009-001
related_features: []
related_contracts: []
related_adrs:
  - ADR-0001
  - ADR-0003
  - ADR-0004
  - ADR-0005
supersedes: []
superseded_by: []
implementation_refs:
  - apps/web/
  - apps/api/
  - supabase/
  - docs/plans/MVP-ENGINEERING-IMPLEMENTATION-KICKOFF-2026-10-09.md
---

# ADR-0006 — Next.js + NestJS + Supabase implementation baseline

## Context and problem statement

Vellistry's eight MVP feature areas were approved before choosing the full application stack. R18's 23 synthetic JS memory checks, 12 PostgreSQL checks, 140k-word retrieval comparison, 30 Next/Nest HTTP checks and eight Chromium authoring/recovery tests established bounded feasibility. Those tests did **not** prove production readiness or a decisive framework performance advantage. The author now authorizes beginning development, with planning completed by 22:30 Ghana time on 2026-10-09.

## Decision

**Accept the following as the implementation baseline, not an irrevocable forever stack:** a TypeScript/pnpm workspace holding **Next.js 16 / React 19** for author-facing UI and **NestJS 11** for protected application API and domain modules. Keep the author writing experience on **Tiptap 3** with PostgreSQL-acknowledged chapter revisions and best-effort local Dexie recovery.

Use **Supabase Auth** as the only user sign-in authority; **Supabase PostgreSQL** as the durable relational store with per-author/book Row Level Security; and optional private Supabase Storage for authorized import/export files when that surface is implemented. **No Better Auth alongside Supabase Auth**.

Start with **Supabase CLI local development**, no production credentials and no paid service. Managed Supabase Free versus properly self-hosted production Supabase/PostgreSQL is still open. Do not make cloud deployment a condition for offline/no-paid development. The Nest API must validate Supabase access credentials before serving author data, use RLS-scoped non-service database calls, never accept client-supplied owner IDs as authority and never expose privileged keys to browsers. Next.js is frontend/BFF, not an unguarded duplicate backend.

For Story Memory, retain author-approved temporal canon events and PostgreSQL full-text retrieval as the initial memory system. pgvector/embeddings are **optional** after realistic fiction-quality evidence. Background execution is a separate worker boundary, with specific provider (Graphile Worker versus Supabase Queues) **undecided**. Generative AI remains optional, consented and provider-neutral; no paid model required or secretly selected.

## Alternatives considered

1. **Next.js alone + Supabase**: fewer deployables and valid tested authoring contracts; less explicit backend isolation as the Story Memory, review, and conversion engine expands.
2. **React/Vite + NestJS + Supabase**: valid and tested; a separate frontend/router pattern rather than the owner's chosen Next.js.
3. **Next.js + NestJS + independently managed PostgreSQL/Auth**: potentially leaner runtime; requires more authentication and infrastructure work than requested now.
4. **Microservices with Redis/vector SaaS**: adds overhead and unnecessary paid-service exposure for MVP.

## Rationale

NestJS module boundaries suit protected book/chapter operations, canon review and future AI orchestration, while Next.js supports an integrated author-facing web UI. Supabase provides local Auth and PostgreSQL development, private storage and RLS. Earlier tests proved basic manuscript semantics on both transports. No measured speed superiority is claimed.

## Consequences and trade-offs

- Two runtime applications (+ eventual worker) require separate builds, API contracts, origin/cookie trust design, and operational monitoring.
- Supabase Free hosted quotas/inactivity and manuscript backup risk mean production hosting must be explicitly reviewed before public use.
- Local Supabase development requires a Docker-compatible runtime and must never be exposed as a production service.
- RLS and verified JWT/user sessions must be tested across two actual users. Server secret/service keys must not bypass author isolation.
- Maintain one writing source of truth: accepted revisioned Tiptap JSON in PostgreSQL. IndexedDB is temporary recovery, not an authority on accepted content.
- User's no-paid-service mandate remains binding. Compute/storage and maintenance may still incur real costs.

## Evidence and verification limits

Approval is documented by the two owner messages in the source conversation, not an invented URL. The architecture approval is specific to **beginning MVP implementation**. It does not authorize production deployment, published auth/security claims, a paid service, real-manuscript test data, or merging unrelated draft PRs. PR #17 contains an **earlier proposed Next-only modular-monolith ADR-0005**; that unmerged proposal is not an accepted architecture. This ADR is a distinct owner-directed selection, not an undocumented rewrite of ADR-0005.

Official references: [Supabase local development](https://supabase.com/docs/guides/local-development), [Supabase JWT verification](https://supabase.com/docs/guides/auth/jwts) and [NestJS guards](https://docs.nestjs.com/guards).

## Implementation status

**Implementation authorized and initial scaffolding in progress, not production ready.** First testable slice: local auth token -> NestJS guard -> RLS-scoped book list/create -> Next.js user interface. Later: chapters, revisioned Tiptap editing, draft recovery, profiles, author approval and retrieval. See implementation kickoff plan. All integration test outcomes must be separately recorded and observed before being called complete.

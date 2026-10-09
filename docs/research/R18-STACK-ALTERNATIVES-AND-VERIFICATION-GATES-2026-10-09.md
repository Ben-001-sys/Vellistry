---
id: VEL-RES-R18-20261009-001
type: architecture-comparison
status: decision-recorded-validation-pending
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "PRE-DEVELOPMENT-RESEARCH-REGISTER.md — R18.01–R18.09"
  - "https://github.com/Ben-001-sys/Vellistry/pull/10 — approved MVP"
  - "https://github.com/Ben-001-sys/Vellistry/pull/16 — free Calibre conversion"
  - "https://nextjs.org/docs/app/getting-started/deploying"
  - "https://worker.graphile.org/docs"
related_research:
  - R01
  - R05
  - R07
  - R08
  - R11
  - R15
  - R18
  - R19
  - R21
related_adrs:
  - ADR-0003
  - ADR-0004
  - ADR-0005
---

# R18 — Application-stack comparison and validation map

**Status: owner-directed architecture selected in ADR-0005; interoperability, durability and production safety NOT TESTED.**

## Decision criteria
Highest priority: accepted manuscript safety and recovery, author-canon authority, cross-account isolation, no paid service dependency and reliable DOCX/TXT portability. Second: small-team maintenance, coherent non-AI writing UX, clear module boundaries and a later replaceable AI adapter. Third: long-term scale, publishing extensions and vendor migration. Do not manufacture weighted numerical scores when no measured prototype data exists.

## Alternative comparison

| Candidate | Advantages | Tradeoffs | Outcome |
|---|---|---|---|
| Next.js/React/TypeScript + Postgres/Drizzle/Better Auth, Graphile Worker | One web/API deployment plus worker, shared TS contracts, documented auth/data/queue integrations | Self-hosting and disciplined client/editor boundaries | **Selected** |
| Vite/React + NestJS API + PostgreSQL | Dedicated API, familiar modular controllers | Two separately deployed app layers, additional auth/CORS and typed contracts | Revisit if separate API justified |
| Next.js frontend + NestJS API + Redis/BullMQ | Independent API/queue services | Extra runtime/process/store burden before evidence of need | Not MVP |
| Managed Supabase/Firebase/auth/conversion SaaS | Fast setup | External free-tier caps, private-text processing and possible future paid dependence | Not MVP |
| Local-only SQLite desktop app | Private one-device editing | Server-auth accounts and cross-device storage/sync need another architecture | Not the selected hosted MVP |

## Known proof gaps

- Chapter revision and optimistic save-conflict design must survive browser/network interruptions and lengthy fiction manuscripts.
- Author-approved profile state must remain separate from accepted prose and unreviewed extraction.
- Optional Ollama must show adequate local model quality/context/latency and model-license compliance; software being free does not guarantee free hosted AI or fulfill M6.
- Calibre must be sandboxed and GPL obligations evaluated; DOCX/EPUB round-trip fidelity and JSON/ZIP restore still unverified.
- Browser IndexedDB recovery is best effort, not permanent backup. PostgreSQL backup strategy and author export safety require different tests.
- Better Auth confirms sessions but ownership must be checked on **every** API and worker operation. No public self-service signup/recovery email is selected under the zero-paid-services rule.

## First validation slice

1. Pin Node 24, Next 16, React 19 and actually compatible core packages; build Docker Compose app + Postgres + Graphile Worker and apply safe SQL migrations.
2. Create one book with three chapters; implement Tiptap chapter serialization, server-committed revision saves and honest save UI.
3. Test two accounts with cross-book permission denial and simultaneous stale saves.
4. Add Dexie local unsynced drafts and exercise reconnect/restore behavior.
5. Prove manual Story Profiles and Rules Studio scope in deterministic domain tests with **simulated source guidance**, not prematurely certified authentic frozen rules.
6. Continue with Calibre sandbox/roundtrip and backup restore on synthetic data, then optional local Ollama experiments and consented author studies.

**Research register:** R18's individual checkboxes remain OPEN until measured evidence is attached. The owner-directed stack choice does not retrospectively prove them.

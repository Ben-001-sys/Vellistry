---
id: VEL-RPT-R18-FRAMEWORK-20261009-001
type: experiment-report
status: adapters-committed-ci-not-yet-verified
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
related_research:
  - R05
  - R07
  - R15
  - R18
related_adrs:
  - ADR-0003
  - ADR-0005
---

# R18 — Chapter authoring and session boundary: Next.js vs NestJS/Vite

## Goal

Compare identical, research-only session-scoped SQL chapter reads, transactional optimistic saves, and Tiptap JSON editor surfaces in two supported architectures without selecting either framework prematurely.

- **A:** Next.js 16 App Router Route Handler + React 19 + Tiptap 3.
- **B:** Separate NestJS 11 API + React/Vite 7 + same Tiptap component.
- **Shared:** PostgreSQL 17, one domain module, opaque synthetic hashed session-token records, two invented authors/books, fifteen HTTP assertion cases per adapter.
- **Execution:** GitHub Actions Node 24 / Postgres 17, npm open-source libraries, no paid services or private manuscripts.

## Evidence state

**NOT_EXECUTED at drafting.** The workflow is the source of actual pass/fail, package versions and failure diagnostics. No comparison winner is claimed until both adapters satisfy the same contract.

## Risk and scope

Synthetic session-provisioning is not a user login/authentication product. The test explicitly refuses forged user identity headers and checks stored opaque token hashes/expiry, but it cannot establish the security of Better Auth, production cookie settings, cross-site requests or a complete account lifecycle.

Versioned saves are committed atomically into a chapters table and revision history; this tests basic optimistic concurrency but not disconnection/crash recovery, long-manuscript perf, rich Tiptap schema, multi-device conflict UX, or backup/restore.

The UI modules are build/compile smoke targets, NOT real-browser author trial results. The permitted subset is paragraph+plain text JSON; Tiptap supports far more, but this experimental backend intentionally validates less.

**ADR-0005 remains PROPOSED** until honest direct evidence and owner approval.

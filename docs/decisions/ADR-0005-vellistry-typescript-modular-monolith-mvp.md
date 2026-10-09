---
id: ADR-0005
title: Adopt a self-hosted TypeScript modular monolith for Vellistry MVP
type: architecture-decision
status: proposed
created_at: 2026-10-09
updated_at: 2026-10-09
decided_at: null
author: project-research
approved_by: null
version: 0.2.0
sources:
  - "Fiction Writing Project owner request 2026-10-09: 'before continue lets decide on our stack we are going to be using'; permalink pending"
  - "Owner's 2026-10-09 no-paid-services instruction, recorded on PR #16"
  - "https://github.com/Ben-001-sys/Vellistry/pull/10 — accepted eight-area MVP scope; PR review separate"
  - "https://github.com/Ben-001-sys/Vellistry/pull/6 — owner-selected Tiptap editor, ADR-0003; PR review separate"
  - "https://github.com/Ben-001-sys/Vellistry/pull/16 — Calibre conversion/portable backup ADR-0004; PR review separate"
  - "PRE-DEVELOPMENT-RESEARCH-REGISTER.md — R08/R15/R18/R21"
  - "https://nextjs.org/docs/app/getting-started/deploying"
  - "https://better-auth.com/docs/adapters/drizzle"
  - "https://worker.graphile.org/docs"
  - "https://dexie.org/docs/StorageManager"
evidence:
  - "Owner expressly asked for the full stack choice after adopting the writing-first MVP, Tiptap 3 and the zero-paid-services constraint."
  - "Official docs confirm Next.js self-hosted Node/Docker, Better Auth-Drizzle/Postgres integration, Graphile Worker PostgreSQL job processing and best-effort IndexedDB draft storage."
  - "Exact component selections are the assistant's delegated technical decision responding to the owner's request, not a fabricated direct owner quotation approving each individual package."
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
  - VEL-PRODUCT-CONSTRAINT-20261009-001
related_features: []
related_contracts: []
related_adrs:
  - ADR-0001
  - ADR-0003
  - ADR-0004
supersedes: []
superseded_by: []
implementation_refs: []
---

# ADR-0005 — Proposed Vellistry MVP full application stack

## Context and problem statement

The owner-approved eight-area MVP includes a serious **AI-optional fiction editor**; books, chapters and reliable drafts; TXT/DOCX exchange and full backup; author-approved Character/Storyline profiles; source-frozen, editable Rules Studio; safe reviewable AI proposals; privacy and accessibility. Full professional EPUB/print and native Cover Studio are post-MVP. The owner expressly prohibited **paid services** for the current project/MVP. Earlier R18 research held full-stack selection pending; the owner then explicitly requested a decision on 2026-10-09.

## Proposed decision — not yet accepted

The owner requested that a stack be chosen, but did not separately approve the named technologies. After asking whether sufficient research and an AI memory design preceded the choice, the project requires deeper comparison. This proposal must not be presented as a fully researched or owner-approved architecture. See [R18 fiction memory study](../research/R18-FICTION-MEMORY-AND-STACK-REASSESSMENT-2026-10-09.md) and its pending experiments.

**Leading candidate:** Adopt **one self-hostable TypeScript modular monolith** (one web/API process plus one standalone background worker process) and **one PostgreSQL database**. Use the preselected open-source Tiptap 3 editor and Calibre converter; no required paid SaaS, vendor-specific hosted database, paid auth or conversion API.

| Concern | Selected technology / rule |
|---|---|
| Language and runtime | TypeScript, Node.js 24 LTS; pnpm workspaces; pin exact versions before first runnable integration |
| Web and API | Next.js 16 App Router with React 19; authenticated Node-runtime Route Handlers; self-hosted, not Vercel-dependent |
| UI | Tailwind CSS 4 + source-owned shadcn/ui components |
| Editor | Tiptap 3 / ProseMirror; client-mounted editor with chapter-associated versioned JSON |
| Database | PostgreSQL for books, chapters, accepted revisions, profiles, approval/canon events, rule configs, sessions and job metadata |
| SQL interface | Drizzle ORM + reviewed versioned SQL migrations; transaction and optimistic revision checks |
| Authentication | Better Auth with Drizzle/PostgreSQL; invite-only initial alpha, verified server-side sessions and per-book authorization |
| Background jobs | Graphile Worker backed by PostgreSQL; separate Node worker; idempotent retries, no Redis |
| Local unsynced recovery | Dexie.js/IndexedDB device-local copy; NOT the authoritative store and NOT guaranteed forever |
| File conversions | Calibre ebook-convert sandboxed in worker; native UTF-8 TXT; selected earlier in ADR-0004 |
| Project portability | Schema-versioned JSON manifests + JSZip, chapters/approved profiles/active rules, cryptographic checksums |
| EPUB validation | EPUBCheck for experiments; no change to post-MVP publishing deferral |
| AI research path | Optional **local Ollama**, local open-licensed model TBD after quality/hardware/security/license tests; no paid API dependency |
| Tests | Vitest for domain/API tests, Playwright for browser workflows, PostgreSQL integration tests |
| Deployment | Docker Compose on permitted local/existing Linux compute + Caddy reverse proxy; separate persistent database/backups |

### Product and data invariants

1. **Manuscript source of truth:** The accepted chapter JSON is authoritative, persisted transactionally in PostgreSQL with revision IDs. A server response may say 'saved' only after successful commit. Reject or stage stale edits; do not silently overwrite later writing. Chapter-sized logical edit boundaries are initial architecture, test against long-text workloads before release.
2. **Browser safety:** Dexie caches unsynced revisions for crash/offline recovery; browser storage is best effort, device-accessible and not a substitute for confirmed PostgreSQL saves, off-device DB backups, or the author's exported ZIP. On reconnect, author sees sync/conflict status.
3. **Canon authority:** Accepted prose and *author-approved* profile facts are separate authorities. Store candidate extraction/rewrite events and approved deltas with source revision/story time and explicit status. Never silently promote a model suggestion, a character's belief or a pending retcon.
4. **Rules authority:** Immutable 13-domain/130-lens source archive stays separate from author toggles/custom rules/effective-context snapshots. No production default-pack claim until R01 resolves original variant and packaging gates. Disabled rules must be absent from actual new request context.
5. **Account/book isolation:** Better Auth verifies sessions; every API operation and worker operation re-checks ownership and scope. Consider PostgreSQL RLS as defense-in-depth after an integration proof. ORM types do not imply security. No cross-book leakage to workers, models or exports.
6. **Background reliability:** Graphile Worker is at-least-once, so retries need idempotency, author approval gates and atomic adoption. Calibre gets strict file size, decompression, CPU/memory/time and temp directory limits, low privilege, disabled network where possible, content validation and private outputs. Never execute untrusted filename strings via a shell.
7. **Full recovery:** Versioned export ZIP must preserve accepted text, chapter ordering, approved story profiles, active author rules and version identifiers, excluding API keys and unapproved AI content by default. Restore must validate and stage before author-approved adoption. Operational PostgreSQL backups and restore drills are independent obligations.
8. **No-paid AI limit:** Local Ollama software can run models without a paid API, but GPU/CPU, model license, context length and writing quality constrain feasibility. Do not silently activate Ollama Cloud or another metered provider. If local models fail M6 acceptance gates, mark M6 unmet and seek a separate explicit owner decision rather than claiming the MVP complete.
9. **Non-AI authoring first:** Books/editor/save/profile editing and export must work with Ollama disconnected and no credential entered. Do not expose local model endpoints to the internet. Public registration, password recovery mail and external AI contracts require separate security/operations research; no claim these exist already.

### Bounded codebase layout (initial implementation baseline)

| Area | Purpose |
|---|---|
| apps/web | Next.js app, client-mounted editor, protected Route Handlers |
| apps/worker | Node/Graphile job handler and sandboxed Calibre boundary |
| packages/domain | Pure rules, canon, revision, approval and book policies |
| packages/db | Drizzle schema, migrations, authorized repositories |
| packages/contracts | Zod schema validation, type-safe job/import/export contracts |
| packages/ui | Shared Vellistry UI patterns when reuse is real |
| infra | Compose, Dockerfiles, reverse proxy, backup and recovery scripts |
| docs | Accepted decisions, R18 research, source provenance and reports |

Do not add NestJS, a separate Express API, Redis, microservices, vector database, Kubernetes, an MCP server, a full offline synchronization layer, paid Tiptap extensions or paid hosted AI merely because those technologies exist elsewhere. Introduce a new boundary after measured need and an explicit decision.

## Alternatives considered

- **Vite/React + NestJS or Express:** suitable but two distinct frontend/API deployments and auth/CORS contracts, adding complexity before any scale evidence. Revisit only if tests justify an independent API.
- **Next.js + separate NestJS + Redis/BullMQ:** redundant API and extra stateful service for current scope; not selected.
- **Managed Firebase/Supabase/auth/queues/conversion free tiers:** free-tier limits and provider data-processing dependencies can break zero-paid/privacy commitments; not selected.
- **SQLite-only offline desktop stack:** valid future companion, insufficient by itself for selected hosted multi-account MVP without building separate synchronization and cross-device identity flows.
- **Kubernetes/multiple microservices/graph database:** disproportionate to initial author-first product.
- **Ollama model hosting as mandatory public service:** not selected; free local software does not make broad hosted inference free.

## Rationale

TypeScript across Next.js and the worker supports one controlled codebase with shared validation and domain logic. Next.js officially supports Node/Docker self-hosting. PostgreSQL supports reliable structured revision transactions and Graphile Worker without a Redis dependency. Better Auth supports a PostgreSQL/Drizzle adapter. Tiptap 3, Calibre and ZIP were selected separately; this ADR integrates their roles while keeping author-owned manuscript state independent of generated files.

## Consequences and trade-offs

- The architecture is reasonably maintainable by a small team but self-hosting carries real CPU/RAM/storage, backup, patching and security costs even without subscriptions.
- Next.js authenticated mutations must be protected like public APIs; frontend access-control UI does not secure book data.
- Graphile background jobs run at least once; each document/suggestion job must tolerate duplicate execution.
- IndexedDB is best effort and device-local; it cannot guarantee durable offline state.
- Exact dependency versions, production migrations, Calibre GPLv3 compliance, safe hosting, outbound email/recovery and a viable no-fee local model all require their own implementation and verification records.

## Evidence and verification limits

Verified documentation:
- Next.js self-hosting: https://nextjs.org/docs/app/getting-started/deploying
- Next.js 16 baseline: https://nextjs.org/docs/app/guides/upgrading/version-16
- Authentication authorization controls: https://nextjs.org/docs/app/guides/authentication
- Better Auth + Drizzle: https://better-auth.com/docs/adapters/drizzle
- Drizzle/PostgreSQL: https://orm.drizzle.team/docs/get-started-postgresql
- Graphile Worker: https://worker.graphile.org/docs
- Browser IndexedDB eviction: https://dexie.org/docs/StorageManager
- Ollama local vs cloud: https://github.com/ollama/ollama/blob/main/docs/api/introduction.mdx

**Decision provenance:** Owner said 'before continue lets decide on our stack we are going to be using' on 2026-10-09. Specific choices above are the assistant's delegated technical selection in response, **not** a false claim that the owner named Next.js, PostgreSQL, Better Auth or Ollama individually. Original chat permalink pending. ADR-0003 and ADR-0004 are in different unmerged PRs when this ADR is drafted; those choices remain owner-selected in conversation but not misrepresented as merged files in main.

**No implementation/benchmark proof is claimed.** No integrated authenticated author workflow, cross-account isolation test, browser crash recovery, large-book benchmark, real DOCX round-trip, secure worker execution, consented model benchmark or production restore trial was executed for this ADR. R18.01–R18.09 and R01/R05/R07/R08/R11/R15/R19 gates remain open.

### Required pre-implementation/pre-release gates

| ID | Evidence to collect |
|---|---|
| A18-01 | Clean pinned Next.js/Tiptap/Better Auth/Drizzle/worker Docker Compose boot and schema migration |
| A18-02 | Two users/books: no unauthorized API or background-job read/write across manuscripts, profiles, rules and exports |
| A18-03 | Tiptap three-chapter writing, 100k-word synthetic stress, selection/paste/IME, save/reload, stale-write conflict |
| A18-04 | Network loss/browser crash with Dexie recoverable draft and explicit reconciliation after reconnect |
| A18-05 | Author-approved vs unapproved/retconned story-profile status across scene time and source revisions |
| A18-06 | R01 frozen-pack provenance and disabled-rule absence in complete effective prompt snapshot |
| A18-07 | Graphile duplicate/cancel/retry + sandboxed Calibre DOCX import/export, visible fidelity warnings |
| A18-08 | Independent JSON/ZIP export/restore preserving book IDs/approved canon/rules, excluding private secrets |
| A18-09 | Optional Ollama model security/license/hardware quality/latency validation, no paid endpoint |
| A18-10 | Production-worthy HTTPS, session protections, encrypted backup and restore drill, accessibility/privacy tests |

## Implementation status

**Initial architecture PROPOSED, not yet approved. Implementation NOT STARTED by this record. Public release NOT READY.** Immediately implement only bounded synthetic/invite-only vertical slices after separate work authorization; verify A18-01..04 before expanding to full stack features. Record any material reversal in a later ADR, not by rewriting evidence.

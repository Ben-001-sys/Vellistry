# Vellistry — initial implementation

Vellistry is an author-controlled fiction writing application with optional AI. This is the **first application foundation**. It is not yet a deployed product and does not claim complete authentication, manuscript recovery, or accepted story memory.

## Current development gate — updated 2026-10-10

The initial Next.js/NestJS/Supabase foundation from [PR #28](https://github.com/Ben-001-sys/Vellistry/pull/28) and research from all six pairs have merged. [PR #43](https://github.com/Ben-001-sys/Vellistry/pull/43) **merged on 2026-10-10**, restoring **21 missing K2 and Pair 04/05 research files** to `main` (merge `e7f1c82ced0a4e8b3196aaa7e5b874b41afc4523`). The [exact PR #43 head](https://github.com/Ben-001-sys/Vellistry/commit/a20b6cd54aff4e80408a1fdd194a782709bf6134) passed seven relevant workflows, including the combined application/research baseline and real disposable Supabase K2 tests. This establishes research/source integration **not production security, user validation, design approval or deployment**; no separate merged-main rerun is claimed.

- [CURRENT-STATE.md](CURRENT-STATE.md) contains the newest authoritative integration snapshot; older sections document their historical PR states.
- [Six-pair research/design checkpoint](docs/research/SIX-PAIR-RESEARCH-TO-DESIGN-GATE-2026-10-09.md) separates experiments from pending rule mapping, auth/session, DOCX, provider, usability and legal gates.
- **Owner subsequently approved Waves 1–3 research recommendations (2026-10-10):** See [owner event](docs/history/2026-10-10-owner-waves-01-03-recommendations-accepted.md) for manual-first writing, 134-rule future catalog policy (not activated), accessible/loss-aware editor/export requirements and author-governed private Story Profiles. This does **not** close unrun tests, production security, legal/provider decisions, or the separate Option B prohibition on UI prototypes and implementation.
- **Owner BYOK clarification (2026-10-10):** Vellistry presents supported provider/model options and a key entry field; writers supply **their own free OR paid provider API key**. The provider bills the writer according to their account. Optional AI works only when explicitly invoked; the manual editor never requires a key. See [owner event](docs/history/2026-10-10-owner-byok-free-or-paid-clarification.md). This does not authorize provider integration or override manuscript privacy requirements.
- **Wave 5 scoped MVP decision (research-only):** [Single-pass MVP scope choice](docs/plans/OPTION-B-WAVE05-MVP-FINAL-DECISION-2026-10-10.md) selects optional **Continue** and **Rewrite selected text** with curated OpenRouter BYOK models (author-owned **free OR paid API key**), plaintext suggestion review, Accept/Reject, server-revision-safe acceptance and history-backed Undo. Existing eight core MVP areas remain unchanged. No real provider model evaluation or implementation occurred; only synthetic local tests were executed, and the accepted Option B design/prototype restriction still applies.
- **Owner design decision: Option B ACCEPTED (2026-10-10).** Complete outstanding pre-design research and owner-critical decisions **before prototypes**. See [accepted decision](docs/history/2026-10-10-owner-option-b-predesign-selected.md) and [two-track research closeout plan](docs/plans/OPTION-B-PREDESIGN-RESEARCH-CLOSEOUT-2026-10-10.md). No Figma Make/Lovable/Figma Design prototype, feature implementation, deployment or paid inference is newly authorized; a separate owner decision is required to enter design.
- [Combined research/app baseline CI](.github/workflows/combined-main-baseline.yml) runs testable merged Python contracts, pnpm app builds and disposable PostgreSQL restore assertions. A passing baseline is **not** security certification, usability approval or permission to release.
- Existing experimental security code must not be promoted as public private-manuscript routes without the appropriate integrated authorization, active-session and browser tests.

## Approved direction

See [ADR-0006](docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md) and the [dated implementation kickoff plan](docs/plans/MVP-ENGINEERING-IMPLEMENTATION-KICKOFF-2026-10-09.md).

- `apps/web`: Next.js 16, React 19, Tailwind 4 and browser/server Supabase session clients.
- `apps/api`: NestJS 11 health and protected books endpoints.
- `supabase/migrations`: PostgreSQL books, chapters, immutable revision tables and author/book RLS.
- Story Memory, Tiptap 3 full editor, revision-save RPC, long-term backup and optional AI will follow as tested vertical slices.
- All development can use the local Supabase CLI; **no paid services required**.

## Prerequisites

Node 24, pnpm 10, and Docker-compatible container runtime for local Supabase. Local Supabase must remain bound to a trusted local interface.

## Local startup

1. Run `corepack enable` (or install pnpm 10 independently) and `pnpm install`.
2. Run `pnpm supabase:start`. Then inspect local URL and **local-only publishable/anon key** with `pnpm supabase:status`.
3. Copy `.env.example` to `apps/api/.env`. Set `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` from the local status. Keep `API_PORT=4100`.
4. Copy the `NEXT_PUBLIC_*` and `VELLISTRY_API_BASE_URL` lines into `apps/web/.env.local`. Use the same local project URL and publishable key.
5. Run `pnpm supabase:reset` to create the sample **schema**. This operation **destroys local database content**; only run on a disposable development instance.
6. Start `pnpm dev:api` and `pnpm dev:web` in separate terminals.
7. Open `http://127.0.0.1:3000`; sign up through the local Auth server and create your first book. If email confirmation is enabled, use the local Supabase email inbox or appropriate development settings to confirm before signing in.

API health endpoint: `http://127.0.0.1:4100/v1/health`. All other exposed book endpoints require a verifiable Supabase access token and RLS permissions.

## Security boundaries

- Use only Supabase **publishable/anon** keys in web or author-scoped API paths. Never commit a service-role key or browser token.
- The NestJS API validates the bearer token against Supabase Auth on each author request. The database sets `owner_id` from `auth.uid()`, not a submitted user ID. The API performs PostgREST queries with the author's bearer token, so RLS filters remain effective.
- Session retrieval in the Next.js proxy is not relied on as the sole authorization: Nest rechecks identity. Real client cookie refresh, CSRF, proxy boundaries and session revocation must still be verified.
- Public health does not claim database/identity service availability.
- Chapter revisions are deliberately **read-only** in this first migration. The next vertical slice introduces a transactional audited revision-save RPC before adding editor write APIs.
- `apps/web` does not yet integrate shadcn/ui or full Tiptap chapter editor. These are next milestones, not silently completed features.
- No public deployment, real author manuscript or real credentials were used in bootstrap CI.

## Current checks

The integrated PR #43 research checkout passed app builds, metadata/governance checks, local Supabase Auth/RLS/session research tests, and PostgreSQL recovery fixtures. These are **disposable local research results**. Production-facing K2 requires integrated Nest-only private manuscript authorization, browser SSR/session and account-switch checks, Storage and export protections, and deployment-level security review before release.

See earlier [research tests](docs/research/spikes/r18-framework-slice/README.md) for synthetic Next/Nest HTTP and Chromium evidence; research fixtures are not production authentication.

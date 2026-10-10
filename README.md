# Vellistry — initial implementation

Vellistry is an author-controlled fiction writing application with optional AI. This is the **first application foundation**. It is not yet a deployed product and does not claim complete authentication, manuscript recovery, or accepted story memory.

## Current development gate — updated 2026-10-10

The initial application scaffold from [PR #28](https://github.com/Ben-001-sys/Vellistry/pull/28) and bounded research from all six paired investigations are now merged into `main`. The project is **not deployed** and is **not authorized to bypass its research/design-first instruction** merely because research and scaffold PRs were merged.

- [CURRENT-STATE.md](CURRENT-STATE.md) contains the newest authoritative integration snapshot; older sections document their historical PR states.
- [Six-pair research/design checkpoint](docs/research/SIX-PAIR-RESEARCH-TO-DESIGN-GATE-2026-10-09.md) separates experiments from pending rule mapping, auth/session, DOCX, provider, usability and legal gates.
- [Owner design-entry decision request](docs/plans/DESIGN-ENTRY-DECISION-2026-10-10.md) is **proposed only**. Figma Make/Lovable exploration and canonical editable Figma Design require a recorded owner decision; core flow approval must precede new feature implementation.
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

The initial CI compiles both apps and runs Git metadata validation. **A passing build is not an authenticated Supabase integration pass**. Multi-account Supabase Auth, RLS and session-revocation tests remain mandatory before treating K2 as complete.

See earlier [research tests](docs/research/spikes/r18-framework-slice/README.md) for synthetic Next/Nest HTTP and Chromium evidence; research fixtures are not production authentication.

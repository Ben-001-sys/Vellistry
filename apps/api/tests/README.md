# K2 real Auth/RLS integration suite

Runs actual local Supabase auth, PostgREST, database migrations and the compiled NestJS API; **not** R18's synthetic session mock.

**Safety:** Must target `localhost` API URLs, disposable development database and generated `example.com` accounts. A test-only `SERVICE_ROLE_KEY` is passed exclusively to the fixture script to seed synthetic chapters/revisions and remove test-created accounts. It is **never** used by Nest author routes, stored in Git or included in artifacts. No author manuscript is read or sent anywhere.

The 17 grouped checks cover authentic signup/login, token validation, book owner assignment and forged owner denial, cross-author reads/updates/deletes, unauthenticated access, chapter/revision grants and RLS, and deliberate prevention of unversioned accepted-text changes. One observation reports the behavior of an old JWT after sign-out **without asserting immediate invalidation**.

CI workflow: `.github/workflows/k2-supabase-auth-rls.yml`. Real workflow success, evidence output and observed behavior must be inspected on exact head; this README is not a pass claim.

Official sources and threat boundaries are in `docs/research/K2-LOCAL-SUPABASE-AUTH-RLS-2026-10-09.md`. Local Supabase is not hardened for public deployment.

The next implementation gates are a proper Next.js SSR refresh Proxy, an explicit expired/revoked-session acceptance policy, a transactionally safe chapter-save RPC and full browser tests with real Auth.

# K2 real Auth/RLS integration suite

Runs actual local Supabase auth, PostgREST, database migrations and the compiled NestJS API; **not** R18's synthetic session mock.

**Safety:** Must target `localhost` API URLs, disposable development database and generated `example.com` accounts. A test-only `SERVICE_ROLE_KEY` is passed exclusively to the fixture script to seed synthetic chapters/revisions and remove test-created accounts. It is **never** used by Nest author routes, stored in Git or included in artifacts. No author manuscript is read or sent anywhere.

The 17 grouped checks cover authentic signup/login, token validation, book owner assignment and forged owner denial, cross-author reads/updates/deletes, unauthenticated access, chapter/revision grants and RLS, and deliberate prevention of unversioned accepted-text changes. One observation reports the behavior of an old JWT after sign-out **without asserting immediate invalidation**.

CI workflow: `.github/workflows/k2-supabase-auth-rls.yml`. Real workflow success, evidence output and observed behavior must be inspected on exact head; this README is not a pass claim.

Official sources and threat boundaries are in `docs/research/K2-LOCAL-SUPABASE-AUTH-RLS-2026-10-09.md`. Local Supabase is not hardened for public deployment.

The next implementation gates are a proper Next.js SSR refresh Proxy, an explicit expired/revoked-session acceptance policy, a transactionally safe chapter-save RPC and full browser tests with real Auth.

## Real Supabase CI outcome

**Verified 2026-10-09:** [run #37987927967](https://github.com/Ben-001-sys/Vellistry/actions/runs/37987927967), code commit `29a09d17b8f9e5c35d5a06089b456bfd19d1c375`, **17/17 groups PASSED** using genuine Supabase Auth and PostgREST, plus NestJS; [build regression #37987927975](https://github.com/Ben-001-sys/Vellistry/actions/runs/37987927975) passed.

An initial test attempt exposed default authenticated table DML grants that had not been explicitly revoked. A separate migration restricts `chapters` and `chapter_revisions` to SELECT for author tokens until a controlled revision-save RPC is implemented. The new test verifies both permission-denied response and unchanged chapter content.

**Critical diagnostic:** A previously issued JWT was rejected by Nest after sign-out (401), but a direct PostgREST request was still accepted (no error). This follows the documented concern that signed access tokens can survive refresh-token revocation until `exp`; the suite did not count post-signout returned rows. Production logout/session handling across both data paths must be a separate reviewed security gate. Do not claim full K2 or immediate revocation from the bounded pass.

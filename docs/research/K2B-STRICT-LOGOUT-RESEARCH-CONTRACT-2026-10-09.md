---
id: VEL-RES-K2B-STRICT-LOGOUT-CONTRACT-20261009-001
type: security-research-protocol
status: proposed-not-runtime-verified
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "https://github.com/Ben-001-sys/Vellistry/pull/32"
  - "docs/research/PAIR-01-ACCELERATED-CLOSEOUT-BRIEF-2026-10-09.md"
  - "https://supabase.com/docs/guides/auth/sessions"
  - "https://supabase.com/docs/guides/api/securing-your-api"
  - "https://supabase.com/docs/guides/auth/server-side/creating-a-client"
related_research:
  - R15
  - R18
related_adrs:
  - ADR-0006
---

# K2B — Strict logout and Nest-only manuscript research contract

**Authority:** The owner approved researching and testing the strict logout and Nest-only private manuscript direction; final architecture, schema migrations and deployment remain unapproved. This is an experimental test protocol, not implemented application code. Zero paid services; only disposable local Supabase and synthetic manuscripts.

## Verified baseline — reuse instead of repeating general research

PR #32 and actual local CI establish (a) 17/17 K2A account isolation test groups; (b) 9/9 K2B session test/observation groups; and (c) 6/6 privilege-lockdown groups. After Alice signed out locally, her old JWT still retrieved **one private Alice book** via direct PostgREST, while Nest rejected it with 401. Bob was isolated. Revoking direct chapter/revision SELECT blocked direct content reads without breaking Nest books; also revoking book grants **broke the existing Nest books API (500)**. Never copy that blind revocation into production.

## Security contract to test (PROPOSED, NOT PROVED)

For a session whose logout has been committed and observed by the backend, all **new server-authorized private manuscript reads/writes** must reject its old JWT even before token expiration. Local logout must preserve a second independently active same-author session. Other authors cannot gain access. Apply to book titles, chapter bodies, revisions, character/storyline profiles, export, restore and other relevant manuscript access routes.

**Limits:** Neither a server nor logout can retroactively erase downloaded plaintext, screenshots, in-flight requests authorized earlier, offline copies, or still-valid independently usable signed object URLs. Those cases require explicit disclosure and additional policies. Never claim complete instant deletion.

## Architecture hypotheses (research only)

**H1: Nest-only data access.** Move private manuscript data to a non-exposed schema (or equivalently prohibit direct Data API access by grants) while maintaining a separate, **working** restricted server-side Postgres transport for Nest. Deny authenticated/anon direct table, view and RPC access to private manuscript content. Titles and revisions matter as much as body text.

**H2: Live session authorization.** Token signature/expiration validation alone does not prove that a session remains active. An additional sensitive-request authorization check must correlate a verified user's token with live session identity and reject revoked/missing sessions. Candidate mechanisms include a carefully audited active-session lookup; measure reliability, performance and outage behavior rather than assuming Auth getUser or getClaims has universal semantics.

**H3: Defense in depth.** Server DB role must not be superuser, table owner, service-role bypass, or BYPASSRLS. Test restricted grants, author-bound parameterized SQL, RLS or independently tested ownership guards. If transaction-scoped identity is used, test SET LOCAL boundaries, pool reuse, injection and session mixups; no app-supplied author ID should override verified identity. SECURITY DEFINER functions, views, default grants and PUBLIC EXECUTE are additional risk surfaces.

**H4: Browser isolation.** Proper Next.js 16 Proxy refresh must synchronize request and response cookies, avoid cached cross-user pages, and protect two-tab signout/account switching. Locally unsynced drafts must not display for another account or be silently lost; select per-account retention/recovery policy after threat review.

**H5: Separate storage/export perimeter.** If the MVP uses private Supabase Storage, direct object permissions and already-issued signed links need their own expiry and revocation tests. Server-side exports/backups must follow author/session protection too.

## Focused disposable integration experiment sequence

| Test | Experiment | Required result |
|---|---|---|
| K2B-A — Baseline | Alice session A and B, Bob, two books plus chapter revision; capture PostgREST/Nest status, actual row count and verified session ID | Reproduce known findings without any production data or leaked tokens |
| K2B-B — Transport first | Implement **research-only** Nest server DB transport under least-privilege identity BEFORE changing grants | Authorized Alice book and chapter operations work; Bob denied; no role/pool leakage |
| K2B-C — Restricted DB | In disposable local DB only, prohibit direct PostgREST/GraphQL/table RPC manuscript access | All direct private read attempts denied while new Nest transport continues working |
| K2B-D — Revoked JWT | Local logout A, reuse A's still-unexpired JWT across every new content path; test active B and Bob; repeat global logout | Denials match strict liveness contract; active B still authorized until its own revocation |
| K2B-E — Expiry/outage | Malformed/altered/expired JWT, invalid session ID, transient Auth/DB outage, concurrent pool requests | Fail closed on private access; normal failures observable rather than corrupting work |
| K2B-F — Browser | Real Chromium Next SSR Proxy refresh, multiple tabs, logout, Alice-to-Bob switch, cached pages and unsynced draft recovery | No cross-account content; draft recoverable by rightful author subject to explicit policy |
| K2B-G — Peripheral paths | Private Storage, signed object URL, export/backup, account deletion and retention tests if supported | No unreviewed content bypass or inaccurate immediate-revocation promise |

Use PR #32's guarded loopback-only integration fixtures and redacted log style. Log status codes, anonymized counts, authorization checks, and exact tested commit SHA; do not log bearer JWTs, passwords, secret keys, real prose or DB URLs. Run full local Auth/PostgREST/Postgres/Nest tests; a mock or successful build **does not** count as runtime proof.

## Owner decisions remaining after experiments

1. Confirm the precise logout guarantee for *new* authorized operations, separate from downloaded/in-flight copies.
2. Select live-session check design and failure mode after runtime benchmarks.
3. Approve or reject restricted Nest gateway and revised grants/schema **after** functionality/security evidence; current Nest/PostgREST dependency cannot survive blind book revoke.
4. Select safe offline draft retention/recovery and shared-device account-switch behavior.
5. Decide allowed signed link expiry/storage exposure and retention/deletion obligations.

## Verification status

- Historical local K2A isolation: **PASS** (17 groups).
- Historical K2B session behavior: **MEASURED**, residual valid-JWT direct data access confirmed.
- Historical grant experiment: **PASS as a diagnostic**, but Nest book revocation causes documented failure.
- New Nest restricted transport, live-session cutoff, Next SSR, storage, account switching, deletion: **NOT RUN**.
- Final authorization policy / migration / deployment: **NOT APPROVED**.

## References

Supabase [Auth sessions](https://supabase.com/docs/guides/auth/sessions) documents live session IDs and JWT lifetime limits. [Securing the Data API](https://supabase.com/docs/guides/api/securing-your-api) distinguishes SQL grants, RLS and schema exposure. [Creating SSR clients](https://supabase.com/docs/guides/auth/server-side/creating-a-client) documents Next 16 Proxy request/response token refresh. Follow these as upstream context, and use PR #32 real tests for the observed Vellistry behavior.

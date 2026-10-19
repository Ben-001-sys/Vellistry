## Explicit owner decision — Checklist #06 / exact third SQL migration definition approved (2026-10-18)

**OWNER AUTHORIZATION — relayed verbatim from the owner's direct ChatGPT instruction (not an independently owner-authored GitHub comment):**

> As Vellistry owner, I explicitly approve only the exact proposed SQL migration definition 20261015171325_restrict_book_privileges.sql, Git blob 230b1540bb5b8962fd2b797d4f8a467d3c035978, SHA256 c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81, for a future bounded development migration plan. I do not authorize hosted Supabase access, dry-run, migration execution or PR merge. Record this decision and prepare the next safe task.

### Precisely approved definition — no source change

- File: `supabase/migrations/20261015171325_restrict_book_privileges.sql`.
- Exact source: unmerged, draft [PR #68](https://github.com/Ben-001-sys/Vellistry/pull/68) head `cbb379fa4a4eaa9f576f3abcce2c2258d22cc551`.
- Confirmed Git blob: `230b1540bb5b8962fd2b797d4f8a467d3c035978`.
- Confirmed SHA-256: `c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81`.
- Exact reviewed SQL:
```sql
revoke all privileges on table public.books from public, anon, authenticated;
grant select, insert, update, delete on table public.books to authenticated;
```
- Evidentiary basis: [independently reviewed actual GitHub-hosted PG17 17.11 BEFORE/AFTER tests](https://github.com/Ben-001-sys/Vellistry/issues/74#issuecomment-6250984828), [run #39135149678](https://github.com/Ben-001-sys/Vellistry/actions/runs/39135149678), 48 case fixture and supplemental negative privilege/RLS operations passing. That **synthetic** result does not constitute hosted database acceptance.

### Approved vs. withheld authority

**APPROVED:** The **exact bytes** of this third migration as a *design/source definition for a future, separately bounded hosted-development migration plan*. This clears the narrow owner **definition decision** in remediation #06.

**NOT APPROVED:** ANY connection, catalog read or other access to hosted Supabase (including `vellistry-dev`), Supabase CLI login, `migration list`, `db push --dry-run`, remote data/auth/user access, actual SQL apply, migrations #1–#3 to hosted dev/prod, reset/seed/roles/vault, secrets/tokens, project settings, paid resources, PR merge or deployment. A future offline task may **write up proposed commands** but must not execute them or require credentials. This approval is not a production authorization or blanket permission for modified SQL blobs.

**Still pending:** PR #68 remains **DRAFT/UNMERGED**, head `cbb379...`; GitHub reports merge conflict/dirty against today's advanced `main fca0d96fd071f1165e3e16658d821a3d36a20293` (post-PR80). Its historical automatic `implementation-foundation.yml` changes are incompatible with the merged single automatic CI contract, and original ChatGPT-authored PR65 provenance must be preserved. A new owner-scoped Codex task with fresh current-main ContextPack is required before any source/integration edits. New SQL definition hash or scope change requires a new **explicit owner SQL decision**.

### Decision and status discipline
**#06: DONE — exact SQL definition approved; HOSTED MIGRATION NOT AUTHORIZED.** #07 safe hosted migration access, #08 actual hosted acceptance and #09 signed-out JWT remain NOT_AUTHORIZED / OPEN. No code, CI, PR state, cloud service, settings or database changed by recording this decision. Connected-account GitHub comment authorship is not cryptographic evidence that the owner wrote this comment directly; the owner statement above came from the ongoing ChatGPT instruction.

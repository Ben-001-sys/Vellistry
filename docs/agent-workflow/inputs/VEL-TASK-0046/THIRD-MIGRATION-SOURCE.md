# Retained proposal, not adopted

PR68 source cbb379fa4a4eaa9f576f3abcce2c2258d22cc551 path supabase/migrations/20261015171325_restrict_book_privileges.sql
Git blob 230b1540bb5b8962fd2b797d4f8a467d3c035978
SHA256 c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81
Original source/provenance retained; definition planning-only.

```sql
-- IMP-001B: remove default table privileges that are not constrained by RLS.
-- Object-scoped: preserve owner/service roles and existing row policies.
revoke all privileges on table public.books from public, anon, authenticated;
grant select, insert, update, delete on table public.books to authenticated;
```

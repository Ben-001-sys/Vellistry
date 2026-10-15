-- IMP-001B: remove default table privileges that are not constrained by RLS.
-- Object-scoped: preserve owner/service roles and existing row policies.
revoke all privileges on table public.books from public, anon, authenticated;
grant select, insert, update, delete on table public.books to authenticated;

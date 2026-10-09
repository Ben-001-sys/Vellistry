-- Vellistry first implementation migration. Requires Supabase auth schema.
-- Intended for local Supabase CLI testing; not yet executed against live Auth/RLS.
-- No seed author IDs, tokens, real manuscripts or service keys in this file.
create extension if not exists pgcrypto;

create table public.books (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  title text not null check (char_length(btrim(title)) between 1 and 120),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index books_owner_created_idx on public.books(owner_id,created_at desc);

create table public.chapters (
  id uuid primary key default gen_random_uuid(),
  book_id uuid not null references public.books(id) on delete cascade,
  title text not null check(char_length(btrim(title)) between 1 and 180),
  position integer not null check(position>=0),
  current_revision integer not null default 1 check(current_revision>=1),
  accepted_document jsonb not null default '{"type":"doc","content":[{"type":"paragraph"}]}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(book_id,position),
  unique(book_id,id)
);
create index chapters_book_position_idx on public.chapters(book_id,position);

create table public.chapter_revisions (
  book_id uuid not null,
  chapter_id uuid not null,
  revision integer not null check(revision>=1),
  document jsonb not null,
  recorded_at timestamptz not null default now(),
  primary key(book_id,chapter_id,revision),
  foreign key(book_id,chapter_id) references public.chapters(book_id,id) on delete cascade
);

-- Deny unauthenticated and cross-author access on all three relations.
alter table public.books enable row level security;
alter table public.chapters enable row level security;
alter table public.chapter_revisions enable row level security;
alter table public.books force row level security;
alter table public.chapters force row level security;
alter table public.chapter_revisions force row level security;

create policy author_can_read_books on public.books for select to authenticated
  using (owner_id=(select auth.uid()));
create policy author_can_create_books on public.books for insert to authenticated
  with check (owner_id=(select auth.uid()));
create policy author_can_update_books on public.books for update to authenticated
  using (owner_id=(select auth.uid())) with check (owner_id=(select auth.uid()));
create policy author_can_delete_books on public.books for delete to authenticated
  using (owner_id=(select auth.uid()));

create policy author_can_read_chapters on public.chapters for select to authenticated
 using (exists(
  select 1 from public.books b where b.id=chapters.book_id and b.owner_id=(select auth.uid())
 ));
create policy author_can_read_revisions on public.chapter_revisions for select to authenticated
 using (exists(
  select 1 from public.books b where b.id=chapter_revisions.book_id and b.owner_id=(select auth.uid())
 ));

-- IMPORTANT: No direct chapter INSERT/UPDATE or revision INSERT policy is granted.
-- A later versioned, audited create/save RPC must append revisions transactionally.
-- Do not prematurely grant broad chapter writes.
revoke all on public.books,public.chapters,public.chapter_revisions from anon;
grant select,insert,update,delete on public.books to authenticated;
grant select on public.chapters,public.chapter_revisions to authenticated;

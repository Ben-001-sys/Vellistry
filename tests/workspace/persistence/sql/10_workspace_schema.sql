-- Candidate private fixture only; existing operative migrations are applied first.
create schema vellistry_workspace;
revoke all on schema vellistry_workspace from public,anon,authenticated;
create table vellistry_workspace.workspace_state(
 book_id uuid primary key references public.books(id) on delete cascade,
 workspace_version bigint not null check(workspace_version between 0 and 9007199254740991));
create table vellistry_workspace.book_planning_notes(
 book_id uuid primary key references public.books(id) on delete cascade,
 body text not null check(char_length(body)<=10000));
create table vellistry_workspace.chapter_planning_notes(
 book_id uuid not null,chapter_id uuid not null,body text not null check(char_length(body)<=10000),
 primary key(book_id,chapter_id),foreign key(book_id,chapter_id) references public.chapters(book_id,id) on delete cascade);
create table vellistry_workspace.workspace_operations(
 owner_id uuid not null,operation_id uuid not null,book_id uuid not null references public.books(id) on delete cascade,
 hash_format integer not null check(hash_format=1),request_hash text not null check(request_hash ~ '^[0-9a-f]{64}$'),
 receipt jsonb,recorded_at timestamptz not null default clock_timestamp(),primary key(owner_id,operation_id));
alter table vellistry_workspace.workspace_state enable row level security;
alter table vellistry_workspace.workspace_state force row level security;
alter table vellistry_workspace.book_planning_notes enable row level security;
alter table vellistry_workspace.book_planning_notes force row level security;
alter table vellistry_workspace.chapter_planning_notes enable row level security;
alter table vellistry_workspace.chapter_planning_notes force row level security;
alter table vellistry_workspace.workspace_operations enable row level security;
alter table vellistry_workspace.workspace_operations force row level security;

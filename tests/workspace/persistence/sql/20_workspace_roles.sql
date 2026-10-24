create role vellistry_workspace_gateway nologin nobypassrls;
create role vellistry_workspace_owner nologin nobypassrls;
create role vellistry_workspace_lock_owner nologin nobypassrls;
revoke all on all tables in schema vellistry_workspace from public,anon,authenticated,vellistry_workspace_gateway;
grant usage on schema vellistry_workspace to vellistry_workspace_gateway,vellistry_workspace_owner,vellistry_workspace_lock_owner;
grant usage on schema public to vellistry_workspace_owner,vellistry_workspace_lock_owner;
grant usage on schema auth to vellistry_workspace_lock_owner;
grant select(id,owner_id,title) on public.books to vellistry_workspace_owner;
grant select(id,owner_id) on public.books to vellistry_workspace_lock_owner;
grant select(id,user_id,not_after) on auth.sessions to vellistry_workspace_lock_owner;
-- Actual DML capabilities, confined to an unassumable role and fixed locking helper.
grant update(id) on auth.sessions,public.books to vellistry_workspace_lock_owner;
grant select(id,book_id,title,position) on public.chapters to vellistry_workspace_owner;
grant insert(id,book_id,title,position,accepted_document,current_revision) on public.chapters to vellistry_workspace_owner;
grant update(title,position,updated_at) on public.chapters to vellistry_workspace_owner;
grant insert(book_id,chapter_id,revision,document) on public.chapter_revisions to vellistry_workspace_owner;
grant select,insert,update on all tables in schema vellistry_workspace to vellistry_workspace_owner;

create policy workspace_book_select on public.books for select to vellistry_workspace_owner,vellistry_workspace_lock_owner
 using(owner_id=nullif(current_setting('vellistry.author_id',true),'')::uuid);
create policy workspace_book_lock on public.books for update to vellistry_workspace_lock_owner
 using(owner_id=nullif(current_setting('vellistry.author_id',true),'')::uuid)
 with check(owner_id=nullif(current_setting('vellistry.author_id',true),'')::uuid);
create policy workspace_session_select on auth.sessions for select to vellistry_workspace_lock_owner
 using(user_id=nullif(current_setting('vellistry.author_id',true),'')::uuid);
create policy workspace_session_lock on auth.sessions for update to vellistry_workspace_lock_owner
 using(user_id=nullif(current_setting('vellistry.author_id',true),'')::uuid)
 with check(user_id=nullif(current_setting('vellistry.author_id',true),'')::uuid);
create policy workspace_chapter_select on public.chapters for select to vellistry_workspace_owner
 using(exists(select 1 from public.books b where b.id=book_id));
create policy workspace_chapter_insert on public.chapters for insert to vellistry_workspace_owner
 with check(exists(select 1 from public.books b where b.id=book_id)
 and current_revision=1 and accepted_document='{"type":"doc","content":[{"type":"paragraph"}]}'::jsonb);
create policy workspace_chapter_update on public.chapters for update to vellistry_workspace_owner
 using(exists(select 1 from public.books b where b.id=book_id))
 with check(exists(select 1 from public.books b where b.id=book_id));
create policy workspace_revision_insert on public.chapter_revisions for insert to vellistry_workspace_owner
 with check(revision=1 and document='{"type":"doc","content":[{"type":"paragraph"}]}'::jsonb
 and exists(select 1 from public.books b where b.id=book_id));
create policy workspace_state on vellistry_workspace.workspace_state to vellistry_workspace_owner
 using(exists(select 1 from public.books b where b.id=book_id)) with check(exists(select 1 from public.books b where b.id=book_id));
create policy workspace_book_notes on vellistry_workspace.book_planning_notes to vellistry_workspace_owner
 using(exists(select 1 from public.books b where b.id=book_id)) with check(exists(select 1 from public.books b where b.id=book_id));
create policy workspace_chapter_notes on vellistry_workspace.chapter_planning_notes to vellistry_workspace_owner
 using(exists(select 1 from public.books b where b.id=book_id)) with check(exists(select 1 from public.books b where b.id=book_id));
create policy workspace_journal on vellistry_workspace.workspace_operations to vellistry_workspace_owner
 using(owner_id=nullif(current_setting('vellistry.author_id',true),'')::uuid and exists(select 1 from public.books b where b.id=book_id))
 with check(owner_id=nullif(current_setting('vellistry.author_id',true),'')::uuid and exists(select 1 from public.books b where b.id=book_id));

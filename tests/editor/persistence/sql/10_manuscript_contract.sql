-- Disposable PG17 experiment ONLY. Apply after unchanged workspace fixtures.
create schema vellistry_manuscript;
revoke all on schema vellistry_manuscript from public,anon,authenticated;
create role vellistry_manuscript_owner nologin nobypassrls;
create role vellistry_manuscript_gateway nologin nobypassrls;
grant usage on schema vellistry_manuscript to vellistry_manuscript_owner,vellistry_manuscript_gateway;
grant usage on schema public,vellistry_workspace to vellistry_manuscript_owner;
grant execute on function vellistry_workspace.lock_owned_context(uuid) to vellistry_manuscript_owner;
grant select(id,owner_id) on public.books to vellistry_manuscript_owner;
grant select(id,book_id,current_revision,accepted_document) on public.chapters to vellistry_manuscript_owner;
grant update(accepted_document,current_revision,updated_at) on public.chapters to vellistry_manuscript_owner;
grant select(book_id,chapter_id,revision,document),insert(book_id,chapter_id,revision,document) on public.chapter_revisions to vellistry_manuscript_owner;
create policy manuscript_book on public.books for select to vellistry_manuscript_owner using(owner_id=nullif(current_setting('vellistry.author_id',true),'')::uuid);
create policy manuscript_chapter_read on public.chapters for select to vellistry_manuscript_owner using(exists(select 1 from public.books b where b.id=book_id));
create policy manuscript_chapter_write on public.chapters for update to vellistry_manuscript_owner using(exists(select 1 from public.books b where b.id=book_id)) with check(exists(select 1 from public.books b where b.id=book_id));
create policy manuscript_revision_read on public.chapter_revisions for select to vellistry_manuscript_owner using(exists(select 1 from public.books b where b.id=book_id));
create policy manuscript_revision_append on public.chapter_revisions for insert to vellistry_manuscript_owner with check(exists(select 1 from public.chapters c where c.id=chapter_id and c.book_id=chapter_revisions.book_id and c.current_revision=revision and c.accepted_document=document));
create table vellistry_manuscript.operations(owner_id uuid not null,operation_id uuid not null,book_id uuid not null references public.books(id) on delete cascade,chapter_id uuid not null,request_hash text not null check(request_hash ~ '^[0-9a-f]{64}$'),receipt jsonb,primary key(owner_id,operation_id),foreign key(book_id,chapter_id) references public.chapters(book_id,id));
alter table vellistry_manuscript.operations enable row level security;
alter table vellistry_manuscript.operations force row level security;
grant select,insert,update(receipt) on vellistry_manuscript.operations to vellistry_manuscript_owner;
create policy manuscript_journal on vellistry_manuscript.operations to vellistry_manuscript_owner using(owner_id=nullif(current_setting('vellistry.author_id',true),'')::uuid and exists(select 1 from public.books b where b.id=book_id)) with check(owner_id=nullif(current_setting('vellistry.author_id',true),'')::uuid and exists(select 1 from public.books b where b.id=book_id));
create function vellistry_manuscript.validate_node(n jsonb,parent text,depth integer) returns void language plpgsql set search_path=pg_catalog as $$
declare t text:=n->>'type';child jsonb;mark jsonb;k text;
begin
 if depth>32 or jsonb_typeof(n)<>'object' or t is null then raise exception 'Invalid document' using errcode='22023';end if;
 if not(case parent when 'root' then t='doc' when 'doc' then t in ('paragraph','heading','bulletList','orderedList') when 'paragraph' then t in ('text','hardBreak') when 'heading' then t in ('text','hardBreak') when 'listItem' then t in ('paragraph','bulletList','orderedList') when 'bulletList' then t='listItem' when 'orderedList' then t='listItem' else false end) then raise exception 'Invalid structure' using errcode='22023';end if;
 for k in select jsonb_object_keys(n) loop if k not in ('type','content','attrs','marks','text') then raise exception 'Invalid field' using errcode='22023';end if;end loop;
 if t='text' then
  if jsonb_typeof(n->'text') is distinct from 'string' or length(n->>'text')=0 or n ?| array['content','attrs'] then raise exception 'Invalid text' using errcode='22023';end if;
  if n?'marks' then
   if jsonb_typeof(n->'marks')<>'array' or jsonb_array_length(n->'marks')>3 then raise exception 'Invalid marks' using errcode='22023';end if;
   if (select count(distinct x->>'type') from jsonb_array_elements(n->'marks') x)<>jsonb_array_length(n->'marks') then raise exception 'Duplicate marks' using errcode='22023';end if;
   for mark in select * from jsonb_array_elements(n->'marks') loop if not(mark= jsonb_build_object('type',mark->>'type') and mark->>'type' in ('bold','italic','underline')) then raise exception 'Unsupported mark' using errcode='22023';end if;end loop;
  end if;
 else
  if n ?| array['text','marks'] then raise exception 'Invalid block' using errcode='22023';end if;
  if t='heading' then
   if n->'attrs' not in ('{"level":1}'::jsonb,'{"level":2}'::jsonb,'{"level":3}'::jsonb) or not(n?'attrs') then raise exception 'Invalid heading' using errcode='22023';end if;
  elsif t='orderedList' and n?'attrs' then
   if jsonb_typeof(n->'attrs'->'start')<>'number' or n->'attrs'<>jsonb_build_object('start',n->'attrs'->'start') or (n->'attrs'->>'start')::numeric not between 1 and 2147483647 or trunc((n->'attrs'->>'start')::numeric)<>(n->'attrs'->>'start')::numeric then raise exception 'Invalid list' using errcode='22023';end if;
  elsif n?'attrs' then raise exception 'Invalid attrs' using errcode='22023';end if;
  if t='hardBreak' then if n?'content' then raise exception 'Invalid break' using errcode='22023';end if;
  else
   if n?'content' and jsonb_typeof(n->'content')<>'array' then raise exception 'Invalid content' using errcode='22023';end if;
   if t in ('doc','listItem','bulletList','orderedList') and coalesce(jsonb_array_length(n->'content'),0)=0 then raise exception 'Empty container' using errcode='22023';end if;
   if t='listItem' and n->'content'->0->>'type'<>'paragraph' then raise exception 'Invalid list item' using errcode='22023';end if;
   for child in select * from jsonb_array_elements(n->'content') loop perform vellistry_manuscript.validate_node(child,t,depth+1);end loop;
  end if;
 end if;
end$$;
create function vellistry_manuscript.save(book uuid,chapter uuid,op uuid,expected integer,doc jsonb) returns jsonb language plpgsql security definer set search_path=pg_catalog as $$
declare a uuid:=nullif(current_setting('vellistry.author_id',true),'')::uuid;prior vellistry_manuscript.operations;v integer;req jsonb;reqhash text;result jsonb;
begin
 perform vellistry_workspace.lock_owned_context(book);
 perform 1 from public.chapters where id=chapter and book_id=book;if not found then raise exception 'Not available' using errcode='42501';end if;
 if op is null or expected is null or expected<1 or expected>=2147483647 or doc is null or octet_length(doc::text)>300000 then raise exception 'Invalid request' using errcode='22023';end if;
 perform vellistry_manuscript.validate_node(doc,'root',0);
 req:=jsonb_build_object('book',book,'chapter',chapter,'expected',expected,'document',doc);
 reqhash:=encode(public.digest(convert_to(req::text,'UTF8'),'sha256'),'hex');
 -- Unique owner+operation key serializes duplicates even when they target different books.
 insert into vellistry_manuscript.operations values(a,op,book,chapter,reqhash,null) on conflict do nothing;
 select * into prior from vellistry_manuscript.operations where owner_id=a and operation_id=op for update;
 if prior.request_hash<>reqhash then raise exception 'Operation reused' using errcode='22023';end if;
 if prior.receipt is not null then return prior.receipt;end if;
 perform vellistry_workspace.test_fault('manuscript_journal');
 select current_revision into v from public.chapters where id=chapter and book_id=book;
 if v=expected then
  update public.chapters set accepted_document=doc,current_revision=v+1,updated_at=clock_timestamp() where id=chapter and book_id=book and current_revision=expected;
  perform vellistry_workspace.test_fault('manuscript_document');
  insert into public.chapter_revisions(book_id,chapter_id,revision,document) values(book,chapter,v+1,doc);
  perform vellistry_workspace.test_fault('manuscript_revision');
  v:=v+1;
  result:=jsonb_build_object('operationId',op,'bookId',book,'chapterId',chapter,'outcome','confirmed','revision',v);
 else result:=jsonb_build_object('operationId',op,'bookId',book,'chapterId',chapter,'outcome','conflicted','revision',v);
 end if;
 update vellistry_manuscript.operations set receipt=result where owner_id=a and operation_id=op;
 perform vellistry_workspace.test_fault('manuscript_receipt');return result;
end$$;
create function vellistry_manuscript.read(book uuid,chapter uuid,wanted integer default null) returns jsonb language plpgsql security definer set search_path=pg_catalog as $$
declare result jsonb;
begin
 perform vellistry_workspace.lock_owned_context(book);
 select jsonb_build_object('bookId',book,'chapterId',chapter,'revision',r.revision,'document',r.document) into result from public.chapter_revisions r join public.chapters c on c.id=r.chapter_id and c.book_id=r.book_id where r.book_id=book and r.chapter_id=chapter and r.revision=coalesce(wanted,c.current_revision);
 if result is null then raise exception 'Not available' using errcode='42501';end if;return result;
end$$;
create function vellistry_manuscript.receipt(book uuid,chapter uuid,op uuid) returns jsonb language plpgsql security definer set search_path=pg_catalog as $$
declare result jsonb;
begin
 perform vellistry_workspace.lock_owned_context(book);
 perform 1 from public.chapters where id=chapter and book_id=book;if not found then raise exception 'Not available' using errcode='42501';end if;
 select receipt into result from vellistry_manuscript.operations where owner_id=nullif(current_setting('vellistry.author_id',true),'')::uuid and operation_id=op and book_id=book and chapter_id=chapter;return result;
end$$;
alter function vellistry_manuscript.validate_node(jsonb,text,integer) owner to vellistry_manuscript_owner;
alter function vellistry_manuscript.save(uuid,uuid,uuid,integer,jsonb) owner to vellistry_manuscript_owner;
alter function vellistry_manuscript.read(uuid,uuid,integer) owner to vellistry_manuscript_owner;
alter function vellistry_manuscript.receipt(uuid,uuid,uuid) owner to vellistry_manuscript_owner;
revoke all on all functions in schema vellistry_manuscript from public,anon,authenticated,vellistry_manuscript_gateway;
grant execute on function vellistry_workspace.test_fault(text) to vellistry_manuscript_owner;
grant execute on function vellistry_manuscript.save(uuid,uuid,uuid,integer,jsonb),vellistry_manuscript.read(uuid,uuid,integer),vellistry_manuscript.receipt(uuid,uuid,uuid) to vellistry_manuscript_gateway;

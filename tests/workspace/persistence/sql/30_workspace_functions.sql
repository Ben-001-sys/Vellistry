-- Fixed private functions only. No dynamic SQL, caller-selectable function or production grants.
create function vellistry_workspace.lock_owned_context(book uuid) returns void
language plpgsql security definer set search_path=pg_catalog as $$
declare a uuid:=nullif(current_setting('vellistry.author_id',true),'')::uuid;
 s uuid:=nullif(current_setting('vellistry.session_id',true),'')::uuid; deadline timestamptz;
 expiry double precision:=nullif(current_setting('vellistry.token_expires',true),'')::double precision;
 verified double precision:=nullif(current_setting('vellistry.verified_at',true),'')::double precision;
 now_ms double precision;
begin
 if a is null or s is null or expiry is null or verified is null then raise exception 'Not available' using errcode='42501';end if;
 select not_after into deadline from auth.sessions where id=s and user_id=a for share;
 if not found then raise exception 'Not available' using errcode='42501';end if;
 perform id from public.books where id=book and owner_id=a for update;
 if not found then raise exception 'Not available' using errcode='42501';end if;
 now_ms:=extract(epoch from clock_timestamp())*1000;
 if not(expiry>now_ms and verified<=now_ms and now_ms-verified<=30000)
 or (deadline is not null and deadline<=clock_timestamp()) then raise exception 'Not available' using errcode='42501';end if;
end$$;
alter function vellistry_workspace.lock_owned_context(uuid) owner to vellistry_workspace_lock_owner;
revoke all on function vellistry_workspace.lock_owned_context(uuid) from public,anon,authenticated,vellistry_workspace_gateway;
grant execute on function vellistry_workspace.lock_owned_context(uuid) to vellistry_workspace_owner;

create function vellistry_workspace.utf16_length(v text) returns integer language sql immutable set search_path=pg_catalog as $$
 select coalesce(sum(case when ascii(substr(v,i,1))>65535 then 2 else 1 end),0)::integer from generate_series(1,char_length(v)) i
$$;
create function vellistry_workspace.trim_title(v text) returns text language sql immutable set search_path=pg_catalog as $$
 select btrim(v,(select string_agg(chr(i),'') from unnest(array[9,10,11,12,13,32,160,5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8232,8233,8239,8287,12288,65279]) i))
$$;
create function vellistry_workspace.exact_keys(v jsonb,expected text[]) returns boolean language sql immutable set search_path=pg_catalog as $$
 select jsonb_typeof(v)='object' and (select array_agg(k order by k) from jsonb_object_keys(v) k)=(select array_agg(k order by k) from unnest(expected) k)
$$;
create function vellistry_workspace.canonical_request(book uuid,r jsonb) returns text
language plpgsql immutable set search_path=pg_catalog as $$
declare c jsonb:=r->'command';k text:=c->>'kind';cmd text;v text;ids text;
begin
 if not vellistry_workspace.exact_keys(r,array['schemaVersion','operationId','expectedVersion','command'])
 or r->'schemaVersion'<>'1'::jsonb or jsonb_typeof(r->'expectedVersion')<>'number'
 or (r->>'expectedVersion')::numeric not between 0 and 9007199254740991
 or trunc((r->>'expectedVersion')::numeric)<>(r->>'expectedVersion')::numeric
 or jsonb_typeof(r->'operationId')<>'string' or (r->>'operationId') !~* '^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$'
 or octet_length(convert_to(r::text,'UTF8'))>131072 then raise exception 'Invalid request' using errcode='22023';end if;
 if k in ('create','rename') then
  if not vellistry_workspace.exact_keys(c,case when k='create' then array['kind','title'] else array['kind','chapterId','title'] end)
  or jsonb_typeof(c->'title')<>'string' then raise exception 'Invalid command' using errcode='22023';end if;
  v:=vellistry_workspace.trim_title(c->>'title');
  if vellistry_workspace.utf16_length(v) not between 1 and 180 then raise exception 'Invalid title' using errcode='22023';end if;
  cmd:='{"kind":'||to_json(k)::text;
  if k='rename' then cmd:=cmd||',"chapterId":'||to_json((c->>'chapterId')::uuid::text)::text;end if;
  cmd:=cmd||',"title":'||to_json(v)::text||'}';
 elsif k in ('book-notes','chapter-notes') then
  if not vellistry_workspace.exact_keys(c,case when k='book-notes' then array['kind','body'] else array['kind','chapterId','body'] end)
  or jsonb_typeof(c->'body')<>'string' or vellistry_workspace.utf16_length(c->>'body')>10000 then raise exception 'Invalid notes' using errcode='22023';end if;
  cmd:='{"kind":'||to_json(k)::text;
  if k='chapter-notes' then cmd:=cmd||',"chapterId":'||to_json((c->>'chapterId')::uuid::text)::text;end if;
  cmd:=cmd||',"body":'||to_json(c->>'body')::text||'}';
 elsif k='reorder' then
  if not vellistry_workspace.exact_keys(c,array['kind','chapterIds']) or jsonb_typeof(c->'chapterIds')<>'array'
  or jsonb_array_length(c->'chapterIds')>1000 then raise exception 'Invalid order' using errcode='22023';end if;
  if exists(select 1 from jsonb_array_elements(c->'chapterIds') e where jsonb_typeof(e)<>'string') then raise exception 'Invalid ID' using errcode='22023';end if;
  select string_agg(to_json(value::uuid::text)::text,',' order by ord) into ids from jsonb_array_elements_text(c->'chapterIds') with ordinality x(value,ord);
  if (select count(distinct value::uuid) from jsonb_array_elements_text(c->'chapterIds'))<>jsonb_array_length(c->'chapterIds') then raise exception 'Duplicate ID' using errcode='22023';end if;
  cmd:='{"kind":"reorder","chapterIds":['||coalesce(ids,'')||']}';
 else raise exception 'Invalid command' using errcode='22023';end if;
 return '{"schemaVersion":1,"bookId":'||to_json(book::text)::text||',"expectedVersion":'||((r->>'expectedVersion')::numeric)::bigint::text||',"command":'||cmd||'}';
end$$;
create function vellistry_workspace.test_fault(stage text) returns void language plpgsql set search_path=pg_catalog as $$
begin if current_setting('vellistry.test_fault',true)=stage then raise exception 'Injected disposable fault' using errcode='P0001';end if;end$$;

create function vellistry_workspace.read_workspace(book uuid) returns jsonb language plpgsql security definer set search_path=pg_catalog as $$
declare result jsonb;
begin
 perform vellistry_workspace.lock_owned_context(book);
 select jsonb_build_object('bookId',b.id,'bookTitle',b.title,'version',coalesce(s.workspace_version,0),'notes',coalesce(n.body,''),
 'chapters',coalesce((select jsonb_agg(jsonb_build_object('id',c.id,'bookId',c.book_id,'title',c.title,'notes',coalesce(cn.body,'')) order by c.position)
 from public.chapters c left join vellistry_workspace.chapter_planning_notes cn on cn.book_id=c.book_id and cn.chapter_id=c.id where c.book_id=b.id),'[]'::jsonb)) into result
 from public.books b left join vellistry_workspace.workspace_state s on s.book_id=b.id
 left join vellistry_workspace.book_planning_notes n on n.book_id=b.id where b.id=book;
 return result;
end$$;
create function vellistry_workspace.lookup_workspace_operation(book uuid,operation uuid) returns jsonb language plpgsql security definer set search_path=pg_catalog as $$
declare result jsonb;
begin
 perform vellistry_workspace.lock_owned_context(book);
 select receipt into result from vellistry_workspace.workspace_operations where book_id=book and operation_id=operation and owner_id=current_setting('vellistry.author_id')::uuid;
 return coalesce(result,'{"status":"unknown"}'::jsonb);
end$$;
create function vellistry_workspace.apply_workspace_operation(book uuid,r jsonb,client_digest text) returns jsonb language plpgsql security definer set search_path=pg_catalog as $$
declare canonical text;hash text;cmd jsonb;kind text;op uuid;a uuid;old vellistry_workspace.workspace_operations%rowtype;
 v bigint;expected bigint;n integer;newid uuid;reason text;result jsonb;
begin
 perform vellistry_workspace.lock_owned_context(book);
 canonical:=vellistry_workspace.canonical_request(book,r);hash:=encode(sha256(convert_to(canonical,'UTF8')),'hex');
 if hash is distinct from client_digest then raise exception 'Invalid digest' using errcode='22023';end if;
 cmd:=canonical::jsonb->'command';kind:=cmd->>'kind';op:=(r->>'operationId')::uuid;expected:=(r->>'expectedVersion')::numeric::bigint;a:=current_setting('vellistry.author_id')::uuid;
 if kind in ('rename','chapter-notes') and not exists(select 1 from public.chapters where book_id=book and id=(cmd->>'chapterId')::uuid) then raise exception 'Not available' using errcode='42501';end if;
 if kind='reorder' and exists(select 1 from jsonb_array_elements_text(cmd->'chapterIds') x where not exists(select 1 from public.chapters where book_id=book and id=x::uuid)) then raise exception 'Not available' using errcode='42501';end if;
 insert into vellistry_workspace.workspace_operations(owner_id,operation_id,book_id,hash_format,request_hash) values(a,op,book,1,hash) on conflict do nothing;
 if not found then
  select * into old from vellistry_workspace.workspace_operations where owner_id=a and operation_id=op;
  if old.book_id is distinct from book or old.request_hash is distinct from hash or old.receipt is null then raise exception 'Operation identity mismatch' using errcode='22023';end if;
  return old.receipt;
 end if;
 perform vellistry_workspace.test_fault('reservation');
 insert into vellistry_workspace.workspace_state values(book,0) on conflict do nothing;
 select workspace_version into v from vellistry_workspace.workspace_state where book_id=book;
 select count(*) into n from public.chapters where book_id=book;
 if v<>expected then reason:='conflict';
 elsif v>=9007199254740991 or n>1000 then reason:='invalid';
 elsif n>0 and (select min(position)<>0 or max(position)<>n-1 from public.chapters where book_id=book) then reason:='invalid';
 elsif kind='create' and n>=1000 then reason:='invalid';
 elsif kind='reorder' and jsonb_array_length(cmd->'chapterIds')<>n then reason:='invalid';end if;
 if reason is null then
  if kind='create' then
   newid:=gen_random_uuid();
   insert into public.chapters(id,book_id,title,position,accepted_document,current_revision) values(newid,book,cmd->>'title',n,'{"type":"doc","content":[{"type":"paragraph"}]}',1);
   perform vellistry_workspace.test_fault('chapter');
   insert into public.chapter_revisions(book_id,chapter_id,revision,document) values(book,newid,1,'{"type":"doc","content":[{"type":"paragraph"}]}');
   perform vellistry_workspace.test_fault('revision');
  elsif kind='rename' then update public.chapters set title=cmd->>'title',updated_at=clock_timestamp() where book_id=book and id=(cmd->>'chapterId')::uuid;
  elsif kind='reorder' then
   update public.chapters set position=position+n where book_id=book;
   perform vellistry_workspace.test_fault('rank');
   update public.chapters c set position=x.ord-1 from jsonb_array_elements_text(cmd->'chapterIds') with ordinality x(id,ord) where c.book_id=book and c.id=x.id::uuid;
  elsif kind='book-notes' then
   insert into vellistry_workspace.book_planning_notes values(book,cmd->>'body') on conflict(book_id) do update set body=excluded.body;
   perform vellistry_workspace.test_fault('notes');
  else
   insert into vellistry_workspace.chapter_planning_notes values(book,(cmd->>'chapterId')::uuid,cmd->>'body') on conflict(book_id,chapter_id) do update set body=excluded.body;
   perform vellistry_workspace.test_fault('notes');
  end if;
  v:=v+1;update vellistry_workspace.workspace_state set workspace_version=v where book_id=book;
 end if;
 result:=jsonb_build_object('schemaVersion',1,'operationId',op,'bookId',book,'outcome',case when reason is null then 'confirmed' else 'rejected' end,'version',v);
 if reason is not null then result:=result||jsonb_build_object('reason',reason);end if;
 if newid is not null then result:=result||jsonb_build_object('createdChapterId',newid);end if;
 update vellistry_workspace.workspace_operations set receipt=result where owner_id=a and operation_id=op;
 perform vellistry_workspace.test_fault('before_commit');
 return result;
end$$;

alter function vellistry_workspace.utf16_length(text) owner to vellistry_workspace_owner;
alter function vellistry_workspace.trim_title(text) owner to vellistry_workspace_owner;
alter function vellistry_workspace.exact_keys(jsonb,text[]) owner to vellistry_workspace_owner;
alter function vellistry_workspace.canonical_request(uuid,jsonb) owner to vellistry_workspace_owner;
alter function vellistry_workspace.test_fault(text) owner to vellistry_workspace_owner;
alter function vellistry_workspace.read_workspace(uuid) owner to vellistry_workspace_owner;
alter function vellistry_workspace.lookup_workspace_operation(uuid,uuid) owner to vellistry_workspace_owner;
alter function vellistry_workspace.apply_workspace_operation(uuid,jsonb,text) owner to vellistry_workspace_owner;
revoke all on all functions in schema vellistry_workspace from public,anon,authenticated,vellistry_workspace_gateway;
-- The previous revoke also covers helper, then reinstate only the internal owner.
grant execute on function vellistry_workspace.lock_owned_context(uuid) to vellistry_workspace_owner;
grant execute on function vellistry_workspace.read_workspace(uuid),vellistry_workspace.lookup_workspace_operation(uuid,uuid),vellistry_workspace.apply_workspace_operation(uuid,jsonb,text) to vellistry_workspace_gateway;
alter default privileges in schema vellistry_workspace revoke execute on functions from public;

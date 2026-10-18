#!/usr/bin/env python3
"""Manual GitHub-hosted synthetic PG17 proof. Never connects to Supabase.

No target/source/ref arguments: SQL is immutable data; only the Actions-created
postgres service is reachable through docker exec and its internal Unix socket.
"""
import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
import tempfile
import uuid

ROOT = Path(__file__).resolve().parents[1]
SOURCE = 'cbb379fa4a4eaa9f576f3abcce2c2258d22cc551'
REPOSITORY = 'https://github.com/Ben-001-sys/Vellistry.git'
DATABASES = ('vel_sec_before', 'vel_sec_after')
PINS = {
 'supabase/migrations/20261009000000_initial_author_books.sql': ('192a736d1a5d6ffc6f239c74ed61e7b8d2528b3b','315e6a29f8072d4f556729784c07d4bf121666ef385b9cea4dfda36fded5ff74'),
 'supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql': ('0670a60f1c2e299e9771b9af1c677d97712174d9','6786561dcb325e14adbadec7b3bf879b8ab769841c86bf790dfbd2f19c222a65'),
 'supabase/migrations/20261015171325_restrict_book_privileges.sql': ('230b1540bb5b8962fd2b797d4f8a467d3c035978','c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81'),
 'tests/book_privileges_regression.sql': ('5feac95772f93330b29150dbc135d766e7b0392e','bcba9b788151d27ee354f41aa658398f1ed0cbfe86cf0d97f7ae685cb0c54e6b'),
}
EXPECTED_BEFORE = 'Privilege mismatch: role=anon table=books privilege=TRUNCATE expected=f'
EXPECTED_AFTER = 'PASS: 48 privilege cases, RLS flags, owned insert, cross-author and TRUNCATE denials'
EMPTY = """select (to_regnamespace('auth') is null and to_regnamespace('scratch') is null
 and to_regclass('public.books') is null and to_regclass('public.chapters') is null and to_regclass('public.chapter_revisions') is null
 and not exists(select from pg_roles where rolname in
 ('anon','authenticated','vel_sec_group','vel_sec_service')))::text;"""


def require(condition, message):
    if not condition:
        raise ValueError(message)


def guard(env):
    require(env.get('GITHUB_ACTIONS') == 'true' and env.get('RUNNER_ENVIRONMENT') == 'github-hosted'
            and env.get('GITHUB_EVENT_NAME') == 'workflow_dispatch'
            and env.get('GITHUB_REPOSITORY') == 'Ben-001-sys/Vellistry', 'Requires manual GitHub-hosted repository runner')
    blocked = [k for k in env if (k.startswith('PG') and k != 'PG17_SERVICE_ID')
               or k.startswith('DOCKER_') or k in ('DATABASE_URL','SUPABASE_URL','SUPABASE_SERVICE_ROLE_KEY')]
    require(not blocked, 'External connection configuration forbidden: '+','.join(sorted(blocked)))
    service = env.get('PG17_SERVICE_ID', '')
    require(re.fullmatch('[0-9a-f]{64}', service) is not None, 'Invalid Actions service container ID')
    require(bool(env.get('RUNNER_TEMP')), 'Missing runner temporary directory')
    return service


def validate_source(path, mode, blob, raw):
    require(path in PINS and mode == '100644', 'Unpinned or nonregular SQL source')
    expected_blob, checksum = PINS[path]
    require(blob == expected_blob and hashlib.sha256(raw).hexdigest() == checksum, 'SQL source drift: '+path)


def verify_fixture(label, result):
    if label == 'before':
        require(result.returncode == 3 and EXPECTED_BEFORE in result.stderr
                and re.search(r'ERROR:\s+P0001:', result.stderr) is not None
                and result.stderr.count('ERROR:') == 1, 'BEFORE was not the specific expected privilege defect')
    else:
        require(label == 'after' and result.returncode == 0 and EXPECTED_AFTER in result.stdout,
                'AFTER fixture failed or missing 48-case evidence')


class Evidence:
    def __init__(self, directory):
        self.directory = Path(directory)
        self.directory.mkdir(parents=True, exist_ok=True)
        self.data = {'status':'NOT_RUN', 'commands':[], 'source_commit':SOURCE,
                     'hosted_supabase':'NOT_ACCESSED', 'migration_approval':'NOT_GRANTED'}

    def save(self):
        (self.directory/'result.json').write_text(json.dumps(self.data, indent=2)+'\n', encoding='utf-8')

    def run(self, args, *, sql=None, check=True, timeout=90, binary=False):
        env = {**os.environ, 'GIT_TERMINAL_PROMPT':'0', 'GIT_CONFIG_GLOBAL':os.devnull,
               'GIT_CONFIG_SYSTEM':os.devnull}
        record = {'command':list(args)}
        if sql is not None:
            record['stdin_sql'] = sql
        try:
            r = subprocess.run(args, cwd=ROOT, env=env, input=sql,
                               capture_output=True, text=not binary, timeout=timeout)
            record.update(exit_code=r.returncode, stdout=r.stdout.decode('utf-8') if binary else r.stdout,
                          stderr=r.stderr.decode('utf-8') if binary else r.stderr)
        except subprocess.TimeoutExpired:
            record.update(status='TIMEOUT', timeout_seconds=timeout)
            self.data['commands'].append(record); self.save()
            raise ValueError('Command timed out')
        self.data['commands'].append(record); self.save()
        require(not check or r.returncode == 0, 'Command failed: '+args[0])
        return r


class Postgres:
    def __init__(self, evidence, service):
        self.e = evidence
        self.service = service

    def inspect(self):
        fmt = '{{json .Id}}|{{json .Image}}|{{json .Config.Image}}|{{json .State.Health.Status}}|{{json .NetworkSettings.Ports}}'
        values = self.e.run(['docker','inspect','--format',fmt,self.service]).stdout.strip().split('|')
        require(len(values) == 5, 'Missing service inspect evidence')
        cid, image, name, health, ports = [json.loads(v) for v in values]
        require(cid == self.service and name == 'postgres:17' and health == 'healthy'
                and all(v is None for v in (ports or {}).values()), 'Not the healthy private PG17 Actions service')
        digests = json.loads(self.e.run(['docker','image','inspect','--format','{{json .RepoDigests}}',image]).stdout)
        require(digests and all(re.fullmatch(r'(?:docker.io/library/)?postgres@sha256:[0-9a-f]{64}',d) for d in digests), 'Missing PG17 image digest')
        self.e.data['service'] = dict(id=cid,image_id=image,image=name,repo_digests=digests,health=health,published_ports=False)
        version = self.sql('postgres', 'show server_version_num;').stdout.strip()
        require(version.isdigit() and 170000 <= int(version) < 180000, 'PostgreSQL 17 required')
        self.e.data['postgres_version'] = self.sql('postgres','select version();').stdout.strip()
        self.e.run(['docker','exec',self.service,'psql','--version'])
        self.e.run(['python3','--version']); self.e.run(['git','--version']); self.e.run(['uname','-a'])
        self.e.save()

    def sql(self, database, sql=None, *, file=None, before=False, check=True):
        require(database in ('postgres',)+DATABASES, 'Unapproved disposable database')
        args = ['docker','exec','-i',self.service,'psql','-X','-h','/var/run/postgresql',
                '-U','postgres','-d',database,'-v','ON_ERROR_STOP=1','-v','VERBOSITY=verbose','-At']
        if before:
            args += ['-v','skip_hardening=true']
        if file:
            require(file.startswith('/tmp/vel-sec-001-') and '..' not in file, 'Unsafe SQL fixture path')
            args += ['-f',file]
        return self.e.run(args,sql=sql,check=check)

    def empty(self, database):
        require(self.sql(database,EMPTY).stdout.strip() == 'true', 'Fixture rollback/empty-state verification failed')

    def cleanup(self):
        for database in DATABASES:
            self.sql('postgres', 'DROP DATABASE IF EXISTS '+database+' WITH (FORCE);')
        require(self.sql('postgres', "select count(*) from pg_database where datname in ('vel_sec_before','vel_sec_after');").stdout.strip() == '0', 'Database cleanup failed')
        self.empty('postgres')
        self.e.data['database_cleanup'] = 'PASS'
        self.e.save()


def fetch_sources(evidence, directory):
    require(SOURCE == 'cbb379fa4a4eaa9f576f3abcce2c2258d22cc551', 'Unpinned source commit')
    evidence.run(['git','-c','credential.helper=','-c','core.hooksPath=/dev/null','fetch','--no-tags','--no-write-fetch-head',REPOSITORY,SOURCE])
    require(evidence.run(['git','cat-file','-t',SOURCE]).stdout.strip() == 'commit', 'Pinned commit unavailable')
    for path in PINS:
        entry = evidence.run(['git','ls-tree',SOURCE,'--',path]).stdout.strip().split()
        require(len(entry) == 4 and entry[3] == path, 'Missing SQL source')
        raw = evidence.run(['git','show',SOURCE+':'+path],binary=True).stdout
        validate_source(path,entry[0],entry[2],raw)
        target = Path(directory)/path
        target.parent.mkdir(parents=True,exist_ok=True); target.write_bytes(raw)
    evidence.data['verified_sources'] = {p:dict(blob=b,sha256=h) for p,(b,h) in PINS.items()}
    evidence.save()


SUPPLEMENT = r"""
-- Synthetic roles/claims only; never hosted Supabase acceptance.
create schema scratch;
grant usage,create on schema scratch to authenticated;
create function scratch.noop() returns trigger language plpgsql as $$begin return new; end$$;
create role vel_sec_service nologin bypassrls;
grant all privileges on public.books to vel_sec_service;
grant usage on schema public to vel_sec_service;
-- Before the proposed correction, defaults grant authenticated extra rights.
do $$begin
 if not has_table_privilege('authenticated','public.books','TRUNCATE') then
  raise exception 'Broad default fixture not reproduced'; end if;
end$$;
grant truncate on public.books to public;
"""

PROBES = r"""
do $$declare r text;t text;p text; expected boolean; n int:=0;
begin
 foreach r in array array['anon','authenticated'] loop
  foreach t in array array['books','chapters','chapter_revisions'] loop
   foreach p in array array['SELECT','INSERT','UPDATE','DELETE','TRUNCATE','REFERENCES','TRIGGER','MAINTAIN'] loop
    expected := r='authenticated' and (p='SELECT' or (t='books' and p in ('INSERT','UPDATE','DELETE')));
    if has_table_privilege(r,'public.'||t,p) is distinct from expected then raise exception 'Supplemental ACL mismatch % % %',r,t,p; end if;
    raise notice 'ACL role=% table=% privilege=% expected=% observed=%',r,t,p,expected,has_table_privilege(r,'public.'||t,p); n:=n+1;
   end loop;
  end loop;
 end loop;
 if n<>48 then raise exception 'ACL count';end if;
 if (select count(*) from pg_class where oid in ('public.books'::regclass,'public.chapters'::regclass,'public.chapter_revisions'::regclass) and relrowsecurity and relforcerowsecurity)<>3 then raise exception 'RLS flags';end if;
 foreach p in array array['SELECT','INSERT','UPDATE','DELETE','TRUNCATE','REFERENCES','TRIGGER','MAINTAIN'] loop
  if not has_table_privilege('vel_sec_service','public.books',p) then raise exception 'Synthetic service rights lost %',p;end if;
 end loop;
end$$;
insert into auth.users values ('00000000-0000-4000-8000-000000000001'),('00000000-0000-4000-8000-000000000002');
set local role authenticated;
select set_config('request.jwt.claim.sub','00000000-0000-4000-8000-000000000001',true);
do $$declare owner uuid; n integer;
begin
 insert into public.books(id,title) values('00000000-0000-4000-8000-000000000003','synthetic owner') returning owner_id into owner;
 if owner<>'00000000-0000-4000-8000-000000000001'::uuid then raise exception 'Default owner/RETURNING failed';end if;
 if (select count(*) from public.books)<>1 then raise exception 'Owner SELECT';end if;
 update public.books set title='synthetic updated' where id='00000000-0000-4000-8000-000000000003';get diagnostics n=row_count;
 if n<>1 then raise exception 'Owner UPDATE';end if;
 insert into public.books(id,title) values('00000000-0000-4000-8000-000000000005','delete me');
 delete from public.books where id='00000000-0000-4000-8000-000000000005';get diagnostics n=row_count;
 if n<>1 then raise exception 'Owner DELETE';end if;
 raise notice 'PASS owner SELECT INSERT(default+RETURNING) UPDATE DELETE';
 if not has_schema_privilege('scratch','CREATE') or not has_function_privilege('scratch.noop()','EXECUTE') then raise exception 'DDL prerequisites missing';end if;
 begin truncate public.books cascade;raise exception 'TRUNCATE permitted';exception when insufficient_privilege then raise notice 'PASS TRUNCATE SQLSTATE=%',SQLSTATE;end;
 begin create table scratch.fk_probe(book_id uuid references public.books(id));raise exception 'REFERENCES permitted';exception when insufficient_privilege then raise notice 'PASS REFERENCES SQLSTATE=%',SQLSTATE;end;
 begin create trigger bad_trigger before insert on public.books for each row execute function scratch.noop();raise exception 'TRIGGER permitted';exception when insufficient_privilege then raise notice 'PASS TRIGGER SQLSTATE=%',SQLSTATE;end;
end$$;
select set_config('request.jwt.claim.sub','00000000-0000-4000-8000-000000000002',true);
do $$declare n integer;
begin
 if exists(select from public.books where id='00000000-0000-4000-8000-000000000003') then raise exception 'Foreign SELECT';end if;
 update public.books set title='foreign' where id='00000000-0000-4000-8000-000000000003';get diagnostics n=row_count;if n<>0 then raise exception 'Foreign UPDATE';end if;
 delete from public.books where id='00000000-0000-4000-8000-000000000003';get diagnostics n=row_count;if n<>0 then raise exception 'Foreign DELETE';end if;
 begin insert into public.books(owner_id,title) values('00000000-0000-4000-8000-000000000001','forged');raise exception 'Forged INSERT permitted';exception when insufficient_privilege then raise notice 'PASS forged INSERT SQLSTATE=%',SQLSTATE;end;
 insert into public.books(id,title) values('00000000-0000-4000-8000-000000000004','synthetic other owner');
 begin update public.books set owner_id='00000000-0000-4000-8000-000000000001' where id='00000000-0000-4000-8000-000000000004';raise exception 'Forged UPDATE permitted';exception when insufficient_privilege then raise notice 'PASS forged UPDATE SQLSTATE=%',SQLSTATE;end;
 raise notice 'PASS cross-author SELECT UPDATE DELETE';
end$$;
reset role;
create role vel_sec_group nologin inherit;
grant authenticated to vel_sec_group;
set local role vel_sec_group;
select set_config('request.jwt.claim.sub','00000000-0000-4000-8000-000000000001',true);
do $$begin
 if (select count(*) from public.books)<>1 then raise exception 'Inherited owner read lost';end if;
 if has_table_privilege('public.books','TRUNCATE') or has_table_privilege('public.books','REFERENCES') or has_table_privilege('public.books','TRIGGER') then raise exception 'Inherited/PUBLIC privilege leak';end if;
 begin truncate public.books cascade;raise exception 'Inherited truncate permitted';exception when insufficient_privilege then raise notice 'PASS inherited/PUBLIC TRUNCATE SQLSTATE=%',SQLSTATE;end;
end$$;
reset role;
set local role anon;
do $$begin
 begin perform * from public.books;raise exception 'Anon read permitted';exception when insufficient_privilege then raise notice 'PASS anon SELECT SQLSTATE=%',SQLSTATE;end;
 begin insert into public.books(title) values('anon');raise exception 'Anon insert permitted';exception when insufficient_privilege then raise notice 'PASS anon INSERT SQLSTATE=%',SQLSTATE;end;
end$$;
reset role;
set local role vel_sec_service;
do $$begin if (select count(*) from public.books)<>2 then raise exception 'Synthetic privileged read lost';end if;end$$;
reset role;
do $$begin if (select count(*) from public.books)<>2 or not exists(select from public.books where title='synthetic updated') then raise exception 'Foreign/DDL probe changed protected rows';end if;end$$;
rollback;
\echo PASS: supplemental privilege RLS owner foreign-author and cleanup transaction
"""


def supplemental_sql(source_directory, container_directory):
    fixture = (Path(source_directory)/'tests/book_privileges_regression.sql').read_text(encoding='utf-8')
    prefix = fixture.split('\\ir ../supabase/migrations/')[0]
    require('begin;' in prefix and 'create role anon' in prefix, 'Fixture bootstrap missing')
    paths = list(PINS)[:3]
    includes = ''.join('\\ir '+container_directory+'/'+p+'\n' for p in paths[:2])
    return prefix+includes+SUPPLEMENT+'\n\\ir '+container_directory+'/'+paths[2]+'\n'+PROBES


def execute(e, pg):
    require(pg.sql('postgres', "select count(*) from pg_database where datname in ('vel_sec_before','vel_sec_after');").stdout.strip() == '0', 'Disposable database names already exist')
    pg.empty('postgres')
    container_directory = '/tmp/vel-sec-001-'+uuid.uuid4().hex
    created_directory = False
    temporary = None
    try:
        with tempfile.TemporaryDirectory(prefix='vel-sec-001-',dir=os.environ['RUNNER_TEMP']) as temporary:
            e.data['runner_directory'] = temporary; e.save()
            fetch_sources(e,temporary)
            e.run(['docker','exec',pg.service,'mkdir',container_directory]);created_directory=True
            e.data['container_directory'] = container_directory; e.save()
            e.run(['docker','cp',str(Path(temporary))+os.sep+'.',pg.service+':'+container_directory])
            for label, database in zip(('before','after'),DATABASES):
                pg.sql('postgres','CREATE DATABASE '+database+';');pg.empty(database)
                result = pg.sql(database,file=container_directory+'/tests/book_privileges_regression.sql',before=label=='before',check=False)
                verify_fixture(label,result); pg.empty(database)
                e.data[label] = {'status':'EXPECTED_FAILURE' if label=='before' else 'PASS', 'exit_code':result.returncode,'original_fixture_rollback':'PASS'}; e.save()
            result = pg.sql(DATABASES[1],supplemental_sql(temporary,container_directory))
            require('PASS: supplemental privilege RLS owner foreign-author and cleanup transaction' in result.stdout, 'Supplemental probes incomplete')
            pg.empty(DATABASES[1]); e.data['supplemental']='PASS'
        e.data['runner_temporary_storage']='REMOVED'
    finally:
        if temporary is not None:
            require(not Path(temporary).exists(), 'Runner temporary storage cleanup failed')
            e.data['runner_temporary_storage'] = 'REMOVED'; e.save()
        try:
            pg.cleanup()
        finally:
            if created_directory:
                require(re.fullmatch(r'/tmp/vel-sec-001-[0-9a-f]{32}',container_directory) is not None, 'Unsafe cleanup path')
                e.run(['docker','exec',pg.service,'rm','-rf','--',container_directory])
                e.run(['docker','exec',pg.service,'test','!','-e',container_directory])
                e.data['container_temporary_storage']='REMOVED'; e.save()



def cleanup_recorded_storage(e, pg):
    container = e.data.get('container_directory')
    if container:
        require(re.fullmatch(r'/tmp/vel-sec-001-[0-9a-f]{32}',container) is not None, 'Unsafe recorded container cleanup path')
        e.run(['docker','exec',pg.service,'rm','-rf','--',container])
        e.run(['docker','exec',pg.service,'test','!','-e',container])
        e.data['container_temporary_storage']='REMOVED'
    runner = e.data.get('runner_directory')
    if runner:
        path=Path(runner)
        require(path.resolve().parent == Path(os.environ['RUNNER_TEMP']).resolve()
                and re.fullmatch(r'vel-sec-001-[a-z0-9_]{8,}',path.name) is not None
                and not path.is_symlink(), 'Unsafe recorded runner cleanup path')
        if path.exists():shutil.rmtree(path)
        require(not path.exists(), 'Recorded runner storage remains')
        e.data['runner_temporary_storage']='REMOVED'
    e.save()


def main():
    parser = argparse.ArgumentParser(description=__doc__);parser.add_argument('--cleanup',action='store_true');args=parser.parse_args()
    service = guard(os.environ)
    directory = Path(os.environ['RUNNER_TEMP'])/'vel-sec-001-pg17-evidence'
    e = Evidence(directory)
    if args.cleanup:
        # Keep the test result, including failures; cleanup cannot turn it green.
        if (directory/'result.json').exists():
            e.data = json.loads((directory/'result.json').read_text(encoding='utf-8'))
    pg = Postgres(e,service)
    try:
        pg.inspect()
        if args.cleanup:
            pg.cleanup();cleanup_recorded_storage(e,pg);e.data['independent_cleanup']='PASS'
        else:
            e.data['runner'] = {k:os.environ.get(k) for k in ('RUNNER_OS','RUNNER_ARCH','GITHUB_SHA','GITHUB_RUN_ID','GITHUB_JOB')}
            execute(e,pg);e.data['status']='PASS'
        e.save(); print('PASS: disposable cleanup' if args.cleanup else 'PASS: PG17 synthetic evidence (not hosted Supabase acceptance)')
        return 0
    except (ValueError,OSError,json.JSONDecodeError) as error:
        e.data['status']='FAIL';e.data['error']=str(error);e.save();print('FAIL: '+str(error),file=sys.stderr);return 1


if __name__ == '__main__':
    sys.exit(main())

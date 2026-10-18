"""Synthetic harness contracts; these tests never start Docker or execute SQL."""
import copy
import importlib.util
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import patch
import yaml

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'scripts'))
import pg17_book_privilege_evidence as h
import test_ci_policy as inventory


class ManualWorkflowSafetyTests(unittest.TestCase):
    def setUp(self):
        self.workflow = yaml.load((ROOT/'.github/workflows'/inventory.PG17_MANUAL_NAME).read_text(encoding='utf-8'),Loader=yaml.BaseLoader)

    def rejected(self, name, mutate):
        w=copy.deepcopy(self.workflow);mutate(w)
        with self.subTest(mutation=name),self.assertRaises(ValueError):inventory.check_pg17_manual_contract(w)

    def test_exact_manual_contract_passes(self):
        inventory.check_pg17_manual_contract(self.workflow)

    def test_no_automatic_or_input_events(self):
        for event in ('push','pull_request','pull_request_target','schedule','workflow_run'):
            self.rejected(event,lambda w,e=event:w['on'].update({e:{}}))
        self.rejected('inputs',lambda w:w['on'].update(workflow_dispatch={'inputs':{'target':{}}}))
        self.rejected('remove-dispatch',lambda w:w.update(on={}))

    def test_token_permissions_and_credentials_cannot_expand(self):
        for permissions in ({'contents':'write'},{'contents':'read','id-token':'write'},'write-all',{}):
            self.rejected(str(permissions),lambda w,p=permissions:w.update(permissions=p))
        for permissions in ({'contents':'write'},{'id-token':'write'},{'contents':'read'}):
            self.rejected('job-'+str(permissions),lambda w,p=permissions:w['jobs']['pg17'].update(permissions=p))
        self.rejected('persist-checkout',lambda w:w['jobs']['pg17']['steps'][0]['with'].update({'persist-credentials':'true'}))
        self.rejected('secret',lambda w:w['jobs']['pg17']['env'].update(KEY='${{ secrets.KEY }}'))
        self.rejected('external-docker',lambda w:w['jobs']['pg17']['env'].update(DOCKER_HOST='tcp://remote'))

    def test_job_service_and_target_are_exact(self):
        for label,mutate in (
            ('extra-job',lambda w:w['jobs'].update(other={})),
            ('self-hosted',lambda w:w['jobs']['pg17'].update({'runs-on':'self-hosted'})),
            ('no-timeout',lambda w:w['jobs']['pg17'].pop('timeout-minutes')),
            ('pg16',lambda w:w['jobs']['pg17']['services']['postgres'].update(image='postgres:16')),
            ('host-port',lambda w:w['jobs']['pg17']['services']['postgres'].update(ports=['5432:5432'])),
            ('missing-health',lambda w:w['jobs']['pg17']['services']['postgres'].pop('options')),
            ('arbitrary-target',lambda w:w['jobs']['pg17']['env'].update(PG17_SERVICE_ID='remote')),
            ('soft-job',lambda w:w['jobs']['pg17'].update({'continue-on-error':'true'})),
            ('skip-job',lambda w:w['jobs']['pg17'].update({'if':'false'})),
        ):self.rejected(label,mutate)

    def test_required_commands_cannot_be_skipped_replaced_or_softened(self):
        for index in (1,2):
            for key,value in (('if','false'),('continue-on-error','true'),('shell','bash -c true'),('working-directory','other'),('run','echo PASS'),('env',{'PGHOST':'remote'})):
                self.rejected(str(index)+key,lambda w,i=index,k=key,v=value:w['jobs']['pg17']['steps'][i].update({k:v}))
            self.rejected('remove-step'+str(index),lambda w,i=index:w['jobs']['pg17']['steps'].pop(i))
        self.rejected('duplicate-run',lambda w:w['jobs']['pg17']['steps'].append(copy.deepcopy(w['jobs']['pg17']['steps'][1])))
        self.rejected('mutable-action',lambda w:w['jobs']['pg17']['steps'][0].update(uses='actions/checkout@main'))
        self.rejected('mutable-artifact',lambda w:w['jobs']['pg17']['steps'][-1].update(uses='actions/upload-artifact@v4'))
        self.rejected('missing-artifact',lambda w:w['jobs']['pg17']['steps'].pop())
        self.rejected('ignore-artifact',lambda w:w['jobs']['pg17']['steps'][-1]['with'].update({'if-no-files-found':'ignore'}))

    def test_inventory_rejects_unknown_names_and_historical_job_changes(self):
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory)
            shutil.copytree(ROOT/'.github/workflows',root/'.github/workflows')
            p=root/'docs/reports/evidence/VEL-CI-OPT-001';p.mkdir(parents=True)
            shutil.copyfile(ROOT/'docs/reports/evidence/VEL-CI-OPT-001/workflow-baseline.json',p/'workflow-baseline.json')
            with patch.object(inventory,'ROOT',root):
                cls=inventory.WorkflowContractTests;cls.setUpClass()
                test=cls('test_only_one_automatic_workflow_and_original_jobs_intact')
                test.test_only_one_automatic_workflow_and_original_jobs_intact()
                extra=root/'.github/workflows/arbitrary-manual.yml';extra.write_text('on:\n  workflow_dispatch:\njobs: {}\n')
                with self.assertRaises((KeyError,AssertionError)):test.test_only_one_automatic_workflow_and_original_jobs_intact()
                extra.unlink()
                for name in ('arbitrary.yaml','vel-sec-001-pg17-manual.yaml'):
                    extra=root/'.github/workflows'/name;extra.write_text('on:\n  workflow_dispatch:\njobs: {}\n')
                    with self.subTest(name=name),self.assertRaises((KeyError,AssertionError)):test.test_only_one_automatic_workflow_and_original_jobs_intact()
                    extra.unlink()
                original=root/'.github/workflows'/inventory.PG17_MANUAL_NAME
                held=root/'.github/workflows/held.txt';renamed=root/'.github/workflows/Vel-sec-001-pg17-manual.yml'
                original.rename(held);held.rename(renamed)
                with self.assertRaises((KeyError,AssertionError)):test.test_only_one_automatic_workflow_and_original_jobs_intact()
                renamed.rename(held);held.rename(original)
                path=root/'.github/workflows/r18-postgres-memory.yml'
                w=yaml.load(path.read_text(),Loader=yaml.BaseLoader);w['jobs']['postgres-memory']['steps']=[];path.write_text(yaml.safe_dump(w))
                with self.assertRaises(AssertionError):test.test_only_one_automatic_workflow_and_original_jobs_intact()
            cls.setUpClass()


class SourceAndRuntimeSafetyTests(unittest.TestCase):
    def valid_env(self):
        return dict(GITHUB_ACTIONS='true',RUNNER_ENVIRONMENT='github-hosted',GITHUB_EVENT_NAME='workflow_dispatch',GITHUB_REPOSITORY='Ben-001-sys/Vellistry',PG17_SERVICE_ID='a'*64,RUNNER_TEMP='/tmp')

    def test_only_manual_service_id_context_is_allowed(self):
        self.assertEqual(h.guard(self.valid_env()),'a'*64)
        for key,value in [('GITHUB_ACTIONS','false'),('RUNNER_ENVIRONMENT','self-hosted'),('GITHUB_EVENT_NAME','pull_request'),('GITHUB_REPOSITORY','other/repo'),('PG17_SERVICE_ID','postgres'),('RUNNER_TEMP','')]:
            env=self.valid_env();env[key]=value
            with self.subTest(key=key),self.assertRaises(ValueError):h.guard(env)

    def test_forbidden_remote_and_credential_overrides_fail(self):
        for name in ('PGHOST','PGPORT','PGPASSWORD','PGSERVICE','PGSERVICEFILE','DATABASE_URL','SUPABASE_URL','SUPABASE_SERVICE_ROLE_KEY','DOCKER_HOST','DOCKER_CONTEXT','DOCKER_CONFIG'):
            env=self.valid_env();env[name]='forbidden'
            with self.subTest(name=name),self.assertRaises(ValueError):h.guard(env)

    def test_all_exact_source_pins_match_immutable_git_data(self):
        for path,(blob,checksum) in h.PINS.items():
            raw=subprocess.check_output(['git','show',h.SOURCE+':'+path],cwd=ROOT)
            h.validate_source(path,'100644',blob,raw)
            with self.subTest(path=path),self.assertRaises(ValueError):h.validate_source(path,'100644',blob,raw+b'drift')
            with self.assertRaises(ValueError):h.validate_source(path,'100644','b'*40,raw)
            with self.assertRaises(ValueError):h.validate_source(path,'120000',blob,raw)
        with self.assertRaises(ValueError):h.validate_source('other.sql','100644','b'*40,b'')
        pinned=json.loads((ROOT/'docs/agent-workflow/inputs/VEL-TASK-0015/sources.json').read_text())
        self.assertEqual(h.SOURCE,pinned['source_commit'])
        self.assertEqual(h.PINS,{f['path']:(f['blob'],f['sha256']) for f in pinned['files']})

    def test_source_drift_or_missing_fixture_fails_before_sql(self):
        class Fake:
            def __init__(self):self.calls=[]
            def run(self,args,**kwargs):
                self.calls.append(args)
                return subprocess.CompletedProcess(args,0,'commit' if args[1:3]==['cat-file','-t'] else '', '')
        e=Fake()
        with tempfile.TemporaryDirectory() as directory:
            with patch.object(h,'SOURCE','main'),self.assertRaises(ValueError):h.fetch_sources(e,directory)
            self.assertEqual(e.calls,[])
            with self.assertRaises(ValueError):h.fetch_sources(e,directory)

    def test_independent_storage_cleanup_refuses_unsafe_paths(self):
        with tempfile.TemporaryDirectory() as directory:
            e=h.Evidence(Path(directory)/'evidence')
            pg=type('PG',(),{'service':'a'*64})()
            e.data['container_directory']='/var/lib/postgresql/data'
            with self.assertRaises(ValueError):h.cleanup_recorded_storage(e,pg)
            e.data.pop('container_directory');e.data['runner_directory']=str(Path(directory).parent)
            with patch.dict(os.environ,{'RUNNER_TEMP':directory}),self.assertRaises(ValueError):h.cleanup_recorded_storage(e,pg)

    def test_before_requires_exact_failure_and_sqlstate(self):
        good=subprocess.CompletedProcess([],3,'','ERROR:  P0001: '+h.EXPECTED_BEFORE)
        h.verify_fixture('before',good)
        for r in [subprocess.CompletedProcess([],0,'',''),subprocess.CompletedProcess([],3,'','ERROR:  42P01: missing table'),subprocess.CompletedProcess([],1,'',good.stderr),subprocess.CompletedProcess([],3,'',good.stderr+'\nERROR: unrelated')]:
            with self.assertRaises(ValueError):h.verify_fixture('before',r)

    def test_after_requires_success_and_original_pass_marker(self):
        h.verify_fixture('after',subprocess.CompletedProcess([],0,h.EXPECTED_AFTER,''))
        for code,text in [(1,h.EXPECTED_AFTER),(0,'PASS'),(3,'')]:
            with self.assertRaises(ValueError):h.verify_fixture('after',subprocess.CompletedProcess([],code,text,''))

    def test_target_database_and_sql_file_guards(self):
        pg=h.Postgres(None,'a'*64)
        for database in ('postgresql://remote','production',''):
            with self.assertRaises(ValueError):pg.sql(database,'select 1')
        for file in ('/workspace/tests.sql','/tmp/vel-sec-001-x/../outside.sql'):
            with self.assertRaises(ValueError):pg.sql('postgres',file=file)

    def test_service_image_health_ports_version_and_digest_guards(self):
        good=['a'*64,'sha256:'+'b'*64,'postgres:17','healthy',{'5432/tcp':None}]
        class Fake:
            def __init__(self,values,version='170006',digests=None):self.values=values;self.version=version;self.digests=digests;self.data={}
            def save(self):pass
            def run(self,args,**kwargs):
                if args[:2]==['docker','inspect']:out='|'.join(json.dumps(x) for x in self.values)
                elif args[:3]==['docker','image','inspect']:out=json.dumps(self.digests if self.digests is not None else ['postgres@sha256:'+'c'*64])
                elif kwargs.get('sql')=='show server_version_num;':out=self.version
                else:out='synthetic'
                return subprocess.CompletedProcess(args,0,out,'')
        h.Postgres(Fake(good),'a'*64).inspect()
        for index,value in [(0,'b'*64),(2,'postgres:16'),(3,'unhealthy'),(4,{'5432/tcp':[{'HostIp':'0.0.0.0','HostPort':'5432'}]})]:
            values=copy.deepcopy(good);values[index]=value
            with self.subTest(index=index),self.assertRaises(ValueError):h.Postgres(Fake(values),'a'*64).inspect()
        for version in ('160010','180000','unknown'):
            with self.assertRaises(ValueError):h.Postgres(Fake(good,version),'a'*64).inspect()
        with self.assertRaises(ValueError):h.Postgres(Fake(good,digests=[]),'a'*64).inspect()

    def test_command_failure_and_timeout_are_recorded(self):
        with tempfile.TemporaryDirectory() as directory:
            e=h.Evidence(directory)
            with patch.object(h.subprocess,'run',return_value=subprocess.CompletedProcess(['synthetic'],7,'','failed')):
                with self.assertRaises(ValueError):e.run(['synthetic'])
            self.assertEqual(e.data['commands'][-1]['exit_code'],7)
            with patch.object(h.subprocess,'run',side_effect=subprocess.TimeoutExpired(['synthetic'],90)):
                with self.assertRaises(ValueError):e.run(['synthetic'])
            self.assertEqual(json.loads((Path(directory)/'result.json').read_text())['commands'][-1]['status'],'TIMEOUT')

    def test_cleanup_absence_is_checked_and_failures_are_not_masked(self):
        class FakePG(h.Postgres):
            def __init__(self,remaining):self.remaining=remaining;self.e=type('E',(),{'data':{},'save':lambda _:None})();self.calls=[]
            def sql(self,db,sql,**kwargs):self.calls.append(sql);return subprocess.CompletedProcess([],0,self.remaining if sql.startswith('select count') else 'true','')
        pg=FakePG('0');pg.cleanup();self.assertEqual(pg.e.data['database_cleanup'],'PASS');self.assertEqual(len(pg.calls),4)
        with self.assertRaises(ValueError):FakePG('1').cleanup()

    def test_orchestration_separates_databases_and_always_cleans_failures(self):
        marker='PASS: supplemental privilege RLS owner foreign-author and cleanup transaction'
        for fault in (None,'before','after','supplement'):
            with self.subTest(fault=fault),tempfile.TemporaryDirectory() as directory:
                e=h.Evidence(Path(directory)/'evidence');calls=[]
                class FakePG:
                    service='a'*64
                    cleaned=False
                    def empty(self,database):calls.append(('empty',database))
                    def cleanup(self):self.cleaned=True;calls.append(('cleanup',))
                    def sql(self,database,sql=None,**kwargs):
                        calls.append(('sql',database,sql,kwargs))
                        if sql and sql.startswith('select count'):return subprocess.CompletedProcess([],0,'0','')
                        if kwargs.get('file'):
                            label='before' if kwargs.get('before') else 'after'
                            if fault==label:return subprocess.CompletedProcess([],3,'','ERROR: 42P01: unrelated')
                            return subprocess.CompletedProcess([],3,'','ERROR: P0001: '+h.EXPECTED_BEFORE) if label=='before' else subprocess.CompletedProcess([],0,h.EXPECTED_AFTER,'')
                        return subprocess.CompletedProcess([],0,'' if fault=='supplement' else marker,'')
                pg=FakePG()
                with patch.dict(os.environ,{'RUNNER_TEMP':directory}),patch.object(h,'fetch_sources'),patch.object(h,'supplemental_sql',return_value='supplement'),patch.object(e,'run',return_value=subprocess.CompletedProcess([],0,'','')) as command:
                    if fault:
                        with self.assertRaises(ValueError):h.execute(e,pg)
                    else:
                        h.execute(e,pg)
                        fixture_calls=[c for c in calls if c[0]=='sql' and c[3].get('file')]
                        self.assertEqual([c[1] for c in fixture_calls],list(h.DATABASES))
                        copy_call=next(c for c in command.call_args_list if c.args[0][1]=='cp')
                        self.assertTrue(copy_call.args[0][2].endswith(os.sep+'.'))
                self.assertTrue(pg.cleaned)
                self.assertEqual(e.data['runner_temporary_storage'],'REMOVED')
                self.assertEqual(e.data['container_temporary_storage'],'REMOVED')

    def test_supplement_preserves_source_and_requires_rollback(self):
        with tempfile.TemporaryDirectory() as directory:
            for path in h.PINS:
                p=Path(directory)/path;p.parent.mkdir(parents=True,exist_ok=True)
                p.write_bytes(subprocess.check_output(['git','show',h.SOURCE+':'+path],cwd=ROOT))
            sql=h.supplemental_sql(directory,'/tmp/vel-sec-001-'+'a'*32)
            for text in ('begin;','rollback;','create trigger bad_trigger','references public.books(id)','when insufficient_privilege','get diagnostics n=row_count','returning owner_id','vel_sec_group','vel_sec_service'):
                self.assertIn(text,sql)
            self.assertEqual(sql.count('\\ir '),3)


if __name__=='__main__':unittest.main()

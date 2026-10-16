import copy
import importlib.util
import json
import os
from pathlib import Path
import subprocess
import tempfile
import unittest
from unittest.mock import patch
import yaml

ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('ci_policy',ROOT/'scripts/ci_policy.py')
policy=importlib.util.module_from_spec(spec); spec.loader.exec_module(policy)

class RoutingTests(unittest.TestCase):
    def test_docs_and_governance_are_lightweight(self):
        for path in ('README.md','CURRENT-STATE.md','docs/decisions/ADR-0008-any.md','docs/agent-workflow/tasks/VEL-TASK-0006.yaml','docs/agent-workflow/context-packs/VEL-CP-0006.md','docs/agent-workflow/execution-bundles/VEL-EB-0006.md','scripts/agent_workflow.py','tests/test_handoff_recovery.py'):
            with self.subTest(path=path): self.assertEqual(set(policy.classify([path]).values()),{'false'})
    def test_frontend_build_without_unrelated_containers(self):
        self.assertEqual(policy.classify(['apps/web/src/app/globals.css']),dict(application='true',security='false',recovery='false',privileges='false'))
    def test_security_paths_cannot_evade_integration(self):
        for path in ('apps/api/src/modules/books/books.service.ts','apps/web/src/app/books/page.tsx','apps/web/src/lib/shared-utils.ts','apps/web/src/lib/library/book-library-state.ts','apps/web/src/lib/library/book-library-session.ts','apps/web/src/lib/supabase/browser.ts','apps/web/src/app/api/books/route.ts','supabase/migrations/new.sql','supabase/config.toml','pnpm-lock.yaml','pnpm-workspace.yaml','package.json','.github/workflows/ci.yml','scripts/ci_policy.py','tests/test_ci_policy.py','tests/book_privileges_regression.sql','tests/hosted_supabase_preflight.test.mjs','.env.example','docs/decisions/ADR-0006-any.md'):
            with self.subTest(path=path):
                plan=policy.classify([path],privilege_present=True)
                self.assertEqual(set(plan.values()),{'true'})
    def test_unknown_executable_and_config_are_conservative(self):
        for path in ('new/security.sh','new-config.json','scripts/new_validator.py','docs/research/probe.py','tests/new_case.py'):
            with self.subTest(path=path): self.assertEqual(policy.classify([path])['security'],'true')
    def test_full_manual_and_main_baseline(self):
        self.assertEqual(set(policy.classify([],full=True,privilege_present=True).values()),{'true'})
    def test_proposed_privilege_test_is_not_falsely_claimed(self):
        self.assertEqual(policy.classify(['supabase/schema.sql'])['privileges'],'false')
        self.assertEqual(policy.classify(['supabase/schema.sql'],privilege_present=True)['privileges'],'true')
    def test_unsafe_paths_fail(self):
        for path in ('','/absolute','docs/../escape'):
            with self.subTest(path=path),self.assertRaises(ValueError): policy.classify([path])
    def test_git_rename_delete_and_hostile_filename_are_data(self):
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory)
            def git(*args): return subprocess.check_output(['git',*args],cwd=root,stderr=subprocess.DEVNULL).decode().strip()
            git('init'); git('config','user.email','synthetic@example.invalid'); git('config','user.name','Synthetic test')
            old=root/'apps/api/auth.ts'; old.parent.mkdir(parents=True); old.write_text('before')
            (root/'tests').mkdir(); (root/policy.PRIVILEGE_TEST).write_text('synthetic')
            git('add','.'); git('commit','-m','before'); base=git('rev-parse','HEAD')
            old.rename(root/'docs.md'); (root/policy.PRIVILEGE_TEST).unlink()
            hostile='docs/$(never-run).md'; (root/'docs').mkdir(); (root/hostile).write_text('prose')
            git('add','-A'); git('commit','-m','after'); head=git('rev-parse','HEAD')
            paths=policy.changed_paths(base,head,pr=True,cwd=root)
            self.assertIn('apps/api/auth.ts',paths); self.assertIn(hostile,paths)
            self.assertEqual(policy.classify(paths)['security'],'true')
            event={'pull_request':{'head':{'sha':head},'base':{'sha':base}}}
            with self.assertRaisesRegex(ValueError,'removed'): policy.plan_event('pull_request',event,head,cwd=root)
    def test_exact_head_and_missing_pr_base_fail(self):
        with self.assertRaisesRegex(ValueError,'exact event'): policy.plan_event('pull_request',{'pull_request':{'head':{'sha':'a'*40}}},'b'*40)
        with self.assertRaisesRegex(ValueError,'base missing'): policy.plan_event('pull_request',{'pull_request':{'head':{'sha':'a'*40}}},'a'*40)
    def test_main_manual_and_ready_event(self):
        head='a'*40
        with patch.dict(os.environ,{'GITHUB_SHA':head}):
            for name,event in (('push',{'ref':'refs/heads/main','before':'0'*40}),('workflow_dispatch',{})):
                with self.subTest(event=name): self.assertEqual(policy.plan_event(name,event,head)['security'],'true')
            with self.assertRaises(ValueError): policy.plan_event('push',{'ref':'refs/heads/feature'},head)
        with patch.object(policy,'changed_paths',return_value=['README.md']):
            event={'action':'ready_for_review','pull_request':{'head':{'sha':head},'base':{'sha':'b'*40}}}
            self.assertEqual(policy.plan_event('pull_request',event,head)['application'],'false')
    def test_bad_git_shas_and_events_fail(self):
        with self.assertRaises(ValueError): policy.changed_paths('main; echo bad','a'*40,pr=True)
        with self.assertRaises(ValueError): policy.plan_event('pull_request_target',{},'a'*40)

class FinalGateTests(unittest.TestCase):
    def needs(self, full=True):
        plan=policy.classify([],full=full,privilege_present=full)
        return {'classify':{'result':'success','outputs':plan},'governance':{'result':'success'},**{j:{'result':'success' if full else 'skipped'} for j in ('application','recovery','privileges')}}
    def test_success_and_nonapplicable_skips_pass(self):
        policy.check_gate(self.needs()); policy.check_gate(self.needs(False))
    def test_every_required_failure_skip_cancel_or_missing_fails(self):
        for job in self.needs():
            for result in ('failure','cancelled','skipped',None,'timed_out'):
                n=self.needs(); n[job]['result']=result
                with self.subTest(job=job,result=result),self.assertRaises(ValueError): policy.check_gate(n)
    def test_missing_or_invalid_outputs_and_jobs_fail(self):
        for flag in policy.FLAGS:
            n=self.needs(); del n['classify']['outputs'][flag]
            with self.subTest(flag=flag),self.assertRaises(ValueError): policy.check_gate(n)
        for flag in policy.FLAGS:
            n=self.needs(); n['classify']['outputs'][flag]='TRUE'
            with self.assertRaises(ValueError): policy.check_gate(n)
        n=self.needs(); del n['recovery']
        with self.assertRaises(ValueError): policy.check_gate(n)
    def test_inconsistent_security_cannot_pass(self):
        n=self.needs(); n['classify']['outputs']['application']='false'
        with self.assertRaises(ValueError): policy.check_gate(n)
    def test_security_recovery_cannot_be_skipped(self):
        n=self.needs(); n['classify']['outputs']['recovery']='false'
        with self.assertRaises(ValueError): policy.check_gate(n)

    def test_failure_of_nonapplicable_job_is_not_hidden(self):
        n=self.needs(False); n['application']['result']='failure'
        with self.assertRaises(ValueError): policy.check_gate(n)

class WorkflowContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.baseline=json.loads((ROOT/'docs/reports/evidence/VEL-CI-OPT-001/workflow-baseline.json').read_text(encoding='utf-8'))
        cls.workflow=yaml.load((ROOT/'.github/workflows/ci.yml').read_text(encoding='utf-8'),Loader=yaml.BaseLoader)

    def test_governance_generates_required_pack_before_exporter_tests(self):
        spec=importlib.util.spec_from_file_location('ci_governance',ROOT/'scripts/ci_governance.py')
        governance=importlib.util.module_from_spec(spec); spec.loader.exec_module(governance)
        # Direct import follows the same module search path as script execution.
        import sys
        with patch.dict(sys.modules,{'ci_policy':policy}): governance.validate_required_sources()
        governance.validate_required_sources=lambda:None
        observed=[]
        def fail_after_discovery(*args):
            observed.append('discovery')
            raise RuntimeError('stop after first test command')
        with patch.object(governance,'prepare_packets',side_effect=lambda:observed.append('pack')):
            with patch.object(governance,'python',side_effect=fail_after_discovery):
                with self.assertRaises(RuntimeError): governance.main()
        self.assertEqual(observed,['pack','discovery'])

    def test_only_one_automatic_workflow_and_original_jobs_intact(self):
        for path in (ROOT/'.github/workflows').glob('*.yml'):
            d=yaml.load(path.read_text(encoding='utf-8'),Loader=yaml.BaseLoader)
            if path.name=='ci.yml': continue
            self.assertEqual(set(d['on']),{'workflow_dispatch'},path.name)
            self.assertEqual(d['jobs'],self.baseline[path.name]['workflow']['jobs'],path.name)
        self.assertEqual({p.name for p in (ROOT/'.github/workflows').glob('*.yml')},set(self.baseline)|{'ci.yml'})
        self.assertEqual(len(self.baseline),25)
    def test_unfiltered_events_and_pr_only_cancellation(self):
        w=self.workflow
        self.assertEqual(set(w['on']),{'pull_request','push','workflow_dispatch'})
        self.assertIn('ready_for_review',w['on']['pull_request']['types'])
        self.assertNotIn('paths',w['on']['pull_request'])
        self.assertEqual(w['on']['push'],{'branches':['main']})
        self.assertEqual(w['concurrency']['cancel-in-progress'],"${{ github.event_name == 'pull_request' }}")
        self.assertIn('github.run_id',w['concurrency']['group'])
        self.assertEqual(w['permissions'],{'contents':'read'})
    def test_exact_head_no_persisted_credentials_in_all_jobs(self):
        for name,job in self.workflow['jobs'].items():
            checkout=next(s for s in job['steps'] if s.get('uses','').startswith('actions/checkout@'))
            self.assertEqual(checkout['with']['ref'],'${{ github.event.pull_request.head.sha || github.sha }}',name)
            self.assertEqual(checkout['with']['persist-credentials'],'false')
    def test_final_gate_always_includes_every_applicable_result(self):
        gate=self.workflow['jobs']['gate']
        self.assertEqual(gate['name'],'Vellistry CI gate')
        self.assertEqual(gate['if'],'${{ always() }}')
        self.assertEqual(set(gate['needs']),{'classify','governance','application','recovery','privileges'})
        self.assertIn('python scripts/ci_policy.py gate',[s.get('run') for s in gate['steps']])
    def test_k2_checks_are_preserved_and_cannot_skip_when_applicable(self):
        old=self.baseline['k2-supabase-auth-rls.yml']['workflow']['jobs']['real-supabase-security']['steps']
        app=self.workflow['jobs']['application']
        for previous in old:
            if previous.get('name','').startswith(('Pick free','Start real','Validate actual','Attach synthetic','Shut down')):
                step=next(s for s in app['steps'] if s.get('name')==previous['name'])
                for field in ('run','uses','with','shell'):
                    if field in previous: self.assertEqual(step[field],previous[field])
                self.assertIn("needs.classify.outputs.security == 'true'",step['if'])
        self.assertEqual(app['if'],"${{ needs.classify.outputs.application == 'true' }}")
        installs=[s for s in app['steps'] if 'pnpm install' in s.get('run','')]
        self.assertEqual(len(installs),1)
        self.assertEqual(installs[0]['run'],'pnpm install --frozen-lockfile')
        self.assertEqual(sum('pnpm build' == s.get('run') for s in app['steps']),1)
    def test_sql_regression_when_available_is_fail_fast(self):
        p=self.workflow['jobs']['privileges']
        self.assertEqual(p['if'],"${{ needs.classify.outputs.privileges == 'true' }}")
        self.assertIn('postgres:17',p['container'])
        self.assertTrue(any('psql -X -v ON_ERROR_STOP=1' in s.get('run','') for s in p['steps']))

if __name__=='__main__': unittest.main()

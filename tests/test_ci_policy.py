import copy
import importlib.util
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import patch
import yaml

ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'scripts'))
spec=importlib.util.spec_from_file_location('ci_policy',ROOT/'scripts/ci_policy.py')
policy=importlib.util.module_from_spec(spec); spec.loader.exec_module(policy)


# Owner-authorized Task0015: one exact supplemental manual workflow only.
PG17_MANUAL_NAME = 'vel-sec-001-pg17-manual.yml'
PG17_MANUAL_CONTRACT = yaml.load("""
name: VEL-SEC-001 disposable PG17 evidence (manual)
on:
  workflow_dispatch:
permissions:
  contents: read
jobs:
  pg17:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    services:
      postgres:
        image: postgres:17
        env:
          POSTGRES_HOST_AUTH_METHOD: trust
        options: --health-cmd pg_isready --health-interval 5s --health-timeout 5s --health-retries 12
    steps:
      - name: Checkout exact reviewed revision
        uses: actions/checkout@11d5960a326750d5838078e36cf38b85af677262
        with:
          ref: ${{ github.sha }}
          persist-credentials: false
          fetch-depth: 1
      - name: Run pinned synthetic PG17 evidence
        run: python3 scripts/pg17_book_privilege_evidence.py
        env:
          PG17_SERVICE_ID: ${{ job.services.postgres.id }}
      - name: Independently verify disposable database cleanup
        if: ${{ always() }}
        run: python3 scripts/pg17_book_privilege_evidence.py --cleanup
        env:
          PG17_SERVICE_ID: ${{ job.services.postgres.id }}
      - name: Upload synthetic evidence only
        if: ${{ always() }}
        uses: actions/upload-artifact@ea165f8d65b6e75b540449e92b4886f43607fa02
        with:
          name: vel-sec-001-pg17-evidence
          path: ${{ runner.temp }}/vel-sec-001-pg17-evidence
          if-no-files-found: error
          retention-days: 14
""", Loader=yaml.BaseLoader)

def check_pg17_manual_contract(workflow):
    if workflow != PG17_MANUAL_CONTRACT:
        raise ValueError('PG17 manual workflow security/execution contract changed')

class RoutingTests(unittest.TestCase):
    def test_nextjs_auth_sources_require_mfa_application_security_and_recovery(self):
        for path in ('apps/web/src/app/login/page.tsx', 'apps/web/src/app/account/mfa/page.tsx',
                     'apps/web/src/components/auth/auth-panel.tsx', 'apps/web/src/lib/auth/mfa-flow.ts',
                     'apps/web/src/lib/auth/mfa-flow.test.ts', 'apps/web/src/lib/auth/auth-panel.test.tsx',
                     'apps/web/src/lib/supabase/browser.ts', 'apps/web/src/lib/supabase/server.ts', 'package.json'):
            with self.subTest(path=path):
                self.assertEqual(policy.classify([path]),
                                 dict(application='true', security='true', recovery='true', privileges='false'))

    def test_mfa_application_failure_cannot_be_a_merge_eligible_gate(self):
        # Synthetic Actions job results, not a claim of an intentionally failing live run.
        for mode in ('ready', 'full'):
            plan = {**policy.classify(['apps/web/src/lib/auth/mfa-flow.ts'], full=mode == 'full'), 'mode': mode}
            needs = {'classify': {'result': 'success', 'outputs': plan},
                     'governance': {'result': 'success', 'outputs': {'compliance': 'pass'}},
                     **{job: {'result': 'success' if plan[job] == 'true' else 'skipped'}
                        for job in ('application', 'recovery', 'privileges')}}
            self.assertEqual(policy.check_gate(needs, expected_plan=plan), 'merge-eligible')
            for result in ('failure', 'cancelled', 'skipped', None, 'timed_out'):
                with self.subTest(mode=mode, application=result):
                    failed = copy.deepcopy(needs); failed['application']['result'] = result
                    with self.assertRaises(ValueError): policy.check_gate(failed, expected_plan=plan)

    def test_docs_and_governance_are_lightweight(self):
        for path in ('README.md','CURRENT-STATE.md','docs/reports/evidence/result.json','docs/reports/evidence/timings.csv','docs/decisions/ADR-0008-any.md','docs/agent-workflow/tasks/VEL-TASK-0006.yaml','docs/agent-workflow/context-packs/VEL-CP-0006.md','docs/agent-workflow/execution-bundles/VEL-EB-0006.md','scripts/agent_workflow.py','tests/test_handoff_recovery.py'):
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
            event={'action':'synchronize','pull_request':{'draft':False,'head':{'sha':head},'base':{'sha':base}}}
            with self.assertRaisesRegex(ValueError,'removed'): policy.plan_event('pull_request',event,head,cwd=root)
            git('update-ref','refs/remotes/origin/main',base)
            with patch.dict(os.environ,{'GITHUB_SHA':head}):
                with self.assertRaisesRegex(ValueError,'removed'):
                    policy.plan_event('workflow_dispatch',{},head,cwd=root)
    def test_exact_head_and_missing_pr_base_fail(self):
        with self.assertRaisesRegex(ValueError,'exact event'): policy.plan_event('pull_request',{'action':'opened','pull_request':{'draft':False,'head':{'sha':'a'*40}}},'b'*40)
        with self.assertRaisesRegex(ValueError,'base missing'): policy.plan_event('pull_request',{'action':'opened','pull_request':{'draft':False,'head':{'sha':'a'*40}}},'a'*40)
    def test_main_manual_and_ready_event(self):
        head='a'*40
        with patch.dict(os.environ,{'GITHUB_SHA':head}):
            for name,event in (('push',{'ref':'refs/heads/main','before':'0'*40}),('workflow_dispatch',{})):
                with self.subTest(event=name): self.assertEqual(policy.plan_event(name,event,head)['security'],'true')
            with self.assertRaises(ValueError): policy.plan_event('push',{'ref':'refs/heads/feature'},head)
        with patch.object(policy,'changed_paths',return_value=['README.md']):
            event={'action':'ready_for_review','pull_request':{'draft':False,'head':{'sha':head},'base':{'sha':'b'*40}}}
            self.assertEqual(policy.plan_event('pull_request',event,head)['application'],'false')
    def test_bad_git_shas_and_events_fail(self):
        with self.assertRaises(ValueError): policy.changed_paths('main; echo bad','a'*40,pr=True)
        with self.assertRaises(ValueError): policy.plan_event('pull_request_target',{},'a'*40)

class FinalGateTests(unittest.TestCase):
    def plan(self, full=True):
        return {**policy.classify([],full=full,privilege_present=full),'mode':'full' if full else 'ready'}
    def check(self, needs, full=True):
        return policy.check_gate(needs,expected_plan=self.plan(full))
    def needs(self, full=True):
        plan=self.plan(full)
        return {'classify':{'result':'success','outputs':plan},'governance':{'result':'success','outputs':{'compliance':'pass'}},**{j:{'result':'success' if full else 'skipped'} for j in ('application','recovery','privileges')}}
    def test_green_security_cannot_hide_missing_compliance(self):
        for value in ({}, {'compliance':'NOT_RUN'}, {'compliance':'BLOCKED'}, {'compliance':'failure'}):
            needs=self.needs(); needs['governance']['outputs']=value
            with self.subTest(outputs=value), self.assertRaises(ValueError): self.check(needs)
    def test_success_and_nonapplicable_skips_pass(self):
        self.check(self.needs()); self.check(self.needs(False),False)
    def test_every_required_failure_skip_cancel_or_missing_fails(self):
        for job in self.needs():
            for result in ('failure','cancelled','skipped',None,'timed_out'):
                n=self.needs(); n[job]['result']=result
                with self.subTest(job=job,result=result),self.assertRaises(ValueError): self.check(n)
    def test_missing_or_invalid_outputs_and_jobs_fail(self):
        for flag in policy.FLAGS:
            n=self.needs(); del n['classify']['outputs'][flag]
            with self.subTest(flag=flag),self.assertRaises(ValueError): self.check(n)
        for flag in policy.FLAGS:
            n=self.needs(); n['classify']['outputs'][flag]='TRUE'
            with self.assertRaises(ValueError): self.check(n)
        n=self.needs(); del n['recovery']
        with self.assertRaises(ValueError): self.check(n)
    def test_inconsistent_security_cannot_pass(self):
        n=self.needs(); n['classify']['outputs']['application']='false'
        with self.assertRaises(ValueError): self.check(n)
    def test_security_recovery_cannot_be_skipped(self):
        n=self.needs(); n['classify']['outputs']['recovery']='false'
        with self.assertRaises(ValueError): self.check(n)

    def test_failure_of_nonapplicable_job_is_not_hidden(self):
        n=self.needs(False); n['application']['result']='failure'
        with self.assertRaises(ValueError): self.check(n,False)

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
        workflows = [p for p in (ROOT/'.github/workflows').iterdir() if p.suffix.lower() in {'.yml','.yaml'}]
        for path in workflows:
            d=yaml.load(path.read_text(encoding='utf-8'),Loader=yaml.BaseLoader)
            if path.name=='ci.yml': continue
            self.assertEqual(set(d['on']),{'workflow_dispatch'},path.name)
            if path.name == PG17_MANUAL_NAME:
                check_pg17_manual_contract(d)
            else:
                self.assertEqual(d['jobs'],self.baseline[path.name]['workflow']['jobs'],path.name)
        self.assertEqual({p.name for p in workflows},set(self.baseline)|{'ci.yml',PG17_MANUAL_NAME})
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
    def test_draft_mode_and_verified_linter_are_wired_without_renaming_merge_gate(self):
        w=self.workflow
        self.assertIn('converted_to_draft',w['on']['pull_request']['types'])
        self.assertEqual(w['jobs']['classify']['outputs']['mode'],'${{ steps.plan.outputs.mode }}')
        self.assertIn('Draft advisory',w['jobs']['governance']['name'])
        self.assertEqual(w['jobs']['gate']['steps'][0]['with']['fetch-depth'],'0')
        lint=next(s['run'] for s in w['jobs']['governance']['steps'] if s.get('name','').startswith('Lint all workflows'))
        self.assertIn('actionlint_1.7.12_linux_amd64.tar.gz',lint)
        self.assertIn('8aca8db96f1b94770f1b0d72b6dddcb1ebb8123cb3712530b08cc387b349a3d8',lint)
        self.assertIn('sha256sum --check',lint)
        self.assertIn('"$RUNNER_TEMP/actionlint" -shellcheck=',lint)

    def test_sql_regression_when_available_is_fail_fast(self):
        p=self.workflow['jobs']['privileges']
        self.assertEqual(p['if'],"${{ needs.classify.outputs.privileges == 'true' }}")
        self.assertIn('postgres:17',p['container'])
        self.assertTrue(any('psql -X -v ON_ERROR_STOP=1' in s.get('run','') for s in p['steps']))


class DraftPolicyTests(unittest.TestCase):
    def event(self, draft=True, action='synchronize'):
        return {'action':action,'pull_request':{'draft':draft,'head':{'sha':'a'*40},'base':{'sha':'b'*40}}}
    def plan(self, draft=True, action='synchronize', paths=None):
        with patch.object(policy,'changed_paths',return_value=paths or ['apps/api/auth.ts']):
            return policy.plan_event('pull_request',self.event(draft,action),'a'*40)
    def needs(self, plan):
        return {'classify':{'result':'success','outputs':dict(plan)},'governance':{'result':'success','outputs':{'compliance':'pass'}},**{j:{'result':'success' if plan[j]=='true' else 'skipped'} for j in ('application','recovery','privileges')}}
    def test_draft_unknown_security_and_ci_paths_are_advisory_only(self):
        for path in ('apps/api/auth.ts','supabase/migrations/new.sql','.github/workflows/ci.yml','new/unknown.py'):
            with self.subTest(path=path):
                plan=self.plan(paths=[path])
                self.assertEqual(plan.get('mode'),'draft')
                self.assertEqual({plan[f] for f in policy.FLAGS},{'false'})
    def test_all_ordinary_draft_activities_are_cheap(self):
        for action in ('opened','synchronize','reopened','edited','converted_to_draft'):
            with self.subTest(action=action): self.assertEqual(self.plan(action=action).get('mode'),'draft')
    def test_ready_for_review_and_ready_updates_require_security(self):
        for action in ('ready_for_review','synchronize','edited','reopened'):
            with self.subTest(action=action):
                plan=self.plan(False,action,paths=['new/unknown.py'])
                self.assertEqual(plan.get('mode'),'ready')
                self.assertEqual(plan['security'],'true')
                self.assertEqual(plan['recovery'],'true')
    def test_missing_malformed_or_contradictory_draft_metadata_fails(self):
        events=[self.event(None),self.event('false'),self.event(True,'ready_for_review'),self.event(False,'converted_to_draft'),self.event(True,'unknown_action')]
        missing=self.event(); del missing['pull_request']['draft']; events.append(missing)
        for event in events:
            with self.subTest(event=event),self.assertRaises(ValueError):
                with patch.object(policy,'changed_paths',return_value=['README.md']): policy.plan_event('pull_request',event,'a'*40)
    def test_gate_distinguishes_advisory_from_merge_eligibility(self):
        plan=self.plan()
        self.assertEqual(policy.check_gate(self.needs(plan),expected_plan=plan),'draft-advisory')
        ready=self.plan(False)
        self.assertEqual(policy.check_gate(self.needs(ready),expected_plan=ready),'merge-eligible')
    def test_forged_draft_flags_cannot_hide_a_ready_security_skip(self):
        ready=self.plan(False)
        fake=self.needs(self.plan())
        with self.assertRaises(ValueError): policy.check_gate(fake,expected_plan=ready)
        fake=self.needs(ready); fake['application']['result']='skipped'
        with self.assertRaises(ValueError): policy.check_gate(fake,expected_plan=ready)
    def test_draft_governance_failure_is_not_an_advisory_pass(self):
        plan=self.plan(); needs=self.needs(plan); needs['governance']['result']='failure'
        with self.assertRaises(ValueError): policy.check_gate(needs,expected_plan=plan)
    def test_cli_draft_advisory_cannot_publish_green_merge_gate(self):
        head=subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip()
        base=subprocess.check_output(['git','rev-parse','origin/main'],cwd=ROOT,text=True).strip()
        event={'action':'synchronize','pull_request':{'draft':True,'head':{'sha':head},'base':{'sha':base}}}
        plan={**{f:'false' for f in policy.FLAGS},'mode':'draft'}
        with tempfile.TemporaryDirectory() as directory:
            packet=Path(directory)/'event.json'; packet.write_text(json.dumps(event),encoding='utf-8')
            env={**os.environ,'GITHUB_EVENT_NAME':'pull_request','GITHUB_EVENT_PATH':str(packet),'CI_NEEDS':json.dumps(self.needs(plan))}
            result=subprocess.run([__import__('sys').executable,str(ROOT/'scripts/ci_policy.py'),'gate'],cwd=ROOT,env=env,capture_output=True,text=True)
            self.assertEqual(result.returncode,1,result.stdout+result.stderr)
            self.assertIn('ADVISORY PASS',result.stdout)
            self.assertIn('BLOCKED',result.stdout)
    def test_cli_recomputes_ready_plan_instead_of_trusting_draft_outputs(self):
        head=subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip()
        base=subprocess.check_output(['git','rev-parse','origin/main'],cwd=ROOT,text=True).strip()
        event={'action':'ready_for_review','pull_request':{'draft':False,'head':{'sha':head},'base':{'sha':base}}}
        fake={**{f:'false' for f in policy.FLAGS},'mode':'draft'}
        with tempfile.TemporaryDirectory() as directory:
            packet=Path(directory)/'event.json'; packet.write_text(json.dumps(event),encoding='utf-8')
            env={**os.environ,'GITHUB_EVENT_NAME':'pull_request','GITHUB_EVENT_PATH':str(packet),'CI_NEEDS':json.dumps(self.needs(fake))}
            result=subprocess.run([__import__('sys').executable,str(ROOT/'scripts/ci_policy.py'),'gate'],cwd=ROOT,env=env,capture_output=True,text=True)
            self.assertNotEqual(result.returncode,0)
            self.assertNotIn('merge-eligible applicable',result.stdout)
            self.assertIn('independently verified',result.stderr)

    def test_base_edit_reclassifies_unchanged_ready_head(self):
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory)
            def git(*args): return subprocess.check_output(['git',*args],cwd=root,stderr=subprocess.DEVNULL).decode().strip()
            git('init'); git('config','user.email','synthetic@example.invalid'); git('config','user.name','Synthetic')
            (root/'README.md').write_text('base'); git('add','.'); git('commit','-m','base'); base0=git('rev-parse','HEAD')
            (root/'apps/api').mkdir(parents=True); (root/'apps/api/auth.ts').write_text('security delta'); git('add','.'); git('commit','-m','security'); base1=git('rev-parse','HEAD')
            (root/'README.md').write_text('docs'); git('add','.'); git('commit','-m','docs'); head=git('rev-parse','HEAD')
            event={'action':'synchronize','pull_request':{'draft':False,'head':{'sha':head},'base':{'sha':base1}}}
            self.assertEqual(policy.plan_event('pull_request',event,head,cwd=root)['security'],'false')
            event['action']='edited'; event['pull_request']['base']['sha']=base0
            self.assertEqual(policy.plan_event('pull_request',event,head,cwd=root)['security'],'true')
    def test_manual_is_explicitly_full_even_on_draft_branch(self):
        with patch.dict(os.environ,{'GITHUB_SHA':'a'*40}):
            plan=policy.plan_event('workflow_dispatch',{},'a'*40)
            self.assertEqual(plan.get('mode'),'full')
            self.assertEqual(plan['security'],'true')




class WorkspaceCoverageTests(unittest.TestCase):
    STEP = {"name": "Workspace controller and organizer contract regressions", "run": "pnpm test:workspace-contract"}

    def check_workspace_step(self, workflow):
        job = workflow["jobs"]["application"]
        self.assertEqual(job["if"], "${{ needs.classify.outputs.application == 'true' }}")
        steps = job["steps"]
        matches = [s for s in steps if s.get("name") == self.STEP["name"] or s.get("run") == self.STEP["run"]]
        self.assertEqual(len(matches), 1)
        self.assertEqual(matches[0], self.STEP)  # no skip, masking, env/shell/directory override
        self.assertLess(next(i for i, s in enumerate(steps) if s.get("run") == "pnpm install --frozen-lockfile"), steps.index(matches[0]))
        self.assertLess(steps.index(matches[0]), next(i for i, s in enumerate(steps) if s.get("run") == "pnpm build"))

    def test_workspace_regressions_are_required_by_real_application_ci(self):
        self.check_workspace_step(yaml.load((ROOT / ".github/workflows/ci.yml").read_text(), Loader=yaml.BaseLoader))

    def test_workspace_removal_and_execution_bypasses_fail(self):
        import copy
        baseline = yaml.load((ROOT / ".github/workflows/ci.yml").read_text(), Loader=yaml.BaseLoader)
        steps = baseline["jobs"]["application"]["steps"]
        steps[:] = [s for s in steps if s.get("name") != self.STEP["name"] and s.get("run") != self.STEP["run"]]
        steps.insert(next(i for i, s in enumerate(steps) if s.get("run") == "pnpm install --frozen-lockfile") + 1, dict(self.STEP))
        self.check_workspace_step(baseline)
        cases = ["remove", "replace", "duplicate", "before-install", "after-build", "job-skip", "if", "continue-on-error", "shell", "working-directory", "env", "mask"]
        for case in cases:
            with self.subTest(case=case):
                w = copy.deepcopy(baseline); job = w["jobs"]["application"]; ss = job["steps"]
                step = next(s for s in ss if s.get("run") == self.STEP["run"])
                if case == "remove": ss.remove(step)
                elif case == "replace": step["run"] = "pnpm test:library-isolation"
                elif case == "duplicate": ss.append(dict(step))
                elif case == "before-install": ss.remove(step); ss.insert(0, step)
                elif case == "after-build": ss.remove(step); ss.append(step)
                elif case == "job-skip": job["if"] = "${{ false }}"
                elif case == "mask": step["run"] += " || true"
                else: step[case] = {"env": {"NODE_OPTIONS": "--require ./skip.js"}, "if": "${{ false }}", "continue-on-error": "true", "shell": "sh", "working-directory": "tests"}[case]
                with self.assertRaises(AssertionError): self.check_workspace_step(w)

class PersistenceCoverageTests(unittest.TestCase):
    def baseline(self):
        return yaml.load((ROOT / '.github/workflows/ci.yml').read_text(encoding='utf-8'), Loader=yaml.BaseLoader)

    def test_principal_adapter_is_a_mandatory_real_workflow_step(self):
        import pr_compliance as pc
        expected={'name':'Principal adapter binding regressions',
                  'run':'pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-principal-adapter.spec.ts'}
        self.assertIn(expected, pc.PERSISTENCE_STEPS)
        pc.persistence_coverage_contract(self.baseline())

    def test_nextjs_mfa_is_a_mandatory_real_workflow_step(self):
        import pr_compliance as pc
        expected = {'name': 'Next.js authentication and MFA regressions', 'run': 'pnpm test:auth-mfa'}
        self.assertIn(expected, pc.PERSISTENCE_STEPS)
        pc.persistence_coverage_contract(self.baseline())

    def test_persistence_commands_and_runtime_are_required(self):
        import pr_compliance
        pr_compliance.persistence_coverage_contract(self.baseline())

    def test_persistence_execution_bypasses_are_rejected(self):
        import copy
        import pr_compliance as pc
        for expected in pc.PERSISTENCE_STEPS:
            for case in ('remove','replace','duplicate','rename-duplicate','if','continue-on-error','shell','working-directory','env','mask','before-install','after-security'):
                with self.subTest(command=expected['name'], case=case):
                    w=copy.deepcopy(self.baseline()); steps=w['jobs']['application']['steps']
                    step=next(s for s in steps if s.get('name')==expected['name'])
                    if case=='remove': steps.remove(step)
                    elif case=='replace': step['run']='echo PASS'
                    elif case=='duplicate': steps.append(dict(step))
                    elif case=='rename-duplicate': steps.append(dict(step,name='Other runner'))
                    elif case=='mask': step['run']+=' || true'
                    elif case=='before-install': steps.remove(step); steps.insert(0,step)
                    elif case=='after-security': steps.remove(step); steps.append(step)
                    else: step[case]={'if':'false','continue-on-error':'true','shell':'sh','working-directory':'other','env':{'NODE_OPTIONS':'--require ./skip.js'}}[case]
                    with self.assertRaises(ValueError): pc.persistence_coverage_contract(w)

    def test_persistence_job_and_python_overrides_are_rejected(self):
        import copy
        import pr_compliance as pc
        for case in ('job-if','job-env','python-remove','python-replace','python-if','python-version'):
            with self.subTest(case=case):
                w=copy.deepcopy(self.baseline()); job=w['jobs']['application'];steps=job['steps']
                py=next(s for s in steps if s.get('uses')=='actions/setup-python@v5')
                if case=='job-if': job['if']='false'
                elif case=='job-env': job['env']={'PYTHONPATH':'other'}
                elif case=='python-remove': steps.remove(py)
                elif case=='python-replace': py['uses']='other/setup@main'
                elif case=='python-if': py['if']='false'
                else: py['with']['python-version']='2.7'
                with self.assertRaises(ValueError): pc.persistence_coverage_contract(w)



# Task0076: fail-closed Chromium contract, executed by existing governance discovery.
CHROMIUM_STEPS = [
    {'name':'Install matching native Chromium and Linux dependencies','run':'pnpm exec playwright install --with-deps chromium'},
    {'name':'Complete native Chromium durable draft acceptance','run':'pnpm test:durable-drafts'},
    {'name':'Validate complete source-bound Chromium evidence','run':'pnpm validate:durable-drafts'},
    {'name':'Attach bounded synthetic Chromium evidence','if':'${{ always() }}','uses':'actions/upload-artifact@v4',
     'with':{'name':'durable-draft-chromium-results','path':'.submission/durable-browser-results.json\n.submission/durable-browser-diagnostics.txt\n','if-no-files-found':'error','retention-days':'7'}}
]

def check_chromium_contract(workflow, package):
    job=workflow['jobs']['application']; steps=job['steps']
    if job.get('if')!="${{ needs.classify.outputs.application == 'true' }}" or job.get('needs')!=['classify']:
        raise ValueError('Chromium application guard changed')
    if any(k in workflow for k in ('env','defaults')) or any(k in job for k in ('env','defaults','continue-on-error','strategy','permissions')):
        raise ValueError('Chromium execution override')
    positions=[]
    for expected in CHROMIUM_STEPS:
        matches=[(i,s) for i,s in enumerate(steps) if s.get('name')==expected['name'] or ('run' in expected and s.get('run')==expected['run'])]
        if len(matches)!=1 or matches[0][1]!=expected: raise ValueError('Missing/altered Chromium prerequisite: '+expected['name'])
        positions.append(matches[0][0])
    install=[i for i,s in enumerate(steps) if s.get('run')=='pnpm install --frozen-lockfile']
    build=[i for i,s in enumerate(steps) if s.get('run')=='pnpm build']
    if len(install)!=1 or len(build)!=1 or not install[0]<positions[0]<positions[1]<positions[2]<positions[3]<build[0]:
        raise ValueError('Chromium prerequisite order')
    if package['devDependencies'].get('playwright')!='1.64.0' or 'playwright' in package.get('dependencies',{}):
        raise ValueError('Unpinned/non-test Playwright')
    if package['scripts'].get('test:durable-drafts')!='node tests/editor/durable-draft-browser.mjs' or package['scripts'].get('validate:durable-drafts')!='node tests/editor/durable-draft-browser.mjs --validate .submission/durable-browser-results.json':
        raise ValueError('Chromium script bypass')
    # No earlier workflow step may write runner-control variables into later steps.
    for step in steps:
        if any(key in json.dumps(step) for key in ('VEL_CASE_PREFIX','VEL_REVIEW_NEGATIVES','VEL_REVIEW_BEFORE','VEL_PLAYWRIGHT_PATH','VEL_CHROMIUM_PATH')):
            raise ValueError('Selective/historical/external browser override')

class ChromiumCoverageTests(unittest.TestCase):
    def baseline(self):
        return yaml.load((ROOT/'.github/workflows/ci.yml').read_text(encoding='utf-8'),Loader=yaml.BaseLoader)

    def package(self): return json.loads((ROOT/'package.json').read_text(encoding='utf-8'))

    def test_real_chromium_workflow_contract(self):
        check_chromium_contract(self.baseline(),self.package())

    def test_browser_install_execution_validation_and_upload_cannot_be_bypassed(self):
        for expected in CHROMIUM_STEPS:
            for mode in ('remove','echo','duplicate','if','continue-on-error','mask','shell','working-directory','env'):
                with self.subTest(step=expected['name'],mode=mode):
                    w=self.baseline();steps=w['jobs']['application']['steps'];step=next(s for s in steps if s.get('name')==expected['name'])
                    if mode=='remove': steps.remove(step)
                    elif mode=='echo': step['run']='echo PASS'
                    elif mode=='duplicate': steps.append(copy.deepcopy(step))
                    elif mode=='mask': step['run']=step.get('run','echo upload')+' || true'
                    else: step[mode]={'if':'false','continue-on-error':'true','shell':'sh','working-directory':'elsewhere','env':{'VEL_CASE_PREFIX':'one'}}[mode]
                    with self.assertRaises(ValueError): check_chromium_contract(w,self.package())

    def test_browser_order_environment_runtime_and_artifact_bypasses(self):
        for mode in ('before-install','after-build','historical','filter','negative','external','job-env','global-env','artifact-profile','artifact-missing-ok','artifact-unbounded','script-mask','script-filter','floating','production'):
            with self.subTest(mode=mode):
                w=self.baseline();p=self.package();job=w['jobs']['application'];steps=job['steps'];step=next(s for s in steps if s.get('run')=='pnpm test:durable-drafts');artifact=next(s for s in steps if s.get('name')==CHROMIUM_STEPS[3]['name'])
                if mode=='before-install': steps.remove(step);steps.insert(0,step)
                elif mode=='after-build': steps.remove(step);steps.append(step)
                elif mode in ('historical','filter','negative','external'):
                    key={'historical':'VEL_REVIEW_BEFORE','filter':'VEL_CASE_PREFIX','negative':'VEL_REVIEW_NEGATIVES','external':'VEL_PLAYWRIGHT_PATH'}[mode]
                    steps.insert(0,{'run':f'echo "{key}=1" >> "$GITHUB_ENV"'})
                elif mode=='job-env': job['env']={'NODE_OPTIONS':'--require bypass.js'}
                elif mode=='global-env': w['env']={'NODE_OPTIONS':'--require bypass.js'}
                elif mode=='artifact-profile': artifact['with']['path']='.submission/**'
                elif mode=='artifact-missing-ok': artifact['with']['if-no-files-found']='ignore'
                elif mode=='artifact-unbounded': artifact['with']['retention-days']='90'
                elif mode=='script-mask': p['scripts']['test:durable-drafts']+=' || true'
                elif mode=='script-filter': p['scripts']['test:durable-drafts']='VEL_CASE_PREFIX=one node tests/editor/durable-draft-browser.mjs'
                elif mode=='floating': p['devDependencies']['playwright']='^1.64.0'
                elif mode=='production': p['dependencies']={'playwright':'1.64.0'}
                with self.assertRaises(ValueError): check_chromium_contract(w,p)

    def valid_evidence(self):
        old=json.loads((ROOT/'docs/reports/evidence/VEL-TASK-0075/native-final-browser-results.json').read_text(encoding='utf-8'))
        return dict(schema_version=1,result='PASS',source_commit=subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip(),
                    playwright_version='1.64.0',browser_version='Chromium/156.0.8078.4',chromium_build={'revision':'1248','version':'156.0.8078.4'},
                    chromium_executable_sha256='a'*64,bundle_sha256='b'*64,required_cases=41,executed_cases=41,cases=old['cases'],failures=[],
                    execution=dict(real_chromium=True,persistent_profile=True,historical_override=None,case_filter=None,review_negatives=None,external_runtime=None,external_executable=None),
                    cleanup=dict(context_closed=True,profile_removed=True,http_closed=True,open_sockets=0))

    def validate(self,e,missing=False,env=None):
        with tempfile.TemporaryDirectory() as directory:
            file=Path(directory)/'result.json'
            if not missing: file.write_text(json.dumps(e),encoding='utf-8')
            return subprocess.run(['node',str(ROOT/'tests/editor/durable-draft-browser.mjs'),'--validate',str(file)],cwd=ROOT,capture_output=True,text=True,env=env).returncode

    def test_real_runner_evidence_validator_accepts_complete_synthetic_schema(self):
        # Schema fixture only; this does not claim browser execution.
        self.assertEqual(self.validate(self.valid_evidence()),0)

    def test_real_runner_rejects_incomplete_or_dishonest_evidence(self):
        for mode in ('missing-file','missing-case','duplicate','failed-case','source','no-browser','nonpersistent','filtered','historical','review-negatives','external-runtime','external-executable','quota-cleanup','sockets','listener','context','missing-build','wrong-version','bad-bundle','fail-result','unclassified-failure','count'):
            with self.subTest(mode=mode):
                e=self.valid_evidence()
                if mode=='missing-case': e['cases'].pop();e['executed_cases']=40
                elif mode=='duplicate': e['cases'][-1]=copy.deepcopy(e['cases'][0])
                elif mode=='failed-case': e['cases'][0]['status']='FAIL'
                elif mode=='source': e['source_commit']='0'*40
                elif mode=='no-browser': e['execution']['real_chromium']=False
                elif mode=='nonpersistent': e['execution']['persistent_profile']=False
                elif mode in ('filtered','historical','review-negatives','external-runtime','external-executable'):
                    e['execution'][{'filtered':'case_filter','historical':'historical_override','review-negatives':'review_negatives','external-runtime':'external_runtime','external-executable':'external_executable'}[mode]]='enabled'
                elif mode=='quota-cleanup': e['cleanup']['profile_removed']=False
                elif mode=='sockets': e['cleanup']['open_sockets']=1
                elif mode=='listener': e['cleanup']['http_closed']=False
                elif mode=='context': e['cleanup']['context_closed']=False
                elif mode=='missing-build': e['chromium_build']={}
                elif mode=='wrong-version': e['playwright_version']='1.0.0'
                elif mode=='bad-bundle': e['bundle_sha256']='unknown'
                elif mode=='fail-result': e['result']='FAIL'
                elif mode=='unclassified-failure': e['failures']=[{'kind':'cleanup'}]
                elif mode=='count': e['executed_cases']=40
                self.assertNotEqual(self.validate(e,missing=mode=='missing-file'),0)

    def test_required_runner_rejects_all_historical_or_selective_modes_before_launch(self):
        for key in ('VEL_REVIEW_BEFORE','VEL_CASE_PREFIX','VEL_REVIEW_NEGATIVES','VEL_PLAYWRIGHT_PATH','VEL_CHROMIUM_PATH'):
            with self.subTest(key=key):
                env={**os.environ,key:'1'}
                result=subprocess.run(['node',str(ROOT/'tests/editor/durable-draft-browser.mjs')],cwd=ROOT,capture_output=True,text=True,env=env)
                self.assertNotEqual(result.returncode,0)
                self.assertIn('Disallowed acceptance override',result.stderr)

    def test_chromium_failure_blocks_ready_and_full_and_draft_remains_advisory(self):
        for mode in ('ready','full','draft'):
            plan={**policy.classify(['tests/editor/durable-draft-browser.mjs']), 'mode':mode}
            if mode=='draft': plan={key:('draft' if key=='mode' else 'false') for key in plan}
            needs={'classify':{'result':'success','outputs':plan},'governance':{'result':'success','outputs':{'compliance':'pass'}},**{job:{'result':'success' if plan[job]=='true' else 'skipped'} for job in ('application','recovery','privileges')}}
            if mode=='draft': self.assertEqual(policy.check_gate(needs,expected_plan=plan),'draft-advisory')
            else:
                self.assertEqual(policy.check_gate(needs,expected_plan=plan),'merge-eligible')
                for result in ('failure','skipped','cancelled',None):
                    with self.subTest(mode=mode,result=result):
                        failed=copy.deepcopy(needs);failed['application']['result']=result
                        with self.assertRaises(ValueError): policy.check_gate(failed,expected_plan=plan)


# Task0078: one compatible recovery major, preserving every original CAS/restore case.
RECOVERY_INSTALL = {'name': 'Install PostgreSQL16 recovery client binaries', 'run': 'sudo apt-get update -qq\nsudo apt-get install -y postgresql-client-16\necho "/usr/lib/postgresql/16/bin" >> "$GITHUB_PATH"\n'}
RECOVERY_GUARD = 'import json, os, re, shutil, subprocess\n\nexpected = "/usr/lib/postgresql/16/bin"\ntools = {}\ntry:\n    for name in ("psql", "pg_dump", "pg_restore"):\n        selected = shutil.which(name)\n        if selected != expected + "/" + name:\n            raise SystemExit("Recovery client path mismatch: " + name)\n        version = subprocess.check_output([selected, "--version"], text=True, stderr=subprocess.PIPE).strip()\n        if not re.fullmatch(re.escape(name) + r" \\(PostgreSQL\\) 16\\.[0-9]+(?: .*)?", version):\n            raise SystemExit("Recovery client major mismatch: " + name)\n        tools[name] = {"path": selected, "version": version}\n    server = subprocess.check_output(\n        [expected + "/psql", os.environ["PAIR06_DATABASE_URL"], "-Atqc", "SHOW server_version_num"],\n        text=True, stderr=subprocess.PIPE).strip()\n    if not re.fullmatch(r"16[0-9]{4}", server):\n        raise SystemExit("Recovery server major mismatch")\nexcept (OSError, KeyError, subprocess.CalledProcessError):\n    raise SystemExit("Recovery toolchain verification unavailable") from None\nprint(json.dumps({"client_major": 16, "server_major": 16, "server_version_num": int(server), "tools": tools}, sort_keys=True))\n'
RECOVERY_VERIFY = {'name': 'Verify PostgreSQL16 recovery client and server', 'run': 'python - <<\'PY\'\nimport json, os, re, shutil, subprocess\n\nexpected = "/usr/lib/postgresql/16/bin"\ntools = {}\ntry:\n    for name in ("psql", "pg_dump", "pg_restore"):\n        selected = shutil.which(name)\n        if selected != expected + "/" + name:\n            raise SystemExit("Recovery client path mismatch: " + name)\n        version = subprocess.check_output([selected, "--version"], text=True, stderr=subprocess.PIPE).strip()\n        if not re.fullmatch(re.escape(name) + r" \\(PostgreSQL\\) 16\\.[0-9]+(?: .*)?", version):\n            raise SystemExit("Recovery client major mismatch: " + name)\n        tools[name] = {"path": selected, "version": version}\n    server = subprocess.check_output(\n        [expected + "/psql", os.environ["PAIR06_DATABASE_URL"], "-Atqc", "SHOW server_version_num"],\n        text=True, stderr=subprocess.PIPE).strip()\n    if not re.fullmatch(r"16[0-9]{4}", server):\n        raise SystemExit("Recovery server major mismatch")\nexcept (OSError, KeyError, subprocess.CalledProcessError):\n    raise SystemExit("Recovery toolchain verification unavailable") from None\nprint(json.dumps({"client_major": 16, "server_major": 16, "server_version_num": int(server), "tools": tools}, sort_keys=True))\nPY\n'}
RECOVERY_TEST = {'name':'Rerun disposable Pair 06 atomicity and independent restore',
                 'run':"python -m unittest discover -s docs/research/experiments -p 'test_pair06_postgres_operations.py' -v"}

def check_recovery_toolchain(workflow):
    job=workflow['jobs']['recovery'];steps=job['steps']
    if job.get('runs-on')!='ubuntu-24.04' or job.get('services',{}).get('postgres',{}).get('image')!='postgres:16':
        raise ValueError('Recovery runner/server major changed')
    if job.get('needs')!=['classify'] or job.get('if')!="${{ needs.classify.outputs.recovery == 'true' }}":
        raise ValueError('Recovery execution guard changed')
    if any(k in job for k in ('continue-on-error','defaults','strategy','permissions')):
        raise ValueError('Recovery job bypass')
    if job.get('env')!={'PGPASSWORD':'pair06synthetic','PAIR06_DATABASE_URL':'postgresql://postgres:pair06synthetic@127.0.0.1:5432/pair06db'}:
        raise ValueError('Recovery environment override')
    positions=[]
    for expected in (RECOVERY_INSTALL,RECOVERY_VERIFY,RECOVERY_TEST):
        matches=[(i,s) for i,s in enumerate(steps) if s.get('name')==expected['name'] or s.get('run')==expected['run']]
        if len(matches)!=1 or matches[0][1]!=expected: raise ValueError('Required unconditional recovery step altered: '+expected['name'])
        positions.append(matches[0][0])
    py=[(i,s) for i,s in enumerate(steps) if str(s.get('uses','')).startswith('actions/setup-python@')]
    if len(py)!=1 or py[0][1]!={'uses':'actions/setup-python@v5','with':{'python-version':'3.12'}} or not py[0][0]<positions[0]<positions[1]<positions[2]:
        raise ValueError('Recovery runtime/prerequisite order changed')

class RecoveryToolchainTests(unittest.TestCase):
    def workflow(self):return yaml.load((ROOT/'.github/workflows/ci.yml').read_text(encoding='utf-8'),Loader=yaml.BaseLoader)

    def test_actual_recovery_toolchain_contract(self):
        check_recovery_toolchain(self.workflow())

    def test_recovery_steps_cannot_be_removed_replaced_skipped_or_masked(self):
        for expected in (RECOVERY_INSTALL,RECOVERY_VERIFY,RECOVERY_TEST):
            for mode in ('remove','replace','duplicate','if','continue-on-error','shell','working-directory','env','mask','before-python','reorder'):
                with self.subTest(step=expected['name'],mode=mode):
                    w=self.workflow();steps=w['jobs']['recovery']['steps'];step=next(s for s in steps if s.get('name')==expected['name'])
                    if mode=='remove': steps.remove(step)
                    elif mode=='replace':step['run']='echo PASS'
                    elif mode=='duplicate':steps.append(dict(step,name='Other toolchain step'))
                    elif mode=='mask':step['run']+=' || true'
                    elif mode=='before-python':steps.remove(step);steps.insert(0,step)
                    elif mode=='reorder':steps.remove(step);steps.insert(next(i for i,s in enumerate(steps) if s.get('uses')=='actions/setup-python@v5')+1,step) if expected!=RECOVERY_INSTALL else steps.append(step)
                    else:step[mode]={'if':'false','continue-on-error':'true','shell':'sh','working-directory':'elsewhere','env':{'PATH':'/usr/bin'}}[mode]
                    with self.assertRaises(ValueError):check_recovery_toolchain(w)

    def test_recovery_major_path_and_guard_bypasses_fail(self):
        for mode in ('runner-latest','server17','unversioned-package','client18','path-missing','path18','verify-echo','major-check-missing','server-check-missing','job-if','job-env','job-continue','python-conditional'):
            with self.subTest(mode=mode):
                w=self.workflow();job=w['jobs']['recovery'];steps=job['steps'];install=next(s for s in steps if s.get('name')==RECOVERY_INSTALL['name']);verify=next(s for s in steps if s.get('name')==RECOVERY_VERIFY['name'])
                if mode=='runner-latest':job['runs-on']='ubuntu-latest'
                elif mode=='server17':job['services']['postgres']['image']='postgres:17'
                elif mode=='unversioned-package':install['run']=install['run'].replace('postgresql-client-16','postgresql-client')
                elif mode=='client18':install['run']=install['run'].replace('postgresql-client-16','postgresql-client-18')
                elif mode=='path-missing':install['run']='\n'.join(install['run'].splitlines()[:2])+'\n'
                elif mode=='path18':install['run']=install['run'].replace('/16/bin','/18/bin')
                elif mode=='verify-echo':verify['run']='echo major16'
                elif mode=='major-check-missing':verify['run']=verify['run'].replace('if not re.fullmatch','if False and not re.fullmatch')
                elif mode=='server-check-missing':verify['run']=verify['run'].replace('SHOW server_version_num','SELECT 160000')
                elif mode=='job-if':job['if']='false'
                elif mode=='job-env':job['env']['PATH']='/usr/bin'
                elif mode=='job-continue':job['continue-on-error']='true'
                else:next(s for s in steps if s.get('uses')=='actions/setup-python@v5')['if']='false'
                with self.assertRaises(ValueError):check_recovery_toolchain(w)

    def run_guard(self,mode):
        import io,contextlib,shutil
        calls=[]
        def which(name):return None if mode=='missing' else ('/usr/bin/'+name if mode=='wrapper' else '/usr/lib/postgresql/16/bin/'+name)
        def output(args,**kwargs):
            calls.append(args)
            if mode=='unavailable':raise subprocess.CalledProcessError(1,args)
            if '--version' in args:
                name=Path(args[0]).name
                return name+' (PostgreSQL) '+('18.0' if mode=='client18' and name=='pg_dump' else '16.15')+' (synthetic fixture)\n'
            return {'server18':'180000','server17':'170000','invalid-server':'garbage'}.get(mode,'160015')+'\n'
        capture=io.StringIO()
        with patch.object(shutil,'which',side_effect=which),patch.object(subprocess,'check_output',side_effect=output),patch.dict(os.environ,{'PAIR06_DATABASE_URL':'synthetic-unused'}),contextlib.redirect_stdout(capture):
            exec(compile(RECOVERY_GUARD,'reviewed-inline-recovery-guard','exec'),{})
        return json.loads(capture.getvalue()),calls

    def test_inline_guard_accepts_only_matching_selected_clients_and_server(self):
        result,calls=self.run_guard('valid')
        self.assertEqual(result['client_major'],16);self.assertEqual(result['server_major'],16)
        self.assertEqual(len(result['tools']),3);self.assertEqual(len(calls),4)
        self.assertEqual(calls[-1],['/usr/lib/postgresql/16/bin/psql','synthetic-unused','-Atqc','SHOW server_version_num'])

    def test_inline_guard_rejects_wrong_missing_unavailable_clients_and_servers(self):
        for mode in ('missing','wrapper','unavailable','client18','server18','server17','invalid-server'):
            with self.subTest(mode=mode),self.assertRaises(SystemExit):self.run_guard(mode)

if __name__=='__main__': unittest.main()

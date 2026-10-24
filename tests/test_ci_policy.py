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

if __name__=='__main__': unittest.main()


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

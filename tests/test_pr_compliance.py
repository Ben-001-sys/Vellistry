"""Synthetic Git evidence/attack cases. No live identity or hosted acceptance."""
from datetime import date
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

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'scripts'))
import pr_compliance as policy
import agent_workflow as aw


class Fixture:
    def __init__(self):
        self.tmp = tempfile.TemporaryDirectory(); self.root = Path(self.tmp.name)
        self.git('init'); self.git('config','user.email','synthetic@example.invalid'); self.git('config','user.name','Synthetic fixture')
        self.put('README.md','synthetic governing source\n')
        self.put('apps/api/book.py','before\n')
        self.base = self.commit('base')
        self.tid = 'VEL-TASK-0099'
        self.task_path = 'docs/agent-workflow/tasks/'+self.tid+'.yaml'
        contract=dict(change_base=self.base,phase='phase-a',executor='Codex',allow_paths=['apps/api/book.py','docs/*'],
                      authorization=dict(url='https://github.com/Ben-001-sys/Vellistry/issues/73#issuecomment-6226100456',
                                         provenance='direct-owner-dispatch-with-coordinator-relay',status='authorized',expires_on='2099-12-31'),
                      forbidden_actions=sorted(policy.FORBIDDEN))
        self.task=dict(id=self.tid,title='Synthetic',type='implementation-task',status='verification',created_at='2026-10-16',updated_at='2026-10-16',owner='project_owner',context_pack_id='VEL-CP-0099',objective='Synthetic scope',in_scope=['test scope'],out_of_scope=['hosted'],inputs=[dict(path='README.md',role='synthetic-source')],source_gaps=[],deliverables=['evidence'],acceptance_criteria=['tests'],allowed_actions=['fixture'],approval_required_for=['merge'],compliance=contract)
        self.put(self.task_path,yaml.safe_dump(self.task)); self.task_commit=self.commit('task')
        self.pack_path='docs/agent-workflow/context-packs/VEL-CP-0099.md'
        old=aw.ROOT
        try:
            aw.ROOT=self.root
            self.put(self.pack_path,aw.render_pack(self.task,self.task_commit))
        finally:aw.ROOT=old
        self.pack_commit=self.commit('pack')
        self.put('apps/api/book.py','after\n');self.source=self.commit('implementation')
        self.eb_path='docs/agent-workflow/execution-bundles/VEL-EB-0099.md'
        self.log='docs/reports/results.txt';self.put(self.log,'fixture only: test command exit0\n')
        self.eb=dict(id='VEL-EB-0099',title='Synthetic',type='execution-bundle',status='proposed-for-review',created_at='2026-10-16',version='0.1.0',task_id=self.tid,context_pack_id='VEL-CP-0099',base_commit=self.task_commit,agent=dict(name='Codex'),sources=['README.md'],evidence=[self.log],review=dict(status='pending',approved_by=None,evidence=None),implementation_source_commit=self.source,
                     execution=dict(status='completed',executor='Codex',model='Synthetic model declaration',tests=[dict(command='synthetic-only',exit_code=0,status='PASS',evidence=self.log)]))
        self.manifest=dict(version=1,task_id=self.tid,phase='phase-a',pack_commit=self.pack_commit,source_commit=self.source,bundle_id='VEL-EB-0099',executor='Codex',owner_disposition='pending',commits=[],current_head=dict(executor='Codex',origin='original'))
        self.finish()
    def git(self,*args):return subprocess.check_output(['git',*args],cwd=self.root,stderr=subprocess.DEVNULL).decode().strip()
    def put(self,path,text):
        p=self.root/path;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(text,encoding='utf-8')
    def commit(self,message):
        self.git('add','-A');self.git('commit','-m',message);return self.git('rev-parse','HEAD')
    def finish(self):
        self.put(self.eb_path,'---\n'+yaml.safe_dump(self.eb)+'---\n'+''.join('\n## '+h+'\nfixture\n' for h in ('Work performed','Facts and evidence','Interpretations','Proposals','Tests','Artifacts','Risks','Reviewer disposition')))
        self.manifest['commits']=[dict(commit=c,executor='Codex',origin='original') for c in self.git('rev-list','--reverse',self.base+'..HEAD').splitlines()]
        self.put(policy.MANIFEST,yaml.safe_dump(self.manifest));self.head=self.commit('evidence')
    def amend(self,path,text):self.put(path,text);self.head=self.commit('synthetic mutation')
    def evaluate(self):return policy.evaluate(self.root,self.base,self.head,today=date(2026,10,16),check_workflow=False)
    def close(self):self.tmp.cleanup()


class ComplianceGitTests(unittest.TestCase):
    def setUp(self):self.f=Fixture();self.addCleanup(self.f.close)
    def rejects(self,regex=None):
        with self.assertRaisesRegex((ValueError,subprocess.CalledProcessError),regex or '.'):
            self.f.evaluate()
    def test_valid_bounded_evidence_passes_without_claiming_acceptance(self):
        result=self.f.evaluate();self.assertEqual(result['status'],'pass');self.assertEqual(result['owner_disposition'],'pending');self.assertIn('owner verification',result['trust'])
    def test_missing_task(self):
        (self.f.root/self.f.task_path).unlink();self.f.head=self.f.commit('delete task');self.rejects('Missing evidence')
    def test_missing_manifest(self):
        (self.f.root/policy.MANIFEST).unlink();self.f.head=self.f.commit('delete manifest');self.rejects('Missing evidence')
    def test_missing_pack(self):
        (self.f.root/self.f.pack_path).unlink();self.f.head=self.f.commit('delete pack');self.rejects('Missing evidence')
    def test_mutated_pack(self):
        self.f.amend(self.f.pack_path,(self.f.root/self.f.pack_path).read_text()+'hostile append\n');self.rejects('Mutated immutable')
    def test_bad_source_blob_pin(self):
        p=self.f.pack_path;s=(self.f.root/p).read_text();s=s.replace('git_blob_sha:','git_blob_sha: BAD #');self.f.amend(p,s);self.rejects()
    def test_wrong_base(self):
        self.f.task['compliance']['change_base']='a'*40;self.f.amend(self.f.task_path,yaml.safe_dump(self.f.task));self.rejects('Wrong task/base')
    def test_phase_a_cannot_cover_phase_b(self):
        self.f.manifest['phase']='phase-b';self.f.amend(policy.MANIFEST,yaml.safe_dump(self.f.manifest));self.rejects('Phase/scope')
    def test_material_allowlist_extension_cannot_be_retroactive(self):
        self.f.task['compliance']['allow_paths'].append('supabase/*');self.f.amend(self.f.task_path,yaml.safe_dump(self.f.task));self.rejects('Material task mutation')
    def test_sql_ci_app_disallowed(self):
        for path in ('supabase/migrations/x.sql','.github/workflows/pwn.yml','apps/api/other.ts'):
            with self.subTest(path=path):
                f=Fixture()
                try:
                    f.amend(path,'synthetic');
                    with self.assertRaisesRegex(ValueError,'Disallowed'):f.evaluate()
                finally:f.close()
    def test_allowed_sql_proposal_still_needs_base_owner_approval(self):
        self.f.put('docs/proposal.sql','-- synthetic proposal only')
        self.f.source=self.f.commit('within scope SQL proposal');self.f.eb['implementation_source_commit']=self.f.source
        self.f.manifest['source_commit']=self.f.source;self.f.finish();self.rejects('base-anchored')
    def test_expired_and_superseded_authorization(self):
        for key,value in (('status','superseded'),('expires_on','2020-01-01')):
            f=Fixture()
            try:
                f.task['compliance']['authorization'][key]=value;f.amend(f.task_path,yaml.safe_dump(f.task))
                with self.subTest(key=key),self.assertRaises(ValueError):f.evaluate()
            finally:f.close()
    def test_task_reuse_from_base_rejected(self):
        with self.assertRaisesRegex(ValueError,'Task reused'):
            policy.evaluate(self.f.root,self.f.task_commit,self.f.head,check_workflow=False)
    def test_missing_bundle(self):
        (self.f.root/self.f.eb_path).unlink();self.f.head=self.f.commit('delete bundle');self.rejects('Missing evidence')
    def test_missing_head_evidence(self):
        del self.f.eb['implementation_source_commit'];self.f.finish();self.rejects('code-head')
    def test_changed_code_after_source_cannot_reuse_old_tests(self):
        self.f.amend('apps/api/book.py','unverified new code\n');self.rejects('Head changed after')
    def test_not_run_blocked_not_started_cannot_pass(self):
        for state in ('NOT_STARTED','NOT_RUN','BLOCKED'):
            f=Fixture()
            try:
                f.eb['execution']['status']=state;f.finish()
                with self.subTest(state=state),self.assertRaisesRegex(ValueError,'executor'):f.evaluate()
            finally:f.close()
    def test_missing_or_failed_actual_tests(self):
        self.f.eb['execution']['tests'][0]['status']='NOT_RUN';self.f.finish();self.rejects('NOT_RUN')
    def test_chatgpt_implementation_cannot_be_labeled_codex(self):
        self.f.eb['execution']['executor']='ChatGPT';self.f.finish();self.rejects('executor')
    def test_missing_model_claim(self):
        self.f.eb['execution']['model']='';self.f.finish();self.rejects('model')
    def test_owner_acceptance_cannot_be_forged_from_review(self):
        self.f.eb['status']='accepted';self.f.eb['review']=dict(status='approved',approved_by='project_owner',evidence='https://github.com/Ben-001-sys/Vellistry/pull/99');self.f.finish();self.rejects('Forged completion')
    def test_reviewer_does_not_confer_owner_acceptance(self):
        self.f.eb['review']=dict(status='approved',approved_by='ChatGPT',evidence='https://github.com/Ben-001-sys/Vellistry/pull/99');self.f.finish();self.rejects('reviewer')
    def test_owner_disposition_spoof(self):
        self.f.manifest['owner_disposition']='accepted';self.f.amend(policy.MANIFEST,yaml.safe_dump(self.f.manifest));self.rejects('owner acceptance')
    def test_reassignment_requires_reviewed_base_exception(self):
        self.f.manifest['executor']='Cursor';self.f.eb['execution']['executor']='Cursor';self.f.eb['agent']['name']='Cursor';self.f.finish();self.rejects('executor')
    def test_missing_or_mixed_commit_origins(self):
        self.f.manifest['commits'][0]['executor']='ChatGPT';self.f.amend(policy.MANIFEST,yaml.safe_dump(self.f.manifest));self.rejects('Undeclared|Role substitution')
    def test_inherited_commit_preserves_original_chatgpt_provenance(self):
        self.f.manifest['commits'][0].update(origin='adopted',original_executor='ChatGPT',original_commit=self.f.task_commit,source_url='https://github.com/Ben-001-sys/Vellistry/pull/65')
        self.f.put(policy.MANIFEST,yaml.safe_dump(self.f.manifest));self.f.git('add','-A');self.f.git('commit','--amend','--no-edit');self.f.head=self.f.git('rev-parse','HEAD')
        self.assertEqual(self.f.evaluate()['status'],'pass')
    def test_undeclared_cherry_pick(self):
        self.f.git('commit','--allow-empty','-m','adopted\n\n(cherry picked from commit '+('b'*40)+')');self.f.finish();self.rejects('cherry-pick')
    def test_no_implementation_before_pack(self):
        # Alter historical task/pack ancestry is not accepted as an arbitrary pin.
        self.f.manifest['pack_commit']=self.f.source;self.f.amend(policy.MANIFEST,yaml.safe_dump(self.f.manifest));self.rejects('ancestry')
    def test_docs_only_exemption_needs_no_manifest(self):
        self.f.git('checkout','-b','docs-only',self.f.base);self.f.put('docs/reports/triage.md','indexed source\n');head=self.f.commit('triage')
        result=policy.evaluate(self.f.root,self.f.base,head,check_workflow=False);self.assertEqual(result['disposition'],'docs-exempt')
    def test_effective_instruction_and_unknown_docs_never_exempt(self):
        for path in ('AGENTS.md','docs/decisions/ADR-9999.md','docs/agent-workflow/PR-COMPLIANCE.md','docs/research/test.py','README.md'):
            self.assertFalse(policy.inert(path),path)
    def test_rename_delete_and_hidden_executable_not_exempt(self):
        self.f.git('mv','apps/api/book.py','docs/reports/book.md');self.f.head=self.f.commit('rename');self.rejects('Head changed|Disallowed')
    def test_malformed_metadata_and_missing_fields(self):
        self.f.amend(policy.MANIFEST,'not: [valid');
        with self.assertRaises(yaml.YAMLError):self.f.evaluate()
    def test_nonancestor_head(self):
        with self.assertRaises(ValueError):policy.evaluate(self.f.root,'a'*40,self.f.head,check_workflow=False)


class EventAndTrustTests(unittest.TestCase):
    def test_main_merge_keeps_owner_merge_distinct_from_agent_head(self):
        f=Fixture();self.addCleanup(f.close)
        implementation=f.head;f.git('checkout','-b','main-integration',f.base)
        f.git('merge','--no-ff',implementation,'-m','synthetic owner integration')
        head=f.git('rev-parse','HEAD')
        with patch.dict(os.environ,{'GITHUB_SHA':head}):
            result=policy.evaluate_event(f.root,'push',dict(ref='refs/heads/main',before=f.base),head,check_workflow=False)
        self.assertEqual(result['head'],head);self.assertEqual(result['implementation_head'],implementation)
    def test_main_merge_cannot_introduce_unverified_tree(self):
        f=Fixture();self.addCleanup(f.close)
        f.git('checkout','-b','main-integration',f.base);f.git('merge','--no-ff',f.head,'-m','synthetic integration')
        f.put('apps/api/book.py','unverified resolution');f.git('add','-A');f.git('commit','--amend','--no-edit');head=f.git('rev-parse','HEAD')
        with patch.dict(os.environ,{'GITHUB_SHA':head}),self.assertRaisesRegex(ValueError,'changed implementation tree'):
            policy.evaluate_event(f.root,'push',dict(ref='refs/heads/main',before=f.base),head,check_workflow=False)
    def test_reviewed_owner_exception_has_exact_role_and_scope(self):
        f=Fixture();self.addCleanup(f.close)
        url='https://github.com/Ben-001-sys/Vellistry/issues/73'
        path='docs/agent-workflow/authorizations/'+f.tid+'.yaml'
        f.put(path,yaml.safe_dump(dict(task_id=f.tid,status='owner-verified',approved_by='project_owner',kind='executor-exception',executor='Cursor',evidence=url)))
        reviewed=f.commit('synthetic reviewed owner record')
        policy.owner_record(f.root,reviewed,f.tid,'executor-exception',url,executor='Cursor')
        with self.assertRaisesRegex(ValueError,'reassignment'):policy.owner_record(f.root,reviewed,f.tid,'executor-exception',url,executor='ChatGPT')
        with self.assertRaisesRegex(ValueError,'checkpoint'):policy.owner_record(f.root,reviewed,f.tid,'migration-path-approval',url,paths=['supabase/migrations/new.sql'])
    def test_draft_ready_and_full_event_modes(self):
        f=Fixture();self.addCleanup(f.close);f.git('update-ref','refs/remotes/origin/main',f.base)
        for draft,action in ((True,'synchronize'),(False,'ready_for_review'),(False,'edited')):
            event=dict(action=action,pull_request=dict(draft=draft,head=dict(sha=f.head),base=dict(sha=f.base)))
            with self.subTest(draft=draft):self.assertEqual(policy.event_base(f.root,'pull_request',event,f.head),(f.base,f.base))
        with patch.dict(os.environ,{'GITHUB_SHA':f.head}):
            self.assertEqual(policy.event_base(f.root,'workflow_dispatch',{},f.head),(f.base,f.base))
            self.assertEqual(policy.event_base(f.root,'push',dict(ref='refs/heads/main',before=f.base),f.head),(f.base,f.base))
    def test_missing_malformed_wrong_head_and_privileged_events_fail(self):
        f=Fixture();self.addCleanup(f.close)
        for name,event in (('pull_request',{}),('pull_request_target',{}),('push',dict(ref='refs/heads/feature',before=f.base))):
            with self.subTest(name=name),self.assertRaises(ValueError):policy.event_base(f.root,name,event,f.head)
    def test_actual_workflow_contract_includes_both_checks(self):
        # Committed-head version is checked in real CI; working YAML here avoids
        # requiring the implementation to have been committed before tests.
        w=yaml.load((ROOT/'.github/workflows/ci.yml').read_text(),Loader=yaml.BaseLoader)
        for j in ('governance','gate'):
            step=next(s for s in w['jobs'][j]['steps'] if s.get('id')=='compliance')
            self.assertEqual(step['run'],'python -I scripts/run_pr_compliance.py');self.assertNotIn('if',step)
    def test_required_compliance_test_cannot_be_removed_from_discovery(self):
        import ci_governance
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory)
            for name in __import__('ci_policy').GOV_TESTS | {'test_ci_policy.py'}:
                p=root/'tests'/name;p.parent.mkdir(parents=True,exist_ok=True);p.write_text('fixture')
            ci_governance.validate_required_sources(root)
            (root/'tests/test_pr_compliance.py').unlink()
            with self.assertRaises(ValueError):ci_governance.validate_required_sources(root)
    def test_deleted_validator_or_empty_test_is_rejected_statically(self):
        f=Fixture();self.addCleanup(f.close)
        for name in policy.REQUIRED:f.put(name,(ROOT/name).read_text(encoding='utf-8'))
        head=f.commit('synthetic controls');policy.workflow_contract(f.root,head)
        f.put('tests/test_pr_compliance.py','# zero tests\n');head=f.commit('disable tests')
        with self.assertRaisesRegex(ValueError,'regression'):policy.workflow_contract(f.root,head)
        (f.root/'scripts/pr_compliance.py').unlink();head=f.commit('delete checker')
        with self.assertRaisesRegex(ValueError,'Missing evidence'):policy.workflow_contract(f.root,head)
    def test_skipping_compliance_or_escalating_workflow_fails(self):
        f=Fixture();self.addCleanup(f.close)
        for name in policy.REQUIRED:f.put(name,(ROOT/name).read_text(encoding='utf-8'))
        w=yaml.load((ROOT/'.github/workflows/ci.yml').read_text(),Loader=yaml.BaseLoader)
        step=next(s for s in w['jobs']['governance']['steps'] if s.get('id')=='compliance');step['if']='false'
        f.put('.github/workflows/ci.yml',yaml.safe_dump(w));head=f.commit('skip check')
        with self.assertRaisesRegex(ValueError,'unconditional'):policy.workflow_contract(f.root,head)
    def test_base_loader_does_not_execute_replaced_candidate_checker(self):
        f=Fixture();self.addCleanup(f.close)
        f.put('scripts/agent_workflow.py','# trusted fixture, no imports needed')
        f.put('scripts/pr_compliance.py','print("TRUSTED_BASE_SENTINEL")\n')
        trusted=f.commit('trusted base fixture')
        f.put('scripts/pr_compliance.py','raise RuntimeError("CANDIDATE_MUST_NOT_EXECUTE")\n')
        head=f.commit('candidate replaces checker')
        event=dict(action='synchronize',pull_request=dict(draft=True,head=dict(sha=head),base=dict(sha=trusted)))
        packet=f.root/'event.json';packet.write_text(json.dumps(event))
        env={**os.environ,'GITHUB_EVENT_NAME':'pull_request','GITHUB_EVENT_PATH':str(packet)}
        result=subprocess.run([sys.executable,'-I',str(ROOT/'scripts/run_pr_compliance.py')],cwd=f.root,env=env,capture_output=True,text=True)
        self.assertEqual(result.returncode,0,result.stderr);self.assertIn('TRUSTED_BASE_SENTINEL',result.stdout)
        self.assertNotIn('CANDIDATE_MUST_NOT_EXECUTE',result.stdout+result.stderr)
    def test_unknown_bootstrap_baseline_fails_closed(self):
        f=Fixture();self.addCleanup(f.close)
        event=dict(action='synchronize',pull_request=dict(draft=True,head=dict(sha=f.head),base=dict(sha=f.base)))
        packet=f.root/'event.json';packet.write_text(json.dumps(event))
        result=subprocess.run([sys.executable,'-I',str(ROOT/'scripts/run_pr_compliance.py')],cwd=f.root,env={**os.environ,'GITHUB_EVENT_NAME':'pull_request','GITHUB_EVENT_PATH':str(packet)},capture_output=True,text=True)
        self.assertEqual(result.returncode,1);self.assertIn('Trusted compliance evaluator missing',result.stderr)
    def test_candidate_owner_exception_cannot_self_authorize(self):
        f=Fixture();self.addCleanup(f.close)
        url='https://github.com/Ben-001-sys/Vellistry/issues/73'
        record=dict(task_id=f.tid,status='owner-verified',approved_by='project_owner',kind='executor-exception',executor='Cursor',evidence=url)
        f.put('docs/agent-workflow/authorizations/'+f.tid+'.yaml',yaml.safe_dump(record));f.commit('forged candidate exception')
        with self.assertRaisesRegex(ValueError,'base-anchored'):
            policy.owner_record(f.root,f.base,f.tid,'executor-exception',url,executor='Cursor')
    def test_report_python_is_not_unverified_artifact(self):
        self.assertFalse(policy.artifact('docs/reports/execute.py','VEL-TASK-0099'))
        self.assertTrue(policy.artifact('docs/reports/results.json','VEL-TASK-0099'))
    def test_loader_uses_base_not_candidate_imports_and_discloses_bootstrap(self):
        source=(ROOT/'scripts/run_pr_compliance.py').read_text()
        self.assertIn("base+':scripts/agent_workflow.py'",source)
        self.assertIn("source = base",source)
        self.assertIn('PROVISIONAL BOOTSTRAP',source)
        self.assertIn('base != BOOTSTRAP_BASE',source)
        self.assertNotIn('import pr_compliance',source)


if __name__=='__main__':unittest.main()

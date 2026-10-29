# Task0070 exact source excerpts

FACT: Excerpts retain the current main source framing; omitted text remains retrievable by exact Git SHA. These are task inputs, not new approvals.

## tests/test_pr_compliance.py
Source 6d9ce61fb560dd24e0646f6388ce38de3d87399d; canonical SHA256 9b049ab10366779921f64b684cbf269ee9f6d3876949760903584ce40a0f86ec.

Lines 1-70:
```text
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
```

Lines 160-265:
```text
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
```

## docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md
Source 6d9ce61fb560dd24e0646f6388ce38de3d87399d; canonical SHA256 fdd3d879dbef08e2e8f37b84859e29cdfa8e98467cf295085245ed417c0b2b16.

Lines 32-69:
```text
  - ADR-0006
supersedes: []
superseded_by: []
implementation_refs:
  - AGENTS.md
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  - docs/plans/VEL-PLAN-05-CURSOR-AGENT-WORKFLOW-2026-10-11.md
  - CURRENT-STATE.md
---

# ADR-0008 — Codex-primary governed agentic implementation

## Context and problem statement

Vellistry uses Git and Markdown as the canonical engineering knowledge/control plane. The accepted project constitution separates evidence, design decisions, implementation and owner approval. The planned workflow had ChatGPT prepare bounded tasks and ContextPacks while **Cursor Agent** performed implementation; its outputs were independently reviewed and reconciled through GitHub PRs and CI.

After PR #64 merged, direct GitHub editing by ChatGPT produced draft PR #65 for hosted Supabase preflight. The owner then reconfirmed that Vellistry follows an **agentic coding** workflow and explicitly said **"make it an adr we are using codex now"**. The agent responsible for normal implementation must therefore be updated without rewriting past Cursor execution history or implying any broader authorization.

This is a **development operating model decision**, not a product stack, deployment, licensing, security-gate or production-readiness decision.

## Decision

**Codex is Vellistry's default primary code implementation agent starting 2026-10-14**, for each newly authorized bounded coding task. Preserve the existing role-based control plane:

| Role | Responsibility | Authority boundary |
|---|---|---|
| **Project owner** | Select/approve scope, consequential changes, security posture, spending, database operations, PR acceptance/merge and release | Sole final decision maker; permitted to self-review under the constitution |
| **ChatGPT — architect/coordinator** | Read current repository evidence and accepted ADRs; define requirements, task IDs, ContextPacks, acceptance/negative tests, path allowlists and exclusions; assess Codex reports, diff and CI; advise owner | Does **not** make owner decisions, treat its assessment as independent human review, or act as the default feature-coding executor |
| **Codex — primary implementer** | On an explicitly scoped task, inspect pinned source, implement code/tests in an isolated Git branch/worktree, run valid checks, produce a factual ExecutionBundle and proposed PR | No self-authorization to change scope/ADRs, merge, deploy, perform cloud SQL/migrations/resets, incur paid costs, use real manuscripts or disclose secrets |
| **GitHub — source of truth and review ledger** | Host code, authoritative docs, versioned ADRs, task/ContextPack/ExecutionBundle artifacts, PRs, CI, decision history and current state | PR creation and green CI do **not** equal owner acceptance or deployment readiness |
| **Independent verifier (optional)** | Challenge the source diff, independently rerun tests and negative scenarios when possible | Advisory; the same agent's self-review is not an independent execution, and no second human is mandated |

**Default work loop:**

1. **Observe:** ChatGPT inspects the merged `main` SHA, current PRs, accepted requirements/ADRs and latest top of `CURRENT-STATE.md`; distinguish verified facts from older historical status.
2. **Authorize a specific slice:** The owner approves the bounded objective and sensitive actions. ChatGPT prepares a unique task/ContextPack with source SHA, intended changes, allowed/forbidden paths, behavioral acceptance checks, security and cost restrictions. A prepared packet does not grant approval on its own.
3. **Dispatch to Codex:** Codex executes in a dedicated branch/worktree against the designated SHA, without reusing old task/pack IDs or overwriting another agent's in-progress branch. Agent may use the existing repository tools/CI and must declare tool/model/runtime in its evidence.
4. **Report evidence:** Codex supplies an ExecutionBundle with base/head SHA, changed paths, actual commands and exit codes, unit/integration/browser results with real environment and fixture descriptions, `PASS|FAIL|BLOCKED|NOT_RUN`, original artifacts and `FACT|INTERPRETATION|PROPOSAL`.
```

## SOURCE-OF-TRUTH.md
Source 6d9ce61fb560dd24e0646f6388ce38de3d87399d; canonical SHA256 530a26f2ccbcdbfa37614a79684ecbbf4788506af5936a0c25ad7d74efe5bacb.

Lines 17-54:
```text
- **Git repository:** canonical engineering documents, code, accepted project decisions, research evidence references, specifications, and change history.
- **CURRENT-STATE.md:** compact, current working status; not a substitute for full evidence.
- **ADRs:** accepted or proposed technical and knowledge-governance decisions, with rationale, alternatives, approval and supersession lineage.
- **Source register:** where original research came from and where an immutable/retrievable copy can be found.
- **Feature inventory:** [docs/features/FEATURE-INVENTORY.md](docs/features/FEATURE-INVENTORY.md) is the reviewable index of discussed feature candidates and source/status links. **It is not an accepted product backlog, release plan, substitute for original source evidence, or approval of proposed features.**
- **Git history and pull requests:** revision provenance; do not substitute automatically for semantic record metadata.
- **ChatGPT and other agents:** analysis and proposal tools, not an independent source of architectural authority.

## Separate runtime authority
Future authors' manuscripts, story canon, application settings, credentials, and stored assets belong in purpose-selected runtime storage, not automatically in the Git engineering knowledge base. The accepted Next.js/NestJS/Supabase baseline is recorded in ADR-0006; the owner subsequently selected Supabase Cloud for development. This is not production hosting or real-manuscript approval; no live database state is inferred from old records.

## Five knowledge layers
1. Authoritative accepted project and implementation knowledge.
2. Current verified implementation/research state.
3. Historical rationale, experiments, rejected/superseded alternatives.
4. Temporary task-local agent context and unapproved hypotheses.
5. Evidence, provenance, authorship, validity, confidence, and traceability.

## Read → Propose → Review → Commit
1. Read the relevant accepted records and source citations.
2. Clearly label new assumptions, findings, recommendations, and uncertainties.
3. Review source fidelity and factual verification independently.
4. Promote material changes only after owner approval; update linked records and current state.
5. When superseding an ADR, preserve the older file and connect both sides of the lineage.

## PR review and sole owner authority
At present the project has a single human contributor. The owner performs self-review and makes the final merge/acceptance decision. A distinct human PR approval is not required. Automated CI and optional AI-agent reviews provide evidence and feedback; agents do not have approval authority. For significant changes, document the owner's review and decision in the PR or associated provenance record. GitHub does not count self-review as a separate approving reviewer; this workflow must not assume otherwise. If branch-protection settings require other human approvals, review the protection policy rather than fabricate reviewers. See HIS-20261008-002.

## Metadata and history
See [docs/governance/RECORD-SCHEMAS.md](docs/governance/RECORD-SCHEMAS.md). All ADR and historical-event records require YAML front matter and meaningful content.

## No silent conflation
The terms *verified evidence*, *accepted requirement*, *approved decision*, *implemented*, and *tested* are different. Never mark one as another without supporting evidence.

## Current task authority and provenance

[AGENTS.md](AGENTS.md) and [ADR-0008](docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md)
express the owner-selected execution roles: ChatGPT coordinates and reviews;
```

## CURRENT-STATE.md
Source 6d9ce61fb560dd24e0646f6388ce38de3d87399d; canonical SHA256 bd8ec774640b303c7c334e847b96f14f6100516a7b13e56254d0d680c45aceec.

Lines 1-42:
```text
---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-29
owner: project_owner
version: 0.2.2
---

# Vellistry — current verified state

## Manual editor foundation — 2026-10-29

FACT: main5e3aeec95a34c0a9564067632655a0549a824c9d unchanged. Task0067/PR128
repair remains Ready/unmerged at1ff3e91, CI40838205911 SUCCESS. Root78f80bb
and owner changes preserved; current isolated local app uses Next16.4.1.

Owner defers interactive MFA acceptance, authorizes bounded local IMP003A only.
Task0068/CP0068 adds unregistered Tiptap3 editor, reusing IMP002 organizer/session:
manual formatting, history, caret, word count and chapter-local search;30offline
and33browser checks PASS. [Report](docs/reports/VEL-IMP003A-MANUAL-EDITOR-0068.md).
Drafts exist only in preview memory; no production route, writes, durable Saved
or hosted acceptance. Editor PR depends on128; review/CI/owner merge pending.

PRINCIPAL/SESSION/gateway and persistence remain gated. R01-R08 NOT_RUN;
N12/historical independent EPERM BLOCKED. Issue108OPEN; remediation delegation
EXPIRED. Owner-reported basic login is not agent-verified hosted acceptance.
Earlier dated paragraphs remain historical records, not renewed authority.

## Owner-only PRINCIPAL probe preparation — 2026-10-26

FACT: PR124 merged17adbf96ae0a9187732ad3a7837ec0d2d9b62d03; tree match and
[post-main40289823029](https://github.com/Ben-001-sys/Vellistry/actions/runs/40289823029) SUCCESS. Task59-62 history preserved.
Owner conditionally authorizes an owner-executed two-existing-synthetic-fixture
probe after prerequisites/exact protocol review. Task0063/CP0063 prepares the
[protocol](docs/reports/VEL-OWNER-PRINCIPAL-PROBE-PROTOCOL-0063.md), not executable Auth code.
All3fixture prerequisites UNKNOWN26October2026; HOSTED_EXECUTION_BLOCKED.
No account creation/enrollment change or agent credentials/hosted operations.
Conditional PRINCIPAL design remains separate from target/implementation trust;
other production gates pending; R01-R08 NOT_RUN; N12/independent EPERM BLOCKED.
Docs review/CI/owner merge pending; Issue108 OPEN; delegation EXPIRED.
```

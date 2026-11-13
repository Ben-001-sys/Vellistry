# Bounded existing policy contracts

Full canonical source: ad5e723:tests/test_ci_policy.py, SHA256 5acae09cec81fd33b6a22ec36187c867844305fcad16f9979e03bbcec0f3abec, 42759bytes. Full file remains available from pinned Git; only ContextPack rendering is bounded. Existing53tests stay unchanged; append new recovery contracts. Excerpt from WorkspaceCoverageTests through Chromium step contract before ChromiumCoverageTests:

```python
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


```

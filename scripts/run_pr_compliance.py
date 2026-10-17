#!/usr/bin/env python3
"""Load a static evaluator from the reviewed event base, not PR imports.

The calling workflow/this loader still need protected owner review. This does
not turn an unprotected pull_request workflow into a trusted security boundary.
"""
import json
import os
from pathlib import Path
import runpy
import subprocess
import sys
import tempfile

BOOTSTRAP_BASE = 'f371448538dafa92faebbef9bcda2a36c6ca1fa9'


def run():
    repo = Path.cwd()
    def git(*args):
        return subprocess.check_output(['git', *args], cwd=repo, stderr=subprocess.DEVNULL)
    head = git('rev-parse', 'HEAD').decode().strip()
    event = json.loads(Path(os.environ['GITHUB_EVENT_PATH']).read_text(encoding='utf-8'))
    name = os.environ['GITHUB_EVENT_NAME']
    if name == 'pull_request':
        base = event.get('pull_request', {}).get('base', {}).get('sha')
    elif name == 'push':
        base = event.get('before')
    elif name == 'workflow_dispatch':
        base = git('rev-parse', 'refs/remotes/origin/main').decode().strip()
    else:
        raise ValueError('Unsupported event; no privileged PR target execution')
    import re
    if not isinstance(base,str) or not re.fullmatch('[a-f0-9]{40}',base) or base == '0'*40:
        raise ValueError('Missing full trusted base')
    verifier = 'scripts/pr_compliance.py'
    present = subprocess.run(['git','cat-file','-e',base+':'+verifier],cwd=repo,capture_output=True).returncode == 0
    source = base
    if not present:
        # One adoption baseline only. Never silently use arbitrary candidate
        # code after the validator has landed on main.
        if base != BOOTSTRAP_BASE:
            raise ValueError('Trusted compliance evaluator missing; owner decision required')
        import yaml
        manifest = yaml.safe_load(git('show',head+':docs/agent-workflow/PR-COMPLIANCE.yaml'))
        if not isinstance(manifest,dict) or manifest.get('task_id') != 'VEL-TASK-0010' or manifest.get('pack_commit') != 'd0cf7c5d3618bf616e5ddd60bbde5ca8154d600f':
            raise ValueError('Bootstrap limited to original pinned Task0010 adoption')
        source = head
        print('PROVISIONAL BOOTSTRAP: candidate evaluator on fixed pre-adoption base; owner review required',flush=True)
        if os.environ.get('GITHUB_STEP_SUMMARY'):
            with open(os.environ['GITHUB_STEP_SUMMARY'],'a',encoding='utf-8') as f:
                f.write('## Provisional compliance bootstrap\nBase lacks evaluator. Owner must review first adoption; no authenticated identity/approval claimed.\n')
    with tempfile.TemporaryDirectory(prefix='vellistry-trusted-compliance-') as directory:
        trusted = Path(directory)
        # Existing pack verifier is ALWAYS taken from base, even at bootstrap.
        (trusted/'agent_workflow.py').write_bytes(git('show',base+':scripts/agent_workflow.py'))
        (trusted/'pr_compliance.py').write_bytes(git('show',source+':'+verifier))
        sys.path.insert(0,str(trusted))
        sys.argv = [str(trusted/'pr_compliance.py'),'--repo',str(repo)]
        runpy.run_path(str(trusted/'pr_compliance.py'),run_name='__main__')


if __name__ == '__main__':
    try:
        run()
    except (ValueError,KeyError,TypeError,subprocess.CalledProcessError) as exc:
        print('BLOCKED: compliance loader: '+str(exc),file=sys.stderr)
        raise SystemExit(1)

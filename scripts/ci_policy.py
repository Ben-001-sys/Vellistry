#!/usr/bin/env python3
"""Conservative CI routing and fail-closed final gate. No external API or secrets."""
from __future__ import annotations
import argparse
import json
import os
from pathlib import Path
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
FLAGS = ('application', 'security', 'recovery', 'privileges')
GOVERNANCE = {
    'agent_workflow.py', 'handoff_recovery.py', 'export_level_b_handoff.py',
    'export_stage4_independent_packet.py', 'spec_traceability.py',
    'check_implementation_readiness.py', 'check_knowledge_metadata.py',
    'r01_manifest.py', 'r01_mapping_gate.py', 'r01_mapping_proposal.py', 'r01_review_packet.py',
}
GOV_TESTS = {
    'test_agent_workflow.py', 'test_handoff_recovery.py', 'test_level_b_export.py',
    'test_stage4_independent_packet.py', 'test_spec_traceability.py',
    'test_implementation_readiness.py', 'test_knowledge_metadata.py',
    'test_r01_manifest.py', 'test_r01_mapping_gate.py', 'test_r01_mapping_proposal.py',
    'test_r01_review_packet.py', 'test_research_design_gate.py', 'test_stage4_chapter_contract.py',
}
PRIVILEGE_TEST = 'tests/book_privileges_regression.sql'
PREFLIGHT_TEST = 'tests/hosted_supabase_preflight.test.mjs'

def classify(paths: list[str], *, full: bool = False, privilege_present: bool = False) -> dict[str, str]:
    app = security = recovery = full
    for p in paths:
        # Git paths are data, never interpolated into a shell or expression.
        if not p or p.startswith('/') or '..' in p.split('/'):
            raise ValueError('Unsafe diff path')
        if p.startswith(('.github/', 'apps/api/', 'supabase/')) or p in (
            'package.json', 'pnpm-lock.yaml', 'pnpm-workspace.yaml',
        ) or p.startswith('.env') or p in (PRIVILEGE_TEST, PREFLIGHT_TEST) or p.startswith('scripts/ci_') or p.startswith('tests/test_ci_'):
            app = security = recovery = True
        elif p.startswith('apps/web/'):
            app = True
            # Shared helpers/pages can affect identity without an auth-like name.
            # Only inert presentation assets may omit live integration.
            if not p.endswith(('.css', '.png', '.jpg', '.jpeg', '.webp', '.ico', '.svg')):
                security = recovery = True
        elif p.startswith('scripts/') and p.split('/')[-1] in GOVERNANCE:
            pass
        elif p.startswith('tests/') and p.split('/')[-1] in GOV_TESTS:
            pass
        elif p.startswith('docs/agent-workflow/') and p.endswith(('.yaml', '.yml')):
            pass  # Always-required governance validates these.
        elif p.startswith('docs/') and p.endswith(('.md', '.txt', '.rst')):
            if 'ADR-0006-' in p:
                app = security = recovery = True
        elif '/' not in p and p.endswith(('.md', '.txt')):
            pass
        else:
            # New executable/config/test paths cannot silently opt out.
            app = security = recovery = True
    return dict(zip(FLAGS, map(lambda b: str(b).lower(), (app or security, security, recovery, security and privilege_present))))

def git(*args: str, cwd: Path = ROOT) -> bytes:
    return subprocess.check_output(['git', *args], cwd=cwd, stderr=subprocess.DEVNULL)

def changed_paths(base: str, head: str, *, pr: bool, cwd: Path = ROOT) -> list[str]:
    for value in (base, head):
        if not re.fullmatch(r'[0-9a-fA-F]{40}', value):
            raise ValueError('Expected full Git SHA')
    if pr:
        base = git('merge-base', base, head, cwd=cwd).decode().strip()
    raw = git('diff', '--no-renames', '--name-only', '-z', base, head, '--', cwd=cwd)
    return [p.decode('utf-8', errors='strict') for p in raw.split(b'\0') if p]

def plan_event(event_name: str, event: dict, head: str, *, cwd: Path = ROOT) -> dict[str, str]:
    expected = event.get('pull_request', {}).get('head', {}).get('sha') if event_name == 'pull_request' else os.environ.get('GITHUB_SHA', head)
    if expected != head:
        raise ValueError('Checkout is not exact event head')
    full = event_name in ('workflow_dispatch', 'push')
    if event_name not in ('pull_request', 'push', 'workflow_dispatch'):
        raise ValueError('Unsupported event')
    if event_name == 'push' and event.get('ref') != 'refs/heads/main':
        raise ValueError('Only main push baseline is supported')
    base = event.get('pull_request', {}).get('base', {}).get('sha') if event_name == 'pull_request' else event.get('before')
    paths = []
    # Main/manual always select full checks even if no diff base is available.
    if base and base != '0' * 40:
        paths = changed_paths(base, head, pr=event_name == 'pull_request', cwd=cwd)
    elif event_name == 'pull_request':
        raise ValueError('PR base missing')
    for test in (PRIVILEGE_TEST, PREFLIGHT_TEST):
        if base and base != '0' * 40:
            existed = subprocess.run(['git','cat-file','-e',f'{base}:{test}'],cwd=cwd,capture_output=True).returncode == 0
            if existed and not (cwd / test).is_file():
                raise ValueError('Existing required integration regression was removed')
    return classify(paths, full=full, privilege_present=(cwd / PRIVILEGE_TEST).is_file())

def check_gate(needs: dict) -> None:
    required = {'classify','governance','application','recovery','privileges'}
    if set(needs) != required:
        raise ValueError('Incomplete required job results')
    for job in ('classify', 'governance'):
        if needs[job].get('result') != 'success':
            raise ValueError(f'Required {job} did not succeed')
    outputs = needs['classify'].get('outputs', {})
    if any(outputs.get(f) not in ('true','false') for f in FLAGS):
        raise ValueError('Missing or malformed routing outputs')
    if outputs['security'] == 'true' and outputs['application'] != 'true':
        raise ValueError('Security cannot bypass application integration')
    if outputs['security'] == 'true' and outputs['recovery'] != 'true':
        raise ValueError('Security cannot bypass recovery integration')
    if outputs['privileges'] == 'true' and outputs['security'] != 'true':
        raise ValueError('Privilege integration cannot bypass security')
    for job in ('application','recovery','privileges'):
        result = needs[job].get('result')
        allowed = {'success'} if outputs[job] == 'true' else {'success','skipped'}
        if result not in allowed:
            raise ValueError(f'Applicable or failed {job}: {result}')

def main() -> int:
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('mode',choices=('classify','gate'))
    args=parser.parse_args()
    if args.mode == 'gate':
        check_gate(json.loads(os.environ['CI_NEEDS']))
        print('PASS: all applicable required CI jobs succeeded')
    else:
        head=git('rev-parse','HEAD').decode().strip()
        event=json.loads(Path(os.environ['GITHUB_EVENT_PATH']).read_text(encoding='utf-8'))
        outputs=plan_event(os.environ['GITHUB_EVENT_NAME'],event,head)
        print(json.dumps(outputs,sort_keys=True))
        if outputs['security']=='true' and outputs['privileges']=='false':
            print('NOTICE: proposed PR68 privilege regression is not on this checkout; no privilege-test PASS claimed.')
        with open(os.environ['GITHUB_OUTPUT'],'a',encoding='utf-8') as stream:
            for key,value in outputs.items(): stream.write(f'{key}={value}\n')
    return 0

if __name__ == '__main__':
    raise SystemExit(main())

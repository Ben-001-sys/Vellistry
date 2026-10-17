#!/usr/bin/env python3
"""Static PR evidence checks. Never authenticates an LLM, user or approval."""
from __future__ import annotations
import argparse
from datetime import date
import fnmatch
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import sys
import yaml
import agent_workflow as aw

MANIFEST = 'docs/agent-workflow/PR-COMPLIANCE.yaml'
REQUIRED = ('scripts/pr_compliance.py', 'scripts/run_pr_compliance.py',
            'tests/test_pr_compliance.py', '.github/workflows/ci.yml')
FORBIDDEN = {'hosted', 'production', 'private-manuscripts', 'paid-services', 'admin', 'merge'}
BOOTSTRAP_BASE = 'f371448538dafa92faebbef9bcda2a36c6ca1fa9'
SHA = re.compile(r'[a-f0-9]{40}')
URL = re.compile(r'https://github.com/Ben-001-sys/Vellistry/(?:issues|pull)/[0-9]+(?:#(?:issuecomment|pullrequestreview)-[0-9]+)?')


def require(value, message):
    if not value:
        raise ValueError(message)


def git(repo, *args):
    return subprocess.check_output(['git', '-C', str(repo), *args], stderr=subprocess.DEVNULL)


def sha(value):
    require(isinstance(value, str) and SHA.fullmatch(value), 'Expected full commit/blob SHA')
    return value


def ancestor(repo, old, new):
    sha(old); sha(new)
    return subprocess.run(['git', '-C', str(repo), 'merge-base', '--is-ancestor', old, new], capture_output=True).returncode == 0


def blob(repo, ref, path, missing=False):
    aw.safe_path(path); sha(ref)
    try:
        mode = git(repo, 'ls-tree', ref, '--', path).split(None, 1)[0]
        require(mode == b'100644' or mode == b'100755', 'Nonregular/missing evidence file: '+path)
        return git(repo, 'show', ref+':'+path)
    except (subprocess.CalledProcessError, IndexError):
        if missing:
            return None
        raise ValueError('Missing evidence file: '+path)


def mapping(raw):
    data = yaml.safe_load(raw)
    require(isinstance(data, dict), 'Malformed metadata mapping')
    return data


def front(raw):
    return aw.frontmatter_from_text(raw.decode('utf-8'))[0]


def changes(repo, base, head):
    sha(base); sha(head)
    return [aw.safe_path(x.decode('utf-8')) for x in git(repo, 'diff', '--no-renames', '--name-only', '-z', base, head, '--').split(b'\0') if x]


def inert(path):
    # No exemption for authority/instructions, fixtures, executable extensions or
    # hidden/config paths. Unknown docs require evidence rather than guessing.
    return path.startswith(('docs/reports/', 'docs/research/')) and path.endswith(('.md', '.txt', '.rst'))


def artifact(path, task_id):
    n = task_id[-4:]
    return (path == MANIFEST or path == f'docs/agent-workflow/tasks/{task_id}.yaml'
            or path == f'docs/agent-workflow/context-packs/VEL-CP-{n}.md'
            or path == f'docs/agent-workflow/execution-bundles/VEL-EB-{n}.md'
            or path.startswith(f'docs/agent-workflow/inputs/{task_id}/')
            or (path.startswith('docs/reports/') and path.endswith(('.md','.txt','.rst','.json','.csv'))))


def allowed(path, patterns):
    # Glob wildcards are whole-repository relative; ../, absolute and secret
    # segments are rejected independently. Explicit scope does not waive SQL.
    aw.safe_path(path)
    require(not any(p in {'secrets', 'credentials'} or p.startswith('.env') for p in path.split('/')), 'Forbidden secret path')
    return any(fnmatch.fnmatchcase(path, p) for p in patterns)


def owner_record(repo, base, task_id, kind, url, paths=None, executor=None):
    # Only already reviewed BASE records can confer substitution/migration or
    # accepted-state assertions; candidate records cannot approve themselves.
    name = f'docs/agent-workflow/authorizations/{task_id}.yaml'
    raw = blob(repo, base, name, missing=True)
    require(raw is not None, 'Owner checkpoint requires base-anchored record')
    record = mapping(raw)
    require(record.get('task_id') == task_id and record.get('status') == 'owner-verified'
            and record.get('approved_by') == 'project_owner' and record.get('kind') == kind
            and record.get('evidence') == url and URL.fullmatch(str(url)), 'Invalid owner checkpoint')
    if executor:
        require(record.get('executor') == executor, 'Owner reassignment mismatch')
    if paths:
        require(set(paths) <= set(record.get('paths', [])), 'Owner migration scope mismatch')
    return record


def workflow_contract(repo, head):
    for path in REQUIRED:
        blob(repo, head, path)
    workflow = yaml.load(blob(repo, head, '.github/workflows/ci.yml'), Loader=yaml.BaseLoader)
    require(set(workflow['on']) == {'pull_request', 'push', 'workflow_dispatch'}, 'Unsafe/absent CI events')
    require(workflow.get('permissions') == {'contents': 'read'}, 'CI privilege escalation')
    jobs = workflow['jobs']
    for name in ('governance', 'gate'):
        steps = jobs[name]['steps']
        matching = [s for s in steps if s.get('id') == 'compliance']
        require(len(matching) == 1 and matching[0].get('run') == 'python -I scripts/run_pr_compliance.py'
                and 'if' not in matching[0] and 'continue-on-error' not in matching[0], 'Missing unconditional compliance step')
    require(jobs['governance'].get('outputs', {}).get('compliance') == '${{ steps.compliance.outputs.status }}', 'Missing compliance job output')
    require(jobs['gate'].get('name') == 'Vellistry CI gate' and jobs['gate'].get('if') == '${{ always() }}', 'Stable gate missing')
    require(set(jobs['gate']['needs']) == {'classify', 'governance', 'application', 'recovery', 'privileges'}, 'Incomplete gate dependencies')
    # A zero-test/comment-only replacement must not satisfy test discovery.
    source = blob(repo, head, 'tests/test_pr_compliance.py').decode('utf-8')
    require('class ' in source and 'unittest.TestCase' in source and source.count('def test_') >= 15, 'Deleted/empty compliance regression contract')


def evaluate(repo, base, head, *, today=None, check_workflow=True):
    repo = Path(repo).resolve(); sha(base); sha(head)
    today = today or date.today()
    require(ancestor(repo, base, head), 'Evaluation base is not ancestor')
    paths = changes(repo, base, head)
    if check_workflow:
        workflow_contract(repo, head)
    if not paths or all(inert(p) for p in paths):
        return dict(status='pass', disposition='docs-exempt' if paths else 'unchanged-baseline', head=head, base=base,
                    trust='structure-only; owner review required')
    m = mapping(blob(repo, head, MANIFEST))
    require(m.get('version') == 1, 'Missing/unsupported manifest version')
    tid = m.get('task_id', '')
    require(re.fullmatch(r'VEL-TASK-\d{4}', tid) is not None, 'Missing task ID')
    number = tid[-4:]
    task_path = f'docs/agent-workflow/tasks/{tid}.yaml'
    task = mapping(blob(repo, head, task_path))
    require(task.get('id') == tid and task.get('status') in {'in-progress', 'verification'}, 'Task not executed')
    require(blob(repo, base, task_path, missing=True) is None, 'Task reused from base; create authorized amendment')
    contract = task.get('compliance', {})
    require(contract.get('change_base') == base, 'Wrong task/base; repin explicit amendment')
    require(contract.get('phase') and contract.get('phase') == m.get('phase'), 'Phase/scope expansion without amendment')
    auth = contract.get('authorization', {})
    require(auth.get('status') == 'authorized' and URL.fullmatch(str(auth.get('url', ''))), 'Missing/expired/superseded owner authorization')
    require(auth.get('provenance') in {'direct-owner-dispatch-with-coordinator-relay', 'owner-linked-dispatch'}, 'Missing authorization provenance')
    require(date.fromisoformat(str(auth.get('expires_on'))) >= today, 'Expired authorization')
    require(set(contract.get('forbidden_actions', [])) == FORBIDDEN and not m.get('performed_forbidden_actions'), 'Non-overridable action exclusions')
    allow = contract.get('allow_paths')
    require(isinstance(allow, list) and allow and all(isinstance(p, str) and p for p in allow), 'Missing path scope')
    for pattern in allow:
        aw.safe_path(pattern)
    for path in paths:
        require(allowed(path, allow), 'Disallowed changed path: '+path)
        # Reject symlinks even for optional data/new paths (deletions have no blob).
        blob(repo, head, path, missing=True)
    pack_path = f'docs/agent-workflow/context-packs/VEL-CP-{number}.md'
    pack_raw = blob(repo, head, pack_path); pack = front(pack_raw)
    pack_commit = sha(m.get('pack_commit'))
    source = sha(m.get('source_commit'))
    require(ancestor(repo, base, pack['base_commit']) and ancestor(repo, pack['base_commit'], pack_commit)
            and pack_commit != source and ancestor(repo, pack_commit, source) and ancestor(repo, source, head), 'Pack/source ancestry invalid')
    require(blob(repo, pack_commit, pack_path) == pack_raw, 'Mutated immutable pack')
    pinned_task = mapping(blob(repo, pack['base_commit'], task_path))
    require({k:v for k,v in task.items() if k not in {'status','updated_at'}} ==
            {k:v for k,v in pinned_task.items() if k not in {'status','updated_at'}}, 'Material task mutation after pin')
    # Existing trusted validator reconstructs all task/source blobs and whole body.
    oldroot = aw.ROOT
    try:
        aw.ROOT = repo
        aw.check_pack(repo/pack_path, {tid:task})
        eb_path = f'docs/agent-workflow/execution-bundles/VEL-EB-{number}.md'
        eb_raw = blob(repo, head, eb_path); eb = front(eb_raw)
        aw.check_bundle(repo/eb_path, {tid:task}, {pack['id']:pack})
    finally:
        aw.ROOT = oldroot
    require(eb.get('implementation_source_commit') == source and m.get('bundle_id') == eb.get('id'), 'Missing/wrong code-head bundle evidence')
    execution = eb.get('execution', {})
    require(execution.get('status') == 'completed' and execution.get('executor') == m.get('executor') == contract.get('executor')
            and eb.get('agent', {}).get('name') == m.get('executor'), 'Missing/contradictory actual executor')
    require(isinstance(execution.get('model'), str) and execution['model'].strip(), 'Missing model claim')
    if m['executor'] != 'Codex':
        owner_record(repo, base, tid, 'executor-exception', m.get('executor_exception'), executor=m['executor'])
    require(m.get('owner_disposition') == 'pending', 'CI cannot grant owner acceptance; external disposition required')
    require(eb.get('status') == 'proposed-for-review' and eb.get('review', {}).get('status') == 'pending', 'Forged completion/owner approval; keep pending for owner review')
    tests = execution.get('tests')
    require(isinstance(tests, list) and tests, 'Missing executed test evidence')
    for test in tests:
        require(test.get('status') == 'PASS' and type(test.get('exit_code')) is int and test['exit_code'] == 0
                and isinstance(test.get('command'), str) and test['command'].strip(), 'Required execution NOT_RUN/BLOCKED/failed')
        evidence = blob(repo, head, test.get('evidence', ''))
        require(evidence.strip(), 'Empty test evidence')
    # Source commit binds every non-report/artifact changed blob to actual HEAD.
    operative = [p for p in paths if not artifact(p, tid)]
    for path in operative:
        require(blob(repo, source, path, missing=True) == blob(repo, head, path, missing=True), 'Head changed after source evidence: '+path)
    # No operative change may predate committed handoff. Compare entire range,
    # including add/delete/revert histories, not just final net diff.
    commits = git(repo, 'rev-list', '--reverse', base+'..'+head).decode().splitlines()
    require(commits and all(len(git(repo,'rev-list','--parents','-n','1',c).split()) == 2 for c in commits), 'Merge commits require separately rebased bounded task')
    records = m.get('commits')
    require(isinstance(records, list), 'Missing per-commit provenance')
    declared = {r.get('commit'):r for r in records if isinstance(r,dict)}
    require(len(declared) == len(records) and set(declared) == set(commits[:-1]), 'Undeclared/duplicate inherited commit origins')
    current = m.get('current_head')
    require(isinstance(current,dict) and current.get('executor') == m['executor'] and current.get('origin') == 'original', 'Missing current-head provenance')
    declared[head] = current
    for commit in commits:
        row = declared[commit]
        require(row.get('executor') and row.get('origin') in {'original','adopted'}, 'Malformed commit provenance')
        message = git(repo, 'show', '-s', '--format=%B', commit).decode('utf-8')
        picked = re.findall(r'\(cherry picked from commit ([0-9a-f]{40})\)', message)
        if row['origin'] == 'adopted':
            require(row.get('original_executor') and URL.fullmatch(str(row.get('source_url','')))
                    and SHA.fullmatch(str(row.get('original_commit',''))), 'Missing adopted source origin')
            require(not picked or picked == [row['original_commit']], 'Cherry-pick provenance mismatch')
            require(row['executor'] == m['executor'], 'Adoption executor mismatch')
            original = sha(row['original_commit'])
            require(subprocess.run(['git','-C',str(repo),'cat-file','-e',original+'^{commit}'],capture_output=True).returncode == 0, 'Adopted original commit unavailable')
            def patch_id(ref):
                patch = git(repo,'show','--pretty=format:','--binary',ref)
                return subprocess.check_output(['git','patch-id','--stable'],input=patch).split()[:1]
            require(patch_id(original) == patch_id(commit), 'Adopted original patch mismatch')
        else:
            require(row['executor'] == m['executor'] and not picked, 'Role substitution / undeclared cherry-pick')
        changed = [p.decode('utf-8') for p in git(repo,'diff-tree','--no-commit-id','--name-only','--no-renames','-r','-z',commit).split(b'\0') if p and not artifact(p.decode('utf-8'),tid)]
        if changed:
            require(commit != pack_commit and ancestor(repo, pack_commit, commit), 'Implementation preceded immutable pack commit')
    sql = [p for p in paths if p.startswith('supabase/migrations/') or p.endswith('.sql')]
    if sql:
        owner_record(repo, base, tid, 'migration-path-approval', m.get('migration_approval'), paths=sql)
    return dict(status='pass', disposition='evidence-consistent', head=head, base=base, task_id=tid,
                source_commit=source, authorization=auth['url'], owner_disposition='pending',
                changed_paths=paths, trust='declared identity and linked authorization; owner verification required')


def event_base(repo, event_name, event, head):
    sha(head)
    if event_name == 'pull_request':
        pr = event.get('pull_request', {})
        require(pr.get('head', {}).get('sha') == head and type(pr.get('draft')) is bool
                and event.get('action') in {'opened','synchronize','reopened','ready_for_review','edited','converted_to_draft'}, 'Malformed/exact-head PR event')
        require(not (event['action']=='ready_for_review' and pr['draft']) and not (event['action']=='converted_to_draft' and not pr['draft']), 'Contradictory draft event')
        base = sha(pr.get('base', {}).get('sha'))
        return git(repo,'merge-base',base,head).decode().strip(), base
    require(event_name in {'push','workflow_dispatch'}, 'Unsupported compliance event')
    require(os.environ.get('GITHUB_SHA',head)==head, 'Wrong event head')
    if event_name == 'push':
        require(event.get('ref') == 'refs/heads/main', 'Only main push')
        base = sha(event.get('before'))
    else:
        base = git(repo,'rev-parse','refs/remotes/origin/main').decode().strip()
    require(base != '0'*40, 'Missing trusted baseline')
    return git(repo,'merge-base',base,head).decode().strip(), base


def evaluate_event(repo, event_name, event, head, *, check_workflow=True):
    base, trust = event_base(repo,event_name,event,head)
    implementation = head
    if event_name == 'push':
        parents = git(repo,'rev-list','--parents','-n','1',head).decode().split()
        if len(parents) > 2:
            require(len(parents)==3 and parents[1]==base, 'Unreviewed multi-parent/main integration base')
            implementation = parents[2]
            require(not changes(repo,implementation,head), 'Main merge changed implementation tree; new evidence required')
    result = evaluate(repo,base,implementation,check_workflow=check_workflow)
    result.update(head=head, implementation_head=implementation, verifier_base=trust)
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--repo', type=Path, default=Path.cwd())
    args = parser.parse_args()
    head = git(args.repo,'rev-parse','HEAD').decode().strip()
    event = json.loads(Path(os.environ['GITHUB_EVENT_PATH']).read_text(encoding='utf-8'))
    result = evaluate_event(args.repo, os.environ['GITHUB_EVENT_NAME'], event, head)
    print(json.dumps(result,sort_keys=True))
    if os.environ.get('GITHUB_OUTPUT'):
        with open(os.environ['GITHUB_OUTPUT'],'a',encoding='utf-8') as f:
            f.write('status=pass\nhead='+head+'\n')
    return 0


if __name__ == '__main__':
    try:
        raise SystemExit(main())
    except (ValueError,KeyError,TypeError,AttributeError,yaml.YAMLError) as exc:
        print('BLOCKED: PR compliance: '+str(exc),file=sys.stderr)
        raise SystemExit(1)

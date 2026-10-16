#!/usr/bin/env python3
"""Run current governance once, preserving provenance and negative tests."""
from pathlib import Path
import hashlib
import subprocess
import sys

ROOT=Path(__file__).resolve().parents[1]
def run(*args, cwd=ROOT):
    print('COMMAND:', ' '.join(map(str,args)), flush=True)
    subprocess.run([str(a) for a in args],cwd=cwd,check=True)
def python(*args): run(sys.executable,*args)

def prepare_packets():
    # Never overwrite an immutable pack if a later reviewed branch supplies it.
    for number in ('0002','0003'):
        if not (ROOT/f'docs/agent-workflow/context-packs/VEL-CP-{number}.md').exists():
            python('scripts/agent_workflow.py','pack',f'docs/agent-workflow/tasks/VEL-TASK-{number}.yaml')

def validate_required_sources(root=ROOT):
    # Discovery must not turn removal of a negative suite into zero-test success.
    from ci_policy import GOV_TESTS
    required = [root/'tests'/name for name in GOV_TESTS | {'test_ci_policy.py'}]
    if any(not p.is_file() for p in required):
        raise ValueError('Required governance regression source is missing')

def main():
    validate_required_sources()
    prepare_packets()
    python('-m','unittest','discover','-s','tests','-p','test_*.py','-v')
    for script in ('check_knowledge_metadata.py','check_implementation_readiness.py'):
        python('scripts/'+script)
    python('scripts/agent_workflow.py','validate')
    python('scripts/spec_traceability.py','validate')
    for pattern in ('test_pair03_*.py','test_r07_story_state_contract.py','test_pair04_offline_provider.py','test_pair05_synthetic_rules.py','test_pair06_legal_registry.py','test_wave03_security_boundary.py','test_wave03_story_profiles.py','test_wave06_recovery_contract.py'):
        python('-m','unittest','discover','-s','docs/research/experiments','-p',pattern,'-v')
    python('docs/research/independent-alternatives/pairs-04-05/validate_fixtures.py')
    # Preserve original independent-agent evidence; compare canonical Git bytes
    # AND worktree text normalized only for Windows checkout line endings.
    archive=ROOT/'docs/agent-workflow/handoff-evaluations/raw/VEL-HO-0003'
    hashes={
        'VEL-EB-0002-INDEPENDENT.md':'4365f4ff676e5e272409ed913a2b2c003e69451a75a331aad176243c5eb36578',
        'synthetic_chapter_contract.py':'74705667484e5a9f0969f9ca37760da252fb11e76f3b3cb98c3b8a0fcc410c15',
        'test_synthetic_chapter_contract.py':'9790507cc129abc01ee4cabba063ee20cc038564d3ffa77c19c31668726d2194',
    }
    for name,expected in hashes.items():
        path=archive/name
        raw=subprocess.check_output(['git','show','HEAD:'+path.relative_to(ROOT).as_posix()],cwd=ROOT)
        if hashlib.sha256(raw).hexdigest()!=expected or hashlib.sha256(path.read_bytes().replace(b'\r\n',b'\n')).hexdigest()!=expected:
            raise ValueError('Archived independent-agent provenance mismatch: '+name)
    run(sys.executable,'-I','-S','-m','py_compile','synthetic_chapter_contract.py','test_synthetic_chapter_contract.py',cwd=archive)
    run(sys.executable,'-m','unittest','-v',cwd=archive)
    python('-m','compileall','-q','docs/research/spikes/stage4-synthetic-chapter-contract')
    python('scripts/agent_workflow.py','validate')
    python('scripts/export_stage4_independent_packet.py','--output','stage4-independent-agent-packet.zip')
    python('scripts/export_level_b_handoff.py','--output','level-b-test-packet.zip')
    print('PASS: current governance and archived provenance checks')

if __name__=='__main__': main()

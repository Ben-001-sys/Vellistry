# Preserved historical recovery bundle replay

The original report remains dated evidence. This replay verifies the retained bundle and its43pinned commits after source adoption. It does not claim that the historical bundle contains current main or that a new agent/OS performed the original drill. All fault injection and GC remain inside new owned local copies.

```python
from pathlib import Path
import subprocess,hashlib,json
workspace=Path.cwd().resolve()
assert workspace.is_relative_to(Path(r'H:\cursor\cursor\Vellistry\.worktrees').resolve())
bundle=workspace/'docs/reports/evidence/VEL-RECOVERY-PROOF/recovery-pinned.bundle'
data=bundle.read_bytes()
assert len(data)==2620689 and hashlib.sha256(data).hexdigest()=='984a99d0148fe041ee888c0fcc968adf277b7e48be8cd6662a88d3aa07b87465'
pins=json.loads((workspace/'docs/reports/evidence/VEL-RECOVERY-PROOF/dependency-closure.json').read_text())['required_commit_pins']
assert len(pins)==43 and len(set(pins))==43
out=workspace/'docs/reports/evidence/VEL-INTEGRATION-0031'
owned=workspace/'.bundle-replay.log'
assert owned.resolve().is_relative_to(workspace) and not owned.exists()
owned.mkdir()
records=[]
def command(args,cwd=workspace,expected=0):
 result=subprocess.run([str(v) for v in args],cwd=cwd,capture_output=True)
 index=len(records);file=out/f'bundle-command-{index}.txt';file.write_bytes(result.stdout+result.stderr)
 records.append(dict(command=[str(v) for v in args],cwd=str(cwd),exit_code=result.returncode,expected_exit=expected,evidence=file.relative_to(workspace).as_posix()))
 (out/'bundle-commands.json').write_text(json.dumps(records,indent=2)+'\n')
 assert result.returncode==expected,(args,result.returncode)
 return result.stdout
command(['git','bundle','verify',bundle])
heads=command(['git','bundle','list-heads',bundle]).decode().splitlines()
assert set(pins).issubset({line.split()[0] for line in heads})
restored=owned/'restored.git'
assert restored.resolve().is_relative_to(owned.resolve()) and not restored.exists()
command(['git','clone','--mirror',bundle,restored])
assert restored.resolve().is_relative_to(owned.resolve()) and (restored/'HEAD').is_file()
command(['git','gc','--prune=now'],cwd=restored)
for pin in pins:command(['git','cat-file','-e',pin+'^{commit}'],cwd=restored)
command(['git','fsck','--full'],cwd=restored)
bad=owned/'corrupted.bundle';bad.write_bytes(data[:-1]+bytes([data[-1]^1]))
rejected=owned/'corrupt-restore.git'
assert rejected.resolve().is_relative_to(owned.resolve()) and not rejected.exists()
command(['git','clone','--mirror',bad,rejected],expected=128)
(out/'bundle-result.json').write_text(json.dumps(dict(bundle_sha256=hashlib.sha256(data).hexdigest(),bundle_bytes=len(data),advertised_required_pins=43,pins_available_after_owned_clone_gc=43,fsck='PASS',corrupt_clone_exit=128,scope='Historical bundle revisions, not latest main or clean OS',cleanup='Only owned local copies created and retained for audit; no external resources'),indent=2)+'\n')
print('PASS: exact 2620689-byte bundle, 43 advertised pins survive owned mirror clone+GC, fsck succeeds, corrupt clone rejected128. Historical source only; no fresh agent or hosted acceptance.')
```

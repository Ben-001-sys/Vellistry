# Current-base source preservation replay

Original PR86 report is dated historical evidence, including its then-pending PR/issue statuses. Current authority is the merged one-time delegation; this successor does not reactivate those historical holds. Actual closures59/66/82 are verified in the external current PR ledger. No hosted acceptance is inferred.

```python
from pathlib import Path
import subprocess,json,hashlib
root=Path('.')
d=json.loads(Path('docs/reports/evidence/VEL-PR-HYGIENE/source-comparison.json').read_text())
records=[x for x in d['files'] if x['pr']==66]
assert len(records)==7
for e in records:
 raw=subprocess.check_output(['git','show',e['source']+':'+e['path']])
 archive=subprocess.check_output(['git','show','HEAD:docs/agent-workflow/inputs/VEL-TASK-0008/pr66/'+e['path']])
 assert raw==archive and hashlib.sha256(raw).hexdigest()==e['sha256']
paths=subprocess.check_output(['git','diff','--name-only','5c7c8fb5d14020b2ef7ac3e8705ca06d9918cb85^','5c7c8fb5d14020b2ef7ac3e8705ca06d9918cb85'],text=True).splitlines()
assert not any(p.startswith(('apps/','supabase/','.github/workflows/')) for p in paths)
print('PASS:7 original ChatGPT PR66 files exactly retained; original PR59 is planning-only.')
```

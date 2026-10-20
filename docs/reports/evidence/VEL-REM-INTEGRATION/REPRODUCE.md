# Reproduce bounded authority evidence checks

Execute fenced Python from this checkout with PyYAML/full Git history. This does not implement automaticmergepermission or authenticate a human; all actual readyCI/review gates must be observed.

```python
from pathlib import Path
from datetime import date
import copy,hashlib,subprocess,yaml
p=Path("docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml")
a=yaml.safe_load(p.read_text(encoding="utf-8"))
assert hashlib.sha256(Path(a["authority"]["archive"]).read_bytes()).hexdigest()==a["authority"]["sha256"]
assert not a["default_policy_changes"] and not a["authority"]["retroactive"]
assert set(a["default_task_exclusions_unchanged"])=={"hosted","production","private-manuscripts","paid-services","admin","merge"}
for f in ["scripts/pr_compliance.py","scripts/ci_policy.py","scripts/run_pr_compliance.py",".github/workflows/ci.yml"]:
 assert subprocess.check_output(["git","show","fca0d96fd071f1165e3e16658d821a3d36a20293:"+f])==Path(f).read_bytes().replace(b"\r\n",b"\n")
# Operational review checklist, not a replacement for the unchanged CI evaluator.
def eligible(q):
 return (q["pr"] in a["existing_prs"] and q["remediation_only"] and not any(q[k] for k in ["hosted","features","paid","admin"]) and q["distinct_review"] and q["ready_event_ci"] and q["reviewed_head"]==q["head"] and not q["closed_program"] and q["today"]<=date.fromisoformat(a["expiry"]["conservative_implementation_cutoff"]))
q=dict(pr=84,remediation_only=True,hosted=False,features=False,paid=False,admin=False,distinct_review=True,ready_event_ci=True,reviewed_head="8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",head="8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",closed_program=False,today=date(2026,10,20));assert eligible(q)
variants=[("pr",999),("remediation_only",False),("hosted",True),("features",True),("paid",True),("admin",True),("distinct_review",False),("ready_event_ci",False),("reviewed_head","0"*40),("closed_program",True),("today",date(2026,11,2))]
for k,v in variants:
 bad=copy.deepcopy(q);bad[k]=v;assert not eligible(bad),(k,v)
print("PASS:1positive/11negative operational eligibility assertions; exactownerarchive hash and unchanged default policy/CI controls")
```

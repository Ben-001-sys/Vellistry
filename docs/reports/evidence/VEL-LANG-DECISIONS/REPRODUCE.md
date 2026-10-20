# Reproduce the matrix evidence assertions

From the PR88 checkout with full Git history, execute the fenced Python below. This is structural/evidence classification validation, not user/hosted acceptance. Existing Library behavior uses the separate66-test suite.

```python
import copy, hashlib, json, subprocess
from pathlib import Path
r=Path("docs/reports/evidence/VEL-LANG-DECISIONS")
rows=json.loads((r/"matrix.json").read_text(encoding="utf-8"))
def valid(v):
    assert len(v)==15 and {x["id"] for x in v}=={f"LANG-P{i:02}" for i in range(1,16)}
    for x in v:
        assert len(x)==8 and all(isinstance(z,str) and z.strip() for z in x.values())
        assert x["status"] in {"ADOPTED","PROVISIONAL","DEFERRED","BLOCKED"}
    by={x["id"]:x for x in v}
    for k in ["LANG-P02","LANG-P07","LANG-P14"]:assert by[k]["status"]=="BLOCKED"
    for k in ["LANG-P08","LANG-P09","LANG-P10","LANG-P11","LANG-P13"]:assert by[k]["status"]=="DEFERRED"
valid(rows)
mutations=[lambda v:v.pop(),lambda v:v.__setitem__(1,v[0].copy()),lambda v:v[6].__setitem__("status","ADOPTED"),lambda v:v[1].__setitem__("status","ADOPTED"),lambda v:v[13].__setitem__("status","ADOPTED"),lambda v:v[9].__setitem__("status","ADOPTED"),lambda v:v[0].__setitem__("unresolved_authority","")]
for i,mutate in enumerate(mutations,1):
    v=copy.deepcopy(rows);mutate(v)
    try:valid(v)
    except AssertionError:pass
    else:raise AssertionError(f"negative{i} escaped")
base="fca0d96fd071f1165e3e16658d821a3d36a20293"
raw=subprocess.check_output(["git","show",base+":LANGUAGE.md"])
parts=b"".join(subprocess.check_output(["git","show", "HEAD:docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-PART-"+str(i).zfill(2)+".md"]) for i in range(1,5))
assert parts==raw and hashlib.sha256(raw).hexdigest()=="a8347a2149ba0cca7c0315a75712f7149f46eaa99947583c5f406c417d1e19c2"
print("PASS:1positive/7negative matrix cases and exact source reassembly/hash; no hosted/runtime acceptance")
```

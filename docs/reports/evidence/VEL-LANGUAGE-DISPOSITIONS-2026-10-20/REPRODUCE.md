# Current scoped language and copy checks

These are source-scope/negative assertions, not hosted or browser acceptance. The original Task23 matrix and its dated replay remain untouched.

```python
from pathlib import Path
import json,copy,subprocess,yaml,hashlib
r=Path("docs/reports/evidence/VEL-LANGUAGE-DISPOSITIONS-2026-10-20")
rows=json.loads((r/"matrix.json").read_text(encoding="utf-8"))
keys={"id","current","recommendation","evidence","status","affected_surface","verification","unresolved_authority"}
def valid(v):
 assert len(v)==15 and {x["id"] for x in v}=={f"LANG-P{i:02}" for i in range(1,16)}
 for x in v:assert set(x)==keys and all(isinstance(z,str) and z.strip() for z in x.values()) and x["status"] in {"ADOPT","PROVISIONAL","DEFER","BLOCKED"}
 by={x["id"]:x for x in v}
 for k in ("LANG-P02","LANG-P14"):assert by[k]["status"]=="BLOCKED"
 for k in ("LANG-P08","LANG-P09","LANG-P10","LANG-P11","LANG-P13"):assert by[k]["status"]=="DEFER"
 assert "conditional" in by["LANG-P07"]["recommendation"].lower() and "NOT_RUN" in by["LANG-P07"]["verification"]
valid(rows)
mutations=[lambda v:v.pop(),lambda v:v.__setitem__(1,v[0].copy()),lambda v:v[0].__setitem__("status","COMPLETE"),lambda v:v[1].__setitem__("status","ADOPT"),lambda v:v[13].__setitem__("status","ADOPT"),lambda v:v[6].__setitem__("recommendation","Email was definitely sent."),lambda v:v[0].__setitem__("unresolved_authority",""),lambda v:v[9].__setitem__("status","ADOPT")]
for index,mutate in enumerate(mutations,1):
 v=copy.deepcopy(rows);mutate(v)
 try:valid(v)
 except AssertionError:pass
 else:raise AssertionError(f"matrix mutation{index} escaped")
base="326f5e4c385644f864348d008c46c1aa54c7b616"
plan=json.loads(Path("docs/agent-workflow/inputs/VEL-TASK-0035/COPY-PLAN.json").read_text())
# Task35 exact historical plan is preserved; only Task36 approved literal supersedes it.
correction=json.loads(Path("docs/agent-workflow/inputs/VEL-TASK-0036/CORRECTION-PLAN.json").read_text())
for pair in plan[correction["path"]]:
 if correction["before"] in pair[1]:
  pair[1]=pair[1].replace(correction["before"],correction["after"])

def valid_copy(name,text):
 expected=subprocess.check_output(["git","show",base+":"+name]).decode("utf-8")
 for old,new in plan[name]:
  assert expected.count(old)==1
  expected=expected.replace(old,new,1)
 assert expected==text
for name in plan:valid_copy(name,Path(name).read_text(encoding="utf-8"))
page="apps/web/src/app/books/page.tsx";text=Path(page).read_text(encoding="utf-8")
for bad in [text.replace("session.refresh()","session.retryUncertainCreate()",1),text.replace("disabled={!region.canCreate}","disabled={false}",1)]:
 assert bad!=text
 try:valid_copy(page,bad)
 except AssertionError:pass
 else:raise AssertionError("copy scope/control-flow mutation escaped")
old=subprocess.check_output(["git","show",base+":LANGUAGE.md"]).decode("utf-8");current=Path("LANGUAGE.md").read_text(encoding="utf-8")
oldmeta=yaml.safe_load(old.split("---",2)[1]);meta=yaml.safe_load(current.split("---",2)[1])
assert all(meta[k]==v for k,v in oldmeta.items() if k not in {"version","updated_at"})
question_rows=lambda s:[x for x in s.splitlines() if x.startswith("| "+chr(96)+"LANG-P")]
assert len(question_rows(current))==15 and question_rows(current)==question_rows(old)
assert meta["status"]=="proposed-owner-review" and meta["approval_required"] is True
parts=b"".join(subprocess.check_output(["git","show",f"HEAD:docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-PART-{i:02}.md"]) for i in range(1,5))
assert hashlib.sha256(parts).hexdigest()=="a8347a2149ba0cca7c0315a75712f7149f46eaa99947583c5f406c417d1e19c2"
print("PASS:15 current rows;1positive/8negative matrix checks;7app literals only;2control-flow/lock mutations rejected;15 historical rows/approval/baseline and original95391-byte source preserved. No hosted/browser acceptance.")
```

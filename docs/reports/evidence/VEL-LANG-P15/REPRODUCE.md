# Reproduce LANG-P15 source-preservation checks

Run from this checkout with Python/PyYAML and full Git history. These are source integrity/negative assertions, not feature or hosted acceptance.

```python
from pathlib import Path
import copy, subprocess, yaml
base="fca0d96fd071f1165e3e16658d821a3d36a20293"
old=subprocess.check_output(["git","show",base+":LANGUAGE.md"]).decode("utf-8")
current=Path("LANGUAGE.md").read_text(encoding="utf-8")
def valid(text):
    m=yaml.safe_load(text.split("---",2)[1]);original=yaml.safe_load(old.split("---",2)[1])
    assert m["status"]=="proposed-owner-review" and m["approval_required"] is True
    for key in original.keys()-{"version","updated_at"}:assert m[key]==original[key]
    rows=lambda v:[x for x in v.splitlines() if x.startswith("| `LANG-P")]
    assert len(rows(text))==15 and rows(text)[:14]==rows(old)[:14]
    assert "present on merged main `"+base+"`" in rows(text)[14]
    assert "via PR #80" in rows(text)[14] and "not owner approval of all15 decisions" in rows(text)[14]
    assert "no `LANGUAGE.md` on verified default branch" not in rows(text)[14]
    # Historical semantic body outside metadata/P15/changelog is byte-for-byte retained.
    remove=lambda v:"\n".join(x for x in v.splitlines() if not x.startswith(("version:","updated_at:","| `LANG-P15`","| 2026-10-19 | 1.0.1-candidate")))
    assert remove(text)==remove(old)
valid(current)
mutations=[lambda s:s.replace("status: proposed-owner-review","status: accepted",1),lambda s:s.replace("approval_required: true","approval_required: false",1),lambda s:s.replace("present on merged main `"+base+"`","no `LANGUAGE.md` on verified default branch",1),lambda s:s.replace("| `LANG-P04`","| `LANG-REMOVED`",1),lambda s:s.replace("Before approval, do not retroactively relabel proposals","These labels are now approved",1),lambda s:s.replace("baseline_main_sha: f371448538dafa92faebbef9bcda2a36c6ca1fa9","baseline_main_sha: "+base,1)]
for i,mutate in enumerate(mutations,1):
    bad=mutate(current);assert bad!=current
    try:valid(bad)
    except AssertionError:pass
    else:raise AssertionError(f"negative{i} escaped")
print("PASS:1positive/6negative preservation checks; all14other decision rows, historical body/baseline and approval gates preserved")
```

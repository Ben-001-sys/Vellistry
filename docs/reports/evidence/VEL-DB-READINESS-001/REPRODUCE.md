# Offline evidence verification transcript

Run from repository root using Python standard library and read-only Git objects. This validates retained evidence; it does not execute SQL.

```python
from pathlib import Path
import copy, hashlib, json, subprocess, zipfile
p = Path("docs/reports/evidence/VEL-DB-READINESS-001")
m = json.loads((p / "retention.json").read_text())
archive = (p / "pg17-artifact.zip").read_bytes()
assert hashlib.sha256(archive).hexdigest() == m["archive_sha256"]
with zipfile.ZipFile(p / "pg17-artifact.zip") as z:
    assert z.namelist() == ["result.json"]
    raw = z.read("result.json")
assert raw == (p / "pg17-result.json").read_bytes()
assert hashlib.sha256(raw).hexdigest() == m["retained_member_sha256"]
r = json.loads(raw)
def verify(d):
    assert d["source_commit"] == "cbb379fa4a4eaa9f576f3abcce2c2258d22cc551"
    assert d["hosted_supabase"] == "NOT_ACCESSED"
    assert d["before"]["status"] == "EXPECTED_FAILURE" and d["before"]["exit_code"] == 3
    assert d["after"]["status"] == "PASS" and d["after"]["exit_code"] == 0
    assert "P0001" in d["commands"][24]["stderr"]
    assert "42501" in d["commands"][30]["stderr"]
    assert [(i,c["exit_code"]) for i,c in enumerate(d["commands"]) if c["exit_code"]] == [(24,3)]
    assert d["database_cleanup"] == d["independent_cleanup"] == "PASS"
    assert d["runner_temporary_storage"] == d["container_temporary_storage"] == "REMOVED"
    assert d["verified_sources"]["supabase/migrations/20261015171325_restrict_book_privileges.sql"]["sha256"] == "c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81"
verify(r)
mutations = [(('source_commit',),'0'*40),(('hosted_supabase',),'ACCESSED'),(('before','status'),'PASS'),(('before','exit_code'),0),(('after','exit_code'),3),(('commands',24,'stderr'),'unrelated failure'),(('commands',30,'stderr'),'no denial evidence'),(('database_cleanup',),'FAIL'),(('independent_cleanup',),'NOT_RUN'),(('runner_temporary_storage',),'PRESENT'),(('container_temporary_storage',),'PRESENT'),(('verified_sources','supabase/migrations/20261015171325_restrict_book_privileges.sql','sha256'),'0'*64)]
for keys,value in mutations:
    changed=copy.deepcopy(r); target=changed
    for key in keys[:-1]: target=target[key]
    target[keys[-1]]=value
    try: verify(changed)
    except AssertionError: pass
    else: raise AssertionError("Mutation accepted: "+str(keys))
for path,v in r["verified_sources"].items():
    data=subprocess.check_output(["git","show",r["source_commit"]+":"+path])
    assert hashlib.sha256(data).hexdigest()==v["sha256"]
    assert subprocess.check_output(["git","rev-parse",r["source_commit"]+":"+path],text=True).strip()==v["blob"]
sources=json.loads((p / "source-map.json").read_text())
inherited=[]
for row in sources["files"]:
    q=subprocess.run(["git","show",sources["pr65"]+":"+row["path"]],capture_output=True)
    assert row["pr65_present"] == (q.returncode==0)
    if row["pr65_present"]:
        assert hashlib.sha256(q.stdout).hexdigest()==row["pr65_sha256"]
        if not row["same_as_pr65"]:
            assert row["origin"]=="ChatGPT PR65 original; subsequently modified by Codex PR68 continuation"
            assert row["codex_followup_commits"]
            inherited.append(row["path"])
assert len(inherited)==6
print("PASS: exact archive/member hashes;13 retention checks (1positive+12negative);4 SQL/fixture source identities;38 origin entries and6 inherited-change lineages. No SQL execution.")
```

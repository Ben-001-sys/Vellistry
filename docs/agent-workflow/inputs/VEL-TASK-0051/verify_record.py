"""Offline owner-record parser probes; never executes SQL or grants approval."""
import copy
import json
from pathlib import Path
import subprocess
import sys
import yaml

ROOT = Path(__file__).resolve().parents[4]
sys.path.insert(0, str(ROOT / "scripts"))
import pr_compliance as pc

BASE = "0bb9ed3e5574a733af7a4e64369e52c286b091da"
record = yaml.safe_load((ROOT / "docs/agent-workflow/authorizations/VEL-TASK-0052.yaml").read_text())
packet = json.loads((ROOT / "docs/agent-workflow/proposals/VEL-IMP002-PERSISTENCE-EXECUTION-PACKET.json").read_text())
assert record["paths"] == packet["sql_paths"] and len(record["paths"]) == 4
try:
    pc.owner_record(ROOT, BASE, "VEL-TASK-0052", "migration-path-approval", record["evidence"], paths=record["paths"])
except ValueError as error:
    assert "base-anchored" in str(error)
else:
    raise AssertionError("Candidate record self-approved")

original_blob = pc.blob
def probe(value, paths=None):
    # Synthetic parser input only: this does NOT represent real base adoption.
    pc.blob = lambda *args, **kwargs: yaml.safe_dump(value).encode()
    try:
        return pc.owner_record(ROOT, BASE, "VEL-TASK-0052", "migration-path-approval", record["evidence"], paths=paths or record["paths"])
    finally:
        pc.blob = original_blob

probe(record)
mutations = [dict(status="pending"), dict(approved_by="Codex"), dict(task_id="VEL-TASK-0051"), dict(kind="executor-exception"), dict(evidence="https://example.com/not-owner"), dict(paths=[])]
for mutation in mutations:
    changed = copy.deepcopy(record)
    changed.update(mutation)
    try:
        probe(changed)
    except ValueError:
        pass
    else:
        raise AssertionError("Invalid record admitted")
for extra in ["supabase/migrations/unauthorized.sql", "tests/workspace/persistence/sql/extra.sql"]:
    try:
        probe(record, paths=record["paths"] + [extra])
    except ValueError:
        pass
    else:
        raise AssertionError("Unapproved path admitted")

def git(*args):
    return subprocess.check_output(["git", "-C", str(ROOT), *args])

for path in ["docs/agent-workflow/tasks/VEL-TASK-0049.yaml", "docs/agent-workflow/context-packs/VEL-CP-0049.md", "docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json", "docs/contracts/VEL-IMP002-PERSISTENCE-CONTRACT.md"]:
    # Compare canonical Git bytes, not checkout CRLF filters on Windows.
    assert git("show", BASE + ":" + path) == git("show", "HEAD:" + path)
cases = json.loads(git("show", "HEAD:docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json"))["cases"]
assert len(cases) == 27 and all(case["status"] == "NOT_RUN" for case in cases)
assert not git("diff", "--name-only", BASE, "HEAD", "--", "apps", "supabase", ".github", "package.json", "pnpm-lock.yaml")
print(json.dumps(dict(source=git("rev-parse", "HEAD").decode().strip(), actual_base_rejects_candidate=True, synthetic_parser_positive=1, negative_rejections=8, original_files_unchanged=4, original_runtime_cases="27 NOT_RUN", runtime="NOT_RUN", claim="Offline parser/source probes only; owner base adoption still required")))

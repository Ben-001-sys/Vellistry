"""Owned, loopback-only disposable PG17 acceptance; never accepts external DSNs."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import secrets
import subprocess
import sys
import time
import uuid

ROOT = Path(__file__).resolve().parents[3]
IMAGE = "postgres@sha256:eee6c6e1b0894fa4fe0075eb054af9fd1cf39a35321c2d4110626cfe506411fb"
SQL = ["tests/workspace/persistence/sql/00_fixture_auth.sql", "supabase/migrations/20261009000000_initial_author_books.sql", "supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql", *["tests/workspace/persistence/sql/" + name for name in ["10_workspace_schema.sql", "20_workspace_roles.sql", "30_workspace_functions.sql"]]]

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--disposable", action="store_true", required=True)
    parser.add_argument("--cases", required=True)
    args = parser.parse_args()
    if args.cases != "docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json":
        parser.error("Only the pinned acceptance source is permitted")
    evidence = ROOT / "docs/reports/evidence/VEL-TASK-0052"
    evidence.mkdir(parents=True, exist_ok=True)
    run_id = uuid.uuid4().hex
    name = "vel-imp002-" + run_id
    volume = name + "-data"
    label = "vellistry.disposable.owner"
    env = {k:v for k,v in os.environ.items() if not any(s in k.upper() for s in ["SUPABASE", "PGPASSWORD", "DATABASE_URL", "PGHOST", "PGUSER", "PGPORT", "SERVICE_ROLE"])}
    password = secrets.token_hex(24)
    fixture_password = secrets.token_hex(24)
    env["POSTGRES_PASSWORD"] = password
    commands = []
    def command(argv, data=None, check=True, timeout=120):
        started = time.monotonic()
        r = subprocess.run(argv, input=data, capture_output=True, cwd=ROOT, env=env, timeout=timeout)
        commands.append(dict(argv=argv, exit_code=r.returncode, seconds=round(time.monotonic()-started,3), stderr=r.stderr.decode(errors="replace").replace(password,"[REDACTED]").replace(fixture_password,"[REDACTED]")[-1200:] if r.returncode else ""))
        if check and r.returncode:
            # Never include SQL strings/passwords in diagnostic reports.
            raise RuntimeError("Disposable command failed: " + argv[0])
        return r.stdout
    def admin(sql, database="workspace"):
        return command(["docker","exec","-i",name,"psql","-X","-v","ON_ERROR_STOP=1","-U","postgres","-d",database,"-At"],sql.encode())
    cases = json.loads((ROOT / args.cases).read_text())["cases"]
    extensions = json.loads((ROOT / "docs/agent-workflow/proposals/VEL-IMP002-PERSISTENCE-EXECUTION-PACKET.json").read_text())["extensions"]
    implementation = ["apps/api/src/modules/workspace/"+p for p in ["workspace-contract.ts","workspace-principal.ts","workspace-persistence-port.ts","workspace.service.ts","workspace-contract.spec.ts"]]+["tests/workspace/persistence/"+p for p in ["workspace-pg-adapter.ts","workspace-pg17.integration.mjs","run_pg17.py"]]
    result = dict(run_id=run_id, source_commit=subprocess.check_output(["git","rev-parse","HEAD"],cwd=ROOT,text=True).strip(), image=IMAGE, checkout_sha256={p:hashlib.sha256((ROOT/p).read_bytes()).hexdigest() for p in SQL+[args.cases]+implementation}, applied_sql_sha256={p:hashlib.sha256((ROOT/p).read_text(encoding="utf-8").encode()).hexdigest() for p in SQL}, commands=commands, cases=[dict(id=c["id"],status="BLOCKED",reason="runtime not completed") for c in cases+extensions], cleanup={})
    exit_code = 1
    try:
        command(["docker","version","--format","{{.Server.Version}}"],timeout=30)
        command(["docker","volume","create","--label",label+"="+run_id,volume])
        command(["docker","run","-d","--name",name,"--label",label+"="+run_id,"-e","POSTGRES_PASSWORD","-e","POSTGRES_DB=workspace","-p","127.0.0.1::5432","-v",volume+":/var/lib/postgresql/data",IMAGE])
        deadline = time.monotonic()+90
        while time.monotonic()<deadline:
            r=subprocess.run(["docker","exec",name,"pg_isready","-U","postgres","-d","workspace"],capture_output=True)
            if r.returncode==0:break
            time.sleep(0.4)
        else:raise RuntimeError("Owned PostgreSQL startup timeout")
        info=json.loads(command(["docker","inspect",name]))[0]
        ports=info["NetworkSettings"]["Ports"]["5432/tcp"]
        if len(ports)!=1 or ports[0]["HostIp"]!="127.0.0.1":raise RuntimeError("Non-loopback binding rejected")
        result["postgres_version"]=admin("select version()").decode().strip()
        if not result["postgres_version"].startswith("PostgreSQL 17."):raise RuntimeError("Wrong PostgreSQL major")
        result["image_id"]=info["Image"]
        for path in SQL:
            admin((ROOT/path).read_text(encoding="utf-8"))
            commands[-1]["sql_source"] = path
        # Only generated hexadecimal credentials enter this stdin; never command args/logs.
        admin("create role workspace_test login password '"+fixture_password+"'; grant vellistry_workspace_gateway to workspace_test; create role workspace_author_test login password '"+fixture_password+"'; grant authenticated to workspace_author_test; create role workspace_anon_test login password '"+fixture_password+"'; grant anon to workspace_anon_test;")
        admin("alter table fixture_probe.gateway owner to workspace_test; alter table fixture_probe.author owner to workspace_author_test; alter table fixture_probe.anonymous owner to workspace_anon_test; grant usage on schema fixture_probe to workspace_test,workspace_author_test,workspace_anon_test;")
        env.update(VEL_PG_HOST="127.0.0.1",VEL_PG_PORT=ports[0]["HostPort"],VEL_FIXTURE_PASSWORD=fixture_password,VEL_ADMIN_PASSWORD=password,VEL_PG_CONTAINER=name,VEL_PG_OWNER=run_id,VEL_CASE_RESULT=str(evidence/(run_id+"-cases.json")))
        cmd=["corepack.cmd" if os.name=="nt" else "corepack","pnpm","--filter","@vellistry/api","exec","tsx",str(ROOT/"tests/workspace/persistence/workspace-pg17.integration.mjs")]
        # tsx runs in API cwd. The test adapter resolves pg from the frozen API installation.
        r=subprocess.run(cmd,capture_output=True,cwd=ROOT,env=env,timeout=600)
        commands.append(dict(argv=cmd,exit_code=r.returncode))
        case_file=Path(env["VEL_CASE_RESULT"])
        if case_file.exists():result["cases"]=json.loads(case_file.read_text())
        else:result["harness_error"]=(r.stderr or r.stdout).decode(errors="replace").replace(password,"[REDACTED]").replace(fixture_password,"[REDACTED]")[-2500:]
        expected={c["id"] for c in cases+extensions}
        assert {c["id"] for c in result["cases"]}==expected and len(result["cases"])==32
        exit_code=0 if r.returncode==0 and all(c["status"]=="PASS" for c in result["cases"]) else 1
    except (RuntimeError,AssertionError,subprocess.SubprocessError,OSError) as e:
        result["runtime_error"]=str(e).replace(password,"[REDACTED]").replace(fixture_password,"[REDACTED]")[:300]
    finally:
        for kind,resource in [("container",name),("volume",volume)]:
            try:
                inspect=subprocess.run(["docker",kind,"inspect",resource],capture_output=True)
            except OSError:
                result["cleanup"][kind]="BLOCKED: Docker unavailable; absence unconfirmed";exit_code=1;continue
            if inspect.returncode==0:
                item=json.loads(inspect.stdout)[0]
                labels=item["Config"].get("Labels",{}) if kind=="container" else item.get("Labels",{})
                if labels.get(label)!=run_id:
                    result["cleanup"][kind]="REFUSED: owner label mismatch";exit_code=1;continue
                argv=["docker","rm","-f","-v",resource] if kind=="container" else ["docker","volume","rm",resource]
                removed=subprocess.run(argv,capture_output=True)
                gone=subprocess.run(["docker",kind,"inspect",resource],capture_output=True).returncode!=0
                result["cleanup"][kind]=dict(exit_code=removed.returncode,verified_absent=gone)
                if removed.returncode or not gone:exit_code=1
            else:result["cleanup"][kind]="not created/already absent"
        result["exit_code"]=exit_code
        (evidence/(run_id+"-runtime.json")).write_text(json.dumps(result,indent=2),encoding="utf-8")
        print(json.dumps(dict(run_id=run_id,exit_code=exit_code,passed=sum(c["status"]=="PASS" for c in result["cases"]),cases=len(result["cases"]),cleanup=result["cleanup"])))
    return exit_code

if __name__ == "__main__":
    raise SystemExit(main())

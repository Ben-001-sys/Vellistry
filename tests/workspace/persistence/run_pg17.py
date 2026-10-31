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
SQL = ["tests/workspace/persistence/sql/00_fixture_auth.sql", "supabase/migrations/20261009000000_initial_author_books.sql", "supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql", *["tests/workspace/persistence/sql/" + name for name in ["10_workspace_schema.sql", "20_workspace_roles.sql", "30_workspace_functions.sql"]]] + ["tests/editor/persistence/sql/10_manuscript_contract.sql"]

def local_engine(endpoint):
    return isinstance(endpoint,str) and endpoint.startswith(("npipe://", "unix:///"))

def loopback_binding(ports):
    return isinstance(ports,list) and len(ports)==1 and ports[0].get("HostIp")=="127.0.0.1" and str(ports[0].get("HostPort", "")).isdigit() and 0<int(ports[0]["HostPort"])<=65535

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
    env = {k:v for k,v in os.environ.items() if not k.upper().startswith(("PG", "DOCKER_", "VEL_")) and not any(s in k.upper() for s in ["SUPABASE", "DATABASE", "TOKEN", "SECRET", "PASSWORD", "CREDENTIAL", "SERVICE_ROLE"])}
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
    result = dict(run_id=run_id, source_commit=subprocess.check_output(["git","rev-parse","HEAD"],cwd=ROOT,text=True).strip(), image=IMAGE, checkout_sha256={p:hashlib.sha256((ROOT/p).read_bytes()).hexdigest() for p in SQL+[args.cases]+implementation+["tests/editor/persistence/manuscript-pg17.integration.mjs","apps/api/src/modules/workspace/manuscript-contract.ts","apps/api/src/modules/workspace/manuscript.service.ts","tests/editor/persistence/manuscript-http.integration.mjs"]}, applied_sql_sha256={p:hashlib.sha256((ROOT/p).read_text(encoding="utf-8").encode()).hexdigest() for p in SQL}, commands=commands, cases=[dict(id=c["id"],status="BLOCKED",reason="runtime not completed") for c in cases+extensions], cleanup={})
    exit_code = 1
    local_validated = False
    try:
        assert local_engine("unix:///var/run/docker.sock") and local_engine("npipe:////./pipe/dockerDesktopLinuxEngine")
        assert all(not local_engine(e) for e in ["ssh://remote", "tcp://127.0.0.1:2375", "https://remote", None])
        assert loopback_binding([dict(HostIp="127.0.0.1",HostPort="54321")])
        assert all(not loopback_binding(b) for b in [[],[dict(HostIp="0.0.0.0",HostPort="5432")],[dict(HostIp="::",HostPort="5432")],[dict(HostIp="127.0.0.1",HostPort="0")]])
        result["guard_probes"] = dict(positive=3,negative=8)
        endpoint=json.loads(command(["docker","context","inspect","--format","{{json .Endpoints.docker.Host}}"],timeout=30))
        if not local_engine(endpoint):raise RuntimeError("Remote Docker endpoint rejected")
        result["docker_endpoint"]=endpoint
        result["inherited_docker_overrides_removed"]=dict(host_present="DOCKER_HOST" in os.environ, context_present="DOCKER_CONTEXT" in os.environ)
        # Pin the validated local endpoint, even if the user's default context changes.
        env["DOCKER_HOST"]=endpoint
        local_validated = True
        result["checkout_sha256"].update({p:hashlib.sha256((ROOT/p).read_bytes()).hexdigest() for p in ["apps/web/src/lib/editor/manuscript-composition.ts","apps/web/src/lib/editor/manuscript-recovery.ts","apps/web/src/lib/editor/manuscript-session.ts"]})
        command(["docker","version","--format","{{.Server.Version}}"],timeout=30)
        command(["docker","volume","create","--label",label+"="+run_id,volume])
        command(["docker","run","-d","--name",name,"--label",label+"="+run_id,"-e","POSTGRES_PASSWORD","-e","POSTGRES_DB=workspace","-p","127.0.0.1::5432","-v",volume+":/var/lib/postgresql/data",IMAGE])
        deadline = time.monotonic()+90
        while time.monotonic()<deadline:
            # The official image briefly starts a Unix-socket-only init server.
            # TCP readiness avoids racing its shutdown before the real server.
            r=subprocess.run(["docker","exec",name,"pg_isready","-h","127.0.0.1","-U","postgres","-d","workspace"],capture_output=True,env=env)
            if r.returncode==0:break
            time.sleep(0.4)
        else:raise RuntimeError("Owned PostgreSQL startup timeout")
        info=json.loads(command(["docker","inspect",name]))[0]
        ports=info["NetworkSettings"]["Ports"]["5432/tcp"]
        if not loopback_binding(ports):raise RuntimeError("Non-loopback binding rejected")
        result["postgres_version"]=admin("select version()").decode().strip()
        if not result["postgres_version"].startswith("PostgreSQL 17."):raise RuntimeError("Wrong PostgreSQL major")
        result["image_id"]=info["Image"]
        for path in SQL:
            admin((ROOT/path).read_text(encoding="utf-8"))
            commands[-1]["sql_source"] = path
        # Only generated hexadecimal credentials enter this stdin; never command args/logs.
        admin("create role workspace_test login password '"+fixture_password+"'; grant vellistry_workspace_gateway,vellistry_manuscript_gateway to workspace_test; create role workspace_author_test login password '"+fixture_password+"'; grant authenticated to workspace_author_test; create role workspace_anon_test login password '"+fixture_password+"'; grant anon to workspace_anon_test;")
        admin("alter table fixture_probe.gateway owner to workspace_test; alter table fixture_probe.author owner to workspace_author_test; alter table fixture_probe.anonymous owner to workspace_anon_test; grant usage on schema fixture_probe to workspace_test,workspace_author_test,workspace_anon_test;")
        env.update(VEL_PG_HOST="127.0.0.1",VEL_PG_PORT=ports[0]["HostPort"],VEL_FIXTURE_PASSWORD=fixture_password,VEL_ADMIN_PASSWORD=password,VEL_PG_CONTAINER=name,VEL_PG_OWNER=run_id,VEL_CASE_RESULT=str(evidence/(run_id+"-cases.json")))
        manuscript_cmd=["corepack.cmd" if os.name=="nt" else "corepack","pnpm","--filter","@vellistry/api","exec","tsx",str(ROOT/"tests/editor/persistence/manuscript-pg17.integration.mjs")]
        manuscript_run=subprocess.run(manuscript_cmd,capture_output=True,cwd=ROOT,env=env,timeout=180)
        commands.append(dict(argv=manuscript_cmd,exit_code=manuscript_run.returncode))
        result["manuscript_output"]=(manuscript_run.stdout+manuscript_run.stderr).decode(errors="replace").replace(password,"[REDACTED]").replace(fixture_password,"[REDACTED]")[-12000:]
        if manuscript_run.returncode==0:
            command(["docker","restart",name])
            restart_deadline=time.monotonic()+60
            while time.monotonic()<restart_deadline:
                probe=subprocess.run(["docker","exec",name,"pg_isready","-h","127.0.0.1","-U","postgres","-d","workspace"],capture_output=True,env=env)
                if probe.returncode==0:break
                time.sleep(0.4)
            else:raise RuntimeError("Owned manuscript restart timeout")
            rebound=json.loads(command(["docker","inspect",name]))[0]["NetworkSettings"]["Ports"]["5432/tcp"]
            if not loopback_binding(rebound):raise RuntimeError("Restart non-loopback rejected")
            env["VEL_PG_PORT"]=rebound[0]["HostPort"]
            reopened=subprocess.run(manuscript_cmd+["--verify-restart"],capture_output=True,cwd=ROOT,env=env,timeout=60)
            result["manuscript_restart"]=dict(exit_code=reopened.returncode,output=(reopened.stdout+reopened.stderr).decode(errors="replace").replace(password,"[REDACTED]").replace(fixture_password,"[REDACTED]"))
            if reopened.returncode:raise RuntimeError("Manuscript restart verification failed")
        http_cmd=["corepack.cmd" if os.name=="nt" else "corepack","pnpm","--filter","@vellistry/api","exec","tsx",str(ROOT/"tests/editor/persistence/manuscript-http.integration.mjs")]
        http_run=subprocess.run(http_cmd,capture_output=True,cwd=ROOT,env=env,timeout=180)
        commands.append(dict(argv=http_cmd,exit_code=http_run.returncode))
        result["manuscript_http"]=dict(exit_code=http_run.returncode,output=(http_run.stdout+http_run.stderr).decode(errors="replace").replace(password,"[REDACTED]").replace(fixture_password,"[REDACTED]")[-16000:])
        if http_run.returncode==0:
            http_records=[json.loads(line) for line in http_run.stdout.decode().splitlines() if line.startswith('{')]
            if len([r for r in http_records if r.get("id") and r.get("status")=="PASS"])!=8 or not any(r.get("http_cleanup")=="PASS" and r.get("listening") is False and r.get("open_sockets")==0 for r in http_records):
                raise RuntimeError("Incomplete HTTP interruption/cleanup proof")
        cmd=["corepack.cmd" if os.name=="nt" else "corepack","pnpm","--filter","@vellistry/api","exec","tsx",str(ROOT/"tests/workspace/persistence/workspace-pg17.integration.mjs")]
        # tsx runs in API cwd. The test adapter resolves pg from the frozen API installation.
        r=subprocess.run(cmd,capture_output=True,cwd=ROOT,env=env,timeout=600)
        commands.append(dict(argv=cmd,exit_code=r.returncode))
        case_file=Path(env["VEL_CASE_RESULT"])
        if case_file.exists():result["cases"]=json.loads(case_file.read_text())
        else:result["harness_error"]=(r.stderr or r.stdout).decode(errors="replace").replace(password,"[REDACTED]").replace(fixture_password,"[REDACTED]")[-2500:]
        expected={c["id"] for c in cases+extensions}
        assert {c["id"] for c in result["cases"]}==expected and len(result["cases"])==32
        exit_code=0 if http_run.returncode==0 and manuscript_run.returncode==0 and r.returncode==0 and all(c["status"]=="PASS" for c in result["cases"]) else 1
    except (RuntimeError,AssertionError,subprocess.SubprocessError,OSError) as e:
        result["runtime_error"]=str(e).replace(password,"[REDACTED]").replace(fixture_password,"[REDACTED]")[:300]
    finally:
        for kind,resource in [("container",name),("volume",volume)]:
            if not local_validated:
                # Validation precedes every creation command. Do not even inspect
                # an unvalidated daemon in the rejected-startup cleanup path.
                result["cleanup"][kind]=dict(created_by_run=False,reason="No creation dispatched: local daemon not validated")
                continue
            try:
                inspect=subprocess.run(["docker",kind,"inspect",resource],capture_output=True,env=env)
            except OSError:
                result["cleanup"][kind]="BLOCKED: Docker unavailable; absence unconfirmed";exit_code=1;continue
            if inspect.returncode==0:
                item=json.loads(inspect.stdout)[0]
                labels=item["Config"].get("Labels",{}) if kind=="container" else item.get("Labels",{})
                if labels.get(label)!=run_id:
                    result["cleanup"][kind]="REFUSED: owner label mismatch";exit_code=1;continue
                argv=["docker","rm","-f","-v",resource] if kind=="container" else ["docker","volume","rm",resource]
                removed=subprocess.run(argv,capture_output=True,env=env)
                listing=subprocess.run(["docker",kind,"ls", "--all", "--format", "{{.Names}}"] if kind=="container" else ["docker","volume","ls","--format","{{.Name}}"],capture_output=True,text=True,env=env)
                gone=listing.returncode==0 and resource not in listing.stdout.splitlines()
                result["cleanup"][kind]=dict(exit_code=removed.returncode,verified_absent=gone)
                if removed.returncode or not gone:exit_code=1
            else:
                listing=subprocess.run(["docker",kind,"ls", "--all", "--format", "{{.Names}}"] if kind=="container" else ["docker","volume","ls","--format","{{.Name}}"],capture_output=True,text=True,env=env)
                gone=listing.returncode==0 and resource not in listing.stdout.splitlines()
                result["cleanup"][kind]=dict(created=False,verified_absent=gone)
                if not gone:exit_code=1
        result["exit_code"]=exit_code
        (evidence/(run_id+"-runtime.json")).write_text(json.dumps(result,indent=2),encoding="utf-8")
        print(json.dumps(dict(run_id=run_id,exit_code=exit_code,passed=sum(c["status"]=="PASS" for c in result["cases"]),cases=len(result["cases"]),cleanup=result["cleanup"])))
    return exit_code

if __name__ == "__main__":
    raise SystemExit(main())

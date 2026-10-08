#!/usr/bin/env python3
"""Vellistry Stage 3: produce and validate small, immutable agent handoffs.

Usage:
    python scripts/agent_workflow.py pack docs/agent-workflow/tasks/VEL-TASK-0001.yaml
    python scripts/agent_workflow.py validate
"""
from __future__ import annotations

import argparse
import re
import subprocess
import sys
from datetime import date, datetime, timezone
from pathlib import Path, PurePosixPath

import yaml

ROOT = Path(__file__).resolve().parents[1]
AREA = ROOT / "docs" / "agent-workflow"
TASKS = AREA / "tasks"
PACKS = AREA / "context-packs"
BUNDLES = AREA / "execution-bundles"
MAX_BYTES_PER_SOURCE = 35_000
MAX_TOTAL_BYTES = 90_000
TASK_STATUSES = {"proposed", "ready", "in-progress", "verification", "completed", "blocked", "cancelled"}
BUNDLE_STATUSES = {"proposed-for-review", "changes-requested", "accepted", "rejected"}
PACK_STATUSES = {"prepared", "superseded"}
TASK_KEYS = {
    "id", "title", "type", "status", "created_at", "updated_at", "owner",
    "context_pack_id", "objective", "in_scope", "out_of_scope", "inputs",
    "source_gaps", "deliverables", "acceptance_criteria", "allowed_actions",
    "approval_required_for",
}
PACK_KEYS = {"id", "title", "type", "status", "created_at", "version", "task_id", "base_commit", "task_blob_sha", "inputs", "source_gaps", "prepared_by"}
BUNDLE_KEYS = {"id", "title", "type", "status", "created_at", "version", "task_id", "context_pack_id", "base_commit", "agent", "sources", "evidence", "review"}


def git(*args: str) -> bytes:
    run = subprocess.run(["git", "-C", str(ROOT), *args], capture_output=True, check=False)
    if run.returncode:
        raise ValueError(f"Git operation failed for {args[0]}: {run.stderr.decode(errors='replace').strip()}")
    return run.stdout


def read_yaml(path: Path):
    data = yaml.safe_load(path.read_text(encoding="utf-8"))
    if not isinstance(data, dict):
        raise ValueError(f"{path}: expected YAML object")
    return data


def frontmatter(path: Path):
    raw = path.read_text(encoding="utf-8")
    m = re.match(r"\A---\n(.*?)\n---\n", raw, re.DOTALL)
    if not m:
        raise ValueError(f"{path}: missing YAML front matter")
    data = yaml.safe_load(m.group(1))
    if not isinstance(data, dict):
        raise ValueError(f"{path}: invalid metadata mapping")
    return data, raw[m.end():]


def require_fields(data: dict, fields: set[str], path: Path):
    missing = sorted(fields - set(data))
    if missing:
        raise ValueError(f"{path}: missing required fields {', '.join(missing)}")


def safe_path(name: str) -> str:
    if not isinstance(name, str) or not name or "\\" in name:
        raise ValueError(f"unsafe repository path: {name!r}")
    p = PurePosixPath(name)
    if p.is_absolute() or ".." in p.parts or ".git" in p.parts or str(p) != name:
        raise ValueError(f"unsafe repository path: {name!r}")
    if any(part.startswith(".env") or part.lower() in {"secrets", "credentials"} for part in p.parts):
        raise ValueError(f"excluded secret-like repository path: {name!r}")
    return name


def check_task(path: Path) -> dict:
    data = read_yaml(path)
    require_fields(data, TASK_KEYS, path)
    if not re.fullmatch(r"VEL-TASK-\d{4}", str(data["id"])):
        raise ValueError(f"{path}: invalid task ID")
    if not re.fullmatch(r"VEL-CP-\d{4}", str(data["context_pack_id"])):
        raise ValueError(f"{path}: invalid ContextPack ID")
    if data["type"] not in {"research-task", "implementation-task"} or data["status"] not in TASK_STATUSES:
        raise ValueError(f"{path}: invalid type/status")
    for key in ("inputs", "source_gaps", "deliverables", "acceptance_criteria", "allowed_actions", "approval_required_for"):
        if not isinstance(data[key], list):
            raise ValueError(f"{path}: {key} must be a list")
    if not data["inputs"] or not data["objective"] or not data["acceptance_criteria"]:
        raise ValueError(f"{path}: need inputs, objective, and acceptance criteria")
    if path.stem != data["id"]:
        raise ValueError(f"{path}: filename must match task ID")
    paths = set()
    for item in data["inputs"]:
        if not isinstance(item, dict) or not item.get("role"):
            raise ValueError(f"{path}: input must contain path and role")
        source = safe_path(item.get("path"))
        if source in paths:
            raise ValueError(f"{path}: duplicate input path {source}")
        paths.add(source)
    for gap in data["source_gaps"]:
        if not isinstance(gap, dict) or not gap.get("id") or not gap.get("limitation"):
            raise ValueError(f"{path}: source gaps require id and limitation")
    return data


def source_snapshot(commit: str, item: dict) -> tuple[dict, str]:
    path = safe_path(item["path"])
    blob_sha = git("rev-parse", f"{commit}:{path}").decode().strip()
    raw = git("show", f"{commit}:{path}")
    if len(raw) > MAX_BYTES_PER_SOURCE:
        raise ValueError(f"source {path} exceeds {MAX_BYTES_PER_SOURCE} bytes; split task context")
    try:
        content = raw.decode("utf-8")
    except UnicodeDecodeError as exc:
        raise ValueError(f"source {path} is not UTF-8") from exc
    metadata = {}
    match = re.match(r"\A---\n(.*?)\n---\n", content, re.DOTALL)
    if match:
        metadata = yaml.safe_load(match.group(1)) or {}
    state = metadata.get("status", "unrecorded") if isinstance(metadata, dict) else "unrecorded"
    info = {"path": path, "role": item["role"], "git_blob_sha": blob_sha, "source_status": str(state)}
    return info, content


def snapshot_block(info: dict, content: str) -> str:
    # The immutable blob SHA pins the complete raw bytes; this rendering is readable.
    # A long tilde fence avoids collisions with ordinary triple-backtick code blocks.
    return f"### `{info['path']}` @ `{info['git_blob_sha']}`\n\n~~~~~~markdown\n{content.rstrip(chr(10))}\n~~~~~~\n"


def render_task_contract(task: dict) -> str:
    """Deterministic instructions; any changed scope/permissions must invalidate the pack."""
    lines = [
        "## Objective",
        str(task["objective"]).strip(), "",
        "## Scope",
        "**In:** " + "; ".join(task["in_scope"]),
        "**Out:** " + "; ".join(task["out_of_scope"]), "",
        "## Evidence and authority constraints",
        "The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.",
        "",
        "**Known source gaps:**",
        *(f"- {g['id']}: {g['limitation']}" for g in task["source_gaps"]),
        "",
        "## Permissions and acceptance",
        "**Allowed:** " + ", ".join(task["allowed_actions"]),
        "**Owner approval required:** " + "; ".join(task["approval_required_for"]),
        "**Acceptance criteria:**",
        *(f"- {a}" for a in task["acceptance_criteria"]),
        "",
        "## Deliverables",
        *(f"- {a}" for a in task["deliverables"]),
        "", "",
    ]
    return "\n".join(lines)


def render_pack(task: dict, commit: str, prepared_by: str = "agent_workflow.py") -> str:
    sources = []
    blocks = []
    total = 0
    for item in task["inputs"]:
        info, content = source_snapshot(commit, item)
        total += len(content.encode("utf-8"))
        if total > MAX_TOTAL_BYTES:
            raise ValueError(f"selected sources exceed {MAX_TOTAL_BYTES} total bytes")
        sources.append(info)
        blocks.append(snapshot_block(info, content))
    header = {
        "id": task["context_pack_id"],
        "title": f"Context for {task['id']}: {task['title']}",
        "type": "context-pack",
        "status": "prepared",
        "created_at": datetime.now(timezone.utc).date().isoformat(),
        "version": "0.1.0",
        "task_id": task["id"],
        "base_commit": commit,
        "task_blob_sha": git("rev-parse", f"{commit}:docs/agent-workflow/tasks/{task['id']}.yaml").decode().strip(),
        "inputs": sources,
        "source_gaps": task["source_gaps"],
        "prepared_by": prepared_by,
    }
    instructions = [
        f"# {header['id']} — {task['title']}", "",
        render_task_contract(task).rstrip("\n"),
        "",
        "## Pinned source snapshots",
        f"Git commit: `{commit}`. Read source statuses independently from task intent.",
        "",
        *blocks,
        "## Execution reporting",
        "Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,",
        "tests actually performed, changes, evidence gaps, and pending owner approval.",
        "",
    ]
    return "---\n" + yaml.safe_dump(header, sort_keys=False, allow_unicode=True) + "---\n\n" + "\n".join(instructions)


def check_pack(path: Path, task_by_id: dict[str, dict]):
    meta, body = frontmatter(path)
    require_fields(meta, PACK_KEYS, path)
    if meta["type"] != "context-pack" or meta["status"] not in PACK_STATUSES:
        raise ValueError(f"{path}: invalid type/status")
    if path.stem != meta["id"] or not re.fullmatch(r"VEL-CP-\d{4}", str(meta["id"])):
        raise ValueError(f"{path}: invalid context pack ID/name")
    live_task = task_by_id.get(meta["task_id"])
    if not live_task or live_task["context_pack_id"] != meta["id"]:
        raise ValueError(f"{path}: task mapping mismatch")
    # The task may move from ready to verification later; read its historical
    # bytes at this pack's pinned commit instead of trusting the current YAML.
    if not re.fullmatch(r"[0-9a-f]{40}", str(meta.get("task_blob_sha", ""))):
        raise ValueError(f"{path}: invalid task blob SHA")
    task_path = f"docs/agent-workflow/tasks/{meta['task_id']}.yaml"
    actual_task_blob = git("rev-parse", f"{meta['base_commit']}:{task_path}").decode().strip()
    if actual_task_blob != meta["task_blob_sha"]:
        raise ValueError(f"{path}: task blob does not belong to pinned commit")
    task = yaml.safe_load(git("show", f"{meta['base_commit']}:{task_path}"))
    if not isinstance(task, dict) or task.get("context_pack_id") != meta["id"]:
        raise ValueError(f"{path}: pinned task relationship mismatch")
    first = body.find("## Objective\n")
    last = body.find("## Pinned source snapshots\n")
    if first < 0 or last <= first or body[first:last] != render_task_contract(task):
        raise ValueError(f"{path}: task contract differs from pinned objective/scope/permissions/approval/criteria/deliverables")
    if not re.fullmatch(r"[0-9a-f]{40}", str(meta["base_commit"])):
        raise ValueError(f"{path}: invalid pinned commit")
    if not isinstance(meta["inputs"], list) or len(meta["inputs"]) != len(task["inputs"]):
        raise ValueError(f"{path}: missing input snapshots")
    seen = set()
    for source in meta["inputs"]:
        if not isinstance(source, dict):
            raise ValueError(f"{path}: invalid source item")
        name = safe_path(source.get("path"))
        blob = source.get("git_blob_sha")
        if name in seen or not re.fullmatch(r"[0-9a-f]{40}", str(blob)):
            raise ValueError(f"{path}: duplicate/invalid source blob")
        seen.add(name)
        if git("rev-parse", f"{meta['base_commit']}:{name}").decode().strip() != blob:
            raise ValueError(f"{path}: source blob does not belong to pinned commit: {name}")
        raw = git("show", f"{meta['base_commit']}:{name}").decode("utf-8")
        match = re.match(r"\A---\n(.*?)\n---\n", raw, re.DOTALL)
        doc_meta = yaml.safe_load(match.group(1)) if match else {}
        expected_status = str((doc_meta or {}).get("status", "unrecorded"))
        declared = next(item for item in task["inputs"] if item["path"] == name)
        if source.get("role") != declared["role"] or source.get("source_status") != expected_status:
            raise ValueError(f"{path}: declared source authority/status mismatch for {name}")
        if snapshot_block(source, raw).strip() not in body:
            raise ValueError(f"{path}: missing or modified embedded snapshot {name}")
    if seen != {s["path"] for s in task["inputs"]}:
        raise ValueError(f"{path}: context input set differs from task")
    if meta["source_gaps"] != task["source_gaps"]:
        raise ValueError(f"{path}: known gaps changed unexpectedly")


def check_bundle(path: Path, task_by_id: dict[str, dict], pack_by_id: dict[str, dict]):
    meta, body = frontmatter(path)
    require_fields(meta, BUNDLE_KEYS, path)
    if meta["type"] != "execution-bundle" or meta["status"] not in BUNDLE_STATUSES:
        raise ValueError(f"{path}: invalid bundle type/status")
    if path.stem != meta["id"] or not re.fullmatch(r"VEL-EB-\d{4}", str(meta["id"])):
        raise ValueError(f"{path}: invalid bundle ID/name")
    task, pack = task_by_id.get(meta["task_id"]), pack_by_id.get(meta["context_pack_id"])
    if not task or not pack or pack["task_id"] != task["id"] or pack["base_commit"] != meta["base_commit"]:
        raise ValueError(f"{path}: task/context/base commit mismatch")
    if not isinstance(meta["review"], dict) or meta["review"].get("status") not in {"pending", "approved", "changes-requested", "rejected"}:
        raise ValueError(f"{path}: invalid review object")
    if meta["review"]["status"] == "approved" and not meta["review"].get("approved_by"):
        raise ValueError(f"{path}: cannot claim approval without approver")
    if meta["status"] == "accepted" and meta["review"]["status"] != "approved":
        raise ValueError(f"{path}: accepted bundle without approved disposition")
    if meta["review"]["status"] == "approved":
        # Structural checks are NOT authentication. Owner must verify the
        # linked PR/comment outside this schema validator.
        if meta["review"].get("approved_by") != task["owner"]:
            raise ValueError(f"{path}: reviewer does not match task owner")
        evidence = meta["review"].get("evidence")
        if not isinstance(evidence, str) or not evidence.startswith("https://github.com/"):
            raise ValueError(f"{path}: approved bundle requires linked owner evidence")
    if not isinstance(meta["sources"], list) or any(s not in {x["path"] for x in pack["inputs"]} for s in meta["sources"]):
        raise ValueError(f"{path}: bundle sources must be pinned ContextPack inputs")
    for heading in ("## Work performed", "## Facts and evidence", "## Interpretations", "## Proposals", "## Tests", "## Artifacts", "## Risks", "## Reviewer disposition"):
        if heading not in body:
            raise ValueError(f"{path}: missing section {heading}")


def validate_all():
    tasks = {}
    for path in sorted(TASKS.glob("*.yaml")):
        task = check_task(path)
        if task["id"] in tasks:
            raise ValueError(f"duplicate task ID {task['id']}")
        tasks[task["id"]] = task
    packs = {}
    for path in sorted(PACKS.glob("*.md")):
        meta, _ = frontmatter(path)
        check_pack(path, tasks)
        if meta["id"] in packs:
            raise ValueError(f"duplicate ContextPack ID {meta['id']}")
        packs[meta["id"]] = meta
    count = 0
    for path in sorted(BUNDLES.glob("*.md")):
        check_bundle(path, tasks, packs)
        count += 1
    if not tasks or not packs or not count:
        raise ValueError("v0.1 pilot requires a task, ContextPack and ExecutionBundle")
    print(f"PASS: {len(tasks)} task(s), {len(packs)} ContextPack(s), {count} ExecutionBundle(s) validated")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="command", required=True)
    prep = sub.add_parser("pack", help="Create a pinned ContextPack from a task file")
    prep.add_argument("task", type=Path)
    prep.add_argument("--out", type=Path)
    sub.add_parser("validate", help="Check all agent handoff artifacts")
    args = parser.parse_args()
    try:
        if args.command == "pack":
            task_file = args.task.resolve()
            if task_file.parent != TASKS or not task_file.is_file():
                raise ValueError("task must be a YAML file directly inside docs/agent-workflow/tasks")
            task = check_task(task_file)
            dest = (args.out or (PACKS / (task["context_pack_id"] + ".md"))).resolve()
            if dest.parent != PACKS:
                raise ValueError("ContextPack output must be under docs/agent-workflow/context-packs")
            if dest.exists():
                raise ValueError("will not overwrite an existing pinned ContextPack")
            contents = render_pack(task, git("rev-parse", "HEAD").decode().strip())
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_text(contents, encoding="utf-8")
            print(f"Created {dest.relative_to(ROOT)}")
        else:
            validate_all()
    except (ValueError, OSError, UnicodeDecodeError, yaml.YAMLError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())

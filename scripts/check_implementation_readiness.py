#!/usr/bin/env python3
"""Validate the proposed Vellistry implementation-preparation dependency DAG.

This checks repository configuration, not runtime security or owner approval.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
DAG = ROOT / "docs/agent-workflow/IMPLEMENTATION-TASK-DEPENDENCIES.yaml"
REQUIRED_GATES = {"G_DESIGN", "G_CODE", "G_PRIVATE_PILOT", "G_RELEASE"}
REQUIRED_PHASES = {"preparation", "design", "implementation", "validation", "release"}
TASK_RE = re.compile(r"VEL-(PREP|DES|IMP|VAL|PILOT|RELEASE)-\d{3}\Z")


def validate(data: dict, root: Path = ROOT) -> list[str]:
    if not isinstance(data, dict) or data.get("schema_version") != 1:
        raise ValueError("expected supported DAG schema_version 1")
    if data.get("status") != "proposed-owner-review":
        raise ValueError("preparation DAG must not claim owner acceptance")
    if not isinstance(data.get("authority"), dict):
        raise ValueError("authority classifications required")
    for kind in ("accepted", "bounded_design_entry", "proposed_contracts"):
        paths = data["authority"].get(kind)
        if not isinstance(paths, list) or not paths:
            raise ValueError(f"{kind}: missing authority references")
        for rel in paths:
            if not isinstance(rel, str) or rel.startswith("/") or ".." in Path(rel).parts:
                raise ValueError(f"unsafe authority path: {rel}")
            if not (root / rel).is_file():
                raise ValueError(f"authority source absent: {rel}")
    gates = data.get("gates")
    if not isinstance(gates, list) or len(gates) != len(REQUIRED_GATES):
        raise ValueError("must enumerate four real permission gates")
    gate_ids = {g.get("id") for g in gates if isinstance(g, dict)}
    if gate_ids != REQUIRED_GATES:
        raise ValueError("missing or duplicate permission gate")
    for gate in gates:
        if gate.get("state") != "pending" or not gate.get("evidence_required"):
            raise ValueError("owner gates must remain pending with evidence required")
    tasks = data.get("tasks")
    if not isinstance(tasks, list) or len(tasks) < 10:
        raise ValueError("require complete initial MVP task graph")
    by_id = {}
    for task in tasks:
        if not isinstance(task, dict):
            raise ValueError("task must be an object")
        ident = task.get("id")
        if not isinstance(ident, str) or not TASK_RE.fullmatch(ident) or ident in by_id:
            raise ValueError("invalid or duplicate task id")
        if task.get("phase") not in REQUIRED_PHASES:
            raise ValueError(f"{ident}: invalid phase")
        if not task.get("owner_role") or not task.get("title") or not task.get("output"):
            raise ValueError(f"{ident}: insufficient task ownership/output")
        deps = task.get("dependencies")
        req = task.get("required_gates")
        actions = task.get("permitted_actions")
        if not isinstance(deps, list) or not isinstance(req, list) or not isinstance(actions, list):
            raise ValueError(f"{ident}: dependencies, gates and actions must be lists")
        if len(deps) != len(set(deps)) or len(req) != len(set(req)):
            raise ValueError(f"{ident}: duplicated dependency or gate")
        if not set(req).issubset(REQUIRED_GATES):
            raise ValueError(f"{ident}: unrecognized gate")
        if not actions or any(action in ("deploy", "paid-inference", "production-migration", "merge") for action in actions):
            raise ValueError(f"{ident}: forbidden autonomous action")
        if task["phase"] in ("implementation", "validation"):
            if task.get("status") != "blocked" or not {"G_DESIGN", "G_CODE"}.issubset(req):
                raise ValueError(f"{ident}: product work must be blocked behind design and coding authorization")
        if task["phase"] == "release":
            if task.get("status") != "blocked" or not req or "project-owner" != task.get("owner_role"):
                raise ValueError(f"{ident}: release requires owner gate and blocked state")
        if task["phase"] in ("design", "preparation") and set(req) & {"G_CODE", "G_PRIVATE_PILOT", "G_RELEASE"}:
            raise ValueError(f"{ident}: incorrect preparation/design gate")
        by_id[ident] = task
    if not {"VEL-DES-001", "VEL-DES-002", "VEL-IMP-001", "VEL-IMP-003", "VEL-IMP-007", "VEL-IMP-008", "VEL-VAL-001", "VEL-PILOT-001", "VEL-RELEASE-001"}.issubset(by_id):
        raise ValueError("missing essential design, manual-editor, AI or release tasks")
    for ident, task in by_id.items():
        for dep in task["dependencies"]:
            if dep not in by_id or dep == ident:
                raise ValueError(f"{ident}: unknown or self dependency {dep}")
    visiting, visited, order = set(), set(), []
    def visit(ident: str):
        if ident in visiting:
            raise ValueError(f"dependency cycle involving {ident}")
        if ident in visited:
            return
        visiting.add(ident)
        for dep in by_id[ident]["dependencies"]:
            visit(dep)
        visiting.remove(ident)
        visited.add(ident)
        order.append(ident)
    for ident in by_id:
        visit(ident)
    # Future feature work must be downstream of the canonical, author-validated design.
    def ancestors(ident: str) -> set[str]:
        found = set()
        def walk(node):
            for dep in by_id[node]["dependencies"]:
                if dep not in found:
                    found.add(dep)
                    walk(dep)
        walk(ident)
        return found
    for task in tasks:
        if task["phase"] in ("implementation", "validation", "release") and "VEL-DES-002" not in ancestors(task["id"]):
            raise ValueError(f"{task['id']}: missing canonical design signoff dependency")
    if "G_PRIVATE_PILOT" not in by_id["VEL-PILOT-001"]["required_gates"]:
        raise ValueError("private pilot not owner/security gated")
    if "G_RELEASE" not in by_id["VEL-RELEASE-001"]["required_gates"]:
        raise ValueError("public release not owner/release gated")
    return order


def main() -> int:
    try:
        data = yaml.safe_load(DAG.read_text(encoding="utf-8"))
        order = validate(data)
        print(f"PASS: {len(order)} DAG nodes validated, 4 owner gates pending, no cycles, no unauthorized feature dispatch")
        print("Order:", ", ".join(order))
        return 0
    except (ValueError, OSError, yaml.YAMLError) as exc:
        print(f"FAIL: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())

#!/usr/bin/env python3
"""Detached ContextPack reading probe.

Uses only the supplied ContextPack; does not read Git or conversation history.
Do not treat its output as cryptographic validation or independent AI review.
"""
from __future__ import annotations
import argparse
import json
import re
import sys
from pathlib import Path
import yaml

SOURCE = re.compile(
    r"^### \x60(?P<path>[^\x60\n]+)\x60 @ \x60(?P<sha>[0-9a-f]{40})\x60\n\n"
    r"~~~~~~markdown\n(?P<body>.*?)\n~~~~~~",
    re.MULTILINE | re.DOTALL,
)


def fail(message):
    raise ValueError(message)


def between(text, start, end):
    if text.count(start) != 1 or end not in text:
        fail("Missing or repeated contract section " + start)
    rest = text.split(start, 1)[1]
    if end not in rest:
        fail("Missing section after " + start)
    return rest.split(end, 1)[0].strip()


def field(text, marker):
    hits = re.findall(r"^" + re.escape(marker) + r"\s*(.*)$", text, flags=re.MULTILINE)
    if len(hits) != 1:
        fail("Missing or duplicated field " + marker)
    return hits[0].strip()


def bullets(text, marker, end=None):
    if text.count(marker) != 1:
        fail("Missing or duplicated list " + marker)
    value = text.split(marker, 1)[1]
    if end is not None:
        value = value.split(end, 1)[0]
    lines = [line.strip() for line in value.splitlines() if line.strip()]
    if not lines or any(not line.startswith("- ") for line in lines):
        fail("Invalid bullet list " + marker)
    return [line[2:] for line in lines]


def inspect(path: Path):
    raw = path.read_text(encoding="utf-8")
    start = re.match(r"\A---\n(.*?)\n---\n", raw, flags=re.DOTALL)
    if not start:
        fail("Missing ContextPack front matter")
    meta = yaml.safe_load(start.group(1))
    if not isinstance(meta, dict) or meta.get("type") != "context-pack":
        fail("Invalid ContextPack metadata")
    required = ("id", "task_id", "base_commit", "task_blob_sha", "inputs", "source_gaps")
    if any(k not in meta for k in required):
        fail("Missing pinned ContextPack identifiers")
    for key in ("base_commit", "task_blob_sha"):
        if not re.fullmatch(r"[0-9a-f]{40}", str(meta[key])):
            fail("Malformed Git SHA: " + key)
    body = raw[start.end():]
    marker = "## Pinned source snapshots\n"
    if body.count(marker) != 1:
        fail("Missing pinned source section")
    contract, source_section = body.split(marker, 1)
    objective = between(contract, "## Objective\n", "## Scope\n")
    scope = between(contract, "## Scope\n", "## Evidence and authority constraints\n")
    perms = between(contract, "## Permissions and acceptance\n", "## Deliverables\n")
    delivery = contract.split("## Deliverables\n", 1)[1]
    allowed = [x.strip() for x in field(perms, "**Allowed:**").split(",") if x.strip()]
    approved = [x.strip() for x in field(perms, "**Owner approval required:**").split(";") if x.strip()]
    criteria = bullets(perms, "**Acceptance criteria:**")
    delivered_lines = [line.strip() for line in delivery.splitlines() if line.strip()]
    if not delivered_lines or any(not line.startswith("- ") for line in delivered_lines):
        fail("Invalid deliverables section")
    deliverables = [line[2:] for line in delivered_lines]
    if not allowed or not approved:
        fail("Permissions or approval requirements missing")
    if not isinstance(meta["inputs"], list) or not isinstance(meta["source_gaps"], list):
        fail("Invalid inputs or source gaps")
    blocks = list(SOURCE.finditer(source_section))
    if len(blocks) != len(meta["inputs"]) or not blocks:
        fail("Missing source snapshot blocks")
    sources = []
    for item, block in zip(meta["inputs"], blocks):
        if not isinstance(item, dict):
            fail("Invalid source input")
        if item.get("path") != block.group("path") or item.get("git_blob_sha") != block.group("sha"):
            fail("Snapshot heading differs from pinned manifest")
        source_start = re.match(r"\A---\n(.*?)\n---\n", block.group("body"), re.DOTALL)
        source_meta = yaml.safe_load(source_start.group(1)) if source_start else {}
        status = str((source_meta or {}).get("status", "unrecorded"))
        if status != item.get("source_status"):
            fail("Displayed source status differs from embedded source")
        sources.append({
            "path": item["path"],
            "role": item.get("role"),
            "status": status,
            "git_blob_sha": item["git_blob_sha"],
        })
    if len({v["path"] for v in sources}) != len(sources):
        fail("Duplicate source path")
    gap_ids = []
    for gap in meta["source_gaps"]:
        if not isinstance(gap, dict) or not gap.get("id") or not gap.get("limitation"):
            fail("Malformed source gap")
        if ("- " + str(gap["id"]) + ": " + str(gap["limitation"])) not in contract:
            fail("Source gap not disclosed in task contract")
        gap_ids.append(gap["id"])
    return {
        "task_id": meta["task_id"],
        "context_pack_id": meta["id"],
        "base_commit": meta["base_commit"],
        "task_blob_sha": meta["task_blob_sha"],
        "objective": objective,
        "scope_in": field(scope, "**In:**"),
        "scope_out": field(scope, "**Out:**"),
        "allowed_actions": allowed,
        "owner_approval_required": approved,
        "acceptance_criteria": criteria,
        "deliverables": deliverables,
        "known_missing_sources": gap_ids,
        "sources": sources,
        "limitations": {
            "git_integrity_verified": False,
            "independent_ai_agent_tested": False,
            "original_research_verified": False,
            "note": "Detached reading only. Full repo validator and human approval are separate gates.",
        },
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("context_pack", type=Path)
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    try:
        result = json.dumps(inspect(args.context_pack), indent=2, ensure_ascii=False) + "\n"
        if args.output:
            args.output.write_text(result, encoding="utf-8")
            print("Wrote detached handoff inspection: " + str(args.output))
        else:
            sys.stdout.write(result)
    except (OSError, ValueError, yaml.YAMLError) as exc:
        print("ERROR: " + str(exc), file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())

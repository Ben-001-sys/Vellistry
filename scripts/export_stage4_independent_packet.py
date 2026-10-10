#!/usr/bin/env python3
"""Export a STRICT two-file Stage 4 independent-agent cold-start ZIP.

Run in a full-history Vellistry checkout after generating VEL-CP-0002:
  python scripts/agent_workflow.py pack docs/agent-workflow/tasks/VEL-TASK-0002.yaml
  python scripts/export_stage4_independent_packet.py --output /tmp/vellistry-stage4-agent.zip

The operator retains hashes; only PROMPT.md and VEL-CP-0002.md reach the new agent.
This exporter cannot establish that the operator actually used a fresh AI session.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import sys
import zipfile
from pathlib import Path

import agent_workflow as workflow

ROOT = Path(__file__).resolve().parents[1]
TASK_PATH = ROOT / "docs/agent-workflow/tasks/VEL-TASK-0002.yaml"
PACK_PATH = ROOT / "docs/agent-workflow/context-packs/VEL-CP-0002.md"
PROMPT_PATH = ROOT / "docs/agent-workflow/STAGE4-INDEPENDENT-AGENT-PROMPT.md"
ALLOWED_MEMBERS = ("VEL-CP-0002.md", "PROMPT.md")


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def make_packet(destination: Path, *, pack_path: Path = PACK_PATH) -> dict:
    output = destination.resolve()
    if output.suffix.lower() != ".zip":
        raise ValueError("Output must be a ZIP")
    if output.exists():
        raise ValueError("Refusing to overwrite a previously exported packet")
    if not output.parent.is_dir():
        raise ValueError("Output parent directory does not exist")

    task = workflow.check_task(TASK_PATH)
    workflow.check_pack(pack_path, {task["id"]: task})
    meta, _ = workflow.frontmatter(pack_path)
    if meta["id"] != "VEL-CP-0002" or meta["task_id"] != "VEL-TASK-0002":
        raise ValueError("Unexpected Stage 4 task/ContextPack identity")
    # Never accidentally dispatch a packet pinned to an outdated main/PR head.
    head = workflow.git("rev-parse", "HEAD").decode().strip()
    if meta["base_commit"] != head:
        raise ValueError("ContextPack does not match this checkout HEAD; build from a clean fresh checkout")
    pack = pack_path.read_bytes()
    prompt = PROMPT_PATH.read_bytes()
    if not prompt or not pack:
        raise ValueError("Empty ContextPack or prompt")
    if b"SC-008" not in prompt or b"NOT TESTED" not in prompt:
        raise ValueError("Required scenario/evidence boundaries missing from prompt")
    if len(pack) + len(prompt) > 100_000:
        raise ValueError("Handoff packet is unexpectedly large")

    members = {ALLOWED_MEMBERS[0]: pack, ALLOWED_MEMBERS[1]: prompt}
    # Deterministic bytes, fixed names, no accidental parent directories,
    # script source, repo files, prior reports, credentials or extra metadata.
    with zipfile.ZipFile(output, "x", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as z:
        for name in ALLOWED_MEMBERS:
            info = zipfile.ZipInfo(name, date_time=(1980, 1, 1, 0, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            z.writestr(info, members[name], compress_type=zipfile.ZIP_DEFLATED, compresslevel=9)
    with zipfile.ZipFile(output) as z:
        if z.namelist() != list(ALLOWED_MEMBERS):
            output.unlink(missing_ok=True)
            raise ValueError("Unexpected ZIP members")
        for name in ALLOWED_MEMBERS:
            if z.read(name) != members[name]:
                output.unlink(missing_ok=True)
                raise ValueError("ZIP content changed unexpectedly")
    return {
        "task_id": task["id"],
        "context_pack_id": meta["id"],
        "base_commit": head,
        "packet_sha256": sha256(output.read_bytes()),
        "files": {name: {"sha256": sha256(data), "bytes": len(data)} for name, data in members.items()},
        "operator_notice": "Only the two ZIP members go to a genuinely fresh agent session. Agent independence not yet verified.",
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    try:
        details = make_packet(args.output)
    except (ValueError, OSError, UnicodeDecodeError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1
    print(json.dumps(details, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

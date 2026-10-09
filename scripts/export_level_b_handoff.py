#!/usr/bin/env python3
"""Build a two-file Level B cold-start packet after full Git provenance validation.

Run inside a full-history Vellistry clone:
    python scripts/export_level_b_handoff.py --output /tmp/vellistry-level-b.zip

Only the pinned historical ContextPack and minimal agent prompt are included.
Do not send GitHub Issue #18, evaluation rubrics, previous ExecutionBundles,
the complete repository, or this chat to the independent test agent.
"""
from __future__ import annotations

import argparse
import hashlib
import sys
import zipfile
from pathlib import Path

import agent_workflow as workflow

ROOT = Path(__file__).resolve().parents[1]
PACK_PATH = ROOT / "docs/agent-workflow/context-packs/VEL-CP-0001.md"
TASK_PATH = ROOT / "docs/agent-workflow/tasks/VEL-TASK-0001.yaml"
PROMPT_PATH = ROOT / "docs/agent-workflow/LEVEL-B-AGENT-PROMPT.md"
ALLOWED_MEMBERS = ("VEL-CP-0001.md", "PROMPT.md")


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def make_packet(destination: Path) -> dict[str, str]:
    # Validate the historical, accepted Git handoff before making an export.
    # This is the full-repository integrity check, not the detached reader.
    task = workflow.check_task(TASK_PATH)
    workflow.check_pack(PACK_PATH, {task["id"]: task})
    metadata, _ = workflow.frontmatter(PACK_PATH)
    if metadata["id"] != "VEL-CP-0001" or metadata["task_id"] != "VEL-TASK-0001":
        raise ValueError("Unexpected historical ContextPack identity")
    pack_bytes = PACK_PATH.read_bytes()
    prompt_bytes = PROMPT_PATH.read_bytes()
    output = destination.resolve()
    if output.suffix.lower() != ".zip":
        raise ValueError("Output must be a .zip file")
    if output.exists():
        raise ValueError("Refusing to overwrite an existing handoff export")
    if not output.parent.is_dir():
        raise ValueError("Output parent directory does not exist")
    if any(output == source.resolve() for source in (PACK_PATH, TASK_PATH, PROMPT_PATH)):
        raise ValueError("Output conflicts with an input source")

    # Fixed ZipInfo timestamps and order make package output reproducible.
    entries = ((ALLOWED_MEMBERS[0], pack_bytes), (ALLOWED_MEMBERS[1], prompt_bytes))
    try:
        with zipfile.ZipFile(output, "x", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
            for name, data in entries:
                info = zipfile.ZipInfo(filename=name, date_time=(1980, 1, 1, 0, 0, 0))
                info.compress_type = zipfile.ZIP_DEFLATED
                info.external_attr = 0o600 << 16
                archive.writestr(info, data, compress_type=zipfile.ZIP_DEFLATED, compresslevel=9)
    except Exception:
        if output.exists():
            output.unlink()
        raise
    with zipfile.ZipFile(output) as archive:
        if archive.namelist() != list(ALLOWED_MEMBERS):
            raise ValueError("Unexpected files in the Level B agent package")
        if any(archive.read(name) != data for name, data in entries):
            raise ValueError("Archive content verification failed")
    return {
        "packet_sha256": sha256(pack_bytes),
        "prompt_sha256": sha256(prompt_bytes),
        "archive_sha256": sha256(output.read_bytes()),
        "base_commit": metadata["base_commit"],
        "task_blob_sha": metadata["task_blob_sha"],
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    try:
        details = make_packet(args.output)
        print("Created independent-agent test package: " + str(args.output))
        print("Archive contains only: " + ", ".join(ALLOWED_MEMBERS))
        for key, value in details.items():
            print(f"{key}: {value}")
        print("Level B execution NOT completed; send the ZIP contents only to a fresh agent.")
    except (OSError, ValueError, zipfile.BadZipFile) as exc:
        print("ERROR: " + str(exc), file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())

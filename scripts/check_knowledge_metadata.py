#!/usr/bin/env python3
"""Validate Vellistry ADR and history metadata without touching project content."""

from __future__ import annotations

import re
import sys
from datetime import date, datetime
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
ADR_REQUIRED = {
    "id", "title", "type", "status", "created_at", "updated_at",
    "decided_at", "author", "approved_by", "version", "sources",
    "evidence", "related_requirements", "related_features",
    "related_contracts", "related_adrs", "supersedes",
    "superseded_by", "implementation_refs",
}
HISTORY_REQUIRED = {
    "id", "title", "type", "status", "occurred_on", "recorded_on",
    "time_precision", "created_at", "updated_at", "author", "actor",
    "version", "sources", "evidence", "related_adrs",
    "related_requirements", "related_events", "corrects",
    "corrected_by", "commit_refs",
}
ALLOWED_ADR_STATUSES = {"proposed", "accepted", "rejected", "deprecated", "superseded"}
ALLOWED_HISTORY_STATUSES = {"recorded", "corrected", "retracted"}
LIST_KEYS = {
    "sources", "evidence", "related_requirements", "related_features",
    "related_contracts", "related_adrs", "supersedes", "superseded_by",
    "implementation_refs", "related_events", "corrects", "corrected_by",
    "commit_refs",
}
DATE_KEYS = {"created_at", "updated_at", "decided_at", "occurred_on", "recorded_on"}


def valid_date(value: object) -> bool:
    if isinstance(value, (date, datetime)):
        return True
    if not isinstance(value, str):
        return False
    if re.fullmatch(r"\d{4}-\d{2}-\d{2}", value):
        try:
            date.fromisoformat(value)
            return True
        except ValueError:
            return False
    try:
        datetime.fromisoformat(value.replace("Z", "+00:00"))
        return True
    except ValueError:
        return False


def load_frontmatter(path: Path) -> dict:
    raw = path.read_text(encoding="utf-8")
    match = re.match(r"\A---\s*\n(.*?)\n---\s*\n", raw, flags=re.S)
    if match is None:
        raise ValueError("missing YAML front matter")
    data = yaml.safe_load(match.group(1))
    if not isinstance(data, dict):
        raise ValueError("YAML front matter must be a mapping")
    if not raw[match.end():].strip():
        raise ValueError("missing Markdown record body")
    return data


def validate(path: Path, kind: str, seen: set[str]) -> list[str]:
    errors = []
    try:
        data = load_frontmatter(path)
    except (ValueError, yaml.YAMLError) as exc:
        return [f"{path.relative_to(ROOT)}: {exc}"]

    required = ADR_REQUIRED if kind == "adr" else HISTORY_REQUIRED
    for key in sorted(required - data.keys()):
        errors.append(f"missing required field {key}")
    for key in required & data.keys():
        if data[key] is None and key not in {"approved_by", "decided_at"}:
            errors.append(f"{key} must not be null")
    for key in required & LIST_KEYS & data.keys():
        if not isinstance(data[key], list):
            errors.append(f"{key} must be a YAML list")
    for key in required & DATE_KEYS & data.keys():
        if data[key] is not None and not valid_date(data[key]):
            errors.append(f"{key} must be an ISO-8601 date or timestamp")

    identifier = data.get("id")
    expected_id = r"ADR-\d{4}" if kind == "adr" else r"HIS-\d{8}-\d{3}"
    if not isinstance(identifier, str) or not re.fullmatch(expected_id, identifier):
        errors.append(f"id must match {expected_id}")
    elif identifier in seen:
        errors.append(f"duplicate ID {identifier}")
    else:
        seen.add(identifier)

    expected_type = "architecture-decision" if kind == "adr" else "historical-event"
    if data.get("type") != expected_type:
        errors.append(f"type must be {expected_type}")

    states = ALLOWED_ADR_STATUSES if kind == "adr" else ALLOWED_HISTORY_STATUSES
    if data.get("status") not in states:
        errors.append(f"invalid {kind} status {data.get('status')!r}")

    if kind == "adr":
        if not path.name.startswith(str(identifier) + "-"):
            errors.append("ADR filename must begin with its ID")
        if data.get("status") == "accepted" and not data.get("approved_by"):
            errors.append("accepted ADR requires approved_by")
        if data.get("status") == "accepted" and not data.get("decided_at"):
            errors.append("accepted ADR requires decided_at")
        if data.get("status") == "superseded" and not data.get("superseded_by"):
            errors.append("superseded ADR requires superseded_by")
    else:
        if data.get("time_precision") not in {"day", "exact"}:
            errors.append("time_precision must be day or exact")
        if data.get("status") == "corrected" and not data.get("corrected_by"):
            errors.append("corrected history requires corrected_by")

    return [f"{path.relative_to(ROOT)}: {message}" for message in errors]


def main() -> int:
    paths = [
        *sorted((ROOT / "docs/decisions").glob("ADR-*.md")),
        *sorted((ROOT / "docs/history").glob("????-??-??-*.md")),
    ]
    seen: set[str] = set()
    errors: list[str] = []
    for path in paths:
        errors.extend(validate(path, "adr" if path.name.startswith("ADR-") else "history", seen))
    if errors:
        print("\n".join(f"ERROR: {message}" for message in errors))
        return 1
    print(f"PASS: validated metadata for {len(paths)} ADR/history records.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

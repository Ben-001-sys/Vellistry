#!/usr/bin/env python3
"""Validate every Markdown decision/history record, including incorrectly named files."""

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
ADR_FILENAME = re.compile(r"ADR-\d{4}-[a-z0-9]+(?:-[a-z0-9]+)*\.md\Z")
HISTORY_FILENAME = re.compile(r"\d{4}-\d{2}-\d{2}-[a-z0-9]+(?:-[a-z0-9]+)*\.md\Z")


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


def day_value(value: object) -> str | None:
    if not valid_date(value):
        return None
    if isinstance(value, (date, datetime)):
        return value.isoformat()[:10]
    return value[:10]


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


def validate(path: Path, kind: str, seen: set[str], root: Path | None = None) -> list[str]:
    root = ROOT if root is None else root
    errors: list[str] = []
    try:
        data = load_frontmatter(path)
    except (OSError, UnicodeError, ValueError, yaml.YAMLError) as exc:
        return [f"{path.relative_to(root)}: {exc}"]

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
        if isinstance(identifier, str) and not path.name.startswith(identifier + "-"):
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
        # Date and ID encode the event date, so a mismatched file is unsafe for retrieval.
        file_day = path.name[:10]
        occurred_on = day_value(data.get("occurred_on"))
        if occurred_on is not None and file_day != occurred_on:
            errors.append("history filename date must match occurred_on")
        if isinstance(identifier, str) and occurred_on is not None:
            if not identifier.startswith("HIS-" + occurred_on.replace("-", "") + "-"):
                errors.append("history ID date must match occurred_on")

    return [f"{path.relative_to(root)}: {message}" for message in errors]


def audit_records(root: Path) -> tuple[int, list[str]]:
    """Discover all .md files first; bad filenames must not bypass validation."""
    errors: list[str] = []
    seen: set[str] = set()
    count = 0
    for dirname, kind, pattern in (
        ("docs/decisions", "adr", ADR_FILENAME),
        ("docs/history", "history", HISTORY_FILENAME),
    ):
        directory = root / dirname
        if not directory.is_dir():
            errors.append(f"{dirname}: record directory missing")
            continue
        for path in sorted(directory.rglob("*.md")):
            if path.name == "README.md":
                continue
            count += 1
            if not pattern.fullmatch(path.name):
                errors.append(
                    f"{path.relative_to(root)}: invalid {kind} filename; "
                    "this record must not escape metadata validation"
                )
            errors.extend(validate(path, kind, seen, root))
    if count == 0:
        errors.append("no ADR/history records found; refusing to report an empty pass")
    return count, errors


def main() -> int:
    count, errors = audit_records(ROOT)
    if errors:
        print("\n".join(f"ERROR: {message}" for message in errors))
        return 1
    print(f"PASS: validated metadata for {count} ADR/history records.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

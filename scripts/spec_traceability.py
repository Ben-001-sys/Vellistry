#!/usr/bin/env python3
"""Validate traceable, explicitly proposed engineering-spec contracts."""
from __future__ import annotations
import argparse
import re
import sys
from pathlib import Path, PurePosixPath

import yaml

ROOT = Path(__file__).resolve().parents[1]
SPEC_ROOT = ROOT / "docs" / "specs"
MAP = ROOT / "docs/requirements/MVP-FEATURE-HORIZON-MAP-2026-10-09.md"

REQUIRED = {
    "id", "title", "type", "status", "created_at", "updated_at",
    "owner", "version", "mvp_areas", "source_refs", "feature_refs",
    "journey_refs", "acceptance_refs", "criteria", "dependencies",
    "non_goals", "approval_required",
}
EXPECTED_AUTHORITY = {
    "accepted-product-scope": "accepted",
    "proposed-acceptance-plan": "proposed-not-executed",
}


def frontmatter(path: Path):
    raw = path.read_text(encoding="utf-8")
    m = re.match(r"\A---\n(.*?)\n---\n", raw, re.S)
    if not m:
        raise ValueError(f"{path.name}: missing YAML frontmatter")
    meta = yaml.safe_load(m.group(1))
    if not isinstance(meta, dict):
        raise ValueError(f"{path.name}: metadata must be a mapping")
    return meta, raw[m.end():]


def no_duplicates(name, items):
    if not isinstance(items, list) or not items:
        raise ValueError(f"{name}: expected nonempty list")
    if any(not isinstance(x, str) or not x for x in items):
        raise ValueError(f"{name}: all entries must be nonempty strings")
    if len(items) != len(set(items)):
        raise ValueError(f"{name}: duplicate IDs")


def safe_path(raw: str):
    if not isinstance(raw, str) or not raw or "\\" in raw:
        raise ValueError("invalid repository reference")
    path = PurePosixPath(raw)
    if path.is_absolute() or ".." in path.parts or ".git" in path.parts or str(path) != raw:
        raise ValueError("unsafe path in spec source_refs")
    return raw


def validate_spec(path: Path, root: Path = ROOT):
    meta, body = frontmatter(path)
    missing = REQUIRED - set(meta)
    if missing:
        raise ValueError(f"{path.name}: required metadata missing: {sorted(missing)}")
    if meta["type"] != "engineering-spec" or meta["status"] != "proposed":
        raise ValueError(f"{path.name}: Stage 4 pilot spec must remain proposed")
    if not re.fullmatch(r"VEL-SPEC-\d{3}", str(meta["id"])):
        raise ValueError("invalid spec identifier")
    if not path.name.startswith(meta["id"] + "-"):
        raise ValueError("spec filename must begin with id")
    for label in ("mvp_areas", "feature_refs", "journey_refs", "acceptance_refs", "criteria"):
        no_duplicates(label, meta[label])
    for area in meta["mvp_areas"]:
        if not re.fullmatch(r"M[1-8]", area):
            raise ValueError("spec area outside the approved M1–M8 boundary")
    for feature in meta["feature_refs"]:
        if not re.fullmatch(r"VEL-FEAT-\d{2}-\d{3}", feature):
            raise ValueError(f"invalid feature id {feature}")
    for ref in meta["journey_refs"]:
        if not re.fullmatch(r"VEL-JRN-\d{3}", ref):
            raise ValueError(f"invalid journey id {ref}")
    for ref in meta["acceptance_refs"]:
        if not re.fullmatch(r"ACC-M[1-8]-\d{2}", ref):
            raise ValueError(f"invalid acceptance id {ref}")
    for ref in meta["criteria"]:
        if not re.fullmatch(r"SC-\d{3}", ref):
            raise ValueError(f"invalid acceptance scenario id {ref}")

    if not isinstance(meta["source_refs"], list):
        raise ValueError("source_refs must be a list")
    authorities = set()
    paths = set()
    for entry in meta["source_refs"]:
        if not isinstance(entry, dict) or set(entry) != {"path", "authority"}:
            raise ValueError("source reference requires path and authority")
        ref = safe_path(entry["path"])
        authority = entry["authority"]
        if authority not in EXPECTED_AUTHORITY:
            raise ValueError(f"unrecognized source authority: {authority}")
        if ref in paths:
            raise ValueError("duplicate source path")
        paths.add(ref)
        source_path = root / ref
        if not source_path.is_file():
            raise ValueError(f"missing source {ref}")
        source_meta, source_body = frontmatter(source_path)
        if source_meta.get("status") != EXPECTED_AUTHORITY[authority]:
            raise ValueError(f"authority/status mismatch for {ref}")
        authorities.add(authority)
        if authority == "accepted-product-scope":
            for area in meta["mvp_areas"]:
                if not re.search(r"\b" + re.escape(area) + r"\b", source_body):
                    raise ValueError(f"{area} not present in accepted source")
        if authority == "proposed-acceptance-plan":
            for journey in meta["journey_refs"]:
                if journey not in source_body:
                    raise ValueError(f"missing journey source {journey}")
            for acceptance in meta["acceptance_refs"]:
                if acceptance not in source_body:
                    raise ValueError(f"missing acceptance source {acceptance}")
    if authorities != set(EXPECTED_AUTHORITY):
        raise ValueError("must cite both accepted scope and proposed acceptance plan")

    mapping = (root / "docs/requirements/MVP-FEATURE-HORIZON-MAP-2026-10-09.md").read_text(encoding="utf-8")
    for feature in meta["feature_refs"]:
        line = next((ln for ln in mapping.splitlines() if ln.startswith(f"| \`{feature}\` |")), None)
        if not line:
            raise ValueError(f"feature ID absent from scope map: {feature}")
        # The mapped row must explicitly include MVP or MVP-LIMITED, never post-MVP.
        cells = [cell.strip() for cell in line.strip().split("|")[1:-1]]
        if len(cells) < 4 or cells[2].strip("\`") not in {"MVP", "MVP-LIMITED"}:
            raise ValueError(f"feature is not in approved MVP: {feature}")
    headings = re.findall(r"(?m)^### (SC-\d{3})\b", body)
    if set(headings) != set(meta["criteria"]) or len(headings) != len(meta["criteria"]):
        raise ValueError("scenario headings and declared IDs differ/are duplicated")
    for scenario in meta["criteria"]:
        m = re.search(r"(?ms)^### " + scenario + r"\b.*?\n(?P<body>.*?)(?=^### SC-\d{3}\b|^## |\Z)", body)
        if not m or not re.search(r"(?m)^Source:", m["body"]):
            raise ValueError(f"{scenario} missing source trace")
        if not all(word in m["body"] for word in ("**Given**", "**when**", "**then**")):
            raise ValueError(f"{scenario} missing Given/when/then statement")
    for key in ("dependencies", "non_goals", "approval_required"):
        no_duplicates(key, meta[key])
    if "NOT TESTED" not in body or "NOT IMPLEMENTED" not in body:
        raise ValueError("spec must explicitly disclaim unperformed engineering execution")
    return meta


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("command", choices=["validate"])
    args = parser.parse_args()
    try:
        paths = sorted(SPEC_ROOT.glob("VEL-SPEC-*.md"))
        if not paths:
            raise ValueError("No engineering specifications found")
        for path in paths:
            m = validate_spec(path)
            print(f"VALID: {m['id']} — {len(m['criteria'])} source-traced proposed acceptance scenarios")
        return 0
    except (ValueError, OSError, yaml.YAMLError) as exc:
        print("ERROR:", exc, file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())

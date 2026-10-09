#!/usr/bin/env python3
"""Research-only, metadata-only review packet for Vellistry's frozen fiction source.

No active mapping is inferred or approved. Original text is never written to output.
Run from the Vellistry repository, alongside scripts/r01_manifest.py.
"""
from __future__ import annotations

import argparse
import json
import os
from pathlib import Path

from r01_manifest import audit

EXPECTED_CODES = {f"{domain}-{n:02d}" for domain in
                  ("NI", "PR", "DS", "EM", "DG", "CH", "PV", "RS", "SC", "PC", "PL", "CT", "AR")
                  for n in range(1, 11)}
PRIORITY_CONFLICTS = {"AR-04", "AR-09", "AR-02", "AR-06"}


class ReviewValidationError(ValueError):
    """Source or candidate decisions violate a preservation/mapping invariant."""


def review_packet(manifest: dict) -> dict:
    """Generate review metadata; intentionally no owner choice and no full source text."""
    rows = manifest.get("all_source_variants", [])
    if len(rows) != 130 or {r.get("code") for r in rows} != EXPECTED_CODES:
        raise ReviewValidationError("Exactly 130 expected printed codes required")
    choices = []
    seen = set()
    for row in sorted(rows, key=lambda r: r["code"]):
        code = row["code"]
        src = {}
        for variant in ("compact", "expanded"):
            record = row.get(variant, {})
            record_id = record.get("record_id")
            if (not isinstance(record_id, str)
                    or record_id != f'{manifest["raw_sha256"]}:{variant}:{code}'
                    or record_id in seen):
                raise ReviewValidationError(f"Invalid or duplicated source record for {code} {variant}")
            seen.add(record_id)
            src[variant] = {"record_id": record_id, "title": record.get("title"),
                            "line": record.get("line"), "heading_sha256": record.get("heading_sha256")}
        choices.append({
            "code": code,
            "compact": src["compact"],
            "expanded": src["expanded"],
            "different_printed_titles": bool(row.get("case_insensitive_title_diff")),
            "priority_review": code in PRIORITY_CONFLICTS,
            "proposed_operational_rules": [],
            "review_notes": "",
            "review_status": "pending-owner-review",
        })
    if len(seen) != 260:
        raise ReviewValidationError("Source-variant records are not exactly 260")
    return {
        "packet_type": "R01-METADATA-ONLY-NON-CANONICAL",
        "status": "unresolved-owner-review-required",
        "raw_source_sha256": manifest["raw_sha256"],
        "source_record_count": 260,
        "printed_code_count": 130,
        "priority_conflicts": sorted(PRIORITY_CONFLICTS),
        "policy": "ADR-0007 immutable source variants, not active default mapping",
        "approval": None,
        "decisions": choices,
    }


def check_candidate(packet: dict, proposal: dict, *, require_approval: bool = False) -> dict:
    """Validate an explicitly authored mapping proposal without granting authority.

    One or more distinct operational aliases can reference each original printed code.
    Every operational alias resolves to exactly ONE immutable source record.
    This rejects conflating two unlike meanings under one alias.
    """
    original = packet.get("decisions", [])
    if len(original) != 130:
        raise ReviewValidationError("The reference packet is incomplete")
    by_code = {r["code"]: r for r in original}
    decisions = proposal.get("decisions", [])
    if (len(decisions) != 130 or len({d.get("code") for d in decisions}) != 130
            or {d.get("code") for d in decisions} != set(by_code)):
        raise ReviewValidationError("Every original code requires an explicit owner review row")
    aliases = set()
    total = 0
    for entry in decisions:
        code = entry["code"]
        rules = entry.get("operational_rules")
        if not isinstance(rules, list) or not rules:
            raise ReviewValidationError(f"{code}: no explicit mapping supplied")
        if entry.get("review_status") != "reviewed":
            raise ReviewValidationError(f"{code}: not marked reviewed")
        allowed = {by_code[code][v]["record_id"] for v in ("compact", "expanded")}
        for rule in rules:
            alias = rule.get("alias") if isinstance(rule, dict) else None
            source_id = rule.get("source_record_id") if isinstance(rule, dict) else None
            if not isinstance(alias, str) or not alias.strip() or alias in aliases:
                raise ReviewValidationError(f"{code}: missing or duplicate operational alias")
            if source_id not in allowed:
                raise ReviewValidationError(f"{code}: mapping must refer to exact frozen source variant")
            if not isinstance(rule.get("enabled_by_default"), bool):
                raise ReviewValidationError(f"{code}: default enablement must be explicit")
            aliases.add(alias)
            total += 1
    if proposal.get("raw_source_sha256") != packet.get("raw_source_sha256"):
        raise ReviewValidationError("Original source fingerprint mismatch")
    if not proposal.get("mapping_version"):
        raise ReviewValidationError("Mapping version missing")
    if require_approval:
        approval = proposal.get("approval")
        if (not isinstance(approval, dict) or approval.get("status") != "owner-approved"
                or not approval.get("approved_by") or not approval.get("decided_at")
                or not approval.get("evidence_ref")):
            raise ReviewValidationError("Verifiable owner approval metadata missing")
    return {"status": "structurally-valid-only-not-a-proof-of-owner-approval",
            "original_codes_reviewed": len(decisions), "distinct_operational_aliases": total}


def write_private_research_json(source: Path, destination: Path, payload: dict) -> None:
    """Create output once, without following a symlink or replacing frozen source.

    Exclusive create also refuses pre-existing result files. This safety boundary
    is for local single-user research, not an authorization to publish source data.
    """
    if not source.is_file():
        raise ReviewValidationError("Original source does not exist")
    if destination.is_symlink() or source.resolve(strict=True) == destination.resolve(strict=False):
        raise ReviewValidationError("Output aliases or follows the immutable original source")
    flags = os.O_WRONLY | os.O_CREAT | os.O_EXCL | getattr(os, "O_NOFOLLOW", 0)
    try:
        fd = os.open(destination, flags, 0o600)
    except FileExistsError as exc:
        raise ReviewValidationError("Output already exists; refusing overwrite") from exc
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as handle:
            json.dump(payload, handle, ensure_ascii=False, indent=2)
            handle.write("\n")
    except BaseException:
        destination.unlink(missing_ok=True)
        raise


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", help="Path to original immutable owner source (not committed)")
    parser.add_argument("--out", required=True, help="Metadata-only JSON output path")
    parser.add_argument("--check", help="Optional authored candidate mapping JSON to check")
    parser.add_argument("--require-approval", action="store_true")
    args = parser.parse_args()
    packet = review_packet(audit(Path(args.source)))
    result = None
    if args.check:
        proposal = json.loads(Path(args.check).read_text(encoding="utf-8"))
        result = check_candidate(packet, proposal, require_approval=args.require_approval)
    write_private_research_json(Path(args.source), Path(args.out), packet)
    print("Review packet: 130 unresolved codes, 260 preserved source references; ZERO mappings selected")
    if result is not None:
        print(json.dumps(result))


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""R01 non-authoritative operational mapping candidate, generated from the immutable source manifest.

The owner approved researching distinct-meaning mappings, NOT any active rule.
Every suggestion is REVIEW REQUIRED and output is NOT an approved rule pack.
Only titles/provenance metadata appear; original long source text remains private.
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path

from r01_manifest import audit
from r01_review_packet import review_packet, ReviewValidationError

# These four pairs describe separately valuable concerns in the *original* source;
# labels below are researcher interpretations, not newly approved original IDs.
SPLITS = {
    "AR-02": ("Thematic restraint", "Thematic multiplicity",
              "Compact warns against explaining morals; expanded protects thematic plurality."),
    "AR-04": ("Moral complexity", "Motif evolution",
              "Compact concerns moral ambiguity; expanded concerns transforming recurrent motifs."),
    "AR-06": ("Work-specific obsessions", "Convention with specificity",
              "Compact concerns a book's distinctive preoccupations; expanded concerns trope execution."),
    "AR-09": ("Homogenization resistance", "Intentional omission and unresolved space",
              "Compact protects distinctive prose; expanded protects meaningful non-resolution."),
}
REVIEWED_TITLE_DIFFERENCES = {
    "DS-09", "PV-05", "PV-10",
    *(f"AR-{i:02d}" for i in range(1, 11)),
}
ALL_DOMAINS = ("NI", "PR", "DS", "EM", "DG", "CH", "PV", "RS", "SC", "PC", "PL", "CT", "AR")


def mapping_proposal(manifest: dict) -> dict:
    packet = review_packet(manifest)  # fail if missing or invented immutable record ID
    if {row["code"] for row in packet["decisions"] if row["different_printed_titles"]} != REVIEWED_TITLE_DIFFERENCES:
        raise ReviewValidationError("Frozen-title divergence set changed; research re-review required")

    all_rows, aliases = [], set()
    for row in packet["decisions"]:
        code = row["code"]
        proposals = []
        if code in SPLITS:
            compact_label, expanded_label, explanation = SPLITS[code]
            sources = (
                ("compact", compact_label, "separate-source-subject"),
                ("expanded", expanded_label, "separate-source-subject")
            )
        else:
            explanation = ("Casefold-equal titles are not proof of equivalent full bodies; "
                           "expanded source is proposed for operational detail and compact remains preserved.")
            if row["different_printed_titles"]:
                explanation = ("Related/renamed heading according to R01 source review; "
                               "operational expanded variant proposed, compact preserved. Compare all body text.")
            sources = (("expanded", row["expanded"]["title"], "expanded-primary-candidate"),)

        for variant, label, relationship in sources:
            alias = f"{code}.{variant}"
            assert alias not in aliases
            aliases.add(alias)
            proposals.append({
                "proposed_alias": alias,
                "source_record_id": row[variant]["record_id"],
                "source_variant": variant,
                "proposed_label": label,
                "relationship": relationship,
                "default_enabled": None,          # no implied active/default selection
                "owner_approved": False,
                "semantic_full_body_review": "required",
            })
        all_rows.append({
            "printed_code": code,
            "domain": code.split("-")[0],
            "source_titles_differ": row["different_printed_titles"],
            "proposed_handling": "keep-distinct-meaning-controls" if code in SPLITS else "expanded-candidate-with-compact-archived",
            "evidence_notes": explanation,
            "source_headings": {
                k: {"id": row[k]["record_id"], "title": row[k]["title"], "line": row[k]["line"]}
                for k in ("compact", "expanded")
            },
            "proposed_operational_controls": proposals,
            "approval_status": "research-proposal-not-owner-approved",
        })
    if len(all_rows) != 130 or len(aliases) != 134:
        raise ReviewValidationError("Expected 130 codes / 134 candidates; audit proposal changes")
    return {
        "artifact": "R01 mapping proposal for owner review; NOT a deployable default pack",
        "source_sha256": manifest["raw_sha256"],
        "preserved_source_record_count": 260,
        "printed_code_count": len(all_rows),
        "proposed_control_count": len(aliases),
        "source_identity_policy": "ADR-0007",
        "active_mapping": None,
        "owner_approval": None,
        "all_full_body_semantic_checks": "not certified",
        "recommendation": ("130 expanded-source candidates plus four additional compact controls "
                           "for AR-02/04/06/09; compact + expanded original records remain separate "
                           "for all 130 codes. No defaults activated."),
        "rows": all_rows,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", help="Unmodified original private Branch research Markdown")
    parser.add_argument("--out", required=True)
    args = parser.parse_args()
    report = mapping_proposal(audit(Path(args.source)))
    Path(args.out).write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf8")
    print(json.dumps({k: report[k] for k in
                      ("artifact", "printed_code_count", "preserved_source_record_count",
                       "proposed_control_count", "active_mapping")}, indent=2))


if __name__ == "__main__":
    main()

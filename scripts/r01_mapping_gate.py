"""R01 research-only fail-closed resolver. Requires future owner-reviewed mapping.
Never manufacture a mapping from matching titles, printed code, or embeddings.
"""
from __future__ import annotations

class MappingNotApproved(ValueError):
    pass

def resolve_active_source(manifest: dict, approval: dict | None, code: str) -> dict:
    entries={row["code"]: row for row in manifest.get("all_source_variants",[])}
    if code not in entries:
        raise MappingNotApproved("Unknown original lens code")
    if not isinstance(approval,dict) or approval.get("status")!="owner-approved":
        raise MappingNotApproved("Owner-approved active mapping missing")
    if not approval.get("version") or not approval.get("approved_by") or not approval.get("decided_at"):
        raise MappingNotApproved("Active mapping provenance incomplete")
    mapping=approval.get("mappings",{})
    chosen=mapping.get(code)
    if not isinstance(chosen,str) or not chosen:
        raise MappingNotApproved("No explicit active source record for this code")
    pair=entries[code]
    allowed={pair["compact"]["record_id"]:pair["compact"],pair["expanded"]["record_id"]:pair["expanded"]}
    if chosen not in allowed:
        raise MappingNotApproved("Mapping must use exact source variant identity, not a bare lens code")
    return allowed[chosen]

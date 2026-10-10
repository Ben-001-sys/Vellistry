"""Check current repository status vs source-of-truth design gate boundaries.

This verifies document consistency in one checkout; it cannot interrogate live
GitHub state, prove research results, or authorize owner decisions.
"""
from __future__ import annotations

import re
import unittest
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
STATE = ROOT / "CURRENT-STATE.md"
GATE = ROOT / "docs/research/SIX-PAIR-RESEARCH-TO-DESIGN-GATE-2026-10-09.md"
PLAN = ROOT / "docs/plans/RESEARCH-PAIR-AND-PREIMPLEMENTATION-DESIGN-2026-10-09.md"
DECISION = ROOT / "docs/plans/DESIGN-ENTRY-DECISION-2026-10-10.md"
SCOPE = ROOT / "docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md"
SOURCE = ROOT / "docs/decisions/ADR-0007-immutable-compact-expanded-guidance-sources.md"


def read_doc(path: Path):
    raw = path.read_text(encoding="utf-8")
    match = re.match(r"\A---\n(.*?)\n---\n", raw, flags=re.S)
    if not match:
        raise ValueError(f"{path}: YAML metadata missing")
    metadata = yaml.safe_load(match.group(1))
    if not isinstance(metadata, dict):
        raise ValueError(f"{path}: invalid metadata")
    return metadata, raw[match.end():]


class ResearchDesignGateTests(unittest.TestCase):
    def test_all_six_merged_pair_evidence_links_present(self):
        meta, body = read_doc(GATE)
        self.assertEqual(meta["status"], "proposed-owner-review")
        for pair in range(1, 7):
            self.assertIn(f"**0{pair} —", body)
        for num in (28, 29, 32, 34, 36, 37, 38, 39, 40, 41, 42):
            self.assertIn(f"/pull/{num}", body)
        self.assertIn("not the same as completing every research acceptance criterion", body)
        self.assertNotIn("Pair02 #37 and alternatives #39", body)

    def test_current_snapshot_precedes_preserved_old_checkpoints(self):
        meta, body = read_doc(STATE)
        self.assertEqual(meta["status"], "active")
        marker = "## Current authoritative checkpoint — 2026-10-10"
        self.assertIn(marker, body)
        self.assertIn("## Historical phase and branch snapshots", body)
        self.assertLess(body.index(marker), body.index("## Historical phase and branch snapshots"))
        snap = body.split("## Historical phase and branch snapshots")[0]
        self.assertIn("b4c3f2748b2bfdd52f4a90a14ea4d620d902cee7", snap)
        self.assertIn("PR #28", snap)
        self.assertIn("design-first", snap)
        self.assertIn("Issue #18", snap)
        self.assertIn("Issue #27", snap)
        self.assertNotIn("PR #28 remains unmerged", snap)

    def test_design_entry_does_not_infer_owner_approval(self):
        meta, body = read_doc(DECISION)
        self.assertEqual(meta["status"], "proposed-owner-review")
        self.assertIsNone(meta.get("approved_by"))
        self.assertIsNone(meta.get("decision_at"))
        self.assertIn("**Selected option:** PENDING", body)
        self.assertIn("**Implementation authorization:** NOT GIVEN", body)
        self.assertIn("invented story excerpts", body)
        self.assertIn("two different UI explorations", body)

    def test_design_first_plan_preserved_and_merge_variance_disclosed(self):
        meta, body = read_doc(PLAN)
        self.assertEqual(meta["status"], "owner-directed")
        self.assertIn("Integration annotation — 2026-10-10", body)
        self.assertIn("does not retrospectively prove research acceptance", body)
        self.assertIn("design-first feature-implementation hold continues", body)
        self.assertIn("two primary research", body)

    def test_owner_accepted_mvp_and_source_preservation_unchanged(self):
        meta, _ = read_doc(SCOPE)
        self.assertEqual(meta["status"], "accepted")
        policy, text = read_doc(SOURCE)
        self.assertEqual(policy["status"], "accepted")
        self.assertIn("260", text)
        _, gate = read_doc(GATE)
        self.assertIn("134-control mapping is only proposed", gate)
        self.assertIn("security", gate.lower())
        self.assertIn("DOCX", gate)
        self.assertIn("Owner decision checklist", gate)


if __name__ == "__main__":
    unittest.main()

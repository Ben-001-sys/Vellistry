"""Stage 4: executable negative tests for source-to-spec traceability."""
from __future__ import annotations
import sys
import tempfile
import unittest
from pathlib import Path
import yaml

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
import spec_traceability as validator  # noqa: E402

SPEC = ROOT / "docs/specs/VEL-SPEC-001-CHAPTER-SAVE-CONTRACT.md"


class SpecTraceabilityTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.raw = SPEC.read_text(encoding="utf-8")

    def check_bad(self, source: str, reason: str):
        with tempfile.TemporaryDirectory() as temp:
            path = Path(temp) / SPEC.name
            path.write_text(source, encoding="utf-8")
            with self.assertRaisesRegex(ValueError, reason):
                validator.validate_spec(path, ROOT)

    def test_approved_scope_and_draft_plan_are_distinguished(self):
        meta = validator.validate_spec(SPEC)
        self.assertEqual(meta["status"], "proposed")
        self.assertEqual(meta["criteria"], [f"SC-{i:03}" for i in range(1, 9)])
        self.assertEqual(set(meta["mvp_areas"]), {"M1", "M2", "M3", "M8"})

    def test_duplicate_scenario_id_rejected(self):
        self.check_bad(self.raw.replace("  - SC-008", "  - SC-007"), "duplicate IDs")

    def test_missing_scenario_heading_rejected(self):
        self.check_bad(self.raw.replace("### SC-008", "### OMITTED"), "scenario headings")

    def test_missing_scenario_source_rejected(self):
        self.check_bad(self.raw.replace(
            "Source: `PROJECT-CONSTITUTION.md`", 
            "Other: `PROJECT-CONSTITUTION.md`", 1
        ), "SC-008 missing source trace")

    def test_promotion_to_accepted_rejected(self):
        self.check_bad(self.raw.replace("status: proposed", "status: accepted", 1), "remain proposed")

    def test_draft_acceptance_falsely_labeled_accepted_rejected(self):
        self.check_bad(self.raw.replace("authority: proposed-acceptance-plan", "authority: accepted-product-scope"), "authority/status mismatch")

    def test_post_mvp_feature_cannot_be_smuggled_into_slice(self):
        # The master scope map classifies this as post-MVP/unscheduled.
        self.check_bad(self.raw.replace("VEL-FEAT-02-019", "VEL-FEAT-01-007"), "not in approved MVP")

    def test_acceptance_ref_must_exist_in_source(self):
        self.check_bad(self.raw.replace("  - ACC-M3-02", "  - ACC-M3-99", 1), "missing acceptance source")

    def test_refuses_architecture_beyond_eight_areas(self):
        self.check_bad(self.raw.replace("  - M8", "  - M9", 1), "outside the approved")

    def test_no_unsupported_completed_claim(self):
        self.check_bad(self.raw.replace("NOT TESTED", "ALL PASS"), "disclaim unperformed")

    def test_path_escape_rejected(self):
        self.check_bad(self.raw.replace(
            "path: docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md",
            "path: ../secrets.env", 1
        ), "unsafe path")


if __name__ == "__main__":
    unittest.main()

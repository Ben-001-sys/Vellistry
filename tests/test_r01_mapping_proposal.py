"""Synthetic R01 mapping proposal contract tests; never assert owner approval."""
import sys
import unittest
import tempfile
from unittest.mock import patch
from copy import deepcopy
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))
from r01_mapping_proposal import mapping_proposal, SPLITS, main
from r01_review_packet import ReviewValidationError
from test_r01_review_packet import synthetic_manifest


class ProposedMappingTests(unittest.TestCase):
    def setUp(self):
        self.manifest = synthetic_manifest()
        self.proposal = mapping_proposal(self.manifest)
        self.by_code = {r["printed_code"]: r for r in self.proposal["rows"]}

    def test_preserves_all_260_and_proposes_134_without_activation(self):
        self.assertEqual(len(self.by_code), 130)
        self.assertEqual(self.proposal["preserved_source_record_count"], 260)
        self.assertEqual(self.proposal["proposed_control_count"], 134)
        self.assertIsNone(self.proposal["active_mapping"])
        self.assertIsNone(self.proposal["owner_approval"])

    def test_four_real_distinct_subjects_split(self):
        self.assertEqual(set(SPLITS), {"AR-02", "AR-04", "AR-06", "AR-09"})
        for code in SPLITS:
            controls = self.by_code[code]["proposed_operational_controls"]
            self.assertEqual([x["source_variant"] for x in controls], ["compact", "expanded"])
            self.assertNotEqual(controls[0]["source_record_id"], controls[1]["source_record_id"])
            self.assertTrue(all(x["default_enabled"] is None and x["owner_approved"] is False for x in controls))

    def test_117_title_matching_pairs_still_need_body_review(self):
        matched = [r for r in self.by_code.values() if not r["source_titles_differ"]]
        self.assertEqual(len(matched), 117)
        self.assertTrue(all(r["proposed_operational_controls"][0]["semantic_full_body_review"] == "required" for r in matched))
        self.assertTrue(all(r["proposed_handling"] == "expanded-candidate-with-compact-archived" for r in matched))

    def test_remaining_nine_title_differences_not_silently_split(self):
        others = [r for r in self.by_code.values() if r["source_titles_differ"] and r["printed_code"] not in SPLITS]
        self.assertEqual(len(others), 9)
        self.assertTrue(all(len(r["proposed_operational_controls"]) == 1 for r in others))
        self.assertTrue(all(r["approval_status"].endswith("not-owner-approved") for r in others))

    def test_missing_source_code_fails_closed(self):
        m = deepcopy(self.manifest)
        m["all_source_variants"].pop()
        with self.assertRaises(ReviewValidationError): mapping_proposal(m)

    def test_variant_identity_tamper_fails_closed(self):
        m = deepcopy(self.manifest)
        m["all_source_variants"][0]["expanded"]["record_id"] = m["all_source_variants"][0]["compact"]["record_id"]
        with self.assertRaises(ReviewValidationError): mapping_proposal(m)

    def test_title_divergence_change_requires_research_review(self):
        m = deepcopy(self.manifest)
        m["all_source_variants"][0]["case_insensitive_title_diff"] = not m["all_source_variants"][0]["case_insensitive_title_diff"]
        with self.assertRaises(ReviewValidationError): mapping_proposal(m)

    def test_mapping_cli_refuses_original_as_output(self):
        with tempfile.TemporaryDirectory() as temp:
            source = Path(temp) / "original.md"
            source.write_text("immutable fiction source", encoding="utf-8")
            with patch("r01_mapping_proposal.audit", return_value=self.manifest), \
                 patch.object(sys, "argv", ["r01_mapping_proposal.py", str(source), "--out", str(source)]):
                with self.assertRaises(ReviewValidationError):
                    main()
            self.assertEqual(source.read_text(encoding="utf-8"), "immutable fiction source")


if __name__ == "__main__":
    unittest.main()

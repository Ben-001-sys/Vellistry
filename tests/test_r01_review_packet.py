"""Synthetic review-packet tests; no full private fiction source stored in repo."""
import sys
import unittest
import tempfile
from unittest.mock import patch
from copy import deepcopy
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))
from r01_review_packet import review_packet, check_candidate, ReviewValidationError, write_private_research_json, main

DOMAINS = ("NI", "PR", "DS", "EM", "DG", "CH", "PV", "RS", "SC", "PC", "PL", "CT", "AR")


def synthetic_manifest():
    h = "a" * 64
    rows = []
    for d in DOMAINS:
        for n in range(1, 11):
            code = f"{d}-{n:02d}"
            rows.append({"code": code, "case_insensitive_title_diff": code.startswith("AR-") or code in ("DS-09", "PV-05", "PV-10"),
                         "compact": {"record_id": f"{h}:compact:{code}", "title": f"Short {code}", "line": 10},
                         "expanded": {"record_id": f"{h}:expanded:{code}", "title": f"Long {code}", "line": 50}})
    return {"raw_sha256": h, "all_source_variants": rows}


def complete_candidate(packet):
    return {"raw_source_sha256": packet["raw_source_sha256"], "mapping_version": "review-1", "approval": None,
            "decisions": [{"code": r["code"], "review_status": "reviewed", "operational_rules": [
                {"alias": f'{r["code"]}.compact', "source_record_id": r["compact"]["record_id"], "enabled_by_default": True}]} for r in packet["decisions"]]}


class ReviewPacketTests(unittest.TestCase):
    def setUp(self):
        self.manifest = synthetic_manifest()
        self.packet = review_packet(self.manifest)

    def test_all_130_unresolved_and_260_preserved(self):
        self.assertEqual((len(self.packet["decisions"]), self.packet["source_record_count"]), (130, 260))
        self.assertEqual(sum(x["different_printed_titles"] for x in self.packet["decisions"]), 13)
        self.assertTrue(all(x["review_status"] == "pending-owner-review" and not x["proposed_operational_rules"] for x in self.packet["decisions"]))

    def test_manifest_collision_and_missing_code_rejected(self):
        broken = deepcopy(self.manifest)
        broken["all_source_variants"][0]["expanded"]["record_id"] = broken["all_source_variants"][0]["compact"]["record_id"]
        with self.assertRaises(ReviewValidationError): review_packet(broken)
        broken = deepcopy(self.manifest)
        broken["all_source_variants"].pop()
        with self.assertRaises(ReviewValidationError): review_packet(broken)

    def test_missing_mappings_cannot_pass(self):
        with self.assertRaises(ReviewValidationError): check_candidate(self.packet, {"decisions": self.packet["decisions"]})

    def test_complete_candidate_is_structural_only(self):
        candidate = complete_candidate(self.packet)
        result = check_candidate(self.packet, candidate)
        self.assertEqual(result["original_codes_reviewed"], 130)
        self.assertIn("not-a-proof", result["status"])
        with self.assertRaises(ReviewValidationError): check_candidate(self.packet, candidate, require_approval=True)

    def test_separate_aliases_per_distinct_meaning(self):
        candidate = complete_candidate(self.packet)
        ar = next(x for x in candidate["decisions"] if x["code"] == "AR-04")
        frozen = next(x for x in self.packet["decisions"] if x["code"] == "AR-04")
        ar["operational_rules"].append({"alias": "AR-04.expanded", "source_record_id": frozen["expanded"]["record_id"], "enabled_by_default": True})
        self.assertEqual(check_candidate(self.packet, candidate)["distinct_operational_aliases"], 131)
        ar["operational_rules"][1]["alias"] = "AR-04.compact"
        with self.assertRaises(ReviewValidationError): check_candidate(self.packet, candidate)

    def test_unknown_variant_and_source_hash_rejected(self):
        candidate = complete_candidate(self.packet)
        candidate["decisions"][0]["operational_rules"][0]["source_record_id"] = "invented:expanded:AR-01"
        with self.assertRaises(ReviewValidationError): check_candidate(self.packet, candidate)
        candidate = complete_candidate(self.packet)
        candidate["raw_source_sha256"] = "incorrect-source"
        with self.assertRaises(ReviewValidationError): check_candidate(self.packet, candidate)

    def test_owner_approval_fields_required_but_not_self_authenticating(self):
        candidate = complete_candidate(self.packet)
        candidate["approval"] = {"status": "owner-approved", "approved_by": "project_owner", "decided_at": "2026-10-09", "evidence_ref": "owner-review-record"}
        self.assertEqual(check_candidate(self.packet, candidate, require_approval=True)["original_codes_reviewed"], 130)

    def test_original_never_overwritten_even_when_out_equals_source(self):
        with tempfile.TemporaryDirectory() as temp:
            source = Path(temp) / "immutable-source.md"
            source.write_text("original immutable author source", encoding="utf-8")
            with self.assertRaises(ReviewValidationError):
                write_private_research_json(source, source, self.packet)
            self.assertEqual(source.read_text(encoding="utf-8"), "original immutable author source")

    def test_symlink_destination_does_not_follow_source(self):
        with tempfile.TemporaryDirectory() as temp:
            source = Path(temp) / "immutable-source.md"
            alias = Path(temp) / "review.json"
            source.write_text("original immutable author source", encoding="utf-8")
            alias.symlink_to(source)
            with self.assertRaises(ReviewValidationError):
                write_private_research_json(source, alias, self.packet)
            self.assertEqual(source.read_text(encoding="utf-8"), "original immutable author source")

    def test_existing_destination_cannot_be_clobbered(self):
        with tempfile.TemporaryDirectory() as temp:
            source = Path(temp) / "immutable-source.md"
            output = Path(temp) / "review.json"
            source.write_text("original immutable author source", encoding="utf-8")
            output.write_text("prior reviewer packet", encoding="utf-8")
            with self.assertRaises(ReviewValidationError):
                write_private_research_json(source, output, self.packet)
            self.assertEqual(output.read_text(encoding="utf-8"), "prior reviewer packet")

    def test_check_failure_does_not_create_output(self):
        with tempfile.TemporaryDirectory() as temp:
            source = Path(temp) / "immutable-source.md"
            output = Path(temp) / "review.json"
            candidate = Path(temp) / "invalid-candidate.json"
            source.write_text("original immutable author source", encoding="utf-8")
            candidate.write_text('{"decisions": []}', encoding="utf-8")
            with patch("r01_review_packet.audit", return_value=self.manifest), \
                 patch.object(sys, "argv", ["r01_review_packet.py", str(source), "--out", str(output), "--check", str(candidate)]):
                with self.assertRaises(ReviewValidationError):
                    main()
            self.assertFalse(output.exists())
            self.assertEqual(source.read_text(encoding="utf-8"), "original immutable author source")


if __name__ == "__main__": unittest.main()


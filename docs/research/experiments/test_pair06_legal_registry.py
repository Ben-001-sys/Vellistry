"""R14/R21 evidence-register schema/coverage checks, NOT legal compliance tests."""
import json
from pathlib import Path
import unittest

PATH=Path(__file__).resolve().parents[1]/"PAIR-06-LEGAL-OPERATING-RISK-REGISTER.json"

class LegalOpsEvidenceTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.data=json.loads(PATH.read_text(encoding="utf8"))
        cls.items={x["id"]:x for x in cls.data["entries"]}

    def test_01_compliance_not_self_certified(self):
        self.assertFalse(self.data["release_approved"])
        self.assertFalse(self.data["counsel_reviewed"])
        self.assertIn("not-compliance",self.data["status"])

    def test_02_all_required_ids_unique(self):
        self.assertEqual(len(self.items),len(self.data["entries"]))
        self.assertEqual(len(self.items),15)

    def test_03_real_primary_evidence_per_record(self):
        for row in self.data["entries"]:
            self.assertTrue(row["topic"] and row["required_action"])
            self.assertTrue(row["source"].startswith("https://") or row["source"].startswith("docs/"))

    def test_04_license_and_distribution_remain_separate(self):
        self.assertEqual(self.items["LIC-01"]["status"],"legal-review-needed")
        self.assertIn("redistribution",self.items["LIC-01"]["topic"].lower())
        self.assertIn("MIT",self.items["LIC-02"]["topic"])
        self.assertIn("MIT",self.items["LIC-03"]["topic"])

    def test_05_gdpr_ghana_roles_are_not_declared_certified(self):
        self.assertIn("registration",self.items["PRIV-02"]["topic"].lower())
        self.assertIn("review",self.items["PRIV-02"]["status"])

    def test_06_no_claim_free_backup_or_production_rpo(self):
        self.assertFalse(self.data["free_services_guaranteed"])
        self.assertIn("missing",self.items["OPS-01"]["topic"].lower())
        self.assertIn("needed",self.items["OPS-03"]["status"])

    def test_07_author_fiction_rights_and_external_models_separate(self):
        self.assertIn("ownership",self.items["PRIV-01"]["topic"].lower())
        self.assertIn("third-party",self.items["PRIV-04"]["topic"].lower())
        self.assertIn("source rights",self.items["IP-01"]["topic"].lower())

    def test_08_all_unresolved_public_release_actions_remain_open(self):
        disallowed={"approved","compliant","deployed","production-ready"}
        self.assertTrue(all(x["status"] not in disallowed for x in self.data["entries"]))

if __name__=="__main__":
    unittest.main()

"""A future Rules Studio must not decide conflicted meanings by code alone."""
import importlib.util
import unittest
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
def load(name,path):
    spec=importlib.util.spec_from_file_location(name,ROOT/path)
    mod=importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod

gate=load("r01_mapping_gate","scripts/r01_mapping_gate.py")
class MappingGateTests(unittest.TestCase):
    def setUp(self):
        self.manifest={"all_source_variants":[{"code":"AR-04",
            "compact":{"record_id":"source-hash:compact:AR-04","title":"Moral complexity"},
            "expanded":{"record_id":"source-hash:expanded:AR-04","title":"Motif evolution"}}]}
        self.approval={"status":"owner-approved","version":"1","approved_by":"owner",
            "decided_at":"2099-01-01","mappings":{"AR-04":"source-hash:expanded:AR-04"}}
    def test_unapproved_mapping_rejected(self):
        for mapping in [None,{},{"status":"proposed","mappings":{"AR-04":"source-hash:compact:AR-04"}}]:
            with self.assertRaises(gate.MappingNotApproved):
                gate.resolve_active_source(self.manifest,mapping,"AR-04")
    def test_bare_code_and_invented_variants_rejected(self):
        for invalid in ["AR-04","source-hash:compact:AR-05","unapproved:something:AR-04"]:
            a={**self.approval,"mappings":{"AR-04":invalid}}
            with self.assertRaises(gate.MappingNotApproved):
                gate.resolve_active_source(self.manifest,a,"AR-04")
    def test_exact_identity_allowed_only_with_full_explicit_approval(self):
        result=gate.resolve_active_source(self.manifest,self.approval,"AR-04")
        self.assertEqual(result["title"],"Motif evolution")
        a={**self.approval,"approved_by":None}
        with self.assertRaises(gate.MappingNotApproved):
            gate.resolve_active_source(self.manifest,a,"AR-04")
if __name__=="__main__":unittest.main()

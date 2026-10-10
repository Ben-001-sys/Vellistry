"""R18 executable synthetic failure-mode contracts. No live Auth or disk."""
import unittest
from copy import deepcopy
from wave06_recovery_contract import DocumentStore, Drafts, Conflict, create_archive,read_archive,pilot_readiness

class ReliabilityContracts(unittest.TestCase):
    def setUp(self):
        self.s=DocumentStore()
        self.d=Drafts()
    def test_01_local_unsynced_draft_not_mislabeled_saved(self):
        self.d.edit("a","c","chapter",1)
        self.assertEqual(self.d.status,"unsaved-local")
        self.assertEqual(self.s.content,"original")
    def test_02_rolled_back_transaction_not_acknowledged(self):
        self.d.edit("a","c","chapter",1)
        with self.assertRaises(RuntimeError):self.s.save("alice",1,"chapter","k1",fail=True)
        self.assertEqual(self.s.revision,1)
        self.assertEqual(self.d.current("a","c"),(1,"chapter"))
    def test_03_committed_save_lost_ack_retry_idempotent(self):
        with self.assertRaises(RuntimeError):self.s.save("alice",1,"chapter","k1",lost_ack=True)
        self.assertEqual(self.s.save("alice",1,"chapter","k1"),2)
        self.assertEqual(self.s.revision,2)
    def test_04_same_key_changed_payload_rejected(self):
        self.s.save("alice",1,"chapter","k1")
        with self.assertRaises(Conflict):self.s.save("alice",1,"different","k1")
    def test_05_stale_second_tab_denied(self):
        self.s.save("alice",1,"first","one")
        with self.assertRaises(Conflict):self.s.save("alice",1,"second","two")
        self.assertEqual(self.s.content,"first")
    def test_06_cross_account_save_denied(self):
        with self.assertRaises(Conflict):self.s.save("bob",1,"stolen","attack")
    def test_07_account_swap_draft_isolation(self):
        self.d.edit("a","c","alice private",1)
        self.d.switch("bob")
        self.assertIsNone(self.d.current("a","c"))
    def test_08_original_account_draft_survives_switch(self):
        self.d.edit("a","c","alice private",1)
        self.d.switch("bob")
        self.d.switch("alice")
        self.assertEqual(self.d.current("a","c"),(1,"alice private"))
    def test_09_late_ack_cannot_delete_newer_local_text(self):
        self.d.edit("a","c","old",1)
        sent=self.d.current("a","c")
        self.d.edit("a","c","new writing",1)
        self.d.ack("a","c",sent,2)
        self.assertEqual(self.d.current("a","c"),(1,"new writing"))
        self.assertEqual(self.d.status,"newer-local-work")
    def test_10_matching_ack_clears_only_matching_local_draft(self):
        self.d.edit("a","c","old",1)
        self.d.ack("a","c",self.d.current("a","c"),2)
        self.assertIsNone(self.d.current("a","c"))
        self.assertEqual(self.d.status,"saved")
    def test_11_unknown_commit_result_retains_original(self):
        self.d.edit("a","c","chapter",1)
        with self.assertRaises(RuntimeError):self.s.save("alice",1,"chapter","key",lost_ack=True)
        self.assertEqual(self.d.status,"unsaved-local")
    def test_12_copied_offline_envelope_restores_unacked_work(self):
        self.d.edit("a","c","unconfirmed",1)
        state=deepcopy(self.d.entries)
        next_tab=Drafts()
        next_tab.resume(state)
        self.assertEqual(next_tab.current("a","c"),(1,"unconfirmed"))
    def test_13_archive_requires_database_and_object_data(self):
        archive=create_archive({"books":["a"],"history":[1,2]},{"cover.png":"sample-bytes"})
        self.assertEqual(read_archive(archive)["objects"]["cover.png"],"sample-bytes")
        self.assertEqual(read_archive(archive)["database"]["history"],[1,2])
    def test_14_archive_mutation_detected(self):
        archive=create_archive({"books":["a"]},{"cover.png":"x"})
        archive["payload"]["database"]["books"].append("b")
        with self.assertRaises(Conflict):read_archive(archive)
    def test_15_archive_restore_makes_independent_copy(self):
        archive=create_archive({"books":["a"]},{})
        restored=read_archive(archive)
        restored["database"]["books"].append("b")
        self.assertEqual(read_archive(archive)["database"]["books"],["a"])
    def test_16_delete_tombstone_blocks_reads_not_backups(self):
        self.s.remove("alice")
        with self.assertRaises(Conflict):self.s.save("alice",1,"new","key")
        self.assertTrue(self.s.backup_cleanup_pending)
    def test_17_other_author_cannot_delete(self):
        with self.assertRaises(Conflict):self.s.remove("bob")
    def test_18_no_object_backup_means_recovery_not_verified(self):
        plan=pilot_readiness(1,1,False)
        self.assertFalse(plan["rpo_met"])
        self.assertFalse(plan["rto_met"])
    def test_19_24_hour_target_is_not_a_guarantee(self):
        plan=pilot_readiness(25,40,True)
        self.assertFalse(plan["rpo_met"])
        self.assertTrue(plan["rto_met"])
        self.assertFalse(plan["verified_public_sla"])
    def test_20_private_pilot_targets_need_independent_evidence(self):
        plan=pilot_readiness(12,18,True)
        self.assertEqual((plan["target_rpo_hours"],plan["target_rto_hours"]),(24,48))
        self.assertTrue(plan["rpo_met"] and plan["rto_met"])
        self.assertFalse(plan["verified_public_sla"])

if __name__=="__main__":unittest.main()

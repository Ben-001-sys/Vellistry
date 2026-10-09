"""R07: human/AI manuscript vs approved profiles, deterministic tests only.

No prose extraction, generative AI, networking, database or production security.
"""
import unittest

from r07_story_state_contract import ContractError, StoryContract


class StoryStateContractTests(unittest.TestCase):
    def setUp(self):
        self.s = StoryContract()
        self.s.create_profile("bookA", "mara", "character", "Mara", {"condition": "well"})
        self.s.create_profile("bookA", "courier", "thread", "Missing courier", {"status": "open"})

    def scene(self, text="Mara injured her left wrist.", *, scene="S1", time=2,
              order=1, accepted=True, origin="human", book="bookA"):
        return self.s.put_scene(
            book, scene, text, story_order=time, discourse_order=order,
            accepted=accepted, origin=origin
        )

    def injury_candidate(self, *, id="P1", scene="S1", field="condition",
                         value="left wrist injured", quote="Mara injured her left wrist.",
                         epistemic="asserted"):
        return self.s.propose(id, "bookA", "mara", field, value, scene, quote, epistemic=epistemic)

    def test_01_ai_off_profiles_both_types_and_visible_baseline(self):
        x = self.s.state_at("bookA", 0)
        self.assertEqual(x["mara"]["facts"]["condition"], "well")
        self.assertEqual(x["courier"]["facts"]["status"], "open")

    def test_02_manual_progression_without_ai(self):
        self.s.manual_update("bookA", "mara", "goal", "leave the city", story_order=2)
        self.assertNotIn("goal", self.s.state_at("bookA", 1)["mara"]["facts"])
        self.assertEqual(self.s.state_at("bookA", 2)["mara"]["facts"]["goal"], "leave the city")

    def test_03_human_scene_produces_candidate_not_canon(self):
        self.scene()
        self.injury_candidate()
        self.assertEqual(self.s.state_at("bookA", 3)["mara"]["facts"]["condition"], "well")
        self.assertEqual(len(self.s.pending("bookA")), 1)

    def test_04_explicit_approval_updates_state_and_provenance(self):
        self.scene()
        self.injury_candidate()
        event = self.s.approve("P1")
        self.assertEqual(event.actor, "author")
        self.assertEqual(event.revision, 1)
        self.assertEqual(self.s.state_at("bookA", 3)["mara"]["facts"]["condition"], "left wrist injured")
        self.assertTrue(self.s.history("bookA", "mara")[0]["current_source"])

    def test_05_rejected_ai_prose_cannot_enter_canon(self):
        self.scene("Mara had healed.", accepted=False, origin="ai", time=3)
        self.s.propose("AI1", "bookA", "mara", "condition", "healed", "S1", "Mara had healed.")
        with self.assertRaises(ContractError):
            self.s.approve("AI1")
        self.assertEqual(self.s.state_at("bookA", 3)["mara"]["facts"]["condition"], "well")

    def test_06_accepted_ai_manuscript_still_needs_profile_approval(self):
        rev=self.scene("Mara had healed.", accepted=False, origin="ai", time=3)
        self.s.propose("AI1", "bookA", "mara", "condition", "healed", "S1", "Mara had healed.")
        self.s.accept_manuscript("bookA", "S1", rev)
        self.assertEqual(self.s.state_at("bookA", 3)["mara"]["facts"]["condition"], "well")
        self.s.approve("AI1")
        self.assertEqual(self.s.state_at("bookA", 3)["mara"]["facts"]["condition"], "healed")

    def test_07_dismiss_never_changes_state(self):
        self.scene()
        self.injury_candidate()
        self.s.dismiss("P1")
        self.assertEqual(self.s.state_at("bookA", 3)["mara"]["facts"]["condition"], "well")
        self.assertFalse(self.s.pending("bookA"))
        with self.assertRaises(ContractError):
            self.s.approve("P1")

    def test_08_author_can_revise_suggestion_before_approval(self):
        self.scene()
        self.injury_candidate()
        self.s.revise_candidate("P1", value="wrist sprained, not broken")
        self.s.approve("P1")
        self.assertEqual(self.s.state_at("bookA", 3)["mara"]["facts"]["condition"], "wrist sprained, not broken")

    def test_09_revision_during_pending_proposal_blocks_stale_approval(self):
        self.scene()
        self.injury_candidate()
        self.scene("Mara touched the cold metal.", scene="S1", time=2)
        self.assertFalse(self.s.pending("bookA")[0]["source_current"])
        with self.assertRaises(ContractError):
            self.s.approve("P1")
        self.assertEqual(self.s.state_at("bookA", 3)["mara"]["facts"]["condition"], "well")

    def test_10_edited_source_invalidates_approved_derived_state_but_keeps_history(self):
        self.scene()
        self.injury_candidate()
        self.s.approve("P1")
        self.scene("Mara touched the cold metal.", scene="S1", time=2)
        self.assertEqual(self.s.state_at("bookA", 3)["mara"]["facts"]["condition"], "well")
        history=self.s.history("bookA", "mara")
        self.assertEqual(len(history), 1)
        self.assertFalse(history[0]["current_source"])

    def test_11_flashback_does_not_use_chapter_display_order_as_story_time(self):
        self.scene()
        self.injury_candidate()
        self.s.approve("P1")
        # Chapter eight is narrated later but happens before the injury.
        self.scene("Mara's wrist was uninjured.", scene="FLASHBACK", time=0, order=8)
        self.s.propose("FB", "bookA", "mara", "condition", "well", "FLASHBACK",
                       "Mara's wrist was uninjured.")
        self.s.approve("FB")
        self.assertEqual(self.s.state_at("bookA", 1)["mara"]["facts"]["condition"], "well")
        self.assertEqual(self.s.state_at("bookA", 2)["mara"]["facts"]["condition"], "left wrist injured")

    def test_12_story_checkpoint_excludes_future_character_knowledge(self):
        self.scene("Elias learns the cipher.", scene="S6", time=6, order=6)
        self.s.create_profile("bookA", "elias", "character", "Elias", {})
        self.s.propose("KN1", "bookA", "elias", "knowledge", "cipher", "S6", "Elias learns the cipher.")
        self.s.approve("KN1")
        self.assertNotIn("knowledge", self.s.state_at("bookA", 2)["elias"]["facts"])
        self.assertEqual(self.s.state_at("bookA", 6)["elias"]["facts"]["knowledge"], "cipher")

    def test_13_character_claim_not_objective_canon(self):
        self.scene("Elias claimed Mara was healed.", time=3)
        self.s.propose("CL1", "bookA", "mara", "condition", "healed",
                       "S1", "Elias claimed Mara was healed.", epistemic="claimed")
        self.s.approve("CL1")
        r=self.s.state_at("bookA", 3)["mara"]
        self.assertEqual(r["facts"]["condition"], "well")
        self.assertEqual(r["claims"], [("condition", "healed", "claimed")])

    def test_14_uncertain_possibility_not_objective_canon(self):
        self.scene("Perhaps Mara was injured.", time=3)
        self.s.propose("U1", "bookA", "mara", "condition", "injured",
                       "S1", "Perhaps Mara was injured.", epistemic="uncertain")
        self.s.approve("U1")
        self.assertEqual(self.s.state_at("bookA", 3)["mara"]["facts"]["condition"], "well")

    def test_15_same_named_character_never_crosses_books(self):
        self.s.create_profile("bookB", "mara", "character", "Mara", {"condition": "uninjured"})
        self.scene()
        self.injury_candidate()
        self.s.approve("P1")
        self.assertEqual(self.s.state_at("bookB", 3)["mara"]["facts"]["condition"], "uninjured")
        with self.assertRaises(ContractError):
            self.s.propose("BAD", "bookB", "mara", "condition", "injured", "S1", "Mara injured her left wrist.")
        self.assertFalse(self.s.pending("bookB"))

    def test_16_missing_quote_is_not_a_source_backed_proposal(self):
        self.scene()
        with self.assertRaises(ContractError):
            self.injury_candidate(quote="Mara became a dragon.")

    def test_17_duplicate_approval_must_not_duplicate_state_events(self):
        self.scene()
        self.injury_candidate()
        self.s.approve("P1")
        with self.assertRaises(ContractError):
            self.s.approve("P1")
        self.assertEqual(len(self.s.history("bookA", "mara")), 1)

    def test_18_story_thread_progresses_only_after_explicit_update(self):
        self.scene("The missing courier was found alive.", time=4)
        self.s.propose("TH1", "bookA", "courier", "status", "resolved", "S1",
                       "The missing courier was found alive.")
        self.assertEqual(self.s.state_at("bookA", 4)["courier"]["facts"]["status"], "open")
        self.s.approve("TH1")
        self.assertEqual(self.s.state_at("bookA", 4)["courier"]["facts"]["status"], "resolved")

    def test_19_unknown_story_order_abstains_instead_of_guessing(self):
        self.scene(time=None)
        self.injury_candidate()
        with self.assertRaises(ContractError):
            self.s.approve("P1")
        with self.assertRaises(ContractError):
            self.s.state_at("bookA", None)

    def test_20_manual_update_survives_unrelated_scene_edit(self):
        self.s.manual_update("bookA", "mara", "goal", "leave city", story_order=1)
        self.scene()
        self.injury_candidate()
        self.s.approve("P1")
        self.scene("Mara touched the cold metal.", time=2)
        r=self.s.state_at("bookA", 3)["mara"]["facts"]
        self.assertEqual(r["goal"], "leave city")
        self.assertEqual(r["condition"], "well")


if __name__ == "__main__":
    unittest.main()

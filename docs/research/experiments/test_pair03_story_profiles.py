"""R07 Pair 03: integration-style deterministic scenario without an AI extractor.

Reuses the existing 20-case approved-proposal research engine; all suggested
facts are hand-authored, not model accuracy measurements.
"""
import unittest
from r07_story_state_contract import StoryContract, ContractError


class Pair03ThreeSceneScenario(unittest.TestCase):
    def setUp(self):
        self.s = StoryContract()
        self.s.create_profile("novel-a", "mara", "character", "Mara", {"condition": "well"})
        self.s.create_profile("novel-a", "elias", "character", "Elias", {"knows_cipher": "no"})
        self.s.create_profile("novel-a", "courier", "thread", "Lost courier", {"status": "open"})
        self.s.create_profile("novel-b", "mara", "character", "Mara", {"condition": "safe"})
        self.s.put_scene("novel-a", "chapter-two", "Mara sprained her wrist.",
                         story_order=4, discourse_order=2)
        self.s.put_scene("novel-a", "chapter-three", "Elias learned the cipher.",
                         story_order=7, discourse_order=3)
        self.s.put_scene("novel-a", "later-written-flashback",
                         "Mara walked unharmed.", story_order=1, discourse_order=8)

    def test_01_ai_off_manual_profile_and_thread(self):
        self.s.manual_update("novel-a", "courier", "status", "search ongoing",
                             story_order=5)
        self.assertEqual(self.s.state_at("novel-a", 6)["courier"]["facts"]["status"],
                         "search ongoing")
        self.assertEqual(self.s.state_at("novel-a", 3)["courier"]["facts"]["status"], "open")

    def test_02_later_written_flashback_cannot_leak_future_injury(self):
        self.s.propose("inj", "novel-a", "mara", "condition", "wrist sprained",
                       "chapter-two", "Mara sprained her wrist.")
        self.s.approve("inj")
        self.assertEqual(self.s.state_at("novel-a", 2)["mara"]["facts"]["condition"],
                         "well")
        self.assertEqual(self.s.state_at("novel-a", 5)["mara"]["facts"]["condition"],
                         "wrist sprained")

    def test_03_later_character_knowledge_not_in_earlier_context(self):
        self.s.propose("know", "novel-a", "elias", "knows_cipher", "yes",
                       "chapter-three", "Elias learned the cipher.")
        self.s.approve("know")
        self.assertEqual(self.s.state_at("novel-a", 3)["elias"]["facts"]["knows_cipher"], "no")
        self.assertEqual(self.s.state_at("novel-a", 8)["elias"]["facts"]["knows_cipher"], "yes")

    def test_04_unaccepted_ai_claim_never_becomes_profile(self):
        self.s.put_scene("novel-a", "unaccepted-ai", "Mara died.", story_order=9,
                         discourse_order=9, origin="ai", accepted=False)
        self.s.propose("ai-death", "novel-a", "mara", "condition", "dead",
                       "unaccepted-ai", "Mara died.")
        with self.assertRaises(ContractError):
            self.s.approve("ai-death")
        self.assertEqual(self.s.state_at("novel-a", 10)["mara"]["facts"]["condition"],
                         "well")

    def test_05_edited_support_blocks_stale_candidate_and_approved_fact(self):
        self.s.propose("inj", "novel-a", "mara", "condition", "sprained",
                       "chapter-two", "Mara sprained her wrist.")
        self.s.approve("inj")
        self.s.put_scene("novel-a", "chapter-two", "Mara was not hurt.",
                         story_order=4, discourse_order=2)
        self.assertEqual(self.s.state_at("novel-a", 5)["mara"]["facts"]["condition"], "well")
        self.assertFalse(self.s.history("novel-a", "mara")[0]["current_source"])
        self.s.propose("healthy", "novel-a", "mara", "condition", "unhurt",
                       "chapter-two", "Mara was not hurt.")
        self.s.approve("healthy")
        self.assertEqual(self.s.state_at("novel-a", 5)["mara"]["facts"]["condition"], "unhurt")

    def test_06_subjective_claim_does_not_overwrite_objective_character_state(self):
        self.s.put_scene("novel-a", "rumor", "Someone claimed Mara was dead.",
                         story_order=6, discourse_order=5)
        self.s.propose("rumor-claim", "novel-a", "mara", "condition", "dead",
                       "rumor", "Someone claimed Mara was dead.",
                       epistemic="claimed")
        self.s.approve("rumor-claim")
        r = self.s.state_at("novel-a", 8)["mara"]
        self.assertEqual(r["facts"]["condition"], "well")
        self.assertIn(("condition", "dead", "claimed"), r["claims"])

    def test_07_same_named_characters_in_other_book_are_isolated(self):
        self.s.propose("inj", "novel-a", "mara", "condition", "sprained",
                       "chapter-two", "Mara sprained her wrist.")
        self.s.approve("inj")
        self.assertEqual(self.s.state_at("novel-b", 9)["mara"]["facts"]["condition"], "safe")
        with self.assertRaises(ContractError):
            self.s.propose("cross", "novel-b", "mara", "condition", "sprained",
                           "chapter-two", "Mara sprained her wrist.")

    def test_08_without_known_story_time_no_false_promotion(self):
        self.s.put_scene("novel-a", "unplaced", "The courier arrived.",
                         story_order=None, discourse_order=10)
        self.s.propose("unplaced", "novel-a", "courier", "status", "returned",
                       "unplaced", "The courier arrived.")
        with self.assertRaises(ContractError):
            self.s.approve("unplaced")
        self.assertEqual(self.s.state_at("novel-a", 10)["courier"]["facts"]["status"],
                         "open")


if __name__ == "__main__":
    unittest.main()

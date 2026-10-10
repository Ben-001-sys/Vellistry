"""Wave 3 temporal/canon and measured synthetic extractor failure tests."""
import json, unittest
from r07_story_state_contract import StoryContract,ContractError
from wave03_extraction_probe import CASES,extract_candidates,study

class TemporalAndAuthorApproval(unittest.TestCase):
    def setUp(self):
        s=StoryContract()
        s.create_profile("book-a","mara","character","Mara",{"condition":"well"})
        s.create_profile("book-a","elias","character","Elias",{"knows_cipher":"no"})
        s.create_profile("book-a","courier","thread","Courier",{"status":"missing"})
        s.create_profile("book-b","mara","character","Mara",{"condition":"safe"})
        self.s=s

    def test_01_flashback_differs_from_reveal_order(self):
        self.s.put_scene("book-a","late-reveal","Mara sprained her wrist.",
                         story_order=5,discourse_order=2)
        self.s.propose("p1","book-a","mara","condition","sprained",
                       "late-reveal","Mara sprained her wrist.")
        self.s.approve("p1")
        self.assertEqual(self.s.state_at("book-a",2)["mara"]["facts"]["condition"],"well")
        self.assertEqual(self.s.state_at("book-a",6)["mara"]["facts"]["condition"],"sprained")

    def test_02_future_information_does_not_enter_prior_chapter(self):
        self.s.put_scene("book-a","cipher","Elias learned the cipher.",
                         story_order=10,discourse_order=1)
        self.s.propose("p2","book-a","elias","knows_cipher","yes","cipher",
                       "Elias learned the cipher.")
        self.s.approve("p2")
        self.assertEqual(self.s.state_at("book-a",9)["elias"]["facts"]["knows_cipher"],"no")

    def test_03_rejected_ai_text_never_leaks_to_profile(self):
        self.s.put_scene("book-a","ai","Mara died.",story_order=7,discourse_order=9,
                         origin="ai",accepted=False)
        self.s.propose("p3","book-a","mara","condition","dead","ai","Mara died.")
        with self.assertRaises(ContractError):self.s.approve("p3")
        self.assertEqual(self.s.state_at("book-a",8)["mara"]["facts"]["condition"],"well")

    def test_04_accepted_ai_prose_still_requires_profile_review(self):
        rev=self.s.put_scene("book-a","ai","Mara died.",story_order=7,discourse_order=9,
                             origin="ai",accepted=False)
        self.s.propose("p4","book-a","mara","condition","dead","ai","Mara died.")
        self.s.accept_manuscript("book-a","ai",rev)
        self.assertEqual(self.s.state_at("book-a",8)["mara"]["facts"]["condition"],"well")
        self.s.approve("p4")
        self.assertEqual(self.s.state_at("book-a",8)["mara"]["facts"]["condition"],"dead")

    def test_05_stale_quote_revision_cannot_authorize_approval(self):
        self.s.put_scene("book-a","one","Mara sprained her wrist.",story_order=2,discourse_order=1)
        self.s.propose("p5","book-a","mara","condition","sprained","one","Mara sprained her wrist.")
        self.s.put_scene("book-a","one","Mara did not hurt her wrist.",story_order=2,discourse_order=1)
        with self.assertRaises(ContractError):self.s.approve("p5")

    def test_06_approved_fact_source_revision_invalidation(self):
        self.s.put_scene("book-a","one","Mara sprained her wrist.",story_order=2,discourse_order=1)
        self.s.propose("p6","book-a","mara","condition","sprained","one","Mara sprained her wrist.")
        self.s.approve("p6")
        self.s.put_scene("book-a","one","Mara was never hurt.",story_order=2,discourse_order=1)
        self.assertEqual(self.s.state_at("book-a",4)["mara"]["facts"]["condition"],"well")
        self.assertFalse(self.s.history("book-a","mara")[0]["current_source"])

    def test_07_hearsay_does_not_override_asserted_objective_state(self):
        self.s.put_scene("book-a","rumor","Someone said Mara was dead.",story_order=4,discourse_order=2)
        self.s.propose("p7","book-a","mara","condition","dead","rumor",
                       "Someone said Mara was dead.",epistemic="claimed")
        self.s.approve("p7")
        state=self.s.state_at("book-a",5)["mara"]
        self.assertEqual(state["facts"]["condition"],"well")
        self.assertIn(("condition","dead","claimed"),state["claims"])

    def test_08_unknown_story_time_blocks_factual_promotion(self):
        self.s.put_scene("book-a","floating","The courier returned.",
                         story_order=None,discourse_order=1)
        self.s.propose("p8","book-a","courier","status","returned","floating",
                       "The courier returned.")
        with self.assertRaises(ContractError):self.s.approve("p8")

    def test_09_different_book_same_name_stays_isolated(self):
        self.s.manual_update("book-a","mara","condition","injured",story_order=2)
        self.assertEqual(self.s.state_at("book-b",6)["mara"]["facts"]["condition"],"safe")

    def test_10_author_manual_progression_without_ai(self):
        self.s.manual_update("book-a","courier","status","found",story_order=5)
        self.assertEqual(self.s.state_at("book-a",4)["courier"]["facts"]["status"],"missing")
        self.assertEqual(self.s.state_at("book-a",6)["courier"]["facts"]["status"],"found")

class ExtractionQualityCharacterization(unittest.TestCase):
    def test_11_all_candidates_are_pending_and_case_labels_present(self):
        self.assertEqual(len(CASES),24)
        self.assertEqual(len({x.id for x in CASES}),24)
        for case in CASES:
            for proposal in extract_candidates(case.text):
                self.assertEqual(proposal["status"],"pending_unapproved")

    def test_12_quantify_false_positive_and_false_negative_not_100_percent(self):
        result=study()
        self.assertEqual(result["sample_size"],24)
        self.assertEqual(result["TP"]+result["FN"],10)
        self.assertEqual(result["FP"]+result["TN"],14)
        self.assertGreater(result["FP"],0)
        self.assertGreater(result["FN"],0)
        self.assertLess(result["precision"],1)
        self.assertLess(result["recall"],1)
        print("WAVE03 SYNTHETIC DETERMINISTIC EXTRACTOR BENCHMARK",
              json.dumps({k:v for k,v in result.items() if k not in ("per_case","errors")},
                         sort_keys=True))
        print("WAVE03 LABLED MISCLASSIFICATIONS",
              json.dumps(result["errors"],sort_keys=True))

if __name__=="__main__":unittest.main()

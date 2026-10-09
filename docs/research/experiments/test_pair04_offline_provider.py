"""No keys, no network, no LLM; tests the research-only boundary, NOT quality."""
from dataclasses import replace
from pathlib import Path
import json
import unittest
from pair04_offline_provider_protocol import ProviderPolicy, Blocked, make_preview, simulate_provider, redacted_log

HERE = Path(__file__).resolve().parent
SOURCE = HERE.parent / "independent-alternatives" / "pairs-04-05" / "R19_SYNTHETIC_FICTION_CORPUS_v0.1.jsonl"


class ProviderTests(unittest.TestCase):
    def setUp(self):
        self.policy = ProviderPolicy("model-pinned-v1", "research-stub", True, True,
                                     allow_remote_manuscript=True)
        self.args = dict(book_id="novel-A", selected_text="Mara carried a lantern.",
                         approved_facts=("Mara is injured",), author_goal="Rewrite selected passage",
                         author_rules=("Retain the sparse tone",))

    def preview(self, **overrides):
        return make_preview(**(self.args | overrides), policy=self.policy)

    def test_01_explicit_consent_disclosure_and_no_default_transfer(self):
        for p in [replace(self.policy, consent=False), replace(self.policy, privacy_reviewed=False),
                  replace(self.policy, allow_remote_manuscript=False)]:
            with self.assertRaises(Blocked):
                make_preview(**self.args, policy=p)

    def test_02_zero_paid_policy_rejects_positive_budget(self):
        with self.assertRaises(Blocked):
            make_preview(**self.args, policy=replace(self.policy, usage_usd_ceiling=0.01))

    def test_03_selected_book_only_with_explicit_approved_facts(self):
        preview = self.preview()
        self.assertEqual(preview["submitted_content"]["book_id"], "novel-A")
        self.assertNotIn("unapproved_profile_proposals", preview["submitted_content"])
        self.assertIn("other_book_chapters", preview["omitted"])
        self.assertFalse(preview["actual_model_call"])

    def test_04_oversized_input_fails_without_silent_truncation(self):
        with self.assertRaises(Blocked):
            self.preview(selected_text="x" * 5000)

    def test_05_model_identity_and_output_budget_required(self):
        with self.assertRaises(Blocked):
            make_preview(**self.args, policy=replace(self.policy, model_id=""))
        with self.assertRaises(Blocked):
            make_preview(**self.args, policy=replace(self.policy, max_output_tokens=100000))

    def test_06_all_failure_states_never_mutate_manuscript(self):
        for event in ("unauthorized_401", "forbidden_403", "rate_limited_429",
                      "timeout", "stream_interrupted", "refused", "malformed_output"):
            result = simulate_provider(self.preview(), event)
            self.assertTrue(result["status"].startswith("failed_"))
            self.assertIsNone(result["proposal"])
            self.assertFalse(result["manuscript_changed"])

    def test_07_success_only_creates_unapproved_proposal_and_cancel_is_safe(self):
        x = self.preview()
        result = simulate_provider(x, "ok")
        self.assertEqual(result["status"], "review_only")
        self.assertFalse(result["manuscript_changed"])
        self.assertIsNone(simulate_provider(x, "ok", canceled=True)["proposal"])

    def test_08_redacted_logs_no_source_text_or_secret(self):
        x = self.preview()
        result = simulate_provider(x, "rate_limited_429")
        text = json.dumps(redacted_log(x, result))
        self.assertNotIn("Mara", text)
        self.assertNotIn("injured", text)
        self.assertNotIn("lantern", text)
        self.assertNotIn("secret", text)

    def test_09_non_tuple_context_blocked_no_implicit_unapproved_data(self):
        with self.assertRaises(Blocked):
            self.preview(approved_facts=["pending unknown fact"])

    def test_10_invalid_provider_event_blocked(self):
        with self.assertRaises(Blocked):
            simulate_provider(self.preview(), "invented_provider_200")


class FictionCorpusTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.cases = [json.loads(line) for line in SOURCE.read_text(encoding="utf8").splitlines() if line.strip()]

    def test_11_corpus_consistent_ids_and_stratification(self):
        self.assertEqual(len(self.cases), 14)
        self.assertEqual(len({c["id"] for c in self.cases}), 14)
        self.assertGreaterEqual(len({c["genre"] for c in self.cases}), 6)

    def test_12_model_outputs_and_human_scores_must_stay_empty(self):
        self.assertTrue(all(c["model_outputs"] == [] and c["human_ratings"] == [] for c in self.cases))
        self.assertTrue(all(c["origin"] == "synthetic-original-research-fixture" for c in self.cases))

    def test_13_each_case_has_reproducible_human_checks_and_approved_facts(self):
        self.assertTrue(all(c["approved_facts"] and len(c["expected_human_review_checks"]) >= 2
                            and c["author_goal"] and c["source_passage"] for c in self.cases))

    def test_14_contains_exceptions_non_linearity_and_pov_cases(self):
        self.assertTrue(any(c["deliberate_exception"] != "None" for c in self.cases))
        self.assertTrue(any("flashback" in c["chronology"] or "nonlinear" in c["chronology"] for c in self.cases))
        self.assertTrue(any(c["pov"].startswith("second") for c in self.cases))
        self.assertTrue(any(c["task"] == "rewrite" for c in self.cases))


if __name__ == "__main__":
    unittest.main()

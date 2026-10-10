"""Check current repository status vs source-of-truth design gate boundaries.

This verifies document consistency in one checkout; it cannot interrogate live
GitHub state, prove research results, or authorize owner decisions.
"""
from __future__ import annotations

import re
import unittest
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
STATE = ROOT / "CURRENT-STATE.md"
GATE = ROOT / "docs/research/SIX-PAIR-RESEARCH-TO-DESIGN-GATE-2026-10-09.md"
PLAN = ROOT / "docs/plans/RESEARCH-PAIR-AND-PREIMPLEMENTATION-DESIGN-2026-10-09.md"
DECISION = ROOT / "docs/plans/DESIGN-ENTRY-DECISION-2026-10-10.md"
SCOPE = ROOT / "docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md"
SOURCE = ROOT / "docs/decisions/ADR-0007-immutable-compact-expanded-guidance-sources.md"


def read_doc(path: Path):
    raw = path.read_text(encoding="utf-8")
    match = re.match(r"\A---\n(.*?)\n---\n", raw, flags=re.S)
    if not match:
        raise ValueError(f"{path}: YAML metadata missing")
    metadata = yaml.safe_load(match.group(1))
    if not isinstance(metadata, dict):
        raise ValueError(f"{path}: invalid metadata")
    return metadata, raw[match.end():]


class ResearchDesignGateTests(unittest.TestCase):
    def test_all_six_merged_pair_evidence_links_present(self):
        meta, body = read_doc(GATE)
        self.assertEqual(meta["status"], "proposed-owner-review")
        for pair in range(1, 7):
            self.assertIn(f"**0{pair} —", body)
        for num in (28, 29, 32, 34, 36, 37, 38, 39, 40, 41, 42):
            self.assertIn(f"/pull/{num}", body)
        self.assertIn("completing every research acceptance criterion", body)
        self.assertNotIn("Pair02 #37 and alternatives #39", body)

    def test_current_snapshot_precedes_preserved_old_checkpoints(self):
        meta, body = read_doc(STATE)
        self.assertEqual(meta["status"], "active")
        marker = "## Current authoritative checkpoint — 2026-10-10"
        self.assertIn(marker, body)
        self.assertIn("## Historical phase and branch snapshots", body)
        self.assertLess(body.index(marker), body.index("## Historical phase and branch snapshots"))
        snap = body.split("## Historical phase and branch snapshots")[0]
        self.assertIn("e7f1c82ced0a4e8b3196aaa7e5b874b41afc4523", snap)
        self.assertIn("PR #43", snap)
        self.assertIn("21 original missing research source files", snap)
        self.assertIn("PR #28", snap)
        self.assertIn("OPTION B ACCEPTED", snap)
        self.assertNotIn("NOT yet in `main` until PR #43 merges", snap)
        self.assertIn("Issue #18", snap)
        self.assertIn("Issue #27", snap)
        self.assertNotIn("PR #28 remains unmerged", snap)

    def test_owner_option_b_recorded_without_design_authorization(self):
        meta, body = read_doc(DECISION)
        self.assertEqual(meta["status"], "accepted")
        self.assertEqual(meta.get("approved_by"), "project_owner")
        self.assertEqual(str(meta.get("decision_at")), "2026-10-10")
        self.assertIn("**Selected option:** B", body)
        self.assertIn("**Design authorization:** NOT GIVEN", body)
        self.assertIn("**Implementation authorization:** NOT GIVEN", body)
        self.assertIn("invented story excerpts", body)
        self.assertIn("two different UI explorations", body)

    def test_design_first_plan_preserved_and_merge_variance_disclosed(self):
        meta, body = read_doc(PLAN)
        self.assertEqual(meta["status"], "owner-directed")
        self.assertIn("Integration annotation — 2026-10-10", body)
        self.assertIn("retrospectively prove research acceptance", body)
        self.assertIn("design-first feature-implementation hold continues", body)
        self.assertIn("maximum two", body)

    def test_merged_research_artifacts_are_really_in_this_checkout(self):
        # PR state alone is insufficient: this exact omission was observed after
        # merging #29/#32/#34/#36 and #40/#41 on 2026-10-10.
        expected = (
            ".github/workflows/k2-supabase-auth-rls.yml",
            "apps/api/tests/README.md",
            "apps/api/tests/supabase-auth-rls.integration.mjs",
            "docs/research/K2-LOCAL-SUPABASE-AUTH-RLS-2026-10-09.md",
            "docs/research/K2B-DATA-API-LOCKDOWN-2026-10-09.md",
            "docs/research/K2B-SESSION-AND-MANUSCRIPT-EXPOSURE-2026-10-09.md",
            "apps/api/tests/k2b-session-exposure.integration.mjs",
            "apps/api/tests/k2b-data-api-lockdown.integration.mjs",
            "apps/api/tests/k2b-active-session-row.integration.mjs",
            "apps/api/tests/k2b-private-nest-gateway.integration.mjs",
            "supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql",
            ".github/workflows/pair04-offline-provider-corpus.yml",
            "docs/research/PAIR-04-OFFLINE-PROVIDER-CORPUS-2026-10-09.md",
            "docs/research/experiments/pair04_offline_provider_protocol.py",
            "docs/research/experiments/test_pair04_offline_provider.py",
            ".github/workflows/pair05-synthetic-rules-tiptap.yml",
            "docs/research/PAIR-05-SYNTHETIC-RULES-REVERSIBLE-EDIT-2026-10-09.md",
            "docs/research/experiments/pair05_synthetic_rules.py",
            "docs/research/experiments/test_pair05_synthetic_rules.py",
            "docs/research/spikes/tiptap3-headless/pair05_patch.test.mjs",
        )
        missing = [p for p in expected if not (ROOT / p).is_file()]
        self.assertEqual(missing, [], f"Previously merged research files missing: {missing}")
        api_package = (ROOT / "apps/api/package.json").read_text(encoding="utf-8")
        supabase_config = (ROOT / "supabase/config.toml").read_text(encoding="utf-8")
        self.assertIn('"pg": "^8.16.3"', api_package, "K2 restricted-gateway research dependency missing")
        self.assertIn("[auth.email]", supabase_config, "K2 disposable Auth testing configuration missing")
        self.assertIn("enable_confirmations = false", supabase_config)

    def test_post_merge_status_is_authoritative_without_design_approval(self):
        readme = (ROOT / "README.md").read_text(encoding="utf-8")
        recovery_meta, recovery_text = read_doc(
            ROOT / "docs/reports/REPOSITORY-INTEGRITY-RECOVERY-2026-10-10.md"
        )
        gate_meta, gate = read_doc(GATE)
        decision_meta, decision = read_doc(DECISION)
        state_meta, state = read_doc(STATE)

        self.assertIn("PR #43", readme)
        self.assertIn("**merged on 2026-10-10**", readme)
        self.assertNotIn("restoration is proposed", readme)
        self.assertIn("e7f1c82ced0a4e8b3196aaa7e5b874b41afc4523", gate)
        self.assertIn("previously missing **21**", gate)
        self.assertIn("seven", gate.lower())
        self.assertEqual(recovery_meta["status"], "restoration-merged-and-research-ci-verified")
        self.assertIn("## Post-merge outcome", recovery_text)
        self.assertIn("seven GitHub Actions workflows", recovery_text)
        self.assertEqual(gate_meta["status"], "proposed-owner-review")
        self.assertEqual(decision_meta["status"], "accepted")
        self.assertEqual(decision_meta["approved_by"], "project_owner")
        self.assertEqual(str(decision_meta["decision_at"]), "2026-10-10")
        self.assertIn("**Selected option:** B", decision)
        self.assertIn("**Design authorization:** NOT GIVEN", decision)
        self.assertIn("**Implementation authorization:** NOT GIVEN", decision)
        self.assertIn("OPTION B ACCEPTED", state)
        self.assertEqual(state_meta["status"], "active")

    def test_exact_owner_option_b_decision_and_two_track_research_plan(self):
        record_path = ROOT / "docs/history/2026-10-10-owner-option-b-predesign-selected.md"
        plan_path = ROOT / "docs/plans/OPTION-B-PREDESIGN-RESEARCH-CLOSEOUT-2026-10-10.md"
        record, decision = read_doc(record_path)
        plan, instructions = read_doc(plan_path)
        self.assertEqual(record["status"], "recorded")
        self.assertEqual(record["actor"], "project_owner")
        self.assertEqual(str(record["occurred_on"]), "2026-10-10")
        self.assertIn(
            "I choose Vellistry design-entry Option B: complete outstanding "
            "pre-design research and owner-critical decisions before prototypes.",
            decision,
        )
        self.assertEqual(plan["status"], "owner-directed")
        self.assertIn("Maximum two concurrent tracks", instructions)
        self.assertIn("1 — COMPLETE", instructions)
        self.assertIn("2 — COMPLETE", instructions)
        self.assertIn("3 — ACTIVE", instructions)
        self.assertIn("Wave 2 one-pass closeout", instructions)
        self.assertIn("R15/K2B", instructions)
        self.assertIn("R07", instructions)
        self.assertIn("Wave 1 bounded one-pass closeout", instructions)
        self.assertIn("NOT RUN", instructions)
        self.assertIn("OWNER DECISION NEEDED", instructions)
        self.assertIn("R02/R03", instructions)
        self.assertIn("R01", instructions)
        self.assertIn("No UI exploration", instructions)
        self.assertIn("new explicit owner instruction", decision)
        self.assertNotIn("Option A accepted", decision)

    def test_wave_one_public_author_research_is_not_mislabeled_interviews(self):
        path = ROOT / "docs/research/OPTION-B-WAVE01-R02-R03-ONE-PASS-AUTHOR-EVIDENCE-2026-10-10.md"
        meta, body = read_doc(path)
        self.assertEqual(meta["status"], "completed-secondary-research-real-participants-not-run")
        for id in range(1, 12):
            self.assertIn(f"VEL-JRN-{id:03}", body)
        self.assertIn("no real users were recruited", body)
        self.assertIn("12-signal", body)
        self.assertIn("ten-vendor", body)
        self.assertIn("without retroactively certifying missing author results", body)

    def test_wave_one_mapping_proposal_preserves_source_and_owner_gate(self):
        path = ROOT / "docs/research/OPTION-B-WAVE01-R01-260-SOURCE-MAPPING-REVIEW-2026-10-10.md"
        meta, body = read_doc(path)
        self.assertEqual(meta["status"], "review-packet-prepared-owner-activation-not-approved")
        self.assertIn("fda917550811ccf44fe2fa7993d14a0f4f64d6dde5299d0c5b078865c4f0f965", body)
        for code in ("AR-02", "AR-04", "AR-06", "AR-09"):
            self.assertIn(code, body)
        self.assertIn("260", body)
        self.assertIn("134", body)
        self.assertIn("OWNER DECISION NEEDED", body)
        self.assertIn("no operational pack is activated".lower(), body.lower())
        self.assertIn("AI usage itself opt-in", body)

    def test_wave_two_research_findings_do_not_certify_at_or_arbitrary_docx(self):
        p=ROOT / "docs/research/OPTION-B-WAVE02-R05-R16-EDITOR-ACCESSIBILITY-2026-10-10.md"
        d=ROOT / "docs/research/OPTION-B-WAVE02-R11-DOCX-AND-PORTABLE-RESTORE-2026-10-10.md"
        ed,eb=read_doc(p)
        dd,db=read_doc(d)
        self.assertIn("native-at-not-run",ed["status"])
        self.assertIn("role=textbox",eb)
        self.assertIn("aria-label",eb)
        self.assertIn("NOT RUN",eb)
        self.assertIn("12/12",db)
        self.assertIn("10/10",db)
        self.assertIn("5 original paragraphs became 4",db)
        self.assertIn("NOT RUN",db)
        self.assertIn("Wave 3",db)

    def test_owner_accepted_mvp_and_source_preservation_unchanged(self):
        meta, _ = read_doc(SCOPE)
        self.assertEqual(meta["status"], "accepted")
        policy, text = read_doc(SOURCE)
        self.assertEqual(policy["status"], "accepted")
        self.assertIn("260", text)
        _, gate = read_doc(GATE)
        self.assertIn("134-control mapping is only proposed", gate)
        self.assertIn("security", gate.lower())
        self.assertIn("DOCX", gate)
        self.assertIn("Owner decision checklist", gate)


if __name__ == "__main__":
    unittest.main()

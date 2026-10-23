"""Issue72 repository entrypoint contracts, not executor identity enforcement.

Live GitHub facts are sourced snapshots; these checks do not grant approval.
"""
import hashlib
from pathlib import Path
import re
import subprocess
import unittest
import yaml

ROOT = Path(__file__).resolve().parents[1]
BASE = "a8751190073f682caabdc2897d8f64bc59ac9ebb"
ARCHIVE = "docs/reports/CURRENT-STATE-ARCHIVE-2026-10-16.md"
ADR = "docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md"
SNAP = "docs/agent-workflow/inputs/VEL-TASK-0008/pr66/"


def read(path):
    return (ROOT / path).read_text(encoding="utf-8")


class GovernanceEntrypoints(unittest.TestCase):
    def test_current_checkpoint_discloses_verified_main_and_security_holds(self):
        state = read("CURRENT-STATE.md")
        self.assertLess(len(state.encode()), 11000)
        for token in ("23fd8488df060e1591be70232abd70f4255e814d", "39868833625",
                      "G_DESIGN", "G_CODE", "G_PRIVATE_PILOT", "G_RELEASE",
                      "NOT_RUN", "JWT", "unapproved", "VEL-CP-0041",
                      "PR #83", "PR #65", "PR #68", "PR #59",
                      "planning-only", "SRC-004", "IN_VERIFICATION"):
            self.assertIn(token, state)
        self.assertNotIn("PR #70, unmerged", state)
        self.assertNotIn("PR #64 remains **Draft and unmerged**", state)
        self.assertIn("docs/reports/CURRENT-STATE-ARCHIVE-2026-10-22.md", state)

    def test_archive_preserves_original_git_bytes(self):
        original = subprocess.check_output(["git", "show", BASE + ":CURRENT-STATE.md"], cwd=ROOT)
        # Canonical Git bytes, with checkout CRLF normalized for Windows.
        archived = (ROOT / ARCHIVE).read_bytes().replace(b"\r\n", b"\n")
        self.assertEqual(hashlib.sha256(original).digest(), hashlib.sha256(archived).digest())

    def test_agent_role_and_lightweight_exception_are_explicit(self):
        agents = read("AGENTS.md")
        for token in ("Codex", "ChatGPT", "owner", "Coordinator write access",
                      "explicit owner task exception", "Lightweight governance",
                      "Qualifying implementation", "before implementation", "immutable",
                      "ExecutionBundle", "Issue #73"):
            self.assertIn(token, agents)
        self.assertNotIn("This workflow remains a v0.1 proposal until", agents)
        self.assertIn("Automatic PR-to-task compliance is implemented", agents)
        self.assertIn("not authenticated runtime identity or human approval", agents)

    def test_adr_preserves_chatgpt_decision_and_known_source_gap(self):
        old = read(SNAP + ADR)
        current = read(ADR)
        # Preserve original owner decision, alternatives and rationale exactly.
        for section, following in (("## Decision", "## Alternatives considered"),
                                   ("## Alternatives considered", "## Rationale"),
                                   ("## Rationale", "## Consequences and trade-offs")):
            self.assertEqual(old.split(section, 1)[1].split(following, 1)[0],
                             current.split(section, 1)[1].split(following, 1)[0])
        self.assertIn("ChatGPT-authored", current)
        self.assertIn("conversation permalink has not been archived", current)
        self.assertIn("38970500477", current)
        self.assertIn("PR #66", current)
        meta = yaml.safe_load(current.split("---", 2)[1])
        self.assertEqual(meta["author"], "project-research")
        self.assertEqual(meta["approved_by"], "project_owner")

    def test_original_owner_event_is_not_reauthored(self):
        event = "docs/history/2026-10-14-owner-selects-codex-primary-implementation.md"
        self.assertEqual(read(SNAP + event), read(event))

    def test_active_readme_uses_merged_ci_and_cloud_boundary(self):
        text = read("README.md")
        self.assertIn("CURRENT-STATE.md", text)
        self.assertIn(".github/workflows/ci.yml", text)
        self.assertIn("manual-only", text)
        self.assertIn("Supabase Cloud", text)
        self.assertIn("disposable", text)
        self.assertIn("not required", text)
        self.assertNotIn("Current development gate â€” updated 2026-10-10", text)

    def test_gates_and_bounded_task_exception_do_not_grant_release(self):
        text = read("docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md")
        for token in ("G_DESIGN", "G_CODE", "G_PRIVATE_PILOT", "G_RELEASE",
                      "task-specific exception", "does not promote", "Issue #73",
                      "Coordinator write access", "Lightweight governance"):
            self.assertIn(token, text)
        # Existing machine gate controls remain pending; no schema relaxation.
        dag = read("docs/agent-workflow/IMPLEMENTATION-TASK-DEPENDENCIES.yaml")
        self.assertNotRegex(dag, r"state:\s*approved")

    def test_relative_links_in_active_entrypoints_resolve(self):
        for name in ("AGENTS.md", "README.md", "PROJECT.md", "SOURCE-OF-TRUTH.md", "CURRENT-STATE.md", ADR):
            for target in re.findall(r"\]\(([^)]+)\)", read(name)):
                if "://" in target or target.startswith("#"):
                    continue
                target = target.split("#")[0]
                self.assertTrue(((ROOT / name).parent / target).exists(), (name, target))


if __name__ == "__main__":
    unittest.main()

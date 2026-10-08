"""Stage 3 handoff contract regression tests, using only repo-owned fixtures."""
from __future__ import annotations

import sys
import tempfile
import unittest
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
import agent_workflow as wf  # noqa: E402


class HandoffWorkflowTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.task_path = ROOT / "docs/agent-workflow/tasks/VEL-TASK-0001.yaml"
        cls.pack_path = ROOT / "docs/agent-workflow/context-packs/VEL-CP-0001.md"
        cls.bundle_path = ROOT / "docs/agent-workflow/execution-bundles/VEL-EB-0001.md"
        cls.task = wf.check_task(cls.task_path)
        cls.pack, _ = wf.frontmatter(cls.pack_path)

    def test_repository_pilot_validates(self):
        wf.validate_all()

    def test_task_preserves_source_gap_and_draft_status(self):
        self.assertEqual(self.task["status"], "ready")
        self.assertEqual(self.task["source_gaps"][0]["id"], "SRC-001")
        statuses = {item["path"]: item["source_status"] for item in self.pack["inputs"]}
        self.assertEqual(statuses["docs/research/R01-SRC001-USER-INTENT-EXTRACTION.md"], "draft")
        self.assertEqual(statuses["PROJECT-CONSTITUTION.md"], "accepted")

    def test_pack_generation_is_valid_and_embeds_snapshots(self):
        commit = wf.git("rev-parse", "HEAD").decode().strip()
        rendered = wf.render_pack(self.task, commit)
        with tempfile.TemporaryDirectory() as d:
            path = Path(d) / "VEL-CP-0001.md"
            path.write_text(rendered, encoding="utf-8")
            wf.check_pack(path, {self.task["id"]: self.task})
            self.assertIn("INT-09", rendered)
            self.assertIn("Source contents below are verbatim Git snapshots", rendered)

    def test_source_blob_tampering_fails(self):
        original = self.pack_path.read_text(encoding="utf-8")
        blob = self.pack["inputs"][0]["git_blob_sha"]
        with tempfile.TemporaryDirectory() as d:
            path = Path(d) / "VEL-CP-0001.md"
            path.write_text(original.replace(blob, "f" * 40, 1), encoding="utf-8")
            with self.assertRaisesRegex(ValueError, "source blob does not belong"):
                wf.check_pack(path, {self.task["id"]: self.task})

    def test_source_role_spoofing_fails(self):
        original = self.pack_path.read_text(encoding="utf-8")
        with tempfile.TemporaryDirectory() as d:
            path = Path(d) / "VEL-CP-0001.md"
            path.write_text(original.replace("role: draft-research", "role: governing-policy", 1), encoding="utf-8")
            with self.assertRaisesRegex(ValueError, "authority/status mismatch"):
                wf.check_pack(path, {self.task["id"]: self.task})

    def test_source_snapshot_text_tampering_fails(self):
        original = self.pack_path.read_text(encoding="utf-8")
        with tempfile.TemporaryDirectory() as d:
            path = Path(d) / "VEL-CP-0001.md"
            path.write_text(original.replace("# Vellistry Project Constitution", "# ALTERED CONSTITUTION", 1), encoding="utf-8")
            with self.assertRaisesRegex(ValueError, "modified embedded snapshot"):
                wf.check_pack(path, {self.task["id"]: self.task})

    def test_unapproved_bundle_cannot_claim_accepted(self):
        raw = self.bundle_path.read_text(encoding="utf-8")
        raw = raw.replace("status: proposed-for-review", "status: accepted", 1)
        with tempfile.TemporaryDirectory() as d:
            path = Path(d) / "VEL-EB-0001.md"
            path.write_text(raw, encoding="utf-8")
            with self.assertRaisesRegex(ValueError, "accepted bundle without approved"):
                wf.check_bundle(path, {self.task["id"]: self.task}, {self.pack["id"]: self.pack})

    def test_unsafe_paths_rejected(self):
        for path in ("../README.md", "/etc/passwd", "docs/../.env", ".git/config", "secrets/token.txt"):
            with self.subTest(path=path):
                with self.assertRaises(ValueError):
                    wf.safe_path(path)

    def test_missing_task_field_fails(self):
        raw = self.task_path.read_text(encoding="utf-8")
        data = yaml.safe_load(raw)
        del data["objective"]
        with tempfile.TemporaryDirectory() as d:
            path = Path(d) / "VEL-TASK-0001.yaml"
            path.write_text(yaml.safe_dump(data), encoding="utf-8")
            with self.assertRaisesRegex(ValueError, "missing required fields"):
                wf.check_task(path)

    def test_bundle_assessment_is_not_formal_approval(self):
        meta, _ = wf.frontmatter(self.bundle_path)
        self.assertEqual(meta["status"], "proposed-for-review")
        self.assertEqual(meta["review"]["status"], "pending")
        self.assertIsNone(meta["review"]["approved_by"])


if __name__ == "__main__":
    unittest.main()

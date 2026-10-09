"""Detached ContextPack handoff: no Git repository and no previous conversation."""
from __future__ import annotations

import json
import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE_PACK = ROOT / "docs/agent-workflow/context-packs/VEL-CP-0001.md"
SOURCE_READER = ROOT / "scripts/handoff_recovery.py"


class ColdStartHandoffTests(unittest.TestCase):
    def setUp(self):
        self.directory = tempfile.TemporaryDirectory()
        self.addCleanup(self.directory.cleanup)
        self.root = Path(self.directory.name)
        self.script = self.root / "reader.py"
        self.pack = self.root / "only-packet.md"
        shutil.copyfile(SOURCE_READER, self.script)
        shutil.copyfile(SOURCE_PACK, self.pack)
        self.assertFalse((self.root / ".git").exists())

    def run_reader(self):
        return subprocess.run(
            [sys.executable, str(self.script), str(self.pack)],
            cwd=self.root, capture_output=True, text=True, check=False,
        )

    def test_recovers_task_from_packet_with_no_repo_or_chat(self):
        completed = self.run_reader()
        self.assertEqual(completed.returncode, 0, completed.stderr)
        result = json.loads(completed.stdout)
        self.assertEqual(result["task_id"], "VEL-TASK-0001")
        self.assertEqual(result["context_pack_id"], "VEL-CP-0001")
        self.assertEqual(result["allowed_actions"], ["read", "analyze", "propose"])
        self.assertIn("Merging pull requests", result["owner_approval_required"])
        self.assertIn("Approving a product MVP", result["scope_out"])
        self.assertEqual(result["known_missing_sources"], ["SRC-001"])
        sources = {x["path"]: x for x in result["sources"]}
        self.assertEqual(sources["PROJECT-CONSTITUTION.md"]["status"], "accepted")
        self.assertEqual(sources["docs/requirements/REQUIREMENTS.md"]["status"], "draft")
        self.assertEqual(len(sources), 5)
        self.assertFalse(result["limitations"]["git_integrity_verified"])
        self.assertFalse(result["limitations"]["independent_ai_agent_tested"])

    def test_missing_permission_field_fails(self):
        raw = self.pack.read_text(encoding="utf-8")
        self.pack.write_text(raw.replace("**Allowed:**", "**Removed permission marker:**", 1), encoding="utf-8")
        completed = self.run_reader()
        self.assertNotEqual(completed.returncode, 0)
        self.assertIn("Missing or duplicated field", completed.stderr)

    def test_missing_embedded_snapshot_fails(self):
        raw = self.pack.read_text(encoding="utf-8")
        self.pack.write_text(raw.replace("### ", "### CORRUPTED ", 1), encoding="utf-8")
        completed = self.run_reader()
        self.assertNotEqual(completed.returncode, 0)
        self.assertIn("Missing source snapshot blocks", completed.stderr)

    def test_changed_claimed_source_status_fails(self):
        raw = self.pack.read_text(encoding="utf-8")
        self.pack.write_text(raw.replace("source_status: draft", "source_status: accepted", 1), encoding="utf-8")
        completed = self.run_reader()
        self.assertNotEqual(completed.returncode, 0)
        self.assertIn("Displayed source status differs", completed.stderr)

    def test_detached_reader_never_invents_original_source_verification(self):
        completed = self.run_reader()
        self.assertEqual(completed.returncode, 0, completed.stderr)
        result = json.loads(completed.stdout)
        self.assertFalse(result["limitations"]["original_research_verified"])
        self.assertFalse(result["limitations"]["independent_ai_agent_tested"])
        self.assertNotIn("deploy", result["allowed_actions"])


if __name__ == "__main__":
    unittest.main()

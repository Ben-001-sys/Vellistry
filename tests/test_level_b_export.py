"""Verify Level B handoff exports contain only the permitted historical inputs."""
from __future__ import annotations

import json
import sys
import tempfile
import unittest
import zipfile
from pathlib import Path
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
import export_level_b_handoff as exporter  # noqa: E402


class HandoffExportTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name)
        self.destination = self.root / "level-b.zip"

    def test_only_historical_pack_and_prompt_in_archive(self):
        report = exporter.make_packet(self.destination)
        self.assertIn("archive_sha256", report)
        self.assertEqual(len(report["task_blob_sha"]), 40)
        with zipfile.ZipFile(self.destination) as archive:
            self.assertEqual(archive.namelist(), ["VEL-CP-0001.md", "PROMPT.md"])
            self.assertEqual(archive.read("VEL-CP-0001.md"), exporter.PACK_PATH.read_bytes())
            self.assertEqual(archive.read("PROMPT.md"), exporter.PROMPT_PATH.read_bytes())
            self.assertNotIn("VEL-EB-0001.md", archive.namelist())

    def test_export_is_reproducible(self):
        first = exporter.make_packet(self.destination)
        second = exporter.make_packet(self.root / "second.zip")
        self.assertEqual(first["archive_sha256"], second["archive_sha256"])
        self.assertEqual(self.destination.read_bytes(), (self.root / "second.zip").read_bytes())

    def test_export_never_overwrites(self):
        self.destination.write_text("retained original", encoding="utf-8")
        with self.assertRaisesRegex(ValueError, "overwrite"):
            exporter.make_packet(self.destination)
        self.assertEqual(self.destination.read_text(encoding="utf-8"), "retained original")

    def test_mutated_allowed_actions_fail_before_export(self):
        tampered = self.root / "VEL-CP-0001.md"
        original = exporter.PACK_PATH.read_text(encoding="utf-8")
        self.assertIn("**Allowed:** read, analyze, propose", original)
        tampered.write_text(
            original.replace("**Allowed:** read, analyze, propose",
                             "**Allowed:** read, analyze, propose, deploy", 1),
            encoding="utf-8",
        )
        with patch.object(exporter, "PACK_PATH", tampered):
            with self.assertRaisesRegex(ValueError, "task contract differs"):
                exporter.make_packet(self.destination)
        self.assertFalse(self.destination.exists())

    def test_prompt_has_no_answers_or_scoring_rubric(self):
        text = exporter.PROMPT_PATH.read_text(encoding="utf-8")
        self.assertIn("only authoritative task input", text)
        self.assertNotIn("VEL-EB-0001", text)
        self.assertNotIn("PASS/FAIL", text)
        self.assertNotIn("Tiptap", text)
        self.assertNotIn("Rubric", text)

    def test_missing_parent_directory_or_bad_extension_fails(self):
        with self.assertRaisesRegex(ValueError, r"\.zip"):
            exporter.make_packet(self.root / "wrong.txt")
        with self.assertRaisesRegex(ValueError, "parent directory"):
            exporter.make_packet(self.root / "nonexistent" / "bad.zip")


if __name__ == "__main__":
    unittest.main()

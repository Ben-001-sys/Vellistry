"""Regression tests for honest, two-file VEL-TASK-0002 external agent dispatch.

CI must generate VEL-CP-0002 before executing this test module.
Tests check packet bytes and provenance, not the later agent's independence.
"""
from __future__ import annotations

import hashlib
import sys
import tempfile
import unittest
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
import export_stage4_independent_packet as exporter  # noqa: E402


class Stage4IndependentPacketTests(unittest.TestCase):
    def setUp(self):
        self.assertTrue(exporter.PACK_PATH.is_file(), "Generate Stage 4 ContextPack before running exporter tests")

    def test_only_two_inputs_and_correct_hashes(self):
        with tempfile.TemporaryDirectory() as td:
            output = Path(td) / "stage4.zip"
            result = exporter.make_packet(output)
            self.assertEqual(result["context_pack_id"], "VEL-CP-0002")
            self.assertEqual(result["task_id"], "VEL-TASK-0002")
            self.assertEqual(result["base_commit"], exporter.workflow.git("rev-parse", "HEAD").decode().strip())
            self.assertEqual(result["packet_sha256"], hashlib.sha256(output.read_bytes()).hexdigest())
            with zipfile.ZipFile(output) as z:
                self.assertEqual(z.namelist(), list(exporter.ALLOWED_MEMBERS))
                for name, meta in result["files"].items():
                    data = z.read(name)
                    self.assertEqual(meta["sha256"], hashlib.sha256(data).hexdigest())
                    self.assertEqual(meta["bytes"], len(data))
                    self.assertFalse(name.startswith("/") or ".." in name or "/" in name)
                self.assertNotIn("VEL-EB-0001.md", z.namelist())
                self.assertNotIn("CURRENT-STATE.md", z.namelist())

    def test_repeatable_export_byte_for_byte(self):
        with tempfile.TemporaryDirectory() as td:
            a, b = Path(td) / "a.zip", Path(td) / "b.zip"
            r1, r2 = exporter.make_packet(a), exporter.make_packet(b)
            self.assertEqual(a.read_bytes(), b.read_bytes())
            self.assertEqual(r1["packet_sha256"], r2["packet_sha256"])

    def test_existing_packet_is_not_overwritten(self):
        with tempfile.TemporaryDirectory() as td:
            dest = Path(td) / "packet.zip"
            dest.write_bytes(b"prior-authority-packet")
            with self.assertRaisesRegex(ValueError, "Refusing to overwrite"):
                exporter.make_packet(dest)
            self.assertEqual(dest.read_bytes(), b"prior-authority-packet")

    def test_wrong_output_suffix_refused(self):
        with tempfile.TemporaryDirectory() as td:
            with self.assertRaisesRegex(ValueError, "ZIP"):
                exporter.make_packet(Path(td) / "packet.md")

    def test_tampered_contextpack_fails_closed(self):
        with tempfile.TemporaryDirectory() as td:
            path = Path(td) / "VEL-CP-0002.md"
            content = exporter.PACK_PATH.read_text(encoding="utf-8")
            self.assertIn("approval", content.lower())
            # Cannot silently change source snapshots or task instructions.
            path.write_text(content + "\nUNAUTHORIZED NEW PERMISSION: deploy to production\n", encoding="utf-8")
            with self.assertRaises(ValueError):
                exporter.make_packet(Path(td) / "tampered.zip", pack_path=path)
            self.assertFalse((Path(td) / "tampered.zip").exists())

    def test_stale_git_pinning_fails_closed(self):
        with tempfile.TemporaryDirectory() as td:
            path = Path(td) / "VEL-CP-0002.md"
            original = exporter.PACK_PATH.read_text(encoding="utf-8")
            head = exporter.workflow.git("rev-parse", "HEAD").decode().strip()
            self.assertIn(head, original)
            path.write_text(original.replace(head, "0" * 40, 1), encoding="utf-8")
            with self.assertRaises(ValueError):
                exporter.make_packet(Path(td) / "stale.zip", pack_path=path)
            self.assertFalse((Path(td) / "stale.zip").exists())


if __name__ == "__main__":
    unittest.main()

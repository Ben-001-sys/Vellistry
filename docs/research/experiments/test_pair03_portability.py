"""R11 research-only portable backup and TXT contract tests; Python stdlib."""
import json
import unittest
from copy import deepcopy
from io import BytesIO
from zipfile import ZipFile, ZIP_DEFLATED
from pair03_portability import (
    synthetic_project, backup_bytes, restore_bytes, UnsafeArchive,
    txt_to_bytes, bytes_to_txt,
)


class PortabilityTests(unittest.TestCase):
    def setUp(self):
        self.original = synthetic_project()
        self.existing = {"schema": "vellistry-research-v1", "books": [{"id": "keep"}]}

    def test_01_two_books_restore_and_sources_unchanged(self):
        restored = restore_bytes(backup_bytes(self.original), self.existing)
        self.assertEqual(restored, self.original)
        self.assertEqual([b["id"] for b in restored["books"]], ["book-a", "book-b"])
        self.assertEqual(self.existing["books"][0]["id"], "keep")

    def test_02_rules_and_pending_facts_not_automatically_approved(self):
        restored = restore_bytes(backup_bytes(self.original), self.existing)
        a, b = restored["books"]
        self.assertEqual(a["rules"], [{"id": "NI-01.expanded", "enabled": False}])
        self.assertEqual(b["rules"], [{"id": "NI-01.expanded", "enabled": True}])
        self.assertEqual(a["profiles"][1]["status"], "pending_not_canon")
        self.assertEqual(b["profiles"][0]["state"]["goal"], "remain home")
        self.assertEqual(a["chapters"][0]["revision"], 2)

    def test_03_backup_does_not_invent_secrets_or_change_content(self):
        data = backup_bytes(self.original)
        self.assertNotIn(b"secret_key", data)
        self.assertNotIn(b"Bearer ", data)
        restored = restore_bytes(data, {})
        self.assertEqual(restored, self.original)

    def test_04_corrupted_zip_rejected_without_mutating_existing(self):
        before = deepcopy(self.existing)
        with self.assertRaises(UnsafeArchive):
            restore_bytes(b"not a zip container", self.existing)
        self.assertEqual(self.existing, before)

    def test_05_zip_path_traversal_rejected(self):
        z = BytesIO()
        with ZipFile(z, "w", ZIP_DEFLATED) as archive:
            archive.writestr("manifest.json", "{}")
            archive.writestr("../project.json", "{}")
        with self.assertRaises(UnsafeArchive):
            restore_bytes(z.getvalue(), self.existing)

    def test_06_manifest_hash_tamper_rejected(self):
        fixture = backup_bytes(self.original)
        with ZipFile(BytesIO(fixture)) as old:
            manifest = json.loads(old.read("manifest.json"))
            project = old.read("project.json")
        manifest["files"][0]["sha256"] = "0" * 64
        z = BytesIO()
        with ZipFile(z, "w", ZIP_DEFLATED) as archive:
            archive.writestr("manifest.json", json.dumps(manifest))
            archive.writestr("project.json", project)
        with self.assertRaises(UnsafeArchive):
            restore_bytes(z.getvalue(), self.existing)

    def test_07_duplicate_entry_names_rejected(self):
        z = BytesIO()
        with ZipFile(z, "w", ZIP_DEFLATED) as archive:
            archive.writestr("manifest.json", "{}")
            archive.writestr("project.json", "{}")
            archive.writestr("project.json", "{}")
        with self.assertRaises(UnsafeArchive):
            restore_bytes(z.getvalue(), self.existing)

    def test_08_oversized_archive_rejected(self):
        with self.assertRaises(UnsafeArchive):
            restore_bytes(b"x" * 2_000_001, self.existing)

    def test_09_txt_unicode_windows_line_endings_and_bom(self):
        original = "Mara's café.\n雪 fell.\nShe said, “Return.”"
        encoded = txt_to_bytes(original, bom=True, windows_newlines=True)
        self.assertTrue(encoded.startswith(b"\xef\xbb\xbf"))
        self.assertIn(b"\r\n", encoded)
        self.assertEqual(bytes_to_txt(encoded), original)

    def test_10_invalid_txt_bytes_are_rejected(self):
        with self.assertRaises(ValueError):
            bytes_to_txt(b"\xff\xfeinvalid")
        with self.assertRaises(ValueError):
            txt_to_bytes("a\x00b")


if __name__ == "__main__":
    unittest.main()

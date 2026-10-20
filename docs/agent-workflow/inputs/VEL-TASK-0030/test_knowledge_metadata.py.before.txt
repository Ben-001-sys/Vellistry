"""Regression tests for the Vellistry decision/history metadata gate.

All negative tests build temporary copies of real repository records.
"""
from __future__ import annotations

import shutil
import sys
import tempfile
import unittest
from pathlib import Path

REPOSITORY = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(REPOSITORY / "scripts"))

import check_knowledge_metadata as validator  # noqa: E402


class KnowledgeMetadataValidationTests(unittest.TestCase):
    def setUp(self) -> None:
        self.tempdir = tempfile.TemporaryDirectory()
        self.addCleanup(self.tempdir.cleanup)
        self.root = Path(self.tempdir.name)
        for group in ("decisions", "history"):
            destination = self.root / "docs" / group
            destination.mkdir(parents=True)
            for source in (REPOSITORY / "docs" / group).glob("*.md"):
                if source.name != "README.md":
                    shutil.copyfile(source, destination / source.name)

    def audit(self):
        return validator.audit_records(self.root)

    def expected_record_count(self) -> int:
        """Record count is derived from fixtures, not frozen to the original seed."""
        return sum(
            1
            for group in ("decisions", "history")
            for path in (self.root / "docs" / group).glob("*.md")
            if path.name != "README.md"
        )

    def test_real_records_pass_when_unmodified(self):
        count, errors = self.audit()
        self.assertEqual(count, self.expected_record_count())
        self.assertEqual(errors, [])

    def test_malformed_adr_filename_is_not_skipped(self):
        original = next((self.root / "docs/decisions").glob("ADR-0001-*.md"))
        original.rename(original.parent / "misc-decision.md")
        count, errors = self.audit()
        self.assertEqual(count, self.expected_record_count())
        self.assertTrue(any("invalid adr filename" in e for e in errors), errors)

    def test_malformed_history_filename_is_not_skipped(self):
        original = next((self.root / "docs/history").glob("2026-*.md"))
        original.rename(original.parent / "history_notes.md")
        count, errors = self.audit()
        self.assertEqual(count, self.expected_record_count())
        self.assertTrue(any("invalid history filename" in e for e in errors), errors)

    def test_invalid_frontmatter_is_rejected(self):
        path = next((self.root / "docs/decisions").glob("ADR-0001-*.md"))
        path.write_text("# A document without metadata\n", encoding="utf-8")
        _, errors = self.audit()
        self.assertTrue(any("missing YAML front matter" in e for e in errors), errors)

    def test_duplicate_identifier_is_rejected(self):
        source = next((self.root / "docs/decisions").glob("ADR-0001-*.md"))
        (source.parent / "ADR-0003-duplicate.md").write_text(source.read_text(encoding="utf-8"))
        _, errors = self.audit()
        self.assertTrue(any("duplicate ID" in e for e in errors), errors)

    def test_accepted_adr_without_approver_is_rejected(self):
        path = next((self.root / "docs/decisions").glob("ADR-0001-*.md"))
        body = path.read_text(encoding="utf-8").replace(
            "approved_by: project_owner", "approved_by: null"
        )
        path.write_text(body, encoding="utf-8")
        _, errors = self.audit()
        self.assertTrue(any("accepted ADR requires approved_by" in e for e in errors), errors)

    def test_mismatched_history_id_date_is_rejected(self):
        path = next((self.root / "docs/history").glob("2026-10-08-knowledge-foundation-approved.md"))
        body = path.read_text(encoding="utf-8").replace(
            "id: HIS-20261008-001", "id: HIS-20261007-001"
        )
        path.write_text(body, encoding="utf-8")
        _, errors = self.audit()
        self.assertTrue(any("history ID date must match occurred_on" in e for e in errors), errors)

    def test_no_records_fails_closed(self):
        for path in (self.root / "docs").rglob("*.md"):
            path.unlink()
        count, errors = self.audit()
        self.assertEqual(count, 0)
        self.assertTrue(any("no ADR/history records" in e for e in errors), errors)


if __name__ == "__main__":
    unittest.main()

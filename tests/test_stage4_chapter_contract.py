"""Executable *synthetic* chapter-save scenarios for VEL-SPEC-001.

Passing these tests proves only behavior in the in-memory model. Browser editor,
process restart, database durability, authentication and actual RLS are NOT tested.
"""
from __future__ import annotations

import sys
import unittest
from pathlib import Path

SPIKE = Path(__file__).resolve().parents[1] / "docs/research/spikes/stage4-synthetic-chapter-contract"
sys.path.insert(0, str(SPIKE))
from chapter_model import (  # noqa: E402
    AccessDenied, DraftSession, Principal, SyntheticChapterStore, VersionConflict,
)


def manuscript(line: str) -> dict:
    return {"type": "doc", "content": [
        {"type": "paragraph", "content": [{"type": "text", "text": line}]},
    ]}


class Stage4ChapterContractTests(unittest.TestCase):
    def setUp(self):
        self.store = SyntheticChapterStore()
        self.author = Principal("invented-author-alpha")
        self.other = Principal("invented-author-beta")
        self.book = self.store.create_book(self.author, "Lantern Cove")
        self.chapter = self.store.create_chapter(self.author, self.book, "The Night Ferry")

    def test_sc001_book_creation_chapter_navigation_and_reopen(self):
        second = self.store.create_chapter(self.author, self.book, "Old Coast Road")
        initial = self.store.list_chapters(self.author, self.book)
        self.assertEqual([id for id, _ in initial], [self.chapter, second])
        session = DraftSession(self.store, self.author, self.book, self.chapter)
        session.edit(manuscript("The pier was empty."))
        self.assertEqual(session.save(), "saved")
        reopened = DraftSession(self.store, self.author, self.book, self.chapter)
        self.assertEqual(reopened.document, manuscript("The pier was empty."))
        self.assertNotEqual(reopened.document, self.store.read(self.author, self.book, second)[0])

    def test_sc002_ai_free_format_payload_proxy_not_real_editor(self):
        session = DraftSession(self.store, self.author, self.book, self.chapter)
        formatted = {"type": "doc", "content": [
            {"type": "heading", "attrs": {"level": 2}, "content": [{"type": "text", "text": "Arrival"}]},
            {"type": "paragraph", "content": [
                {"type": "text", "text": "The ferry ", "marks": [{"type": "italic"}]},
                {"type": "text", "text": "returned."},
            ]},
            {"type": "bulletList", "content": [
                {"type": "listItem", "content": [
                    {"type": "paragraph", "content": [{"type": "text", "text": "One lantern"}]},
                ]},
            ]},
        ]}
        session.edit(formatted)
        self.assertEqual(session.save(), "saved")
        reopened = DraftSession(self.store, self.author, self.book, self.chapter)
        self.assertEqual(reopened.document, formatted)
        # No model/client integration or editor interaction exists in this model.
        self.assertFalse(hasattr(self.store, "ai_provider"))

    def test_sc003_saving_only_acknowledged_revision(self):
        session = DraftSession(self.store, self.author, self.book, self.chapter)
        session.edit(manuscript("The rain began."))
        self.assertEqual(session.state, "unsaved")
        self.assertEqual(session.save(), "saved")
        self.assertEqual(session.revision, 1)
        self.assertEqual(DraftSession(self.store, self.author, self.book, self.chapter).document, manuscript("The rain began."))

    def test_sc004_interruption_before_commit_no_false_saved(self):
        session = DraftSession(self.store, self.author, self.book, self.chapter)
        session.edit(manuscript("The lamp went dark."))
        self.assertEqual(session.save(fault="before_commit"), "error")
        self.assertNotEqual(session.state, "saved")
        self.assertEqual(session.snapshot_pending(), manuscript("The lamp went dark."))
        stored, version = self.store.read(self.author, self.book, self.chapter)
        self.assertEqual(version, 0)
        self.assertNotEqual(stored, session.snapshot_pending())
        self.assertEqual(session.save(), "saved")
        self.assertEqual(self.store.read(self.author, self.book, self.chapter)[1], 1)

    def test_sc004_ambiguous_postcommit_ack_cannot_show_saved(self):
        session = DraftSession(self.store, self.author, self.book, self.chapter)
        session.edit(manuscript("The pier vanished."))
        self.assertEqual(session.save(fault="after_commit"), "error")
        self.assertNotEqual(session.state, "saved")
        stored, version = self.store.read(self.author, self.book, self.chapter)
        self.assertEqual((stored, version), (manuscript("The pier vanished."), 1))
        # A blind retry from old version must not rewrite the same chapter.
        self.assertEqual(session.save(), "error")
        self.assertEqual(version, self.store.read(self.author, self.book, self.chapter)[1])

    def test_sc005_stale_editor_rejected_without_overwrite(self):
        first = DraftSession(self.store, self.author, self.book, self.chapter)
        second = DraftSession(self.store, self.author, self.book, self.chapter)
        second.edit(manuscript("Edited by B"))
        self.assertEqual(second.save(), "saved")
        first.edit(manuscript("Stale text from A"))
        self.assertEqual(first.save(), "error")
        self.assertIn("expected revision", first.last_error)
        self.assertEqual(self.store.read(self.author, self.book, self.chapter),
                         (manuscript("Edited by B"), 1))

    def test_sc005_direct_stale_revision_raises(self):
        self.store.save(self.author, self.book, self.chapter, 0, manuscript("Committed"))
        with self.assertRaises(VersionConflict):
            self.store.save(self.author, self.book, self.chapter, 0, manuscript("Overwrite"))
        self.assertEqual(self.store.read(self.author, self.book, self.chapter)[0], manuscript("Committed"))

    def test_sc006_cross_author_reads_and_writes_denied(self):
        for operation in (
            lambda: self.store.read(self.other, self.book, self.chapter),
            lambda: self.store.list_chapters(self.other, self.book),
            lambda: self.store.create_chapter(self.other, self.book, "Stolen"),
            lambda: self.store.save(self.other, self.book, self.chapter, 0, manuscript("Stolen"),
                                    claimed_author=self.author.synthetic_id),
        ):
            with self.subTest(operation=operation):
                with self.assertRaises(AccessDenied):
                    operation()
        self.assertEqual(self.store.read(self.author, self.book, self.chapter)[1], 0)

    def test_sc006_unknown_id_does_not_disclose_title_or_text(self):
        with self.assertRaisesRegex(AccessDenied, "unavailable"):
            self.store.read(self.other, self.book, "chapter-guessed")
        with self.assertRaisesRegex(AccessDenied, "unavailable"):
            self.store.read(self.other, "book-guessed", self.chapter)

    def test_sc007_cross_book_chapter_id_cannot_be_reinterpreted(self):
        other_book = self.store.create_book(self.author, "Second Novel")
        other_chapter = self.store.create_chapter(self.author, other_book, "The Night Ferry")
        a = DraftSession(self.store, self.author, self.book, self.chapter)
        b = DraftSession(self.store, self.author, other_book, other_chapter)
        a.edit(manuscript("Book one secret"))
        b.edit(manuscript("Book two separate prose"))
        self.assertEqual(a.save(), "saved")
        self.assertEqual(b.save(), "saved")
        with self.assertRaises(AccessDenied):
            self.store.read(self.author, self.book, other_chapter)
        with self.assertRaises(AccessDenied):
            self.store.save(self.author, other_book, self.chapter, 1, manuscript("Overwritten"))
        self.assertEqual(self.store.read(self.author, self.book, self.chapter)[0], manuscript("Book one secret"))
        self.assertEqual(self.store.read(self.author, other_book, other_chapter)[0], manuscript("Book two separate prose"))

    def test_ownership_checks_precede_version_or_fault_handling(self):
        # Synthetic check: an unauthorized caller learns neither the version nor
        # whether a simulated persistence fault could have happened.
        with self.assertRaises(AccessDenied):
            self.store.save(self.other, self.book, self.chapter, -1,
                            manuscript("unauthorized"), fault="before_commit")

    def test_empty_or_unsupported_document_is_not_persisted(self):
        session = DraftSession(self.store, self.author, self.book, self.chapter)
        session.edit({"invalid": "shape"})
        self.assertEqual(session.save(), "error")
        self.assertNotEqual(session.state, "saved")
        self.assertEqual(self.store.read(self.author, self.book, self.chapter)[1], 0)

    def test_copy_on_read_does_not_mutate_accepted_document(self):
        document, _ = self.store.read(self.author, self.book, self.chapter)
        document["content"].append({"type": "paragraph", "content": [{"type": "text", "text": "tamper"}]})
        stored, version = self.store.read(self.author, self.book, self.chapter)
        self.assertEqual(version, 0)
        self.assertEqual(len(stored["content"]), 1)


if __name__ == "__main__":
    unittest.main()

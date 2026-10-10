"""Deterministic synthetic tests for the proposed VEL-SPEC-001 contract.

Run from this directory:

    python -m unittest -v

These tests exercise an in-memory double. They are not product acceptance,
browser, Tiptap, authentication, RLS, or durable-storage evidence.
"""

from __future__ import annotations

import unittest

from synthetic_chapter_contract import (
    SYNTHETIC_CONTRACT_DECLARATION,
    Block,
    ContractModel,
    EditorState,
    Fault,
    Result,
    SaveStatus,
    TextMark,
    document,
    heading,
    list_item,
    paragraph,
)


def _view(result: Result) -> tuple[object, ...]:
    return (
        result.code,
        result.acknowledged,
        result.status,
        result.durability,
        result.revision,
        result.document,
        result.acknowledgment_source,
        result.books,
        result.chapters,
    )


def _sentence(text: str, emphasis: tuple[int, int] | None = None) -> object:
    return document(paragraph(text, emphasis))


def _rich_gate(sentence: str) -> object:
    return document(
        heading("Salt on the Gate"),
        paragraph(sentence, (0, 4)),
        list_item("Count the lamps"),
        list_item("Leave the gate ajar"),
    )


class SyntheticChapterContractTests(unittest.TestCase):
    def test_sc001_empty_author_has_no_books(self) -> None:
        model = ContractModel()
        session = model.open_session("author-maple")
        self.assertEqual(model.list_books(session), ())

    def test_sc001_create_book_two_chapters_reopen_restores_each(self) -> None:
        model = ContractModel()
        session = model.open_session("author-maple")
        book = model.create_book(session, "Glass Orchard")
        first = _rich_gate("Mara kept the copper fish in her pocket.")
        second = document(
            heading("Paper Boats"),
            paragraph("Ivo folded the tide into a pocket.", (0, 3)),
            list_item("Fold one boat"),
        )
        state_one, saved_one = model.create_chapter(
            session, book.book_id, "Salt on the Gate", first
        )
        state_two, saved_two = model.create_chapter(
            session, book.book_id, "Paper Boats", second
        )
        self.assertTrue(saved_one.acknowledged)
        self.assertTrue(saved_two.acknowledged)
        self.assertNotEqual(state_one.chapter_id, state_two.chapter_id)

        books = model.list_books(session)
        self.assertEqual(tuple(item.book_id for item in books), (book.book_id,))
        nav = model.list_chapters(session, book.book_id)
        self.assertEqual(
            tuple((item.chapter_id, item.title) for item in nav.chapters),
            (
                (state_one.chapter_id, "Salt on the Gate"),
                (state_two.chapter_id, "Paper Boats"),
            ),
        )

        _, reopened_one = model.reopen(session, book.book_id, state_one.chapter_id)
        _, reopened_two = model.reopen(session, book.book_id, state_two.chapter_id)
        self.assertEqual(reopened_one.document, first)
        self.assertEqual(reopened_two.document, second)
        self.assertNotEqual(reopened_one.document, reopened_two.document)
        self.assertEqual(reopened_one.acknowledgment_source, "loaded_committed")
        self.assertEqual(reopened_two.acknowledgment_source, "loaded_committed")

    def test_sc002_document_fixture_edits_without_ai_demand(self) -> None:
        model = ContractModel()
        session = model.open_session("author-maple", ai_provider=None, ai_key_configured=False)
        book = model.create_book(session, "Glass Orchard")
        initial = _sentence("A blank line waited.")
        state, _saved = model.create_chapter(session, book.book_id, "Lantern Market", initial)
        fixture = document(
            heading("The Lantern Market", 1),
            paragraph("Mara counted the copper fish in her pocket.", (0, 4)),
            list_item("Buy salt", "bullet"),
            list_item("Find the blue door", "bullet"),
        )
        model.edit_local(state, fixture)
        self.assertIsNone(session.ai_provider)
        self.assertFalse(session.ai_key_configured)
        self.assertFalse(state.ai_connection_demanded)
        self.assertEqual(state.local_document, fixture)
        self.assertEqual(state.status, SaveStatus.UNSAVED)
        self.assertEqual(model.harness_committed(state.chapter_id)[1], initial)
        marks = state.local_document.blocks[1].marks
        self.assertEqual(marks, (TextMark("emphasis", 0, 4),))
        self.assertEqual(
            tuple(block.type for block in state.local_document.blocks),
            ("heading", "paragraph", "list_item", "list_item"),
        )

    def test_sc002_unsupported_block_and_mark_rejected(self) -> None:
        with self.assertRaises(ValueError):
            document(Block("table", "a cell"))
        with self.assertRaises(ValueError):
            document(Block("paragraph", "Mara kept going.", None, None, (TextMark("comment", 0, 4),)))

    def test_sc003_saved_only_after_acknowledgment_and_reopen_matches(self) -> None:
        model = ContractModel()
        session = model.open_session("author-maple")
        book = model.create_book(session, "Glass Orchard")
        initial = _rich_gate("Mara kept the copper fish in her pocket.")
        state, created = model.create_chapter(session, book.book_id, "Salt on the Gate", initial)
        self.assertEqual(created.acknowledgment_source, "write_ack")
        edited = _rich_gate("Mara moved the copper fish to the blue jar.")
        model.edit_local(state, edited)
        self.assertEqual(state.status, SaveStatus.UNSAVED)
        self.assertEqual(model.harness_committed(state.chapter_id)[1], initial)

        _fresh, loaded_before_save = model.reopen(session, book.book_id, state.chapter_id)
        self.assertEqual(loaded_before_save.document, initial)
        self.assertEqual(state.local_document, edited)

        trace_at_save = len(state.status_trace)
        result = model.save(session, state)
        self.assertTrue(result.acknowledged)
        self.assertEqual(result.status, SaveStatus.SAVED)
        self.assertEqual(result.durability, "confirmed")
        self.assertEqual(result.acknowledgment_source, "write_ack")
        self.assertEqual(result.revision, 2)
        self.assertEqual(result.document, edited)
        new_trace = state.status_trace[trace_at_save:]
        self.assertEqual(new_trace[0], "saving:unconfirmed")
        self.assertEqual(new_trace[-1], "saved:confirmed:write_ack")
        self.assertTrue(all(not item.startswith("saved") for item in new_trace[:-1]))

        _reopened, loaded = model.reopen(session, book.book_id, state.chapter_id)
        self.assertEqual(loaded.revision, 2)
        self.assertEqual(loaded.document, edited)
        self.assertEqual(loaded.document.blocks[1].marks, (TextMark("emphasis", 0, 4),))
        stored_revision, stored_document, stored_ids = model.harness_committed(state.chapter_id)
        self.assertEqual(stored_revision, 2)
        self.assertEqual(stored_document, edited)
        self.assertEqual(stored_ids, (1, 2))

    def test_sc003_result_shape_rejects_unacknowledged_saved(self) -> None:
        with self.assertRaises(RuntimeError):
            Result(
                code="saved",
                acknowledged=True,
                status=SaveStatus.SAVED,
                durability="confirmed",
                acknowledgment_source=None,
            )
        with self.assertRaises(RuntimeError):
            Result(
                code="saved",
                acknowledged=True,
                status=SaveStatus.SAVED,
                durability="unconfirmed",
                acknowledgment_source="write_ack",
            )

    def test_sc004_loss_modes_match_on_client_and_differ_in_store(self) -> None:
        before = self._loss_case(Fault.LOST_BEFORE_COMMIT)
        after = self._loss_case(Fault.LOST_AFTER_COMMIT)
        self.assertEqual(_view(before["result"]), _view(after["result"]))
        self.assertEqual(before["result"].code, "unconfirmed")
        self.assertFalse(before["result"].acknowledged)
        self.assertEqual(before["result"].status, SaveStatus.ERROR)
        self.assertEqual(before["result"].durability, "unconfirmed")
        self.assertIsNone(before["result"].document)
        self.assertEqual(before["trace"], after["trace"])
        self.assertEqual(before["trace"], ["saving:unconfirmed", "error:unconfirmed"])
        self.assertNotIn("saved:confirmed:write_ack", before["trace"])
        self.assertEqual(before["head"], before["initial"])
        self.assertEqual(before["revision"], 1)
        self.assertEqual(after["head"], after["edited"])
        self.assertEqual(after["revision"], 2)
        self.assertEqual(before["state"].local_document, before["edited"])
        self.assertEqual(after["state"].local_document, after["edited"])
        self.assertEqual(before["state"].base_revision, 1)
        self.assertEqual(after["state"].base_revision, 1)

    def test_sc004_reconcile_lost_before_keeps_outstanding_local(self) -> None:
        case = self._loss_case(Fault.LOST_BEFORE_COMMIT)
        recon = case["model"].reconcile(case["session"], case["state"])
        self.assertEqual(recon.code, "outstanding")
        self.assertFalse(recon.acknowledged)
        self.assertEqual(recon.status, SaveStatus.ERROR)
        self.assertEqual(recon.durability, "not_durable")
        self.assertIsNone(recon.document)
        self.assertEqual(case["state"].local_document, case["edited"])
        self.assertEqual(case["state"].status, SaveStatus.ERROR)
        self.assertNotEqual(case["state"].status, SaveStatus.SAVED)
        self.assertEqual(case["model"].harness_committed(case["state"].chapter_id)[1], case["initial"])
        self.assertFalse(case["result"].acknowledged)

    def test_sc004_reconcile_lost_after_confirms_only_by_read_back(self) -> None:
        case = self._loss_case(Fault.LOST_AFTER_COMMIT)
        recon = case["model"].reconcile(case["session"], case["state"])
        self.assertEqual(recon.code, "confirmed_by_read_back")
        self.assertFalse(recon.acknowledged)
        self.assertEqual(recon.status, SaveStatus.SAVED)
        self.assertEqual(recon.acknowledgment_source, "read_back")
        self.assertEqual(recon.document, case["edited"])
        self.assertEqual(case["state"].base_revision, 2)
        self.assertFalse(case["result"].acknowledged)
        self.assertEqual(case["result"].status, SaveStatus.ERROR)
        stored_revision, stored_document, _ids = case["model"].harness_committed(case["state"].chapter_id)
        self.assertEqual(stored_revision, 2)
        self.assertEqual(stored_document, case["edited"])

    def test_sc004_further_local_edit_keeps_commit_and_draft(self) -> None:
        case = self._loss_case(Fault.LOST_AFTER_COMMIT)
        later = _rich_gate("Mara hid the copper fish under the stair.")
        case["model"].edit_local(case["state"], later)
        self.assertEqual(case["state"].durability, "unconfirmed")
        self.assertEqual(case["state"].status, SaveStatus.UNSAVED)
        recon = case["model"].reconcile(case["session"], case["state"])
        self.assertEqual(recon.code, "conflict")
        self.assertFalse(recon.acknowledged)
        self.assertEqual(recon.document, case["edited"])
        self.assertEqual(case["state"].local_document, later)
        self.assertEqual(case["model"].harness_committed(case["state"].chapter_id)[1], case["edited"])

    def test_sc005_stale_save_preserves_newer_content(self) -> None:
        model, chapter_id, state_a, state_b, session_a, doc_b = self._two_clients()
        doc_a = _sentence("The older sentence about maple ink tried to return.")
        model.edit_local(state_a, doc_a)
        conflict = model.save(session_a, state_a)
        self.assertEqual(conflict.code, "conflict")
        self.assertFalse(conflict.acknowledged)
        self.assertEqual(conflict.status, SaveStatus.CONFLICT)
        self.assertEqual(conflict.document, doc_b)
        self.assertEqual(state_a.local_document, doc_a)
        revision, head, revisions = model.harness_committed(chapter_id)
        self.assertEqual(revision, 2)
        self.assertEqual(head, doc_b)
        self.assertEqual(revisions, (1, 2))
        self.assertEqual(state_b.local_document, doc_b)
        self.assertEqual(state_b.status, SaveStatus.SAVED)

    def test_sc005_repeated_stale_save_still_conflicts(self) -> None:
        model, chapter_id, state_a, _state_b, session_a, doc_b = self._two_clients()
        model.edit_local(state_a, _sentence("The older sentence about maple ink tried to return."))
        first = model.save(session_a, state_a)
        second = model.save(session_a, state_a)
        self.assertEqual(first.code, "conflict")
        self.assertEqual(second.code, "conflict")
        self.assertFalse(second.acknowledged)
        self.assertEqual(model.harness_committed(chapter_id)[1], doc_b)
        self.assertEqual(model.harness_committed(chapter_id)[2], (1, 2))

    def test_sc005_stale_client_cannot_overwrite_unconfirmed_commit(self) -> None:
        model = ContractModel()
        session_a = model.open_session("author-maple")
        session_b = model.open_session("author-maple")
        book = model.create_book(session_a, "Glass Orchard")
        initial = _sentence("The page still held the first line.")
        state_a, _created = model.create_chapter(session_a, book.book_id, "Salt on the Gate", initial)
        state_b, _loaded = model.reopen(session_b, book.book_id, state_a.chapter_id)
        committed = _sentence("The unconfirmed cedar sentence reached the store.")
        other = _sentence("The later maple sentence arrived without the new base.")
        model.edit_local(state_a, committed)
        lost = model.save(session_a, state_a, fault=Fault.LOST_AFTER_COMMIT)
        self.assertEqual(lost.code, "unconfirmed")
        model.edit_local(state_b, other)
        conflict = model.save(session_b, state_b)
        self.assertEqual(conflict.code, "conflict")
        self.assertEqual(conflict.document, committed)
        self.assertEqual(state_b.local_document, other)
        self.assertEqual(model.harness_committed(state_a.chapter_id)[1], committed)
        recon = model.reconcile(session_a, state_a)
        self.assertEqual(recon.code, "confirmed_by_read_back")
        self.assertEqual(recon.acknowledgment_source, "read_back")
        self.assertFalse(lost.acknowledged)
        self.assertEqual(model.harness_committed(state_a.chapter_id)[1], committed)

    def test_sc006_forged_claim_and_guessed_id_return_same_denial(self) -> None:
        model, session_a, session_b, book, state, secret = self._private_chapter()
        _guessed_state, guessed = model.reopen(
            session_b,
            book.book_id,
            "chapter-guessed-9999",
            claimed_author_id=session_a.author_id,
        )
        _forged_state, forged = model.reopen(
            session_b,
            book.book_id,
            state.chapter_id,
            claimed_author_id=session_a.author_id,
        )
        self.assertEqual(_view(guessed), _view(forged))
        self.assertEqual(forged.code, "denied")
        self.assertIsNone(forged.document)
        self.assertIsNone(forged.revision)
        self.assertEqual(forged.chapters, ())
        self.assertEqual(forged.untrusted_author_claim, "author-maple")
        self.assertNotIn("secret lantern phrase", repr(guessed))
        self.assertNotIn("secret lantern phrase", repr(forged))
        listed = model.list_chapters(session_b, book.book_id, claimed_author_id=session_a.author_id)
        self.assertEqual(listed.code, "denied")
        self.assertEqual(listed.chapters, ())
        self.assertNotIn("Salt on the Gate", repr(listed))
        self.assertEqual(model.list_books(session_b), ())

    def test_sc006_cross_author_write_and_create_do_not_change_chapter(self) -> None:
        model, session_a, session_b, book, state, secret = self._private_chapter()
        evil = _sentence("Cedar tried to replace the gate sentence.")
        forged_state = EditorState(
            session_id=session_b.session_id,
            chapter_id=state.chapter_id,
            book_id=book.book_id,
            base_revision=1,
            local_document=evil,
            last_confirmed_document=evil,
            status=SaveStatus.UNSAVED,
            durability="not_durable",
            acknowledgment_source=None,
        )
        denied_write = model.save(session_b, forged_state, claimed_author_id=session_a.author_id)
        _intruder, denied_create = model.create_chapter(
            session_b,
            book.book_id,
            "Intrusion",
            evil,
            claimed_author_id=session_a.author_id,
        )
        self.assertEqual(denied_write.code, "denied")
        self.assertEqual(denied_create.code, "denied")
        self.assertIsNone(denied_write.document)
        self.assertNotIn("secret lantern phrase", repr(denied_write))
        revision, head, revisions = model.harness_committed(state.chapter_id)
        self.assertEqual(revision, 1)
        self.assertEqual(head, secret)
        self.assertEqual(revisions, (1,))
        nav = model.list_chapters(session_a, book.book_id)
        self.assertEqual(tuple(item.title for item in nav.chapters), ("Salt on the Gate",))

    def test_sc007_same_title_is_isolated_by_book_and_id(self) -> None:
        model = ContractModel()
        session = model.open_session("author-maple")
        north = model.create_book(session, "North Orchard")
        south = model.create_book(session, "South Orchard")
        north_doc = _rich_gate("Mara kept the copper fish in her pocket.")
        south_doc = document(
            heading("Salt on the Gate"),
            paragraph("The harbor kept its paper boats in a blue jar."),
            list_item("Tie the blue rope"),
        )
        north_state, _north_saved = model.create_chapter(
            session, north.book_id, "Salt on the Gate", north_doc
        )
        south_state, _south_saved = model.create_chapter(
            session, south.book_id, "Salt on the Gate", south_doc
        )
        revised = _rich_gate("Mara moved the copper fish to the blue jar.")
        model.edit_local(north_state, revised)
        saved = model.save(session, north_state)
        self.assertTrue(saved.acknowledged)

        _re_north, opened_north = model.reopen(session, north.book_id, north_state.chapter_id)
        _re_south, opened_south = model.reopen(session, south.book_id, south_state.chapter_id)
        self.assertEqual(opened_north.document, revised)
        self.assertEqual(opened_south.document, south_doc)
        self.assertEqual(model.harness_committed(south_state.chapter_id)[1], south_doc)

        north_nav = model.list_chapters(session, north.book_id)
        south_nav = model.list_chapters(session, south.book_id)
        self.assertEqual(tuple(item.chapter_id for item in north_nav.chapters), (north_state.chapter_id,))
        self.assertEqual(tuple(item.chapter_id for item in south_nav.chapters), (south_state.chapter_id,))

        _crossed, crossed = model.reopen(session, south.book_id, north_state.chapter_id)
        self.assertEqual(crossed.code, "denied")
        self.assertIsNone(crossed.document)
        self.assertNotIn("copper fish", repr(crossed))

        by_shared_title = model.open_by_title(session, "Salt on the Gate")
        by_missing_title = model.open_by_title(session, "A title that was never used")
        self.assertEqual(_view(by_shared_title), _view(by_missing_title))
        self.assertEqual(by_shared_title.code, "title_not_identity")
        self.assertIsNone(by_shared_title.document)
        self.assertEqual(model.harness_committed(north_state.chapter_id)[1], revised)
        self.assertEqual(model.harness_committed(south_state.chapter_id)[1], south_doc)

    def test_sc008_declaration_stays_advisory(self) -> None:
        declaration = SYNTHETIC_CONTRACT_DECLARATION
        self.assertEqual(declaration["model_kind"], "in_memory_synthetic_contract")
        self.assertEqual(declaration["spec_id"], "VEL-SPEC-001")
        self.assertEqual(declaration["spec_status"], "proposed")
        self.assertEqual(declaration["acceptance_plan_status"], "proposed-not-executed")
        self.assertEqual(declaration["product_acceptance"], "NOT TESTED")
        self.assertIsNone(declaration["architecture_selected"])
        self.assertIsNone(declaration["framework_selected"])
        self.assertIsNone(declaration["database_selected"])
        self.assertIsNone(declaration["auth_vendor_selected"])
        self.assertIsNone(declaration["ai_provider_selected"])
        self.assertFalse(declaration["tiptap_browser_test"])
        self.assertFalse(declaration["real_authentication_or_rls"])
        self.assertFalse(declaration["durable_production_storage"])
        self.assertFalse(declaration["owner_approval_obtained"])
        self.assertFalse(declaration["stage3_cursor_fixture_accepted"])
        self.assertFalse(declaration["stage4_workflow_accepted"])
        with self.assertRaises(TypeError):
            declaration["product_acceptance"] = "PASS"  # type: ignore[index]

    def _loss_case(self, fault: Fault) -> dict[str, object]:
        model = ContractModel()
        session = model.open_session("author-maple")
        book = model.create_book(session, "Glass Orchard")
        initial = _rich_gate("Mara kept the copper fish in her pocket.")
        state, _created = model.create_chapter(session, book.book_id, "Salt on the Gate", initial)
        edited = _rich_gate("Mara moved the copper fish to the blue jar.")
        model.edit_local(state, edited)
        trace_at_save = len(state.status_trace)
        result = model.save(session, state, fault=fault)
        revision, head, _ids = model.harness_committed(state.chapter_id)
        return {
            "model": model,
            "session": session,
            "state": state,
            "result": result,
            "initial": initial,
            "edited": edited,
            "trace": state.status_trace[trace_at_save:],
            "revision": revision,
            "head": head,
        }

    def _two_clients(self) -> tuple[ContractModel, str, EditorState, EditorState, object, object]:
        model = ContractModel()
        session_a = model.open_session("author-maple")
        session_b = model.open_session("author-maple")
        book = model.create_book(session_a, "Glass Orchard")
        initial = _sentence("The page still held the first line.")
        state_a, _created = model.create_chapter(session_a, book.book_id, "Salt on the Gate", initial)
        state_b, loaded = model.reopen(session_b, book.book_id, state_a.chapter_id)
        self.assertEqual(loaded.document, initial)
        doc_b = _sentence("The newer sentence about cedar ink stayed on the page.")
        model.edit_local(state_b, doc_b)
        saved = model.save(session_b, state_b)
        self.assertTrue(saved.acknowledged)
        self.assertEqual(saved.document, doc_b)
        return model, state_a.chapter_id, state_a, state_b, session_a, doc_b

    def _private_chapter(self) -> tuple[object, ...]:
        model = ContractModel()
        session_a = model.open_session("author-maple")
        session_b = model.open_session("author-cedar")
        book = model.create_book(session_a, "Glass Orchard")
        secret = _sentence("The secret lantern phrase stayed under the gate.")
        state, saved = model.create_chapter(session_a, book.book_id, "Salt on the Gate", secret)
        self.assertTrue(saved.acknowledged)
        return model, session_a, session_b, book, state, secret


if __name__ == "__main__":
    unittest.main()

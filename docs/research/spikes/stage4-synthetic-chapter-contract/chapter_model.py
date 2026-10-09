"""In-memory *synthetic* chapter contracts for VEL-SPEC-001.

NOT production authorization, database durability, browser editing, or an
approved framework / persistence implementation. Uses fabricated prose only.
"""
from __future__ import annotations

from copy import deepcopy
from dataclasses import dataclass
from typing import Any


class AccessDenied(Exception):
    """Synthetic identity is not allowed to access this resource."""


class VersionConflict(Exception):
    """A newer accepted revision exists."""


class SaveInterrupted(Exception):
    """Save acknowledgement unavailable; caller must not show 'saved'."""


@dataclass(frozen=True)
class Principal:
    # In a real app, this must come from authenticated server-side identity.
    synthetic_id: str


@dataclass
class Book:
    id: str
    owner: str
    title: str


@dataclass
class Chapter:
    id: str
    book_id: str
    title: str
    content: dict[str, Any]
    revision: int = 0


class SyntheticChapterStore:
    """Single-process deterministic model, never a production storage adapter."""

    def __init__(self):
        self._books: dict[str, Book] = {}
        self._chapters: dict[str, Chapter] = {}
        self._next_book = 0
        self._next_chapter = 0

    def create_book(self, actor: Principal, title: str) -> str:
        self._next_book += 1
        book_id = f"book-{self._next_book}"
        self._books[book_id] = Book(book_id, actor.synthetic_id, title)
        return book_id

    def _owned_book(self, actor: Principal, book_id: str) -> Book:
        book = self._books.get(book_id)
        if book is None or book.owner != actor.synthetic_id:
            # Do not distinguish missing from forbidden in the synthetic API.
            raise AccessDenied("book is unavailable")
        return book

    def create_chapter(self, actor: Principal, book_id: str, title: str) -> str:
        self._owned_book(actor, book_id)
        self._next_chapter += 1
        chapter_id = f"chapter-{self._next_chapter}"
        self._chapters[chapter_id] = Chapter(
            chapter_id, book_id, title,
            {"type": "doc", "content": [{"type": "paragraph", "content": []}]},
        )
        return chapter_id

    def list_chapters(self, actor: Principal, book_id: str) -> list[tuple[str, str]]:
        self._owned_book(actor, book_id)
        return [(c.id, c.title) for c in self._chapters.values() if c.book_id == book_id]

    def _owned_chapter(self, actor: Principal, book_id: str, chapter_id: str) -> Chapter:
        self._owned_book(actor, book_id)
        chapter = self._chapters.get(chapter_id)
        if chapter is None or chapter.book_id != book_id:
            raise AccessDenied("chapter is unavailable")
        return chapter

    def read(self, actor: Principal, book_id: str, chapter_id: str) -> tuple[dict[str, Any], int]:
        chapter = self._owned_chapter(actor, book_id, chapter_id)
        return deepcopy(chapter.content), chapter.revision

    def save(
        self, actor: Principal, book_id: str, chapter_id: str,
        expected_revision: int, content: dict[str, Any],
        fault: str | None = None,
        claimed_author: str | None = None,
    ) -> int:
        # claimed_author is an intentionally untrusted parameter.
        _ = claimed_author
        chapter = self._owned_chapter(actor, book_id, chapter_id)
        if chapter.revision != expected_revision:
            raise VersionConflict("expected revision is no longer current")
        if fault == "before_commit":
            raise SaveInterrupted("simulated lost connection before write")
        if fault not in (None, "after_commit"):
            raise ValueError("unsupported synthetic fault")
        if not isinstance(content, dict) or content.get("type") != "doc":
            raise ValueError("unsupported document")
        chapter.content = deepcopy(content)
        chapter.revision += 1
        if fault == "after_commit":
            # Simulate ambiguous lost ACK: new version exists but caller cannot
            # honestly claim acknowledged save without a reconciliation read.
            raise SaveInterrupted("simulated connection loss after write")
        return chapter.revision


class DraftSession:
    """Visible save-state model for a single live editing session."""

    def __init__(self, store: SyntheticChapterStore, actor: Principal, book_id: str, chapter_id: str):
        self.store, self.actor = store, actor
        self.book_id, self.chapter_id = book_id, chapter_id
        self.document, self.revision = store.read(actor, book_id, chapter_id)
        self.state = "saved"
        self.last_error: str | None = None

    def edit(self, document: dict[str, Any]) -> None:
        self.document = deepcopy(document)
        self.state = "unsaved"
        self.last_error = None

    def save(self, fault: str | None = None) -> str:
        if self.state == "saved":
            return self.state
        self.state = "saving"
        try:
            new_revision = self.store.save(
                self.actor, self.book_id, self.chapter_id,
                expected_revision=self.revision,
                content=self.document, fault=fault,
            )
        except (SaveInterrupted, VersionConflict, AccessDenied, ValueError) as exc:
            self.state = "error"
            self.last_error = str(exc)
            return self.state
        self.revision = new_revision
        self.state = "saved"
        self.last_error = None
        return self.state

    def snapshot_pending(self) -> dict[str, Any]:
        # Available only inside the CURRENT PROCESS; not crash recovery.
        return deepcopy(self.document)

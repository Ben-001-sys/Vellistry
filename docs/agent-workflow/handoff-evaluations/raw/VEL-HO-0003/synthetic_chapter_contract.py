"""In-memory synthetic contract for proposed VEL-SPEC-001 scenarios.

This module is a deterministic test double for chapter create, edit, save,
reopen, unconfirmed save, stale revision, and isolation behavior. It is not a
manuscript editor, Tiptap/ProseMirror runtime, database, authentication system,
or production persistence design.

Authority recorded here is advisory. Product acceptance stays NOT TESTED.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum
from types import MappingProxyType


SYNTHETIC_CONTRACT_DECLARATION = MappingProxyType(
    {
        "model_kind": "in_memory_synthetic_contract",
        "task_id": "VEL-TASK-0002",
        "context_pack_id": "VEL-CP-0002",
        "spec_id": "VEL-SPEC-001",
        "spec_status": "proposed",
        "product_scope_status": "accepted-for-M1-M2-M3-M8-boundaries-only",
        "acceptance_plan_status": "proposed-not-executed",
        "product_acceptance": "NOT TESTED",
        "architecture_selected": None,
        "framework_selected": None,
        "database_selected": None,
        "auth_vendor_selected": None,
        "ai_provider_selected": None,
        "tiptap_browser_test": False,
        "real_authentication_or_rls": False,
        "durable_production_storage": False,
        "owner_approval_obtained": False,
        "stage3_cursor_fixture_accepted": False,
        "stage4_workflow_accepted": False,
    }
)

_SUPPORTED_BLOCK_TYPES = ("paragraph", "heading", "list_item")
_SUPPORTED_MARK_TYPES = ("emphasis",)
_SUPPORTED_LIST_KINDS = ("bullet", "ordered")
_ACK_SOURCES = ("write_ack", "read_back", "loaded_committed")


class SaveStatus(Enum):
    UNSAVED = "unsaved"
    SAVING = "saving"
    SAVED = "saved"
    ERROR = "error"
    CONFLICT = "conflict"


class Fault(Enum):
    NONE = "none"
    LOST_BEFORE_COMMIT = "lost_before_commit"
    LOST_AFTER_COMMIT = "lost_after_commit"


def _never(value: object) -> None:
    raise RuntimeError(f"unhandled value: {value!r}")


@dataclass(frozen=True)
class TextMark:
    type: str
    start: int
    end: int


@dataclass(frozen=True)
class Block:
    type: str
    text: str
    level: int | None = None
    list_kind: str | None = None
    marks: tuple[TextMark, ...] = ()


@dataclass(frozen=True)
class ManuscriptDocument:
    blocks: tuple[Block, ...]


@dataclass(frozen=True)
class Session:
    """Synthetic actor binding.

    `open_session` only names a test actor. It does not authenticate anyone.
    """

    session_id: str
    author_id: str
    ai_provider: str | None = None
    ai_key_configured: bool = False


@dataclass(frozen=True)
class Book:
    book_id: str
    owner_author_id: str
    title: str


@dataclass(frozen=True)
class ChapterNav:
    chapter_id: str
    book_id: str
    title: str


@dataclass
class EditorState:
    session_id: str
    chapter_id: str
    book_id: str
    base_revision: int
    local_document: ManuscriptDocument
    last_confirmed_document: ManuscriptDocument
    status: SaveStatus
    durability: str
    acknowledgment_source: str | None
    ai_connection_demanded: bool = False
    status_trace: list[str] = field(default_factory=list)


@dataclass(frozen=True)
class Result:
    code: str
    acknowledged: bool
    status: SaveStatus | None = None
    durability: str | None = None
    revision: int | None = None
    document: ManuscriptDocument | None = None
    acknowledgment_source: str | None = None
    untrusted_author_claim: str | None = None
    books: tuple[Book, ...] = ()
    chapters: tuple[ChapterNav, ...] = ()

    def __post_init__(self) -> None:
        if self.acknowledged and self.status is not SaveStatus.SAVED:
            raise RuntimeError("acknowledgment requires saved status")
        if self.status is SaveStatus.SAVED and self.acknowledgment_source not in _ACK_SOURCES:
            raise RuntimeError("saved result requires an acknowledgment source")
        if self.code in {"denied", "title_not_identity", "unconfirmed", "outstanding"}:
            if self.document is not None or self.books or self.chapters:
                raise RuntimeError("withheld result included content")
        if self.code in {"denied", "title_not_identity"} and self.revision is not None:
            raise RuntimeError("denial included a revision oracle")
        if self.status is SaveStatus.SAVED and self.durability != "confirmed":
            raise RuntimeError("saved result was not confirmed")


@dataclass
class _Chapter:
    chapter_id: str
    book_id: str
    owner_author_id: str
    title: str
    head_revision: int
    head_document: ManuscriptDocument
    revisions: dict[int, ManuscriptDocument]


def paragraph(text: str, emphasis: tuple[int, int] | None = None) -> Block:
    marks: tuple[TextMark, ...] = ()
    if emphasis is not None:
        marks = (TextMark("emphasis", emphasis[0], emphasis[1]),)
    return Block("paragraph", text, None, None, marks)


def heading(text: str, level: int = 1) -> Block:
    return Block("heading", text, level, None, ())


def list_item(text: str, list_kind: str = "bullet") -> Block:
    return Block("list_item", text, None, list_kind, ())


def document(*blocks: Block) -> ManuscriptDocument:
    """Validate an inert document-shaped fixture.

    Supported shapes are paragraph, heading, and list item, with emphasis marks.
    This is not a rich-text editor and does not parse HTML, DOCX, or ProseMirror.
    """

    checked: list[Block] = []
    for block in blocks:
        if block.type == "paragraph":
            if block.level is not None or block.list_kind is not None:
                raise ValueError("paragraph cannot carry heading level or list kind")
        elif block.type == "heading":
            if block.level not in (1, 2, 3) or block.list_kind is not None:
                raise ValueError("heading level must be 1, 2, or 3")
        elif block.type == "list_item":
            if block.list_kind not in _SUPPORTED_LIST_KINDS or block.level is not None:
                raise ValueError("list item kind must be bullet or ordered")
        elif block.type not in _SUPPORTED_BLOCK_TYPES:
            raise ValueError(f"unsupported block type: {block.type}")
        else:
            _never(block.type)
        for mark in block.marks:
            if mark.type not in _SUPPORTED_MARK_TYPES:
                raise ValueError(f"unsupported mark type: {mark.type}")
            if not (0 <= mark.start < mark.end <= len(block.text)):
                raise ValueError("emphasis mark is outside the block text")
        checked.append(block)
    return ManuscriptDocument(blocks=tuple(checked))


class ContractModel:
    """Behavioral double for the proposed chapter save contract.

    Authorization uses the session actor only. A caller-supplied author id is
    recorded as an untrusted claim and never grants access. Commit and client
    acknowledgment are separate, so a lost response cannot display `saved`.
    """

    def __init__(self) -> None:
        self._next_id = 0
        self._books: dict[str, Book] = {}
        self._chapters: dict[str, _Chapter] = {}
        self._book_order: list[str] = []
        self._chapters_by_book: dict[str, list[str]] = {}

    def open_session(
        self,
        author_id: str,
        *,
        ai_provider: str | None = None,
        ai_key_configured: bool = False,
    ) -> Session:
        if ai_key_configured and ai_provider is None:
            raise ValueError("an AI key cannot be configured without a named provider")
        return Session(
            self._allocate("session"),
            _require_label("author_id", author_id),
            ai_provider,
            ai_key_configured,
        )

    def create_book(self, session: Session, title: str) -> Book:
        book = Book(self._allocate("book"), session.author_id, _require_label("title", title))
        self._books[book.book_id] = book
        self._book_order.append(book.book_id)
        self._chapters_by_book[book.book_id] = []
        return book

    def list_books(self, session: Session) -> tuple[Book, ...]:
        return tuple(
            self._books[book_id]
            for book_id in self._book_order
            if self._books[book_id].owner_author_id == session.author_id
        )

    def create_chapter(
        self,
        session: Session,
        book_id: str,
        title: str,
        initial: ManuscriptDocument,
        claimed_author_id: str | None = None,
    ) -> tuple[EditorState, Result]:
        book = self._books.get(book_id)
        if book is None or book.owner_author_id != session.author_id:
            return self._empty_editor(session), _denied(claimed_author_id)
        chapter_id = self._allocate("chapter")
        state = EditorState(
            session_id=session.session_id,
            chapter_id=chapter_id,
            book_id=book_id,
            base_revision=0,
            local_document=initial,
            last_confirmed_document=initial,
            status=SaveStatus.UNSAVED,
            durability="not_durable",
            acknowledgment_source=None,
        )
        self._set_status(state, SaveStatus.SAVING, "unconfirmed", None)
        chapter = _Chapter(
            chapter_id=chapter_id,
            book_id=book_id,
            owner_author_id=session.author_id,
            title=_require_label("title", title),
            head_revision=1,
            head_document=initial,
            revisions={1: initial},
        )
        self._chapters[chapter_id] = chapter
        self._chapters_by_book[book_id].append(chapter_id)
        state.base_revision = 1
        state.last_confirmed_document = initial
        self._set_status(state, SaveStatus.SAVED, "confirmed", "write_ack")
        return state, Result(
            code="saved",
            acknowledged=True,
            status=SaveStatus.SAVED,
            durability="confirmed",
            revision=1,
            document=initial,
            acknowledgment_source="write_ack",
            untrusted_author_claim=claimed_author_id,
        )

    def list_chapters(
        self,
        session: Session,
        book_id: str,
        claimed_author_id: str | None = None,
    ) -> Result:
        book = self._books.get(book_id)
        if book is None or book.owner_author_id != session.author_id:
            return _denied(claimed_author_id)
        chapters = tuple(
            ChapterNav(chapter_id, book_id, self._chapters[chapter_id].title)
            for chapter_id in self._chapters_by_book[book_id]
        )
        return Result(
            code="ok",
            acknowledged=False,
            chapters=chapters,
            untrusted_author_claim=claimed_author_id,
        )

    def reopen(
        self,
        session: Session,
        book_id: str,
        chapter_id: str,
        claimed_author_id: str | None = None,
    ) -> tuple[EditorState | None, Result]:
        denial = self._authorize(session, book_id, chapter_id, claimed_author_id)
        if denial is not None:
            return None, denial
        chapter = self._chapters[chapter_id]
        state = EditorState(
            session_id=session.session_id,
            chapter_id=chapter.chapter_id,
            book_id=chapter.book_id,
            base_revision=chapter.head_revision,
            local_document=chapter.head_document,
            last_confirmed_document=chapter.head_document,
            status=SaveStatus.UNSAVED,
            durability="not_durable",
            acknowledgment_source=None,
        )
        self._set_status(state, SaveStatus.SAVED, "confirmed", "loaded_committed")
        return state, Result(
            code="loaded",
            acknowledged=False,
            status=SaveStatus.SAVED,
            durability="confirmed",
            revision=chapter.head_revision,
            document=chapter.head_document,
            acknowledgment_source="loaded_committed",
            untrusted_author_claim=claimed_author_id,
        )

    def edit_local(self, state: EditorState, updated: ManuscriptDocument) -> EditorState:
        """Apply a local document replacement.

        No AI provider is consulted. Calling this never marks the chapter saved.
        """

        if state.ai_connection_demanded:
            raise RuntimeError("editing must not demand an AI connection")
        state.ai_connection_demanded = False
        state.local_document = updated
        if updated == state.last_confirmed_document and state.durability == "confirmed":
            self._set_status(state, SaveStatus.SAVED, "confirmed", state.acknowledgment_source)
            return state
        durability = "unconfirmed" if state.durability == "unconfirmed" else "not_durable"
        self._set_status(state, SaveStatus.UNSAVED, durability, None)
        return state

    def save(
        self,
        session: Session,
        state: EditorState,
        *,
        fault: Fault = Fault.NONE,
        claimed_author_id: str | None = None,
    ) -> Result:
        denial = self._authorize(session, state.book_id, state.chapter_id, claimed_author_id)
        if denial is not None or state.session_id != session.session_id:
            return denial if denial is not None else _denied(claimed_author_id)
        chapter = self._chapters[state.chapter_id]
        self._set_status(state, SaveStatus.SAVING, "unconfirmed", None)

        if fault is Fault.LOST_BEFORE_COMMIT:
            return self._mark_unconfirmed(state, claimed_author_id)
        if fault not in (Fault.NONE, Fault.LOST_AFTER_COMMIT):
            _never(fault)

        if state.base_revision != chapter.head_revision:
            self._set_status(state, SaveStatus.CONFLICT, "conflict", None)
            return Result(
                code="conflict",
                acknowledged=False,
                status=SaveStatus.CONFLICT,
                durability="conflict",
                revision=chapter.head_revision,
                document=chapter.head_document,
                untrusted_author_claim=claimed_author_id,
            )

        new_revision = chapter.head_revision + 1
        chapter.head_revision = new_revision
        chapter.head_document = state.local_document
        chapter.revisions[new_revision] = state.local_document

        if fault is Fault.LOST_AFTER_COMMIT:
            return self._mark_unconfirmed(state, claimed_author_id)
        if fault is not Fault.NONE:
            _never(fault)

        state.base_revision = new_revision
        state.last_confirmed_document = state.local_document
        self._set_status(state, SaveStatus.SAVED, "confirmed", "write_ack")
        return Result(
            code="saved",
            acknowledged=True,
            status=SaveStatus.SAVED,
            durability="confirmed",
            revision=new_revision,
            document=state.local_document,
            acknowledgment_source="write_ack",
            untrusted_author_claim=claimed_author_id,
        )

    def reconcile(
        self,
        session: Session,
        state: EditorState,
        claimed_author_id: str | None = None,
    ) -> Result:
        """Read the committed head. This is the only way a lost ack can become saved."""

        denial = self._authorize(session, state.book_id, state.chapter_id, claimed_author_id)
        if denial is not None or state.session_id != session.session_id:
            return denial if denial is not None else _denied(claimed_author_id)
        chapter = self._chapters[state.chapter_id]
        if (
            chapter.head_document == state.local_document
            and chapter.head_revision >= state.base_revision
        ):
            already_confirmed = (
                state.status is SaveStatus.SAVED
                and state.durability == "confirmed"
                and state.base_revision == chapter.head_revision
                and state.acknowledgment_source in _ACK_SOURCES
            )
            state.base_revision = chapter.head_revision
            state.last_confirmed_document = chapter.head_document
            source = state.acknowledgment_source if already_confirmed else "read_back"
            if not already_confirmed:
                self._set_status(state, SaveStatus.SAVED, "confirmed", "read_back")
            return Result(
                code="loaded" if already_confirmed else "confirmed_by_read_back",
                acknowledged=False,
                status=SaveStatus.SAVED,
                durability="confirmed",
                revision=chapter.head_revision,
                document=chapter.head_document,
                acknowledgment_source=source,
                untrusted_author_claim=claimed_author_id,
            )
        if chapter.head_revision != state.base_revision:
            self._set_status(state, SaveStatus.CONFLICT, "conflict", None)
            return Result(
                code="conflict",
                acknowledged=False,
                status=SaveStatus.CONFLICT,
                durability="conflict",
                revision=chapter.head_revision,
                document=chapter.head_document,
                untrusted_author_claim=claimed_author_id,
            )
        self._set_status(state, SaveStatus.ERROR, "not_durable", None)
        return Result(
            code="outstanding",
            acknowledged=False,
            status=SaveStatus.ERROR,
            durability="not_durable",
            revision=chapter.head_revision,
            untrusted_author_claim=claimed_author_id,
        )

    def open_by_title(
        self,
        session: Session,
        title: str,
        claimed_author_id: str | None = None,
    ) -> Result:
        """Title is not a chapter identity, even when the title is unique."""

        _ = (session, title, claimed_author_id)
        return Result(
            code="title_not_identity",
            acknowledged=False,
            untrusted_author_claim=claimed_author_id,
        )

    def harness_committed(self, chapter_id: str) -> tuple[int, ManuscriptDocument, tuple[int, ...]]:
        """White-box probe of the fake store.

        Client save status must not be derived from this method. It exists so
        tests can tell a lost acknowledgment after commit from a lost request
        before commit.
        """

        chapter = self._chapters[chapter_id]
        return chapter.head_revision, chapter.head_document, tuple(sorted(chapter.revisions))

    def _authorize(
        self,
        session: Session,
        book_id: str,
        chapter_id: str,
        claimed_author_id: str | None,
    ) -> Result | None:
        _ = claimed_author_id
        chapter = self._chapters.get(chapter_id)
        if (
            chapter is None
            or chapter.owner_author_id != session.author_id
            or chapter.book_id != book_id
        ):
            return _denied(claimed_author_id)
        return None

    def _mark_unconfirmed(self, state: EditorState, claimed_author_id: str | None) -> Result:
        self._set_status(state, SaveStatus.ERROR, "unconfirmed", None)
        return Result(
            code="unconfirmed",
            acknowledged=False,
            status=SaveStatus.ERROR,
            durability="unconfirmed",
            untrusted_author_claim=claimed_author_id,
        )

    def _set_status(
        self,
        state: EditorState,
        status: SaveStatus,
        durability: str,
        source: str | None,
    ) -> None:
        if status is SaveStatus.SAVED:
            if durability != "confirmed" or source not in _ACK_SOURCES:
                raise RuntimeError("refusing to mark saved without durable acknowledgment")
            state.acknowledgment_source = source
        elif status is SaveStatus.SAVING:
            if durability != "unconfirmed":
                raise RuntimeError("saving is not a durability claim")
        elif status is SaveStatus.UNSAVED:
            if durability not in {"not_durable", "unconfirmed"}:
                raise RuntimeError("unsaved durability is invalid")
            state.acknowledgment_source = None
        elif status is SaveStatus.ERROR:
            if durability not in {"unconfirmed", "not_durable"}:
                raise RuntimeError("error durability is invalid")
            state.acknowledgment_source = None
        elif status is SaveStatus.CONFLICT:
            if durability != "conflict":
                raise RuntimeError("conflict durability is invalid")
            state.acknowledgment_source = None
        else:
            _never(status)
        state.status = status
        state.durability = durability
        label = f"{status.value}:{durability}"
        if status is SaveStatus.SAVED and source is not None:
            label = f"{label}:{source}"
        state.status_trace.append(label)

    def _allocate(self, prefix: str) -> str:
        self._next_id += 1
        return f"{prefix}-{self._next_id}"

    def _empty_editor(self, session: Session) -> EditorState:
        empty = document()
        return EditorState(
            session_id=session.session_id,
            chapter_id="",
            book_id="",
            base_revision=0,
            local_document=empty,
            last_confirmed_document=empty,
            status=SaveStatus.ERROR,
            durability="not_durable",
            acknowledgment_source=None,
        )


def _denied(claimed_author_id: str | None) -> Result:
    return Result(code="denied", acknowledged=False, untrusted_author_claim=claimed_author_id)


def _require_label(label: str, value: str) -> str:
    if not isinstance(value, str) or value == "":
        raise ValueError(f"{label} must be a non-empty string")
    return value

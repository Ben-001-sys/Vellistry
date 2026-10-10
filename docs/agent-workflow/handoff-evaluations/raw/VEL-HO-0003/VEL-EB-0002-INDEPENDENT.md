# VEL-EB-0002-INDEPENDENT

Execution bundle for bounded synthetic task `VEL-TASK-0002`. This report records one fresh session. It does not accept the specification, the product, the Stage 3 historical Cursor fixture, or this Stage 4 workflow.

## Agent identity

- Tool: Cursor agent session.
- Model identity supplied to this agent: Grok 4.7. Training attribution supplied to this agent: SpaceXAI.
- Effort, temperature, and other sampling settings: unknown.
- Fresh-session assertion: this session began with the instruction to follow `PROMPT.md`. The workspace listing at the start contained `PROMPT.md` and `VEL-CP-0002.md`. No earlier chat, agent transcript, agent memory, external website, pre-existing Vellistry repository, or earlier ExecutionBundle was consulted. This sentence is a self-report and cannot independently certify isolation.
- Files available before this run: `PROMPT.md` and `VEL-CP-0002.md`, including the source snapshots embedded in the context pack. The recorded Git blobs were not fetched, and their SHA-256 values were not recomputed.

## Pinned sources and authority

| Input | Identifier quoted from the pack | Status used here |
|---|---|---|
| Task | `VEL-TASK-0002` | Named by `VEL-CP-0002`. Raw task blob `a050c44f722313f36cf40ea1cb5237149a7681a8` was not in the workspace and was not resolved. |
| Context pack | `VEL-CP-0002` version 0.1.0, status `prepared` | Read in full. Pack status is prepared, not owner acceptance of the spec. |
| Base commit | `e9516f1b8dcb202319c1060c404536acd3c5190f` | Quoted from the pack. Not checked out and not verified against Git objects in this session. |
| `PROJECT-CONSTITUTION.md` | blob `61f79c4dcb47bd99291c16490e8c00692e2ab23b` | Accepted governance. |
| `SOURCE-OF-TRUTH.md` | blob `b5ba9bc2ddcd198054d4cf5fb3b24f6c1b0056c4` | Accepted governance. |
| `docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md` | blob `7a25cf8ce88b3ddb221276c38203fc976cbeb3a9` | Accepted product scope for the eight MVP areas. This slice uses the M1, M2, M3, and M8 boundaries only. |
| `docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md` | blob `b61aef6b9748382e1b173e52caf598178c389962` | Proposed, not executed. |
| `docs/specs/VEL-SPEC-001-CHAPTER-SAVE-CONTRACT.md` | blob `cbc936169dc48865acac1d0e4c694b2ed385fe7e` | Proposed engineering spec. |

Accepted clauses used as boundaries:

- M1: one author can create and reopen books and chapters.
- M2: writing works with AI disabled. The accepted scope names a Tiptap 3/ProseMirror foundation under a separate ADR. ADR-0003's text was not in this packet. This run did not select or execute that editor.
- M3: a visible save state must be honest; a confirmed save reopens the supported content; an interrupted save must not acknowledge a write that was not durable.
- M8: private books stay isolated, and error/save states must not claim a successful write that did not happen.
- Constitution and source-of-truth rules: proposals stay proposals until the owner accepts them; evidence, acceptance, implementation, and testing are different states.
- The scope decision states that no application framework, database, persistence schema, storage platform, authentication implementation, hosting provider, or LLM provider was approved.

Proposed clauses, used only as the candidate contract:

- Journeys `VEL-JRN-001`, `VEL-JRN-002`, and `VEL-JRN-003`.
- `ACC-M1-01`, `ACC-M2-01`, `ACC-M3-01`, and `ACC-M3-02`.
- `SC-001` through `SC-008` in proposed `VEL-SPEC-001`.
- `SC-005` is, in the spec's own words, an analyst-proposed extension and not an individually approved product feature.

Known gaps left open: G03 (real-browser Tiptap keyboard, paste, IME, and long-writing checks) and G08 (production identity, storage/backup, and privacy verification).

## FACT

Files created in this session:

- `synthetic_chapter_contract.py` — in-memory contract double, Python standard library only.
- `test_synthetic_chapter_contract.py` — unittest module for that double.
- `VEL-EB-0002-INDEPENDENT.md` — this report.

The model and the tests were written in the same session. There was no pre-existing implementation under test. A passing result shows that this double meets the assertions in the test file. It does not show that a second, independent product implementation was verified.

Commands executed, working directory `c:\Users\admin\Downloads\vellistry-stage4-independent-agent-packet\stage4-independent-agent-packet`:

```text
python --version; python -m unittest -v
```

Observed exit code: 0.

Observed version and test output:

```text
Python 3.10.10
test_sc001_create_book_two_chapters_reopen_restores_each (test_synthetic_chapter_contract.SyntheticChapterContractTests) ... ok
test_sc001_empty_author_has_no_books (test_synthetic_chapter_contract.SyntheticChapterContractTests) ... ok
test_sc002_document_fixture_edits_without_ai_demand (test_synthetic_chapter_contract.SyntheticChapterContractTests) ... ok
test_sc002_unsupported_block_and_mark_rejected (test_synthetic_chapter_contract.SyntheticChapterContractTests) ... ok
test_sc003_result_shape_rejects_unacknowledged_saved (test_synthetic_chapter_contract.SyntheticChapterContractTests) ... ok
test_sc003_saved_only_after_acknowledgment_and_reopen_matches (test_synthetic_chapter_contract.SyntheticChapterContractTests) ... ok
test_sc004_further_local_edit_keeps_commit_and_draft (test_synthetic_chapter_contract.SyntheticChapterContractTests) ... ok
test_sc004_loss_modes_match_on_client_and_differ_in_store (test_synthetic_chapter_contract.SyntheticChapterContractTests) ... ok
test_sc004_reconcile_lost_after_confirms_only_by_read_back (test_synthetic_chapter_contract.SyntheticChapterContractTests) ... ok
test_sc004_reconcile_lost_before_keeps_outstanding_local (test_synthetic_chapter_contract.SyntheticChapterContractTests) ... ok
test_sc005_repeated_stale_save_still_conflicts (test_synthetic_chapter_contract.SyntheticChapterContractTests) ... ok
test_sc005_stale_client_cannot_overwrite_unconfirmed_commit (test_synthetic_chapter_contract.SyntheticChapterContractTests) ... ok
test_sc005_stale_save_preserves_newer_content (test_synthetic_chapter_contract.SyntheticChapterContractTests) ... ok
test_sc006_cross_author_write_and_create_do_not_change_chapter (test_synthetic_chapter_contract.SyntheticChapterContractTests) ... ok
test_sc006_forged_claim_and_guessed_id_return_same_denial (test_synthetic_chapter_contract.SyntheticChapterContractTests) ... ok
test_sc007_same_title_is_isolated_by_book_and_id (test_synthetic_chapter_contract.SyntheticChapterContractTests) ... ok
test_sc008_declaration_stays_advisory (test_synthetic_chapter_contract.SyntheticChapterContractTests) ... ok

----------------------------------------------------------------------
Ran 17 tests in 0.002s

OK
```

Executable test count: 17 passed, 0 failed, 0 errors, 0 skipped. Failing cases: none.

A second command computed file hashes:

```text
python -c "import hashlib, pathlib; root = pathlib.Path('.');
for name in ('synthetic_chapter_contract.py','test_synthetic_chapter_contract.py'):
    data = (root/name).read_bytes()
    print(name, len(data), hashlib.sha256(data).hexdigest())"
```

Observed exit code: 0.

```text
synthetic_chapter_contract.py 21701 74705667484e5a9f0969f9ca37760da252fb11e76f3b3cb98c3b8a0fcc410c15
test_synthetic_chapter_contract.py 23778 9790507cc129abc01ee4cabba063ee20cc038564d3ffa77c19c31668726d2194
```

No network call, Git command, database, browser, or third-party package was used.

Executable tests are the 17 unittest methods. They drive the in-memory double only.

Not executed, and not counted as passes:

- Real Tiptap, browser, keyboard, paste, IME, caret, or accessibility checks.
- Real authentication, authorization, or row-level security.
- Disk, crash, multi-process, or hosted durability.
- Any product acceptance scenario. Those remain `NOT TESTED`.

Fixtures use invented prose and synthetic actors (`author-maple`, `author-cedar`). No personal manuscript, password, token, or external service was used.

`harness_committed` is a white-box probe of the fake store. Client save status is not taken from it. Tests use it to show whether a dropped response happened before or after the in-memory commit. It is not a product read API and it does not enforce authorization.

## Scenario matrix

Product acceptance for every row is `NOT TESTED`. The status column is only the synthetic or governance result from this session.

| ID | Synthetic status | Authority | Tests and observed evidence |
|---|---|---|---|
| SC-001 | PASS (synthetic) | Proposed `ACC-M1-01`, inside accepted M1. | `test_sc001_empty_author_has_no_books`, `test_sc001_create_book_two_chapters_reopen_restores_each`. An author with no books creates one book and two chapters. Navigation lists those two chapter ids and titles. Reopening each returns its own document, with `acknowledgment_source=loaded_committed`. |
| SC-002 | PARTIAL | Proposed `ACC-M2-01`, inside accepted M2. G03 still open. | `test_sc002_document_fixture_edits_without_ai_demand` and `test_sc002_unsupported_block_and_mark_rejected` passed. With `ai_provider=None` and no key, a local edit stores an inert fixture: heading, paragraph, emphasis mark `(0, 4)`, and two bullet items. `ai_connection_demanded` stays false, and the committed head stays at the previous document. A `table` block and a `comment` mark raise `ValueError`. No editor, keyboard, clipboard, undo, IME, or screen reader was run. |
| SC-003 | PASS (synthetic) | Proposed `ACC-M3-01`, inside accepted M3. | `test_sc003_saved_only_after_acknowledgment_and_reopen_matches`, `test_sc003_result_shape_rejects_unacknowledged_saved`. After a local edit the status is `unsaved` and a fresh reopen still returns the previous committed document. After `save` with no fault, the result is `acknowledged=True`, `status=saved`, `acknowledgment_source=write_ack`, revision 2. The new trace is `saving:unconfirmed` then `saved:confirmed:write_ack`. Reopen returns revision 2, including the emphasis mark. Constructing a `saved` result with no acknowledgment source, or with durability `unconfirmed`, raises `RuntimeError`. |
| SC-004 | PASS (synthetic) | Proposed `ACC-M3-02`, inside accepted M3. | `test_sc004_loss_modes_match_on_client_and_differ_in_store`, `test_sc004_reconcile_lost_before_keeps_outstanding_local`, `test_sc004_reconcile_lost_after_confirms_only_by_read_back`, `test_sc004_further_local_edit_keeps_commit_and_draft`. See the ambiguity notes below. This is injected control flow inside one process, not a crashed service. |
| SC-005 | PASS (synthetic) | Analyst-proposed extension inferred from accepted M3/M8 safety language. Not an individually approved feature. | `test_sc005_stale_save_preserves_newer_content`, `test_sc005_repeated_stale_save_still_conflicts`, `test_sc005_stale_client_cannot_overwrite_unconfirmed_commit`. Two sessions of one author: the newer save stays at revision 2; the stale save returns `conflict`, `acknowledged=False`, and the newer document; the stale local draft remains. A second save with the same base conflicts again. A stale client also cannot replace a revision whose acknowledgment was lost. No merge algorithm was tested. |
| SC-006 | PASS (synthetic) | Accepted M8 isolation boundary. Mechanism not selected. G08 still open. | `test_sc006_forged_claim_and_guessed_id_return_same_denial`, `test_sc006_cross_author_write_and_create_do_not_change_chapter`. Author cedar, passing author maple's id, gets `denied` for a guessed chapter id and for the real chapter id. Those two results match on code, document, revision, and chapter list. The denial repr does not contain the chapter prose or, for listing, the chapter title. A forged editor state and a create into maple's book leave revision 1 and the original document in place. This is a session-principal check in a dict, not authentication or RLS. |
| SC-007 | PASS (synthetic) | Accepted M1/M3/M8 isolation, with the title-identity negative case proposed for engineering evidence. | `test_sc007_same_title_is_isolated_by_book_and_id`. One author, two books, both chapters titled `Salt on the Gate`. Saving the north chapter leaves the south document unchanged. Reopen uses book id plus chapter id. Pairing the south book id with the north chapter id returns `denied` and no prose. `open_by_title` returns `title_not_identity` and no document for the shared title and for a title that was never used; those two results match. |
| SC-008 | PARTIAL | Accepted constitution and source-of-truth rule. Governance check, not a product feature. | `test_sc008_declaration_stays_advisory` passed. The declaration says `spec_status=proposed`, `product_acceptance=NOT TESTED`, and leaves framework, database, auth vendor, architecture, and AI provider unset. Browser, RLS, durable storage, owner approval, Stage 3, and Stage 4 flags are false. Assigning `product_acceptance` raises `TypeError` because the declaration is a read-only mapping. The test checks this artifact only. It does not watch any later agent or substitute for owner review. |

## INTERPRETATION

The executed double is consistent with the proposed save contract for the cases above. Consistency of a same-session model and its tests is not product evidence.

Lost-acknowledgment ambiguity, as observed:

- `Fault.LOST_BEFORE_COMMIT` and `Fault.LOST_AFTER_COMMIT` produce the same client result: `code=unconfirmed`, `acknowledged=False`, `status=error`, `durability=unconfirmed`, `document=None`, `revision=None`.
- Both status traces for that save are `['saving:unconfirmed', 'error:unconfirmed']`. `saved` is absent.
- The local draft remains, and `base_revision` stays at the last loaded revision.
- The white-box probe differs. Before commit, the head stays at revision 1 and the previous document. After commit, the head becomes revision 2 and the edited document. The save result does not tell the client which of those happened.
- A later `reconcile` read is what separates them. If the head is still the old document, the result is `outstanding`, `error`, `not_durable`, and the local draft remains. If the head matches the local draft at a newer revision, the result is `confirmed_by_read_back` with `acknowledgment_source=read_back`. The original save result stays `acknowledged=False`.
- If the client edits again before that read, reconcile returns `conflict`. The committed document and the newer local draft both remain.

`saved` after read-back means a later authorized read found the matching committed revision. It does not rewrite the lost response into an acknowledgment. Showing `saved` before that read would claim durability the client has not observed.

Further limits of what these results can mean:

- The store is a process-local dictionary. Closing the process discards it. No offline store is claimed.
- Another client's commit is visible on the next save or reconcile. Nothing in this double pushes that event into an idle editor.
- A conflict result for the owning session includes the newer document so the outcome names what was preserved. How a writer should merge, reload, or submit a successor revision is not decided here. Repeating the stale save does not succeed.
- Unknown chapter ids and unowned chapter ids return the same denial, without document or revision. That hides a content oracle inside this double. It is a synthetic policy, not an approved security design.
- `open_session` names a test actor. It does not authenticate one.
- Python is the language the packet allowed for the test double. It is not a selected application runtime.

## PROPOSAL

These items need owner decisions or later evidence. None of them is decided by this run.

1. Review proposed `VEL-SPEC-001` before any implementation task treats it as binding. In particular, decide whether a later read-back may display `saved`, and which visible words to use. The spec names `unsaved`, `saving`, `saved`, and `error`. This double also uses `conflict` and the durability qualifiers `confirmed`, `unconfirmed`, and `not_durable`.
2. Decide the writer-facing conflict outcome: reload the newer chapter, keep the local draft as an explicit next revision, or merge. This double only blocks a silent stale overwrite.
3. Run real Tiptap 3 browser checks for keyboard, paste, IME, caret, long writing, and accessibility before closing G03 or `ACC-M2-01`. The inert fixture cannot close them.
4. After an owner-selected identity and storage design, test guessed ids, forged author parameters, and cross-account calls on that design. This double cannot close G08, R14, or R15.
5. Against that selected store, inject a dropped response before commit and after commit, including process kill. Treat a `saved` display that precedes a durable acknowledgment as a blocking defect. Do not add an offline-first claim unless that behavior is separately specified and tested.
6. Leave chapter reorder, planning notes, word counts, backup, export, deletion, and DOCX/TXT interchange outside this slice until their own checks exist.
7. Keep this bundle, the Stage 3 historical Cursor fixture, and this Stage 4 workflow unaccepted unless the owner records a separate decision.

## Reproduction

Python 3.10.10. Standard library only. Dependencies installed: none.

From the directory that contains the two Python files:

```text
python -m unittest -v
```

Expected observation from this session: exit code 0, `Ran 17 tests`, `OK`.

SHA-256 of the runnable files, computed from their bytes before this report was assembled:

- `synthetic_chapter_contract.py`: `74705667484e5a9f0969f9ca37760da252fb11e76f3b3cb98c3b8a0fcc410c15` (21701 bytes)
- `test_synthetic_chapter_contract.py`: `9790507cc129abc01ee4cabba063ee20cc038564d3ffa77c19c31668726d2194` (23778 bytes)

Those two files are the runnable copies. The fenced sources below were read from those files while assembling this report.

### `synthetic_chapter_contract.py`

```python
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
```

### `test_synthetic_chapter_contract.py`

```python
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
```

## Approval gates

Owner acceptance was not established. A product release gate was not established. Real authentication and row-level security were not established. Durable production storage was not established. No application framework, database, authentication vendor, API service, manuscript schema, paid AI provider, or deployment was selected.

`VEL-SPEC-001` remains proposed. The acceptance plan remains proposed-not-executed. Every product acceptance scenario remains `NOT TESTED`. The Stage 3 historical Cursor fixture was not accepted. This Stage 4 workflow was not accepted.

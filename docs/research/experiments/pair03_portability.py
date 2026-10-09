"""R11 Pair 03: synthetic, offline, research-only portable backup/TXT contract.

No user accounts, credentials, actual manuscripts, network connections, or paid API.
This is a deterministic study, NOT an integrated Vellistry importer.
"""
from __future__ import annotations
from copy import deepcopy
from hashlib import sha256
from io import BytesIO
from pathlib import PurePosixPath
from zipfile import ZIP_DEFLATED, ZipFile, BadZipFile
import json

FORMAT_VERSION = 1
MAX_ARCHIVE_BYTES = 2_000_000
MAX_TOTAL_UNCOMPRESSED = 1_000_000
MAX_FILES = 20
MAX_MEMBER_BYTES = 750_000


class UnsafeArchive(ValueError):
    pass


def synthetic_project():
    return {
        "schema": "vellistry-research-v1",
        "books": [
            {"id": "book-a", "owner": "alice",
             "chapters": [{"id": "a1", "revision": 2, "title": "First",
                           "document": {"type": "doc", "content": [
                               {"type": "paragraph", "content": [
                                   {"type": "text", "text": "Mara held the lantern."}]}]}}],
             "profiles": [{"id": "mara", "state": {"goal": "leave the city"},
                           "source_revision": 2, "status": "author_approved"},
                          {"id": "suspected", "state": {"fate": "dead"},
                           "source_revision": 2, "status": "pending_not_canon"}],
             "rules": [{"id": "NI-01.expanded", "enabled": False}]},
            {"id": "book-b", "owner": "bob",
             "chapters": [{"id": "b1", "revision": 1, "title": "Other",
                           "document": {"type": "doc", "content": [
                               {"type": "paragraph", "content": [
                                   {"type": "text", "text": "Another author's story."}]}]}}],
             "profiles": [{"id": "mara", "state": {"goal": "remain home"},
                           "status": "author_approved"}],
             "rules": [{"id": "NI-01.expanded", "enabled": True}]},
        ],
    }


def canonical(value):
    return json.dumps(value, sort_keys=True, ensure_ascii=False,
                      separators=(",", ":")).encode("utf8")


def backup_bytes(project):
    if project.get("schema") != "vellistry-research-v1":
        raise UnsafeArchive("Unknown fixture schema")
    raw = canonical(project)
    manifest = {"format": FORMAT_VERSION, "files": [{
        "path": "project.json", "bytes": len(raw),
        "sha256": sha256(raw).hexdigest(),
    }]}
    out = BytesIO()
    with ZipFile(out, mode="w", compression=ZIP_DEFLATED) as archive:
        archive.writestr("manifest.json", canonical(manifest))
        archive.writestr("project.json", raw)
    return out.getvalue()


def _valid_path(name):
    p = PurePosixPath(name)
    return (bool(name) and not name.startswith("/") and "\\" not in name
            and all(part not in ("", ".", "..") for part in name.split("/"))
            and not p.is_absolute() and not name.endswith("/"))


def restore_bytes(blob, existing):
    """Return a new project after *all* validation; leave existing unchanged."""
    if not isinstance(blob, bytes) or len(blob) > MAX_ARCHIVE_BYTES:
        raise UnsafeArchive("Archive missing or exceeds size bound")
    try:
        with ZipFile(BytesIO(blob)) as archive:
            members = archive.infolist()
            paths = [m.filename for m in members]
            if (len(members) != 2 or len(members) > MAX_FILES
                or len(set(paths)) != len(paths)
                or set(paths) != {"manifest.json", "project.json"}
                or not all(_valid_path(x) for x in paths)
                or any(m.is_dir() or m.file_size > MAX_MEMBER_BYTES for m in members)
                or sum(m.file_size for m in members) > MAX_TOTAL_UNCOMPRESSED):
                raise UnsafeArchive("Unsafe or unexpected archive entries")
            manifest_raw = archive.read("manifest.json")
            project_raw = archive.read("project.json")
    except (BadZipFile, RuntimeError, EOFError, ValueError) as exc:
        raise UnsafeArchive("Invalid ZIP container") from exc
    try:
        m = json.loads(manifest_raw)
        expected = {"format": FORMAT_VERSION, "files": [{
            "path": "project.json", "bytes": len(project_raw),
            "sha256": sha256(project_raw).hexdigest()
        }]}
        if m != expected:
            raise UnsafeArchive("Manifest, hash, or version mismatch")
        project = json.loads(project_raw)
        if not isinstance(project, dict) or project.get("schema") != "vellistry-research-v1":
            raise UnsafeArchive("Unsupported project structure")
        books = project["books"]
        if not isinstance(books, list) or len(books) != 2:
            raise UnsafeArchive("Invalid fixture book count")
        ids = [book["id"] for book in books]
        if len(set(ids)) != len(ids):
            raise UnsafeArchive("Duplicated books")
        for book in books:
            if (not isinstance(book.get("chapters"), list) or
                not isinstance(book.get("profiles"), list) or
                not isinstance(book.get("rules"), list)):
                raise UnsafeArchive("Invalid manuscript structure")
    except (KeyError, TypeError, UnicodeDecodeError, json.JSONDecodeError) as exc:
        raise UnsafeArchive("Invalid project data") from exc
    # Only after validation return a new snapshot. A production restore must
    # additionally reconcile identities, permissions, account ownership,
    # migrations, and atomic database transactions.
    return deepcopy(project)


def txt_to_bytes(text, *, bom=False, windows_newlines=False):
    if not isinstance(text, str) or "\x00" in text:
        raise ValueError("TXT must be Unicode prose without NUL")
    normalized = text.replace("\r\n", "\n").replace("\r", "\n")
    if windows_newlines:
        normalized = normalized.replace("\n", "\r\n")
    return (b"\xef\xbb\xbf" if bom else b"") + normalized.encode("utf8")


def bytes_to_txt(blob):
    if not isinstance(blob, bytes) or len(blob) > MAX_MEMBER_BYTES:
        raise ValueError("TXT size exceeded")
    try:
        text = blob.decode("utf-8-sig")
    except UnicodeDecodeError as exc:
        raise ValueError("Unsupported non-UTF8 TXT encoding") from exc
    if "\x00" in text:
        raise ValueError("Unexpected NUL")
    return text.replace("\r\n", "\n").replace("\r", "\n")

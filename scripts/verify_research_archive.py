"""Bounded, offline ZIP integrity verification; never extracts archive members."""
import argparse
import hashlib
import io
import json
import re
import stat
import struct
import zipfile
import zlib
from pathlib import Path

MAX_MANIFEST_BYTES = 256 * 1024
MAX_ARCHIVE_BYTES = 32 * 1024 * 1024
MAX_MEMBERS = 128
MAX_MEMBER_BYTES = 16 * 1024 * 1024
MAX_TOTAL_BYTES = 64 * 1024 * 1024
MAX_NAME_BYTES = 1024
CHUNK_BYTES = 64 * 1024
HASH_RE = re.compile(r'[0-9a-f]{64}\Z')
ID_RE = re.compile(r'[A-Za-z0-9][A-Za-z0-9_-]{0,63}\Z')
RESERVED = {'CON', 'PRN', 'AUX', 'NUL'} | {
    prefix + str(number) for prefix in ('COM', 'LPT') for number in range(1, 10)
}


def _require(condition, message):
    if not condition:
        raise ValueError(message)


def _safe_name(name):
    _require(type(name) is str and bool(name), 'invalid member name')
    _require(len(name.encode('utf-8')) <= MAX_NAME_BYTES, 'member name too long')
    _require(not any(ord(c) < 32 or ord(c) == 127 for c in name),
             'control character in member name')
    _require(not any(c in name for c in '\\:<>"|?*'), 'unsafe member name')
    for part in name.split('/'):
        _require(part not in ('', '.', '..'), 'unsafe path component')
        _require(not part.endswith((' ', '.')), 'ambiguous path component')
        _require(part.split('.')[0].upper() not in RESERVED, 'reserved path component')
    return name


def _integer(value, maximum, label, minimum=0):
    _require(type(value) is int and minimum <= value <= maximum,
             'invalid ' + label)


def _hash(value):
    _require(type(value) is str and HASH_RE.fullmatch(value) is not None,
             'invalid SHA256')


def _object(pairs):
    result = {}
    for key, value in pairs:
        _require(key not in result, 'duplicate JSON key')
        result[key] = value
    return result


def _constant(value):
    raise ValueError('non-finite JSON number: ' + value)


def _read_bounded(path, limit):
    with open(path, 'rb') as stream:
        data = stream.read(limit + 1)
    _require(len(data) <= limit, 'input exceeds resource limit')
    return data


def _manifest(raw):
    manifest = json.loads(raw.decode('utf-8'), object_pairs_hook=_object,
                          parse_constant=_constant)
    _require(type(manifest) is dict, 'manifest must be an object')
    _require(set(manifest) == {
        'version', 'archive', 'archive_sha256', 'archive_bytes', 'members'
    }, 'invalid manifest keys')
    _require(type(manifest['version']) is int and manifest['version'] == 1,
             'unsupported manifest version')
    _safe_name(manifest['archive'])
    _require('/' not in manifest['archive'], 'archive must be a basename')
    _hash(manifest['archive_sha256'])
    _integer(manifest['archive_bytes'], MAX_ARCHIVE_BYTES, 'archive size', 1)
    members = manifest['members']
    _require(type(members) is list and 1 <= len(members) <= MAX_MEMBERS,
             'invalid member count')
    names, ids, total = set(), set(), 0
    for member in members:
        _require(type(member) is dict and set(member) == {'id', 'name', 'bytes', 'sha256'},
                 'invalid member schema')
        name = _safe_name(member['name'])
        identifier = member['id']
        _require(type(identifier) is str and ID_RE.fullmatch(identifier) is not None,
                 'invalid member id')
        _require(name not in names and identifier not in ids, 'duplicate manifest member')
        names.add(name)
        ids.add(identifier)
        _integer(member['bytes'], MAX_MEMBER_BYTES, 'member size')
        _hash(member['sha256'])
        total += member['bytes']
    _require(total <= MAX_TOTAL_BYTES, 'manifest total exceeds resource limit')
    return manifest


def verify_archive(archive_path, manifest_path):
    """Return verified counts and archive digest, or raise ValueError.

    Manifest schema is version 1 with exactly archive, archive_sha256,
    archive_bytes and members; each member has exactly id, name, bytes, sha256.
    Explicit archive paths may relocate or rename the transport file: archive
    is a validated descriptive basename, not a path to resolve or open.
    Hashes establish agreement with the supplied manifest, not its authenticity.
    """
    try:
        manifest = _manifest(_read_bounded(manifest_path, MAX_MANIFEST_BYTES))
        data = _read_bounded(archive_path, MAX_ARCHIVE_BYTES)
        _require(len(data) == manifest['archive_bytes'], 'archive size mismatch')
        digest = hashlib.sha256(data).hexdigest()
        _require(digest == manifest['archive_sha256'], 'archive SHA256 mismatch')
        expected = {member['name']: member for member in manifest['members']}
        total = 0
        with zipfile.ZipFile(io.BytesIO(data), 'r') as archive:
            infos = archive.infolist()
            _require(len(infos) <= MAX_MEMBERS, 'ZIP member limit exceeded')
            seen = set()
            for info in infos:
                # orig_filename preserves embedded NULs that filename truncates.
                name = _safe_name(info.orig_filename)
                _require(name == info.filename, 'ZIP name was transformed')
                _require(name not in seen, 'duplicate ZIP member')
                seen.add(name)
                _require(not info.is_dir(), 'directory entries are unsupported')
                _require(not info.flag_bits & 1, 'encrypted ZIP is unsupported')
                _require(info.compress_type in (zipfile.ZIP_STORED, zipfile.ZIP_DEFLATED),
                         'unsupported ZIP compression')
                mode = info.external_attr >> 16
                _require(stat.S_IFMT(mode) in (0, stat.S_IFREG),
                         'non-regular ZIP member')
                _integer(info.file_size, MAX_MEMBER_BYTES, 'ZIP member size')
                _integer(info.compress_size, MAX_ARCHIVE_BYTES, 'ZIP compressed size')
            _require(seen == set(expected), 'ZIP member set mismatch')
            _require(sum(info.file_size for info in infos) <= MAX_TOTAL_BYTES,
                     'ZIP total exceeds resource limit')
            for info in infos:
                member = expected[info.filename]
                _require(info.file_size == member['bytes'], 'member size mismatch')
                actual_size, crc = 0, 0
                member_hash = hashlib.sha256()
                with archive.open(info, 'r') as stream:
                    while True:
                        block = stream.read(CHUNK_BYTES)
                        if not block:
                            break
                        actual_size += len(block)
                        total += len(block)
                        _require(actual_size <= member['bytes'] and
                                 actual_size <= MAX_MEMBER_BYTES and total <= MAX_TOTAL_BYTES,
                                 'expanded data exceeds limit')
                        member_hash.update(block)
                        crc = zlib.crc32(block, crc)
                _require(actual_size == member['bytes'], 'actual member size mismatch')
                _require(crc & 0xffffffff == info.CRC, 'member CRC mismatch')
                _require(member_hash.hexdigest() == member['sha256'],
                         'member SHA256 mismatch')
        return {'members': len(expected), 'bytes': total, 'archive_sha256': digest}
    except ValueError:
        raise
    except (OSError, TypeError, UnicodeError, RecursionError, OverflowError,
            zipfile.BadZipFile, zipfile.LargeZipFile, RuntimeError,
            NotImplementedError, EOFError, struct.error, zlib.error) as exc:
        raise ValueError('invalid archive or manifest: ' + str(exc)) from exc


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--archive', required=True, type=Path)
    parser.add_argument('--manifest', required=True, type=Path)
    args = parser.parse_args(argv)
    try:
        result = verify_archive(args.archive, args.manifest)
    except ValueError as exc:
        parser.exit(1, 'verification failed: ' + str(exc) + '\n')
    print(json.dumps(result, sort_keys=True))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())

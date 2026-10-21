"""Synthetic fixtures only; no research archive or external services required."""
import contextlib
import copy
import hashlib
import importlib.util
import io
import json
from pathlib import Path
import stat
import struct
import tempfile
import unittest
from unittest import mock
import warnings
import zipfile

SCRIPT = Path(__file__).resolve().parents[1] / 'scripts' / 'verify_research_archive.py'
SPEC = importlib.util.spec_from_file_location('research_archive_verifier', SCRIPT)
verifier = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(verifier)


class ArchiveTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.archive = self.root / 'transport.zip'
        self.manifest = self.root / 'manifest.json'
        self.entries = [('First.md', b'original\r\nbytes\x00'),
                        ('Branch \u00b7 Research.md', b'example\n' * 100)]
        self.write_zip(self.entries)
        self.document = {
            'version': 1,
            'archive': 'original-research-export.zip',
            'archive_bytes': 0,
            'archive_sha256': '0' * 64,
            'members': [
                {'id': 'SRC-' + str(index), 'name': name, 'bytes': len(data),
                 'sha256': hashlib.sha256(data).hexdigest()}
                for index, (name, data) in enumerate(self.entries, 1)
            ],
        }
        self.rebind_archive()

    def write_zip(self, entries, compression=zipfile.ZIP_DEFLATED):
        with warnings.catch_warnings():
            warnings.simplefilter('ignore', UserWarning)
            with zipfile.ZipFile(self.archive, 'w', compression=compression) as archive:
                for name, data in entries:
                    archive.writestr(name, data)

    def save(self):
        self.manifest.write_text(json.dumps(self.document), encoding='utf-8')

    def rebind_archive(self):
        data = self.archive.read_bytes()
        self.document['archive_bytes'] = len(data)
        self.document['archive_sha256'] = hashlib.sha256(data).hexdigest()
        self.save()

    def verify(self):
        return verifier.verify_archive(self.archive, self.manifest)

    def invalid(self, message=None):
        with self.assertRaisesRegex(ValueError, message or '.'):
            self.verify()

    def test_positive_preserves_files_and_never_extracts(self):
        before = {path.name: path.read_bytes() for path in self.root.iterdir()}
        with mock.patch.object(zipfile.ZipFile, 'extract', side_effect=AssertionError), \
             mock.patch.object(zipfile.ZipFile, 'extractall', side_effect=AssertionError):
            result = self.verify()
        self.assertEqual(result['members'], 2)
        self.assertEqual(result['bytes'], sum(len(data) for _, data in self.entries))
        self.assertEqual(result['archive_sha256'], self.document['archive_sha256'])
        self.assertEqual(before, {path.name: path.read_bytes() for path in self.root.iterdir()})

    def test_stored_and_empty_member(self):
        self.entries.append(('empty.md', b''))
        self.document['members'].append({
            'id': 'EMPTY', 'name': 'empty.md', 'bytes': 0,
            'sha256': hashlib.sha256(b'').hexdigest()})
        self.write_zip(self.entries, zipfile.ZIP_STORED)
        self.rebind_archive()
        self.assertEqual(self.verify()['members'], 3)

    def test_missing_extra_duplicate_members(self):
        cases = [self.entries[:1], self.entries + [('Extra.md', b'extra')],
                 self.entries + [self.entries[0]]]
        for entries in cases:
            with self.subTest(entries=entries):
                self.write_zip(entries)
                self.rebind_archive()
                self.invalid()

    def test_unsafe_zip_names(self):
        for name in ('../escape', '/absolute', 'C:/drive', 'a\\b', 'a//b',
                     './relative', 'directory/', 'NUL.txt', 'a./b', 'bad\x00tail'):
            with self.subTest(name=name):
                # ZipInfo normally truncates NUL on construction; patch raw ZIP
                # bytes below for the embedded-NUL case.
                stored_name = 'badXtail' if '\x00' in name else name
                self.write_zip(self.entries + [(stored_name, b'x')])
                if '\x00' in name:
                    self.archive.write_bytes(self.archive.read_bytes().replace(
                        b'badXtail', b'bad\x00tail'))
                self.rebind_archive()
                self.invalid()

    def test_archive_hash_and_size(self):
        original = copy.deepcopy(self.document)
        for field, value in (('archive_sha256', '0' * 64),
                             ('archive_bytes', original['archive_bytes'] + 1)):
            with self.subTest(field=field):
                self.document = copy.deepcopy(original)
                self.document[field] = value
                self.save()
                self.invalid()

    def test_member_hash_and_size(self):
        original = copy.deepcopy(self.document)
        for field, value in (('sha256', '0' * 64),
                             ('bytes', original['members'][0]['bytes'] + 1)):
            with self.subTest(field=field):
                self.document = copy.deepcopy(original)
                self.document['members'][0][field] = value
                self.save()
                self.invalid()

    def test_corrupted_member_crc_with_matching_whole_archive_hash(self):
        self.write_zip(self.entries, zipfile.ZIP_STORED)
        data = bytearray(self.archive.read_bytes())
        name_length, extra_length = struct.unpack_from('<HH', data, 26)
        data[30 + name_length + extra_length] ^= 1
        self.archive.write_bytes(data)
        self.rebind_archive()
        self.invalid('CRC')

    def test_non_zip_and_truncated_zip(self):
        original = self.archive.read_bytes()
        for data in (b'not a ZIP file', original[:-22]):
            with self.subTest(length=len(data)):
                self.archive.write_bytes(data)
                self.rebind_archive()
                self.invalid()

    def test_malformed_json(self):
        for raw in (b'{', b'[]', b'\xff', b'{"version":1,"version":1}',
                    b'{"version":NaN}', b'{} trailing'):
            with self.subTest(raw=raw):
                self.manifest.write_bytes(raw)
                self.invalid()

    def test_strict_manifest_schema(self):
        original = copy.deepcopy(self.document)
        cases = []
        for key, value in (('version', True), ('version', 2), ('archive_bytes', True),
                           ('archive_bytes', -1), ('archive_sha256', 'A' * 64),
                           ('archive', '../bad.zip'), ('members', []), ('unknown', 1)):
            document = copy.deepcopy(original)
            document[key] = value
            cases.append(document)
        missing = copy.deepcopy(original)
        del missing['archive']
        cases.append(missing)
        for key, value in (('bytes', True), ('bytes', -1), ('sha256', 'bad'),
                           ('id', ''), ('name', '../unsafe'), ('unknown', 1)):
            document = copy.deepcopy(original)
            document['members'][0][key] = value
            cases.append(document)
        duplicate_name = copy.deepcopy(original)
        duplicate_name['members'][1]['name'] = duplicate_name['members'][0]['name']
        cases.append(duplicate_name)
        duplicate_id = copy.deepcopy(original)
        duplicate_id['members'][1]['id'] = duplicate_id['members'][0]['id']
        cases.append(duplicate_id)
        for index, document in enumerate(cases):
            with self.subTest(case=index):
                self.document = document
                self.save()
                self.invalid()

    def test_resource_limits(self):
        original = copy.deepcopy(self.document)
        for field, value in (('archive_bytes', verifier.MAX_ARCHIVE_BYTES + 1),):
            self.document = copy.deepcopy(original)
            self.document[field] = value
            self.save()
            self.invalid()
        self.document = copy.deepcopy(original)
        self.document['members'][0]['bytes'] = verifier.MAX_MEMBER_BYTES + 1
        self.save()
        self.invalid()
        self.document = copy.deepcopy(original)
        self.document['members'] = [
            dict(original['members'][0], id='S' + str(i), name=str(i) + '.md')
            for i in range(verifier.MAX_MEMBERS + 1)]
        self.save()
        self.invalid()
        self.document = copy.deepcopy(original)
        self.document['members'] = [
            dict(original['members'][0], id='S' + str(i), name=str(i) + '.md',
                 bytes=verifier.MAX_MEMBER_BYTES) for i in range(5)]
        self.save()
        self.invalid()
        self.document = original
        self.save()
        with mock.patch.object(verifier, 'MAX_ARCHIVE_BYTES', self.archive.stat().st_size - 1):
            self.invalid()
        self.manifest.write_bytes(b' ' * (verifier.MAX_MANIFEST_BYTES + 1))
        self.invalid()

    def test_symlink_rejected(self):
        with zipfile.ZipFile(self.archive, 'w') as archive:
            for name, data in self.entries:
                info = zipfile.ZipInfo(name)
                info.create_system = 3
                info.external_attr = (stat.S_IFLNK | 0o777) << 16
                archive.writestr(info, data)
        self.rebind_archive()
        self.invalid('non-regular')

    def test_missing_input(self):
        self.archive.unlink()
        self.invalid()

    def test_cli_explicit_paths_success_and_failure(self):
        output = io.StringIO()
        with contextlib.redirect_stdout(output):
            self.assertEqual(verifier.main([
                '--archive', str(self.archive), '--manifest', str(self.manifest)]), 0)
        self.assertEqual(json.loads(output.getvalue())['members'], 2)
        self.document['archive_sha256'] = '0' * 64
        self.save()
        with contextlib.redirect_stderr(io.StringIO()), self.assertRaises(SystemExit) as caught:
            verifier.main(['--archive', str(self.archive), '--manifest', str(self.manifest)])
        self.assertEqual(caught.exception.code, 1)
        with contextlib.redirect_stderr(io.StringIO()), self.assertRaises(SystemExit) as caught:
            verifier.main([])
        self.assertEqual(caught.exception.code, 2)


if __name__ == '__main__':
    unittest.main()

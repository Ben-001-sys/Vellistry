"""Evidence contracts for the original remediation ledger, not approval authentication."""
import copy
import hashlib
import json
from pathlib import Path
import re
import subprocess
import unittest

ROOT = Path(__file__).resolve().parents[1]
EVIDENCE = ROOT / 'docs/reports/evidence/VEL-CURRENT-TRUTH-0041'
ORIGINAL = ROOT / 'docs/agent-workflow/inputs/VEL-TASK-0041/ORIGINAL-CHECKLIST.md'
BASE = '67e48d1fa821fe5e3e94ab7457f554720b676106'


def validate_ledger(rows, original):
    blocks = re.split(r'(?=\[ \] \d{2}\. )', original)[1:]
    if len(rows) != 44 or [r['number'] for r in rows] != list(range(1, 45)):
        raise ValueError('missing, duplicate or reordered requirement')
    for row, block in zip(rows, blocks):
        if row['requirement'] != block.rstrip():
            raise ValueError('original acceptance changed')
        if row['status'] not in {'DONE', 'PARTIAL', 'BLOCKED', 'NOT_STARTED', 'IN_VERIFICATION'}:
            raise ValueError('unsupported status')
        for field in ('evidence_summary', 'evidence', 'outstanding', 'control', 'source_commit', 'next_action'):
            if not row.get(field):
                raise ValueError('incomplete evidence')
        for path in row['evidence']:
            if not (ROOT / path).is_file():
                raise ValueError('missing evidence file')
        # These original acceptance conditions remain unmet at this verified cut.
        if row['number'] in {6, 7, 8, 9, 16, 27, 38, 44} and row['status'] == 'DONE':
            raise ValueError('reserved or unavailable acceptance promoted')
        if row['status'] == 'DONE' and row['control'] != 'none':
            raise ValueError('DONE with outstanding controlled work')


def validate_features(rows):
    plan = (ROOT / 'docs/plans/VEL-PLAN-01-149-FEATURE-TO-TEST-CROSSWALK-2026-10-11.md').read_text(encoding='utf-8')
    source = {}
    for line in plan.splitlines():
        if line.startswith(('| `VEL-FEAT-', '| `VEL-DIFF-')):
            c = [x.strip() for x in line.strip('|').split('|')]
            source[c[0].strip('`')] = c
    if len(rows) != 149 or len({r['id'] for r in rows}) != 149 or {r['id'] for r in rows} != set(source):
        raise ValueError('feature inventory incomplete')
    for row in rows:
        c = source[row['id']]
        if (row['horizon'], row['area'], row['source_authority'], row['planned_test']) != (c[2], c[3], c[4], c[6]):
            raise ValueError('accepted source or planned test changed')
        if row['acceptance_status'] != 'NOT_RUN':
            raise ValueError('planned acceptance has no execution evidence')


class RemediationLedgerTests(unittest.TestCase):
    def setUp(self):
        self.rows = json.loads((EVIDENCE / 'ledger.json').read_text(encoding='utf-8'))
        self.original = ORIGINAL.read_text(encoding='utf-8')
        self.features = json.loads((EVIDENCE / 'features.json').read_text(encoding='utf-8'))

    def test_all_original_requirements_and_evidence(self):
        validate_ledger(self.rows, self.original)
        self.assertEqual(hashlib.sha256(self.original.encode()).hexdigest(), '10e5323de6d524f5a381e845b2859a966f0b89c8d85685c5f19eebd480459890')
        ledger = (ROOT / 'docs/reports/VEL-MASTER-REMEDIATION-LEDGER.md').read_text(encoding='utf-8')
        for row in self.rows:
            self.assertIn(row['requirement'], ledger)
            self.assertIn(f"## {row['number']:02} — {row['status']}", ledger)

    def test_missing_requirement_rejected(self):
        with self.assertRaises(ValueError): validate_ledger(self.rows[:-1], self.original)

    def test_duplicate_requirement_rejected(self):
        self.rows[-1] = copy.deepcopy(self.rows[0])
        with self.assertRaises(ValueError): validate_ledger(self.rows, self.original)

    def test_changed_acceptance_rejected(self):
        self.rows[26]['requirement'] += '\nCode generation alone is enough.'
        with self.assertRaises(ValueError): validate_ledger(self.rows, self.original)

    def test_missing_evidence_rejected(self):
        self.rows[0]['evidence'] = []
        with self.assertRaises(ValueError): validate_ledger(self.rows, self.original)

    def test_reserved_acceptance_cannot_be_done(self):
        for n in (6, 7, 8, 9, 16, 27, 38, 44):
            with self.subTest(item=n):
                rows = copy.deepcopy(self.rows); rows[n-1]['status'] = 'DONE'; rows[n-1]['control'] = 'none'
                with self.assertRaises(ValueError): validate_ledger(rows, self.original)

    def test_unsupported_status_rejected(self):
        self.rows[0]['status'] = 'APPROVED'
        with self.assertRaises(ValueError): validate_ledger(self.rows, self.original)

    def test_full_feature_inventory_and_original_mapping(self):
        validate_features(self.features)

    def test_missing_differentiator_rejected(self):
        rows = [r for r in self.features if r['id'] != 'VEL-DIFF-006']
        with self.assertRaises(ValueError): validate_features(rows)

    def test_duplicate_feature_rejected(self):
        self.features[-1] = copy.deepcopy(self.features[0])
        with self.assertRaises(ValueError): validate_features(self.features)

    def test_planned_test_cannot_be_reported_passed(self):
        self.features[0]['acceptance_status'] = 'PASS'
        with self.assertRaises(ValueError): validate_features(self.features)

    def test_changed_source_horizon_rejected(self):
        self.features[0]['horizon'] = 'POST-MVP'
        with self.assertRaises(ValueError): validate_features(self.features)

    def test_previous_current_state_is_exact_git_source(self):
        original = subprocess.check_output(['git', 'show', BASE + ':CURRENT-STATE.md'], cwd=ROOT)
        archive = (ROOT / 'docs/reports/CURRENT-STATE-ARCHIVE-2026-10-22.md').read_bytes().replace(b'\r\n', b'\n')
        self.assertEqual(original, archive)

    def test_all_pr83_original_paths_retained(self):
        originals = json.loads((ROOT / 'docs/agent-workflow/inputs/VEL-TASK-0041/PR83-SOURCES.json').read_text())
        actual = json.loads((EVIDENCE / 'pr83-dispositions.json').read_text())
        self.assertEqual(len(actual), 46)
        self.assertEqual([r['path'] for r in actual], [r['path'] for r in originals])
        for a, b in zip(actual, originals):
            for key in ('path', 'blob', 'sha256', 'source_commit'): self.assertEqual(a[key], b[key])
            self.assertTrue(a['authorship']); self.assertTrue(a['disposition'])


if __name__ == '__main__':
    unittest.main()

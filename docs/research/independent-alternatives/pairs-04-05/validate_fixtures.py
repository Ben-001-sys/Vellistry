#!/usr/bin/env python3
"""Validate corpus structure and intentional design coverage; DOES NOT test any AI/editor."""
import json
from pathlib import Path
root=Path(__file__).resolve().parent
cases=[json.loads(x) for x in (root/'R19_SYNTHETIC_FICTION_CORPUS_v0.1.jsonl').read_text(encoding='utf8').splitlines()]
edits=[json.loads(x) for x in (root/'R10_REVERSIBLE_EDIT_CASES_v0.1.jsonl').read_text(encoding='utf8').splitlines()]
assert len(cases)>=12 and len(edits)>=12
assert len({x['id'] for x in cases})==len(cases)
assert len({x['id'] for x in edits})==len(edits)
assert len({x['genre'] for x in cases})>=6
assert any(x['pov']=='first person' or x['pov'].startswith('first person') for x in cases)
assert any(x['pov'].startswith('second person') for x in cases)
assert any('third limited' in x['pov'] for x in cases)
assert sum(x['task']=='rewrite' for x in cases)>=4
assert sum(x['task']=='continue' for x in cases)>=6
assert sum(x['deliberate_exception']!='None' for x in cases)>=3
assert any('nonlinear' in x['chronology'] or 'flashback' in x['chronology'] for x in cases)
for c in cases:
 for key in ['id','origin','genre','pov','chronology','task','author_goal','story_context','source_passage','approved_facts','expected_human_review_checks','deliberate_exception','model_outputs','human_ratings']:
  assert key in c and c[key] is not None, (c['id'],key)
 assert c['origin']=='synthetic-original-research-fixture'
 assert c['model_outputs']==[] and c['human_ratings']==[]
 assert c['source_passage'].strip()
 assert len(c['expected_human_review_checks'])>=2
for e in edits:
 assert e['status']=='NOT_RUN' and e['implementation'].startswith('none')
 assert e['expected_control'] and e['expected_invariant']
print(f"PASS fixture structure: {len(cases)} synthetic fiction cases, {len(edits)} revision safety cases")
print(f"Coverage: {len({c['genre'] for c in cases})} genres; tasks: {sum(c['task']=='rewrite' for c in cases)} rewrite / {sum(c['task']=='continue' for c in cases)} continue; deliberate exceptions: {sum(c['deliberate_exception']!='None' for c in cases)}")
print('IMPORTANT: This validates test DATA ONLY. Model quality, semantic outcomes, Tiptap patch safety and human ratings are NOT_RUN.')

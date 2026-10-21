# Offline evidence consistency replay

Run the fenced Python from repository root after all22 attempt2 records are retained. It checks recorded evidence; it does not authenticate GitHub or grant SQL/hosted approval. No remote or database operation occurs.

```python
from pathlib import Path
import copy, json, subprocess
root=Path('.')
ev=root/'docs/reports/evidence/VEL-PR68-RECONCILIATION-0039'
pins=json.loads((root/'docs/agent-workflow/inputs/VEL-TASK-0039/HISTORICAL-RUNS.json').read_text())
source=json.loads(subprocess.check_output(['git','show','ebb214197da2d1c293993cd08976db1627907e64:docs/reports/evidence/VEL-DB-READINESS-001/source-map.json']))
def check(data):
    rows=data['paths']; original={x['path']:x for x in source['files']}
    assert len(rows)==38 and {x['path'] for x in rows}==set(original)
    for row in rows:
        assert row['sha256']==original[row['path']]['sha256']
        assert row['blob']==original[row['path']]['blob']
        assert row['origin']==original[row['path']]['origin']
        if row['path'].endswith('.sql'):assert row['disposition']=='PLANNING_ONLY_NOT_ADOPTED'
    assert len(data['runs'])==22 and {x['run']['id'] for x in data['runs']}=={p['id'] for p in pins}
    expected={p['id']:p for p in pins}
    pairs={(p['source_head'],p['checkout']):p for p in data['checkouts']}
    for run in data['runs']:
        actual=run['run']; pin=expected[actual['id']]
        assert actual['head_sha']==pin['head_sha'] and actual['path']==pin['path']
        assert actual['run_attempt']==2 and actual['status']=='completed' and actual['conclusion']=='success'
        assert run['jobs'] and all(j['conclusion']=='success' and j['steps'] for j in run['jobs'])
        assert len(run['checkout_commits'])==len(run['jobs'])
        for c in run['checkout_commits']:
            p=pairs[(pin['head_sha'],c['commit'])]
            assert p['tree_equal'] and p['source_tree']==p['checkout_tree']
            assert p['direct_head'] or pin['head_sha'] in p['checkout_parents']
    assert len(data['sql'])==4
    assert {x['sha256'] for x in data['sql']}=={
      '315e6a29f8072d4f556729784c07d4bf121666ef385b9cea4dfda36fded5ff74',
      '6786561dcb325e14adbadec7b3bf879b8ab769841c86bf790dfbd2f19c222a65',
      'c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81',
      'bcba9b788151d27ee354f41aa658398f1ed0cbfe86cf0d97f7ae685cb0c54e6b'}
    for row in data['sql']:
        assert row['source']==source['pr68']
        raw=subprocess.check_output(['git','show',row['source']+':'+row['path']])
        import hashlib
        assert hashlib.sha256(raw).hexdigest()==row['sha256']
    return True

data=dict(paths=json.loads((ev/'PR68-DISPOSITIONS.json').read_text()),
          runs=[json.loads((ev/f"{p['id']}-attempt2.json").read_text()) for p in pins],
          checkouts=json.loads((ev/'CHECKOUT-PROVENANCE.json').read_text()),
          sql=json.loads((ev/'SQL-REFERENCES.json').read_text()))
check(data)
mutations=[
 ('missing source path',lambda d:d['paths'].pop()),
 ('altered original hash',lambda d:d['paths'][0].update(sha256='0'*64)),
 ('SQL silently adopted',lambda d:next(x for x in d['paths'] if x['path'].endswith('.sql')).update(disposition='ADOPTED')),
 ('missing rerun',lambda d:d['runs'].pop()),
 ('wrong historical head',lambda d:d['runs'][0]['run'].update(head_sha='0'*40)),
 ('unsupported passing claim',lambda d:d['runs'][0]['run'].update(conclusion='failure')),
 ('zero-step result',lambda d:d['runs'][0]['jobs'][0].update(steps=[])),
 ('unknown checkout',lambda d:d['runs'][0]['checkout_commits'][0].update(commit='0'*40)),
 ('non-equivalent checkout',lambda d:d['checkouts'][0].update(tree_equal=False)),
 ('missing SQL reference',lambda d:d['sql'].pop()),
]
for name,mutate in mutations:
    altered=copy.deepcopy(data);mutate(altered)
    try:check(altered)
    except (AssertionError,KeyError):continue
    raise AssertionError('Negative case accepted: '+name)
for pin in pins:
    old=json.loads((ev/f"{pin['id']}-attempt1.json").read_text())
    assert old['run']['head_sha']==pin['head_sha'] and old['run']['run_attempt']==1
    assert old['run']['conclusion']=='failure' and all(not j['steps'] for j in old['jobs'])
print('PASS: 38 source dispositions; 22 original zero-step failures and successful reruns; exact checkout trees; four SQL pins; 1 positive and 10 negative evidence checks.')

```

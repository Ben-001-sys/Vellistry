import copy,hashlib,json,subprocess
from pathlib import Path
root=Path.cwd(); p=root/'docs/agent-workflow/proposals/VEL-SUPABASE-PRINCIPAL-BOUNDARY-0059.json'
def check(d):
 assert d['status']=='PROPOSAL_ONLY' and d['owner_merge']=='PENDING'
 assert d['hosted_observations']=='UNVERIFIED'
 for k in ('real_auth_implemented','hosted_queries_executed','credentials_obtained','jwt_experiments_executed'): assert d[k] is False
 assert {a['id'] for a in d['verification_axes']}=={'CRYPTOGRAPHIC','AUTH_SERVER','ACTIVE_SESSION'}
 assert len(d['requirements'])==10 and len(d['owner_choices'])==6
 assert all(x['status']=='OWNER_DECISION_PENDING' for x in d['owner_choices'])
 assert len(d['production_decisions'])==6 and set(d['production_decisions'].values())=={'OWNER_DECISION_PENDING'}
 assert len(d['negative_security_cases'])==14 and all(x['status']=='NOT_RUN_PROPOSED' for x in d['negative_security_cases'])
 n=d['next_task']; assert n['id'] is None and n['status']=='PROPOSED_NOT_AUTHORIZED'
 assert n['exact_application_paths']==['apps/api/src/modules/workspace/workspace-principal-verification-policy.ts','apps/api/src/modules/workspace/workspace-principal-adapter.spec.ts']
 assert n['blocked_acceptance_ids']==['N-12'] and len(n['owner_approval_required'])==3
 assert d['future_integration']['status']=='NOT_AUTHORIZED'
 assert len(d['sources'])==9
 for s in d['sources']:
  raw=subprocess.check_output(['git','show',s['commit']+':'+s['path']]); assert hashlib.sha256(raw).hexdigest()==s['sha256']
d=json.loads(p.read_text(encoding='utf-8'));check(d)
mutations=[]
for k,v in [('status','APPROVED'),('owner_merge','APPROVED'),('hosted_observations','VERIFIED'),('real_auth_implemented',True),('hosted_queries_executed',True),('credentials_obtained',True),('jwt_experiments_executed',True)]:
 x=copy.deepcopy(d);x[k]=v;mutations.append((k,x))
for label,fn in [
 ('axes',lambda x:x['verification_axes'].pop()),
 ('requirements',lambda x:x['requirements'].pop()),
 ('owner choice',lambda x:x['owner_choices'][0].update(status='APPROVED')),
 ('production decision',lambda x:x['production_decisions'].update(PRINCIPAL='APPROVED')),
 ('security case execution',lambda x:x['negative_security_cases'][0].update(status='PASS')),
 ('next id',lambda x:x['next_task'].update(id='VEL-TASK-0060')),
 ('next authorization',lambda x:x['next_task'].update(status='AUTHORIZED')),
 ('next path',lambda x:x['next_task']['exact_application_paths'].append('apps/api/src/modules/auth/supabase-auth.service.ts')),
 ('session boundary',lambda x:x['next_task'].update(blocked_acceptance_ids=[])),
 ('future integration',lambda x:x['future_integration'].update(status='AUTHORIZED')),
 ('source hash',lambda x:x['sources'][0].update(sha256='0'*64))]:
 x=copy.deepcopy(d);fn(x);mutations.append((label,x))
for label,x in mutations:
 try:check(x)
 except AssertionError:continue
 raise AssertionError('Mutation accepted: '+label)
base=d['base_commit']; changed=subprocess.check_output(['git','diff','--name-only',base,'HEAD'],text=True).splitlines()
assert all(x=='CURRENT-STATE.md' or x.startswith('docs/') for x in changed)
for name in ['docs/agent-workflow/tasks/VEL-TASK-0058.yaml','docs/agent-workflow/context-packs/VEL-CP-0058.md','docs/agent-workflow/execution-bundles/VEL-EB-0058.md']:
 assert subprocess.check_output(['git','show',base+':'+name])==subprocess.check_output(['git','show','HEAD:'+name])
assert len((root/'CURRENT-STATE.md').read_text(encoding='utf-8').encode())<11000
result={'source_commit':subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip(),'command':'python docs/reports/evidence/VEL-TASK-0059/verify_packet.py','exit_code':0,'positive_packet':1,'negative_document_mutations_rejected':len(mutations),'source_hashes_verified':9,'historical_records_unchanged':3,'application_ci_dependency_sql_changes':0,'proposed_security_runtime_cases':'NOT_RUN_PROPOSED; document integrity checks are not runtime security acceptance'}
print(json.dumps(result,indent=2))

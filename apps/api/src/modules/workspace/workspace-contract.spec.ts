import assert from "node:assert/strict";
import {test} from "node:test";
import {randomUUID} from "node:crypto";
import {operation,text,requestDigest} from "./workspace-contract";
import {checkedPrincipal} from "./workspace-principal";
import {WorkspaceService} from "./workspace.service";
import {spawnSync} from "node:child_process";
import path from "node:path";
const op=(command:unknown)=>({schemaVersion:1,operationId:randomUUID(),expectedVersion:0,command});
test("wire rejects forged ownership and unknown fields",()=>{assert.throws(()=>operation({...op({kind:"create",title:"A"}),owner_id:randomUUID()}));assert.throws(()=>operation(op({kind:"create",title:"A",accepted_document:{}})));});
test("Unicode preserves intent and enforces UTF16",()=>{assert.equal(text("e\u0301",10),"e\u0301");assert.equal(text("😀".repeat(90),180,true).length,180);for(const s of ["\uD800","\uDC00","\u0000"])assert.throws(()=>text(s,180));assert.throws(()=>text("😀".repeat(91),180,true));});
test("notes are separate, plain and untrimmed",()=>{assert.deepEqual(operation(op({kind:"book-notes",body:" \n"})).command,{kind:"book-notes",body:" \n"});assert.throws(()=>operation(op({kind:"chapter-notes",chapterId:randomUUID(),body:null})));});
test("reorder rejects duplicate IDs and invalid versions",()=>{const id=randomUUID();assert.throws(()=>operation(op({kind:"reorder",chapterIds:[id,id]})));for(const value of [-1,0.1,Number.MAX_SAFE_INTEGER+1,NaN])assert.throws(()=>operation({...op({kind:"create",title:"A"}),expectedVersion:value}));});
test("canonical digest ignores object key order but preserves Unicode",()=>{const book=randomUUID(),id=randomUUID();const a=operation({schemaVersion:1,operationId:id,expectedVersion:0,command:{kind:"create",title:" A "}});const b=operation({command:{title:"A",kind:"create"},expectedVersion:0,operationId:id,schemaVersion:1});assert.equal(requestDigest(book,a),requestDigest(book,b));});
test("synthetic principal expiry and verification freshness fail closed",()=>{const now=100000,p={authorId:randomUUID(),sessionId:randomUUID(),tokenExpiresAt:now+1,verifiedAt:now};assert.ok(checkedPrincipal(p,now));assert.equal(checkedPrincipal({...p,verifiedAt:now+1},now),null);assert.equal(checkedPrincipal({...p,verifiedAt:now-30001},now),null);assert.equal(checkedPrincipal({...p,tokenExpiresAt:now},now),null);});
const identity={authorId:randomUUID(),sessionId:randomUUID()};
const provider={verify:async()=>({...identity,tokenExpiresAt:Date.now()+60000,verifiedAt:Date.now()})};
test("delayed rejection cannot release a newer unknown operation",async()=>{
 const book=randomUUID(),first=operation(op({kind:"create",title:"First"}));
 let release!:(value:unknown)=>void;const delayed=new Promise(resolve=>{release=resolve;});let calls=0;
 const rejected={schemaVersion:1,operationId:first.operationId,bookId:book,outcome:"rejected",reason:"conflict",version:0};
 const s=new WorkspaceService(provider,{read:async()=>({}),lookup:async()=>rejected,apply:async()=>{calls++;if(calls===1)return delayed;throw new Error("Unknown after dispatch");}});
 const waiting=s.apply(book,first);await new Promise(resolve=>setImmediate(resolve));
 assert.equal((await s.reconcile(book,first.operationId)).status,"rejected");
 assert.equal((await s.apply(book,op({kind:"create",title:"Second"}))).status,"unknown");
 release(rejected);await waiting;
 assert.equal((await s.apply(book,op({kind:"create",title:"Third"}))).status,"unknown");assert.equal(calls,2);
});
test("an observed read establishes a monotonic minimum baseline",async()=>{
 const book=randomUUID();let observed=5;const s=new WorkspaceService(provider,{read:async()=>({bookId:book,bookTitle:"Synthetic",version:observed,notes:"",chapters:[]}),apply:async()=>({}),lookup:async()=>({})});
 assert.equal((await s.read(book)).status,"ready");observed=4;assert.equal((await s.read(book)).status,"unavailable");observed=6;assert.equal((await s.read(book)).status,"ready");
});
test("every runner subprocess uses the validated Docker environment",()=>{
 // AST probes prevent remote-daemon contact; no Docker process executes here.
 const script=`import ast,copy,sys
t=ast.parse(open(sys.argv[1],encoding='utf-8').read())
def safe(tree):
 calls=[n for n in ast.walk(tree) if isinstance(n,ast.Call) and isinstance(n.func,ast.Attribute) and isinstance(n.func.value,ast.Name) and n.func.value.id=='subprocess' and n.func.attr=='run']
 return bool(calls) and all(any(k.arg=='env' and isinstance(k.value,ast.Name) and k.value.id=='env' for k in c.keywords) for c in calls)
assert safe(t),'All subprocesses must receive the same validated env'
bad=copy.deepcopy(t)
c=next(n for n in ast.walk(bad) if isinstance(n,ast.Call) and isinstance(n.func,ast.Attribute) and n.func.attr=='run')
c.keywords=[k for k in c.keywords if k.arg!='env']
assert not safe(bad),'Omitting env must fail'
print('PASS explicit environment and omission negative probe')`;
 const result=spawnSync("python",["-c",script,path.resolve(__dirname,"../../../../../tests/workspace/persistence/run_pg17.py")],{encoding:"utf8"});assert.equal(result.status,0,result.stderr);
});
test("rejecting a remote Docker context makes no daemon calls, including cleanup",()=>{
 const script=`import importlib.util,pathlib,shutil,subprocess,sys,tempfile,json
spec=importlib.util.spec_from_file_location('runner',sys.argv[1]);m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
original=m.ROOT
with tempfile.TemporaryDirectory(prefix='vel-no-remote-probe-') as directory:
 root=pathlib.Path(directory)
 files=set(m.SQL+['docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json','docs/agent-workflow/proposals/VEL-IMP002-PERSISTENCE-EXECUTION-PACKET.json'])
 for folder in ['apps/api/src/modules/workspace','tests/workspace/persistence']:
  files.update(p.relative_to(original).as_posix() for p in (original/folder).iterdir() if p.suffix in {'.ts','.mjs','.py'})
 for name in files:
  destination=root/name;destination.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(original/name,destination)
 m.ROOT=root;calls=[]
 def fake(argv,**kwargs):
  if argv[0]=='git':return subprocess.CompletedProcess(argv,0,b'0'*40+b'\\n',b'')
  calls.append(argv)
  if argv[1:3]==['context','inspect']:return subprocess.CompletedProcess(argv,0,b'"ssh://forbidden.invalid"',b'')
  return subprocess.CompletedProcess(argv,1,b'',b'Mocked: no daemon access')
 m.subprocess.run=fake
 sys.argv=['runner','--disposable','--cases','docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json']
 assert m.main()==1
 assert len(calls)==1 and calls[0][1:3]==['context','inspect'],'Rejected context still attempted daemon access during cleanup'
 print('PASS mocked remote context rejected without daemon access')`;
 const result=spawnSync("python",["-c",script,path.resolve(__dirname,"../../../../../tests/workspace/persistence/run_pg17.py")],{encoding:"utf8"});assert.equal(result.status,0,result.stderr);
});

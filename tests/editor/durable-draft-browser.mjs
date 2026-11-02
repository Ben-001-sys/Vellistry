/** Owned loopback-only Chromium acceptance. No production route or new dependency. */
import {createRequire} from 'node:module';
import {pathToFileURL,fileURLToPath} from 'node:url';
import {readdir,mkdir,mkdtemp,rm,writeFile} from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import assert from 'node:assert/strict';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const output=path.join(root,'.submission');await mkdir(output,{recursive:true});
const esbuildDir=(await readdir(path.join(root,'node_modules/.pnpm'))).find(x=>x.startsWith('esbuild@'));
const esbuild=await import(pathToFileURL(path.join(root,'node_modules/.pnpm',esbuildDir,'node_modules/esbuild/lib/main.js')).href);
const playwrightPath=process.env.VEL_PLAYWRIGHT_PATH;
if(!playwrightPath)throw Error('BLOCKED: provide existing Playwright module path; no dependencies installed by harness');
const {chromium}=createRequire(import.meta.url)(playwrightPath);
const bundle=await esbuild.build({entryPoints:[path.join(root,'tests/editor/durable-draft-fixture.tsx')],bundle:true,write:false,platform:'browser',format:'iife',define:{'process.env.NODE_ENV':'"test"'},jsx:'automatic',nodePaths:[path.join(root,'apps/web/node_modules')]});
const sockets=new Set();const server=http.createServer((req,res)=>{if(req.url==='/bundle.js'){res.setHeader('content-type','text/javascript');res.end(bundle.outputFiles[0].text);}else{res.setHeader('content-type','text/html');res.end('<!doctype html><html><body><div id="root"></div><script src="/bundle.js"></script></body></html>');}});
server.on('connection',s=>{sockets.add(s);s.on('close',()=>sockets.delete(s));});
await new Promise(r=>server.listen(0,'127.0.0.1',r));const origin=`http://127.0.0.1:${server.address().port}`;
const profile=await mkdtemp(path.join(output,'chromium-drafts-'));let context;const cases=[];
const run=async(name,fn)=>{await fn();cases.push({name,status:'PASS'});console.log(JSON.stringify(cases.at(-1)));};
const status=p=>p.getByRole('status',{name:'Local recovery status'});
const ready=async p=>{await p.evaluate(()=>window.fixture.ready);await p.waitForSelector('[aria-label="Local recovery status"]');};
const flush=async p=>p.evaluate(()=>window.fixture.flush());
const text=async p=>p.evaluate(()=>window.fixture.editor()?.getJSON());
const clear=async p=>{await p.evaluate(async()=>{await window.fixture.close();await new Promise((resolve,reject)=>{const r=indexedDB.deleteDatabase(window.fixture.dbName);r.onsuccess=resolve;r.onerror=reject;r.onblocked=()=>reject(Error('delete blocked'));});});};
let result='FAIL';
try{
 context=await chromium.launchPersistentContext(profile,{headless:true,...(process.env.VEL_CHROMIUM_PATH?{executablePath:process.env.VEL_CHROMIUM_PATH}:{}),args:['--disable-background-networking','--disable-component-update','--disable-sync','--no-first-run']});
 await context.route('**/*',route=>route.request().url().startsWith(origin+'/')?route.continue():route.abort());
 const page=await context.newPage();await page.goto(origin);await ready(page);
 let exact;
 await run('actual Tiptap keyboard edit and native transaction completion',async()=>{
  const editor=page.locator('[contenteditable="true"]');await editor.click();await page.keyboard.press('Control+End');await page.keyboard.press('Control+b');await page.keyboard.insertText('  cafÃƒÆ’Ã‚Â© ÃƒÂ¦Ã‹Å“Ã…Â¸ ÃƒÂ°Ã…Â¸Ã‚Â¦Ã…Â   ');await page.keyboard.press('Control+b');await flush(page);exact=await text(page);assert.match(JSON.stringify(exact),/cafÃƒÆ’Ã‚Â© ÃƒÂ¦Ã‹Å“Ã…Â¸ ÃƒÂ°Ã…Â¸Ã‚Â¦Ã…Â /);assert.match(JSON.stringify(exact),/bold/);await status(page).filter({hasText:'Saved on this device, not synced.'}).waitFor();
 });
 await run('actual reload discovers copy and explicit recovery preserves exact JSON',async()=>{await page.reload();await ready(page);await status(page).filter({hasText:'Recovery copy available'}).waitFor();assert.notDeepEqual(await text(page),exact);await page.getByRole('button',{name:'Recover local draft',exact:true}).click();await flush(page);assert.deepEqual(await text(page),exact);});
 await run('repeated reload and explicit recovery retain the same document',async()=>{for(let i=0;i<2;i++){await page.reload();await ready(page);await page.getByRole('button',{name:'Recover local draft',exact:true}).click();await flush(page);assert.deepEqual(await text(page),exact);}});
 const tab=await context.newPage();await tab.goto(origin);await ready(tab);
 await run('same-profile new tab discovers matching committed draft',async()=>{await status(tab).filter({hasText:'Recovery copy available'}).waitFor();await tab.getByRole('button',{name:'Recover local draft',exact:true}).click();await flush(tab);assert.deepEqual(await text(tab),exact);});
 await run('competing tab CAS refuses silent last-write-wins',async()=>{await page.locator('[contenteditable="true"]').click();await page.keyboard.insertText('new in-memory prose');await flush(page);assert.match(await status(page).textContent(),/Another tab changed/);assert.match(JSON.stringify(await text(page)),/new in-memory prose/);});
 await page.close();await tab.close();
 const p=await context.newPage();await p.goto(origin);await ready(p);
 await run('account switch conceals another author recovery',async()=>{await p.evaluate(()=>window.fixture.owner('author-B'));assert.equal(await p.locator('[contenteditable="true"]').count(),0);assert.doesNotMatch(await status(p).textContent(),/Recovery copy available|Saved on this device/);await p.evaluate(()=>window.fixture.owner('author-A'));});
 await run('explicit discard deletes committed copy without automatic recovery',async()=>{await p.getByRole('button',{name:'Discard local recovery copy',exact:true}).click();await flush(p);await p.reload();await ready(p);assert.equal(await p.getByRole('button',{name:'Recover local draft',exact:true}).isEnabled(),false);});
 await run('delayed local ACK never claims newer typing stored',async()=>{await p.evaluate(()=>window.fixture.delay(true));await p.locator('[contenteditable="true"]').click();await p.keyboard.insertText('first delayed');assert.match(await status(p).textContent(),/Storing/);await p.keyboard.insertText(' newer');assert.doesNotMatch(await status(p).textContent(),/Saved on this device/);await p.evaluate(()=>window.fixture.release());await flush(p);assert.match(await status(p).textContent(),/Saved on this device/);});
 await run('old remote ACK preserves newer locally committed writing',async()=>{await p.evaluate(()=>window.fixture.transportFault('delay'));await p.getByRole('button',{name:'Save test revision',exact:true}).click();await p.waitForFunction(()=>window.fixture.draft.controller.snapshot().phase==='saving');await p.locator('[contenteditable="true"]').click();await p.keyboard.insertText(' newer after dispatch');const newer=await text(p);await p.evaluate(()=>window.fixture.remoteRelease());await p.waitForFunction(()=>window.fixture.draft.controller.snapshot().phase==='editing');await flush(p);assert.deepEqual(await text(p),newer);});
 await clear(p);await p.reload();await ready(p);await p.locator('[contenteditable="true"]').click();await p.keyboard.insertText('unknown prose');
 await run('unknown remote operation survives reload with original ID',async()=>{
  // Synthetic remote transport: lost response, not the actual HTTP evidence from IMP003C.
  await p.evaluate(()=>{window.fixture.transportFault('drop-after');});
  await p.getByRole('button',{name:'Save test revision',exact:true}).click();await p.waitForFunction(()=>window.fixture.draft.controller.snapshot().phase==='unknown');await flush(p);const id=await p.evaluate(()=>window.fixture.draft.controller.snapshot().operationId);
  await p.reload();await ready(p);await p.getByRole('button',{name:'Recover local draft',exact:true}).click();await flush(p);assert.equal(await p.evaluate(()=>window.fixture.draft.controller.snapshot().operationId),id);assert.equal(await p.getByRole('button',{name:'Save test revision',exact:true}).isEnabled(),false);await p.getByRole('button',{name:'Discard local recovery copy',exact:true}).click();await flush(p);assert.equal(await p.evaluate(()=>window.fixture.draft.controller.snapshot().operationId),id);
 });
 // Reset only this owned synthetic database before independent failure probes.
 await clear(p);await p.reload();await ready(p);
 for(const failure of ['quota','aborted','unavailable','blocked'])await run(`${failure==='aborted'?'actual native transaction abort':'injected '+failure} retains prose without false success`,async()=>{await p.evaluate(v=>window.fixture.setFailure(v),failure);await p.locator('[contenteditable="true"]').click();await p.keyboard.insertText(' failure prose');await flush(p);assert.match(await status(p).textContent(),/Unable to store/);assert.match(JSON.stringify(await text(p)),/failure prose/);await p.reload();await ready(p);});
 await run('account change during delayed persistence prevents stale publication',async()=>{await p.evaluate(()=>window.fixture.delay(true));await p.locator('[contenteditable="true"]').click();await p.keyboard.insertText('old author');await p.evaluate(async()=>{await window.fixture.owner(null);window.fixture.release();});await flush(p);assert.equal(await p.locator('[contenteditable="true"]').count(),0);assert.doesNotMatch(await status(p).textContent(),/Saved on this device/);await p.reload();await ready(p);});
 await run('interrupted pending persistence does not claim a committed copy',async()=>{await clear(p);await p.reload();await ready(p);await p.evaluate(()=>window.fixture.delay(true));await p.locator('[contenteditable="true"]').click();await p.keyboard.insertText('interrupted never committed');await p.reload();await ready(p);assert.equal(await p.getByRole('button',{name:'Recover local draft',exact:true}).isEnabled(),false);});
 await run('oversized native record cannot replace accepted content',async()=>{await p.evaluate(()=>window.fixture.raw({schema:1,scope:{author:'author-A',book:'00000000-0000-0000-0000-000000000010',chapter:'00000000-0000-0000-0000-000000000011',client:'synthetic-device'},sequence:1,timestamp:1,base:1,document:{type:'doc',content:[{type:'paragraph',content:[{type:'text',text:'x'.repeat(300000)}]}]},pending:null}));await p.reload();await ready(p);assert.match(await status(p).textContent(),/Unable to store/);assert.match(JSON.stringify(await text(p)),/Accepted synthetic text/);});
 await run('incompatible accepted revision never auto replaces accepted prose',async()=>{await p.evaluate(()=>window.fixture.raw({schema:1,scope:window.fixture.localScope(),sequence:2,timestamp:1,base:8,document:{type:'doc',content:[{type:'paragraph',content:[{type:'text',text:'stale private draft'}]}]},pending:null}));await p.reload();await ready(p);assert.match(await status(p).textContent(),/different accepted revision/);assert.match(JSON.stringify(await text(p)),/Accepted synthetic text/);assert.equal(await p.getByRole('button',{name:'Recover local draft',exact:true}).isEnabled(),false);});
 await run('malformed native stored record fails safely',async()=>{await p.evaluate(()=>window.fixture.raw({schema:1,document:'broken'}));await p.reload();await ready(p);assert.match(await status(p).textContent(),/Unable to store/);assert.match(JSON.stringify(await text(p)),/Accepted synthetic text/);});
 await run('incompatible schema fails safely',async()=>{await p.evaluate(()=>window.fixture.raw({schema:99}));await p.reload();await ready(p);assert.match(await status(p).textContent(),/Unable to store/);assert.match(JSON.stringify(await text(p)),/Accepted synthetic text/);});
 await clear(p);await p.reload();await ready(p);
 await run('chapter switch during delayed persistence cannot publish old copy',async()=>{await p.evaluate(()=>window.fixture.delay(true));await p.locator('[contenteditable="true"]').click();await p.keyboard.insertText('chapter one');await p.evaluate(async()=>{await window.fixture.chapter(true);window.fixture.release();});await flush(p);assert.match(JSON.stringify(await text(p)),/Accepted synthetic text/);assert.doesNotMatch(await status(p).textContent(),/Saved on this device/);});
 await clear(p);await p.reload();await ready(p);
 await run('discard tombstone prevents stale-tab ABA resurrection',async()=>{const result=await p.evaluate(async()=>{const f=window.fixture,s=f.localScope(),d={schema:1,scope:s,timestamp:1,base:1,document:{type:'doc',content:[{type:'paragraph'}]},pending:null};const first=await f.native.write(s,0,d);await f.native.discard(s,first.sequence);try{await f.native.write(s,0,d);return false;}catch(e){return e.kind==='conflict';}});assert.equal(result,true);});
 await clear(p);result='PASS';
}finally{
 await context?.close();for(const s of sockets)s.destroy();await new Promise(r=>server.close(r));
 assert.ok(profile.startsWith(output+path.sep));await rm(profile,{recursive:true,force:true});
 await writeFile(path.join(output,'durable-browser-results.json'),JSON.stringify({result,cases,chromium:'actual persistent context',claims:'Native transaction/reload only; injected failure probes are synthetic. No eviction, power-loss, encryption or hosted acceptance.',cleanup:{profile_removed:true,http_closed:!server.listening,open_sockets:sockets.size}},null,2));
 console.log(JSON.stringify({result,cases:cases.length,cleanup:'owned profile and HTTP server removed'}));
}

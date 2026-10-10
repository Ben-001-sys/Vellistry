/** Pair 05 R10: Tiptap 3 + ProseMirror reversible-edit research only.
 * No provider, production auth, network, secure persistence or automatic changes.
 */
import test from 'node:test'
import assert from 'node:assert/strict'
import { JSDOM } from 'jsdom'

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/', pretendToBeVisual: true,
})
for (const property of [
  'window','document','navigator','HTMLElement','Element','Node',
  'DOMParser','MutationObserver','Range','getSelection',
]) {
  Object.defineProperty(globalThis, property, {
    configurable: true, writable: true, value: dom.window[property],
  })
}
globalThis.getComputedStyle = dom.window.getComputedStyle.bind(dom.window)
globalThis.requestAnimationFrame = dom.window.requestAnimationFrame.bind(dom.window)
globalThis.cancelAnimationFrame = dom.window.cancelAnimationFrame.bind(dom.window)

const { Editor } = await import('@tiptap/core')
const { default: StarterKit } = await import('@tiptap/starter-kit')

const fixture = {type:'doc',content:[
  {type:'heading',attrs:{level:1},content:[{type:'text',text:'The Last Bell'}]},
  {type:'paragraph',content:[
    {type:'text',text:'Mara waited in silence. '},
    {type:'text',text:'The bell rang twice.',marks:[{type:'italic'}]},
    {type:'text',text:' The corridor remained dark.'},
  ]},
  {type:'paragraph',content:[
    {type:'text',text:'Another scene stayed '},
    {type:'text',text:'untouched',marks:[{type:'bold'}]},
    {type:'text',text:'.'},
  ]},
]}

function start() {
  const host = dom.window.document.createElement('div')
  dom.window.document.body.append(host)
  const editor = new Editor({element: host,extensions:[StarterKit],content:structuredClone(fixture),
    enableContentCheck:true})
  return {editor,close(){editor.destroy();host.remove()}}
}
function range(editor, needle) {
  let at=null
  editor.state.doc.descendants((node,pos)=>{
    if(at || !node.isText)return
    const offset=node.text.indexOf(needle)
    if(offset>=0) at={from:pos+offset,to:pos+offset+needle.length}
  })
  if(!at)throw Error('Selection not found')
  return at
}
function draft(editor,needle,replacement,{book='book-a',chapter='chapter-1',revision=1}={}){
  if(typeof replacement!=='string'||!replacement.trim())throw Error('Invalid replacement')
  const span=range(editor,needle)
  return {id:'proposal-1',status:'pending',book,chapter,revision,
    ...span,baseline:JSON.stringify(editor.getJSON()),
    selected:editor.state.doc.textBetween(span.from,span.to),
    replacement,profileCandidates:[{kind:'character',status:'unapproved'}]}
}
function apply(editor,proposal,{book='book-a',chapter='chapter-1',revision=1,
                                accept=false,canceled=false,complete=true}={}){
  if(proposal.status!=='pending' || !accept || canceled || !complete)return false
  if(proposal.book!==book||proposal.chapter!==chapter||proposal.revision!==revision)return false
  if(JSON.stringify(editor.getJSON())!==proposal.baseline)return false
  if(editor.state.doc.textBetween(proposal.from,proposal.to)!==proposal.selected)return false
  if(/<\s*\/?\s*(script|iframe|img|object)\b/i.test(proposal.replacement))return false
  const accepted=editor.commands.insertContentAt(
    {from:proposal.from,to:proposal.to},proposal.replacement)
  if(!accepted)return false
  proposal.status='accepted'
  return true
}

test('R10-01 explicit accept changes selected text, not unrelated bold or heading',()=>{
  const s=start()
  try{
    const p=draft(s.editor,'The bell rang twice.','The warning bell sounded.')
    assert.equal(apply(s.editor,p,{accept:true}),true)
    assert.match(s.editor.getText(),/The warning bell sounded/)
    assert.equal(s.editor.getJSON().content[0].type,'heading')
    assert.equal(s.editor.getJSON().content[2].content[1].marks[0].type,'bold')
  }finally{s.close()}
})

test('R10-02 rejected proposal does not mutate accepted prose or profile',()=>{
  const s=start()
  try{
    const before=JSON.stringify(s.editor.getJSON())
    const p=draft(s.editor,'The bell rang twice.','No sound came.')
    assert.equal(apply(s.editor,p,{accept:false}),false)
    assert.equal(JSON.stringify(s.editor.getJSON()),before)
    assert.equal(p.profileCandidates[0].status,'unapproved')
  }finally{s.close()}
})

test('R10-03 author typing while request pending invalidates proposal',()=>{
  const s=start()
  try{
    const p=draft(s.editor,'The bell rang twice.','The iron rang twice.')
    s.editor.commands.insertContentAt(s.editor.state.doc.content.size-1,' Afterwards.')
    assert.equal(apply(s.editor,p,{accept:true}),false)
    assert.match(s.editor.getText(),/The bell rang twice/)
    assert.match(s.editor.getText(),/Afterwards/)
  }finally{s.close()}
})

test('R10-04 even same wording with modified formatting invalidates',()=>{
  const s=start()
  try{
    const p=draft(s.editor,'The bell rang twice.','The iron rang twice.')
    const loc=range(s.editor,'The bell rang twice.')
    s.editor.chain().setTextSelection(loc).toggleBold().run()
    assert.equal(apply(s.editor,p,{accept:true}),false)
  }finally{s.close()}
})

test('R10-05 wrong book or chapter and stale revision are denied',()=>{
  const s=start()
  try{
    const p=draft(s.editor,'The bell rang twice.','Bells stopped.')
    assert.equal(apply(s.editor,p,{accept:true,book:'book-b'}),false)
    assert.equal(apply(s.editor,p,{accept:true,chapter:'chapter-2'}),false)
    assert.equal(apply(s.editor,p,{accept:true,revision:2}),false)
    assert.match(s.editor.getText(),/The bell rang twice/)
  }finally{s.close()}
})

test('R10-06 duplicate accept cannot create a second replacement',()=>{
  const s=start()
  try{
    const p=draft(s.editor,'The bell rang twice.','A warning rang.')
    assert.equal(apply(s.editor,p,{accept:true}),true)
    assert.equal(apply(s.editor,p,{accept:true}),false)
    assert.equal(s.editor.getText().split('A warning rang.').length-1,1)
  }finally{s.close()}
})

test('R10-07 cancellation and incomplete streaming never apply',()=>{
  const s=start()
  try{
    const p=draft(s.editor,'The bell rang twice.','Partial.')
    const original=JSON.stringify(s.editor.getJSON())
    assert.equal(apply(s.editor,p,{accept:true,canceled:true}),false)
    assert.equal(apply(s.editor,p,{accept:true,complete:false}),false)
    assert.equal(JSON.stringify(s.editor.getJSON()),original)
  }finally{s.close()}
})

test('R10-08 unsafe HTML-like proposal is blocked, no raw injection',()=>{
  const s=start()
  try{
    const p=draft(s.editor,'The bell rang twice.','<script>alert(1)</script>')
    assert.equal(apply(s.editor,p,{accept:true}),false)
    assert.match(s.editor.getText(),/The bell rang twice/)
  }finally{s.close()}
})

test('R10-09 local undo/redo changes editor, not durable server revision',()=>{
  const s=start()
  try{
    const p=draft(s.editor,'The bell rang twice.','A warning rang.')
    assert.equal(apply(s.editor,p,{accept:true}),true)
    assert.equal(s.editor.commands.undo(),true)
    assert.match(s.editor.getText(),/The bell rang twice/)
    assert.equal(s.editor.commands.redo(),true)
    assert.match(s.editor.getText(),/A warning rang/)
    // Explicitly NOT a revisioned saved undo in PostgreSQL.
    assert.equal(p.revision,1)
  }finally{s.close()}
})

test('R10-10 accepting prose does NOT approve linked character fact',()=>{
  const s=start()
  try{
    const p=draft(s.editor,'The bell rang twice.','The warning bell sounded.')
    assert.equal(apply(s.editor,p,{accept:true}),true)
    assert.equal(p.profileCandidates[0].status,'unapproved')
  }finally{s.close()}
})

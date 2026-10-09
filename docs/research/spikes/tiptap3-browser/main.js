// Disposable browser-only research fixture: NO database or actual autosave.
// No model provider and no authenticated manuscript data.
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'

const passages = {
  one: {
    type: 'doc',
    content: [
      {type:'heading',attrs:{level:1},content:[{type:'text',text:'The First Bell'}]},
      {type:'paragraph',content:[
        {type:'text',text:'Mara gripped the handle. '},
        {type:'text',text:'The iron was cold.',marks:[{type:'italic'}]},
        {type:'text',text:' A distant bell rang.'}
      ]}
    ]
  },
  two: {
    type:'doc',
    content:[
      {type:'heading',attrs:{level:1},content:[{type:'text',text:'The Frost Road'}]},
      {type:'paragraph',content:[{type:'text',text:'Elias followed the prints through the fresh snow.'}]}
    ]
  }
}
const chapterSelect=document.getElementById('chapter')
const status=document.getElementById('status')
let chapter='one'
let editor
const setStatus=()=>{status.textContent='Chapter '+(chapter==='one'?'One':'Two')+
  ' — edits held in volatile browser memory only (NOT SAVED)'}
const findRange=(needle)=>{
 let found=null
 editor.state.doc.descendants((node,pos)=>{
  if(found||!node.isText)return
  const i=node.text.indexOf(needle)
  if(i!==-1)found={from:pos+i,to:pos+i+needle.length}
 })
 return found
}
const snapshot=()=>{
 passages[chapter]=structuredClone(editor.getJSON())
 return JSON.stringify(passages[chapter])
}
editor=new Editor({
 element:document.getElementById('editor'),
 extensions:[StarterKit],
 content:structuredClone(passages.one),
 enableContentCheck:true,
 onUpdate(){snapshot();setStatus()}
})
setStatus()
chapterSelect.addEventListener('change',()=>{
 snapshot()
 chapter=chapterSelect.value
 editor.commands.setContent(structuredClone(passages[chapter]))
 setStatus()
})
document.getElementById('bold').addEventListener('click',()=>editor.chain().focus().toggleBold().run())
document.getElementById('undo').addEventListener('click',()=>editor.commands.undo())
document.getElementById('redo').addEventListener('click',()=>editor.commands.redo())
// Hook exposes deterministic fixtures to Playwright only; no network/model requests.
window.__spike={
 text:()=>editor.getText(),
 json:()=>editor.getJSON(),
 chapter:()=>chapter,
 chapters:()=>structuredClone(passages),
 select:(needle)=>{
  const range=findRange(needle)
  if(!range)throw new Error('Phrase not found')
  editor.commands.setTextSelection(range)
  return range
 },
 propose:(needle,replacement)=>{
  const range=findRange(needle)
  if(!range)throw new Error('Phrase not found')
  return {...range,needle,replacement,baseline:JSON.stringify(editor.getJSON()),chapter}
 },
 accept:(proposal)=>{
  if(proposal.chapter!==chapter || proposal.baseline!==JSON.stringify(editor.getJSON())) return false
  if(editor.state.doc.textBetween(proposal.from,proposal.to)!==proposal.needle)return false
  return editor.commands.insertContentAt({from:proposal.from,to:proposal.to},proposal.replacement)
 },
 reject:()=>false,
 undo:()=>editor.commands.undo(),
 redo:()=>editor.commands.redo(),
 loadLong:(paragraphCount=300)=>{
  const paragraph='Through the long winter night the distant city lights reflected from the frozen road. '
  const content={type:'doc',content:Array.from({length:paragraphCount},(_,i)=>({
    type:'paragraph',content:[{type:'text',text:'Scene '+(i+1)+'. '+paragraph.repeat(9)}]
  }))}
  const started=performance.now()
  editor.commands.setContent(content)
  const renderMs=performance.now()-started
  snapshot()
  return {paragraphCount,renderMs,words:editor.getText().split(/\s+/).length}
 },
 focus:()=>editor.commands.focus('end'),
 cursor:()=>({from:editor.state.selection.from,to:editor.state.selection.to}),
 isFocused:()=>editor.isFocused,
 destroy:()=>editor.destroy()
}

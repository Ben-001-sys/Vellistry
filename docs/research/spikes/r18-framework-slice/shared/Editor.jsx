"use client";
import React,{useEffect,useRef,useState} from "react";
import {EditorContent,useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {draftKey,readDraft,writeDraft,clearDraft} from "./drafts.mjs";

const PATH="/api/books/book-a/chapters/chapter-1";

// A test harness, not product auth or guaranteed offline support. IndexedDB
// is best-effort and accessible to same-origin scripts on the local device.
export default function Editor(){
 const [revision,setRevision]=useState(null);
 const [status,setStatus]=useState("loading");
 const [ready,setReady]=useState(false);
 const draftIdRef=useRef(null);
 const revisionRef=useRef(null);
 const sequenceRef=useRef(0);
 const loadedRef=useRef(false);
 const writeQueueRef=useRef(Promise.resolve());
 const savingRef=useRef(false);

 const editor=useEditor({
  extensions:[StarterKit],content:"<p></p>",immediatelyRender:false,
  onUpdate:({editor})=>{
   if(!loadedRef.current || !draftIdRef.current)return;
   const id=draftIdRef.current;
   const sequence=++sequenceRef.current;
   const snapshot=editor.getJSON();
   const expectedRevision=revisionRef.current;
   setStatus("local draft pending");
   // Serialized async writes prevent older edits completing after newer edits.
   writeQueueRef.current=writeQueueRef.current.catch(()=>{}).then(
    ()=>writeDraft({id,ownerId:id.split(":")[0],expectedRevision,
       document:snapshot,updatedAt:Date.now()}));
   writeQueueRef.current.then(()=>{
    if(sequence===sequenceRef.current)setStatus("unsaved draft stored");
   }).catch(()=>setStatus("draft storage failed; do not close tab"));
  }
 });

 useEffect(()=>{
  if(!editor)return;
  let live=true;
  (async()=>{
   try{
    const res=await fetch(PATH,{credentials:"same-origin",cache:"no-store"});
    if(!res.ok)throw new Error("authorized read unavailable");
    const remote=await res.json();
    if(!remote.ownerId)throw new Error("no confirmed author scope");
    const id=draftKey(remote.ownerId,"book-a","chapter-1");
    const local=await readDraft(id);
    if(!live)return;
    draftIdRef.current=id;
    let content=remote.document;
    let expectedRevision=remote.revision;
    let message="loaded";
    if(local?.document && JSON.stringify(local.document)!==JSON.stringify(remote.document)){
     content=local.document;
     expectedRevision=local.expectedRevision;
     message=local.expectedRevision===remote.revision?
       "recovered unsaved draft":"conflict: recovered draft based on older revision";
    }else if(local){
     // Local state identical to already committed remote state.
     await clearDraft(id);
    }
    if(!live)return;
    editor.commands.setContent(content,{emitUpdate:false});
    revisionRef.current=expectedRevision;
    setRevision(expectedRevision);
    loadedRef.current=true;
    setReady(true);
    setStatus(message);
   }catch(err){
    if(live)setStatus("read denied or draft storage unavailable: "+err.message);
   }
  })();
  return()=>{live=false;loadedRef.current=false;};
 },[editor]);

 async function save(){
  if(!ready||!editor||savingRef.current)return;
  savingRef.current=true;
  const seqAtStart=sequenceRef.current;
  const expectedRevision=revisionRef.current;
  const snapshot=editor.getJSON();
  setStatus("saving");
  try{
   await writeQueueRef.current;
   const res=await fetch(PATH,{
    method:"PUT",credentials:"same-origin",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({expectedRevision,document:snapshot})
   });
   const data=await res.json();
   if(!res.ok){
    if(res.status===409){setStatus("conflict: newer server revision; local draft retained");return;}
    throw new Error(data.error||"save failed");
   }
   revisionRef.current=data.revision;
   setRevision(data.revision);
   if(seqAtStart===sequenceRef.current){
    await clearDraft(draftIdRef.current);
    setStatus("saved at revision "+data.revision);
   }else{
    // Edits made while the request was in-flight remain unsaved.
    await writeQueueRef.current;
    await writeDraft({id:draftIdRef.current,ownerId:draftIdRef.current.split(":")[0],
      expectedRevision:data.revision,document:editor.getJSON(),updatedAt:Date.now()});
    setStatus("unsaved draft stored");
   }
  }catch(err){setStatus("unsaved: "+err.message);}
  finally{savingRef.current=false;}
 }

 return <main style={{maxWidth:720,margin:"4rem auto",fontFamily:"system-ui"}}>
  <h1>Vellistry R18 — Experimental Editor</h1>
  <p>Synthetic test session; IndexedDB is a safety copy, not confirmed server save.</p>
  <p role="status" aria-live="polite" data-testid="save-status">{status}</p>
  <div style={{border:"1px solid gray",padding:16,margin:"1rem 0"}}>
   <EditorContent editor={editor}/>
  </div>
  <button type="button" onClick={save} disabled={!ready}>Save revision</button>
 </main>;
}

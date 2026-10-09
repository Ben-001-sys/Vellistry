"use client";
import React,{useEffect,useState} from "react";
import {EditorContent,useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// Research-only authoring UI. Session is injected by a disposable test fixture;
// no real sign-in or durable unsynced/offline recovery has been implemented.
export default function Editor(){
 const editor=useEditor({extensions:[StarterKit],content:"<p></p>",immediatelyRender:false});
 const [revision,setRevision]=useState(null),[status,setStatus]=useState("loading");
 useEffect(()=>{
   if(!editor)return;
   let active=true;
   fetch("/api/books/book-a/chapters/chapter-1",{credentials:"same-origin",cache:"no-store"})
    .then(async response=>{if(!response.ok)throw Error("read denied");return response.json();})
    .then(data=>{if(active){editor.commands.setContent(data.document);setRevision(data.revision);setStatus("loaded");}})
    .catch(()=>{if(active)setStatus("read denied: synthetic test session required");});
   return()=>{active=false};
 },[editor]);
 async function save(){
   if(!editor||revision===null)return;
   setStatus("saving");
   try{
     const response=await fetch("/api/books/book-a/chapters/chapter-1",{
       method:"PUT",credentials:"same-origin",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify({expectedRevision:revision,document:editor.getJSON()})
     });
     const body=await response.json();
     if(!response.ok)throw Error(body.error||"save failed");
     setRevision(body.revision);setStatus("saved at revision "+body.revision);
   }catch(error){setStatus("unsaved: "+error.message);}
 }
 return <main style={{maxWidth:720,margin:"4rem auto",fontFamily:"system-ui"}}>
   <h1>Vellistry R18 — Experimental Editor</h1>
   <p>Research-only synthetic session. No public accounts or recovery guarantee.</p>
   <p role="status" aria-live="polite" data-testid="save-status">{status}</p>
   <div style={{border:"1px solid gray",padding:16,margin:"1rem 0"}}>
     <EditorContent editor={editor}/>
   </div>
   <button type="button" onClick={save} disabled={revision===null}>Save revision</button>
 </main>;
}

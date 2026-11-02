"use client";
import React,{useSyncExternalStore} from 'react';
import {EditorContent} from '@tiptap/react';
import type {DurableManuscriptComposition} from '../../lib/editor/manuscript-durable-composition';
/** Unregistered test preview; caller owns controller lifecycle. */
export function ManuscriptDurablePreview({draft}:{draft:DurableManuscriptComposition}){
 const local=useSyncExternalStore(draft.subscribe,draft.snapshot,draft.snapshot);
 const remote=useSyncExternalStore(draft.controller.subscribe,draft.controller.snapshot,draft.controller.snapshot);
 const session=draft.controller.editorSession;
 const editorState=useSyncExternalStore(session.subscribe,session.snapshot,session.snapshot);
 const editor=remote.scope&&editorState.phase==='ready'&&editorState.scope?.bookId===remote.scope.bookId&&editorState.scope.chapterId===remote.scope.chapterId?editorState.editor:null;
 return <section aria-label="Device draft test preview">
  <h1>Local draft recovery test</h1>
  <p>Device storage can be lost. This is not a cross-device backup or application-encrypted storage. Someone using this browser profile may access it. Synthetic writing only.</p>
  <p role="status" aria-label="Local recovery status" aria-live="polite">{local.message}</p>
  <p role="status" aria-label="Test server status">{remote.message}</p>
  <button disabled={!remote.canRecover} onClick={()=>void draft.controller.recover()}>Recover local draft</button>
  <button onClick={()=>void draft.discard()}>Discard local recovery copy</button>
  <button disabled={!remote.canSave} onClick={()=>void draft.controller.save()}>Save test revision</button>
  <button disabled={!remote.canReconcile} onClick={()=>void draft.controller.reconcile()}>Check test save result</button>
  <p>AI off. Manual writing. Local recovery and confirmed test revisions are separate.</p>
  {editor?<>
   <div role="group" aria-label="Test manuscript formatting">{(['bold','italic','underline','undo','redo'] as const).map(command=><button key={command} type="button" onMouseDown={e=>e.preventDefault()} onClick={()=>session.format(command)}>{command.charAt(0).toUpperCase()+command.slice(1)}</button>)}</div>
   <EditorContent key={editorState.scope!.key} editor={editor}/>
   <output aria-label="Word count">{editorState.words} words</output>
  </>:<p>Choose a verified synthetic chapter to write.</p>}
 </section>;
}

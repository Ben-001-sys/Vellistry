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
  <p role="status" aria-label="Test server status">{local.canRetry?'The captured test save has not been sent.':local.canCheckPending?'Original save status unknown. Check its receipt without restoring older text.':remote.message}</p>
  <button type="button" disabled={!remote.canRecover} onClick={()=>void draft.recover()}>Recover local draft</button>
  <button type="button" disabled={!remote.scope||local.busy} onClick={()=>void draft.discard()}>Discard local recovery copy</button>
  <button type="button" disabled={!remote.canSave||local.busy} onClick={()=>void draft.controller.save()}>Save test revision</button>
  <button type="button" disabled={(!remote.canReconcile&&!local.canCheckPending)||local.busy} onClick={()=>void draft.reconcile()}>Check test save result</button>
  <button type="button" disabled={!local.canRetry} onClick={()=>void draft.retryUndispatched()}>Send undispatched test save</button>
  <p>AI off. Manual writing. Local recovery and confirmed test revisions are separate.</p>
  {editor?<>
   <div role="group" aria-label="Test manuscript formatting">{(['bold','italic','underline','undo','redo'] as const).map(command=><button key={command} type="button" disabled={!editor.isEditable} onMouseDown={e=>e.preventDefault()} onClick={()=>session.format(command)}>{command.charAt(0).toUpperCase()+command.slice(1)}</button>)}</div>
   <EditorContent key={editorState.scope!.key} editor={editor}/>
   <output aria-label="Word count">{editorState.words} words</output>
  </>:<p>Choose a verified synthetic chapter to write.</p>}
 </section>;
}

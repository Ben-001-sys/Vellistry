"use client";
import React,{useSyncExternalStore} from 'react';
import {ManuscriptEditor} from './manuscript-editor';
import type {DurableManuscriptComposition} from '../../lib/editor/manuscript-durable-composition';
/** Unregistered test preview; caller owns controller lifecycle. */
export function ManuscriptDurablePreview({draft}:{draft:DurableManuscriptComposition}){
 const local=useSyncExternalStore(draft.subscribe,draft.snapshot,draft.snapshot);
 const remote=useSyncExternalStore(draft.controller.subscribe,draft.controller.snapshot,draft.controller.snapshot);
 return <section aria-label="Device draft test preview">
  <h1>Local draft recovery test</h1>
  <p>Device storage can be lost. This is not a cross-device backup or application-encrypted storage. Someone using this browser profile may access it. Synthetic writing only.</p>
  <p role="status" aria-label="Local recovery status" aria-live="polite">{local.message}</p>
  <p role="status" aria-label="Test server status">{remote.message}</p>
  <button disabled={!remote.canRecover} onClick={()=>void draft.controller.recover()}>Recover local draft</button>
  <button onClick={()=>void draft.discard()}>Discard local recovery copy</button>
  <button disabled={!remote.canSave} onClick={()=>void draft.controller.save()}>Save test revision</button>
  <button disabled={!remote.canReconcile} onClick={()=>void draft.controller.reconcile()}>Check test save result</button>
  <ManuscriptEditor session={draft.controller.editorSession} bookId={remote.scope?.bookId??null} chapterId={remote.scope?.chapterId??null}/>
 </section>;
}

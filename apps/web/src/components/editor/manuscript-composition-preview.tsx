"use client";
import React,{useSyncExternalStore} from 'react';
import {ManuscriptEditor} from './manuscript-editor';
import type {ManuscriptComposition} from '../../lib/editor/manuscript-composition';
/** TEST ONLY: caller owns the controller lifetime. No production route registers this view. */
export function ManuscriptCompositionPreview({controller}:{controller:ManuscriptComposition}){
 const model=useSyncExternalStore(controller.subscribe,controller.snapshot,controller.snapshot);
 return <section aria-label="Synthetic manuscript save preview">
  <h1>Test manuscript save and recovery</h1>
  <p>This isolated test environment does not save to deployed Vellistry or this device.</p>
  <p role="status" aria-label="Test save status" aria-live="polite">{model.message}</p>
  <button type="button" disabled={!model.canSave} onClick={()=>void controller.save()}>Save test revision</button>
  <button type="button" disabled={!model.canReconcile} onClick={()=>void controller.reconcile()}>Check test save result</button>
  <button type="button" disabled={!model.canRecover} onClick={()=>void controller.recover()}>Recover synthetic draft</button>
  <ManuscriptEditor session={controller.editorSession} bookId={model.scope?.bookId??null} chapterId={model.scope?.chapterId??null}/>
 </section>;
}

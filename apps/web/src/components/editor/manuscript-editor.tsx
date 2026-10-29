"use client";
import React, {useEffect, useState, useSyncExternalStore} from "react";
import {EditorContent} from "@tiptap/react";
import type {WorkspaceSession} from "../../lib/workspace/book-workspace-session";
import {createManuscriptSession, type ManuscriptFormat, type ManuscriptSession} from "../../lib/editor/manuscript-session";

const button = "rounded border px-3 py-2 disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2";
/** Reusable, unregistered local editor. Caller supplies the existing workspace session and verified-owner seam. */
export function ManuscriptWorkspace({workspace, readOwner}: {workspace: WorkspaceSession; readOwner: () => Promise<string | null>}) {
  const state = useSyncExternalStore(workspace.subscribe, workspace.snapshot, workspace.snapshot);
  const [session, setSession] = useState<ManuscriptSession | null>(null);
  useEffect(() => {
    const next = createManuscriptSession(readOwner); setSession(next);
    return () => next.dispose();
  }, [readOwner]);
  useEffect(() => {
    if (session) void session.bind(state);
    // Notes typing must not recreate the editor or overwrite its selection.
  }, [session, state.phase, state.document, state.selectedChapterId, state.pending, state.uncertain, state.conflict]);
  const allowed = state.phase === "ready" && !state.pending && !state.uncertain && !state.conflict;
  return session ? <ManuscriptEditor session={session} bookId={allowed ? state.document?.bookId ?? null : null}
    chapterId={allowed ? state.selectedChapterId : null}/>
    : <section aria-label="Manuscript editor"><p role="status">Preparing the local manuscript editor...</p></section>;
}
export function ManuscriptEditor({session, bookId, chapterId}: {session: ManuscriptSession; bookId: string | null; chapterId: string | null}) {
  const model = useSyncExternalStore(session.subscribe, session.snapshot, session.snapshot);
  const editor = model.phase === "ready" && model.scope?.bookId === bookId && model.scope.chapterId === chapterId ? model.editor : null;
  function control(label: string, command: ManuscriptFormat, active?: string) {
    return <button type="button" className={button} onMouseDown={event => event.preventDefault()}
      aria-pressed={active ? editor?.isActive(active) ?? false : undefined}
      disabled={!editor || (command === "undo" && !editor.can().undo()) || (command === "redo" && !editor.can().redo())}
      onClick={() => session.format(command)}>{label}</button>;
  }
  return <section className="manual-manuscript min-w-0 space-y-3 rounded border p-4" aria-label="Manuscript editor">
    <h2 className="text-xl font-semibold">Manuscript editor</h2>
    <p>AI off. Manual writing.</p>
    <p role="note">Local draft only. Not saved to a server or this device. Closing this preview loses its text.</p>
    <p role="status" aria-live="polite">{model.message}</p>
    {editor ? <>
      <div role="group" aria-label="Manuscript formatting" className="flex flex-wrap items-center gap-2">
        <label>Text style <select className={button} aria-label="Text style"
          value={editor.isActive("heading", {level: 1}) ? "heading1" : editor.isActive("heading", {level: 2}) ? "heading2" : editor.isActive("heading", {level: 3}) ? "heading3" : "paragraph"}
          onChange={event => session.format(event.target.value as ManuscriptFormat)}>
          <option value="paragraph">Paragraph</option><option value="heading1">Heading 1</option>
          <option value="heading2">Heading 2</option><option value="heading3">Heading 3</option>
        </select></label>
        {control("Bold", "bold", "bold")}{control("Italic", "italic", "italic")}{control("Underline", "underline", "underline")}
        {control("Bullet list", "bulletList", "bulletList")}{control("Numbered list", "orderedList", "orderedList")}
        {control("Undo", "undo")}{control("Redo", "redo")}
      </div>
      <div role="search" aria-label="Search selected chapter" className="flex flex-wrap items-center gap-2">
        <label>Search this chapter <input type="search" maxLength={200} value={model.query} className={button}
          onChange={event => session.search(event.target.value)}/></label>
        <button type="button" className={button} disabled={!model.matches} onClick={() => session.find(-1)}>Previous match</button>
        <button type="button" className={button} disabled={!model.matches} onClick={() => session.find(1)}>Next match</button>
        <button type="button" className={button} disabled={!model.query} onClick={() => session.search("")}>Clear search</button>
        <output aria-live="polite">{model.matches} matches in this chapter</output>
      </div>
      <p className="text-sm">Search matches text within a paragraph or heading, including formatted text.</p>
      <div className="rounded border bg-white text-slate-950"><EditorContent key={model.scope!.key} editor={editor}/></div>
      <button type="button" className={button} onClick={() => editor.commands.focus(undefined, {scrollIntoView: false})}>Resume writing</button>
      <output aria-label="Word count">{model.words} {model.words === 1 ? "word" : "words"}</output>
    </> : <p>Select an available chapter to write. Account or book changes pause this preview.</p>}
    <style>{`.manual-manuscript .tiptap p{margin:.5em 0}.manual-manuscript .tiptap h1{font-size:1.8em;font-weight:700}.manual-manuscript .tiptap h2{font-size:1.5em;font-weight:700}.manual-manuscript .tiptap h3{font-size:1.2em;font-weight:700}.manual-manuscript .tiptap ul{list-style:disc;padding-left:1.8em}.manual-manuscript .tiptap ol{list-style:decimal;padding-left:1.8em}.manual-manuscript .tiptap:focus-visible{outline:2px solid #2458a6;outline-offset:2px}`}</style>
  </section>;
}

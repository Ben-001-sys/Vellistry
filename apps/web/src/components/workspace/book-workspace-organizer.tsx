"use client";
import {useEffect, useRef, useState, useSyncExternalStore} from "react";
import type {WorkspaceSession} from "@/lib/workspace/book-workspace-session";

/** Reusable organizer; this slice has only synthetic local-session confirmation. */
export function BookWorkspaceOrganizer({session}: {session: WorkspaceSession}) {
  const state = useSyncExternalStore(session.subscribe, session.snapshot, session.snapshot);
  const document = state.document;
  const selected = document?.chapters.find(c => c.id === state.selectedChapterId);
  const [rename, setRename] = useState("");
  const [focusChapter, setFocusChapter] = useState<string | null>(null);
  const buttons = useRef(new Map<string, HTMLButtonElement>());
  useEffect(() => { setRename(selected?.title ?? ""); }, [selected?.id, selected?.title, document?.bookId]);
  useEffect(() => {
    if (!state.pending && focusChapter && state.phase === "ready") {
      buttons.current.get(focusChapter)?.focus();
      setFocusChapter(null);
    }
  }, [state.pending, state.phase, document?.version, focusChapter]);
  const locked = state.pending || state.uncertain || state.conflict;
  async function move(id: string, delta: number) {
    if (!document || locked) return;
    const ids = document.chapters.map(c => c.id);
    const from = ids.indexOf(id), to = from + delta;
    if (from < 0 || to < 0 || to >= ids.length) return;
    [ids[from], ids[to]] = [ids[to], ids[from]];
    await session.reorder(ids);
    setFocusChapter(id);
  }
  async function create() {
    const previous = new Set(document?.chapters.map(c => c.id));
    await session.createChapter();
    const added = session.snapshot().document?.chapters.find(c => !previous.has(c.id));
    if (added) { session.selectChapter(added.id); setFocusChapter(added.id); }
  }
  return <section className="space-y-5 rounded border p-5" aria-label="Book workspace local preview">
    <h1 className="text-2xl font-semibold">{document?.bookTitle ?? "Book workspace"}</h1>
    <p role="note">Synthetic local preview. Changes are confirmed only in this test session.
      They are not saved to a server or this device and disappear when the test session restarts.</p>
    <p role="status" aria-live="polite" aria-atomic="true">{state.message}</p>
    <button type="button" onClick={() => { void session.refresh(); }} disabled={state.pending}
      className="rounded border px-3 py-2">Reload local book</button>
    {state.uncertain ? <button type="button" onClick={() => { void session.checkOutcome(); }} disabled={state.pending}
      className="rounded border px-3 py-2">Check local result</button> : null}
    {document && state.phase === "ready" ? <div className="space-y-5" aria-busy={state.pending}>
      <h2 className="text-xl font-semibold">Chapters</h2>
      {document.chapters.length === 0 ? <p>No chapters in this local book yet.</p> : <ol aria-label="Chapters" className="space-y-2">
        {document.chapters.map((chapter, index) => <li key={chapter.id} className="flex flex-wrap items-center gap-2">
          <button type="button" ref={element => {
            if (element) buttons.current.set(chapter.id, element); else buttons.current.delete(chapter.id);
          }} aria-label={`Open chapter ${index + 1}: ${chapter.title}`}
            aria-current={selected?.id === chapter.id ? "true" : undefined}
            onClick={() => session.selectChapter(chapter.id)} className="rounded border px-3 py-2">
            {chapter.title}
          </button>
          <button type="button" aria-label={`Move chapter ${index + 1} up: ${chapter.title}`}
            disabled={locked || index === 0} onClick={() => { void move(chapter.id, -1); }} className="rounded border px-3 py-2">Move up</button>
          <button type="button" aria-label={`Move chapter ${index + 1} down: ${chapter.title}`}
            disabled={locked || index === document.chapters.length - 1} onClick={() => { void move(chapter.id, 1); }} className="rounded border px-3 py-2">Move down</button>
        </li>)}
      </ol>}
      <form onSubmit={event => { event.preventDefault(); void create(); }} className="space-x-2">
        <label htmlFor="workspace-create-title">New chapter title</label>
        <input id="workspace-create-title" value={state.createTitle} maxLength={180} required disabled={locked}
          onChange={event => session.setCreateTitle(event.target.value)} className="rounded border p-2"/>
        <button type="submit" disabled={locked} className="rounded border px-3 py-2">Add chapter</button>
      </form>
      {selected ? <form onSubmit={event => { event.preventDefault(); void session.renameChapter(selected.id, rename); }} className="space-x-2">
        <label htmlFor="workspace-rename-title">Selected chapter title</label>
        <input id="workspace-rename-title" required maxLength={180} disabled={locked} value={rename}
          onChange={event => setRename(event.target.value)} className="rounded border p-2"/>
        <button type="submit" disabled={locked} className="rounded border px-3 py-2">Rename chapter</button>
      </form> : null}
      <fieldset className="space-y-2">
        <legend>Book planning notes</legend>
        <label htmlFor="workspace-book-notes">Planning notes for this book</label>
        <textarea id="workspace-book-notes" maxLength={10000} value={state.bookNoteDraft}
          onChange={event => session.setNotes(event.target.value)} className="block w-full rounded border p-2"/>
        <p>{state.bookNoteDraft === document.notes ? "Notes match the local session." : "These notes have unconfirmed local edits."}</p>
        <button type="button" disabled={locked} onClick={() => { void session.applyNotes(); }} className="rounded border px-3 py-2">Apply book notes locally</button>
      </fieldset>
      {selected ? <fieldset className="space-y-2">
        <legend>Chapter planning notes</legend>
        <label htmlFor="workspace-chapter-notes">Planning notes for the selected chapter</label>
        <textarea id="workspace-chapter-notes" maxLength={10000} value={state.chapterNoteDraft}
          onChange={event => session.setNotes(event.target.value, selected.id)} className="block w-full rounded border p-2"/>
        <p>{state.chapterNoteDraft === selected.notes ? "Notes match the local session." : "These notes have unconfirmed local edits."}</p>
        <button type="button" disabled={locked} onClick={() => { void session.applyNotes(selected.id); }} className="rounded border px-3 py-2">Apply chapter notes locally</button>
      </fieldset> : null}
    </div> : null}
  </section>;
}

import {Editor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {TextSelection} from "@tiptap/pm/state";
import {parseDocument, validId} from "../workspace/book-workspace-contract";
import type {WorkspaceSnapshot} from "../workspace/book-workspace-session";
import {ManuscriptSearch, manuscriptSearchKey, manuscriptWordCount} from "./manuscript-search";

export type ManuscriptFormat = "paragraph" | "heading1" | "heading2" | "heading3" | "bold" | "italic" | "underline" | "bulletList" | "orderedList" | "undo" | "redo";
type Scope = Readonly<{owner: string; bookId: string; chapterId: string; key: string}>;
type Entry = {scope: Scope; editor: Editor};
export type ManuscriptSnapshot = Readonly<{
  phase: "idle" | "checking" | "ready" | "paused" | "unverified";
  editor: Editor | null; scope: Scope | null; words: number; query: string; matches: number; message: string;
}>;
/** Local UI state only. Never writes a WorkspacePort, server, localStorage or accepted revision. */
export function createManuscriptSession(readOwner: () => Promise<string | null>) {
  let active: Entry | null = null;
  let cacheOwner: string | null = null;
  let generation = 0;
  let disposed = false;
  const entries = new Map<string, Entry>();
  const listeners = new Set<() => void>();
  let model: ManuscriptSnapshot = Object.freeze({phase: "idle", editor: null, scope: null, words: 0, query: "", matches: 0,
    message: "Choose a chapter to write in this local preview."});
  function emit(next: ManuscriptSnapshot) { model = Object.freeze(next); listeners.forEach(fn => fn()); }
  function publish() {
    if (!active || disposed) return;
    const search = manuscriptSearchKey.getState(active.editor.state);
    emit({phase: "ready", editor: active.editor, scope: active.scope, words: manuscriptWordCount(active.editor.state.doc),
      query: search?.query ?? "", matches: search?.matches.length ?? 0, message: "Local draft only. Not saved to a server or this device."});
  }
  function hide(phase: ManuscriptSnapshot["phase"], message: string) {
    active = null;
    for (const entry of entries.values()) entry.editor.setEditable(false, false);
    emit({phase, editor: null, scope: null, words: 0, query: "", matches: 0, message});
  }
  function clear() { for (const entry of entries.values()) entry.editor.destroy(); entries.clear(); }
  async function bind(workspace: WorkspaceSnapshot) {
    if (disposed) return;
    const token = ++generation;
    hide("checking", "Checking the selected chapter for this local preview...");
    if (workspace.phase !== "ready" || workspace.pending || workspace.uncertain || workspace.conflict || !workspace.document) {
      hide("paused", "Writing is paused while the book is unavailable or being checked. Local text remains only in this preview."); return;
    }
    const document = parseDocument(workspace.document, workspace.document.bookId);
    const chapter = document?.chapters.find(c => c.id === workspace.selectedChapterId);
    if (!document || !chapter) { hide("paused", "Choose a chapter from the verified book."); return; }
    let owner: string | null;
    try {
      owner = await readOwner();
      if (disposed || token !== generation) return;
      const confirmed = await readOwner();
      if (disposed || token !== generation) return;
      if (!validId(owner) || confirmed !== owner) { hide("unverified", "Your account could not be verified. Writing is paused."); return; }
    } catch { if (!disposed && token === generation) hide("unverified", "Your account could not be verified. Writing is paused."); return; }
    if (cacheOwner !== null && cacheOwner !== owner) clear();
    cacheOwner = owner;
    const key = JSON.stringify([owner, document.bookId, chapter.id]);
    let entry = entries.get(key);
    if (!entry) {
      const scope = Object.freeze({owner, bookId: document.bookId, chapterId: chapter.id, key});
      const editor = new Editor({
        extensions: [StarterKit.configure({heading: {levels: [1, 2, 3]}, link: false, code: false, codeBlock: false,
          blockquote: false, strike: false, horizontalRule: false}), ManuscriptSearch],
        content: {type: "doc", content: [{type: "paragraph"}]},
        parseOptions: {preserveWhitespace: "full"}, injectCSS: false, autofocus: false,
        editorProps: {attributes: {role: "textbox", "aria-label": "Chapter manuscript", "aria-multiline": "true",
          style: "white-space:pre-wrap;min-height:20rem;padding:1rem;overflow-wrap:anywhere"}},
        onTransaction: ({editor: changed}) => { if (active?.editor === changed) publish(); },
      });
      entry = {scope, editor}; entries.set(key, entry);
    }
    active = entry;
    // Search is chapter-local and does not change the stored caret or Undo history.
    entry.editor.view.dispatch(entry.editor.state.tr.setMeta(manuscriptSearchKey, "").setMeta("addToHistory", false));
    entry.editor.setEditable(true, false); publish();
  }
  function format(kind: ManuscriptFormat) {
    if (!active || model.phase !== "ready" || !active.editor.isEditable) return false;
    const chain = active.editor.chain().focus(undefined, {scrollIntoView: false});
    switch (kind) {
      case "paragraph": return chain.setParagraph().run();
      case "heading1": return chain.setHeading({level: 1}).run();
      case "heading2": return chain.setHeading({level: 2}).run();
      case "heading3": return chain.setHeading({level: 3}).run();
      case "bold": return chain.toggleBold().run();
      case "italic": return chain.toggleItalic().run();
      case "underline": return chain.toggleUnderline().run();
      case "bulletList": return chain.toggleBulletList().run();
      case "orderedList": return chain.toggleOrderedList().run();
      case "undo": return chain.undo().run();
      case "redo": return chain.redo().run();
    }
  }
  function search(query: string) {
    if (!active || model.phase !== "ready" || query.length > 200) return;
    active.editor.view.dispatch(active.editor.state.tr.setMeta(manuscriptSearchKey, query).setMeta("addToHistory", false));
  }
  function find(direction: 1 | -1) {
    if (!active || model.phase !== "ready") return false;
    const editor = active.editor, matches = manuscriptSearchKey.getState(editor.state)?.matches ?? [];
    if (!matches.length) return false;
    const selection = editor.state.selection;
    const selected = matches.findIndex(m => m.from === selection.from && m.to === selection.to);
    let index = selected >= 0 ? (selected + direction + matches.length) % matches.length : direction === 1
      ? matches.findIndex(m => m.from >= selection.from) : matches.findLastIndex(m => m.to <= selection.to);
    if (index < 0) index = direction === 1 ? 0 : matches.length - 1;
    const match = matches[index];
    editor.view.dispatch(editor.state.tr.setSelection(TextSelection.create(editor.state.doc, match.from, match.to)).setMeta("addToHistory", false).scrollIntoView());
    editor.commands.focus(undefined, {scrollIntoView: true}); return true;
  }
  return {snapshot: () => model, subscribe(fn: () => void) { listeners.add(fn); return () => { listeners.delete(fn); }; },
    bind, format, search, find,
    pause() { if (!disposed) { generation++; hide("paused", "Writing is paused. Local text is not saved."); } },
    dispose() {
      if (disposed) return;
      generation++; disposed = true; active = null; clear();
      emit({phase: "idle", editor: null, scope: null, words: 0, query: "", matches: 0, message: "Local editor closed. Text was not saved."});
      listeners.clear();
    },
  };
}
export type ManuscriptSession = ReturnType<typeof createManuscriptSession>;

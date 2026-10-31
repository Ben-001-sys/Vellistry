import assert from "node:assert/strict";
import {test, after, afterEach} from "node:test";
import {JSDOM} from "jsdom";
const dom = new JSDOM("<!doctype html><html><body></body></html>", {pretendToBeVisual: true, url: "http://127.0.0.1/"});
for (const name of ["window", "document", "navigator", "Node", "HTMLElement", "Element", "DocumentFragment", "MutationObserver", "DOMParser", "getComputedStyle"])
  Object.defineProperty(globalThis, name, {value: typeof dom.window[name] === "function" && name === "getComputedStyle" ? dom.window[name].bind(dom.window) : dom.window[name], configurable: true});
globalThis.requestAnimationFrame = dom.window.requestAnimationFrame.bind(dom.window);
globalThis.cancelAnimationFrame = dom.window.cancelAnimationFrame.bind(dom.window);
globalThis.innerHeight = 900;
globalThis.innerWidth = 1400;
dom.window.Range.prototype.getClientRects = () => [];
dom.window.Range.prototype.getBoundingClientRect = () => ({left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0});
globalThis.fetch = async () => { throw new Error("Network forbidden in editor unit fixtures"); };
const {createManuscriptSession} = await import("./manuscript-session.ts");
const {manuscriptMatches, manuscriptWordCount, manuscriptSearchKey} = await import("./manuscript-search.ts");
const {closeHistory} = await import("@tiptap/pm/history");
const {createWorkspaceSession} = await import("../workspace/book-workspace-session.ts");
const {createSyntheticWorkspace} = await import("../../../../../tests/fixtures/book-workspace-synthetic.ts");
const sessions = [];
afterEach(() => { for (const session of sessions.splice(0)) session.dispose(); });
after(() => dom.window.close());
function snapshot(bookId = "book-a", chapterId = "a-one", patch = {}) {
 return {phase: "ready", document: {bookId, bookTitle: "Synthetic book", version: 0, notes: "Separate notes",
  chapters: [{id: "a-one", bookId, title: "Chapter one", notes: "Separate chapter notes"}, {id: "other", bookId, title: "Other chapter", notes: ""}]},
  selectedChapterId: chapterId, pending: false, uncertain: false, conflict: false, ...patch};
}
async function setup(readOwner = async () => "owner-a") {
 const session = createManuscriptSession(readOwner); sessions.push(session); await session.bind(snapshot());
 return {session, editor: session.snapshot().editor};
}
function write(editor, text) { editor.view.dispatch(editor.state.tr.insertText(text)); }
function paragraphs(editor, values) { editor.commands.setContent({type: "doc", content: values.map(text => ({type: "paragraph", content: [{type: "text", text}]}))}); }

test("AI-off manual writing accepts500invented words without network or key", async () => {
 const {session, editor} = await setup(); const text = Array.from({length: 520}, (_, i) => `word${i}`).join(" ");
 write(editor, text); assert.equal(editor.getText(), text); assert.equal(session.snapshot().words, 520);
 assert.match(session.snapshot().message, /Not saved to a server or this device/);
});
test("leading, trailing, repeated whitespace and Unicode survive text transactions", async () => {
 const {editor} = await setup(); const text = "  café  星 🌙  end  "; write(editor, text);
 assert.equal(editor.state.doc.textContent, text); assert.equal(editor.getJSON().content[0].content[0].text, text);
});
test("first paragraph arbitrary selection replacement never trims or rewrites another paragraph", async () => {
 const {editor} = await setup(); paragraphs(editor, ["  first paragraph  ", "  second paragraph  "]);
 editor.commands.setTextSelection({from: 3, to: 8}); write(editor, "FIRST");
 assert.equal(editor.state.doc.child(0).textContent, "  FIRST paragraph  "); assert.equal(editor.state.doc.child(1).textContent, "  second paragraph  ");
});
test("middle caret insertion uses exact model position and preserves surrounding spaces", async () => {
 const {editor} = await setup(); write(editor, "  alpha  beta  "); editor.commands.setTextSelection(8); write(editor, "X");
 assert.equal(editor.state.doc.textContent, "  alphaX  beta  "); assert.equal(editor.state.selection.from, 9);
});
for (const mark of ["bold", "italic", "underline"]) test(`${mark} applies only to model selection and retains it`, async () => {
 const {session, editor} = await setup(); write(editor, "alpha beta"); editor.commands.setTextSelection({from: 1, to: 6});
 assert.equal(session.format(mark), true); assert.equal(editor.state.doc.child(0).child(0).marks[0].type.name, mark);
 assert.deepEqual([editor.state.selection.from, editor.state.selection.to], [1, 6]);
});
test("paragraph/headings and basic lists use supported semantic nodes", async () => {
 const {session, editor} = await setup(); write(editor, "Synthetic heading");
 for (const level of [1, 2, 3]) { session.format(`heading${level}`); assert.equal(editor.state.doc.child(0).type.name, "heading"); assert.equal(editor.state.doc.child(0).attrs.level, level); }
 session.format("paragraph"); assert.equal(editor.state.doc.child(0).type.name, "paragraph");
 session.format("bulletList"); assert.equal(editor.state.doc.child(0).type.name, "bulletList");
 session.format("orderedList"); assert.equal(editor.state.doc.child(0).type.name, "orderedList"); assert.match(editor.getText(), /Synthetic heading/);
});
test("Undo/Redo survives toolbar commands without creating fake revisions", async () => {
 const {session, editor} = await setup(); write(editor, "one"); editor.view.dispatch(closeHistory(editor.state.tr).insertText(" two"));
 session.format("undo"); assert.equal(editor.getText(), "one"); session.format("redo"); assert.equal(editor.getText(), "one two");
});
test("literal case-insensitive search crosses inline marks, not textblock boundaries", async () => {
 const {session, editor} = await setup(); editor.commands.setContent({type: "doc", content: [
  {type: "paragraph", content: [{type: "text", text: "al"}, {type: "text", text: "pha", marks: [{type: "bold"}]}, {type: "text", text: " Alpha [a]"}]},
  {type: "paragraph", content: [{type: "text", text: "alpha"}]}]});
 session.search("alpha"); assert.equal(session.snapshot().matches, 3); assert.deepEqual(manuscriptMatches(editor.state.doc, "ALPHA")[0], {from: 1, to: 6});
 session.search("[a]"); assert.equal(session.snapshot().matches, 1); session.search("(?=)"); assert.equal(session.snapshot().matches, 0);
 session.search("[a]\nalpha"); assert.equal(session.snapshot().matches, 0);
});
test("search typing/highlights do not move manuscript selection or mutate content", async () => {
 const {session, editor} = await setup(); write(editor, "alpha alpha"); editor.commands.setTextSelection(4);
 const before = editor.getJSON(); session.search("alpha"); assert.equal(editor.state.selection.from, 4); assert.deepEqual(editor.getJSON(), before);
 session.search(""); assert.equal(editor.state.selection.from, 4); assert.deepEqual(editor.getJSON(), before);
});
test("explicit next/previous selects matches and edited matches are recomputed", async () => {
 const {session, editor} = await setup(); write(editor, "alpha alpha"); editor.commands.setTextSelection(1); session.search("alpha");
 session.find(1); assert.deepEqual([editor.state.selection.from, editor.state.selection.to], [1, 6]);
 session.find(1); assert.deepEqual([editor.state.selection.from, editor.state.selection.to], [7, 12]);
 session.find(-1); assert.equal(editor.state.selection.from, 1); write(editor, "X"); assert.equal(session.snapshot().matches, 1);
 assert.deepEqual(manuscriptSearchKey.getState(editor.state).matches[0], {from: 3, to: 8});
});
test("search metadata/navigation does not pollute document Undo history", async () => {
 const {session, editor} = await setup(); write(editor, "alpha"); session.search("alpha"); session.find(1); session.search("missing");
 session.format("undo"); assert.equal(editor.state.doc.textContent, ""); session.format("redo"); assert.equal(editor.state.doc.textContent, "alpha");
});
test("word count is defined by Unicode word-like segments, not spaces or HTML", async () => {
 const {editor} = await setup(); write(editor, "  Don't  trim café.  42 🌙 "); assert.equal(manuscriptWordCount(editor.state.doc), 4);
});
test("chapter switching restores distinct text, selection and chapter-local Undo", async () => {
 const {session, editor: first} = await setup(); write(first, "Alpha draft"); first.commands.setTextSelection(4);
 await session.bind(snapshot("book-a", "other")); const second = session.snapshot().editor; write(second, "Beta draft");
 await session.bind(snapshot()); assert.equal(session.snapshot().editor, first); assert.equal(first.getText(), "Alpha draft"); assert.equal(first.state.selection.from, 4);
 session.format("undo"); assert.equal(first.getText(), ""); assert.equal(second.getText(), "Beta draft");
});
test("stable chapter identity preserves prose/caret across rename/reorder metadata", async () => {
 const {session, editor} = await setup(); write(editor, "Stable prose"); editor.commands.setTextSelection(5);
 const next = snapshot(); next.document.version = 1; next.document.chapters.reverse(); next.document.chapters[1].title = "Renamed";
 await session.bind(next); assert.equal(session.snapshot().editor, editor); assert.equal(editor.getText(), "Stable prose"); assert.equal(editor.state.selection.from, 5);
});
test("same chapter ID in another book cannot share an editor", async () => {
 const {session, editor} = await setup(); write(editor, "A private draft"); await session.bind(snapshot("book-other", "a-one"));
 assert.notEqual(session.snapshot().editor, editor); assert.equal(session.snapshot().editor.getText(), "");
});
test("changed verified author clears old editor caches rather than exposing former drafts", async () => {
 let owner = "owner-a"; const {session, editor} = await setup(async () => owner); write(editor, "A only"); owner = "owner-b";
 await session.bind(snapshot()); assert.equal(editor.isDestroyed, true); assert.equal(session.snapshot().editor.getText(), "");
 owner = "owner-a"; await session.bind(snapshot()); assert.equal(session.snapshot().editor.getText(), "");
});
for (const patch of [{phase: "unverified"}, {pending: true}, {uncertain: true}, {conflict: true}, {selectedChapterId: "foreign"}, {document: null}])
 test(`unavailable workspace conceals and locks text: ${JSON.stringify(patch)}`, async () => {
  const {session, editor} = await setup(); write(editor, "Hidden local text"); await session.bind(snapshot("book-a", "a-one", patch));
  assert.equal(session.snapshot().editor, null); assert.equal(editor.isEditable, false); assert.equal(session.format("bold"), false);
 });
test("absent, throwing and contradictory post-async identity fail closed", async () => {
 for (const read of [async () => null, async () => {throw new Error("Synthetic identity outage");}, (() => {let n = 0; return async () => ++n === 1 ? "owner-a" : "owner-b";})()]) {
  const s = createManuscriptSession(read); sessions.push(s); await s.bind(snapshot()); assert.equal(s.snapshot().phase, "unverified"); assert.equal(s.snapshot().editor, null);
 }
});
test("late chapter verification cannot reactivate a former selection", async () => {
 let release; let calls = 0; const s = createManuscriptSession(() => ++calls === 1 ? new Promise(resolve => {release = resolve;}) : Promise.resolve("owner-a")); sessions.push(s);
 const old = s.bind(snapshot()); await s.bind(snapshot("book-a", "other")); release("owner-a"); await old;
 assert.equal(s.snapshot().scope.chapterId, "other");
});
test("real IMP002 session notes/reordering never write accepted manuscript or draft text", async () => {
 const adapter = createSyntheticWorkspace(); const accepted = structuredClone(adapter.inspect("author-a", "book-a").accepted);
 const workspace = createWorkspaceSession({readOwner: async () => "author-a", port: adapter.port}); sessions.push(workspace); await workspace.openBook("book-a");
 const s = createManuscriptSession(async () => "author-a"); sessions.push(s); await s.bind(workspace.snapshot()); const editor = s.snapshot().editor; write(editor, "Independent editor prose");
 workspace.setNotes("Separate changed planning note", "a-one"); await workspace.applyNotes("a-one");
 await workspace.reorder(["a-three", "a-two", "a-one"]); await s.bind(workspace.snapshot());
 assert.equal(s.snapshot().editor, editor); assert.equal(editor.getText(), "Independent editor prose"); assert.deepEqual(adapter.inspect("author-a", "book-a").accepted, accepted);
 assert.equal(adapter.inspect("author-a", "book-a").document.chapters.find(c => c.id === "a-one").notes, "Separate changed planning note");
});
test("dispose cancels pending verification and destroys all locally opened editors", async () => {
 const {session, editor} = await setup(); session.dispose(); assert.equal(editor.isDestroyed, true); assert.ok(session.snapshot().editor === null, "dispose must hide editor"); await session.bind(snapshot()); assert.equal(session.format("bold"), false);
});
test("unmounted component renders safe SSR preparation without creating a DOM editor", async () => {
 const React = await import("react"); const {renderToStaticMarkup} = await import("react-dom/server"); const {ManuscriptWorkspace} = await import("../../components/editor/manuscript-editor.tsx");
 const workspace = createWorkspaceSession({readOwner: async () => "author-a", port: createSyntheticWorkspace().port}); sessions.push(workspace);
 const html = renderToStaticMarkup(React.createElement(ManuscriptWorkspace, {workspace, readOwner: async () => "author-a"}));
 assert.match(html, /Preparing the local manuscript editor/); assert.ok(!html.includes("contenteditable"));
});

 test("explicit search navigation requests reveal scrolling, search input does not", async () => {
  const {session, editor} = await setup(); paragraphs(editor, ["opening", "far needle"]); editor.commands.setTextSelection(1);
  const scrolls = []; editor.on("transaction", ({transaction}) => scrolls.push(transaction.scrolledIntoView));
  session.search("needle"); assert.ok(scrolls.every(v => !v), "typing query must not scroll manuscript");
  scrolls.length = 0; session.find(1); assert.ok(scrolls.some(Boolean), "explicit match navigation must reveal selection");
 });

import "./manuscript-recovery.test.ts";

test("actual Tiptap ordered-list JSON passes manuscript validation without rewriting",async()=>{const {editor}=await setup();write(editor,"  numbered café  ");editor.commands.toggleOrderedList();const value=editor.getJSON();const {document:validate}=await import("../../../../api/src/modules/workspace/manuscript-contract.ts");assert.deepEqual(validate(value),JSON.parse(JSON.stringify(value)));});

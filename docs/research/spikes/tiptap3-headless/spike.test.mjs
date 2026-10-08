/**
 * Nonproduction Tiptap 3 / ProseMirror document experiment.
 * Uses jsdom and synthetic fiction. NOT a Vellistry app or an AI provider.
 */
import test from 'node:test'
import assert from 'node:assert/strict'
import { performance } from 'node:perf_hooks'
import { JSDOM } from 'jsdom'

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/',
  pretendToBeVisual: true,
})
for (const property of [
  'window', 'document', 'navigator', 'HTMLElement', 'Element', 'Node',
  'DOMParser', 'MutationObserver', 'getComputedStyle', 'Range', 'getSelection',
]) {
  const value = property === 'getComputedStyle'
    ? dom.window.getComputedStyle.bind(dom.window)
    : property === 'getSelection'
      ? dom.window.getSelection.bind(dom.window)
      : dom.window[property]
  Object.defineProperty(globalThis, property, {
    configurable: true, writable: true, value,
  })
}
globalThis.requestAnimationFrame = dom.window.requestAnimationFrame.bind(dom.window)
globalThis.cancelAnimationFrame = dom.window.cancelAnimationFrame.bind(dom.window)

const { Editor } = await import('@tiptap/core')
const { default: StarterKit } = await import('@tiptap/starter-kit')

const fixture = {
  type: 'doc',
  content: [
    { type: 'heading', attrs: { level: 1 }, content: [{ type: 'text', text: 'The First Bell' }] },
    {
      type: 'paragraph',
      content: [
        { type: 'text', text: 'Mara gripped the handle. ' },
        { type: 'text', text: 'The iron was cold.', marks: [{ type: 'italic' }] },
        { type: 'text', text: ' A distant bell rang.' },
      ],
    },
    {
      type: 'paragraph',
      content: [
        { type: 'text', text: 'Outside the gate, ' },
        { type: 'text', text: 'the injured scout', marks: [{ type: 'bold' }] },
        { type: 'text', text: ' waited for her answer.' },
      ],
    },
  ],
}

function createEditor(content = fixture) {
  const host = dom.window.document.createElement('div')
  dom.window.document.body.append(host)
  const editor = new Editor({
    element: host,
    extensions: [StarterKit],
    content: structuredClone(content),
    enableContentCheck: true,
  })
  return { editor, close() { editor.destroy(); host.remove() } }
}

function rangeOf(editor, needle) {
  let answer = null
  editor.state.doc.descendants((node, pos) => {
    if (answer || !node.isText) return
    const offset = node.text.indexOf(needle)
    if (offset !== -1) answer = { from: pos + offset, to: pos + offset + needle.length }
  })
  if (!answer) throw new Error('Selected phrase not found in the document')
  return answer
}

function captureProposedRewrite(editor, needle, replacement) {
  // Synthetic suggestion, NOT an LLM call. Production needs transaction mapping.
  const range = rangeOf(editor, needle)
  return {
    ...range,
    selectedText: editor.state.doc.textBetween(range.from, range.to),
    baseline: JSON.stringify(editor.getJSON()),
    replacement,
  }
}

function applyProposedRewrite(editor, proposal, accept) {
  if (!accept) return false
  if (JSON.stringify(editor.getJSON()) !== proposal.baseline) return false
  if (editor.state.doc.textBetween(proposal.from, proposal.to) !== proposal.selectedText) return false
  return editor.commands.insertContentAt(
    { from: proposal.from, to: proposal.to },
    proposal.replacement,
  )
}

test('Tiptap 3 creates a chapter with headings and inline marks', () => {
  const { editor, close } = createEditor()
  try {
    const doc = editor.getJSON()
    assert.equal(doc.content[0].type, 'heading')
    assert.equal(doc.content[0].attrs.level, 1)
    assert.equal(doc.content[1].content[1].marks[0].type, 'italic')
    assert.equal(doc.content[2].content[1].marks[0].type, 'bold')
    assert.match(editor.getText(), /The First Bell/)
  } finally { close() }
})

test('Tiptap JSON survives save-and-restore without losing formatting', () => {
  const first = createEditor()
  const saved = structuredClone(first.editor.getJSON())
  first.close()
  const second = createEditor(saved)
  try {
    assert.deepEqual(second.editor.getJSON(), saved)
  } finally { second.close() }
})

test('AI suggestion reject does not alter manuscript text', () => {
  const { editor, close } = createEditor()
  try {
    const before = editor.getJSON()
    const proposal = captureProposedRewrite(editor, 'A distant bell rang.', 'The warning bell sounded.')
    assert.equal(applyProposedRewrite(editor, proposal, false), false)
    assert.deepEqual(editor.getJSON(), before)
  } finally { close() }
})

test('Accepted selected-text suggestion keeps an unrelated bold mark', () => {
  const { editor, close } = createEditor()
  try {
    const proposal = captureProposedRewrite(editor, 'A distant bell rang.', 'A warning bell sounded.')
    assert.equal(applyProposedRewrite(editor, proposal, true), true)
    assert.match(editor.getText(), /A warning bell sounded\./)
    assert.doesNotMatch(editor.getText(), /A distant bell rang\./)
    assert.equal(editor.getJSON().content[2].content[1].marks[0].type, 'bold')
  } finally { close() }
})

test('Stale AI suggestion does not overwrite later author edits', () => {
  const { editor, close } = createEditor()
  try {
    const proposal = captureProposedRewrite(editor, 'A distant bell rang.', 'A warning bell sounded.')
    editor.commands.insertContentAt(editor.state.doc.content.size - 1, ' Afterwards.')
    assert.equal(applyProposedRewrite(editor, proposal, true), false)
    assert.match(editor.getText(), /A distant bell rang\./)
  } finally { close() }
})

test('Accepted edit participates in Tiptap undo/redo', () => {
  const { editor, close } = createEditor()
  try {
    const proposal = captureProposedRewrite(editor, 'A distant bell rang.', 'A warning bell sounded.')
    assert.equal(applyProposedRewrite(editor, proposal, true), true)
    assert.equal(editor.commands.undo(), true)
    assert.match(editor.getText(), /A distant bell rang\./)
    assert.equal(editor.commands.redo(), true)
    assert.match(editor.getText(), /A warning bell sounded\./)
  } finally { close() }
})

test('100k-word synthetic chapter stress pass records duration without performance promise', { timeout: 180000 }, () => {
  const vocabulary = 'The watchtower hummed while the distant valley held its breath through the falling snow.'
  const singleParagraph = Array.from({ length: 8 }, () => vocabulary).join(' ')
  const wordsPerParagraph = singleParagraph.trim().split(/\s+/).length
  const paragraphs = Math.ceil(100000 / wordsPerParagraph)
  const large = {
    type: 'doc',
    content: Array.from({ length: paragraphs }, (_, i) => ({
      type: 'paragraph',
      content: [{ type: 'text', text: 'Scene ' + (i + 1) + '. ' + singleParagraph }],
    })),
  }
  const t0 = performance.now()
  const { editor, close } = createEditor(large)
  try {
    const initMs = performance.now() - t0
    const serialStart = performance.now()
    const saved = editor.getJSON()
    const serializeMs = performance.now() - serialStart
    const actualWords = editor.getText().trim().split(/\s+/).length
    assert.equal(saved.content.length, paragraphs)
    assert.ok(actualWords >= 100000, 'fixture must exceed 100k words')
    console.log(JSON.stringify({
      fixture: 'synthetic 100k+ word chapter',
      paragraphs,
      actualWords,
      initMs: Number(initMs.toFixed(1)),
      serializeMs: Number(serializeMs.toFixed(1)),
      environment: 'Node/jsdom CI, NOT real browser',
    }))
  } finally { close() }
})

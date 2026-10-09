import {test, expect} from '@playwright/test'

test.beforeEach(async ({page})=>{
  await page.goto('http://127.0.0.1:4173/')
  await expect(page.locator('.tiptap')).toBeVisible()
})

test('real Chromium contenteditable supports basic typing with no AI configured',async ({page})=>{
  await page.evaluate(()=>window.__spike.focus())
  await page.keyboard.insertText(' The author kept writing.')
  await expect(page.locator('.tiptap')).toContainText('The author kept writing.')
  await expect(page.locator('#status')).toContainText('NOT SAVED')
  await expect(page.locator('.tiptap h1')).toHaveText('The First Bell')
})

test('switching chapters preserves each chapter independently in this in-memory fixture',async ({page})=>{
  await page.evaluate(()=>window.__spike.focus())
  await page.keyboard.insertText(' Chapter one only.')
  await page.selectOption('#chapter','two')
  await expect(page.locator('.tiptap')).toContainText('The Frost Road')
  await expect(page.locator('.tiptap')).not.toContainText('Chapter one only.')
  await page.evaluate(()=>window.__spike.focus())
  await page.keyboard.insertText(' Chapter two only.')
  await page.selectOption('#chapter','one')
  await expect(page.locator('.tiptap')).toContainText('Chapter one only.')
  await expect(page.locator('.tiptap')).not.toContainText('Chapter two only.')
  await page.selectOption('#chapter','two')
  await expect(page.locator('.tiptap')).toContainText('Chapter two only.')
})

test('original italic mark survives selection-based proposal accept and undo/redo',async ({page})=>{
  const result=await page.evaluate(()=>{
    const proposed=window.__spike.propose('A distant bell rang.','The warning bell sounded.')
    const accepted=window.__spike.accept(proposed)
    const after=JSON.stringify(window.__spike.json())
    const undo=window.__spike.undo()
    const oldText=window.__spike.text()
    const redo=window.__spike.redo()
    const newText=window.__spike.text()
    return {accepted,after,undo,oldText,redo,newText,json:window.__spike.json()}
  })
  expect(result.accepted).toBe(true)
  expect(result.newText).toContain('The warning bell sounded.')
  expect(result.undo).toBe(true)
  expect(result.oldText).toContain('A distant bell rang.')
  expect(result.redo).toBe(true)
  expect(result.json.content[1].content.some(n=>n.marks?.some(m=>m.type==='italic'))).toBe(true)
})

test('stale proposal is refused after author types in the browser',async ({page})=>{
  const p=await page.evaluate(()=>window.__spike.propose('A distant bell rang.','A second bell rang.'))
  await page.evaluate(()=>window.__spike.focus())
  await page.keyboard.insertText(' And still the wind blew.')
  const result=await page.evaluate(p=>({applied:window.__spike.accept(p),text:window.__spike.text()}),p)
  expect(result.applied).toBe(false)
  expect(result.text).toContain('A distant bell rang.')
  expect(result.text).not.toContain('A second bell rang.')
  expect(result.text).toContain('And still the wind blew.')
})

test('rich-text JSON snapshot preserves semantic marks and heading in actual Chromium',async ({page})=>{
  const snapshot=await page.evaluate(()=>JSON.stringify(window.__spike.json()))
  const values=JSON.parse(snapshot)
  expect(values.content[0].type).toBe('heading')
  expect(values.content[0].attrs.level).toBe(1)
  expect(values.content[1].content.some(n=>n.marks?.some(m=>m.type==='italic'))).toBe(true)
})

test('Unicode typing works in real Chromium without claiming full IME composition coverage',async ({page})=>{
  await page.evaluate(()=>window.__spike.focus())
  await page.keyboard.insertText(' 日本語の文章。 Français écrit.')
  const text=await page.evaluate(()=>window.__spike.text())
  expect(text).toContain('日本語の文章。')
  expect(text).toContain('Français écrit.')
})

test('browser renders and permits tail edit on a synthetic multi-thousand-word chapter',async ({page})=>{
  test.setTimeout(120000)
  const metrics=await page.evaluate(()=>window.__spike.loadLong(150))
  expect(metrics.paragraphCount).toBe(150)
  expect(metrics.words).toBeGreaterThan(10000)
  const before=await page.evaluate(()=>window.__spike.text().length)
  const started=Date.now()
  await page.evaluate(()=>window.__spike.focus())
  await page.keyboard.insertText(' End of stress fixture.')
  const keyToTextMs=Date.now()-started
  const after=await page.evaluate(()=>window.__spike.text().length)
  expect(after).toBeGreaterThan(before)
  console.log(JSON.stringify({environment:'Playwright real Chromium on Linux CI',...metrics,keyToTextMs,claim:'single-run observations only; not production performance'}))
})

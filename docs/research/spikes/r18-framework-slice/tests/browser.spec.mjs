import {test,expect} from "@playwright/test";
import crypto from "node:crypto";
import pg from "pg";

const pool=new pg.Pool({connectionString:process.env.DATABASE_URL});
const token=user=>crypto.createHash("sha256").update("R18 NONPRODUCTION "+user).digest("hex");
const initial={type:"doc",content:[{type:"paragraph",content:[{type:"text",text:"Initial alice story"}]}]};
const variants=[{name:"Next.js",origin:"http://127.0.0.1:3100"},
                {name:"Vite + NestJS",origin:"http://127.0.0.1:5173"}];

test.beforeEach(async()=>{
 await pool.query("DELETE FROM r18_http.revisions WHERE book_id='book-a' AND revision>1");
 await pool.query("UPDATE r18_http.chapters SET revision=1,document=$1::jsonb WHERE book_id='book-a'",
  [JSON.stringify(initial)]);
 await pool.query("UPDATE r18_http.sessions SET expires_at=now()+interval '1 hour'");
});
test.afterAll(async()=>{await pool.end()});

async function open(browser,origin,user="alice"){
 const context=await browser.newContext();
 await context.addCookies([{name:"vsid",value:token(user),url:origin,httpOnly:true,sameSite:"Lax"}]);
 const page=await context.newPage();
 await page.goto(origin,{waitUntil:"domcontentloaded"});
 return {page,context};
}
async function loaded(page){
 await expect(page.getByTestId("save-status")).toHaveText("loaded");
 return page.locator(".ProseMirror[contenteditable=true]");
}
async function waitDraft(page){
 await expect(page.getByTestId("save-status")).toHaveText("unsaved draft stored");
}
async function save(page,rev){
 await page.getByRole("button",{name:"Save revision"}).click();
 await expect(page.getByTestId("save-status")).toHaveText("saved at revision "+rev);
}

for(const variant of variants){
 test.describe(variant.name+" real-browser editing",()=>{
  test("typing, paste, selection, committed save and reload",async({browser})=>{
   const {page,context}=await open(browser,variant.origin);
   try{
    const editable=await loaded(page);
    await editable.fill("A lantern burned beside Mara");
    await waitDraft(page);
    await editable.click();
    await page.keyboard.press("End");
    // Dispatch a genuine editor paste event, not direct manipulation of the editor state.
    await editable.evaluate(node=>{
      const data=new DataTransfer();
      data.setData("text/plain"," as the dawn rose");
      node.dispatchEvent(new ClipboardEvent("paste",{bubbles:true,cancelable:true,clipboardData:data}));
    });
    await expect(editable).toContainText("as the dawn rose");
    await waitDraft(page);
    await editable.press("ControlOrMeta+A");
    const selection=await page.evaluate(()=>window.getSelection()?.toString()??"");
    expect(selection).toContain("Mara");
    await save(page,2);
    await page.reload();
    const refreshed=await loaded(page);
    await expect(refreshed).toContainText("A lantern burned beside Mara");
    await expect(refreshed).toContainText("as the dawn rose");
   }finally{await context.close();}
  });

  test("failed request keeps Dexie safety copy and restores on reload",async({browser})=>{
   const {page,context}=await open(browser,variant.origin);
   try{
    const editable=await loaded(page);
    await page.route("**/api/books/book-a/chapters/chapter-1",route=>{
      if(route.request().method()==="PUT")return route.abort("failed");
      return route.continue();
    });
    await editable.fill("This remains local after a failed network save");
    await waitDraft(page);
    await page.getByRole("button",{name:"Save revision"}).click();
    await expect(page.getByTestId("save-status")).toContainText("unsaved:");
    await page.unroute("**/api/books/book-a/chapters/chapter-1");
    await page.reload();
    await expect(page.getByTestId("save-status")).toHaveText("recovered unsaved draft");
    await expect(page.locator(".ProseMirror")).toContainText("remains local");
    await save(page,2);
    await page.reload();
    await loaded(page);
    await expect(page.locator(".ProseMirror")).toContainText("remains local");
   }finally{await context.close();}
  });

  test("concurrent tabs preserve losing draft, do not overwrite server",async({browser})=>{
   const context=await browser.newContext();
   await context.addCookies([{name:"vsid",value:token("alice"),url:variant.origin,httpOnly:true,sameSite:"Lax"}]);
   const a=await context.newPage(),b=await context.newPage();
   try{
    await Promise.all([a.goto(variant.origin),b.goto(variant.origin)]);
    await Promise.all([loaded(a),loaded(b)]);
    await a.locator(".ProseMirror").fill("Winner from the first tab");
    await waitDraft(a);
    await b.locator(".ProseMirror").fill("Uncommitted competing version from second tab");
    await waitDraft(b);
    await save(a,2);
    await b.getByRole("button",{name:"Save revision"}).click();
    await expect(b.getByTestId("save-status")).toContainText("conflict:");
    await b.reload();
    await expect(b.getByTestId("save-status")).toContainText("conflict: recovered draft");
    await expect(b.locator(".ProseMirror")).toContainText("competing version");
    await a.reload();
    await loaded(a);
    await expect(a.locator(".ProseMirror")).toContainText("Winner from the first tab");
    const q=await pool.query("SELECT revision,document FROM r18_http.chapters WHERE book_id='book-a'");
    expect(q.rows[0].revision).toBe(2);
    expect(JSON.stringify(q.rows[0].document)).not.toContain("competing version");
   }finally{await context.close();}
  });

  test("another account cannot view Alice's local draft via forbidden book",async({browser})=>{
   const {page,context}=await open(browser,variant.origin);
   try{
    await loaded(page);
    await page.locator(".ProseMirror").fill("PRIVATE ALICE LOCAL DRAFT");
    await waitDraft(page);
    await context.clearCookies();
    await context.addCookies([{name:"vsid",value:token("bob"),url:variant.origin,httpOnly:true,sameSite:"Lax"}]);
    await page.reload();
    await expect(page.getByTestId("save-status")).toContainText("read denied");
    await expect(page.locator(".ProseMirror")).not.toContainText("PRIVATE ALICE");
    await expect(page.getByRole("button",{name:"Save revision"})).toBeDisabled();
   }finally{await context.close();}
  });
 });
}

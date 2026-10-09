// Synthetic client-only safety copy, NOT durable server save or encrypted storage.
import Dexie from "dexie";

let database;
function db(){
 if(!database){
  database=new Dexie("r18-vellistry-recovery-spike");
  database.version(1).stores({drafts:"&id,ownerId,updatedAt"});
 }
 return database;
}

export function draftKey(ownerId,bookId,chapterId){
 let tab=sessionStorage.getItem("r18-tab-id");
 if(!tab){
  tab=crypto.randomUUID();
  sessionStorage.setItem("r18-tab-id",tab);
 }
 return [ownerId,bookId,chapterId,tab].join(":");
}
export async function readDraft(id){return db().drafts.get(id);}
export async function writeDraft(record){return db().drafts.put(record);}
export async function clearDraft(id){return db().drafts.delete(id);}

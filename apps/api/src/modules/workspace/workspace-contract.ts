import {createHash} from "node:crypto";

export type Command = {kind:"create";title:string}|{kind:"rename";chapterId:string;title:string}|
 {kind:"reorder";chapterIds:string[]}|{kind:"book-notes";body:string}|{kind:"chapter-notes";chapterId:string;body:string};
export type Operation = {schemaVersion:1;operationId:string;expectedVersion:number;command:Command};
export type Receipt = {schemaVersion:1;operationId:string;bookId:string;outcome:"confirmed"|"rejected";version:number;createdChapterId?:string;reason?:"invalid"|"conflict"};
export type Workspace = {bookId:string;bookTitle:string;version:number;notes:string;chapters:{id:string;bookId:string;title:string;notes:string}[]};
export class InvalidWorkspaceInput extends Error {}
export function uuid(value:unknown):string {
 if(typeof value!=="string"||! /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(value))throw new InvalidWorkspaceInput("Invalid identifier");
 return value.toLowerCase();
}
export function text(value:unknown,max:number,trim=false):string {
 if(typeof value!=="string"||/\u0000|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/u.test(value))throw new InvalidWorkspaceInput("Invalid text");
 const result=trim?value.trim():value;
 if(result.length>max||(trim&&!result.length))throw new InvalidWorkspaceInput("Text length");
 return result;
}
function object(value:unknown):Record<string,unknown> {
 if(!value||typeof value!=="object"||Array.isArray(value)||![Object.prototype,null].includes(Object.getPrototypeOf(value)))throw new InvalidWorkspaceInput("Invalid object");
 return value as Record<string,unknown>;
}
function keys(value:Record<string,unknown>,expected:string[]) {
 if(Object.keys(value).sort().join("|")!==expected.slice().sort().join("|"))throw new InvalidWorkspaceInput("Unexpected fields");
}
export function version(value:unknown):number {
 if(typeof value!=="number"||!Number.isSafeInteger(value)||value<0)throw new InvalidWorkspaceInput("Invalid version");
 return value;
}
export function operation(value:unknown):Operation {
 const raw=object(value);keys(raw,["schemaVersion","operationId","expectedVersion","command"]);
 if(raw.schemaVersion!==1)throw new InvalidWorkspaceInput("Invalid schema");
 const c=object(raw.command);let command:Command;
 switch(c.kind){
  case "create": keys(c,["kind","title"]);command={kind:c.kind,title:text(c.title,180,true)};break;
  case "rename": keys(c,["kind","chapterId","title"]);command={kind:c.kind,chapterId:uuid(c.chapterId),title:text(c.title,180,true)};break;
  case "reorder": keys(c,["kind","chapterIds"]);if(!Array.isArray(c.chapterIds)||c.chapterIds.length>1000)throw new InvalidWorkspaceInput("Invalid order");
   command={kind:c.kind,chapterIds:c.chapterIds.map(uuid)};if(new Set(command.chapterIds).size!==command.chapterIds.length)throw new InvalidWorkspaceInput("Duplicate chapter");break;
  case "book-notes": keys(c,["kind","body"]);command={kind:c.kind,body:text(c.body,10000)};break;
  case "chapter-notes": keys(c,["kind","chapterId","body"]);command={kind:c.kind,chapterId:uuid(c.chapterId),body:text(c.body,10000)};break;
  default: throw new InvalidWorkspaceInput("Unknown command");
 }
 const result:Operation={schemaVersion:1,operationId:uuid(raw.operationId),expectedVersion:version(raw.expectedVersion),command};
 if(Buffer.byteLength(JSON.stringify(value),"utf8")>131072)throw new InvalidWorkspaceInput("Request too large");
 return result;
}
export function canonicalRequest(bookId:string,op:Operation):string {
 return JSON.stringify({schemaVersion:1,bookId:uuid(bookId),expectedVersion:op.expectedVersion,command:op.command});
}
export function requestDigest(bookId:string,op:Operation):string {return createHash("sha256").update(canonicalRequest(bookId,op),"utf8").digest("hex");}
export function receipt(value:unknown,bookId:string,operationId:string):Receipt {
 const r=object(value);const expected=["schemaVersion","operationId","bookId","outcome","version"];
 if(r.createdChapterId!==undefined)expected.push("createdChapterId");if(r.reason!==undefined)expected.push("reason");keys(r,expected);
 if(r.schemaVersion!==1||r.bookId!==bookId||r.operationId!==operationId||typeof r.outcome!=="string"||!["confirmed","rejected"].includes(r.outcome))throw new InvalidWorkspaceInput("Invalid acknowledgement");
 version(r.version);if(r.createdChapterId!==undefined)uuid(r.createdChapterId);
 if(r.outcome==="rejected"&&(typeof r.reason!=="string"||!["invalid","conflict"].includes(r.reason)))throw new InvalidWorkspaceInput("Invalid rejection");
 if(r.outcome==="confirmed"&&r.reason!==undefined)throw new InvalidWorkspaceInput("Invalid confirmation");
 return r as unknown as Receipt;
}
export function workspace(value:unknown,bookId:string):Workspace {
 const w=object(value);keys(w,["bookId","bookTitle","version","notes","chapters"]);
 if(w.bookId!==bookId||!Array.isArray(w.chapters)||w.chapters.length>1000)throw new InvalidWorkspaceInput("Invalid snapshot");
 version(w.version);text(w.bookTitle,120,true);text(w.notes,10000);
 const ids=new Set<string>();for(const raw of w.chapters){const c=object(raw);keys(c,["id","bookId","title","notes"]);const id=uuid(c.id);
  if(ids.has(id)||c.bookId!==bookId)throw new InvalidWorkspaceInput("Invalid chapter scope");ids.add(id);text(c.title,180,true);text(c.notes,10000);}
 return w as unknown as Workspace;
}

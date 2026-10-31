/** Pure supported-document contract. No Auth, storage, normalization or network. */
export type ManuscriptNode = {type:string;content?:ManuscriptNode[];text?:string;attrs?:Record<string,number|null>;marks?:{type:string}[]};
export type SaveOperation = Readonly<{operationId:string;bookId:string;chapterId:string;expectedRevision:number;document:ManuscriptNode}>;
export function identifier(v:unknown):string {
 if(typeof v!=="string"||! /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(v))throw new Error("Invalid identifier");return v.toLowerCase();
}
function object(v:unknown):Record<string,unknown>{if(!v||typeof v!=="object"||Array.isArray(v)||Object.getPrototypeOf(v)!==Object.prototype)throw new Error("Invalid object");return v as Record<string,unknown>;}
function exact(v:Record<string,unknown>,keys:string[]){if(Object.keys(v).sort().join()!==keys.sort().join())throw new Error("Unexpected fields");}
export function document(value:unknown):ManuscriptNode {
 let count=0;
 function visit(raw:unknown,parent:string,depth:number):ManuscriptNode {
  if(depth>32||++count>20000)throw new Error("Document complexity");const n=object(raw);const type=n.type;
  if(typeof type!=="string")throw new Error("Invalid node");
  const allowed:Record<string,string[]>={root:["doc"],doc:["paragraph","heading","bulletList","orderedList"],paragraph:["text","hardBreak"],heading:["text","hardBreak"],bulletList:["listItem"],orderedList:["listItem"],listItem:["paragraph","bulletList","orderedList"]};
  if(!allowed[parent]?.includes(type))throw new Error("Unsupported structure");
  const keys=["type"];if(n.content!==undefined)keys.push("content");if(n.attrs!==undefined)keys.push("attrs");if(n.text!==undefined)keys.push("text");if(n.marks!==undefined)keys.push("marks");exact(n,keys);
  if(type==="text"){
   if(typeof n.text!=="string"||!n.text.length||/\u0000|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/u.test(n.text)||n.content!==undefined||n.attrs!==undefined)throw new Error("Invalid text");
   if(n.marks!==undefined){if(!Array.isArray(n.marks)||n.marks.length>3)throw new Error("Invalid marks");const seen=new Set();for(const mark of n.marks){const m=object(mark);exact(m,["type"]);if(!["bold","italic","underline"].includes(String(m.type))||seen.has(m.type))throw new Error("Invalid mark");seen.add(m.type);}}
  }else{
   if(n.text!==undefined||n.marks!==undefined)throw new Error("Invalid block");
   if(type==="heading"){const a=object(n.attrs);exact(a,["level"]);if(![1,2,3].includes(Number(a.level))||typeof a.level!=="number")throw new Error("Invalid heading");}
   else if(type==="orderedList"&&n.attrs!==undefined){const a=object(n.attrs);exact(a,["start"]);if(!Number.isSafeInteger(a.start)||Number(a.start)<1||Number(a.start)>2147483647)throw new Error("Invalid list start");}
   else if(n.attrs!==undefined)throw new Error("Unexpected attributes");
   if(type==="hardBreak"){if(n.content!==undefined)throw new Error("Invalid break");}
   else if(n.content!==undefined){if(!Array.isArray(n.content))throw new Error("Invalid children");n.content.forEach(x=>visit(x,type,depth+1));}
   if(["doc","bulletList","orderedList","listItem"].includes(type)&&(!Array.isArray(n.content)||!n.content.length))throw new Error("Missing children");
   if(type==="listItem"&&(n.content as ManuscriptNode[])[0].type!=="paragraph")throw new Error("List must start with paragraph");
  }
  return n as unknown as ManuscriptNode;
 }
 visit(value,"root",0);const json=JSON.stringify(value);if(new TextEncoder().encode(json).length>262144)throw new Error("Document too large");return JSON.parse(json) as ManuscriptNode;
}
export function saveOperation(raw:unknown):SaveOperation {
 const r=object(raw);exact(r,["operationId","bookId","chapterId","expectedRevision","document"]);
 if(typeof r.expectedRevision!=="number"||!Number.isSafeInteger(r.expectedRevision)||r.expectedRevision<1||r.expectedRevision>=2147483647)throw new Error("Invalid revision");
 const frozen=document(r.document);const freeze=(node:unknown):void=>{if(node&&typeof node==="object"){Object.values(node).forEach(freeze);Object.freeze(node);}};freeze(frozen);
 return Object.freeze({operationId:identifier(r.operationId),bookId:identifier(r.bookId),chapterId:identifier(r.chapterId),expectedRevision:r.expectedRevision,document:frozen});
}

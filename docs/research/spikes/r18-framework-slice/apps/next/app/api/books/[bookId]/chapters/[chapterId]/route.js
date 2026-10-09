import {handleRequest} from "../../../../../../../../shared/persistence.mjs";
export const runtime="nodejs";
export const dynamic="force-dynamic";
export async function GET(request,{params}){
 const {bookId,chapterId}=await params;
 const result=await handleRequest("GET",{bookId,chapterId},request.headers,null);
 return Response.json(result.body,{status:result.status,headers:{"Cache-Control":"no-store"}});
}
export async function PUT(request,{params}){
 const {bookId,chapterId}=await params;
 let body;
 try{body=await request.json();}
 catch{return Response.json({error:"invalid_json"},{status:400});}
 const result=await handleRequest("PUT",{bookId,chapterId},request.headers,body);
 return Response.json(result.body,{status:result.status,headers:{"Cache-Control":"no-store"}});
}
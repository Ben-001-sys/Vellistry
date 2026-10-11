import {NextRequest,NextResponse} from "next/server";
import {decideBookPost,EXPECTED_USER_HEADER,forwardTransportFailure} from "@/lib/library/book-create-document";
import {getServerSupabase} from "@/lib/supabase/server";

export const dynamic="force-dynamic";
export const runtime="nodejs";

function privateJson(body: {error: string}, status: number){
 return NextResponse.json(body,{status,headers:{"Cache-Control":"no-store"}});
}

/**
 * BFF forwards only a verified Supabase user access token.
 * Nest independently validates it against Supabase Auth for every request.
 * Book creates forward a title only, and only when the browser's expected user
 * still matches that verified session.
 * A failure after that forward is an unknown acknowledgement, not a definite
 * save failure. Authentication, validation, and session mismatch stay definite.
 */
async function forward(req:NextRequest,method:"GET"|"POST"){
 let attemptedUpstream=false;
 try{
  const supabase=await getServerSupabase();
  const {data:{user},error}=await supabase.auth.getUser();
  if(error||!user)return privateJson({error:"unauthenticated"},401);
  const {data:{session}}=await supabase.auth.getSession();
  if(!session?.access_token)return privateJson({error:"unauthenticated"},401);
  const base=process.env.VELLISTRY_API_BASE_URL;
  if(!base)return privateJson({error:"api_not_configured"},503);
  const target=new URL("/v1/books",base);
  let content:string|undefined;
  if(method==="POST"){
   const decision=decideBookPost({
    sessionUserId:user.id,
    expectedUserId:req.headers.get(EXPECTED_USER_HEADER),
    rawBody:await req.text(),
   });
   switch(decision.action){
    case "reject":
     return privateJson({error:decision.error},decision.status);
    case "forward":
     content=decision.document;
     break;
    default:{
     const unreachable:never=decision;
     void unreachable;
     return privateJson({error:"service_unavailable"},503);
    }
   }
   attemptedUpstream=true;
  }
  const upstream=await fetch(target,{
   method,headers:{"Authorization":"Bearer "+session.access_token,"Content-Type":"application/json"},
   body:content,cache:"no-store"
  });
  if(upstream.status===401)return privateJson({error:"unauthenticated"},401);
  let payload="";
  try{
   payload=await upstream.text();
  }catch{
   return new NextResponse(null,{status:upstream.status,headers:{"Cache-Control":"no-store"}});
  }
  return new NextResponse(payload,{status:upstream.status,headers:{"Content-Type":"application/json","Cache-Control":"no-store"}});
 }catch{
  const failure=forwardTransportFailure(attemptedUpstream);
  return privateJson({error:failure.error},failure.status);
 }
}
export async function GET(req:NextRequest){return forward(req,"GET");}
export async function POST(req:NextRequest){return forward(req,"POST");}

import {NextRequest,NextResponse} from "next/server";
import {getServerSupabase} from "@/lib/supabase/server";

export const dynamic="force-dynamic";
export const runtime="nodejs";

/**
 * BFF forwards only a verified Supabase user access token.
 * Nest independently validates it against Supabase Auth for every request.
 */
async function forward(req:NextRequest,method:"GET"|"POST"){
 try{
  const supabase=await getServerSupabase();
  const {data:{user},error}=await supabase.auth.getUser();
  if(error||!user)return NextResponse.json({error:"unauthenticated"},{status:401});
  const {data:{session}}=await supabase.auth.getSession();
  if(!session?.access_token)return NextResponse.json({error:"unauthenticated"},{status:401});
  const base=process.env.VELLISTRY_API_BASE_URL;
  if(!base)return NextResponse.json({error:"api_not_configured"},{status:503});
  const target=new URL("/v1/books",base);
  let content:string|undefined;
  if(method==="POST"){
   content=await req.text();
   if(content.length>10000)return NextResponse.json({error:"invalid_document"},{status:400});
  }
  const upstream=await fetch(target,{
   method,headers:{"Authorization":"Bearer "+session.access_token,"Content-Type":"application/json"},
   body:content,cache:"no-store"
  });
  const payload=await upstream.text();
  return new NextResponse(payload,{status:upstream.status,headers:{"Content-Type":"application/json","Cache-Control":"no-store"}});
 }catch{
  // Suppress raw upstream/session exceptions and sensitive request context.
  return NextResponse.json({error:"service_unavailable"},{status:503});
 }
}
export async function GET(req:NextRequest){return forward(req,"GET");}
export async function POST(req:NextRequest){return forward(req,"POST");}

import {cookies} from "next/headers";
import {createServerClient} from "@supabase/ssr";
export async function getServerSupabase(){
 const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
 const key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
 if(!url||!key)throw new Error("Supabase environment is missing");
 const cookieStore=await cookies();
 return createServerClient(url,key,{
  cookies:{
   getAll(){return cookieStore.getAll();},
   setAll(toSet){
    // Mutations are allowed in route handlers; server page renders remain read only.
    try{toSet.forEach(({name,value,options})=>cookieStore.set(name,value,options));}
    catch {/* Never claim a token was refreshed in a Server Component. */}
   }
  }
 });
}

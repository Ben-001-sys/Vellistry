import {Injectable,ServiceUnavailableException,UnauthorizedException} from "@nestjs/common";
import {createClient,SupabaseClient} from "@supabase/supabase-js";

/**
 * A real Supabase Auth server verifies the access token. No trust in x-user-id.
 * Auth server calls are intentionally required per protected request in this first slice.
 * Do not initialize admin/service-role clients for author-facing requests.
 */
@Injectable()
export class SupabaseAuthService{
 private readonly url=process.env.SUPABASE_URL;
 private readonly publishableKey=process.env.SUPABASE_PUBLISHABLE_KEY;

 private config(){
  if(!this.url||!this.publishableKey)throw new ServiceUnavailableException("Supabase not configured");
  return {url:this.url,key:this.publishableKey};
 }
 publicClient():SupabaseClient{
  const {url,key}=this.config();
  return createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});
 }
 async verify(token:string):Promise<{id:string}>{
  if(!token||token.length>8192)throw new UnauthorizedException();
  const {data,error}=await this.publicClient().auth.getUser(token);
  if(error||!data.user?.id)throw new UnauthorizedException();
  return {id:data.user.id};
 }
 forUser(token:string):SupabaseClient{
  const {url,key}=this.config();
  return createClient(url,key,{
   global:{headers:{Authorization:"Bearer "+token}},
   auth:{persistSession:false,autoRefreshToken:false}
  });
 }
}

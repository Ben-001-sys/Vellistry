import {Inject,Injectable,InternalServerErrorException} from "@nestjs/common";
import {SupabaseAuthService} from "../auth/supabase-auth.service";
import {bookInsertPayload} from "./book-create-input";
@Injectable()
export class BooksService{
 constructor(@Inject(SupabaseAuthService) private readonly auth:SupabaseAuthService){}
 async list(token:string){
  const {data,error}=await this.auth.forUser(token).from("books")
    .select("id,title,created_at,updated_at").order("created_at",{ascending:false});
  if(error)throw new InternalServerErrorException("Unable to load books");
  return data??[];
 }
 async create(token:string,title:string){
  // owner_id is assigned by DEFAULT auth.uid() in the database; never from the client.
  const {data,error}=await this.auth.forUser(token).from("books")
    .insert(bookInsertPayload(title)).select("id,title,created_at,updated_at").single();
  if(error)throw new InternalServerErrorException("Unable to create book");
  return data;
 }
}

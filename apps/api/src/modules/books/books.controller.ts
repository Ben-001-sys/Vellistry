import {BadRequestException,Body,Controller,Get,Header,Post,Req,UseGuards} from "@nestjs/common";
import {AuthenticatedRequest,SupabaseAuthGuard} from "../auth/supabase-auth.guard";
import {BooksService} from "./books.service";
@Controller("books")
@UseGuards(SupabaseAuthGuard)
export class BooksController{
 constructor(private readonly books:BooksService){}
 @Get()
 @Header("Cache-Control","no-store")
 list(@Req() req:AuthenticatedRequest){return this.books.list(req.accessToken);}
 @Post()
 @Header("Cache-Control","no-store")
 create(@Req() req:AuthenticatedRequest,@Body() body:unknown){
  const value=(body&&typeof body==="object"&&!Array.isArray(body))?
    (body as Record<string,unknown>).title:null;
  if(typeof value!=="string"||!value.trim()||value.trim().length>120)
   throw new BadRequestException("A title of 1-120 characters is required");
  return this.books.create(req.accessToken,value.trim());
 }
}

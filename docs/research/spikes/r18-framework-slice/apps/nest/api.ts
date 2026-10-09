import "reflect-metadata";
import {Module,Controller,Get,Put,Req,Res,Param,Body} from "@nestjs/common";
import {NestFactory} from "@nestjs/core";
import {handleRequest} from "../../shared/persistence.mjs";

@Controller("api/books/:bookId/chapters")
class ChaptersController {
 @Get(":chapterId")
 async read(@Req() req:any,@Res() res:any,@Param("bookId") bookId:string,
            @Param("chapterId") chapterId:string){
  const result=await handleRequest("GET",{bookId,chapterId},
       new Headers(req.headers as Record<string,string>),null);
  res.set("Cache-Control","no-store").status(result.status).json(result.body);
 }
 @Put(":chapterId")
 async write(@Req() req:any,@Res() res:any,@Param("bookId") bookId:string,
             @Param("chapterId") chapterId:string,@Body() body:any){
  const result=await handleRequest("PUT",{bookId,chapterId},
      new Headers(req.headers as Record<string,string>),body);
  res.set("Cache-Control","no-store").status(result.status).json(result.body);
 }
}
@Module({controllers:[ChaptersController]})
class AppModule {}
const app=await NestFactory.create(AppModule,{logger:false});
await app.listen(3101,"127.0.0.1");
console.log("R18 NestJS research API ready on 3101");

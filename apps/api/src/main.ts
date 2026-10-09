import "dotenv/config";
import "reflect-metadata";
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./modules/app.module";

async function bootstrap(){
 const app=await NestFactory.create(AppModule);
 app.enableShutdownHooks();
 app.setGlobalPrefix("v1");
 const port=Number(process.env.API_PORT??4100);
 const host=process.env.API_HOST??"127.0.0.1";
 await app.listen(port,host);
 console.log("Vellistry API started");
}
void bootstrap();

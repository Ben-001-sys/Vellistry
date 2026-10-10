import {Module} from "@nestjs/common";
import {HealthController} from "./health.controller";
import {AuthModule} from "./auth/auth.module";
import {BooksController} from "./books/books.controller";
import {BooksService} from "./books/books.service";
@Module({imports:[AuthModule],controllers:[HealthController,BooksController],providers:[BooksService]})
export class AppModule{}

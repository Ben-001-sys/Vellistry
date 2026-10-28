import {Inject,CanActivate,ExecutionContext,Injectable,UnauthorizedException} from "@nestjs/common";
import {SupabaseAuthService} from "./supabase-auth.service";

export type AuthenticatedRequest={headers:{authorization?:string};author:{id:string};accessToken:string};

@Injectable()
export class SupabaseAuthGuard implements CanActivate{
 // tsx omits design:paramtypes; explicit runtime tokens also work with tsc output.
 constructor(@Inject(SupabaseAuthService) private readonly auth:SupabaseAuthService){}
 async canActivate(context:ExecutionContext){
  const req=context.switchToHttp().getRequest<AuthenticatedRequest>();
  const header=req.headers.authorization??"";
  const match=/^Bearer ([A-Za-z0-9_\-.]+)$/.exec(header);
  if(!match)throw new UnauthorizedException();
  const author=await this.auth.verify(match[1]);
  req.author=author;
  req.accessToken=match[1];
  return true;
 }
}

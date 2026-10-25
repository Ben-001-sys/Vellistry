import {Operation} from "./workspace-contract";
import {VerifiedPrincipal} from "./workspace-principal";
export const WORKSPACE_PERSISTENCE=Symbol("WORKSPACE_PERSISTENCE");
/** Server-only transaction capability. No production adapter is registered. */
export interface WorkspacePersistencePort {
 read(principal:VerifiedPrincipal,bookId:string):Promise<unknown>;
 apply(principal:VerifiedPrincipal,bookId:string,operation:Operation):Promise<unknown>;
 lookup(principal:VerifiedPrincipal,bookId:string,operationId:string):Promise<unknown>;
}

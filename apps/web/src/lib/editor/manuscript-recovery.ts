/** Deterministic synthetic recovery. Storage is injected; no browser/device durability claim. */
export type DraftScope=Readonly<{author:string;book:string;chapter:string}>;
export type DraftPhase="unsaved"|"saving"|"confirmed"|"rejected"|"conflicted"|"unknown"|"recoverable"|"unverified";
export type DraftStorage={get(key:string):unknown;set(key:string,value:unknown):void};
type Pending={id:string;text:string;base:number};
type Entry={scope:DraftScope;text:string;base:number;phase:DraftPhase;pending?:Pending};
export function createDraftRecovery(storage:DraftStorage,validate:(value:unknown)=>unknown){
 let active:Entry|null=null;let epoch=0;
 const key=(s:DraftScope)=>JSON.stringify([s.author,s.book,s.chapter]);
 function checked(s:DraftScope){if(!s||Object.keys(s).sort().join()!=="author,book,chapter"||Object.values(s).some(v=>typeof v!=="string"||!v||v.length>100))throw new Error("Invalid scope");return Object.freeze({...s});}
 function persist(){if(active)storage.set(key(active.scope),JSON.parse(JSON.stringify(active)));}
 function snapshot(){return active?JSON.parse(JSON.stringify(active)) as Entry:null;}
 return {
  snapshot,
  pendingTicket(){return active?.pending?Object.freeze({epoch,scope:active.scope,id:active.pending.id}):null;},
  bind(scope:DraftScope|null,accepted:unknown,revision:number){epoch++;active=null;if(!scope)return;const s=checked(scope);if(!Number.isSafeInteger(revision)||revision<1)throw new Error("Invalid revision");const text=JSON.stringify(validate(accepted));active={scope:s,text,base:revision,phase:"confirmed"};},
  pause(){epoch++;if(active)active.phase="unverified";active=null;},
  edit(value:unknown){if(!active)throw new Error("Unverified identity");active.text=JSON.stringify(validate(value));active.phase=active.pending?"unknown":"unsaved";persist();},
  begin(id:string){if(!active||active.pending||active.phase!=="unsaved"||typeof id!=="string"||!id||id.length>100)throw new Error("Save unavailable");active.pending={id,text:active.text,base:active.base};active.phase="saving";persist();return Object.freeze({epoch,scope:active.scope,...active.pending});},
  settle(ticket:{epoch:number;scope:DraftScope;id:string},outcome:"confirmed"|"rejected"|"conflicted"|"unknown",revision?:number){
   if(!active||ticket.epoch!==epoch||key(ticket.scope)!==key(active.scope)||active.pending?.id!==ticket.id)return false;
   const pending=active.pending;
   if(outcome==="confirmed"&&revision===pending.base+1){const stale=revision<active.base;active.base=Math.max(active.base,revision);active.phase=stale?"conflicted":active.text===pending.text?"confirmed":"unsaved";delete active.pending;}
   else if(outcome==="rejected"||outcome==="conflicted"){active.phase=outcome;delete active.pending;}
   else active.phase="unknown";persist();return true;
  },
  recovery(){if(!active)return null;try{const candidate=storage.get(key(active.scope)) as Entry;if(!candidate||key(checked(candidate.scope))!==key(active.scope)||!Number.isSafeInteger(candidate.base)||candidate.base<1||typeof candidate.text!=="string"||candidate.text.length>300000)return null;validate(JSON.parse(candidate.text));if(candidate.pending){if(typeof candidate.pending.id!=="string"||!candidate.pending.id||candidate.pending.id.length>100||candidate.pending.base!==candidate.base) return null;validate(JSON.parse(candidate.pending.text));}return JSON.parse(JSON.stringify({...candidate,phase:"recoverable"}));}catch{return null;}},
  recover(candidate:unknown){if(!active)throw new Error("Identity unavailable");const actual=this.recovery();if(!actual||JSON.stringify(actual)!==JSON.stringify(candidate))throw new Error("Invalid recovery candidate");active.text=actual.text;active.pending=actual.pending;active.phase=actual.pending?"unknown":"unsaved";/* retain current accepted base; never auto-save recovered content */persist();},
 };
}

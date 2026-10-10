"""Option B Wave 3 R15/K2B disposable threat-boundary model, NOT Vellistry Auth.

Models gates to be specified *before* prototypes: expired/revoked sessions,
signed-link residual exposure, account-scoped unsynced drafts, and deletion
tombstones. No cloud connection, JWT cryptography, RLS, customer information,
real document uploads or production code modification.
"""
from dataclasses import dataclass,field

class Denied(PermissionError):
    pass

@dataclass
class SyntheticSecurityState:
    now:int=1000
    sessions:dict=field(default_factory=dict)
    books:dict=field(default_factory=lambda:{"a":"alice","b":"bob"})
    local_drafts:dict=field(default_factory=dict)
    share_urls:dict=field(default_factory=dict)
    deleted_books:set=field(default_factory=set)
    scheduled_backup_deletions:set=field(default_factory=set)

    def session(self,token:str,owner:str,expires:int=2000,active:bool=True):
        self.sessions[token]=(owner,expires,active)

    def principal(self,token:str)->str:
        s=self.sessions.get(token)
        if not s or s[1]<=self.now or not s[2]:
            raise Denied("missing, expired or revoked auth session")
        return s[0]

    def can_read(self,token:str,book:str)->bool:
        principal=self.principal(token)
        if book in self.deleted_books or self.books.get(book)!=principal:
            raise Denied("private book denied")
        return True

    def revoke(self,token:str):
        s=self.sessions[token]
        self.sessions[token]=(s[0],s[1],False)

    def write_draft(self,token:str,book:str,text:str):
        owner=self.principal(token)
        self.can_read(token,book)
        # This represents a *planned app-enforced* IndexedDB boundary; unlike
        # actual IndexedDB, same-origin malicious JS can see all local records.
        self.local_drafts[(owner,book)]=text

    def read_draft(self,token:str,book:str):
        self.can_read(token,book)
        return self.local_drafts.get((self.principal(token),book))

    def issue_signed_link(self,token:str,book:str,link:str,ttl:int=30):
        self.can_read(token,book)
        if ttl<=0 or ttl>60:raise Denied("excessive signed URL duration")
        self.share_urls[link]=(book,self.now+ttl)

    def link_fetch(self,link:str):
        # Signed URLs are bearer credentials; an extant link may remain valid
        # after its author's access session is revoked, until expiry.
        b,exp=self.share_urls[link]
        if self.now>=exp or b in self.deleted_books:
            raise Denied("expired or unavailable asset")
        return b

    def delete_book(self,token:str,book:str):
        self.can_read(token,book)
        self.deleted_books.add(book)
        self.local_drafts.pop((self.principal(token),book),None)
        self.scheduled_backup_deletions.add(book)
        # Backup deletion is NOT represented as already completed.

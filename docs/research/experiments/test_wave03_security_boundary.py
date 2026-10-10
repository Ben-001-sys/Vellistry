"""Wave03 security behavior and integrated source-gap checks (research only).
Actual production exploit testing, SSR runtime tests, and Storage policy
verification remain NOT RUN. No security remediation is applied.
"""
from pathlib import Path
import unittest
from wave03_security_boundary import SyntheticSecurityState,Denied

ROOT=Path(__file__).resolve().parents[3]

class ResearchSessionAndAuthorBoundary(unittest.TestCase):
    def setUp(self):
        self.s=SyntheticSecurityState()
        self.s.session("a1","alice")
        self.s.session("a2","alice")
        self.s.session("b1","bob")
    def test_01_owned_book_allowed(self):
        self.assertTrue(self.s.can_read("a1","a"))
    def test_02_cross_owner_denied(self):
        with self.assertRaises(Denied):self.s.can_read("b1","a")
    def test_03_signed_jwt_time_is_not_session_liveness(self):
        self.s.revoke("a1")
        self.assertLess(self.s.now,2000)
        with self.assertRaises(Denied):self.s.can_read("a1","a")
    def test_04_independent_alice_session_not_revoked_locally(self):
        self.s.revoke("a1")
        self.assertTrue(self.s.can_read("a2","a"))
    def test_05_other_author_unchanged(self):
        self.s.revoke("a1")
        self.assertTrue(self.s.can_read("b1","b"))
    def test_06_expired_session_denied(self):
        self.s.now=2001
        with self.assertRaises(Denied):self.s.can_read("a2","a")
    def test_07_local_draft_scoped_author_book(self):
        self.s.write_draft("a1","a","Mara escaped")
        self.assertEqual(self.s.read_draft("a2","a"),"Mara escaped")
        with self.assertRaises(Denied):self.s.read_draft("b1","a")
    def test_08_signed_download_url_remains_valid_after_logout(self):
        self.s.issue_signed_link("a1","a","link-1",ttl=30)
        self.s.revoke("a1")
        self.assertEqual(self.s.link_fetch("link-1"),"a")
        self.s.now=1030
        with self.assertRaises(Denied):self.s.link_fetch("link-1")
    def test_09_signed_url_excessive_ttl_rejected(self):
        with self.assertRaises(Denied):self.s.issue_signed_link("a1","a","link-2",ttl=3600)
    def test_10_deleted_book_unreadable_without_backup_erasure_claim(self):
        self.s.write_draft("a1","a","draft")
        self.s.issue_signed_link("a1","a","link-3")
        self.s.delete_book("a1","a")
        with self.assertRaises(Denied):self.s.can_read("a2","a")
        with self.assertRaises(Denied):self.s.link_fetch("link-3")
        self.assertNotIn(("alice","a"),self.s.local_drafts)
        self.assertIn("a",self.s.scheduled_backup_deletions)
    def test_11_cross_owner_cannot_delete(self):
        with self.assertRaises(Denied):self.s.delete_book("b1","a")
    def test_12_existing_nest_books_are_scoped_by_user_token(self):
        text=(ROOT/"apps/api/src/modules/books/books.service.ts").read_text()
        self.assertIn("this.auth.forUser(token)",text)
        self.assertNotIn("service_role",text)
    def test_13_current_auth_guard_verifies_user_per_request(self):
        src=(ROOT/"apps/api/src/modules/auth/supabase-auth.service.ts").read_text()
        self.assertIn("auth.getUser(token)",src)
        self.assertIn("persistSession:false",src)
        self.assertNotIn("getSession(",src)
    def test_14_current_logout_does_not_handle_signout_error(self):
        src=(ROOT/"apps/web/src/app/books/page.tsx").read_text()
        self.assertIn("auth.signOut()",src)
        self.assertIn('window.location.assign("/login")',src)
        self.assertNotIn("if(error)",src)
    def test_15_manuscript_write_privileges_explicitly_restricted(self):
        src=(ROOT/"supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql").read_text()
        self.assertIn("revoke all on table public.chapters, public.chapter_revisions from authenticated;",src)
        self.assertIn("grant select on table public.chapters, public.chapter_revisions to authenticated;",src)
    def test_16_client_side_browser_books_page_not_ssr_gate(self):
        src=(ROOT/"apps/web/src/app/books/page.tsx").read_text()
        self.assertTrue(src.startswith('"use client";'))
        self.assertIn('fetch("/api/books"',src)
    def test_17_server_session_helper_exists_but_not_full_proxy(self):
        src=(ROOT/"apps/web/src/lib/supabase/server.ts").read_text()
        self.assertIn("createServerClient",src)
        self.assertFalse((ROOT/"apps/web/src/proxy.ts").exists())
    def test_18_real_storage_export_and_deletion_unverified(self):
        # Check current controller footprint; absence of an endpoint is not
        # proof that all private content boundaries have been evaluated.
        src=(ROOT/"apps/api/src/modules/books/books.controller.ts").read_text()
        self.assertIn('@Controller("books")',src)
        self.assertIn("@Get()",src)
        self.assertIn("@Post()",src)
        self.assertNotIn("@Delete()",src)
        self.assertNotIn("createSignedUrl",src)
        self.assertNotIn("@Get(':bookId/export')",src)

if __name__=="__main__":
    unittest.main()

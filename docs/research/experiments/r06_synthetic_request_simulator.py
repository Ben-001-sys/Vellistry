#!/usr/bin/env python3
"""R06-002 synthetic effective-request experiment (NOT application code).

Uses invented SIM rules, not the frozen 130-lens fiction system.
No LLM calls; tests only request configuration and isolation contracts.
"""
from __future__ import annotations
from dataclasses import dataclass
import unittest


@dataclass(frozen=True)
class Rule:
    id: str
    instruction: str
    operations: tuple[str, ...] = ("continue", "rewrite", "audit")
    book: str | None = None
    enabled: bool = True


SIM_DEFAULTS = (
    Rule("SIM-RESTRAINT", "SIMULATED GUIDANCE: Use exposition only when it serves the scene."),
    Rule("SIM-CAUSE", "SIMULATED GUIDANCE: Keep established physical consequences coherent."),
    Rule("SIM-VOICE", "SIMULATED GUIDANCE: Preserve unusual but intentional narrator voice."),
)


class UnsafeCarriedContext(ValueError):
    """Old provider state cannot be verified free of stale rules."""


def resolve_request(action: str, book: str, *, custom_rules=(),
                    excluded_defaults=(), defaults_enabled=True,
                    canon=None, carried_context=None):
    """Demonstrate a TEST contract, not an approved rule engine.

    The illustrative resolver refuses opaque provider conversation state
    rather than claiming previously active rules have been removed.
    """
    if carried_context is not None:
        raise UnsafeCarriedContext(
            "Cannot verify inherited provider context; start fresh or audit it"
        )
    excluded = set(excluded_defaults)
    eligible = [r for r in SIM_DEFAULTS
                if defaults_enabled and r.id not in excluded]
    eligible.extend(
        r for r in custom_rules if r.enabled and (r.book is None or r.book == book)
    )
    active = [r for r in eligible if action in r.operations]
    ids = [r.id for r in active]
    if len(ids) != len(set(ids)):
        raise ValueError("Rule identifier collision")
    included_text = "\n".join(f"{r.id}: {r.instruction}" for r in active)
    book_facts = (canon or {}).get(book, ())
    facts_text = "\n".join(book_facts)
    payload = (
        f"ACTION: {action}\nBOOK: {book}\nACTIVE GUIDANCE:\n"
        f"{included_text}\nCANON:\n{facts_text}"
    )
    inactive_ids = [r.id for r in SIM_DEFAULTS if r.id not in ids]
    inactive_ids.extend(r.id for r in custom_rules if r.id not in ids)
    return {
        "book": book, "action": action, "active_rule_ids": ids,
        "inactive_rule_ids": inactive_ids, "canon": tuple(book_facts),
        "effective_request": payload,
        "label": "SIMULATED GUIDANCE ONLY — NOT REAL DEFAULT PACK",
    }


class TestR06SyntheticRequestContract(unittest.TestCase):
    def test_new_project_defaults_on(self):
        t = resolve_request("continue", "Book-A")
        self.assertEqual(t["active_rule_ids"], [r.id for r in SIM_DEFAULTS])

    def test_disabled_default_absent_from_request(self):
        t = resolve_request(
            "continue", "Book-A", excluded_defaults={"SIM-RESTRAINT"}
        )
        self.assertNotIn("SIM-RESTRAINT:", t["effective_request"])
        self.assertIn("SIM-RESTRAINT", t["inactive_rule_ids"])

    def test_custom_rule_is_included_when_enabled(self):
        r = Rule("MY-COMBAT", "Make fighting physically constrained.", book="Book-A")
        t = resolve_request("continue", "Book-A", custom_rules=[r])
        self.assertIn(
            "MY-COMBAT: Make fighting physically constrained.",
            t["effective_request"],
        )

    def test_disabled_custom_rule_not_included(self):
        r = Rule("MY-COMBAT", "Make fighting physically constrained.", enabled=False)
        t = resolve_request("continue", "Book-A", custom_rules=[r])
        self.assertNotIn("MY-COMBAT:", t["effective_request"])

    def test_restoration_recovers_defaults(self):
        off = resolve_request(
            "continue", "Book-A", excluded_defaults={"SIM-VOICE"}
        )
        on = resolve_request("continue", "Book-A")
        self.assertNotIn("SIM-VOICE", off["active_rule_ids"])
        self.assertIn("SIM-VOICE", on["active_rule_ids"])

    def test_book_scope_isolation(self):
        a_only = Rule("A-ONLY", "Use first person.", book="Book-A")
        b = resolve_request("continue", "Book-B", custom_rules=[a_only])
        self.assertNotIn("A-ONLY:", b["effective_request"])

    def test_explicit_exception_can_exclude_general_default(self):
        refrain = Rule(
            "RITUAL", "Repeat the ritual refrain four times.", book="Book-A"
        )
        t = resolve_request(
            "continue", "Book-A", custom_rules=[refrain],
            excluded_defaults={"SIM-RESTRAINT"}
        )
        self.assertIn("RITUAL:", t["effective_request"])
        self.assertNotIn("SIM-RESTRAINT:", t["effective_request"])

    def test_canon_preserved_when_defaults_disabled(self):
        canon = {"Book-A": ["The fighter injured her left wrist."]}
        t = resolve_request(
            "continue", "Book-A", defaults_enabled=False, canon=canon
        )
        self.assertEqual(t["active_rule_ids"], [])
        self.assertIn("left wrist", t["effective_request"])

    def test_story_canon_does_not_cross_book_boundary(self):
        canon = {
            "Book-A": ["Secret name: Mara"],
            "Book-B": ["Hero: Neth"],
        }
        t = resolve_request("continue", "Book-B", canon=canon)
        self.assertNotIn("Mara", t["effective_request"])
        self.assertIn("Neth", t["effective_request"])

    def test_opaque_carried_context_blocks_unverifiable_exclusion(self):
        with self.assertRaises(UnsafeCarriedContext):
            resolve_request(
                "continue", "Book-A",
                excluded_defaults={"SIM-RESTRAINT"},
                carried_context={"previous_provider_thread_id": "opaque"}
            )

    def test_operation_specific_rules(self):
        rule = Rule(
            "AUDIT", "Check chapter timeline.", operations=("audit",)
        )
        cont = resolve_request(
            "continue", "Book-A", custom_rules=[rule]
        )
        audit = resolve_request("audit", "Book-A", custom_rules=[rule])
        self.assertNotIn("AUDIT:", cont["effective_request"])
        self.assertIn("AUDIT:", audit["effective_request"])

    def test_detect_duplicate_rule_identifier(self):
        rule = Rule("SIM-VOICE", "A conflicting author rule.")
        with self.assertRaisesRegex(ValueError, "identifier collision"):
            resolve_request("rewrite", "Book-A", custom_rules=[rule])


if __name__ == "__main__":
    unittest.main(verbosity=2)

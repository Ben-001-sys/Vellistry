"""Positive and negative tests for the proposed agentic implementation control plane."""
from __future__ import annotations

import copy
import sys
import unittest
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
import check_implementation_readiness as dag  # noqa: E402
import agent_workflow as wf  # noqa: E402


class Stage5ReadinessTests(unittest.TestCase):
    def setUp(self):
        self.data = yaml.safe_load(dag.DAG.read_text(encoding="utf-8"))

    def test_owner_gated_acyclic_dag(self):
        order = dag.validate(copy.deepcopy(self.data))
        self.assertEqual(len(order), len(self.data["tasks"]))
        self.assertLess(order.index("VEL-DES-002"), order.index("VEL-IMP-001"))
        self.assertLess(order.index("VEL-IMP-003"), order.index("VEL-IMP-007"))
        self.assertLess(order.index("VEL-VAL-001"), order.index("VEL-PILOT-001"))

    def test_task_is_preparatory_not_implementation_permission(self):
        task = wf.check_task(ROOT / "docs/agent-workflow/tasks/VEL-TASK-0003.yaml")
        self.assertEqual(task["type"], "research-task")
        self.assertEqual(task["status"], "proposed")
        self.assertEqual(task["context_pack_id"], "VEL-CP-0003")
        self.assertNotIn("code", task["allowed_actions"])
        self.assertTrue(any("implementation code" in q for q in task["approval_required_for"]))
        self.assertTrue(any("DESIGN" in g["id"] for g in task["source_gaps"]))

    def test_cycle_must_fail(self):
        self.data["tasks"][0]["dependencies"] = ["VEL-RELEASE-001"]
        with self.assertRaisesRegex(ValueError, "cycle"):
            dag.validate(self.data)

    def test_missing_dependency_must_fail(self):
        self.data["tasks"][2]["dependencies"] = ["VEL-DES-999"]
        with self.assertRaisesRegex(ValueError, "unknown"):
            dag.validate(self.data)

    def test_duplicate_task_id_must_fail(self):
        self.data["tasks"][2]["id"] = "VEL-DES-001"
        with self.assertRaisesRegex(ValueError, "duplicate"):
            dag.validate(self.data)

    def test_feature_coding_cannot_be_enabled_without_owner_gates(self):
        task = next(t for t in self.data["tasks"] if t["id"] == "VEL-IMP-001")
        task["required_gates"] = []
        with self.assertRaisesRegex(ValueError, "blocked behind design"):
            dag.validate(self.data)

    def test_feature_coding_status_cannot_be_promoted_by_yaml(self):
        task = next(t for t in self.data["tasks"] if t["id"] == "VEL-IMP-003")
        task["status"] = "ready"
        with self.assertRaisesRegex(ValueError, "blocked behind design"):
            dag.validate(self.data)

    def test_owner_gate_cannot_be_marked_passed_by_agent(self):
        self.data["gates"][0]["state"] = "accepted"
        with self.assertRaisesRegex(ValueError, "pending"):
            dag.validate(self.data)

    def test_source_file_must_exist(self):
        self.data["authority"]["accepted"][0] = "docs/requirements/THIS-DOES-NOT-EXIST.md"
        with self.assertRaisesRegex(ValueError, "source absent"):
            dag.validate(self.data)

    def test_direct_release_or_paid_execution_forbidden(self):
        self.data["tasks"][0]["permitted_actions"].append("deploy")
        with self.assertRaisesRegex(ValueError, "forbidden autonomous"):
            dag.validate(self.data)

    def test_canonical_design_dependency_cannot_be_skipped(self):
        task = next(t for t in self.data["tasks"] if t["id"] == "VEL-IMP-001")
        task["dependencies"] = ["VEL-PREP-001"]
        with self.assertRaisesRegex(ValueError, "canonical design"):
            dag.validate(self.data)

    def test_private_pilot_and_release_both_require_owner_gates(self):
        task = next(t for t in self.data["tasks"] if t["id"] == "VEL-PILOT-001")
        task["required_gates"] = ["G_DESIGN"]
        with self.assertRaisesRegex(ValueError, "private pilot"):
            dag.validate(self.data)


if __name__ == "__main__":
    unittest.main()

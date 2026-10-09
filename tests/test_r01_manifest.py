"""Synthetic-fixture tests. Real original source is never committed to Git."""
import importlib.util
import tempfile
import unittest
from pathlib import Path

SPEC=importlib.util.spec_from_file_location("audit",Path(__file__).resolve().parents[1]/"scripts"/"r01_manifest.py")
mod=importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(mod)

class ManifestTests(unittest.TestCase):
    def test_complete_pair_and_clash_detection(self):
        path=Path(tempfile.mkstemp(suffix=".md")[1])
        try:
            lines=[]
            for prefix in mod.DOMAINS:
                for number in range(1,11):
                    code=f"{prefix}-{number:02d}"
                    lines.extend([f"### {code} — Original {code}","Source short statement."])
            lines.append("# BEGIN EXPANSION")
            for prefix in mod.DOMAINS:
                for number in range(1,11):
                    code=f"{prefix}-{number:02d}"
                    if prefix=="AR" or code in {"DS-09","PV-05","PV-10"}:
                        title=f"Different title for {code}"
                    else:title=f"ORIGINAL {code}"
                    lines.extend([f"# {code} — {title}","Expanded source text."])
            path.write_text("\n".join(lines),encoding="utf-8")
            out=mod.audit(path)
            self.assertEqual((out["unique_codes"],out["heading_count"],out["divergent_titles"]),(130,260,13))
            self.assertEqual(out["all_source_variants"][0]["code"],"AR-01")
            self.assertIn("unresolved",out["status"])
        finally:path.unlink(missing_ok=True)
    def test_missing_headings_are_not_silently_accepted(self):
        with tempfile.TemporaryDirectory() as d:
            p=Path(d)/"missing.md"
            p.write_text("### AR-04 — moral complexity\n",encoding="utf-8")
            with self.assertRaises(ValueError):mod.audit(p)

if __name__=="__main__":unittest.main()

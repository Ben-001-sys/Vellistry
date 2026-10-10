#!/usr/bin/env python3
"""Independent comparison: free Pandoc two-step DOCX roundtrip + prior Calibre loss.

Measurements, not a blanket lossless assertion. Uses synthetic source DOCX
constructed with python-docx and read back independently using python-docx.
"""
import json
import re
import subprocess
import tempfile
from pathlib import Path
from io import BytesIO
from docx import Document
from pair_wave02_docx_semantics import docx_export, fixture

def execute(argv):
    p=subprocess.run(argv,capture_output=True,text=True,check=False,timeout=120)
    if p.returncode!=0:
        raise RuntimeError(f"failed converter stage {argv[0]} (exit={p.returncode}): {p.stderr[-600:]}")
    return p

def extract(path):
    d=Document(path)
    paragraphs=[p.text for p in d.paragraphs]
    runs=[(r.text,bool(r.bold),bool(r.italic),bool(r.font.strike)) for p in d.paragraphs for r in p.runs]
    return {
        "paragraphs":paragraphs,
        "headings":[p.style.name for p in d.paragraphs if p.style.name.startswith("Heading")],
        "bold_texts":[text for text,b,i,s in runs if b],
        "italic_texts":[text for text,b,i,s in runs if i],
        "struck_texts":[text for text,b,i,s in runs if s],
    }
def run():
    with tempfile.TemporaryDirectory(prefix="vellistry-wave02-pandoc-") as tmp:
        root=Path(tmp)
        original=root/"source.docx"
        intermediate=root/"intermediate.md"
        returned=root/"returned.docx"
        original.write_bytes(docx_export(fixture()))
        ver=execute(["pandoc","--version"]).stdout.splitlines()[0]
        execute(["pandoc","-f","docx","-t","markdown","--wrap=none","-o",str(intermediate),str(original)])
        execute(["pandoc","-f","markdown","-t","docx","-o",str(returned),str(intermediate)])
        src=extract(original)
        dst=extract(returned)
        heading_ok=src["headings"]==dst["headings"]
        def contains_fragments(key):
            return all(any(text in rendered for rendered in dst[key]) for text in src[key] if text)
        metrics={
          "research":"pandoc-docx-markdown-docx-synthetic",
          "engine":ver,
          "source_heading_styles":src["headings"],
          "returned_heading_styles":dst["headings"],
          "heading_styles_preserved":heading_ok,
          "source_bold_texts":src["bold_texts"],
          "source_italic_texts":src["italic_texts"],
          "source_struck_texts":src["struck_texts"],
          "bold_semantics_retained":contains_fragments("bold_texts"),
          "italic_semantics_retained":contains_fragments("italic_texts"),
          "strike_semantics_retained":contains_fragments("struck_texts"),
          "original_paragraph_count":len(src["paragraphs"]),
          "returned_paragraph_count":len(dst["paragraphs"]),
          "all_nonempty_text_paragraphs_found":all(
             any(re.sub(r"\s+"," ",p).strip() in re.sub(r"\s+"," ",d).strip() for d in dst["paragraphs"])
             for p in src["paragraphs"] if p.strip()),
          "original_empty_paragraphs":sum(not x.strip() for x in src["paragraphs"]),
          "returned_empty_paragraphs":sum(not x.strip() for x in dst["paragraphs"]),
          "limitations":["No professional Word/LibreOffice render comparison",
           "Not a proof of arbitrary imported DOCX page breaks, custom styles, comments, footnotes",
           "Not a production Word import/export module, sandbox or malware scanner",
           "Does not assert glyph directionality, RTL layout, section/scene break fidelity",
           "Intermediate Markdown file can lose style metadata; all unsupported features require loss disclosure"],
        }
        print(json.dumps(metrics,ensure_ascii=False,indent=2))
        # A failed research candidate produces a visible script status; it
        # must not be misrepresented as equivalent to direct rich structured export.
        if not heading_ok:
            raise AssertionError("Pandoc DOCX round trip loses heading styles in this synthetic fixture")
        if not metrics["bold_semantics_retained"] or not metrics["italic_semantics_retained"]:
            raise AssertionError("Pandoc lost bold or italic formatting in this narrow fixture")
if __name__=="__main__":run()

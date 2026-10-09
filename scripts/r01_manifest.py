#!/usr/bin/env python3
"""R01 source audit. Requires the original owner-provided file; never changes it.
Output: source-provenance manifest (both variants), not an accepted default rules pack.
"""
import argparse, hashlib, json, re
from pathlib import Path

PATTERN=re.compile(r"^#{1,4}\s+((?:NI|PR|DS|EM|DG|CH|PV|RS|SC|PC|PL|CT|AR)-\d\d)\s+[—–-]\s+(.+?)\s*$")
DOMAINS=("NI","PR","DS","EM","DG","CH","PV","RS","SC","PC","PL","CT","AR")

def audit(path):
    data=Path(path).read_bytes()
    rows={}
    for line_number,text in enumerate(data.decode("utf-8").splitlines(),1):
        match=PATTERN.match(text)
        if match:
            code,title=match.groups()
            rows.setdefault(code,[]).append({
                "line":line_number,"title":title,
                "heading_sha256":hashlib.sha256(text.encode("utf-8")).hexdigest()
            })
    ids={f"{prefix}-{number:02d}" for prefix in DOMAINS for number in range(1,11)}
    if set(rows)!=ids or any(len(x)!=2 for x in rows.values()):
        raise ValueError("Source index or version counts differ from frozen source; inspect changes")
    variants=[{
        "code":code,"compact":rows[code][0],"expanded":rows[code][1],
        "case_insensitive_title_diff":rows[code][0]["title"].casefold()!=rows[code][1]["title"].casefold()
    } for code in sorted(ids)]
    differences=[x for x in variants if x["case_insensitive_title_diff"]]
    expected={"DS-09","PV-05","PV-10",*(f"AR-{n:02d}" for n in range(1,11))}
    if {x["code"] for x in differences}!=expected:
        raise ValueError("Mismatch with audited 13 source divergences; manual review required")
    return {"status":"source verified, author packaging choice unresolved",
        "file_name":Path(path).name,"raw_sha256":hashlib.sha256(data).hexdigest(),
        "raw_byte_length":len(data),"unique_codes":len(ids),"heading_count":len(variants)*2,
        "domain_counts":{d:sum(x.startswith(d+"-") for x in rows) for d in DOMAINS},
        "divergent_titles":len(differences),"divergences":differences,
        "all_source_variants":variants,
        "warning":"No variant promoted to canonical default; preserve composite source/variant/code identity."}

if __name__=="__main__":
    parser=argparse.ArgumentParser()
    parser.add_argument("source")
    parser.add_argument("--out",required=True)
    args=parser.parse_args()
    result=audit(args.source)
    Path(args.out).write_text(json.dumps(result,indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
    print(json.dumps({k:result[k] for k in ("status","raw_sha256","unique_codes","heading_count","divergent_titles")},indent=2))

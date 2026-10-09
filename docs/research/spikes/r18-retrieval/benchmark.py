#!/usr/bin/env python3
"""R18 research-only benchmark: Postgres FTS vs local dense vectors vs RRF.
No author manuscripts, paid APIs, external model inference services, or production schema.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import sys
import time
from dataclasses import dataclass
from importlib.metadata import version

import psycopg

MODEL = "BAAI/bge-small-en-v1.5"
SEED = 1809
K = 5
CANDIDATES = 20

FILLER = [
    "The rain reached the lower harbor before the bells. Talia counted the empty boats, "
    "then returned to the workshop, where brass fittings and fragments of sea charts "
    "lay beneath the lantern. A messenger argued about the missing cargo, but the keeper "
    "asked everyone to write down what they had witnessed rather than what they supposed. "
    "The evening ended with an inventory of ordinary objects and a quiet decision to wait.",
    "Beyond the black cedar trees the patrol found a ruined mile marker and a dry well. "
    "Corin described the route in exact steps while his apprentice copied the details onto "
    "a folded sheet. Neither traveler could determine why the signal tower remained dark. "
    "They crossed the meadow, repaired a broken cartwheel, and returned with ordinary notes "
    "about weather, terrain, voices heard, and the state of the road after dusk.",
    "The library occupied three floors above the winter market. Each morning the assistant "
    "sorted faded letters by date, checked the catalog, and tied the parcels with blue string. "
    "Visitors asked about maps, old quarrels, and deliveries from the northern villages. "
    "Most questions concerned commonplace errands. The clerk kept one record of where each "
    "page had been found, and another of what the page actually said, because those were different."
]

TARGETS = {
  7: ("injury", "Mara slipped beneath the falling gate during the battle at dawn. "
      "A sudden impact cracked the small bones near her sword hand, leaving her left wrist "
      "swollen and useless. She kept the injury from Elias, bound her arm in a spare scarf, "
      "and continued into the mountains without drawing her blade.", 7, 18),
  18: ("healing", "After weeks of treatment, Mara removed the splint. Her damaged left wrist "
       "had recovered enough for her to lift the heavy training sword without pain. "
       "The healer confirmed that the old fracture had knitted, but recommended another "
       "month without extended duels. Elias was present when the diagnosis was given.",18,18),
  33: ("secret", "Elias unfolded the courier's confession in the map room. "
       "The northern route shown on the royal chart was counterfeit, drawn to send refugees "
       "toward an ambush. He understood the forgery only after comparing the ink with "
       "the archivist's original survey. Mara was not in the room for this revelation.",33,33),
  48: ("key", "Mara hid the silver archive key inside a hollow stone at the base of the "
       "abandoned glass lighthouse. She marked the place with three chalk lines and "
       "told no one except Talia, who promised to return before the winter tides.",48,99),
  63: ("promise", "Kiran swore an oath at the old rope bridge: he would protect the youngest "
        "pilgrims until the crossing was safe, even if the council withdrew its guards. "
        "Talia witnessed the promise and recorded the wording in her field journal.",63,80),
  91: ("ledger", "The ledger recording the midnight shipments had been concealed beneath "
       "a loose stair in the lower observatory. A caretaker discovered the hidden account "
       "book when the third wooden tread gave way under his heel. Mara later copied "
       "the numbers into her notebook before leaving the building.",91,120)
}
TARGET_ID = {name: f"A-{chapter:03d}-00" for chapter,(name,*_) in TARGETS.items()}

@dataclass(frozen=True)
class Case:
    name: str
    prompt: str
    checkpoint: int
    pov: str
    relevant: tuple[str, ...]

CASES = (
 Case("injury_exact","Mara left wrist damaged during the battle",12,"mara",(TARGET_ID["injury"],)),
 Case("injury_paraphrase","When did the swordswoman lose the use of her fighting hand?",12,"mara",(TARGET_ID["injury"],)),
 Case("recovery_exact","How did Mara recover from the wrist fracture?",25,"mara",(TARGET_ID["healing"],)),
 Case("recovery_paraphrase","Who confirmed that the warrior could lift a blade again?",25,"mara",(TARGET_ID["healing"],)),
 Case("secret_exact","Where did Elias discover the forged royal map?",40,"elias",(TARGET_ID["secret"],)),
 Case("secret_paraphrase","How did the courier's deception about the northern road become clear?",40,"elias",(TARGET_ID["secret"],)),
 Case("key_exact","Where did Mara hide the silver archive key?",60,"mara",(TARGET_ID["key"],)),
 Case("key_paraphrase","Which landmark holds the object needed to open the records room?",60,"mara",(TARGET_ID["key"],)),
 Case("promise_exact","What promise did Kiran make at the rope bridge?",70,"mara",(TARGET_ID["promise"],)),
 Case("ledger_exact","Where was the midnight shipment ledger hidden?",110,"mara",(TARGET_ID["ledger"],)),
 Case("secret_before_reveal","Where did Elias learn the royal map was forged?",20,"elias",()),
 Case("unlearned_key","Where was the silver archive key hidden?",60,"elias",()),
)

def generate():
    """Synthetic corpus; no global novel context is imported."""
    docs=[]
    for chapter in range(1,161):
        for paragraph in range(12):
            text=FILLER[(chapter + paragraph) % len(FILLER)]
            text=f"Chapter {chapter}; passage {paragraph}. " + text
            name=None
            known=chapter+2
            if paragraph==0 and chapter in TARGETS:
                name,text,when,known=TARGETS[chapter]
                text=f"Chapter {chapter}. "+text
            docs.append(dict(id=f"A-{chapter:03d}-{paragraph:02d}",owner="alice",
              book="A",chapter=chapter,source_revision=1,current_revision=1,
              story_time=chapter,known_to_elias_at=known,approval="accepted",
              passage=text,label=name))
    # Distinct book and same-name exact-match bait: must never leak through ranking.
    for i in range(50):
        docs.append(dict(id=f"B-{i:03d}",owner="bob",book="B",chapter=i+1,
          source_revision=1,current_revision=1,story_time=i+1,
          known_to_elias_at=0,approval="accepted",
          passage=("Mara left wrist damaged during the battle; silver archive key "
                   "hidden at the glass lighthouse; royal map forged in the north. "
                   "This is another author's completely separate manuscript."),label="foreign"))
    # Exact-phrase decoys from future story time, rejected proposal and retired revision.
    docs += [
      dict(id="A-FUTURE",owner="alice",book="A",chapter=150,source_revision=1,current_revision=1,
        story_time=150,known_to_elias_at=150,approval="accepted",
        passage="Mara left wrist damaged during the battle; silver archive key hidden "
                "at glass lighthouse and forged royal map proof.",label="future"),
      dict(id="A-STALE",owner="alice",book="A",chapter=8,source_revision=1,current_revision=2,
        story_time=8,known_to_elias_at=0,approval="accepted",
        passage="Mara left wrist damaged during the battle; silver archive key hidden "
                "at glass lighthouse and forged royal map proof.",label="stale"),
      dict(id="A-REJECTED",owner="alice",book="A",chapter=10,source_revision=1,current_revision=1,
        story_time=10,known_to_elias_at=0,approval="rejected",
        passage="Mara left wrist damaged during the battle; silver archive key hidden "
                "at glass lighthouse and forged royal map proof.",label="rejected"),
      dict(id="A-POV-SECRET",owner="alice",book="A",chapter=34,source_revision=1,current_revision=1,
        story_time=34,known_to_elias_at=140,approval="accepted",
        passage="Where did Elias learn the royal map was forged? He had not heard this story.",
        label="unlearned"),
    ]
    words=sum(len(d["passage"].split()) for d in docs if d["book"]=="A" and d["approval"]=="accepted" and d["source_revision"]==d["current_revision"])
    assert words >= 100_000, words
    ids={d["id"] for d in docs}
    assert all(set(c.relevant)<=ids for c in CASES)
    return docs,words

SCHEMA = """
CREATE EXTENSION IF NOT EXISTS vector;
DROP SCHEMA IF EXISTS r18_retrieval CASCADE;
CREATE SCHEMA r18_retrieval;
CREATE TABLE r18_retrieval.passages(
 id text PRIMARY KEY, owner_id text NOT NULL, book_id text NOT NULL,
 chapter integer NOT NULL, source_revision integer NOT NULL,
 current_revision integer NOT NULL, story_time integer NOT NULL,
 known_to_elias_at integer NOT NULL, approval text NOT NULL,
 passage text NOT NULL,
 lexical tsvector GENERATED ALWAYS AS(to_tsvector('english',passage)) STORED,
 embedding vector(384)
);
CREATE INDEX passage_lexical_gin ON r18_retrieval.passages USING gin(lexical);
CREATE INDEX passage_scope ON r18_retrieval.passages(owner_id,book_id,story_time);
"""
FILTER = ("owner_id=%s AND book_id=%s AND story_time<=%s "
          "AND source_revision=current_revision AND approval='accepted' "
          "AND (%s <> 'elias' OR known_to_elias_at<=%s)")

def vec_str(v):
    return "["+",".join(f"{float(x):.7f}" for x in v)+"]"

def insert(conn,docs,vectors):
    with conn.cursor() as cur:
        cur.execute(SCHEMA)
        with cur.copy("""COPY r18_retrieval.passages
          (id,owner_id,book_id,chapter,source_revision,current_revision,story_time,
           known_to_elias_at,approval,passage,embedding) FROM STDIN""") as writer:
            for d,embedding in zip(docs,vectors):
                writer.write_row((d["id"],d["owner"],d["book"],d["chapter"],
                  d["source_revision"],d["current_revision"],d["story_time"],
                  d["known_to_elias_at"],d["approval"],d["passage"],
                  vec_str(embedding) if embedding is not None else None))
        cur.execute("ANALYZE r18_retrieval.passages")
    conn.commit()

def lexical(conn,c):
    with conn.cursor() as cur:
        cur.execute(f"""SELECT id FROM r18_retrieval.passages
          WHERE {FILTER}
          AND lexical @@ websearch_to_tsquery('english',%s)
          ORDER BY ts_rank_cd(lexical,websearch_to_tsquery('english',%s)) DESC,id
          LIMIT %s""",
          ("alice","A",c.checkpoint,c.pov,c.checkpoint,c.prompt,c.prompt,CANDIDATES))
        return [r[0] for r in cur.fetchall()]

def lexical_or(conn,c):
    # A stronger unweighted lexical baseline: disjunction of content-bearing words.
    # The query parser still strips stop words and normalizes terms; no handpicked synonyms.
    stop={"the","a","an","of","at","in","from","with","to","did","when","where",
          "what","how","she","he","was","were","had","and","that","which","who",
          "her","his","is","do","does","could","would","for","on","into","again"}
    terms=[term for term in re.findall(r"[A-Za-z0-9]+",c.prompt.lower()) if term not in stop]
    query=" OR ".join(terms)
    with conn.cursor() as cur:
        cur.execute(f"""SELECT id FROM r18_retrieval.passages WHERE {FILTER}
          AND lexical @@ websearch_to_tsquery('english',%s)
          ORDER BY ts_rank_cd(lexical,websearch_to_tsquery('english',%s)) DESC,id
          LIMIT %s""",
          ("alice","A",c.checkpoint,c.pov,c.checkpoint,query,query,CANDIDATES))
        return [r[0] for r in cur.fetchall()]

def dense(conn,c,v):
    with conn.cursor() as cur:
        cur.execute(f"""SELECT id FROM r18_retrieval.passages
          WHERE {FILTER} AND embedding IS NOT NULL
          ORDER BY embedding <=> %s::vector, id LIMIT %s""",
          ("alice","A",c.checkpoint,c.pov,c.checkpoint,vec_str(v),CANDIDATES))
        return [r[0] for r in cur.fetchall()]

def fuse(a,b):
    scores={}
    for ranked in (a,b):
        for rank,doc in enumerate(ranked,1):
            scores[doc]=scores.get(doc,0)+1/(60+rank)
    return sorted(scores,key=lambda k:(-scores[k],k))

def validate(conn,case,ranked):
    assert len(ranked)==len(set(ranked)),(case.name,"duplicate hits")
    if not ranked:return
    with conn.cursor() as cur:
        cur.execute("SELECT id,owner_id,book_id,story_time,source_revision,current_revision,known_to_elias_at,approval FROM r18_retrieval.passages WHERE id=ANY(%s)",(ranked,))
        rows=cur.fetchall()
    assert len(rows)==len(ranked),(case.name,"unknown citation")
    for p in rows:
        (id,owner,book,story_time,rev,latest,known,approval)=p
        assert owner=="alice" and book=="A", (case.name,"cross-book disclosure",id)
        assert story_time<=case.checkpoint, (case.name,"future story leakage",id)
        assert rev==latest, (case.name,"stale revision leak",id)
        assert approval=="accepted", (case.name,"rejected AI leak",id)
        assert case.pov!="elias" or known<=case.checkpoint,(case.name,"POV knowledge leak",id)
    assert not any(p in ranked for p in ("A-FUTURE","A-STALE","A-REJECTED"))
    if case.pov=="elias" and case.checkpoint<140:
        assert "A-POV-SECRET" not in ranked

def evaluate(method,rankings):
    pos=[c for c in CASES if c.relevant]
    hits=sum(bool(set(rankings[c.name][:K])&set(c.relevant)) for c in pos)
    rr=[]
    for c in pos:
        first=next((rank for rank,id in enumerate(rankings[c.name][:K],1) if id in c.relevant),None)
        rr.append(1/first if first else 0)
    return {"recall_at_5":round(hits/len(pos),4),"mrr_at_5":round(sum(rr)/len(rr),4),
      "hits":hits,"queries_with_ground_truth":len(pos)}

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument("--mode",choices=("lexical","full"),default="full")
    ap.add_argument("--output",default="retrieval-results.json")
    args=ap.parse_args()
    docs,words=generate()
    model=None
    vectors=[None]*len(docs)
    qvectors={}
    embedding_seconds=0
    if args.mode=="full":
        from fastembed import TextEmbedding
        t0=time.monotonic()
        model=TextEmbedding(model_name=MODEL,threads=2)
        vectors=list(model.embed([d["passage"] for d in docs],batch_size=64))
        qvec=list(model.embed([c.prompt for c in CASES],batch_size=12))
        assert len(vectors)==len(docs) and all(len(v)==384 for v in vectors)
        qvectors={c.name:v for c,v in zip(CASES,qvec)}
        embedding_seconds=round(time.monotonic()-t0,2)
    conn=psycopg.connect(os.environ.get("DATABASE_URL","postgresql://vellistry:synthetic-only@localhost:5432/vellistry_retrieval"))
    start=time.monotonic()
    insert(conn,docs,vectors)
    index_seconds=round(time.monotonic()-start,3)
    rankings={"lexical":{},"lexical_or":{}}
    if args.mode=="full":rankings.update({"vector":{},"hybrid_rrf":{},"hybrid_or_rrf":{}})
    timings={key:[] for key in rankings}
    for case in CASES:
        t=time.monotonic()
        a=lexical(conn,case)
        timings["lexical"].append(1000*(time.monotonic()-t))
        validate(conn,case,a)
        rankings["lexical"][case.name]=a
        t=time.monotonic()
        aor=lexical_or(conn,case)
        timings["lexical_or"].append(1000*(time.monotonic()-t))
        validate(conn,case,aor)
        rankings["lexical_or"][case.name]=aor
        if args.mode=="full":
            t=time.monotonic()
            b=dense(conn,case,qvectors[case.name])
            timings["vector"].append(1000*(time.monotonic()-t))
            validate(conn,case,b)
            rankings["vector"][case.name]=b
            t=time.monotonic()
            h=fuse(a,b)
            timings["hybrid_rrf"].append(1000*(time.monotonic()-t))
            validate(conn,case,h)
            rankings["hybrid_rrf"][case.name]=h
            t=time.monotonic()
            h_or=fuse(aor,b)
            timings["hybrid_or_rrf"].append(1000*(time.monotonic()-t))
            validate(conn,case,h_or)
            rankings["hybrid_or_rrf"][case.name]=h_or
    from statistics import median
    def percentile(vals,p):
        sorted_vals=sorted(vals)
        return round(sorted_vals[min(len(vals)-1,int((len(vals)-1)*p))],2)
    summary={
      "experiment":"R18-retrieval-v0.1","mode":args.mode,"seed":SEED,
      "word_count_A":words,"passage_count":len(docs),
      "query_count":len(CASES),"ranking_candidate_pool":CANDIDATES,
      "model": MODEL if model is not None else None,
      "fastembed_version":version("fastembed") if model is not None else None,
      "psycopg_version":version("psycopg"),
      "pg_version":conn.execute("SHOW server_version").fetchone()[0],
      "pgvector_version":conn.execute("SELECT extversion FROM pg_extension WHERE extname='vector'").fetchone()[0],
      "embedding_seconds":embedding_seconds,"db_insert_seconds":index_seconds,
      "metrics":{key:evaluate(key,rankings[key]) for key in rankings},
      "query_latency_ms":{key:{"median":round(median(vals),2),"p95":percentile(vals,0.95)} for key,vals in timings.items()},
      "case_results":[{"name":c.name,"checkpoint":c.checkpoint,"pov":c.pov,
        "ground_truth":list(c.relevant),**{key:rankings[key][c.name][:K] for key in rankings}}
        for c in CASES],
      "safety_invariants":"PASS: all returned IDs authorized, nonstale, time/POV eligible, approved",
      "limitations":"Designed synthetic fiction and hand-authored relevance labels; no real novel quality generalization",
    }
    conn.close()
    with open(args.output,"w",encoding="utf-8") as f:json.dump(summary,f,indent=2)
    print("R18 RETRIEVAL BENCHMARK",flush=True)
    for key in ("mode","word_count_A","passage_count","query_count","pg_version","pgvector_version","embedding_seconds","db_insert_seconds"):
        print(key,summary[key],flush=True)
    for key,value in summary["metrics"].items():
        print("RESULT",key,json.dumps(value),flush=True)
    print("SAFETY PASS across",len(CASES),"queries and",len(rankings),"methods",flush=True)
    print("EVIDENCE FILE",args.output,flush=True)

if __name__=="__main__":
    main()

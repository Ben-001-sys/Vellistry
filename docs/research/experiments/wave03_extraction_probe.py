"""R07 no-model deterministic extractor quality *characterization*.

Candidate generator intentionally simplistic to measure false positives and
false negatives from surface matching on invented fiction sentences. Scores
are a reproducible synthetic baseline, NOT an evaluation of an AI provider.
Every output is noncanonical/pending until separately accepted by the author.
"""
import re
from dataclasses import dataclass

@dataclass(frozen=True)
class Example:
    id:str
    text:str
    gold_change:bool
    reason:str
    story_order:int|None=1
    accepted:bool=True

CASES=(
 Example("01","Mara injured her wrist.",True,"factual event"),
 Example("02","Elias learned the cipher.",True,"explicit new knowledge"),
 Example("03","The courier returned.",True,"thread resolution"),
 Example("04","Mara sprained her wrist after the battle.",True,"explicit injury"),
 Example("05","Elias learned the cipher at dusk.",True,"knowledge after checkpoint"),
 Example("06","The courier returned before sunrise.",True,"resolved thread"),
 Example("07","Mara's wrist was badly sprained.",True,"paraphrased injury"),
 Example("08","Elias finally understood the cipher.",True,"paraphrased knowledge"),
 Example("09","The missing courier came home.",True,"paraphrased return"),
 Example("10","Her wrist was broken: Mara hid the pain.",True,"nonlocal reference"),
 Example("11","Mara never injured her wrist.",False,"negation"),
 Example("12","What if Mara injured her wrist?",False,"hypothetical"),
 Example("13","They claimed Mara injured her wrist.",False,"hearsay"),
 Example("14","Mara said, 'Elias learned the cipher.'",False,"dialogue testimony"),
 Example("15","If Elias learned the cipher, he would flee.",False,"counterfactual"),
 Example("16","The courier returned, according to a rumor.",False,"uncertain report"),
 Example("17","The courier returned in her dream.",False,"dream not literal canon"),
 Example("18","Mara injured her wrist.",False,"unaccepted AI text",accepted=False),
 Example("19","Elias learned the cipher.",False,"unaccepted AI text",accepted=False),
 Example("20","The courier returned.",False,"unaccepted AI text",accepted=False),
 Example("21","Mara injured her wrist.",False,"unplaced scene",story_order=None),
 Example("22","Mara's wrist was intact.",False,"negative outcome"),
 Example("23","The courier might return.",False,"future possibility"),
 Example("24","Elias did not know the cipher.",False,"lack of knowledge"),
)

RULES=(
 ("mara","condition","wrist injured",re.compile(r"\bMara (?:injured|sprained) her wrist\b",re.I)),
 ("elias","knows_cipher","yes",re.compile(r"\bElias learned the cipher\b",re.I)),
 ("courier","status","returned",re.compile(r"\bThe courier returned\b",re.I))
)

def extract_candidates(text):
    """Naive extraction, no factuality/epistemic/acceptance gate."""
    out=[]
    for entity,field,value,pattern in RULES:
        for match in pattern.finditer(text):
            out.append({"entity":entity,"field":field,"value":value,
                        "quote":match.group(),"status":"pending_unapproved"})
    return out

def study():
    tp=fp=tn=fn=0
    errors=[]
    rows=[]
    for example in CASES:
        proposed=extract_candidates(example.text)
        predicted=bool(proposed)
        if example.gold_change and predicted:tp+=1;type_="TP"
        elif example.gold_change:fn+=1;type_="FN"
        elif predicted:fp+=1;type_="FP"
        else:tn+=1;type_="TN"
        item={"id":example.id,"gold":example.gold_change,"proposed":predicted,
              "classification":type_,"reason":example.reason,
              "accepted":example.accepted,"story_time_known":example.story_order is not None}
        rows.append(item)
        if type_ in ("FN","FP"):errors.append(item)
    return {"sample_size":len(CASES),"TP":tp,"FP":fp,"TN":tn,"FN":fn,
            "precision":round(tp/(tp+fp),4) if tp+fp else None,
            "recall":round(tp/(tp+fn),4) if tp+fn else None,
            "errors":errors,"per_case":rows,
            "all_outputs":"pending_unapproved",
            "not_measured":["LLM extraction precision","real author correction time",
             "model hallucination rate","real fiction corpus representativeness",
             "inter-annotator agreement","multilingual model factuality"]}

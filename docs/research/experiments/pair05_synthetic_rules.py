"""R06 synthetic guidance assembly: NOT Vellistry's original frozen fiction rules.

This simulates source references, scope precedence, excluded disabled rules,
user exceptions and cache invalidation without claiming source certification.
"""
from dataclasses import dataclass
from hashlib import sha256
import json


class RuleError(ValueError):
    pass


@dataclass(frozen=True)
class SyntheticRule:
    id: str
    wording: str
    enabled_by_default: bool


RULES = (
    SyntheticRule("SYN-REPETITION", "Minimize incidental repetition", True),
    SyntheticRule("SYN-VOICE", "Honor distinctive voice", True),
    SyntheticRule("SYN-PACING", "Keep scene pacing grounded", True),
)


def assemble(*, book_id, scene_id, selected_text, canon, overrides, exceptions=(),
             custom=(), max_characters=5000, corpus_source="SYNTHETIC_GUIDANCE_ONLY"):
    if corpus_source != "SYNTHETIC_GUIDANCE_ONLY":
        raise RuleError("Only explicitly simulated guidance accepted: R01 not certified")
    if not book_id or not scene_id or not selected_text:
        raise RuleError("Missing required scope and scene text")
    if not isinstance(canon, tuple) or not isinstance(exceptions, tuple) or not isinstance(custom, tuple):
        raise RuleError("Context must be explicitly verified and selected")
    if not isinstance(overrides, dict):
        raise RuleError("Overrides must be explicit maps")
    ids = {r.id for r in RULES}
    enabled = {}
    exclusions = []
    for rule in RULES:
        state = rule.enabled_by_default
        for scope in ("workspace", "book", "chapter", "scene"):
            choices = overrides.get(scope, {})
            if not isinstance(choices, dict):
                raise RuleError("Invalid scope")
            for k, v in choices.items():
                if k not in ids or type(v) is not bool:
                    raise RuleError("Unknown or nonboolean synthetic rule override")
            if rule.id in choices:
                state = choices[rule.id]
        if state:
            enabled[rule.id] = rule.wording
        else:
            exclusions.append(rule.id)
    if not all(isinstance(x, str) and x for x in [*canon, *exceptions, *custom]):
        raise RuleError("Invalid selected context")
    # Treat exceptions as first-class author intent, not as an excuse to
    # discard all enabled writing rules or objective story canon.
    payload = {
        "book_id": book_id,
        "scene_id": scene_id,
        "selected_manuscript_untrusted": selected_text,
        "approved_canon": list(canon),
        "active_synthetic_guidance": enabled,
        "author_exceptions": list(exceptions),
        "active_custom_guidance": list(custom),
    }
    serialized = json.dumps(payload, sort_keys=True, ensure_ascii=False)
    if not isinstance(max_characters, int) or len(serialized) > max_characters:
        raise RuleError("Context exceeds bound; no silent truncation")
    return {
        "effective_provider_request": payload,
        "excluded_rule_ids": exclusions,
        "preview_is_complete": True,
        "source_status": "SIMULATED; NOT R01 CERTIFIED",
        "cache_key": sha256(serialized.encode("utf8")).hexdigest(),
        "model_response": None,
    }

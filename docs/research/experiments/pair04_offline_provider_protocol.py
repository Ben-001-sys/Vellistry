"""R08/R21 research-only AI request boundary. No network/client, no keys, no model.

This checks preflight, disclosure, request-size and simulated provider failure
transitions. It does NOT select or connect a real inference provider.
"""
from __future__ import annotations
from dataclasses import dataclass, replace
from hashlib import sha256
import json


class Blocked(ValueError):
    pass


@dataclass(frozen=True)
class ProviderPolicy:
    model_id: str
    provider_id: str
    privacy_reviewed: bool
    consent: bool
    max_input_chars: int = 3000
    max_output_tokens: int = 350
    allow_remote_manuscript: bool = False
    usage_usd_ceiling: float = 0.0


def make_preview(*, book_id, selected_text, approved_facts, author_goal, policy, author_rules=()):
    if not isinstance(policy, ProviderPolicy):
        raise Blocked("explicit provider policy required")
    if not all(isinstance(s, str) and s.strip() for s in
               (book_id, selected_text, author_goal, policy.model_id, policy.provider_id)):
        raise Blocked("missing selected text or pinned provider/model identity")
    if not policy.privacy_reviewed or not policy.consent:
        raise Blocked("no explicit disclosure/privacy review and consent")
    if not policy.allow_remote_manuscript:
        raise Blocked("no remote manuscript transfer authorized")
    if policy.usage_usd_ceiling != 0.0:
        raise Blocked("zero-paid research prohibits any spending allowance")
    if not isinstance(approved_facts, tuple) or not isinstance(author_rules, tuple):
        raise Blocked("only verified, explicitly selected immutable context may be supplied")
    parts = [selected_text, author_goal, *approved_facts, *author_rules]
    if not all(isinstance(x, str) and x for x in parts):
        raise Blocked("invalid or empty submitted context part")
    if not isinstance(policy.max_input_chars, int) or policy.max_input_chars < 1:
        raise Blocked("invalid input bound")
    if not isinstance(policy.max_output_tokens, int) or not 1 <= policy.max_output_tokens <= 1024:
        raise Blocked("invalid output bound")
    content = {
        "book_id": book_id,
        "task": author_goal,
        "selected_manuscript": selected_text,
        "approved_facts": list(approved_facts),
        "author_rules": list(author_rules),
    }
    packed = json.dumps(content, ensure_ascii=False, sort_keys=True)
    if len(packed) > policy.max_input_chars:
        raise Blocked("context too large: author choice required, do not silently truncate")
    return {
        "provider_id": policy.provider_id,
        "model_id": policy.model_id,
        "task": author_goal,
        "input_characters": len(packed),       # not provider tokens
        "context_sha256": sha256(packed.encode("utf8")).hexdigest(),
        "included_parts": ("selected_manuscript", "approved_facts", "author_rules"),
        "omitted": ("other_book_chapters", "unapproved_profile_proposals", "unselected_notes"),
        "output_token_ceiling": policy.max_output_tokens,
        "privacy_warning": "Provider terms must be checked again before real requests",
        "submitted_content": content,          # local author-facing preview only; never log it
        "remote_request_permitted": True,      # policy gate, NO network code anywhere
        "actual_model_call": False,
    }


def simulate_provider(preview, outcome, *, canceled=False):
    """Deterministic event handling for a fake response, not a model API client."""
    if not preview.get("remote_request_permitted") or preview.get("actual_model_call"):
        raise Blocked("unsupported preview")
    valid = {"ok", "unauthorized_401", "forbidden_403", "rate_limited_429",
             "timeout", "stream_interrupted", "refused", "malformed_output"}
    if outcome not in valid:
        raise Blocked("unrecognized provider event")
    if canceled:
        return {"status": "canceled", "proposal": None, "manuscript_changed": False}
    if outcome == "ok":
        return {"status": "review_only", "proposal": "SYNTHETIC_PLACEHOLDER_NOT_MODEL_TEXT",
                "manuscript_changed": False}
    return {"status": "failed_" + outcome, "proposal": None,
            "manuscript_changed": False}


def redacted_log(preview, result):
    """Metadata only, not even preview contents, key or model output."""
    return {
        "provider_id": preview["provider_id"],
        "model_id": preview["model_id"],
        "context_sha256": preview["context_sha256"],
        "input_characters": preview["input_characters"],
        "result_status": result["status"],
        "manuscript_changed": False,
    }

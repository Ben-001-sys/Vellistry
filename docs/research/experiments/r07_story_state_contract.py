"""R07 disposable, deterministic story-state contract.

This is NOT an extractor, database model, authorization service or Vellistry runtime.
All story-change candidates are supplied by tests/manual fixtures, never inferred
from prose by a model. Python stdlib only. Synthetic manuscript data only.
"""
from dataclasses import dataclass, field
from typing import Optional


class ContractError(ValueError):
    pass


@dataclass(frozen=True)
class Scene:
    book: str
    scene: str
    revision: int
    text: str
    story_order: Optional[int]
    discourse_order: int
    accepted: bool
    origin: str  # human or ai; not itself evidence of accepted prose


@dataclass
class Profile:
    book: str
    key: str
    kind: str  # character or thread in the narrow MVP
    name: str
    baseline: dict = field(default_factory=dict)


@dataclass
class Proposal:
    id: str
    book: str
    entity: str
    field: str
    value: str
    scene: str
    revision: int
    quote: str
    story_order: Optional[int]
    epistemic: str  # asserted, claimed, uncertain
    status: str = "pending"


@dataclass(frozen=True)
class ApprovedEvent:
    proposal: Optional[str]
    book: str
    entity: str
    field: str
    value: str
    story_order: int
    scene: Optional[str]
    revision: Optional[int]
    epistemic: str
    actor: str
    order_approved: int


class StoryContract:
    def __init__(self):
        self.scenes = {}
        self.profiles = {}
        self.proposals = {}
        self.events = []
        self._serial = 0

    def _entity(self, book, entity):
        item = self.profiles.get((book, entity))
        if not item:
            raise ContractError("Unknown or out-of-book entity")
        return item

    def create_profile(self, book, key, kind, name, baseline=None):
        if kind not in ("character", "thread"):
            raise ContractError("Only character/thread kinds tested")
        if (book, key) in self.profiles or not book or not key:
            raise ContractError("Duplicate/invalid profile")
        self.profiles[(book, key)] = Profile(book, key, kind, name, dict(baseline or {}))

    def put_scene(self, book, scene, text, *, story_order, discourse_order, origin="human", accepted=True):
        if origin not in ("human", "ai"):
            raise ContractError("Unknown manuscript origin")
        if story_order is not None and not isinstance(story_order, int):
            raise ContractError("Story time is author-controlled or unknown")
        if not isinstance(discourse_order, int):
            raise ContractError("Discourse order is explicit")
        previous = self.scenes.get((book, scene))
        revision = (previous.revision + 1) if previous else 1
        self.scenes[(book, scene)] = Scene(
            book, scene, revision, text, story_order, discourse_order, accepted, origin
        )
        # Explicitly do NOT remove history or silently promote any candidate.
        return revision

    def accept_manuscript(self, book, scene, revision):
        source = self.scenes.get((book, scene))
        if source is None or source.revision != revision:
            raise ContractError("Cannot accept missing/stale manuscript")
        if source.accepted:
            return
        self.scenes[(book, scene)] = Scene(
            source.book, source.scene, source.revision, source.text,
            source.story_order, source.discourse_order, True, source.origin,
        )
        # Accepting prose does NOT approve proposed profile changes.

    def propose(self, id, book, entity, field, value, scene, quote, *, epistemic="asserted"):
        self._entity(book, entity)
        src = self.scenes.get((book, scene))
        if src is None or src.book != book or not quote or quote not in src.text:
            raise ContractError("Missing/unverifiable source evidence")
        if id in self.proposals:
            raise ContractError("Duplicate candidate ID")
        if epistemic not in ("asserted", "claimed", "uncertain"):
            raise ContractError("Invalid epistemic status")
        self.proposals[id] = Proposal(
            id, book, entity, field, value, scene, src.revision, quote, src.story_order, epistemic
        )
        return id

    def revise_candidate(self, id, *, value):
        p = self.proposals[id]
        if p.status != "pending":
            raise ContractError("Not pending")
        if not value:
            raise ContractError("Empty revised fact")
        p.value = value

    def dismiss(self, id):
        p = self.proposals[id]
        if p.status != "pending":
            raise ContractError("Only pending candidate can be dismissed")
        p.status = "dismissed"

    def approve(self, id):
        p = self.proposals[id]
        if p.status != "pending":
            raise ContractError("Candidate no longer pending")
        src = self.scenes.get((p.book, p.scene))
        if src is None or src.revision != p.revision or p.quote not in src.text:
            raise ContractError("Source changed: review against current revision")
        if not src.accepted:
            raise ContractError("Unaccepted AI prose is not canonical")
        if p.story_order is None:
            raise ContractError("Unknown story time must be clarified")
        self._serial += 1
        ev = ApprovedEvent(
            id, p.book, p.entity, p.field, p.value, p.story_order,
            p.scene, p.revision, p.epistemic, "author", self._serial
        )
        self.events.append(ev)
        p.status = "approved"
        return ev

    def manual_update(self, book, entity, field, value, *, story_order):
        self._entity(book, entity)
        if not isinstance(story_order, int):
            raise ContractError("Manual state change needs story checkpoint")
        self._serial += 1
        ev = ApprovedEvent(
            None, book, entity, field, value, story_order,
            None, None, "asserted", "author_manual", self._serial
        )
        self.events.append(ev)
        return ev

    def event_valid(self, event):
        if event.actor == "author_manual":
            return True
        src = self.scenes.get((event.book, event.scene))
        return bool(src and src.revision == event.revision and src.accepted)

    def state_at(self, book, checkpoint):
        """Returns approved, source-current objective fields only.

        Claimed/uncertain evidence stays visible as separate reviewable claims;
        it never silently changes objective profile state.
        """
        if not isinstance(checkpoint, int):
            raise ContractError("Unknown checkpoint; must abstain")
        result = {
            key: {
                "kind": p.kind,
                "name": p.name,
                "facts": dict(p.baseline),
                "claims": [],
            }
            for (owner, key), p in self.profiles.items() if owner == book
        }
        events = sorted(
            (e for e in self.events if e.book == book and e.story_order <= checkpoint and self.event_valid(e)),
            key=lambda e: (e.story_order, e.order_approved),
        )
        for e in events:
            if e.epistemic != "asserted":
                result[e.entity]["claims"].append((e.field, e.value, e.epistemic))
            else:
                result[e.entity]["facts"][e.field] = e.value
        return result

    def history(self, book, entity):
        self._entity(book, entity)
        return [
            {"event": e, "current_source": self.event_valid(e)}
            for e in self.events if e.book == book and e.entity == entity
        ]

    def pending(self, book):
        return [
            {"proposal": p, "source_current": bool(
                (s := self.scenes.get((p.book, p.scene))) and s.revision == p.revision
            )}
            for p in self.proposals.values() if p.book == book and p.status == "pending"
        ]

# Alternative research package: Vellistry Pairs 04 + 05

- `VELLISTRY_PAIRS_04_05_INDEPENDENT_ALTERNATIVES_2026-10-09.md` — comparison of alternative approaches with source links, recommended experiments, risks and **NOT_RUN** labels.
- `R19_SYNTHETIC_FICTION_CORPUS_v0.1.jsonl` — 14 original synthetic fiction prompt/evaluation cases.
- `R10_REVERSIBLE_EDIT_CASES_v0.1.jsonl` — 15 negative/positive editor safety test specifications; all **NOT_RUN**.
- `validate_fixtures.py` — checks research-fixture completeness and coverage. Does not verify model output or rich-text editor correctness.
- `make_fixtures.py` — reproducibly regenerates the synthetic cases, with no external requests.

To regenerate and validate:

```bash
python make_fixtures.py
python validate_fixtures.py
```

**Research-only:** The canonical Vellistry plan allows no more than two active research tracks and requires previous pairs to close first. This package advances independent desk research only, not the project's official pair status. The original chat's decisions take priority.

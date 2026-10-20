# Exact source excerpt

Source scripts/agent_workflow.py at8963ace5b8a1d5f08cb55258c82b51e06cc5fb27, lines75-90; full hash/snapshot in SOURCE-MAP.

    missing = sorted(fields - set(data))
    if missing:
        raise ValueError(f"{path}: missing required fields {', '.join(missing)}")


def safe_path(name: str) -> str:
    if not isinstance(name, str) or not name or "\\" in name:
        raise ValueError(f"unsafe repository path: {name!r}")
    p = PurePosixPath(name)
    if p.is_absolute() or ".." in p.parts or ".git" in p.parts or str(p) != name:
        raise ValueError(f"unsafe repository path: {name!r}")
    if any(part.startswith(".env") or part.lower() in {"secrets", "credentials"} for part in p.parts):
        raise ValueError(f"excluded secret-like repository path: {name!r}")
    return name



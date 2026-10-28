# Preflight facts and bounded hypothesis

FACT: root H:/cursor/cursor/Vellistry is feat/vel-imp-001-library-isolation at78f80bb33a27db362202b81d04db05919fd77a52, dirty CURRENT-STATE/next-env and owner untracked reports. Route account/mfa absent. Active node30676 launches root next16.4.0; root tsx watch process336/26652 also active. Current origin/main5e3aeec95a34c0a9564067632655a0549a824c9d has route and Next16.4.1. No owner files/environment contents read or changed.

INTERPRETATION: MFA404 is explained by wrong stale running worktree, not route implementation. AuthModule provides/exports guard/service and AppModule imports it, registers BooksService/controller. Constructors rely on emitDecoratorMetadata, while tsx/esbuild may omit it; must experimentally confirm before correction. Guard/service/controller all need verified wiring, not merely guard symptom masking.

PROPOSAL: explicit @Inject concrete class tokens in three constructors if reproduced; offline real Nest HTTP synthetic regressions, compiled/tsx comparison, mandatory existing Library command extension. No Auth verification-policy change. Preserve dirty root; launch current worktree safely without obtaining credentials or making hosted requests.

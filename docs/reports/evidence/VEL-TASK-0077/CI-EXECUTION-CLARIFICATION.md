# Owner clarification of existing CI execution

Owner execution clarification relayed by Codex,3November2026: the owner explicitly answered “Allow existing disposable CI fixtures only” to the question about the unchanged classifier selecting full application/security CI. This permits only the existing GitHub-hosted isolated loopback synthetic Auth users/sessions and fixture SQL used by the unchanged mandatory pipeline. No hosted project, agent credential/token access, new runner, new SQL, source-path expansion, application/security change or merge is authorized.

This clarifies the Task0077 instruction to run applicable existing security CI; it does not change its implementation allowlist, add a new executable, or rewrite CP0077. Historical source/pack inputs remain unchanged. The normal disposable CI fixtures are not the existing owner-controlled vellistry-dev fixtures and cannot satisfy G1 or create target observations. All3target fixture confirmations remain UNKNOWN, G1-G4/hosted execution BLOCKED, R01-R08 NOT_RUN and N12/historical EPERM BLOCKED. Separate owner merge approval remains required.

Evidence: https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6591874964

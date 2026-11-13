# Actual unchanged recovery failure

Run https://github.com/Ben-001-sys/Vellistry/actions/runs/42777271966 , job129698661873, Task0077head34048b22473ae0b39dcfbefdedfc19b6f3c102e4. Original full log SHA256 749e49c98718ce961e23d4b192931a6ce3d4771beb35ec9f192a1fcfaa9ac156. Bounded non-secret excerpt:

```text
2026-11-10T07:43:57.1306593Z Unpacking postgresql-client (18+290ubuntu1) ...
2026-11-10T07:44:01.5390935Z test_11_restore_clean_database_is_content_identical (test_pair06_postgres_operations.RealPostgresTests.test_11_restore_clean_database_is_content_identical) ... ERROR
2026-11-10T07:44:01.7071378Z ERROR: test_11_restore_clean_database_is_content_identical (test_pair06_postgres_operations.RealPostgresTests.test_11_restore_clean_database_is_content_identical)
2026-11-10T07:44:01.7082031Z   File "/home/runner/work/Vellistry/Vellistry/docs/research/experiments/test_pair06_postgres_operations.py", line 123, in test_11_restore_clean_database_is_content_identical
2026-11-10T07:44:01.7107063Z RuntimeError: PostgreSQL command failed (no confidential output): pg_restore / 1
2026-11-10T07:44:01.7107937Z Ran 12 tests in 2.661s
2026-11-10T07:44:01.7108170Z FAILED (errors=1)
2026-11-10T07:44:01.9636757Z  waiting for server to start....2026-11-10 07:43:44.196 UTC [48] LOG:  starting PostgreSQL 16.15 (Debian 16.15-1.pgdg13+2) on x86_64-pc-linux-gnu, compiled by gcc (Debian 14.2.0-19) 14.2.0, 64-bit
2026-11-10T07:44:01.9643001Z  2026-11-10 07:43:44.502 UTC [1] LOG:  starting PostgreSQL 16.15 (Debian 16.15-1.pgdg13+2) on x86_64-pc-linux-gnu, compiled by gcc (Debian 14.2.0-19) 14.2.0, 64-bit
2026-11-10T07:44:01.9670459Z  2026-11-10 07:44:01.517 UTC [149] ERROR:  unrecognized configuration parameter "transaction_timeout"
2026-11-10T07:44:01.9671137Z  2026-11-10 07:44:01.517 UTC [149] STATEMENT:  SET transaction_timeout = 0;
```

INTERPRETATION: hosted-runner/toolchain drift, no Task0077 source change. Client binary --version was not explicitly logged; the installed package major18 and incompatible server16setting are observed. New task must prove exact selected binary/server versions. No retry to hide failure.

import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { checkLocalEnvironment, validateHostedConfig } from "../scripts/hosted_supabase_preflight.mjs";

const ref = "lflkcrnriitrbclangyr";
const url = "https://" + ref + ".supabase.co";
const key = "sb_publishable_synthetic_only_0123456789";
const good = () => ({
  expectedProjectRef: ref,
  web: {
    NEXT_PUBLIC_SUPABASE_URL: url,
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: key,
    VELLISTRY_API_BASE_URL: "http://127.0.0.1:4100",
  },
  api: {
    SUPABASE_URL: url,
    SUPABASE_PUBLISHABLE_KEY: key,
    API_HOST: "127.0.0.1",
    API_PORT: "4100",
  },
});

test("accepts coherent hosted project URL, modern publishable key and loopback Nest", () => {
  assert.deepEqual(validateHostedConfig(good()), { ok: true, errors: [] });
});

test("rejects another cloud project, even if Web and API agree on that project", () => {
  const cfg = good();
  cfg.web.NEXT_PUBLIC_SUPABASE_URL = "https://differentproject123.supabase.co";
  cfg.api.SUPABASE_URL = cfg.web.NEXT_PUBLIC_SUPABASE_URL;
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects localhost Supabase URL; local containers are not the selected backend", () => {
  const cfg = good();
  cfg.web.NEXT_PUBLIC_SUPABASE_URL = "http://127.0.0.1:54321";
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects secret/service-role key in browser and backend publishable slot", () => {
  const cfg = good();
  cfg.web.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = "sb_secret_do_not_use_0123456789";
  cfg.api.SUPABASE_PUBLISHABLE_KEY = "sb_secret_do_not_use_0123456789";
  const result = validateHostedConfig(cfg);
  assert.equal(result.ok, false);
  assert.ok(result.errors.length >= 2);
  assert.equal(result.errors.join(" ").includes("do_not_use_0123456789"), false);
});

test("rejects legacy JWT key in the modern publishable-key slot", () => {
  const cfg = good();
  cfg.web.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiJ9.payload.signature";
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects mismatched Web/API project publishable keys", () => {
  const cfg = good();
  cfg.api.SUPABASE_PUBLISHABLE_KEY = "sb_publishable_different_synthetic_123456";
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects externally exposed API host and wrong BFF upstream", () => {
  const cfg = good();
  cfg.api.API_HOST = "0.0.0.0";
  cfg.web.VELLISTRY_API_BASE_URL = "https://api.example.test";
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects invalid or omitted expected project reference", () => {
  assert.equal(validateHostedConfig({ ...good(), expectedProjectRef: "" }).ok, false);
  assert.equal(validateHostedConfig({ ...good(), expectedProjectRef: "production" }).ok, false);
});

test("missing local files are reported without consulting environment or network", () => {
  const root = mkdtempSync(join(tmpdir(), "vellistry-hosted-env-"));
  try {
    const result = checkLocalEnvironment(root, ref);
    assert.equal(result.ok, false);
    assert.ok(result.messages.join(" ").includes("apps/web/.env.local"));
    assert.ok(result.messages.join(" ").includes("apps/api/.env"));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("reads ignored local files, never emits key values in success output", () => {
  const root = mkdtempSync(join(tmpdir(), "vellistry-hosted-env-"));
  try {
    mkdirSync(join(root, "apps/web"), { recursive: true });
    mkdirSync(join(root, "apps/api"), { recursive: true });
    writeFileSync(join(root, "apps/web/.env.local"),
      "NEXT_PUBLIC_SUPABASE_URL=" + url + "\n"
      + "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=" + key + "\n"
      + "VELLISTRY_API_BASE_URL=http://127.0.0.1:4100\n");
    writeFileSync(join(root, "apps/api/.env"),
      "SUPABASE_URL=" + url + "\n"
      + "SUPABASE_PUBLISHABLE_KEY=" + key + "\n"
      + "API_HOST=127.0.0.1\nAPI_PORT=4100\n");
    const result = checkLocalEnvironment(root, ref);
    assert.equal(result.ok, true);
    assert.equal(result.messages.join(" ").includes(key), false);
    assert.match(result.messages[1], /NOT TESTED/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("invalid local config never leaks the offending key in diagnostics", () => {
  const root = mkdtempSync(join(tmpdir(), "vellistry-hosted-env-"));
  const secret = "sb_secret_fake_private_123456789";
  try {
    mkdirSync(join(root, "apps/web"), { recursive: true });
    mkdirSync(join(root, "apps/api"), { recursive: true });
    writeFileSync(join(root, "apps/web/.env.local"),
      "NEXT_PUBLIC_SUPABASE_URL=" + url + "\n"
      + "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=" + secret + "\n"
      + "VELLISTRY_API_BASE_URL=http://127.0.0.1:4100\n");
    writeFileSync(join(root, "apps/api/.env"),
      "SUPABASE_URL=" + url + "\n"
      + "SUPABASE_PUBLISHABLE_KEY=" + key + "\n"
      + "API_HOST=127.0.0.1\nAPI_PORT=4100\n");
    const result = checkLocalEnvironment(root, ref);
    assert.equal(result.ok, false);
    assert.equal(result.messages.join(" ").includes(secret), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});


function fixture(run) {
  const root = mkdtempSync(join(tmpdir(), "vellistry-preflight-codex-"));
  const cfg = good();
  try {
    mkdirSync(join(root, "apps/web"), { recursive: true });
    mkdirSync(join(root, "apps/api"), { recursive: true });
    for (const [app, values, file] of [["web", cfg.web, ".env.local"], ["api", cfg.api, ".env"]]) {
      writeFileSync(join(root, "apps", app, file),
        Object.entries(values).map(([name, value]) => name + "=" + value).join("\n") + "\n");
    }
    return run(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

test("does not pass file validation when inherited runtime settings override those files", () => fixture(root => {
  for (const name of ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    "VELLISTRY_API_BASE_URL", "SUPABASE_URL", "SUPABASE_PUBLISHABLE_KEY", "API_HOST", "API_PORT",
    "DOTENV_CONFIG_PATH"]) {
    const result = checkLocalEnvironment(root, ref, { environment: { [name]: "synthetic_override_never_print" } });
    assert.equal(result.ok, false, name);
    assert.equal(result.messages.join(" ").includes("synthetic_override_never_print"), false);
  }
}));

test("rejects competing Next env files that the actual runtime would also read", () => fixture(root => {
  for (const name of [".env.development.local", ".env.production.local", ".env.test.local",
    ".env.development", ".env.production", ".env.test", ".env"]) {
    const path = join(root, "apps/web", name);
    writeFileSync(path, "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_secret_synthetic_never_print\n");
    const before = readFileSync(path, "utf8");
    const result = checkLocalEnvironment(root, ref, { environment: {} });
    assert.equal(result.ok, false, name);
    assert.equal(result.messages.join(" ").includes("sb_secret_synthetic_never_print"), false);
    assert.equal(readFileSync(path, "utf8"), before);
    rmSync(path);
  }
}));

test("rejects test mode because Next does not load the required .env.local there", () => fixture(root => {
  assert.equal(checkLocalEnvironment(root, ref, { environment: { NODE_ENV: "test" } }).ok, false);
}));

test("actual Next runtime precedence demonstrates why competing env files must block preflight", () => fixture(root => {
  const webRequire = createRequire(new URL("../apps/web/package.json", import.meta.url));
  const nextRequire = createRequire(webRequire.resolve("next/package.json"));
  const envLoader = nextRequire.resolve("@next/env");
  writeFileSync(join(root, "apps/web/.env.development.local"),
    "NEXT_PUBLIC_SUPABASE_URL=https://differentproject1234.supabase.co\n");
  const script = "const {loadEnvConfig}=require(process.argv[1]);"
    + "loadEnvConfig(process.argv[2],true,{info(){},error(){}},true);"
    + "if(process.env.NEXT_PUBLIC_SUPABASE_URL!=='https://differentproject1234.supabase.co') process.exit(2);";
  const observed = spawnSync(process.execPath, ["-e", script, envLoader, join(root, "apps/web")],
    { encoding: "utf8", env: cleanChildEnvironment() });
  assert.equal(observed.status, 0);
  assert.equal(checkLocalEnvironment(root, ref, { environment: {} }).ok, false);
}));

function cleanChildEnvironment() {
  return { PATH: process.env.PATH ?? "", SystemRoot: process.env.SystemRoot ?? "" };
}

test("actual CLI succeeds and rejects unsafe config without printing synthetic key values", () => fixture(root => {
  const script = fileURLToPath(new URL("../scripts/hosted_supabase_preflight.mjs", import.meta.url));
  const invoke = () => spawnSync(process.execPath, [script, ref],
    { cwd: root, encoding: "utf8", env: cleanChildEnvironment() });
  const beforeWeb = readFileSync(join(root, "apps/web/.env.local"), "utf8");
  const beforeApi = readFileSync(join(root, "apps/api/.env"), "utf8");
  const success = invoke();
  assert.equal(success.status, 0);
  assert.match(success.stdout, /NOT TESTED/);
  assert.equal(success.stdout.includes(key), false);
  assert.equal(readFileSync(join(root, "apps/web/.env.local"), "utf8"), beforeWeb);
  assert.equal(readFileSync(join(root, "apps/api/.env"), "utf8"), beforeApi);
  const fakeSecret = "sb_secret_synthetic_cli_never_print";
  writeFileSync(join(root, "apps/web/.env.local"),
    beforeWeb.replace(key, fakeSecret));
  const failure = invoke();
  assert.equal(failure.status, 1);
  assert.equal((failure.stdout + failure.stderr).includes(fakeSecret), false);
}));

test("actual CLI fails safely with absent env files", () => {
  const root = mkdtempSync(join(tmpdir(), "vellistry-missing-env-"));
  try {
    const script = fileURLToPath(new URL("../scripts/hosted_supabase_preflight.mjs", import.meta.url));
    const result = spawnSync(process.execPath, [script, ref],
      { cwd: root, encoding: "utf8", env: cleanChildEnvironment() });
    assert.equal(result.status, 1);
    assert.match(result.stdout, /BLOCKED/);
    assert.equal(result.stderr, "");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("cloud URL rejects credentials, ports, lookalike hosts, path and query additions", () => {
  for (const bad of ["http://" + ref + ".supabase.co", url + ".example.test", url + ":444",
    "https://user:synthetic_password@" + ref + ".supabase.co", url + "/rest/v1",
    url + "?token=synthetic", url + "#fragment"]) {
    const cfg = good();
    cfg.web.NEXT_PUBLIC_SUPABASE_URL = bad;
    assert.equal(validateHostedConfig(cfg).ok, false);
    assert.equal(validateHostedConfig(cfg).errors.join(" ").includes("synthetic_password"), false);
  }
});

test("unreadable env paths fail without reflecting filesystem or parser errors", () => fixture(root => {
  rmSync(join(root, "apps/web/.env.local"));
  mkdirSync(join(root, "apps/web/.env.local"));
  const result = checkLocalEnvironment(root, ref, { environment: {} });
  assert.equal(result.ok, false);
  assert.match(result.messages.join(" "), /Could not parse/);
}));

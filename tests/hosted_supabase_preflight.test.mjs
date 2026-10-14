import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
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

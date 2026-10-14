#!/usr/bin/env node
/**
 * Vellistry hosted-development configuration preflight.
 *
 * Reads only ignored local env files; makes NO network calls or DB changes.
 * Does not print project keys, credentials, or file contents. Never use this
 * result as proof of a connected database, RLS, schema, or login.
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parseEnv } from "node:util";
import { pathToFileURL } from "node:url";

export const WEB_ENV = "apps/web/.env.local";
export const API_ENV = "apps/api/.env";
const VALID_REF = /^[a-z0-9]{20}$/;
const PUBLISHABLE = /^sb_publishable_[A-Za-z0-9_-]{8,}$/;

function correctCloudUrl(value, projectRef) {
  if (typeof value !== "string" || !VALID_REF.test(projectRef)) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:"
      && url.hostname === projectRef + ".supabase.co"
      && url.port === ""
      && url.pathname === "/"
      && url.search === ""
      && url.hash === ""
      && url.username === ""
      && url.password === "";
  } catch {
    return false;
  }
}

/** Pure, synthetic-testable evaluation. Error text deliberately excludes input values. */
export function validateHostedConfig({ web, api, expectedProjectRef }) {
  const errors = [];
  if (!VALID_REF.test(expectedProjectRef ?? "")) {
    errors.push("Expected Supabase project reference must be 20 lowercase letters/digits.");
    return { ok: false, errors };
  }

  if (!correctCloudUrl(web.NEXT_PUBLIC_SUPABASE_URL, expectedProjectRef)) {
    errors.push("Web Supabase URL must be the HTTPS API URL of the selected development project.");
  }
  if (!correctCloudUrl(api.SUPABASE_URL, expectedProjectRef)) {
    errors.push("API Supabase URL must match the selected HTTPS development project.");
  }
  const webKey = web.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  const apiKey = api.SUPABASE_PUBLISHABLE_KEY;
  if (typeof webKey !== "string" || !PUBLISHABLE.test(webKey)) {
    errors.push("Web must use a modern sb_publishable_ key, never a secret/service_role key.");
  }
  if (typeof apiKey !== "string" || !PUBLISHABLE.test(apiKey)) {
    errors.push("API must use a modern sb_publishable_ key, never a secret/service_role key.");
  }
  if (typeof webKey === "string" && typeof apiKey === "string" && webKey !== apiKey) {
    errors.push("Web and API must use the same publishable key.");
  }
  if (web.VELLISTRY_API_BASE_URL !== "http://127.0.0.1:4100") {
    errors.push("Web BFF must target the loopback Nest API at http://127.0.0.1:4100.");
  }
  if (api.API_HOST !== "127.0.0.1" || api.API_PORT !== "4100") {
    errors.push("Nest API must listen on 127.0.0.1:4100 during desktop development.");
  }
  return { ok: errors.length === 0, errors };
}

function readLocalEnv(root, name) {
  const path = resolve(root, name);
  if (!existsSync(path)) return { missing: true, values: {} };
  try {
    return { missing: false, values: parseEnv(readFileSync(path, "utf8")) };
  } catch {
    // Never reflect a parser exception that may contain confidential source text.
    return { missing: false, parseError: true, values: {} };
  }
}

/** Produces safe, non-secret stdout. Does not contact Supabase. */
export function checkLocalEnvironment(root, expectedProjectRef) {
  const web = readLocalEnv(root, WEB_ENV);
  const api = readLocalEnv(root, API_ENV);
  const errors = [];
  if (web.missing) errors.push("Missing " + WEB_ENV + " (copy its .env.example locally).");
  if (api.missing) errors.push("Missing " + API_ENV + " (copy its .env.example locally).");
  if (web.parseError) errors.push("Could not parse " + WEB_ENV + ".");
  if (api.parseError) errors.push("Could not parse " + API_ENV + ".");
  if (errors.length === 0) {
    errors.push(...validateHostedConfig({
      web: web.values,
      api: api.values,
      expectedProjectRef,
    }).errors);
  }
  return {
    ok: errors.length === 0,
    messages: errors.length === 0
      ? ["PASS: local Web/API cloud settings are internally consistent.",
         "NOT TESTED: cloud connectivity, database schema, RLS, Auth, or real book saves."]
      : ["BLOCKED: hosted development configuration needs attention.", ...errors],
  };
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const ref = process.argv[2];
  const result = checkLocalEnvironment(process.cwd(), ref);
  for (const message of result.messages) console.log(message);
  if (!result.ok) process.exitCode = 1;
}

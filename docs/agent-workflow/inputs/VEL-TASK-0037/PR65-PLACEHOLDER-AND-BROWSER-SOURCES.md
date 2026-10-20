# .env.example at 604e1ebfd0baab930ee4dc39aecf7289dc64188a

# Reference map ONLY. Root .env is not automatically loaded by both apps.
# Copy the per-app samples instead:
#   apps/web/.env.example -> apps/web/.env.local (ignored by Git)
#   apps/api/.env.example -> apps/api/.env       (ignored by Git)
#
# Use the SAME vetted hosted Supabase Cloud development project in both.
# Modern sb_publishable_ API key ONLY. Never use sb_secret_ or service_role.
# Validate locally with: corepack pnpm check:hosted-env
#
# The runtime variable names are:
# Web: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
#      VELLISTRY_API_BASE_URL=http://127.0.0.1:4100
# Nest: SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY,
#       API_PORT=4100, API_HOST=127.0.0.1

# apps/api/.env.example at 604e1ebfd0baab930ee4dc39aecf7289dc64188a

# Copy to apps/api/.env, then fill values on YOUR COMPUTER.
# Use the SAME hosted development project's publishable key as apps/web/.env.local.
# Never use the service_role or sb_secret_ key for ordinary author requests.
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_PUBLISHABLE_KEY=REPLACE_WITH_SB_PUBLISHABLE_KEY

# Keep Nest private to the workstation.
API_PORT=4100
API_HOST=127.0.0.1

# apps/web/.env.example at 604e1ebfd0baab930ee4dc39aecf7289dc64188a

# Copy to apps/web/.env.local, then fill values on YOUR COMPUTER.
# Get the project URL and sb_publishable_ key from Supabase Dashboard > Connect.
# Vellistry's dev project is vellistry-dev; do not use a real-author/production project.
# Never paste keys into a GitHub issue, chat, PR, or agent prompt.
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=REPLACE_WITH_SB_PUBLISHABLE_KEY

# Browser calls same-origin /api/books; Next BFF forwards to local Nest.
VELLISTRY_API_BASE_URL=http://127.0.0.1:4100

# apps/web/src/lib/supabase/browser.ts at 604e1ebfd0baab930ee4dc39aecf7289dc64188a

"use client";
import {createBrowserClient} from "@supabase/ssr";
export function getBrowserSupabase(){
 const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
 const key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
 if(!url||!key)throw new Error("Supabase project configuration is missing");
 return createBrowserClient(url,key);
}

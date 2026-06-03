# REALM Group USA

The United States agricultural marketplace — fork of REALM Group Freight (AU).

- Codebase: Next.js 14 / TypeScript / Tailwind
- DB: Supabase (shared with AU, multi-tenant by country='US')
- Payments: Stripe (USD, US Connect accounts)
- Deploy: Railway

## Local dev
cp .env.example .env
# fill in Supabase + Stripe US test keys
npm install
npm run dev

## Country flag
Every listing/user/order/etc. is stamped with country='US' in the shared Supabase DB.
The instance reads/writes are scoped via lib/country.ts helpers and the NEXT_PUBLIC_COUNTRY_CODE env var.

## Maintainer
c51 consulting — operating as REALM Group Global.

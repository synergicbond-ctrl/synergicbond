# FRESH DEPLOYMENT AUDIT

## Status

PARTIAL

## Command Verification

| Check | Status | Evidence |
| --- | --- | --- |
| `npm install` | PASS | Completed: `up to date in 1s`. Warning: `@google/genai` and `protobufjs` install scripts need `npm approve-scripts` review if required by deployment policy. |
| `npm run lint` | PASS | Completed with exit code 0. |
| `npx tsc --noEmit --pretty false` | PASS | Completed with exit code 0. |
| `npm run build` | PASS | Completed with exit code 0. Next.js 16.2.9 generated 71 app routes. |
| `npm start` | PASS | Started with explicit permission: Next.js Ready in 131ms. |
| Local route smoke | PASS | `curl -I http://127.0.0.1:3000/learn` returned HTTP 200. |
| Fresh Vercel deployment | NOT TESTED | Requires Vercel deployment/dashboard access. |

## Route Generation Evidence

- Build output includes `/`, `/pricing`, `/learn`, `/formula-cards`, `/pyq`, `/search`, `/api/payment/create-order`, `/api/payment/webhook`, `/api/content/access`, and `/api/snap-solve`.
- Build output generated 71 routes after adding `/learn`.

## Production Env Requirements

- Set all variables from `.env.example` in Vercel Production.
- Redeploy after setting variables.
- Verify Razorpay webhook target points to the same production domain.

## Blockers

- Vercel dashboard access required to verify production environment variables and fresh deployment URL.
- Razorpay and Supabase production dashboards required to verify revenue flow.

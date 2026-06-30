# WEEK1_DEPLOYMENT_FINAL

| Check | Status | Evidence | Blocker | Next Action |
| --- | --- | --- | --- | --- |
| Required env vars in `.env.example` | PASS | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `NEXT_PUBLIC_RAZORPAY_KEY_ID`, `RAZORPAY_WEBHOOK_SECRET` are listed. | None. | None. |
| Production env names match code | PASS | Code references the same env names listed in `.env.example`. | None. | None. |
| Production webhook secret configured | FAIL | Production `/api/payment/webhook` returned HTTP 503 to invalid POST; route returns 503 when `RAZORPAY_WEBHOOK_SECRET` is missing. | Vercel dashboard access required. | Add secret and redeploy. |
| Supabase DB connectivity | NOT TESTED | No production Supabase query access in workspace. | Supabase dashboard/API access required. | Run SQL checks. |
| Migrations complete | PARTIAL | Repo contains subscriptions, snap usage, payment events, profiles, and `008_profiles_updated_at.sql`. | Production migration table/state not visible. | Verify Supabase migrations applied. |
| Production homepage availability | PASS | `curl -I https://synergicbond.vercel.app` returned HTTP 200 from Vercel. | None. | None. |
| Production webhook route availability | PASS | Invalid POST reached `x-matched-path: /api/payment/webhook`. | Secret missing blocks processing. | Fix env. |
| `npm run lint` | PASS | Command completed successfully. | None. | None. |
| `npx tsc --noEmit --pretty false` | PASS | Command completed successfully. | None. | None. |
| `npm run build` | PASS | Command completed successfully; build output includes `/api/payment/webhook`. | None. | None. |

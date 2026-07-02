# WEEK1_SECURITY_FINAL

| Check | Status | Evidence | Blocker | Next Action |
| --- | --- | --- | --- | --- |
| Guest order creation blocked | PASS | `/api/payment/create-order` returns 401 when no Supabase user exists. | None. | None. |
| Premium route guarded | PASS | `app/chapter/[id]/page.tsx` redirects guests to sign-in and non-Pro users to `/pricing`. | None. | None. |
| Premium API guarded | PASS | `/api/content/access` returns `not_logged_in`, `no_subscription`, or `tier: "pro"` based on active subscription. | None. | None. |
| Snap Solve guest/free abuse blocked | PASS | `checkAndConsumeSnapQuota` blocks guests, enforces free limit, and gives Pro unlimited only through `isProActive`. | None. | None. |
| Webhook requires valid signature | PASS | Webhook computes HMAC-SHA256 over raw body and rejects invalid signatures. | Production secret missing prevents live validation. | Set Vercel `RAZORPAY_WEBHOOK_SECRET`. |
| Duplicate/replay event idempotent | PASS | Webhook checks `payment_events` before processing and table has unique `event_id`. | None. | None. |
| Client cannot spoof payment amount | PASS | Client sends only `plan`; server selects amount from `PLANS`; INR 149 unchanged. | None. | None. |
| Client cannot spoof userId | PASS | Create-order uses authenticated Supabase user id in Razorpay notes. | None. | None. |
| Service role key server-only | PASS | `createAdminClient` reads `SUPABASE_SERVICE_ROLE_KEY` server-side; `.env.example` does not expose public prefix. | None. | None. |
| Hidden route protection | PARTIAL | Revenue-critical routes are guarded/signature-validated. Full hidden-route crawl not performed. | Requires route inventory/runtime test. | Run authenticated/guest route matrix. |


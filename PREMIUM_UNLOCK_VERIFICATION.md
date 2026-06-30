# PREMIUM_UNLOCK_VERIFICATION

| Check | Status | Evidence | Blocker |
| --- | --- | --- | --- |
| Paid user detected as premium | NOT TESTED | `lib/subscription.ts` detects active unexpired subscription rows; paid user's production row is not accessible locally. | Requires paid-user session or Supabase production query |
| Paywall removed | NOT TESTED | Premium chapter gate calls `isProActive`; paid-user runtime access was not available locally. | Requires browser test as paid user |
| Premium feature access works | NOT TESTED | `/api/content/access` returns `tier: "pro"` when an active unexpired subscription exists; paid-user runtime access was not available locally. | Requires authenticated production request |
| Snap Solve/free limit bypass | NOT TESTED | `lib/snapQuota.ts` returns unlimited Pro access when `isProActive` is true; paid-user runtime access was not available locally. | Requires authenticated production Snap Solve request |

Manual verification:

```sql
select status, expires_at
from public.subscriptions
where user_id = '<paid_user_id>'
  and status = 'active'
  and expires_at >= now();
```

Runtime checks required:
- Login as paid user.
- Open a premium chapter; expected no redirect to `/pricing`.
- Call `/api/content/access?chapterId=<premium_chapter_id>`; expected `access: true`, `tier: "pro"`.
- Use Snap Solve after free limit; expected no 402 paywall.


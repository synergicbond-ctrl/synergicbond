# WEEK2_ANALYTICS_CERTIFICATION

| Event | Status | Evidence | Blocker |
| --- | --- | --- | --- |
| signup | PASS | `app/auth/signup/page.tsx` calls `trackBetaEvent("signup")` after successful signup/profile upsert. | Production event row requires real signup. |
| login | PASS | `app/auth/signin/page.tsx` calls `trackBetaEvent("login")` after password login and before Google OAuth redirect. | Production event row requires real login. |
| dashboard_visit | PASS | `components/BetaTracker.tsx` maps `/dashboard` to `dashboard_visit`. | Production event row requires dashboard visit. |
| search | PASS | `app/search/page.tsx` tracks `search` after successful `/api/search` response. | Production event row requires real search. |
| snap_solve_start | PASS | `components/SnapSolveUpload.tsx` tracks `snap_solve_start` before calling `/api/snap-solve`. | Production event row requires real solve attempt. |
| snap_solve_completed | PASS | `components/SnapSolveUpload.tsx` tracks `snap_solve_completed` on JSON success or SSE `final`. | Production event row requires completed solve. |
| learn_visit | PASS | `components/BetaTracker.tsx` maps `/learn` to `learn_visit`. | Production event row requires visit. |
| pyq_visit | PASS | `components/BetaTracker.tsx` maps `/pyq` to `pyq_visit`. | Production event row requires visit. |
| periodic_table_visit | PASS | `components/BetaTracker.tsx` maps `/periodic-table` to `periodic_table_visit`. | Production event row requires visit. |
| session_start | PASS | `components/BetaTracker.tsx` tracks `session_start` on mount. | Production event row requires visit. |
| session_end | PASS | `components/BetaTracker.tsx` tracks `session_end` on pagehide/unmount with duration. | Production event row requires session end. |

Production verification SQL:

```sql
select event_name, count(*)
from public.beta_events
group by event_name
order by event_name;
```

Required production action:

- Apply `supabase/migrations/009_beta_usage_analytics.sql`.
- Deploy commit containing beta tracking.
- Run the onboarding flow with real users.


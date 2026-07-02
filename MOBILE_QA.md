# MOBILE QA

## Verification Environment

- Viewport used before browser policy block: 390 x 844.
- Routes audited: `/`, `/search`, `/pyq`, `/formula-cards`, `/reagents`, `/name-reactions`, `/learn`.
- Build after fixes: PASS, 71 app routes generated.
- Lint after fixes: PASS.

## Status Table

| Route | Status | Evidence |
| --- | --- | --- |
| `/` | PARTIAL | Initial browser run rendered the homepage at 390px with `overflowX <= 0`. Runtime blocker found first: missing Supabase env crashed route rendering; fixed with no-credentials fallbacks in `proxy.ts`, `lib/supabase.ts`, and `lib/controlCenterData.ts`. Post-fix browser retest was blocked by browser policy. |
| `/search` | PARTIAL | At 390px, local request redirected to `/auth/signin` because `/search` is listed in `PROTECTED_PATHS` and no Supabase session/config exists. Actual search interior was NOT TESTED in browser. Source contract still matches `{ results, total }`; build includes `/search` and `/api/search`. |
| `/pyq` | PARTIAL | At 390px, local request redirected to `/auth/signin` because `/pyq` is listed in `PROTECTED_PATHS` and no Supabase session/config exists. Actual PYQ interior was NOT TESTED in browser. Build includes `/pyq`. |
| `/formula-cards` | PARTIAL | Browser run rendered the route at 390px with `overflowX <= 0`. Intentional horizontal chapter filter scroller detected. No fatal overflow detected. Post-fix browser retest was blocked. |
| `/reagents` | PARTIAL | Browser run rendered the route at 390px with `overflowX <= 0`. Intentional horizontal reference tab scroller detected. No fatal overflow detected. Post-fix browser retest was blocked. |
| `/name-reactions` | PARTIAL | Browser run rendered the route at 390px with `overflowX <= 0`. Intentional horizontal reference tab scroller detected. No fatal overflow detected. Post-fix browser retest was blocked. |
| `/learn` | PASS | Initial browser run showed a 404. Fixed by adding `app/learn/page.tsx`. Build output now includes static `/learn`. |

## Verified Fixes

- `proxy.ts`: missing Supabase URL/key no longer crashes local public route rendering; protected paths redirect to `/auth/signin` instead.
- `lib/supabase.ts`: browser Supabase import no longer crashes when local env vars are absent; auth calls return safe unconfigured responses.
- `lib/controlCenterData.ts`: homepage progress fetch returns `null` when Supabase env vars are absent.
- `components/Navbar.tsx`: mobile menu button changed from 36px to a 44px square touch target.
- `app/learn/page.tsx`: added missing learning hub route using existing data/routes.

## Remaining Mobile Blockers

- Browser policy blocked post-fix localhost retest.
- Authenticated `/search` and `/pyq` interiors require real Supabase config/session for browser QA.
- Intentional horizontal scrollers exist on homepage tabs, formula chapter filters, and reference tabs; they are not document-level overflow.

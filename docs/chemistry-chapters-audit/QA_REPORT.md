# QA Report

## Whole-branch production build (end of first pass over all 13 chapters)

`npm run build` initially **failed** on a pre-existing, unrelated issue: `react-katex` was in
`package.json` but not installed in `node_modules` (`Module not found` in
`surface-chemistry-shared.tsx` and `chemical-kinetics-shared.tsx`). Fixed with `npm install`
(2 packages added) — not `npm audit fix --force`, which is off-limits. Rebuilt: clean, exit 0,
zero warnings, every route in the site compiled, including all 13 audited chapters and the new
canonical S-Block route. This is real evidence beyond `tsc --noEmit`, per the handover doc's own
"a passing build is not sufficient [alone], but is necessary" framing.


## Adsorption

- `npx tsc --noEmit -p .` — 0 errors, full project, run twice (before and after the SVG swap).
- All 24 new `<svg>` blocks parsed successfully with Python's `xml.etree.ElementTree` (well-formed XML, no unclosed/mismatched tags).
- All 24 diagrams visually inspected by rendering the extracted `<figure>` markup in a standalone
  local HTML page (bypassing the app's auth gate, since this route requires sign-in and no
  credentials were available or used) served via `python3 -m http.server` and viewed through the
  Browser pane at multiple scroll positions. Found and fixed one real bug this way: `&#8339;`
  (subscript **x**, U+2093) was mistakenly used instead of `&#8344;` (subscript **m**, U+2098) in
  5 places, making "qₘ" render as "qₓ". Fixed and re-verified.
- **Not done**: no in-app browser QA of the live route itself (desktop/tablet/mobile viewports,
  console errors, hydration warnings) — the route is gated behind Supabase auth
  (`requirePaidContent` via `proxy.ts` → `/auth/signin`), and per this session's standing rules,
  credentials are never entered on the user's behalf. The user (or someone with a signed-in
  session) needs to do a final visual pass on the deployed preview.

## S-Block

- `npx tsc --noEmit -p .` — 0 errors, full project, run after the route/metadata changes.
- Confirmed via `grep` that no remaining code references the old `/notes/s-block` href string
  anywhere outside the retired directory itself.
- Confirmed the access-gate prefix logic (`lib/access/contentAccess.ts`) covers both the old and
  new route identically, so promoting the new route does not change who can view the content.
- **Not done**: same as Adsorption — no in-app browser QA of the live, signed-in route.

## Automated checks not yet built

The handover doc's Point 21 asks for scripted checks (missing assets, orphan assets, repeated
assets, dominant white backgrounds, missing alt text, duplicate captions, raw math, duplicate
headings/paragraphs, dead routes, invalid prev/next links). None of these have been written as
standalone scripts in this branch — the equivalent checks done so far were ad-hoc `grep`/Python
one-offs during the Adsorption and S-Block work, not committed, reusable tooling.

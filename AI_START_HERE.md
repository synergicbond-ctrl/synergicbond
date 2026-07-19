# AI START HERE — Synergic Bond

Permanent orientation for any AI/code agent working in this repository.
Everything here is designed to work WITHOUT access to old chat transcripts.

## Ground rules (always)

1. **Never** reset, clean, stash, delete or force-push over local work you
   did not create — this repo frequently carries active WIP from parallel
   sessions (check `git status` and stashes before anything else).
2. Never weaken access gates (`lib/auth/guards`, chapter `layout.tsx` files,
   `lib/access/*`). Premium routes redirecting to `/auth/signin` is correct.
3. Zero chemistry-content loss: UI/routing work must never delete, shorten or
   rewrite chemistry content.
4. The canonical notes design system lives in
   `components/notes/canonical.tsx`; chapter/card metadata for the /notes
   explorer lives in `lib/notes/chapterCatalog.ts`.
5. Repo-wide `npm run lint` may fail on known unrelated files — scope lint to
   the files you touched; do not "fix" unrelated files as a side effect.

## Handoff bundles

- `AI_HANDOFF/chemical-bonding-189/START_HERE.md` — Chemical Bonding
  189-topic course: status (COMPLETE + DEPLOYED), architecture, protected
  chemistry corrections, validation baseline, recovery paths.

## Other standing context

- `AI_CONTEXT.md`, `AI_CONTINUATION_GUIDE.md` — earlier project context docs.
- `docs/` — audit and coverage proofs for major chapter rebuilds.
- Production: https://www.synergicbond.com (Vercel, deploys from `main`).

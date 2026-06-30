# ROADMAP

## Next highest ROI

Implement canonical knowledge graph edges.

Priority:
1. Create canonical reagent records and connect reactions by reagent IDs.
2. Connect reaction exception text to canonical exception IDs.
3. Connect important orders to reactions and PYQs where verified.
4. Add `/api/formulas` using `lib/chemistry/formulas`.
5. Add formula and NCERT results to global search.
6. Run and reduce full lint.

## Verification gates

- `npm run build`
- `npx tsc --noEmit --pretty false`
- Graph audit shows no FAIL edge groups.
- No orphan graph links.
- No duplicate IDs.

## Deferred external verification

- Razorpay order creation.
- Razorpay webhook activation.
- Supabase migrations applied in production.
- AI provider credentials.

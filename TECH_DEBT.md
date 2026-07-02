# TECH DEBT

## Revenue Verification

Status: PARTIAL.

Code-level revenue readiness exists, but live Razorpay checkout, webhook delivery, subscription upsert, premium access, and Snap Solve quota execution require external credentials and production database verification.

## NCERT Result Routing

Status: PARTIAL.

NCERT links are searchable, but `/api/search` routes NCERT results back to `/search` because no dedicated NCERT reference/detail page exists.

## Content Coverage

Status: PARTIAL.

Actual content gaps:
- PYQs: 34 questions across 14 chapters.
- Canonical exceptions: 3 records.
- Reaction -> Order: 6 edges, 10% coverage.
- Exception -> PYQ: 10 edges, 15.09% coverage.
- Order -> PYQ: 8 edges, 3.72% coverage.

## User-Specific Insights

Status: PARTIAL.

PYQ weak-area cards use source-data support gaps. Real personalization requires authenticated progress or mistake records.

## Browser/Mobile QA

Status: NOT TESTED.

Responsive classes exist in key pages and build passes, but no browser/device visual pass was executed.

## Git Hygiene

Status: PARTIAL.

Release-candidate audit docs are present in the working tree. Pre-existing untracked duplicate files with ` 2.md` suffix remain untouched.

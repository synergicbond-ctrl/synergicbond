# Audit report — Reaction Intermediates (JEE Advanced)

## What was verified by computer
* Every curved-arrow or fish-hook mechanism (≈175) is applied to the drawn reactant graph (RDKit) and the result is compared
  with the drawn product; the build fails if any step is not electron-balanced. All pass.
* Every SMILES used for structures in the added problem banks parses in RDKit.

## What was NOT verified
* The truth of the chemistry in the written theory tables and of every answer key written by the assistant. These were
  not checked against any book or by a second person. Spot-check before exam use, especially: numerical pKa/BDE/ΔE values
  (recalled, approximate), regiochemistry of aryne additions, product assignments in the multi-step problem banks, and the
  ranking problems in Part 15.
* Page-by-page visual layout. Only a sample of pages was inspected; a few mechanism cells are cramped (9.12, 10.11, 10.12).

## Known errors found and fixed during the build
* Allen O-I Q38 key corrected to (B) after checking the PDF text layer.
* Part 13's four problems were not printed (list overwritten); fixed.
* Several first-draft answer keys (FR-17/18/41/42/43, BZ-18/24/25/30, NI-22/29/30, CA/CE items) were garbled and rewritten.
* One Birch problem (p-methoxybenzoic acid) was removed because its product was not certain.

## Convention conflicts flagged ⚑ in the book
t-Bu⁺ vs benzyl⁺ (gas phase vs JEE keys); tert-amyl vs t-Bu hyperconjugation count; water vs methanol acidity;
benzaldehyde vs acetone reactivity; allyl vs benzyl radical; H vs aryl migratory aptitude; amines 3° vs 2° in water.

## Open items
* Exercise-2 Q4, 18, 19, 22, 33, 34 unreadable; drawings awaiting your confirmation: Q27 VI, Q19(a), Q21 items 3–5,
  AgNO₃ pairs A and C, isopropyl items E, G, H, I.
* Lecture homework problems (Carbocation-V Q7–25, dehydration Q1–48, etc.) not solved.
* The Kohinoor "important orders" source was not found; Part 15 is written from standard theory.

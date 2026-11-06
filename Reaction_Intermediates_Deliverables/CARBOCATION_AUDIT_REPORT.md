# Audit report — Reaction Intermediates (JEE Advanced)

## What was verified by computer
* Every curved-arrow or fish-hook mechanism (≈175) is applied to the drawn reactant graph (RDKit) and the result is compared
  with the drawn product; the build fails if any step is not electron-balanced. All pass.
* Every SMILES used for structures in the added problem banks parses in RDKit.

## Problem banks written by delegated agents
110 further problems (22 each for carbanion CA-60..81, free radical FR-59..80, carbene CE-47..68, nitrene NI-39..60,
benzyne BZ-37..58) were written by five sub-agents, original and exam-style, with SMILES checked to parse in RDKit.
Their worked solutions were NOT independently verified. Points the agents themselves flagged as uncertain (all marked ⚑
in the text): Zimmerman–Traxler labels (CA-66), Favorskii label scrambling (CA-73), Brook direction (CA-76),
Ireland–Claisen diastereomers (CA-80), HBr anti-addition to 1-methylcyclohexene (FR-64), 5-methylhexenyl 6-endo ratio and
neophyl rate constant (FR-70/71), assumed rate constants (FR-69/72/73/79), several carbene ratios (CE-49/53/57/64/65/68),
Cadogan/Stieglitz/Bamberger assumptions (NI-45/50/51/54), aryne regiochemistry and strain figures (BZ-49/50/51/55/58).

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

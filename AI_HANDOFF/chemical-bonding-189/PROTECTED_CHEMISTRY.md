# PROTECTED CHEMISTRY — NEVER REGRESS

These corrections were paid for with real review effort. Any future edit to
Chemical Bonding content MUST preserve every item below. Run the checks at
the bottom after touching `app/learn/chemical-bonding/`.

1. **NO valence electrons**: neutral NO has **11 VALENCE electrons**
   (N = 5, O = 6). NEVER write "NO has 15 valence electrons" — 15 is the
   total electron count including core electrons. Preserved MOT result:
   NO bond order 2.5, paramagnetic.

2. **NO₂**: the corrected radical treatment principally associates the odd
   electron with nitrogen.

3. **N₂O₄** connectivity is **O₂N–NO₂ with a direct N–N bond**. Never
   introduce terminal O–O dimerisation.

4. **SCN⁻** (thiocyanate) is **singly charged**. Never SCN²⁻.

5. **N₂ vs N₂⁺ bond length**: r(N₂) < r(N₂⁺). Bond orders 3 vs 2.5.

6. **Alkali solubility trends**: carbonates — generally increasing solubility
   down the group. Perchlorates — do NOT blindly apply the carbonate trend;
   the corrected treatment of sparingly soluble heavier alkali perchlorates
   must remain.

7. **Lattice-energy reasoning**: preserve the corrected thermodynamic
   reasoning; never use contradictory lattice-vs-hydration arguments.

8. **O₂-family matrix match**:
   O₂⁺ BO 2.5 paramagnetic · O₂ BO 2 paramagnetic ·
   O₂⁻ BO 1.5 paramagnetic · O₂²⁻ BO 1 **dia**magnetic.

9. **Sulfate**: preserve the corrected sulfate/formal-charge treatment; never
   restore the previously garbled problem.

10. **No stale placeholders**: never reintroduce strings such as
    "Awaiting instruction".

## Regression spot-checks

```
S=app/learn/chemical-bonding/parts/topicData.ts
grep -c "11 valence" $S            # expect ≥ 1
grep -c "15 valence" $S            # expect 0
grep -c "SCN²⁻" $S                 # expect 0
grep -ci "awaiting instruction" $S # expect 0
grep -c "N–N bond" $S              # expect ≥ 1
grep -ci "diamagnetic" $S          # expect ≥ 1 (O₂²⁻)
```

Verified passing on origin/main commit `093a8a42` (2026-07-19).

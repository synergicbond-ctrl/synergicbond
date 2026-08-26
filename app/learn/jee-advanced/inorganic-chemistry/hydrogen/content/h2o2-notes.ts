import { md, type HydrogenSection } from "./types";

export const H2O2_NOTES_SECTIONS: HydrogenSection[] = [
  {
    id: "h2o2-core-rules",
    label: "Hydrogen Peroxide — Core Rules & Oxidizing Power",
    blocks: [
      md(`
## Hydrogen Peroxide (H₂O₂) — Master Concept

### Core Rules

**H₂O₂ as Reducing Agent (RA):**
- Oxygen changes from −1 → 0
- O₂ is liberated
- Rule: **RA = Releases Air**

**H₂O₂ as Oxidizing Agent (OA):**
- Oxygen changes from −1 → −2
- Usually NO O₂ released
- Rule: **OA = No bubble**

### Verified Oxidising Power Line

**Fixed Order:** Cl₂ > Br₂ > H₂O₂ > I₂

This is the only simple, universal redox order stated. All other behaviour is **medium/reaction dependent** — do not create a universal order.

### Reaction-Wise Oxidants That Oxidise H₂O₂

These oxidise H₂O₂ under given conditions (do not treat as one universal order):
- O₃
- Ag₂O (silver oxide)
- PbO₂ (lead dioxide)
- MnO₂/H⁺ (manganese dioxide in acid)
- MnO₄⁻ (permanganate, both acidic and basic)
- [Fe(CN)₆]³⁻ in base (ferricyanide)
- OCl⁻/HOCl (hypochlorite/hypochlorous acid)
- IO₄⁻ (periodate)

When any of these oxidants are present, H₂O₂ behaves as **RA and O₂ is liberated**.

### Reducing Species Oxidised by H₂O₂

These are oxidised by H₂O₂, so H₂O₂ behaves as **OA and O₂ is usually not liberated**:
- PbS (lead sulfide)
- H₂S (hydrogen sulfide)
- I⁻ (iodide ions)
- SO₃²⁻ (sulfite)
- NO₂⁻ (nitrite)
- As(III) (arsenite)
- Fe²⁺ (ferrous ions)
- [Fe(CN)₆]⁴⁻ (ferrocyanide)
- Cr(III) (chromium III)
- Mn²⁺/base (manganese II in basic solution)
      `),
    ],
  },

  {
    id: "h2o2-as-oa",
    label: "H₂O₂ as Oxidising Agent (OA) — Usually NO O₂",
    blocks: [
      md(`
## H₂O₂ as Oxidising Agent

When H₂O₂ acts as an oxidising agent, it usually produces NO O₂. The oxygen in H₂O₂ goes from −1 to −2.

| Reactant | Reaction | Change | O₂? | JEE memory / trap |
|----------|----------|--------|-----|------------------|
| PbS | PbS + 4H₂O₂ → PbSO₄ + 4H₂O | S: −2 → +6 | NO | PbS gets O; sulfide → sulfate. |
| NO₂⁻ | NO₂⁻ + H₂O₂ → NO₃⁻ + H₂O | N: +3 → +5 | NO | Nitrite → nitrate. |
| SO₃²⁻ | SO₃²⁻ + H₂O₂ → SO₄²⁻ + H₂O | S: +4 → +6 | NO | Sulfite → sulfate. |
| As(III) | AsO₃³⁻ + H₂O₂ → AsO₄³⁻ + H₂O | As: +3 → +5 | NO | Arsenite → arsenate. |
| I⁻ | H₂O₂ + 2I⁻ → I₂ + 2OH⁻ | I: −1 → 0 | NO | **Trap:** I⁻ ≠ I₂/base. |
| H₂S | H₂S + H₂O₂ → S↓ + 2H₂O | S: −2 → 0 | NO | Sulfur precipitates. |
| Fe²⁺ / H⁺ | 2Fe²⁺ + 2H⁺ + H₂O₂ → 2Fe³⁺ + 2H₂O | Fe: +2 → +3 | NO | Acidic OA reaction. |
| Fe²⁺ / base | 2Fe²⁺ + H₂O₂ → 2Fe³⁺ + 2OH⁻ | Fe: +2 → +3 | NO | Basic OA reaction. |
| Ferrocyanide | 2[Fe(CN)₆]⁴⁻ + H₂O₂ + 2H⁺ → 2[Fe(CN)₆]³⁻ + 2H₂O | Ferro → Ferri | NO | **Trap:** Ferro → Ferri = no bubble. |
| Cr(III) / base | 2[Cr(OH)₄]⁻ + 3H₂O₂ + 2OH⁻ → 2CrO₄²⁻ + 8H₂O | Cr: +3 → +6 | NO | Cr(III) → chromate. |
| Mn²⁺ / base | Mn²⁺ + H₂O₂ + 2OH⁻ → MnO₂↓ + 2H₂O | Mn: +2 → +4 | NO | Same MnO₂ product as permanganate/base, opposite role. |

### Critical Distinctions

- **PbS vs PbO₂:** PbS → PbSO₄ (no O₂, OA action). PbO₂ → PbO (yes O₂, RA action).
- **Fe²⁺ vs Ferricyanide:** Fe²⁺ → Fe³⁺ (no O₂, OA action). Ferri/base → Ferro (yes O₂, RA action).
- **I⁻ vs I₂/base:** I⁻ → I₂ (no O₂, OA action). I₂/base → I⁻ (yes O₂, RA action).
      `),
    ],
  },

  {
    id: "h2o2-as-ra",
    label: "H₂O₂ as Reducing Agent (RA) — O₂ IS LIBERATED",
    blocks: [
      md(`
## H₂O₂ as Reducing Agent

When H₂O₂ acts as a reducing agent, O₂ IS LIBERATED. The oxygen in H₂O₂ goes from −1 to 0.

| Reactant | Reaction | Change | O₂? | JEE memory / trap |
|----------|----------|--------|-----|------------------|
| Cl₂ | Cl₂ + H₂O₂ → 2HCl + O₂↑ | Cl₂ → Cl⁻ | YES | Cl₂ > H₂O₂ (oxidising power). |
| Br₂ | Br₂ + H₂O₂ → 2HBr + O₂↑ | Br₂ → Br⁻ | YES | Br₂ > H₂O₂. |
| Ag₂O | Ag₂O + H₂O₂ → 2Ag + H₂O + O₂↑ | Ag: +1 → 0 | YES | Silver oxide → Ag metal. |
| O₃ | O₃ + H₂O₂ → H₂O + 2O₂↑ | O₃ → O₂ | YES | O₂ is a major product. |
| MnO₂ / H⁺ | MnO₂ + H₂O₂ + H₂SO₄ → MnSO₄ + 2H₂O + O₂↑ | Mn: +4 → +2 | YES | Acid pulls Mn(IV) to Mn²⁺. |
| PbO₂ | PbO₂ + H₂O₂ → PbO + H₂O + O₂↑ | Pb: +4 → +2 | YES | PbO₂ loses O; PbS opposite. |
| Pb₃O₄ / HNO₃ | Pb₃O₄ + H₂O₂ + 6HNO₃ → 3Pb(NO₃)₂ + 4H₂O + O₂↑ | Pb(IV) → Pb²⁺ | YES | Overall lead oxide reaction. |
| MnO₄⁻ / acid | 2MnO₄⁻ + 6H⁺ + 5H₂O₂ → 2Mn²⁺ + 8H₂O + 5O₂↑ | Mn: +7 → +2 | YES | **Mnemonic: A2** (Acidic → Mn²⁺). |
| MnO₄⁻ / base | 2MnO₄⁻ + 3H₂O₂ → 2MnO₂↓ + 3O₂↑ + 2H₂O + 2OH⁻ | Mn: +7 → +4 | YES | **Mnemonic: B4** (Basic → MnO₂). |
| Ferricyanide / base | 2[Fe(CN)₆]³⁻ + 2OH⁻ + H₂O₂ → 2[Fe(CN)₆]⁴⁻ + 2H₂O + O₂↑ | Ferri → Ferro | YES | **Ferri falls → O₂ flies.** |
| HOCl | HOCl + H₂O₂ → H₃O⁺ + Cl⁻ + O₂↑ | Cl: +1 → −1 | YES | Acidic reducing action. |
| OCl⁻ | OCl⁻ + H₂O₂ → Cl⁻ + H₂O + O₂↑ | Cl: +1 → −1 | YES | Hypochlorite → chloride. |
| IO₄⁻ | IO₄⁻ + H₂O₂ → IO₃⁻ + H₂O + O₂↑ | I: +7 → +5 | YES | Periodate → iodate. |
| I₂ / base | I₂ + H₂O₂ + 2OH⁻ → 2I⁻ + 2H₂O + O₂↑ | I: 0 → −1 | YES | Opposite of I⁻ oxidation. |

### Permanganate Mnemonic

**A2 – B4 – BOTH BUBBLE**

- **A2:** Acidic MnO₄⁻ → Mn²⁺ (with H₂O₂, gives O₂↑)
- **B4:** Basic MnO₄⁻ → MnO₂ (with H₂O₂, gives O₂↑)
- **Both reactions evolve O₂**
      `),
    ],
  },

  {
    id: "h2o2-medium-reactions",
    label: "Medium-Based Reactions — NCERT-Style Classification",
    blocks: [
      md(`
## H₂O₂ Reactions Classified by Medium

### Acidic Medium

| Partner | Reaction | H₂O₂ Role | O₂? |
|---------|----------|-----------|-----|
| Fe²⁺ | 2Fe²⁺ + 2H⁺ + H₂O₂ → 2Fe³⁺ + 2H₂O | OA | NO |
| PbS | PbS + 4H₂O₂ → PbSO₄ + 4H₂O | OA | NO |
| MnO₄⁻ | 2MnO₄⁻ + 6H⁺ + 5H₂O₂ → 2Mn²⁺ + 8H₂O + 5O₂↑ | RA | YES |
| HOCl | HOCl + H₂O₂ → H₃O⁺ + Cl⁻ + O₂↑ | RA | YES |
| CrO₄²⁻ | CrO₄²⁻ + 2H⁺ + 2H₂O₂ → CrO₅ (blue) + 3H₂O | Special | NO initially |

### Basic Medium

| Partner | Reaction | H₂O₂ Role | O₂? |
|---------|----------|-----------|-----|
| Fe²⁺ | 2Fe²⁺ + H₂O₂ → 2Fe³⁺ + 2OH⁻ | OA | NO |
| Mn²⁺ | Mn²⁺ + H₂O₂ + 2OH⁻ → MnO₂↓ + 2H₂O | OA | NO |
| I₂ | I₂ + H₂O₂ + 2OH⁻ → 2I⁻ + 2H₂O + O₂↑ | RA | YES |
| MnO₄⁻ | 2MnO₄⁻ + 3H₂O₂ → 2MnO₂↓ + 3O₂↑ + 2H₂O + 2OH⁻ | RA | YES |

### Critical Observation

**Medium changes the Mn product but BOTH evolve O₂ with permanganate:**
- Acidic MnO₄⁻ + H₂O₂ → Mn²⁺ + O₂
- Basic MnO₄⁻ + H₂O₂ → MnO₂ + O₂
      `),
    ],
  },

  {
    id: "h2o2-special-reactions",
    label: "Special & Exception Reactions",
    blocks: [
      md(`
## Special H₂O₂ Reactions

### Chromium Peroxide Formation

**First step (special, no O₂):**
CrO₄²⁻ + 2H⁺ + 2H₂O₂ → CrO₅ (blue) + 3H₂O

- NO O₂ evolved initially
- Forms characteristic **blue chromium peroxide complex CrO₅**
- Treat as **peroxide-complex formation**, not simple redox

**Subsequent reaction (O₂ released):**
4CrO₅ + 12H⁺ → 4Cr³⁺ + 7O₂↑ + 6H₂O

- The blue CrO₅ decomposes on standing or in strongly acidic conditions
- **Memory: Blue first → bubbles later**

### Self-Decomposition

**H₂O₂ disproportionation/decomposition:**
2H₂O₂ → 2H₂O + O₂↑

- O₂ can form **even without an external oxidant**
- H₂O₂ itself undergoes disproportionation
- **Important JEE trap:** O₂ does NOT prove another oxidant was present

### Catalysed Decomposition

- Light and traces of transition-metal ions accelerate decomposition
- Concentrated H₂O₂ must be stored in incompatible, light-protected containers
- Pure H₂O₂ is almost colourless with a very pale blue tint
      `),
    ],
  },

  {
    id: "h2o2-quick-classification",
    label: "Quick O₂ / NO-O₂ Classification",
    blocks: [
      md(`
## O₂ Liberated vs No O₂ — Quick Reference

### O₂ Liberated — H₂O₂ behaves as RA

Cl₂, Br₂, Ag₂O, O₃, MnO₂/H⁺, PbO₂, Pb₃O₄/HNO₃, MnO₄⁻/acid, MnO₄⁻/base, ferricyanide/base, OCl⁻/HOCl, IO₄⁻, I₂/base

**Why?** H₂O₂ oxygen: −1 → 0

### No O₂ — H₂O₂ behaves as OA

PbS, NO₂⁻, SO₃²⁻, As(III), I⁻, H₂S, Fe²⁺, ferrocyanide, Cr(III), Mn²⁺/base

**Why?** H₂O₂ oxygen: −1 → −2

### Special First Step

CrO₄²⁻ + H₂O₂/H⁺ → blue CrO₅

- **No O₂ initially**
- O₂ appears when CrO₅ subsequently reacts/decomposes
- **Memory: Blue first → bubbles later**

### Independent O₂ Source

2H₂O₂ → 2H₂O + O₂↑

- Decomposition/disproportionation
- No other oxidant required
      `),
    ],
  },

  {
    id: "h2o2-jee-traps",
    label: "High-Yield JEE Traps & Memory Codes",
    blocks: [
      md(`
## JEE Traps — Know These!

### #1: Do Not Create a Universal Redox Order
**Only fixed order:** Cl₂ > Br₂ > H₂O₂ > I₂

Other behaviour is **medium/reaction dependent**. Do NOT extend this order.

### #2: RA → O₂; OA → Usually No O₂
**Reason:** H₂O₂ oxygen −1 → 0 in RA action; −1 → −2 in OA action.

### #3: Medium Changes Mn Product
- MnO₄⁻/acid → Mn²⁺
- MnO₄⁻/base → MnO₂
- Both evolve O₂

### #4: Same MnO₂, Opposite Role
- MnO₄⁻/base → MnO₂: **H₂O₂ = RA**, O₂↑
- Mn²⁺/base → MnO₂: **H₂O₂ = OA**, no O₂

### #5: I⁻ and I₂ Are Opposite Cases
- I⁻ → I₂: OA, no O₂
- I₂/base → I⁻: RA, O₂↑

### #6: Ferro vs Ferri
- Ferro → Ferri: OA, no O₂
- Ferri/base → Ferro: RA, O₂↑

### #7: PbS vs PbO₂
- PbS → PbSO₄: OA, no O₂
- PbO₂ → PbO: RA, O₂↑

### #8: Chromium Peroxide Is Special
- Chromate + H₂O₂/H⁺ gives blue CrO₅ first without O₂
- O₂ appears later when CrO₅ decomposes

### #9: O₂ Does NOT Prove Another Oxidant
- H₂O₂ itself can decompose/disproportionate to H₂O + O₂
- Look for the reaction partner, not just O₂ evolution

### #10: Acid ≠ Always OA; Base ≠ Always RA
- H₂O₂ can act **both as OA and RA in both media** depending on the reaction partner
- Medium determines Mn product, but not necessarily whether O₂ is released

## Final Memory Codes

| Mnemonic | Meaning |
|----------|---------|
| **RA = Releases Air** | H₂O₂ as reducing agent → usually O₂↑ |
| **OA = No bubble** | H₂O₂ as oxidising agent → usually H₂O / OH⁻, no O₂ |
| **A2 – B4 – Both Bubble** | MnO₄⁻: acid → Mn²⁺; base → MnO₂; both give O₂ |
| **Ferri falls → O₂ flies** | Ferricyanide → ferrocyanide in base gives O₂ |
| **PbS gets O; PbO₂ loses O** | PbS → PbSO₄: no O₂; PbO₂ → PbO + O₂ |
| **Blue first → bubbles later** | CrO₄²⁻ + H₂O₂/H⁺ → blue CrO₅ first; O₂ later |
      `),
    ],
  },
];

import { md, type SBlockSection } from "./types";

export const ORDER_BANK_SECTIONS: SBlockSection[] = [
  {
    id: "order-bank",
    label: "22. Master Order Bank",
    blocks: [
      md(String.raw`
"Arrange in increasing/decreasing order of…" is the single most repeated s-block question format in JEE Advanced. Every order below follows directly from the reasoning built in Sections 1–21 — use this table to drill them, not to memorise them blind.

## Physical and atomic properties

| Property (increasing →) | Order |
|---|---|
| Atomic / ionic radius, Group 1 | Li < Na < K < Rb < Cs |
| Atomic / ionic radius, Group 2 | Be < Mg < Ca < Sr < Ba |
| Density, Group 1 | Li < K < Na < Rb < Cs (K breaks the simple trend) |
| First ionisation enthalpy, Group 1 | Cs < Rb < K < Na < Li |
| First ionisation enthalpy, Group 2 | Ba < Sr < Ca < Mg < Be |
| Melting point, Group 1 | Cs < Rb < K < Na < Li |
| Boiling point, Group 1 | Rb < Cs < K < Na < Li |
| Melting point, Group 2 | Mg < Ba < Sr < Ca < Be |
| Metallic / electropositive character, Group 1 | Li < Na < K < Rb < Cs |
| Hydration enthalpy of M⁺ | Cs⁺ < Rb⁺ < K⁺ < Na⁺ < Li⁺ |
| Hydration enthalpy of M²⁺ | Ba²⁺ < Sr²⁺ < Ca²⁺ < Mg²⁺ < Be²⁺ |
| Ionic (hydrated-shell-free) size in water — mobility of hydrated ion | Li⁺ < Na⁺ < K⁺ < Rb⁺ < Cs⁺ (opposite of bare-ion radius — the small ion drags the biggest hydration shell) |
| Effective hydrated radius | Cs⁺ < Rb⁺ < K⁺ < Na⁺ < Li⁺ |

## Reducing power and reactivity

| Property (increasing →) | Order |
|---|---|
| Reducing power, gas phase (Group 1) | Li < Na < K < Rb < Cs |
| Reducing power, aqueous solution (Group 1) | Na < K < Rb < Cs < Li (lithium flips to the top — hydration enthalpy dominates) |
| Reactivity toward cold water, Group 1 | Li < Na < K < Rb < Cs |
| Reactivity toward water, Group 2 | Be(none) < Mg(steam only) < Ca < Sr < Ba |
| Thermal stability of M–H bond (hydrides), Group 1 | CsH < RbH < KH < NaH < LiH |

## Basicity, solubility and thermal stability of compounds

| Property (increasing →) | Order |
|---|---|
| Basic strength of oxides, Group 2 | BeO < MgO < CaO < SrO < BaO |
| Basic strength / solubility / thermal stability of hydroxides, Group 1 | LiOH < NaOH < KOH < RbOH < CsOH |
| Basic strength / solubility of hydroxides, Group 2 | Be(OH)₂ < Mg(OH)₂ < Ca(OH)₂ < Sr(OH)₂ < Ba(OH)₂ |
| Thermal stability of carbonates, Group 1 | Li₂CO₃ < Na₂CO₃ < K₂CO₃ < Rb₂CO₃ < Cs₂CO₃ |
| Thermal stability of carbonates, Group 2 | BeCO₃ < MgCO₃ < CaCO₃ < SrCO₃ < BaCO₃ |
| Solubility of carbonates, Group 2 | BeCO₃ < MgCO₃ < CaCO₃ < BaCO₃ (all sparingly soluble; this is the relative order) |
| Thermal stability of nitrates | LiNO₃ (behaves like Group 2) < NaNO₃ ≈ KNO₃ ≈ RbNO₃ ≈ CsNO₃ (all give nitrite + O₂; Li alone jumps straight to oxide + NO₂ + O₂) |
| Solubility of fluorides, Group 1 | LiF < NaF < KF < RbF < CsF |
| Solubility / covalent character, lithium halides | LiF < LiCl < LiBr < LiI |
| Solubility of sulfates, Group 2 | BaSO₄ < SrSO₄ < CaSO₄ < MgSO₄ (Be²⁺/Mg²⁺ sulfates dissolve; heavier members precipitate) |

## Structural and bonding character

| Property (increasing →) | Order |
|---|---|
| Ionic character of alkali halides, fixed anion | LiX < NaX < KX < RbX < CsX |
| Covalent character of alkali halides, fixed cation | MF < MCl < MBr < MI (polarisability of the anion rises down the halogen group) |
| Ionic character / melting point of Group 2 chlorides | BeCl₂ < MgCl₂ < CaCl₂ < SrCl₂ < BaCl₂ |
| Melting point of sodium halides | NaI < NaBr < NaCl < NaF |
| Melting point of calcium halides | CaI₂ < CaBr₂ < CaCl₂ < CaF₂ |
| Polarising power (Fajans) of the cation | Cs⁺ < Rb⁺ < K⁺ < Na⁺ < Li⁺ < Be²⁺ (Be²⁺ is the single most polarising s-block cation) |

## How to derive an order you don't remember

**Size-only properties** (atomic/ionic radius, hydration enthalpy magnitude, polarising power) always run smoothly with the periodic position — no exceptions inside a group.

**Energetics that combine two competing terms** (aqueous reducing power, solubility of hydroxides vs sulfates, melting point) can reverse or show a blip (K density, Group-2 melting point) — identify which two enthalpy terms are racing before trusting a "smooth" order.

**Lithium and beryllium are first-member exceptions** almost every time a Group-1/Group-2 order is asked — check Sections 12 and 17 before answering.
`),
    ],
  },
];

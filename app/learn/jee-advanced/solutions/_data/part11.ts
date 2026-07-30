import type { SolutionPart } from "./types";
import { part11Source } from "./source/part11Source";
import { part11Reference } from "./reference/part11Reference";
import { part11ReferenceExtra } from "./referenceExtra/part11ReferenceExtra";
import { part11ReferenceBonus } from "./referenceBonus/part11ReferenceBonus";

export const part11: SolutionPart = {
  "number": 11,
  "slug": "11-vapour-pressure-lowering",
  "shortTitle": "Vapour-Pressure Lowering",
  "title": "Relative Lowering of Vapour Pressure and Molar-Mass Methods",
  "subtitle": "The first colligative property, exact and dilute forms, static manometry, Ostwald–Walker method and transformed source numericals.",
  "sourcePages": "46–53",
  "objectives": [
    "Derive lowering and relative lowering of vapour pressure.",
    "Use exact and dilute expressions correctly.",
    "Calculate molar mass from vapour-pressure data.",
    "Explain static and dynamic experimental methods.",
    "Separate mass-gain contributions in Ostwald–Walker apparatus."
  ],
  "blocks": [
    ...part11Source,
    {
      "kind": "theory",
      "title": "Why a nonvolatile solute lowers vapour pressure",
      "paragraphs": [
        "A nonvolatile solute does not contribute appreciably to the vapour phase. It reduces the mole fraction and chemical potential of the solvent in the liquid, so the equilibrium solvent vapour pressure falls.",
        "The surface-site picture is useful visually but incomplete thermodynamically. The deeper cause is the lower solvent chemical potential in solution."
      ],
      "sourcePages": "46–49",
      "visual": "vapour-lowering"
    },
    {
      "kind": "derivation",
      "title": "Relative lowering of vapour pressure",
      "steps": [
        "For a solution containing volatile solvent 1 and nonvolatile solute 2, Raoult’s law gives p₁=x₁p₁°.",
        "Since x₁=1−x₂, p₁=p₁°(1−x₂).",
        "Rearrange the lowering Δp=p₁°−p₁.",
        "Divide by p₁°."
      ],
      "result": "(p₁°−p₁)/p₁° = x₂ = n₂/(n₁+n₂)",
      "assumptions": [
        "Solute is nonvolatile.",
        "Solution behaves ideally with respect to solvent.",
        "Temperature is fixed."
      ],
      "sourcePages": "47–49"
    },
    {
      "kind": "derivation",
      "title": "Dilute mass formula",
      "steps": [
        "For a dilute solution, n₂≪n₁, so x₂≈n₂/n₁.",
        "Substitute n₂=w₂/M₂ and n₁=w₁/M₁.",
        "Rearrange for molar mass when required."
      ],
      "result": "(p°−p)/p° ≈ (w₂M₁)/(M₂w₁);  M₂≈(w₂M₁p°)/(w₁Δp)",
      "assumptions": [
        "Solute amount is small compared with solvent amount.",
        "Molar masses and masses use consistent units."
      ],
      "sourcePages": "48–50"
    },
    {
      "kind": "example",
      "number": "11.1",
      "title": "Vapour pressure of a concentrated solution",
      "question": "A solution contains 15.0 g glucose in 85.0 g water at a temperature where p°(water)=24.0 torr. Calculate the exact solvent vapour pressure.",
      "steps": [
        "n_glucose=15/180=0.08333 mol.",
        "n_water=85/18=4.7222 mol.",
        "x_water=4.7222/(4.7222+0.08333)=0.98266.",
        "p=x_waterp°=0.98266×24.0=23.584 torr."
      ],
      "answer": "p=23.58 torr; lowering=0.416 torr.",
      "sourcePages": "48–51",
      "transformation": "Masses and pure solvent pressure changed from the source glucose problem."
    },
    {
      "kind": "example",
      "number": "11.2",
      "title": "Solute mass for a target lowering",
      "question": "How much sucrose (M=342 g mol⁻¹) must be dissolved in 180 g water to produce an exact relative lowering of 0.0200?",
      "steps": [
        "Let n_s be sucrose moles and n_w=180/18=10.0 mol.",
        "0.0200=n_s/(10.0+n_s).",
        "0.0200(10.0+n_s)=n_s ⇒ n_s=0.20408 mol.",
        "Mass=0.20408×342=69.8 g."
      ],
      "answer": "69.8 g sucrose.",
      "sourcePages": "50–52",
      "transformation": "Target lowering and water mass changed."
    },
    {
      "kind": "theory",
      "title": "Static method using a manometer",
      "paragraphs": [
        "In the static method, pure solvent and solution are maintained at the same temperature in connected limbs. Their equilibrium vapour pressures produce a pressure difference measured by a manometric liquid.",
        "Because vapour-pressure lowering is often small, temperature uniformity and absence of dissolved gases are essential. The measured height must be converted using the density of the manometric liquid."
      ],
      "sourcePages": "50–51"
    },
    {
      "kind": "theory",
      "title": "Ostwald–Walker dynamic method",
      "paragraphs": [
        "Dry air is passed successively through bulbs containing solution, pure solvent and an anhydrous absorber. Air leaving the solution is saturated at p; it then takes up additional solvent from pure solvent corresponding to p°−p.",
        "The absorber gains the total solvent carried. If mass gain of solution bulbs is represented appropriately and mass gain of pure-solvent bulbs is measured, their ratio gives the relative lowering."
      ],
      "equations": [
        "Relative lowering = Δp/p° = mass gain associated with pure-solvent stage / total absorbed solvent mass"
      ],
      "sourcePages": "51–53",
      "visual": "ostwald-walker"
    },
    {
      "kind": "example",
      "number": "11.3",
      "title": "Molar mass from an Ostwald–Walker experiment",
      "question": "In a dynamic experiment, the solution section loses 1.92 g solvent while the pure-solvent section loses an additional 0.080 g. The solution initially contains 5.40 g nonvolatile solute in 90.0 g solvent of molar mass 60.0 g mol⁻¹. Estimate solute molar mass using the dilute approximation.",
      "steps": [
        "Relative lowering Δp/p°=0.080/(1.92+0.080)=0.0400.",
        "For dilute solution, 0.0400≈(w₂M₁)/(M₂w₁).",
        "M₂=(5.40×60.0)/(0.0400×90.0)=90.0 g mol⁻¹."
      ],
      "answer": "Estimated molar mass=90.0 g mol⁻¹.",
      "sourcePages": "51–53",
      "transformation": "Mass losses, solute mass and solvent molar mass changed."
    },
    {
      "kind": "example",
      "number": "11.4",
      "title": "Exact molar mass from pressure data",
      "question": "2.40 g of a nonvolatile solute is dissolved in 50.0 g benzene (M=78.0 g mol⁻¹). The relative lowering is 0.0120. Find the exact molar mass.",
      "steps": [
        "n_benzene=50.0/78.0=0.64103 mol.",
        "Let n_s be solute moles. 0.0120=n_s/(0.64103+n_s).",
        "n_s=0.007786 mol.",
        "M_s=2.40/0.007786=308.2 g mol⁻¹."
      ],
      "answer": "M_s=308 g mol⁻¹.",
      "sourcePages": "48–52",
      "transformation": "Changed solvent, masses and relative lowering."
    },
    {
      "kind": "reference",
      "title": "Activity of solvent and real-solution correction",
      "paragraphs": [
        "For a real solution, solvent vapour pressure is p₁=a₁p₁°. Relative lowering then measures 1−a₁ rather than exactly the solute mole fraction.",
        "At finite concentration, activity coefficients and solute association can make vapour-pressure molar masses differ from true values."
      ],
      "equations": [
        "p₁=a₁p₁°=γ₁x₁p₁°"
      ],
      "sourceLabel": "Supplemental activity-based depth."
    },
    {
      "kind": "reference",
      "title": "Solvent activity from vapour pressure",
      "paragraphs": [
        "Vapour-pressure measurement is a direct route to solvent activity when the vapour behaves ideally: a₁=p₁/p₁°. This remains meaningful even when Raoult’s-law mole-fraction prediction fails.",
        "Solvent activity controls water availability in foods, pharmaceuticals and biological systems. Two solutions with the same water content can have different water activity because solutes interact differently.",
        "Thus relative lowering is both a colligative limit and a broader thermodynamic measurement."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Isopiestic method",
      "paragraphs": [
        "In an isopiestic experiment, solutions share a closed vapour space and exchange solvent until their solvent activities become equal. Comparison with a reference solution of known activity yields activity data for the unknown.",
        "The method avoids direct measurement of very small vapour-pressure differences and is useful for concentrated electrolyte solutions.",
        "At equilibrium, equal solvent vapour pressure does not imply equal concentration because different solutes alter activity differently."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Nonvolatile versus volatile solute",
      "paragraphs": [
        "The simple lowering derivation assumes the solute contributes no vapour pressure. If both components are volatile, total pressure includes both Raoult or activity terms and may rise or fall depending on composition.",
        "A low-volatility solute can sometimes be approximated as nonvolatile, but the required accuracy should be assessed from its pure vapour pressure.",
        "When the solute is volatile, molar-mass determination from relative lowering using the nonvolatile formula is invalid."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "trap",
      "title": "Do not use the dilute formula for a concentrated solution",
      "paragraphs": [
        "The exact expression contains n₁+n₂ in the denominator. The common approximation x₂≈n₂/n₁ can give a significant error when relative lowering is several percent."
      ],
      "sourcePages": "48–52"
    },
    ...part11Reference,
    ...part11ReferenceExtra,
    ...part11ReferenceBonus
  ]
};

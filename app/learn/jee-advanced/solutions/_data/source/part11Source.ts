import type { NoteBlock } from "../types";

export const part11Source: NoteBlock[] = [
  {
    "kind": "theory",
    "title": "Colligative properties depend on particle number",
    "paragraphs": [
      "The source introduces colligative properties as properties of dilute solutions that depend primarily on the number of dissolved particles relative to solvent, not on the chemical identity of a nonvolatile solute. The four listed properties are relative lowering of vapour pressure, elevation of boiling point, depression of freezing point and osmotic pressure.",
      "The statement is exact only within an ideal-dilute framework. Solute identity can matter through nonideality, association, dissociation, solvation or volatility. These effects are later represented by activities and the van’t Hoff factor.",
      "The source gives simple numerical comparisons showing that one mole of glucose and one mole of urea in the same amount of water produce nearly the same colligative effect, whereas electrolytes can produce larger effects because they generate more particles."
    ],
    "sourcePages": "Pages 46–47"
  },
  {
    "kind": "derivation",
    "title": "Lowering and relative lowering of vapour pressure",
    "introduction": "A nonvolatile solute lowers solvent vapour pressure because only solvent contributes to the vapour and its liquid mole fraction is less than one.",
    "steps": [
      "For pure solvent 1, vapour pressure is p₁°.",
      "For an ideal solution containing nonvolatile solute 2, Raoult’s law gives p₁=x₁p₁°.",
      "Subtract from p₁°: p₁°−p₁=p₁°(1−x₁).",
      "Since x₁+x₂=1, the relative lowering equals x₂."
    ],
    "result": "(p₁°−p₁)/p₁° = x₂ = n₂/(n₁+n₂)",
    "assumptions": [
      "Solute is nonvolatile at the measurement temperature.",
      "Solution obeys Raoult’s law for the solvent.",
      "No association or dissociation unless corrected by i."
    ],
    "sourcePages": "Pages 47–49",
    "visual": "vapour-lowering"
  },
  {
    "kind": "theory",
    "title": "Exact and dilute molar-mass forms",
    "paragraphs": [
      "The exact relation uses x₂=n₂/(n₁+n₂). For a very dilute solution n₂≪n₁, x₂≈n₂/n₁. Substituting n₂=w₂/M₂ and n₁=w₁/M₁ gives a convenient molar-mass formula.",
      "The source carefully separates absolute lowering p₁°−p₁ from relative lowering (p₁°−p₁)/p₁°. Relative lowering is colligative; absolute lowering also contains p₁° and therefore depends on solvent volatility.",
      "For the same mole fraction of solute, a more volatile solvent has a larger absolute lowering but the same relative lowering."
    ],
    "equations": [
      "Exact: (p°−p)/p°=(w₂/M₂)/[(w₁/M₁)+(w₂/M₂)]",
      "Dilute: (p°−p)/p°≈(w₂M₁)/(w₁M₂)"
    ],
    "sourcePages": "Pages 48–50"
  },
  {
    "kind": "theory",
    "title": "Source numericals on vapour pressure and required solute mass",
    "paragraphs": [
      "One source problem calculates the vapour pressure of a concentrated glucose solution from solute and solvent masses. Because the solution is not extremely dilute, the exact mole fraction is used. Another asks how much sucrose must be dissolved to obtain a specified lowering at a known pure-solvent vapour pressure.",
      "A third problem passes dry air through solution, then pure water, then anhydrous calcium chloride. Loss of mass from the solution is proportional to p, while gain in the drying tube after pure water is proportional to p°. Their ratio directly supplies p/p° and hence solute mole fraction.",
      "Solved Questions 11.1, 11.2 and 11.3 retain these structures with altered masses, solvents and measured mass changes."
    ],
    "sourcePages": "Pages 49–51"
  },
  {
    "kind": "theory",
    "title": "Static method for measuring vapour-pressure lowering",
    "paragraphs": [
      "In the static method, pure solvent and solution are connected to opposite limbs of a differential manometer and allowed to reach equilibrium at the same temperature. The pressure difference is balanced by a liquid-column height h.",
      "If the manometer liquid has density ρ, the pressure difference is Δp=ρgh in SI units, with appropriate conversion for mercury or other manometric fluids. The apparatus must be free of noncondensable gas because trapped air would add an unknown partial pressure.",
      "The method measures absolute lowering directly. Relative lowering requires division by the independently measured pure-solvent vapour pressure."
    ],
    "equations": [
      "p°−p=ρgh"
    ],
    "sourcePages": "Page 51"
  },
  {
    "kind": "theory",
    "title": "Ostwald–Walker dynamic method",
    "paragraphs": [
      "In the dynamic method, a stream of dry air first passes through bulbs containing solution, then through bulbs containing pure solvent, and finally through a weighed drying tube. Air leaving the solution is saturated at pressure p; it gains additional solvent vapour in the pure-solvent bulbs until the solvent partial pressure is p°.",
      "The mass loss from the solution bulbs is proportional to p. The extra mass lost from the pure-solvent bulbs is proportional to p°−p. The total gain of the drying tube is proportional to p°. Therefore ratios of measured mass changes give p/p° and the relative lowering without measuring gas volume.",
      "Airflow must be slow enough for saturation, and all vessels must remain at the same temperature."
    ],
    "equations": [
      "mass loss from solution ∝ p",
      "mass loss from pure solvent ∝ p°−p",
      "drying-tube gain ∝ p°"
    ],
    "sourcePages": "Page 52",
    "visual": "ostwald-walker"
  },
  {
    "kind": "theory",
    "title": "Dynamic-method interpretation and error controls",
    "paragraphs": [
      "The source schematic includes multiple bulbs to increase gas–liquid contact. Dry air is essential at the inlet; otherwise the incoming solvent vapour would invalidate the mass balance. The final calcium chloride or other desiccant must absorb all transported solvent vapour.",
      "Evaporation cools the bulbs, so a thermostated bath is normally used. Any solute volatility, entrainment of droplets or unequal temperatures causes systematic error.",
      "The dynamic method is conceptually important because it converts an equilibrium pressure ratio into measurable mass changes."
    ],
    "sourcePages": "Pages 51–52"
  },
  {
    "kind": "theory",
    "title": "Transition from vapour-pressure lowering to boiling-point elevation",
    "paragraphs": [
      "The source closes the vapour-pressure section by noting that a solution has a lower vapour pressure than pure solvent at every common temperature. To reach a fixed external pressure, the solution must therefore be heated to a higher temperature.",
      "This graphical argument produces elevation of boiling point before any algebra is introduced. The pure-solvent and solution vapour-pressure curves intersect the external-pressure line at T_b° and T_b respectively, with T_b>T_b°."
    ],
    "sourcePages": "Page 53",
    "visual": "boiling-elevation"
  }
];

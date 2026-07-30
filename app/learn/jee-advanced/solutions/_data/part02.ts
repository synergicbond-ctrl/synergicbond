import type { SolutionPart } from "./types";

export const part02: SolutionPart = {
  "number": 2,
  "slug": "02-henrys-law",
  "shortTitle": "Henry’s Law",
  "title": "Gas Solubility, Pressure Effects and Henry’s Law",
  "subtitle": "Molecular interpretation, temperature dependence, limitations, mixed-gas dissolution and pressure-independent gas-volume results.",
  "sourcePages": "3–9",
  "objectives": [
    "Explain how gas and solvent identity control solubility.",
    "Use p = Kₕx for one gas and for mixed gases.",
    "Relate the magnitude of Kₕ to solubility.",
    "Explain pressure and temperature effects thermodynamically.",
    "Recognise when Henry’s law fails."
  ],
  "blocks": [
    {
      "kind": "theory",
      "title": "Factors governing solubility of a gas in a liquid",
      "paragraphs": [
        "Gas dissolution establishes a dynamic equilibrium between molecules entering and leaving the liquid. The equilibrium amount reflects the relative stabilisation of a gas molecule in the liquid compared with the gas phase.",
        "Chemical similarity is only a first guide. Polarizability, specific hydrogen bonding, acid–base reaction and quadrupole interactions can dominate. Thus NH₃ and HCl dissolve in water far more extensively than an inert gas, while the solubility of noble gases generally rises from helium to xenon as polarizability increases.",
        "At fixed temperature, raising the gas partial pressure increases the equilibrium dissolved mole fraction. At fixed pressure, heating usually lowers gas solubility because dissolution of most gases is exothermic."
      ],
      "bullets": [
        "Like dissolves like is qualitative, not a quantitative law.",
        "Use partial pressure of the chosen gas, never total pressure, in a gas mixture.",
        "A larger Kₕ in p = Kₕx means lower solubility at the same pressure."
      ],
      "sourcePages": "3–6",
      "visual": "henry"
    },
    {
      "kind": "derivation",
      "title": "Henry’s law from equality of transfer rates",
      "steps": [
        "Let the rate at which gas molecules enter the liquid be proportional to their partial pressure: r(in) = k₁p.",
        "For a dilute solution, let the rate of escape be proportional to dissolved mole fraction: r(out) = k₂x.",
        "At dynamic equilibrium r(in) = r(out), so k₁p = k₂x.",
        "Collect constants at a fixed gas–solvent pair and temperature."
      ],
      "result": "p = Kₕx, where Kₕ = k₂/k₁.",
      "assumptions": [
        "Dissolved gas is dilute.",
        "Gas behaves nearly ideally.",
        "No chemical reaction, ionisation or association occurs.",
        "Temperature is fixed."
      ],
      "sourcePages": "4–5"
    },
    {
      "kind": "theory",
      "title": "Temperature dependence and enthalpy of solution",
      "paragraphs": [
        "For most gases, transfer from gas to liquid releases heat. Le Châtelier’s principle then predicts that heating shifts equilibrium toward the gas phase. In the common p = Kₕx convention, Kₕ therefore usually increases with temperature.",
        "Care is needed because some books define a Henry constant as concentration divided by pressure rather than pressure divided by mole fraction. The numerical trend with temperature reverses when the reciprocal convention is used."
      ],
      "equations": [
        "ln(K₂/K₁) = (ΔHₛₒₗ/R)(1/T₂ − 1/T₁)  for K = concentration/pressure",
        "For p = Kₕx and exothermic dissolution: Kₕ generally increases as T increases"
      ],
      "sourcePages": "5–6"
    },
    {
      "kind": "table",
      "title": "When Henry’s law works and when it fails",
      "headers": [
        "Situation",
        "Expected behaviour",
        "Reason"
      ],
      "rows": [
        [
          "Dilute inert gas at modest pressure",
          "Good linear p–x relation",
          "Gas–gas and solute–solute interactions are negligible."
        ],
        [
          "Very high pressure",
          "Nonlinear behaviour",
          "Gas nonideality and finite solubility become important."
        ],
        [
          "HCl, NH₃ or SO₂ in water",
          "Simple law may fail badly",
          "Dissociation, hydration or chemical reaction changes dissolved species."
        ],
        [
          "Gas associates in solvent",
          "Apparent constant changes with concentration",
          "The measured particles are not the species used in the simple model."
        ],
        [
          "Near solvent freezing or boiling limits",
          "Deviations increase",
          "Phase changes and strong temperature dependence complicate equilibrium."
        ]
      ],
      "sourcePages": "5–6"
    },
    {
      "kind": "example",
      "number": "2.1",
      "title": "Mass of nitrogen dissolved",
      "question": "At 298 K, nitrogen has Kₕ = 4.80×10⁴ bar in water. Find the mass of N₂ dissolved in 720 g water under a nitrogen partial pressure of 5.4 bar.",
      "steps": [
        "x(N₂)=p/Kₕ=5.4/(4.80×10⁴)=1.125×10⁻⁴.",
        "n(water)=720/18=40.0 mol.",
        "Using x=n_g/(n_g+n_w), n_g=x n_w/(1−x)=0.0045005 mol.",
        "mass N₂=0.0045005×28=0.126 g."
      ],
      "answer": "0.126 g N₂.",
      "given": [
        "pN₂=5.4 bar",
        "Kₕ=4.80×10⁴ bar",
        "water=720 g"
      ],
      "sourcePages": "6–7",
      "transformation": "Pressure, solvent mass and Henry constant changed from the source numerical."
    },
    {
      "kind": "example",
      "number": "2.2",
      "title": "Dissolved composition from an air-like mixture",
      "question": "A gas mixture contains 24.0% O₂ and 76.0% N₂ by volume at 10.0 bar. At the temperature used, Kₕ(O₂)=42 kbar and Kₕ(N₂)=84 kbar. Find n(O₂)/n(N₂) in the dissolved gas.",
      "steps": [
        "p(O₂)=0.24×10=2.40 bar and p(N₂)=7.60 bar.",
        "For a common large solvent amount, dissolved moles are proportional to xᵢ=pᵢ/Kₕ,ᵢ.",
        "n(O₂)/n(N₂)=(2.40/42000)/(7.60/84000)=0.6316."
      ],
      "answer": "n(O₂):n(N₂)=0.632:1.",
      "sourcePages": "7",
      "transformation": "Gas percentages, pressure and constants changed; the two-gas Henry-law method is retained."
    },
    {
      "kind": "example",
      "number": "2.3",
      "title": "Mass and collection pressure of dissolved gases",
      "question": "The mixture in Question 2.2 stands over 450 g water. Estimate the masses of O₂ and N₂ dissolved. If all dissolved gas is collected dry in a 15.0 L vessel at 400 K, calculate its pressure.",
      "steps": [
        "n(water)=450/18=25.0 mol.",
        "For dilute gases, n(O₂)≈x(O₂)n(water)=(2.40/42000)×25=1.4286×10⁻³ mol.",
        "n(N₂)≈(7.60/84000)×25=2.2619×10⁻³ mol.",
        "Masses are 0.0457 g O₂ and 0.0633 g N₂.",
        "Total moles=3.6905×10⁻³. P=nRT/V=(3.6905×10⁻³×0.082057×400)/15=8.08×10⁻³ atm."
      ],
      "answer": "m(O₂)=0.0457 g, m(N₂)=0.0633 g and collected pressure=8.08×10⁻³ atm.",
      "sourcePages": "7–8",
      "transformation": "Reframed the source multi-part dissolved-air problem with new composition, water mass, vessel volume and temperature."
    },
    {
      "kind": "derivation",
      "title": "Why dissolved-gas volume can be independent of pressure",
      "steps": [
        "For a very large solvent amount, x_g≈n_g/n_s.",
        "Henry’s law gives p=Kₕn_g/n_s, hence n_g=pn_s/Kₕ.",
        "If the dissolved gas is released and its volume is measured at the same pressure p and temperature T, V=n_gRT/p.",
        "Substitute n_g=pn_s/Kₕ. Pressure cancels."
      ],
      "result": "V = nₛRT/Kₕ, independent of the pressure at which the gas was dissolved.",
      "assumptions": [
        "Solution remains dilute.",
        "Solvent amount is effectively unchanged.",
        "Released gas is ideal.",
        "Measurement is made at the same pressure and temperature."
      ],
      "sourcePages": "8"
    },
    {
      "kind": "example",
      "number": "2.4",
      "title": "Pressure-independent released volume",
      "question": "Two identical bottles contain the same large amount of water at 298 K. CO₂ is dissolved in one at 4 bar and in the other at 10 bar. The released gas from each is measured at its own dissolution pressure. Compare the measured gas volumes.",
      "steps": [
        "By Henry’s law, dissolved moles are proportional to pressure.",
        "Measured gas volume at the same pressure is V=nRT/p.",
        "Since n∝p, the factor p cancels.",
        "Therefore both measured volumes are equal, provided the dilute Henry-law regime is maintained."
      ],
      "answer": "The two released-gas volumes are equal under the stated idealised conditions.",
      "sourcePages": "8–9",
      "transformation": "Converted the source proof into an applied comparison question."
    },
    {
      "kind": "reference",
      "title": "Chemical potential interpretation of Henry’s law",
      "paragraphs": [
        "At equilibrium, the chemical potential of the gas in the vapour equals that of the dissolved gas. For an ideal gas μ_g=μ_g°+RT ln p, while at infinite dilution the solute chemical potential has the form μ_l=μ_l*+RT ln x. Equating them gives a proportionality between p and x.",
        "This view explains why the constant is specific to a gas–solvent pair and temperature: it contains the difference between standard chemical potentials in the two phases."
      ],
      "equations": [
        "μ_g° + RT ln p = μ_l* + RT ln x  ⇒  p = Kₕx"
      ],
      "sourceLabel": "Supplemental thermodynamic depth; no source wording reproduced."
    },
    {
      "kind": "reference",
      "title": "Microscopic solvation of gases",
      "paragraphs": [
        "A gas molecule entering a liquid creates a cavity, disrupts solvent structure and then gains stabilisation from dispersion, induction, dipole and possibly chemical interactions. The balance of these contributions determines the enthalpy and entropy of solution.",
        "Small nonpolar gases often have low water solubility because cavity formation is costly and compensating attractions are weak. More polarizable gases experience stronger dispersion forces; reactive gases can be enormously more soluble because they are converted into hydrated or ionic species.",
        "This microscopic picture explains why no single order of gas solubility is universal across solvents. The solvent identity and temperature must always be specified."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Henry constants and unit conventions",
      "paragraphs": [
        "Henry constants appear in several reciprocal forms: p/x, p/c, c/p and dimensionless ratios. Two tables can therefore quote values that move in opposite directions with solubility while both are correct.",
        "Before substitution, inspect the defining equation printed with the constant. If Kₕ=p/x, a large value means low solubility. If k=c/p, a large value means high solubility.",
        "Unit conversion is especially important when constants are reported in atm, bar, kbar or Pa. Dimensional analysis should be completed before numerical work, not after an implausible answer appears."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Applications of gas solubility",
      "paragraphs": [
        "Carbonated beverages are bottled under high CO₂ pressure; opening lowers pressure and shifts dissolved gas toward the vapour phase. Cold storage preserves carbonation because gas solubility is generally higher at lower temperature.",
        "Scuba decompression problems involve gases dissolved in blood and tissues under elevated pressure. Rapid pressure reduction can cause bubble formation, while controlled decompression allows gradual release.",
        "Aquatic oxygen levels fall as water warms, and thermal pollution can stress organisms. These applications are direct consequences of pressure and temperature effects, though real biological systems are more complex than a single ideal Henry-law solution."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "trap",
      "title": "Common Henry-law traps",
      "paragraphs": [
        "JEE Advanced questions often hide the required partial pressure inside a gas composition, or use a Henry constant written in kbar while pressure is given in bar. Another trap is replacing solvent moles by solution moles without checking whether the gas amount is truly negligible."
      ],
      "bullets": [
        "Convert kbar to bar before substitution.",
        "Use yᵢP for the partial pressure of gas i.",
        "Use the exact x=n_g/(n_g+n_solvent) when precision matters.",
        "Do not apply the simple law to a gas that reacts strongly with the solvent."
      ],
      "sourcePages": "5–8"
    }
  ]
};

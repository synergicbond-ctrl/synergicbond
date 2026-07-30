import type { SolutionPart } from "./types";

export const part04: SolutionPart = {
  "number": 4,
  "slug": "04-nonideal-solutions",
  "shortTitle": "Non-Ideal Solutions",
  "title": "Positive and Negative Deviations from Raoult’s Law",
  "subtitle": "Molecular origin, signs of mixing functions, pressure curves, boiling behaviour and predictive comparison of unlike interactions.",
  "sourcePages": "12–15",
  "objectives": [
    "Predict deviation sign from intermolecular forces.",
    "Relate deviation to ΔHmix and ΔVmix.",
    "Interpret pressure–composition curves.",
    "Connect deviation with boiling point and azeotrope tendency.",
    "Distinguish cause from mere correlation."
  ],
  "blocks": [
    {
      "kind": "theory",
      "title": "Positive deviation: weaker unlike interactions",
      "paragraphs": [
        "A positive deviation occurs when A–B attractions formed on mixing are weaker than the average A–A and B–B attractions broken. Molecules then escape more readily than Raoult’s law predicts, so measured partial and total pressures lie above the ideal lines.",
        "Separating strongly interacting like neighbours requires energy, while the newly formed unlike contacts recover less energy. Mixing is therefore commonly endothermic and often accompanied by expansion."
      ],
      "bullets": [
        "pᵢ > xᵢpᵢ° over the deviating range.",
        "ΔH_mix > 0.",
        "ΔV_mix > 0 is common but not logically mandatory in every real system.",
        "Boiling point is lower than the corresponding ideal prediction.",
        "Strong positive deviation may create a minimum-boiling azeotrope."
      ],
      "sourcePages": "12–13",
      "visual": "deviations"
    },
    {
      "kind": "theory",
      "title": "Negative deviation: stronger unlike interactions",
      "paragraphs": [
        "A negative deviation occurs when A–B attractions are stronger than the average interactions present before mixing. Molecules are held more tightly, escaping tendency falls, and measured pressures lie below Raoult’s-law lines.",
        "Formation of stronger unlike contacts usually releases heat and promotes closer packing, so contraction is common. A sufficiently deep pressure minimum corresponds to a maximum-boiling azeotrope at constant pressure."
      ],
      "bullets": [
        "pᵢ < xᵢpᵢ°.",
        "ΔH_mix < 0.",
        "ΔV_mix < 0 is common.",
        "Boiling point is higher than the ideal prediction.",
        "Strong negative deviation may create a maximum-boiling azeotrope."
      ],
      "sourcePages": "13–14"
    },
    {
      "kind": "table",
      "title": "Molecular examples and the interaction change",
      "headers": [
        "Mixture",
        "Deviation",
        "Dominant molecular explanation"
      ],
      "rows": [
        [
          "Ethanol + water",
          "Positive over much of the range",
          "Each pure liquid has an organised hydrogen-bond network; unlike contacts do not fully replace all broken like contacts."
        ],
        [
          "Acetone + carbon disulfide",
          "Positive",
          "Dipole–dipole acetone contacts are diluted by weakly interacting CS₂."
        ],
        [
          "Chloroform + acetone",
          "Negative",
          "Specific C–H···O attraction forms between unlike molecules."
        ],
        [
          "Nitric acid + water",
          "Negative",
          "Strong hydration and ion–dipole interactions stabilise the mixture."
        ],
        [
          "Acetone + aniline",
          "Negative",
          "Specific unlike association lowers escaping tendency."
        ]
      ],
      "sourcePages": "13–15"
    },
    {
      "kind": "checkpoint",
      "title": "A force-comparison algorithm",
      "paragraphs": [
        "Do not classify a mixture merely by saying that one component is polar and the other is non-polar. Compare the strengths and organisation of all contacts broken and all contacts formed."
      ],
      "bullets": [
        "List dominant A–A interactions.",
        "List dominant B–B interactions.",
        "Identify possible A–B interactions.",
        "Judge whether the average new A–B contact is weaker or stronger.",
        "Use ΔHmix or volume data, if supplied, as experimental evidence."
      ],
      "sourcePages": "13–14"
    },
    {
      "kind": "example",
      "number": "4.1",
      "title": "Predict deviation from calorimetric and volume data",
      "question": "Mixing one mole of solution releases 3.4 kJ and the volume decreases by 1.2 cm³. Predict the deviation from Raoult’s law and the boiling tendency.",
      "steps": [
        "Heat release gives ΔH_mix<0, showing stronger average A–B attractions.",
        "Contraction supports closer packing and stronger unlike interactions.",
        "Escaping tendency is reduced, so vapour pressure lies below the ideal line.",
        "A lower vapour pressure requires a higher temperature to reach a fixed external pressure."
      ],
      "answer": "Negative deviation; the mixture has a higher boiling tendency than an ideal solution of the same composition.",
      "sourcePages": "13–14",
      "transformation": "Calorimetric and contraction values changed."
    },
    {
      "kind": "example",
      "number": "4.2",
      "title": "Interpret an observed total pressure",
      "question": "At a given composition, Raoult’s law predicts P=68 kPa, but the measured pressure is 76 kPa. State the deviation, sign of excess Gibbs energy at that composition and likely sign of ΔH_mix for a strongly regular solution.",
      "steps": [
        "Measured pressure above the ideal value means positive deviation.",
        "Positive deviation corresponds to activities greater than mole fractions and commonly Gᴱ>0.",
        "For a strongly regular solution whose nonideality is enthalpy-dominated, ΔH_mix is likely positive."
      ],
      "answer": "Positive deviation; Gᴱ>0 and ΔH_mix is likely positive under the regular-solution assumption.",
      "sourcePages": "12–14",
      "transformation": "Reframed the source discussion as a quantitative interpretation."
    },
    {
      "kind": "reference",
      "title": "Activities and activity coefficients",
      "paragraphs": [
        "Real solutions are described by replacing mole fraction with activity: pᵢ=aᵢpᵢ°. For a liquid standard state, aᵢ=γᵢxᵢ. The activity coefficient γᵢ measures the deviation from ideality.",
        "Positive deviation gives γᵢ>1 over the affected range; negative deviation gives γᵢ<1. At infinite dilution, the solute approaches a Henry-law standard state rather than the Raoult standard state."
      ],
      "equations": [
        "pᵢ = γᵢxᵢpᵢ°",
        "γᵢ > 1: positive deviation; γᵢ < 1: negative deviation"
      ],
      "sourceLabel": "Supplemental reference-depth treatment using activities."
    },
    {
      "kind": "reference",
      "title": "Excess thermodynamic functions",
      "paragraphs": [
        "An excess property is the real-solution value minus the ideal-solution value at the same temperature, pressure and composition. For ideal solutions all excess functions vanish.",
        "Gibbs–Duhem consistency prevents the two activity coefficients from varying independently. If one component’s activity coefficient changes sharply with composition, the other must respond in a thermodynamically linked way."
      ],
      "equations": [
        "Gᴱ = G(real) − G(ideal)",
        "At constant T,P:  x_A d ln γ_A + x_B d ln γ_B = 0"
      ],
      "sourceLabel": "Supplemental depth from advanced physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Regular-solution model",
      "paragraphs": [
        "The regular-solution model assumes random mixing entropy is ideal but enthalpy of mixing is nonzero because unlike interactions differ from like interactions. A simple binary form is Gᴱ=Ωx_Ax_B.",
        "Positive Ω favours demixing and positive deviation; negative Ω favours strong unlike association and negative deviation. If Ω is sufficiently positive relative to RT, liquid–liquid phase separation can occur.",
        "This model connects intermolecular-force arguments with quantitative activities and shows why temperature can weaken nonideality by increasing the relative importance of entropy."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Partial miscibility and critical solution temperatures",
      "paragraphs": [
        "Strong positive deviations can become so large that a single liquid phase is unstable over part of the composition range. The system then separates into two liquid phases with different compositions.",
        "An upper critical solution temperature occurs when heating makes entropy dominate and restores complete miscibility. A lower critical solution temperature can occur when heating disrupts favourable solvation and promotes separation.",
        "Although the source notes focus on fully miscible systems, this extension clarifies that positive deviation and limited miscibility are parts of the same thermodynamic spectrum."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Hydrogen bonding: formation versus disruption",
      "paragraphs": [
        "A mixture containing hydrogen-bonding molecules cannot be classified by merely noting that hydrogen bonds are present. One must compare the networks in the pure liquids with the new network after mixing.",
        "If mixing breaks a highly cooperative network and forms fewer or weaker unlike bonds, positive deviation may result. If a specific strong donor–acceptor pair forms, negative deviation may result.",
        "This comparison is a recurring JEE Advanced theme because superficially similar polar liquids can show opposite deviations."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "trap",
      "title": "ΔVmix sign is supporting evidence, not an absolute law",
      "paragraphs": [
        "Many coaching summaries present positive deviation ⇔ expansion and negative deviation ⇔ contraction as exact equivalences. They are reliable trends for common textbook systems, but pressure deviation is fundamentally controlled by chemical potentials and activities. Use directly supplied vapour-pressure or enthalpy information first."
      ],
      "sourcePages": "12–15"
    }
  ]
};

import type { SolutionPart } from "./types";
import { part15Source } from "./source/part15Source";
import { part15Reference } from "./reference/part15Reference";
import { part15ReferenceExtra } from "./referenceExtra/part15ReferenceExtra";

export const part15: SolutionPart = {
  "number": 15,
  "slug": "15-osmotic-pressure-numericals",
  "shortTitle": "Osmotic Numericals",
  "title": "van’t Hoff Osmotic Equation and Advanced Numericals",
  "subtitle": "Derivation of πV=nRT, molar-mass determination, differential osmosis, density links, partial osmotic pressures and solution mixing.",
  "sourcePages": "69–73",
  "objectives": [
    "Derive πV=nRT.",
    "Calculate osmotic pressure and molar mass.",
    "Find pressure required to stop osmosis between two solutions.",
    "Combine osmotic pressures on mixing.",
    "Relate osmotic pressure to vapour-pressure lowering and density."
  ],
  "blocks": [
    ...part15Source,
    {
      "kind": "derivation",
      "title": "van’t Hoff equation for dilute solutions",
      "steps": [
        "From the thermodynamic expression π=−(RT/V̄₁)ln x₁, use −ln x₁≈x₂ for a dilute solution.",
        "With n₂≪n₁, x₂≈n₂/n₁.",
        "The solvent volume is approximately n₁V̄₁ and is nearly the solution volume V.",
        "Substitute to obtain the ideal-gas-like relation."
      ],
      "result": "πV=n₂RT;  π=CRT",
      "assumptions": [
        "Dilute ideal solution.",
        "Nonvolatile solute.",
        "Ideal semipermeable membrane.",
        "Solute does not associate or dissociate unless corrected by i."
      ],
      "sourcePages": "69–70"
    },
    {
      "kind": "example",
      "number": "15.1",
      "title": "Osmotic pressure of glucose solution",
      "question": "9.00 g glucose is dissolved to make 250 mL solution at 300 K. Calculate osmotic pressure.",
      "steps": [
        "n=9.00/180=0.0500 mol.",
        "C=0.0500/0.250=0.200 mol L⁻¹.",
        "π=CRT=0.200×0.082057×300=4.923 atm."
      ],
      "answer": "π=4.92 atm.",
      "sourcePages": "70–71",
      "transformation": "Glucose mass, solution volume and temperature changed."
    },
    {
      "kind": "example",
      "number": "15.2",
      "title": "Pressure needed to stop osmosis between two solutions",
      "question": "Two glucose solutions at 298 K have concentrations 0.18 M and 0.07 M and are separated by an ideal SPM. What pressure difference prevents net osmosis?",
      "steps": [
        "Only the osmotic-pressure difference matters.",
        "Δπ=RT(C_high−C_low).",
        "Δπ=0.082057×298×(0.18−0.07)=2.690 atm.",
        "Apply the extra pressure to the more concentrated side."
      ],
      "answer": "2.69 atm applied to the 0.18 M side.",
      "sourcePages": "70–71",
      "transformation": "Concentrations and temperature changed from the source differential-osmosis problem."
    },
    {
      "kind": "example",
      "number": "15.3",
      "title": "Molar mass of a polymer",
      "question": "0.600 g polymer is dissolved to make 100.0 mL solution. At 300 K its osmotic pressure is 3.50 mm Hg. Find molar mass.",
      "steps": [
        "Convert pressure: π=3.50/760=0.004605 atm.",
        "Use M=wRT/(πV).",
        "M=0.600×0.082057×300/(0.004605×0.1000).",
        "M=3.207×10⁴ g mol⁻¹."
      ],
      "answer": "M≈3.21×10⁴ g mol⁻¹.",
      "sourcePages": "71–72",
      "transformation": "Polymer mass, volume, pressure and temperature changed."
    },
    {
      "kind": "example",
      "number": "15.4",
      "title": "Vapour pressure from osmotic pressure and density",
      "question": "An aqueous solution at 298 K has osmotic pressure 6.00 atm and density 1.04 g mL⁻¹. Treat the solute as nonvolatile and dilute. Estimate the relative lowering of water vapour pressure.",
      "steps": [
        "For 1.000 L solution, solute moles C=π/RT=6.00/(0.082057×298)=0.2448 mol.",
        "Solution mass=1040 g. For a dilute solution, approximate solvent mass≈1040 g and n_water≈1040/18=57.78 mol.",
        "x_solute≈0.2448/(57.78+0.2448)=0.004219.",
        "Relative lowering≈x_solute."
      ],
      "answer": "Relative lowering≈4.22×10⁻³.",
      "sourcePages": "71–72",
      "transformation": "Osmotic pressure and density changed from the source cross-property problem."
    },
    {
      "kind": "example",
      "number": "15.5",
      "title": "Mixing two solutions using osmotic pressures",
      "question": "At the same temperature, 200 mL of a solution with π=3.0 atm is mixed with 300 mL of another solution with π=8.0 atm. Assume no reaction and additive volumes. Find final osmotic pressure.",
      "steps": [
        "At fixed T, solute moles are proportional to πV.",
        "π_f(V₁+V₂)=π₁V₁+π₂V₂.",
        "π_f=[3.0×0.200+8.0×0.300]/0.500=6.0 atm."
      ],
      "answer": "π_final=6.00 atm.",
      "sourcePages": "72–73",
      "transformation": "Volumes and pressures changed from the source mixing problem."
    },
    {
      "kind": "example",
      "number": "15.6",
      "title": "Partial osmotic pressures of two non-electrolytes",
      "question": "A solution contains 0.050 mol urea and 0.020 mol glucose in a final volume of 400 mL at 310 K. Calculate each partial osmotic pressure and the total.",
      "steps": [
        "π_urea=(0.050/0.400)RT=0.125×0.082057×310=3.179 atm.",
        "π_glucose=(0.020/0.400)RT=0.050×0.082057×310=1.272 atm.",
        "Total π=4.451 atm."
      ],
      "answer": "π_urea=3.18 atm, π_glucose=1.27 atm, total=4.45 atm.",
      "sourcePages": "72–73",
      "transformation": "Reframed the source partial-osmotic-pressure concept with new solutes and data."
    },
    {
      "kind": "reference",
      "title": "Virial form for polymer osmometry",
      "paragraphs": [
        "Real polymer solutions are analysed by measuring π at several concentrations and extrapolating π/C to zero concentration. The intercept gives RT/M and the slope gives information about polymer–solvent interactions.",
        "This removes leading nonideal effects and gives a number-average molar mass."
      ],
      "equations": [
        "π/C = RT/M + BCRT + …"
      ],
      "sourceLabel": "Supplemental macromolecular-solution depth."
    },
    {
      "kind": "reference",
      "title": "Number-average nature of osmotic molar mass",
      "paragraphs": [
        "Osmotic pressure counts molecules. In a polydisperse polymer sample, many small molecules contribute more particles per unit mass than a few large molecules, so osmometry yields the number-average molar mass M_n.",
        "Light scattering and viscosity methods weight the distribution differently."
      ],
      "sourceLabel": "Supplemental reference-depth treatment."
    },
    {
      "kind": "reference",
      "title": "Colligative-property interconversion",
      "paragraphs": [
        "For one dilute nonelectrolyte solution, all colligative properties correspond to the same solute particle concentration. A measured π can therefore predict ΔT_f or ΔT_b after converting molarity to molality with density.",
        "Disagreement between properties may signal nonideality, solute volatility, association, dissociation or experimental error.",
        "Cross-property checks are powerful because they test both concentration conversion and molecular behaviour."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Osmometry measurement designs",
      "paragraphs": [
        "Membrane osmometry measures equilibrium pressure directly and is useful for moderate-to-high molar-mass polymers. Vapour-pressure osmometry measures a temperature or vapour-pressure difference and is useful for lower molar masses.",
        "Freezing-point and boiling-point methods lose sensitivity as molar mass rises because a fixed mass corresponds to very few molecules.",
        "Choosing a method requires matching expected molar mass, solvent compatibility and required precision."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Partial osmotic pressures and mixtures",
      "paragraphs": [
        "For ideal dilute mixtures, each independent solute contributes RT times its molar concentration, analogous to partial pressures in an ideal-gas mixture.",
        "If solutes react, bind or share ions, concentrations of actual particles after equilibrium must be used.",
        "For electrolytes, simply adding formula-unit molarities without van’t Hoff or activity corrections overestimates or underestimates the true pressure depending on interactions."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "trap",
      "title": "Use final solution volume in π=CRT",
      "paragraphs": [
        "The volume in the van’t Hoff equation is solution volume, not solvent volume. When two solutions are mixed, use the final volume unless contraction data are supplied."
      ],
      "sourcePages": "69–73"
    },
    ...part15Reference,
    ...part15ReferenceExtra
  ]
};

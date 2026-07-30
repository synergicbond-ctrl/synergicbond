import type { SolutionPart } from "./types";
import { part14Source } from "./source/part14Source";
import { part14Reference } from "./reference/part14Reference";
import { part14ReferenceExtra } from "./referenceExtra/part14ReferenceExtra";
import { part14ReferenceBonus } from "./referenceBonus/part14ReferenceBonus";

export const part14: SolutionPart = {
  "number": 14,
  "slug": "14-osmosis-and-membranes",
  "shortTitle": "Osmosis & Membranes",
  "title": "Osmosis, Semipermeable Membranes and Reverse Osmosis",
  "subtitle": "Diffusion, solvent flow, osmotic rise, membrane models, reverse osmosis and the physical meaning of osmotic pressure.",
  "sourcePages": "65–70",
  "objectives": [
    "Distinguish diffusion from osmosis.",
    "Define semipermeable membrane and osmotic pressure.",
    "Explain osmotic rise mechanically and thermodynamically.",
    "Describe reverse osmosis.",
    "Connect solvent chemical potential to pressure."
  ],
  "blocks": [
    ...part14Source,
    {
      "kind": "theory",
      "title": "Diffusion and osmosis are related but not identical",
      "paragraphs": [
        "Diffusion is net transport caused by a gradient in chemical potential. In a mixture, both solute and solvent can diffuse if no selective barrier is present.",
        "Osmosis specifically refers to net solvent transfer through a semipermeable membrane from a region of higher solvent chemical potential to lower solvent chemical potential. In common dilute-solution language, this is from pure solvent or dilute solution toward the more concentrated solution."
      ],
      "sourcePages": "65–67"
    },
    {
      "kind": "theory",
      "title": "Semipermeable membranes",
      "paragraphs": [
        "An ideal semipermeable membrane allows solvent to pass but rejects solute. Real membranes achieve selectivity through size exclusion, solution–diffusion, charge effects or combinations of these mechanisms.",
        "Textbook examples include animal bladders and parchment; modern systems use polymer films, cellulose derivatives and thin-film composite membranes."
      ],
      "bullets": [
        "Permeable to solvent.",
        "Effectively impermeable to solute during the experiment.",
        "Mechanically strong enough to sustain the pressure difference.",
        "Chemically compatible with the solution."
      ],
      "sourcePages": "66–69"
    },
    {
      "kind": "theory",
      "title": "Osmotic rise and equilibrium",
      "paragraphs": [
        "When solution and pure solvent are separated by an SPM, solvent enters the solution. The liquid column on the solution side rises, generating a hydrostatic pressure difference.",
        "Flow stops when the pressure-induced increase in solvent chemical potential on the solution side exactly compensates the lowering caused by solute. The pressure needed to prevent osmosis is the osmotic pressure."
      ],
      "equations": [
        "π = ρgh  (hydrostatic form when density and height are known)"
      ],
      "sourcePages": "66–69",
      "visual": "osmosis"
    },
    {
      "kind": "derivation",
      "title": "Thermodynamic definition of osmotic pressure",
      "steps": [
        "At equilibrium across an SPM, solvent chemical potentials are equal.",
        "On the pure-solvent side use μ₁*(T,P). On the solution side use μ₁(T,P+π,x₁).",
        "For a small pressure change, μ₁*(T,P+π)≈μ₁*(T,P)+V̄₁π.",
        "For an ideal solution, μ₁=μ₁*+RT ln x₁.",
        "Set the two sides equal and rearrange."
      ],
      "result": "π = −(RT/V̄₁) ln x₁ ≈ CRT for a dilute solution",
      "assumptions": [
        "Membrane is ideally semipermeable.",
        "Solution is dilute and approximately ideal for π=CRT.",
        "Solvent partial molar volume is nearly constant."
      ],
      "sourcePages": "68–70"
    },
    {
      "kind": "theory",
      "title": "Reverse osmosis",
      "paragraphs": [
        "If an external pressure greater than the osmotic pressure is applied to the solution side, solvent flow reverses. Solvent is forced through the membrane while solute is retained.",
        "Reverse osmosis is used for desalination and water purification. The applied pressure must exceed osmotic pressure plus losses caused by membrane resistance, concentration polarisation and hydraulic flow."
      ],
      "sourcePages": "68–70"
    },
    {
      "kind": "table",
      "title": "Membrane transport pictures",
      "headers": [
        "Model",
        "Core idea",
        "Where it helps"
      ],
      "rows": [
        [
          "Pore or sieve model",
          "Species smaller than effective pores pass preferentially",
          "Useful for ultrafiltration and coarse size exclusion."
        ],
        [
          "Solution–diffusion model",
          "Solvent dissolves in membrane material and diffuses through it",
          "Central model for dense reverse-osmosis membranes."
        ],
        [
          "Charge-exclusion model",
          "Fixed membrane charges reject co-ions and influence counter-ions",
          "Important for ion-exchange and nanofiltration membranes."
        ],
        [
          "Hydrogen-bond/network picture",
          "Different affinity and mobility of water through membrane structure",
          "Qualitative explanation in biological and polymer membranes."
        ]
      ],
      "sourcePages": "66–70"
    },
    {
      "kind": "example",
      "number": "14.1",
      "title": "Hydrostatic osmotic rise",
      "question": "A solution rises 18.0 cm in a narrow tube above a pure-solvent reservoir. The solution density is 1.05 g cm⁻³. Calculate the osmotic pressure in pascals.",
      "steps": [
        "Convert density: 1.05 g cm⁻³=1050 kg m⁻³.",
        "Height h=0.180 m.",
        "π=ρgh=1050×9.806×0.180=1853 Pa."
      ],
      "answer": "π≈1.85×10³ Pa.",
      "sourcePages": "66–69",
      "transformation": "Height and density changed from the source hydrostatic discussion."
    },
    {
      "kind": "example",
      "number": "14.2",
      "title": "Minimum pressure for reverse osmosis",
      "question": "Seawater has an effective osmotic pressure of 27 bar. A membrane module has an additional hydraulic loss of 4 bar. What minimum applied pressure is required for net reverse-osmotic flow?",
      "steps": [
        "Applied pressure must exceed both osmotic opposition and hydraulic loss.",
        "Minimum ideal threshold=27+4=31 bar.",
        "In practice an additional operating margin would be used."
      ],
      "answer": "At least 31 bar; practical operation requires more.",
      "sourcePages": "68–70",
      "transformation": "Application question added from the source reverse-osmosis concept."
    },
    {
      "kind": "reference",
      "title": "Osmotic pressure as a colligative property",
      "paragraphs": [
        "Osmotic pressure is often the most sensitive colligative property for macromolecules. A polymer solution can produce a measurable pressure even when its boiling-point elevation or freezing-point depression is too small to resolve.",
        "Because π is measured near room temperature, thermal decomposition is also avoided."
      ],
      "sourceLabel": "Supplemental experimental-method depth."
    },
    {
      "kind": "reference",
      "title": "Biological osmotic terminology",
      "paragraphs": [
        "Isotonic solutions have equal effective osmotic pressure across a specified membrane. Hypertonic and hypotonic describe higher and lower effective osmotic pressure relative to a reference cell or solution.",
        "Membrane permeability matters: a solute that crosses the membrane may not sustain an osmotic pressure difference even if its analytical concentration is high."
      ],
      "sourceLabel": "Supplemental reference-depth application."
    },
    {
      "kind": "reference",
      "title": "Water potential and biological membranes",
      "paragraphs": [
        "In plant physiology, water potential combines pressure, solute and gravitational contributions. Water moves from higher to lower total water potential, not simply from dilute to concentrated solution.",
        "Cell membranes are selectively permeable rather than perfectly semipermeable. Aquaporins accelerate water transport, while many solutes have finite permeability.",
        "Turgor, plasmolysis and haemolysis are biological manifestations of osmotic pressure modified by membrane and cellular mechanics."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Concentration polarisation in reverse osmosis",
      "paragraphs": [
        "As water permeates a membrane, rejected solute accumulates near the feed surface. The local concentration and osmotic pressure exceed bulk values, reducing effective driving pressure.",
        "Cross-flow operation, turbulence promoters and adequate feed velocity limit this concentration-polarisation layer.",
        "Ignoring the boundary layer leads to overprediction of permeate flux and underestimation of scaling risk."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Donnan equilibrium",
      "paragraphs": [
        "When a membrane is permeable to small ions but not to a charged macromolecule, diffusible ions distribute unequally to satisfy electrochemical equilibrium and electroneutrality.",
        "The resulting Donnan potential and osmotic-pressure difference are important in gels, cells and ion-exchange membranes.",
        "This is an advanced case where membrane selectivity and charge create osmotic effects beyond a simple neutral-solute concentration difference."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "trap",
      "title": "Osmosis is not caused simply by water concentration",
      "paragraphs": [
        "The rigorous driving force is a solvent chemical-potential difference. Pressure, solute activity and membrane selectivity all contribute; the phrase 'water moves from high concentration to low concentration' is only a dilute-solution shortcut."
      ],
      "sourcePages": "65–70"
    },
    ...part14Reference,
    ...part14ReferenceExtra,
    ...part14ReferenceBonus
  ]
};

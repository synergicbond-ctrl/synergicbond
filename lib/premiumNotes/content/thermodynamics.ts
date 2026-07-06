import type { PremiumChapterNotes } from "../schema";

export const THERMODYNAMICS_NOTES: PremiumChapterNotes = {
  chapterId: "thermodynamics",
  title: "Thermodynamics",
  tagline: "The laws of energy transfer, spontaneity, and the universal drive towards maximum entropy and minimum energy.",
  topics: [
    {
      id: "first-law",
      title: "First Law & Work",
      intro: "Conservation of energy and the calculation of work in various thermodynamic processes.",
      subtopics: [
        {
          id: "work-heat",
          title: "Work, Heat, and Internal Energy",
          blocks: [
            {
              kind: "detailed",
              heading: "The First Law",
              paras: [
                "The internal energy of an isolated system is constant. Mathematically: ΔU = q + w.",
                "Here, q is heat and w is work. Sign convention is critical: energy entering the system is positive, energy leaving is negative."
              ]
            },
            {
              kind: "mistake",
              items: [
                {
                  wrong: "Using w = PΔV",
                  right: "In chemistry, IUPAC convention defines work done ON the system as positive: w = -P_ext * ΔV."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "thermochemistry",
      title: "Thermochemistry",
      intro: "Enthalpy changes in chemical reactions, Hess's Law, and bond energies.",
      subtopics: [
        {
          id: "hess-law",
          title: "Hess's Law of Constant Heat Summation",
          blocks: [
            {
              kind: "detailed",
              heading: "Principle",
              paras: [
                "Enthalpy is a state function. The total enthalpy change for a reaction is the same regardless of whether it occurs in one step or multiple steps."
              ]
            },
            {
              kind: "focus",
              title: "Applications of Hess's Law",
              points: [
                "Calculating enthalpy of formation from enthalpies of combustion.",
                "Determining lattice energy via the Born-Haber cycle."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "second-law",
      title: "Entropy and Spontaneity",
      intro: "The Second Law of Thermodynamics and Gibbs Free Energy.",
      subtopics: [
        {
          id: "gibbs-energy",
          title: "Gibbs Free Energy (ΔG)",
          blocks: [
            {
              kind: "detailed",
              heading: "The Ultimate Criterion for Spontaneity",
              paras: [
                "ΔG = ΔH - TΔS. At constant temperature and pressure, a process is spontaneous if ΔG < 0."
              ]
            },
            {
              kind: "trap",
              items: [
                {
                  trap: "An exothermic reaction (ΔH < 0) is always spontaneous.",
                  reality: "Spontaneity depends on both ΔH and ΔS. If ΔS is highly negative, an exothermic reaction can become non-spontaneous at high temperatures (TΔS term dominates)."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  chapterRevision: [
    "ΔU = q + w (IUPAC: w = -PΔV)",
    "H = U + PV ; ΔH = ΔU + Δn_g RT",
    "ΔG = ΔH - TΔS",
    "ΔG° = -RT ln K_eq",
    "Spontaneous: ΔG < 0, ΔS_universe > 0"
  ]
};

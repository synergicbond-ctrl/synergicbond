import type { PremiumChapterNotes } from "../schema";

export const EQUILIBRIUM_NOTES: PremiumChapterNotes = {
  chapterId: "chemical-equilibrium",
  title: "Equilibrium",
  tagline: "The dynamic balance of reversible reactions: from Le Chatelier's shifting principles to the precise pH calculations of ionic mixtures.",
  topics: [
    {
      id: "chemical-equilibrium",
      title: "Chemical Equilibrium",
      intro: "Law of Mass Action, Equilibrium Constants (Kp, Kc), and Le Chatelier's Principle.",
      subtopics: [
        {
          id: "le-chatelier",
          title: "Le Chatelier's Principle",
          blocks: [
            {
              kind: "detailed",
              heading: "Response to Stress",
              paras: [
                "If a dynamic equilibrium is disturbed by changing the conditions, the position of equilibrium shifts to counteract the change to reestablish an equilibrium."
              ]
            },
            {
              kind: "focus",
              title: "Effect of Pressure/Volume",
              points: [
                "Increasing pressure (decreasing volume) shifts equilibrium towards the side with fewer moles of gas.",
                "Adding inert gas at constant volume has no effect on equilibrium."
              ]
            },
            {
              kind: "trap",
              items: [
                {
                  trap: "Adding a catalyst shifts the equilibrium to produce more products.",
                  reality: "A catalyst speeds up both forward and backward reactions equally. It only decreases the time taken to reach equilibrium; it does NOT alter the equilibrium concentrations or the equilibrium constant."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "ionic-equilibrium",
      title: "Ionic Equilibrium",
      intro: "Acids, Bases, pH scale, Buffer Solutions, and Solubility Product.",
      subtopics: [
        {
          id: "buffer-solutions",
          title: "Buffer Solutions",
          blocks: [
            {
              kind: "detailed",
              heading: "Mechanism and pH",
              paras: [
                "A buffer resists changes in pH upon addition of small amounts of strong acid or base.",
                "Acidic buffer: Weak acid + its salt with a strong base (e.g., CH3COOH + CH3COONa).",
                "Basic buffer: Weak base + its salt with a strong acid (e.g., NH4OH + NH4Cl)."
              ]
            },
            {
              kind: "trick",
              items: [
                {
                  trick: "Henderson-Hasselbalch Equation",
                  recall: "pH = pKa + log([Salt]/[Acid]). Think 'Salt over Acid' just like 'alphabetical order S over A'."
                }
              ]
            }
          ]
        },
        {
          id: "solubility-product",
          title: "Solubility Product (Ksp)",
          blocks: [
            {
              kind: "detailed",
              heading: "Precipitation Condition",
              points: [
                "Ionic Product (Q) < Ksp: Unsaturated solution, no precipitation.",
                "Ionic Product (Q) = Ksp: Saturated solution.",
                "Ionic Product (Q) > Ksp: Supersaturated solution, precipitation occurs."
              ]
            }
          ]
        }
      ]
    }
  ],
  chapterRevision: [
    "Kp = Kc(RT)^Δn_g",
    "pH = -log[H+]",
    "Kw = [H+][OH-] = 10^-14 (at 25°C)",
    "Buffer pH = pKa + log([Salt]/[Acid])",
    "Precipitation occurs if Q_sp > K_sp"
  ]
};

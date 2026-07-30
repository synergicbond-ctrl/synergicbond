import type { NoteBlock } from "../types";

export const part04Source: NoteBlock[] = [
  {
    "kind": "theory",
    "title": "Positive deviation from Raoult’s law",
    "paragraphs": [
      "Positive deviation occurs when the observed vapour pressure is greater than the ideal Raoult value. Mixing weakens average intermolecular attraction because A–B attraction is weaker than the mean of A–A and B–B attractions. Molecules escape more readily, so each partial-pressure curve and the total-pressure curve bow upward.",
      "Breaking strong like–like interactions and replacing them with weaker unlike interactions requires heat; therefore ΔH_mix is positive. Weaker cohesion usually permits expansion, so ΔV_mix is positive. The boiling point is lower than that predicted for an ideal mixture at the same external pressure.",
      "The source sketch represents a polar liquid mixed with a nonpolar or weakly interacting liquid. Acetone–carbon disulfide and ethanol–water over much of the composition range are standard examples, although each real system must be judged from data rather than a single rule."
    ],
    "equations": [
      "P_real>P_Raoult",
      "ΔH_mix>0",
      "ΔV_mix>0",
      "A–B attraction < average of A–A and B–B"
    ],
    "sourcePages": "Page 13",
    "visual": "deviations"
  },
  {
    "kind": "theory",
    "title": "Negative deviation from Raoult’s law",
    "paragraphs": [
      "Negative deviation occurs when unlike molecules attract more strongly than in the unmixed liquids. Escape becomes more difficult, so partial and total vapour pressures lie below the ideal lines. Strong specific interactions can include hydrogen bonding, donor–acceptor interaction or acid–base association.",
      "Formation of stronger A–B contacts releases heat and contracts the liquid: ΔH_mix is negative and ΔV_mix is negative. The boiling point is consequently higher than the ideal prediction. Chloroform–acetone is a classic example because the acidic hydrogen of chloroform interacts with the carbonyl oxygen of acetone. Phenol–aniline is another strongly interacting pair.",
      "The magnitude of deviation depends on composition because the numbers of A–A, B–B and A–B neighbours change across the mixture."
    ],
    "equations": [
      "P_real<P_Raoult",
      "ΔH_mix<0",
      "ΔV_mix<0",
      "A–B attraction > average of A–A and B–B"
    ],
    "sourcePages": "Page 14",
    "visual": "deviations"
  },
  {
    "kind": "theory",
    "title": "Volatility and ideal-mixture pressure calculation",
    "paragraphs": [
      "The source notes remind that strong acids such as hydrochloric, sulfuric and nitric acids have low volatility in concentrated aqueous systems relative to small neutral organic liquids. Low volatility means low pure vapour pressure at the stated temperature.",
      "For an ideal liquid mixture, total pressure is found by multiplying each pure vapour pressure by the corresponding liquid mole fraction. A source example mixes methanol and ethanol and calculates both partial pressures before adding them. Solved Question 3.1 reproduces this calculation with changed data and a different composition.",
      "A common error is to use mass fraction in Raoult’s law. All component masses must first be converted to moles because the law is written in mole fractions."
    ],
    "equations": [
      "P=x_Ap_A°+x_Bp_B°",
      "x_A=n_A/(n_A+n_B)"
    ],
    "sourcePages": "Page 15"
  }
];

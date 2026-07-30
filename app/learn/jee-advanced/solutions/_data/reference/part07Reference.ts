import type { NoteBlock } from "../types";

export const part07Reference: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Gibbs phase rule and the geometry of a binary VLE diagram",
    "paragraphs": [
      "For a nonreacting binary system, the Gibbs phase rule is F=C−P+2. In a two-phase liquid–vapour region, C=2 and P=2, so F=2. Fixing temperature leaves one intensive degree of freedom: choosing pressure fixes both phase compositions. Fixing pressure instead leaves temperature as the remaining degree of freedom. This is why a horizontal tie line at specified T or P has unique endpoint compositions.",
      "In a single liquid or vapour phase, P=1 and F=3. At fixed temperature, both pressure and composition may vary independently. The bubble and dew curves are boundaries where a second phase appears and one degree of freedom is lost.",
      "At a pure-component endpoint, C effectively becomes one. Liquid and vapour coexist at one pressure for the fixed temperature, so the two curves meet. The phase-rule viewpoint explains the diagram rather than merely labelling its regions."
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  },
  {
    "kind": "reference",
    "title": "Why the lever rule works and when it fails",
    "paragraphs": [
      "The lever rule is a graphical form of total and component material balances. It requires a straight composition coordinate and two coexisting phases whose endpoint compositions lie on the same tie line. The overall composition must lie between x and y; otherwise the assumed two-phase split is impossible.",
      "The rule gives mole fractions of phases when the horizontal axis is mole fraction. If a diagram uses mass fraction, the result is a mass fraction of phases. Mixing bases produces incorrect answers. In multicomponent diagrams, a simple one-dimensional lever rule is replaced by vector material balance or geometric constructions in a composition simplex.",
      "The rule also assumes equilibrium. During rapid boiling, condensation or mass transfer, bulk phase compositions can differ from equilibrium endpoint values because of finite transfer rates. JEE problems normally specify slow or equilibrium operation, so the ideal lever construction applies."
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  }
];

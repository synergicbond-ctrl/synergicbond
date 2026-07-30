import type { NoteBlock } from "../types";

export const part06Reference: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Isothermal flash calculation and the Rachford–Rice equation",
    "paragraphs": [
      "The source piston problem is a binary flash calculation: a feed of overall composition z is brought to a temperature and pressure where it splits into liquid and vapour. For each component, y_i=K_ix_i, and material balance gives z_i=(1−β)x_i+βy_i, where β=V/F is the vapour fraction.",
      "Eliminating x_i gives x_i=z_i/[1+β(K_i−1)]. The mole-fraction sum then produces the Rachford–Rice equation Σz_i(K_i−1)/[1+β(K_i−1)]=0. For a binary ideal system, the lever rule gives the same β geometrically.",
      "The equation clarifies limiting states. At the bubble point β→0 and Σz_iK_i=1. At the dew point β→1 and Σz_i/K_i=1. Between these limits, 0<β<1. Although JEE calculations usually remain binary, this framework shows how the method generalises to many components."
    ],
    "equations": [
      "z_i=(1−β)x_i+βy_i",
      "x_i=z_i/[1+β(K_i−1)]",
      "Σ z_i(K_i−1)/[1+β(K_i−1)]=0"
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  },
  {
    "kind": "reference",
    "title": "Bubble point, dew point and stability of a single phase",
    "paragraphs": [
      "A bubble-point calculation begins with a liquid composition and asks when an infinitesimal vapour can coexist. At fixed temperature, P_bub=Σx_ip_i° for an ideal solution. A dew-point calculation begins with vapour composition and asks when an infinitesimal liquid can coexist: 1/P_dew=Σy_i/p_i°.",
      "These are limiting phase-stability conditions. Above bubble pressure at fixed temperature, a liquid of the specified overall composition is stable. Below dew pressure, vapour is stable. Between them, neither single phase alone minimises Gibbs energy, so the system separates into two phases whose compositions lie on a common tie line.",
      "The distinction prevents a frequent error: using overall composition as both x and y in the two-phase region. It equals x only at the bubble limit and y only at the dew limit."
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  }
];

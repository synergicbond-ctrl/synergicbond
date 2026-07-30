import type { NoteBlock } from "../types";

export const part05Source: NoteBlock[] = [
  {
    "kind": "theory",
    "title": "Finding pure vapour pressures from mixture data",
    "paragraphs": [
      "The source notebook begins a sequence of inverse Raoult-law problems. Instead of supplying p_A° and p_B°, it gives total vapour pressures for two known liquid compositions and asks the student to reconstruct the two pure-component vapour pressures. Each composition provides one linear equation in the two unknowns.",
      "For an equimolar liquid, P=(p_A°+p_B°)/2. A second mixture with a different mole fraction gives P=x_Ap_A°+(1−x_A)p_B°. Solving the pair reveals which component is more volatile and supplies all later vapour-composition calculations.",
      "This method is preferable to guessing from boiling points because the data refer to a specific temperature. Solved Question 3.2 retains the two-equation structure with altered pressures and compositions."
    ],
    "equations": [
      "P₁=x_A,1p_A°+(1−x_A,1)p_B°",
      "P₂=x_A,2p_A°+(1−x_A,2)p_B°"
    ],
    "sourcePages": "Pages 15–17"
  },
  {
    "kind": "theory",
    "title": "Vapour composition above an ideal liquid",
    "paragraphs": [
      "Once partial pressures are known, the vapour composition follows from Dalton’s law. For component A, y_A=p_A/P=x_Ap_A°/[x_Ap_A°+x_Bp_B°]. The analogous expression holds for B.",
      "The source explicitly compares y_B/y_A with x_B/x_A. Their ratio differs by p_B°/p_A°. Thus the component with the larger pure vapour pressure is enriched in the vapour. If p_B°>p_A°, then y_B/x_B is greater than y_A/x_A and y_B>x_B except at the pure-component limits.",
      "The enrichment ratio provides a compact way to solve repeated vaporisation–condensation steps."
    ],
    "equations": [
      "y_A=x_Ap_A°/P",
      "y_B=x_Bp_B°/P",
      "(y_B/y_A)=(x_B/x_A)(p_B°/p_A°)"
    ],
    "sourcePages": "Pages 17–18"
  },
  {
    "kind": "theory",
    "title": "Liquid composition inferred from vapour composition",
    "paragraphs": [
      "An inverse problem supplies y_A or the vapour mole ratio and asks for x_A. Use p_A=y_AP together with p_A=x_Ap_A°. If total pressure is unknown, combine the two components: y_AP=x_Ap_A° and (1−y_A)P=(1−x_A)p_B°.",
      "Dividing eliminates P and gives y_A/(1−y_A)=[x_A/(1−x_A)](p_A°/p_B°). The source uses this relation repeatedly, including cases where the vapour fraction of one component is given as 0.6 or 0.8. Solved Questions 5.1 and 5.2 rebuild these tasks with different values."
    ],
    "equations": [
      "y_A/(1−y_A) = [x_A/(1−x_A)](p_A°/p_B°)"
    ],
    "sourcePages": "Pages 18–20"
  },
  {
    "kind": "theory",
    "title": "Determining total pressure from a vapour analysis",
    "paragraphs": [
      "If the liquid composition and vapour composition are both known, the total pressure can be obtained from either component: P=x_Ap_A°/y_A=x_Bp_B°/y_B. Agreement of the two expressions is a strong internal check.",
      "The source derives the dew-pressure form by writing x_A=y_AP/p_A° and x_B=y_BP/p_B°, then imposing x_A+x_B=1. This yields 1/P=y_A/p_A°+y_B/p_B°. The formula is central to dew-point calculations and is revisited in the compression section."
    ],
    "equations": [
      "P=x_Ap_A°/y_A=x_Bp_B°/y_B",
      "1/P=y_A/p_A°+y_B/p_B°"
    ],
    "sourcePages": "Pages 19–20"
  }
];

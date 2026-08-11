export type DipoleMomentPart = {
  part: number;
  slug: string;
  title: string;
  description: string;
};

export const DIPOLE_MOMENT_PARTS: DipoleMomentPart[] = [
  {
    part: 1,
    slug: "part01",
    title: "Foundation, Vector Nature & Ionic Character",
    description:
      "What dipole moment measures, vector addition and symmetry cancellation, and percentage ionic character via the Pauling and Hannay–Smyth equations.",
  },
  {
    part: 2,
    slug: "part02",
    title: "Factors & Classic JEE Comparisons",
    description:
      "The six physical contributions that determine every observed moment, then applied to NH₃ vs. NF₃, the chloromethane series, and the Group 15/16 hydride trends.",
  },
  {
    part: 3,
    slug: "part03",
    title: "Structural & Organic Applications",
    description:
      "Predicting geometry from μ, cis–trans isomerism and conformational stability, substituted benzenes, and the resonance corrections that overturn simple group-vector addition.",
  },
  {
    part: 4,
    slug: "part04",
    title: "Advanced Exceptions & JEE Revision",
    description:
      "CO, B–N, Pt complexes, ozone, SO₂, interhalogens, TBP phosphorus systems, and maleic vs. fumaric acid, plus the full quick-reference tables and data banks.",
  },
];

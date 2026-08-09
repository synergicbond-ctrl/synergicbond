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
    title: "Foundation",
    description:
      "What dipole moment measures, the direction convention, units, and bond moment vs. molecular dipole moment.",
  },
  {
    part: 2,
    slug: "part02",
    title: "Vector Nature",
    description:
      "Vector addition of bond moments, the equal-dipole special case, and how symmetry cancels polar bonds to zero.",
  },
  {
    part: 3,
    slug: "part03",
    title: "Ionic Character",
    description:
      "Theoretical 100%-ionic moment, percentage ionic character, and the Pauling and Hannay–Smyth equations.",
  },
  {
    part: 4,
    slug: "part04",
    title: "Factors Determining Molecular Dipole",
    description:
      "The six physical contributions — homopolar, electronegativity, lone-pair, group, dative and induced — that combine into every observed moment.",
  },
  {
    part: 5,
    slug: "part05",
    title: "Classic JEE Comparisons",
    description:
      "NH₃ vs. NF₃, H₂O vs. OF₂, the chloromethane series, and the Group 15/16 hydride trends.",
  },
  {
    part: 6,
    slug: "part06",
    title: "Structural Applications",
    description:
      "Predicting geometry from μ, cis–trans isomerism, isomeric equilibria, and dipolar-repulsion conformational stability.",
  },
  {
    part: 7,
    slug: "part07",
    title: "Organic Applications",
    description:
      "Substituted benzenes, o/m/p disubstitution, and the resonance corrections that overturn simple group-vector addition.",
  },
  {
    part: 8,
    slug: "part08",
    title: "Advanced Exceptions",
    description:
      "CO, B–N dative bonds, Pt complexes, ozone, SO₂, interhalogens, hydrazine/peroxide conformations, TBP phosphorus systems, and maleic vs. fumaric acid.",
  },
  {
    part: 9,
    slug: "part09",
    title: "JEE Revision Tables",
    description:
      "Every classic comparison regrouped by deciding factor, plus the complete bond-moment, group-moment and molecular-dipole reference data banks.",
  },
];

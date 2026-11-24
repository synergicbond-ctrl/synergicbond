import type { Metadata } from "next";
import { CanonicalChapterPage } from "@/components/notes/canonical";
import { NotesCardGrid } from "./_cards";

export const metadata: Metadata = {
  title: "JEE Advanced Complete Chapter Notes | Synergic Bond",
  description:
    "Complete JEE Advanced chemistry notes: Chemical Bonding, Chemical Kinetics, Solid State, Coordination Compounds, Isomerism, Alkanes, Alkenes, Alkynes, Aromatic Substitution, Elimination Reactions, Chemistry in Everyday Life, Surface Chemistry, Salt Analysis, Metallurgy, d- and f-Block, Polymers, Environmental Chemistry, Biomolecules and Alcohols, Phenols and Ethers, with step-wise mechanisms and interactive figures.",
};

const B = "/learn/jee-advanced/complete-notes";

const H = `${B}/hydrocarbons`;

const CHAPTERS = [
  { href: `${B}/chemical-bonding`, title: "Chemical Bonding", blurb: "29 chapters: Lewis theory, lattice energy, Fajans' rules, VBT and hybridisation, VSEPR, back bonding, MOT, dipole moment, hydrogen bonding and the inert-pair effect, with interactive animations." },
  { href: `${B}/chemical-kinetics`, title: "Chemical Kinetics", blurb: "25 chapters and 78 practice questions: rate laws, integrated rate equations, complex reactions, collision and transition-state theory, mechanisms, enzyme and chain kinetics." },
  { href: `${B}/thermodynamics`, title: "Thermodynamics", blurb: "Animated 30-part course: systems and state functions, first law, enthalpy and Hess's law, entropy and the second law, Gibbs energy and spontaneity." },
  { href: "/learn/solid-state/textbook", title: "Solid State", blurb: "The interactive textbook: 23 parts, the Master notes and the 3D Crystal Lab, from lattices and unit cells to packing, voids, defects, electrical and magnetic properties." },
  { href: `${B}/coordination-compounds`, title: "Coordination Compounds", blurb: "11 chapters: Werner's theory, nomenclature, isomerism, VBT and CFT, magnetism and colour, stability constants and organometallics." },
  { href: `${B}/isomerism`, title: "Isomerism", blurb: "4 parts: structural, geometrical, conformational and optical isomerism, with drawn structures, interactive animations under each topic, 118 questions with animated step-by-step solutions and hundreds of counting questions with every isomer drawn." },
  { href: `${B}/general-organic-chemistry`, title: "General Organic Chemistry", blurb: "Hybridisation, bond fission, reactive intermediates, inductive, resonance, hyperconjugation and electromeric effects, aromaticity and acid–base strength, with drawn structures and animations." },
  { href: `${H}/alkanes`, title: "Alkanes", blurb: "6 chapters: free radicals, preparation, physical properties and every chemical reaction of alkanes, with step-wise mechanisms." },
  { href: `${H}/alkenes-alkynes#part1`, title: "Alkenes", blurb: "24 sections: preparation, electrophilic and radical addition, hydroboration, oxymercuration, oxidation, ozonolysis, dienes, Diels–Alder and polymerisation." },
  { href: `${H}/alkenes-alkynes#part2`, title: "Alkynes", blurb: "18 sections: acidity and acetylides, reduction, additions, Kucherov hydration, hydroboration, oxidative cleavage, ozonolysis and reactions of acetylene." },
  { href: `${H}/aromatic-substitution`, title: "Aromatic Substitution (EAS and NAS)", blurb: "12 chapters: aromaticity, the arenium-ion mechanism, nitration, sulphonation, halogenation, Friedel–Crafts, directing effects and nucleophilic aromatic substitution." },
  { href: `${B}/chemistry-in-everyday-life`, title: "Chemistry in Everyday Life", blurb: "5 chapters: drugs and their classification, drug-target interaction, therapeutic classes of drugs, chemicals in food and cleansing agents, with drawn structures, a master revision table and worked questions." },
  { href: `${B}/elimination-reactions`, title: "Elimination Reactions", blurb: "24 chapters: E1, E2, E1cB and Ei with step-wise mechanisms, stereochemistry, Saytzeff vs Hofmann products, fragmentations and solved problems." },
  { href: `${B}/surface-chemistry`, title: "Surface Chemistry", blurb: "Adsorption, isotherms, catalysis, colloids, coagulation, emulsions and micelles, with 24 drawn plates, animated scenes and 21 live 3D films placed after the theory they show." },
  { href: `${B}/salt-analysis`, title: "Qualitative Salt Analysis", blurb: "Preliminary tests, anions, cation groups and confirmatory tests, with live 3D films of every key test and the Salt Lab: bench, flame, bead, colour atlas and flowchart." },
  { href: `${B}/metallurgy`, title: "Metallurgy", blurb: "Ores, concentration, roasting, reduction, Ellingham diagrams, extraction and refining, with six live 3D labs: froth flotation, zone refining, electrorefining, Hall–Héroult, Bessemer and the blast furnace." },
  { href: `${B}/d-and-f-block`, title: "d- and f-Block Elements", blurb: "Transition elements, lanthanoids and actinoids: configurations, trends, oxidation states, colour, magnetism and key compounds, with 275 questions." },
  { href: `${B}/polymers`, title: "Polymers", blurb: "Classification, polymerisation mechanisms, tacticity, molecular mass and important polymers, with interactive labs including an atom-by-atom 3D chain model." },
  { href: `${B}/environmental-chemistry`, title: "Environmental Chemistry", blurb: "12 parts: atmospheric, water and soil pollution, their chemistry and control, and green chemistry." },
  { href: `${B}/biomolecules`, title: "Biomolecules", blurb: "Carbohydrates, amino acids and proteins, enzymes, nucleic acids and vitamins, with drawn structures and interactive models." },
  { href: `${B}/alcohols-phenols-ethers`, title: "Alcohols, Phenols and Ethers", blurb: "12 sections: preparation, properties and reactions of alcohols, phenols and ethers, with 142 drawn structures and solved examples." },
  { href: `${B}/media-gallery`, title: "Topic Media Gallery", blurb: "Every film, diagram and lab of Surface Chemistry, Salt Analysis, Metallurgy and Chemistry in Everyday Life in one place, with search and filters." },
];

export default function CompleteNotesHub() {
  return (
    <CanonicalChapterPage
      mode="longform"
      discipline="JEE Advanced · Chemistry"
      chapterTitle="Complete Chapter Notes"
      chapterSlug="jee-advanced-complete-notes"
      description="Each chapter opens as one complete set of notes, with every mechanism drawn step by step and the exact reagents and conditions on every arrow."
      free={false}
    >
      <NotesCardGrid cards={CHAPTERS} />
    </CanonicalChapterPage>
  );
}

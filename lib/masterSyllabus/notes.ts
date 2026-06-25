// lib/masterSyllabus/notes.ts

export interface NCERTMapping {
  class: 11 | 12;
  unit?: string;
  chapterName?: string;
}

export interface StudyNote {
  chapterId: string;
  title: string;
  content: string;
  tags: string[];
  ncertRef?: NCERTMapping;
}

export const highYieldNotes: StudyNote[] = [
  {
    chapterId: "chemical-bonding",
    title: "MOT Magnetic & Bond Order Shortcut",
    content: "For diatomic molecules from B2 to Ne2 (10 to 18 electrons): Use the 10-18 electron count trick. Total electrons: 14 corresponds to Bond Order 3. As you move away from 14 (either up or down), subtract 0.5 per electron.",
    tags: ["MOT", "Bond Order", "Shortcuts"],
    ncertRef: {
      class: 11,
      unit: "4",
      chapterName: "Chemical Bonding and Molecular Structure"
    }
  },
  {
    chapterId: "ionic-equilibrium",
    title: "Buffer Capacity & pH Calculation",
    content: "An acidic buffer resists changes in pH upon addition of small amounts of acid/base. Maximum buffer capacity occurs when pH = pKa.",
    tags: ["Buffer", "pH", "Ionic Equilibrium"],
    ncertRef: {
      class: 11,
      unit: "7",
      chapterName: "Equilibrium"
    }
  },
  {
    chapterId: "coordination-compounds",
    title: "CFT Crystal Field Splitting in Octahedral Complexes",
    content: "In an octahedral field, d-orbitals split into lower energy t2g (orbitals between the axes) and higher energy eg (orbitals along the axes) sets.",
    tags: ["CFT", "Coordination", "Splitting"],
    ncertRef: {
      class: 12,
      unit: "5",
      chapterName: "Coordination Compounds"
    }
  }
];
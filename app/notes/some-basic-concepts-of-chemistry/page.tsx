"use client";

import React, { useMemo, useState, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

type SectionKey = "foundations" | "matter" | "measurement" | "laws" | "mole" | "solutions";

interface ProblemData {
  id: string;
  qNumber: number | string;
  section: SectionKey;
  type: string;
  question: string;
  options: string[];
  answer: string;
  solution: string[];
  keywords: string[];
}

// ============================================================================
// HELPER COMPONENTS (MATH RENDERING & SVGS)
// ============================================================================

function MathContent({ children, className = "" }: { children: string; className?: string }) {
  return (
    <div className={`text-slate-300 ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          p: ({ children: value }) => <p className="my-2 leading-7">{value}</p>,
          strong: ({ children: value }) => <strong className="font-extrabold text-slate-100">{value}</strong>,
          ul: ({ children: value }) => <ul className="my-2 list-disc space-y-2 pl-5">{value}</ul>,
          li: ({ children: value }) => <li className="text-slate-300">{value}</li>,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

function ParticleGrid({ stateType }: { stateType: "solid" | "liquid" | "gas" }) {
  const configs = {
    solid: { dots: [[32,32],[62,32],[92,32],[32,62],[62,62],[92,62],[32,92],[62,92],[92,92]], desc: "Very close, orderly; vibration only." },
    liquid: { dots: [[28,44],[58,34],[91,47],[40,71],[73,70],[102,83],[25,98],[60,101],[94,103]], desc: "Close, disordered; particles slide." },
    gas: { dots: [[16,18],[64,14],[112,25],[35,52],[94,58],[14,91],[65,83],[117,101],[46,116]], desc: "Far apart; rapid unrestricted motion." },
  };
  const { dots, desc } = configs[stateType];

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-700 bg-slate-900/50">
      <svg viewBox="0 0 130 130" className="w-32 h-32 rounded-xl bg-slate-950/70 shadow-inner">
        {dots.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="8" fill={i % 2 === 0 ? "#5ee7ff" : "#a78bfa"} className={stateType === "solid" ? "animate-pulse" : stateType === "liquid" ? "animate-[pulse_2.4s_ease-in-out_infinite]" : "animate-[pulse_3.2s_ease-in-out_infinite]"} />
        ))}
      </svg>
      <h4 className="mt-4 font-black text-white capitalize">{stateType}</h4>
      <p className="mt-1 text-xs text-center text-slate-400">{desc}</p>
    </div>
  );
}

function AnalyticalBalance() {
  return (
    <svg viewBox="0 0 620 360" className="w-full h-auto drop-shadow-2xl" role="img" aria-label="Analytical balance">
      <line x1="155" y1="96" x2="465" y2="96" stroke="#5ee7ff" strokeWidth="14" strokeLinecap="round" />
      <circle cx="310" cy="96" r="28" fill="#0f172a" stroke="#fbbf24" strokeWidth="8" />
      <line x1="205" y1="105" x2="165" y2="235" stroke="#94a3b8" strokeWidth="6" />
      <line x1="415" y1="105" x2="455" y2="235" stroke="#94a3b8" strokeWidth="6" />
      <path d="M105 235h120q-12 64-60 64t-60-64z" fill="#0e7490" stroke="#5ee7ff" strokeWidth="3" />
      <path d="M395 235h120q-12 64-60 64t-60-64z" fill="#0e7490" stroke="#5ee7ff" strokeWidth="3" />
      <line x1="310" y1="130" x2="310" y2="235" stroke="#fbbf24" strokeWidth="5" />
      <path d="M282 195h56l25 125H257z" fill="#172554" stroke="#a78bfa" strokeWidth="3" />
      <rect x="120" y="320" width="380" height="24" rx="12" fill="#1e3a5f" stroke="#5ee7ff" strokeWidth="2" />
      <g className="text-[15px] fill-slate-300 font-bold">
        <text x="60" y="65">Beam</text><line x1="130" y1="60" x2="180" y2="92" stroke="#94a3b8" />
        <text x="450" y="52">Rider</text><line x1="520" y1="47" x2="390" y2="90" stroke="#94a3b8" />
        <text x="345" y="165">Pointer</text><line x1="415" y1="160" x2="310" y2="176" stroke="#94a3b8" />
        <text x="34" y="270">Pan</text><line x1="104" y1="265" x2="135" y2="250" stroke="#94a3b8" />
      </g>
    </svg>
  );
}

function VolumeEquivalence() {
  return (
    <article className="rounded-2xl border border-slate-700 bg-slate-950/70 p-6 shadow-xl">
      <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-amber-300">
        Volume equivalence
      </h3>
      <svg viewBox="0 0 640 410" className="h-auto w-full" role="img" aria-label="One cubic decimetre equals one litre and one thousand cubic centimetres">
        <defs>
          <linearGradient id="cubeTopV5" x1="0" x2="1">
            <stop offset="0" stopColor="#155e75" />
            <stop offset="1" stopColor="#312e81" />
          </linearGradient>
          <linearGradient id="cubeFrontV5" x1="0" x2="1">
            <stop offset="0" stopColor="#0f3448" />
            <stop offset="1" stopColor="#172554" />
          </linearGradient>
        </defs>
        <rect x="70" y="20" width="500" height="48" rx="18" fill="#0f172a" stroke="#334155" />
        <text x="320" y="51" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="800">
          1 dm³ = 1000 cm³ = 1 L = 1000 mL
        </text>
        <polygon points="110,120 390,82 540,165 255,210" fill="url(#cubeTopV5)" stroke="#5ee7ff" strokeWidth="4" />
        <polygon points="110,120 255,210 255,350 110,265" fill="#10384d" stroke="#5ee7ff" strokeWidth="4" />
        <polygon points="255,210 540,165 540,305 255,350" fill="url(#cubeFrontV5)" stroke="#a78bfa" strokeWidth="4" />
        {[1,2,3,4,5,6,7,8,9].map((i) => (
          <line key={`v-${i}`} x1={255 + i * 28.5} y1={210 - i * 4.5} x2={255 + i * 28.5} y2={350 - i * 4.5} stroke="#475569" strokeWidth="1.3" />
        ))}
        {[1,2,3,4,5,6,7,8,9].map((i) => (
          <line key={`h-${i}`} x1="255" y1={210 + i * 14} x2="540" y2={165 + i * 14} stroke="#475569" strokeWidth="1.3" />
        ))}
        <polygon points="255,336 283.5,331.5 283.5,345.5 255,350" fill="#fbbf24" stroke="#fff7c2" strokeWidth="2" />
        <line x1="285" y1="326" x2="415" y2="298" stroke="#fbbf24" strokeWidth="2" />
        <text x="422" y="301" fill="#fde68a" fontSize="15" fontWeight="700">1 cm³ = 1 mL</text>
        <line x1="110" y1="385" x2="540" y2="385" stroke="#fbbf24" strokeWidth="3" />
        <line x1="110" y1="375" x2="110" y2="395" stroke="#fbbf24" strokeWidth="3" />
        <line x1="540" y1="375" x2="540" y2="395" stroke="#fbbf24" strokeWidth="3" />
        <text x="325" y="405" textAnchor="middle" fill="#fde68a" fontSize="16" fontWeight="800">10 cm = 1 dm</text>
      </svg>
    </article>
  );
}

function AccuracyDartboard({ type }: { type: "accurate-precise" | "precise-not-accurate" | "neither" }) {
  const configs = {
    "accurate-precise": [[50,50],[53,48],[47,52],[51,46]],
    "precise-not-accurate": [[25,25],[28,27],[22,28],[27,22]],
    "neither": [[20,75],[75,20],[70,72],[22,24]]
  };
  const points = configs[type];

  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto">
      {[42, 30, 18].map(r => <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="#475569" strokeWidth="1.5" />)}
      <circle cx="50" cy="50" r="6" fill="#fbbf24" />
      {points.map(([x,y], i) => <circle key={i} cx={x} cy={y} r="4" fill="#5ee7ff" />)}
    </svg>
  );
}

// ============================================================================
// QUESTION DATABASE (45 NCERT + 5 CONCEPT CHECKS = 50 QUESTIONS)
// ============================================================================

export const ALL_QUESTIONS: ProblemData[] = [
  // --- CONCEPT CHECKS (CUSTOM) ---
  {
    id: "CQ1", qNumber: "C1", section: "foundations", type: "Concept Check",
    question: "Which ancient Indian philosopher proposed the concept of 'Paramānu' (indivisible particles) roughly 2500 years before John Dalton?",
    options: ["Nagarjuna", "Chakrapani", "Acharya Kanda", "Varahamihira"],
    answer: "(iii) Acharya Kanda",
    solution: ["Acharya Kanda formulated the theory of very small indivisible particles called 'Paramānu' around 600 BCE.", "He explained that these particles are eternal, indestructible, spherical, and combine using unseen forces."],
    keywords: ["kanda", "paramanu", "history", "indivisible"]
  },
  {
    id: "CQ2", qNumber: "C2", section: "foundations", type: "Concept Check",
    question: "During the Medieval era, Chakrapani was credited with which early chemical synthesis?",
    options: ["Extraction of sea salt", "Synthesis of early soap using plant alkalies and oils", "Development of gypsum cement", "Tanning of raw animal hides"],
    answer: "(ii) Synthesis of early soap using plant alkalies and oils",
    solution: ["Chakrapani discovered mercury sulphide and developed early soap-making techniques.", "He combined mustard oil and strong plant-derived alkalies to synthesize these early cleansing agents."],
    keywords: ["chakrapani", "soap", "alkalies", "history"]
  },
  {
    id: "CQ3", qNumber: "C3", section: "measurement", type: "Concept Check",
    question: "What is the SI Base Unit for Thermodynamic Temperature?",
    options: ["Celsius (°C)", "Fahrenheit (°F)", "Kelvin (K)", "Joule (J)"],
    answer: "(iii) Kelvin (K)",
    solution: ["The SI base unit for thermodynamic temperature is the Kelvin (K).", "Unlike Celsius or Fahrenheit, the Kelvin scale does not use the degree (°) symbol and cannot have negative values (Absolute Zero is 0 K)."],
    keywords: ["si unit", "temperature", "kelvin", "base quantity"]
  },
  {
    id: "CQ4", qNumber: "C4", section: "measurement", type: "Concept Check",
    question: "Convert standard human body temperature ($37\\,^{\\circ}\\text{C}$) into the Kelvin scale.",
    options: ["310.15 K", "273.15 K", "98.6 K", "300 K"],
    answer: "(i) 310.15 K",
    solution: ["The formula to convert Celsius to Kelvin is: $K = ^{\\circ}\\text{C} + 273.15$", "$K = 37 + 273.15$", "$K = 310.15$"],
    keywords: ["temperature", "conversion", "kelvin", "celsius"]
  },
  {
    id: "CQ5", qNumber: "C5", section: "laws", type: "Concept Check",
    question: "Hydrogen and oxygen combine to form water ($\\text{H}_2\\text{O}$) and hydrogen peroxide ($\\text{H}_2\\text{O}_2$). Which law of chemical combination does this illustrate?",
    options: ["Law of Conservation of Mass", "Law of Multiple Proportions", "Gay Lussac's Law", "Law of Definite Proportions"],
    answer: "(ii) Law of Multiple Proportions",
    solution: ["In $\\text{H}_2\\text{O}$, 2g of H combines with 16g of O.", "In $\\text{H}_2\\text{O}_2$, 2g of H combines with 32g of O.", "The ratio of oxygen masses combining with a fixed mass of hydrogen is $16:32$, or $1:2$, which is a simple whole-number ratio."],
    keywords: ["multiple proportions", "laws", "water", "peroxide"]
  },

  // --- NCERT EXEMPLAR PROBLEMS ---
  {
    id: "Q1", qNumber: 1, section: "measurement", type: "MCQ Type-I",
    question: "Two students measure a mass whose accepted value is **3.0 g**. Student A records **3.01 g** and **2.99 g**; Student B records **3.05 g** and **2.95 g**. Select the correct statement.",
    options: ["Both students are neither accurate nor precise.", "Student A is both precise and accurate.", "Student B is neither precise nor accurate.", "Student B is both precise and accurate."],
    answer: "(ii) Student A is both precise and accurate.",
    solution: [
      "Student A's average $= \\frac{3.01+2.99}{2} = 3.00\\,\\text{g}$, exactly equal to the accepted value (Accurate).",
      "The spread for A is only $3.01-2.99 = 0.02\\,\\text{g}$, so the readings are close to one another (Precise).",
      "Student B has a much wider spread ($0.10\\,\\text{g}$) making them less precise."
    ],
    keywords: ["precision", "accuracy", "measurement", "mass"]
  },
  {
    id: "Q2", qNumber: 2, section: "measurement", type: "MCQ Type-I",
    question: "A measured temperature is $200\\,^{\\circ}\\text{F}$. What is the corresponding Celsius temperature?",
    options: ["$40\\,^{\\circ}\\text{C}$", "$94\\,^{\\circ}\\text{C}$", "$93.3\\,^{\\circ}\\text{C}$", "$30\\,^{\\circ}\\text{C}$"],
    answer: "(iii) $93.3\\,^{\\circ}\\text{C}$.",
    solution: [
      "Use the conversion formula: $^{\\circ}\\text{C} = \\frac{5}{9}(^{\\circ}\\text{F} - 32)$.",
      "$^{\\circ}\\text{C} = \\frac{5}{9}(200 - 32) = \\frac{5}{9} \\times 168$",
      "$^{\\circ}\\text{C} = 93.33... \\approx 93.3\\,^{\\circ}\\text{C}$"
    ],
    keywords: ["temperature", "fahrenheit", "celsius"]
  },
  {
    id: "Q3", qNumber: 3, section: "solutions", type: "MCQ Type-I",
    question: "What is the molarity of a solution containing **5.85 g NaCl** in **500 mL** of solution?",
    options: ["$4\\,\\text{mol L}^{-1}$", "$20\\,\\text{mol L}^{-1}$", "$0.2\\,\\text{mol L}^{-1}$", "$2\\,\\text{mol L}^{-1}$"],
    answer: "(iii) $0.2\\,\\text{mol L}^{-1}$.",
    solution: [
      "Molar mass of NaCl $= 23.0 + 35.5 = 58.5\\,\\text{g mol}^{-1}$.",
      "Moles of solute ($n$) $= \\frac{5.85}{58.5} = 0.100\\,\\text{mol}$.",
      "Volume of solution in Litres ($V$) $= 500\\,\\text{mL} = 0.500\\,\\text{L}$.",
      "Molarity ($M$) $= \\frac{n}{V} = \\frac{0.100}{0.500} = 0.200\\,\\text{mol L}^{-1}$."
    ],
    keywords: ["molarity", "concentration", "nacl", "solution"]
  },
  {
    id: "Q4", qNumber: 4, section: "solutions", type: "MCQ Type-I",
    question: "If **500 mL of a 5 M solution** is diluted to **1500 mL**, what is the final molarity?",
    options: ["$1.5\\,\\text{M}$", "$1.66\\,\\text{M}$", "$0.017\\,\\text{M}$", "$1.59\\,\\text{M}$"],
    answer: "(ii) $1.66\\,\\text{M}$.",
    solution: [
      "Dilution does not change the total moles of solute, so we use the dilution equation: $M_1V_1 = M_2V_2$.",
      "$5.0 \\times 500 = M_2 \\times 1500$",
      "$M_2 = \\frac{2500}{1500} = 1.666... \\approx 1.66\\,\\text{M}$"
    ],
    keywords: ["dilution", "molarity", "volume"]
  },
  {
    id: "Q5", qNumber: 5, section: "mole", type: "MCQ Type-I",
    question: "Which sample contains the greatest number of atoms?",
    options: ["4 g He", "46 g Na", "0.40 g Ca", "12 g He"],
    answer: "(iv) 12 g He.",
    solution: [
      "Number of atoms is proportional to the number of moles.",
      "4 g He: $\\frac{4}{4} = 1$ mol atoms.",
      "46 g Na: $\\frac{46}{23} = 2$ mol atoms.",
      "0.40 g Ca: $\\frac{0.40}{40} = 0.010$ mol atoms.",
      "12 g He: $\\frac{12}{4} = 3$ mol atoms. (Greatest value)"
    ],
    keywords: ["atoms", "moles", "greatest", "helium"]
  },
  {
    id: "Q6", qNumber: 6, section: "solutions", type: "MCQ Type-I",
    question: "The concentration of glucose, $\\mathrm{C_6H_{12}O_6}$, in blood is $0.9\\,\\text{g L}^{-1}$. What is its molarity?",
    options: ["5 M", "50 M", "0.005 M", "0.5 M"],
    answer: "(iii) $0.005\\,\\text{M}$.",
    solution: [
      "Molar mass of glucose $= 6(12) + 12(1) + 6(16) = 180\\,\\text{g mol}^{-1}$.",
      "Given concentration means there is $0.9\\,\\text{g}$ of glucose in $1\\,\\text{L}$ of solution.",
      "Moles of glucose $= \\frac{0.9}{180} = 0.005\\,\\text{mol}$.",
      "Molarity ($M$) $= \\frac{0.005\\,\\text{mol}}{1\\,\\text{L}} = 0.005\\,\\text{M}$."
    ],
    keywords: ["molarity", "glucose", "blood", "concentration"]
  },
  {
    id: "Q7", qNumber: 7, section: "solutions", type: "MCQ Type-I",
    question: "What is the molality of a solution containing **18.25 g HCl** in **500 g water**?",
    options: ["0.1 m", "1 M", "0.5 m", "1 m"],
    answer: "(iv) $1\\,\\text{m}$.",
    solution: [
      "Molar mass of HCl $= 1.0 + 35.5 = 36.5\\,\\text{g mol}^{-1}$.",
      "Moles of HCl ($n$) $= \\frac{18.25}{36.5} = 0.500\\,\\text{mol}$.",
      "Mass of solvent (water) $= 500\\,\\text{g} = 0.500\\,\\text{kg}$.",
      "Molality ($m$) $= \\frac{\\text{moles of solute}}{\\text{kg of solvent}} = \\frac{0.500}{0.500} = 1.00\\,\\text{mol kg}^{-1} = 1\\,\\text{m}$."
    ],
    keywords: ["molality", "hcl", "concentration"]
  },
{
    id: "Q8", qNumber: 8, section: "mole", type: "MCQ Type-I",
    question: "How many $\\mathrm{H_2SO_4}$ molecules are present in **100 mL of 0.02 M** $\\mathrm{H_2SO_4}$?",
    options: ["$12.044 \\times 10^{20}$ molecules", "$6.022 \\times 10^{23}$ molecules", "$1 \\times 10^{23}$ molecules", "$12.044 \\times 10^{23}$ molecules"],
    answer: "(i) $12.044 \\times 10^{20}$ molecules.",
    solution: [
      "Moles ($n$) $= M \\times V = 0.02\\,\\text{M} \\times 0.100\\,\\text{L} = 0.002\\,\\text{mol}$.",
      "Number of molecules ($N$) $= n \\times N_A = 0.002 \\times 6.022 \\times 10^{23}$.",
      "$N = 1.2044 \\times 10^{21}$ molecules, which can be written as $12.044 \\times 10^{20}$ molecules."
    ],
    keywords: ["molecules", "molarity", "h2so4", "avogadro"]
  },
  {
    id: "Q9", qNumber: 9, section: "mole", type: "MCQ Type-I",
    question: "What is the mass percent of carbon in carbon dioxide ($\\mathrm{CO_2}$)?",
    options: ["0.034%", "27.27%", "3.4%", "28.7%"],
    answer: "(ii) 27.27%.",
    solution: [
      "Molar mass of $\\mathrm{CO_2} = 12.01 + 2(16.00) = 44.01\\,\\text{g mol}^{-1}$.",
      "Mass percent of C $= \\frac{\\text{Mass of C}}{\\text{Molar mass of } \\mathrm{CO_2}} \\times 100$",
      "$\\%\\mathrm{C} = \\frac{12.01}{44.01} \\times 100 = 27.27\\%$"
    ],
    keywords: ["mass percent", "carbon", "co2"]
  },
  {
    id: "Q10", qNumber: 10, section: "mole", type: "MCQ Type-I",
    question: "The empirical formula of a compound is $\\mathrm{CH_2O}$ and its molar mass is $180\\,\\text{g mol}^{-1}$. What is its molecular formula?",
    options: ["$\\mathrm{C_9H_{18}O_9}$", "$\\mathrm{CH_2O}$", "$\\mathrm{C_6H_{12}O_6}$", "$\\mathrm{C_2H_4O_2}$"],
    answer: "(iii) $\\mathrm{C_6H_{12}O_6}$.",
    solution: [
      "Empirical-formula mass of $\\mathrm{CH_2O} = 12 + 2(1) + 16 = 30\\,\\text{g mol}^{-1}$.",
      "Multiplier ($n$) $= \\frac{\\text{Molar Mass}}{\\text{Empirical Mass}} = \\frac{180}{30} = 6$.",
      "Multiply every subscript in the empirical formula by 6.",
      "$(\\mathrm{CH_2O})_6 = \\mathrm{C_6H_{12}O_6}$"
    ],
    keywords: ["empirical formula", "molecular formula", "molar mass"]
  },
  {
    id: "Q11", qNumber: 11, section: "measurement", type: "MCQ Type-I",
    question: "A solution has density $3.12\\,\\text{g mL}^{-1}$. What mass corresponds to **1.5 mL**, reported with correct significant figures?",
    options: ["4.7 g", "$4680 \\times 10^{-3}$ g", "4.680 g", "46.80 g"],
    answer: "(i) 4.7 g.",
    solution: [
      "Mass $= \\text{Density} \\times \\text{Volume} = 3.12 \\times 1.5 = 4.68\\,\\text{g}$.",
      "The value $1.5$ has the least number of significant figures (2).",
      "Therefore, the result must be rounded to 2 significant figures.",
      "$4.68\\,\\text{g} \\rightarrow 4.7\\,\\text{g}$"
    ],
    keywords: ["density", "significant figures", "mass", "volume"]
  },
  {
    id: "Q12", qNumber: 12, section: "matter", type: "MCQ Type-I",
    question: "Which statement about a compound is incorrect?",
    options: [
      "A molecule of a compound has atoms of different elements.",
      "A compound cannot be separated into its elements by physical methods.",
      "A compound retains the physical properties of its constituent elements.",
      "The ratio of atoms of different elements in a compound is fixed."
    ],
    answer: "(iii) A compound retains the physical properties of its constituent elements.",
    solution: [
      "A compound is a new substance formed by chemical combination.",
      "Its properties are entirely different from its constituent elements.",
      "For example, hydrogen burns and oxygen supports combustion, but water (a compound of both) extinguishes fire."
    ],
    keywords: ["compound", "properties", "elements", "matter"]
  },
  {
    id: "Q13", qNumber: 13, section: "laws", type: "MCQ Type-I",
    question: "Which statement is correct for the reaction $4\\mathrm{Fe}(s) + 3\\mathrm{O_2}(g) \\rightarrow 2\\mathrm{Fe_2O_3}(s)$?",
    options: [
      "Total mass of iron and oxygen in reactants equals total mass in product; conservation of mass is obeyed.",
      "Equal reactant and product mass proves the law of multiple proportions.",
      "Product can always be increased by taking either reactant in excess.",
      "Product decreases when either reactant is taken in excess."
    ],
    answer: "(i) Total mass of iron and oxygen in reactants equals total mass in product; conservation of mass is obeyed.",
    solution: [
      "Count the atoms on both sides: Reactants have 4 Fe atoms and 6 O atoms.",
      "Products: $2\\mathrm{Fe_2O_3}$ contains $2 \\times 2 = 4$ Fe atoms and $2 \\times 3 = 6$ O atoms.",
      "Because the number of atoms is exactly balanced, the total mass is conserved."
    ],
    keywords: ["conservation of mass", "reaction", "iron"]
  },
  {
    id: "Q14", qNumber: 14, section: "laws", type: "MCQ Type-I",
    question: "Which reaction is not correctly written according to the law of conservation of mass?",
    options: [
      "$2\\mathrm{Mg} + \\mathrm{O_2} \\rightarrow 2\\mathrm{MgO}$",
      "$\\mathrm{C_3H_8} + \\mathrm{O_2} \\rightarrow \\mathrm{CO_2} + \\mathrm{H_2O}$",
      "$\\mathrm{P_4} + 5\\mathrm{O_2} \\rightarrow \\mathrm{P_4O_{10}}$",
      "$\\mathrm{CH_4} + 2\\mathrm{O_2} \\rightarrow \\mathrm{CO_2} + 2\\mathrm{H_2O}$"
    ],
    answer: "(ii) $\\mathrm{C_3H_8} + \\mathrm{O_2} \\rightarrow \\mathrm{CO_2} + \\mathrm{H_2O}$",
    solution: [
      "The equation in option (ii) is unbalanced.",
      "Left side has 3 C atoms and 8 H atoms, but the right side has only 1 C atom and 2 H atoms.",
      "A balanced equation is required to obey the Law of Conservation of Mass: $\\mathrm{C_3H_8} + 5\\mathrm{O_2} \\rightarrow 3\\mathrm{CO_2} + 4\\mathrm{H_2O}$."
    ],
    keywords: ["conservation of mass", "unbalanced", "combustion"]
  },
  {
    id: "Q15", qNumber: 15, section: "laws", type: "MCQ Type-I",
    question: "Which statement demonstrates the law of multiple proportions?",
    options: [
      "Carbon dioxide from every source has the same composition.",
      "Carbon forms CO and CO₂; oxygen masses combining with a fixed carbon mass are in the ratio 1:2.",
      "Magnesium mass used equals magnesium mass in magnesium oxide.",
      "Hydrogen and oxygen gas volumes combine in a 2:1 ratio."
    ],
    answer: "(ii) Carbon forms CO and CO₂; oxygen masses combining with a fixed carbon mass are in the ratio 1:2.",
    solution: [
      "The Law of Multiple Proportions applies when two elements form more than one compound.",
      "In CO, 12g of C combines with 16g of O.",
      "In $\\mathrm{CO_2}$, 12g of C combines with 32g of O.",
      "The ratio of oxygen masses (16g and 32g) that combine with a fixed mass of carbon (12g) is $16:32 = 1:2$."
    ],
    keywords: ["multiple proportions", "carbon", "oxygen"]
  },
  {
    id: "Q16", qNumber: 16, section: "mole", type: "MCQ Type-II",
    question: "One mole of oxygen gas at STP is equal to which quantities? (Multiple Correct)",
    options: ["$6.022 \\times 10^{23}$ molecules of oxygen", "$6.022 \\times 10^{23}$ atoms of oxygen", "16 g oxygen", "32 g oxygen"],
    answer: "(i) and (iv).",
    solution: [
      "Oxygen gas exists as a diatomic molecule ($\\mathrm{O_2}$).",
      "Therefore, 1 mole of $\\mathrm{O_2}$ contains $N_A$ ($6.022 \\times 10^{23}$) **molecules**.",
      "The molar mass of $\\mathrm{O_2} = 2 \\times 16 = 32\\,\\text{g mol}^{-1}$."
    ],
    keywords: ["mole", "oxygen", "stp", "diatomic"]
  },
  {
    id: "Q17", qNumber: 17, section: "solutions", type: "MCQ Type-II",
    question: "One litre of 0.1 M $\\mathrm{H_2SO_4}$ reacts with one litre of 0.1 M NaOH. For the reaction $\\mathrm{H_2SO_4} + 2\\mathrm{NaOH} \\rightarrow \\mathrm{Na_2SO_4} + 2\\mathrm{H_2O}$, select the correct amount and molarity of sodium sulphate formed.",
    options: ["0.1 mol L⁻¹", "7.10 g", "0.025 mol L⁻¹", "3.55 g"],
    answer: "(ii) 7.10 g and (iii) 0.025 mol L⁻¹.",
    solution: [
      "Moles of $\\mathrm{H_2SO_4} = 0.1\\,\\text{M} \\times 1\\,\\text{L} = 0.1\\,\\text{mol}$.",
      "Moles of NaOH $= 0.1\\,\\text{M} \\times 1\\,\\text{L} = 0.1\\,\\text{mol}$.",
      "The stoichiometry requires 2 moles of NaOH for every 1 mole of $\\mathrm{H_2SO_4}$. Therefore, NaOH is the limiting reagent.",
      "Moles of $\\mathrm{Na_2SO_4}$ formed $= 0.1 / 2 = 0.05\\,\\text{mol}$.",
      "Mass of $\\mathrm{Na_2SO_4} = 0.05\\,\\text{mol} \\times 142\\,\\text{g mol}^{-1} = 7.10\\,\\text{g}$.",
      "Total volume of solution $\\approx 2\\,\\text{L}$. Molarity $= 0.05\\,\\text{mol} / 2\\,\\text{L} = 0.025\\,\\text{M}$."
    ],
    keywords: ["limiting reagent", "molarity", "neutralization"]
  },
  {
    id: "Q18", qNumber: 18, section: "mole", type: "MCQ Type-II",
    question: "Which of the following pairs contain the same number of atoms? (Multiple Correct)",
    options: ["16 g O₂ and 4 g H₂", "16 g O₂ and 44 g CO₂", "28 g N₂ and 32 g O₂", "12 g C and 23 g Na"],
    answer: "(iii) 28 g N₂ and 32 g O₂ AND (iv) 12 g C and 23 g Na.",
    solution: [
      "(iii) 28g N₂ = 1 mol N₂ molecules = 2 mol N atoms. 32g O₂ = 1 mol O₂ molecules = 2 mol O atoms. (Equal)",
      "(iv) 12g C = 1 mol C atoms. 23g Na = 1 mol Na atoms. (Equal)",
      "(i) 16g O₂ = 0.5 mol O₂ = 1 mol O atoms. 4g H₂ = 2 mol H₂ = 4 mol H atoms. (Not equal)",
      "(ii) 16g O₂ = 1 mol O atoms. 44g CO₂ = 1 mol CO₂ = 3 mol atoms total. (Not equal)"
    ],
    keywords: ["atoms", "moles", "mass", "pairs"]
  },
  {
    id: "Q19", qNumber: 19, section: "solutions", type: "MCQ Type-II",
    question: "Which of the following solutions have the same molar concentration? (Multiple Correct)",
    options: ["20 g NaOH in 200 mL solution", "0.5 mol KCl in 200 mL solution", "40 g NaOH in 100 mL solution", "20 g KOH in 200 mL solution"],
    answer: "(i) and (ii).",
    solution: [
      "(i) $20\\,\\text{g}$ NaOH $= 20/40 = 0.5\\,\\text{mol}$. $M = 0.5 / 0.200 = 2.5\\,\\text{M}$.",
      "(ii) Moles KCl $= 0.5\\,\\text{mol}$. $M = 0.5 / 0.200 = 2.5\\,\\text{M}$.",
      "(iii) $40\\,\\text{g}$ NaOH $= 1\\,\\text{mol}$. $M = 1 / 0.100 = 10\\,\\text{M}$.",
      "(iv) $20\\,\\text{g}$ KOH $= 20/56 \\approx 0.357\\,\\text{mol}$. $M = 0.357 / 0.200 \\approx 1.78\\,\\text{M}$.",
      "Therefore, (i) and (ii) share the same concentration of 2.5 M."
    ],
    keywords: ["molarity", "concentration", "solutions"]
  },
  {
    id: "Q20", qNumber: 20, section: "mole", type: "MCQ Type-II",
    question: "Sixteen grams of oxygen gas has the same number of molecules as which samples? (Multiple Correct)",
    options: ["16 g CO", "28 g N₂", "14 g N₂", "1.0 g H₂"],
    answer: "(iii) 14 g N₂ AND (iv) 1.0 g H₂.",
    solution: [
      "16g of oxygen gas ($\\mathrm{O_2}$) $= \\frac{16}{32} = 0.50\\,\\text{mol}$ of molecules.",
      "14g of $\\mathrm{N_2} = \\frac{14}{28} = 0.50\\,\\text{mol}$ of molecules.",
      "1.0g of $\\mathrm{H_2} = \\frac{1.0}{2.0} = 0.50\\,\\text{mol}$ of molecules.",
      "Equal moles mean equal numbers of molecules (Avogadro's principle)."
    ],
    keywords: ["molecules", "moles", "mass", "avogadro"]
  },
  {
    id: "Q21", qNumber: 21, section: "measurement", type: "MCQ Type-II",
    question: "Which of the following terms are unitless? (Multiple Correct)",
    options: ["Molality", "Molarity", "Mole fraction", "Mass percent"],
    answer: "(iii) Mole fraction and (iv) Mass percent.",
    solution: [
      "Mole fraction is a ratio of moles to total moles ($\\text{mol} / \\text{mol}$), so the units cancel out.",
      "Mass percent is a ratio of mass to total mass multiplied by 100 ($\\text{g} / \\text{g}$), so the units cancel out.",
      "Molality is $\\text{mol kg}^{-1}$ and Molarity is $\\text{mol L}^{-1}$."
    ],
    keywords: ["unitless", "mole fraction", "mass percent", "concentration"]
  },
  {
    id: "Q22", qNumber: 22, section: "matter", type: "MCQ Type-II",
    question: "Dalton stated: 'Compounds are formed when atoms of different elements combine in a fixed ratio.' Which laws are **not** related to this statement?",
    options: ["Law of conservation of mass", "Law of definite proportions", "Law of multiple proportions", "Avogadro law"],
    answer: "(i) Law of conservation of mass and (iv) Avogadro law.",
    solution: [
      "The phrase 'fixed ratio' is the direct definition of the **Law of Definite Proportions**.",
      "It also sets up the framework for the **Law of Multiple Proportions**.",
      "Conservation of mass deals with total system mass, and Avogadro's law deals with gas volumes. These are not directly related to 'combining in a fixed ratio' within a single compound."
    ],
    keywords: ["dalton", "fixed ratio", "laws", "definite proportions"]
  },
  {
    id: "Q23", qNumber: 23, section: "mole", type: "Short Answer",
    question: "What is the mass of one carbon-12 atom in grams?",
    options: [],
    answer: "$1.99 \\times 10^{-23}\\,\\text{g}$.",
    solution: [
      "We know that 1 mole ($6.02214076 \\times 10^{23}$ atoms) of carbon-12 weighs exactly 12g.",
      "$\\text{Mass of 1 atom} = \\frac{12\\,\\text{g}}{6.02214076 \\times 10^{23}}$",
      "$\\text{Mass} \\approx 1.9926 \\times 10^{-23}\\,\\text{g}$"
    ],
    keywords: ["carbon-12", "mass of atom", "avogadro"]
  },
  {
    id: "Q24", qNumber: 24, section: "measurement", type: "Short Answer",
    question: "How many significant figures should be present in the answer to the calculation: $\\frac{2.5 \\times 1.25 \\times 3.5}{2.01}$?",
    options: [],
    answer: "2 significant figures.",
    solution: [
      "In multiplication and division, the final answer must have the same number of significant figures as the term with the fewest significant figures.",
      "2.5 (2 sig figs), 1.25 (3 sig figs), 3.5 (2 sig figs), 2.01 (3 sig figs).",
      "The least precise terms have 2 significant figures. Thus, the result must be reported to 2 significant figures."
    ],
    keywords: ["significant figures", "multiplication", "rules"]
  },
  {
    id: "Q25", qNumber: 25, section: "measurement", type: "Short Answer",
    question: "What is the symbol for the SI unit of mole? How is the mole defined?",
    options: [],
    answer: "Symbol: **mol**. One mole contains exactly $6.02214076 \\times 10^{23}$ specified elementary entities.",
    solution: [
      "The SI unit symbol is simply **mol**.",
      "Historically, it was defined as the amount of substance containing as many entities as there are atoms in exactly 12g of the $^{12}\\text{C}$ isotope.",
      "The modern SI definition fixes the numerical value of the Avogadro constant to exactly $6.02214076 \\times 10^{23} \\text{ mol}^{-1}$."
    ],
    keywords: ["mole", "si unit", "definition", "avogadro"]
  },
  {
    id: "Q26", qNumber: 26, section: "solutions", type: "Short Answer",
    question: "What is the difference between molality and molarity?",
    options: [],
    answer: "Molality is mass-based and temperature-independent. Molarity is volume-based and temperature-dependent.",
    solution: [
      "**Molality ($m$)**: Moles of solute divided by the mass of the solvent in kilograms ($\\text{mol kg}^{-1}$). Since it relies purely on mass, it does not change with temperature.",
      "**Molarity ($M$)**: Moles of solute divided by the volume of the solution in liters ($\\text{mol L}^{-1}$). Because liquids expand/contract with temperature changes, molarity is temperature-dependent."
    ],
    keywords: ["molality", "molarity", "temperature", "difference"]
  },
  {
    id: "Q27", qNumber: 27, section: "mole", type: "Short Answer",
    question: "Calculate the mass percent of calcium, phosphorus and oxygen in calcium phosphate $\\mathrm{Ca_3(PO_4)_2}$.",
    options: [],
    answer: "Ca: 38.71%, P: 20.00%, O: 41.29%.",
    solution: [
      "Molar mass of $\\mathrm{Ca_3(PO_4)_2} = 3(40) + 2(31) + 8(16) = 120 + 62 + 128 = 310\\,\\text{u}$.",
      "Mass % of Ca $= (120 / 310) \\times 100 = 38.71\\%$",
      "Mass % of P $= (62 / 310) \\times 100 = 20.00\\%$",
      "Mass % of O $= (128 / 310) \\times 100 = 41.29\\%$",
      "Check: $38.71 + 20.00 + 41.29 = 100.00\\%$."
    ],
    keywords: ["mass percent", "calcium phosphate", "composition"]
  },
  {
    id: "Q28", qNumber: 28, section: "laws", type: "Short Answer",
    question: "45.4 L of dinitrogen reacted with 22.7 L of dioxygen and 45.4 L of nitrous oxide was formed. The reaction is: $2\\mathrm{N_2}(g) + \\mathrm{O_2}(g) \\rightarrow 2\\mathrm{N_2O}(g)$. Which law is being obeyed?",
    options: [],
    answer: "Gay-Lussac's Law of Gaseous Volumes.",
    solution: [
      "Observe the volumes of the reacting gases and product: 45.4 L : 22.7 L : 45.4 L.",
      "Divide all values by the smallest volume (22.7).",
      "The ratio is exactly $2 : 1 : 2$.",
      "This simple whole-number volume ratio at constant temperature and pressure is the definition of Gay-Lussac's law of gaseous volumes."
    ],
    keywords: ["gay lussac", "gaseous volumes", "ratio", "laws"]
  },
  {
    id: "Q29", qNumber: 29, section: "laws", type: "Short Answer",
    question: "If two elements can combine to form more than one compound, the masses of one element that combine with a fixed mass of the other element, are in whole number ratio. Is this true? Name the law and give an example.",
    options: [],
    answer: "Yes. It is the Law of Multiple Proportions.",
    solution: [
      "The statement accurately describes Dalton's Law of Multiple Proportions.",
      "**Example**: Water ($\\mathrm{H_2O}$) and Hydrogen Peroxide ($\\mathrm{H_2O_2}$).",
      "In $\\mathrm{H_2O}$, 2g of H combines with 16g of O.",
      "In $\\mathrm{H_2O_2}$, 2g of H combines with 32g of O.",
      "The masses of oxygen (16g and 32g) combining with a fixed mass of hydrogen (2g) bear a simple ratio of $16:32 = 1:2$."
    ],
    keywords: ["multiple proportions", "laws", "true false"]
  },
  {
    id: "Q30", qNumber: 30, section: "mole", type: "Short Answer",
    question: "Calculate the average atomic mass of hydrogen using the following data: $^1\\mathrm{H}$ abundance 99.985%, mass 1 u; and $^2\\mathrm{H}$ abundance 0.015%, mass 2 u.",
    options: [],
    answer: "$1.00015\\,\\text{u}$.",
    solution: [
      "Average atomic mass $= \\frac{( \\%_1 \\times \\text{Mass}_1 ) + ( \\%_2 \\times \\text{Mass}_2 )}{100}$",
      "Avg Mass $= \\frac{(99.985 \\times 1) + (0.015 \\times 2)}{100}$",
      "Avg Mass $= \\frac{99.985 + 0.030}{100} = \\frac{100.015}{100} = 1.00015\\,\\text{u}$"
    ],
    keywords: ["average atomic mass", "hydrogen", "isotopes"]
  },
  {
    id: "Q31", qNumber: 31, section: "mole", type: "Short Answer",
    question: "Hydrogen gas is prepared by reacting dilute HCl with zinc: $\\mathrm{Zn} + 2\\mathrm{HCl} \\rightarrow \\mathrm{ZnCl_2} + \\mathrm{H_2}$. Calculate the volume of $\\mathrm{H_2}$ gas liberated at STP when 32.65 g of zinc reacts. (Atomic mass of Zn = 65.3 u; 1 mol gas = 22.7 L at STP).",
    options: [],
    answer: "$11.35\\,\\text{L of H}_2$.",
    solution: [
      "Moles of Zinc ($n$) $= \\frac{\\text{Mass}}{\\text{Molar Mass}} = \\frac{32.65}{65.3} = 0.500\\,\\text{mol}$.",
      "The balanced equation shows a 1:1 molar ratio between Zn and $\\mathrm{H_2}$. Thus, $0.500\\,\\text{mol}$ of $\\mathrm{H_2}$ is produced.",
      "Volume of $\\mathrm{H_2}$ at STP $= 0.500\\,\\text{mol} \\times 22.7\\,\\text{L mol}^{-1} = 11.35\\,\\text{L}$."
    ],
    keywords: ["stoichiometry", "zinc", "hydrogen volume", "stp"]
  },
  {
    id: "Q32", qNumber: 32, section: "solutions", type: "Short Answer",
    question: "The density of a 3 molal solution of NaOH is $1.110\\,\\text{g mL}^{-1}$. Calculate the molarity of the solution.",
    options: [],
    answer: "$2.97\\,\\text{M}$.",
    solution: [
      "A 3 molal solution means 3 moles of NaOH are dissolved in 1000g ($1\\,\\text{kg}$) of solvent.",
      "Mass of 3 moles of NaOH $= 3 \\times 40\\,\\text{g} = 120\\,\\text{g}$.",
      "Total mass of the solution $= \\text{Mass of solvent} + \\text{Mass of solute} = 1000\\,\\text{g} + 120\\,\\text{g} = 1120\\,\\text{g}$.",
      "Volume of solution $= \\frac{\\text{Mass}}{\\text{Density}} = \\frac{1120}{1.110} = 1009\\,\\text{mL} = 1.009\\,\\text{L}$.",
      "Molarity ($M$) $= \\frac{\\text{Moles}}{\\text{Volume (L)}} = \\frac{3}{1.009} = 2.97\\,\\text{M}$."
    ],
    keywords: ["molality", "molarity", "density", "conversion"]
  },
  {
    id: "Q33", qNumber: 33, section: "solutions", type: "Short Answer",
    question: "Volume of a solution changes with change in temperature, then, will the molality of the solution be affected by temperature? Give a reason for your answer.",
    options: [],
    answer: "No, molality is not affected by temperature.",
    solution: [
      "Molality is defined as the number of moles of solute per kilogram of solvent.",
      "Both moles (count of particles) and mass (kilograms) are fundamental properties that do not change with temperature.",
      "Therefore, because molality does not depend on volume, it is entirely temperature-independent."
    ],
    keywords: ["molality", "temperature", "volume", "mass"]
  },
  {
    id: "Q34", qNumber: 34, section: "solutions", type: "Short Answer",
    question: "If 4 g of NaOH dissolves in 36 g of $\\mathrm{H_2O}$, calculate the mole fraction of each component. Also, determine the molarity of the solution (specific gravity of solution is $1\\,\\text{g mL}^{-1}$).",
    options: [],
    answer: "$x_{\\mathrm{H_2O}} \\approx 0.95$, $x_{\\mathrm{NaOH}} \\approx 0.047$, and Molarity $= 2.5\\,\\text{M}$.",
    solution: [
      "Moles of NaOH $= \\frac{4\\,\\text{g}}{40\\,\\text{g mol}^{-1}} = 0.1\\,\\text{mol}$.",
      "Moles of $\\mathrm{H_2O} = \\frac{36\\,\\text{g}}{18\\,\\text{g mol}^{-1}} = 2\\,\\text{mol}$.",
      "Total moles $= 2 + 0.1 = 2.1\\,\\text{mol}$.",
      "Mole fraction of water ($x_{\\mathrm{H_2O}}$) $= \\frac{2}{2.1} \\approx 0.952$.",
      "Mole fraction of NaOH ($x_{\\mathrm{NaOH}}$) $= \\frac{0.1}{2.1} \\approx 0.0476$.",
      "Total mass of solution $= 36\\,\\text{g} + 4\\,\\text{g} = 40\\,\\text{g}$. Since density is $1\\,\\text{g mL}^{-1}$, Volume $= 40\\,\\text{mL} = 0.040\\,\\text{L}$.",
      "Molarity $= \\frac{0.1\\,\\text{mol}}{0.040\\,\\text{L}} = 2.5\\,\\text{M}$."
    ],
    keywords: ["mole fraction", "molarity", "naoh", "specific gravity"]
  },
  {
    id: "Q35", qNumber: 35, section: "mole", type: "Short Answer",
    question: "In the reaction $2\\mathrm{A} + 4\\mathrm{B} \\rightarrow 3\\mathrm{C} + 4\\mathrm{D}$, when 5 moles of A react with 6 moles of B, identify the limiting reagent and calculate the amount of C formed.",
    options: [],
    answer: "B is the limiting reagent; 4.5 moles of C are formed.",
    solution: [
      "According to stoichiometry, 2 moles of A require 4 moles of B. Ratio A:B is 1:2.",
      "Therefore, 5 moles of A would require $5 \\times 2 = 10$ moles of B.",
      "Since only 6 moles of B are available, **B is the limiting reagent**.",
      "Product C is calculated using the limiting reagent B: 4 moles of B produce 3 moles of C.",
      "Moles of C formed $= 6\\,\\text{moles of B} \\times \\frac{3\\,\\text{moles of C}}{4\\,\\text{moles of B}} = 4.5\\,\\text{moles}$."
    ],
    keywords: ["limiting reagent", "stoichiometry", "yield"]
  },
  {
    id: "Q36", qNumber: 36, section: "mole", type: "Matching",
    question: "Match the following: (i) 88 g of CO₂, (ii) $6.022 \\times 10^{23}$ molecules of H₂O, (iii) 5.6 L of O₂ at STP, (iv) 96 g of O₂, (v) 1 mol of any gas. CHOICES: (a) 0.25 mol, (b) 2 mol, (c) 1 mol, (d) $6.022 \\times 10^{23}$ molecules, (e) 3 mol.",
    options: [],
    answer: "(i) → (b), (ii) → (c), (iii) → (a), (iv) → (e), (v) → (d).",
    solution: [
      "(i) 88g CO₂ / 44g mol⁻¹ = 2 mol → (b).",
      "(ii) $6.022 \\times 10^{23}$ molecules is exactly 1 mole → (c).",
      "(iii) At STP, 1 mol is 22.4L. 5.6L / 22.4L mol⁻¹ = 0.25 mol → (a).",
      "(iv) 96g O₂ / 32g mol⁻¹ = 3 mol → (e).",
      "(v) 1 mol of any gas contains Avogadro's number of molecules → (d)."
    ],
    keywords: ["matching", "mole", "stp", "mass"]
  },
  {
    id: "Q37", qNumber: 37, section: "measurement", type: "Matching",
    question: "Match the physical quantities with units: (i) Molarity, (ii) Mole fraction, (iii) Mole, (iv) Molality, (v) Pressure, (vi) Luminous intensity, (vii) Density, (viii) Mass.",
    options: [],
    answer: "Molarity → mol L⁻¹; Mole fraction → Unitless; Mole → mol; Molality → mol kg⁻¹; Pressure → Pascal; Luminous intensity → Candela; Density → g mL⁻¹; Mass → kg.",
    solution: [
      "Molarity = moles/volume = mol L⁻¹.",
      "Mole fraction is a ratio = Unitless.",
      "Amount of substance = mol.",
      "Molality = moles/mass = mol kg⁻¹.",
      "Pressure SI unit is Pascal (or N m⁻²).",
      "Luminous intensity SI unit is Candela (cd).",
      "Density = mass/volume = g mL⁻¹.",
      "Mass SI base unit is kilogram (kg)."
    ],
    keywords: ["matching", "units", "si units", "physical quantities"]
  },
  {
    id: "Q38", qNumber: 38, section: "mole", type: "Assertion-Reason",
    question: "Assertion (A): The empirical mass of ethene is half of its molecular mass. Reason (R): The empirical formula represents the simplest whole number ratio of various atoms present in a compound.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true.",
      "Both A and R are false."
    ],
    answer: "(i) Both A and R are true and R is the correct explanation of A.",
    solution: [
      "The molecular formula of ethene is $\\mathrm{C_2H_4}$ with a molecular mass of 28 u.",
      "The empirical formula (simplest ratio) is $\\mathrm{CH_2}$ with an empirical mass of 14 u.",
      "Since 14 is half of 28, the Assertion is true. This mathematical relationship exists precisely because the empirical formula is the simplest whole number ratio, making the Reason true and the correct explanation."
    ],
    keywords: ["assertion reason", "empirical mass", "ethene"]
  },
  {
    id: "Q39", qNumber: 39, section: "mole", type: "Assertion-Reason",
    question: "Assertion (A): One atomic mass unit is defined as one twelfth of the mass of one carbon-12 atom. Reason (R): Carbon-12 isotope is the most abundant isotope of carbon and has been chosen as standard.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "Both A and R are false."
    ],
    answer: "(ii) Both A and R are true but R is NOT the correct explanation of A.",
    solution: [
      "The assertion correctly states the modern IUPAC definition of the atomic mass unit (amu or u).",
      "The reason correctly states that Carbon-12 is the most abundant and was chosen as the standard.",
      "However, its natural *abundance* is not the logical explanation for why the math is defined exactly as $1/12$. The fraction $1/12$ was chosen so that 1 u roughly equals the mass of a single nucleon (proton/neutron)."
    ],
    keywords: ["assertion reason", "atomic mass unit", "carbon-12"]
  },
  {
    id: "Q40", qNumber: 40, section: "measurement", type: "Assertion-Reason",
    question: "Assertion (A): Significant figures for 0.200 is 3 where as for 200 it is 1. Reason (R): Zero at the end or right of a number are significant provided they are not on the right side of the decimal point.",
    options: [
      "Both A and R are true and R is correct explanation of A.",
      "Both A and R are true but R is not a correct explanation of A.",
      "A is true but R is false.",
      "Both A and R are false."
    ],
    answer: "(iii) A is true but R is false.",
    solution: [
      "The assertion is correct: 0.200 has 3 sig figs (trailing zeros count after a decimal), while 200 has 1 sig fig (trailing zeros don't count without a decimal).",
      "The reason is blatantly false. The rule actually states that terminal zeros ARE significant provided they ARE on the right side of the decimal point."
    ],
    keywords: ["assertion reason", "significant figures", "zeros"]
  },
  {
    id: "Q41", qNumber: 41, section: "mole", type: "Assertion-Reason",
    question: "Assertion (A): Combustion of 16 g of methane gives 18 g of water. Reason (R): In the combustion of methane, water is one of the products.",
    options: [
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true.",
      "Both A and R are false."
    ],
    answer: "(iii) A is false but R is true.",
    solution: [
      "Balanced reaction: $\\mathrm{CH_4} + 2\\mathrm{O_2} \\rightarrow \\mathrm{CO_2} + 2\\mathrm{H_2O}$.",
      "16g of methane is exactly 1 mole.",
      "1 mole of methane produces 2 moles of water.",
      "Mass of 2 moles of water = $2 \\times 18\\,\\text{g} = 36\\,\\text{g}$.",
      "Therefore, the assertion (which claims 18g) is false. However, water is indeed a product, so the reason is true."
    ],
    keywords: ["assertion reason", "combustion", "methane", "water"]
  },
  {
    id: "Q42", qNumber: 42, section: "mole", type: "Long Answer",
    question: "A vessel contains 1.6 g of dioxygen at STP (273.15K, 1 atm). The gas is now transferred to another vessel at constant temperature, where pressure becomes half of the original. Calculate: (i) volume of the new vessel, (ii) number of molecules of dioxygen.",
    options: [],
    answer: "New volume = 2.24 L; Molecules = $3.011 \\times 10^{22}$.",
    solution: [
      "Moles of $\\mathrm{O_2} = 1.6\\,\\text{g} / 32\\,\\text{g mol}^{-1} = 0.050\\,\\text{mol}$.",
      "At old STP (1 atm), 1 mol gas = 22.4 L. Initial volume ($V_1$) $= 0.050 \\times 22.4 = 1.12\\,\\text{L}$.",
      "Using Boyle's Law at constant temp: $P_1V_1 = P_2V_2$.",
      "Since pressure halves ($P_2 = 0.5 P_1$), volume doubles: $V_2 = 1.12 \\times 2 = 2.24\\,\\text{L}$.",
      "Number of molecules $= \\text{Moles} \\times N_A = 0.050 \\times 6.022 \\times 10^{23} = 3.011 \\times 10^{22}$ molecules."
    ],
    keywords: ["boyles law", "volume", "molecules", "dioxygen"]
  },
  {
    id: "Q43", qNumber: 43, section: "mole", type: "Long Answer",
    question: "For the reaction $\\mathrm{CaCO_3}(s) + 2\\mathrm{HCl}(aq) \\rightarrow \\mathrm{CaCl_2}(aq) + \\mathrm{CO_2}(g) + \\mathrm{H_2O}(l)$, what mass of $\\mathrm{CaCl_2}$ will be formed when 250 mL of 0.76 M HCl reacts with 1000 g of $\\mathrm{CaCO_3}$? Name the limiting reagent.",
    options: [],
    answer: "HCl is limiting; 0.095 mol $\\mathrm{CaCl_2}$ forms, which is 10.54 g.",
    solution: [
      "Moles of HCl $= 0.250\\,\\text{L} \\times 0.76\\,\\text{M} = 0.190\\,\\text{mol}$.",
      "Moles of $\\mathrm{CaCO_3} = 1000\\,\\text{g} / 100\\,\\text{g mol}^{-1} = 10.0\\,\\text{mol}$.",
      "Stoichiometry ratio is 1 $\\mathrm{CaCO_3}$ : 2 HCl. 10 moles of $\\mathrm{CaCO_3}$ would need 20 moles of HCl. We only have 0.190 mol, so **HCl is limiting**.",
      "Moles of $\\mathrm{CaCl_2}$ formed $= \\frac{1}{2} \\times \\text{Moles of HCl} = 0.190 / 2 = 0.095\\,\\text{mol}$.",
      "Molar mass of $\\mathrm{CaCl_2} \\approx 111\\,\\text{g mol}^{-1}$.",
      "Mass of $\\mathrm{CaCl_2} = 0.095\\,\\text{mol} \\times 111\\,\\text{g mol}^{-1} = 10.545\\,\\text{g} \\approx 10.54\\,\\text{g}$."
    ],
    keywords: ["limiting reagent", "caco3", "hcl", "cacl2"]
  },
  {
    id: "Q44", qNumber: 44, section: "laws", type: "Long Answer",
    question: "Define the law of multiple proportions. Explain it with two examples. How does this law point to the existence of atoms?",
    options: [],
    answer: "See step-by-step solution for definition and examples.",
    solution: [
      "**Definition:** When two elements combine to form more than one compound, the masses of one element that combine with a fixed mass of the other element are in the ratio of small whole numbers.",
      "**Example 1:** Carbon and Oxygen form CO and CO₂. For a fixed 12g of C, the masses of O are 16g and 32g. Ratio $16:32 = 1:2$.",
      "**Example 2:** Hydrogen and Oxygen form H₂O and H₂O₂. For a fixed 2g of H, the masses of O are 16g and 32g. Ratio $16:32 = 1:2$.",
      "**Existence of Atoms:** The fact that elements combine in small, discrete integer ratios (like $1:2$ or $2:3$) strongly implies that matter is not a continuous fluid, but rather made of discrete, indivisible units (atoms) combining in whole numbers."
    ],
    keywords: ["multiple proportions", "definition", "examples", "atoms"]
  },
  {
    id: "Q45", qNumber: 45, section: "laws", type: "Long Answer",
    question: "A box contains red balls labeled A (2g) and blue balls labeled B (5g). Consider the combinations AB, AB₂, A₂B and A₂B₃ and show that the law of multiple proportions is applicable.",
    options: [],
    answer: "For a fixed 2g mass of A, the masses of B are 5g, 10g, 2.5g, and 7.5g. The ratio simplifies to exactly $2:4:1:3$.",
    solution: [
      "**AB**: Mass of A = 2g. Mass of B = 5g.",
      "**AB₂**: Mass of A = 2g. Mass of B = $2 \\times 5 = 10$g.",
      "**A₂B**: Mass of A = 4g, B = 5g. To fix A to 2g, we halve both: A = 2g, B = 2.5g.",
      "**A₂B₃**: Mass of A = 4g, B = 15g. To fix A to 2g, we halve both: A = 2g, B = 7.5g.",
      "For a fixed 2g of A, the masses of B are: 5g, 10g, 2.5g, 7.5g.",
      "Divide all by the smallest value (2.5g): $2 : 4 : 1 : 3$.",
      "Since this is a simple whole-number ratio, it perfectly demonstrates the Law of Multiple Proportions."
    ],
    keywords: ["multiple proportions", "balls", "combinations", "ratio"]
  }
];

if (ALL_QUESTIONS.length !== 50) {
  throw new Error(`Question bank integrity failure: expected 50 records, received ${ALL_QUESTIONS.length}.`);
}

// ============================================================================
// REACT COMPONENTS ARCHITECTURE
// ============================================================================

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3 py-1 text-[11px] font-black uppercase tracking-[0.22em] text-cyan-300">
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <header className="mb-8 max-w-5xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
        {title}
      </h2>
      <p className="mt-4 max-w-4xl text-base leading-8 text-slate-400 sm:text-lg">{description}</p>
    </header>
  );
}

function InfoCard({ title, children, accent = "cyan" }: { title: string; children: ReactNode; accent?: "cyan" | "amber" | "purple" }) {
  const accents = {
    cyan: "border-cyan-400/25 bg-cyan-400/[0.045] text-cyan-300",
    amber: "border-amber-400/25 bg-amber-400/[0.045] text-amber-300",
    purple: "border-purple-400/25 bg-purple-400/[0.045] text-purple-300",
  };
  return (
    <aside className={`rounded-2xl border p-5 shadow-2xl shadow-black/10 ${accents[accent]}`}>
      <h3 className="text-sm font-black uppercase tracking-[0.16em]">{title}</h3>
      <div className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{children}</div>
    </aside>
  );
}

function DataTable({ caption, columns, rows }: { caption: string; columns: string[]; rows: Array<Array<ReactNode>> }) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-slate-700/80 bg-slate-950/65 shadow-2xl shadow-black/20">
      <table className="w-full min-w-[760px] border-collapse text-left">
        <caption className="border-b border-slate-700/70 bg-gradient-to-r from-cyan-400/10 via-slate-900 to-purple-400/10 px-5 py-4 text-left text-lg font-black text-white">
          {caption}
        </caption>
        <thead>
          <tr className="bg-slate-900/90">
            {columns.map((column) => (
              <th key={column} className="border-b border-slate-700/70 px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`} className="border-b border-slate-800/80 last:border-b-0 hover:bg-slate-800/30 transition-colors">
              {row.map((cell, cellIndex) => (
                cellIndex === 0 
                  ? <th key={cellIndex} className="bg-slate-900/55 px-4 py-4 font-bold text-slate-100">{cell}</th>
                  : <td key={cellIndex} className="px-4 py-4 leading-7 text-slate-300">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ExemplarProblem({ problem }: { problem: ProblemData }) {
  return (
    <details className="group overflow-hidden rounded-2xl border border-slate-700/80 bg-gradient-to-br from-slate-900/95 to-slate-950/95 shadow-xl shadow-black/20 transition hover:border-cyan-400/35">
      <summary className="flex items-start gap-4 border-b border-slate-800/90 p-5 cursor-pointer outline-none focus:ring-2 focus:ring-cyan-400/50">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-sm font-black text-cyan-300">
          Q{problem.qNumber}
        </span>
        <div className="min-w-0 flex-1">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-300">{problem.type}</span>
          <MathContent className="mt-1">{problem.question}</MathContent>
        </div>
        <span className="text-cyan-400 transition-transform group-open:rotate-180">▼</span>
      </summary>

      <div className="p-5 bg-slate-900/40">
        {problem.options.length > 0 && (
          <ol className="grid gap-2 mb-5 sm:grid-cols-2">
            {problem.options.map((option, index) => (
              <li key={index} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-sm text-slate-300">
                <span className="font-black text-purple-300">({["i", "ii", "iii", "iv"][index]})</span>
                <MathContent>{option}</MathContent>
              </li>
            ))}
          </ol>
        )}

        <div className="border-t border-slate-700/80 pt-5">
          <div className="rounded-xl border border-amber-400/25 bg-amber-400/[0.06] p-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-300">Correct answer</span>
            <MathContent>{problem.answer}</MathContent>
          </div>
          <div className="mt-5">
            <h4 className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Step-by-step solution</h4>
            <ol className="mt-3 space-y-3">
              {problem.solution.map((step, index) => (
                <li key={index} className="grid grid-cols-[2rem_1fr] gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-purple-400/25 bg-purple-400/10 text-xs font-black text-purple-200">
                    {index + 1}
                  </span>
                  <MathContent>{step}</MathContent>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </details>
  );
}

function SectionProblems({ sectionKey }: { sectionKey: SectionKey }) {
  const problems = useMemo(() => ALL_QUESTIONS.filter((q) => q.section === sectionKey), [sectionKey]);
  
  if (problems.length === 0) return null;

  return (
    <div className="mt-10">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <Eyebrow>Exemplar & Concept Integration</Eyebrow>
          <h3 className="mt-3 text-2xl font-black text-white">Practice directly after the theory</h3>
        </div>
        <span className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs font-bold text-slate-400">
          {problems.length} problems
        </span>
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        {problems.map((problem) => (
          <ExemplarProblem key={problem.id} problem={problem} />
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// VISUAL BLOCK COMPONENTS
// ============================================================================

function AtomHero() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-950 to-purple-400/10 shadow-2xl shadow-cyan-950/30">
      <svg viewBox="0 0 600 600" className="h-full w-full" role="img" aria-label="Atomic blueprint graphic">
        <defs>
          <radialGradient id="nucleus" cx="35%" cy="30%">
            <stop offset="0" stopColor="#fff4be" />
            <stop offset=".48" stopColor="#fbbf24" />
            <stop offset="1" stopColor="#f97316" />
          </radialGradient>
        </defs>
        <g fill="none" strokeWidth="2">
          <ellipse cx="300" cy="300" rx="205" ry="88" stroke="#5ee7ff" opacity=".55" transform="rotate(22 300 300)" className="animate-[spin_20s_linear_infinite]" />
          <ellipse cx="300" cy="300" rx="205" ry="88" stroke="#a78bfa" opacity=".55" transform="rotate(82 300 300)" className="animate-[spin_25s_linear_infinite]" />
          <ellipse cx="300" cy="300" rx="205" ry="88" stroke="#5ee7ff" opacity=".55" transform="rotate(142 300 300)" className="animate-[spin_30s_linear_infinite]" />
          <circle cx="300" cy="300" r="225" stroke="#334155" strokeDasharray="5 8" />
        </g>
        <circle cx="300" cy="300" r="72" fill="url(#nucleus)" />
        <text x="300" y="317" textAnchor="middle" fill="#211400" fontSize="44" fontWeight="900">Cu</text>
        <circle cx="471" cy="248" r="16" fill="#5ee7ff" />
        <circle cx="207" cy="126" r="16" fill="#5ee7ff" />
        <circle cx="303" cy="498" r="16" fill="#a78bfa" />
        <path d="M80 510H520" stroke="#334155" />
        <text x="300" y="548" textAnchor="middle" fill="#94a3b8" fontSize="18" letterSpacing="5">PARTICLE → MOLE → MASS</text>
      </svg>
    </div>
  );
}

function TransformationCards() {
  const cards = [
    { title: "Milk → curd", note: "Microbial action changes composition, acidity and texture.", kind: "milk" },
    { title: "Sugar → vinegar", note: "Fermentation transforms organic molecules over time.", kind: "sugar" },
    { title: "Iron → rust", note: "Iron reacts slowly with oxygen and moisture.", kind: "iron" },
  ] as const;

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {cards.map((card) => (
        <article key={card.title} className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5 shadow-lg">
          <svg viewBox="0 0 280 145" className="h-36 w-full" role="img" aria-label={card.title}>
            {card.kind === "milk" && (
              <>
                <path d="M40 25h58l-6 90H46z" fill="#dff7ff" stroke="#5ee7ff" strokeWidth="3" />
                <path d="M46 72h46l-3 43H49z" fill="#7dd3fc" opacity=".72" />
                <ellipse cx="225" cy="86" rx="42" ry="31" fill="#fff3c4" stroke="#fbbf24" strokeWidth="3" />
                <path d="M203 83c16-15 34-12 48 2" fill="none" stroke="#d4a72c" strokeWidth="3" />
              </>
            )}
            {card.kind === "sugar" && (
              <>
                <circle cx="68" cy="75" r="42" fill="#eab308" stroke="#fde047" strokeWidth="3" />
                <circle cx="55" cy="61" r="8" fill="#fff7b2" />
                <circle cx="85" cy="86" r="6" fill="#fff7b2" />
                <path d="M205 34h34v18l18 17v50h-70V69l18-17z" fill="#c97912" stroke="#fb923c" strokeWidth="3" />
                <path d="M196 85h52" stroke="#fbbf24" strokeWidth="2" opacity=".8" />
              </>
            )}
            {card.kind === "iron" && (
              <>
                <rect x="39" y="52" width="77" height="52" rx="12" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="3" />
                <circle cx="61" cy="68" r="8" fill="#64748b" />
                <rect x="202" y="42" width="60" height="72" fill="#9a3412" stroke="#fb6a3d" strokeWidth="3" />
                <circle cx="222" cy="64" r="10" fill="#f97316" />
                <circle cx="245" cy="91" r="12" fill="#c2410c" />
              </>
            )}
            <path d="M125 74h45" stroke="#a78bfa" strokeWidth="8" strokeLinecap="round" />
            <path d="m160 58 20 16-20 16" fill="none" stroke="#a78bfa" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h3 className="text-lg font-black text-white">{card.title}</h3>
          <p className="mt-2 leading-7 text-slate-400">{card.note}</p>
        </article>
      ))}
    </div>
  );
}

function HistoryTimeline() {
  const items = [
    ["1000 BCE", "Harappan craft", "Metallurgy, glazed pottery, gypsum cement and faience."],
    ["600 BCE", "Acharya Kanda", "Paramānu: indivisible, eternal particles and unseen combining forces."],
    ["Classical India", "Rasayan Shastra", "Alkalies, medicines, fermentation, dyes and material transformation."],
    ["c. 800 CE", "Nagarjuna", "Rasratnakar, mercury synthesis, furnaces and metallurgy."],
    ["Medieval era", "Chakrapani", "Early soap preparation from plant alkalies and oils."],
    ["Ajanta practice", "Resin chemistry", "Durable natural coatings from plant extracts and resins."],
  ];
  return (
    <ol className="relative space-y-4 before:absolute before:bottom-6 before:left-6 before:top-6 before:w-px before:bg-gradient-to-b before:from-cyan-400 before:via-purple-400 before:to-amber-400">
      {items.map(([year, title, text], index) => (
        <li key={title} className="relative grid grid-cols-[3rem_1fr] gap-4">
          <span className="z-10 grid h-12 w-12 place-items-center rounded-xl border border-cyan-400/30 bg-slate-950 text-xs font-black text-cyan-300">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/65 p-4 shadow-md">
            <span className="text-xs font-black uppercase tracking-[0.15em] text-amber-300">{year}</span>
            <h3 className="mt-1 font-black text-white">{title}</h3>
            <p className="mt-1 leading-7 text-slate-400">{text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function MatterTree() {
  return (
    <div className="my-6 rounded-2xl border border-slate-700 bg-slate-950/65 p-5 shadow-lg">
      <div className="mx-auto max-w-sm rounded-xl border border-cyan-400/35 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 p-4 text-center">
        <b className="text-xl text-white">Matter</b><span className="block text-sm text-slate-400">has mass and occupies space</span>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-cyan-400/20 bg-slate-900/80 p-4">
          <h3 className="text-center text-lg font-black text-cyan-300">Mixtures</h3>
          <p className="text-center text-sm text-slate-400">variable composition</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <span className="rounded-lg bg-slate-800 border border-slate-700 p-3 text-center text-sm font-bold text-slate-200">Homogeneous</span>
            <span className="rounded-lg bg-slate-800 border border-slate-700 p-3 text-center text-sm font-bold text-slate-200">Heterogeneous</span>
          </div>
        </div>
        <div className="rounded-xl border border-purple-400/20 bg-slate-900/80 p-4">
          <h3 className="text-center text-lg font-black text-purple-300">Pure substances</h3>
          <p className="text-center text-sm text-slate-400">fixed composition</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <span className="rounded-lg bg-slate-800 border border-slate-700 p-3 text-center text-sm font-bold text-slate-200">Elements</span>
            <span className="rounded-lg bg-slate-800 border border-slate-700 p-3 text-center text-sm font-bold text-slate-200">Compounds</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LawsGallery() {
  const laws = [
    ["Conservation", "mass in = mass out", "12 g + 32 g → 44 g"],
    ["Definite proportions", "one compound, one mass ratio", "H:O in H₂O = 1:8"],
    ["Multiple proportions", "small whole-number ratios", "16:32 = 1:2"],
    ["Gaseous volumes", "simple volume ratios", "2:1:2"],
    ["Avogadro", "equal V, T and P", "equal molecule count"],
  ];
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {laws.map(([title,note,example],index)=>(
        <article key={title} className="flex min-h-48 flex-col rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-lg">
          <span className="text-xs font-black text-cyan-300">0{index+1}</span>
          <h3 className="mt-3 font-black text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">{note}</p>
          <strong className="mt-auto pt-5 text-amber-300">{example}</strong>
        </article>
      ))}
    </div>
  );
}

function MoleBridge() {
  return (
    <div className="grid items-center gap-4 rounded-2xl border border-slate-700 bg-slate-950/70 p-5 text-center md:grid-cols-[1fr_auto_1fr_auto_1fr] shadow-lg">
      {[
        ["1", "particle", "atom • molecule • ion"],
        ["mol", "one mole", "$6.022 \\times 10^{23}$"],
        ["g", "measurable mass", "moles × molar mass"],
      ].map(([symbol,title,note],index)=>(
        <div key={title} className="contents">
          <div className="grid place-items-center gap-2">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-cyan-200 via-cyan-400 to-purple-500 font-black text-slate-950 shadow-lg shadow-cyan-500/20">{symbol}</span>
            <b className="text-white">{title}</b>
            <MathContent className="text-sm text-slate-400">{note}</MathContent>
          </div>
          {index < 2 && <span className="hidden md:block text-2xl font-black text-purple-400">›</span>}
        </div>
      ))}
    </div>
  );
}

function LimitingReagentVisual() {
  return (
    <div className="grid gap-5 rounded-2xl border border-slate-700 bg-slate-950/70 p-5 lg:grid-cols-[1fr_auto_1fr] shadow-lg mt-6">
      <div>
        <h3 className="font-black text-cyan-300">Before reaction</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {[1,2,3,4,5].map(i=><span key={`a${i}`} className="grid h-11 w-11 place-items-center rounded-full bg-cyan-400 font-black text-slate-950 shadow-md">A</span>)}
          {[1,2,3].map(i=><span key={`b${i}`} className="grid h-11 min-w-[2.75rem] place-items-center rounded-full bg-purple-500 px-2 font-black text-white shadow-md">B₂</span>)}
        </div>
      </div>
      <div className="grid place-items-center font-black text-amber-300 text-xl px-4">A + B₂ → AB₂</div>
      <div>
        <h3 className="font-black text-amber-300">After reaction</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {[1,2,3].map(i=><span key={`p${i}`} className="grid h-11 min-w-[2.75rem] place-items-center rounded-full bg-amber-400 px-2 font-black text-slate-950 shadow-md">AB₂</span>)}
          {[1,2].map(i=><span key={`e${i}`} className="grid h-11 w-11 place-items-center rounded-full border-2 border-dashed border-cyan-400 text-cyan-300">A</span>)}
        </div>
        <p className="mt-3 text-sm text-slate-400">B₂ is consumed first; A remains in excess.</p>
      </div>
    </div>
  );
}

function ConcentrationDashboard() {
  const cards = [
    ["Mass percent", "$$\\frac{\\text{mass solute}}{\\text{mass solution}}\\times100$$", "temperature independent"],
    ["Mole fraction", "$$x_A=\\frac{n_A}{\\sum n}$$", "unitless"],
    ["Molarity", "$$M=\\frac{n}{V(\\text{L})}$$", "temperature dependent"],
    ["Molality", "$$m=\\frac{n}{m_{solvent}(\\text{kg})}$$", "temperature independent"],
  ];
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map(([title,formula,note])=>(
        <article key={title} className="rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-lg">
          <h3 className="font-black text-cyan-300">{title}</h3>
          <MathContent className="mt-4">{formula}</MathContent>
          <span className="mt-4 inline-block rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-200">{note}</span>
        </article>
      ))}
    </div>
  );
}


function ImportanceOfChemistry() {
  const items = [
    {
      title: "Health care",
      accent: "cyan",
      icon: "Rx",
      points: [
        "Cisplatin and Taxol are important anticancer medicines.",
        "AZT (azidothymidine) has been used in the treatment of AIDS.",
        "Chemistry enables the design, synthesis, testing and safe formulation of medicines."
      ]
    },
    {
      title: "Food & materials",
      accent: "amber",
      icon: "Σ",
      points: [
        "Fertilisers, pesticides and improved materials support agriculture and daily life.",
        "Polymers, alloys, ceramics, dyes and fibres are products of controlled chemical design.",
        "Quantitative chemistry helps industry control purity, yield and waste."
      ]
    },
    {
      title: "Atmosphere & environment",
      accent: "purple",
      icon: "O₃",
      points: [
        "Chlorofluorocarbons (CFCs) contribute to depletion of stratospheric ozone.",
        "Carbon dioxide, methane and nitrous oxide are greenhouse gases associated with global warming.",
        "Chemistry identifies pollutants and develops cleaner processes and safer alternatives."
      ]
    }
  ] as const;

  const accentClasses = {
    cyan: "border-cyan-400/25 bg-cyan-400/[0.045] text-cyan-300",
    amber: "border-amber-400/25 bg-amber-400/[0.045] text-amber-300",
    purple: "border-purple-400/25 bg-purple-400/[0.045] text-purple-300",
  } as const;

  return (
    <section className="mt-10">
      <div className="mb-5">
        <Eyebrow>Importance of chemistry</Eyebrow>
        <h3 className="mt-3 text-3xl font-black tracking-tight text-white">From life-saving medicines to atmospheric protection</h3>
        <p className="mt-2 max-w-4xl leading-7 text-slate-400">
          Chemistry improves health, food production, materials and environmental understanding. The same molecular knowledge that creates useful products must also be used to recognise and reduce harmful effects.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className={`rounded-2xl border p-5 shadow-lg ${accentClasses[item.accent]}`}>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-current/25 bg-slate-950/55 text-lg font-black">{item.icon}</span>
              <h4 className="text-lg font-black text-white">{item.title}</h4>
            </div>
            <ul className="mt-4 space-y-3">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3 leading-7 text-slate-300">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-current" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function PhaseTransitionMap() {
  const transitions = [
    ["Solid", "Liquid", "Melting", "Freezing"],
    ["Liquid", "Gas", "Vaporisation", "Condensation"],
    ["Solid", "Gas", "Sublimation", "Deposition"],
  ] as const;

  return (
    <section className="my-8 rounded-2xl border border-slate-700 bg-slate-950/70 p-5 shadow-xl">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <Eyebrow>Phase transitions</Eyebrow>
          <h3 className="mt-3 text-2xl font-black text-white">Energy changes particle spacing and freedom of motion</h3>
        </div>
        <span className="rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-amber-300">
          chemical identity remains unchanged
        </span>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {transitions.map(([from, to, forward, reverse]) => (
          <article key={forward} className="rounded-xl border border-slate-700 bg-slate-900/75 p-4">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
              <span className="rounded-xl bg-slate-800 p-4 font-black text-cyan-200">{from}</span>
              <div className="text-xs font-bold leading-6 text-purple-300">
                <span className="block">{forward} →</span>
                <span className="block">← {reverse}</span>
              </div>
              <span className="rounded-xl bg-slate-800 p-4 font-black text-amber-200">{to}</span>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <InfoCard title="Heating" accent="amber">Particles gain kinetic energy, move more freely and generally become farther apart.</InfoCard>
        <InfoCard title="Cooling" accent="cyan">Particles lose kinetic energy, move less freely and generally come closer together.</InfoCard>
      </div>
    </section>
  );
}

function DimensionalAnalysisPanel() {
  const examples = [
    {
      title: "Length conversion",
      prompt: "Convert 2.50 m into centimetres.",
      steps: [
        String.raw`Start with the measured quantity: $2.50\,\text{m}$.`,
        String.raw`Choose a conversion factor equal to one: $\frac{100\,\text{cm}}{1\,\text{m}}$.`,
        String.raw`$$2.50\,\text{m}\times\frac{100\,\text{cm}}{1\,\text{m}}=250\,\text{cm}$$`,
        "The metre units cancel, leaving centimetres."
      ]
    },
    {
      title: "Multi-step unit chaining",
      prompt: "Convert 5.00 km into centimetres.",
      steps: [
        String.raw`$$5.00\,\text{km}\times\frac{10^3\,\text{m}}{1\,\text{km}}\times\frac{10^2\,\text{cm}}{1\,\text{m}}$$`,
        String.raw`Cancel km and m from numerator and denominator.`,
        String.raw`$$=5.00\times10^5\,\text{cm}$$`
      ]
    },
    {
      title: "Density conversion",
      prompt: "Convert 1.20 g cm⁻³ into kg m⁻³.",
      steps: [
        String.raw`$$1.20\,\frac{\text{g}}{\text{cm}^3}\times\frac{1\,\text{kg}}{10^3\,\text{g}}\times\left(\frac{10^2\,\text{cm}}{1\,\text{m}}\right)^3$$`,
        String.raw`The cubic conversion factor must also be cubed.`,
        String.raw`$$=1.20\times10^3\,\text{kg m}^{-3}$$`
      ]
    }
  ];

  return (
    <section className="mt-10">
      <div className="mb-5">
        <Eyebrow>Dimensional analysis</Eyebrow>
        <h3 className="mt-3 text-3xl font-black text-white">Factor-label method: let units guide the calculation</h3>
        <p className="mt-2 max-w-4xl leading-7 text-slate-400">
          Multiply by conversion factors whose numerical value is one. Arrange each factor so unwanted units cancel and the required unit remains.
        </p>
      </div>
      <div className="grid gap-4 xl:grid-cols-3">
        {examples.map((example, exampleIndex) => (
          <article key={example.title} className="rounded-2xl border border-slate-700 bg-slate-900/75 p-5 shadow-lg">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Worked chain {exampleIndex + 1}</span>
            <h4 className="mt-2 text-lg font-black text-white">{example.title}</h4>
            <p className="mt-1 text-sm text-slate-400">{example.prompt}</p>
            <ol className="mt-4 space-y-3">
              {example.steps.map((step, index) => (
                <li key={step} className="grid grid-cols-[1.8rem_1fr] gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-purple-400/10 text-xs font-black text-purple-300">{index + 1}</span>
                  <MathContent>{step}</MathContent>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  );
}

function DaltonPostulates() {
  const postulates = [
    "All matter is made of very small, indivisible particles called atoms.",
    "All atoms of a given element have identical properties, including identical mass; atoms of different elements differ in mass and properties.",
    "Compounds form when atoms of different elements combine in fixed, simple whole-number ratios.",
    "Chemical reactions involve the reorganisation of atoms; atoms are neither created nor destroyed in a chemical reaction."
  ];

  return (
    <section className="mt-10 rounded-2xl border border-purple-400/25 bg-gradient-to-br from-purple-400/[0.07] via-slate-950 to-cyan-400/[0.05] p-6 shadow-xl">
      <Eyebrow>Dalton’s atomic theory</Eyebrow>
      <h3 className="mt-3 text-3xl font-black text-white">Four postulates connecting laws to particles</h3>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {postulates.map((postulate, index) => (
          <article key={postulate} className="grid grid-cols-[3rem_1fr] gap-4 rounded-xl border border-slate-700 bg-slate-900/70 p-4">
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-purple-400/25 bg-purple-400/10 text-sm font-black text-purple-200">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="leading-7 text-slate-300">{postulate}</p>
          </article>
        ))}
      </div>
      <InfoCard title="Modern qualification" accent="amber">
        Dalton’s theory was foundational, but atoms are divisible into subatomic particles, and atoms of the same element can have different masses because isotopes exist.
      </InfoCard>
    </section>
  );
}

function MassLanguagePanel() {
  return (
    <section className="mt-10">
      <div className="mb-5">
        <Eyebrow>Mass language</Eyebrow>
        <h3 className="mt-3 text-3xl font-black text-white">Atomic mass, molecular mass and formula mass</h3>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <InfoCard title="Atomic mass" accent="cyan">
          Relative mass of one atom compared with one twelfth of the mass of a carbon-12 atom. Example: O ≈ 16 u.
        </InfoCard>
        <InfoCard title="Molecular mass" accent="purple">
          Sum of atomic masses in one discrete molecule. Example: H₂O = 2(1) + 16 = 18 u.
        </InfoCard>
        <InfoCard title="Formula mass" accent="amber">
          Sum of atomic masses represented by the formula unit of an ionic solid. NaCl = 23.0 + 35.5 = 58.5 u; an ionic lattice has no discrete NaCl molecules.
        </InfoCard>
      </div>
      <div className="mt-4 rounded-2xl border border-slate-700 bg-slate-950/70 p-5">
        <MathContent>{String.raw`$$\text{Molar mass in g mol}^{-1}\text{ is numerically equal to atomic, molecular or formula mass in u.}$$`}</MathContent>
      </div>
    </section>
  );
}

function FormulaGenerationPipeline() {
  const steps = [
    ["01", "Mass data", "Use percentages directly by assuming a 100 g sample, or convert given masses."],
    ["02", "Convert to moles", "Divide each element’s mass by its atomic mass."],
    ["03", "Simplest ratio", "Divide every mole value by the smallest mole value."],
    ["04", "Whole numbers", "Multiply all ratios by the same integer if fractions such as 1.5 or 1.33 remain."],
    ["05", "Empirical formula", "Write element symbols with the simplest whole-number subscripts."],
    ["06", "Find n", "Calculate n = molar mass ÷ empirical-formula mass."],
    ["07", "Molecular formula", "Multiply every empirical subscript by n."]
  ] as const;

  return (
    <section className="mt-10">
      <div className="mb-5">
        <Eyebrow>Formula generation</Eyebrow>
        <h3 className="mt-3 text-3xl font-black text-white">Mass percentage → empirical formula → molecular formula</h3>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-7">
        {steps.map(([number, title, note]) => (
          <article key={number} className="rounded-xl border border-slate-700 bg-slate-900/75 p-4">
            <span className="text-xs font-black text-purple-300">{number}</span>
            <h4 className="mt-2 font-black text-white">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-400">{note}</p>
          </article>
        ))}
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <InfoCard title="Empirical formula" accent="cyan">The simplest whole-number ratio of atoms of different elements in a compound.</InfoCard>
        <InfoCard title="Molecular formula" accent="purple">The actual number of each type of atom in one molecule; it is an integral multiple of the empirical formula.</InfoCard>
      </div>
    </section>
  );
}

function EquationBalancingDemo() {
  const stages = [
    [String.raw`$\mathrm{C_3H_8 + O_2 \rightarrow CO_2 + H_2O}$`, "Write correct formulas; do not alter subscripts."],
    [String.raw`$\mathrm{C_3H_8 + O_2 \rightarrow 3CO_2 + H_2O}$`, "Balance carbon: 3 carbon atoms require 3 CO₂."],
    [String.raw`$\mathrm{C_3H_8 + O_2 \rightarrow 3CO_2 + 4H_2O}$`, "Balance hydrogen: 8 hydrogen atoms require 4 H₂O."],
    [String.raw`$\mathrm{C_3H_8 + 5O_2 \rightarrow 3CO_2 + 4H_2O}$`, "Count product oxygen: 6 + 4 = 10 O atoms, so use 5 O₂."],
  ] as const;

  return (
    <section className="mt-10 rounded-2xl border border-amber-400/25 bg-amber-400/[0.035] p-6 shadow-xl">
      <Eyebrow>Equation balancing</Eyebrow>
      <h3 className="mt-3 text-3xl font-black text-white">Propane combustion, balanced step by step</h3>
      <p className="mt-2 max-w-4xl leading-7 text-slate-400">
        Change coefficients only. Never change a chemical formula’s subscripts while balancing.
      </p>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {stages.map(([equation, note], index) => (
          <article key={equation} className="rounded-xl border border-slate-700 bg-slate-950/75 p-5">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-amber-300">Step {index + 1}</span>
            <MathContent className="mt-3 text-lg">{equation}</MathContent>
            <p className="mt-3 leading-7 text-slate-400">{note}</p>
          </article>
        ))}
      </div>
      <div className="mt-5 rounded-xl border border-cyan-400/25 bg-cyan-400/[0.06] p-4">
        <MathContent>{String.raw`$$\boxed{\mathrm{C_3H_8 + 5O_2 \rightarrow 3CO_2 + 4H_2O}}$$`}</MathContent>
        <p className="text-center text-sm text-slate-400">Atoms on each side: C = 3, H = 8, O = 10.</p>
      </div>
    </section>
  );
}

function TemperatureDependencePanel() {
  return (
    <section className="mt-8 grid gap-4 lg:grid-cols-2">
      <InfoCard title="Volume-based concentration" accent="purple">
        <MathContent>{String.raw`$M=\frac{\text{moles of solute}}{\text{litres of solution}}$`}</MathContent>
        <p className="mt-2">Molarity changes when temperature changes because solution volume expands or contracts.</p>
      </InfoCard>
      <InfoCard title="Mass-based concentration" accent="cyan">
        <MathContent>{String.raw`$m=\frac{\text{moles of solute}}{\text{kg of solvent}}$`}</MathContent>
        <p className="mt-2">Molality, mole fraction and mass percent remain unchanged by temperature because masses and mole counts do not change.</p>
      </InfoCard>
    </section>
  );
}


// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function ChemistryDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return ALL_QUESTIONS;
    
    return ALL_QUESTIONS.filter((q) => {
      const searchableText = [
        q.qNumber,
        q.type,
        q.question,
        q.answer,
        ...q.solution,
        ...q.keywords
      ].join(" ").toLowerCase();
      
      return searchableText.includes(query);
    });
  }, [searchQuery]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-200 font-sans selection:bg-cyan-400/30">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 [background-image:radial-gradient(circle_at_10%_10%,rgba(34,211,238,.10),transparent_28rem),radial-gradient(circle_at_90%_14%,rgba(168,85,247,.10),transparent_32rem),linear-gradient(rgba(56,189,248,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,.055)_1px,transparent_1px)] [background-size:auto,auto,48px_48px,48px_48px]" />

      {/* Hero Section */}
      <header className="relative z-10 mx-auto grid min-h-[88vh] w-full max-w-[1440px] items-center gap-10 px-4 py-16 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <Eyebrow>Class 11 • Board Chemistry</Eyebrow>
          <h1 className="mt-6 text-5xl font-black leading-[.92] tracking-[-0.04em] text-white sm:text-7xl xl:text-[7rem]">
            Some Basic<br />Concepts of <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">Chemistry</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            A full-theory visual chemistry operating system connecting matter, measurement, atomic laws, the mole and solution calculations—with every Exemplar question fully solved.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#foundations" className="rounded-xl bg-cyan-400 px-6 py-3.5 font-black text-slate-950 no-underline shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300">Begin visual chapter</a>
            <a href="#answer-key" className="rounded-xl border border-slate-600 bg-slate-900/70 px-6 py-3.5 font-black text-white no-underline transition hover:bg-slate-800 hover:border-slate-500">Search 50 Questions</a>
          </div>
          <div className="mt-12 flex max-w-2xl gap-8">
            <div><b className="text-3xl text-white">6</b><span className="block text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 mt-1">Theory Systems</span></div>
            <div><b className="text-3xl text-white">24+</b><span className="block text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 mt-1">Visual Blocks</span></div>
            <div><b className="text-3xl text-white">50</b><span className="block text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 mt-1">Exemplar Solutions</span></div>
          </div>
        </div>
        <AtomHero />
      </header>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 overflow-x-auto border-y border-slate-800 bg-slate-950/85 px-4 py-3 backdrop-blur-xl" aria-label="Chapter navigation">
        <div className="mx-auto flex w-max min-w-full max-w-[1440px] gap-2">
          {[
            ["foundations","Foundations"],["matter","Matter"],["measurement","Measurement"],["laws","Reaction laws"],["mole","Mole bridge"],["solutions","Solutions"],["answer-key","Answer Search"]
          ].map(([id,label])=>(
            <a key={id} href={`#${id}`} className="shrink-0 rounded-lg px-3 py-2 text-sm font-bold text-slate-400 no-underline transition hover:bg-slate-800 hover:text-white">{label}</a>
          ))}
        </div>
      </nav>

      {/* Section 1: Foundations */}
      <section id="foundations" className="relative z-10 mx-auto w-full max-w-[1440px] scroll-mt-20 px-4 py-20">
        <SectionHeading eyebrow="Foundations & history" title="Chemistry is a transformation science" description="Indian chemical practice connected materials, medicines, metals, dyes and everyday transformations long before modern laboratory chemistry." />
        <TransformationCards />
        <ImportanceOfChemistry />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <HistoryTimeline />
          <div className="grid content-start gap-6">
            <InfoCard title="Board definition" accent="amber">Chemistry is the science of the composition, structure, properties and transformations of matter.</InfoCard>
            <InfoCard title="Paramānu framework" accent="purple">Acharya Kanda described eternal, spherical and imperceptible units that combine through unseen forces—an early atomistic picture.</InfoCard>
            <InfoCard title="Pioneers" accent="cyan">Nagarjuna systematised mercury chemistry and metallurgy; Chakrapani described early soap synthesis from oils and plant alkalies.</InfoCard>
          </div>
        </div>
        <SectionProblems sectionKey="foundations" />
      </section>

      <hr className="border-slate-800 max-w-[1440px] mx-auto" />

      {/* Section 2: Matter */}
      <section id="matter" className="relative z-10 mx-auto w-full max-w-[1440px] scroll-mt-20 px-4 py-20">
        <SectionHeading eyebrow="States & classification" title="See matter at particle scale" description="Bulk properties emerge from spacing, arrangement, motion and the chemical identity of particles." />
        
        <div className="grid gap-4 lg:grid-cols-3 mb-8">
          <ParticleGrid stateType="solid" />
          <ParticleGrid stateType="liquid" />
          <ParticleGrid stateType="gas" />
        </div>

        <DataTable caption="Particle-level comparison of physical states" columns={["Property","Solid","Liquid","Gas"]} rows={[
          ["Arrangement","Very close and orderly","Close but disordered","Very far apart"],
          ["Movement","Vibration around fixed positions","Particles slide past one another","Rapid unrestricted motion"],
          ["Shape","Definite","Takes container shape","Fills container"],
          ["Volume","Definite","Definite","Not definite"],
          ["Compressibility","Negligible","Small","High"],
        ]} />
        <PhaseTransitionMap />
        <MatterTree />
        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <InfoCard title="Glucose case study" accent="cyan">
            <MathContent>{String.raw`$\mathrm{C_6H_{12}O_6}$ is a compound: its elements occur in a fixed atomic ratio and cannot be separated physically.`}</MathContent>
          </InfoCard>
          <InfoCard title="Emergent properties" accent="amber">Hydrogen burns and oxygen supports combustion, yet water is a liquid with entirely new properties.</InfoCard>
        </div>
        <SectionProblems sectionKey="matter" />
      </section>

      <hr className="border-slate-800 max-w-[1440px] mx-auto" />

      {/* Section 3: Measurement */}
      <section id="measurement" className="relative z-10 mx-auto w-full max-w-[1440px] scroll-mt-20 px-4 py-20">
        <SectionHeading eyebrow="Laboratory measurement" title="Every number needs a trustworthy unit" description="Reliable chemistry depends on standards, appropriate apparatus, significant figures, accuracy and precision." />
        
        <DataTable caption="Seven SI base quantities" columns={["Quantity","Symbol","SI unit","Unit symbol"]} rows={[
          ["Length","l","metre","m"],["Mass","m","kilogram","kg"],["Time","t","second","s"],["Electric current","I","ampere","A"],
          ["Thermodynamic temperature","T","kelvin","K"],["Amount of substance","n","mole","mol"],["Luminous intensity","I_v","candela","cd"],
        ]} />
        
        <div className="grid gap-6 xl:grid-cols-2 mt-8">
          <article className="rounded-2xl border border-slate-700 bg-slate-950/70 p-6 shadow-xl">
            <h3 className="font-black text-cyan-300 uppercase tracking-widest text-sm mb-4">Analytical balance — working map</h3>
            <AnalyticalBalance />
          </article>
          <VolumeEquivalence />
        </div>

        <div className="grid gap-4 md:grid-cols-3 mt-8">
          {["$$K = {^{\\circ}\\text{C}} + 273.15$$", "$$^{\\circ}\\text{F} = \\frac{9}{5}(^{\\circ}\\text{C}) + 32$$", "$$\\rho = \\frac{m}{V}$$"].map((formula, idx)=>(
            <div key={idx} className="rounded-2xl border border-purple-400/20 bg-purple-400/[0.05] p-5 text-center text-lg text-purple-100 flex items-center justify-center">
              <MathContent>{formula}</MathContent>
            </div>
          ))}
        </div>

        <DimensionalAnalysisPanel />

        <div className="mt-12">
          <h3 className="text-2xl font-black text-white mb-6">Accuracy vs. Precision Targets</h3>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <article className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 text-center shadow-lg">
              <AccuracyDartboard type="accurate-precise" />
              <b className="mt-4 block text-sm text-cyan-300 uppercase tracking-wider">Accurate & Precise</b>
            </article>
            <article className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 text-center shadow-lg">
              <AccuracyDartboard type="precise-not-accurate" />
              <b className="mt-4 block text-sm text-amber-300 uppercase tracking-wider">Precise, Not Accurate</b>
            </article>
            <article className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 text-center shadow-lg">
              <AccuracyDartboard type="neither" />
              <b className="mt-4 block text-sm text-slate-400 uppercase tracking-wider">Neither</b>
            </article>
          </div>
        </div>

        <DataTable caption="Core significant-figure rules" columns={["Rule","Example","Count"]} rows={[
          ["All non-zero digits count","285","3"],["Leading zeros do not count","0.0052","2"],["Captive zeros count","2.005","4"],["Trailing zeros after a decimal count","0.200","3"],["Exact counted values","20 students","Infinite / exact"],
        ]} />

        <SectionProblems sectionKey="measurement" />
      </section>

      <hr className="border-slate-800 max-w-[1440px] mx-auto" />

      {/* Section 4: Laws */}
      <section id="laws" className="relative z-10 mx-auto w-full max-w-[1440px] scroll-mt-20 px-4 py-20">
        <SectionHeading eyebrow="The five reaction laws" title="Patterns that forced chemistry to become quantitative" description="Mass and gas-volume data revealed that atoms combine according to fixed numerical relationships." />
        <LawsGallery />
        <DataTable caption="Chemical-combination laws compared" columns={["Law","Scientist","Core statement","Representative relation"]} rows={[
          ["Conservation of mass","Lavoisier, 1789","Mass is neither created nor destroyed","mass in = mass out"],
          ["Definite proportions","Proust","A compound has a constant elemental mass ratio","H:O in H₂O = 1:8"],
          ["Multiple proportions","Dalton, 1803","Alternative compounds give small whole-number mass ratios","16:32 = 1:2"],
          ["Gaseous volumes","Gay-Lussac","Gas volumes combine in simple ratios at the same T and P","2:1:2"],
          ["Avogadro law","Avogadro","Equal gas volumes at the same T and P contain equal molecule counts","$V \\propto n$"],
        ]} />
        <DaltonPostulates />
        <InfoCard title="Dalton → Cannizzaro" accent="amber">Dalton resisted the diatomic interpretation of elemental gases. Cannizzaro’s 1860 Karlsruhe clarification helped distinguish atoms from molecules and establish consistent atomic masses.</InfoCard>
        <SectionProblems sectionKey="laws" />
      </section>

      <hr className="border-slate-800 max-w-[1440px] mx-auto" />

      {/* Section 5: Mole */}
      <section id="mole" className="relative z-10 mx-auto w-full max-w-[1440px] scroll-mt-20 px-4 py-20">
        <SectionHeading eyebrow="Mole bridge & stoichiometry" title="Translate particles into laboratory quantities" description="The mole connects microscopic counts to molar mass, gas volume, reaction ratios and product yield." />
        <MoleBridge />
        
        <div className="my-8 grid gap-4 md:grid-cols-3">
          {["$$1\\,\\text{mol}=6.022\\times10^{23}\\,\\text{entities}$$","$$1\\,\\text{u}=1.66\\times10^{-24}\\,\\text{g}$$","$$n=\\frac{m}{M}$$"].map((formula, idx)=>(
            <div key={idx} className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.045] p-5 text-center text-cyan-100 flex items-center justify-center">
              <MathContent>{formula}</MathContent>
            </div>
          ))}
        </div>

        <MassLanguagePanel />
        <FormulaGenerationPipeline />

        <DataTable caption="Carbon isotope weighted-average model" columns={["Isotope","Approx. abundance","Isotopic mass","Role"]} rows={[
          ["¹²C","98.892%","12.00000 u","dominant standard isotope"],["¹³C","1.108%","13.00335 u","raises the weighted average"],["¹⁴C","trace","14.00317 u","negligible natural contribution"],
        ]} />

        <EquationBalancingDemo />

        <div className="my-8 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 p-6 text-center shadow-lg">
          <div className="bg-slate-950 rounded-xl p-4 inline-block">
            <MathContent className="text-2xl font-black text-white">
              {String.raw`$$\mathrm{CH_4+2O_2\rightarrow CO_2+2H_2O}$$`}
            </MathContent>
          </div>
        </div>

        <DataTable caption="Methane combustion at four scales" columns={["Scale","CH₄","O₂","CO₂","H₂O"]} rows={[
          ["Molecules","1","2","1","2"],["Moles","1 mol","2 mol","1 mol","2 mol"],["Gas volumes (same T,P)","1 volume","2 volumes","1 volume","2 volumes"],["Mass","16 g","64 g","44 g","36 g"],
        ]} />
        
        <LimitingReagentVisual />
        <SectionProblems sectionKey="mole" />
      </section>

      <hr className="border-slate-800 max-w-[1440px] mx-auto" />

      {/* Section 6: Solutions */}
      <section id="solutions" className="relative z-10 mx-auto w-full max-w-[1440px] scroll-mt-20 px-4 py-20">
        <SectionHeading eyebrow="Solutions concentration dashboard" title="Choose the denominator that matches the experiment" description="Mass percent, mole fraction, molarity and molality describe composition differently—and only molarity changes with temperature." />
        <ConcentrationDashboard />
        <TemperatureDependencePanel />
        <DataTable caption="Concentration terms compared" columns={["Term","Definition","Unit","Temperature effect"]} rows={[
          ["Mass percent","mass solute ÷ mass solution × 100","%","Independent"],["Mole fraction","moles component ÷ total moles","Unitless","Independent"],["Molarity","moles solute ÷ litres solution","mol L⁻¹","Dependent"],["Molality","moles solute ÷ kg solvent","mol kg⁻¹","Independent"],
        ]} />
        <div className="mt-6">
          <InfoCard title="Dilution equation" accent="purple">
            <MathContent>{"$$M_1V_1=M_2V_2$$"}</MathContent>
            <p className="mt-2 text-slate-300">The moles of solute remain constant while solvent changes the total volume.</p>
          </InfoCard>
        </div>
        <SectionProblems sectionKey="solutions" />
      </section>

      {/* Section 7: Search Dashboard */}
      <section id="answer-key" className="relative z-20 border-t-4 border-cyan-400/50 bg-slate-900 px-4 py-24 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="mx-auto w-full max-w-[1440px]">
          <SectionHeading 
            eyebrow="Complete Searchable Database" 
            title="Search all 50 Solutions" 
            description="Find exact NCERT Exemplar solutions and custom concept checks instantly. Type keywords, concepts, or question numbers." 
          />
          
          <div className="sticky top-20 z-30 mb-8 rounded-2xl border border-cyan-400/40 bg-slate-950/80 p-4 backdrop-blur-xl shadow-2xl">
            <label htmlFor="search" className="sr-only">Search questions</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input 
                id="search"
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Try typing 'limiting reagent', 'significant figures', 'Q43', or 'molarity'..."
                className="w-full rounded-xl border border-slate-700 bg-slate-900 py-4 pl-12 pr-4 text-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="mt-3 flex items-center justify-between text-sm font-bold text-slate-400 px-2">
              <span>Showing {filteredQuestions.length} of {ALL_QUESTIONS.length} questions</span>
            </div>
          </div>

          {filteredQuestions.length === 0 ? (
            <div className="py-20 text-center text-slate-500 border-2 border-dashed border-slate-700 rounded-2xl">
              <p className="text-2xl font-bold">No questions found for &ldquo;{searchQuery}&rdquo;</p>
              <p className="mt-2">Try adjusting your keywords.</p>
            </div>
          ) : (
            <div className="grid gap-6 xl:grid-cols-2">
              {filteredQuestions.map((problem) => (
                <ExemplarProblem key={problem.id} problem={problem} />
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950 px-4 py-12 text-center text-slate-500">
        <p className="font-bold text-slate-400 tracking-widest uppercase text-sm">Synergic Bond • Class 11 Chemistry</p>
        <p className="mt-2">Complete visual theory + 45 worked NCERT Exemplar problems + 5 Concept Checks</p>
      </footer>
    </main>
  );
}

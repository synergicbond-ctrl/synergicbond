"use client";

import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { ConceptCard, ImportantNote, LearningObjectives, SummaryStrip } from "../_components/AtomicLearning";

const T1_HEADERS = ["Element", "Z", "1s", "2s 2p", "3s 3p 3d", "4s 4p 4d 4f", "5s 5p 5d 5f", "6s 6p 6d 7s"];

const T1_ROWS: string[][] = [
  ["H", "1", "1", "", "", "", "", ""],
  ["He", "2", "2", "", "", "", "", ""],
  ["Li", "3", "2", "1", "", "", "", ""],
  ["Be", "4", "2", "2", "", "", "", ""],
  ["B", "5", "2", "2 1", "", "", "", ""],
  ["C", "6", "2", "2 2", "", "", "", ""],
  ["N", "7", "2", "2 3", "", "", "", ""],
  ["O", "8", "2", "2 4", "", "", "", ""],
  ["F", "9", "2", "2 5", "", "", "", ""],
  ["Ne", "10", "2", "2 6", "", "", "", ""],
  ["Na", "11", "2", "2 6", "1", "", "", ""],
  ["Mg", "12", "2", "2 6", "2", "", "", ""],
  ["Al", "13", "2", "2 6", "2 1", "", "", ""],
  ["Si", "14", "2", "2 6", "2 2", "", "", ""],
  ["P", "15", "2", "2 6", "2 3", "", "", ""],
  ["S", "16", "2", "2 6", "2 4", "", "", ""],
  ["Cl", "17", "2", "2 6", "2 5", "", "", ""],
  ["Ar", "18", "2", "2 6", "2 6", "", "", ""],
  ["K", "19", "2", "2 6", "2 6", "1", "", ""],
  ["Ca", "20", "2", "2 6", "2 6", "2", "", ""],
  ["Sc", "21", "2", "2 6", "2 6 1", "2", "", ""],
  ["Ti", "22", "2", "2 6", "2 6 2", "2", "", ""],
  ["V", "23", "2", "2 6", "2 6 3", "2", "", ""],
  ["Cr*", "24", "2", "2 6", "2 6 5", "1", "", ""],
  ["Mn", "25", "2", "2 6", "2 6 5", "2", "", ""],
  ["Fe", "26", "2", "2 6", "2 6 6", "2", "", ""],
  ["Co", "27", "2", "2 6", "2 6 7", "2", "", ""],
  ["Ni", "28", "2", "2 6", "2 6 8", "2", "", ""],
  ["Cu*", "29", "2", "2 6", "2 6 10", "1", "", ""],
  ["Zn", "30", "2", "2 6", "2 6 10", "2", "", ""],
  ["Ga", "31", "2", "2 6", "2 6 10", "2 1", "", ""],
  ["Ge", "32", "2", "2 6", "2 6 10", "2 2", "", ""],
  ["As", "33", "2", "2 6", "2 6 10", "2 3", "", ""],
  ["Se", "34", "2", "2 6", "2 6 10", "2 4", "", ""],
  ["Br", "35", "2", "2 6", "2 6 10", "2 5", "", ""],
  ["Kr", "36", "2", "2 6", "2 6 10", "2 6", "", ""],
  ["Rb", "37", "2", "2 6", "2 6 10", "2 6", "1", ""],
  ["Sr", "38", "2", "2 6", "2 6 10", "2 6", "2", ""],
  ["Y", "39", "2", "2 6", "2 6 10", "2 6 1", "2", ""],
  ["Zr", "40", "2", "2 6", "2 6 10", "2 6 2", "2", ""],
  ["Nb*", "41", "2", "2 6", "2 6 10", "2 6 4", "1", ""],
  ["Mo*", "42", "2", "2 6", "2 6 10", "2 6 5", "1", ""],
  ["Tc", "43", "2", "2 6", "2 6 10", "2 6 5", "2", ""],
  ["Ru*", "44", "2", "2 6", "2 6 10", "2 6 7", "1", ""],
  ["Rh*", "45", "2", "2 6", "2 6 10", "2 6 8", "1", ""],
  ["Pd*", "46", "2", "2 6", "2 6 10", "2 6 10", "", ""],
  ["Ag*", "47", "2", "2 6", "2 6 10", "2 6 10", "1", ""],
  ["Cd", "48", "2", "2 6", "2 6 10", "2 6 10", "2", ""],
  ["In", "49", "2", "2 6", "2 6 10", "2 6 10", "2 1", ""],
  ["Sn", "50", "2", "2 6", "2 6 10", "2 6 10", "2 2", ""],
  ["Sb", "51", "2", "2 6", "2 6 10", "2 6 10", "2 3", ""],
  ["Te", "52", "2", "2 6", "2 6 10", "2 6 10", "2 4", ""],
  ["I", "53", "2", "2 6", "2 6 10", "2 6 10", "2 5", ""],
  ["Xe", "54", "2", "2 6", "2 6 10", "2 6 10", "2 6", ""],
];

const T2_ROWS: string[][] = [
  ["Cs", "55", "2", "2 6", "2 6 10", "2 6 10", "2 6", "1", ""],
  ["Ba", "56", "2", "2 6", "2 6 10", "2 6 10", "2 6", "2", ""],
  ["La*", "57", "2", "2 6", "2 6 10", "2 6 10", "2 6 1", "2", ""],
  ["Ce*", "58", "2", "2 6", "2 6 10", "2 6 10 2", "2 6", "2", ""],
  ["Pr", "59", "2", "2 6", "2 6 10", "2 6 10 3", "2 6", "2", ""],
  ["Nd", "60", "2", "2 6", "2 6 10", "2 6 10 4", "2 6", "2", ""],
  ["Pm", "61", "2", "2 6", "2 6 10", "2 6 10 5", "2 6", "2", ""],
  ["Sm", "62", "2", "2 6", "2 6 10", "2 6 10 6", "2 6", "2", ""],
  ["Eu", "63", "2", "2 6", "2 6 10", "2 6 10 7", "2 6", "2", ""],
  ["Gd*", "64", "2", "2 6", "2 6 10", "2 6 10 7", "2 6 1", "2", ""],
  ["Tb", "65", "2", "2 6", "2 6 10", "2 6 10 9", "2 6", "2", ""],
  ["Dy", "66", "2", "2 6", "2 6 10", "2 6 10 10", "2 6", "2", ""],
  ["Ho", "67", "2", "2 6", "2 6 10", "2 6 10 11", "2 6", "2", ""],
  ["Er", "68", "2", "2 6", "2 6 10", "2 6 10 12", "2 6", "2", ""],
  ["Tm", "69", "2", "2 6", "2 6 10", "2 6 10 13", "2 6", "2", ""],
  ["Yb", "70", "2", "2 6", "2 6 10", "2 6 10 14", "2 6", "2", ""],
  ["Lu", "71", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 1", "2", ""],
  ["Hf", "72", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 2", "2", ""],
  ["Ta", "73", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 3", "2", ""],
  ["W", "74", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 4", "2", ""],
  ["Re", "75", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 5", "2", ""],
  ["Os", "76", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 6", "2", ""],
  ["Ir", "77", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 7", "2", ""],
  ["Pt*", "78", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 9", "1", ""],
  ["Au*", "79", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10", "1", ""],
  ["Hg", "80", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10", "2", ""],
  ["Tl", "81", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10", "2 1", ""],
  ["Pb", "82", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10", "2 2", ""],
  ["Bi", "83", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10", "2 3", ""],
  ["Po", "84", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10", "2 4", ""],
  ["At", "85", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10", "2 5", ""],
  ["Rn", "86", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10", "2 6", ""],
  ["Fr", "87", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10", "2 6", "1"],
  ["Ra", "88", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10", "2 6", "2"],
  ["Ac", "89", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10", "2 6 1", "2"],
  ["Th", "90", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10", "2 6 2", "2"],
  ["Pa", "91", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 2", "2 6 1", "2"],
  ["U", "92", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 3", "2 6 1", "2"],
  ["Np", "93", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 4", "2 6 1", "2"],
  ["Pu", "94", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 6", "2 6", "2"],
  ["Am", "95", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 7", "2 6", "2"],
  ["Cm", "96", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 7", "2 6 1", "2"],
  ["Bk", "97", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 8", "2 6 1", "2"],
  ["Cf", "98", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 10", "2 6", "2"],
  ["Es", "99", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 11", "2 6", "2"],
  ["Fm", "100", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 12", "2 6", "2"],
  ["Md", "101", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 13", "2 6", "2"],
  ["No", "102", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 14", "2 6", "2"],
  ["Lr", "103", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 14", "2 6 1", "2"],
  ["Rf", "104", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 10 [UNCLEAR]", "2 6 2", "2"],
  ["Db", "105", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 11 [UNCLEAR]", "2 6 3", "2"],
  ["Sg", "106", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 12 [UNCLEAR]", "2 6 4", "2"],
  ["Bh", "107", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 13 [UNCLEAR]", "2 6 5", "2"],
  ["Hs", "108", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 14", "2 6 6", "2"],
  ["Mt", "109", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 14", "2 6 7", "2"],
  ["Ds", "110", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 14", "2 6 8", "2"],
  ["Rg**", "111", "2", "2 6", "2 6 10", "2 6 10 14", "2 6 10 14", "2 6 10", "1"],
];

export default function Part31() {
  return (
    <AtomicPartShell part={31} title="Transition Metals and the Full Configuration Table" pages="97-99">
      <LearningObjectives items={["relate shell capacity to the allowed subshells", "identify transition metals from atom or ion configurations", "read the full configuration reference table, including exceptions"]} />
      <SourcePage page={97}>
        <ConceptCard title="A configuration reference, read with structure">
          <p>Read across a row as the occupancy of successive subshell groups; an asterisk flags an exceptional configuration. The table remains a reference, while the rules behind it are kept close by.</p>
        </ConceptCard>
        <NoteBlock title="Maximum number of e⁻ in a shell">
          <FormulaLine math="N_{max}=\sum_{l=0}^{l=n-1}2(2l+1)" />
          <p>3. Difference of energy level</p>
          <DiagramBox title="Subshell energies versus atomic number">
            <p>
              Principal quantum number (1–7) against atomic number (0–100): curves for 1s up to 7p cross as Z grows, showing
              how subshell order changes with atomic number.
            </p>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="Transition Metal">
          <p>
            The d block elements or their ions which have incompletely filled (n−1)d orbitals are called transition metals.
          </p>
          <DataTable
            headers={["Sc 21", "Ti 22", "V 23", "Cr 24", "Mn 25", "Fe 26", "Co 27", "Ni 28"]}
            rows={[[
              <MathText key="sc" math="3d^{1}4s^{2}" />,
              <MathText key="ti" math="3d^{2}4s^{2}" />,
              <MathText key="v" math="3d^{3}4s^{2}" />,
              <MathText key="cr" math="3d^{5}4s^{1}" />,
              <MathText key="mn" math="3d^{5}4s^{2}" />,
              <MathText key="fe" math="3d^{6}4s^{2}" />,
              <MathText key="co" math="3d^{7}4s^{2}" />,
              <MathText key="ni" math="3d^{8}4s^{2}" />,
            ]]}
          />
          <FormulaLine math="Cu\ (29)=3d^{10}4s^{1}\qquad Zn\ (30)=3d^{10}4s^{2}" />
          <FormulaLine math="Cu^{2+}=3d^{9}\qquad Zn^{2+}=3d^{10}" />
          <DiagramBox title="Penultimate shells">
            <p>
              Concentric shells around the nucleus with the second-outermost ring labelled Penultimate Shell and the one inside
              it labelled Pre or anti Penultimate Shell.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={98}>
        <NoteBlock title="Electronic configurations H (1) – Xe (54)">
          <DataTable headers={T1_HEADERS} rows={T1_ROWS} />
          <p>Starred elements mark exceptional configurations.</p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={99}>
        <NoteBlock title="Electronic configurations Cs (55) – Rg (111)">
          <DataTable headers={[...T1_HEADERS.slice(0, 7), "6s 6p 6d", "7s"].slice(0, 9)} rows={T2_ROWS} />
          <p>
            Starred elements mark exceptional configurations. The 5f entries for Rf–Bh could not be verified and are marked
            [UNCLEAR].
          </p>
        </NoteBlock>
      </SourcePage>

      <ImportantNote title="Scope of the table">The asterisk is a prompt to check the configuration rather than apply a simple filling pattern mechanically. The four marked <MathText math="5f" /> cells below remain <strong>[UNCLEAR]</strong>.</ImportantNote>
      <SummaryStrip items={["A shell with principal quantum number n contains the stated sum of subshell capacities.", "A transition metal has an incompletely filled (n−1)d subshell in its atom or ion.", "Use the long tables as a configuration reference; preserve the starred exceptions."]} />

      <AuditComment pages="97-99" unclear={4} note="four 5f cells in the Rf-Bh rows remain [UNCLEAR]" />
    </AtomicPartShell>
  );
}

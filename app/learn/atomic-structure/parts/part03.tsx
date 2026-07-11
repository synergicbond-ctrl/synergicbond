"use client";

import { AtomicPartShell, AuditComment, BulletList, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part03() {
  return (
    <AtomicPartShell part={3} title="Discovery of Proton" pages="7-9">
      <SourcePage page={7}>
        <NoteBlock title="Classical electron-radius relations">
          <p>
            Useful classical-model formulas include{" "}
            <MathText math="W=\frac{3e^2}{5r_o}" />, <MathText math="W=\frac{e^2}{r_o}" />, and{" "}
            <MathText math="r_o=\frac{e^2}{m_oc^2}\approx3\times10^{-13}\ \mathrm{cm}" />.
          </p>
          <p>These relations are classical-model expressions for electrostatic self-energy and radius.</p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={8}>
        <NoteBlock title="Discovery of Proton">
          <h3 className="text-lg font-black text-fuchsia-300">Anode ray experiment</h3>
          <DiagramBox title="Anode ray experiment">
            <svg viewBox="0 0 780 250" className="h-auto w-full">
              <rect x="120" y="80" width="540" height="72" rx="36" fill="none" stroke="#e5e7eb" strokeWidth="3" />
              <path d="M120 80 Q75 116 120 152" stroke="#f87171" strokeWidth="8" fill="none" />
              <line x1="100" y1="116" x2="55" y2="116" stroke="#e5e7eb" strokeWidth="3" />
              <line x1="662" y1="116" x2="720" y2="116" stroke="#e5e7eb" strokeWidth="3" />
              <line x1="130" y1="90" x2="130" y2="142" stroke="#e5e7eb" strokeWidth="3" strokeDasharray="7 5" />
              <line x1="680" y1="93" x2="680" y2="140" stroke="#e5e7eb" strokeWidth="3" />
              <path d="M260 105 H200 M260 130 H200" stroke="#e5e7eb" strokeWidth="3" markerEnd="url(#leftArrow)" />
              <text x="230" y="100" fill="#a3e635" fontSize="22">⊕</text>
              <text x="260" y="100" fill="#a3e635" fontSize="22">⊕</text>
              <text x="230" y="137" fill="#a3e635" fontSize="22">⊕</text>
              <text x="260" y="137" fill="#a3e635" fontSize="22">⊕</text>
              <text x="80" y="70" fill="#fff" fontSize="24">ZnS</text>
              <text x="60" y="108" fill="#fff" fontSize="24">-</text>
              <text x="715" y="103" fill="#fff" fontSize="24">+</text>
              <path d="M65 152 V215 H720 V116" fill="none" stroke="#e5e7eb" strokeWidth="3" />
              <text x="360" y="240" fill="#fff" fontSize="26">V</text>
              <defs>
                <marker id="leftArrow" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
                  <path d="M9,0 L9,6 L0,3 z" fill="#e5e7eb" />
                </marker>
              </defs>
            </svg>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={9}>
        <NoteBlock title="Anode rays and proton">
          <p>Goldstein observed positive (canal) rays. The hydrogen nucleus, H<sup>+</sup>, is the proton.</p>
          <p>Rutherford established that the proton is a constituent of atomic nuclei through artificial transmutation experiments.</p>
          <h3 className="font-black text-fuchsia-300">Properties-</h3>
          <BulletList
            items={[
              "They travel in straight line but do not come out from the surface of anode.",
              "They are stream of positively charge particle.",
              "The particle of anode ray are much heavier than particle of cathode ray.",
              <>
                Their <MathText math="\frac{e}{m}" /> depend on nature of gas.
              </>,
            ]}
          />
          <div className="space-y-1">
            <p>H → H<sup>+</sup> + e<sup>-</sup></p>
            <p>He → He<sup>+</sup> + e<sup>-</sup></p>
            <p>O<sub>2</sub> → O<sub>2</sub><sup>+</sup> + e<sup>-</sup></p>
          </div>
          <p>Positive rays or canal rays.</p>
          <p>H<sup>+</sup> = proton</p>
          <FormulaLine math="m_p=1.67\times10^{-27}\ \mathrm{kg}" />
          <FormulaLine math="\mathrm{charge}=1.6\times10^{-19}\ \mathrm{C}=1\ \mathrm{unit}\ (\mathrm{ref})" />
          <FormulaLine math="\frac{e}{m}=9.58\times10^7\ \mathrm{C/kg}" />
        </NoteBlock>
      </SourcePage>
      <AuditComment pages="7-9" unclear={0} note="printed insert copyright-limited" />
    </AtomicPartShell>
  );
}

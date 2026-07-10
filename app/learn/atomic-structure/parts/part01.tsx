"use client";

import { AtomicPartShell, AuditComment, BulletList, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part01() {
  return (
    <AtomicPartShell part={1} title="Dalton Theory and Cathode Rays" pages="1-3">
      <SourcePage page={1}>
        <NoteBlock title="Atomic Structure">
          <h3 className="text-xl font-black text-amber-300">Dalton&apos;s Atomic Theory</h3>
          <ol className="list-decimal space-y-3 pl-5">
            <li>Atoms are the smallest particles of any substance which are indestructible.</li>
            <li>Atom can never be created or destroyed; only the rearrangement of atoms occur in reaction.</li>
            <li>All the atom be hard and dense.</li>
            <li>
              All the atoms of a substance is identical in all respects but the atoms of different substances are
              different.
            </li>
            <li>Compounds is formed when the atoms of different elements combine in a fixed ratio by mass.</li>
          </ol>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={2}>
        <NoteBlock title="Discovery of electron - Cathode ray">
          <p className="text-emerald-300">Cathode Ray Tube or Discharge tube experiment</p>
          <DiagramBox title="Cathode ray tube or discharge tube experiment">
            <svg viewBox="0 0 760 250" className="h-auto w-full">
              <rect x="95" y="70" width="560" height="70" rx="35" fill="none" stroke="#e5e7eb" strokeWidth="3" />
              <path d="M655 70 Q710 105 655 140" fill="none" stroke="#a3e635" strokeWidth="5" />
              <line x1="60" y1="105" x2="95" y2="105" stroke="#e5e7eb" strokeWidth="3" />
              <line x1="665" y1="105" x2="720" y2="105" stroke="#e5e7eb" strokeWidth="3" />
              <line x1="75" y1="65" x2="75" y2="145" stroke="#e5e7eb" strokeWidth="3" />
              <line x1="680" y1="80" x2="680" y2="130" stroke="#e5e7eb" strokeWidth="3" />
              <path d="M210 115 H330 M360 95 H490" stroke="#e5e7eb" strokeWidth="3" markerEnd="url(#arrow)" />
              <text x="250" y="105" fill="#fff" fontSize="24">e</text>
              <text x="420" y="85" fill="#fff" fontSize="24">e</text>
              <text x="35" y="95" fill="#fff" fontSize="24">-</text>
              <text x="700" y="90" fill="#fff" fontSize="24">+</text>
              <text x="710" y="45" fill="#fff" fontSize="24">ZnS</text>
              <path d="M705 50 L675 83" stroke="#fff" strokeWidth="3" markerEnd="url(#arrow)" />
              <path d="M70 145 V205 H720 V105" fill="none" stroke="#e5e7eb" strokeWidth="3" />
              <text x="310" y="235" fill="#fff" fontSize="26">V</text>
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L9,3 z" fill="#e5e7eb" />
                </marker>
              </defs>
            </svg>
          </DiagramBox>
          <p>Gases are poor/bad conductor of electricity.</p>
          <p>
            Their conductance may be <span className="text-emerald-300">increased</span> by decreasing the pressure and
            increasing potential difference between electrode/plate.
          </p>
          <p>Potential applied depends:</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Distance between plate</li>
            <li>Nature of metal plate</li>
            <li>Nature of gas</li>
            <li>Pressure</li>
          </ol>
          <div className="space-y-1">
            <p>H → H<sup>+</sup> + e<sup>-</sup></p>
            <p>He → He<sup>+</sup> + e<sup>-</sup></p>
            <p>O → O<sup>+</sup> + e<sup>-</sup></p>
          </div>
          <p className="font-semibold text-sky-300">Properties of cathode rays -</p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={3}>
        <NoteBlock title="Properties of cathode rays">
          <BulletList
            items={[
              "The properties of cathode rays are independent of the nature of the gas.",
              <>
                They travel in straight line <MathText math="\perp" /> to surface of the cathode.
              </>,
              "They possess momentum and K.E. by virtue of which they can cause a mechanical motion in small paddle wheel placed in their path of travelling.",
              "They can produce ionisation in gases.",
              "They can affect photographic plate.",
              "They can produce fluorescence.",
              "They can produce x-rays on striking matter. Generally they are allowed to impinge on a metallic target called anticathode and x-rays are emitted.",
            ]}
          />
        </NoteBlock>
        <NoteBlock title="J. J. Thomson specific charge">
          <p>
            J. J. Thomson calculated <MathText math="\frac{e}{m}" /> (specific charge) for cathode rays. It is found that{" "}
            <MathText math="\frac{e}{m}" /> ratio is constant for all the combinations of gas and electrode.
          </p>
          <p>
            He concluded that it is possible only when cathode rays are made up of only one kind of particle and that
            particle must be present in all atoms. He gave the name electron to these particle.
          </p>
          <FormulaLine math="\frac{e}{m}=1.758\times 10^{11}\ \mathrm{C/kg}" />
        </NoteBlock>
      </SourcePage>
      <AuditComment pages="1-3" unclear={0} />
    </AtomicPartShell>
  );
}

import type { ReactNode } from "react";

type VisualProps = {
  chapterId: string;
  title: string;
};

// These hues carry meaning inside the authored chemistry drawings.
const C = {
  cyan: "#37c8f0",
  gold: "#e7b842",
  violet: "#a970ff",
  green: "#54dc8b",
  coral: "#f2775f",
  ink: "#091012",
};

function Atoms({ points, bonds = true }: { points: [number, number][]; bonds?: boolean }) {
  return (
    <>
      {bonds && points.slice(1).map(([x, y], index) => {
        const [x1, y1] = points[index];
        return <line key={`${x}-${y}`} x1={x1} y1={y1} x2={x} y2={y} stroke={index % 2 ? C.gold : C.cyan} strokeWidth="2.5" />;
      })}
      {points.map(([cx, cy], index) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="9" fill={C.ink} stroke={[C.cyan, C.gold, C.violet, C.green][index % 4]} strokeWidth="2" />
          <circle cx={cx} cy={cy} r="2.5" fill={[C.cyan, C.gold, C.violet, C.green][index % 4]} />
        </g>
      ))}
    </>
  );
}

/**
 * Small, authored chemistry visual for a chapter card. There is deliberately
 * no shared "spectrum" chart: every chapter selects a diagram tied to its
 * actual scientific topic, while the card chrome remains consistent.
 */
export default function ChapterCardVisual({ chapterId, title }: VisualProps) {
  const id = chapterId.toLowerCase();
  let drawing: ReactNode;

  if (id.includes("atomic")) {
    drawing = <><ellipse cx="80" cy="43" rx="42" ry="17" fill="none" stroke={C.cyan} strokeWidth="2" /><ellipse cx="80" cy="43" rx="42" ry="17" fill="none" stroke={C.violet} strokeWidth="2" transform="rotate(60 80 43)" /><circle cx="80" cy="43" r="8" fill={C.gold} /><circle cx="119" cy="52" r="3.5" fill={C.green} /><circle cx="52" cy="23" r="3.5" fill={C.coral} /></>;
  } else if (id.includes("mole") || id.includes("stoichiometry")) {
    drawing = <><text x="29" y="50" fill={C.cyan} fontSize="24" fontWeight="700">2H₂</text><path d="M88 43h25m-7-7 7 7-7 7" stroke={C.gold} strokeWidth="2.5" fill="none" /><text x="121" y="50" fill={C.violet} fontSize="24" fontWeight="700">O₂</text><path d="M57 65h47" stroke={C.green} strokeWidth="2" /><text x="71" y="81" fill={C.gold} fontSize="16">2H₂O</text></>;
  } else if (id.includes("redox")) {
    drawing = <><text x="25" y="39" fill={C.coral} fontSize="18" fontWeight="700">Ox</text><path d="M65 34h31m-8-8 8 8-8 8" stroke={C.gold} strokeWidth="2.5" fill="none" /><text x="103" y="39" fill={C.green} fontSize="18" fontWeight="700">Red</text><path d="M120 62H67m8-8-8 8 8 8" stroke={C.cyan} strokeWidth="2.5" fill="none" /><circle cx="132" cy="62" r="9" fill="none" stroke={C.violet} strokeWidth="2" /></>;
  } else if (id.includes("equilibrium")) {
    drawing = <><text x="26" y="53" fill={C.cyan} fontSize="22" fontWeight="700">A + B</text><path d="M93 39h34m-8-7 8 7-8 7M127 60H93m8-7-8 7 8 7" stroke={C.gold} strokeWidth="2" fill="none" /><text x="136" y="53" fill={C.violet} fontSize="22" fontWeight="700">C</text><circle cx="79" cy="73" r="3" fill={C.green} /><circle cx="89" cy="73" r="3" fill={C.coral} /><circle cx="99" cy="73" r="3" fill={C.green} /></>;
  } else if (id.includes("thermo")) {
    drawing = <><rect x="29" y="23" width="34" height="44" rx="3" fill="none" stroke={C.coral} strokeWidth="2" /><path d="M46 29v31m-8-11 8 11 8-11" stroke={C.gold} strokeWidth="2" fill="none" /><path d="M76 31c11 0 18 8 18 18s8 18 20 18" stroke={C.cyan} strokeWidth="3" fill="none" /><text x="105" y="40" fill={C.violet} fontSize="13">ΔG</text></>;
  } else if (id.includes("electro")) {
    drawing = <><rect x="35" y="22" width="30" height="48" rx="4" fill="none" stroke={C.cyan} strokeWidth="2" /><rect x="111" y="22" width="30" height="48" rx="4" fill="none" stroke={C.violet} strokeWidth="2" /><path d="M50 15v22m76-22v22M65 31c14-11 32-11 46 0" stroke={C.gold} strokeWidth="2.5" fill="none" /><path d="M65 58h46" stroke={C.green} strokeWidth="4" /><text x="44" y="84" fill={C.coral} fontSize="11">Zn</text><text x="119" y="84" fill={C.cyan} fontSize="11">Cu</text></>;
  } else if (id.includes("kinetics")) {
    drawing = <><path d="M26 75H145M26 75V18" stroke="#5b6870" strokeWidth="1.5" /><path d="M34 69C52 68 57 61 67 54S84 25 101 25s15 28 38 35" fill="none" stroke={C.coral} strokeWidth="3" /><path d="M34 68C57 66 86 52 137 37" fill="none" stroke={C.cyan} strokeWidth="2" strokeDasharray="4 4" /><path d="M102 25v50" stroke={C.gold} strokeWidth="1.5" /><text x="106" y="22" fill={C.gold} fontSize="11">Eₐ</text></>;
  } else if (id.includes("solution") || id.includes("concentration")) {
    drawing = <><path d="M40 22v42c0 10 20 10 20 0V22" fill="none" stroke={C.cyan} strokeWidth="2" /><path d="M40 48h20" stroke={C.cyan} strokeWidth="8" opacity=".55" /><path d="M104 22v42c0 10 20 10 20 0V22" fill="none" stroke={C.violet} strokeWidth="2" /><path d="M104 53h20" stroke={C.violet} strokeWidth="8" opacity=".55" /><circle cx="50" cy="43" r="2" fill={C.gold} /><circle cx="57" cy="53" r="2" fill={C.gold} /><circle cx="113" cy="48" r="2" fill={C.green} /><circle cx="119" cy="58" r="2" fill={C.green} /></>;
  } else if (id.includes("state") || id.includes("gas")) {
    drawing = <><rect x="34" y="20" width="94" height="58" rx="3" fill="none" stroke={C.cyan} strokeWidth="2" /><circle cx="53" cy="36" r="5" fill={C.gold} /><circle cx="87" cy="31" r="5" fill={C.violet} /><circle cx="112" cy="48" r="5" fill={C.green} /><circle cx="62" cy="64" r="5" fill={C.coral} /><circle cx="97" cy="65" r="5" fill={C.cyan} /><path d="M39 13h84" stroke={C.gold} strokeWidth="2" /><path d="M116 8l7 5-7 5" fill="none" stroke={C.gold} strokeWidth="2" /></>;
  } else if (id.includes("solid")) {
    drawing = <><Atoms points={[[48, 28], [80, 28], [112, 28], [48, 60], [80, 60], [112, 60]]} /><path d="M48 28l32 32 32-32M48 60l32-32 32 32" stroke={C.gold} strokeWidth="1.5" opacity=".9" /></>;
  } else if (id.includes("hydrocarbon")) {
    drawing = <><path d="M27 58l25-28 27 27 26-27 28 27" fill="none" stroke={C.gold} strokeWidth="3" /><path d="M77 57l5-5" stroke={C.cyan} strokeWidth="6" /><circle cx="52" cy="30" r="5" fill={C.cyan} /><circle cx="105" cy="30" r="5" fill={C.violet} /><text x="38" y="82" fill={C.green} fontSize="12">σ</text><text x="116" y="82" fill={C.coral} fontSize="12">π</text></>;
  } else if (id.includes("halo")) {
    drawing = <><text x="27" y="48" fill={C.cyan} fontSize="24" fontWeight="700">C–X</text><path d="M91 43h30m-8-8 8 8-8 8" stroke={C.gold} strokeWidth="2.5" fill="none" /><text x="128" y="48" fill={C.green} fontSize="20" fontWeight="700">Nu</text><path d="M35 68c18-8 36-8 54 0" stroke={C.violet} strokeWidth="2" fill="none" /></>;
  } else if (id.includes("isomer")) {
    drawing = <><path d="M43 25l21 18-21 18m74-36-21 18 21 18" fill="none" stroke={C.cyan} strokeWidth="3" /><path d="M72 20v48" stroke={C.gold} strokeWidth="1.5" strokeDasharray="3 4" /><circle cx="47" cy="43" r="8" fill="none" stroke={C.violet} strokeWidth="2" /><circle cx="113" cy="43" r="8" fill="none" stroke={C.green} strokeWidth="2" /><text x="62" y="83" fill={C.coral} fontSize="11">mirror plane</text></>;
  } else if (id.includes("aldehyde") || id.includes("ketone")) {
    drawing = <><text x="31" y="52" fill={C.cyan} fontSize="26" fontWeight="700">R–C</text><path d="M101 35v26m5-26v26" stroke={C.coral} strokeWidth="2" /><text x="110" y="52" fill={C.coral} fontSize="26" fontWeight="700">O</text><path d="M67 65h55" stroke={C.gold} strokeWidth="2" /><text x="75" y="82" fill={C.violet} fontSize="12">nucleophilic addition</text></>;
  } else if (id.includes("alcohol") || id.includes("phenol") || id.includes("ether")) {
    drawing = <><path d="M31 58l25-28 28 28" fill="none" stroke={C.gold} strokeWidth="3" /><text x="93" y="49" fill={C.cyan} fontSize="27" fontWeight="700">OH</text><circle cx="58" cy="30" r="5" fill={C.violet} /><path d="M75 62c14 0 23-7 29-20" stroke={C.green} strokeWidth="2" strokeDasharray="4 3" fill="none" /></>;
  } else if (id.includes("amine")) {
    drawing = <><text x="68" y="52" fill={C.cyan} fontSize="31" fontWeight="700">N</text><path d="M79 32l-24-13m24 13 24-13m-24 22v28" stroke={C.gold} strokeWidth="2.5" /><circle cx="53" cy="18" r="4" fill={C.violet} /><circle cx="105" cy="18" r="4" fill={C.green} /><circle cx="79" cy="73" r="4" fill={C.coral} /></>;
  } else if (id.includes("biomolecule")) {
    drawing = <><path d="M52 18c25 12 25 39 0 52m56-52c-25 12-25 39 0 52" fill="none" stroke={C.cyan} strokeWidth="3" /><path d="M55 28h50M55 42h50M55 56h50" stroke={C.violet} strokeWidth="2" /><circle cx="52" cy="18" r="4" fill={C.gold} /><circle cx="108" cy="70" r="4" fill={C.green} /></>;
  } else if (id.includes("polymer")) {
    drawing = <><path d="M29 43h25m10 0h25m10 0h25" stroke={C.cyan} strokeWidth="3" /><rect x="53" y="30" width="13" height="26" fill="none" stroke={C.gold} strokeWidth="2" /><rect x="98" y="30" width="13" height="26" fill="none" stroke={C.violet} strokeWidth="2" /><text x="25" y="78" fill={C.green} fontSize="13">[ –CH₂–CH₂– ]ₙ</text></>;
  } else if (id.includes("periodic")) {
    drawing = <>{Array.from({ length: 18 }, (_, index) => <rect key={index} x={32 + (index % 6) * 17} y={21 + Math.floor(index / 6) * 17} width="12" height="12" rx="1" fill={[C.cyan, C.gold, C.violet, C.green, C.coral][index % 5]} opacity=".88" />)}<path d="M29 75h105" stroke={C.gold} strokeWidth="2" /></>;
  } else if (id.includes("bonding")) {
    drawing = <><Atoms points={[[80, 43], [45, 24], [115, 24], [45, 62], [115, 62]]} /><path d="M45 24l70 38M115 24L45 62" stroke={C.violet} strokeWidth="1.5" strokeDasharray="3 3" /><text x="67" y="82" fill={C.gold} fontSize="12">sp³</text></>;
  } else if (id.includes("coordination")) {
    drawing = <><circle cx="80" cy="43" r="12" fill={C.ink} stroke={C.cyan} strokeWidth="2.5" /><text x="72" y="48" fill={C.cyan} fontSize="13">M</text><Atoms points={[[80, 14], [113, 28], [113, 58], [80, 72], [47, 58], [47, 28]]} /><path d="M80 14l33 14v30L80 72 47 58V28z" fill="none" stroke={C.gold} strokeWidth="1.7" /></>;
  } else if (id.includes("p-block")) {
    drawing = <><text x="33" y="49" fill={C.cyan} fontSize="23">B</text><text x="70" y="49" fill={C.gold} fontSize="23">C</text><text x="107" y="49" fill={C.violet} fontSize="23">N</text><path d="M27 61h109" stroke={C.green} strokeWidth="2" /><path d="M43 30h73" stroke={C.coral} strokeWidth="2" strokeDasharray="5 4" /></>;
  } else if (id.includes("d-and-f") || id.includes("f-block")) {
    drawing = <>{Array.from({ length: 7 }, (_, index) => <path key={index} d={`M${31 + index * 16} 63Q${39 + index * 16} ${18 + (index % 2) * 13} ${47 + index * 16} 63`} fill="none" stroke={[C.cyan, C.gold, C.violet, C.green, C.coral][index % 5]} strokeWidth="2.4" />)}<text x="61" y="82" fill={C.gold} fontSize="11">d / f orbitals</text></>;
  } else if (id.includes("hydrogen")) {
    drawing = <><circle cx="59" cy="43" r="18" fill="none" stroke={C.cyan} strokeWidth="2.5" /><circle cx="101" cy="43" r="18" fill="none" stroke={C.violet} strokeWidth="2.5" /><path d="M77 43h6" stroke={C.gold} strokeWidth="5" /><text x="53" y="49" fill={C.cyan} fontSize="15">H</text><text x="95" y="49" fill={C.violet} fontSize="15">H</text></>;
  } else if (id.includes("s-block")) {
    drawing = <><rect x="38" y="19" width="23" height="52" fill="none" stroke={C.gold} strokeWidth="2" /><rect x="99" y="19" width="23" height="52" fill="none" stroke={C.cyan} strokeWidth="2" /><text x="44" y="51" fill={C.gold} fontSize="18">1</text><text x="106" y="51" fill={C.cyan} fontSize="18">2</text><path d="M66 45h28" stroke={C.green} strokeWidth="2" strokeDasharray="4 3" /></>;
  } else if (id.includes("metallurgy")) {
    drawing = <><path d="M38 69h83l-12-36H50z" fill="none" stroke={C.gold} strokeWidth="2.5" /><path d="M62 61c0-12 14-12 14-24 9 10 15 13 15 24" fill="none" stroke={C.coral} strokeWidth="3" /><circle cx="93" cy="27" r="6" fill={C.cyan} /><text x="76" y="83" fill={C.green} fontSize="11">ore → metal</text></>;
  } else if (id.includes("qualitative")) {
    drawing = <><path d="M53 20v43c0 12 23 12 23 0V20" fill="none" stroke={C.cyan} strokeWidth="2.5" /><path d="M53 50h23" stroke={C.violet} strokeWidth="10" opacity=".65" /><path d="M107 24v43" stroke={C.gold} strokeWidth="2.5" /><circle cx="118" cy="52" r="12" fill="none" stroke={C.green} strokeWidth="2" /><circle cx="118" cy="52" r="4" fill={C.coral} /></>;
  } else if (id.includes("environment")) {
    drawing = <><path d="M79 72C40 53 40 23 79 20c39 3 39 33 0 52Z" fill="none" stroke={C.green} strokeWidth="3" /><path d="M79 67V28M79 49 57 36m22 20 22-13" stroke={C.cyan} strokeWidth="2" /><circle cx="47" cy="23" r="5" fill={C.gold} /><circle cx="114" cy="71" r="5" fill={C.violet} /></>;
  } else {
    drawing = <><path d="M31 65 57 27l25 38 25-38 23 38" fill="none" stroke={C.cyan} strokeWidth="3" /><circle cx="57" cy="27" r="5" fill={C.gold} /><circle cx="82" cy="65" r="5" fill={C.violet} /><circle cx="107" cy="27" r="5" fill={C.green} /><text x="29" y="84" fill={C.coral} fontSize="11">{title.slice(0, 18)}</text></>;
  }

  return (
    <figure aria-hidden className="mb-4 overflow-hidden pb-3" style={{ borderBottom: "1px solid var(--border)" }}>
      <svg viewBox="0 0 160 92" className="h-[88px] w-full" role="presentation">
        <rect x="1" y="1" width="158" height="90" rx="6" fill={C.ink} stroke="rgba(246,239,223,0.07)" strokeWidth="1" />
        {drawing}
      </svg>
    </figure>
  );
}

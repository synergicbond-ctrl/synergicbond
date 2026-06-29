"use client";

import { useEffect, useRef, useState } from "react";

// Renders a SMILES string to an SVG structure via OpenChemLib (lazy-loaded,
// pure-JS, kept out of the main bundle). Bond/label colours are remapped from
// black to a light tone so structures read on the dark theme.
export default function StructureView({
  smiles,
  width = 200,
  height = 130,
  label,
}: {
  smiles?: string;
  width?: number;
  height?: number;
  label?: string;
}) {
  const [svg, setSvg] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const reqId = useRef(0);

  useEffect(() => {
    if (!smiles) return;
    const id = ++reqId.current;
    setSvg(null);
    setFailed(false);
    (async () => {
      try {
        const OCL = (await import("openchemlib/minimal")).default;
        const mol = OCL.Molecule.fromSmiles(smiles);
        let out = mol.toSVG(width, height, undefined, {
          autoCrop: true,
          autoCropMargin: 6,
          suppressChiralText: true,
        });
        // Recolour the carbon skeleton (black) for the dark UI; heteroatom
        // colours (O red, N blue…) are left intact.
        out = out
          .replace(/rgb\(0,\s*0,\s*0\)/gi, "#cbd5e1")
          .replace(/(stroke|fill)="#000000"/gi, '$1="#cbd5e1"')
          .replace(/(stroke|fill)="black"/gi, '$1="#cbd5e1"');
        if (id === reqId.current) setSvg(out);
      } catch {
        if (id === reqId.current) setFailed(true);
      }
    })();
  }, [smiles, width, height]);

  if (!smiles) return null;

  return (
    <div className="flex flex-col items-center">
      <div
        className="flex items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] p-1"
        style={{ minWidth: width / 1.4, minHeight: height / 1.6 }}
      >
        {svg ? (
          <span dangerouslySetInnerHTML={{ __html: svg }} />
        ) : failed ? (
          <span className="px-2 py-3 font-mono text-[11px] text-white/50">{smiles}</span>
        ) : (
          <span className="block h-[80px] w-[140px] animate-pulse rounded bg-white/5" />
        )}
      </div>
      {label && <span className="mt-1 text-[10px] text-white/40">{label}</span>}
    </div>
  );
}

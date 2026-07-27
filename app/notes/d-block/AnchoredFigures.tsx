import Image from "next/image";
import { FIGURES } from "./visualManifest";

export function AnchoredFigures({ anchor }: { anchor: string }) {
  const figures = FIGURES.filter((figure) => figure.anchor === anchor);

  if (!figures.length) return null;

  return (
    <div className={figures.length === 2 ? "my-7 grid gap-5 lg:grid-cols-2" : "my-7"}>
      {figures.map((figure) => (
        <figure key={figure.src} className="overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#050b14] shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
          <Image
            src={figure.src}
            alt={figure.alt}
            width={figure.width}
            height={figure.height}
            sizes={figures.length === 2 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 900px, 100vw"}
            className="h-auto w-full bg-black/30 object-contain"
          />
          <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-slate-300">{figure.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

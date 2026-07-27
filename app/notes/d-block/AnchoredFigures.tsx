import Image from "next/image";
import { FIGURES } from "./visualManifest";

export function AnchoredFigures({ anchor }: { anchor: string }) {
  const figures = FIGURES.filter((figure) => figure.anchor === anchor);

  if (!figures.length) return null;

  return (
    <div className={figures.length === 2 ? "my-7 grid gap-5 lg:grid-cols-2" : "my-7"}>
      {figures.map((figure) => (
        <figure key={figure.src} className="overflow-hidden rounded-lg border border-[#17364a] bg-[#02060b] shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
          <Image
            src={figure.src}
            alt={figure.alt}
            width={figure.width}
            height={figure.height}
            sizes={figures.length === 2 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 900px, 100vw"}
            className="h-auto w-full bg-black/30 object-contain"
          />
          <figcaption className="border-t border-[#17364a] bg-[#071321] px-4 py-3 text-sm leading-6 text-[#a8b3c1]">{figure.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

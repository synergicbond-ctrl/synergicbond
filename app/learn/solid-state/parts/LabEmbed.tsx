import { LabFrame } from "./LabFrame";

/**
 * An animated Crystal Lab view embedded in a chapter page. The lab is served by the gated /learn/solid-state/files route,
 * so it follows the same access rules as the chapter. `hash` is the lab's deep link, for example "fcc/view" or
 * "fcc/layers/scp" (structure/mode). If the frame cannot load, LabFrame explains why instead of showing an empty box.
 */
export function LabEmbed({ hash, title, caption }: { hash: string; title: string; caption: string }) {
  const base = "/learn/solid-state/files/crystal-lab.html";
  return (
    <figure className="space-y-2">
      <LabFrame src={`${base}#${hash}/embed`} title={title} fullHref={`${base}#${hash}`} />
      <figcaption className="text-sm text-[var(--text-muted)]">
        {caption}{" "}
        <a href={`${base}#${hash}`} className="underline">
          Open full size
        </a>
      </figcaption>
    </figure>
  );
}

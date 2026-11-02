/**
 * An animated Crystal Lab view embedded in a chapter page. The lab is served by the gated
 * /learn/solid-state/files route, so it follows the same access rules as the chapter.
 * `hash` is the lab's deep link, for example "fcc/view" or "fcc/layers/scp" (structure/mode).
 */
export function LabEmbed({ hash, title, caption }: { hash: string; title: string; caption: string }) {
  return (
    <figure className="space-y-2">
      <iframe
        src={`/learn/solid-state/files/crystal-lab.html#${hash}/embed`}
        title={title}
        loading="lazy"
        className="h-[460px] w-full rounded-xl border border-[var(--border)] bg-black md:h-[520px]"
      />
      <figcaption className="text-sm text-[var(--text-muted)]">
        {caption}{" "}
        <a href={`/learn/solid-state/files/crystal-lab.html#${hash}`} className="underline">
          Open full size
        </a>
      </figcaption>
    </figure>
  );
}

import { Block } from "@/components/chapter-ui/blocks";

/**
 * Notes on building fcc from layers, with the animated Crystal Lab embedded.
 * The animation is served by the gated /learn/solid-state/files route, so it follows the chapter's access rules.
 */
export function FccLayersNotes() {
  return (
    <Block kind="concept" title="FCC can be built in two ways">
      <p className="leading-7">
        The face-centred cubic (ccp) cell is a stack of close-packed 2D layers. The layers can be taken in two directions:
      </p>
      <ul className="my-3 list-disc space-y-2 pl-5 leading-7">
        <li>
          <strong>Square close packing (SCP) 2D layers</strong>, <strong className="text-[var(--accent)]">3 layers needed</strong>.
          Coordination number = 12 <strong className="text-[var(--accent)]">(4 + 4 + 4)</strong>: 4 atoms in the same layer, 4 above and 4 below.
          These are the <em>3 layers of SCP</em> that make up the cube.
        </li>
        <li>
          <strong>Hexagonal close packing (HCP) 2D layers</strong>, <strong className="text-[var(--accent)]">4 layers needed</strong>.
          Coordination number = 12 <strong className="text-[var(--accent)]">(3 + 6 + 3)</strong>: 3 below, 6 in the same layer and 3 above.
          These are the <em>four layers of HCP</em>, stacked A B C A along the body diagonal.
        </li>
      </ul>
      <iframe
        src="/learn/solid-state/files/crystal-lab.html#fcc/layers/scp/embed"
        title="Animation: the fcc cell built from 3 square layers or 4 hexagonal layers"
        loading="lazy"
        className="h-[700px] w-full rounded-xl border border-[var(--border)] bg-black"
      />
      <p className="mt-2 text-sm text-[var(--text-muted)]">
        Switch between the two ways inside the animation.{" "}
        <a href="/learn/solid-state/files/crystal-lab.html#fcc/layers/scp" className="underline">
          Open it full size
        </a>
        .
      </p>
    </Block>
  );
}

import {
  BulletList,
  Callout,
  ChapterIndex,
  ChapterRail,
  DataTable,
  Eyebrow,
  Formula,
  InlineFormula,
  NumberedList,
  Prose,
  SectionHeading,
  SubHeading,
  Term,
  type TermLexicon,
} from "@/components/design";

export const metadata = {
  title: "Design System | Synergic Bond",
  description:
    "The Synergic Bond content design system: colour roles, type scale, and every content primitive.",
};

const LEXICON: TermLexicon = [
  { match: ["dipole moment"], kind: "energy" },
  { match: ["resonance", "hybridisation"], kind: "orbital" },
  { match: ["electronegativity", "bond angle"], kind: "bond" },
  { match: ["lone pair", "octet rule"], kind: "rule" },
];

const SECTIONS = [
  "Colour roles",
  "Type scale",
  "Headings and structure",
  "Prose and terminology",
  "Callouts",
  "Lists",
  "Tables",
  "Mathematics",
];

const CHROME_SWATCHES = [
  { token: "--background", note: "page" },
  { token: "--surface", note: "the one card colour" },
  { token: "--border", note: "hairline" },
  { token: "--border-strong", note: "hairline, emphasised" },
  { token: "--accent", note: "interaction + brand only" },
];

const CONTENT_SWATCHES = [
  { token: "--chem-bond", note: "bonding, structure, geometry" },
  { token: "--chem-energy", note: "energetics, thermodynamics" },
  { token: "--chem-orbital", note: "orbitals, resonance, quantum" },
  { token: "--chem-trap", note: "exam traps, exceptions" },
  { token: "--chem-rule", note: "rules, verified results" },
];

function Swatch({ token, note }: { token: string; note: string }) {
  return (
    <div className="flex items-center gap-4 py-3" style={{ borderTop: "1px solid var(--border)" }}>
      <span
        aria-hidden
        className="h-9 w-9 shrink-0"
        style={{
          background: `var(${token})`,
          border: "1px solid var(--border-strong)",
          borderRadius: "var(--radius-sm)",
        }}
      />
      <span className="font-data text-[12px] text-[var(--foreground)]">{token}</span>
      <span className="text-[13px] text-[var(--text-muted)]">{note}</span>
    </div>
  );
}

export default function StyleGuidePage() {
  return (
    <main className="px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
      <article className="mx-auto max-w-[1400px]">
        <header className="pb-14 pt-5 sm:pt-10" style={{ borderBottom: "1px solid var(--border)" }}>
          <Eyebrow>Synergic Bond · Design system</Eyebrow>
          <h1 className="font-display mt-5 max-w-[18ch] text-[44px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--foreground)] sm:text-[64px] lg:text-[72px]">
            Bonding as structure
          </h1>
          <p className="mt-6 max-w-[var(--measure)] text-[18px] leading-[1.7] text-[var(--text-body)] sm:text-[20px]">
            Every mark in this system is a hairline that connects rather than
            divides. Section numbers bond into their titles along a rule; long
            chapters run down a valence gutter whose nodes mark each section.
            There is no blur, glow or gradient fill anywhere — depth is a
            hairline job.
          </p>
          <Callout label="Rule" tone="rule">
            Colour obeys a hard split. Chrome is near-black plus one gold accent,
            used for interaction only. The chemistry scale carries meaning and
            appears in content only. A chemistry hue never styles navigation; the
            gold accent never encodes chemical meaning.
          </Callout>
        </header>

        <ChapterIndex items={SECTIONS} />

        <div className="grid gap-12 py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <ChapterRail items={SECTIONS} />

          <div className="min-w-0 pb-24">
            <SectionHeading id="section-1" eyebrow="Section 01">
              Colour roles
            </SectionHeading>
            <Prose text="Chrome carries the interface. It is deliberately almost colourless so that the only saturated thing on a page is the chemistry itself." />
            <div className="mt-6 max-w-[var(--measure)]">
              {CHROME_SWATCHES.map((s) => (
                <Swatch key={s.token} {...s} />
              ))}
            </div>
            <SubHeading>Content scale</SubHeading>
            <Prose text="These five hues are desaturated on purpose — they sit inside long-form reading and must not vibrate against a near-black page." />
            <div className="mt-6 max-w-[var(--measure)]">
              {CONTENT_SWATCHES.map((s) => (
                <Swatch key={s.token} {...s} />
              ))}
            </div>

            <SectionHeading id="section-2" eyebrow="Section 02">
              Type scale
            </SectionHeading>
            <Prose text="Three families, three jobs, so hierarchy reads without relying on size alone." />
            <div className="mt-6 max-w-[var(--measure)]">
              <div className="py-4" style={{ borderTop: "1px solid var(--border)" }}>
                <Eyebrow>Display · Source Serif 4</Eyebrow>
                <p className="font-display mt-2 text-[34px] font-semibold leading-tight text-[var(--foreground)]">
                  Periodicity in properties
                </p>
              </div>
              <div className="py-4" style={{ borderTop: "1px solid var(--border)" }}>
                <Eyebrow>Body · Inter Tight</Eyebrow>
                <p className="mt-2 text-[17px] leading-[1.8] text-[var(--text-body)]">
                  Comfortable for long study sessions at 17–19px with generous
                  leading and a capped measure.
                </p>
              </div>
              <div className="py-4" style={{ borderTop: "1px solid var(--border)" }}>
                <Eyebrow>Data · JetBrains Mono</Eyebrow>
                <p className="font-data mt-2 text-[15px] text-[var(--text-body)]">
                  1.85 D · 104.5° · 3.44 · 0.96 Å
                </p>
              </div>
            </div>

            <SectionHeading id="section-3" eyebrow="Section 03">
              Headings and structure
            </SectionHeading>
            <Prose text="The bond rule above is the primary recurring signature: a node, a mono label, and a hairline running out across the column, with the title bonded beneath it." />
            <SubHeading>Subheadings bond with a short rule</SubHeading>
            <Prose text="Subheadings use a shorter accent rule so nesting is legible at a glance without indentation." />

            <SectionHeading id="section-4" eyebrow="Section 04">
              Prose and terminology
            </SectionHeading>
            <Prose
              lexicon={LEXICON}
              text="The dipole moment of a molecule depends on electronegativity differences, on geometry, and on whether a lone pair reinforces or opposes the bond vectors. Where resonance delocalises charge, the observed value departs from the simple prediction."
            />
            <Prose>
              Terms can also be marked explicitly — <Term kind="trap">this is a trap</Term>{" "}
              — and inline maths sits on the baseline: <InlineFormula expression="\\mu = q \\times d" />.
            </Prose>

            <SectionHeading id="section-5" eyebrow="Section 05">
              Callouts
            </SectionHeading>
            <Callout
              label="Key idea"
              text="Tone is inferred from the label, so authored content needs no extra markup."
              lexicon={LEXICON}
            />
            <Callout
              label="Common mistake"
              text="Assuming a symmetric molecule is always non-polar ignores the lone pair contribution."
              lexicon={LEXICON}
            />
            <Callout
              label="Rule"
              text="The octet rule predicts stability for second-period elements only."
              lexicon={LEXICON}
            />

            <SectionHeading id="section-6" eyebrow="Section 06">
              Lists
            </SectionHeading>
            <BulletList
              lexicon={LEXICON}
              items={[
                "Bond angle contracts as lone pair repulsion increases.",
                "Electronegativity rises across a period and falls down a group.",
                "Hybridisation determines the underlying geometry before repulsion adjusts it.",
              ]}
            />
            <NumberedList
              lexicon={LEXICON}
              items={[
                "Draw the Lewis structure and count electron domains.",
                "Assign the parent geometry from the domain count.",
                "Adjust for each lone pair, then resolve the dipole moment as a vector sum.",
              ]}
            />

            <SectionHeading id="section-7" eyebrow="Section 07">
              Tables
            </SectionHeading>
            <DataTable
              lexicon={LEXICON}
              caption="Tables scroll inside their own frame so the page body never scrolls sideways."
              headers={["Molecule", "Geometry", "Bond angle", "Dipole moment"]}
              rows={[
                ["H₂O", "Bent", "104.5°", "1.85 D"],
                ["NH₃", "Trigonal pyramidal", "107.0°", "1.47 D"],
                ["NF₃", "Trigonal pyramidal", "102.3°", "0.24 D"],
                ["CO₂", "Linear", "180.0°", "0 D"],
              ]}
            />

            <SectionHeading id="section-8" eyebrow="Section 08">
              Mathematics
            </SectionHeading>
            <Prose text="Maths renders in KaTeX's own metric-matched faces. The UI mono is deliberately kept off .katex so glyph metrics, italic variables and operator spacing stay correct." />
            <Formula
              expression="\\mu_R = \\sqrt{\\mu_1^2+\\mu_2^2+2\\mu_1\\mu_2\\cos\\theta}"
              label="Vector addition of bond moments"
            />
          </div>
        </div>
      </article>
    </main>
  );
}

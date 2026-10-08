import { AppShell } from "@/components/AppShell";
import { isomerismTabs } from "../parts";
import { ISOMERISM_FILES_BASE, ISOMERISM_RESOURCE_GROUPS } from "./registry";

export const metadata = {
  title: "Isomerism resources | Synergic Bond",
  description: "Isomerism assignment, answer key, solutions, notes and interactive HTML tools.",
};

export default function IsomerismResourcesPage() {
  const tabs = isomerismTabs().map((t) => ({ ...t, active: t.href === "/learn/isomerism/resources" }));
  return (
    <AppShell
      discipline="JEE Organic Chemistry"
      chapterTitle="Isomerism"
      chapterSlug="isomerism"
      description="Assignment, answer key, detailed solutions, notes and interactive animations for the Isomerism chapter."
      free={false}
      tabs={tabs}
    >
      <div className="mx-auto max-w-3xl space-y-10">
        {ISOMERISM_RESOURCE_GROUPS.map((group) => (
          <section key={group.label}>
            <h2 className="font-display text-xl text-[var(--foreground)]">{group.label}</h2>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{group.blurb}</p>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li key={item.file}>
                  <a
                    href={item.href ?? `${ISOMERISM_FILES_BASE}/${item.file}`}
                    target={item.href ? undefined : "_blank"}
                    rel={item.href ? undefined : "noopener"}
                    className="block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:border-[var(--accent)]"
                  >
                    <span className="text-xs uppercase tracking-wide text-[var(--accent)]">{item.kind === "pdf" ? "PDF" : "Interactive"}</span>
                    <span className="mt-1 block text-base text-[var(--foreground)]">{item.title}</span>
                    <span className="mt-1 block text-sm text-[var(--text-body)]">{item.note}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </AppShell>
  );
}

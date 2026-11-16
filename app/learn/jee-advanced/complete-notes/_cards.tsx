export type NotesCard = { href: string; title: string; blurb: string };

export function NotesCardGrid({ cards }: { cards: NotesCard[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cards.map((card, i) => (
        <a
          key={card.href}
          href={card.href}
          className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] sm:p-6"
        >
          <span className="font-mono text-sm font-bold text-[var(--accent)]">{String(i + 1).padStart(2, "0")}</span>
          <h2 className="mt-2 text-lg font-semibold text-[var(--foreground)]">{card.title}</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{card.blurb}</p>
        </a>
      ))}
    </div>
  );
}

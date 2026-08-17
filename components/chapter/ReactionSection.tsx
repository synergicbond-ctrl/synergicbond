type Reaction = {
  name: string;
  equation: string;
  conditions?: string;
  description?: string;
};

type ReactionSectionProps = {
  reactions: Reaction[];
};

export default function ReactionSection({
  reactions,
}: ReactionSectionProps) {
  return (
    <section className="mb-8">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">
          Important Reactions
        </h2>

        <p className="text-[var(--text-muted)]">
          Frequently tested reactions from this chapter.
        </p>
      </div>

      {reactions.length === 0 ? (
        <div className="rounded-lg border border-dashed border-[var(--border)] p-6 text-[var(--text-muted)]">
          No reactions available.
        </div>
      ) : (
        <div className="space-y-5">
          {reactions.map((reaction) => (
            <div
              key={reaction.name}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <h3 className="text-lg font-semibold">
                {reaction.name}
              </h3>

              <div className="mt-3 rounded-lg bg-[var(--surface-2)] p-3 font-mono text-[var(--foreground)]">
                {reaction.equation}
              </div>

              {reaction.conditions && (
                <p className="mt-3 text-sm text-[var(--accent)]">
                  Conditions: {reaction.conditions}
                </p>
              )}

              {reaction.description && (
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  {reaction.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

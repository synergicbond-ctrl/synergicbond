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

        <p className="text-gray-400">
          Frequently tested reactions from this chapter.
        </p>
      </div>

      {reactions.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-700 p-6 text-gray-500">
          No reactions available.
        </div>
      ) : (
        <div className="space-y-5">
          {reactions.map((reaction) => (
            <div
              key={reaction.name}
              className="rounded-xl border border-gray-800 bg-gray-900 p-5"
            >
              <h3 className="text-lg font-semibold">
                {reaction.name}
              </h3>

              <div className="mt-3 rounded-lg bg-black p-3 font-mono text-cyan-400">
                {reaction.equation}
              </div>

              {reaction.conditions && (
                <p className="mt-3 text-sm text-yellow-400">
                  Conditions: {reaction.conditions}
                </p>
              )}

              {reaction.description && (
                <p className="mt-2 text-sm text-gray-400">
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
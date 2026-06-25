type NotesSectionProps = {
  notes: string[];
};

export default function NotesSection({
  notes,
}: NotesSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-2xl font-bold">
        High Yield Notes
      </h2>

      {notes.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-700 p-6 text-gray-500">
          No notes available.
        </div>
      ) : (
        <ul className="space-y-3">
          {notes.map((note, index) => (
            <li
              key={index}
              className="rounded-xl border border-gray-800 bg-gray-900 p-4"
            >
              {note}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
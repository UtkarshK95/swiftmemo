interface Props {
  text: string;
  setText: (t: string) => void;
  addNote: () => void;
}

export default function NoteInput({ text, setText, addNote }: Props) {
  return (
    <div className="p-2 flex gap-2">
      <input
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a note..."
        className="flex-1 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded px-2 py-1 text-sm outline-none"
        onKeyDown={(e) => {
          if (e.key === "Enter") addNote();
        }}
      />

      <button
        onClick={addNote}
        className="bg-black dark:bg-zinc-100 text-white dark:text-black px-3 rounded text-sm"
      >
        Add
      </button>
    </div>
  );
}

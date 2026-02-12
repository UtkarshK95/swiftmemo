import { Note } from "../types/note";
import { FaTrash, FaThumbtack } from "react-icons/fa";
import { DraggableProvided } from "@hello-pangea/dnd";

interface Props {
  note: Note;
  editingId: number | null;
  editingText: string;
  setEditingText: (t: string) => void;
  startEdit: (n: Note) => void;
  cancelEdit: () => void;
  saveEdit: (id: number) => void;
  toggleCheck: (id: number) => void;
  togglePin: (id: number) => void;
  deleteNote: (id: number) => void;
  provided: DraggableProvided;
}

export default function NoteItem({
  note,
  editingId,
  editingText,
  setEditingText,
  startEdit,
  cancelEdit,
  saveEdit,
  toggleCheck,
  togglePin,
  deleteNote,
  provided,
}: Props) {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="flex items-center gap-2 py-1.5 px-1 rounded hover:bg-gray-50 dark:hover:bg-zinc-800 transition"
    >
      <input
        type="checkbox"
        checked={note.checked}
        onChange={() => toggleCheck(note.id)}
        onClick={(e) => e.stopPropagation()}
      />

      {editingId === note.id ? (
        <input
          autoFocus
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
          onBlur={() => saveEdit(note.id)}
          onKeyDown={(e) => {
            if (e.key === "Enter") saveEdit(note.id);
            if (e.key === "Escape") cancelEdit();
          }}
          className="
  flex-1 text-sm px-1 py-0.5 rounded border outline-none
  bg-white text-black border-zinc-300
  dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-600
  focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
"
        />
      ) : (
        <span
          title={note.text}
          onDoubleClick={() => startEdit(note)}
          className={`flex-1 text-sm truncate cursor-text ${
            note.checked ? "line-through text-gray-400 dark:text-zinc-500" : ""
          }`}
        >
          {note.text}
        </span>
      )}

      <button
        onClick={() => togglePin(note.id)}
        className={`opacity-70 hover:opacity-100 transition ${
          note.pinned ? "text-blue-500 dark:text-blue-400" : ""
        }`}
      >
        <FaThumbtack size={12} />
      </button>

      <button
        onClick={() => deleteNote(note.id)}
        className="text-red-500 opacity-70 hover:opacity-100 transition"
      >
        <FaTrash size={12} />
      </button>
    </div>
  );
}

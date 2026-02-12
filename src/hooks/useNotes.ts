import { useEffect, useState } from "react";
import { Note } from "../types/note";
import {
  loadNotes,
  saveNotesToStorage,
  subscribeToSync,
} from "../utils/storage";

export default function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => loadNotes(setNotes), []);
  useEffect(() => subscribeToSync(setNotes), []);

  const save = (updated: Note[]) => {
    setNotes(updated);
    saveNotesToStorage(updated);
  };

  const addNote = () => {
    if (!text.trim()) return;

    save([...notes, { id: Date.now(), text, checked: false, pinned: false }]);

    setText("");
  };

  const toggleCheck = (id: number) =>
    save(notes.map((n) => (n.id === id ? { ...n, checked: !n.checked } : n)));

  const deleteNote = (id: number) => save(notes.filter((n) => n.id !== id));

  const togglePin = (id: number) =>
    save(notes.map((n) => (n.id === id ? { ...n, pinned: !n.pinned } : n)));

  const startEdit = (note: Note) => {
    setEditingId(note.id);
    setEditingText(note.text);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  const saveEdit = (id: number) => {
    if (!editingText.trim()) return cancelEdit();

    save(notes.map((n) => (n.id === id ? { ...n, text: editingText } : n)));
    cancelEdit();
  };

  const sortedNotes = [...notes].sort((a, b) =>
    a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1,
  );

  const reorderNotes = (sourceIndex: number, destIndex: number) => {
    const reordered = Array.from(sortedNotes);
    const [moved] = reordered.splice(sourceIndex, 1);
    reordered.splice(destIndex, 0, moved);
    save(reordered);
  };

  return {
    notes,
    text,
    setText,
    editingId,
    editingText,
    setEditingText,
    addNote,
    toggleCheck,
    deleteNote,
    togglePin,
    startEdit,
    cancelEdit,
    saveEdit,
    sortedNotes,
    reorderNotes,
  };
}

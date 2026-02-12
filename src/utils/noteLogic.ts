import { Note } from "../types/note";

export const addNoteLogic = (notes: Note[], text: string): Note[] => {
  if (!text.trim()) return notes;

  return [...notes, { id: Date.now(), text, checked: false, pinned: false }];
};

export const toggleCheckLogic = (notes: Note[], id: number): Note[] =>
  notes.map((n) => (n.id === id ? { ...n, checked: !n.checked } : n));

export const togglePinLogic = (notes: Note[], id: number): Note[] =>
  notes.map((n) => (n.id === id ? { ...n, pinned: !n.pinned } : n));

export const deleteNoteLogic = (notes: Note[], id: number): Note[] =>
  notes.filter((n) => n.id !== id);

export const sortPinnedFirst = (notes: Note[]): Note[] =>
  [...notes].sort((a, b) => (a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1));

export const reorderNotesLogic = (
  notes: Note[],
  source: number,
  dest: number,
): Note[] => {
  const arr = Array.from(notes);
  const [moved] = arr.splice(source, 1);
  arr.splice(dest, 0, moved);
  return arr;
};

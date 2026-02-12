import { describe, it, expect } from "vitest";
import {
  addNoteLogic,
  toggleCheckLogic,
  togglePinLogic,
  deleteNoteLogic,
  sortPinnedFirst,
  reorderNotesLogic,
} from "./noteLogic";
import { Note } from "../types/note";

const baseNotes: Note[] = [
  { id: 1, text: "A", checked: false, pinned: false },
  { id: 2, text: "B", checked: false, pinned: true },
];

describe("note logic", () => {
  it("adds a note", () => {
    const result = addNoteLogic(baseNotes, "New");
    expect(result.length).toBe(3);
    expect(result[2].text).toBe("New");
  });

  it("toggles check", () => {
    const result = toggleCheckLogic(baseNotes, 1);
    expect(result[0].checked).toBe(true);
  });

  it("toggles pin", () => {
    const result = togglePinLogic(baseNotes, 1);
    expect(result[0].pinned).toBe(true);
  });

  it("deletes a note", () => {
    const result = deleteNoteLogic(baseNotes, 1);
    expect(result.length).toBe(1);
    expect(result[0].id).toBe(2);
  });

  it("sorts pinned first", () => {
    const result = sortPinnedFirst(baseNotes);
    expect(result[0].pinned).toBe(true);
  });

  it("reorders notes", () => {
    const reordered = reorderNotesLogic(baseNotes, 0, 1);
    expect(reordered[0].id).toBe(2);
  });
});

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import NoteItem from "./NoteItem";
import { Note } from "../types/note";

interface Props {
  notes: Note[];
  sortedNotes: Note[];
  editingId: number | null;
  editingText: string;
  setEditingText: (t: string) => void;
  startEdit: (n: Note) => void;
  cancelEdit: () => void;
  saveEdit: (id: number) => void;
  toggleCheck: (id: number) => void;
  togglePin: (id: number) => void;
  deleteNote: (id: number) => void;
  reorderNotes: (s: number, d: number) => void;
}

export default function NotesList({
  notes,
  sortedNotes,
  editingId,
  editingText,
  setEditingText,
  startEdit,
  cancelEdit,
  saveEdit,
  toggleCheck,
  togglePin,
  deleteNote,
  reorderNotes,
}: Props) {
  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    reorderNotes(result.source.index, result.destination.index);
  };

  return (
    <div className="flex-1 overflow-y-auto px-2 py-1">
      {notes.length === 0 && (
        <div className="text-xs text-gray-400 text-center py-6">
          No notes yet
        </div>
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="notes">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {sortedNotes.map((note, index) => (
                <Draggable
                  key={note.id}
                  draggableId={String(note.id)}
                  index={index}
                >
                  {(provided) => (
                    <NoteItem
                      note={note}
                      editingId={editingId}
                      editingText={editingText}
                      setEditingText={setEditingText}
                      startEdit={startEdit}
                      cancelEdit={cancelEdit}
                      saveEdit={saveEdit}
                      toggleCheck={toggleCheck}
                      togglePin={togglePin}
                      deleteNote={deleteNote}
                      provided={provided}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

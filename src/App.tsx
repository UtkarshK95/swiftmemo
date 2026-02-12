import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
import Footer from "./components/Footer";
import useNotes from "./hooks/useNotes";

export default function App() {
  const notesState = useNotes();

  return (
    <div className="w-80 h-96 bg-white dark:bg-zinc-900 text-black dark:text-zinc-100 flex flex-col overflow-hidden">
      <Header />
      <NoteInput {...notesState} />
      <NotesList {...notesState} />
      <Footer />
    </div>
  );
}

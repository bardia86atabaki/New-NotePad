import { useState } from "react";
import "./App.css";
import AddNote from "./Component/AddNote/AddNote";
import NoteList from "./Component/AddNote/NoteList";

function App() {
  const [notes, setNote] = useState(() => {
    if (localStorage.getItem('notes')) {
      return JSON.parse(localStorage.getItem('notes'))
    }
    else {
      return []
    }
  });
  localStorage.setItem('notes', JSON.stringify(notes))
  const addNoteHanlder = (newNote) => {
    setNote((prevNotes) => [...prevNotes, newNote])
    localStorage.setItem('notes', JSON.stringify(notes))
  };

  const delethandler = (id)=>{
    const newNote=notes.filter((note)=>
    note.id !== id);

    setNote(newNote)

  }

  return (
    <div className="bg-black">
      <AddNote setNote={setNote} onAddNote={addNoteHanlder} />;
      <NoteList notes={notes} ondelet={delethandler}/>
    </div>)
}
export default App;

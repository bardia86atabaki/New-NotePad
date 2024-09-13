
import Note from "./Note";

function NoteList({ notes ,ondelet}) {
  return (
    <div>
     {notes == "" ? <h1 className="text-2xl">Your Note List Is Empty</h1> : null}
      {notes.map((item) => (
        <Note key={item.id} data={item} ondelet={ondelet} />
      ))}
    </div>
  );
}
export default NoteList;

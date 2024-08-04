import React, {useContext, useEffect} from "react";
import NoteItem from "./NoteItem";
import AddNoteForm from './AddNoteForm';
import noteContext from "../context/notes/noteContext";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, fetchAllNotes } = context || {}; 

  useEffect(() => {
    fetchAllNotes();
  }, [])
  
  if (!context) {
    console.error('Note context not found!');
    return null; 
  }

  return (
    <div className="container my-3">
      <AddNoteForm />
      
      <hr className="my-4"/> {/* Add a horizontal line for separation */}
      
      <h3>My Notes</h3>
      <div className="row my-3 mx-3">
        {notes.map((element, index) => (
          <div key={element._id} className="col-md-3">
            <NoteItem dataObj={element}></NoteItem>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;

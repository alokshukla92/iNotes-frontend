import React from "react";
import NoteItem from "./NoteItem";

const Notes = ({notes}) => {
  return (
    <div className="container my-3">
        <h3>My Notes</h3>
        <div className="row">
            {notes.map((element, index) => (
            <div key={index} className="col-md-4">
                <NoteItem dataObj={element}></NoteItem>
            </div>
            ))}
        </div>
    </div>
  );
};

export default Notes;

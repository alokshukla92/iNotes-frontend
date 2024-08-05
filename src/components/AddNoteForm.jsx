import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNoteForm = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({
      title: "",
      description: "",
    });
    // toast("Note Added")
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container my-3 mx-3">
        <form>
          <h3>Add Notes</h3>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={note.title}
              id="title"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={note.description}
              id="description"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
            disabled={note.title.length < 5 || note.description.length < 5}
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNoteForm;

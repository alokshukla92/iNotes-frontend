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
    addNote(note)
  };

  const handleChange = (e) => {
    // console.log({...note,[e.target.name]: e.target.value});
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container my-3 mx-3"></div>
      <form>
        <h3>Add Notes</h3>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" name="title" id="title" onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" name="description" id="description" onChange={handleChange}/>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddNoteForm;

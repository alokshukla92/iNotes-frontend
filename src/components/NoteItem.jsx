import React, {useContext} from "react";
import noteContext from "../context/notes/noteContext";
import { toast } from 'react-toastify';

const NoteItem = ({ dataObj, updateNote }) => {

  const context = useContext(noteContext);
  const { deleteNote } = context;

  const deleteNoteFromUi = (id) => {
    toast("Note Deleted")
    deleteNote(id)
  }

  const iconStyle = {
    fontSize: "1.2rem", 
    marginLeft: "0.5rem", 
    cursor: "pointer"
  };

  return (
    <div className="card my-3">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <h5 className="card-title mb-0 me-2">{dataObj.title}</h5>
          <i className="bi bi-pencil-square" onClick={()=>{updateNote(dataObj)}} style={iconStyle}></i>
          <i className="bi bi-trash3" onClick={()=>(deleteNoteFromUi(dataObj._id))} style={iconStyle}></i>
        </div>
        <p className="card-text">{dataObj.description}</p>
      </div>
    </div>
  );
};

export default NoteItem;

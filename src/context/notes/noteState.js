import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const hostname = "http://localhost:5000" 
    const [notes, setNotes] = useState([]);
    const fetchAllNotes = async () => {
      const myHeaders = new Headers();
      myHeaders.append("auth-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhZjQ0MzQ1MDdmNjMyODBlZWYzOGEyIn0sImlhdCI6MTcyMjc2MjQwNX0.gx5HRQtUC-WXDFvmincOxJMChalsdvROFxlW-kscC6Y");

      const requestOptions = {
        method: "GET",
        headers: myHeaders
      };
      const response = await fetch(`${hostname}/api/notes/fetchallnotes`, requestOptions)
      const res = await response.json()
      setNotes(res)
    }
    

    
    
    // Add a Note
    const addNote = (({title, description, tag="General"})=>{
      const newNote = {
        "_id": "66abcbc6a7e7d7487f6bf14f",
        "user": "66ab44c8c095d0c2dc94a4f3",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2024-08-01T17:54:14.196Z",
        "__v": 0
      }
      setNotes(notes.concat(newNote))
    })    
  
    // Delete a Note

    // Update A note

    return (
        <noteContext.Provider value={{notes, addNote, fetchAllNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const hostname = "http://localhost:5000" 
    const [notes, setNotes] = useState([]);

    const fetchAllNotes = async () => {
      const myHeaders = new Headers();
      myHeaders.append("auth-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjQ0YzhjMDk1ZDBjMmRjOTRhNGYzIn0sImlhdCI6MTcyMjUzNDA1M30.bjaIRmqHiAhznGwvFMid5w_Oy5EQB0o7e4GowtkccPg");

      const requestOptions = {
        method: "GET",
        headers: myHeaders
      };
      const response = await fetch(`${hostname}/api/notes/fetchallnotes`, requestOptions)
      const res = await response.json()
      setNotes(res)
    }
    
    // Add a Note
    const addNote = async ({title, description, tag="General"})=>{
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("auth-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjQ0YzhjMDk1ZDBjMmRjOTRhNGYzIn0sImlhdCI6MTcyMjUzNDA1M30.bjaIRmqHiAhznGwvFMid5w_Oy5EQB0o7e4GowtkccPg");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body : JSON.stringify(
          {
            title: title,
            description: description
          }
        )
      };
      const response = await fetch(`${hostname}/api/notes/addnote`, requestOptions)
      const res = await response.json()
      console.log(res);
      setNotes(notes.concat(res))
    }
  
    // Delete a Note
    const deleteNote = async (id)=>{
      const newNotes = notes.filter((element) => element._id !== id)
      setNotes(newNotes)

      const myHeaders = new Headers();
      myHeaders.append("auth-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjQ0YzhjMDk1ZDBjMmRjOTRhNGYzIn0sImlhdCI6MTcyMjUzNDA1M30.bjaIRmqHiAhznGwvFMid5w_Oy5EQB0o7e4GowtkccPg");

      const requestOptions = {
        method: "DELETE",
        headers: myHeaders
      };
      const response = await fetch(`${hostname}/api/notes/deletenote/${id}`, requestOptions)
      const res = await response.json()
      console.log(res);
    }

    // Update A note
    const editNote = async ({id, etitle, edescription})=>{
      const newNotes = notes.map(item => {
        if (item._id === id) {
          return {
            ...item,
            title: etitle,
            description: edescription
          };
        }
        return item;
      });
      setNotes(newNotes)
      
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("auth-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjQ0YzhjMDk1ZDBjMmRjOTRhNGYzIn0sImlhdCI6MTcyMjUzNDA1M30.bjaIRmqHiAhznGwvFMid5w_Oy5EQB0o7e4GowtkccPg");

      
      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body : JSON.stringify(
          {
            title: etitle,
            description: edescription
          }
        )
      };
      const response = await fetch(`${hostname}/api/notes/updatenote/${id}`, requestOptions)
      const res = await response.json()
      console.log(res);

    }

    return (
        <noteContext.Provider value={{notes, addNote, deleteNote, editNote, fetchAllNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;
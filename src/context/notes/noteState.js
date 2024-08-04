import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const initialData = [
        {
          "_id": "66abcb80a7e7d7487f6bf1454",
            "user": "66ab44c8c095d0c2dc94a4f3",
            "title": "Learn React",
            "description": "Give me a long as desctiption and this is my react course",
            "tag": "General",
            "date": "2024-08-02T20:07:48.413Z",
            "__v": 0
          },
        {
          "_id": "66abcb80a7e7d7487f6bf145",
          "user": "66ab44c8c095d0c2dc94a4f3",
          "title": "My first Note",
          "description": "Some Test Description",
          "tag": "General",
          "date": "2024-08-01T17:53:04.767Z",
          "__v": 0
        },
        {
          "_id": "66abcbc6a7e7d7487f6bf14b",
          "user": "66ab44c8c095d0c2dc94a4f3",
          "title": "Add Bananas",
          "description": "Add bananas in My Diet",
          "tag": "General",
          "date": "2024-08-01T17:54:14.196Z",
          "__v": 0
        }
      ]
    const [notes, setNotes] = useState(initialData);

    
    // Add a Not e
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
        <noteContext.Provider value={{notes, addNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;
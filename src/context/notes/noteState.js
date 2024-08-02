import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const initialData = [
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

    

    return (
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;
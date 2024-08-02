import React, { useContext } from 'react';
import Notes from './Notes';
import noteContext from '../context/notes/noteContext';
import AddNoteForm from './AddNoteForm';

const Home = () => {
  const context = useContext(noteContext);
  const {notes, setNotes} = context

  return (
    <div className='container my-3'>
      <div className='text-center my-3'>
        <h1>iNotes</h1>
      </div>
      <AddNoteForm />
      <Notes notes={notes} />
    </div>
  );
}

export default Home;

import React, { useContext } from 'react';
import Notes from './Notes';
import noteContext from '../context/notes/noteContext';

const Home = () => {
  const context = useContext(noteContext);
  const { notes } = context || {}; 

  if (!context) {
    console.error('Note context not found!');
    return null; 
  }

  return (
    <div className='container my-3'>
      <div className='text-center my-3'>
        <h1>iNotes</h1>
      </div>
      <Notes notes={notes} />
    </div>
  );
}

export default Home;

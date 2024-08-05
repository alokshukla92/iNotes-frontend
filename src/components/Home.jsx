import React from 'react';
import Notes from './Notes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  
  return (
    <div className='container my-3'>
      <div className='text-center my-3'>
        <h1>iNotes</h1>
      </div>
      <ToastContainer />
      <Notes />
    </div>
  );
}

export default Home;

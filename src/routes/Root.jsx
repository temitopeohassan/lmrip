











import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Import Routes, Route, and Navigate
import { useSelector } from 'react-redux'; // Import useSelector
import Landing from '../pages/Landing';
import  '../assets/css/main.css';
import  '../assets/css/styles.css';


const Root = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log('Rendering Root component');

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
       
      </Routes>
      
    </>
  );
};

export default Root;

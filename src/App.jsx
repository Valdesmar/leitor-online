/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavHorizontal from './components/NavHorizontal';
import Home from './components/Pages/Home';
import FilePage from './components/Pages/FilePage';
import NavVertical from './components/NavVertical';
import ReaderPage from './components/Pages/ReaderPage';


function App() {
  return (
    <Router>
    <Routes>
      <Route 
        path="/" 
        element={ 
          <>
            <NavHorizontal />
            <Home />
          </> 
        } 
      />
      <Route 
        path="/selectfile" 
        element={ 
          <>
            <NavHorizontal />
            <FilePage/>
          </> 
        } 
      />
      <Route 
        path="/readpage" 
        element={ 
          <>
            <ReaderPage/>
          </> 
        } 
      />
    </Routes>
  </Router>
  );
}

export default App;

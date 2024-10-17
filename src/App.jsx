import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App

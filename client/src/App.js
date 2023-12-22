import React, { Component } from 'react';
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router,Routes, Route }  from "react-router-dom";
import {useState} from 'react';

function App() {
  return (
    <>
     <div className='App'>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;

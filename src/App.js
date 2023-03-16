
import React from "react"; 
import "./App.css"; 
import { BrowserRouter as Router, Route, Routes } from 
"react-router-dom"; 
import Home from "./Home"; 
import Tracking from "./Tracking"; 

/* 
MacroTrack  
developed by Brian Ju, UMD 2025 
Frameworks/Languages: React, JSX 

Instructions to run: 
-cd into macrotrack
-"npm start"

*/ 

export default function App() {
  return (
    <div className="App">
      <Router> 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/tracking" element={<Tracking />} /> 
        </Routes> 
      </Router>
    </div> 
  );
}


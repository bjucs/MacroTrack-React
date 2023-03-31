
import React from "react"; 
import "./App.css"; 
import { BrowserRouter as Router, Route, Routes } from 
"react-router-dom"; 
import Home from "./Home"; 
import Tracking from "./Tracking"; 
import Edit from "./Edit"; 
import Log from "./Log"; 


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
          <Route path="/edit" element={<Edit />} /> 
          <Route path="/log" element={<Log />} /> 
        </Routes> 
      </Router>
    </div> 
  );
}


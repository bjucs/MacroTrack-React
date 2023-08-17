import React from "react"; 
import "./App.css"; 
import { BrowserRouter as Router, Route, Routes } from 
"react-router-dom"; 
import Home from "./Home"; 
import Tracking from "./Tracking"; 
import Log from "./Log"; 

export default function App() {
  return (
    <div className="App">
      <Router> 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/tracking" element={<Tracking />} /> 
          <Route path="/log" element={<Log />} /> 
        </Routes> 
      </Router>
    </div> 
  )
}


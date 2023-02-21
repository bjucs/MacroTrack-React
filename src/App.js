
import React from "react"; 
import "./App.css"; 

/* 
MacroTrack 
developed by Brian Ju, UMD 2025 
Frameworks/Languages: React, JSX 

Instructions to run: 
-cd into macrotrack
-"npm start"
*/ 

function App() {
  /* Gets the current date in M/D/Y string format using current 
  Creates new Date object using the "date" reformatted string 
  Convertes dateRef to a Date String, then an array 
  Reformats dateArr as another string */ 
  const current = new Date(); 
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
  const dateRef = new Date(date); 
  const dateArr = dateRef.toDateString().split(' '); 
  const dateFormat = dateArr[2] + ' ' + dateArr[1] + ' ' + dateArr[3]; 

  return (
    <div className="App">
      <header className="MacroTrack">
        <h1> <code> MacroTrack </code> </h1> 
      </header>
      <center> <font size = "+3"> {dateFormat} </font> </center> 
    </div>
  );
}

export default App;

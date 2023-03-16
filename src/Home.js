
import React from "react"; 
import "./App.css"; 
import { BUTTON_TYPES } from "./components/Button"; 
import Button from "./components/btn"; 

export default function Home() {
    /* Gets the current date in M/D/Y string format using current 
    Creates new Date object using the "date" reformatted string 
    Convertes dateRef to a Date String, then an array 
    Reformats dateArr as another string */ 
    const current = new Date(); 
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    const dateRef = new Date(date); 
    const dateArr = dateRef.toDateString().split(' '); 
    const dateFormat = dateArr[2] + ' ' + dateArr[1] + ' ' + dateArr[3]; 
  
    /* Moving the location of the button didn't help with onClick (isn't being 
    covered/shadowed) 
    Added an "onClick" to div which worked, only the button onClick doesn't 
    work? 
    */ 
    return (
      <div className="Home">  
        <header className="MacroTrack">
          <h1> <code> MacroTrack </code> </h1> 
        </header>
        <center> <font size = "+3"> {dateFormat} </font>  
        <br/> <br/> <br/> 
        <label> Total Calories: </label> <textarea readOnly = {true} cols = 
        "10" style = {{"backgroundColor": "#665494"}}/> 
        <br/> <br/> <br/> 
        <label> Protein: </label> <textarea readOnly = {true} cols = "10" style 
        = {{"backgroundColor": "#665494"}}/> 
        <br/> <br/> <br/> 
        <label> Carbs: </label><textarea readOnly = {true} cols = "10" style = 
        {{"backgroundColor": "#665494"}}/> 
        <br/> <br/> <br/> 
        <label> Fat: </label><textarea readOnly = {true} cols = "10" style = 
        {{"backgroundColor": "#665494"}}/> 
        <br/> <br/> <br/> 
        <Button type={BUTTON_TYPES.TRACK} btnTxt='Track' onClick={() => { 
        console.log("button clicked");}}/>     
        <Button type={BUTTON_TYPES.EDIT} btnTxt='Edit'/>  
        <Button type={BUTTON_TYPES.LOG} btnTxt='Log'/>   
        <br/> <br/> <br/> 
        <br/> <br/> <br/> 
        <br/> <br/> <br/> 
        <br/> <br/> <br/> 
        <br/> <br/> <br/> 
        <h3> <code> Created by Brian Ju </code> </h3> 
        </center> 
      </div>
    );
}
  
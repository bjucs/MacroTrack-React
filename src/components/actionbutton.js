import React from "react";  
import "./Button.css";  
import "../App.js" 

function ActionButton(properties) { 
    const {click, btnTxt} = properties;
    return (  
        <div className = {`actionBtn`} onClick = {click}> {btnTxt} </div> 
    ); 
}

export default ActionButton; 
import React from "react";  
import { BUTTON_TYPES } from "./Button"; 
import "./Button.css"; 

function Button(properties) { 
    const {type, btnTxt} = properties;
    const getButtonType=()=>{ 
        switch(type) { 
            case BUTTON_TYPES.TRACK:
                return "trackBtn"; 
            case BUTTON_TYPES.EDIT:
                return "editBtn"; 
            case BUTTON_TYPES.LOG:
                return "logBtn"; 
            default: 
                return "trackBtn"; 
        }
    }
    return (  
        <div className = {`${getButtonType()}`}> {btnTxt} </div> 
    ); 
}

export default Button; 
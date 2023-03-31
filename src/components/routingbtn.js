import React from "react";  
import { BUTTON_TYPES } from "./Button"; 
import "./Button.css";  
import { useNavigate } from "react-router-dom"; 
import "../App.js" 

function RoutingButton(properties) { 
    const {type, btnTxt, routing} = properties;
    const navigate = useNavigate(); 
    const getButtonType=()=>{ 
        switch(type) { 
            case BUTTON_TYPES.TRACK:
                return "routeBtn"; 
            case BUTTON_TYPES.EDIT:
                return "routeBtn"; 
            case BUTTON_TYPES.LOG:
                return "routeBtn"; 
            case BUTTON_TYPES.HOME:
                return "routeBtn"; 
            default: 
                return "routeBtn"; 
        }
    }
    return (  
        <div className = {`${getButtonType()}`} onClick = {() => navigate(routing)}> {btnTxt} </div> 
    ); 
}

export default RoutingButton; 
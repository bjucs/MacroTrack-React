
import React from "react";  
import { foodItems } from './Tracking';
import { BUTTON_TYPES } from "./components/Button"; 
import Table from './components/Table'
import RoutingButton from "./components/routingbtn"; 
import "./App.css"; 

export default function Log() { 
    return (
        <div> 
        <Table foods={foodItems}/>
        <center> 
        <br/> <br/>
        <RoutingButton type={BUTTON_TYPES.HOME} btnTxt='Home' routing="/home"
        />     
        <br/> <br/> <br/> 
        </center> 
        </div> 
    ); 
}
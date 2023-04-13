
import React from "react";  
import { foodItems } from './Tracking';
import "./App.css"; 
import Table from './components/Table'

export default function Log() { 
    return (
        <Table foods={foodItems}/>
    ); 
}
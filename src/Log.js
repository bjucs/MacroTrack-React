
import React from "react";  
import { foodItems } from './Tracking';
import "./App.css"; 

export default function Log() { 
    return (
        <div>
            {foodItems.map((item, index) => (
            <li key={index}>
                {item.item} - {item.cals} calories, {item.protein} g protein, {item.carbs}g carbs, {item.fat}g fat
            </li>
            ))}
        </div>
    ); 
}
import React from "react";  
import FoodClass from "./FoodClass";
import "../App.js"; 
import "./Table.css"; 

function Table({ foods }) {
  const fields = Object.keys(new FoodClass()); // Get the fields of FoodClass
  
  return (
    <table className="table">
        <thead>
            <tr>
            {fields.map((field) => (
                <th key={field}>{field}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            {foods.map((food, index) => (
            <tr key={index}>
                {fields.map((field) => (
                <td key={field}>{food[field]}</td>
                ))}
            </tr>
            ))}
        </tbody>
    </table>
  );
}

export default Table; 
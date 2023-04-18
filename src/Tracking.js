
import React, { useState } from "react";  
import { BUTTON_TYPES } from "./components/Button"; 
import RoutingButton from "./components/routingbtn"; 
import ActionButton from "./components/actionbutton";
import FoodClass from "./components/FoodClass";
import "./App.css"; 

export const foodItems = [];
export const globalFood = new FoodClass("Global", 0, 0, 0, 0); 

export default function Tracking() { 
    /* List of macro constants in order to create FoodClass, which is then 
    going to be added to a global array of FoodClass items (i.e. your tracked 
    items) */ 
    const [item, setItem] = useState(''); 
    const [cals, setCals] = useState(''); 
    const [protein, setProtein] = useState(''); 
    const [carbs, setCarbs] = useState(''); 
    const [fat, setFat] = useState(''); 

    /* List of event handlers for such changes */ 
    const handleItemChange = (event) => { 
      setItem(event.target.value); 
    };
    const handleCalChange = (event) => {
      setCals(parseInt(event.target.value) || 0); 
    }; 
    const handleProteinChange = (event) => {
      setProtein(parseInt(event.target.value) || 0); 
    };
    const handleCarbChange = (event) => {
      setCarbs(parseInt(event.target.value) || 0); 
    };
    const handleFatChange = (event) => {
      setFat(parseInt(event.target.value) || 0); 
    };

    const handleFormSubmit = (event) => {
      if (event) { 
        event.preventDefault();
      }
  
      // Check if all fields are filled
      if (!item || !cals) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Check if all fields are numbers
      if (isNaN(cals) || isNaN(protein) || isNaN(carbs) || isNaN(fat)) {
        alert('Please enter valid numbers for calories, protein, carbs and fat.');
        return;
      }
  
      // Create a new class object with the input values as properties
      const newItem = new FoodClass(item, parseInt(cals), parseInt(protein), parseInt(carbs), parseInt(fat));
      foodItems.push(newItem); 
      globalFood.addCals(parseInt(cals)); 
      globalFood.addProtein(parseInt(protein)); 
      globalFood.addCarbs(parseInt(carbs)); 
      globalFood.addFat(parseInt(fat));  
      console.log(newItem);

      // Clear the input fields
      setItem("");
      setCals("");
      setProtein("");
      setCarbs("");
      setFat("");
    };

    return (
        <div className="Tracking">  
        <header className="MacroTrack">
          <h1> <code> MacroTrack </code> </h1> 
        </header>
        <center> 
        <form onSubmit = {handleFormSubmit}>
        <label> Item Name: </label> <textarea cols = 
        "10" style = {{"backgroundColor": "#665494"}} value = {item} onChange = 
        {handleItemChange}/> 
        <br/> <br/> 
        <label> Calories: </label> <textarea cols = 
        "10" style = {{"backgroundColor": "#665494"}} value = {cals} onChange = 
        {handleCalChange}/> 
        <br/> <br/> 
        <label> Protein: </label> <textarea cols = "10" style 
        = {{"backgroundColor": "#665494"}} value = {protein} onChange = 
        {handleProteinChange}/> 
        <br/> <br/> 
        <label> Carbs: </label> <textarea cols = "10" style = 
        {{"backgroundColor": "#665494"}} value = {carbs} onChange = 
        {handleCarbChange}/> 
        <br/> <br/> 
        <label> Fat: </label> <textarea cols = "10" style = 
        {{"backgroundColor": "#665494"}} value = {fat} onChange = 
        {handleFatChange}/> 
        <br/> <br/>  
        <ActionButton click={() => handleFormSubmit()} btnTxt='Submit'/>  
        <br/> <br/> 
        <RoutingButton type={BUTTON_TYPES.HOME} btnTxt='Home' routing="/home"/
        >     
        </form> 
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

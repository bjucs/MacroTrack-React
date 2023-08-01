import React, { useState } from "react"
import { ButtonTypes } from "./components/Button"
import RoutingButton from "./components/routingbtn"
import ActionButton from "./components/actionbutton"
import FoodClass from "./components/FoodClass"
import "./App.css"

export const foodItems: FoodClass[] = []
export const globalFood = new FoodClass("Global", 0, 0, 0, 0)

export default function Tracking() {
  const [item, setItem] = useState<string>("")
  const [cals, setCals] = useState<string>("")
  const [protein, setProtein] = useState<string>("")
  const [carbs, setCarbs] = useState<string>("")
  const [fat, setFat] = useState<string>("")

  const handleItemChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setItem(event.target.value)
  }
  const handleCalChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCals(event.target.value)
  }
  const handleProteinChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProtein(event.target.value)
  }
  const handleCarbChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCarbs(event.target.value)
  }
  const handleFatChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFat(event.target.value)
  }

  const handleFormSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) { 
      event.preventDefault() 
    }

    // Check if all fields are filled
    if (!item || !cals || !protein || !carbs || !fat) {
      alert("Please fill in all fields.")
      return
    }

    // Check if all fields are numbers
    if (isNaN(parseInt(cals)) || isNaN(parseInt(protein)) || isNaN(parseInt(carbs)) || isNaN(parseInt(fat))) {
      alert("Please enter valid numbers for calories, protein, carbs, and fat.")
      return
    }

    // Create a new class object with the input values as properties
    const newItem = new FoodClass(item, parseInt(cals), parseInt(protein), parseInt(carbs), parseInt(fat))
    foodItems.push(newItem)
    globalFood.addCals(parseInt(cals))
    globalFood.addProtein(parseInt(protein))
    globalFood.addCarbs(parseInt(carbs))
    globalFood.addFat(parseInt(fat))

    // Clear the input fields
    setItem("")
    setCals("")
    setProtein("")
    setCarbs("")
    setFat("")
  }

  return (
    <div className="Tracking">
      <header className="MacroTrack">
        <h1> <code> MacroTrack </code> </h1>
      </header>
      <center>
        <form onSubmit={handleFormSubmit}>
          <label> Item Name: </label> <textarea cols={10} style={{ backgroundColor: "#665494" }} value={item} onChange={handleItemChange} />
          <br /> <br />
          <label> Calories: </label> <textarea cols={10} style={{ backgroundColor: "#665494" }} value={cals.toString()} onChange={handleCalChange} />
          <br /> <br />
          <label> Protein: </label> <textarea cols={10} style={{ backgroundColor: "#665494" }} value={protein.toString()} onChange={handleProteinChange} />
          <br /> <br />
          <label> Carbs: </label> <textarea cols={10} style={{ backgroundColor: "#665494" }} value={carbs.toString()} onChange={handleCarbChange} />
          <br /> <br />
          <label> Fat: </label> <textarea cols={10} style={{ backgroundColor: "#665494" }} value={fat.toString()} onChange={handleFatChange} />
          <br /> <br />
          <ActionButton click={() => handleFormSubmit()} btnTxt='Submit' />
          <br /> <br />
          <RoutingButton type={ButtonTypes.HOME} btnTxt='Home' routing="/home" />
        </form>
        <br /> <br /> <br />
        <br /> <br /> <br />
        <br /> <br /> <br />
        <br /> <br /> <br />
        <h3> <code> Created by Brian Ju </code> </h3>
      </center>
    </div>
  )
}

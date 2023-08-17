import React from "react" 
import { PieChart } from 'react-minimal-pie-chart'
import { ButtonTypes } from "./components/Button" 
import RoutingButton from "./components/routingbtn"
import { globalFood } from './Tracking'
import "./App.css" 

export default function Home() {
    /* Gets the current date in M/D/Y string format using current 
    Creates new Date object using the "date" reformatted string 
    Convertes dateRef to a Date String, then an array 
    Reformats dateArr as another string */ 
    const current = new Date() 
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`
    const dateRef = new Date(date) 
    const dateArr = dateRef.toDateString().split(' ') 
    const dateFormat = dateArr[2] + ' ' + dateArr[1] + ' ' + dateArr[3]
  
    return (
      <div className="Home">
        <header className="MacroTrack">
          <h1> <code> MacroTrack </code> </h1>
        </header>
        <center> <font size="+3"> {dateFormat} </font>
          <br /> <br /> <br />
          <div style={{ display: "flex", width: '500px', height: '300px'}}>
            <div style={{ flex: 1 }}>
              <label> Total Calories: </label>
              <textarea readOnly={true} cols="10" style={{ "backgroundColor": "#665494" }} value={globalFood.cals} />
              <br/>
              <br/>
              <label> Protein: </label>
              <textarea readOnly={true} cols="10" style={{ "backgroundColor": "#665494" }} value={globalFood.protein} />
              <br/>
              <br/>
              <label> Carbs: </label>
              <textarea readOnly={true} cols="10" style={{ "backgroundColor": "#665494" }} value={globalFood.carbs} />
              <br/>
              <br/>
              <label> Fat: </label>
              <textarea readOnly={true} cols="10" style={{ "backgroundColor": "#665494" }} value={globalFood.fat} />
            </div>
            <div style={{ flex: 1 }}>
              <PieChart data={[
              { title: 'Protein', value: globalFood.protein > 0 ? globalFood.protein:0.01, color: '#89BCC4' },
              { title: 'Carbs', value: globalFood.carbs > 0 ? globalFood.carbs:0.01, color: '#DEAFA6' },
              { title: 'Fat', value: globalFood.fat > 0 ? globalFood.fat:0.01, color: '#917974' }
              ]} style={{ height: '200px', width: '200px' }}/>
            </div>
          </div>
          <RoutingButton type={ButtonTypes.TRACK} btnTxt='Track' routing="/tracking" />
          <RoutingButton type={ButtonTypes.LOG} btnTxt='Log' routing="/log" />
          <br /> <br /> <br />
          <h3> <code> Created by Brian Ju </code> </h3>
        </center>
      </div>
    )
  }
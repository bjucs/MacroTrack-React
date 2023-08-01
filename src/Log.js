import React from "react"  
import { foodItems } from './Tracking'
import { ButtonTypes } from "./components/Button"
import Table from './components/Table'
import RoutingButton from "./components/routingbtn" 

export default function Log() { 
    return (
        <div> 
        <Table foods={foodItems}/>
        <center> 
        <br/> <br/>
        <RoutingButton type={ButtonTypes.HOME} btnTxt='Home' routing="/home"
        />     
        <br/> <br/> <br/> 
        </center> 
        </div> 
    ) 
}
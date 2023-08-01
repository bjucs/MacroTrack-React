import React from "react"
import FoodClass from "./FoodClass"
import "./Table.css"

interface Food {
  [key: string]: string | number
}
interface TableProps {
  foods: Food[]
}

function Table({ foods }: TableProps) {
  const fields = Object.keys(new FoodClass("",0,0,0,0)) as Array<keyof Food>

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
  )
}

export default Table

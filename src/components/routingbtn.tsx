import React from "react"
import { useNavigate } from "react-router-dom"
import { ButtonTypes } from "./Button"
import "./Button.css"

interface RoutingButtonProps {
  type: ButtonTypes
  btnTxt: string
  routing: string
}

const RoutingButton: React.FC<RoutingButtonProps> = ({ type, btnTxt, routing }) => {
  const navigate = useNavigate()

  const getButtonType = (): string => {
    switch (type) {
      case ButtonTypes.TRACK:
        return "routeBtn"
      case ButtonTypes.LOG:
        return "routeBtn"
      case ButtonTypes.HOME:
        return "routeBtn"
      default:
        return "routeBtn"
    }
  }

  return (
    <div className={`${getButtonType()}`} onClick={() => navigate(routing)}>
      {btnTxt}
    </div>
  )
}

export default RoutingButton

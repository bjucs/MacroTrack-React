import React from 'react'
import './Button.css'

interface ActionButtonProps {
  click: () => void
  btnTxt: string 
} 

const ActionButton: React.FC<ActionButtonProps> = ({ click, btnTxt }) => {
  return (
    <div className={`actionBtn`} onClick={click}> {btnTxt} </div>
  )
}

export default ActionButton
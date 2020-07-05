import React from 'react'
import './App.css'

export const Input = props => {

  return (
    <li>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.handleOnChange} />{props.genderName}
    </li>
  )
}

export default Input
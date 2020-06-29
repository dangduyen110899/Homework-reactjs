import React from 'react'
import './App.css'

export const Checkbox = props => {
  return (
    <li>
      <input
        key={props.id}
        onClick={props.handleCheckFavorite}
        type="checkbox"
        checked={props.isChecked}
        value={props.value} /> {props.value}
    </li>
  )
}

export default Checkbox
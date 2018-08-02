import React from 'react'

const Input = ({ label, name, handleChange, description }) => {
  return (
    <div>
      <label htmlFor={name}> {label}: </label>
      <input onChange={handleChange} type="text" name={name} />
      <span> {description} </span>
    </div>
  )
}

export default Input

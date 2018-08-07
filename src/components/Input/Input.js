import React from 'react'

const Input = ({ label, name, handleChange, description }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {label}: </label>
      <input onChange={handleChange} type="text" name={name} />
      <span className="description"> ({description}) </span>
    </div>
  )
}

export default Input

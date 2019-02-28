import React from 'react'

const Input = ({ label, name, description, handleChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {label}: </label>
      <input onChange={handleChange} type="text" name={name} />
      <small>{description}</small>
    </div>
  )
}

export default Input

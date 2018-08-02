import React from 'react'

const Input = ({ label, name }) => {
  return (
    <div>
      <label htmlFor={name}> {label}: </label>
      <input type="text" name={name} />
    </div>
  )
}

export default Input

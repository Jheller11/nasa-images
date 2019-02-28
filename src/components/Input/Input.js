import React from 'react'
import styles from './Input.module.css'

const Input = ({ label, name, description, handleChange }) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name}> {label}: </label>
      <input onChange={handleChange} type="text" name={name} />
      <small className={styles.helperText}>{description}</small>
    </div>
  )
}

export default Input

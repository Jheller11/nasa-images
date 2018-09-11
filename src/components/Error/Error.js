import React from 'react'

const Error = props => {
  return (
    <div>
      <p>{props.error}</p>
      <span>Please try again.</span>
    </div>
  )
}

export default Error

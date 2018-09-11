import React from 'react'

const Error = props => {
  return (
    <div>
      <p>{props.error}</p>
      <p>Please try again.</p>
    </div>
  )
}

export default Error

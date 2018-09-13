import React from 'react'

const EpicController = props => {
  return (
    <div>
      <button onClick={props.decrement}>Previous</button>
      <button onClick={props.increment}>Next</button>
    </div>
  )
}

export default EpicController

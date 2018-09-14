import React from 'react'

const EpicController = props => {
  return (
    <div>
      <button className="epic-button" type="submit" onClick={props.decrement}>
        <i className="fa fa-chevron-left" /> Previous
      </button>
      <button className="epic-button" type="submit" onClick={props.increment}>
        Next <i className="fa fa-chevron-right" />
      </button>
    </div>
  )
}

export default EpicController

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
      <div>
        <p>Type:</p>
        <button className="epic-button" onClick={props.setNatural}>
          Natural
        </button>
        <button className="epic-button" onClick={props.setEnhanced}>
          Enhanced
        </button>
      </div>
    </div>
  )
}

export default EpicController

import React from 'react'
import styles from './EpicController.module.css'

const EpicController = props => {
  return (
    <div className={styles.container}>
      <div>
        <p>Viewing: {props.active + 1} of 12</p>
        <button type="submit" onClick={props.decrement}>
          <i className="fa fa-chevron-left" /> Previous
        </button>
        <button type="submit" onClick={props.increment}>
          Next <i className="fa fa-chevron-right" />
        </button>
      </div>
      <div>
        <p>Type: {props.type === 'natural' ? 'Natural' : 'Enhanced'}</p>
        <button onClick={props.setType}>
          Switch to {props.type === 'natural' ? 'Enhanced' : 'Natural'}
        </button>
      </div>
    </div>
  )
}

export default EpicController

import React, { Fragment } from 'react'

const Error = props => {
  return (
    <Fragment>
      <p>{props.error}</p>
      <span>Please try again.</span>
    </Fragment>
  )
}

export default Error

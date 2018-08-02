import React from 'react'

const Result = props => {
  let url = props.data.href
  return (
    <div>
      <img src={props.data.href} alt="search result" />
    </div>
  )
}
export default Result

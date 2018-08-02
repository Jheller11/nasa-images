import React from 'react'

const Result = props => {
  return (
    <div>
      <img src={props.data.links[0].href} alt="search result" />
    </div>
  )
}
export default Result

import React from 'react'

const Result = props => {
  if (props.data.links) {
    console.log(props)
    return (
      <div>
        <img src={props.data.links[0].href} alt="search result" />
      </div>
    )
  } else {
    return <div className="empty" />
  }
}
export default Result

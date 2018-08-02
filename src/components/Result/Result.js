import React from 'react'

const Result = props => {
  if (props.data.links) {
    console.log(props)
    return (
      <div className="result">
        <div className="info">
          <a href={props.data.href} target="_blank">
            View Collection
          </a>
        </div>
        <div className="img">
          <img src={props.data.links[0].href} alt="search result" />
        </div>
      </div>
    )
  } else {
    return <div className="empty" />
  }
}
export default Result

import React from 'react'

const SearchHistory = props => {
  let searches = []
  props.history.forEach((item, index) => {
    searches.push(
      <li key={index}>
        <p>{item}</p>
      </li>
    )
  })
  return (
    <div className="history">
      <h4>Recent Searches:</h4>
      <ul>{searches}</ul>
      <p>
        {props.history.length === 0 ? `Past searches will be saved here.` : ''}
      </p>
    </div>
  )
}

export default SearchHistory

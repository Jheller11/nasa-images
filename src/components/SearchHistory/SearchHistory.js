import React from 'react'

const SearchHistory = props => {
  let searches = []
  props.searchHistory.forEach((item, index) => {
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
        {props.searchHistory.length === 0
          ? `Past searches will be saved here.`
          : ''}
      </p>
    </div>
  )
}

export default SearchHistory

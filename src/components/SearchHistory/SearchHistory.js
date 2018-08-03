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
    <div>
      <h3>Recent Searches</h3>
      <ul>{searches}</ul>
    </div>
  )
}

export default SearchHistory

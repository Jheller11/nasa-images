import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>NASA Image Search</h1>
      <nav>
        <Link to="/">Search</Link> ||
        <Link to="/history"> History</Link> ||
        <Link to="/apod"> Astronomy Picture of the Day</Link> ||
        {/* <Link to="/saved"> Saved Images</Link> */}
      </nav>
    </header>
  )
}

export default Header

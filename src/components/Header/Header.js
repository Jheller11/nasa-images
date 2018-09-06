import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <div>NASA Image Search</div>
        <span>|</span>
        <Link to="/">New Search</Link>
        <Link to="/history">Search History</Link>
        <Link to="/saved">Saved Images</Link>
        <Link to="/apod">Astronomy Picture of the Day</Link>
        <Link to="/help">About</Link>
      </nav>
    </header>
  )
}

export default Header

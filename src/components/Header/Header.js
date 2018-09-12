import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <div>NASA Images</div>
        <span>|</span>
        <Link to="/apod">Astronomy Picture of the Day</Link>
        <Link to="/epic">Earth</Link>
        <Link to="/">Search</Link>
        <Link to="/help">About</Link>
      </nav>
    </header>
  )
}

export default Header

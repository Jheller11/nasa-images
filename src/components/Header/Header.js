import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>NASA Image Search</h1>
      <nav>
        <Link to="/">Home</Link> ||
        <Link to="/apod"> Astronomy Picture of the Day</Link>
      </nav>
    </header>
  )
}

export default Header

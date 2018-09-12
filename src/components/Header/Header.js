import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link id="title" to="/">
          NASA Image Finder
        </Link>
        <span>|</span>
        <Link to="/apod">Astronomy Picture of the Day</Link>
        <Link to="/epic">Earth (EPIC)</Link>
        <Link to="/search">Image Search</Link>
        <Link to="/help">About</Link>
      </nav>
    </header>
  )
}

export default Header

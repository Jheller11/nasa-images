import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="box-shadow">
      <nav>
        <Link id="title" to="/">
          NASA Image Finder
        </Link>
        <span>|</span>
        <Link to="/apod">
          <i className="fa fa-camera" /> Astronomy Picture of the Day
        </Link>
        <Link to="/epic">
          <i className="fa fa-globe" /> Earth (EPIC)
        </Link>
        <Link to="/search">
          <i className="fa fa-search" /> Image Search
        </Link>
      </nav>
      <nav className="header-right">
        <Link to="/">
          <span className="fa fa-home" />
        </Link>
        <Link to="/help">
          <span className="fa fa-question" />
        </Link>
      </nav>
    </header>
  )
}

export default Header

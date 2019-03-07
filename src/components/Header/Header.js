import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.title} to="/">
        NASA Image Finder
      </Link>
      <nav className={styles.nav}>
        <Link to="/apod">
          <i className="fa fa-camera" /> Astronomy Picture of the Day
        </Link>
        <Link to="/epic">
          <i className="fa fa-globe" /> Earth (EPIC)
        </Link>
        <Link to="/search">
          <i className="fa fa-search" /> Images & Videos
        </Link>
      </nav>
    </header>
  )
}

export default Header

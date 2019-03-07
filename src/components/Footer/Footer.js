import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Created by Jeff Heller</p>
        <nav className={styles.nav}>
          <a
            aria-label="Go to my github profile"
            href="https://github.com/Jheller11"
          >
            <span className="fa fa-github-square fa-lg" />
          </a>
          <a
            aria-label="Email me at heller.jeffrey@gmail.com"
            href="mailto:heller.jeffrey@gmail.com"
          >
            <span className="fa fa-envelope fa-lg" />
          </a>
          <a
            aria-label="Go to my linked profile"
            href="https://www.linkedin.com/in/jeffreyaheller/"
          >
            <span className="fa fa-linkedin fa-lg" />
          </a>
        </nav>
      </div>
      <div className={styles.links}>
        <p>
          <Link to="/help">About</Link>
          <Link to="/blog">Development Blog</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer

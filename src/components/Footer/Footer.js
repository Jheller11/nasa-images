import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Created by Jeff Heller</p>
        <nav className={styles.nav}>
          <a href="https://github.com/Jheller11">
            <span className="fa fa-github-square fa-lg" />
          </a>
          <a href="mailto:heller.jeffrey@gmail.com">
            <span className="fa fa-envelope fa-lg" />
          </a>
          <a href="https://www.linkedin.com/in/jeffreyaheller/">
            <span className="fa fa-linkedin fa-lg" />
          </a>
        </nav>
      </div>
      <div className={styles.links}>
        <p>
          <Link to="/help">About</Link>
          <Link to="/blog">Development Blog</Link>
          <a
            className="github-button"
            href="https://github.com/Jheller11/nasa-images"
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star Jheller11/nasa-images on GitHub"
          >
            Star
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer

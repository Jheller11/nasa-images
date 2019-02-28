import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
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
    </footer>
  )
}

export default Footer

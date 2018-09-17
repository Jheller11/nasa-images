import React from 'react'

const Footer = () => {
  return (
    <footer className="flex">
      <p>Created by Jeff Heller</p>
      <ul className="flex footer-icons">
        <li>
          <a href="https://github.com/Jheller11">
            <span className="fa fa-github-square fa-lg" />
          </a>
        </li>
        <li>
          <a href="mailto:heller.jeffrey@gmail.com">
            <span className="fa fa-envelope fa-lg" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jeffreyaheller/">
            <span className="fa fa-linkedin fa-lg" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer

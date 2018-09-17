import React from 'react'

const Footer = () => {
  return (
    <footer>
      <p>Created by Jeff Heller</p>
      <ul className="flex footer-icons">
        <li>
          <a href="">
            <span className="fa fa-github-square" />
          </a>
        </li>
        <li>
          <a href="">
            <span className="fa fa-envelope" />
          </a>
        </li>
        <li>
          <a href="">
            <span className="fa fa-linkedin" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer

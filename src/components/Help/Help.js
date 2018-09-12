import React from 'react'

const Help = () => {
  return (
    <div>
      <h3>About:</h3>
      <p>
        This application is designed to access several of NASA's open data
        sources. General information is available at{' '}
        <a
          href="https://api.nasa.gov/index.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://api.nasa.gov/index.html
        </a>
        .
      </p>
      <h3>API's:</h3>
      <ol>
        <li>
          <h5>Astronomy Picture of the Day</h5>
          <p>
            Link:{' '}
            <a
              href="https://api.nasa.gov/api.html#apod"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://api.nasa.gov/api.html#apod
            </a>
          </p>
        </li>
        <li>
          <h5>EPIC (Earth Polychromatic Imaging Camera)</h5>
          <p>
            Link:{' '}
            <a
              href="https://epic.gsfc.nasa.gov/about/api"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://epic.gsfc.nasa.gov/about/api
            </a>
          </p>
        </li>
        <li>
          <h5>NASA Image and Video Library</h5>
          <p>
            Link:{' '}
            <a href="https://api.nasa.gov/api.html#Images">
              https://api.nasa.gov/api.html#Images
            </a>
          </p>
        </li>
      </ol>
    </div>
  )
}

export default Help

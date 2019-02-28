import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeText}>
        <h4>Welcome!</h4>
        <p>
          This site is designed to allow access to a few of NASA's most popular
          open data sources. Use the links below to access the current sources:
        </p>
        <ul>
          <li className={styles.homeListItem}>
            <Link to="/apod">Astronomy Picture of the Day</Link>
            <p>
              One of NASA's most popular features, Astronomy Picture of the Day
              features an interesting new video, gif, or image daily together
              with a description and source.
            </p>
          </li>
          <li className={styles.homeListItem}>
            <Link to="/epic">Earth Polychromatic Imaging Camera</Link>{' '}
            <p>
              Located at the{' '}
              <a
                href="https://en.wikipedia.org/wiki/Lagrangian_point"
                target="_blank"
                rel="noopener noreferrer"
              >
                Langrange Point
              </a>{' '}
              between the Earth and Sun, the EPIC camera provides daily images,
              both natural and color enhanced (coming soon).
            </p>
          </li>
          <li className={styles.homeListItem}>
            <Link to="/search">NASA Images and Videos</Link>
            <p>
              NASA's searchable database for all publicly available image and
              video content. Perform simple searches for a specific topic or
              advanced searches to narrow results by date, source, etc.
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.twitterContainer}>
        <a
          className="twitter-timeline"
          data-theme="dark"
          data-link-color="#E95F28"
          data-width="500px"
          data-height="600px"
          href="https://twitter.com/NASA?ref_src=twsrc%5Etfw"
        >
          Tweets by NASA
        </a>{' '}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
      </div>
    </div>
  )
}

export default Home
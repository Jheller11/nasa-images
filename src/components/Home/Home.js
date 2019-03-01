import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.title}>Explore...</div>
      </div>
      <h1 className={styles.optionsHeader}>Resources</h1>
      <div className={styles.options}>
        <div className={styles.option}>
          <Link to="/apod">Astronomy Picture of the Day</Link>
          <p>
            One of NASA's most popular features, Astronomy Picture of the Day
            features an interesting new video, gif, or image daily together with
            a description and source.
          </p>
        </div>
        <div className={styles.option}>
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
        </div>
        <div className={styles.option}>
          <Link to="/search">NASA Images and Videos</Link>
          <p>
            NASA's searchable database for all publicly available image and
            video content. Perform simple searches for a specific topic or
            advanced searches to narrow results by date, source, etc.
          </p>
        </div>
      </div>
      <div className={styles.extras}>
        <div className={styles.info} />
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
    </div>
  )
}

export default Home

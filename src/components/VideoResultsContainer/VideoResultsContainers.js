import React from 'react'
import styles from './VideoResultsContainer.module.css'

const VideoResultsContainer = props => {
  return (
    <div>
      <small>
        Click on a result to view media collection from NASA (external link).
      </small>
      <ul className={styles.videoList}>
        {props.results.length > 0
          ? props.results.map((res, i) => {
              return (
                <li key={i}>
                  <a href={res.href} target="_blank" rel="noopener noreferrer">
                    <h3 className={styles.title}>{res.data[0].title}</h3>
                  </a>
                  <img
                    src={res.links[0].href}
                    alt={res.data[0].title + 'preview'}
                  />
                </li>
              )
            })
          : 'No results found. Please try again.'}
      </ul>
    </div>
  )
}

export default VideoResultsContainer

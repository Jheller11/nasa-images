import React, { Fragment } from 'react'
import styles from './VideoResultsContainer.module.css'
import { Link } from 'react-router-dom'

const VideoResultsContainer = props => {
  return (
    <Fragment>
      <small>
        {props.results.length} results. Click on a result to view media
        collection from NASA.
      </small>
      <ul className={styles.videoList}>
        {props.results.length > 0
          ? props.results.map((res, i) => {
              return (
                <li key={i}>
                  <Link to={`/viewer/${i}`}>
                    <h3 className={styles.title}>{res.data[0].title}</h3>
                  </Link>
                  <img
                    src={res.links[0].href}
                    alt={res.data[0].title + 'preview'}
                  />
                </li>
              )
            })
          : 'No results found. Please try again.'}
      </ul>
    </Fragment>
  )
}

export default VideoResultsContainer

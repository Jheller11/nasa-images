import React from 'react'
import styles from './ImageResultsContainer.module.css'
import { Link } from 'react-router-dom'

const ImageResultsContainer = props => {
  return (
    <div className={styles.gallery}>
      <small>
        {props.results.length} results. Click on a result to view media
        collection from NASA.
      </small>
      <ul className={styles.galleryList}>
        {props.results.length > 0
          ? props.results.map((res, i) => {
              return (
                <li key={i}>
                  <figure>
                    <Link to={`/viewer/${i}`}>
                      <img src={res.links[0].href} alt={res.data[0].title} />
                    </Link>
                  </figure>
                </li>
              )
            })
          : 'No results found. Please try again.'}
      </ul>
    </div>
  )
}

export default ImageResultsContainer

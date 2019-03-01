import React from 'react'
import styles from './ImageResultsContainer.module.css'

const ImageResultsContainer = props => {
  return (
    <div className={styles.gallery}>
      <small>
        {props.results.length} results. Click on a result to view media
        collection from NASA (external link).
      </small>
      <ul className={styles.galleryList}>
        {props.results.length > 0
          ? props.results.map((res, i) => {
              return (
                <li key={i}>
                  <figure>
                    <a
                      href={res.href}
                      target="_blank"
                      rel="noopener noreferred"
                    >
                      <img src={res.links[0].href} alt={res.data[0].title} />
                    </a>
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

// data: Array(1)
// 0:
// center: "JPL"
// date_created: "1999-03-13T14:54:19Z"
// description: "Jupiter Plume"
// description_508: "Jupiter Plume"
// keywords: Array(2)
// 0: "Jupiter"
// 1: "Voyager"
// length: 2
// __proto__: Array(0)
// media_type: "image"
// nasa_id: "PIA01518"
// secondary_creator: "NASA/JPL"
// title: "Jupiter Plume"
// __proto__: Object
// length: 1
// __proto__: Array(0)
// href: "https://images-assets.nasa.gov/image/PIA01518/collection.json"
// links: Array(1)
// 0:
// href: "https://images-assets.nasa.gov/image/PIA01518/PIA01518~thumb.jpg"
// rel: "preview"
// render: "image"
// __proto__: Object
// length: 1
// __proto__: Array(0)
// __proto__: Object

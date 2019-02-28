import React from 'react'
import styles from './MediaSelector.module.css'

const MediaSelector = props => {
  return (
    <div className={styles.mediaSelector}>
      <label htmlFor="media_type">Media Type: </label>
      <select
        className={styles.select}
        onChange={props.handleChange}
        name="media_type"
      >
        <option value="image">Image</option>
        <option value="video">Video</option>
      </select>
    </div>
  )
}

export default MediaSelector

import React from 'react'

const MediaSelector = props => {
  return (
    <div className="form-group">
      <label htmlFor="media_type">Media Type</label>
      <select onChange={props.handleChange} name="media_type">
        <option value="image">Image</option>
        <option value="video">Video</option>
      </select>
    </div>
  )
}

export default MediaSelector

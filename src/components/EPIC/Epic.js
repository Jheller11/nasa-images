import React, { Component } from 'react'
import axios from 'axios'

class Epic extends Component {
  constructor() {
    super()
    this.state = {
      images: [],
      url: 'https://epic.gsfc.nasa.gov/api/natural '
    }
  }

  componentDidMount() {
    axios
      .get(this.state.url)
      .then(res => {
        this.setState({
          images: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    let images = []
    this.state.images.forEach(image => {
      let date = {
        year: image.date.slice(0, 4),
        month: image.date.slice(5, 7),
        day: image.date.slice(8, 10)
      }
      let id = image.image
      images.push(
        <img
          src={`https://epic.gsfc.nasa.gov/archive/natural/${date.year}/${
            date.month
          }/${date.day}/png/${id}.png`}
          alt={image.identifier}
          key={image.identifier}
          className="epic"
        />
      )
    })
    return <div>{images}</div>
  }
}

export default Epic

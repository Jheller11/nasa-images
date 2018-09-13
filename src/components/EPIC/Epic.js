import React, { Component } from 'react'
import axios from 'axios'

class Epic extends Component {
  constructor() {
    super()
    this.state = {
      images: [],
      url: 'https://epic.gsfc.nasa.gov/api/natural ',
      active: null,
      loading: true
    }
  }

  componentDidMount() {
    axios
      .get(this.state.url)
      .then(res => {
        this.setState({
          images: res.data,
          loading: false,
          active: 0
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    let slideshow, activeImage

    if (this.state.loading) {
      slideshow = <div>Slideshow loading...</div>
    } else {
      activeImage = this.state.images[this.state.active]
      slideshow = (
        <img
          src={`https://epic.gsfc.nasa.gov/archive/natural/${activeImage.date.slice(
            0,
            4
          )}/${activeImage.date.slice(5, 7)}/${activeImage.date.slice(
            8,
            10
          )}/png/${activeImage.image}.png`}
          alt={activeImage.identifier}
          key={activeImage.identifier}
          className="epicImage"
        />
      )
    }

    return <div>{slideshow}</div>
  }
}

export default Epic

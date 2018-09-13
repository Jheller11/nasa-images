import React, { Component } from 'react'
import EpicController from '../EpicController/EpicController'
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

    this.setActive = this.setActive.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  // fetch EPIC most recent natural images
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

  // allow EpicController component to switch active image
  setActive(e) {
    e.preventDefault()
    let num = e.target.firstChild.value
    this.setState({
      active: num
    })
  }

  increment(e) {
    e.preventDefault()
    this.state.active === 11
      ? this.setState({ active: 0 })
      : this.setState({
          active: this.state.active + 1
        })
  }

  decrement(e) {
    e.preventDefault()
    this.state.active === 0
      ? this.setState({ active: 11 })
      : this.setState({
          active: this.state.active - 1
        })
  }

  render() {
    let slideshow,
      activeImage,
      active = this.state.active
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
          className="epic-image"
        />
      )
    }

    return (
      <div className="epic box-shadow">
        <h4>EPIC: Earth Plychromatic Imaging Camera</h4>
        <p />
        <div className="epic-container">
          <div className="epic-left">{slideshow}</div>
          <div className="epic-right">
            <EpicController
              increment={this.increment}
              decrement={this.decrement}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Epic

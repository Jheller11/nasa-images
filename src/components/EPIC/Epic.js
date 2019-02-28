import React, { Component } from 'react'
import EpicController from '../EpicController/EpicController'
import axios from 'axios'
import styles from './Epic.module.css'

class Epic extends Component {
  constructor() {
    super()
    this.state = {
      images: [],
      url: 'https://epic.gsfc.nasa.gov/api/',
      active: null,
      loading: true,
      type: 'natural'
    }

    this.setNatural = this.setNatural.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.setEnhanced = this.setEnhanced.bind(this)
    this.fetch = this.fetch.bind(this)
  }

  // fetch EPIC most recent natural images
  componentDidMount() {
    this.fetch()
  }

  // fetch new images
  fetch() {
    axios
      .get(this.state.url + this.state.type)
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

  //  next image
  increment(e) {
    e.preventDefault()
    this.state.active === 11
      ? this.setState({ active: 0 })
      : this.setState({
          active: this.state.active + 1
        })
  }
  //  previous image
  decrement(e) {
    e.preventDefault()
    this.state.active === 0
      ? this.setState({ active: 11 })
      : this.setState({
          active: this.state.active - 1
        })
  }

  // enhanced
  setEnhanced() {
    this.setState({
      type: 'enhanced',
      loading: true,
      images: []
    })
    this.fetch()
  }

  // natural
  setNatural() {
    this.setState({
      type: 'natural',
      loading: true,
      images: []
    })
    this.fetch()
  }

  render() {
    let slideshow,
      activeImage,
      data = ''
    if (this.state.loading) {
      slideshow = <div>Slideshow loading...</div>
    } else {
      activeImage = this.state.images[this.state.active]
      slideshow = (
        <img
          src={`https://epic.gsfc.nasa.gov/archive/${
            this.state.type
          }/${activeImage.date.slice(0, 4)}/${activeImage.date.slice(
            5,
            7
          )}/${activeImage.date.slice(8, 10)}/png/${activeImage.image}.png`}
          alt={activeImage.identifier}
          key={activeImage.identifier}
          className={styles.image}
        />
      )
      data = <p>Date: {activeImage.date.slice(0, 10)}</p>
    }

    return (
      <div>
        <h4>EPIC: Earth Plychromatic Imaging Camera</h4>
        <p />
        <div>
          <div>{slideshow}</div>
          <div>
            <div className="controls">
              <h3>Controls</h3>
              <p>
                Image {this.state.active + 1} of {this.state.images.length}
              </p>
              <EpicController
                increment={this.increment}
                decrement={this.decrement}
                setNatural={this.setNatural}
                setEnhanced={this.setEnhanced}
              />
            </div>
            <div className="data">{data}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Epic

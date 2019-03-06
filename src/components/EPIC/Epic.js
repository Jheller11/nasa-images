import React, { Component } from 'react'
import EpicController from '../EpicController/EpicController'
import axios from 'axios'
import styles from './Epic.module.css'
import LoadingScreen from '../LoadingScreen/LoadingScreen'

class Epic extends Component {
  constructor() {
    super()
    this.state = {
      images: [],
      url: 'https://epic.gsfc.nasa.gov/api/',
      active: 0,
      loading: true,
      type: 'natural',
      natural: [],
      enhanced: []
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.setType = this.setType.bind(this)
  }

  // fetch EPIC most recent natural images
  componentDidMount() {
    axios
      .all([
        axios.get(this.state.url + 'natural'),
        axios.get(this.state.url + 'enhanced')
      ])
      .then(
        axios.spread((naturalRes, enhancedRes) => {
          this.setState({
            natural: naturalRes.data,
            enhanced: enhancedRes.data,
            loading: false
          })
        })
      )
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

  // set type of image in state to display correct image set
  setType() {
    let type = this.state.type === 'natural' ? 'enhanced' : 'natural'
    this.setState({
      type: type
    })
  }

  render() {
    return this.state.loading ? (
      <LoadingScreen />
    ) : (
      <div>
        <div className={styles.container}>
          <img
            src={`https://epic.gsfc.nasa.gov/archive/${
              this.state.type
            }/${this.state[this.state.type][this.state.active].date.slice(
              0,
              4
            )}/${this.state[this.state.type][this.state.active].date.slice(
              5,
              7
            )}/${this.state[this.state.type][this.state.active].date.slice(
              8,
              10
            )}/png/${this.state[this.state.type][this.state.active].image}.png`}
            alt={this.state[this.state.type][this.state.active].identifier}
            key={this.state[this.state.type][this.state.active].identifier}
            className={styles.image}
          />
        </div>
        <EpicController
          active={this.state.active}
          type={this.state.type}
          increment={this.increment}
          decrement={this.decrement}
          setType={this.setType}
        />
      </div>
    )
  }
}

export default Epic

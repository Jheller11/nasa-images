import React, { Component } from 'react'
import axios from 'axios'

class Epic extends Component {
  constructor() {
    super()
    this.state = {
      images: [],
      url: 'https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY'
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
    let image = this.state.images[0]
    return (
      <div>
        <img
          id="epic"
          src="https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png"
          alt="epic"
        />
      </div>
    )
  }
}

export default Epic

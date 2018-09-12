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
    console.log(this.state.images[0])
    let image = this.state.images[0]
    return (
      <div>
        <img
          alt="epic"
          src="https://api.nasa.gov/EPIC/api/natural/2018/09/09/png/epic_1b_20180909003633.png?api_key=DEMO_KEY"
        />
      </div>
    )
  }
}

export default Epic

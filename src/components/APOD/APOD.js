import React, { Component } from 'react'
import axios from 'axios'

class APOD extends Component {
  constructor() {
    super()
    this.state = {
      url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
      src: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
      title: '',
      explanation: '',
      date: ''
    }
  }

  componentDidMount() {
    axios
      .get(this.state.url)
      .then(res => {
        this.setState({
          src: res.data.url,
          title: res.data.title,
          explanation: res.data.explanation,
          date: res.data.date
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <h4>{this.state.date}</h4>
        <img src={this.state.src} alt="apod" />
        <p>Description: {this.state.explanation}</p>
      </div>
    )
  }
}

export default APOD

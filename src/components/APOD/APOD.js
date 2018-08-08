import React, { Component } from 'react'
import axios from 'axios'

class APOD extends Component {
  constructor() {
    super()
    this.state = {
      mediaType: 'image',
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
          date: res.data.date,
          mediaType: res.data.media_type
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    let media
    if (this.state.mediaType === 'image') {
      media = <img src={this.state.src} alt={'APOD'} />
    } else if (this.state.mediaType === 'video') {
      media = (
        <iframe
          src={this.state.src}
          title="video"
          style={{ height: 400, width: 600 }}
        />
      )
    }
    return (
      <div>
        <h3>{this.state.title}</h3>
        <h4>{this.state.date}</h4>
        <div>{media}</div>
        <p>Description: {this.state.explanation}</p>
      </div>
    )
  }
}

export default APOD

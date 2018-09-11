import React, { Component } from 'react'
import axios from 'axios'
import LoadingScreen from '../LoadingScreen/LoadingScreen'

class APOD extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mediaType: 'image',
      url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
      src: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
      title: '',
      explanation: '',
      date: '',
      loading: true
    }

    this.timer = this.timer.bind(this)
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
        this.timer()
      })
      .catch(err => {
        this.props.history.push('/error')
        this.props.saveErr(err)
      })
  }

  timer() {
    setInterval(() => {
      this.setState({
        loading: false
      })
    }, 3000)
  }

  render() {
    let media
    if (this.state.mediaType === 'image') {
      media = <img className="apod" src={this.state.src} alt={'APOD'} />
    } else if (this.state.mediaType === 'video') {
      media = (
        <iframe
          className="apod"
          src={this.state.src}
          title="video"
          style={{ height: 400, width: 600 }}
        />
      )
    }
    let render = this.state.loading ? (
      <LoadingScreen />
    ) : (
      <div>
        <h3>
          {this.state.title} ({this.state.date})
        </h3>
        <div>{media}</div>
        <p>Description: {this.state.explanation}</p>
      </div>
    )

    return <div>{render}</div>
  }
}

export default APOD

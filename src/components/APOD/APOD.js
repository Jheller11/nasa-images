import React, { Component, Fragment } from 'react'
import axios from 'axios'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import styles from './APOD.module.css'

class APOD extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mediaType: 'image',
      url:
        process.env.NODE_ENV === 'production'
          ? process.env.REACT_APP_NODE_SERVER_URL + '/nasa/apod'
          : 'http://localhost:4000/nasa/apod',
      src: 'https://api.nasa.gov/planetary/apod',
      title: '',
      explanation: '',
      date: '',
      loading: true
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
          mediaType: res.data.media_type,
          loading: false
        })
      })
      .catch(err => {
        this.props.history.push('/error')
        this.props.saveErr(err)
      })
  }

  render() {
    let media
    if (this.state.mediaType === 'image') {
      media = (
        <img className={styles.apodImage} src={this.state.src} alt={'APOD'} />
      )
    } else if (this.state.mediaType === 'video') {
      media = (
        <iframe
          className={styles.apodVideo}
          src={this.state.src}
          title="video"
          style={{ height: 400, width: 600 }}
        />
      )
    }
    return this.state.loading ? (
      <LoadingScreen />
    ) : (
      <Fragment>
        <h1 className={styles.title}>
          {this.state.title} ({this.state.date})
        </h1>
        <div>{media}</div>
        <p className={styles.description}>{this.state.explanation}</p>
      </Fragment>
    )
  }
}

export default APOD

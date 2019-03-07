import React, { Component, Fragment } from 'react'
import axios from 'axios'
import styles from './ResultViewer.module.css'

class ResultViewer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: this.props.results[this.props.match.params.id],
      assets: []
    }
  }

  componentDidMount() {
    if (this.props.results.length > 0) {
      axios
        .get(this.state.result.href)
        .then(res => {
          this.setState({
            assets: res.data
          })
        })
        .catch(err => {
          console.log('error')
        })
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.result ? (
          <img
            className={styles.image}
            src={this.state.result.links[0].href}
            alt={this.state.result.data[0].title}
          />
        ) : (
          <div>No media selected. Please go back and try again.</div>
        )}
        {this.state.assets.map((asset, i) => {
          console.log(asset)
          return (
            <p key={i}>
              <a href={asset} target="_blank" rel="noopener noreferrer">
                {asset}
              </a>
            </p>
          )
        })}
      </Fragment>
    )
  }
}

export default ResultViewer

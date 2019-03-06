import React, { Component } from 'react'
import axios from 'axios'

class ResultViewer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collection: this.props.results[this.props.match.params.id],
      assets: [],
      results: this.props.results
    }
  }

  componentDidMount() {
    if (this.state.results.length > 0) {
      axios
        .get(this.state.collection.href)
        .then(res => {
          this.setState({
            assets: res.data
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  render() {
    return (
      <div>
        <h3>Available Assets:</h3>
        {this.state.assets.map((asset, i) => {
          return (
            <p key={i}>
              <a href={asset} target="_blank" rel="noopener noreferrer">
                {asset}
              </a>
            </p>
          )
        })}
      </div>
    )
  }
}

export default ResultViewer

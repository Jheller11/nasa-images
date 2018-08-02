import React, { Component } from 'react'

class ResultsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: this.props.results
    }
  }
  render() {
    return <div>I am a results container</div>
  }
}

export default ResultsContainer

import React, { Component } from 'react'
import Result from '../Result/Result'

class ResultsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: this.props.results
    }
  }
  render() {
    let results = ['Something went wrong. Please try again']
    if (this.state.results) {
      results.pop()
      this.state.results.forEach((result, index) => {
        results.push(<Result key={index} data={result} />)
      })
    }
    return <div>{results}</div>
  }
}

export default ResultsContainer

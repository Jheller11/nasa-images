import React, { Component } from 'react'
import Input from '../Input/Input'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: 'https://images-api.nasa.gov/search'
    }
  }
  render() {
    return (
      <div>
        I am a search container and i have an Input
        <Input name="keyword" label="Keyword" />
        <button onClick={this.props.performSearch}> Search </button>
      </div>
    )
  }
}
export default SearchContainer

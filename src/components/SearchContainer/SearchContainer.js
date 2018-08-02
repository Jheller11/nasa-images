import React, { Component } from 'react'
import Input from '../Input/Input'

class SearchContainer extends Component {
  constructor() {
    super()
    this.state = {
      url: 'https://images-api.nasa.gov/search'
    }
  }
  render() {
    return (
      <div>
        I am a search container and i have an Input
        <Input name="keyword" label="Keyword" />
      </div>
    )
  }
}
export default SearchContainer

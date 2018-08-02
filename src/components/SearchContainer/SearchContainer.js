import React, { Component } from 'react'
import Input from '../Input/Input'
import querystring from 'querystring'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: 'https://images-api.nasa.gov/search?',
      //   inputs = "names" are the parameters from Nasa API to create query string
      inputs: [
        { name: 'q', label: 'Free Text', description: 'paste here' },
        { name: 'keywords', label: 'Keyword', description: 'paste here' }
      ]
    }

    this.handleChange = this.handleChange.bind(this)
    this.constructURL = this.constructURL.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    let target = e.target.name
    let value = e.target.value
    this.setState({
      [target]: value
    })
    console.log(this.state)
  }

  constructURL(e) {
    e.preventDefault()
    // use querystring to contruct url from this.state (everything except state.inputs and state.url)
    let url = this.state.url
    let object = this.state
    delete object.inputs
    delete object.url
    let query = querystring.stringify(object)
    this.props.performSearch(url + query)
  }

  render() {
    let inputs = []
    this.state.inputs.forEach((item, index) => {
      inputs.push(
        <Input
          handleChange={this.handleChange}
          name={item.name}
          label={item.label}
          description={item.description}
          key={index}
        />
      )
    })
    return (
      <div>
        <h4>Image Search:</h4>
        <p>Parameters:</p>
        <div>{inputs}</div>
        <button onClick={this.constructURL}> Search </button>
      </div>
    )
  }
}
export default SearchContainer

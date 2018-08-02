import React, { Component } from 'react'
import Input from '../Input/Input'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: 'https://images-api.nasa.gov/search',
      inputs: [
        { name: 'freeText', label: 'Free Text', description: 'paste here' },
        { name: 'keyword', label: 'Keyword', description: 'paste here' }
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
  }

  constructURL(e) {
    e.preventDefault()
    let url = this.state.url
    let keys = Object.keys(this.state)
    keys.forEach(key => {
      if (key === 'url' || key === 'inputs') {
        console.log(key + '... so i will do nothing')
      } else {
        console.log(key + '... this will do something')
      }
    })

    this.props.performSearch(url)
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

import React, { Component } from 'react'
import Input from '../Input/Input'
import querystring from 'querystring'
import axios from 'axios'
import MediaSelector from '../MediaSelector/MediaSelector'
import SearchHistory from '../SearchHistory/SearchHistory'
import Saved from '../Saved/Saved'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: 'https://images-api.nasa.gov/search?',
      //   inputs = "names" are the parameters from Nasa API to create query string
      inputs: [
        { name: 'q', label: 'Free Text', description: 'Search by all fields.' },
        {
          name: 'keywords',
          label: 'Keyword',
          description: 'Search by NASA keywords only.'
        },
        {
          name: 'description',
          label: 'Description',
          description: 'Search for matching words in the description.'
        },
        {
          name: 'center',
          label: 'NASA Center',
          description: 'Search by NASA center which published the image.'
        },
        {
          name: 'year_start',
          label: 'Start Year',
          description: 'Limit results to images after this year.'
        },
        {
          name: 'year_end',
          label: 'End Year',
          description: 'Limit results to images before this year.'
        }
      ],
      simple: true,
      media_type: 'image'
    }
    this.handleChange = this.handleChange.bind(this)
    this.constructURL = this.constructURL.bind(this)
    this.performSearch = this.performSearch.bind(this)
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
    // use querystring to contruct url from this.state (everything except state.inputs and state.url)
    let url = this.state.url
    let queryObject = Object.assign({}, this.state)
    delete queryObject.inputs
    delete queryObject.url
    delete queryObject.simple
    let query = querystring.stringify(queryObject)
    this.performSearch(url + query)
  }

  performSearch(url) {
    // use axios to fetch data with url passed up by SearchContainer
    axios
      .get(url)
      .then(res => {
        // store data response in state of App component
        this.props.setResults(res.data.collection.items)
        // store search query in state of App component
        this.props.saveSearch(url)
        // redirect to appropriate results container/table
        this.state.media_type === 'image'
          ? this.props.history.push('/results/images')
          : this.props.history.push('/results/videos')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    let inputs = []
    // advanced search - display all search fields
    if (!this.state.simple) {
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
    } else {
      // simple search - display only free text field
      inputs.push(
        <Input
          handleChange={this.handleChange}
          name={this.state.inputs[0].name}
          label={this.state.inputs[0].label}
          description={this.state.inputs[0].description}
          key={1}
        />
      )
    }
    return (
      <div className="">
        <div className="search-container">
          <h4>New Search:</h4>
          <p>
            <button onClick={() => this.setState({ simple: true })}>
              Simple
            </button>
            <button onClick={() => this.setState({ simple: false })}>
              Advanced
            </button>
          </p>
          <MediaSelector handleChange={this.handleChange} />
          <div>{inputs}</div>
          <div className="center">
            <button onClick={this.constructURL}> Search </button>
          </div>
        </div>
        <SearchHistory history={this.props.history} />
        <Saved saved={this.props.saved} />
      </div>
    )
  }
}
export default SearchContainer

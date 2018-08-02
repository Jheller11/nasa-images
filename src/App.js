import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import SearchContainer from './components/SearchContainer/SearchContainer'
import ResultsContainer from './components/ResultsContainer/ResultsContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {}

    this.performSearch = this.performSearch.bind(this)
  }

  // rewrite to compile state of search container into url string
  performSearch(e) {
    e.preventDefault()
    console.log('searched')
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/search"
            render={() => (
              <SearchContainer performSearch={this.performSearch} />
            )}
          />
          <Route
            path="/results"
            render={() => <ResultsContainer results={this.state.results} />}
          />
        </Switch>
      </div>
    )
  }
}

export default App

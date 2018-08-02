import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
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

  performSearch(url) {
    console.log(url)
    // use axios to fetch data with url passed up by SearchContainer

    // store data response in state

    // redirect to results page with response data
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
          <Route
            path="/error"
            render={error => <div>This is where the error goes.</div>}
          />
          <Route path="/" render={() => <Redirect to="/search" />} />
        </Switch>
      </div>
    )
  }
}

export default App

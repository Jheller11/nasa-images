import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import SearchContainer from './components/SearchContainer/SearchContainer'
import ResultsContainer from './components/ResultsContainer/ResultsContainer'
import Header from './components/Header/Header'

class App extends Component {
  constructor() {
    super()
    this.state = {}

    this.setResults = this.setResults.bind(this)
  }

  setResults(results) {
    this.setState({ results: results })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            path="/search"
            render={props => (
              <SearchContainer {...props} setResults={this.setResults} />
            )}
          />
          <Route
            path="/results"
            render={() => <ResultsContainer results={this.state.results} />}
          />
          <Route path="/" render={() => <Redirect to="/search" />} />
        </Switch>
      </div>
    )
  }
}

export default App

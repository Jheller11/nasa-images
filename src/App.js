import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import SearchContainer from './components/SearchContainer/SearchContainer'
import ResultsContainer from './components/ResultsContainer/ResultsContainer'
import Header from './components/Header/Header'
import APOD from './components/APOD/APOD'
import SearchHistory from './components/SearchHistory/SearchHistory'

class App extends Component {
  constructor() {
    super()
    this.state = {
      history: []
    }

    this.setResults = this.setResults.bind(this)
    this.saveSearch = this.saveSearch.bind(this)
  }

  setResults(results) {
    this.setState({ results: results })
  }

  saveSearch(search) {
    let searches = this.state.history
    searches.push(search)
    this.setState({
      history: searches
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            path="/search"
            render={props => (
              <SearchContainer
                {...props}
                setResults={this.setResults}
                saveSearch={this.saveSearch}
              />
            )}
          />
          <Route
            path="/results"
            render={() => <ResultsContainer results={this.state.results} />}
          />
          <Route path="/apod" render={() => <APOD />} />
          <Route
            path="/history"
            render={() => <SearchHistory history={this.state.history} />}
          />
          <Route path="/" render={() => <Redirect to="/search" />} />
        </Switch>
      </div>
    )
  }
}

export default App

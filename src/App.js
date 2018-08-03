import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import SearchContainer from './components/SearchContainer/SearchContainer'
import ResultsContainer from './components/ResultsContainer/ResultsContainer'
import Header from './components/Header/Header'
import APOD from './components/APOD/APOD'
import SearchHistory from './components/SearchHistory/SearchHistory'
import Saved from './components/Saved/Saved'

class App extends Component {
  constructor() {
    super()
    this.state = {
      history: [],
      saved: []
    }

    this.setResults = this.setResults.bind(this)
    this.saveSearch = this.saveSearch.bind(this)
    this.saveImage = this.saveImage.bind(this)
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

  saveImage(e) {
    console.log(e.target.name)
    let images = this.state.saved
    images.push({ link: e.target.name })
    this.setState({
      saved: images
    })
    console.log(this.state.saved)
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
            render={() => (
              <ResultsContainer
                results={this.state.results}
                saveImage={this.saveImage}
              />
            )}
          />
          <Route path="/apod" render={() => <APOD />} />
          <Route
            path="/history"
            render={() => <SearchHistory history={this.state.history} />}
          />
          <Route
            path="/saved"
            render={() => <Saved saved={this.state.saved} />}
          />
          <Route path="/" render={() => <Redirect to="/search" />} />
        </Switch>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import SearchContainer from './components/SearchContainer/SearchContainer'
import ImageResultsContainer from './components/ImageResultsContainer/ImageResultsContainer'
import Header from './components/Header/Header'
import APOD from './components/APOD/APOD'
import SearchHistory from './components/SearchHistory/SearchHistory'
import Saved from './components/Saved/Saved'
import VideoResultsContainer from './components/VideoResultsContainer/VideoResultsContainers'
import Help from './components/Help/Help'
import Error from './components/Error/Error'

class App extends Component {
  constructor() {
    super()
    this.state = {
      history: [],
      saved: [],
      media_type: ''
    }

    this.setResults = this.setResults.bind(this)
    this.saveSearch = this.saveSearch.bind(this)
    this.saveImage = this.saveImage.bind(this)
    this.saveErr = this.saveErr.bind(this)
  }

  setResults(results) {
    this.setState({
      results: results,
      media_type: results[0].data[0].media_type
    })
  }

  saveSearch(search) {
    let searches = this.state.history
    searches.push(search)
    this.setState({
      history: searches
    })
  }

  saveImage(image) {
    let images = this.state.saved
    images.push(image)
    this.setState({
      saved: images
    })
  }

  saveErr(err) {
    this.setState({
      error: `${err}`
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
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
              path="/results/images"
              render={() => (
                <ImageResultsContainer
                  results={this.state.results}
                  saveImage={this.saveImage}
                />
              )}
            />
            <Route
              path="/results/videos"
              render={() => (
                <VideoResultsContainer results={this.state.results} />
              )}
            />
            <Route
              path="/apod"
              render={props => <APOD {...props} saveErr={this.saveErr} />}
            />
            <Route
              path="/history"
              render={() => <SearchHistory history={this.state.history} />}
            />
            <Route
              path="/saved"
              render={() => <Saved saved={this.state.saved} />}
            />
            <Route path="/help" render={() => <Help />} />
            <Route
              path="/error"
              render={() => <Error error={this.state.error} />}
            />
            <Route path="/" render={() => <Redirect to="/search" />} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App

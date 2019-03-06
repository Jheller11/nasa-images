import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import SearchContainer from './components/SearchContainer/SearchContainer'
import ImageResultsContainer from './components/ImageResultsContainer/ImageResultsContainer'
import Header from './components/Header/Header'
import APOD from './components/APOD/APOD'
import VideoResultsContainer from './components/VideoResultsContainer/VideoResultsContainers'
import Help from './components/Help/Help'
import Error from './components/Error/Error'
import Epic from './components/EPIC/Epic'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import ResultViewer from './components/ResultViewer/ResultViewer'
import Blog from './blog/Blog'

class App extends Component {
  constructor() {
    super()
    this.state = {
      history: [],
      saved: [],
      media_type: '',
      results: []
    }

    this.setResults = this.setResults.bind(this)
    this.saveErr = this.saveErr.bind(this)
  }

  setResults(results) {
    this.setState({
      results: results,
      media_type: results[0].data[0].media_type
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
                  searchHistory={this.state.history}
                  saved={this.state.saved}
                />
              )}
            />
            <Route
              path="/results/images"
              render={() => (
                <ImageResultsContainer results={this.state.results} />
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
            <Route path="/epic" render={() => <Epic />} />
            <Route path="/help" render={() => <Help />} />
            <Route
              path="/error"
              render={() => <Error error={this.state.error} />}
            />
            <Route
              path="/viewer/:id"
              render={props => (
                <ResultViewer {...props} results={this.state.results} />
              )}
            />
            <Route path="/blog" render={() => <Blog />} />
            <Route path="/" render={() => <Home />} />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App

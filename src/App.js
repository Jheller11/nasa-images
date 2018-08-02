import React, { Component } from 'react'
import './App.css'
import SearchContainer from './components/SearchContainer/SearchContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <SearchContainer />
      </div>
    )
  }
}

export default App

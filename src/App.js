import React, { Component } from 'react'
import './App.css'
import Input from './components/input/Input'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input name="test" label="Test" />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import ColorPicker from './components/ColorPicker'

class App extends Component {
  render() {
    console.log('rendering')
    return (
      <section>
        <h1>Color Picker</h1>
        <ColorPicker />
        <ColorPicker />
        <ColorPicker />
      </section>
    )
  }
}

export default App

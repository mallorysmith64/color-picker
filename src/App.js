import React, { Component } from 'react'
import ColorPickerHook from './components/ColorPickerHook'
// import ColorPicker from './components/ColorPicker'

class App extends Component {
  render() {
    console.log('rendering App.js')
    return (
      <section>
        <h1>HSL Color Picker</h1>
        <ColorPickerHook />
      </section>
    )
  }
}

export default App

import React, { Component } from 'react'
import ColorPickerHooks from './components/ColorPickerHooks'
// import ColorPicker from './components/ColorPicker'

class App extends Component {
  render() {
    console.log('rendering')
    return (
      <section>
        <h1>HSL Color Picker</h1>
        <ColorPickerHooks />
        {/* <ColorPicker/> */}
      </section>
    )
  }
}

export default App

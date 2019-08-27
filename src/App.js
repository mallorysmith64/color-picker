import React, { Component } from 'react'
import Hue from './components/Hue'
import Saturation from './components/Saturation'
import Lightness from './components/Lightness'
// import ColorPicker from './components/ColorPicker'

class App extends Component {
  render() {
    console.log('rendering')
    return (
      <section>
        <h1>HSL Color Picker</h1>
        <Hue />
        <Saturation />
        <Lightness />
        {/* <ColorPicker/> */}
      </section>
    )
  }
}

export default App

import React, { Component } from 'react'
// import Slider from './components/Slider'

export class ColorPicker extends Component {
  // constructor(props)
  state = {
    hue: 1,
    saturation: 1,
    lightness: 1
  }

  changeHue = event => {
    console.log('changing hue')
    this.setState({
      hue: event.target.value
    })
  }

  changeSaturation = event => {
    console.log('changing saturation')
    this.setState({
      saturation: event.target.value
    })
  }

  changeLightness = event => {
    console.log('changing lightness')
    this.setState({
      lightness: event.target.value
    })
  }

  // saveUserInput = event => {
  //   console.log(event.target.value)
  //   //target user input
  //   this.setState({
  //     userInput: event.target.value
  // })
  // }

  render() {
    return (
      <div style={{ backgroundColor: `hsl(50,8%,20%)` }}>
        <input
          // id="hue-slider"
          type="range"
          min="1"
          max="255"
          step="1"
          // value={this.state.value}
          // onChange={this.state.change}
        />
      </div>
    )
  }
}

export default ColorPicker

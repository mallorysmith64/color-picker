import React, { Component } from 'react'
import Slider from './components/Slider'

export class ColorPicker extends Component {
  // constructor(props) 
  state = {
    hue: 1,
    saturation: 1,
    lightness: 1
  }

  changeHue = event => {
    console.log("changing hue")
    let changeHue = event.target.value
      this.setState({
      hue: this.state.changeHue + 1
    })
  }

  changeSaturation = event => {
    console.log("changing saturation")
    let changeSaturation = event.target.value
    this.setState({
      saturation: this.state.saturation + 1
      // saturation: true
    })
  }

  changeLightness = event => {
    console.log("changing lightness")
    let changeLightness = event.target.value
    this.setState({
      lightness: this.state.lightness + 1
      // lightness: true
    })
  }
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
    <div>
      <section className="hue-selector">
      </section>
    </div>
  )
}

export default ColorPicker

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
      //make sliders
      <div>
        <div>
          <main className="all-sliders">
            <section
              className="slider-one"
              style={{ backgroundColor: `hsl(360,100%,100%)` }}
            >
              <input
                type="range"
                min="1"
                max="255"
                step="1"
                value={this.state.value}
                onChange={this.state.change}
              />
            </section>
            <section
              className="slider-two"
              style={{ backgroundColor: `hsl(360,100%,100%)` }}
            >
              <input
                type="range"
                min="1"
                max="255"
                step="1"
                value={this.state.value}
                onChange={this.state.change}
              />
            </section>
            <section
              className="slider-three"
              style={{ backgroundColor: `hsl(360,100%,100%)` }}
            >
              <input
                type="range"
                min="1"
                max="255"
                step="1"
                value={this.state.value}
                onChange={this.state.change}
              />
            </section>
          </main>
        </div>
        <h2>Hue: {this.state.hue}</h2>
        <h2>Saturation: {this.state.saturation}</h2>
        <h2>Lightness: {this.state.lightness}</h2>
      </div>
    )
  }
}

export default ColorPicker

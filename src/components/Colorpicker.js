// import React, { Component } from 'react'

// export class ColorPicker extends Component {
//   state = {
//     hue: Math.ceil(Math.random() * 360),
//     saturation: 50,
//     lightness: 50
//   }

//   changeHue = event => {
//     console.log('changing hue')
//     this.setState({
//       hue: event.target.value
//     })
//   }

//   changeSaturation = event => {
//     console.log('changing saturation')
//     this.setState({
//       saturation: event.target.value
//     })
//   }

//   changeLightness = event => {
//     console.log('changing lightness')
//     this.setState({
//       lightness: event.target.value
//     })
//   }

//   changeBackground = event => {
//     console.log('change background')
//     this.setState({
//       hue: Math.ceil(Math.random() * 360),
//       saturation: Math.ceil(Math.random() * 100),
//       lightness: Math.ceil(Math.random() * 100)
//     })
//   }

//   render() {
//     return (
//       //make sliders
//       <div>
//         <button
//           className="background-btn"
//           value={this.state.backgroundColor}
//           onClick={this.changeBackground}
//         />
//         <section
//           style={{
//             backgroundColor: `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`
//           }}
//         >
//           <input
//             type="range"
//             min="0"
//             max="360"
//             step="2"
//             value={this.state.hue}
//             onChange={this.changeHue}
//           />
//           <input
//             type="range"
//             min="0"
//             max="100"
//             step="2"
//             value={this.state.saturation}
//             onChange={this.changeSaturation}
//           />
//           <input
//             type="range"
//             min="0"
//             max="100"
//             step="2"
//             value={this.state.lightness}
//             onChange={this.changeLightness}
//           />
//           <h2>Hue: {this.state.hue}</h2>
//           <h2>Saturation: {this.state.saturation}</h2>
//           <h2>Lightness: {this.state.lightness}</h2>
//         </section>
//       </div>
//     )
//   }
// }

// export default ColorPicker

//color picker without hooks version

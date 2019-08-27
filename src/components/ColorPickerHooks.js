// import React, { Component } from 'react'
import React, { useState } from 'react'

// export class ColorPickerHooks extends Component {
// state = {
//   hue: Math.ceil(Math.random() * 360),
//   saturation: 50,
//   lightness: 50
// }

function ColorPickerHooks() {
  const [hue, setHue] = useState(0)
  return (
    <>
      <section>
        <h2>Hue: {hue}</h2>
        <input
          type="range"
          min="0"
          max="360"
          step="2"
          value={hue}
          onChange={e => setHue(e.target.value)}
        />
      </section>
      {/* <section>
        <h2>Saturation: {saturation}</h2>
        <input
          type="range"
          min="0"
          max="100"
          step="2"
          value={saturation}
          onChange={e => setSaturation(e.target.value)}
        />
      </section> */}
    </>
  )
}

export default ColorPickerHooks

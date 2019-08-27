import React, { useState } from 'react'

function Hue() {
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
    </>
  )
}

export default Hue

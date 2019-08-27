import React, { useState } from 'react'

function Lightness() {
  const [lightness, setLightness] = useState(0)
  return (
    <>
      <section>
        <h2>Lightness: {lightness}</h2>
        <input
          type="range"
          min="0"
          max="100"
          step="2"
          value={lightness}
          onChange={e => setLightness(e.target.value)}
        />
      </section>
    </>
  )
}

export default Lightness

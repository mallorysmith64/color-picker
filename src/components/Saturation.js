import React, { useState } from 'react'

function Saturation() {
  const [saturation, setSaturation] = useState(0)
  return (
    <>
      <section>
        <h2>Saturation: {saturation}</h2>
        <input
          type="range"
          min="0"
          max="100"
          step="2"
          value={saturation}
          onChange={e => setSaturation(e.target.value)}
        />
      </section>
    </>
  )
}

export default Saturation

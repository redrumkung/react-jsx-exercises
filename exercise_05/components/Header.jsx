import React from 'react'

function Header({temperature, toggleIsOn, isOn}) {
  return (
    <>
    <button onClick={toggleIsOn}>ON/OFF</button>
    {isOn? <span>Current Temperature: {temperature}°C</span>: <span>OFF</span>}
    </>
  )
}

export default Header
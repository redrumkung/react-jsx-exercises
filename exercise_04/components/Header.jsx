import React from 'react'

function Header({ temperature }) {
  return (
    <>
    <button>ON/OFF</button>
    <span>Current Temperature: {temperature}°C</span>
    </>
  )
}

export default Header
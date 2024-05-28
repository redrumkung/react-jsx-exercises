import React from 'react'


function Footer({increaseTemperature,decreaseTemperature}) {
  return (
    <>
    <button onClick={decreaseTemperature}>Down</button>
    <button onClick={increaseTemperature}>Up</button>
    </>
  )
}

export default Footer
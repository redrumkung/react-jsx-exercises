import React from 'react'
import Temperature from './Temperature'


const Content = ({ temperature }) => {
  return (
    <>
    <Temperature temperature= {temperature} />
    </>
  )
}

export default Content
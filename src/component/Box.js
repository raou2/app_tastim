import React from 'react'
import '../styles/global.css'
import One from './One'
import Three from './Three'
import Two from './Two'

function Box() {
  return (
    <div className='box'>
        <One />
        <Two />
        <Three />
  

    </div>
  )
}

export default Box
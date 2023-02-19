import React from 'react'
import './content.css'
import Ele from './Ele'

function Box() {

  return (
    <div className='box'>
    
      <Ele  title='Porfessional' price='122$'/>
      <Ele  title='Base' price='19.9$'/>

    </div>
  )
}

export default Box
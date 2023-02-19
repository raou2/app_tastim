import React from 'react'
import { useState  } from 'react'
import './content.css'

function Top() {
 const [istrue,setIstrue]=useState(true)
  const style ={background:'white',borderRadius:'.31rem',transition:'all .43s'}
  const nosty = {};
    const move= ()=>{
    setIstrue(!istrue);

    }
  return (
    <div className='top'>
    <h2>choose your plan </h2>
     <div className='month-year'>
     
       <span style={istrue?(style):(nosty)} onClick={move}>mother</span>
       <span style={istrue?(nosty):(style)} onClick={move}>year</span>
     </div>


    </div>
  )
}

export default Top
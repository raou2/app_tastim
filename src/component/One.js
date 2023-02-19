import React from 'react'
import '../styles/global.css'
function One() {
    const date = new Date()
  return (
    <div className='upper'>
    <div className='one'>
        <h5>Raouf bouafia Lorem Kita thi hkawarth none </h5>
        <p>created on: {date.getHours().toString()}:{date.getMinutes().toString()}:{date.getSeconds().toString()}</p>
    <div className='point'>
     <span>.</span>
     <span>.</span>
     <span>.</span>
    </div>
    </div>

    </div>
  )
}

export default One
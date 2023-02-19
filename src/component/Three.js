import React from 'react'
import '../styles/global.css'
import myimg  from '../img/1.webp'
import tow  from '../img/2.jpeg'
import three  from '../img/3.webp'
import four  from '../img/4.webp'
import five  from '../img/6.jpeg'
function Three() {
  return (
    <div>
        <div className='prog'>
            <strong>
                Task
            </strong>
            <progress value='50' max={100} ></progress>
            <strong>43%</strong>
        </div>
    <div className='three'>
      <img src={myimg} alt='one'/>
      <img src={tow} alt='one'/>
      <img src={three} alt='one'/>
      <img src={four} alt='one'/>
      <img src={five} alt='one'/>
      
    </div>

    </div>
  )
}

export default Three
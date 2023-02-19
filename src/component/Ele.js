import React, { createContext, useContext } from 'react'
import './content.css'

function Ele(prop) {
  const Mycontext = createContext()
const user = useContext(Mycontext)
  return (
    <div className='one ele'>
 <div>
 <h2>{prop.title} per month</h2>
   <h3>{prop.price} per month </h3>
   <h5>build your own </h5>
  <p>lorem iso coneaco plora eled elems acoda 
  ero iso coneaco plora eled elems acoda 
  amdoe iso coneaco plora eled elems acoda </p>
{user}
 </div>
  <div className='button'>get more</div> 
    </div>
    
  )
}

export default Ele
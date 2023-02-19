import React, { createContext, useState } from 'react'
import './container.css'
import Content from './content'
const Mycontext = createContext();
function Container() {
  const [istrue,setIstrue]=useState(true)
  return (
  <div className='container  d-flex justify-content-center align-items-center'>
  <Mycontext.Provider value={istrue}>
    <Content />

  </Mycontext.Provider>
  

  </div>
  )
}

export default Container
import React, { useState } from 'react'
import './App.css'
const style={
  color : "red",
  border : "2px solid blue",
}

const App = () => {
    const [count,setCount] =useState(0)
  return (
    <div>
      <h1 className='heading'>{count}</h1>
      <button style={style} onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default App
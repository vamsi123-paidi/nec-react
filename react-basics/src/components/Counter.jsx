import React from 'react'
import useCounter from './useCounter'
const Counter = () => {
    const {count,increment,decrement,reset}=useCounter(5)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
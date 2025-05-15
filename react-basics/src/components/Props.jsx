import React from 'react'
import Props2 from './Props2'

const Props = (props) => {
    const handleClick = () =>{
       console.log("button cliked") 
    }

  return (
    <div>
        <h1>Props</h1>
        <h1>coming from props 1 {props.name}</h1>
        <h1>{props.age}</h1>
        <button onClick={handleClick}>submit</button>
        <Props2 data={props.name}/>
    </div>
  )
}

export default Props
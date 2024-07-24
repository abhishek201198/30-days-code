import React from 'react'
import {useState} from 'react'

const App = () => {
  const [count, setCount] =useState(0)

  // const Handler = () =>{
  //   setCount(count+1);
  // }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count+1)}>+</button>
      <button onClick={()=> setCount(count-1)}>-</button>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const incr = ()=>{
    setCount(count+1)
  }
  const decr = ()=>{
    setCount(count-1)
  }
  return (
  <>
  <h1>{count}</h1>
  <button onClick={incr}>+</button>
  <button onClick={decr}>-</button>
  </>
  );
}

export default App;

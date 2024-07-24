import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

const UseRefEx3 = () => {
    const count = useRef(0);

    useEffect(()=>{
        console.log("The Component have been rendered")
    })

    function handle(){
        // setCount(count + 1);
        count.current = count.current+1;
        console.log(`Clicked ${count.current} times `)
    }

  return (
    <div>
      <button onClick={handle}>Click Me</button>
    </div>
  )
}

export default UseRefEx3

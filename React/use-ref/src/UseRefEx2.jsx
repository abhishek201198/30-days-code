import React from 'react'
import { useEffect } from 'react';

const UseRefEx2 = () => {
    const inputEl = React.useRef(null);

    useEffect(()=>{
        inputEl.current.focus();
    },[])

    function handleBlur(){
        inputEl.current.style.backgroundColor ="black"
    }
    function handleFocus(){
        inputEl.current.style.backgroundColor ="white"
    }
  return (
    <div>
      <input ref={inputEl} type="text" onFocus={handleFocus} onBlur={handleBlur} />
    </div>
  )
}

export default UseRefEx2

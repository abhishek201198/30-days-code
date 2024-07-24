import React, { forwardRef, useImperativeHandle,useState } from 'react'


const Child = (props,ref) => {
    const [openModal, setOpenModal] = useState(false)
    
    useImperativeHandle(ref,()=>({
        openModal:(value) => setOpenModal(value),
    }))
    if(!openModal){
        return null; 
    }
  
  return (
    <div>
      <p>this is Modal</p>
      <button onClick={() => setOpenModal(false)}>Closed</button>
    </div>
  )
}

export default forwardRef(Child)

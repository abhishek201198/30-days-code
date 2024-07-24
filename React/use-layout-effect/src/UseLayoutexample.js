import React, {useEffect, useLayoutEffect} from 'react'

const UseLayoutexample = () => {
    useEffect(()=>{
        console.log('use Effect part')
    },[]);

    useLayoutEffect(()=>{
        console.log('use LayoutEffect part')
    },[]);
    useEffect(()=>{
        console.log('use Effect part')
    },[]);

    useLayoutEffect(()=>{
        console.log('use LayoutEffect part')
    },[]);
    useEffect(()=>{
        console.log('use Effect part')
    },[]);

    useLayoutEffect(()=>{
        console.log('use LayoutEffect part')
    },[]);

  return (
    <div>
      
    </div>
  )
}

export default UseLayoutexample

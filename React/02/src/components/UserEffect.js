import React, {useEffect, useState} from 'react'

const UserEffect = () => {

  const[clicked,setClicked] = useState();
  const [count, setCount] = useState(0)

  useEffect(()=>{
   console.log('we r in use State')

   return(
    () =>{
      console.log('return of use')
    }
   )
  },[clicked])

  return (
    <div>
      <button onClick={() => setClicked('subscribe') }>Subscribe</button>
      <br />
      <hr />
      <button onClick={() => setClicked('To') }>To</button>
      <br />
      <hr />
      <button onClick={() => setClicked('myChannel') }>myChannel</button>
      <h1>{clicked}</h1>
      <button onClick={() => {setCount(count+1)}}>INCREMENt</button>
    <h1>{count}</h1>
    </div>
  )
}

export default UserEffect;

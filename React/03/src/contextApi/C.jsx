import React from 'react'
import { GreetContext } from './A'
import { useContext } from 'react'

export default function C() {

  const useCon = useContext(GreetContext);
  console.log(useCon);

  return (
    <div>
    
  <h1>greet: {useCon.greet} {useCon.greet2}</h1>
    
    </div>
  )
}


{/* <GreetContext.Consumer>
      {
        (val) => {
          return  (
            <Greet2Context.Consumer>
              {
                (val2)=>{
                  return  <h1>greet: {val} {val2}</h1>
                }
              }
            </Greet2Context.Consumer>
          )
        }
      }
    </GreetContext.Consumer> */}
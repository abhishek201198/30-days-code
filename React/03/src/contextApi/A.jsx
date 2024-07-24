import React from 'react'
import B from "./B"
import { createContext } from 'react'


const GreetContext = createContext();
const Greet2Context = createContext();
export default function A() {

  const greet ="hello"
  const greet2 = "hello2"
  return (
    <div>
      <GreetContext.Provider value  ={{greet,greet2}}>
    
    <B/>
      </GreetContext.Provider>
      
    </div>
  )
}

export {GreetContext};
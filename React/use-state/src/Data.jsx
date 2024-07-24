import React from 'react'
import { useState } from 'react'
import Datas from './Datas.json'

const Data = () => {
    const [nData, setnData] =useState(Datas);
    const handleRemove = (itemId) => {
        setnData(nData.filter(items => 
            items.id !== itemId))
    }
    const handleUpdate = (itemId) => {
     setnData(nData.map(items => {
        if(items.id === itemId) {
            return{name: "newname"}
        } else {
            return items
        }
     }))
    }
    // console.log(useState(Datas))
  return (
    <div>
      <ul>
        {
            nData.map(items =>
                <li key={items.id}>
                  {items.name}
                  <button onClick={() => handleRemove(items.id)}>remove </button>
                  <button onClick={() => handleUpdate(items.id)}>Update </button>
                </li>
            )
        }
      </ul>
      <button onClick={() => setnData([])}>Clear</button>
    </div>
  )
}

export default Data

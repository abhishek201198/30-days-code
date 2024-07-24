import React,{useState} from 'react'
import Datas from './Datas.json'

function Data() {
  const [nData, setnData] = useState(Datas);
  // console.log(Datas)

  // const handleT = ()=> {
  //   setnData([]);
  // }

  const removeClick = (itemsId)=>{
   setnData(nData.filter((items) => items.id!==itemsId))
  }
  const handleUpdate = (itemsId) => {
    setnData(nData.map(items =>{
      if(items.id === itemsId){
        return{name:"newName"}
      } else{
        return  items;
      }
    }))
  }
  return (
    <div>
      <ul>
        {nData.map(items =>
             <li key={items.id}>
                {items.name}
                <br />
                <button onClick={ ()=> removeClick(items.id)}>Remove</button>
                <button onClick={ ()=> handleUpdate(items.id)}>update</button>
             </li>
        )}
        
      </ul>

      <button onClick={()=> setnData([])} >clear</button>
    </div>
  )
}

export default Data

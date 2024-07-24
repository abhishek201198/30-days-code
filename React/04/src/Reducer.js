import React, {useReducer} from 'react'


// // const reducer = (state, action) =>{
// //     // console.log(state, action)
// //     if(action.type == 'incr'){
// //       return {count: state.count + 1}
// //     } else if( action.type == 'desc'){
// //       return  {count: state.count - 1}
// //         } else{
// //           throw new Error("unsupported click")
// //         }

// // }
// // function Reducer() {



// //     // const [count, setCount] = useState(0);

// //     const [state, dispatch] = useReducer(reducer, {count : 0})

// //     //  reducer function 
// //     //  it is pure function
// //     //  state and action

// //     //  pure function 
// //     //  10+ 10 =20;
// //     //  no side effect

// //     const handleClick = () =>{
// //       dispatch({type:"incr"})
// //     }

// //       const minusClick =() =>{
// //       dispatch({type:'desc'})
// //       }

// //     return (
// //       <div>
// //         <h1>{state.count}</h1>
// //         <button onClick={handleClick}>+</button>
// //         <button onClick={minusClick}>-</button>
// //       </div>
// //     )
// //   }


// // export default Reducer;

// //  Practice


function reducer(state, action){
  if(action.type === "incre"){
    return {count: state.count+1}
  } else if(action.type === "decre"){
    return {count: state.count-1}
  }
}

function Reducer() {

  const [state, dispatch] = useReducer(reducer,{count:0});
  const handleClick = ()=> {
  dispatch({type:"incre"})
  }

  const minusClick = ()=> {
    dispatch({type:"decre"})
  }

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClick}>+</button>
      <button onClick={minusClick}>-</button>
    </div>
  )
}

export default Reducer


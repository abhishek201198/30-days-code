import React from 'react'
import './MobileList.css'

function MobileList(props) {

   
    return (
        <div className='main'>
             {props.greet}
            {console.log(props)}
            <img className='image' src={props.image} alt="" />
            <div>
                <h2>{props.title}</h2>
                <p>{props.price}</p>
                <button>Add to Cart </button>
            </div>


        </div>
    )
}

export default MobileList

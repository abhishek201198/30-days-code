import React, { useEffect } from 'react'
import { useState } from 'react'

const UseEffect = () => {

    const [clicked, setClicked] = useState();
    const [count, setCount] = useState(0)

    useEffect(() => {
        alert('useState')
    },[clicked])

    const Subcribed = () => {
        setClicked('Subcribed')
    }
    const To = () => {
        setClicked('To')
    }
    const DropXout = () => {
        setClicked('DropXout')
    }


    return (
        <div>
            <div>
                <button onClick={Subcribed}>Subscribe</button>
                <br />
                <hr />
                <button onClick={To}>To</button>
                <br />
                <hr />
                <button onClick={DropXout}>DropXout</button>
                <h1>{clicked}</h1>

                <button onClick={() => setCount(count+1)}>Increment</button>
                  <h1>{count}</h1>
            </div>
        </div>
    )
}

export default UseEffect

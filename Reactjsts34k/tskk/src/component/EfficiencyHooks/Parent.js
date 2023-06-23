import React, { useCallback, useState } from 'react'
import CHild from "./CHild"

export default function Parent() {
    const [number,setNumber] = useState(0)
    const [count,setcount] = useState(0)
    const incrementOne =()=>{
        setNumber(number+1)
    }
    // const func=()=>{
    //     console.log("hello")
    // }
    const func = useCallback(()=>{

    },[count])
  return (
    <div>
        <CHild fname={func}/>
        <h1>{number}</h1>
        <button onClick={incrementOne}>Increment karo</button>
    </div>
  )
}

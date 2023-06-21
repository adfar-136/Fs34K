import React, { useEffect, useState } from 'react'

export default function Useeffect() {
    const [count,setCount] =useState(100)
    const [number,setNumber] =useState(0)
    useEffect(()=>{
        console.log("useEffect invoked")
    })
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count-1)}>update count</button>
        <h1>{number}</h1>
        <button onClick={()=>setNumber(number+1)}>update Number</button>
    </div>
  )
}

import React, { useState } from 'react'

export default function COunterfunction() {
    const [count,setCount] = useState(100)
    
  return (
    <div>
        <button onClick={()=>setCount(count-1)}>MinusOne</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>AddOne</button>
    </div>
  )
}

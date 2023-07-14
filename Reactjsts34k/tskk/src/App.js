import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function App() {
  const [count,setCount] = useState(0)
  const [run,setRun] = useState(true)
  useEffect(()=>{
    let interval;
    if(run){
    interval = setInterval(()=>{
      setCount(count+1)
    },1000)
  }
    return ()=>{
      clearInterval(interval)
    }
  })
  const handlePause=()=>{
    setRun(false)
  }
  const handleResume =()=>{
    setRun(true)
  }
  const handleReset= ()=> {
    setCount(0)
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleResume}>Resume</button>

      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

import React,{useCallback, useState} from 'react'
const adfar =new Set()
export default function UseCallback() {
    const [number,setNumber] = useState(0)
    const [count,setcount] = useState(0)
    const incrementNumber =useCallback(()=>{
        setNumber(number+1)
    },[number])
    const decrementNumber =useCallback(()=>{
        setNumber(number-1)
    },[number])
    const incrementCount =useCallback(()=>{
        setcount(count+1)
    },[number])
    const decrementCount =useCallback(()=>{
        setcount(count-1)
    },[count])
    adfar.add(incrementCount)
    adfar.add(decrementCount)
    adfar.add(incrementNumber)
    adfar.add(decrementNumber)
    alert(adfar.size)
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={incrementNumber}>IncrementNumber</button><br />
        <button onClick={decrementNumber}>DecrementNumber</button>
        <h1>{count}</h1>
        <button onClick={incrementCount}>IncrementCount</button><br />
        <button onClick={decrementCount}>DecrementCount</button>
    </div>
  )
}

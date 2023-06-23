import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [count,setCount] = useState(0)
    const [number,setNumber] = useState(100)
    const incrementCount = ()=>{
        setCount(count+1)
    }
    // const isEven =()=>{
    //     let i = 0;
    //     while (i<20000000000) i++;
    //     return count%2 === 0;
    // }
    const isEven = useMemo(()=>{
        let i = 0;
        while(i<20000000000) i++;
        return count%2===0;
    },[count])
    const decrementNumber =()=>{
        setNumber(number-1)
    }
  return (
    <div>
        <h1>Your count is : {count}</h1>
        <button onClick={incrementCount}>Increment Count</button><br />
        <h1>{isEven?"Your Count is : Even":"Your Count is :Odd"} </h1>
        <h1>Your Number is : {number}</h1>
        <button onClick={decrementNumber}>Decrement Number</button>
    </div>
  )
}

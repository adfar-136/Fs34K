import React from 'react'
import { increment,decrement } from './Reduxstore/action'
import { useDispatch, useSelector } from 'react-redux'
export default function Counter() {
    const dispatch = useDispatch()
    const counter = useSelector((state)=>state.counter)
    const handleIncrement = ()=>{
       dispatch(increment())
    }
    const handleDecrement = ()=>{
      dispatch(decrement())
    }
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

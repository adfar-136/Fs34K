import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './action'
export default function Counter() {
    const counter = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={()=>dispatch(increment())}>Like</button>
        <button onClick={()=>dispatch(decrement())}>UnlLike</button>
    </div>
  )
}

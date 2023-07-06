import React from 'react'
import { useSelector } from 'react-redux'

export default function Balance() {
    const amount = useSelector((state)=>state.amount)
  return (
    <div>
        <h1>Bank Balance :Rs {amount}</h1>
    </div>
  )
}

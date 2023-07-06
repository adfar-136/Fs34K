import React from 'react'
import { withdrawMoney,depositMoney } from './ThunkStore/action-creators'
import { useDispatch } from 'react-redux'
export default function ButtonThunk() {
    const dispatch = useDispatch()
    const handleDeposit = ()=>{
        dispatch(depositMoney(1000))
    }
    const handleWithdraw =()=>{
        dispatch(withdrawMoney(1000))
    }
  return (
    <div>
         <button onClick={handleWithdraw}>-</button>
         <h1>update Money</h1>
         <button onClick={handleDeposit}>+</button>
         <button onClick={()=>dispatch(depositMoney(100000))}>++</button>
         <button onClick={()=>dispatch(withdrawMoney(100000))}>--</button>
    </div>
  )
}

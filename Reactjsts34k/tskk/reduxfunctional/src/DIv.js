import React from 'react'
import { useSelector } from 'react-redux'

export default function DIv() {
    const backgrounColor = useSelector((state)=>state.backgroundColor)
    console.log(backgrounColor)
  return (
    <div style={{backgroundColor:backgrounColor,width:"300px",height:"300px"}}>
       <h1>ADfar Rashid</h1>
    </div>
  )
}

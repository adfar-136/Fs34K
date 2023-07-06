import React from 'react'
import { useDispatch } from 'react-redux'
import { setBackgroundColor } from './Colorstore/actionn'
export default function Button({color}) {
    const dispatch = useDispatch()
    const handleColor = ()=>{
        dispatch(setBackgroundColor(color))
    }
  return (
    <div>
        <button onClick={handleColor}>{color}</button>
    </div>
  )
}

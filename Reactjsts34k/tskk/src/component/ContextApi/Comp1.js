import React from 'react'
import Comp2 from './Comp2'

export default function Comp1(props) {
  return (
    <div>
        <h1>{props.fname}</h1>
        <Comp2 count={props.state} setCount={props.setState}/>
    </div>
  )
}

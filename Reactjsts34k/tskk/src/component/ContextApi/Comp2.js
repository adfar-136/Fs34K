import React from 'react'

export default function Comp2(props) {
  return (
    <div>
        <button onClick={()=>props.setCount(props.count + 1)}>Update Count</button>

    </div>
  )
}

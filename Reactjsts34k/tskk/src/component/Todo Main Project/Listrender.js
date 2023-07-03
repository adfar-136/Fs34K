import React from 'react'

export default function Listrender(props) {
  return (
    <div>
        {props.list.map((item)=>{
        return (
            <div key={item.number}>
                {item.title} {item.date.toLocaleDateString()}
            </div>
        )
       })}
       </div>
  )
}

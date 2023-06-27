import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const x = useParams()
    console.log(x)
    
  return (
    <div>
        <h1>Individual user {x.id} </h1>
    </div>
  )
}

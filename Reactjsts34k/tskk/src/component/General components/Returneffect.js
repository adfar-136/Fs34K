import React, { useEffect, useState } from 'react'

export default function Returneffect() {
    const [count,setCount] = useState(0)
    // useEffect(()=>{
    //     console.log("1")
    //     const eventHandler = ()=>console.log("Hello")
    //     document.addEventListener("click",eventHandler)
    //     return ()=>{
    //         console.log("2")
    //         document.removeEventListener("click",eventHandler)
    //     }
    // })
    useEffect(()=>{
        const CI = setInterval(()=>{
            console.log("Hello Adfar")
        },2000)
        return ()=>{
            clearInterval(CI)
        }
        
    })
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
  )
}

import React, { useState } from 'react'
import "../App.css"
export default function Cssclassdynamic() {
    const [currentClass,setCurrentClass] = useState("white")
  return (
    <div className={currentClass}>
        <h1>Adfar rashid</h1>
        <button onClick={()=>setCurrentClass("black")}>Black</button>
        <button>Green</button>
        <button>Blue</button>
        <button>Red</button>
        <button>Pink</button>
        <button>Voilet</button>
        <button>Reset</button>
    </div>
  )
}

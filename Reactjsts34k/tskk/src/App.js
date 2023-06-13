import React, { useState } from 'react'
import "./App.css"

// import ArrayofObjects from './component/ArrayofObjects';
// import Classbased from './component/Classbased';
// import Counter from './component/Counter';
import COunterfunction from './component/COunterfunction';


export default function App() {
  const [color,setColor] = useState("light") 
  return (
    <div className={color}>
      <button onClick={()=>{setColor("dark")}}>Change color</button>
      {/* <ArrayofObjects/> */}
     <COunterfunction/>
      {/* <Classbased name="Adfar" arr={[1,2,3,4,5]}/> */}
      
    
      
    </div>
  )
}

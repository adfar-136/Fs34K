import React, { useState } from 'react'
import Comp1 from './component/ContextApi/Comp1'
const fname = "Adfar"
export default function App() {
  const [count,setCount] = useState(0)
  return (
    <div>
      {count}
      <Comp1 fname={fname} state={count} setState= {setCount}/>
    </div>
  )
}

import React, { createContext, useState } from 'react'
import Consumestate from './Consumestate'
const MyContext = createContext()
// const MyContext1 = createContext()
export default function ContextState() {
    const [state,setState] = useState("Adfar")
    const [name,setName] = useState("Hello")
  return (
    <div>
         <MyContext.Provider value={{state,setState,name,setName}}>
          {/* <MyContext1.Provider value={{name,setName}}>
          <Consumestate/>
          </MyContext1.Provider> */}
          <Consumestate/>
         
         </MyContext.Provider>
       
    </div>
  )
}
export {MyContext}
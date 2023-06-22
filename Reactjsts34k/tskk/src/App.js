import React, { createContext } from 'react'
import Comp1 from './component/ContextApi/Comp1'
import ContextState from './component/ContextState/ContextState'
const FirstName = createContext()
const LastName = createContext()
const MiddleName = createContext()
export default function App() {
  return (
    <div>
      <FirstName.Provider value={"Adfar"}>
        <LastName.Provider value={"Khan"}>
          <MiddleName.Provider value={"Rashid"}>
          <Comp1/>
          </MiddleName.Provider>
        </LastName.Provider>
      </FirstName.Provider>
      <ContextState/>
     
    </div>
  )
}
export {FirstName,LastName,MiddleName}
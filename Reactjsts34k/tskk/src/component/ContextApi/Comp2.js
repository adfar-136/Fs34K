import React, { useContext } from 'react'
import Comp3 from './Comp3'
import { FirstName,LastName,MiddleName } from '../../App'
export default function Comp2() {
  const fname = useContext(FirstName)
  const mname = useContext(MiddleName)
  const lname = useContext(LastName)
  return (
    <div>
      <h1>Welcome {fname} {mname} {lname}</h1>
      <Comp3/>
    </div>
  )
}

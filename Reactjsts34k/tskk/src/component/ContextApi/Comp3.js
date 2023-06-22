import React from 'react'
import {FirstName,LastName,MiddleName} from "../../App"
export default function Comp3() {
  return (
    <div>
        <FirstName.Consumer>
            {(fname)=>{
                return (
                    <LastName.Consumer>
                        {(lname)=>{
                            return (
                                 <MiddleName.Consumer>
                                    {(mname)=>{
                                        return (
                                            <h1>My full Name is : {fname} {mname} {lname}</h1>
                                        )
                                    }}
                                 </MiddleName.Consumer>
                            )
                        }}
                    </LastName.Consumer>
                )
            }}
        </FirstName.Consumer>
        
    </div>
  )
}

import React, { useState } from 'react'
import SideNav from './SideNav'
import {auth} from "../../firebase"
import { signOut } from 'firebase/auth'

import MainSection from './MainSection'
import "./Todos.css"
import { useNavigate } from 'react-router-dom'
export default function Todos(props) {
    const [active,setActive] = useState("INBOX")
    const navigate = useNavigate()
    const handleSignout = ()=>{
        signOut(auth).then(()=>{
            navigate("/")
        })
    }
  return (
    <div>
        {props.user ? (
            <header>
                <div className="top">
                <h1>{props.user} Todo Application</h1>
            <button onClick={handleSignout}>SignOut</button>
                </div>
            

            <div className="row">
                <div className="item item1">
                   <SideNav change={setActive}/>
                </div>
                <div className="item item2">
                    <MainSection active={active}/>
                </div>
            </div>

        </header>
        ):(
             <div className='too'>
                <h1>Please login to Access</h1>
            <button onClick={()=>navigate("/login")}>Please login First</button>
            </div>
        )}
    </div>
  )
}

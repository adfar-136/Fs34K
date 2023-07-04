import React from 'react'
import {auth} from "../firebase"
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
export default function Profile(props) {
    const navigate = useNavigate()
    const handleSignout = ()=>{
        signOut(auth).then(()=>{
            navigate("/")
        })
    }
    
  return (
    <div>
        {props.user ? (
            <div>
                <h1>Welcome {props.user}</h1>
                <button onClick={handleSignout}>SignOut</button>
            </div>
        ):(
            <div>
                <button onClick={()=>navigate("/login")}>Please login First</button>
            </div>
        )}
    </div>
  )
}

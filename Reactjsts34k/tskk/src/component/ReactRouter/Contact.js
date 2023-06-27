import React from 'react'

import { Outlet, useNavigate } from 'react-router-dom'

export default function Contact() {
    const navigate = useNavigate()
    const gotoAbout =()=>{
           navigate("/about")
    }
  return (
    <div>
        
        <h1>I am Contact Page</h1>
        <p>sdfdsfsfsdf</p>
        <button onClick={gotoAbout}>goToAbout</button>
        <Outlet/>
    </div>
  )
}

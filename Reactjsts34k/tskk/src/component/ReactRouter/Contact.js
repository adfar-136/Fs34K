import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
    const navigate = useNavigate()
    const gotoAbout =()=>{
           navigate("/about")
    }
  return (
    <div>
        <Header/>
        <h1>I am Contact Page</h1>
        <button onClick={gotoAbout}>goToAbout</button>
    </div>
  )
}

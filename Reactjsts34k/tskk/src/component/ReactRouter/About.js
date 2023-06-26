import React from 'react'

import Header from './Header'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate()
    const gotocontact =()=>{
        navigate('/contact')
    }
  return (
    <div>
         <Header/>
        <h1>I am About Page</h1>
        <button onClick={gotocontact}>GoToContact</button>
    </div>
  )
}

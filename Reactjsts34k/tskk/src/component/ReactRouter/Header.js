import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../../App.css"
export default function Header() {
    const navigate = useNavigate()
    const previouspage = ()=>{
          navigate(-1)
    }
  return (
    <div><header>
    <a href="/">Logo</a>
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink> </li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/section">section</NavLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
            
            <li><NavLink to="/news">News</NavLink></li>
        </ul>
    </nav>
    <button onClick={previouspage}>Previous</button>
</header></div>
  )
}

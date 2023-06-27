import React, { useState } from 'react'

export default function LocalStorage2() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const handleLogin = (e)=>{
        e.preventDefault()
        const userData = {
            name,
            email,
            password
        }
        localStorage.setItem("userData",JSON.stringify(userData))
        setIsLoggedIn(true);
        setName("")
        setPassword("")
        setEmail("")
    }
    const handleLogout = ()=>{
        localStorage.removeItem('userData')
        setIsLoggedIn(false)
    }

  return (
    <div>
        <h1>Adfar Login/logout application</h1>
        {!isLoggedIn?(
            <form>
            <input type="text" placeholder='Enter Your Name' value={name}
            onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder='Enter Your Email' value={email}
            onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Enter your Password' value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </form>
        ):(
            <div>
            <h1>Welcome to my channel</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
        )}
       
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/SignUp/Signup'
import Profile from './components/Profile'
import {auth} from "./firebase"
import { onAuthStateChanged } from 'firebase/auth'
import Todos from './components/Todo Main Project/Todos'

export default function App() {
  const [user,setUser] = useState("")
  useEffect(()=>{
     onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user.displayName)
      }
      else{
        setUser("")
      }
     })
  })
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/profile' element={<Profile user={user}/>}/>
         <Route path='/todo' element={<Todos user={user}/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

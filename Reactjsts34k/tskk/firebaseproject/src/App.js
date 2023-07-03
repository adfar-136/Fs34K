import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/SignUp/Signup'

export default function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

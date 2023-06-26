import React from 'react'
import News from "./component/NewsProject/News"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/ReactRouter/Home'
import About from './component/ReactRouter/About'
import Section from './component/ReactRouter/Section'
import Contact from './component/ReactRouter/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path="section" element={<Section/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='news' element={<News/>}/>
      </Routes>
    </BrowserRouter>
  )
}

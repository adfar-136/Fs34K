import React, { useState } from 'react'
import SideNav from './SideNav'
import MainSection from './MainSection'
import "./Todos.css"
export default function Todos() {
    const [active,setActive] = useState("INBOX")
  return (
    <div>
        <header>
            <h1>Adfar's Todo Application</h1>
            <div className="row">
                <div className="item item1">
                   <SideNav change={setActive}/>
                </div>
                <div className="item item2">
                    <MainSection active={active}/>
                </div>
            </div>
        </header>
    </div>
  )
}

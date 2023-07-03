import React from 'react'

export default function SideNav(props) {
  return (
    <div className='side-nav'>
        <ul className="nav-section">
            <li onClick={()=>{props.change("INBOX")}}>
                <h1>INBOX</h1>
            </li>
            <li onClick={()=>{props.change("TODAY")}}>
                <h1>Today</h1>
            </li>
            <li onClick={()=>{props.change("NEXT")}}>
                <h1>NEXT 7 DAYS</h1>
            </li>

        </ul>
    </div>
  )
}

import React, { useState } from 'react'
import Inbox from './Inbox'
import Today from './Today'
import Next7Days from './Next7Days'
const list = [
    {number:1,title:"Lets Complete this",date:new Date("07/01/2023")},
    {number:2,title:"Should sleep at 9PM",date:new Date("06/23/2022")},
    {number:3,title:"Let us complete React",date:new Date("07/12/2023")},

]
export default function MainSection(props) {
    const [filteredList,setFilteredList] = useState(list)
    const addToList =(obj)=>{
        list.push(obj)
        setFilteredList(list)
    }
  return (
    <div className='main-section'>
    {props.active === "INBOX" && (
        <Inbox list={filteredList} append={addToList}/>
    )}
    {props.active === "TODAY" && (
        <Today list={filteredList}/>
    )}
    {props.active === "NEXT" && (
        <Next7Days list={filteredList}/>
    )}

    </div>
  )
}
